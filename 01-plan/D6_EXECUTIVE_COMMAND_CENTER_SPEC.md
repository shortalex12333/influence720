# Dashboard 6: Executive Command Center (SFDC × Epic Macro Rollup)

> **Document Status**: Definitive Specification & Architecture Guide for Dashboard 6 (D6).
> **Scope**: Macro / C-Suite Executive Command Center consolidating **Salesforce CRM (D3)** + **Applied Epic ERP (D4)**.

---

## 1. Executive Summary: What D6 IS and IS NOT

### What D6 IS:
* **The Macro Consolidation of D3 + D4**: D6 merges **Salesforce CRM regional activity and producer ownership (D3)** with **Applied Epic ERP regional GWP and domain whitespace (D4)** for C-Suite Leadership, Managing Directors, and Board Members.
* **The Leadership Persona Pitch**:
  > *"Instead of managing the firm out of a mental notepad ('Austin is the Yacht guy, Alex is talking to a mega client'), D6 replaces informal guesswork with a forensic system of record. Leadership sees every producer's book size, conversion rate, pipeline weight, and domain skew—empowering us to pair specialists, optimize capital, and strategically expand into uncaptured networks."*
* **The Effort-vs-Yield Engine**: It correlates where reps spend their time (Salesforce touchpoints) against where actual revenue is captured (Epic GWP).
* **The Silent Churn Radar**: It identifies high-value accounts that are decaying in communication frequency in Salesforce *before* their renewal date expires in Epic.

### What D6 IS NOT:
* ❌ **NOT a Radial Chart**: D6 uses an **Effort-vs-Yield Scatter Plot** and **Silent Churn Matrix**. Forcing macro distribution metrics into a radial wheel reduces legibility on C-suite screens.
* ❌ **NOT Speculative ML**: Churn scores are calculated using deterministic communication decay slopes (SFDC activity drop-off on Ring 0/1 signatories) combined with Epic renewal dates (<90d).

---

## 2. Key Analytics Modules in D6

### 2.1 Effort-vs-Yield Scatter Plot (Producer Archetype Skew)

* **X-Axis**: Salesforce Activity Count (Touchpoints per period, weighted by Authority Ring).
* **Y-Axis**: Epic Bound Premium Sourced (Annual GWP $).
* **5 Producer Archetypes**:
  1. **The Sniper** (High GWP, low touch count, 90% Ring 1 signatories) → *Ideal state*.
  2. **The Grinder** (Low GWP, massive touch count, 90% Ring 4 operational staff) → *Danger zone: high effort, zero binding authority*.
  3. **The Legacy** (Massive GWP, zero SFDC touches in 8+ months) → *High retention flight risk*.
  4. **The Silo** (High single-vertical GWP, zero cross-asset policies) → *Missed cross-pollination opportunity*.
  5. **The Rookie** (High touch count on unmapped cold accounts) → *Needs D1 referral guidance*.

```
  Y: Epic GWP ($)
     ▲
     │  [THE LEGACY]               [THE SNIPER]
     │  (High GWP, 0 touches)      (High GWP, High Ring 1 focus)
     │
     │  [THE SILO]                 [THE GRINDER]
     │  (Single-vertical only)     (Low GWP, 500 Ring 4 touches)
     │
     └────────────────────────────────────────────────────────► X: SFDC Touchpoints
```

### 2.2 Silent Churn Radar (Cross-System Churn Prevention)

Combines **Salesforce Communication Decay Slopes** with **Epic Policy Renewal Dates**:

$$\text{Churn Risk Score} = \text{Deterministic Function}\left(\frac{\text{Days to Epic Renewal (<90d)}}{\text{SFDC Ring 0/1 Touchpoint Frequency (Last 180 Days)}}\right)$$

* **Alert Trigger**: When a $100k+ GWP account in Epic is within 60 days of renewal, but Salesforce shows zero contact with the Ring 1 Signatory in 6 months, D6 red-flags the account for executive retention intervention.

---

## 3. Summary Matrix: Micro vs. Macro Consolidated Dashboards

| Feature | Dashboard 5 (Micro Consolidated) | Dashboard 6 (Macro Consolidated) |
| :--- | :--- | :--- |
| **Primary User** | Individual Producer / Account Executive | C-Suite / Managing Directors / Board |
| **Scope** | Single Account Ecosystem | Entire Regional Firm / All Producers & Accounts |
| **Core Systems** | SFDC Contacts (D1) × Epic Policies (D2) | SFDC Activity (D3) × Epic Ledger (D4) |
| **Primary UI** | 360 Radial Canvas with Trojan Path Overlay | Effort-vs-Yield Scatter Plot & Churn Matrix |
| **Core Question** | *"How do I leverage Person A to capture Gap B?"* | *"Which reps are efficient, and which accounts will churn?"* |
