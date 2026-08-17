# Dashboard 5: Consolidated Micro Tactical Warfare (SFDC × Epic Single Account)

> **Document Status**: Definitive Specification & Architecture Guide for Dashboard 5 (D5).
> **Scope**: Micro / Single Account Consolidation of **Salesforce CRM (D1)** + **Applied Epic ERP (D2)** + **Role Macro Capacity (D4)**.

---

## 1. Executive Summary: What D5 IS and IS NOT

### What D5 IS:
* **Micro Integration of D1 + D2 + D4 on the 5-Petal Radial Wheel Canvas**: D5 merges **Salesforce CRM Contacts (D1)**, **Applied Epic ERP Policy Ledger & Forensic Gaps (D2)**, and **Role Macro Capacity (D4)** for a single client account onto the invariant 5-petal Radial Wheel Canvas (`RingEngine.render`).
* **The "Trojan Horse" Execution Blueprint**:
  > *"My client is X (Epic Account), he knows contact ABC (Salesforce), who works with structural role DDD (360 Ontology). Leverage contact ABC as a warm introduction to capture missing policy XYZ (Coverage Corpus DB)."*
* **Complete Data Overlays**:
  * **D2 Integration**: Real Epic policy satellites (**🟢 Green** Bound, **🟡 Amber** Expiring <90d, **🔴 Red / 🔘 Grey** Coverage Corpus Whitespace Gap), required limits ($), bound limits ($), limit deficiencies ($), sub-limit exclusions, statutory citations (Jones Act 46 U.S.C. §30104, CA earthquake code, FL/NY staff rules), and defensible peer GWP benchmarks.
  * **D4 Integration**: 45-domain macro GWP capacity bounds overlaid onto structural roles to indicate growth potential.
* **5-Petal Radial Canvas**: 5 distinct asset vertical petals (**Yacht, Aviation, Real Estate, Auto Collection, Personal / Executive Risk**) with 5 authority rings (Rings 0-4).

---

## 2. Visual & Architectural Requirements for D5

### 2.1 Node Visual Encoding Matrix

| Visual Property | Correlative UI Element | Sourced Metric / Rule | Illustrating Unit / Value |
| :--- | :--- | :--- | :--- |
| **Node Positioning** | 5 Vertical Petals × 5 Authority Rings | 360 Role Authority & Asset Category | Ring 0 (Apex), Ring 1 (Signatory), Ring 2 (Manager), Ring 3 (Operator), Ring 4 (Operational Staff) across Yacht, Aviation, Real Estate, Auto, Personal Risk |
| **Central Node Size** | Circle Radius (px) | Role Authority & Epic GWP ($) | Ring 0 = 30px down to Ring 4 = 9px; scaled by bound GWP ($) |
| **Node Fill Color** | Hex Color | Relationship Intimacy & Bound Status | **🟢 Green** (`#22c55e`) = Bound & Active Intimacy; **🟡 Amber** (`#eab308`) = Expiring <90d; **🔴 Red** (`#ef4444`) = Unplaced Gap / Trojan Target; **🟣 Purple** (`#a855f7`) = Silo / Unmapped Role |
| **Orbiting Satellites** | Badge Radius & Fill | Policy Line & Premium ($) | Orbiting policy badges sized by GWP ($) with 4-state colors |
| **Gold Trojan Interlinks** | Dashed Gold Line (`#dcae5c`) | Warm Referral Traversal Path | Dashed Gold Line linking SFDC Known Contact → 360 Structural Role → Epic Unplaced Policy Gap ($) |
| **Red Fiduciary Breaches** | Solid Red Line (`#ef4444`) | Statutory Exposure / Legal Trapdoor | Solid Red Line connecting responsible Signatory Role to unplaced statutory gap |

### 2.2 Filtration Metrics & Headers

1. **Header Controls**: Cross-navigation links (D0-D6), Theme Switcher (Dark/Light), Producer Override Selector (Alex, Rahul, Jacob, Cristian, Naomi).
2. **Left Rail Trojan Queue (300px)**: Ranked target accounts sorted by *Highest Trojan Opportunity Score ($)*, *Lowest Penetration %*, or *Expiring Retention Risk (<90d)*.
3. **Filter Toolbar**:
   * **Vertical Petal Filter**: Filter canvas by vertical (All, Yacht, Aviation, Real Estate, Auto, Personal Risk).
   * **Intimacy Filter**: Filter nodes by SFDC intimacy level (5-Star Intimacy, 3-Star Moderate, 1-Star Cold).
   * **Fiduciary Severity Filter**: Filter by exposure type (Critical Signatory Exposed, Statutory Violation, Sub-limit Excluded).
4. **Right Trojan Execution Drawer (320px)**: Displays warm intro traversal path, contact details, DISC approach brief (Driver, Expressive, Amiable, Analytical), 3-factor financial credibility score, statutory legal citations, limit deficiencies ($), and defensible peer GWP benchmarks.

---

## 3. Micro UX & Interaction Flow

1. **Select Account from Left Rail Queue**: Ranked by Trojan Opportunity Score ($).
2. **Inspect 5-Petal Radial Canvas**: Canvas renders the account's 5 vertical petals, structural role nodes, orbiting policy satellites, **dashed gold Trojan Horse conversion edges**, and **solid red fiduciary breach lines**.
3. **Click a Trojan Target Node / Gold Edge**: The Right Drawer slides out displaying the complete warm intro blueprint, DISC approach brief, statutory legal citation, required vs bound limits ($), and defensible peer GWP benchmark.
4. **Interactive Engine**: Full Movable (pan), Scrollable (zoom), Clickable, **Expand-and-Cascade** UX.
