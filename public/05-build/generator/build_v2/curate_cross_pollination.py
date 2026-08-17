"""
Influence 720 — Part G: curate ~20-25 NEW cross-pollination edges (on top of the 3 frozen
flagship ones), hand-selected from accounts with 3+ active verticals per brief §5.4's guidance —
"a curated set... each independently sourced/written... mass-generating these to a ratio would
directly violate handover §1's 'every string on screen is a considered, professional label.'"

Mechanic (PHASED_BUILD_PLAN.md §4): the SAME individual holds a role in one vertical and is also
the responsible buyer for an unbound coverage in a different vertical — that's the actual "Trojan
Horse" cross-sell mechanic, not a generic relationship edge. This script merges two independently-
authored role identities into one dual-hat person for a deliberately small, curated subset of
accounts, then writes the narrative sentence using the SAME proven template as the 3 existing
flagship examples (real name, real ring, real $ figure, real coverage/asset names — parameterized,
not generic filler).

Run AFTER assemble_v2.py has produced the real (non-placeholder) dataset.
"""
import json
import random
import sys
from foundation_v2 import BUILD_DIR, PRODUCERS

PRODUCER_FIRST_NAME = {p["producer_id"]: p["name"] for p in PRODUCERS}
N_CURATED = 22


def curate(dataset, seed=720726, n=N_CURATED):
    rng = random.Random(seed)
    node_by_id = {n_["id"]: n_ for n_ in dataset["nodes"]}
    apm_by_ubo = {m["ubo_id"]: m["producer_id"] for m in dataset["account_producer_map"]}

    roles_by_account = {}
    for n_ in dataset["nodes"]:
        if n_["node_type"] == "role" and n_.get("account_ref"):
            roles_by_account.setdefault(n_["account_ref"], []).append(n_)

    unbound_by_account = {}
    for b in dataset["bound_policy_overlay"]:
        if b["status"] != "unbound" or b["unbound_reason"] != "never_written":
            continue
        cov = node_by_id.get(b["coverage_id"])
        if not cov:
            continue
        unbound_by_account.setdefault(node_by_id[b["responsible_node_id"]].get("account_ref"), []).append((b, cov))

    candidates = []
    for acc_id, roles in roles_by_account.items():
        verticals_present = {r["vertical"] for r in roles}
        if len(verticals_present) < 3:
            continue
        unbound_here = unbound_by_account.get(acc_id, [])
        if not unbound_here:
            continue
        # need a signatory-tier role (ring<=1) in a vertical DIFFERENT from at least one unbound coverage's vertical
        senior_roles = [r for r in roles if r["ring"] <= 1]
        for role_a in senior_roles:
            other_vertical_gaps = [(b, cov) for (b, cov) in unbound_here if cov["vertical"] != role_a["vertical"]]
            if other_vertical_gaps:
                candidates.append((acc_id, role_a, other_vertical_gaps))
                break

    rng.shuffle(candidates)
    chosen = candidates[:n]
    if len(chosen) < n:
        print(f"WARNING: only found {len(chosen)} eligible candidates, target was {n}", file=sys.stderr)

    new_edges = []
    id_counter = 300
    for acc_id, role_a, gaps in chosen:
        bound_row, coverage_b = gaps[rng.randrange(len(gaps))]
        role_b_id = bound_row["responsible_node_id"]
        role_b = node_by_id.get(role_b_id)
        if not role_b or role_b["id"] == role_a["id"]:
            continue

        person_name = role_a["label"].split(" — ")[0]
        role_a_title = role_a["label"].split(" — ", 1)[1] if " — " in role_a["label"] else role_a["label"]
        role_b_title = role_b["label"].split(" — ", 1)[1] if " — " in role_b["label"] else role_b["label"]

        # merge identity: role_b's displayed name becomes the same person as role_a
        role_b["label"] = f"{person_name} — {role_b_title}"
        if "dual-hat" not in role_b["desc"]:
            role_b["desc"] = f"{role_b['desc']} Dual-hat: also serves as {role_a_title} on the {role_a['vertical']} side of this account."

        account_label = node_by_id.get(acc_id, {}).get("label", acc_id)
        producer_id = apm_by_ubo.get(acc_id)
        producer_first = PRODUCER_FIRST_NAME.get(producer_id, "the producer")
        gwp = bound_row.get("gwp_estimate") or 0
        asset_label = node_by_id.get(coverage_b["parent_asset_ref"], {}).get("label", coverage_b.get("label", ""))

        why = (f"Same individual ({person_name}) is Ring-{role_a['ring']} {role_a_title} on the {role_a['vertical']} "
               f"side of {account_label} and also serves as {role_b_title} on the {coverage_b['vertical']} side.")
        narrative = (f"Because {producer_first} has a Ring {role_a['ring']} relationship with {account_label}'s "
                     f"{role_a_title}, the same relationship reaches the unbound ${gwp:,.0f} {coverage_b['label']} "
                     f"line on their {asset_label}.")

        new_edges.append({
            "id": f"E.10{id_counter}", "edge_type": "cross_pollination", "from": role_a["id"],
            "from_vertical": role_a["vertical"], "to": coverage_b["id"], "to_vertical": coverage_b["vertical"],
            "via_relationship": {"ring": role_a["ring"], "coi_weight": role_a["coi_weight"]},
            "why": why, "generated_narrative": narrative,
        })
        id_counter += 1

    return new_edges


if __name__ == "__main__":
    placeholder = "--placeholder" in sys.argv
    name = "dataset_v2_placeholder.json" if placeholder else "dataset_v2_final.json"
    with open(f"{BUILD_DIR}/{name}") as f:
        dataset = json.load(f)

    new_edges = curate(dataset)
    print(f"Curated {len(new_edges)} new cross-pollination edges")
    for e in new_edges[:5]:
        print(" -", e["generated_narrative"])

    dataset["cross_pollination_edges"].extend(new_edges)
    with open(f"{BUILD_DIR}/{name}", "w") as f:
        json.dump(dataset, f, indent=2)
    print(f"Total cross_pollination_edges now: {len(dataset['cross_pollination_edges'])}")
    print(f"Updated {name} in place")
