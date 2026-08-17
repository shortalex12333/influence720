"""
Influence 720 — Part D: the corrected GWP pricing engine (DATA_FOUNDATION_BRIEF.md §7), applied
to every coverage in the dataset (flagship premiums are frozen and skipped — see
flagship_and_allocate_v2.py's comment on why). Two passes: (1) assign bound/expiring premiums
from a size/tier-keyed baseline table (reverse-derived from the existing flagship figures where
one exists, labeled [ESTIMATE] where none does), (2) compute unbound gwp_estimate via the three
methods, with Peer Comp averaged from THIS SAME dataset's real pass-1 bound premiums (so it's a
genuine peer average, not a second guess) and an N-based confidence tier per brief §7.4.
"""
import hashlib
from foundation_v2 import (
    RATE_TREND_BY_COVERAGE_TYPE, CREW_MEDICAL_PER_HEAD_RATE, CREW_COMPLEMENT_BY_SIZE,
    peer_comp_confidence, COVERAGE_CATALOG,
)

# ----------------------------------------------------------------------------
# Baseline premium tables. Anchored to the existing flagship bound figures where one exists
# (shown in the comment); [ESTIMATE] where the brief's research found no citable source.
# ----------------------------------------------------------------------------
BASE_PREMIUM_YACHT = {
    # anchors: S4=165000 (Halcyon), S5=240000 (Aurelia bound), S6=310000 (Whisper) — S1/S2/S3/S7 [ESTIMATE]
    "hull_machinery": {"S1": 25000, "S2": 45000, "S3": 90000, "S4": 165000, "S5": 230000, "S6": 310000, "S7": 420000},
    # anchors: S4=58000 (Halcyon), S5=82000 (Aurelia bound), S6=96000 (Whisper) — S1/S2/S3/S7 [ESTIMATE]
    "liability_protection": {"S1": 10000, "S2": 18000, "S3": 35000, "S4": 58000, "S5": 80000, "S6": 96000, "S7": 130000},
}

# 2026-08-16 catalog extension (coverage_research_v2.json) — 7 new yacht coverage_type_ids with
# no anchored bound figure anywhere in the dataset. Rather than hand-build a 7x S1-S7 table
# ([ESTIMATE] end to end either way), price these as a ratio of the SAME size class's
# hull_machinery base — hull is the one yacht line with a real anchored table, and every one of
# these new lines is either a value-matched top-up to hull (marine_war_risk, IV&EL) or a
# liability/activity-adjacent line whose severity scales with vessel size the same way hull does.
# [ESTIMATE] — no source validates these exact ratios; keeps base_premium_for() generic so a
# FUTURE new yacht coverage_type_id (not in this dict either) still prices via the fallback
# ratio below instead of KeyError-ing.
YACHT_ADDON_RATIO_TO_HULL = {
    "marine_war_risk": 0.04,                        # war risk premium is real-world low relative to hull rate
    "increased_value_excess_liabilities": 0.15,      # excess/follow-form layer, thinner rate than primary
    "loss_of_charter_hire": 0.05,
    "pollution_liability": 0.025,
    "crew_employers_liability_jones_act": 0.06,      # scaled off liability_protection's ~0.35x hull ratio, halved for a narrower peril
    "fine_art_marine_rider": 0.03,
    "excess_umbrella_liability": 0.10,
}
YACHT_ADDON_DEFAULT_RATIO = 0.05  # fallback for any yacht coverage_type_id not listed above

AVIATION_TIER_KEYWORDS = {
    "light": ["Sikorsky", "Citation", "H175"],
    "mid": ["Challenger", "Falcon"],
    "heavy": ["Gulfstream", "Global"],
}
# anchors: heavy hull=275000 (Whisper Jet G650)/260000 (Castellane G550); light hull=145000 (Bellweather S-76)
AVIATION_HULL_BASE = {"light": 148000, "mid": 205000, "heavy": 270000}
# ratios reverse-derived from flagship peer_comp/bound figures: liability/hull~0.85-0.94, crew_accident/hull~0.066, war_risk/hull~0.12
# 2026-08-16: 5 new aviation coverage_type_ids added as further ratios-to-hull-base — [ESTIMATE],
# no source validates these exact figures (consistent with the pre-existing 4 ratios above, none
# of which were sourced either).
AVIATION_RATIOS = {
    "aviation_hull": 1.0, "aviation_liability": 0.88, "crew_accident": 0.066, "war_risk": 0.12,
    "non_owned_aircraft_liability": 0.05, "hangarkeepers_liability": 0.03, "loss_of_license": 0.02,
    "guest_voluntary_settlement": 0.015, "trustee_additional_insured_indemnity": 0.01,
}
AVIATION_RATIO_DEFAULT = 0.03  # fallback for any aviation coverage_type_id not listed above

# anchor property ("High-Value Residential", primary): coastal_wind_flood=87000, high_value_property=190000,
# premises_liability=41000 (all reverse-derived from Voss/Chalet's unbound peer_comp estimates in flagship).
# Secondary properties ("Additional Property") scaled to 55% — [ESTIMATE], no source for the exact ratio.
# 2026-08-16: 8 new real_estate coverage_type_ids added at [ESTIMATE] figures scaled to the
# existing anchors' magnitude (coastal_wind_flood/high_value_property/premises_liability),
# reasoned per each line's required_baseline_limit in coverage_research_v2.json.
REAL_ESTATE_BASE = {
    "coastal_wind_flood": 87000, "high_value_property": 190000, "premises_liability": 41000,
    "excess_umbrella_liability": 55000, "excess_flood": 35000, "earthquake_dic": 60000,
    "builders_risk_course_of_construction": 75000, "vacant_unoccupied_dwelling": 8000,
    "equipment_breakdown_service_line": 15000, "domestic_staff_liability": 28000,
    "environmental_pollution_liability": 22000,
}
REAL_ESTATE_DEFAULT_BASE = 30000  # [ESTIMATE] fallback for any real_estate coverage_type_id not listed above
REAL_ESTATE_SECONDARY_FACTOR = 0.55

# anchor: agreed_value_fleet 12-car=88000 -> ~7333/car (Castellane, bound); transit 12-car=12000 -> ~1000/car
# (Castellane, unbound parameter_multiplier). garage_keepers/car: [ESTIMATE], no anchor.
# 2026-08-16: 6 new auto coverage_type_ids added at [ESTIMATE] per-car figures — the existing
# architecture prices every 'auto' vertical coverage per scheduled car (AUTO_PER_CAR[ctype] *
# n_cars), so these follow the same convention even where the real-world line (e.g. excess
# liability) isn't literally rated per-vehicle — consistent with how garage_keepers already does.
AUTO_PER_CAR = {
    "agreed_value_fleet": 7300, "transit": 1000, "garage_keepers": 1800,
    "auto_liability": 900, "uninsured_underinsured_motorist": 300, "excess_umbrella_liability": 1200,
    "track_day_competition_use": 600, "spare_parts_automobilia": 500, "restoration_work_in_progress": 700,
}
AUTO_PER_CAR_DEFAULT = 800  # [ESTIMATE] fallback for any auto coverage_type_id not listed above

# anchor: kr=54000 (Castellane, bound). exec_do=61000, cyber_crime=95000 (Castellane, unbound peer_comp,
# frozen flagship figures — NOT used as this table's basis, just noted). blanket_personal_articles: [ESTIMATE].
# 2026-08-16: 6 new personal coverage_type_ids added at [ESTIMATE] flat figures scaled to the
# existing anchors' magnitude.
PERSONAL_BASE = {
    "kr": 54000, "exec_do": 58000, "cyber_crime": 62000, "blanket_personal_articles": 45000,
    "personal_excess_liability": 42000, "domestic_staff_epli": 18000, "household_workers_comp": 12000,
    "family_office_fiduciary_liability": 35000, "travel_medical_evacuation": 15000, "personal_cyber_liability": 20000,
}
PERSONAL_BASE_DEFAULT = 25000  # [ESTIMATE] fallback for any personal coverage_type_id not listed above

# [ESTIMATE] — no bound fine-art figure exists anywhere in the dataset; both flagship fine-art
# rows are unbound/ghost_policy. Set above the ghost-policy-discounted legacy estimates (~20-25k)
# since this represents a fresh, undiscounted rate.
FINE_ART_BASE = 35000

LEGACY_LAPSED_DISCOUNT = 0.88  # [ESTIMATE] — an old lapsed policy was typically priced somewhat below current rate


def _jitter(seed_key, low=0.85, high=1.15):
    h = int(hashlib.sha256(seed_key.encode()).hexdigest()[:8], 16)
    span = high - low
    return low + (h % 10000) / 10000 * span


def aviation_tier(asset_label):
    for tier, keywords in AVIATION_TIER_KEYWORDS.items():
        if any(k in asset_label for k in keywords):
            return tier
    return "mid"


def crew_medical_premium(size_class, account_id):
    headcount = CREW_COMPLEMENT_BY_SIZE.get(size_class, 8)
    jitter = _jitter(f"{account_id}.crewmed", 0.92, 1.08)
    return round(headcount * CREW_MEDICAL_PER_HEAD_RATE * jitter)


def base_premium_for(cov, account_id, prop_index=1):
    """Bound/expiring baseline premium, or the 'assumed last-known' baseline for ghost-policy pricing."""
    ctype = cov["coverage_type_id"]
    vertical = cov["vertical"]
    seed_key = f"{account_id}.{cov['id']}"
    if vertical == "yacht":
        if ctype == "crew_medical_mlc":
            return None  # handled by crew_medical_premium using the account's size_class, called separately
        size_class = cov.get("_size_class", "S4")
        if ctype in BASE_PREMIUM_YACHT:
            table = BASE_PREMIUM_YACHT[ctype]
            return round(table.get(size_class, table["S4"]) * _jitter(seed_key))
        # generic fallback for every 2026-08-16-added (or future) yacht coverage_type_id: priced
        # as a ratio of the SAME size class's hull_machinery base — see YACHT_ADDON_RATIO_TO_HULL.
        hull_table = BASE_PREMIUM_YACHT["hull_machinery"]
        hull_base = hull_table.get(size_class, hull_table["S4"])
        ratio = YACHT_ADDON_RATIO_TO_HULL.get(ctype, YACHT_ADDON_DEFAULT_RATIO)
        return round(hull_base * ratio * _jitter(seed_key))
    if vertical == "aviation":
        tier = aviation_tier(cov.get("_asset_label", ""))
        base = AVIATION_HULL_BASE[tier] * AVIATION_RATIOS.get(ctype, AVIATION_RATIO_DEFAULT)
        return round(base * _jitter(seed_key))
    if vertical == "real_estate":
        base = REAL_ESTATE_BASE.get(ctype, REAL_ESTATE_DEFAULT_BASE)
        if prop_index > 1:
            base *= REAL_ESTATE_SECONDARY_FACTOR
        return round(base * _jitter(seed_key))
    if vertical == "auto":
        n_cars = cov.get("_car_count", 6)
        return round(AUTO_PER_CAR.get(ctype, AUTO_PER_CAR_DEFAULT) * n_cars * _jitter(seed_key))
    if vertical == "personal":
        return round(PERSONAL_BASE.get(ctype, PERSONAL_BASE_DEFAULT) * _jitter(seed_key))
    if vertical == "fine_art":
        return round(FINE_ART_BASE * _jitter(seed_key))
    raise ValueError(f"unknown vertical for pricing: {vertical}")


def price_bound_coverage(cov, account_id, prop_index=1):
    if cov["coverage_type_id"] == "crew_medical_mlc":
        return crew_medical_premium(cov.get("_size_class", "S4"), account_id)
    return base_premium_for(cov, account_id, prop_index)


def price_ghost_policy(cov, account_id, prop_index=1):
    ctype = cov["coverage_type_id"]
    trend_pct, source = RATE_TREND_BY_COVERAGE_TYPE[ctype]
    if ctype == "crew_medical_mlc":
        assumed_last_known = crew_medical_premium(cov.get("_size_class", "S4"), account_id) * LEGACY_LAPSED_DISCOUNT
    else:
        assumed_last_known = base_premium_for(cov, account_id, prop_index) * LEGACY_LAPSED_DISCOUNT
    estimate = round(assumed_last_known * (1 + trend_pct))
    return estimate, source


# ----------------------------------------------------------------------------
# Limit-adequacy pass (2026-08-16) — bound_limit_usd for every bound/expiring coverage row,
# checked at the forensic-audit layer against foundation_v2.COVERAGE_CATALOG's own
# baseline_limit_usd / baseline_limit_by_tier (structured directly from the same cited
# required_baseline_limit prose the rest of this project already treats as the source of truth).
# ----------------------------------------------------------------------------
_BASELINE_ENTRY_BY_KEY = {
    (vertical, c["coverage_type_id"]): c for vertical, entries in COVERAGE_CATALOG.items() for c in entries
}


def baseline_limit_usd_for(cov):
    """Reads the (vertical, coverage_type_id) baseline off COVERAGE_CATALOG, resolving a tiered
    entry against the coverage's own asset — yacht via _size_class (real S1-S7), aviation via
    aviation_tier(_asset_label) (the same light/mid/heavy split base_premium_for already uses).
    Returns None only for a coverage_type_id genuinely absent from the catalog (should not
    happen — every catalog entry carries one shape or the other, verified at foundation_v2
    load time)."""
    entry = _BASELINE_ENTRY_BY_KEY.get((cov["vertical"], cov["coverage_type_id"]))
    if entry is None:
        return None
    by_tier = entry.get("baseline_limit_by_tier")
    if by_tier:
        if cov["vertical"] == "yacht":
            tier = cov.get("_size_class") or "S4"
        elif cov["vertical"] == "aviation":
            tier = aviation_tier(cov.get("_asset_label", ""))
        else:
            tier = None
        return by_tier.get(tier)
    return entry.get("baseline_limit_usd")


# Deficiency rate = the fraction of a producer's bound/expiring coverage rows that land BELOW
# their tier's baseline_limit_usd — this is the deliberate, grounded variance the task calls
# for, not noise: REP.JACOB's own archetype ("Legacy Book, Decaying Contact" — bound years ago,
# hasn't spoken to the Ring 1 signatory in 8 months, per foundation_v2.PRODUCERS) is the natural
# place for real limit-adequacy drift (stale valuations, un-reviewed towers) to concentrate.
# REP.ALEX's archetype ("High-Yield, Low-Touch ... the ideal state") sits at the opposite end.
# The remaining three producers are graded between the two on their own stated archetype:
# REP.RAHUL (high activity, but almost none of it lands on a signatory who'd catch a stale
# limit), REP.CRISTIAN (single-vertical concentration, has the Ring 1 ear — lower drift),
# REP.NAOMI (rookie, cold/unmapped accounts — moderate drift from simple inexperience, not decay).
PRODUCER_DEFICIENCY_RATE = {
    "Alex": 0.04,
    "Cristian": 0.10,
    "Rahul": 0.14,
    "Naomi": 0.18,
    "Jacob": 0.45,
}
DEFAULT_DEFICIENCY_RATE = 0.15
# an "expiring" policy is, by definition, further from its last review than a freshly bound
# one — nudge the deficiency odds up slightly rather than inventing a second independent driver.
EXPIRING_DEFICIENCY_BUMP = 0.05


def _stable_unit(seed_key):
    """Deterministic pseudo-random float in [0, 1) — same hash-of-string technique as _jitter
    above, so bound_limit_usd is reproducible across re-runs without a shared RNG state."""
    h = int(hashlib.sha256(seed_key.encode()).hexdigest()[:8], 16)
    return (h % 1_000_000) / 1_000_000


def bound_limit_for(cov, account_id, producer_name, status):
    """bound_limit_usd for one bound/expiring coverage row. Draws a deterministic deficient/
    adequate decision keyed off the producer's archetype-grounded PRODUCER_DEFICIENCY_RATE,
    then a deterministic magnitude within the chosen band — deficient: 55-95% of baseline
    (a real, meaningful gap for the audit engine to surface, never a rounding-error miss);
    adequate: 100-155% of baseline (mostly-at-or-modestly-above, not artificially inflated)."""
    baseline = baseline_limit_usd_for(cov)
    if baseline is None:
        return None
    rate = PRODUCER_DEFICIENCY_RATE.get(producer_name, DEFAULT_DEFICIENCY_RATE)
    if status == "expiring":
        rate = min(0.85, rate + EXPIRING_DEFICIENCY_BUMP)
    decision_key = f"{account_id}.{cov['id']}.limit_decision"
    factor_key = f"{account_id}.{cov['id']}.limit_factor"
    is_deficient = _stable_unit(decision_key) < rate
    if is_deficient:
        factor = 0.55 + _stable_unit(factor_key) * 0.40   # [0.55, 0.95)
    else:
        factor = 1.00 + _stable_unit(factor_key) * 0.55   # [1.00, 1.55)
    return round(baseline * factor / 1000) * 1000  # round to nearest $1,000 — clean display figure


def relationship_weight(ring, activity_count_90d, days_since_activity):
    import math
    from foundation_v2 import RING_AUTHORITY_MULTIPLIER, RELATIONSHIP_WEIGHT_W_ACTIVITY, RELATIONSHIP_WEIGHT_W_RECENCY
    mult = RING_AUTHORITY_MULTIPLIER.get(ring, 0.12)
    activity_term = math.log(1 + activity_count_90d)
    recency_term = math.exp(-days_since_activity / 180)
    raw = RELATIONSHIP_WEIGHT_W_ACTIVITY * activity_term + RELATIONSHIP_WEIGHT_W_RECENCY * recency_term * 10
    return round(mult * raw, 2)
