"""
Influence 720 — Part B: (1) re-express the 7 existing hand-authored flagship accounts under the
v2 schema (Policy entities, trigger_type, line_of_business, renamed Liability Protection,
Fine Art as its own asset class) WITHOUT changing any dollar figure — those numbers are quoted
verbatim in 01-plan/influence720-dashboard-plan.md's "payoff sentence" and in
03-architecture/PHASED_BUILD_PLAN.md's cross_pollination edge examples, so touching them would
desync the product narrative across three documents for no benefit. (2) deterministically
allocate 143 NEW account shells per DATA_FOUNDATION_BRIEF.md §5's maximal-tier targets, for the
narrative-authoring agent fan-out to fill in.
"""
import json
import random
from foundation_v2 import (
    BUILD_DIR, COVERAGE_CATALOG, ROLE_TAXONOMY, PRODUCERS,
    unique_surname_pool, RATE_TABLE_AS_OF, TEMPLATE_ROLE_META,
)
from pricing_v2 import bound_limit_for

# ============================================================================
# 2026-08-16 — flagship roles are hand-authored ("Sarah Kellerman — General Counsel"), not
# generated from ROLE_TAXONOMY, so they have no clean `title` field to key TEMPLATE_ROLE_META by.
# Hand-mapped once, to the closest template role title (verified against each role's own ring +
# segment + label text) so firms/vessel_relevance/coi_influence/subgroup still propagate onto
# these 20 real instances exactly as they do for the 143 generated accounts. Frozen alongside the
# id/label/desc/dollar data this file already preserves verbatim — never touch the FLAGSHIP_RAW
# tuples themselves for this, layer it on separately here.
# ============================================================================
FLAGSHIP_ROLE_TEMPLATE_TITLE = {
    "OWN.7": "Admiralty / Maritime Counsel",
    "OWN.9": "Owner's Representative",
    "OWN.12": "Owner's Representative",
    "MCR.2.WHISPER": "Captain / Master",
    "OWN.7.MERIDIAN": "Owner's Representative",
    "MCR.2.SOLSTICE": "Captain / Master",
    "MCR.3.SOLSTICE": "Chief Engineer",
    "OWN.9.HARTWELL": "Owner's Representative",
    "MCR.2.AURELIA": "Captain / Master",
    "MCR.4.AURELIA": "Electro-Technical Officer",
    "MCR.6.AURELIA": "Bosun",
    "OWN.9.VOSS": "Owner's Representative",
    "OWN.9.OKONKWO": "Owner's Representative",
    "AVI.RISK.CASTELLANE": "Aircraft Management Company Account Contact",
    "AVI.PILOT.CASTELLANE": "Chief Pilot / PIC-Captain",
    "AVI.RISK.BELLWEATHER": "Aircraft Management Company Account Contact",
    "AVI.PILOT.BELLWEATHER": "Chief Pilot / PIC-Captain",
    "RE.PM.VOSS": "Property Manager",
    "AUTO.MGR.CASTELLANE": "Collection Advisor",
    "PER.EA.CASTELLANE": "Chief of Staff",
}

random.seed(720721)

# Build a coverage_type_id -> {trigger_type, line_of_business, vertical, label} lookup from the
# new COVERAGE_CATALOG, so old bare coverage_type_id strings upgrade automatically and consistently.
COV_LOOKUP = {}
for vertical, rows in COVERAGE_CATALOG.items():
    for r in rows:
        COV_LOOKUP[r["coverage_type_id"]] = {**r, "vertical": vertical}

# Old->new coverage_type_id renames (P&I -> Liability Protection, brief §6 item 5)
COV_TYPE_RENAME = {"pi": "liability_protection"}


def upgrade_coverage_type(old_type_id):
    return COV_TYPE_RENAME.get(old_type_id, old_type_id)


# ============================================================================
# The 7 existing flagship accounts, transcribed verbatim from
# 05-build/generator/gen_720_dataset.py (the prior build's hand-authored narrative content) —
# every id, name, dollar figure, and evidence_note preserved exactly. Only new v2 fields are added.
# ============================================================================

FLAGSHIP_RAW = {
    "principals": [
        {"id": "PRIN.MARCHETTI", "label": "Marchetti Family Trust", "vertical": "yacht", "producer_id": "REP.SABINE",
         "desc": "Apex — UBO, Whisper/Gulfstream ownership structure."},
        {"id": "PRIN.MERIDIAN", "label": "Meridian Family Office", "vertical": "yacht", "producer_id": "REP.THEA",
         "desc": "Apex — UBO, M/Y Solstice."},
        {"id": "PRIN.HARTWELL", "label": "Hartwell Holdings", "vertical": "yacht", "producer_id": "REP.VAUGHN",
         "desc": "Apex — UBO, M/Y Aurelia."},
        {"id": "PRIN.VOSS", "label": "Voss Family Trust", "vertical": "yacht", "producer_id": "REP.ELLERY",
         "desc": "Apex — UBO, M/Y Halcyon + Aspen chalet."},
        {"id": "PRIN.CASTELLANE", "label": "Castellane Trust", "vertical": "aviation", "producer_id": "REP.SABINE",
         "desc": "Apex — UBO, Gulfstream G550 + hypercar collection + personal risk program."},
        {"id": "PRIN.BELLWEATHER", "label": "Bellweather Family Office", "vertical": "aviation", "producer_id": "REP.THEA",
         "desc": "Apex — UBO, Sikorsky S-76."},
        {"id": "PRIN.OKONKWO", "label": "Okonkwo Family Trust", "vertical": "yacht", "producer_id": "REP.VAUGHN",
         "desc": "Apex — UBO, M/Y Meridian II (lapsed/lost account)."},
    ],
    "roles": [
        ("OWN.7", "Sarah Kellerman — General Counsel", "yacht", 1, 2, "signatory",
         "GC for the Marchetti Family Office. Dual-hat: also the Aviation program's risk buyer of record for the Gulfstream.", 9, 6, "Legal & Finance"),
        ("OWN.9", "Elena Marchetti — SPV Director", "yacht", 1, 1, "signatory",
         "Yacht-owning SPV Director, Marchetti structure.", 8, 7, "Ownership & Structure"),
        ("OWN.12", "Richard Voss — Trustee", "yacht", 1, 1, "signatory",
         "Trustee, Voss Family Trust — controls both the yacht SPV and the Aspen real-estate holding.", 9, 6, "Ownership & Structure"),
        ("MCR.2.WHISPER", "Capt. James Doyle", "yacht", 1, 7, "signatory", "Captain, M/Y Whisper.", 10, 10, "Operations & Crew"),
        ("OWN.7.MERIDIAN", "Diane Foster — Trustee", "yacht", 1, 1, "signatory",
         "Trustee, Meridian Family Office. Ring-1 signatory on M/Y Solstice — comm frequency has decayed to zero over the last 8 months.", 9, 6, "Ownership & Structure"),
        ("MCR.2.SOLSTICE", "Capt. Owen Rees", "yacht", 1, 7, "signatory", "Captain, M/Y Solstice.", 9, 10, "Operations & Crew"),
        ("MCR.3.SOLSTICE", "Chief Eng. Priya Deshmukh", "yacht", 1, 7, "signatory", "Chief Engineer, M/Y Solstice.", 8, 9, "Operations & Crew"),
        ("OWN.9.HARTWELL", "Nigel Ashworth — SPV Director", "yacht", 1, 1, "signatory", "SPV Director, Hartwell Holdings.", 8, 7, "Ownership & Structure"),
        ("MCR.2.AURELIA", "Capt. Lena Brandt", "yacht", 1, 7, "signatory",
         "Captain, M/Y Aurelia — high-frequency contact, no purchasing authority.", 9, 10, "Operations & Crew"),
        ("MCR.4.AURELIA", "ETO Sam Whitfield", "yacht", 2, 7, "conditional",
         "ETO, M/Y Aurelia — high-frequency contact, no purchasing authority.", 5, 8, "Operations & Crew"),
        ("MCR.6.AURELIA", "Bosun Theo Marsh", "yacht", 3, 7, "transaction",
         "Bosun, M/Y Aurelia — high-frequency contact, no purchasing authority.", 3, 7, "Operations & Crew"),
        ("OWN.9.VOSS", "Isabelle Voss — SPV Director", "yacht", 1, 1, "signatory",
         "Yacht SPV Director, also sits on the family trust's real-estate holding entity.", 8, 7, "Ownership & Structure"),
        ("OWN.9.OKONKWO", "Chidi Okonkwo — SPV Director", "yacht", 1, 1, "signatory",
         "SPV Director, Okonkwo Family Trust — account fully lapsed 14 months ago.", 7, 2, "Ownership & Structure"),
        ("AVI.RISK.CASTELLANE", "Marcus Delacroix — Family Office Risk Manager", "aviation", 1, 9, "signatory",
         "Aviation program risk buyer, Castellane Trust.", 9, 6, "Back-Office & Third-Party Management"),
        ("AVI.PILOT.CASTELLANE", "Chief Pilot Renata Solis", "aviation", 1, 7, "conditional", "Chief Pilot, Castellane G550.", 6, 8, "Operations & Crew"),
        ("AVI.RISK.BELLWEATHER", "Howard Ngata — Family Office Risk Manager", "aviation", 1, 9, "signatory",
         "Aviation program risk buyer, Bellweather Family Office.", 9, 6, "Back-Office & Third-Party Management"),
        ("AVI.PILOT.BELLWEATHER", "Chief Pilot Dana Okafor", "aviation", 1, 7, "conditional", "Chief Pilot, Bellweather S-76.", 6, 8, "Operations & Crew"),
        ("RE.PM.VOSS", "Fiona Aldridge — Property Manager", "real_estate", 1, 9, "conditional",
         "Property Manager, Aspen chalet, Voss Family Trust.", 6, 6, "Back-Office & Third-Party Management"),
        ("AUTO.MGR.CASTELLANE", "Devon Pratt — Collection Advisor", "auto", 1, 9, "conditional",
         "Manages the 12-car hypercar collection, Castellane Trust.", 5, 5, "Back-Office & Third-Party Management"),
        ("PER.EA.CASTELLANE", "Odette Vance — Chief of Staff", "personal", 2, 1, "conditional",
         "Chief of Staff to the Castellane principal — gatekeeper for personal-risk conversations.", 6, 7, "Ownership & Structure"),
    ],
    # (asset_id, label, vertical, owner_ref, asset_class, size_class)
    "assets": [
        ("AST.WHISPER.YACHT", "M/Y Whisper, 70m", "yacht", "PRIN.MARCHETTI", "70m Superyacht", "S6"),
        ("AST.WHISPER.JET", "Gulfstream G650", "aviation", "PRIN.MARCHETTI", "Long-range business jet", "N/A"),
        ("AST.SOLSTICE.YACHT", "M/Y Solstice, 55m", "yacht", "PRIN.MERIDIAN", "55m Superyacht", "S5"),
        ("AST.AURELIA.YACHT", "M/Y Aurelia, 62m", "yacht", "PRIN.HARTWELL", "62m Superyacht", "S5"),
        ("AST.HALCYON.YACHT", "M/Y Halcyon, 45m", "yacht", "PRIN.VOSS", "45m Superyacht", "S4"),
        ("AST.VOSS.CHALET", "Aspen Ski Chalet", "real_estate", "PRIN.VOSS", "High-Value Residential", "N/A"),
        ("AST.CASTELLANE.JET", "Gulfstream G550", "aviation", "PRIN.CASTELLANE", "Long-range business jet", "N/A"),
        ("AST.CASTELLANE.AUTO", "12-Car Hypercar Collection", "auto", "PRIN.CASTELLANE", "Curated Collection", "N/A"),
        ("AST.BELLWEATHER.HELI", "Sikorsky S-76", "aviation", "PRIN.BELLWEATHER", "Helicopter", "N/A"),
        ("AST.OKONKWO.YACHT", "M/Y Meridian II, 38m", "yacht", "PRIN.OKONKWO", "38m Yacht", "S4"),
        # Fine Art is now its own asset class (brief §6 item 6) — not nested under the yacht.
        ("AST.WHISPER.FINEART", "Marchetti Scheduled Fine Art Collection", "fine_art", "PRIN.MARCHETTI", "Scheduled Fine Art", "N/A"),
        ("AST.AURELIA.FINEART", "Hartwell Scheduled Fine Art Collection", "fine_art", "PRIN.HARTWELL", "Scheduled Fine Art", "N/A"),
        # Exec D&O / Cyber / K&R are entity/person-triggered — attach directly to the principal via a
        # nominal "Personal Risk Program" asset shell so the existing Coverage->parent_asset_ref FK
        # shape still holds, brief §6 item 4/7 (trigger_type carries the real semantics; this asset
        # is a thin structural placeholder, not a physical asset).
        ("AST.CASTELLANE.PERSONAL", "Castellane Personal & Executive Risk Program", "personal", "PRIN.CASTELLANE", "Executive Risk Program", "N/A"),
    ],
    # (coverage_id, label, old_coverage_type_id, parent_asset_ref)
    "coverages": [
        ("COV.WHISPER.HULL", "Hull & Machinery", "hull_machinery", "AST.WHISPER.YACHT"),
        ("COV.WHISPER.PI", "Liability Protection", "pi", "AST.WHISPER.YACHT"),
        ("COV.WHISPER.CREWMED", "Crew Medical (MLC)", "crew_medical_mlc", "AST.WHISPER.YACHT"),
        ("COV.WHISPER.FINEART", "Fine Art (Scheduled)", "fine_art_scheduled", "AST.WHISPER.FINEART"),
        ("COV.WHISPERJET.HULL", "Aviation Hull", "aviation_hull", "AST.WHISPER.JET"),
        ("COV.WHISPERJET.LIAB", "Aviation Liability", "aviation_liability", "AST.WHISPER.JET"),
        ("COV.WHISPERJET.CREWACC", "Crew Accident", "crew_accident", "AST.WHISPER.JET"),
        ("COV.WHISPERJET.WAR", "War Risk", "war_risk", "AST.WHISPER.JET"),
        ("COV.SOLSTICE.HULL", "Hull & Machinery", "hull_machinery", "AST.SOLSTICE.YACHT"),
        ("COV.SOLSTICE.PI", "Liability Protection", "pi", "AST.SOLSTICE.YACHT"),
        ("COV.SOLSTICE.CREWMED", "Crew Medical (MLC)", "crew_medical_mlc", "AST.SOLSTICE.YACHT"),
        ("COV.AURELIA.HULL", "Hull & Machinery", "hull_machinery", "AST.AURELIA.YACHT"),
        ("COV.AURELIA.PI", "Liability Protection", "pi", "AST.AURELIA.YACHT"),
        ("COV.AURELIA.CREWMED", "Crew Medical (MLC)", "crew_medical_mlc", "AST.AURELIA.YACHT"),
        ("COV.AURELIA.FINEART", "Fine Art (Scheduled)", "fine_art_scheduled", "AST.AURELIA.FINEART"),
        ("COV.HALCYON.HULL", "Hull & Machinery", "hull_machinery", "AST.HALCYON.YACHT"),
        ("COV.HALCYON.PI", "Liability Protection", "pi", "AST.HALCYON.YACHT"),
        ("COV.CHALET.WINDFLOOD", "Coastal Wind/Flood", "coastal_wind_flood", "AST.VOSS.CHALET"),
        ("COV.CHALET.PROPERTY", "High-Value Property", "high_value_property", "AST.VOSS.CHALET"),
        ("COV.CHALET.LIAB", "Premises Liability", "premises_liability", "AST.VOSS.CHALET"),
        ("COV.CASTJET.HULL", "Aviation Hull", "aviation_hull", "AST.CASTELLANE.JET"),
        ("COV.CASTJET.LIAB", "Aviation Liability", "aviation_liability", "AST.CASTELLANE.JET"),
        ("COV.CASTJET.CREWACC", "Crew Accident", "crew_accident", "AST.CASTELLANE.JET"),
        ("COV.CASTAUTO.FLEET", "Agreed Value Fleet", "agreed_value_fleet", "AST.CASTELLANE.AUTO"),
        ("COV.CASTAUTO.TRANSIT", "Transit", "transit", "AST.CASTELLANE.AUTO"),
        ("COV.CASTPER.KR", "Kidnap & Ransom (K&R)", "kr", "AST.CASTELLANE.PERSONAL"),
        ("COV.CASTPER.DO", "Executive D&O", "exec_do", "AST.CASTELLANE.PERSONAL"),
        ("COV.CASTPER.CYBER", "Cyber Crime", "cyber_crime", "AST.CASTELLANE.PERSONAL"),
        ("COV.BWHELI.HULL", "Aviation Hull", "aviation_hull", "AST.BELLWEATHER.HELI"),
        ("COV.BWHELI.LIAB", "Aviation Liability", "aviation_liability", "AST.BELLWEATHER.HELI"),
        ("COV.OKONKWO.HULL", "Hull & Machinery", "hull_machinery", "AST.OKONKWO.YACHT"),
        ("COV.OKONKWO.PI", "Liability Protection", "pi", "AST.OKONKWO.YACHT"),
    ],
    # (coverage_id, status, responsible_node_id, bound_premium, carrier, gwp_estimate, gwp_method,
    #  unbound_reason, evidence_note, expiry_date, producer_of_record)
    "bound": [
        ("COV.WHISPER.HULL", "bound", "OWN.9", 310000, "Example Underwriters Ltd", None, None, None, None, "2027-02-01", "Sabine"),
        ("COV.WHISPER.PI", "bound", "OWN.9", 96000, "Example Underwriters Ltd", None, None, None, None, "2027-02-01", "Sabine"),
        ("COV.WHISPER.CREWMED", "bound", "MCR.2.WHISPER", 41800, "Example Underwriters Ltd", None, None, None, None, "2027-02-01", "Sabine"),
        ("COV.WHISPER.FINEART", "unbound", "MCR.2.WHISPER", None, None, 20225, "ghost_policy", "lapsed_with_us",
         "Bound with us 2022-2024 at $18,000, allowed to lapse at 2024 renewal.", None, None),
        ("COV.WHISPERJET.HULL", "bound", "OWN.7", 275000, "Example Underwriters Ltd", None, None, None, None, "2027-04-15", "Sabine"),
        ("COV.WHISPERJET.LIAB", "unbound", "OWN.7", None, None, 250000, "peer_comp", "never_written", None, None, None),
        ("COV.WHISPERJET.CREWACC", "bound", "OWN.7", 18500, "Example Underwriters Ltd", None, None, None, None, "2027-04-15", "Sabine"),
        ("COV.WHISPERJET.WAR", "unbound", "OWN.7", None, None, 34000, "peer_comp", "competitor_held",
         "Salesforce call note (2026-06-02, Sabine): client mentioned current War Risk coverage through Global Aerospace — displacement opportunity, NOT unpriced risk.", None, None),
        ("COV.SOLSTICE.HULL", "expiring", "OWN.7.MERIDIAN", 198000, "Northbridge Marine", None, None, None, None, "2026-10-01", "Thea"),
        ("COV.SOLSTICE.PI", "expiring", "OWN.7.MERIDIAN", 71000, "Northbridge Marine", None, None, None, None, "2026-10-01", "Thea"),
        ("COV.SOLSTICE.CREWMED", "expiring", "MCR.2.SOLSTICE", 30600, "Northbridge Marine", None, None, None, None, "2026-10-01", "Thea"),
        ("COV.AURELIA.HULL", "bound", "OWN.9.HARTWELL", 240000, "Northbridge Marine", None, None, None, None, "2027-01-15", "Vaughn"),
        ("COV.AURELIA.PI", "bound", "OWN.9.HARTWELL", 82000, "Northbridge Marine", None, None, None, None, "2027-01-15", "Vaughn"),
        ("COV.AURELIA.CREWMED", "unbound", "MCR.2.AURELIA", None, None, 33400, "parameter_multiplier", "never_written", None, None, None),
        ("COV.AURELIA.FINEART", "unbound", "OWN.9.HARTWELL", None, None, 24800, "peer_comp", "never_written", None, None, None),
        ("COV.HALCYON.HULL", "bound", "OWN.9.VOSS", 165000, "Example Underwriters Ltd", None, None, None, None, "2027-03-01", "Ellery"),
        ("COV.HALCYON.PI", "bound", "OWN.9.VOSS", 58000, "Example Underwriters Ltd", None, None, None, None, "2027-03-01", "Ellery"),
        ("COV.CHALET.WINDFLOOD", "unbound", "RE.PM.VOSS", None, None, 87000, "peer_comp", "never_written", None, None, None),
        ("COV.CHALET.PROPERTY", "unbound", "OWN.9.VOSS", None, None, 190000, "peer_comp", "never_written", None, None, None),
        ("COV.CHALET.LIAB", "unbound", "RE.PM.VOSS", None, None, 41000, "peer_comp", "never_written", None, None, None),
        ("COV.CASTJET.HULL", "bound", "AVI.RISK.CASTELLANE", 260000, "Example Underwriters Ltd", None, None, None, None, "2027-05-01", "Sabine"),
        ("COV.CASTJET.LIAB", "unbound", "AVI.RISK.CASTELLANE", None, None, 245000, "peer_comp", "never_written", None, None, None),
        ("COV.CASTJET.CREWACC", "bound", "AVI.RISK.CASTELLANE", 17200, "Example Underwriters Ltd", None, None, None, None, "2027-05-01", "Sabine"),
        ("COV.CASTAUTO.FLEET", "bound", "AUTO.MGR.CASTELLANE", 88000, "Northbridge Marine", None, None, None, None, "2027-06-01", "Sabine"),
        ("COV.CASTAUTO.TRANSIT", "unbound", "AUTO.MGR.CASTELLANE", None, None, 12000, "parameter_multiplier", "never_written", None, None, None),
        ("COV.CASTPER.KR", "bound", "PER.EA.CASTELLANE", 54000, "Example Underwriters Ltd", None, None, None, None, "2027-06-01", "Sabine"),
        ("COV.CASTPER.DO", "unbound", "PER.EA.CASTELLANE", None, None, 61000, "peer_comp", "never_written", None, None, None),
        ("COV.CASTPER.CYBER", "unbound", "AVI.RISK.CASTELLANE", None, None, 95000, "peer_comp", "never_written", None, None, None),
        ("COV.BWHELI.HULL", "bound", "AVI.RISK.BELLWEATHER", 145000, "Example Underwriters Ltd", None, None, None, None, "2027-07-01", "Thea"),
        ("COV.BWHELI.LIAB", "unbound", "AVI.RISK.BELLWEATHER", None, None, 118000, "peer_comp", "never_written", None, None, None),
        ("COV.OKONKWO.HULL", "unbound", "OWN.9.OKONKWO", None, None, 142000, "ghost_policy", "lapsed_with_us",
         "Entire account lapsed 14 months ago — full win-back, not a line-item upsell.", None, None),
        ("COV.OKONKWO.PI", "unbound", "OWN.9.OKONKWO", None, None, 48000, "ghost_policy", "lapsed_with_us",
         "Entire account lapsed 14 months ago — full win-back, not a line-item upsell.", None, None),
    ],
    "knows_edges": [
        ("E.001", "OWN.9", "yacht", "OWN.12", "yacht", "SPV Director reports to Trustee as sole shareholder of the SPV.", "transaction-triggered"),
        ("E.002", "OWN.12", "yacht", "OWN.7", "yacht", "Trust deed compliance: GC opinion required on every material transaction.", "transaction-triggered"),
        ("E.003", "MCR.2.WHISPER", "yacht", "OWN.9", "yacht", "Captain briefs SPV Director on vessel status and operational matters.", "weekly"),
        ("E.004", "OWN.7.MERIDIAN", "yacht", "MCR.2.SOLSTICE", "yacht", "Trustee receives operational briefs from Captain — has gone quiet for 8 months.", "should be weekly, now silent"),
        ("E.005", "OWN.9.VOSS", "yacht", "RE.PM.VOSS", "real_estate", "Same family trust structure — SPV Director oversees both the yacht and the RE property manager's reporting line.", "quarterly"),
    ],
    "cross_pollination_edges": [
        ("E.101", "OWN.7", "yacht", "COV.WHISPERJET.LIAB", "aviation",
         "Same individual (Sarah Kellerman) is Ring-1 GC for the yacht's Trust AND the Aviation program's risk buyer of record for the Gulfstream.",
         {"ring": 1, "coi_weight": 9},
         "Because Sabine has a Ring 1 relationship with the Yacht's General Counsel, we have a direct, warm path to capture the $250,000 Aviation Liability policy on their Gulfstream."),
        ("E.102", "OWN.9.VOSS", "yacht", "COV.CHALET.PROPERTY", "real_estate",
         "Isabelle Voss (yacht SPV Director) also sits on the family trust entity that owns the Aspen chalet — same warm path, unexploited by Ellery to date.",
         {"ring": 1, "coi_weight": 8},
         "Because Ellery already has a Ring 1 relationship on the Voss yacht SPV, the same relationship is a direct path to the untouched $190,000 High-Value Property program on their Aspen chalet."),
        ("E.103", "AVI.RISK.CASTELLANE", "aviation", "COV.CASTPER.CYBER", "personal",
         "Marcus Delacroix (Aviation risk buyer) also sits on the Castellane Trust's personal-risk committee.",
         {"ring": 1, "coi_weight": 8},
         "Because Sabine has a Ring 1 relationship with Castellane's Aviation risk buyer, the same relationship reaches the unbound $95,000 Cyber Crime line on their personal risk program."),
    ],
    # 8-tuples: (producer_id, node_id, weight, activity_count_90d, last_activity_date,
    #            calls_logged, emails_sent, meetings_held) — the 3 channel fields are
    #            hand-judged per CHANNEL SPLIT PLAN flagship_rows and always sum exactly
    #            to activity_count_90d.
    "relationship_weights": [
        ("REP.SABINE", "OWN.9", 8.7, 14, "2026-08-10", 6, 3, 5), ("REP.SABINE", "MCR.2.WHISPER", 5.1, 6, "2026-08-05", 3, 2, 1),
        ("REP.SABINE", "AVI.RISK.CASTELLANE", 8.2, 11, "2026-08-09", 5, 3, 3), ("REP.SABINE", "PER.EA.CASTELLANE", 6.4, 7, "2026-07-28", 3, 3, 1),
        ("REP.VAUGHN", "MCR.2.AURELIA", 6.8, 40, "2026-08-13", 18, 16, 6), ("REP.VAUGHN", "MCR.4.AURELIA", 5.5, 55, "2026-08-14", 22, 26, 7),
        ("REP.VAUGHN", "MCR.6.AURELIA", 4.2, 61, "2026-08-14", 28, 27, 6),
        ("REP.THEA", "MCR.2.SOLSTICE", 4.4, 5, "2026-07-20", 2, 2, 1), ("REP.THEA", "MCR.3.SOLSTICE", 3.8, 4, "2026-07-18", 1, 2, 1),
        ("REP.THEA", "AVI.RISK.BELLWEATHER", 7.9, 9, "2026-08-11", 4, 3, 2),
        ("REP.ELLERY", "OWN.9.VOSS", 9.1, 16, "2026-08-12", 6, 4, 6), ("REP.ELLERY", "OWN.12", 3.0, 2, "2026-05-01", 1, 1, 0),
    ],
    "referral_edges": [
        ("REF.001", "REP.SABINE", "OWN.9", "MCR.2.WHISPER", "2026-03-14", "SPV Director introduced Sabine to the Captain at haul-out."),
        ("REF.002", "REP.ELLERY", "OWN.9.VOSS", "OWN.12", "2026-01-09", "SPV Director introduced Ellery to the family Trustee."),
    ],
    "account_producer_map": [
        ("PRIN.MARCHETTI", "REP.SABINE"), ("PRIN.MERIDIAN", "REP.THEA"), ("PRIN.HARTWELL", "REP.VAUGHN"),
        ("PRIN.VOSS", "REP.ELLERY"), ("PRIN.CASTELLANE", "REP.SABINE"), ("PRIN.BELLWEATHER", "REP.THEA"),
        ("PRIN.OKONKWO", "REP.VAUGHN"),
    ],
}


def build_flagship_json():
    nodes = []
    for p in FLAGSHIP_RAW["principals"]:
        nodes.append({
            "id": p["id"], "label": p["label"], "node_type": "principal", "vertical": p["vertical"],
            "ring": 0, "domain": 1, "coi_type": "signatory", "coi_weight": 10, "coi_freq": 3,
            "desc": p["desc"], "category": "Ownership & Structure", "account_ref": p["id"],
        })
    # Explicit account_ref per role, matched against each role's OWN label/desc text (not the
    # brittle id-suffix-parsing the prior HTML build used, which silently dropped every one of
    # the 143 new accounts' roles — see dashboard1's now-removed ACCOUNT_ALIAS table).
    ROLE_ACCOUNT_REF = {
        "OWN.7": "PRIN.MARCHETTI", "OWN.9": "PRIN.MARCHETTI",
        # OWN.12's own label/desc says "Richard Voss — Trustee... Voss Family Trust" — trusted over
        # the E.002 edge to OWN.7 (a legitimate CROSS-account edge: a professional trustee advising
        # more than one family is realistic, not a data error requiring the label to be overridden).
        "OWN.12": "PRIN.VOSS",
        "MCR.2.WHISPER": "PRIN.MARCHETTI",
        "OWN.7.MERIDIAN": "PRIN.MERIDIAN", "MCR.2.SOLSTICE": "PRIN.MERIDIAN", "MCR.3.SOLSTICE": "PRIN.MERIDIAN",
        "OWN.9.HARTWELL": "PRIN.HARTWELL", "MCR.2.AURELIA": "PRIN.HARTWELL", "MCR.4.AURELIA": "PRIN.HARTWELL",
        "MCR.6.AURELIA": "PRIN.HARTWELL",
        "OWN.9.VOSS": "PRIN.VOSS", "RE.PM.VOSS": "PRIN.VOSS",
        "OWN.9.OKONKWO": "PRIN.OKONKWO",
        "AVI.RISK.CASTELLANE": "PRIN.CASTELLANE", "AVI.PILOT.CASTELLANE": "PRIN.CASTELLANE",
        "AUTO.MGR.CASTELLANE": "PRIN.CASTELLANE", "PER.EA.CASTELLANE": "PRIN.CASTELLANE",
        "AVI.RISK.BELLWEATHER": "PRIN.BELLWEATHER", "AVI.PILOT.BELLWEATHER": "PRIN.BELLWEATHER",
    }
    for (rid, label, vertical, ring, domain, coi_type, desc, wt, freq, category) in FLAGSHIP_RAW["roles"]:
        tmpl_title = FLAGSHIP_ROLE_TEMPLATE_TITLE.get(rid)
        meta = TEMPLATE_ROLE_META.get((vertical, tmpl_title), {})
        nodes.append({
            "id": rid, "label": label, "node_type": "role", "vertical": vertical, "ring": ring, "domain": domain,
            "coi_type": coi_type, "coi_weight": wt, "coi_freq": freq, "desc": desc, "category": category,
            "account_ref": ROLE_ACCOUNT_REF[rid],
            "template_title": tmpl_title, "firms": meta.get("firms", ""),
            "vessel_relevance": meta.get("vessel_relevance", {}), "coi_influence": meta.get("coi_influence", ""),
            "subgroup": meta.get("subgroup", ""),
        })
    owner_by_asset = {}
    for (aid, label, vertical, owner_ref, asset_class, size_class) in FLAGSHIP_RAW["assets"]:
        owner_by_asset[aid] = owner_ref
        nodes.append({
            "id": aid, "label": label, "node_type": "asset", "vertical": vertical, "owner_ref": owner_ref,
            "owners": [{"principal_ref": owner_ref, "ownership_role": "UBO", "ownership_percent": 100}],
            "asset_class": asset_class, "size_class": size_class, "required_coverage_ids": [],
        })
    asset_by_id = {n["id"]: n for n in nodes if n["node_type"] == "asset"}

    coverages = []
    for (cid, label, old_type, parent_asset_ref) in FLAGSHIP_RAW["coverages"]:
        new_type = upgrade_coverage_type(old_type)
        meta = COV_LOOKUP[new_type]
        cov = {
            "id": cid, "label": label, "node_type": "coverage", "vertical": meta["vertical"],
            "coverage_type_id": new_type, "trigger_type": meta["trigger_type"],
            "line_of_business": meta["line_of_business"], "parent_asset_ref": parent_asset_ref,
            "policy_id": None,
        }
        coverages.append(cov)
        asset_by_id[parent_asset_ref]["required_coverage_ids"].append(cid)
    nodes.extend(coverages)

    # Policy entities (brief §6 item 1) — one Policy per (asset, carrier) grouping bound/expiring
    # coverages actually written; unbound coverages carry policy_id=None (never written = no policy).
    bound_by_cov = {b[0]: b for b in FLAGSHIP_RAW["bound"]}
    policies = {}
    policy_list = []
    for cov in coverages:
        b = bound_by_cov[cov["id"]]
        status, carrier, expiry, producer = b[1], b[4], b[9], b[10]
        if status in ("bound", "expiring") and carrier:
            key = (cov["parent_asset_ref"], carrier, expiry)
            if key not in policies:
                pol_id = f"POL.{cov['parent_asset_ref'].split('.', 1)[1]}.{len(policies)+1}"
                policies[key] = pol_id
                policy_list.append({
                    "id": pol_id, "node_type": "policy", "carrier": carrier, "vertical": cov["vertical"],
                    "policy_number": f"{carrier[:3].upper()}-{pol_id[-6:]}", "effective_date": None,
                    "expiration_date": expiry, "producer_of_record": producer, "billing_type": "Agency Bill",
                    "asset_ref": cov["parent_asset_ref"],
                })
            cov["policy_id"] = policies[key]

    bound_rows = []
    for (cid, status, resp, bound_prem, carrier, gwp_est, gwp_method, unbound_reason, evidence, expiry, producer) in FLAGSHIP_RAW["bound"]:
        cov = next(c for c in coverages if c["id"] == cid)
        bound_limit = None
        if status in ("bound", "expiring"):
            # bound_premium is frozen/verbatim from the prior build (see rate_trend_source note
            # below), but bound_limit_usd is a genuinely NEW field this pass adds — computed the
            # same deterministic, producer-archetype-grounded way as every non-flagship coverage
            # (pricing_v2.bound_limit_for), never a second hand-authored number. asset's own
            # size_class/label feed the yacht/aviation tiered baseline lookup exactly like
            # assemble_v2.enrich_coverage_for_pricing does for the 143 new accounts.
            asset = asset_by_id.get(cov["parent_asset_ref"], {})
            cov_for_pricing = dict(cov)
            cov_for_pricing["_size_class"] = asset.get("size_class")
            cov_for_pricing["_asset_label"] = asset.get("label", "")
            bound_limit = bound_limit_for(cov_for_pricing, asset.get("owner_ref", cov["parent_asset_ref"]), producer, status)
        bound_rows.append({
            "coverage_id": cid, "status": status, "responsible_node_id": resp, "bound_premium": bound_prem,
            "bound_limit_usd": bound_limit,
            "carrier": carrier, "gwp_estimate": gwp_est, "gwp_method": gwp_method,
            "gwp_confidence": None, "gwp_peer_n": None,
            "rate_trend_source": "frozen — flagship narrative figure, preserved verbatim from prior build" if gwp_method else None,
            "unbound_reason": unbound_reason, "evidence_note": evidence, "expiry_date": expiry,
            "producer_of_record": producer, "policy_id": cov["policy_id"],
        })

    knows = [{"id": eid, "edge_type": "knows", "from": f, "from_vertical": fv, "to": t, "to_vertical": tv, "why": why, "freq": freq}
              for (eid, f, fv, t, tv, why, freq) in FLAGSHIP_RAW["knows_edges"]]
    cross_poll = [{"id": eid, "edge_type": "cross_pollination", "from": f, "from_vertical": fv, "to": t, "to_vertical": tv,
                    "why": why, "via_relationship": via, "generated_narrative": narrative}
                   for (eid, f, fv, t, tv, why, via, narrative) in FLAGSHIP_RAW["cross_pollination_edges"]]
    rel_weights = [{"producer_id": pid, "node_id": nid, "relationship_weight": w, "activity_count_90d": ac,
                     "last_activity_date": lad, "contact_status": "active",
                     "calls_logged": calls, "emails_sent": emails, "meetings_held": meetings}
                    for (pid, nid, w, ac, lad, calls, emails, meetings) in FLAGSHIP_RAW["relationship_weights"]]
    referrals = [{"id": rid, "producer_id": pid, "from_node_id": f, "to_node_id": t, "referred_date": rd, "notes": notes}
                  for (rid, pid, f, t, rd, notes) in FLAGSHIP_RAW["referral_edges"]]
    apm = [{"ubo_id": u, "producer_id": p} for (u, p) in FLAGSHIP_RAW["account_producer_map"]]

    return {
        "nodes": nodes, "policies": policy_list, "bound_policy_overlay": bound_rows,
        "knows_edges": knows, "cross_pollination_edges": cross_poll,
        "relationship_weights": rel_weights, "referral_edges": referrals,
        "account_producer_map": apm,
    }


# ============================================================================
# 143 NEW account shells — DATA_FOUNDATION_BRIEF.md §5.2 attach rates, maximal tier.
# Producer distribution follows each archetype's book-shape logic from
# 01-plan/influence720-dashboard-plan.md (Sniper=fewer/high-value, Grinder=most-by-count,
# Legacy=aging-book, Silo=single-vertical-heavy, Rookie=fewer/growing) rather than an even split.
# ============================================================================

VERTICAL_ATTACH_RATE = {
    "real_estate": 0.95, "yacht": 0.90, "auto": 0.80, "personal": 0.55, "aviation": 0.40,
}

# 150 total target (brief §5.1) minus 7 existing flagship = 143 new.
N_NEW_ACCOUNTS = 143

# Producer distribution across the 143 new accounts (existing 7 flagship already assigned:
# Sabine 2, Thea 2, Vaughn 2, Ellery 1, Beckett 0) — archetype-consistent, sums to 143.
PRODUCER_NEW_ACCOUNT_COUNTS = {
    "REP.SABINE": 20,      # Sniper — fewer, high-value
    "REP.VAUGHN": 34,     # Grinder — most by count, low average value
    "REP.THEA": 26,     # Legacy — moderate, aging book
    "REP.ELLERY": 24,  # Silo — moderate, single-vertical-heavy
    "REP.BECKETT": 39,     # Rookie — high count, low authority penetration, unmapped network
}
assert sum(PRODUCER_NEW_ACCOUNT_COUNTS.values()) == N_NEW_ACCOUNTS

SIZE_CLASSES_ORDER = ["S1", "S2", "S3", "S4", "S5", "S6", "S7"]
# skew toward the middle of the range (S3-S5) — a realistic book isn't mostly gigayachts
SIZE_CLASS_WEIGHTS = [3, 8, 20, 25, 22, 14, 4]

VERTICAL_ASSET_LABELS = {
    "aviation": ["Gulfstream G450", "Gulfstream G550", "Gulfstream G650", "Bombardier Global 6000",
                 "Bombardier Challenger 350", "Dassault Falcon 8X", "Sikorsky S-76", "Airbus H175",
                 "Cessna Citation Longitude"],
    "auto": ["Curated Collector Collection"],
    "personal": ["Family & Board Executive Risk Program"],
}

# Real estate: combine location x property-type (24 x 13 = 312 combinations) instead of sampling
# a fixed 9-item list — at ~165 RE assets across 143 accounts, a small fixed pool would put the
# SAME named property on multiple unrelated families, reading as generic/templated at exactly the
# density this rebuild exists to fix.
RE_LOCATIONS = [
    "Palm Beach", "Aspen", "Manhattan", "Napa Valley", "The Hamptons", "Miami", "Lake Como",
    "Vail", "Nantucket", "Malibu", "Jackson Hole", "Martha's Vineyard", "Palm Springs", "Sun Valley",
    "Newport", "Charleston", "Big Sky", "Gstaad", "Cap Ferrat", "Beverly Hills", "Greenwich",
    "Montecito", "Telluride", "Sag Harbor",
]
RE_PROPERTY_TYPES = [
    "Waterfront Estate", "Ski Chalet", "Penthouse", "Vineyard Estate", "Oceanfront Compound",
    "Commercial Plaza", "Mountain Residence", "Coastal Estate", "Villa", "Ranch Estate",
    "Beachfront Villa", "Historic Estate", "Lakefront Residence",
]


def unique_property_names(n, used, rng):
    names = []
    attempts = 0
    while len(names) < n and attempts < n * 20:
        attempts += 1
        name = f"{rng.choice(RE_LOCATIONS)} {rng.choice(RE_PROPERTY_TYPES)}"
        if name not in used:
            used.add(name)
            names.append(name)
    while len(names) < n:  # exhausted the combination space — extremely unlikely at this scale
        names.append(f"{rng.choice(RE_LOCATIONS)} {rng.choice(RE_PROPERTY_TYPES)} II")
    return names


def weighted_choice(pool, weights, rng):
    return rng.choices(pool, weights=weights, k=1)[0]


def allocate_new_accounts():
    rng = random.Random(720722)
    surnames = unique_surname_pool(N_NEW_ACCOUNTS)
    producer_pool = []
    for pid, count in PRODUCER_NEW_ACCOUNT_COUNTS.items():
        producer_pool += [pid] * count
    rng.shuffle(producer_pool)
    used_property_names = {"Aspen Ski Chalet"}  # reserve the existing flagship (Voss) property name

    shells = []
    for i in range(N_NEW_ACCOUNTS):
        surname = surnames[i]
        account_id = f"PRIN.{surname.upper().replace('-', '_').replace(chr(39), '')}"
        producer_id = producer_pool[i]

        active = {}
        # Yacht is the anchor vertical in this book's specialty origin — force it on for a
        # supermajority, then roll the rest independently per §5.2's attach rates.
        for vertical, rate in VERTICAL_ATTACH_RATE.items():
            active[vertical] = rng.random() < rate
        if not any(active.values()):
            active["real_estate"] = True  # structural floor — every UHNW account has SOME real estate

        tiers = {}
        if active.get("yacht"):
            tiers["yacht"] = weighted_choice(SIZE_CLASSES_ORDER, SIZE_CLASS_WEIGHTS, rng)
        if active.get("aviation"):
            tiers["aviation"] = rng.choice(VERTICAL_ASSET_LABELS["aviation"])
        if active.get("real_estate"):
            n_props = weighted_choice([1, 2, 3], [70, 24, 6], rng)
            tiers["real_estate"] = unique_property_names(n_props, used_property_names, rng)
        if active.get("auto"):
            tiers["auto"] = weighted_choice([4, 6, 8, 12, 18], [25, 30, 25, 15, 5], rng)  # car count
        if active.get("personal"):
            tiers["personal"] = True

        n_verticals = sum(1 for v in active.values() if v)
        # Density scales with structural complexity (active verticals), matching 360's own
        # principle: role count reflects the ecosystem's actual COI surface, not a flat sample.
        # Previously flat randint(6,9) regardless of n_verticals — a 5-vertical apex account got
        # the same role count as a 1-vertical account, which is why book-level density never
        # approached 360's own per-account density (187 nodes for one multi-vertical family).
        role_target = rng.randint(3, 5) * n_verticals + rng.randint(2, 5)

        shells.append({
            "account_id": account_id,
            "surname": surname,
            "producer_id": producer_id,
            "active_verticals": {k: v for k, v in active.items() if v},
            "tiers": tiers,
            "n_verticals": n_verticals,
            "role_instance_target": role_target,
            "cross_pollination_candidate": n_verticals >= 3,
            "churn_risk_candidate": rng.random() < 0.08,
            "lost_account_candidate": rng.random() < 0.04,
            "co_trustee_candidate": rng.random() < 0.15,
        })
    return shells


def batch(items, size):
    return [items[i:i + size] for i in range(0, len(items), size)]


if __name__ == "__main__":
    import os
    os.makedirs(BUILD_DIR, exist_ok=True)

    flagship = build_flagship_json()
    with open(f"{BUILD_DIR}/flagship_accounts.json", "w") as f:
        json.dump(flagship, f, indent=2)
    print(f"flagship_accounts.json: {len(flagship['nodes'])} nodes, {len(flagship['bound_policy_overlay'])} bound rows, "
          f"{len(flagship['policies'])} policies, {len(flagship['knows_edges'])} knows edges, "
          f"{len(flagship['cross_pollination_edges'])} cross-pollination edges")

    shells = allocate_new_accounts()
    with open(f"{BUILD_DIR}/account_shells.json", "w") as f:
        json.dump(shells, f, indent=2)
    vertical_counts = {v: sum(1 for s in shells if v in s["active_verticals"]) for v in VERTICAL_ATTACH_RATE}
    producer_counts = {}
    for s in shells:
        producer_counts[s["producer_id"]] = producer_counts.get(s["producer_id"], 0) + 1
    print(f"account_shells.json: {len(shells)} new accounts")
    print("  per-vertical attach counts:", vertical_counts)
    print("  per-producer counts:", producer_counts)
    print("  cross-pollination candidates:", sum(1 for s in shells if s["cross_pollination_candidate"]))
    print("  churn-risk candidates:", sum(1 for s in shells if s["churn_risk_candidate"]))
    print("  lost-account candidates:", sum(1 for s in shells if s["lost_account_candidate"]))

    batches = batch(shells, 5)
    with open(f"{BUILD_DIR}/account_batches.json", "w") as f:
        json.dump(batches, f, indent=2)
    print(f"account_batches.json: {len(batches)} batches of up to 5 accounts each")
