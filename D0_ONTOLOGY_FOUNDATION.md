# Dashboard 0: Ontology Foundation (Structural Baseline)

> **Document Status**: Definitive Specification & Data Mapping Guide for Dashboard 0 (D0).
> **Scope**: Influence 360 Structural Baseline Knowledge Graph (Pure Ontology).
> **Status**: **DONE & APPROVED**

---

## 1. Executive Summary: What D0 IS and IS NOT

### What D0 IS:
* **The Invariant Brand Datum & Spinal Cord**: D0 renders the 5 multi-vertical universes (**Yacht, Aviation, Real Estate, Auto Collection, Personal Risk**) floating on one continuous canvas around a central orbit (72° spacing).
* **Pure Structural Taxonomy**: Contains 187 roles, 624 structural edges, 5 authority rings (0-4), and 9 lifecycle sectors.
* **Always a Knowledge Graph**: Frameless petal-wheel canvas. Zero card containers, zero bordered tiles, zero motion/animation by default.

### What D0 IS NOT:
* ❌ **NOT an Application View**: D0 contains **zero application layer data** (no Salesforce contact recency, no Epic policy premiums, no bound/gap statuses).
* ❌ **NOT a Multi-Card Dashboard**: D0 does not split verticals into separate framed cards.

---

## 2. Filtration Metrics & Correlative UI Encoding

### 2.1 Filtration Metrics (The 5 360 Filter Controls)
1. **Proximity Filter**: Filter roles by Authority Ring (Ring 0 Apex through Ring 4 Operational).
2. **Conflict Type Filter**: Filter structural relationships by COI weight (Signatory, Conditional, Transactional, Operational).
3. **Severity Filter**: Filter edges by operational impact severity (Critical, High, Medium, Low).
4. **Frequency Filter**: Filter relationship edges by operational interaction frequency (Daily, Weekly, Monthly, Transactional).
5. **Steps-From-Owner Filter**: Filter nodes by topological hop distance from the Apex UBO (1 hop, 2 hops, 3+ hops).

### 2.2 Correlative UI Representation & Measurement Units

| Visual Property | Correlative UI Element | Sourced Metric / Rule | Illustrating Unit of Measurement |
| :--- | :--- | :--- | :--- |
| **Node Size** | Circle Radius (px) | 360 Composite Score | `0.5*coi_weight + 0.3*coi_freq + 0.2*proximity` (Sized from 9px to 30px) |
| **Node Color** | Circle Fill Hex | 9 Risk Domains | Sector Color (#6a9de0, #3a7fd4, #2a9a8a, #c9a84c, #6aaa44, #e07a30, #cc5555, #aa44aa, #4488aa) |
| **Ring Radius** | Concentric Distance | Authority Ring (0-4) | Ring 0 (80px), Ring 1 (210px), Ring 2 (400px), Ring 3 (630px), Ring 4 (840px) |
| **Sector Angle** | Slice Arc (Rad) | Risk Domain (1-9) | 9 Sectors (40° arc per sector, Math.PI * 2 / 9) |
| **Cross-Pie Link** | Dashed Gold Line | Gatekeeper Function | Dashed gold line (`#dcae5c`, width 2px, dasharray 6 4) linking identical roles across verticals |
| **Within-Pie Edge** | Solid Grey Line | Structural Relationship | Sourced from `TEMPLATE_ONTOLOGY` edge data (hidden until node click) |

---

## 3. Interaction Flow

1. **Default State**: 5 vertical wheels float stillness on continuous canvas. All edges remain hidden.
2. **Click Role Node**: Reveals only that role's within-pie structural edges. If the role is a **Cross-Vertical Gatekeeper** (e.g. *Trustee*, *Owner's Rep*), draws dashed gold cross-links (`#dcae5c`) directly across vertical wheels and highlights the role in all applicable universes simultaneously.
3. **Pan & Zoom**: Scroll-wheel zooms around viewport center; mousedown drag pans canvas.
