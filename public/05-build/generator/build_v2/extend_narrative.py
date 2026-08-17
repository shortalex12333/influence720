"""
Density fix follow-through: role_instance_target now scales with n_verticals (was a flat
randint(6,9) regardless of structural complexity — see flagship_and_allocate_v2.py), so the 143
new accounts now carry 2,371 role-instances instead of ~1,024. The extra role-instances have
role_codes that don't exist in the original agent-authored narrative_results.json and would be
silently dropped by assemble_v2.py's `nar_role_by_code.get()` fallback.

This script extends (never overwrites) narrative_results.json: for every role in
account_prefilled.json not already covered by narrative, it generates a real (non-placeholder)
person_name from the same FIRST_NAMES x STAFF_SURNAMES pools the original 1,117 roles drew from,
and a grounded one-line narrative_note built from the role's own title/category/vertical/coi_type
— the same "parameterized from real structural fields, not generic filler" standard the codebase
already holds itself to (see the referral-script generator, the densification pass's own docstring).

No new knows_edges are authored here — assemble_v2.py's structural edge densification pass
already connects every role node regardless of origin, so the new roles get real structural edges
for free on the next assemble run.
"""
import json
import random
from foundation_v2 import BUILD_DIR, FIRST_NAMES, STAFF_SURNAMES

VERTICAL_LABEL = {
    "yacht": "the vessel's insurance program", "aviation": "the aviation program",
    "real_estate": "the property program", "auto": "the collection", "personal": "the family's personal-risk program",
}

NOTE_TEMPLATES = [
    "{title} — {vertical_label}; not yet a personal contact of this producer, but structurally in the loop on {category_lc} matters.",
    "Fills the {title} function for {vertical_label}; identified through the account's own org structure, no direct relationship yet.",
    "{title} on this account. Visible in the ownership/management structure but hasn't been personally engaged for a referral conversation.",
    "Handles {title_lc} responsibilities for {vertical_label}; a known name on the account, not yet a warm relationship.",
]

# 2026-08-16 catalog extension follow-through: 32 new coverage rows/account (coverage_research_v2.json,
# merged into foundation_v2.COVERAGE_CATALOG) mean prefill_v2.py's roll_status() now rolls
# lapsed_with_us/competitor_held on coverage_type_ids that never existed when narrative_results.json
# was originally authored — those coverage_ids are new and have no hand-written evidence_note,
# same gap class the role-extension pass above already fixes for role_code. Extends (never
# overwrites) each account's evidence_notes list the same way.
EVIDENCE_NOTE_TEMPLATES = {
    "lapsed_with_us": [
        "{label} lapsed off this book at last renewal — no replacement placement confirmed yet; flagged for producer follow-up.",
        "Previously bound {label} with us; renewal was not completed and the policy lapsed without a documented reason on file.",
        "{label} shows as lapsed-with-us in the last 12 months — client did not respond to the renewal outreach sequence.",
    ],
    "competitor_held": [
        "{label} is currently placed with a competing carrier/broker — never written through this book; a genuine whitespace opportunity.",
        "Client holds {label} through a competitor; no record of this producer ever quoting the line.",
        "{label} sits with another broker of record — identified as a gap in this account's coverage map, not a lapsed relationship.",
    ],
}


def gen_evidence_note(rng, cov):
    tmpl = rng.choice(EVIDENCE_NOTE_TEMPLATES.get(cov["unbound_reason"], EVIDENCE_NOTE_TEMPLATES["competitor_held"]))
    return tmpl.format(label=cov["label"])


def gen_note(rng, role):
    title = role["title"]
    tmpl = rng.choice(NOTE_TEMPLATES)
    return tmpl.format(
        title=title, title_lc=title[0].lower() + title[1:] if title else title,
        vertical_label=VERTICAL_LABEL.get(role["vertical"], "this account's program"),
        category_lc=role.get("category", "account").lower(),
    )


def extend():
    with open(f"{BUILD_DIR}/account_prefilled.json") as f:
        prefilled = json.load(f)
    with open(f"{BUILD_DIR}/narrative_results.json") as f:
        narrative = json.load(f)

    rng = random.Random(720730)
    name_pool = [(f, l) for f in FIRST_NAMES for l in STAFF_SURNAMES]
    rng.shuffle(name_pool)
    pool_i = 0

    added = 0
    evidence_added = 0
    for acc in prefilled:
        aid = acc["account_id"]
        nar = narrative.get(aid)
        if nar is None:
            continue  # flagship or a genuinely missing account — not this script's job
        existing_codes = {r["role_code"] for r in nar["roles"]}
        used_names_this_account = {r["person_name"] for r in nar["roles"]}
        for role in acc["roles"]:
            if role["role_code"] in existing_codes:
                continue
            # find next unused name for this account (pool is large; local collision is what matters)
            name = None
            for _ in range(len(name_pool)):
                cand = name_pool[pool_i % len(name_pool)]
                pool_i += 1
                full = f"{cand[0]} {cand[1]}"
                if full not in used_names_this_account:
                    name = full
                    used_names_this_account.add(full)
                    break
            if name is None:
                name = f"{name_pool[pool_i % len(name_pool)][0]} {name_pool[pool_i % len(name_pool)][1]}"
                pool_i += 1
            nar["roles"].append({
                "role_code": role["role_code"], "person_name": name,
                "narrative_note": gen_note(rng, role),
            })
            existing_codes.add(role["role_code"])
            added += 1

        nar.setdefault("evidence_notes", [])
        existing_evidence_ids = {e["coverage_id"] for e in nar["evidence_notes"]}
        cov_by_id = {c["id"]: c for c in acc["coverages"]}
        for cid in acc["coverages_needing_evidence_note"]:
            if cid in existing_evidence_ids:
                continue
            cov = cov_by_id.get(cid)
            if cov is None:
                continue
            nar["evidence_notes"].append({"coverage_id": cid, "evidence_note": gen_evidence_note(rng, cov)})
            existing_evidence_ids.add(cid)
            evidence_added += 1

    with open(f"{BUILD_DIR}/narrative_results.json", "w") as f:
        json.dump(narrative, f, indent=2)
    print(f"extend_narrative: added {added} new role-narrative entries, {evidence_added} new coverage evidence-notes, across {len(prefilled)} accounts")


if __name__ == "__main__":
    extend()
