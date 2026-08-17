This is a exhaustive list of the raw data points, objects, and aggregate values that can be fetched from **Salesforce (CRM)** and **Epic (EHR)**.

Please note that **APIs usually fetch objects or raw data fields**. A field like `OpportunityAmount` becomes a "metric" once it is aggregated (e.g., *Total* Opportunity Amount). This list includes both standard fetchable data points that are used as metrics, as well as specific aggregate metrics objects.

### Important Distinction

| Category | Description |
| --- | --- |
| **Standard Metrics/Data Points** | Native fields and objects present in every Salesforce/Epic installation. These are predictable. |
| **Custom Metrics/Data Points** | Unique fields, objects, or formulas created specifically for your organization's instance. These must be identified within your system first. |

---

## 1. Salesforce (CRM)

These metrics and data points are fetchable using Salesforce's REST, SOAP, Bulk, or Cloud-specific APIs (e.g., Metrics API).

### Sales Pipeline (Opportunities)

These standard fields and counts provide the core revenue and funnel metrics.

* **Standard Values:**
* **Opportunity Count** (Number of deal records).
* **Opportunity Amount** (Total potential revenue per deal).
* **Opportunity Stage** (Counter of deals in Prospecting, Qualification, Closed Won, Closed Lost).
* **Expected Revenue** (Amount adjusted by probability percentage).
* **Probability** (The standard conversion percentage of the current stage).
* **Win Rate** (Calculated counter: Closed Won / [Closed Won + Closed Lost]).
* **Age** (Number of days open).
* **Time Spent in Stage** (Counter of days deals linger in Qualification vs. Proposal).
* **Owner** (Counter of opportunities per Sales Representative).



### Lead Generation

These track the initial stages of prospect acquisition.

* **Standard Values:**
* **Lead Count** (Total number of unqualified prospects).
* **Lead Source** (Counter of leads from Web, Referral, Event, Ad).
* **Lead Status** (Counter of leads labeled New, Working, Nurturing, Qualified).
* **Converted Lead Count** (Count of leads moved to Account/Contact).
* **Lead Conversion Rate** (Calculated counter: Converted Leads / Total Leads).
* **reffered from** (whihc contact ins salesforce gave this contact)
* **Reports to** (this is to udnerstnad hierarchy fo relatiosnhsips between contacts)



### Activity & Engagement

These track sales effort and customer interaction.

* **Standard Values:**
* **Activity Count** (Total tasks, events, or logged interactions).
* **Calls Logged** (Specific counter for task type "Call").
* **Emails Sent** (Specific counter for logged email activity).
* **Meetings Held** (Specific counter for logged events/appointments).
* **Activity by Type** (Total volume breakdown: Email, Call, Meeting, Task).
* **User Workload** (Aggregate activity count per Sales Representative).



### Account & Contact Management

These provide the base denominator for relationship-based metrics.

* **Standard Values:**
* **Account Count** (Total unique companies).
* **Customer Count** (Accounts labeled "Customer").
* **Prospect Count** (Accounts labeled "Prospect").
* **Account Industry** (Breakdown of customer base by industry).
* **Account Hierarchy** (Data to construct parent/child metric rollups).
* **Contact Count** (Total unique individuals).



---

## 2. Epic (EHR)

These clinical, financial, and operational metrics are typically fetched using standards-based APIs (like **FHIR REST APIs**), HL7 interfaces, or bulk data exports (like **Clarity/Caboodle**).

### Patient Population & Census

These provide counts of the primary patient base.

* **Standard Values:**
* **Patient Count** (Total unique registered patients).
* **Active Patient Count** (Patients seen within a specific window).
* **census breakdown:** Counts by Age, Race, Ethnicity, Gender.
* **Patient Zip Code/Location breakdown:** (For demographic metrics).



### Clinical Documentation (Outcomes & Compliance)

These data points provide raw counters for clinical workflow metrics.

* **Standard Values:**
* **Condition Count** (Prevalence of specific diagnoses, like Diabetes or Hypertension).
* **Problem List Count** (Active diagnoses per patient/encounter).
* **Medication Order Count** (Number of medications prescribed, breakdown by class).
* **Allergy Count** (Prevalence of allergies, breakdown by drug/food type).
* **Immunization Count** (Count of vaccination doses administered).
* **Observation Count** (Total vital sign records filed—e.g., Blood Pressure, Temperature).
* **Flowsheet Entry Count** (Specific flowsheet values filed, breakdown by vital/system).



### Service Volume (Encounters & Flow)

These measure how much care is being delivered.

* **Standard Values:**
* **Encounter Count** (Total unique patient visits).
* **Encounter Type** (Counter of Office Visits, ED Visits, Inpatient admissions).
* **Admission Count** (Inpatient specific arrivals).
* **Discharge Count** (Inpatient specific departures).
* **Transfer Count** (Intra-hospital flow metric data point).
* **Length of Stay (LOS)** (Data point to calculate Average LOS: Discharge Date - Admission Date).
* **Wait Time** (Data points available to calculate: [Patient In Room] - [Patient Arrived]).
* **Diagnostic Report Count** (Volume of lab/imaging reports generated).
* **Procedure Count** (Total CPT codes filed, breakdown by surgery type).



### Operations & Scheduling

These measure how efficiently care is delivered.

* **Standard Values:**
* **Appointment Count** (Total number of scheduled slots).
* **No-Show Count** (Appointments labeled "No-Show").
* **Cancellation Count** (Appointments labeled "Cancelled").
* **Cancellation Rate** (Calculated counter: Cancelled / Scheduled).
* **Provider Appointment Load** (Scheduled slots per physician).
* **Provider Availability** (Fetch of open/available scheduling slots).



### Financial (Revenue Cycle & Billing)

These measure the fiscal health of the organization.

* **Standard Values:**
* **Charge Count** (Total number of individual billable items filed).
* **Charge Amount** (Total $ amount of charges generated).
* **Claim Count** (Total number of billing claims submitted).
* **Claim Status** (Counter of claims labeled: Paid, Denied, Pending, Rejected).
* **Explanation of Benefits (EOB) Count** (Total payer responses received).
* **Payment Count** (Total payments received—insurance or patient).
* **Payment Amount** (Total $ amount of revenue received).
* **Acounts Receivable (A/R) Age** (Data point: [Current Date] - [Date of Initial Bill]).
* **Payer Mix breakdown:** Counts and $ amounts by payer (e.g., Medicare, BCBS).