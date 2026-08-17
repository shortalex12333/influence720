# Dashboard 1: Producer's Tactical Map (Micro Relationship Graph)

> **Document Status**: Definitive Specification & Data Mapping Guide for Dashboard 1 (D1).
> **Scope**: Salesforce CRM (Micro / Single Account) × 360 Relationship Ontology.

---

## 1. Executive Summary: What D1 IS and IS NOT

### What D1 IS:
* **A Single-Account Tactical Relationship Map**: Applied strictly to **Salesforce CRM data** for one producer managing their own client account at a time.
* **The "Who Do I Know & How Do I Reach the Buyer" Engine**: It maps personal intimacy, activity recency, DISC communication tags, and warm referral paths to uncontacted decision-makers.
* **Always a Knowledge Graph**: Rendered as an interactive radial graph expanding from D0. Flat contact lists or tables are forbidden.

### What D1 IS NOT:
* ❌ **NOT an ERP Financial Tool**: D1 does not track policy premiums, limits, or claims. (That is Dashboard 2).
* ❌ **NOT a Multi-Client Spiderweb**: D1 never dumps an entire book onto one canvas.
* ❌ **NOT Speculative AI Matching**: Referral paths use hard Salesforce database fields (`referred_from`, `Reports_to`).

---

## 2. Layer Integration Breakdown

### 2.1 Foundational Layer Integration (360 Geometry)
* **Center Node (Ring 0)**: Apex / UBO / Principal of the account.
* **5 Authority Rings (0–4)**: Radius strictly represents decision distance from the UBO.
* **9 Operational Sectors**: Roles are positioned in their exact 360 domains (*Ownership & Structure, Legal & Finance, Compliance, etc.*).

### 2.2 Imported Data Layer Metrics (Salesforce CRM)
* **Contact Attributes**: `Contact Name`, `Title`, `Account Name`, `DISC Tag` (Driver, Expressive, Amiable, Analytical).
* **Activity & Engagement Metrics**: `Activity Count`, `Calls Logged`, `Emails Sent`, `Meetings Held`, `Last Activity Date` (Recency).
* **Hierarchy & Referral Metrics**: `referred_from` (Referral origin contact), `Reports_to` (Manager / Signatory hierarchy).

---

## 3. UX Variables & Illustrating Units of Measurement

| Visual Element | UX Variable | Sourced Data Metric | Illustrating Unit of Measurement |
| :--- | :--- | :--- | :--- |
| **Node Size** | Radius of Circle | SFDC Relationship Weight | `Activity Count` × Recency Decay Factor (0.0 – 1.0) |
| **Node Color** | Fill Hex Color | SFDC Contact Status | **Green** = Active Contact; **Grey** = Untapped Role (0 SFDC contacts) |
| **Ring Radius** | Distance from Center | 360 Authority Ring | Ring 0 (80px), Ring 1 (210px), Ring 2 (400px), Ring 3 (630px), Ring 4 (840px) |
| **Sector Angle** | Slice Arc | 360 Risk Domain | 9 Sectors (40° arc per sector, TAU / 9) |
| **Edge Line** | Dashed Line (`#6a9de0`) | SFDC Referral Path | Sourced from `referred_from` & `Reports_to` database links |

---

## 4. Knowledge Graph Interaction Flow

1. **Producer Selects Account**: Left Rail queue displays client accounts assigned to the producer.
2. **Radial Canvas Renders**: Displays the 168 roles for that asset class. Known contacts light up **Green** (sized by activity recency); uncontacted roles remain **Grey**.
3. **Click a Known Green Node**: Highlights all **Warm Referral Paths** radiating from that contact to adjacent grey decision-makers.
4. **Right Panel (Tactical Briefing Drawer)**: Displays contact details, DISC approach recommendations (*"Lead with concise bullet points; focus on fiduciary compliance"*), and draft intro requests.
