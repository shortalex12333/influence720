# Handover — D0 Ontology Foundation is live. D1–D5 need to be rebuilt against it.

Written by the outgoing worker at the moment D0 (`dashboard0-ontology-foundation.html`) was confirmed
working by the founder. This is the second handover in this project's history — the first was
`HANDOVER_360_TO_720.md` (360 → 720 rebuild). Read that one too; it's still the origin story for
everything below it. This document picks up from where it left off.

---

## SYSTEM

You are taking over `Influence 720` — a 5-dashboard relationship-mapping product for a UHNW
specialty insurance brokerage (yacht/aviation/real-estate/auto/personal-risk). You have full
authority to edit, regenerate, and rebuild anything under `/Users/celeste7/Documents/INFLUENCE/`.
You do not have authority to delete existing dashboard files without the founder's explicit,
same-session confirmation — see **Context → the "clean slate" instruction** below for why this
matters right now specifically.

## USER

The founder (CEO) drives this project directly, in short, often-typo'd messages, usually while
looking at the live product in Chrome. Patterns observed over this entire session, consistently:

- **Wants building, not question loops.** Two or three rounds of "repeat back your understanding,
  confirm, then build" is fine and expected before a large investment (a research Workflow, a
  full pipeline regen). More than that reads as stalling. If a message is genuinely ambiguous on
  ONE dimension, ask ONE precise question (ideally via a preview/mockup) rather than a general
  "what do you mean?" — see the AskUserQuestion call that resolved the "5 tiles vs 1 canvas"
  confusion for the pattern that worked.
- **Corrects hard and fast, expects the fix to land in the SAME turn.** "wrong", "no.", "this is
  still tiles" — these are not requests for a design discussion, they're requests to look again
  and fix it now. Don't over-explain why the first attempt seemed reasonable; just fix it and
  show the result.
- **Distrusts self-reported "should work."** Every claim in this project has been backed by a live
  Chrome screenshot or a `javascript_exec` check (console errors, click-through, node counts) —
  never just "I edited the file, it should work now." Keep doing this.
- **Wants real, sourced density — not padded filler.** When a data gap was found (aviation only
  had 12 roles vs yacht's 32), the fix was a real research Workflow producing considered,
  rationale-backed roles, not a quick synthetic list. When a lifecycle segment was genuinely thin
  for a given vertical (e.g. auto has almost no "Operations & Crew"), the right answer was to
  document that as a real structural fact, not pad it with invented roles. This preference is
  explicit and repeated — see `feedback_bias_toward_flagging_over_silent_trust` in this session's
  memory if you have access to it.
- **Swears when frustrated. Doesn't mean "act immediately, no confirmation."** The most recent
  message ("erradicating the fuckign shit previosu work... personally think all other grpahs need
  fuckig deleting") is a strong, real signal about direction — take it seriously — but it is
  phrased as a personal opinion in the middle of an interrupted, multi-part message, not a
  confirmed instruction to a fresh worker with no other context. Surface it, don't silently act on
  it or silently ignore it.

## CONTEXT

### What actually exists right now

**D0 — `05-build/dashboard0-ontology-foundation.html`.** The true foundation, built this session.
Five "universes" (yacht, aviation, real_estate, auto, personal), each a complete radial using the
SAME canonical 9-segment lifecycle framework (a generalization of 360's own 9 domains — see
`role_taxonomy_generated.py`'s `SEGMENTS`): Ownership & Structure, Legal & Finance, Compliance &
Certification, Insurance & Risk Market, Acquisition & Disposal, Build/Fit-Out & Refit, Operations
& Crew, Usage & Experience, Back-Office & Third-Party Management. Real role counts: yacht 39
roles/148 structural edges, aviation 34/81, real_estate 34/71, auto 34/71, personal 34/74 — all
produced by an 8-agent research Workflow (role taxonomy expansion) plus one follow-up agent
(yacht's own edges, since yacht reused 360's role list directly and needed fresh edge research).
Laid out as five circles arranged in a pentagon around a shared center (NOT a grid, NOT stacked
tiles — the founder explicitly rejected both of those first). Zoomable (plain scroll wheel,
viewport-center-anchored, not top-left-anchored), pannable by drag. Click any role node: reveals
ONLY that node's own structural connections (grey lines, matching 360's own click-to-reveal
behavior — never a permanent edge web), shows a right-hand detail panel (rationale, ring/authority
tier, connection list with real why/frequency text). **Cross-vertical gatekeeper links**: 11
hand-curated groups where the same real-world function is reused under a different title by a
different vertical's own independently-researched taxonomy (e.g. "Household Manager" is literally
the same title in both real_estate and personal; "Owner's Representative" appears as itself in
yacht and as "Construction Project Manager / Owner's Representative" in personal). Clicking a
node that's in one of these groups draws an amber dashed line straight to its counterpart(s) in
the OTHER universe's own wheel, AND reveals both nodes' own internal within-pie connections
simultaneously — not just the clicked one. This is the single most important interaction in D0:
it's the concrete demonstration of "the ontology is one connected thing, not five separate silos."

**D1 — `05-build/dashboard1-tactical-map-v2.dc.html`** (there is also an older, unmaintained
`dashboard1-producer-tactical-map.html` — the `-v2.dc.html` one is the one actually being worked
on and is Claude-Design-sourced). Producer Tactical Map: one producer's whole book, ring =
authority tier, sector = the 9-segment category (now correctly generalized, was flattened to 8
ad-hoc categories before this session's ontology work), node color = relationship recency
(green→red decay, NOT bound/gap status). Personalized — this is account-level, tied to Salesforce-
style producer/account data.

**D2 — `05-build/dashboard2-whitespace-gap-engine.html`.** Whitespace/Gap Engine, rebuilt this
session into separate per-asset pies (not one shared UBO-centered wheel) — each asset (a specific
yacht, jet, property, car collection) gets its own pie, sized by real researched market valuation,
segmented by its own ownership-transaction-timeline history (acquisition/refit/ownership-change/
etc.), with coverage bound/gap status still shown in the outer ring. This is NOT built on the new
9-segment lifecycle taxonomy at all — its sectors are asset-timeline categories, a deliberately
different encoding for a deliberately different question (asset-level coverage gaps, not
role/authority structure). Don't force D0's segment scheme onto D2; they answer different
questions by design (see `01-plan/influence720-dashboard-plan.md`'s node-encoding table).

**dash3 — `05-build/dashboard3-gap-radial.dc.html`** (the founder calls this "dash3"; it is NOT
the same file as `dashboard3-leadership-book-rollup.html`, which still exists, untouched, from
earlier in the session — this naming collision was flagged to the founder and never resolved,
you should resolve it). Also Claude-Design-sourced. Sector = 9-segment category, ring = authority,
node = role, color = Epic bound/unbound status (green=covered, red=unhedged liability, grey=
predictive "ghost" node for a cascade-inferred gap). This is the dashboard closest in spirit to
D0 — same segment/ring/role structure, different color axis (coverage status vs. nothing, since
D0 is pre-account).

**D4, D5** — `dashboard4-role-macro-view.html`, `dashboard5-executive-command-center.html`. Built
early in the session by parallel Workflow agents, personally verified once each at the time, NOT
revisited since the 9-segment ontology work. Almost certainly still reference the old flattened
8-category scheme in their own local color/domain constants (same class of bug D1 and dash3 had
before this session's fix) — you should check, and probably need the same category-scheme patch
D1 and dash3 already got.

### The Excel hierarchy — exactly how data flows, verified just now

```
role_taxonomy_generated.py (ROLE_TAXONOMY, SEGMENTS)
        │  ← generated by integrate_vertical_ontology.py from the
        │    vertical-ontology-expansion Workflow's output
        │
        ├──────────────────────────────────────┐
        │                                        │
        ▼                                        ▼
account-level generation pipeline         template_ontology.json
(flagship_and_allocate_v2.py →                   │
 prefill_v2.py → extend_narrative.py →           ▼
 assemble_v2.py → curate_cross_pollination.py →  data/template-ontology.js
 fix_surname_carrier_collisions.py)              (TEMPLATE_ONTOLOGY: segments +
        │                                         per-vertical {roles, edges})
        ▼                                                │
dataset_v2_final.json (150 accounts,                      │
 real role instances, assets, coverages)                  │
        │                                                  │
        ▼                                                  │
build_master_excel.py                                      │
        │                                                  │
        ▼                                                  │
Influence720_MasterOntology.xlsx  ◄──────── NOT CONNECTED ──┘
  (02-dashboards/, 43 sheets, the        template edges/rationale/cross-vertical
   declared "source of truth" per        groups exist ONLY in the JS file above,
   HANDOVER_360_TO_720.md §4.1)          never written to the master Excel
        │
        │  write_asset_timeline.py also merges in
        │  (Asset_Valuations, Asset_Ownership_Timeline —
        │   D2's per-asset pie data, unrelated to D0)
        ▼
regenerate_from_master.py
        │
        ▼
data/ontology-720.js, overlays.js, rosters.js, asset-timelines.js
        │
        ▼
D1, D2, dash3, D4, D5 all load and render from THESE files
```

**The one gap that matters**: `RoleTax_Yacht`/`RoleTax_Aviation`/etc. sheets in the master Excel
ARE correctly synced to the new 9-segment taxonomy (verified directly: `RoleTax_Yacht` row 3 =
`("Owner's Representative", 1, 'signatory', 1, 'Ownership & Structure')`) — the role LIST and
segment/ring assignment round-trips through Excel correctly, because it flows through
`ROLE_TAXONOMY` into the normal account-generation pipeline. But the template-level STRUCTURAL
EDGES (148/81/71/71/74 connections), the role RATIONALE text, and the 11 CROSS-VERTICAL GATEKEEPER
GROUPS — everything that makes D0 actually work as a display — live ONLY in
`template_ontology.json` / `data/template-ontology.js`. They were never written into the master
Excel as their own sheets. This breaks the project's own standing rule (HANDOVER_360_TO_720.md
§4.1: "the Excel layer is the foundation the dashboards render, not an export generated after the
fact"). D0 currently violates that rule for its own most important content. Fixing this — adding
`Template_Roles` and `Template_Edges` sheets (or similar) to the master workbook, generated FROM
`template_ontology.json` and read back the same way `write_asset_timeline.py` / D2's asset data
already is — is real, unglamorous, correct next work.

### The "clean slate" instruction — surfaced, not executed

The founder's most recent message included: *"personally think all other graphs need fuckig
deleting and clean slate. nwo we have d0."* This was NOT confirmed as a direct order in this
session — it was one clause inside an interrupted, multi-part message whose primary ask was this
handover document. Read literally, it could mean: delete D1/D2/dash3/D4/D5 entirely and rebuild
all five from scratch using D0 as the shared foundation. It could also mean something narrower
(rebuild their VISUAL/UX layer while keeping the data-wiring underneath; or just re-verify them
against the new taxonomy rather than literally deleting files). **Confirm which, explicitly, before
deleting anything.** Deleting five working, previously-verified dashboard files is exactly the
kind of hard-to-reverse action this project's own standing discipline says to confirm first — and
you are a fresh worker with no standing authorization to interpret an ambiguous, emotionally-
charged aside as a green light.

## DO's

- **Verify live in Chrome, every time.** Screenshot + `javascript_exec` (console errors, node
  counts, click-through) before calling anything done. This project's whole root-cause history
  (HANDOVER_360_TO_720.md) is about self-reported "should work" claims turning out false.
- **Re-run the FULL generation pipeline whenever `ROLE_TAXONOMY` changes.** Order matters:
  `flagship_and_allocate_v2.py` → `prefill_v2.py` → `extend_narrative.py` (fills narrative gaps
  for role_codes that no longer match — role TITLES changing means role_codes change too) →
  `assemble_v2.py` → `curate_cross_pollination.py` → `fix_surname_carrier_collisions.py` →
  `build_master_excel.py` → `write_asset_timeline.py` (re-attaches D2's asset data, which
  `build_master_excel.py` wipes since it builds a fresh workbook each run) →
  `regenerate_from_master.py`.
- **Use a research Workflow when a data gap is real, not a quick synthetic fill.** The aviation/
  real_estate/auto/personal 9-segment expansion (8 agents) and the yacht edges (1 follow-up agent)
  both hit zero orphans, real avg-degree, real rationale — that quality bar is now the baseline
  expectation for this project, not a one-time effort.
- **When a fuzzy/near-title match across verticals looks like an overlap, verify it's the SAME
  real-world function before wiring it up.** The cross-vertical group curation deliberately
  excluded "Captain / Master" ~ "Chief Pilot / PIC-Captain" (different professions, coincidental
  word overlap) while keeping "Household Manager" = "Household Manager" (exact, genuine). Don't
  trust a crude tokenizer's output without a human (or your own) sanity pass.
- **Match the founder's own stated preview when given one.** The AskUserQuestion call with ASCII
  previews (grid-of-tiles vs. one-shared-canvas) is what finally converged on the right layout
  after two guesses — when genuinely blocked on a visual/architectural choice with real cost, a
  precise question with a concrete preview beats a third guess.

## DON'Ts

- **Don't put `<script src>` data/engine tags inside `<helmet>` in a `.dc.html` (Claude Design)
  file.** `<helmet>` is an unrecognized custom element to the browser's own parser — a script
  inside it executes on first pass AND gets re-injected by `support.js`'s own helmet processing,
  causing "Identifier already declared" errors. Put them in the real `<head>`, before
  `./support.js` loads. Every `.dc.html` file in this project (D1, dash3) needed this fix.
  
- **Don't assume `covsByAsset`/similarly-named maps hold the shape you expect from a DIFFERENT
  map with a similar name elsewhere in the same file.** A real bug this session: `covsByAsset`
  holds raw coverage node objects, while `acc.coverages` (built elsewhere) holds
  `{node, asset, overlay}` wrapper objects. Assuming the wrapper shape on the raw-node map crashed
  `ringOf()` with `undefined.node_type`. Check the actual construction site, not just the name.

- **Don't call `RingEngine.render(svg, ...)` before the `<svg>` element is attached to the live
  DOM.** It reads `svg.clientWidth`/`clientHeight` internally; a detached element measures 0 and
  silently falls back to a 1200×900 default, breaking any per-instance sizing.

- **Don't let a CSS-transformed canvas double-scale an overlay drawn on top of it.** D0's cross-
  link overlay lines are computed via `getBoundingClientRect()` deltas (always correct, viewport-
  final pixels, transform-agnostic) — but the overlay SVG itself must live OUTSIDE the
  CSS-transformed wrapper (`#canvas-inner`), or its own coordinates get scaled a second time by
  the ancestor transform.

- **Don't treat a flat, non-scaling `role_target`/role-count as acceptable once you know a
  vertical has more structural complexity than another.** The original bug this whole ontology
  effort traces back to: `role_target = rng.randint(6, 9)` was applied identically regardless of
  `n_verticals`, which is why book density never approached 360's own per-account richness. Any
  new density knob should scale with real structural signal, not be a flat constant.

- **Don't silently execute "delete everything" from a venting, ambiguous aside.** See Context
  above.

## REASONING

The whole session's arc, compressed: 360 (`00-source/influence360-yachts.html`) is a single,
extremely dense yacht ecosystem — 187 nodes, 624 edges, 9 real lifecycle domains, all populated.
The 720 rebuild initially ported 360's math/CSS/rendering engine faithfully but NOT its density
philosophy — it flattened aviation/real_estate/auto/personal into one catch-all category each
(vs. yacht's fuller structure), and even yacht itself only used 7 of its own 9 domains. The
founder's core insight, stated explicitly and repeatedly this session, was: **the ontology
(structural, template-level, one per vertical) is the foundation; every dashboard is a
personalized "mask" drawn from it — build the foundation once, richly, then let every mask read
from the same source.** D0 is the first artifact where that principle is fully true: one shared
9-segment framework, real per-vertical research at equal depth, one shared rendering engine, cross
-vertical links that only make sense because nothing (no card border, no separate tile) stands
between the five universes. D1/dash3 already draw their role/segment data from the SAME
`ROLE_TAXONOMY` D0 is built from — that part of the principle is already real, not aspirational.
What's NOT yet real: D2/D4/D5's own alignment (D2 deliberately, by design, differently; D4/D5
unverified), and the Excel round-trip for D0's own connective tissue.

## OUTPUT

Your first move should not be code. It should be a short, direct message back to the founder:

1. State plainly what "clean slate" could mean (full delete-and-rebuild of D1/D2/dash3/D4/D5, vs.
   a narrower re-verification/re-skin against the new taxonomy) and ask which, in one sentence —
   this is a genuine, high-cost, hard-to-reverse fork, not a stalling question.
2. Independent of that answer, flag the Excel gap (template edges/rationale not in the master
   workbook) as real unfinished work from this session, and ask if closing it is the next
   priority or should wait.
3. Once direction is confirmed: if rebuilding, use D0's actual rendered output (screenshot it
   first) as the shared visual/interaction reference for whichever of D1/D2/dash3/D4/D5 are in
   scope, and reuse `engine/render-core.js` + `engine/style-core.css` unchanged — the engine
   itself has been correct and stable all session; every real bug found was in each dashboard's
   own wiring, never in the shared engine.
