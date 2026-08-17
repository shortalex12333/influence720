"""
Influence 720 — Part C: fully pre-fill the 143 new accounts' STRUCTURE (role titles/ring/domain/
coi_type, coverage set + bound/unbound/expiring status + responsible role + carrier + expiry,
policy grouping) deterministically, so the agent fan-out has zero structural/numeric/enum
decisions left to make — only narrative ones (person names, account-specific notes, edge
reasoning, evidence-note prose). This is the concrete mechanism behind the division of labor:
code owns referential integrity, agents own the writing.
"""
import json
import random
from foundation_v2 import ROLE_TAXONOMY, COVERAGE_CATALOG, BUILD_DIR, COV_TYPE_SHORT_CODE, YACHT_NAMES

CARRIERS = ["Example Underwriters Ltd", "Northbridge Marine", "Meridian Specialty Underwriters",
            "Harborstone Insurance Group", "Pinnacle Risk Partners", "Coastal Assurance Co."]

VERTICAL_PRIORITY = ["yacht", "real_estate", "aviation", "personal", "auto"]
VERTICAL_ABBR = {"yacht": "YACHT", "aviation": "AVI", "real_estate": "RE", "auto": "AUTO",
                  "personal": "PER", "fine_art": "ART"}
ANCHOR_ROLE_BY_VERTICAL = {
    "yacht": "Owner's Representative", "real_estate": "Director of Residence / Chief of Staff",
    "aviation": "Aviation Department Manager", "personal": "Chief of Staff", "auto": "Collection Advisor",
}


def slugify(text, n=4):
    return "".join(ch for ch in text.upper() if ch.isalnum())[:n] or "ROLE"


def select_roles(shell, rng):
    """Returns a list of role dicts, guaranteeing >=1 role per active vertical, hitting role_instance_target."""
    active = list(shell["active_verticals"].keys())
    active_sorted = [v for v in VERTICAL_PRIORITY if v in active]
    target = shell["role_instance_target"]

    chosen = []
    used_titles_by_vertical = {v: set() for v in active_sorted}

    # 1. mandatory anchor role in the highest-priority active vertical
    primary_v = active_sorted[0]
    anchor_title = ANCHOR_ROLE_BY_VERTICAL[primary_v]
    pool = ROLE_TAXONOMY[primary_v]
    anchor = next((r for r in pool if r[0] == anchor_title), pool[0])
    chosen.append((primary_v, anchor))
    used_titles_by_vertical[primary_v].add(anchor[0])

    # 2. guarantee >=1 role per remaining active vertical
    for v in active_sorted[1:]:
        pool = [r for r in ROLE_TAXONOMY[v] if r[1] <= 2]  # prefer ring<=2 (signatory/conditional)
        if not pool:
            pool = ROLE_TAXONOMY[v]
        pick = rng.choice(pool)
        chosen.append((v, pick))
        used_titles_by_vertical[v].add(pick[0])

    # 3. fill remaining slots weighted across active verticals, 70% ring<=2 pool / 30% ring>=3 pool
    while len(chosen) < target:
        v = rng.choice(active_sorted)
        pool_all = ROLE_TAXONOMY[v]
        prefer_senior = rng.random() < 0.7
        pool = [r for r in pool_all if (r[1] <= 2) == prefer_senior]
        if not pool:
            pool = pool_all
        candidates = [r for r in pool if r[0] not in used_titles_by_vertical[v]]
        if not candidates:
            candidates = [r for r in pool_all if r[0] not in used_titles_by_vertical[v]]
        if not candidates:
            break  # exhausted this vertical's taxonomy
        pick = rng.choice(candidates)
        chosen.append((v, pick))
        used_titles_by_vertical[v].add(pick[0])

    surname_code = shell["surname"].upper().replace("-", "").replace(" ", "").replace(chr(39), "")
    roles = []
    used_codes = set()
    for (v, (title, ring, coi_type, domain, category)) in chosen:
        code = slugify(title)
        base_code = code
        n = 1
        while code in used_codes:
            n += 1
            code = f"{base_code}{n}"
        used_codes.add(code)
        roles.append({
            "role_code": code, "id": f"ROLE.{surname_code}.{code}", "title": title, "vertical": v,
            "ring": ring, "domain": domain, "coi_type": coi_type, "category": category,
            "coi_weight": max(2, 10 - ring * 2), "coi_freq": max(2, 10 - ring),
        })
    return roles


def build_assets_and_coverages(shell, roles, rng):
    surname_code = shell["surname"].upper().replace("-", "").replace(" ", "").replace(chr(39), "")
    assets = []
    coverages = []
    roles_by_vertical = {}
    for r in roles:
        roles_by_vertical.setdefault(r["vertical"], []).append(r)

    def responsible_for(vertical):
        pool = roles_by_vertical.get(vertical, [])
        if not pool:
            return roles[0]["id"]  # structural fallback — should not trigger, every active vertical has >=1 role
        return min(pool, key=lambda r: r["ring"])["id"]

    is_lost = shell["lost_account_candidate"]
    is_churn = shell["churn_risk_candidate"]

    def roll_status():
        if is_lost:
            return "unbound", "lapsed_with_us"
        r = rng.random()
        if r < 0.55:
            return "bound", None
        if r < 0.70:
            return "expiring", None
        reason_r = rng.random()
        reason = "never_written" if reason_r < 0.70 else ("lapsed_with_us" if reason_r < 0.90 else "competitor_held")
        return "unbound", reason

    active = shell["active_verticals"]
    needs_narrative_evidence = []  # coverage_ids whose unbound_reason needs a hand-written evidence_note

    if "yacht" in active:
        aid = f"AST.{surname_code}.YACHT"
        size_m = {"S1": 12, "S2": 20, "S3": 32, "S4": 50, "S5": 70, "S6": 90, "S7": 115}.get(shell["tiers"]["yacht"], 50)
        yacht_name = rng.choice(YACHT_NAMES)
        assets.append({"id": aid, "vertical": "yacht", "asset_class": f"{shell['tiers']['yacht']}-class Superyacht",
                        "size_class": shell["tiers"]["yacht"], "label_hint": f"M/Y {yacht_name}, {size_m}m"})
        for c in COVERAGE_CATALOG["yacht"]:
            cid = f"COV.{surname_code}.YACHT.{COV_TYPE_SHORT_CODE[c['coverage_type_id']]}"
            status, reason = roll_status()
            if is_churn and c["coverage_type_id"] in ("hull_machinery", "liability_protection"):
                status, reason = "expiring", None
            cov = {"id": cid, "vertical": "yacht", "coverage_type_id": c["coverage_type_id"], "label": c["label"],
                   "trigger_type": c["trigger_type"], "line_of_business": c["line_of_business"],
                   "parent_asset_ref": aid, "status": status, "unbound_reason": reason,
                   "responsible_node_id": responsible_for("yacht")}
            coverages.append(cov)
            if reason in ("lapsed_with_us", "competitor_held"):
                needs_narrative_evidence.append(cid)

    if "aviation" in active:
        aid = f"AST.{surname_code}.AVI"
        assets.append({"id": aid, "vertical": "aviation", "asset_class": shell["tiers"]["aviation"],
                        "size_class": "N/A", "label_hint": shell["tiers"]["aviation"]})
        for c in COVERAGE_CATALOG["aviation"]:
            cid = f"COV.{surname_code}.AVI.{COV_TYPE_SHORT_CODE[c['coverage_type_id']]}"
            status, reason = roll_status()
            cov = {"id": cid, "vertical": "aviation", "coverage_type_id": c["coverage_type_id"], "label": c["label"],
                   "trigger_type": c["trigger_type"], "line_of_business": c["line_of_business"],
                   "parent_asset_ref": aid, "status": status, "unbound_reason": reason,
                   "responsible_node_id": responsible_for("aviation")}
            coverages.append(cov)
            if reason in ("lapsed_with_us", "competitor_held"):
                needs_narrative_evidence.append(cid)

    if "real_estate" in active:
        for pi, prop_label in enumerate(shell["tiers"]["real_estate"], start=1):
            aid = f"AST.{surname_code}.RE{pi}"
            assets.append({"id": aid, "vertical": "real_estate", "asset_class": "High-Value Residential" if pi == 1 else "Additional Property",
                            "size_class": "N/A", "label_hint": prop_label})
            for c in COVERAGE_CATALOG["real_estate"]:
                cid = f"COV.{surname_code}.RE{pi}.{COV_TYPE_SHORT_CODE[c['coverage_type_id']]}"
                status, reason = roll_status()
                cov = {"id": cid, "vertical": "real_estate", "coverage_type_id": c["coverage_type_id"], "label": c["label"],
                       "trigger_type": c["trigger_type"], "line_of_business": c["line_of_business"],
                       "parent_asset_ref": aid, "status": status, "unbound_reason": reason,
                       "responsible_node_id": responsible_for("real_estate")}
                coverages.append(cov)
                if reason in ("lapsed_with_us", "competitor_held"):
                    needs_narrative_evidence.append(cid)

    if "auto" in active:
        aid = f"AST.{surname_code}.AUTO"
        assets.append({"id": aid, "vertical": "auto", "asset_class": f"{shell['tiers']['auto']}-Car Curated Collection",
                        "size_class": "N/A", "label_hint": f"{shell['tiers']['auto']}-Car Curated Collection"})
        for c in COVERAGE_CATALOG["auto"]:
            cid = f"COV.{surname_code}.AUTO.{COV_TYPE_SHORT_CODE[c['coverage_type_id']]}"
            status, reason = roll_status()
            cov = {"id": cid, "vertical": "auto", "coverage_type_id": c["coverage_type_id"], "label": c["label"],
                   "trigger_type": c["trigger_type"], "line_of_business": c["line_of_business"],
                   "parent_asset_ref": aid, "status": status, "unbound_reason": reason,
                   "responsible_node_id": responsible_for("auto")}
            coverages.append(cov)
            if reason in ("lapsed_with_us", "competitor_held"):
                needs_narrative_evidence.append(cid)

    if "personal" in active:
        aid = f"AST.{surname_code}.PER"
        assets.append({"id": aid, "vertical": "personal", "asset_class": "Executive Risk Program",
                        "size_class": "N/A", "label_hint": f"{shell['surname']} Family & Board Executive Risk Program"})
        for c in COVERAGE_CATALOG["personal"]:
            cid = f"COV.{surname_code}.PER.{COV_TYPE_SHORT_CODE[c['coverage_type_id']]}"
            status, reason = roll_status()
            cov = {"id": cid, "vertical": "personal", "coverage_type_id": c["coverage_type_id"], "label": c["label"],
                   "trigger_type": c["trigger_type"], "line_of_business": c["line_of_business"],
                   "parent_asset_ref": aid, "status": status, "unbound_reason": reason,
                   "responsible_node_id": responsible_for("personal")}
            coverages.append(cov)
            if reason in ("lapsed_with_us", "competitor_held"):
                needs_narrative_evidence.append(cid)

    has_fine_art = ("yacht" in active or "auto" in active) and rng.random() < 0.22
    if has_fine_art:
        aid = f"AST.{surname_code}.ART"
        situs_vertical = "yacht" if "yacht" in active else "auto"
        assets.append({"id": aid, "vertical": "fine_art", "asset_class": "Scheduled Fine Art Collection",
                        "size_class": "N/A", "label_hint": f"{shell['surname']} Scheduled Fine Art Collection", "situs": situs_vertical})
        c = COVERAGE_CATALOG["fine_art"][0]
        cid = f"COV.{surname_code}.ART.{COV_TYPE_SHORT_CODE[c['coverage_type_id']]}"
        status, reason = roll_status()
        cov = {"id": cid, "vertical": "fine_art", "coverage_type_id": c["coverage_type_id"], "label": c["label"],
               "trigger_type": c["trigger_type"], "line_of_business": c["line_of_business"],
               "parent_asset_ref": aid, "status": status, "unbound_reason": reason,
               "responsible_node_id": responsible_for(situs_vertical)}
        coverages.append(cov)
        if reason in ("lapsed_with_us", "competitor_held"):
            needs_narrative_evidence.append(cid)

    # carrier + expiry assignment for bound/expiring coverages, seeded
    for cov in coverages:
        if cov["status"] in ("bound", "expiring"):
            cov["carrier"] = rng.choice(CARRIERS)
            if cov["status"] == "expiring":
                month = rng.choice([9, 10, 11, 12])
                cov["expiry_date"] = f"2026-{month:02d}-{rng.randint(1,28):02d}"
            else:
                month = rng.choice(list(range(1, 13)))
                year = rng.choice([2027, 2028])
                cov["expiry_date"] = f"{year}-{month:02d}-{rng.randint(1,28):02d}"
        else:
            cov["carrier"] = None
            cov["expiry_date"] = None

    return assets, coverages, needs_narrative_evidence


def prefill_account(shell, rng):
    roles = select_roles(shell, rng)
    assets, coverages, needs_evidence = build_assets_and_coverages(shell, roles, rng)
    return {
        "account_id": shell["account_id"], "surname": shell["surname"], "producer_id": shell["producer_id"],
        "role_instance_target": shell["role_instance_target"],
        "churn_risk_candidate": shell["churn_risk_candidate"], "lost_account_candidate": shell["lost_account_candidate"],
        "co_trustee_candidate": shell["co_trustee_candidate"], "cross_pollination_candidate": shell["cross_pollination_candidate"],
        "roles": roles, "assets": assets, "coverages": coverages,
        "coverages_needing_evidence_note": needs_evidence,
    }


if __name__ == "__main__":
    with open(f"{BUILD_DIR}/account_shells.json") as f:
        shells = json.load(f)

    rng = random.Random(720723)
    prefilled = [prefill_account(s, rng) for s in shells]

    with open(f"{BUILD_DIR}/account_prefilled.json", "w") as f:
        json.dump(prefilled, f, indent=2)

    total_roles = sum(len(a["roles"]) for a in prefilled)
    total_coverages = sum(len(a["coverages"]) for a in prefilled)
    total_assets = sum(len(a["assets"]) for a in prefilled)
    status_counts = {}
    for a in prefilled:
        for c in a["coverages"]:
            status_counts[c["status"]] = status_counts.get(c["status"], 0) + 1
    evidence_needed = sum(len(a["coverages_needing_evidence_note"]) for a in prefilled)
    print(f"Prefilled {len(prefilled)} accounts: {total_roles} role-instances, {total_assets} assets, {total_coverages} coverages")
    print("  coverage status distribution:", status_counts)
    print("  coverages needing a hand-written evidence_note:", evidence_needed)

    # batches of 5 accounts for the agent fan-out
    batches = [prefilled[i:i + 5] for i in range(0, len(prefilled), 5)]
    with open(f"{BUILD_DIR}/prefilled_batches.json", "w") as f:
        json.dump(batches, f, indent=2)
    print(f"prefilled_batches.json: {len(batches)} batches")
