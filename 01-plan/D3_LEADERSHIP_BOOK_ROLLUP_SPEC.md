# Dashboard 3: Leadership Book Rollup (Macro Regional Turf Graph)

> **Document Status**: Definitive Specification & Data Mapping Guide for Dashboard 3 (D3).
> **Scope**: Salesforce CRM (Macro / Regional Book) × 360 Relationship Ontology.
> **Rule Enforcement**: **STRICTLY RELATIONSHIPS & CRM CONTACTS ONLY. ZERO DOLLAR FIGURES / ZERO GWP ($).**

---

## 1. Executive Summary: What D3 IS and IS NOT

### What D3 IS:
* **A Macro Regional Turf & Relationship Union Map**: Applied strictly to **Salesforce CRM data** aggregated across the firm's 5 real producers (**Alex, Rahul, Jacob, Cristian, Naomi**) for Sales Leadership, Regional Managers, and Managing Directors.
* **The Department Relationship Union & Dark Matter Engine**: It maps the combined relationship coverage of the whole department across the 168 roles, showing who knows whom across the firm, and identifying "Dark Matter" market opportunities (roles zero producers have contacted).
* **Always a Knowledge Graph**: Rendered as an interactive radial graph expanding from D0 across the 168 roles.

### What D3 IS NOT:
* ❌ **NOT a Financial or GWP Tool**: D3 contains **zero dollar figures, zero GWP, and zero revenue metrics**. (Financial GWP figures belong strictly to Epic views D2/D4/D6).
* ❌ **NOT a Single-Producer View**: D3 aggregates all 5 producers (**Alex, Rahul, Jacob, Cristian, Naomi**) across the regional market.
* ❌ **NOT Speculative AI Guessing**: Relationship recency and coverage are calculated strictly from cumulative CRM relationship data in Salesforce.

---

## 2. Layer Integration Breakdown

### 2.1 Foundational Layer Integration (360 Geometry)
* **Center Node (Ring 0)**: Regional Market Apex / Regional Aggregate UBO Ecosystem.
* **5 Authority Rings (0–4)**: Positions roles by decision distance across all regional accounts.
* **9 Operational Sectors**: Roles are mapped across the 9 Operational Lifecycle Sectors.

### 2.2 Imported Data Layer Metrics (Salesforce CRM)
* **Producer Roster (5 Real Producers)**: **Alex**, **Rahul**, **Jacob**, **Cristian**, **Naomi** (Sourced from `Influence720_MasterOntology.xlsx`).
* **Aggregate Activity & Relationship Metrics**: Cumulative `Activity Count`, `Calls Logged`, `Meetings Held`, `Last Activity Date` grouped by Producer per Role across all regional accounts.
* **Relationship Coverage Rollups**: `Contact Count`, `Known Role Status` (Union of active contacts across the 5 producers).

---

## 3. UX Variables & Illustrating Units of Measurement

| Visual Element | UX Variable | Sourced Data Metric | Illustrating Unit of Measurement |
| :--- | :--- | :--- | :--- |
| **Node Color** | Fill Hex Color | Producer Relationship Coverage | **Producer Dominance Hex Color** (Alex, Rahul, Jacob, Cristian, Naomi) or **Green** (Active Contact in Department) vs. **Grey** (Dark Matter Void) |
| **Node Size** | Radius of Circle | Composite Relationship Score | Sourced from 360 Composite Score (`0.5*weight + 0.3*freq + 0.2*proximity`) — **ZERO DOLLARS** |
| **Grey Hollow Node** | Grey Outline (`#8a8a8a`), Transparent Fill | **Dark Matter Opportunity** | Roles where `Contact Count = 0` across ALL 5 producers in the firm |
| **Ring Radius** | Distance from Center | 360 Authority Ring | Ring 0 (80px), Ring 1 (210px), Ring 2 (400px), Ring 3 (630px), Ring 4 (840px) |
| **Sector Angle** | Slice Arc | 360 Risk Domain | 9 Sectors (40° arc per sector, TAU / 9) |

---

## 4. Knowledge Graph Interaction Flow

1. **Leadership Selects Region / Department**: Filter by region (e.g. *Americas / Southeast*) or asset vertical.
2. **Macro Graph Renders**: Displays all 168 roles. Nodes reflect the combined relationship coverage of the 5 producers (**Alex, Rahul, Jacob, Cristian, Naomi**).
3. **Click a Role Node**: Displays which producers hold active contacts for that role, their relationship recency, and contact history.
4. **Click a Dark Matter Grey Hollow Node**: Identifies structural roles with 0 contact points across the entire department, allowing leadership to assign prospecting tasks.
