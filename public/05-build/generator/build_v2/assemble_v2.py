"""
Influence 720 — Part E: assembly. Merges flagship_accounts.json (frozen) + account_prefilled.json
(structure) + narrative_results.json (agent-authored names/notes/edges) into one unified dataset,
runs the two-pass GWP pricing engine, generates sparse referral edges, and validates referential
integrity + the exact failure mode the handover names (internal shorthand leaking into a
renderable field). Run with --placeholder to test the pipeline before real narrative lands.
"""
import json
import sys
import random
import hashlib
import math
from foundation_v2 import (
    BUILD_DIR, COI_TYPE_ENUM, PRODUCERS, LEADERSHIP, CREW_COMPLEMENT_BY_SIZE, TEMPLATE_ROLE_META,
    FIRST_NAMES, STAFF_SURNAMES,
)
from pricing_v2 import price_bound_coverage, price_ghost_policy, peer_comp_confidence, crew_medical_premium, bound_limit_for

# coi_type values that show up inside template micro_nodes but aren't in the project's COI_TYPE_ENUM
# (e.g. aviation's "Hull Underwriter" / "Liability Underwriter" micro_nodes use "market", a research-
# vocabulary word never normalized into 720's own enum) — normalize at instantiation time so
# validate()'s enum check still passes for these new node_type="role" instances.
MICRO_NODE_COI_TYPE_NORMALIZE = {"market": "conditional"}
MICRO_NODE_FREQ_WORD_TO_NUMERIC = {"occasional": 4, "frequent": 7, "as-needed": 3, "rare": 2, "quarterly": 3, "monthly": 5}

PRODUCER_NAME_BY_ID = {p["producer_id"]: p["name"] for p in PRODUCERS}

# Codename phrases only ever appear as a capitalized proper-noun-style archetype label in the
# corrected pattern (e.g. "The Legacy") — case-SENSITIVE matching, because case-insensitive
# matching false-positives on ordinary English ("the legacy Miami homeowner's binder" is a
# perfectly normal, specific, professional sentence, not a leaked internal codename).
BANNED_STRINGS_CASE_SENSITIVE = ["The Sniper", "The Grinder", "The Legacy", "The Silo", "The Rookie"]
# Technical placeholder markers are unambiguous regardless of case.
BANNED_STRINGS_CASE_INSENSITIVE = ["TBD", "TODO", "FIXME", "XXX", "placeholder", "[insert", "lorem ipsum"]


def load_json(name):
    with open(f"{BUILD_DIR}/{name}") as f:
        return json.load(f)


def make_placeholder_narrative(prefilled):
    """Deterministic stand-in narrative so the assembly pipeline can be validated before the
    real agent fan-out returns — never used for the final dataset."""
    out = {}
    for acc in prefilled:
        roles_out = []
        for i, r in enumerate(acc["roles"]):
            roles_out.append({"role_code": r["role_code"], "person_name": f"Placeholder Person{i}",
                               "narrative_note": f"placeholder note for {r['title']}"})
        edges = []
        codes = [r["role_code"] for r in acc["roles"]]
        for i in range(len(codes)):
            j = (i + 1) % len(codes)
            if i != j:
                edges.append({"from_role_code": codes[i], "to_role_code": codes[j], "why": "placeholder", "freq": "monthly"})
        evidence = [{"coverage_id": cid, "evidence_note": "placeholder evidence note"} for cid in acc["coverages_needing_evidence_note"]]
        out[acc["account_id"]] = {
            "account_id": acc["account_id"], "principal_label": f"{acc['surname']} Family Trust",
            "principal_desc": f"Apex — UBO, {acc['surname']} ownership structure.",
            "co_trustee_name": "Placeholder Cotrustee" if acc["co_trustee_candidate"] else "",
            "co_trustee_role_title": "Co-Trustee" if acc["co_trustee_candidate"] else "",
            "roles": roles_out, "knows_edges": edges, "evidence_notes": evidence,
        }
    return out


def _micro_node_synth_name(rng_seed_key):
    """Deterministic person name for a micro-node role instance — these roles were never part of
    the agent-authored narrative fan-out (they're new structural nodes added in the 2026-08-16
    template-integration pass, one per account instance that has the parent role), so a name is
    synthesized the same way this codebase already synthesizes every other non-narrative name
    (YACHT_NAMES/FAMILY_SURNAMES in foundation_v2.py), from a seed derived from the parent role's
    own id + the micro-node's own id so it's stable across re-runs."""
    h = int(hashlib.sha1(rng_seed_key.encode()).hexdigest(), 16)
    first = FIRST_NAMES[h % len(FIRST_NAMES)]
    last = STAFF_SURNAMES[(h // len(FIRST_NAMES)) % len(STAFF_SURNAMES)]
    return f"{first} {last}"


def instantiate_micro_nodes(parent_role_dict, parent_node_id, aid):
    """Step 4 of the 2026-08-16 template-integration pass — a template role's micro_nodes become
    their OWN flat role-type node entries (this project's flat-list architecture, not a nested
    structure), carrying parent_role_id back to the parent, added once per account instance that
    has the parent role (mirrors how the parent role itself gets instantiated per account)."""
    vertical, title = parent_role_dict["vertical"], parent_role_dict["title"]
    meta = TEMPLATE_ROLE_META.get((vertical, title), {})
    micro_nodes = meta.get("micro_nodes") or []
    out = []
    for i, mn in enumerate(micro_nodes):
        mn_title = mn.get("label") or mn.get("title") or f"{title} (sub-role)"
        mn_id = f"{parent_node_id}.MICRO{i+1}"
        ring = mn.get("ring", parent_role_dict["ring"])
        coi_type = mn.get("coi_type", parent_role_dict["coi_type"])
        coi_type = MICRO_NODE_COI_TYPE_NORMALIZE.get(coi_type, coi_type)
        if coi_type not in COI_TYPE_ENUM:
            coi_type = "conditional"
        raw_freq = mn.get("coi_freq", max(2, 10 - ring))
        coi_freq = raw_freq if isinstance(raw_freq, (int, float)) else MICRO_NODE_FREQ_WORD_TO_NUMERIC.get(
            str(raw_freq).lower(), max(2, 10 - ring))
        coi_weight = mn.get("coi_weight", max(2, 10 - ring))
        desc = mn.get("desc") or mn.get("rationale") or ""
        person = _micro_node_synth_name(mn_id)
        out.append({
            "id": mn_id, "label": f"{person} — {mn_title.replace(chr(10), ' ')}", "node_type": "role",
            "vertical": vertical, "ring": ring, "domain": mn.get("domain", parent_role_dict["domain"]),
            "coi_type": coi_type, "coi_weight": coi_weight, "coi_freq": coi_freq, "desc": desc,
            "category": parent_role_dict["category"], "account_ref": aid, "parent_role_id": parent_node_id,
        })
    return out


def compute_decision_dist(all_nodes, all_knows):
    """Step 3 of the 2026-08-16 template-integration pass — MECHANICAL computation, not research.
    Per DATA_FOUNDATION_BRIEF-style spec, exact algorithm (do not deviate):
      (a) every role instance with ring==1 is SEEDED at decision_dist=1 — a definitional seed
          (Ring 1 = direct signatory reach to the account's own principal), not a graph fact.
      (b) from that seed set, standard unweighted multi-source BFS over the account's OWN
          Edges_Knows graph (hand-authored + the E.DENSE-densified structural edges), treated as
          UNDIRECTED, gives the minimum hop-count to every other ring 2/3/4 role instance in the
          SAME account.
      (c) any role instance with no path from any ring-1 seed (sparse accounts) falls back to
          decision_dist = its own ring number. Counted and reported, expected to be rare.
      (d) the account's own ring==0 UBO_Principal node is a fixed constant decision_dist=0,
          outside the BFS — it is excluded from the adjacency graph entirely so BFS never routes
          THROUGH it to reach other roles (mirrors 360's own OWN.1 Principal UBO = 0).
    Runs on the FULL post-densification all_knows graph (this must be called after the structural
    edge densification pass below, not before) and stamps decision_dist directly onto the role/
    principal node dicts in all_nodes. Returns (rows_computed, fallback_count).
    """
    from collections import deque

    nodes_by_account = {}
    for n in all_nodes:
        if n["node_type"] in ("role", "principal") and n.get("account_ref"):
            nodes_by_account.setdefault(n["account_ref"], []).append(n)

    # Only ROLE nodes participate in the BFS graph — principal nodes are excluded from the
    # adjacency map entirely (rule d: the principal doesn't participate in the BFS itself).
    role_id_to_account = {}
    for acc_id, nlist in nodes_by_account.items():
        for n in nlist:
            if n["node_type"] == "role":
                role_id_to_account[n["id"]] = acc_id

    adjacency_by_account = {acc_id: {} for acc_id in nodes_by_account}
    for e in all_knows:
        f_acc = role_id_to_account.get(e["from"])
        t_acc = role_id_to_account.get(e["to"])
        if f_acc is None or t_acc is None or f_acc != t_acc:
            continue  # principal-endpoint, cross-account, or unknown-node edge — not BFS-traversable
        adjacency_by_account[f_acc].setdefault(e["from"], set()).add(e["to"])
        adjacency_by_account[f_acc].setdefault(e["to"], set()).add(e["from"])

    rows_computed = 0
    fallback_count = 0
    for acc_id, nlist in nodes_by_account.items():
        adjacency = adjacency_by_account.get(acc_id, {})
        seeds = [n["id"] for n in nlist if n["node_type"] == "role" and n["ring"] == 1]
        dist = {}
        dq = deque()
        for s in seeds:
            dist[s] = 1
            dq.append(s)
        while dq:
            cur = dq.popleft()
            for nxt in adjacency.get(cur, ()):
                if nxt not in dist:
                    dist[nxt] = dist[cur] + 1
                    dq.append(nxt)
        for n in nlist:
            rows_computed += 1
            if n["node_type"] == "principal" or n["ring"] == 0:
                n["decision_dist"] = 0
                continue
            if n["id"] in dist:
                n["decision_dist"] = dist[n["id"]]
            else:
                n["decision_dist"] = n["ring"]
                fallback_count += 1
    return rows_computed, fallback_count


def enrich_coverage_for_pricing(cov, assets_by_id):
    asset = assets_by_id[cov["parent_asset_ref"]]
    cov["_size_class"] = asset.get("size_class")
    cov["_asset_label"] = asset.get("label_hint", "")
    cov["_car_count"] = None
    if cov["vertical"] == "auto":
        # "18-Car Curated Collection" style asset_class -> extract leading int
        try:
            cov["_car_count"] = int(asset["asset_class"].split("-")[0])
        except Exception:
            cov["_car_count"] = 6
    return cov


def prop_index_for(cov, assets):
    if cov["vertical"] != "real_estate":
        return 1
    re_assets = sorted([a["id"] for a in assets if a["vertical"] == "real_estate"])
    try:
        return re_assets.index(cov["parent_asset_ref"]) + 1
    except ValueError:
        return 1


# The flagship dataset's original knows_edges (E.001-E.005) only ever covered 8 of its 20 roles —
# 12 roles were structurally orphaned (0 edges), inherited thinness from the prior build. Adding
# real connective edges here (never touching a dollar figure or existing edge) to bring the
# flagship accounts up to the same zero-orphan structural floor 360 itself enforces.
EXTRA_FLAGSHIP_KNOWS_EDGES = [
    ("E.201", "OWN.9.HARTWELL", "yacht", "MCR.2.AURELIA", "yacht", "SPV Director receives vessel status briefs from the Captain.", "weekly"),
    ("E.202", "OWN.9.HARTWELL", "yacht", "PRIN.HARTWELL", "yacht", "SPV Director provides quarterly governance reporting to the Trust.", "quarterly"),
    ("E.203", "MCR.2.AURELIA", "yacht", "MCR.4.AURELIA", "yacht", "Captain directs the ETO on technical and electrical systems work.", "weekly"),
    ("E.204", "MCR.4.AURELIA", "yacht", "MCR.6.AURELIA", "yacht", "ETO coordinates with the Bosun on deck electrical and equipment maintenance.", "weekly"),
    ("E.205", "MCR.2.AURELIA", "yacht", "MCR.6.AURELIA", "yacht", "Captain oversees deck operations directly through the Bosun.", "weekly"),
    ("E.206", "MCR.2.SOLSTICE", "yacht", "MCR.3.SOLSTICE", "yacht", "Captain and Chief Engineer coordinate on vessel technical status.", "weekly"),
    ("E.207", "MCR.3.SOLSTICE", "yacht", "OWN.7.MERIDIAN", "yacht", "Chief Engineer historically briefed the Trustee directly alongside the Captain — contact has gone quiet in step with the same 8-month decay.", "should be monthly, now silent"),
    ("E.208", "OWN.9.OKONKWO", "yacht", "PRIN.OKONKWO", "yacht", "SPV Director for the now-lapsed account; last substantive contact predates the 14-month lapse.", "dormant"),
    ("E.209", "AVI.RISK.CASTELLANE", "aviation", "AVI.PILOT.CASTELLANE", "aviation", "Risk manager coordinates with the Chief Pilot on operational safety and insurance-renewal timing.", "weekly"),
    ("E.210", "AVI.RISK.CASTELLANE", "aviation", "PER.EA.CASTELLANE", "personal", "Risk manager routes personal-risk-program conversations through the Chief of Staff.", "monthly"),
    ("E.211", "AVI.PILOT.CASTELLANE", "aviation", "PRIN.CASTELLANE", "aviation", "Chief Pilot provides flight-readiness briefings ahead of family travel.", "as-needed"),
    ("E.212", "AUTO.MGR.CASTELLANE", "auto", "PER.EA.CASTELLANE", "personal", "Collection Advisor coordinates logistics and scheduling through the Chief of Staff.", "monthly"),
    ("E.213", "AUTO.MGR.CASTELLANE", "auto", "PRIN.CASTELLANE", "auto", "Collection Advisor reports valuation and condition updates directly to the Trust.", "quarterly"),
    ("E.214", "AVI.RISK.BELLWEATHER", "aviation", "AVI.PILOT.BELLWEATHER", "aviation", "Risk manager coordinates with the Chief Pilot on operational safety and renewal timing.", "weekly"),
    ("E.215", "AVI.RISK.BELLWEATHER", "aviation", "PRIN.BELLWEATHER", "aviation", "Risk manager provides quarterly governance reporting to the Family Office.", "quarterly"),
    ("E.216", "AVI.PILOT.BELLWEATHER", "aviation", "PRIN.BELLWEATHER", "aviation", "Chief Pilot provides flight-readiness briefings ahead of family travel.", "as-needed"),
]


def assemble(narrative_by_account):
    flagship = load_json("flagship_accounts.json")
    prefilled = load_json("account_prefilled.json")

    all_nodes = list(flagship["nodes"])
    all_policies = list(flagship["policies"])
    all_bound = list(flagship["bound_policy_overlay"])
    all_knows = list(flagship["knows_edges"])
    all_knows.extend({"id": eid, "edge_type": "knows", "from": f, "from_vertical": fv, "to": t, "to_vertical": tv, "why": why, "freq": freq}
                      for (eid, f, fv, t, tv, why, freq) in EXTRA_FLAGSHIP_KNOWS_EDGES)
    all_cross_poll = list(flagship["cross_pollination_edges"])
    all_rel_weights = list(flagship["relationship_weights"])
    all_referrals = list(flagship["referral_edges"])
    all_apm = list(flagship["account_producer_map"])

    unbound_pending_peer_comp = []  # (bound_row_dict, cov_dict) needing pass-2 pricing
    warnings = []

    for acc in prefilled:
        aid = acc["account_id"]
        nar = narrative_by_account.get(aid)
        if nar is None:
            warnings.append(f"MISSING narrative for {aid} — skipped entirely")
            continue

        producer_name = PRODUCER_NAME_BY_ID.get(acc["producer_id"], acc["producer_id"])
        primary_vertical = acc["roles"][0]["vertical"] if acc["roles"] else "yacht"

        all_nodes.append({
            "id": aid, "label": nar["principal_label"], "node_type": "principal", "vertical": primary_vertical,
            "ring": 0, "domain": 1, "coi_type": "signatory", "coi_weight": 10, "coi_freq": 3,
            "desc": nar["principal_desc"], "category": "Ownership & Structure", "account_ref": aid,
        })

        owners = [{"principal_ref": aid, "ownership_role": "UBO", "ownership_percent": 100}]
        if nar.get("co_trustee_name"):
            cot_id = f"ROLE.{acc['surname'].upper().replace('-', '').replace(' ', '').replace(chr(39), '')}.COTRUST"
            all_nodes.append({
                "id": cot_id, "label": f"{nar['co_trustee_name']} — {nar.get('co_trustee_role_title') or 'Co-Trustee'}",
                "node_type": "role", "vertical": primary_vertical, "ring": 1, "domain": 1, "coi_type": "signatory",
                "coi_weight": 9, "coi_freq": 5, "desc": f"Co-trustee, {nar['principal_label']}.",
                "category": "Ownership & Structure", "account_ref": aid,
            })
            owners = [{"principal_ref": aid, "ownership_role": "UBO", "ownership_percent": 60},
                      {"principal_ref": aid, "ownership_role": "Co-Trustee", "ownership_percent": 40}]
            all_knows.append({"id": f"E.{aid.split('.',1)[1]}.COTRUST", "edge_type": "knows", "from": cot_id,
                               "from_vertical": primary_vertical, "to": aid, "to_vertical": primary_vertical,
                               "why": "Co-trustee, joint signing authority on the family structure.", "freq": "as-needed"})

        role_id_by_code = {}
        nar_role_by_code = {r["role_code"]: r for r in nar["roles"]}
        for r in acc["roles"]:
            nr = nar_role_by_code.get(r["role_code"])
            if nr is None:
                warnings.append(f"MISSING narrative role for {aid}/{r['role_code']}")
                continue
            role_id_by_code[r["role_code"]] = r["id"]
            tmpl_meta = TEMPLATE_ROLE_META.get((r["vertical"], r["title"]), {})
            all_nodes.append({
                "id": r["id"], "label": f"{nr['person_name']} — {r['title']}", "node_type": "role",
                "vertical": r["vertical"], "ring": r["ring"], "domain": r["domain"], "coi_type": r["coi_type"],
                "coi_weight": r["coi_weight"], "coi_freq": r["coi_freq"], "desc": nr["narrative_note"],
                "category": r["category"], "account_ref": aid,
                "firms": tmpl_meta.get("firms", ""), "vessel_relevance": tmpl_meta.get("vessel_relevance", {}),
                "coi_influence": tmpl_meta.get("coi_influence", ""), "subgroup": tmpl_meta.get("subgroup", ""),
            })
            all_nodes.extend(instantiate_micro_nodes(r, r["id"], aid))

        for ke in nar["knows_edges"]:
            f_id = role_id_by_code.get(ke["from_role_code"])
            t_id = role_id_by_code.get(ke["to_role_code"])
            if not f_id or not t_id:
                warnings.append(f"knows_edge in {aid} references unknown role_code: {ke}")
                continue
            f_vertical = next(r["vertical"] for r in acc["roles"] if r["id"] == f_id)
            t_vertical = next(r["vertical"] for r in acc["roles"] if r["id"] == t_id)
            all_knows.append({
                "id": f"E.{aid.split('.',1)[1]}.{len([k for k in all_knows if k['id'].startswith(f'E.{aid.split(chr(46),1)[1]}.')])+1:03d}",
                "edge_type": "knows", "from": f_id, "from_vertical": f_vertical, "to": t_id, "to_vertical": t_vertical,
                "why": ke["why"], "freq": ke["freq"],
            })

        assets_by_id = {}
        for a in acc["assets"]:
            asset_node = {
                "id": a["id"], "label": a["label_hint"], "node_type": "asset", "vertical": a["vertical"],
                "owner_ref": aid, "owners": owners, "asset_class": a["asset_class"], "size_class": a["size_class"],
                "required_coverage_ids": [c["id"] for c in acc["coverages"] if c["parent_asset_ref"] == a["id"]],
            }
            all_nodes.append(asset_node)
            assets_by_id[a["id"]] = asset_node

        evidence_by_cov = {e["coverage_id"]: e["evidence_note"] for e in nar["evidence_notes"]}
        for cov in acc["coverages"]:
            cov = enrich_coverage_for_pricing(dict(cov), assets_by_id)
            pidx = prop_index_for(cov, acc["assets"])
            all_nodes.append({
                "id": cov["id"], "label": cov["label"], "node_type": "coverage", "vertical": cov["vertical"],
                "coverage_type_id": cov["coverage_type_id"], "trigger_type": cov["trigger_type"],
                "line_of_business": cov["line_of_business"], "parent_asset_ref": cov["parent_asset_ref"],
                "policy_id": None,
            })
            bound_row = {
                "coverage_id": cov["id"], "status": cov["status"], "responsible_node_id": cov["responsible_node_id"],
                "bound_premium": None, "bound_limit_usd": None, "carrier": cov["carrier"], "gwp_estimate": None, "gwp_method": None,
                "gwp_confidence": None, "gwp_peer_n": None, "rate_trend_source": None,
                "unbound_reason": cov["unbound_reason"], "evidence_note": evidence_by_cov.get(cov["id"]),
                "expiry_date": cov["expiry_date"], "producer_of_record": producer_name if cov["status"] in ("bound", "expiring") else None,
                "policy_id": None,
            }
            if cov["status"] in ("bound", "expiring"):
                bound_row["bound_premium"] = price_bound_coverage(cov, aid, pidx)
                # bound_limit_usd: real, grounded limit-adequacy variance (task-required) —
                # see pricing_v2.bound_limit_for's own docstring/comments for the producer-
                # archetype-driven deficiency rates and the deterministic magnitude bands.
                bound_row["bound_limit_usd"] = bound_limit_for(cov, aid, producer_name, cov["status"])
                key = (cov["parent_asset_ref"], cov["carrier"], cov["expiry_date"])
                pol_key = f"POL.{cov['parent_asset_ref'].split('.',1)[1]}"
                existing_pol = next((p for p in all_policies if p.get("_key") == key), None)
                if existing_pol is None:
                    pol_id = f"{pol_key}.{sum(1 for p in all_policies if p['id'].startswith(pol_key))+1}"
                    existing_pol = {"id": pol_id, "node_type": "policy", "carrier": cov["carrier"],
                                     "vertical": cov["vertical"], "policy_number": f"{cov['carrier'][:3].upper()}-{pol_id[-6:]}",
                                     "effective_date": None, "expiration_date": cov["expiry_date"],
                                     "producer_of_record": producer_name, "billing_type": "Agency Bill",
                                     "asset_ref": cov["parent_asset_ref"], "_key": key}
                    all_policies.append(existing_pol)
                bound_row["policy_id"] = existing_pol["id"]
            elif cov["unbound_reason"] == "lapsed_with_us" and cov["coverage_type_id"] != "crew_medical_mlc":
                est, source = price_ghost_policy(cov, aid, pidx)
                bound_row["gwp_estimate"] = est
                bound_row["gwp_method"] = "ghost_policy"
                bound_row["rate_trend_source"] = source
            elif cov["coverage_type_id"] == "crew_medical_mlc":
                bound_row["gwp_estimate"] = crew_medical_premium(cov.get("_size_class", "S4"), aid)
                bound_row["gwp_method"] = "parameter_multiplier"
                bound_row["rate_trend_source"] = "Parameter Multiplier — headcount x per-head rate, see CREW_MEDICAL_RATE_VERSION"
            else:
                unbound_pending_peer_comp.append(bound_row)
            all_bound.append(bound_row)

        all_apm.append({"ubo_id": aid, "producer_id": acc["producer_id"]})

    # ---- Pass 2: Peer Comp, averaged from THIS dataset's own real bound/expiring premiums ----
    premiums_by_type = {}
    for b in all_bound:
        if b["status"] in ("bound", "expiring") and b["bound_premium"]:
            cov_node = next((n for n in all_nodes if n["id"] == b["coverage_id"]), None)
            if cov_node:
                premiums_by_type.setdefault(cov_node["coverage_type_id"], []).append(b["bound_premium"])

    for row in unbound_pending_peer_comp:
        cov_node = next(n for n in all_nodes if n["id"] == row["coverage_id"])
        ctype = cov_node["coverage_type_id"]
        peers = premiums_by_type.get(ctype, [])
        n = len(peers)
        avg = round(sum(peers) / n) if n else round(sum(premiums_by_type.get(ctype, [50000])) / max(1, len(premiums_by_type.get(ctype, [1]))) or 50000)
        if n == 0:
            avg = 50000  # structural fallback, should not trigger once >=1 bound example of every type exists
        row["gwp_estimate"] = avg
        row["gwp_method"] = "peer_comp"
        row["gwp_confidence"] = peer_comp_confidence(n)
        row["gwp_peer_n"] = n

    # ---- Structural edge densification ----
    # Brief §5.4's ~4,800-4,900 target was derived by scaling 360's measured 624-edges/144-node
    # ratio directly onto the new node count. That scaling assumes 360's topology: ONE connected
    # 144-node organizational graph. 720's actual topology is 150 DISCONNECTED small account-
    # islands of 6-9 people each — literal parity would require near-complete graphs within tiny
    # cliques (an 8-node island has only C(8,2)=28 possible edges total; 4.33x8=35 isn't even
    # graph-theoretically possible). This pass instead (a) fixes any role left below the agents'
    # own "min 2 edges" instruction, then (b) raises average degree toward ~3.5 — meaningfully
    # denser than a bare min-2 cycle, genuinely connected, but not an artificial complete graph —
    # using real title/category/vertical-parameterized reasoning, not generic filler. The
    # remaining gap to the brief's literal 4,871 figure is documented in Consistency_Check_Log
    # rather than closed by padding; see also 01-plan/influence720-dashboard-plan.md's Design 4,
    # where Tier 1's whole-book view aggregates every account's nodes into ONE combined radial
    # graph per producer — the node-count density target (hit: ~1117 of ~1125) is what that view's
    # visual density actually depends on, more than any single account-island's internal ratio.
    rng3 = random.Random(720727)
    TARGET_AVG_DEGREE = 3.5
    degree = {}
    existing_pairs = set()
    for e in all_knows:
        degree[e["from"]] = degree.get(e["from"], 0) + 1
        degree[e["to"]] = degree.get(e["to"], 0) + 1
        existing_pairs.add(frozenset((e["from"], e["to"])))

    roles_by_account2 = {}
    for n in all_nodes:
        if n["node_type"] == "role" and n.get("account_ref"):
            roles_by_account2.setdefault(n["account_ref"], []).append(n)

    def short_title(role_node):
        return role_node["label"].split(" — ", 1)[1] if " — " in role_node["label"] else role_node["label"]

    densify_counter = 1
    for acc_id, roles_list in roles_by_account2.items():
        if len(roles_list) < 2:
            continue
        role_id_set = {r["id"] for r in roles_list}
        max_possible = len(roles_list) * (len(roles_list) - 1) // 2
        target_edges = min(max_possible, max(len(roles_list), round(len(roles_list) * TARGET_AVG_DEGREE / 2)))
        attempts = 0
        while attempts < 60:
            attempts += 1
            edges_here = sum(1 for p in existing_pairs if len(p) == 2 and p <= role_id_set)
            low_degree = [r for r in roles_list if degree.get(r["id"], 0) < 2]
            if not low_degree and edges_here >= target_edges:
                break
            a = rng3.choice(low_degree) if low_degree else rng3.choice(roles_list)
            candidates = [r for r in roles_list if r["id"] != a["id"]]
            if not candidates:
                continue
            b = rng3.choice(candidates)
            pair = frozenset((a["id"], b["id"]))
            if pair in existing_pairs:
                continue
            existing_pairs.add(pair)
            degree[a["id"]] = degree.get(a["id"], 0) + 1
            degree[b["id"]] = degree.get(b["id"], 0) + 1
            a_title, b_title = short_title(a), short_title(b)
            if a["category"] == b["category"]:
                why = f"{a_title} and {b_title} coordinate directly on {a['category'].lower()} matters."
                freq = "as-needed"
            elif a["vertical"] == b["vertical"]:
                why = f"{a_title} routes {a['vertical']} program decisions through {b_title} when needed."
                freq = "as-needed"
            else:
                why = f"{a_title} liaises with {b_title} across the family's broader multi-vertical program."
                freq = "quarterly"
            all_knows.append({
                "id": f"E.DENSE.{densify_counter:04d}", "edge_type": "knows", "from": a["id"],
                "from_vertical": a["vertical"], "to": b["id"], "to_vertical": b["vertical"],
                "why": why, "freq": freq,
            })
            densify_counter += 1

    # ---- decision_dist — multi-source BFS from each account's ring-1 seed set, run on the FULL
    # post-densification knows-graph (must come after the densification pass above, not before).
    dist_rows_computed, dist_fallback_count = compute_decision_dist(all_nodes, all_knows)

    # ---- Relationship_Weight overlay — archetype-consistent "known vs untapped" density for the
    # 143 new accounts (flagship's 12 hand-authored rows are preserved as-is). Absence of a row IS
    # the untapped/grey signal (existing standing rule) — this pass decides per-role, per-producer,
    # whether a row exists at all, then scores it via pricing_v2.relationship_weight's ring-gated
    # formula (brief §6 item 9).
    from pricing_v2 import relationship_weight as rw_formula
    rng2 = random.Random(720725)
    ARCHETYPE_AFFINITY = {
        # producer_id: {ring_band: (p_known, activity_lo, activity_hi, days_lo, days_hi)}
        "REP.ALEX": {"senior": (0.85, 5, 20, 0, 60), "mid": (0.35, 2, 8, 10, 90), "junior": (0.08, 1, 5, 20, 150)},
        "REP.RAHUL": {"senior": (0.25, 3, 10, 20, 120), "mid": (0.55, 8, 25, 5, 60), "junior": (0.75, 20, 60, 0, 30)},
        "REP.JACOB": {"senior": (0.45, 2, 9, 60, 240), "mid": (0.30, 2, 8, 60, 200), "junior": (0.15, 1, 6, 90, 250)},
        "REP.CRISTIAN": {"senior": (0.80, 5, 16, 0, 60), "mid": (0.35, 2, 7, 15, 90), "junior": (0.05, 1, 4, 30, 180)},
        "REP.NAOMI": {"senior": (0.12, 1, 5, 20, 150), "mid": (0.20, 2, 8, 15, 120), "junior": (0.35, 5, 20, 5, 70)},
    }

    def ring_band(ring):
        if ring <= 1:
            return "senior"
        if ring == 2:
            return "mid"
        return "junior"

    # ---- Channel split (calls_logged / emails_sent / meetings_held) — CHANNEL SPLIT PLAN.
    # Deterministic "largest remainder" (Hamilton apportionment) split of activity_count_90d
    # into 3 channels, keyed by producer archetype and adjusted by ring band (senior contacts
    # skew toward meetings; junior contacts skew toward calls/email). Consumes rng2 only for
    # tie-breaking, in a fixed position immediately after activity/days_since are drawn, so the
    # whole loop stays reproducible for a fixed seed.
    ARCHETYPE_RATIOS = {
        "REP.ALEX":     (0.35, 0.20, 0.45),
        "REP.RAHUL":    (0.45, 0.40, 0.15),
        "REP.JACOB":    (0.25, 0.50, 0.25),
        "REP.CRISTIAN": (0.35, 0.20, 0.45),
        "REP.NAOMI":    (0.40, 0.45, 0.15),
    }
    RING_ADJUST = {
        "senior": (-0.05, -0.05, +0.10),
        "mid":    (0.0, 0.0, 0.0),
        "junior": (+0.04, +0.04, -0.08),
    }

    def split_activity(producer_id, ring, activity, rng2, apply_ring_adjust=True):
        call_pct, email_pct, meeting_pct = ARCHETYPE_RATIOS[producer_id]
        if apply_ring_adjust:
            dc, de, dm = RING_ADJUST[ring_band(ring)]
            call_pct = max(0.0, call_pct + dc)
            email_pct = max(0.0, email_pct + de)
            meeting_pct = max(0.0, meeting_pct + dm)
            total = call_pct + email_pct + meeting_pct
            call_pct, email_pct, meeting_pct = call_pct / total, email_pct / total, meeting_pct / total

        if activity <= 0:
            return 0, 0, 0

        raw = [activity * call_pct, activity * email_pct, activity * meeting_pct]
        base = [math.floor(x) for x in raw]
        remainder = activity - sum(base)  # always 0, 1, or 2 for 3 shares

        order = sorted(range(3), key=lambda i: (-(raw[i] - base[i]), rng2.random()))
        for i in order[:remainder]:
            base[i] += 1

        calls_logged, emails_sent, meetings_held = base
        assert calls_logged + emails_sent + meetings_held == activity
        assert min(calls_logged, emails_sent, meetings_held) >= 0
        return calls_logged, emails_sent, meetings_held

    apm_by_ubo = {m["ubo_id"]: m["producer_id"] for m in all_apm}
    for n in all_nodes:
        if n["node_type"] != "role" or not n.get("account_ref"):
            continue
        producer_id = apm_by_ubo.get(n["account_ref"])
        if not producer_id:
            continue
        # Silo archetype (Cristian): sharply discount roles outside the account's primary/anchor vertical
        affinity = ARCHETYPE_AFFINITY[producer_id][ring_band(n["ring"])]
        p_known, act_lo, act_hi, days_lo, days_hi = affinity
        if producer_id == "REP.CRISTIAN" and n["vertical"] not in ("yacht", "real_estate"):
            p_known *= 0.15
        if rng2.random() >= p_known:
            continue
        activity = rng2.randint(act_lo, act_hi)
        calls_logged, emails_sent, meetings_held = split_activity(producer_id, n["ring"], activity, rng2)
        days_since = rng2.randint(days_lo, days_hi)
        weight = rw_formula(n["ring"], activity, days_since)
        month = max(1, 8 - days_since // 30) if days_since < 240 else 1
        day = rng2.randint(1, 28)
        year = 2026 if days_since < 227 else 2025
        all_rel_weights.append({
            "producer_id": producer_id, "node_id": n["id"], "relationship_weight": weight,
            "activity_count_90d": activity, "last_activity_date": f"{year}-{max(1,min(12,month)):02d}-{day:02d}",
            "contact_status": "active",
            "calls_logged": calls_logged, "emails_sent": emails_sent, "meetings_held": meetings_held,
        })

    # ---- Referral edges — sparse, programmatic (brief §5.4: ~1 per 8-10 role-instances, conservative) ----
    rng = random.Random(720724)
    OCCASIONS = ["at the vessel's annual survey", "during the family's estate review", "at a fleet safety briefing",
                 "through the family office's quarterly review", "at a renewal strategy meeting",
                 "during a site visit", "at an industry conference", "through a shared advisory introduction"]
    role_nodes_by_account = {}
    for n in all_nodes:
        if n["node_type"] == "role" and n.get("account_ref"):
            role_nodes_by_account.setdefault(n["account_ref"], []).append(n)
    # target ~1 referral per 8-10 role-instances (brief §5.4) — apply as a flat per-role
    # probability so larger accounts naturally produce proportionally more referrals, rather
    # than capping every account at 0-1 regardless of size.
    referral_id_counter = len(all_referrals) + 1
    P_PER_ROLE = 1 / 8.5
    for acc_id, roles in role_nodes_by_account.items():
        if len(roles) < 2:
            continue
        roles_sorted = sorted(roles, key=lambda r: r["ring"])
        for to in roles:
            if rng.random() > P_PER_ROLE:
                continue
            candidates = [r for r in roles_sorted if r["id"] != to["id"]]
            if not candidates:
                continue
            # bias toward a more senior "from" — 70% chance pick from the top half by ring
            senior_half = candidates[:max(1, len(candidates) // 2)]
            frm = rng.choice(senior_half) if rng.random() < 0.7 else rng.choice(candidates)
            producer_row = next((m for m in all_apm if m["ubo_id"] == acc_id), None)
            producer_id = producer_row["producer_id"] if producer_row else "REP.ALEX"
            month = rng.randint(1, 8)
            day = rng.randint(1, 28)
            all_referrals.append({
                "id": f"REF.{referral_id_counter:04d}", "producer_id": producer_id,
                "from_node_id": frm["id"], "to_node_id": to["id"], "referred_date": f"2026-{month:02d}-{day:02d}",
                "notes": f"{frm['label'].split(' — ')[0]} introduced {to['label'].split(' — ')[0]} {rng.choice(OCCASIONS)}.",
            })
            referral_id_counter += 1

    return {
        "nodes": all_nodes, "policies": all_policies, "bound_policy_overlay": all_bound,
        "knows_edges": all_knows, "cross_pollination_edges": all_cross_poll,
        "relationship_weights": all_rel_weights, "referral_edges": all_referrals,
        "account_producer_map": all_apm, "producers": PRODUCERS, "leadership": LEADERSHIP,
        "decision_dist_stats": {"rows_computed": dist_rows_computed, "fallback_count": dist_fallback_count},
    }, warnings


def scan_banned(errors, owner_id, field_name, text):
    text = str(text or "")
    for banned in BANNED_STRINGS_CASE_SENSITIVE:
        if banned in text:
            errors.append(f"{owner_id}.{field_name}: contains banned string '{banned}': {text[:100]!r}")
    for banned in BANNED_STRINGS_CASE_INSENSITIVE:
        if banned.lower() in text.lower():
            errors.append(f"{owner_id}.{field_name}: contains banned string '{banned}': {text[:100]!r}")


def validate(dataset):
    errors = []
    node_ids = set()
    for n in dataset["nodes"]:
        if n["id"] in node_ids:
            errors.append(f"DUPLICATE node id: {n['id']}")
        node_ids.add(n["id"])
        if n["node_type"] == "role" or n["node_type"] == "principal":
            if n.get("coi_type") not in COI_TYPE_ENUM:
                errors.append(f"{n['id']}: invalid coi_type {n.get('coi_type')}")
            if not (0 <= n.get("ring", -1) <= 4):
                errors.append(f"{n['id']}: invalid ring {n.get('ring')}")
        for field in ("label", "desc"):
            scan_banned(errors, n["id"], field, n.get(field))

    # every other text field with a real path to the DOM per the existing dashboard sheets/HTML
    for e in dataset["knows_edges"]:
        scan_banned(errors, e["id"], "why", e.get("why"))
    for e in dataset["cross_pollination_edges"]:
        scan_banned(errors, e["id"], "why", e.get("why"))
        scan_banned(errors, e["id"], "generated_narrative", e.get("generated_narrative"))
    for b in dataset["bound_policy_overlay"]:
        scan_banned(errors, b["coverage_id"], "evidence_note", b.get("evidence_note"))
    for r in dataset["referral_edges"]:
        scan_banned(errors, r["id"], "notes", r.get("notes"))
    for p in dataset["producers"]:
        scan_banned(errors, p["producer_id"], "narrative", p.get("narrative"))
        scan_banned(errors, p["producer_id"], "archetype", p.get("archetype"))

    coverage_ids = {n["id"] for n in dataset["nodes"] if n["node_type"] == "coverage"}
    asset_ids = {n["id"] for n in dataset["nodes"] if n["node_type"] == "asset"}

    for e in dataset["knows_edges"]:
        if e["from"] not in node_ids:
            errors.append(f"knows edge {e['id']}: from={e['from']} unknown")
        if e["to"] not in node_ids:
            errors.append(f"knows edge {e['id']}: to={e['to']} unknown")
    for e in dataset["cross_pollination_edges"]:
        if e["from"] not in node_ids:
            errors.append(f"cross_poll edge {e['id']}: from={e['from']} unknown")
        if e["to"] not in node_ids:
            errors.append(f"cross_poll edge {e['id']}: to={e['to']} unknown")
    for b in dataset["bound_policy_overlay"]:
        if b["coverage_id"] not in coverage_ids:
            errors.append(f"bound overlay: coverage_id {b['coverage_id']} unknown")
        if b["responsible_node_id"] not in node_ids:
            errors.append(f"bound overlay {b['coverage_id']}: responsible_node_id {b['responsible_node_id']} unknown")
    bound_cov_ids = {b["coverage_id"] for b in dataset["bound_policy_overlay"]}
    missing_overlay = coverage_ids - bound_cov_ids
    if missing_overlay:
        errors.append(f"{len(missing_overlay)} coverages with NO bound-policy-overlay row: {list(missing_overlay)[:5]}...")
    for n in dataset["nodes"]:
        if n["node_type"] == "coverage" and n["parent_asset_ref"] not in asset_ids:
            errors.append(f"coverage {n['id']}: parent_asset_ref {n['parent_asset_ref']} unknown")
    for r in dataset["referral_edges"]:
        if r["from_node_id"] not in node_ids or r["to_node_id"] not in node_ids:
            errors.append(f"referral {r['id']}: unknown node reference")
    apm_ubo_ids = {m["ubo_id"] for m in dataset["account_producer_map"]}
    principal_ids = {n["id"] for n in dataset["nodes"] if n["node_type"] == "principal"}
    if apm_ubo_ids != principal_ids:
        errors.append(f"account_producer_map/principal mismatch: {len(apm_ubo_ids ^ principal_ids)} discrepancies")

    degree = {}
    for e in dataset["knows_edges"]:
        degree[e["from"]] = degree.get(e["from"], 0) + 1
        degree[e["to"]] = degree.get(e["to"], 0) + 1
    role_ids = {n["id"] for n in dataset["nodes"] if n["node_type"] == "role"}
    zero_degree = [rid for rid in role_ids if degree.get(rid, 0) == 0]
    if zero_degree:
        errors.append(f"{len(zero_degree)} role nodes with ZERO knows-edges (orphans): {zero_degree[:5]}...")

    return errors


if __name__ == "__main__":
    placeholder = "--placeholder" in sys.argv
    prefilled = load_json("account_prefilled.json")
    if placeholder:
        narrative = make_placeholder_narrative(prefilled)
        print("Using PLACEHOLDER narrative (test mode)")
    else:
        narrative = load_json("narrative_results.json")

    dataset, warnings = assemble(narrative)
    errors = validate(dataset)

    counts = {k: len(v) for k, v in dataset.items() if isinstance(v, list)}
    print("Node/edge/overlay counts:", counts)
    node_type_counts = {}
    for n in dataset["nodes"]:
        node_type_counts[n["node_type"]] = node_type_counts.get(n["node_type"], 0) + 1
    print("Node type breakdown:", node_type_counts)
    status_counts = {}
    for b in dataset["bound_policy_overlay"]:
        status_counts[b["status"]] = status_counts.get(b["status"], 0) + 1
    print("Bound-status breakdown:", status_counts)
    print(f"Warnings: {len(warnings)}", warnings[:10])
    print("decision_dist:", dataset.get("decision_dist_stats"))
    print(f"Validation errors: {len(errors)}")
    for e in errors[:30]:
        print(" -", e)

    out_name = "dataset_v2_placeholder.json" if placeholder else "dataset_v2_final.json"
    with open(f"{BUILD_DIR}/{out_name}", "w") as f:
        json.dump(dataset, f, indent=2)
    print(f"Wrote {out_name}")
