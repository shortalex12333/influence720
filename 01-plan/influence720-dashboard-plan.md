# Influence 720 — Dashboard Architecture Plan (Draft v1)

## The thesis

Epic is **Yesterday** — what was bound, what lapsed, what's expiring. Salesforce is **Today** — who's currently being talked to. Neither system, alone or combined, describes **Tomorrow** — what the asset structurally requires (the Influence 360 ontology's "Perfect State") and where the relationship *should* exist but doesn't.

Leadership is currently managing two lagging reports — a book-of-record and an activity log — and calling that visibility. The pitch of 720 is that roughly half the picture (the gap between structural requirement and captured reality) is invisible to both systems individually, and only becomes visible when Epic × Salesforce is compared against the 360 ontology. Every dashboard below exists to make one slice of that gap visible, priced, and actionable.

---

## The Defensible GWP Engine (cross-cutting — feeds Tier 2 primarily, referenced by Tier 3)

No number on any dashboard is a guess. Every whitespace $ figure resolves through one of three methods, all sourced from the brokerage's own Epic ledger:

| Method | Trigger scenario | Calculation | Confidence |
|---|---|---|---|
| **Ghost Policy** | A policy this client used to hold, now lapsed/lost | Last known premium in Epic × 5–8% annual market inflation | Exact — historical fact |
| **Peer Comp** | A policy never written for this client (e.g. new helideck, no Aviation liability on file) | Query Epic for N peer assets in the same size/type band, average their bound premium | High — market-tested against own book |
| **Parameter Multiplier** | Coverage tied to a fixed operational ratio (e.g. Crew Medical/MLC = per-head) | 360 ontology's required count (e.g. 18 crew for a 70m) × regional per-unit rate | High — algorithmic baseline |

---

## Reference row: Influence 360 (baseline — what already exists)

| Node / Datum | Filters | What it shows | Time orientation |
|---|---|---|---|
| Person / Role (187 nodes) | Ring, COI weight/type, vessel size, proximity | Who's who, the weight of transactional influence, strategy for forcing market entry | Structural snapshot — timeless, not dated |

---

## Influence 720 — the three tiers

| # | Dashboard | Default Node / Datum | Toggle → Alt Node | Filter Cascade | Applies To | What It Shows | Blind Spot Exposed | Sources |
|---|---|---|---|---|---|---|---|---|
| **1** | **Producer's Tactical Map** | Person (Contact) — size = relationship weight, color = authority tier (ring) | Position / Company (Account) | Asset type → Ring/authority level → Relationship status (current / untapped) → DISC style | Individual producer, own book | Live deal map per account: warm-intro paths, referral web highlighting the missing node next to a known one, DISC-driven approach notes, "Draft Intro Request" action | Salesforce shows who's *in* the CRM — it never shows who's structurally missing from the circle around them. The rep doesn't know what they don't have. | Salesforce (Today) + 360 ontology (Tomorrow) |
| **2** | **Whitespace / Gap Engine** | Three-level hierarchy, not a flat node list: **UBO/SPV → owns → Asset → structurally demands → Coverage**. Coverage node size = $GWP (bound or estimated via the pricing engine above), color = bound (green) / gap (red) / expiring (amber) | Responsible node/role (who holds purchasing authority for that coverage) | Vertical → Asset → Policy line → Bound status → GWP value threshold | Producer (upsell/cross-sell targeting) | Split panel: structural requirement (360 + vertical ontology) vs. bound reality (Epic), grouped under the specific Asset that demands each coverage. Red nodes are priced and pointed at the exact node responsible for buying them | Epic shows what was sold, never what the asset needs — an account can look fully serviced with 40% of its required coverage unbound, and nothing in Epic flags that absence because there's no line item for a policy that was never written | Epic (Yesterday) + 360 ontology (Tomorrow) + Salesforce (contact for the target arrow) |
| **3** | **Executive Command Center** | Producer (rep) — scatter point, X = touchpoints (period), Y = GWP captured (period) | Policy/coverage type — same axes, aggregated regional whitespace $ by line instead of by rep | Region/department → Rep or policy-type → Time window → Ring-weighting of touchpoints | Leadership / MD | Effort-vs-yield skew (time wasted on Ring 3/4, gap in Ring 1 attention), at-risk/churn radar (comm-frequency decay on a Ring 0/1 signatory *before* renewal date), regional whitespace ticker | Leadership sees GWP totals and activity counts as two separate, disconnected reports — never the correlation between where time goes and where premium actually comes from, and never a leading indicator of churn, only the lagging one (a lost renewal) | Salesforce (Today, aggregated) + Epic (Yesterday, aggregated) + derived churn score |

---

## Multi-vertical expansion layer

Expanding beyond Yachts means the graph is no longer mapping one asset's ecosystem — it's mapping a **Family Office Portfolio**. Two structural pieces were missing to make that work, plus the staging data for both.

### 1. The Asset node (new node type)

In 360, the yacht was implicit context, never a node. At portfolio scale it has to be explicit: a person doesn't need "Aviation Liability" in the abstract, they need it *for a specific Gulfstream*. New chain: **UBO/SPV (owns) → Asset (structurally demands) → Coverage**. This is what makes Tier 2's hierarchy three levels deep (see updated Tier 2 row above) instead of a flat policy list.

### 2. The Cross-Pollination Edge (new edge type)

A relationship edge connecting a node in one vertical directly to an Asset in a different vertical — because the same human often plays a role in more than one. Example: the Aviation Risk Manager on the jet and the Corporate Administrator on the yacht are the same person. Without this edge, five verticals is just five separate 360s side by side. With it, a Ring 1 relationship earned on one asset becomes a named, priced, warm path into a gap on a completely different asset — the actual "Trojan Horse" cross-sell mechanic, and the load-bearing idea in this expansion.

**The payoff sentence this produces** (Tier 1 ring proximity + cross-pollination edge + Tier 2 priced gap, in one line):
> "Because Producer 1 has a Ring 1 relationship with the Yacht's Trustee, we have a direct, warm path to capture the $250,000 Aviation Liability policy on their Gulfstream."

### The 5-vertical asset/coverage ontology (staging data)

| Vertical | Example Asset | Required Coverages |
|---|---|---|
| **Yachts (anchor)** | 70m Superyacht | Hull & Machinery, P&I Liability, Crew Medical (MLC), Fine Art (Scheduled) |
| **Private Aviation** | Gulfstream G650 / Sikorsky S-76 | Aviation Hull, Aviation Liability, Crew Accident, War Risk |
| **Real Estate (CRE & high-value residential)** | Aspen Ski Chalet / Miami Commercial Plaza | Coastal Wind/Flood, High-Value Property, Premises Liability |
| **Luxury Automotive** | 12-Car Curated Hypercar Collection | Agreed Value Fleet, Transit/Shipping, Garage Keepers (if outsourced) |
| **Personal / Executive Risk** | The Family / Board of Directors | Kidnap & Ransom (K&R), Executive D&O, Cyber Crime, Blanket Personal Articles |

### The 5 producer archetypes (Tier 3 staging data)

Five pre-written floor-physics stories, not a random scatter cloud — each one a distinct, recognizable rep pattern for the Executive Command Center.

| Archetype | Book Profile / Skew | The Narrative 720 Exposes |
|---|---|---|
| **1. The Sniper** | 80% Ring 1 & 2 (signatories), massive GWP | The ideal state — talks to fewer people, exclusively economic buyers |
| **2. The Grinder** | 90% Ring 3 & 4 (operational/crew), low GWP | The danger zone — high activity, zero authority to bind policies |
| **3. The Legacy** | Massive GWP, comm-frequency decaying | The silent threat — bound large accounts years ago, hasn't spoken to the Ring 1 signatory in 8 months. High flight risk at renewal |
| **4. The Silo** | 100% single-vertical GWP, zero adjacent policies | The missed opportunity — has the Ring 1 ear of the UBO, leaves the cross-pollination money on the table for competitors |
| **5. The Rookie** | High activity, calling unmapped Ring 4 nodes on cold accounts | Needs the Tier 1 referral web to find the warm path to the actual decision-makers |

---

## Node visual encoding per dashboard

The 360 grammar (size = composite influence score, radial distance from center = decision distance, pie segment = domain, color = ring/domain) does **not** carry over unchanged — each dashboard answers a different question, so what "center," "radius," and "segment" mean has to be redefined per dashboard rather than inherited wholesale. Carrying 360's literal encoding into every screen would misrepresent what that screen is actually measuring.

| Dashboard | Node size means | Radial distance from center means | Pie segment / angle means | Color means |
|---|---|---|---|---|
| **360 (baseline)** | Composite influence score (structural importance) | Decision distance — hops from the Principal | Domain/category (9 domains) | Ring tier / domain |
| **Tier 1 — Tactical Map** | *My* relationship weight with this person (activity frequency × recency) — personal, not structural | Authority tier (same ring concept as 360 — how close to the actual buyer) | Vertical, when toggled to portfolio view; role category within one vertical otherwise | Relationship temperature — green = known/current, grey = untapped/missing. This is the new axis 360 didn't need |
| **Tier 2 — Whitespace Engine** | $GWP — bound premium if matched, estimated premium (via the pricing engine) if a gap | Not decision-distance — organizational depth instead: center = UBO, next ring = Assets owned, outer ring = Coverages orbiting their Asset | Which Asset/vertical a coverage belongs to — segments replace 360's domains with owned assets | Bound status: green = bound, red = gap, amber = expiring |
| **Tier 3 — Command Center** | Book value or $ GWP at risk (not a radial chart at all — X/Y scatter) | N/A — X axis = touchpoints, Y axis = GWP captured | N/A | Producer archetype, or ring-weighting of where a rep's touchpoints land |

---

## Visual continuity note (Tier 3)

Tier 3 does not use the 360 radial graph — a scatter/heatmap is the correct shape for a distribution question, forcing it into a relational-proximity visual would make it *less* legible on the SVP screen. Product identity is preserved instead through shared dark-mode CSS, typography, and the node-coloring taxonomy (Signatories = green, Operational = red, etc. — the same COI-type palette from 360, reused as the scatter's legend).

---

## Explicitly deferred (not this iteration)

- Data export / reporting
- Any real Epic or Salesforce integration — no credentials, none planned; this remains a mock-data persuasion artifact
- Dashboard 5 as its own screen — folded into the engine (the Epic×Salesforce×360 comparison), not a separate page anyone navigates to

---

## Appendix — field glossary (for reference)

**Salesforce (Today):** Contact (name, title, account, DISC tag, referred-by/to), Account (firm), Activity (type, direction, date), Opportunity (stage, $, close date, linked policy-type, owner)

**Epic (Yesterday):** Account (entity type, linked asset), Policy (coverage type, carrier, status, premium, effective/expiry date, producer-of-record), Asset (vessel/jet/property, size class, value, attributes that trigger required coverage)

**Derived (720's actual IP — computed, not stored anywhere raw):** Relationship weight, Whitespace $ (via the pricing engine above), Churn score (comm-decay slope vs. time-to-renewal), Book Weight Index (ring distribution of a rep's book), Touchpoint-to-conversion ratio
