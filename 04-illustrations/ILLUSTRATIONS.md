# Influence 720 — Locked UI/UX Illustrations

Design mechanics that are decided and locked, as distinct from the data schema
(`03-architecture/PHASED_BUILD_PLAN.md`) and the dashboard definitions (`01-plan/`). This file is the
UI/interaction record — how a user actually moves through the screens.

---

## Design 1 — Dashboard 2 (Whitespace/Gap Engine): the list↔gallery↔pie mechanic

### The three-panel skeleton (reused from Influence 360, non-negotiable per the mission brief's "UI DNA" rule)

- **Left rail** = the worklist. Every account the current user can see, one row each, ranked by **total
  whitespace $** descending. Same collapsible rail component 360 already has.
- **Center canvas, default/landing state** = a **gallery of small pies** — every client rendered as a
  small silhouette (red/green balance visible, no label clutter), grid-laid-out. This is "show everyone,
  their own pie," sized so dozens are still scannable at once.
- **Right panel** = detail — populates once a specific node (Asset or Coverage) is selected inside a
  zoomed-in pie.

### The click-to-zoom mechanic

The left-rail list and the center gallery are **two synchronized lenses on one worklist, not two separate
features**. Clicking either:
- a row in the left rail, or
- a mini-pie in the gallery

...selects the same account and **zooms that one pie to full detail in the center canvas**, replacing the
gallery. Whether that transition is a hard cut or an animated morph is undecided and explicitly deferred
to Phase 6 (styling) — functionally identical either way, purely a polish decision.

### Row/card fields (worklist + gallery, same underlying data)

- Account name
- Total gap $ (whitespace)
- Gap count
- Account status: **Active (has gaps)** / **Expiring** / **Lost**
  - *Lost* = the account itself has lapsed (not one coverage line) — win-back, not upsell. Feeds the
    Ghost Policy pricing method.
  - *Expiring* = a bound coverage nearing renewal — time-boxed urgency, individual-account version of
    Tier 3's churn radar.
- Cluster badge, if this account shares its gap pattern with others (see below)

### Clustering — surfaced as a filter, not a separate feature

Grouping accounts by shared gap pattern (e.g. "6 clients, all missing Aviation Liability, same
$1.5M-class combined whitespace") is **not a new mechanism** — it's what filtering the gallery down to
"Coverage (missing) = Aviation Liability" already produces. The computation runs across the whole book
(macro layer), the payoff surfaces as a badge on any worklist row that belongs to a cluster, and as a
"N peers share this gap" link inside a zoomed pie's specific red node.

### Peer-Comp-as-evidence

The Peer-Comp pricing method (three-method GWP engine, `03-architecture/PHASED_BUILD_PLAN.md` §2) already
computes an average premium across similar bound assets. Reuse the same underlying list as **sales
evidence**, not just a hidden pricing input: clicking a red gap shows an expandable list — "5 similar
assets in your book already carry this, avg premium $250K, here they are" — turning the estimate into
proof rather than a number the producer has to defend on faith.

### Color/label fix — "unbound," never "uninsured" (correctness finding, applied here)

Red no longer means "gap" — it means **`unbound` with us**, full stop. Epic only sees our own book; it
cannot prove a client has no coverage, only that they don't have it *from this agency*. Every red node
carries an `unbound_reason` (`never_written` / `lapsed_with_us` / `competitor_held`), shown as a small
badge, not a new color — see `03-architecture/PHASED_BUILD_PLAN.md` §2a for why this stays a badge rather
than a fourth hue. `competitor_held` specifically changes the pitch a producer should make (displacement,
"let us take this from your current carrier") from the `never_written` pitch ("you may be exposed here")
— conflating the two is the exact overclaim this fix exists to prevent.

### Header filters (locked)

| Filter | What it does |
|---|---|
| Coverage (missing) | Narrow to accounts lacking a specific coverage line — this *is* the cluster view |
| Coverage (current/held) | Narrow to accounts that already hold a specific line — this *is* the peer-comp evidence set |
| Account size | Asset size class (vessel size today, extends per-vertical) |
| Expiry date | Renewal window (e.g. "expiring within 60 days") |
| Vertical | Yacht / Aviation / Real Estate / Auto / Personal |
| Account status | Active / Expiring / Lost — a toggle, not folded into the date filter, since "Lost" has no future date |

---

## Design 2 — Leadership Book Rollup (Epic-side leadership view)

Reuses Dashboard 2's exact rendering engine and interaction pattern (list↔gallery↔pie, same
`colorFn`/`sizeFn` injection, same status taxonomy) with the hierarchy shifted **one level up** — but
this is a distinct rendering, not a relabeled ontology node. A salesman does not *own* the yacht; writing
`node_type: principal` onto a producer would corrupt the shared structural-truth file. See governing
discipline in `03-architecture/PHASED_BUILD_PLAN.md` §5 ("overlays, never on the shared node").

- **Center** = the salesman (sourced from the producer roster, not the ontology).
- **Ring 1** = the accounts that salesman services (a producer↔account mapping — a fact about servicing,
  not ownership). Same **lost / active / expiring** status coloring and same **$-size** logic already
  locked for Dashboard 2's worklist rows — no new vocabulary introduced.
- **Drilling into an account does not add a Ring 2.** It opens the *actual* Dashboard 2 pie for that
  client — same component, entered from leadership's side instead of the producer's own worklist. One
  pie view, two entry paths (producer's own worklist → their pie; leadership → a chosen salesman → that
  salesman's accounts → the same pie).
- **Filters**: all six from Dashboard 2's header, **plus** a salesman selector (single producer, or "all
  producers" aggregate) — the one control a producer's own scoped dashboard never needed, since it's
  implicitly limited to their own book already.

### Relationship to Tier 3 (Executive Command Center scatter/heatmap)

Not a replacement for the effort-vs-yield scatter — a complementary drill-down. The scatter answers "who
looks like an outlier" across all producers at once (a distribution question, stays a scatter per the
earlier design note). This Book Rollup answers "what does that one outlier's actual book look like" once
leadership has picked someone from the scatter — the natural next click, not a competing view.

---

## Design 3 — Leadership Role Macro View ("Domain Value Map")

Answers: "show leadership all domains (yachts, jets, cars, etc.) in dollar amount" and "which
role/beachhead is underexploited region-wide, and which salesman is best positioned to attack it."

### The base: 360's actual engine, structurally unmodified, spanning all verticals

Same role nodes, same ring model (authority tier, unchanged semantics), same radial/domain-segment
layout, now spanning all 5 verticals via the per-vertical domain namespacing already locked in
`03-architecture/PHASED_BUILD_PLAN.md` §1, instead of yacht alone. Visually, leadership opens something
that looks like the exact artifact already shown in the SVP deck — deliberate continuity, not laziness.

### What changes: node size and color stop meaning "structural importance"

360's original node size is structural (how much a role matters in a deal, independent of revenue). This
view needs a business-outcome metric instead:

- **Node size** = total dollar value touching this role across the whole book — Epic-bound premium +
  Salesforce-prospected estimated value, combined.
- **Node color/fill** = sold-vs-prospected ratio (mirrors Dashboard 2's bound/gap logic, applied at the
  role level instead of the coverage level). Mostly green = well-penetrated role. Mostly grey/amber =
  a real beachhead sitting untapped.

Flagged explicitly (per standing rule: size/color meaning is redefined per dashboard, never silently
inherited) — this is a genuine semantic swap on a reused visual shell, not a free relabel.

**Proportional fill, decided now, not deferred to Phase 6.** Adding a real Epic-bound dollar to an
estimated whitespace dollar and rendering both as one solid-filled circle makes a $500K *guess* look as
certain as a $500K *actual premium* — a direct violation of the Defensible Forecast standard this project
holds every number to. Fix: the circle's total size still represents the combined total, but the fill is
**split** — solid/opaque for the bound portion, hatched or semi-transparent for the estimated portion.
One glance tells an executive how much of a role's value is real versus projected, without reading a
number. This is a correctness requirement, not a styling preference, which is why it isn't deferred with
the rest of Phase 6's polish.

### Vertical-level rollup (answers "all domains in dollar amount" directly)

Each vertical's mega-segment on the wheel carries a rolled-up $ figure (sold + prospected combined),
readable without clicking into any individual role — "where's the region's money concentrated, where's
it thin," at a glance.

### Click-through — right panel

Clicking a role node opens a **ranked table of salesmen touching that role**, split into two buckets:

| Bucket | Source | Shows |
|---|---|---|
| Prospected, not yet sold | Salesforce overlay | Quantity of contacts in this role across their book + estimated value |
| Sold / inactive | Epic bound-policy overlay | Quantity of bound (or lapsed) accounts touching this role + actual premium |

Sortable by value or quantity. Sorting the prospected column descending directly answers "who already has
the strongest foothold in this beachhead" — that salesman is the natural person to deploy against it,
since the relationship already exists, only the sale doesn't yet.

### Not free reuse — a real new computation, named honestly

Unlike Design 2 (mostly a data-source swap on an identical mechanic), this needs a genuine new
aggregation step: for a given role, scan every producer's Salesforce-overlay rows and Epic bound-policy
overlay rows, group by producer, sum value. New logic, not a rename.

### How this fits the other two leadership lenses

Same underlying per-account, per-coverage value data as Dashboards 1 and 2 (see `03-architecture/`),
sliced a third way:

| View | Sliced by |
|---|---|
| Dashboard 2 | One client's gaps (account-centric) |
| Design 2 — Book Rollup | One salesman's book (producer-centric) |
| Design 3 — Role Macro View | One role, across the whole book (beachhead/deployment-centric) |

One dataset, three cuts — not three unrelated dashboards.

---

## Design 4 — Dashboard 1 (Producer's Tactical Map)

Formalizing what was already agreed earlier in conversation into the same locked structure as Designs
1–3, plus the left-rail treatment flagged as "almost certainly needed" back in Design 1 — now confirmed.

### The three-panel skeleton

- **Left rail**: content changes by state (below).
- **Center canvas**: one integrated radial graph — **not** a gallery of mini-pies. Deliberate contrast
  with Dashboard 2: Dashboard 2's gallery exists for item-by-item triage across many *independent*
  accounts; Tier 1's whole-book view exists to compute one *aggregate* distribution (the Book Weight
  Index) across everything at once — splitting it into separate mini-graphs would defeat that purpose.
- **Right panel**: contact detail (DISC profile, relationship-weight breakdown, referral history, a
  "Draft Intro Request" next-best-action control).

### Two states

**State 1 — Whole-book (default/landing).**
- Left rail = list of **accounts**, each row showing count of known vs. untapped contacts and an
  aggregate relationship-weight figure for that account.
- Center canvas = one combined radial graph. Center = the producer. Every contact across every account
  radiates out, **angular segment = which account/vertical they belong to** (replaces 360's domain
  segments). A persistent header stat reads the **Book Weight Index** directly off this same render —
  e.g. "72% of your relationships are Ring 3/4, only 12% are Ring 1 signatories" — no separate view
  needed for it.
- Clicking an account row (or its cluster of nodes on the canvas) transitions to State 2.

**State 2 — Single-account drill-in.**
- Left rail = list of **people** within that one account (the contacts/roles) — functions like 360's
  original left rail, now scoped to one account.
- Center canvas = re-centers on that account's ecosystem. Node = person (never collapsed into the
  account, per the standing rule). Radial distance = authority tier (360's ring model, inherited by role
  match, structural — identical for every producer). Color = relationship temperature: green =
  known/active in Salesforce, grey = a role the ontology says must exist but has no matching Salesforce
  contact (fully untapped).

### Two edge types, rendered differently

- **"Knows" edges** — structural, pulled from the ontology's own `talks_to` data, exist regardless of
  whether the producer has met either person. Drawn thin. This is what justifies "ask X for an intro to
  Y."
- **"Referred-by" edges** — historical, dated, directional, sourced from Salesforce's referral field.
  Drawn bolder/arrowed. Shows what's already worked, distinct from what's merely structurally possible.

### Header filters (locked)

| Filter | What it does |
|---|---|
| Ring / authority tier | Reuses 360's ring filter directly |
| Relationship status | Known / Untapped toggle |
| Vertical | Yacht / Aviation / Real Estate / Auto / Personal — relevant once the whole-book view spans a multi-vertical portfolio |
| Node display mode | Person ↔ Position/Company toggle (collapses individuals into the firm they sit inside) |

No account-size or expiry filter here (those are Dashboard 2's concerns — bound/gap status, not
relationship strength) — Tier 1 stays scoped to "who do I know and who am I missing," not "what's unsold."

### Producer identity — locked, not an open selector

The screen shows a **locked** identity ("User: Alex Short"), plus a distinct, deliberately technical-
looking secondary control — `[Admin/Demo Override: View As...]` — to switch between the four staged
producers for presentation purposes. This is cosmetic framing for the demo, not real access control — see
`03-architecture/PHASED_BUILD_PLAN.md` §8 for why real RLS is a hard requirement before any non-staged
use, and why an open, unlabeled selector would read as a security red flag to a real brokerage's IT/
compliance function on sight.

---

## Design 5 — Tier 3, Executive Command Center

### The three-panel skeleton

- **Left rail** = ranked list of producers (name, touchpoints, GWP captured, archetype tag) — the
  textual twin of the scatter, same list+visual pairing every other dashboard uses.
- **Center canvas** = the scatter/heatmap itself (X = touchpoints/period, Y = GWP captured/period).
- **Right panel** = whichever producer or coverage-type point is selected — archetype narrative, churn
  flag if any, next-best-action.

### Click-through hands off to Design 2, no separate drill-in of its own

Clicking a dot on the scatter (or a row in the rail) opens that producer's **Book Rollup (Design 2)**.
Tier 3 doesn't need its own drill-in view — it hands off to the one that already exists. One less
component to build.

### Toggle

Rep-view (X=touchpoints, Y=GWP, one dot per producer) ↔ policy-type view (same axes, one dot per
coverage line, aggregate regional whitespace $ instead of per-rep GWP).

### Churn — resolved as a separate panel, not a fourth channel on the scatter

**Decision**: churn risk gets its **own ranked panel below the scatter** (short "at-risk" list, same
visual pattern as Dashboard 2's Lost/Expiring flags), not a third visual channel (outline color, pulse
state) layered onto a plot that's already carrying X, Y, size, and archetype color. A 2D plot with a
5th encoded dimension stops being readable at a glance — exactly the failure mode every other dashboard
in this file has deliberately avoided by keeping one plot to one clear job.

**Churn panel toggle**: `[View by Account] ↔ [View by Policy Line]`. Default shows "Accounts at Risk"
(current design). Flipped, the same decaying-communication data aggregates by coverage instead — e.g.
"Aviation Liability: $850K regional premium at risk" — answering the "% churn per policy type" question
from the original brainstorm without a new widget, same underlying data, one more toggle.

### Momentum — "Comet Tail," solves the timeline gap without a new dashboard

Each producer's dot on the scatter carries a faint 90-day trailing line showing its trajectory, not just
its current position. Up-and-left = gaining velocity (higher yield, fewer touchpoints needed to get
there). Down-and-right = grinding harder for less. This is Tier 3's answer to the "sales velocity /
momentum" gap — trend expressed as a vector on the existing plot, not a second chart, not a bar-chart
strip competing for space.

### Header filters

Region/department, Time window (30/90/365 days — also the comet tail's trailing window), the
rep↔policy-type toggle, Vertical.

---

## Explicitly cut for Phase 1 (deliberate, not forgotten)

- **Conversation topic/content tracking** (was: "coverage included in conversations," from the original
  brainstorm). Tracking *what* was discussed on a call requires scraping unstructured CRM notes or call
  transcripts — this MVP stays entirely deterministic and rules-based (Salesforce activity *timestamps*
  only, not content), specifically to avoid the compliance/IT-security review that unstructured-data
  processing would trigger. Flagged as the anchor feature for a **Phase 2 LLM-integration** pass, out of
  this build entirely. Recorded here so it doesn't silently disappear a second time.
