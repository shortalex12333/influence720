# Influence 720 — Master Architectural Specification & Data Mapping Plan

> **Document Version**: 2.0 (Definitive Master Plan)
> **Author**: Product Architect & Data Layer Strategy Team
> **Core Principle**: **Every dashboard is an interactive Knowledge Graph expansion built upon the Influence 360 Ontology (D0). No flat lists, no table grids, no decorative fluff.**

---

## 1. The Three-Tiered Architectural Architecture

The Influence software ecosystem strictly separates the invariant, physical universe from the observed application data layers:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        TIER 1: FOUNDATIONAL LAYER (THE ONTOLOGY)                        │
│                        Influence 360 Knowledge Graph (Datum)                           │
│  • 187 Roles | 624 Structural Edges | 5 Concentric Rings (0-4) | 9 Risk Domains       │
│  • 5 Asset Verticals: Yacht, Aviation, Real Estate, Auto Collection, Personal Risk     │
└───────────────────────────────────────────┬────────────────────────────────────────────┘
                                            │
                                            ▼
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                          TIER 2: DATA LAYER (THE TRUTH SOURCES)                        │
│  ┌──────────────────────────────┬──────────────────────────────┬────────────────────┐  │
│  │     SALESFORCE CRM DATA      │     APPLIED EPIC ERP DATA    │  COVERAGE CORPUS   │  │
│  │ (Contacts, Activity Recency, │  (Policy Ledger, Premiums $, │ (Limits, Exclusions│  │
│  │  Opportunities, Referrals)   │   Expiration Dates, Assets)  │  Statutory Rules)  │  │
│  └──────────────────────────────┴──────────────────────────────┴────────────────────┘  │
└───────────────────────────────────────────┬────────────────────────────────────────────┘
                                            │
                                            ▼
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                     TIER 3: APPLICATION LAYER (PERSPECTIVE MASKS)                      │
│                                                                                        │
│     MICRO SCOPE (Single Account)                 MACRO SCOPE (Regional Firm)           │
│  • D1: Producer Tactical Map (SFDC)         • D3: Leadership Book Rollup (SFDC)        │
│  • D2: Whitespace / Gap Engine (Epic)       • D4: Role Macro View (Epic)               │
│  • D5: Micro Tactical Warfare (SFDC×Epic)   • D6: Executive Command Center (SFDC×Epic) │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Layer Definitions & Metric Mapping

### 2.1 Foundational Layer (Influence 360 — The Spinal Cord)
* **Invariant Nature**: The structural relationships, legal dependencies, and authority distances of Ultra-High Net Worth (UHNW) asset ecosystems remain fixed.
* **Spatial Grammar**:
  * **5 Concentric Rings (Authority Tiers)**: Ring 0 (Apex/UBO), Ring 1 (COI Signatory), Ring 2 (COI Conditional), Ring 3 (Transaction Critical/Support), Ring 4 (Operational).
  * **9 Radial Sectors (Risk Domains)**: Ownership & Structure, Legal & Finance, Compliance & Certification, Insurance Market, Acquisition & Disposal, Build/Refit, Operations & Staff, Usage & Experience, Shoreside & Back-Office.
  * **Knowledge Graph Geometry**: Always rendered as an interactive radial graph expanding from D0. Flat lists or HTML tables are strictly forbidden.

### 2.2 Data Layer (The 3 Sourced Engines)
1. **Salesforce CRM (Today / Relationship Intimacy)**:
   * Sourced Variables: `Contact Count`, `Account Hierarchy`, `Activity Count`, `Calls Logged`, `Emails Sent`, `Meetings Held`, `Opportunity Amount`, `Opportunity Stage`, `Win Rate`, `referred_from`, `Reports_to`, `Owner` (Producer).
2. **Applied Epic ERP (Yesterday / Financial Ledger)**:
   * Sourced Variables: `Account Name`, `Primary Named Insured`, `Additional Insureds`, `Loss Payees`, `Line of Business`, `Bound Premium ($)`, `Effective Date`, `Expiration Date`, `Claim Count`, `Claim Status`, `A/R Age`, Asset Attributes (`Vessel Length`, `Tonnage`, `Property Value`).
3. **Coverage Corpus DB (Tomorrow / Deterministic Rules)**:
   * Sourced Variables: Required Policy Corpus per Asset Class, Required Baseline Limits ($), Statutory Exclusions by Jurisdiction, Sub-Limit Rules, Indirect Asset Cascade Requirements.

---

## 3. Summary Matrix of All Dashboards (D1 through D6)

| Dashboard | Primary Scope | System Lens | Core Question Answered | Visual Knowledge Graph Encoding |
| :--- | :--- | :--- | :--- | :--- |
| **D0** | Structural Baseline | None (Pure Ontology) | *"What is the physical structure of these 5 verticals?"* | 5 Vertical petal wheels, 187 roles, 624 edges, cross-vertical gatekeeper links (`#dcae5c`). |
| **D1** | Single Rep / 1 Account | Salesforce CRM | *"Who do I know today, and what is the warm path to the buyer?"* | Node size = SFDC Activity Recency; Node color = Known (Green) vs Untapped (Grey); Edges = Warm Referral Traversal. |
| **D2** | Single Rep / 1 Account | Applied Epic ERP | *"What required coverages are missing or limit deficient?"* | Node = Responsible Structural Role; Satellites = Green (Bound), Yellow (Expiring <90d), Grey/Red (Coverage Corpus Whitespace Gap). |
| **D3** | **Leadership Book Rollup** | Regional (Macro) | Salesforce CRM | Whole-Department Relationship Union across 5 Producers (**Alex, Rahul, Jacob, Cristian, Naomi**). Node size = 360 Intimacy Composite Score. Grey hollow nodes = Dark Matter voids (`contact_count == 0`). **ZERO GWP / ZERO DOLLARS.** |
| **D4** | Leadership / Region | Applied Epic ERP | *"Where are our policy line gaps and market skews?"* | Inner Ring = Bound Epic Premium; Outer Ring = Coverage Corpus Whitespace Capacity; Sector Heatmap by Domain. |
| **D5** | Single Rep / 1 Account | SFDC × Epic Consolidated | *"How do I leverage Who I know to capture What is missing?"* | Trojan Horse Edge connecting SFDC Known Contact → 360 Structural Role → Epic Priced Whitespace Gap ($). |
| **D6** | C-Suite / Regional Firm | SFDC × Epic Consolidated | *"Which reps are efficient, and which accounts will churn?"* | Effort-vs-Yield Scatter Plot (SFDC Touchpoints vs Epic GWP $) + Silent Churn Radar (SFDC Decay Slope vs Epic Expiration <90d). |
