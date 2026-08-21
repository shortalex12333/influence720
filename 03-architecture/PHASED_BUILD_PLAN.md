# Influence 720 — Reconciled Phased Build Plan (v1, post-stress-test)

Source: automated audit of `influence360-yachts.html` (live code, not memory) + parallel schema/sequence
design + adversarial stress-test. The stress-test found two **blocking** contradictions between the
schema and sequence proposals; both are resolved below in favor of the option stated, with the reason
stated. Everything else in this document is the reconciled, single version of truth — no more forking
between "the schema doc says" and "the sequence doc says."

---

## 0. Governing decision

**`/Users/celeste7/Downloads/influence360-yachts.html` is never edited, ever, in this project.** It's
shown standalone in the SVP deck — zero risk tolerance. Everything below happens in a fork:
`legacy/influence360-yachts.html` (untouched copy) + `engine/render-core.js` (the same JS, extracted,
unmodified, then patched going forward).

A **one-way generator script** parses 360's inline `DATA`/`TALKS_TO` (these are non-strict JS object
literals — unquoted keys, trailing commas — so this needs a sandboxed parse, not `JSON.parse`) and emits
`ontology-720.json`, the single ground-truth dataset all three tiers read. Hand-fixing something in 360
after today does not auto-propagate — the generator has to be re-run. That's an accepted one-directional
sync cost, chosen specifically to avoid the alternative risk: refactoring 360 into a shared module and
threatening the artifact that's already been shown.

---

## 1. RESOLVED — Contradiction #1: domain/vertical numbering

**Decision: per-vertical, not global.** Each vertical gets its own small domain list, keyed as a
compound (`vertical`, `domain`) pair:

```json
"DOMAINS_BY_VERTICAL": {
  "yacht":    { "count": 9, "list": ["<the original 9 DOMAINS entries, untouched>"] },
  "aviation": { "count": 4, "list": [
    {"id": 1, "name": "Ownership & Structure"},
    {"id": 2, "name": "Airworthiness & Compliance"},
    {"id": 3, "name": "FBOs & Ground Ops"},
    {"id": 4, "name": "Insurance & Finance"}
  ]}
}
```

`domain: 2` means something different depending on `vertical` — fine, because the two are never drawn in
the same angular space. The 720 engine's angular math is a **new implementation** (not a patch to 360's
`sectorStart()`), keyed off `N_DOMAINS_BY_VERTICAL[node.vertical]`.

**Why not the global-numbering alternative** (yacht keeps 1–9, aviation gets 10–13, one shared circle):
it would silently thin the yacht sectors to make room for 20+ more slices on one circle — a visible,
undocumented divergence from the exact artifact already shown to the SVP. Per-vertical keeps yacht's
proportions byte-identical to what's already been seen.

---

## 2. RESOLVED — Contradiction #2: where GWP / bound-status data lives

**Decision: overlay file, never baked onto the node.** `bound-policy-overlay.json`, keyed by `coverage_id`:

```json
{ "coverage_id": "COV.YAC.001.HULL", "status": "bound", "bound_premium": 184000,
  "carrier": "Example Underwriters Ltd", "gwp_estimate": null, "gwp_method": null,
  "unbound_reason": null, "evidence_note": null }

{ "coverage_id": "COV.YAC.001.FINEART", "status": "unbound", "bound_premium": null,
  "gwp_estimate": 62000, "gwp_method": "ghost_policy",
  "unbound_reason": "lapsed_with_us", "evidence_note": "Bound with us 2022-2024, premium $18,000, allowed to lapse." }
```

`status` enum: `bound` (green) / `unbound` (red) / `expiring` (amber) — lives **only** here. Asset-level
$GWP (Tier 2's node size) is a rollup computed at render time (`sum` of each coverage's `gwp_estimate ??
bound_premium`), never stored redundantly on the Asset node.

**Correctness fix (post-launch finding, applied here rather than left live):** `status: "gap"` was
renamed to `status: "unbound"`, and a new `unbound_reason` field was added. Epic is our own agency's
ledger — it only knows what *we* bound. A coverage that isn't bound with us is not provably uninsured;
the client may hold it with a competitor, entirely invisible to Epic. Calling that state "gap" implies a
risk claim ("you're exposed") that the data can't actually support, and a producer repeating that claim
to a client who *does* hold the coverage elsewhere is a credibility failure in the exact meeting this
tier exists to win.

`unbound_reason` enum (only populated when `status: "unbound"`):
- `never_written` — no record either way. True whitespace, but say "unbound with us," never "uninsured."
- `lapsed_with_us` — we held it before and lost it. This is the Ghost Policy pricing trigger (§ the GWP
  Pricing Engine) — the two concepts were already the same case, just not named as one until now.
- `competitor_held` — a Salesforce signal (a call note, a mentioned carrier) indicates the client holds
  this elsewhere. Sourced from Salesforce, not Epic, since Epic structurally cannot see a competitor's
  book. This is a *displacement* opportunity, not a whitespace one — different pitch, different node
  treatment (§5c below).

The GWP number itself is still **precomputed** by a one-time build script (no reason for a live pricing
engine against mock data) — that part of the original sequence proposal was right. The bug was writing
the precomputed number onto the shared node instead of into this overlay.

### 2a. Rendering `unbound_reason` — badge, not a new color

Adding a fourth top-level color for `competitor_held` would blow past the "one plot, one clear signal"
discipline held everywhere else in this project (see Design 5's churn-panel decision in
`04-illustrations/ILLUSTRATIONS.md`). Instead: `status: unbound` stays red regardless of reason, and
`competitor_held` (and `lapsed_with_us`) get a **small badge/icon** on the node, with `evidence_note`
shown in the detail panel on click. Color answers "is this bound," the badge answers "why not, and how
sure are we" — two separate, non-competing signals instead of a fourth hue diluting the palette.

**Why this matters**: Tier 2's entire premise is comparing structural truth (the ontology) against bound
reality (Epic). If bound-status lives on the shared node, a second demo scenario (different fake Epic
snapshot) requires editing the locked dataset — exactly the coupling the overlay pattern exists to avoid.

---

## 3. Node model

Every node (including all 187 migrated yacht nodes) gets a new required field:

```
"node_type": "role" | "principal" | "asset" | "coverage"
```

- **`role`** — 360's existing Person/Role concept, unchanged in shape. Default for all 187 migrated nodes.
- **`principal`** — a subtype of `role` (same fields) for UBO/SPV/Family Office nodes, called out so Tier
  2 can walk "all Assets owned by this principal" without scanning every role node.
- **`asset`** — new:
  ```json
  { "id": "AST.YAC.001", "node_type": "asset", "vertical": "yacht",
    "label": "M/Y Example (70m Superyacht)", "owner_ref": "PRIN.SMITH.UBO",
    "required_coverage_ids": ["COV.YAC.001.HULL", "COV.YAC.001.PI", "COV.YAC.001.CREWMED", "COV.YAC.001.FINEART"],
    "size_class": "S6" }
  ```
- **`coverage`** — new, a **top-level sibling node, not nested under Asset** (not a `micro_node`):
  ```json
  { "id": "COV.YAC.001.HULL", "node_type": "coverage", "vertical": "yacht",
    "label": "Hull & Machinery", "coverage_type_id": "hull_machinery", "parent_asset_ref": "AST.YAC.001" }
  ```

**Why Coverage is not a `micro_node`**: the audit confirmed `micro_nodes` cannot be independently
targeted by any edge (0 of 624 existing edges reference one) and their `domain` field is silently
overwritten by the parent at render time. Tier 2 needs to attach a $GWP overlay, a cross-pollination
edge, and a bound-status filter to a Coverage individually — none of which the micro_node mechanism
supports.

`owner_ref` and `parent_asset_ref` are the canonical single-source pointers for Tier 2's UBO→Asset→
Coverage hierarchy — a direct 2-hop join, no graph traversal needed. If an `"owns"` edge is also wanted
in `EDGES_720` for vocabulary consistency, it's **generated from `owner_ref` at build time**, never
hand-authored separately.

`coverage_type_id` draws from a canonical `COVERAGE_CATALOG` registry (per vertical) — built specifically
so coverage lines don't repeat the `coi_type` drift the audit found (`transaction`/`transactional`/
`regulatory` — three inconsistent values with no enum enforcement, currently live in 360's data).

**Asset/Coverage nodes carry no `ring` and no `domain`.** They opt out of 360's radial/angular model —
forcing a physical asset onto a decision-distance ring is meaningless and would only reproduce the exact
silent-NaN failure the audit found in `buildLayout()` for undefined values. The 720 engine special-cases
`node_type !== 'role'` and routes Asset/Coverage through Tier-specific positioning logic instead.

---

## 4. Edge model — `EDGES_720`

A flat array (not `TALKS_TO`'s source-keyed object) — required once edges need bidirectional and
cross-vertical queries:

```json
{ "id": "E.0512", "edge_type": "cross_pollination",
  "from": "MCR.7", "from_vertical": "yacht",
  "to": "COV.AVI.001.LIAB", "to_vertical": "aviation",
  "via_relationship": { "ring": 1, "coi_weight": 9 },
  "why": "Same individual is Ring-1 for the yacht's Trustee and Aviation Risk Manager of record for the Gulfstream.",
  "generated_narrative": "Because Producer 1 has a Ring 1 relationship with the Yacht's Trustee, we have a direct, warm path to capture the $250,000 Aviation Liability policy on their Gulfstream." }
```

`edge_type` enum: `talks_to` (legacy, migrated unchanged) / `knows` (Tier 1, structural) / `referred_by`
(Tier 1, historical — actually lives in the producer overlay, §5, since it's Salesforce-sourced) /
`cross_pollination` (this one — **not** tagged as `talks_to` + a boolean flag, it gets its own enum value
specifically so it carries `via_relationship` and `generated_narrative`, which the demo needs pre-written
rather than derived live under presentation pressure).

**Cross-pollination edges target `Coverage` nodes, not `Asset` nodes** — the flagship sentence prices a
specific coverage line, so point directly at the gap, not at an extra hop away from it.

**Non-negotiable, confirmed structurally**: all 5 verticals ship in **one merged array**. 360's actual
render code does `layout.find(p => p.n.id === rel.to)` against data built only from the local array — an
edge target living in a separate per-vertical file that never got merged in fails silently, no error, no
visual trace. This is not a style preference, it's a proven failure mode in the code being reused.

**Person-identity across verticals**: the same human appearing as two vertical-specific node ids (yacht
GC / aviation risk manager) has no `same_as` link today. Add one — either collapse same-person nodes at
render time using the `cross_pollination` edge as the collapse signal (Tier 1 shows one dot with a small
"also X on the jet" badge), or an explicit `person_identity` field for deliberate dedup. Without this,
Tier 1's Book Weight Index could silently double-count one person as two.

---

## 5. Overlays — never on the shared node

### 5a. `producer-overlay.json` (Tier 1 only)

**Relationship weight** (personal, per producer×person — Tier 1 node size):
```json
{ "producer_id": "REP.014", "node_id": "MCR.7", "relationship_weight": 0.82,
  "activity_count_90d": 11, "last_activity_date": "2026-07-30" }
```
Explicitly distinct from the shared node's `coi_weight`/`coi_influence` (structural, identical for every
producer). A person with **no row here** renders grey/untapped — absence is the signal, no sentinel row
needed.

**Referral edges** (historical, dated, directional):
```json
{ "id": "REF.0231", "producer_id": "REP.014", "from_node_id": "MCR.2", "to_node_id": "LEG.5",
  "referred_date": "2026-03-11" }
```

### 5b. `bound-policy-overlay.json` (Tier 2 only) — see §2 above for the resolved shape.

### Naming fix (stress-test finding)

Both overlays originally used a field literally named `status` with non-overlapping enums (`active` vs.
`bound/gap/expiring`). Renamed to avoid a silent misjoin if a generic render helper reads `.status` off
whichever overlay it's handed: `producer-overlay.json` uses **`contact_status`**;
`bound-policy-overlay.json` keeps **`status`** (it's the primary key concept there).

### Why overlays, not embedding

Each overlay can be regenerated, edited, or swapped for a second demo scenario **without touching
`ontology-720.json`**, and the ontology can be regenerated from the 360 extractor **without touching any
overlay**. Three files, three different edit cadences, three different concerns (structural fact /
Salesforce mock / Epic mock), no coordinated multi-file rewrite ever required for a single change.

---

## 6. File/module map

```
legacy/influence360-yachts.html   ← UNTOUCHED, standalone in the SVP deck
generator/build-ontology-720.js   ← one-way: parses 360's DATA/TALKS_TO, normalizes coi_type variants, emits below
ontology-720.json                 ← nodes[] (role+principal+asset+coverage) + EDGES_720[] + COVERAGE_CATALOG + DOMAINS_BY_VERTICAL
producer-overlay.json             ← relationship_weight[] + referral_edges[]        (Tier 1 only)
bound-policy-overlay.json         ← per-coverage bound/gap/expiring + $GWP          (Tier 2 only)
data/producers.roster.js          ← 5-8 mock producer ids/names, shared by Tier 1 and Tier 3
data/overlays/archetypes.js       ← the 5 producer personas (Tier 3 only)
engine/render-core.js             ← shared read/join/layout logic; colorFn(node)/sizeFn(node) injected by caller, never hardcoded
```

---

## 7. Phased sequence

**Governing rule for every phase**: the legacy file is never edited in place — everything happens in the
fork established at Phase 0.

### Phase 0 — Freeze & Fork
Copy the legacy file untouched; extract its JS into `engine/render-core.js`.
**Added gate (stress-test finding)**: Phase 0.5 — render the legacy file and a scratch page built from
the unpatched extraction side by side, confirm parity, **before** any patching begins. Skipping this risks
a silently-dropped helper function propagating undetected through every later phase.

### Phase 1 — Schema & Contract Design (paper only, no data)
Locks: `node_type` enum, the resolved per-vertical domain scheme (§1), the resolved overlay-not-baked GWP
decision (§2), the `edge_type` vocabulary including `cross_pollination` with its full field shape (§4),
the `person_identity`/collapse-at-render decision for cross-vertical people, the `contact_status`/`status`
field rename, and the mock producer roster (needed by both Tier 1 and Tier 3 later).
Single-threaded, deliberately not parallelized — this is the contract everything else is priced against.
**🔒 Lock point.**

### Phase 2 — Extended Dataset + Patched Engine, Verified Standalone
Patch `render-core.js`: derive domain/ring counts from data instead of separate hardcoded constants, read
`node_type` and vertical-namespaced `domain`, add an Asset/Coverage rendering primitive with **injected**
`colorFn`/`sizeFn` (not hardcoded — this is what lets Tier 1 and Tier 2 reuse the same engine with
different color/size meanings without the second tier discovering there's no override point).
Generate `ontology-720.json` (187 migrated nodes + `node_type` added + `coi_type` variants normalized in
the generator's output copy only + new Asset/Coverage/UBO nodes across 5 verticals + the Yacht↔Aviation
cross-pollination edge as the proof case). Precompute GWP values via a one-time build script, writing them
into `bound-policy-overlay.json` (per §2's resolution, not onto the node).
Verification gate: `proof/dataset-verify.html` loads the dataset through the engine standalone — must
visibly render all 5 verticals, all node types, and the cross-vertical edge resolving to a real line, not
a silent drop.
**🔒 Lock point** — once verified, freeze all node/edge/producer-roster ids. Changing an id after this is
the most expensive possible rework (cascades into every overlay and every Tier).

### Phase 3 — Overlay Data Generation
`producer-weights.js` and `referrals.js` are keyed by Phase 2's locked node ids — sequential after the
lock. `archetypes.js` is keyed only by the producer roster from Phase 1 and **does not need Phase 2's
lock** (stress-test finding — the original sequence over-gated it) — start it right after Phase 1,
in parallel with Phase 2 itself.

### Phase 4 — Tier Dashboards (parallel build)
| Tier | Depends on | Can start when |
|---|---|---|
| **Tier 2** (Whitespace/Gap Engine) | Phase 2 dataset + `bound-policy-overlay.json` | Immediately after Phase 2 — earliest of the three |
| **Tier 1** (Producer Tactical Map) | Phase 2 dataset + `producer-weights.js` + `referrals.js` | After Phase 3's producer overlays land |
| **Tier 3** (Executive Command Center) | Phase 2 dataset (GWP totals) + `archetypes.js` | After `archetypes.js` (available early, per above) |

No cross-tier code dependency: Tier 1's single-account drill-in needs an Asset node's *data* (label,
vertical) for context only, never Tier 2's split-panel/gap-enumeration component. Three separate
rendering modules over one dataset, three genuinely different visual forms (radial-with-drill-in /
three-level hierarchy / scatter-heatmap) per the original design intent.

### Phase 5 — Integration Shell
Wire the three into one navigable app. Confirm the flagship cross-pollination sentence is derivable
end-to-end by walking the dataset from all three tiers, not just plausible per-tier in isolation.

### Phase 6 — Styling / Visual Polish (deferred, non-blocking)
Confirmed: does not gate, and is not gated by, any decision above — can start on any tier's structure the
moment it's stable, run fully parallel to later tiers still being built. One trap already found and
worth remembering here: the legacy file's `--domain1..9`/`--ring0..4` CSS custom properties are dead code
(zero consumers) — the real color source stays the JS `DOMAINS[].col`/`RC{}` tables. Don't rediscover this
during the styling pass.

---

## Known, deliberately-not-fixed items (inherited from 360, unchanged)

- `vessel_relevance` is missing on 34 of 43 existing `micro_nodes` and silently defaults to full relevance
  (1.0) rather than excluding the node. Not exercised by the new Asset/Coverage types (they don't carry
  this field), but noted so nobody assumes it was fixed.
- `coi_type`'s existing inconsistency is normalized only in the 720 generator's *output copy* — the
  original 360 file is left exactly as it is, per the "never edit in place" rule.

## Dependency chain

```
Phase 0 (fork) → Phase 0.5 (fidelity check)
   ↓
Phase 1 (schema lock — 🔒 single-threaded)
   ↓
Phase 2 (dataset + engine, verified standalone — 🔒 id lock)
   ↓                                    ↓
Phase 3 (producer/referral overlays)   archetypes.js (parallel with Phase 2, not gated)
   ↓                                    ↓
   └────────→ Phase 4 (Tier 1/2/3, parallel, staggered — Tier 2 starts earliest) ←┘
                     ↓
              Phase 5 (integration shell)
                     ↓
              Phase 6 (styling — parallelizable with tail of Phase 4)
```

---

## 8. Production security requirement — RLS enforcement (NOT modeled in this staged MVP, mandatory before any real build)

**This MVP's dashboards have no real access control, and structurally cannot have any.** Every dashboard
is a static HTML file with the *entire* mock dataset embedded inline via `<script src="data/*.js">`. A
producer selector, a "logged in as Sabine" label, an "[Admin/Demo Override: View As...]" dropdown — all of
these are **cosmetic UI state**, not a security boundary. Every byte of every producer's book ships to
every viewer's browser regardless of what the dropdown says, because there is no server, no auth, and no
partitioned query — opening the file in a text editor shows all of it. This is fine and expected for a
staged presentation artifact shown in a controlled room. It is not fine for anything beyond that.

**Before Influence 720 touches real Salesforce or Epic data, or is shown to anyone outside a controlled
presentation, real Row-Level Security must gate data delivery at the source** — a producer's client must
never *receive* another producer's data, not merely have it hidden behind a UI toggle. This is the exact
failure mode that would panic a brokerage's IT/compliance function on sight (one producer's pipeline
visible to another producer is a real, immediate red flag at an S&P 500 institution), and it is why this
is recorded here as a **blocking requirement for Phase 2+** (the real CRM-integrated build), not a
styling nicety deferred to Phase 6.

Minimum bar for the real build: backend-enforced row-level filtering keyed to the authenticated producer's
`producer_id` (or the leadership tier's scoped rollup), applied at the query/API layer — never in client
JS, never as a UI-only restriction. The MVP's "locked user + admin override" framing is a legitimate
*preview* of that architecture for demo purposes, and should be kept as the interaction pattern once real
RLS exists underneath it — but the enforcement itself does not exist yet, and nobody should mistake the
staged version for having it.
