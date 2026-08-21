# Influence 720 — Data Foundation Brief

**Status: this is the spec for the next build phase.** It synthesizes twelve institutional-grade,
source-gated research streams (all passed or were forced through an adversarial rigor review — real
citations, real numbers, no fluff) into one document a build agent can work from directly, without
re-reading twelve separate memos. Per the handover's own Standing Rule #5 (§8 below), §1 of this brief is
included verbatim, as a requirement, not a reference link — carry it forward into every subsequent build
brief this project produces.

Compiled 2026-08-15. Source memos are not reproduced in full here except where a section explicitly says
"verbatim" — the source ledger (§9) points back to every named source so any figure below can be re-traced.

---

## §1 — What the standard actually is (verbatim from HANDOVER_360_TO_720.md §1)

> Influence 360 (`00-source/influence360-yachts.html`) is not a mood board — it is a working, dense,
> disciplined artifact, and every property below is a *specific, checkable* thing 720 must match, not a
> vibe:
>
> - **187 nodes, 624 relationship edges**, rendered with real visual density — never a handful of dots in
>   a mostly-empty circle. If a screen looks sparse, that is a data problem, not a styling problem, and it
>   is not done.
> - **Radius and angle both carry real, load-bearing meaning** (ring = decision distance, domain = category
>   segment), scaffolded with visible ring circles and sector fills so the geometry is legible without
>   reading a single label.
> - **One consistent visual grammar, applied without exception.** Every node, every edge, every panel
>   follows the same rules. Nothing is a one-off.
> - **Total stillness until the user acts.** No motion, no animation, no auto-playing anything, anywhere.
>   Density and restraint are what read as "instrument panel," not movement.
> - **Every string on screen is a considered, professional label.** Nothing internal, nothing shorthand,
>   nothing that reads as a work-in-progress note, ever reaches the rendered page.
> - **Dark/light theming is a first-class, fully-worked system**, not an afterthought toggle.
>
> That is the bar. Not "inspired by" — matched, specifically, on every point above, before anything ships.

---

## §2 — 360's exact reusable constants (ready to paste into a data generator)

Source: forensic code audit of `influence360-yachts.html` (2277 lines), confirmed by full-file read plus
`node -e` parsing of the `DATA`/`TALKS_TO` literals (not grep estimation). Dump cached at
`/private/tmp/claude-501/-Users-celeste7/a4eedd11-2615-4b11-a3c1-eaa58ca40bfe/scratchpad/data_dump.json`.

### 2.1 `DOMAINS` array (verbatim, lines 1206–1216)

```js
const DOMAINS = [
  {id:1, name:'Ownership\n& Structure',    col:'#6a9de0'},
  {id:2, name:'Legal\n& Finance',           col:'#3a7fd4'},
  {id:3, name:'Flag · Class\n& Compliance', col:'#2a9a8a'},
  {id:4, name:'Insurance\nMarket',          col:'#c9a84c'},
  {id:5, name:'Acquisition\n& Sale',        col:'#6aaa44'},
  {id:6, name:'New Build\n& Refit',         col:'#e07a30'},
  {id:7, name:'Management\n& Crew',         col:'#cc5555'},
  {id:8, name:'Charter &\nGuest Ops',       col:'#aa44aa'},
  {id:9, name:'Operations\n& Shoreside',    col:'#4488aa'},
];
```

**Known inconsistency baked into the source itself, do not silently reproduce:** `DOMAINS[7].name` says
"Management & Crew" but the parallel lookup table `DOM_NAMES` (line 1221) says "Manning & Crew" for the
same id. Decide once, in the 720 generator, which string wins — don't carry two spellings forward.

### 2.2 Ring config (verbatim, lines 1198–1201)

```js
const RI = {0:  80, 1: 210, 2: 400, 3: 630, 4: 840};   // inner edge
const RO = {0: 200, 1: 390, 2: 620, 3: 830, 4:1020};   // outer edge
const RC = {0:'#6a9de0', 1:'#c9a84c', 2:'#e07a30', 3:'#4a8aba', 4:'#2e5070'};
const RL = {0:'APEX', 1:'COI SIGNATORY', 2:'COI CONDITIONAL', 3:'TRANSACTION CRITICAL', 4:'OPERATIONAL'};

// Panel-badge names (line 1236–1240) — a SECOND, independently-maintained string set for the same 5 rings:
const RING_NAMES = {
  0:'Apex — Principal / Owner / FO', 1:'Ring 1 — COI Signatory',
  2:'Ring 2 — COI Conditional', 3:'Ring 3 — Transaction Critical',
  4:'Ring 4 — Operational'
};
```

| Ring | Inner (RI) | Outer (RO) | Band width | Color (RC) | Label (RL) |
|---|---|---|---|---|---|
| 0 | 80 | 200 | 120 | `#6a9de0` | APEX |
| 1 | 210 | 390 | 180 | `#c9a84c` | COI SIGNATORY |
| 2 | 400 | 620 | 220 | `#e07a30` | COI CONDITIONAL |
| 3 | 630 | 830 | 200 | `#4a8aba` | TRANSACTION CRITICAL |
| 4 | 840 | 1020 | 180 | `#2e5070` | OPERATIONAL |

Ring circles are drawn at **both** `RI[r]` and `RO[r]` — two concentric dashed circles per ring (lines
1745–1756: inner stroke-width 0.5 / dasharray `2 12`; outer stroke-width 1 / dasharray `4 10`; both
stroke-opacity 0.4).

### 2.3 Sector/angle math (verbatim, lines 1305–1310)

```js
const N_DOMAINS = 9;
const TAU = Math.PI * 2;
const SECTOR_GAP = 0.04; // radians, ≈2.29°

function sectorStart(domainId) {
  return ((domainId - 1) / N_DOMAINS) * TAU - TAU / 4 + SECTOR_GAP / 2;
}
function sectorAngleFor(domainId) {
  return (TAU / N_DOMAINS) - SECTOR_GAP;
}
```
Each domain gets an equal `360°/9 = 40°` wedge minus a fixed `0.04 rad` gap on each side, rotated so
domain 1 starts at 12 o'clock (`-TAU/4`). No per-domain custom widths. **A per-vertical 720 dataset must
recompute `N_DOMAINS` from that vertical's own domain count** (per `PHASED_BUILD_PLAN.md` §1's resolved
per-vertical domain decision) — never hardcode 9 outside the yacht vertical.

### 2.4 Radius-per-ring math (`nR`, verbatim, lines 1183–1195)

```js
function nR(ring, wt, freq, dd, node) {
  const comp = ((wt || 1) * 0.5) + ((freq || 1) * 0.3) + (Math.max(0, 10 - (((dd ?? 4) - 1) * 2)) * 0.2);
  const minR = ({0: 16, 1: 11, 2: 8, 3: 6, 4: 5})[ring] ?? 5;
  const maxR = ({0: 32, 1: 22, 2:16, 3:12, 4: 9})[ring] ?? 9;
  const base = minR + (comp / 10) * (maxR - minR);
  if (activeBand === 'ALL' || !node) return base;
  const rel = (node.vessel_relevance && node.vessel_relevance[activeBand] !== undefined)
               ? node.vessel_relevance[activeBand] : 1.0;
  return base * (0.5 + 0.5 * rel);
}
```
Weighted composite: `coi_weight×0.5 + coi_freq×0.3 + proximity(decision_dist)×0.2`, mapped into a
ring-specific min/max pixel range — apex nodes (ring 0) are always visually larger (16–32px) than
operational nodes (ring 4: 5–9px), regardless of score, by construction. **Duplicated independently** as
`compScore()` (line 1264–1267) for radial sort order — the two formulas overlap but aren't identical and
must be kept in sync by hand if replicated.

### 2.5 `coi_type` enum — verified counts, and the gap to fix, not copy forward

| `coi_type` value | Count (of 187) | In `COI_LABEL`/CSS/filter? |
|---|---|---|
| `conditional` | 69 | yes |
| `transaction` | 44 | yes |
| `signatory` | 40 | yes |
| `operational` | 11 | yes |
| `transactional` | 10 | **no** — same concept as `transaction`, never normalized |
| `regulatory` | 7 | **no** — no label, no CSS, not filterable |
| `none` | 4 | yes (fallback style) |
| `adjacent` | 2 | yes (label/CSS only, **not filterable**) |

**Decision required, don't silently reproduce:** normalize `transactional`→`transaction` in the 720
generator's output, and add real `regulatory`/`adjacent` support (label, CSS, filter option) rather than
leaving 9.1% of the corpus (17 of 187 nodes) falling back to generic gray with no filter access. This is
exactly the kind of data/UI contract gap `PHASED_BUILD_PLAN.md`'s `COVERAGE_CATALOG` registry (line
144–146) was designed to prevent recurring.

### 2.6 Color system — single source of truth

**The CSS `--ring0..4`/`--domain1..9` custom properties are dead code — zero consumers anywhere in the
file** (`grep -n "var(--ring\|var(--domain"` → 0 matches). The **only** live color source is the JS
constant tables: `RC[r]` (ring stroke, lines 1751/1762) and `domCol(d)` / `DOMAINS[].col` (7+ real render
call sites — sector fill, connector stroke, node-label fill, edge line, badges, tooltip). Badge colors are
inline JS with a 2-hex-digit alpha suffix hack: `style="background:${col}20;color:${col};border-color:${col}40"`
(`20`≈12% opacity, `40`≈25%).

**Rule for 720: the JS constant tables are the only source of truth for ring/domain color. Never
reintroduce a parallel CSS custom-property palette that nothing reads** — `PHASED_BUILD_PLAN.md` §6
(Phase 6 note, line 302–304) already flags this trap explicitly; don't rediscover it.

### 2.7 Dark/light theming — JS-resolved, class-toggled, not `prefers-color-scheme`-driven

```js
function applyTheme() {
  const mode = localStorage.getItem(THEME_KEY) || 'system';
  const dark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  const resolved = mode === 'system' ? (dark ? 'dark' : 'light') : mode;
  document.body.classList.toggle('theme-dark', resolved === 'dark');
}
function setThemeMode(m) { localStorage.setItem(THEME_KEY, m); applyTheme(); }
```
3-state radio (light/dark/system), resolved once at load into a binary `body.theme-dark` class — no live
`matchMedia(...).addEventListener`, so an OS theme change mid-session in "system" mode does not repaint
until reload. 23 custom properties per theme, full parallel redefinition (not a delta/patch) — 13 live
(`--bg` through `--accent`), 14 dead (`--ring0..4`, `--domain1..9`, see 2.6). Plus 13 explicit
`body.theme-dark .selector{...}` overrides for things that can't be token-driven (e.g. per-`coi_type`
badge colors, hand-tuned light/dark pairs, not derived from a shared hue).

### 2.8 `vessel_relevance` size-class scale (verbatim, lines 152–161)

```html
<select id="sel-vessel" class="filter-sel">
  <option value="ALL">All Sizes</option>
  <option value="S1">Under 15 m — Day boat</option>
  <option value="S2">15 – 24 m — Small yacht</option>
  <option value="S3">24 – 40 m — Mid-range</option>
  <option value="S4">40 – 60 m — Entry superyacht</option>
  <option value="S5">60 – 80 m — Full-code superyacht</option>
  <option value="S6">80 – 100 m — Large superyacht</option>
  <option value="S7">Over 100 m — Gigayacht</option>
</select>
```
Each node's `vessel_relevance = {S1..S7: 0.0–1.0}` is consumed two ways: **filter** (drop the node if
`rel < 0.1` for the active band) and **radius** (shrink surviving nodes, floored at 50% size, via `nR`'s
`base * (0.5 + 0.5 * rel)`, §2.4). **No named industry source for the exact 15/24/40/60/80/100m
breakpoints** — treat as an informed practitioner scale, do not invent a citation for it.

### 2.9 Structural graph invariants — the density floor, not just a target

Verified by parsing, not estimation: 144 top-level nodes + 43 `micro_nodes` = **187 total**; **624**
`TALKS_TO` edges; **every** top-level node has **2–10** outgoing edges (never 0 — zero orphan nodes);
micro-nodes never originate an edge; every edge target resolves to a real id (0 dangling references).
Ratios: **624 ÷ 187 = 3.34 edges/node** (all populated nodes) / **624 ÷ 144 = 4.33 edges/node**
(edge-eligible, top-level nodes only — the meaningful ratio, since micro-nodes structurally cannot
originate an edge). **These two ratios are the density floor used in §5 below** — not a stylistic choice,
a measured property of the artifact the handover names as the bar.

---

## §3 — Density / stillness / grammar checklist

Every item below is specific and checkable, drawing on the 360 forensic audit, the Bloomberg
Terminal/Palantir Foundry-Gotham research, and the adjacent dense-instrument-panel references (trading
OMS/EMS, ATC, SOC/NOC, military C2). Items are grouped so a reviewer can walk the list against a screen.

### 3.1 Motion — the hard gate

- [ ] **Zero `@keyframes` touching the SVG/canvas graph itself.** 360's only `@keyframes` block is a
  6-second, self-removing onboarding toast (`hint-life`), `forwards`-filled (no loop), hard-removed from
  the DOM at `setTimeout(6200ms)` — not attached to the graph in any way. That is the entire allowance.
- [ ] **Zero `infinite`, zero `setInterval`, anywhere.** 360 has zero of either.
- [ ] **`requestAnimationFrame` only for one-shot layout work** (label de-collide after paint, fit-to-view
  zoom on reset) — never a render loop. 360 uses it exactly twice, both one-shot.
- [ ] **All CSS `transition:` declarations are bounded (≤0.4s) hover/state transitions on UI chrome only**
  (theme-thumb slide, panel-collapse width, opacity fade, score-bar fill, hover borders, chevron rotate) —
  **never applied to a node or an edge itself.**
- [ ] **No marquee, ticker-tape, or auto-scrolling stat strip, anywhere** — this is the single specific
  defect named in the handover (§2.2): a literal stock-ticker marquee was built and shipped once already.
  Any "live market" framing must be achieved through density and typographic confidence held still, not
  through scroll animation.

### 3.2 The one sourced exception: "motion that IS the data" — and why 720 likely has none

Real reference systems (EUROCONTROL air-traffic-control HMI, EEC Report No. 292, §4.4.7) draw a genuine,
sourced distinction between **decorative motion** (banned everywhere) and **motion that is itself a
rendering of real underlying data**:

- **Track History** — "a means of indicating the evolution of an aircraft's flight on the radar display by
  marking the aircraft's position on previous radar updates" — the moving trail literally *is* the
  aircraft's own flight history, not decoration on top of it. Even so, it is **length-capped (3–4 points,
  user-selectable) specifically to avoid clutter**, even though every point is real.
- **Speed Vector** — a literal graphical extrapolation of the aircraft's own real velocity, user-toggleable.

**Applied to 720:** this relationship graph has no time-series/radar-style live feed — it is a static
snapshot, refreshed by data updates, not a continuously-arriving stream. **There is no legitimate
"track-history"-equivalent element in this artifact, and none should be invented.** The only two
defensible "this changed" signals, both directly precedented and both bounded:

- [ ] **A static, tabular-numeral "as of HH:MM:SS" timestamp** (MDN `font-variant-numeric: tabular-nums`,
  §3.4 below) that updates its *text* only — never its position, size, or opacity via keyframes. (No
  formal citation for this exact convention exists — flagged as informed estimate from near-universal
  financial-UI practice, not doctrine.)
- [ ] **A single bounded flash-transition** on an element whose underlying value genuinely changed (a
  recalculated GWP estimate, a bound-status flip) — 200–500ms, matching AG Grid's real, shipped default
  order of magnitude (`ag-cell-data-changed`: 500ms flash, `ag-cell-data-changed-animation`: 1,000ms
  fade-out) — **then returns to static.** Never looping, never continuous.
- [ ] If any flash-coding is used at all, it should stay inside the numeric limits a real standards body
  codifies for exactly this (MIL-STD-1472H §5.17.27): no more than **2 flash rates**, differing by
  **≥2.0Hz**, higher rate **≤5.0Hz**, lower **≥0.8Hz**, **50% duty cycle**, same-rate elements
  **synchronized**, **text itself never flashes** (only an adjacent symbol/background may), a **mandatory
  suppression/acknowledgment control**, and **"only a small area of a display should flash at any time."**
  Liveness pushed to a **discrete, dismissible notification** (Palantir Gotham's own pattern: alerts land
  in "Inbox," "remain in Inbox unless a user manually archives the message" — canvas stays still, event
  goes to an artifact) is the stronger, better-precedented default over any on-canvas flash at all.

### 3.3 Color discipline

- [ ] **One constant interactive accent color** for links/selection/primary actions, held identical
  everywhere (Gotham's teal/blue, confirmed across 8+ screens of the actual G-Cloud 14 filing).
- [ ] **A genuine status/classification dimension (bound/unbound/expiring) gets its own separate,
  clearly-labeled color system — never blended into the interactive accent.** This is already the
  project's own resolved decision (`PHASED_BUILD_PLAN.md` §2: `status` enum bound=green/unbound=red/
  expiring=amber, lives only in `bound-policy-overlay.json`) — Gotham's classification-banner pattern
  (green/orange/red, tied to explicit on-screen labels, never decorative) independently validates the same
  discipline.
- [ ] **Full qualitative color palettes belong strictly inside chart/legend widgets, never in page
  chrome.** Gotham's own Timeline widget uses 5+ saturated hues in one stacked-bar legend while every
  other screen in the same filing keeps chrome to grayscale + the single accent — containment, not a
  hard one-color rule.
- [ ] **Encode quantity via position/length, never via hue/saturation** — Cleveland & McGill (1984, *JASA*
  79(387):531–554) rank color/shading dead last in perceptual accuracy of the standard encoding hierarchy.
  Node radius (already position/length-family via `nR`, §2.4) and edge thickness/weight are correct;
  a second GWP-size-via-color encoding on top would be redundant and wrong per this ranking.
- [ ] **Cap simultaneously-meaningful colors near 11** — FAA's empirically-derived ATC palette (11
  foreground colors) and MIL-STD-1472H's independent "no more than 11 nameable colors... when the user
  must recognize categories" ceiling converge from two unrelated standards lineages on the same number.
- [ ] **Redundant coding is mandatory wherever color carries meaning** — never color as the sole channel
  (FAA HF-STD-010; MIL-STD-1472H §5.17.25.10-11; ~8% of men have color-vision deficiency, NN/g). Pair
  every meaningful color with a badge, label, or position difference, not color alone.
- [ ] **Don't justify dark-mode-first with an eye-strain claim** — Nielsen Norman Group's own 2020
  literature review (5 individually-cited studies) shows the ergonomics claim is genuinely unsettled.
  Justify dark-first on the *documented* grounds instead: brand/professional-identity signaling (Bloomberg
  CEO Lex Fenwick, on record, quoted directly: "We have to be religiously consistent" — Core77, 2013) and
  view-type context (investigation/monitoring surfaces trend dark; search/list and document-authoring
  surfaces can trend light — Gotham's actual split, confirmed across 8+ screens by view type, not app name).

### 3.4 Typography and data-ink discipline

- [ ] **Tabular/monospaced numerals on every numeric column** — `font-variant-numeric: tabular-nums`
  (MDN/OpenType `tnum`), so digit columns align without manual padding. Directly relevant to any GWP,
  premium, or role-count figure rendered in a table.
- [ ] **Plain-language labels + color reserved for a small, fixed semantic set** — Bloomberg's renamed
  function keys (GOVT/EQUITY/INDEX; GO=green, Cancel=red — one reserved color per semantic category, never
  per data value) is the direct precedent for entity-type badges and primary actions.
- [ ] **Tufte's data-ink test on every non-data mark**: for every gridline, border, drop-shadow, icon, or
  legend swatch, ask "if I erase this, do I lose information." If not, it's chartjunk — cut it.
- [ ] **Salience hierarchy via weight/luminance, not motion** — "critical information shall be separate
  and distinct enough to be salient from non-critical information" (MIL-STD-1472H §5.17.14.1.5); ATC
  research (Ahlstrom & Arend 2005) documents the same principle via luminance contrast specifically.

### 3.5 Geometry and grammar fidelity

- [ ] **Radius and angle carry the exact load-bearing meaning §1 requires** — replicate §2.3's sector math
  and §2.4's `nR` radius formula exactly (or a per-vertical-correct equivalent), not a stylistic
  approximation. Ring circles drawn at both inner and outer edge (two concentric dashed circles per ring,
  §2.2) — not one.
- [ ] **No silent-fallback rendering path for an out-of-enum value.** 360 itself has three live
  fallback modes (`RI[ring] ?? 200`, `domCol()` → `'#888'`, `COI_LABEL[coiType] || coiType`) — the third
  one *is* actually triggered today, by the `transactional`/`regulatory` gap (§2.5). Any 720-generated
  domain/ring/`coi_type`-equivalent value must have a real enum entry, label, CSS rule, and filter option
  before it ships — don't let a new vertical's category silently degrade to generic gray.
- [ ] **No internal codename in any field with a path to the DOM** (handover Standing Rule #2, §8 below) —
  this is a stillness-adjacent check specifically because it was one of the two concrete defects (the
  archetype-shorthand leak) that failed the last build alongside the ticker.

### 3.6 What stillness is actually for (context, not a checklist item)

Three independently-developed, standards-grade sources converge on the same underlying principle, worth
stating once so a reviewer understands *why* the rule is this strict, not just that it is: **stillness is
the default state that makes a rare instance of real motion legible as a signal.** MITRE's own SOC
research names the Deepwater Horizon disaster — rig alarms disabled after a year of going off "too often"
— as the real, externally-documented consequence of failing this discipline ("an analyst becoming numb to
even the most serious of alarms can have disastrous consequences"). EUROCONTROL's HMI reference (§6.5.3.1.2)
states plainly that decorative visual complexity "serves no useful purpose during visual search and
scanning processes and, on the contrary, will act as noise impairing the processes." Treat every proposed
motion/flash/color-change as guilty until it's shown to be a genuine state-change signal, not a look.

---

## §4 — Vertical role taxonomy (sourced, replacing one-title-per-vertical for real estate/auto/personal)

Yacht and aviation already carry deeper taxonomies (360's own 144-node structural graph for yacht; NBAA's
published job-description catalog for aviation). Real estate, auto, and personal/executive-risk are the
three verticals the current generator reuses a single title on a loop for — replace all three with the
sourced lists below.

### 4.1 Yacht — 33 roles (15 onboard + 18 shoreside), each independently sourced

*Source: Superyacht (60–100m) Organizational & Relationship-Mapping Taxonomy, Rev. 2 — every row below
carries a captured quote from a fetched page this or the prior research session; 6 additional flagged
interior-specialty titles exist but are explicitly excluded pending a working YPI Crew source (do not
promote them without a fresh fetch).*

**Onboard (15):** Captain/Master · Chief Officer/First Officer · Second Officer · Officer of the Watch ·
Third Officer · Bosun · Deckhand (Deck, 7) — Chief Engineer · Second/Third Engineer · Electro-Technical
Officer (EST-tagged) (Engineering, 3) — Chief Stewardess/Steward · Second/Third Stewardess/Steward · Purser
(Interior, 3) — Executive/Head Chef · Sous Chef/Crew Chef (Galley, 2).

**Shoreside (18):** Designated Person Ashore (DPA) · Head of Yacht Management · Deputy Head of Yacht
Management · Technical Manager/Head of Technical Management · Fleet Manager · Yacht Manager (per-vessel
account owner — largest single title category, 16.7% of a named 84-person roster) · Compliance & Safety
Manager/Crew Compliance Officer · Yacht Accountant/Financial Controller (22.6% of the same roster, largest
functional cluster after Yacht Manager) · Class Surveyor · Flag State Registrar/Surveyor · Admiralty/
Maritime Counsel · Corporate/Offshore Structuring Counsel · Tax/Structuring Advisor (gap — no source found)
· **Marine Insurance Broker/Insurer** (Pantaenius, Admiral Marine — named, fetched) · Charter Central
Agent/Broker (MYBA) · Crew Placement Agency · Beneficial Owner/Owning SPV · Owner's Representative/Family
Office Principal.

Regulatory spine grounding role authority: STCW (rank/certification), REG Yacht Code (supersedes LY3,
in force since 2019-01-01), ISM Code §4 (DPA), MLC 2006 Article II(4) (private-vs-commercial applicability
— the flag's competent authority decides borderline cases, Article II(3)).

### 4.2 Aviation — NBAA-sourced role catalog, ranked by insurance-relationship weight

*Source: Real Organizational Structure of a UHNW Private Flight Department — every job description below
is quoted verbatim from NBAA's own Flight Department Job Titles & Descriptions page, re-verified
word-for-word.*

1. **Aviation Department Manager** (I/II — non-flying / some flying) — highest purchasing/signatory weight
2. **Chief Pilot / PIC-Captain** — named-pilot warranty subject; type-rating (14 CFR §61.31(a)) and
   proficiency-check cadence (§61.58) are literal underwriter data points
3. **Director of Maintenance (DOM)** — airworthiness custodian (14 CFR §91.403(a)/§91.409), claims-evidence
   owner
4. **First Officer/SIC** — conditional role: mandatory only under Part 135 IFR-passenger ops (§135.101),
   or where the aircraft's own AFM/type certificate requires two pilots, or by insurer mandate
5. **Aircraft Management Company Account Contact** (e.g. Solairus's "Client Aviation Manager") — often the
   *actual* insurance purchaser/negotiator when the family outsources: Solairus's own page, quoted
   directly, "one of the largest insurance purchasers in corporate aviation"
6. **Flight Coordinator/Scheduler (or Office Manager)** — administrative COI/renewal-tracking function
7. **A&P Maintenance Technician(s)** — evidentiary, not signatory
8. **FBO Relationship Contact** — external, additional-insured coordination point (Signature Aviation)
9. **Aviation Attorney** — drafts insurance-minimums clauses in management/purchase agreements (Aerlex)
10. **SMS Accountable Executive** — 14 CFR §5.25; note this is a **voluntary IS-BAO/SMS construct for a
    pure Part 91 operator, not an FAA mandate** (§5.1 scopes Part 5 to 121/135/91.147 LOA holders only)
11. **Flight Attendant/Flight Technician** — cabin-liability headcount
12. **Line Service Personnel** — ground-handling exposure, typically FBO-employed

**Consolidation note, sourced from NBAA's own framing:** small flight departments are ~80% of NBAA's
operating membership, and NBAA's own page states personnel "are often tasked with multiple roles" — model
role-collapse (one person holding 2–3 titles) as the *statistically normal* case for a single-aircraft
account, not the exception.

### 4.3 Real Estate — 7 roles, replacing the current single title (source per row, PSA/DEMA/IREM/IRMI)

*Source: UHNW Real Estate Staffing Structure v2. This is the weakest-evidenced of the five verticals in
the family-office risk ontology stream too (§C3) — flag internally, do not overstate confidence.*

| Role | Sourced compensation band | Source |
|---|---|---|
| **Director of Residence / Chief of Staff** | $200,000–$600,000 | Private Service Alliance (PSA), employer + careers pages |
| **Estate Manager** | $100,000–$400,000 | PSA — explicit sourced function: "contracts luxury service providers" |
| **Household Manager** | $80,000–$200,000 | PSA — structural threshold: **≤5,000 sq ft single residence** vs. Estate Manager's >5,000 sq ft/multi-property |
| **Property Manager** | not published, real recognized title | PSA Reference Vault roster (distinct line item); commercial-specific: IREM (CPM/AMO credential, published fiduciary Code of Ethics, Articles 3/4/6) |
| **Director of Security** | $200,000–$500,000 | PSA |
| **Groundskeeper** (closest real analog to a "Facilities/Grounds Director") | $80,000–$150,000 | PSA |
| **Local Insurance Agent of Record** | n/a — binary designation mechanic | IRMI: sole party the insurer will deal with until formally replaced via a signed authorization letter |
| **Property Tax Advisor** (commercial) | n/a | American Property Tax Counsel (APTC) — commercial/industrial only, explicitly not residential |

**No source found for a delegation-of-authority dollar threshold for any of these roles** — DEMA's own
2009 Service Provider Application (primary document, read in full) asks only "Is your company insured?
Yes/No," no minimum figure. Any dollar sign-off threshold used in the generator is a labeled estimate
(§4 of the source memo), not a citation — do not present it as sourced.

### 4.4 Auto (Luxury/Collector) — replacing the current single title

*Source: Vertical 4 & 5 Role Research v2, §4. "Collection Manager" is explicitly rejected as the vertical's
core title — it collides with an entirely different, much larger industry (auto-loan collections/recovery
— confirmed via a direct job-title search returning results overwhelmingly from that field).*

- **Collection Advisor** — fine-art analog (Chubb's "Five Key Contacts for Collectors": Art Advisor, Art
  Appraiser, Art Handler, Conservator, Risk Manager), the best-evidenced replacement for "Collection
  Manager"
- **Specialist / Senior Specialist / Head of Department** — real, current, **named individuals** confirmed
  live on Bonhams' own site (`cars.bonhams.com`): Eric Minoff (VP, Head of Department–US), Gabriel Rapetti
  (Head of Sale, Senior Specialist), Simon Kihlstedt/Ian Gabriele (Specialist), etc. **Do not assume RM
  Sotheby's uses identical titles** — RM's own site returned no confirmable title this session (JS-rendered
  roster, unverifiable via static fetch); the only RM-specific titles found are crowdsourced/"Unverified"-
  flagged and should not be used at the same confidence tier.
- **Restoration Technician** — secondary-sourced (classiccarjobs.us), plausible not verified
- **Class Judge** — Pebble Beach Concours d'Elegance, verified live: marque-authentication function
- **Selection Committee Member** — Pebble Beach, 15 named members, verified live: the real admissions/
  curatorial function — replaces the invented "Concours Curator" title, which does not exist at the
  flagship US event
- **Appraiser / Valuation Specialist** — multi-source (Hagerty, Chubb) — no org uses the bare word
  "Appraiser" as a formal title; always modified
- **Transport/Logistics Coordinator** — **not a dedicated title in real practice** (negative finding,
  confirmed against two named carriers, Reliable Carriers and Passport Transport, both organize around
  generic department names only) — model this function as absorbed into Collection Advisor or an external
  vendor's generic desk, not a standalone role

### 4.5 Personal / Executive Risk — replacing the current single title

*Source: Vertical 4 & 5 Role Research v2, §5, and Family Office Asset→Coverage Ontology v2 (K&R/D&O
grounding).*

- **Director of Protective Services** — GSA Global (Simon Tasker, named, quoted) — **flag: this is a
  security-vendor leadership title, not independently confirmed as an in-house family-office staff title**
- **Chief of Staff** — confirmed real, distinct role (Palisade International) alongside Executive
  Assistant(s); no sourced prevalence ratio exists — see §5's numeric-target notes on estimate provenance
- **Trust and Estate Attorney/Counsel** — ACTEC (American College of Trust and Estate Counsel), a real,
  named professional body — rename from "Family/Trust Attorney" to match the industry's own naming
  convention (it's literally in the org's name)
- **Private Banker / Private Client Banker / Trust Advisor** — real title variation confirmed via current,
  named, multi-employer job postings (JPMorganChase "Private Client Banker"; Anthem Bank & Trust "Private
  Banker"; City National Bank "Trust Advisor," $148,266–$252,544) — do not assume one universal string
- **Trust Officer** — confirmed, multi-employer (CoreFirst Bank & Trust; First National Bank of Omaha,
  $107,552–$182,838; MassMutual, $90,500–$118,700)
- **Tax Director / Director of Family Office Services** — confirmed real market title, **replacing the
  generic "Tax Advisor"**, which the market does not actually post: Anchin, Silvercrest Asset Management
  Group, PKF O'Connor Davies, $100,000–$350,000 across postings
- **Estate Manager / Household Manager** — real recruiting category (Tiger Recruitment) and confirmed
  household role interfacing with a protection program (Palisade International) — use in place of any
  unverifiable DEMA-sourced claim (DEMA's own site returned 403 in this stream; not asserted here)
- Two coverage-triggering roles that belong to this vertical's entity/person-triggered lines, not to a
  headcount role list: **Kidnap & Ransom** (IRMI, person-triggered, ISO Coverage Forms CR 00 40/CR 00 41)
  and **Executive D&O** (IRMI; Chubb Family Office Amplifier — entity/governance-triggered, see §6 item 7)

---

## §5 — Concrete numeric targets for the dataset rebuild (MAXIMAL tier, per the founder's "boil the ocean" directive)

*Source: UHNW Specialty-Insurance Dataset Scale/Depth Calibration Research, §4–5, using the maximal/upper
bound (not median) tier explicitly.*

### 5.1 Total named UBO/family accounts: **150**

Derivation, shown not asserted: two independent methods converge on the same order of magnitude. **Method
1** (reachable-network × capture-rate): a specialist's plausible reachable network (300–600 relationships,
~10–20% of NA's 3,180 single-family offices per Deloitte) × plausible capture rate (10–30%) brackets
30–180; maximal tier picks 150, upper-middle of that band, not its mathematical ceiling of 180. **Method 2**
(team service-capacity ceiling): a realistically-staffed 4-FTE team (producer + 2 CSR/junior producer +
fractional risk-control specialist), 3,740 usable service hours/year, ~23 hours of substantive service per
account/year → a capacity ceiling of **≈163 accounts**. 150 sits just under that ceiling — a genuine
operational ceiling, not an arbitrary round number.

### 5.2 Per-vertical account counts (attach-rate reasoning shown, each row sourced or explicitly flagged as estimate)

| Vertical | Accounts | Attach % | Basis |
|---|---|---|---|
| Real Estate | **143** | 95% | Structural/definitional at this wealth tier — held flat across tiers, not a function of book maturity |
| Yachts | **135** | 90% | Held flat — the book's marine-specialty origin, a structural property, not book-tenure |
| Luxury Automotive | **120** | 80% | Lowest financial entry threshold of the five verticals — increases with book tenure (cross-sell) |
| Personal/Executive Risk | **83** | 55% | Attaches selectively (business owners, public-profile individuals) — increases with tenure |
| Private Aviation | **60** | 40% | Lowest of the five — highest outright-ownership entry cost; charter/fractional models exist precisely because most UHNW don't own outright |

### 5.3 Role-instances per account and total contact/role records

**Role-instances per account: 6–9, midpoint 7.5** (UBO/principal, spouse/co-trustee as co-insured, a
second family-office staff contact where AUM supports it, 1–2 adult children as named insureds, a
trustee/estate-attorney contact, and for the largest accounts a dedicated captain/chief-of-staff contact).

**Total contact/role records: 150 × 7.5 = 1,125.**

### 5.4 Relationship/referral edge density — grounded in 360's own edges-per-node ratio (§2.9)

360's structural graph carries a measured density floor: **4.33 edges/node** (edge-eligible/top-level
nodes), **min out-degree 2, max 10, zero orphan nodes.** Applying that same ratio to the maximal tier's
1,125-record role/contact population as the target for `knows`/structural relationship edges:

```
1,125 role-instance records × 4.33 edges/node ≈ 4,871 edges
```

**Target: ~4,800–4,900 `knows`/`talks_to` relationship edges** across the maximal-tier producer-contact
graph, with the same two hard structural invariants 360 itself enforces: **every role/contact node carries
a minimum of 2 outgoing edges (zero orphans), no node exceeds ~10.** This is the number that keeps a
720 screen from reading as "a handful of dots in a mostly-empty circle" (handover §1) at the scale the
maximal tier requires — a sparse graph over 1,125 nodes would look far emptier than 360's own, visually
dense, 624-edge/187-node graph.

This target is for the **structural/`knows` relationship layer only**, and is separate from two other edge
types the schema defines, which should **not** be scaled by the same ratio:

- **`referred_by` edges** — **no sourced ratio exists.** Grierson & Brennan (2017, *Qualitative Market
  Research*) found independent financial advisers in comparable practices typically do not systematically
  track referrals at all ("the reality of referrals seems not to match the mythology"). Recommend a
  conservative, explicitly-labeled planning estimate — roughly **1 referral edge per 8–10 role-instances**
  (≈110–140 edges across the maximal-tier book) — rather than a density-matched figure, and document the
  provenance gap in the schema doc per §6 item 10 below.
- **`cross_pollination` edges** — these are **hand-authored flagship-narrative edges**, each carrying a
  real `via_relationship` + `why` + `generated_narrative` (`PHASED_BUILD_PLAN.md:161-176`) — they exist to
  be individually convincing in a room, not to hit a density number. Recommend a **curated set of roughly
  20–30** across the full 150-account maximal-tier dataset (concentrated on the ~55–95% of accounts that
  span 3+ verticals per §5.2's attach rates), each independently sourced/written — mass-generating these
  to a ratio would directly violate handover §1's "every string on screen is a considered, professional
  label" requirement.

---

## §6 — Data model corrections/additions (vs. `03-architecture/PHASED_BUILD_PLAN.md`)

Sourced from the insurance-data-standards, risk-ontology, and relationship-graph research streams.
Each row: the gap, the real-world evidence, the fix, and where in the current schema doc it applies.

| # | Gap found | Evidence | Fix | Schema location |
|---|---|---|---|---|
| 1 | **No `Policy` entity above Coverage** | Salesforce FSC `InsurancePolicy` is the parent container; AMS360 (Vertafore) treats Policy as the atomic transactional unit with Endorsement/Renewal as siblings. `bound-policy-overlay.json` is named for a Policy but its actual primary key is `coverage_id` | Add a `Policy` node/sheet (`policy_id`, `policy_number`, `carrier`, `effective_date`, `expiration_date`, `producer_of_record`, `billing_type`); give each Coverage a `policy_id` FK | `PHASED_BUILD_PLAN.md:57-92, 233, 235` |
| 2 | **No typed participant role (Named Insured vs. Additional Insured vs. Certificate Holder)** | IRMI: these are legally distinct roles; FSC `InsurancePolicyParticipant.Role` models exactly this | Add a `Policy_Participant` junction: `participant_role ∈ {named_insured, first_named_insured, additional_insured, beneficiary, certificate_holder}` + effective dates | `PHASED_BUILD_PLAN.md:114-119` |
| 3 | **`owner_ref` is a single scalar — no co-ownership or ownership %** | FSC `AccountAccountRelation`: `TotalSharePercent__c`, `ShareholderHierarchyRole__c`, `ShareholderHierarchyLevel__c` — beneficial ownership is modeled as a weighted, hierarchical, many-to-many relation | Replace/extend `owner_ref` with an ownership relation carrying `ownership_percent` + `ownership_role` (UBO/trustee/SPV director), many-to-many | `PHASED_BUILD_PLAN.md:120-126` |
| 4 | **Coverage edges have no `trigger_type` — asset/entity/activity/person conflated** | IRMI bailee/bailee-coverage definitions (activity-triggered — the custodian buys it, not the owner); Chubb Family Office Amplifier (entity-triggered D&O); IRMI K&R definition (person-triggered, ISO CR 00 40/41) | Add `trigger_type ∈ {asset, entity, activity, person}` to each Coverage node/edge; entity-triggered coverages attach to the `principal`/family-office node, not an Asset | `PHASED_BUILD_PLAN.md:120-131` |
| 5 | **"P&I" terminology too broad for private pleasure yachts** | Chubb's actual retail yacht product (`chubb.com`, fetched) uses "Liability Protection," never "P&I," anywhere on the page. IG P&I Clubs' ~87%-of-world-tonnage facility (Wikipedia-sourced only) is a commercial-shipping mechanism | `COVERAGE_CATALOG` should default private/pleasure yacht liability to "Liability Protection"; reserve "P&I" for commercially-coded/charter-registered yachts, flagged low-confidence | `PHASED_BUILD_PLAN.md:144-146` |
| 6 | **Fine Art mis-modeled as a Yacht-derived coverage line** | Chubb's yacht product has no fine-art grant; Marsh/Brown & Brown both sell fine art as a separate blanket/scheduled policy regardless of location | Model Fine Art as its own asset class with a `situs` (location) attribute, not nested under a Yacht asset's `required_coverage_ids` | `PHASED_BUILD_PLAN.md:120-126` |
| 7 | **Exec D&O buried under "Personal" vertical** | Chubb Family Office Amplifier: D&O is entity/governance-triggered (advice/delegation/beneficiary-treatment exposures), structurally distinct from personal-risk lines like K&R | Split Exec D&O into its own entity-triggered branch via the new `trigger_type` field (item 4), attaching to the `principal`/entity node | `PHASED_BUILD_PLAN.md` §3 |
| 8 | **`coi_type`/`coi_weight` naming collision with "Certificate of Insurance"** | ACORD 25 is the industry's own standard "COI" abbreviation for Certificate of Insurance; `via_relationship.coi_weight` sits directly next to `coverage`/`policy`/`carrier` fields | Rename to `influence_weight`/`influence_type`, or add an explicit glossary note at first use | `PHASED_BUILD_PLAN.md:164` |
| 9 | **`relationship_weight` computed from raw activity+recency, ungated by ring/authority** | The project's own live generator data (REP.VAUGHN/Aurelia rows) shows `activity_count_90d` rising 40→55→61 while relationship_weight should fall, because Ring 3/4 (operational) contacts carry structurally less signatory value than Ring 0/1 — Cross & Prusak's four-role ONA framework backs non-linear, role-gated weighting | `relationship_weight = ring_authority_multiplier(ring) × [w_f·log(1+activity_count_90d) + w_r·recency_decay]`; suggested starting multipliers Ring0=1.0/Ring1=0.85/Ring2=0.55/Ring3=0.25/Ring4=0.12 — **explicit estimate, no source validates these exact five numbers**, replace with fitted weights once real usage data exists | `PHASED_BUILD_PLAN.md:195-199` |
| 10 | **`referred_by` field has an unverified real-world tracking assumption** | Grierson & Brennan (2017): advisers in this exact market segment typically don't systematically track referrals in CRM at all | Document the risk explicitly in the schema doc; keep referral-edge volume sparse/illustrative in the generated dataset (§5.4), not systematically dense | `PHASED_BUILD_PLAN.md:169-173, 204-208` |
| 11 | **Household/family multi-account grouping undocumented** | FSC models Household as its own Account related via `AccountAccountRelation`; `principal` currently stands in for Household with no formal multi-account relation | Add one documentation line in the same style as the doc's existing resolved-contradiction notes: "`principal` stands in for Household in this MVP; a true multi-account household relation is deferred" — converts a silent gap into a stated scope decision | `PHASED_BUILD_PLAN.md` §3 |
| 12 | **No Line-of-Business axis on `COVERAGE_CATALOG`** | FSC's `InsurancePolicy.LineOfBusiness` is a second axis distinct from `InsurancePolicyCoverage.Category` | Add a `line_of_business` field alongside `coverage_type_id` | `PHASED_BUILD_PLAN.md:144-146` |

**What the current schema already gets right, confirmed against real systems (worth stating, not just
gaps):** the overlay-never-baked-onto-the-node pattern (§5, lines 191–225) matches how FSC separates
transactional/dated objects from party/master data; Coverage as a top-level node with an FK to its parent
(`parent_asset_ref`) rather than nested matches `InsurancePolicyCoverage`'s real foreign-key relationship
to `InsurancePolicyAsset`. Both were arrived at independently in this project and happen to match real
practice — keep them, and note in the schema doc that they're validated decisions, not lucky guesses.

---

## §7 — GWP pricing engine corrections

*Source: Validation: "Defensible GWP Engine" — Three-Method Whitespace Pricing Approach.*

### 7.1 The flat 5–8% "market inflation" Ghost Policy constant is unsupported and currently wrong-signed

Live market data pulled for this review contradicts a flat, universal annual increase:

| Source | Metric | Figure |
|---|---|---|
| Marsh GIMI, Q2 2026 | Global composite rate | **–6%** (8th consecutive quarterly decline) |
| Marsh GIMI, Q2 2026 | Property | **–12%** |
| Marsh GIMI, Q2 2026 | Casualty (global) | +2% (below the 5–8% range) |
| Marsh GIMI, Q2 2026 | Casualty (US only) | **+7%** — the only in-range figure, and it's one line, one region |
| IUMI Stats Report 2025 | Marine, global (premium, not pure rate) | +1.5% |
| IUMI Stats Report 2025 | Ocean Hull (premium) | +3.5% |
| IUMI Stats Report 2025 | Offshore Energy (premium) | **–7.9%** |

**Fix:** replace the flat constant with a rate-trend variable keyed to `vertical`/line-of-business and
region, refreshed from a named, free, quarterly public index (Marsh GIMI is the most citable off-the-shelf
option found). Relabel 5–8% in the codebase for what it actually is — an unsourced placeholder — until
replaced.

### 7.2 Rate vs. premium-volume conflation

IUMI's marine figures are premium *written* (rate × volume), not pure rate; Marsh's GIMI is closer to a
true renewal-rate index. **Fix:** trend Ghost Policy re-rates on a rate index specifically — using a
premium-volume index as if it were pure rate change silently blends in market growth that has nothing to
do with what an individual lapsed risk would re-price at.

### 7.3 No underwriting-cycle-phase awareness

Eight consecutive quarters of decline (Marsh) is evidence of an active soft-market phase — a named,
studied phenomenon (Lloyd's of London's own cycle-management doctrine; Cummins & Danzon 1997; Doherty &
Garven 1995), not noise around a flat trend line. **Fix:** expose which cycle phase the trend assumption
reflects, and flag staleness relative to the latest published index date, rather than hardcoding a
constant with no visible "as of" date.

### 7.4 Peer Comp needs an N-based confidence gate

Peer Comp is real — it's the zero-individual-credibility special case of Bühlmann credibility theory
(`C = z·X̄ⱼ + (1−z)·X̄`, collapsing to the peer average `X̄` when z=0, i.e. no own experience). But
credibility theory's own literature treats reliability as a function of sample size. **Fix:** gate/discount
Peer Comp's output confidence by N — flag or visually distinguish an estimate built from 3 peer accounts
differently than one built from 40; the current engine has no visible guardrail for this.

### 7.5 Parameter Multiplier needs a refresh mechanism and a real regulatory exposure floor

The pattern itself is sound and precedented (NCCI's national workers'-comp rating: premium = exposure base
× classification rate — the same shape as crew-headcount × regional per-head rate). But NCCI's real system
periodically revises manual rates and layers an experience-modification factor on top; a static,
undated regional rate has neither. Separately, MLC 2006 (Regulation 4.2 / Standard A4.2.1, secondary-
summary sourced — verify against primary ILO NORMLEX text before hard-coding) sets a real **16-week
minimum wage-continuation floor** for Crew Medical exposure — a liability/limit requirement, not a
premium rate. **Fix:** version/date-stamp the per-unit rate table; check any Crew Medical parameter-
multiplier limit against the 16-week floor as a sanity/adequacy check, never treat the floor itself as the
rate.

### 7.6 Directional cross-check worth wiring in

US E&S/surplus-lines premium growth (+12.2% YoY 2024, NAIC — a channel that exists specifically because
these risks lack "sufficient historical data for conventional actuarial analysis," i.e., the exact
whitespace problem this engine solves) is a real, regulator-published, annually-updated leading indicator
of standard-market hardening/withdrawal. Worth using as a directional sanity check on the engine's own
trend assumptions, not as a rate input.

---

## §8 — What NOT to do again (from HANDOVER_360_TO_720.md §2/§3)

**Standing rules, quoted directly (§3):**

1. No dashboard is "done" until it has been opened, screenshotted, and visually compared against 360
   directly by the person who built it — not described as done, not reported as verified by a subagent,
   *looked at*.
2. No internal codename, nickname, or shorthand may exist in any field that a render function can put on
   screen. If a concept needs an internal name for reasoning about it, that name lives in comments or
   planning docs, never in a data field with a path to the DOM.
3. No animation, motion, or auto-playing element that 360 itself doesn't use. Stillness is the standard,
   not a fallback.
4. Data thinness is a visual defect, not a separate data-quality issue. If a screen looks sparse, that
   blocks ship the same as a broken layout would.
5. Every build brief includes §1 of this document, verbatim, as a requirement — not a reference link.

**Root causes, one per named failure (§2), never to repeat:**

- **Internal shorthand leaking into client-facing UI** — the producer roster's `archetype` field
  (`"The Sniper"`, `"The Grinder"`) was rendered verbatim across three screens because no separation ever
  existed between an internal reasoning label and a field with a path to the DOM. They were the same
  field. Fix the pattern, not just that one field.
- **An animated scrolling ticker** — a literal `@keyframes` infinite-scroll marquee was built for a stat
  strip because the builder reached for "Bloomberg Terminal" as a literal scrolling-ticker metaphor
  instead of the thing 360 actually does to earn that comparison: density and typographic confidence, held
  still.
- **The dataset started far too thin** — ~4 known + 4 untapped contacts per producer, built to prove one
  flagship narrative chain, not to feel like a real Salesforce contact list — and was called "built and
  verified" at that scale before anyone checked it against the density bar.
- **Self-reported verification trusted over direct inspection** — every one of the above shipped with a
  subagent report claiming "verified live in a browser." Those reports were taken at face value. **A
  completion report is a claim, not evidence.** Only the user opening the files and reacting to what they
  saw actually caught these problems.
- **No explicit "match 360, specifically" instruction was ever given** — every prior build brief specified
  data wiring in exhaustive detail; none said "the bar is 360, put your output next to it side by side,
  and if it would look embarrassing in that comparison, it is not done." That sentence is now §1 of this
  document, included verbatim, per Standing Rule #5.
- **The data layer grew reactively, not foundationally** — patched in response to problems found after
  the fact (missing `responsible_node_id`, missing category field, missing volume), never authored up
  front at real depth as the thing everything else is built on top of. This brief exists specifically to
  break that pattern — data foundation and research first, HTML last.

---

## §9 — Source ledger (consolidated, all twelve streams)

Organized by category so any figure in §1–§7 above can be re-traced to its stream of origin.

### Regulatory / primary legal instruments (Tier 1)
- ILO — Maritime Labour Convention, 2006 (consolidated text through 2018 amendments), Article II(1)(f), II(3), II(4), II(6); Regulation 4.1, 4.2; Standard A4.2.1, A4.2.2 — PDF read directly, `ilo.org/wcmsp5/.../wcms_090250.pdf` / `wcms_763684.pdf`
- UK legislation.gov.uk — Merchant Shipping (ISM Code) Regulations 2014 (SI 2014/1512), Regs 2–4
- gov.uk — MGN 708(M) (2026, current); LY3 publication page; Red Ensign Group Yacht Code publication page; Large yachts construction/maintenance standards (LY2)
- 14 CFR Parts 1, 5, 61, 91, 135 (Cornell LII mirror) — §§1.1, 5.1, 5.3, 5.25, 61.31(a), 61.58, 91.7, 91.9(a), 91.403(a), 91.409(a-b), 135.101, 135.105, 135.243, 135.245
- MIL-STD-1472H (15 Sept 2020), 456pp — §5.2.1.1.3 (motion ceiling), §5.17.27 (flash coding), §5.17.25 (color coding), §5.17.14.1.5 (information density), §5.2.2.16.7-9 (HMD declutter), §5.4.5.6.3

### Standards / classification / flag bodies (Tier 2)
- IMO — STCW Convention overview, ISM Code overview, SOLAS 1974 overview
- REG Yacht Code (Red Ensign Group)
- Cayman Islands MACI (`cishipping.com`); Lloyd's Register Yachts segment (`lr.org`)
- FAA Office of Aerospace Medicine — DOT/FAA/AM-18/18 (Gildea, Milburn, Post 2018), DOT/FAA/AM-20/08 (2020), Ahlstrom & Arend (2005, HFES Proceedings)
- EUROCONTROL EEC Report No. 292 (Jackson & Pichancourt, 1995), 164pp, §4.4.7 Track History/Speed Vector, §6.4.3.6-7, §6.5.2, §6.5.3.1.2
- NCCI (National Council on Compensation Insurance) — payroll/classification rating
- NAIC CIPR — Surplus Lines topic page, E&S market size ($131bn 2024, +12.2% YoY)

### Named commercial organizations (Tier 3, own-site fetches)
- Burgess Yachts — Yacht Management team page (84 named individuals/titles)
- Pantaenius, Admiral Marine (yacht insurance brokers)
- Solairus Aviation ("Client Aviation Manager"; "one of the largest insurance purchasers in corporate aviation"), NetJets/BJT, Global Aerospace (SM4 Safety), Signature Aviation, Aerlex Law Group
- Hagerty (Guaranteed Value®), Chubb (Masterpiece Yacht, Aerospace, Family Office Amplifier, Five Key Contacts for Collectors, Collectors Concierge), USAU/U.S. Aviation Underwriters
- Marsh Private Client Services, Brown & Brown (formerly Risk Strategies), Marsh Global Insurance Market Index Q2 2026
- Bonhams (`cars.bonhams.com` — named specialists), Pebble Beach Concours d'Elegance (Chief Judge, Selection Committee)
- Private Service Alliance (PSA), DEMA (2009 Service Provider Application, primary PDF), IREM (Code of Professional Ethics), American Property Tax Counsel
- Palisade International, GSA Global (Simon Tasker), Control Risks, Tiger Recruitment
- Affinity, Introhive, DealCloud/Intapp (relationship-intelligence platforms)
- Vertafore AMS360, Salesforce Financial Services Cloud (`InsurancePolicy`, `InsurancePolicyParticipant`, `InsurancePolicyCoverage`, `InsurancePolicyAsset`, `AccountAccountRelation`)
- IUMI Stats Report 2025

### Government/regulator wealth & staffing data
- Altrata, World Ultra Wealth Report 2025; Knight Frank Wealth Sizing Model 2026
- Campden Wealth, North America Family Office Report 2025; UBS Global Family Office Report 2025
- Deloitte Private, Family Office Insights Series – Global Edition
- Wealth-X, Private Jets and the Ultra Wealthy; Residential Real Estate 2023

### Academic / peer-reviewed (ONA, tie-strength, RFM, referral)
- Granovetter (1973), *AJS* 78(6); Marsden & Campbell (1984), *Social Forces* 63(2)
- Onnela et al. (2007), *PNAS* 104(18) — mobile-network tie-strength at scale
- Krackhardt & Hanson (1993), Cross & Prusak (2002), Cross/Borgatti/Parker (2002) — HBR/CMR ONA role literature
- Burt (1992, 2004) — structural holes; Borgatti (2006) — Key Player Problem
- Van den Bulte, Bayer, Skiera, Schmitt (2018), *JMR* 55(1) — referral programs
- Grierson & Brennan (2017), *Qualitative Market Research* 20(1) — referral tracking gap in financial advice
- Fotiadis & Vassiliadis (2017), *J. Business & Industrial Marketing* 32(3) — RFM in maritime B2B
- Cleveland & McGill (1984), *JASA* 79(387) — graphical perception hierarchy
- Tufte, *The Visual Display of Quantitative Information* (1983/2001)

### Design/reference systems (Bloomberg, Palantir, adjacent instrument panels)
- Palantir Technologies UK Ltd, *Palantir Platform: Gotham — Service Definition Document* (G-Cloud 14, 2024), read page-by-page
- Ted Merz, "Amber on Black" (2021); Rain Noe/Core77 (2013, Lex Fenwick quote); UX Magazine (Leca; Parker, both 2010)
- MDN `font-variant-numeric`; AG Grid "Flashing Cells" docs
- NN/g, Budiu (2020) "Dark Mode vs. Light Mode" — 5 individually-cited ergonomics studies
- MITRE (Zimmerman, 2014) "Ten Strategies of a World-Class Cybersecurity Operations Center" — Deepwater Horizon citation
- SANS Institute (Crowley & Pescatore, 2019) SOC survey; NN/g Laubheimer (2017) dashboard principles

### Insurance-term definitions (IRMI, throughout)
- Named Insured, Additional Insured, Certificate Holder, Bailee/Bailee Coverage, Kidnap & Ransom (ISO CR 00 40/41), Protection & Indemnity, War Risk, National Flood Insurance Program, Personal Articles Floater, Directors & Officers Liability, Agent of Record — all fetched directly from `irmi.com`

**Note on research-tool constraints, carried forward honestly from every stream:** WebSearch was exhausted
(200/200 session budget) before most of these passes began; all verification was done via direct WebFetch
against named URLs, with failed/blocked fetches (403/404/DNS/TLS) logged in each stream's own appendix
rather than silently converted into unsourced claims. Where a stream flags a figure as `[NO SOURCE FOUND —
ESTIMATE]`, that flag is preserved verbatim in §4–§7 above rather than smoothed into an unlabeled number.
