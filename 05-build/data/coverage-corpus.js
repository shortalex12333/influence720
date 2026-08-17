// Influence 720 — coverage catalog + GWP rate-trend table. Script-loadable twin of coverage-corpus.json, regenerated FROM Influence720_MasterOntology.xlsx by gen_coverage_corpus.py.
const COVERAGE_CORPUS = {
  "_source": "Influence720_MasterOntology.xlsx \u2014 CovCatalog_<Vertical> sheets (regenerated FROM the master workbook by gen_coverage_corpus.py; never hand-authored separately from it).",
  "_generated_by": "05-build/generator/build_v2/gen_coverage_corpus.py",
  "verticals": {
    "yacht": [
      {
        "coverage_type_id": "hull_machinery",
        "label": "Hull & Machinery",
        "trigger_type": "asset",
        "line_of_business": "Marine",
        "is_new": false,
        "required_baseline_limit": "Agreed Value equal to 100% of the vessel's current fair replacement value (not depreciated/actual-cash-value), reassessed at each renewal and after any refit exceeding $250,000; for S4-S7 tiers (40m+) this typically runs $8,000,000-$150,000,000+. Baseline floor: never below the outstanding marine mortgage balance where a lender loss-payee clause exists.",
        "baseline_limit_usd": null,
        "baseline_limit_by_tier": {
          "S1": 300000,
          "S2": 1500000,
          "S3": 5000000,
          "S4": 10000000,
          "S5": 25000000,
          "S6": 60000000,
          "S7": 130000000
        },
        "statutory_triggers": [
          {
            "jurisdiction": "United States (Ship Mortgage Act, 46 U.S.C. ch. 313)",
            "condition": "vessel is US-documented with a preferred ship mortgage on file",
            "requirement": "hull value insured must satisfy the mortgagee's loss-payee clause \u2014 a lender-mandated minimum, not an optional broker recommendation"
          },
          {
            "jurisdiction": "Flag state Large Yacht Code (e.g. UK Red Ensign / MCA LY3) for commercially coded vessels",
            "condition": "vessel holds Large Commercial Yacht Code certification for charter",
            "requirement": "evidence of adequate hull insurance is a condition of maintaining code-compliance certification"
          }
        ],
        "sub_limit_exclusions": [
          {
            "type": "wear and tear / gradual deterioration exclusion",
            "detail": "standard marine hull wording excludes ordinary wear, tear, corrosion, and mechanical/electrical breakdown not resulting from an insured peril"
          },
          {
            "type": "navigational limits warranty",
            "detail": "cover is warranted to a defined cruising range (Institute Warranty Limits); operating outside warranted limits (hurricane zones Jun-Nov, high-latitude/ice regions, war-risk areas) voids cover unless held covered with additional premium"
          },
          {
            "type": "named windstorm / hurricane deductible",
            "detail": "Florida/Caribbean-based hull policies commonly carry a separate, higher percentage deductible (often 5-10% of agreed value) for named windstorm versus the standard all-risk deductible"
          },
          {
            "type": "tenders and toys sub-limit",
            "detail": "tenders, jet skis, and water toys are frequently sub-limited (e.g. capped at 10-15% of hull value) unless separately scheduled"
          }
        ],
        "cascade_rules": [
          {
            "condition": "vessel is US-flagged with a marine mortgage on file",
            "implies": "a lender-mandated loss-payee/mortgagee clause and minimum hull value likely exist \u2014 verify against loan covenants"
          },
          {
            "condition": "vessel operates seasonally in the Caribbean/Gulf during hurricane season (Jun-Nov)",
            "implies": "a named windstorm sub-limit/deductible and a hurricane haul-out or lay-up warranty likely apply"
          },
          {
            "condition": "yacht tier >= S6 (large superyacht)",
            "implies": "Increased Value & Excess Liabilities coverage is almost certainly layered atop primary hull \u2014 a single hull market rarely absorbs 100% of a large superyacht's replacement value; aviation signatory likely also exists for this owner"
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "liability_protection",
        "label": "Liability Protection",
        "trigger_type": "asset",
        "line_of_business": "Marine",
        "is_new": false,
        "required_baseline_limit": "$5,000,000 minimum for private/pleasure S1-S3 tiers, scaling to $25,000,000+ primary for S4-S7 tiers \u2014 larger crew complement and guest-carrying capacity materially increase bodily-injury severity exposure; UHNW brokers typically layer Excess/Umbrella Liability atop this primary rather than raising the marine liability limit itself.",
        "baseline_limit_usd": null,
        "baseline_limit_by_tier": {
          "S1": 5000000,
          "S2": 5000000,
          "S3": 5000000,
          "S4": 10000000,
          "S5": 15000000,
          "S6": 20000000,
          "S7": 25000000
        },
        "statutory_triggers": [
          {
            "jurisdiction": "United States (general maritime law)",
            "condition": "passenger or guest injury/death occurs aboard a US-flagged or US-waters-operating vessel",
            "requirement": "exposure to uncapped general maritime negligence damages \u2014 the policy's stated limit is the practical ceiling, not a statutory cap, which is why UHNW baseline limits sit well above nominal minimums"
          },
          {
            "jurisdiction": "United States (Limitation of Liability Act, 46 U.S.C. \u00a730501 et seq.)",
            "condition": "owner seeks to limit liability to post-casualty vessel value",
            "requirement": "the limitation defense is available only where the owner lacked privity/knowledge of the cause \u2014 insurers underwrite liability limits assuming this defense may fail"
          }
        ],
        "sub_limit_exclusions": [
          {
            "type": "war, terrorism, and nuclear exclusion",
            "detail": "standard marine liability wording excludes war, terrorism, and nuclear risks absent a separate War Risk endorsement"
          },
          {
            "type": "pollution sub-limit",
            "detail": "marine liability policies typically carry a modest pollution sub-limit (often $500,000-$1,000,000) or exclude pollution liability entirely, requiring the separate Pollution Liability policy for realistic exposure"
          },
          {
            "type": "crew exclusion",
            "detail": "liability to the vessel's own crew for injury is typically excluded here and handled instead under Crew Medical (MLC) / Crew Employers' Liability \u2014 a frequent gap when it's assumed one policy covers the other"
          }
        ],
        "cascade_rules": [
          {
            "condition": "vessel is available for charter (commercially coded)",
            "implies": "exposure reverts toward true P&I-style coverage and Loss of Charter Hire becomes relevant; the private/pleasure Liability Protection naming convention no longer applies"
          },
          {
            "condition": "guest-carrying capacity or crew complement is large (S5+ tier)",
            "implies": "an Excess/Umbrella Liability layer above primary Liability Protection is likely warranted given severity-tail risk"
          }
        ],
        "note": "Renamed from P&I \u2014 brief \u00a76 item 5: Chubb's real retail yacht product never uses 'P&I' for private/pleasure craft; reserved for commercially-coded/charter-registered yachts."
      },
      {
        "coverage_type_id": "crew_medical_mlc",
        "label": "Crew Medical (MLC)",
        "trigger_type": "person",
        "line_of_business": "Marine",
        "is_new": false,
        "required_baseline_limit": "Sufficient to fund MLC 2006 Standard A4.2.1's minimum 16-week wage-continuation floor plus full medical/repatriation cost \u2014 in practice $1,000,000-$2,000,000 per crew member for injury or illness including medical evacuation, with no aggregate cap set below crew complement x per-head figure.",
        "baseline_limit_usd": null,
        "baseline_limit_by_tier": {
          "S1": 3000000,
          "S2": 4500000,
          "S3": 9000000,
          "S4": 13500000,
          "S5": 19500000,
          "S6": 25500000,
          "S7": 36000000
        },
        "statutory_triggers": [
          {
            "jurisdiction": "International (MLC 2006 \u2014 Maritime Labour Convention, flag-state enforced)",
            "condition": "vessel is subject to MLC 2006 (commercially registered/coded vessels above the applicable gross tonnage, increasingly best-practice on large private yachts too)",
            "requirement": "shipowner must maintain financial security for crew repatriation, abandonment, and contractual injury/illness/death claims \u2014 Reg 4.2/Std A4.2.1 and the 2014 Reg 2.5 abandonment amendments"
          },
          {
            "jurisdiction": "United States (Jones Act, 46 U.S.C. \u00a730104) / general maritime law",
            "condition": "crew member qualifies as a 'seaman' aboard a US-flagged vessel",
            "requirement": "exposure to negligence-based Jones Act claims and maintenance-and-cure obligations sits outside MLC's no-fault wage floor \u2014 handled by the separate Crew Employers' Liability line"
          }
        ],
        "sub_limit_exclusions": [
          {
            "type": "pre-existing condition exclusion",
            "detail": "standard crew medical wording excludes conditions diagnosed or symptomatic prior to sign-on unless separately disclosed and accepted"
          },
          {
            "type": "war/terrorism medevac sub-limit",
            "detail": "medical evacuation coverage in active war-risk or high-piracy transit zones is frequently sub-limited or requires the War Risk endorsement to remain in force"
          }
        ],
        "cascade_rules": [
          {
            "condition": "vessel is US-flagged",
            "implies": "Jones Act negligence exposure exists in addition to MLC's no-fault floor \u2014 Crew Employers' Liability (Jones Act) coverage is very likely also needed since MLC alone does not respond to negligence claims"
          },
          {
            "condition": "crew complement >= 15 (S5+ tier)",
            "implies": "Crew Employment Practices exposure (wrongful termination, discrimination, harassment claims) rises materially with headcount and multinational crew composition"
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "marine_war_risk",
        "label": "War Risk & Piracy",
        "trigger_type": "asset",
        "line_of_business": "Marine",
        "is_new": true,
        "required_baseline_limit": "Matched to the vessel's full Agreed Hull Value (same limit as Hull & Machinery) plus a war-risk liability limit matching Liability Protection \u2014 War Risk is bound as a value-matching top-up, not an independent lower limit, since a war-loss total-loss claim must be made whole against the same insured value.",
        "baseline_limit_usd": null,
        "baseline_limit_by_tier": {
          "S1": 300000,
          "S2": 1500000,
          "S3": 5000000,
          "S4": 10000000,
          "S5": 25000000,
          "S6": 60000000,
          "S7": 130000000
        },
        "statutory_triggers": [],
        "sub_limit_exclusions": [
          {
            "type": "held-covered / notice-of-transit requirement",
            "detail": "cover for transit through Joint War Committee (JWC) Listed Areas is typically held covered only with advance notice to underwriters and payment of additional premium \u2014 failure to notify can void the claim"
          },
          {
            "type": "detention/confiscation time exclusion",
            "detail": "loss of use during detention (as opposed to physical loss) is frequently excluded or capped, requiring a separate Loss of Charter Hire or Loss of Use extension"
          }
        ],
        "cascade_rules": [
          {
            "condition": "vessel's cruising itinerary includes a JWC Listed Area (e.g. Gulf of Aden, Red Sea, Sulu/Celebes Seas)",
            "implies": "advance underwriter notification and additional premium are required before transit \u2014 flag for review whenever an itinerary change is logged"
          },
          {
            "condition": "yacht tier >= S6 and itinerary includes higher-risk cruising grounds",
            "implies": "Kidnap & Ransom exposure for crew/owner/guests is elevated \u2014 cross-reference the personal-vertical K&R coverage for the UBO/principal rather than assuming this marine war risk policy responds to a K&R event"
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "increased_value_excess_liabilities",
        "label": "Increased Value & Excess Liabilities",
        "trigger_type": "asset",
        "line_of_business": "Marine",
        "is_new": true,
        "required_baseline_limit": "Typically 20-30% of the vessel's total agreed hull value layered on top of the primary Hull & Machinery placement for S5+ tiers, scaling with how much of total insured value the primary hull market is willing to carry at 100%.",
        "baseline_limit_usd": null,
        "baseline_limit_by_tier": {
          "S1": 75000,
          "S2": 375000,
          "S3": 1250000,
          "S4": 2500000,
          "S5": 6250000,
          "S6": 15000000,
          "S7": 32500000
        },
        "statutory_triggers": [],
        "sub_limit_exclusions": [
          {
            "type": "total-loss-only trigger",
            "detail": "IV cover typically responds only on an actual or constructive total loss of the vessel, not partial/repairable damage \u2014 it does not duplicate or extend the primary hull policy's partial-loss cover"
          },
          {
            "type": "follow-form / proportional participation clause",
            "detail": "IV placements commonly follow the primary hull policy's terms and conditions \u2014 an exclusion or warranty breach voiding the primary placement typically voids the IV layer too"
          }
        ],
        "cascade_rules": [
          {
            "condition": "agreed hull value exceeds a single lead underwriter's line capacity (commonly relevant from S6 upward)",
            "implies": "IV & Excess Liabilities and/or a subscription/co-insurance hull placement across multiple underwriters is likely already in place or needed"
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "loss_of_charter_hire",
        "label": "Loss of Charter Hire",
        "trigger_type": "activity",
        "line_of_business": "Marine",
        "is_new": true,
        "required_baseline_limit": "Sized to the vessel's actual historical or projected weekly/seasonal charter rate multiplied by a defined indemnity period (commonly 90-180 days) \u2014 e.g. an S5-S6 vessel chartering at $250,000-$450,000/week warrants a limit of roughly $2,000,000-$5,000,000+ to cover a realistic multi-month yard period.",
        "baseline_limit_usd": null,
        "baseline_limit_by_tier": {
          "S1": 75000,
          "S2": 200000,
          "S3": 600000,
          "S4": 1500000,
          "S5": 3000000,
          "S6": 5000000,
          "S7": 8000000
        },
        "statutory_triggers": [],
        "sub_limit_exclusions": [
          {
            "type": "waiting period / excess period",
            "detail": "cover typically incepts only after an initial waiting period (commonly 14-30 days of downtime) \u2014 short repairs are self-insured by the owner"
          },
          {
            "type": "scheduled maintenance exclusion",
            "detail": "planned/scheduled yard periods and owner-caused delay are excluded \u2014 the trigger must be an insured peril under the Hull & Machinery policy, not routine maintenance"
          }
        ],
        "cascade_rules": [
          {
            "condition": "vessel is commercially coded and listed for charter",
            "implies": "Liability Protection should be re-underwritten toward true commercial P&I-style terms rather than the private/pleasure product, and Loss of Charter Hire becomes a relevant line"
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "pollution_liability",
        "label": "Pollution Liability",
        "trigger_type": "asset",
        "line_of_business": "Marine",
        "is_new": true,
        "required_baseline_limit": "$1,000,000 minimum Certificate of Financial Responsibility (COFR) level for any vessel subject to OPA 90 when operating in US waters; UHNW brokers typically place $5,000,000-$10,000,000+ given real-world cleanup-cost severity, especially for larger fuel-bunker capacities on S5+ tier vessels.",
        "baseline_limit_usd": null,
        "baseline_limit_by_tier": {
          "S1": 1000000,
          "S2": 1000000,
          "S3": 1000000,
          "S4": 1000000,
          "S5": 5000000,
          "S6": 7500000,
          "S7": 10000000
        },
        "statutory_triggers": [
          {
            "jurisdiction": "United States (Oil Pollution Act of 1990, 33 U.S.C. \u00a72701 et seq.)",
            "condition": "vessel over 300 gross tons operates in US navigable waters or the US Exclusive Economic Zone",
            "requirement": "owner/operator must demonstrate a Certificate of Financial Responsibility (COFR) \u2014 evidence of insurance or other financial security covering OPA 90 removal costs and damages, filed with the US Coast Guard's National Pollution Funds Center"
          },
          {
            "jurisdiction": "International (Civil Liability Convention regimes, flag-state signatory dependent)",
            "condition": "vessel is subject to an applicable Civil Liability Convention regime for oil pollution",
            "requirement": "a compulsory insurance certificate for oil pollution damage must be carried aboard and produced to port authorities"
          }
        ],
        "sub_limit_exclusions": [
          {
            "type": "gradual pollution vs. sudden/accidental distinction",
            "detail": "many pollution policies cover sudden accidental discharge but exclude gradual seepage or known-and-uncorrected leaks absent a separate endorsement"
          },
          {
            "type": "fines and penalties exclusion",
            "detail": "civil/criminal fines and penalties imposed by regulators are typically excluded from indemnification even where cleanup costs are covered"
          }
        ],
        "cascade_rules": [
          {
            "condition": "vessel operates in or regularly transits US territorial waters and is >= 300 GT",
            "implies": "OPA 90 COFR filing is a hard statutory prerequisite to entering US waters \u2014 verify filing status is current, not just that a policy exists"
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "crew_employers_liability_jones_act",
        "label": "Crew Employers' Liability (Jones Act Exposure)",
        "trigger_type": "person",
        "line_of_business": "Marine",
        "is_new": true,
        "required_baseline_limit": "$5,000,000 minimum primary for any US-flagged vessel with signed-on crew, commonly layered with Excess/Umbrella Liability to $10,000,000-$25,000,000+ given Jones Act negligence verdicts are uncapped and juries in favorable venues have returned multi-million dollar awards for career-ending crew injuries.",
        "baseline_limit_usd": 5000000,
        "baseline_limit_by_tier": null,
        "statutory_triggers": [
          {
            "jurisdiction": "United States (Jones Act, 46 U.S.C. \u00a730104)",
            "condition": "crew member qualifies as a 'seaman' (owes allegiance to a vessel in navigation, contributes to its function) aboard a US-flagged vessel",
            "requirement": "owner is exposed to negligence-based personal injury/death claims outside the workers'-comp-style no-fault system applying to shore-based employees \u2014 no statutory damages cap"
          },
          {
            "jurisdiction": "US general maritime law",
            "condition": "any vessel with a 'seaman' crew member, regardless of flag if suit is brought in a US court",
            "requirement": "a maintenance-and-cure obligation (daily living stipend plus medical costs until maximum medical improvement) attaches automatically, independent of fault"
          }
        ],
        "sub_limit_exclusions": [
          {
            "type": "non-US-flagged crew claims outside US courts",
            "detail": "Jones Act protection is tied to 'seaman' status typically linked to US-flagged vessels or US-court jurisdiction; foreign-flagged vessels with foreign crew may fall back to MLC/flag-state regimes instead, materially changing which policy responds"
          },
          {
            "type": "punitive damages exclusion",
            "detail": "many US liability placements exclude or sub-limit punitive damages, which can be claimed in willful-unseaworthiness Jones Act cases"
          }
        ],
        "cascade_rules": [
          {
            "condition": "vessel re-flags from a foreign registry to US flag",
            "implies": "Jones Act exposure attaches for the first time \u2014 Crew Employers' Liability limits should be reviewed at the same time as the re-flagging, not left at prior foreign-flag levels"
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "fine_art_marine_rider",
        "label": "Fine Art & Valuables Aboard (Marine Rider)",
        "trigger_type": "asset",
        "line_of_business": "Marine",
        "is_new": true,
        "required_baseline_limit": "Scheduled item-by-item at current appraised/replacement value, typically ranging $500,000-$10,000,000+ in aggregate for S5+ tier vessels known to carry significant collections or wine cellars aboard, reassessed at each renewal alongside the hull valuation.",
        "baseline_limit_usd": null,
        "baseline_limit_by_tier": {
          "S1": 100000,
          "S2": 150000,
          "S3": 200000,
          "S4": 250000,
          "S5": 2000000,
          "S6": 5000000,
          "S7": 8000000
        },
        "statutory_triggers": [],
        "sub_limit_exclusions": [
          {
            "type": "unscheduled personal effects sub-limit",
            "detail": "absent this rider, Hull & Machinery's default personal-effects-aboard sub-limit is typically a modest fixed figure (often $10,000-$50,000) \u2014 grossly inadequate for any genuine collection"
          },
          {
            "type": "general average / salvage contribution exposure",
            "detail": "under marine law, valuables aboard may be liable for a general average contribution following a common maritime peril even if the items are undamaged \u2014 a marine-specific exposure a land-based fine art floater never anticipates"
          },
          {
            "type": "humidity/climate and mysterious disappearance exclusions",
            "detail": "standard fine-art marine wording often excludes gradual humidity/mold damage and 'mysterious disappearance' (unexplained loss without evidence of theft), common yacht-specific loss patterns"
          }
        ],
        "cascade_rules": [
          {
            "condition": "account already holds a fine_art_scheduled policy in the fine_art vertical",
            "implies": "confirm whether items are ever transported aboard the yacht \u2014 if so, the land-based floater's marine exclusion creates a coverage gap this rider is specifically designed to close, not a duplicate"
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "excess_umbrella_liability",
        "label": "Excess/Umbrella Liability (Marine)",
        "trigger_type": "asset",
        "line_of_business": "Marine",
        "is_new": true,
        "required_baseline_limit": "$10,000,000-$25,000,000 minimum excess layer for S4+ tier vessels with meaningful guest-carrying capacity or crew complement, scaling toward $50,000,000+ for S6-S7 tier vessels or any vessel regularly used for large-party charter/entertaining given the severity tail of a mass-casualty marine incident.",
        "baseline_limit_usd": null,
        "baseline_limit_by_tier": {
          "S1": 2000000,
          "S2": 5000000,
          "S3": 8000000,
          "S4": 10000000,
          "S5": 17500000,
          "S6": 35000000,
          "S7": 50000000
        },
        "statutory_triggers": [],
        "sub_limit_exclusions": [
          {
            "type": "follow-form / drop-down structure",
            "detail": "the excess layer follows the terms and conditions of the underlying primary Liability Protection and Crew Employers' Liability policies \u2014 a gap or exclusion in the primary layer is not automatically covered unless specifically endorsed to drop down"
          },
          {
            "type": "underlying limit maintenance warranty",
            "detail": "excess cover is typically conditioned on the primary layers being maintained at their full stated limits throughout the policy period \u2014 letting a primary limit lapse or erode can void the excess layer"
          }
        ],
        "cascade_rules": [
          {
            "condition": "primary Liability Protection or Crew Employers' Liability limit increases at renewal",
            "implies": "the excess/umbrella attachment point should be re-verified so no coverage gap opens between the new primary limit and where the excess layer begins"
          }
        ],
        "note": ""
      }
    ],
    "aviation": [
      {
        "coverage_type_id": "aviation_hull",
        "label": "Aviation Hull",
        "trigger_type": "asset",
        "line_of_business": "Aviation",
        "is_new": false,
        "required_baseline_limit": "Agreed (stated) value equal to the aircraft's current fair-market replacement cost, reappraised annually via a qualified aviation appraisal (e.g., Vref/AircraftPost) \u2014 typically $5,000,000-$20,000,000 for a light/midsize jet and $30,000,000-$75,000,000+ for a large-cabin/ultra-long-range jet (Gulfstream G650/G700, Bombardier Global 7500, Dassault Falcon 8X class). This project's own GWP_RateTrend_Table carries no aviation-hull-specific rate index (flat +2.0%, flagged '[NO SOURCE FOUND \u2014 ESTIMATE]'), so this limit is grounded in external agreed-value market convention (Global Aerospace / USAIG large-cabin hull placement practice), not this project's pricing table. Must equal or exceed any lender payoff or title-trust indemnification floor to avoid a coinsurance/valuation gap.",
        "baseline_limit_usd": null,
        "baseline_limit_by_tier": {
          "light": 8000000,
          "mid": 15000000,
          "heavy": 50000000
        },
        "statutory_triggers": [],
        "sub_limit_exclusions": [
          {
            "type": "Wear & Tear / Mechanical Breakdown Exclusion",
            "description": "Hull coverage excludes gradual deterioration, corrosion, and mechanical/electrical breakdown absent resulting sudden accidental damage \u2014 routine engine/avionics wear is not a covered peril."
          },
          {
            "type": "Unapproved Pilot Warranty",
            "description": "Coverage is void for any flight operated by a pilot who does not meet the policy's named-pilot or open-pilot warranty (minimum hours, type rating, recency, medical currency) \u2014 the single most common cause of an aviation hull claim denial."
          },
          {
            "type": "War, Hijacking & Confiscation Exclusion (AVN48B)",
            "description": "Standard hull policy excludes war, terrorism, hijacking, confiscation and government seizure \u2014 bought back separately via the war_risk coverage (AVN52E endorsement); without that buy-back the hull is uninsured for those perils."
          },
          {
            "type": "Airworthiness Directive Non-Compliance",
            "description": "Coverage excluded if the aircraft is operated without a valid, in-force airworthiness certificate or in violation of an outstanding mandatory FAA Airworthiness Directive."
          },
          {
            "type": "Nuclear/Radioactive Contamination Exclusion",
            "description": "Standard market-wide exclusion for nuclear reaction, radiation, or radioactive contamination, regardless of cause."
          }
        ],
        "cascade_rules": [
          {
            "condition": "aviation_hull agreed value >= $30,000,000 (large-cabin/ultra-long-range jet)",
            "implies": "client is very likely also a yacht owner and/or holds K&R and blanket_personal_articles coverage \u2014 aircraft at this hull tier correlates strongly with the same UHNW asset profile that drives the yacht and personal verticals."
          },
          {
            "condition": "aircraft registered to a title-holding trust rather than the beneficial owner directly",
            "implies": "trustee_additional_insured_indemnity coverage is almost certainly required by the trust agreement and should be cross-checked; the owner is very likely a non-US-citizen using a US owner-trustee structure to obtain N-registration."
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "aviation_liability",
        "label": "Aviation Liability",
        "trigger_type": "asset",
        "line_of_business": "Aviation",
        "is_new": false,
        "required_baseline_limit": "$100,000,000 combined single limit (smooth \u2014 no per-passenger sublimit) as the market-standard floor for a mid/large-cabin private jet, scaling to $300,000,000+ for ultra-long-range/large-cabin aircraft, any aircraft habitually operated into the EU/UK (EC Regulation 785/2004 sets its own minimums by aircraft weight class), or any aircraft placed on a Part 135 charter certificate \u2014 where DOT's 14 CFR Part 205 'large aircraft' threshold (>60 seats or >18,000 lb payload) carries a $300,000,000 minimum. No aviation-liability-specific rate index exists in this project's own GWP_RateTrend_Table (flat +2.0%, flagged '[NO SOURCE FOUND \u2014 ESTIMATE]'); this limit is grounded in NBAA/Global Aerospace private-aviation placement convention instead.",
        "baseline_limit_usd": null,
        "baseline_limit_by_tier": {
          "light": 50000000,
          "mid": 100000000,
          "heavy": 200000000
        },
        "statutory_triggers": [
          {
            "jurisdiction": "United States (DOT)",
            "condition": "aircraft is operated for compensation or hire under an FAA Part 135 (or 121) air carrier certificate rather than purely Part 91 private use",
            "requirement": "14 CFR Part 205 mandates minimum aircraft accident liability insurance for certificated air carriers \u2014 up to $300,000,000 for 'large aircraft' (more than 60 passenger seats or more than 18,000 lb payload capacity), materially exceeding typical Part 91 private-use liability limits."
          },
          {
            "jurisdiction": "European Union / United Kingdom",
            "condition": "aircraft operates into, over, or within EU/UK airspace",
            "requirement": "EC Regulation 785/2004 (retained in UK law post-Brexit) sets minimum third-party and passenger liability insurance by aircraft maximum take-off mass (MTOM) as a condition of operation \u2014 non-compliant aircraft can be denied overflight/landing clearance."
          },
          {
            "jurisdiction": "International (ICAO member states)",
            "condition": "aircraft crosses international borders",
            "requirement": "ICAO Assembly Resolution A33-1's minimum-insurance framework encourages member states to require proof of adequate third-party liability insurance, scaled to aircraft weight, as a condition of overflight and landing permits."
          }
        ],
        "sub_limit_exclusions": [
          {
            "type": "War, Hijacking & Terrorism Exclusion (AVN48B)",
            "description": "Base liability form excludes war, terrorism, hijacking and related perils absent the war_risk buy-back (AVN52E) \u2014 without it, third-party liability arising from a hijacking or terrorist act is not covered."
          },
          {
            "type": "Unapproved Pilot Warranty",
            "description": "Liability coverage is equally void (not just hull) if the flight is operated by a pilot outside the policy's named/open-pilot warranty."
          },
          {
            "type": "Territorial Exclusion / Sanctioned Airspace",
            "description": "Many policies exclude or require additional premium/notification for operation in or over designated higher-risk or sanctioned territories/airspace (varies by market cycle and geopolitical conditions)."
          },
          {
            "type": "Products/Completed Operations Exclusion",
            "description": "Standard aviation liability excludes claims arising from aircraft manufacture, maintenance workmanship, or parts defects \u2014 those sit with the manufacturer/MRO's own products liability program, not the owner's operating liability policy."
          }
        ],
        "cascade_rules": [
          {
            "condition": "aviation_liability limit >= $100,000,000",
            "implies": "overall account net worth tier is consistent with needing exec_do and fine_art_scheduled coverage \u2014 high liability towers correlate with broader UHNW personal-lines exposure."
          },
          {
            "condition": "aircraft is placed on a Part 135 charter certificate when not in personal use",
            "implies": "non_owned_aircraft_liability and a separate aircraft-management-company entity (with its own exec_do/commercial liability needs) are very likely present."
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "crew_accident",
        "label": "Crew Accident",
        "trigger_type": "person",
        "line_of_business": "Aviation",
        "is_new": false,
        "required_baseline_limit": "$1,000,000 accidental death & dismemberment (AD&D) per crew position minimum, plus a minimum $2,000,000 loss-of-license/disability benefit for the captain of a large-cabin jet \u2014 sized to replace roughly 10-15 years of a professional pilot's compensation (large-cabin captains typically earn $200,000-$400,000+/yr), since neither the FAA nor DOT sets a minimum crew accident benefit and a base state workers'-compensation award alone is inadequate to cover career-ending loss of an FAA medical certificate. No project-internal rate index exists for this coverage type (flat +2.0%, '[NO SOURCE FOUND \u2014 ESTIMATE]').",
        "baseline_limit_usd": 1000000,
        "baseline_limit_by_tier": null,
        "statutory_triggers": [
          {
            "jurisdiction": "US states (varies)",
            "condition": "flight crew are employed as W-2 staff of the owner or an aircraft management company based in a given state",
            "requirement": "state workers' compensation coverage is mandatory for those employees; crew_accident/loss-of-license coverage is supplemental to (not a substitute for) the statutory workers' comp benefit."
          }
        ],
        "sub_limit_exclusions": [
          {
            "type": "War/Terrorism Exclusion",
            "description": "Standard crew accident policies exclude death/injury arising from war, invasion, or terrorism absent a specific buy-back \u2014 relevant when crew operate into higher-risk regions."
          },
          {
            "type": "Pre-Existing Medical Condition Exclusion",
            "description": "Loss-of-license benefits typically exclude disqualification arising from a medical condition disclosed or diagnosed before the policy's inception."
          },
          {
            "type": "Scheduled Benefit Cap by Position",
            "description": "AD&D/weekly indemnity benefits are scheduled per crew position (captain/first officer/flight attendant) \u2014 a benefit claimed for an unscheduled or unlisted crew member is not payable."
          }
        ],
        "cascade_rules": [
          {
            "condition": "client employs 2+ dedicated flight crew on payroll",
            "implies": "a broader family-office/domestic-staff employment structure likely exists, and if the client also owns a yacht, crew_medical_mlc (yacht vertical) is very likely already in place for marine crew \u2014 the two crew-benefit programs are usually reviewed together."
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "war_risk",
        "label": "War Risk",
        "trigger_type": "asset",
        "line_of_business": "Aviation",
        "is_new": false,
        "required_baseline_limit": "Hull War Risk = full agreed hull value (matches aviation_hull's stated value, not a reduced sublimit); War Liability = matched to the aircraft's full aviation_liability limit (commonly $100,000,000+) rather than a token minimum \u2014 because the standard AVN48B war/terrorism exclusion in the base hull and liability forms would otherwise leave a full, uninsured gap for hijacking, confiscation, or terrorism, not a partial one. Increase further for any aircraft operating into higher-risk regions. No aviation-specific rate index exists internally (flat +2.0% estimate); the equal-to-primary-limit convention is standard AVN52E war-risk buy-back market practice.",
        "baseline_limit_usd": null,
        "baseline_limit_by_tier": {
          "light": 50000000,
          "mid": 100000000,
          "heavy": 200000000
        },
        "statutory_triggers": [
          {
            "jurisdiction": "International (ICAO member states)",
            "condition": "aircraft operates into or over higher-risk or conflict-affected airspace",
            "requirement": "ICAO Assembly Resolution A33-1's minimum third-party war-risk insurance framework leads many states to require proof of adequate war-risk liability coverage, scaled to aircraft weight, as a condition of overflight or landing clearance."
          }
        ],
        "sub_limit_exclusions": [
          {
            "type": "Confiscation by State of Registry/Insured's Own Government",
            "description": "War-risk hull buy-backs (AVN52E) typically exclude confiscation, requisition, or seizure by the aircraft's own state of registry or the insured's own government \u2014 only third-country/third-party seizure is covered."
          },
          {
            "type": "Detention Waiting Period / Loss-of-Use Sublimit",
            "description": "Many war-risk endorsements apply a waiting period (commonly 30-60 days) before a detained (not physically destroyed) aircraft is treated as a total loss, and loss-of-use during detention is often sub-limited or excluded entirely."
          },
          {
            "type": "Cyber-Attack Exclusion Carve-Back Complexity",
            "description": "War risk policies increasingly layer a separate cyber-attack exclusion/carve-back (AVN111-style clauses) on top of the war exclusion \u2014 a cyber-triggered hijacking or system compromise may fall into a gap between the war and cyber exclusions unless specifically reconciled."
          }
        ],
        "cascade_rules": [
          {
            "condition": "aircraft is a helicopter used for offshore/personal security transit or operates in a designated higher-risk region",
            "implies": "war_risk exposure and premium loading are materially higher than for a fixed-wing jet on standard domestic/transatlantic routes \u2014 flag for underwriter review regardless of hull value."
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "non_owned_aircraft_liability",
        "label": "Non-Owned Aircraft Liability",
        "trigger_type": "activity",
        "line_of_business": "Aviation",
        "is_new": true,
        "required_baseline_limit": "$10,000,000-$25,000,000 combined single limit as a standalone policy or broad-form endorsement \u2014 sized to backstop gaps in a charter operator's or third-party owner's own liability program, since many Part 135 charter operators carry only DOT statutory minimums (which for a 'small aircraft' can fall well below what a UHNW family's liability exposure actually requires) and many owner-flown reciprocal-use arrangements carry no liability program at all covering the borrower.",
        "baseline_limit_usd": 10000000,
        "baseline_limit_by_tier": null,
        "statutory_triggers": [],
        "sub_limit_exclusions": [
          {
            "type": "Excess-Only / Following-Form Basis",
            "description": "Typically written excess of (and following the form of) the owner/operator's own primary policy \u2014 it does not respond until that underlying policy is exhausted or found inapplicable, so a gap exists if the underlying policy is voided (e.g., for a pilot-warranty breach) rather than merely exhausted."
          },
          {
            "type": "Owned-Aircraft Exclusion",
            "description": "Excludes any aircraft the named insured owns, leases long-term, or has under a fractional ownership interest \u2014 it only responds to genuinely non-owned, occasional-use aircraft."
          },
          {
            "type": "Regularly-Used Aircraft Exclusion",
            "description": "Coverage is typically voided for an aircraft used with a frequency exceeding a stated threshold (e.g., more than a set number of days per policy period) \u2014 frequent use of the 'same' non-owned aircraft can push it toward being treated as a scheduled/owned exposure requiring its own primary policy."
          }
        ],
        "cascade_rules": [
          {
            "condition": "family members or staff frequently fly as passengers or pilots on chartered or third-party-owned aircraft",
            "implies": "non_owned_aircraft_liability is a materially under-purchased coverage relative to owned-aircraft coverage on most UHNW accounts and should be flagged even where the client owns no aircraft directly."
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "hangarkeepers_liability",
        "label": "Hangarkeepers Liability",
        "trigger_type": "activity",
        "line_of_business": "Aviation",
        "is_new": true,
        "required_baseline_limit": "Equal to the highest agreed hull value of any single aircraft the facility stores, tows, fuels, or services at one time \u2014 never less than aviation_hull's stated value \u2014 with both the 'each aircraft' and 'each occurrence' limits sized to the full hull value, since a per-occurrence sublimit below hull value leaves a first-dollar gap if the insured's own aircraft alone is the one damaged in the hangar.",
        "baseline_limit_usd": null,
        "baseline_limit_by_tier": {
          "light": 8000000,
          "mid": 15000000,
          "heavy": 50000000
        },
        "statutory_triggers": [],
        "sub_limit_exclusions": [
          {
            "type": "Care, Custody & Control Basis",
            "description": "Only responds to damage occurring while the aircraft is in the hangar operator's actual care, custody, or control (e.g., during towing, fueling, or storage) \u2014 damage in flight or during a third party's independent maintenance work is not covered under this line."
          },
          {
            "type": "Each-Aircraft Sublimit Below Aggregate",
            "description": "Many hangarkeepers forms cap the per-aircraft payout even where the policy aggregate is higher \u2014 if multiple aircraft are damaged in one event (e.g., a hangar collapse), the per-aircraft cap can leave individual owners under-indemnified even though the facility's total limit is adequate."
          },
          {
            "type": "Fire Legal Liability Sub-Feature",
            "description": "Damage to the hangar structure itself caused by the insured (as opposed to damage to aircraft within it) is often a smaller, separately-scheduled sublimit rather than sharing the full hangarkeepers limit."
          }
        ],
        "cascade_rules": [
          {
            "condition": "client owns or leases a private hangar/FBO facility rather than using third-party transient parking",
            "implies": "a real_estate/premises_liability review of the hangar parcel itself is warranted, and high_value_property coverage for any office/lounge build-out within the hangar is likely also relevant."
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "loss_of_license",
        "label": "Pilot Loss of License",
        "trigger_type": "person",
        "line_of_business": "Aviation",
        "is_new": true,
        "required_baseline_limit": "$1,000,000-$2,500,000 lump-sum or structured benefit for a captain of a large-cabin jet, scaled to roughly 10-15 years of the pilot's compensation \u2014 this is a career-replacement-income calculation, not a medical-cost calculation, since the trigger is permanent or long-term loss of the FAA medical certificate (or type-rating currency) required to fly for compensation, not the underlying medical treatment itself (typically covered separately under health insurance).",
        "baseline_limit_usd": 1000000,
        "baseline_limit_by_tier": null,
        "statutory_triggers": [],
        "sub_limit_exclusions": [
          {
            "type": "Pre-Existing Condition Exclusion",
            "description": "Standard exclusion for any medical condition disclosed on or diagnosable from records predating the policy's inception."
          },
          {
            "type": "Age-Based Benefit Reduction/Cutoff",
            "description": "Many loss-of-license forms reduce the benefit or cut off eligibility entirely at a specified age (commonly around 60-65), reflecting the pilot's approaching natural retirement horizon rather than a career cut fully short by the disqualification."
          },
          {
            "type": "Temporary vs Permanent Disqualification Tiering",
            "description": "Full benefit is typically payable only for permanent loss of medical certification; temporary disqualification (e.g., a 6-12 month grounding pending re-certification) is usually paid at a materially reduced weekly-indemnity rate, not the full lump sum."
          }
        ],
        "cascade_rules": [
          {
            "condition": "the aircraft owner is also the primary pilot (owner-flown, not professionally crewed)",
            "implies": "loss_of_license coverage should be underwritten on the owner personally, not just hired crew \u2014 a common gap on owner-flown UHNW accounts where crew_accident/loss_of_license is assumed to only apply to paid staff."
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "guest_voluntary_settlement",
        "label": "Guest & Passenger Voluntary Settlement",
        "trigger_type": "person",
        "line_of_business": "Aviation",
        "is_new": true,
        "required_baseline_limit": "$250,000-$500,000 per seat (no-fault voluntary settlement), matched to the aircraft's certified passenger seating configuration \u2014 set materially above a token minimum because standard third-party liability coverage requires a legal finding of the operator's fault before it pays, while family members and guests aboard a privately-flown aircraft typically need immediate no-fault indemnification regardless of fault, and any refusal to accept the voluntary settlement preserves their right to sue under the full aviation_liability limit instead.",
        "baseline_limit_usd": null,
        "baseline_limit_by_tier": {
          "light": 2000000,
          "mid": 3000000,
          "heavy": 4000000
        },
        "statutory_triggers": [],
        "sub_limit_exclusions": [
          {
            "type": "Acceptance-of-Settlement Waiver Requirement",
            "description": "Payment is generally conditioned on the recipient (or estate) signing a release waiving further legal claims against the operator \u2014 a guest who declines the voluntary settlement retains the right to sue under the liability policy instead, effectively making this a first-offer, not a guaranteed cap."
          },
          {
            "type": "Crew Exclusion",
            "description": "Applies to non-crew occupants only \u2014 flight crew injuries are addressed under crew_accident/loss_of_license, not this coverage, so the two lines must be reviewed together to confirm every seat aboard is actually covered by one or the other."
          },
          {
            "type": "Willful Misconduct / Self-Inflicted Injury Exclusion",
            "description": "Standard exclusion for intentional acts or self-inflicted injury by the occupant."
          }
        ],
        "cascade_rules": [
          {
            "condition": "aircraft is regularly used to carry non-family guests (business associates, extended family, staff) rather than only immediate family",
            "implies": "guest_voluntary_settlement per-seat limits should be reviewed against actual typical occupancy \u2014 an aircraft that habitually flies at or near full seating capacity has materially higher aggregate exposure under this line than the per-seat limit alone suggests."
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "trustee_additional_insured_indemnity",
        "label": "Owner Trustee Additional Insured & Indemnity",
        "trigger_type": "entity",
        "line_of_business": "Aviation",
        "is_new": true,
        "required_baseline_limit": "Matches or exceeds aviation_liability's full limit (commonly $100,000,000+) \u2014 set contractually by the trust agreement itself, not independently underwritten, because owner-trustee companies (e.g., Bank of Utah, Wells Fargo Trust Company) will not accept or retain the trustee role without the beneficial owner/operator naming them as additional insured, loss payee, and indemnitee at a limit the trustee's own internal risk policy specifies \u2014 typically set at or above the aircraft's full liability tower, not a token minimum.",
        "baseline_limit_usd": null,
        "baseline_limit_by_tier": {
          "light": 50000000,
          "mid": 100000000,
          "heavy": 200000000
        },
        "statutory_triggers": [
          {
            "jurisdiction": "United States (FAA)",
            "condition": "the beneficial owner is not a US citizen (individual or entity) and the aircraft is to be N-registered",
            "requirement": "49 U.S.C. \u00a7\u00a7 44102-44103's citizenship requirements for US civil aircraft registration require a non-citizen owner to place legal title with a qualified US owner-trustee to obtain and retain a valid N-number registration \u2014 the trust structure is a registration-eligibility mechanism, not optional structuring."
          }
        ],
        "sub_limit_exclusions": [
          {
            "type": "Bare-Legal-Title Indemnity Scope",
            "description": "The trustee's additional-insured/indemnity protection is scoped to claims arising from the beneficial owner's operation of the aircraft \u2014 it does not extend to claims arising from the trustee's own independent negligence or a breach of the trust agreement's own terms by the trustee itself."
          },
          {
            "type": "Operator/Beneficial-Owner Default Gap",
            "description": "If the beneficial owner allows the underlying aviation_liability policy to lapse or lets a pilot-warranty breach void it, the trustee's indemnity protection is only as good as that underlying policy \u2014 there is no independent trustee-side coverage layer unless separately purchased."
          },
          {
            "type": "49 U.S.C. \u00a7 44112 Interaction",
            "description": "Federal law shields a lessor, owner, or secured party (including an owner-trustee) not in actual possession or control of the aircraft from liability for aircraft-caused harm except in cases of that party's own negligence \u2014 this statutory shield interacts with, but does not replace, the contractual indemnity/additional-insured protection this coverage line provides."
          }
        ],
        "cascade_rules": [
          {
            "condition": "trustee_additional_insured_indemnity coverage is present on the account",
            "implies": "the beneficial owner is very likely a foreign national or foreign entity with a broader offshore/multi-jurisdictional wealth structure \u2014 cross-check for exec_do, cyber_crime, and kr coverage in the personal vertical, which correlate strongly with this ownership profile."
          },
          {
            "condition": "aircraft is held via a title-holding trust",
            "implies": "the trust document itself should be reviewed for its own minimum-insurance and additional-insured clauses before finalizing aviation_liability and aviation_hull limits \u2014 the trust, not just market convention, may set a binding floor."
          }
        ],
        "note": ""
      }
    ],
    "real_estate": [
      {
        "coverage_type_id": "coastal_wind_flood",
        "label": "Coastal Wind/Flood",
        "trigger_type": "asset",
        "line_of_business": "Property",
        "is_new": false,
        "required_baseline_limit": "$10,000,000 minimum on a single coastal estate, scaling 1:1 with the current full rebuild-cost appraisal (never market value) \u2014 reasoning: named-storm/flood claims on UHNW coastal estates routinely exceed $10-50M rebuild cost for multi-structure waterfront properties, and the federal NFIP base flood limit ($250,000 building / $100,000 contents) is structurally inadequate on its own, requiring the excess_flood layer below. Marsh GIMI Q2 2026 shows the global Property composite softening -12%, meaning capacity now exists to place full rebuild value rather than under-limit into a softer market.",
        "baseline_limit_usd": 10000000,
        "baseline_limit_by_tier": null,
        "statutory_triggers": [
          {
            "jurisdiction": "United States (federal)",
            "condition": "property located within a FEMA Special Flood Hazard Area (SFHA) and financed with a federally regulated or federally insured mortgage",
            "requirement": "flood insurance purchase is federally mandated under the Flood Disaster Protection Act of 1973, as amended by the Biggert-Waters Act of 2012"
          },
          {
            "jurisdiction": "United States (federal, coastal barrier zones)",
            "condition": "property located within a Coastal Barrier Resources Act (CBRA) designated zone",
            "requirement": "federal NFIP flood insurance is unavailable by statute \u2014 private-market wind/flood placement is the only option, not merely the excess layer"
          },
          {
            "jurisdiction": "Florida",
            "condition": "property seeks wind coverage in a state-regulated or Citizens Property Insurance Corp market",
            "requirement": "a wind-mitigation inspection (roof-to-wall connections, opening protection, roof covering) is required to underwrite/price the wind peril"
          }
        ],
        "sub_limit_exclusions": [
          "Flood is an absolute EXCLUSION on every standard HO/high-value-property form \u2014 this coverage exists specifically because flood must be purchased separately",
          "Named-storm percentage deductibles common in FL/Gulf/Atlantic coastal states (typically 2%-5% of dwelling value per named storm) rather than a flat dollar deductible",
          "Anti-concurrent-causation clause standard: excludes flood damage even where wind was the proximate cause of a combined wind/flood loss",
          "Backup-of-sewers-and-drains sub-limit typically low (often $10,000-$25,000) unless separately endorsed"
        ],
        "cascade_rules": [
          {
            "condition": "property is in a coastal wind/flood exposure zone with rebuild value > $1,000,000",
            "implies": "excess_flood is almost certainly also needed \u2014 the NFIP statutory cap covers only a small fraction of total exposure"
          },
          {
            "condition": "property is in a hurricane-prone or seasonal-evacuation coastal jurisdiction",
            "implies": "vacant_unoccupied_dwelling is likely relevant for the off-season/evacuation window"
          },
          {
            "condition": "coastal waterfront property has a private dock, seawall, or deep-water mooring",
            "implies": "the yacht vertical (hull_machinery, liability_protection) is likely also relevant \u2014 waterfront UHNW owners frequently also operate a vessel"
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "high_value_property",
        "label": "High-Value Property",
        "trigger_type": "asset",
        "line_of_business": "Property",
        "is_new": false,
        "required_baseline_limit": "$5,000,000 minimum dwelling limit on Guaranteed/Extended Replacement Cost (never Actual Cash Value or a stated agreed value), scaling with the current rebuild appraisal, with the Extended/Guaranteed Replacement Cost endorsement extending to 150-200% of the stated limit \u2014 reasoning: UHNW dwellings routinely carry bespoke/custom-build costs 2-4x standard per-square-foot construction indices, so a flat stated-value policy underinsures on any total loss, and post-catastrophe demand-surge (regional labor/materials cost spikes after a CAT event) can add 20-50% to rebuild cost within months of a major loss.",
        "baseline_limit_usd": 5000000,
        "baseline_limit_by_tier": null,
        "statutory_triggers": [
          {
            "jurisdiction": "Florida and ~20 other US Valued Policy Law states",
            "condition": "a covered peril causes a total loss to the dwelling",
            "requirement": "state Valued Policy Law statutes require the insurer to pay the FULL stated policy limit regardless of the property's actual value at time of loss \u2014 the baseline limit must be set to true replacement cost, not inflated, to avoid statutory overpayment exposure in these states"
          }
        ],
        "sub_limit_exclusions": [
          "Standard sub-limit on unscheduled jewelry/watches/furs, typically $1,500-$2,500 total \u2014 necessitates a separate scheduled placement (personal vertical's blanket_personal_articles)",
          "Standard sub-limit on unscheduled fine art/collectibles, typically $2,500-$5,000 total \u2014 necessitates fine_art_scheduled",
          "Wear-and-tear, gradual deterioration, and mold exclusions standard, with mold often capped at $10,000-$50,000 even when endorsed",
          "Earth movement/earthquake is a standard, absolute EXCLUSION \u2014 requires the separate earthquake_dic placement",
          "Ordinance-or-law / building-code-upgrade coverage typically sub-limited to 10-25% of the dwelling limit unless specifically endorsed to 100%",
          "Flood is a standard, absolute EXCLUSION \u2014 requires the separate coastal_wind_flood / excess_flood placement"
        ],
        "cascade_rules": [
          {
            "condition": "dwelling replacement value > $10,000,000",
            "implies": "excess_umbrella_liability at $25,000,000+ is likely needed \u2014 liability exposure and jury-verdict severity scale with visible asset value"
          },
          {
            "condition": "property contains a wine cellar, art collection, or scheduled valuables > $500,000",
            "implies": "fine_art_scheduled and/or blanket_personal_articles are likely relevant"
          },
          {
            "condition": "property employs 3+ live-in or regular domestic staff",
            "implies": "domestic_staff_liability is likely relevant"
          },
          {
            "condition": "property is located in California or a Pacific Northwest seismic zone",
            "implies": "earthquake_dic is a materially higher-priority gap given the standard policy's earth-movement exclusion"
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "premises_liability",
        "label": "Premises Liability",
        "trigger_type": "asset",
        "line_of_business": "Casualty",
        "is_new": false,
        "required_baseline_limit": "$5,000,000 minimum primary limit, layered under excess_umbrella_liability to a $25,000,000-$50,000,000+ aggregate tower \u2014 reasoning: UHNW estates carry elevated attractive-nuisance exposure (pools, docks, equestrian facilities, staffed events) and elevated jury-verdict severity tied to perceived net worth (\"reptile theory\" litigation that specifically targets visible wealth), consistent with how UHNW carriers (Chubb Masterpiece, PURE, AIG Private Client) structure a primary-plus-excess liability tower rather than a single high primary limit.",
        "baseline_limit_usd": 5000000,
        "baseline_limit_by_tier": null,
        "statutory_triggers": [
          {
            "jurisdiction": "Florida",
            "condition": "property has a swimming pool",
            "requirement": "the Florida Residential Swimming Pool Safety Act mandates a barrier/enclosure or approved safety feature; non-compliance can void or restrict the liability coverage that responds to a pool-related claim"
          },
          {
            "jurisdiction": "California",
            "condition": "property has a swimming pool",
            "requirement": "the California Swimming Pool Safety Act (post-2018 amendments) mandates at least one of several enumerated drowning-prevention safety features as a precondition for the pool to be lawfully maintained, which underwriters treat as a coverage-compliance condition"
          },
          {
            "jurisdiction": "California",
            "condition": "a dog owned by the household causes injury",
            "requirement": "California Civil Code \u00a73342 imposes strict liability on the dog owner regardless of prior bite history or negligence, raising the bar for adequate underlying limits"
          }
        ],
        "sub_limit_exclusions": [
          "Business-pursuits exclusion standard: staffed commercial events, a home office, or any regular commercial activity on the premises can fall outside personal liability coverage unless specifically endorsed",
          "Assault-and-battery sub-limit or exclusion common when the property regularly hosts large staffed events or maintains a security detail",
          "Liquor liability / dram-shop exclusion standard for hosted events serving alcohol unless specifically endorsed",
          "Watercraft-on-premises and aircraft-on-premises exclusions standard \u2014 liability arising from a vessel or aircraft kept at the property routes instead to the yacht/aviation vertical's own liability coverage"
        ],
        "cascade_rules": [
          {
            "condition": "property regularly hosts staffed events or large gatherings (weddings, galas, fundraisers)",
            "implies": "a liquor liability / event liability endorsement is likely needed"
          },
          {
            "condition": "property has equestrian facilities",
            "implies": "a separate equine liability rider is likely needed \u2014 a genuine gap outside the current catalog, flagged for future addition"
          },
          {
            "condition": "primary premises_liability limit sits at or near its minimum",
            "implies": "excess_umbrella_liability is the correct next placement to close the gap rather than raising the primary limit alone"
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "excess_umbrella_liability",
        "label": "Excess/Umbrella Liability",
        "trigger_type": "asset",
        "line_of_business": "Casualty",
        "is_new": true,
        "required_baseline_limit": "$25,000,000 minimum for a single UHNW residential portfolio, scaling to $50,000,000-$100,000,000+ for multi-jurisdictional portfolios (2+ properties) or wherever the primary premises_liability + auto + watercraft tower needs layering \u2014 reasoning: UHNW carrier underwriting convention (Chubb, PURE, AIG Private Client) sizes personal umbrella follow-form limits to roughly 2-5x disclosed net worth or total visible insured asset value, reflecting elevated nuclear-verdict exposure tied to perceived wealth.",
        "baseline_limit_usd": 25000000,
        "baseline_limit_by_tier": null,
        "statutory_triggers": [],
        "sub_limit_exclusions": [
          "Requires exact 'following form' match to every underlying primary policy (premises_liability, auto, watercraft) \u2014 any gap or narrower term in an underlying policy becomes a self-insured gap at the umbrella layer, not automatically covered",
          "War and terrorism exclusion standard",
          "Punitive damages coverage is excluded or restricted by statute in a number of US states (public-policy prohibitions on insuring punitive damages), independent of the policy's own wording",
          "Business, professional, and D&O/entity-liability exposures are excluded \u2014 umbrella extends only personal-lines coverage, not business or fiduciary exposures (routed instead to exec_do)"
        ],
        "cascade_rules": [
          {
            "condition": "primary premises_liability, auto, and watercraft limits are all at or near their respective minimums",
            "implies": "excess_umbrella_liability is the correct placement to close the gap, rather than raising each primary limit individually"
          },
          {
            "condition": "household net worth or total insured asset value exceeds $25,000,000",
            "implies": "excess_umbrella_liability is likely under-limited if it is not already placed at $25,000,000+"
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "excess_flood",
        "label": "Excess Flood (Private, Above NFIP Cap)",
        "trigger_type": "asset",
        "line_of_business": "Property",
        "is_new": true,
        "required_baseline_limit": "Sized to close the gap between the $250,000 NFIP building / $100,000 contents statutory cap and the property's full replacement-cost appraisal \u2014 reasoning: the federal NFIP maximum is structurally inadequate for any UHNW coastal dwelling (frequently a $5,000,000-$50,000,000 rebuild cost), so the private excess-flood market (Lloyd's, Neptune, and other private carriers) must fill the gap dollar-for-dollar. Baseline: a $4,750,000+ excess layer minimum (to build a $5,000,000 total flood tower), scaling with the property's full replacement appraisal.",
        "baseline_limit_usd": 4750000,
        "baseline_limit_by_tier": null,
        "statutory_triggers": [
          {
            "jurisdiction": "United States (federal)",
            "condition": "property is within a FEMA Special Flood Hazard Area (SFHA) and carries a federally regulated or federally insured mortgage",
            "requirement": "primary NFIP (or an accepted private-flood equivalent) coverage purchase is federally mandated under the Flood Disaster Protection Act of 1973 as amended by the Biggert-Waters Act of 2012 \u2014 but the statutory mandate caps at $250,000/$100,000, leaving the excess layer entirely voluntary"
          }
        ],
        "sub_limit_exclusions": [
          "The NFIP primary layer itself is capped at $250,000 building / $100,000 contents by federal statute \u2014 this coverage exists specifically to sit excess of that cap",
          "Basement and below-grade contents are typically excluded or heavily sub-limited even in private excess placements",
          "Standard flood definition excludes surface-water backup from sewers/drains unless separately endorsed"
        ],
        "cascade_rules": [
          {
            "condition": "coastal_wind_flood coverage is placed on a property with a rebuild value greater than $1,000,000",
            "implies": "excess_flood is almost certainly also needed"
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "earthquake_dic",
        "label": "Earthquake / Difference-in-Conditions (DIC)",
        "trigger_type": "asset",
        "line_of_business": "Property",
        "is_new": true,
        "required_baseline_limit": "$5,000,000 minimum for any property in a designated seismic zone (California Alquist-Priolo zones, Cascadia subduction-zone states), scaling to full rebuild value \u2014 reasoning: earthquake/earth-movement is a universal, absolute EXCLUSION on every HO/high-value-property form, so in a seismic zone a total-loss earthquake claim with no DIC coverage in force is a 100% uninsured total loss.",
        "baseline_limit_usd": 5000000,
        "baseline_limit_by_tier": null,
        "statutory_triggers": [
          {
            "jurisdiction": "California",
            "condition": "an admitted carrier offers a residential property policy in California",
            "requirement": "California Insurance Code \u00a710081 (the California Earthquake Authority enabling statute) requires admitted carriers to OFFER earthquake coverage (CEA or a private equivalent) alongside every standard HO policy \u2014 the offer is mandatory, the purchase remains voluntary"
          }
        ],
        "sub_limit_exclusions": [
          "Standard HO/high-value-property policies universally exclude earth movement/earthquake \u2014 this coverage exists specifically to buy back that exclusion",
          "Deductibles are set as a percentage of dwelling value, typically 10-20%, materially higher than any other peril's deductible on the same account",
          "Unreinforced masonry or older non-retrofitted structures are often sub-limited or require separate underwriting"
        ],
        "cascade_rules": [
          {
            "condition": "property is located in California or a Pacific Northwest seismic zone",
            "implies": "earthquake_dic is a materially higher-priority gap than in non-seismic jurisdictions, signaled by the statutory offer-mandatory requirement above"
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "builders_risk_course_of_construction",
        "label": "Builders Risk / Course of Construction",
        "trigger_type": "activity",
        "line_of_business": "Property",
        "is_new": true,
        "required_baseline_limit": "100% of the total projected construction/renovation contract value (hard and soft costs) at completion \u2014 reasoning: a mid-construction total loss (fire, wind) is valued at the completed replacement cost, not the value-to-date; underinsuring to current progress value exposes the client to a co-insurance penalty and a same-year rebuild shortfall. No fixed dollar minimum applies \u2014 the limit must equal the GC contract value, commonly $2,000,000-$25,000,000+ for a UHNW ground-up estate build or major renovation.",
        "baseline_limit_usd": 2000000,
        "baseline_limit_by_tier": null,
        "statutory_triggers": [],
        "sub_limit_exclusions": [
          "Coverage terminates automatically at project completion/occupancy \u2014 must be converted to high_value_property at substantial completion, not left in place",
          "Design-error/faulty-workmanship is a liability exposure, not a property one, and is excluded here \u2014 it routes to the general contractor's own CGL policy",
          "Theft of materials in transit or in off-site storage is often sub-limited or excluded unless specifically endorsed",
          "Named-storm/wind coverage on coastal builders-risk placements commonly carries its own sub-limit or waiting period"
        ],
        "cascade_rules": [
          {
            "condition": "property is undergoing ground-up construction or a major renovation",
            "implies": "vacant_unoccupied_dwelling is not the correct coverage during the build (builders_risk supersedes it), but becomes relevant again once the finished home sits vacant pending occupancy"
          },
          {
            "condition": "a builders_risk policy is nearing its stated completion date",
            "implies": "the high_value_property placement is due to bind at substantial completion \u2014 a real coverage-gap risk at the handoff point"
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "vacant_unoccupied_dwelling",
        "label": "Vacant / Unoccupied Dwelling",
        "trigger_type": "activity",
        "line_of_business": "Property",
        "is_new": true,
        "required_baseline_limit": "Matches the underlying high_value_property dwelling limit \u2014 this is a coverage-continuity endorsement, not an added limit. Reasoning: standard HO/high-value-property forms automatically restrict or void key perils (vandalism, theft, and often water damage, sometimes all coverage) once a dwelling sits vacant beyond a threshold \u2014 commonly 30-60 consecutive days \u2014 a genuine, common UHNW gap given multi-jurisdictional portfolios where owners split time across 2-5+ residences, leaving each one vacant for months at a stretch.",
        "baseline_limit_usd": 5000000,
        "baseline_limit_by_tier": null,
        "statutory_triggers": [],
        "sub_limit_exclusions": [
          "Standard vacancy clause: vandalism, malicious mischief, theft, and often water-damage coverage automatically suspend after 30-60 days vacant unless this endorsement is in force",
          "Requires ongoing proof of maintenance/inspection (a regular caretaker or monitored-security visit log) as a condition of coverage \u2014 a lapsed inspection log can itself void a claim"
        ],
        "cascade_rules": [
          {
            "condition": "client owns 2 or more residential properties across multiple jurisdictions",
            "implies": "vacant_unoccupied_dwelling is very likely relevant for at least one property in the portfolio at any given time"
          },
          {
            "condition": "property is in a seasonal or hurricane-evacuation coastal jurisdiction",
            "implies": "vacant_unoccupied_dwelling is relevant specifically during the off-season/evacuation window"
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "equipment_breakdown_service_line",
        "label": "Equipment Breakdown & Service Line",
        "trigger_type": "asset",
        "line_of_business": "Property",
        "is_new": true,
        "required_baseline_limit": "$1,000,000-$3,000,000 combined equipment-breakdown/service-line sub-limit, scaling with the number and complexity of mechanical systems on the estate (geothermal, backup generators, elevators, wine-cellar climate control, pool/spa mechanicals, home-automation infrastructure) \u2014 reasoning: UHNW estates carry materially more mechanical/electrical infrastructure than a standard home, and both perils covered here (sudden mechanical/electrical breakdown; underground utility service-line failure) are standard EXCLUSIONS on base HO/high-value-property forms.",
        "baseline_limit_usd": 2000000,
        "baseline_limit_by_tier": null,
        "statutory_triggers": [],
        "sub_limit_exclusions": [
          "Standard HO/high-value-property policies universally exclude mechanical breakdown and underground service-line failure \u2014 this coverage exists specifically to buy back those exclusions",
          "Wear-and-tear/gradual-deterioration exclusion still applies even under the endorsement \u2014 covers sudden/accidental breakdown only, not maintenance neglect",
          "Data/media restoration coverage (relevant to home-automation/AV systems) is typically capped separately and low unless specifically scheduled"
        ],
        "cascade_rules": [
          {
            "condition": "property has extensive smart-home/automation, geothermal, or backup-generator infrastructure",
            "implies": "equipment_breakdown_service_line adequacy should be checked against actual system replacement cost, not left at the default sub-limit"
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "domestic_staff_liability",
        "label": "Domestic Staff Liability (Workers' Comp + EPLI)",
        "trigger_type": "person",
        "line_of_business": "Casualty",
        "is_new": true,
        "required_baseline_limit": "Statutory workers' compensation limits (state-mandated, not client-selectable) plus $1,000,000-$3,000,000 of Employment Practices Liability (EPLI) for wrongful-termination, harassment, and discrimination claims \u2014 reasoning: household staff (estate managers, housekeepers, chefs, security, nannies) are genuine statutory employees in most US jurisdictions once headcount/hours thresholds are crossed, and UHNW households are a recognized elevated-frequency EPLI segment (high staff turnover, live-in proximity, multi-property households) per UHNW specialty-carrier domestic-staff underwriting guidance (Chubb, PURE, AIG Private Client).",
        "baseline_limit_usd": 2000000,
        "baseline_limit_by_tier": null,
        "statutory_triggers": [
          {
            "jurisdiction": "Florida",
            "condition": "domestic/household staff headcount exceeds Florida's statutory employer threshold (generally 4+ employees, with narrower thresholds for agricultural work)",
            "requirement": "Florida workers' compensation coverage becomes mandatory"
          },
          {
            "jurisdiction": "New York",
            "condition": "any household employee works 40+ hours/week, or any live-in household employee is engaged",
            "requirement": "New York mandates workers' compensation and statutory disability/Paid Family Leave coverage for domestic workers under the New York Domestic Workers' Bill of Rights"
          },
          {
            "jurisdiction": "California",
            "condition": "a household employee works 52+ hours or earns $100+ in a calendar quarter",
            "requirement": "California requires workers' compensation coverage for household employees meeting the state's earnings/hours threshold"
          }
        ],
        "sub_limit_exclusions": [
          "Independent-contractor misclassification is a standard coverage dispute point \u2014 coverage responds only to genuine statutory employees, not staff misclassified as 1099 contractors",
          "Sexual-harassment / abuse-and-molestation claims frequently carry a separate, lower sub-limit or are excluded outright absent a specific buy-back endorsement",
          "Punitive-damages exclusion standard on EPLI placements in many states"
        ],
        "cascade_rules": [
          {
            "condition": "property employs 3 or more regular or live-in domestic staff",
            "implies": "both statutory workers' comp exposure and EPLI exposure are active, not just one"
          },
          {
            "condition": "household staff travel with the family across multiple properties/jurisdictions",
            "implies": "a multi-state workers' comp endorsement, not a single-state policy, is required"
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "environmental_pollution_liability",
        "label": "Environmental / Pollution Legal Liability",
        "trigger_type": "asset",
        "line_of_business": "Casualty",
        "is_new": true,
        "required_baseline_limit": "$1,000,000-$5,000,000 \u2014 reasoning: standard HO/high-value-property and premises_liability forms carry an absolute pollution exclusion, yet UHNW estates (especially older Northeast coastal properties) commonly retain aboveground/underground heating-oil storage tanks, septic systems, or, for waterfront/marina-adjacent properties, fuel-dock infrastructure \u2014 any of which can trigger six-to-seven-figure remediation costs under state environmental-cleanup statutes from a single leak.",
        "baseline_limit_usd": 3000000,
        "baseline_limit_by_tier": null,
        "statutory_triggers": [
          {
            "jurisdiction": "Massachusetts",
            "condition": "a release of oil or hazardous material occurs on the property (e.g., an underground/aboveground heating-oil tank leak)",
            "requirement": "Massachusetts Chapter 21E imposes strict, joint-and-several liability on the property owner for the full remediation cost, regardless of fault"
          },
          {
            "jurisdiction": "United States (federal)",
            "condition": "a release of a CERCLA-listed hazardous substance occurs on the property",
            "requirement": "CERCLA (Superfund) imposes strict liability on the current property owner for remediation cost, independent of who caused the original contamination"
          }
        ],
        "sub_limit_exclusions": [
          "Standard premises_liability and high_value_property forms carry an ABSOLUTE pollution exclusion \u2014 this coverage exists specifically to buy back that exclusion for scheduled, known pollution conditions (e.g., a disclosed heating-oil tank)",
          "Pre-existing/known contamination at time of policy inception is typically excluded unless specifically scheduled and underwritten",
          "Gradual seepage occurring across multiple policy periods can trigger multi-policy allocation disputes and prorated coverage"
        ],
        "cascade_rules": [
          {
            "condition": "property has an aboveground or underground heating-oil storage tank, a septic system, or a private fuel dock",
            "implies": "environmental_pollution_liability is a genuine, non-optional gap check, not a discretionary upsell"
          }
        ],
        "note": ""
      }
    ],
    "auto": [
      {
        "coverage_type_id": "agreed_value_fleet",
        "label": "Agreed Value Fleet",
        "trigger_type": "asset",
        "line_of_business": "Personal Lines",
        "is_new": false,
        "required_baseline_limit": "Per-vehicle agreed value equal to current fair market/collector value at binding, established via independent appraisal, a recognized price guide (Hagerty Price Guide), or a recent comparable auction result; aggregate fleet limit = the sum of the schedule, with no blanket 'average value' clause diluting any single vehicle's payout. Individual collector vehicles in this tier commonly run $250,000-$20,000,000+ (record sale: a 1962 Ferrari 250 GTO at $51.7M, 2018) \u2014 the schedule itself is the real limit, not a fixed dollar target. No auto-specific rate index exists in this project's sourced GWP_RateTrend_Table (agreed_value_fleet is carried at +3.0% [NO SOURCE FOUND \u2014 ESTIMATE]); the closest sourced casualty-adjacent comparator is Marsh GIMI Q2 2026 US Casualty +7%.",
        "baseline_limit_usd": 250000,
        "baseline_limit_by_tier": null,
        "statutory_triggers": [
          {
            "jurisdiction": "multiple US states (varies)",
            "condition": "vehicle is registered under a state antique/collector/classic-vehicle plate classification (typically requires the vehicle be a minimum age, e.g. 25+ years, and restricts use as primary daily transportation)",
            "requirement": "carriers commonly condition agreed-value/stated-value collector-car rating on maintaining this registration class and its usage restriction \u2014 losing the classification can void the agreed-value basis"
          }
        ],
        "sub_limit_exclusions": [
          {
            "category": "exclusion",
            "detail": "war and nuclear exclusion (standard market form)"
          },
          {
            "category": "exclusion",
            "detail": "wear-and-tear / mechanical breakdown excluded \u2014 this is a physical-damage policy, not a warranty"
          },
          {
            "category": "exclusion",
            "detail": "racing / organized competitive-event exclusion unless track_day_competition_use is separately endorsed"
          },
          {
            "category": "condition",
            "detail": "mileage/pleasure-use restriction \u2014 commercial or daily-driver use can breach the agreed-value basis"
          },
          {
            "category": "exclusion",
            "detail": "unattended-vehicle theft exclusion where keys are left in or the vehicle is left unlocked"
          },
          {
            "category": "sub_limit",
            "detail": "aftermarket modifications/upgrades sublimited unless separately scheduled and appraised"
          }
        ],
        "cascade_rules": [
          {
            "condition": "aggregate scheduled fleet value exceeds $10,000,000 or the schedule includes 10+ vehicles",
            "implies": "excess_umbrella_liability above the auto liability limit becomes necessary, and a dedicated storage facility (garage_keepers, or premises_liability from the real_estate vertical if owner-operated) is very likely already in play"
          },
          {
            "condition": "schedule includes any vehicle intended for track/HPDE/competition use",
            "implies": "track_day_competition_use coverage is required \u2014 the standard agreed-value policy's racing exclusion leaves that use uninsured otherwise"
          },
          {
            "condition": "a scheduled vehicle is sent to a third-party shop for restoration or major mechanical work",
            "implies": "restoration_work_in_progress coverage is likely needed to fill the gap most agreed-value policies leave for disassembled/in-process vehicles"
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "transit",
        "label": "Transit",
        "trigger_type": "activity",
        "line_of_business": "Personal Lines",
        "is_new": false,
        "required_baseline_limit": "Per-occurrence inland transit limit should equal the highest-value single load likely to move at once \u2014 an enclosed multi-car trailer carrying 2-4 collection vehicles can exceed $5,000,000-$10,000,000 in a single conveyance. Confirm the carrier's per-conveyance sublimit isn't silently capped below the load's actual value, a common gap when a vehicle is added to an existing schedule but the transit sublimit is never re-checked. No auto-specific rate index exists in the sourced GWP_RateTrend_Table (transit carried at +3.0% [NO SOURCE FOUND \u2014 ESTIMATE]).",
        "baseline_limit_usd": 5000000,
        "baseline_limit_by_tier": null,
        "statutory_triggers": [
          {
            "jurisdiction": "US Customs (federal)",
            "condition": "vehicle is exported from or imported into the US for an overseas concours, auction, or event appearance",
            "requirement": "a Temporary Importation Bond (TIB) or carnet de passage, plus proof of adequate transit/cargo insurance, is typically required as a condition of customs clearance"
          }
        ],
        "sub_limit_exclusions": [
          {
            "category": "sub_limit",
            "detail": "per-conveyance sublimit can sit below the schedule's aggregate value for multi-vehicle enclosed-trailer loads"
          },
          {
            "category": "condition",
            "detail": "open-carrier transport commonly carries a lower sublimit or rate surcharge versus enclosed-carrier transport"
          },
          {
            "category": "exclusion",
            "detail": "loading/unloading damage excluded when performed outside a licensed, insured commercial carrier"
          },
          {
            "category": "exclusion",
            "detail": "domestic inland transit does not extend to an ocean leg \u2014 international shipment requires a separate marine cargo policy"
          }
        ],
        "cascade_rules": [
          {
            "condition": "vehicle is shipped overseas for a concours or auction (e.g., Pebble Beach, Concorso d'Eleganza, Villa d'Este)",
            "implies": "a dedicated marine cargo/ocean transit policy and customs bonding are likely needed \u2014 domestic inland transit does not respond across an ocean leg"
          },
          {
            "condition": "transit is arranged for an event appearance rather than a sale or permanent relocation",
            "implies": "a show/exhibition liability arrangement at the destination venue may also be needed for the period the vehicle sits off its scheduled storage location"
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "garage_keepers",
        "label": "Garage Keepers",
        "trigger_type": "activity",
        "line_of_business": "Casualty",
        "is_new": false,
        "required_baseline_limit": "Limit should equal the highest aggregate value of any single third-party vehicle likely to be in the facility's care at one time, not the facility's own fleet value; for a private collection facility that also stores or restores vehicles for other UHNW owners, $5,000,000+ per-vehicle / $25,000,000+ aggregate is a defensible starting point given individual collector cars now routinely exceed $1,000,000. Sourced rate context: Marsh GIMI Q2 2026 US Casualty +7% (garage_keepers is already modeled as casualty-adjacent in this project's own rate table).",
        "baseline_limit_usd": 5000000,
        "baseline_limit_by_tier": null,
        "statutory_triggers": [
          {
            "jurisdiction": "multiple US states (e.g., California, Texas)",
            "condition": "facility operates as a licensed motor vehicle repair or body-repair dealer handling customer-owned vehicles",
            "requirement": "state motor-vehicle-repair licensing statutes commonly require the facility to hold a surety bond and/or garage liability insurance as a condition of licensure"
          }
        ],
        "sub_limit_exclusions": [
          {
            "category": "structure",
            "detail": "typically written on a legal-liability basis (responds only where the facility is legally liable) rather than direct primary/direct excess, which pay regardless of fault \u2014 confirm which basis is bound"
          },
          {
            "category": "rationale",
            "detail": "exists because standard CGL excludes property in the insured's care, custody, or control \u2014 a customer's vehicle on the lot falls squarely into that gap"
          },
          {
            "category": "sub_limit",
            "detail": "theft sublimit reduced or excluded absent a warranted alarm/security system"
          },
          {
            "category": "exclusion",
            "detail": "does not cover vehicles owned by the facility operator itself \u2014 that stays on agreed_value_fleet"
          }
        ],
        "cascade_rules": [
          {
            "condition": "the facility stores or restores vehicles for other UHNW owners, not just the account holder's own collection",
            "implies": "the facility is operating as a commercial third-party bailee \u2014 premises_liability (real_estate vertical) plus a commercial general liability policy are likely also needed beyond garage_keepers alone"
          },
          {
            "condition": "the facility performs restoration work, not just storage",
            "implies": "restoration_work_in_progress coverage on each customer's vehicle is the owner-side complement to the facility's garage_keepers liability"
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "auto_liability",
        "label": "Auto Liability (Bodily Injury & Property Damage)",
        "trigger_type": "activity",
        "line_of_business": "Personal Lines",
        "is_new": true,
        "required_baseline_limit": "State financial-responsibility statutes set the legal floor (historically $10,000-$25,000 BI/person in most states; California raised its minimum to $30,000/$60,000/$15,000 effective January 1, 2025 under AB 2422, its first increase since 1967) \u2014 but this floor is grossly inadequate for a UHNW driver operating a multi-million-dollar collection car on public roads. Recommended UHNW baseline: $1,000,000 combined single limit (CSL) per vehicle at minimum, structured to sit directly beneath a $10,000,000+ personal excess/umbrella program (see excess_umbrella_liability) rather than relying on statutory minimums. No auto-liability-specific index exists in this project's sourced GWP_RateTrend_Table; the closest sourced comparator is Marsh GIMI Q2 2026 US Casualty +7%.",
        "baseline_limit_usd": 1000000,
        "baseline_limit_by_tier": null,
        "statutory_triggers": [
          {
            "jurisdiction": "all US states (financial responsibility laws)",
            "condition": "vehicle is titled/registered and operated on public roads",
            "requirement": "minimum liability insurance, or an approved self-insurance/bond alternative, is a condition of registration and lawful operation \u2014 e.g., Florida Stat. \u00a7324.022, California Vehicle Code \u00a716056"
          },
          {
            "jurisdiction": "California",
            "condition": "vehicle registered or operated in California on or after January 1, 2025",
            "requirement": "minimum liability limits raised under AB 2422 to $30,000 bodily injury/person, $60,000/accident, $15,000 property damage"
          },
          {
            "jurisdiction": "Florida",
            "condition": "vehicle owned and operated in Florida",
            "requirement": "Personal Injury Protection (PIP) of at least $10,000 is mandatory under Florida's no-fault law, Fla. Stat. \u00a7627.736, regardless of the BI/PD liability limit carried"
          }
        ],
        "sub_limit_exclusions": [
          {
            "category": "exclusion",
            "detail": "racing / organized competitive-event use excluded \u2014 see track_day_competition_use"
          },
          {
            "category": "exclusion",
            "detail": "livery, rideshare, or other commercial/for-hire use excluded unless specifically endorsed"
          },
          {
            "category": "sub_limit",
            "detail": "PIP carried at the no-fault statutory minimum (e.g., Florida's $10,000) unless separately increased"
          },
          {
            "category": "exclusion",
            "detail": "intentional acts and criminal use excluded"
          }
        ],
        "cascade_rules": [
          {
            "condition": "auto liability limit is written above $1,000,000 CSL",
            "implies": "excess_umbrella_liability should follow-form above it rather than the household relying on auto_liability alone for catastrophic exposure"
          },
          {
            "condition": "the vehicle is ever used for track/HPDE/competition events",
            "implies": "standard auto_liability carries a racing exclusion \u2014 track_day_competition_use liability is required for that specific activity"
          },
          {
            "condition": "household has K&R exposure or high public visibility (see the 'personal' vertical's kr/exec_do entries)",
            "implies": "auto liability and UM/UIM limits are typically set at the top of the recommended range rather than the floor, since a driving-related incident is a common flashpoint for both liability and security exposure"
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "uninsured_underinsured_motorist",
        "label": "Uninsured/Underinsured Motorist (UM/UIM)",
        "trigger_type": "activity",
        "line_of_business": "Personal Lines",
        "is_new": true,
        "required_baseline_limit": "Should match the underlying auto_liability limit dollar-for-dollar \u2014 a common carrier condition and, in several states, a statutory cap on UM/UIM relative to the BI limit \u2014 e.g. $1,000,000 CSL where auto_liability is written at $1,000,000 CSL. Statutory floors are far lower and easy to under-notice: Florida requires only that UM be OFFERED, not carried (Fla. Stat. \u00a7627.727) \u2014 a rejected or unsigned waiver form defaults coverage OUT, a gap UHNW households commonly don't realize they've created.",
        "baseline_limit_usd": 1000000,
        "baseline_limit_by_tier": null,
        "statutory_triggers": [
          {
            "jurisdiction": "Florida",
            "condition": "personal auto liability policy is issued or renewed",
            "requirement": "insurer must OFFER UM/UIM coverage in writing (Fla. Stat. \u00a7627.727); absent a written rejection, UM is deemed included at the BI liability limit"
          },
          {
            "jurisdiction": "New York",
            "condition": "any auto liability policy issued in New York",
            "requirement": "UM coverage is compulsory, not merely offered, at a statutory minimum, per NY Insurance Law \u00a73420"
          }
        ],
        "sub_limit_exclusions": [
          {
            "category": "sub_limit",
            "detail": "capped at the insured's own BI liability limit in most states"
          },
          {
            "category": "condition",
            "detail": "stacking vs. non-stacking treatment varies by state and materially changes the effective per-loss limit across a multi-vehicle household"
          },
          {
            "category": "exclusion",
            "detail": "hit-and-run without physical contact excluded absent a timely police report in many states"
          },
          {
            "category": "exclusion",
            "detail": "anti-stacking provisions can bar a claim against a household member's own separate liability policy"
          }
        ],
        "cascade_rules": [
          {
            "condition": "account is in a mandatory-offer state (e.g., Florida) and no signed rejection form is on file",
            "implies": "UM coverage may already be silently bound at the BI liability limit \u2014 confirm the actual elected limit rather than assuming it matches auto_liability"
          },
          {
            "condition": "auto_liability limit increases (e.g., to follow an excess_umbrella_liability placement)",
            "implies": "UM/UIM limit should be raised in lockstep, since several states statutorily cap UM at the BI limit"
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "excess_umbrella_liability",
        "label": "Excess/Umbrella Liability",
        "trigger_type": "person",
        "line_of_business": "Excess/Umbrella Liability",
        "is_new": true,
        "required_baseline_limit": "$10,000,000 minimum sitting above the underlying auto liability (and homeowners/watercraft) limits, scaling to $25,000,000-$50,000,000+ for high-profile or high-net-worth households with multiple owned/operated vehicles, domestic staff exposure, and public visibility \u2014 consistent with standard UHNW personal umbrella placement practice (e.g., Chubb, PURE, AIG Private Client Group tiers). No sourced rate index exists for this line in the project's GWP_RateTrend_Table; the closest sourced comparator is Marsh GIMI Q2 2026 global Casualty +2% (the figure this project already uses for exec_do, another casualty-adjacent excess line).",
        "baseline_limit_usd": 10000000,
        "baseline_limit_by_tier": null,
        "statutory_triggers": [],
        "sub_limit_exclusions": [
          {
            "category": "structure",
            "detail": "follows-form to the underlying auto_liability policy's exclusions \u2014 it does not broaden coverage, only raises the limit"
          },
          {
            "category": "condition",
            "detail": "requires the scheduled underlying limits to be maintained continuously as a condition of the umbrella responding"
          },
          {
            "category": "exclusion",
            "detail": "excludes business/commercial vehicle use unless specifically scheduled"
          },
          {
            "category": "condition",
            "detail": "drop-down applies only where an underlying limit is exhausted by a covered loss, not where underlying coverage was never purchased at all"
          }
        ],
        "cascade_rules": [
          {
            "condition": "household already carries a personal umbrella from the 'personal' vertical (e.g., alongside kr/exec_do placements)",
            "implies": "the auto excess_umbrella_liability layer should be coordinated as one program (same carrier/tower) with the household's broader personal umbrella rather than duplicated as a standalone auto-only policy"
          },
          {
            "condition": "the household operates more than one asset class (yacht, aviation, real_estate) alongside the auto collection",
            "implies": "a single coordinated excess liability tower spanning all owned assets is standard UHNW practice, rather than siloed per-vertical umbrellas"
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "track_day_competition_use",
        "label": "Track Day / Competition Use",
        "trigger_type": "activity",
        "line_of_business": "Personal Lines",
        "is_new": true,
        "required_baseline_limit": "Physical damage limit = the vehicle's agreed value as carried on the primary agreed_value_fleet schedule (this policy exists to reinstate that value for track use, not create a new number); liability sublimit commonly $1,000,000-$5,000,000 per event, since most circuit/HPDE organizers already require participants to carry $1,000,000 minimum liability and/or name the track as additional insured. No sourced rate index exists for this line in the project's GWP_RateTrend_Table \u2014 an explicit gap, not an oversight, since it is the coverage type most directly implicated by the vertical's stated 'track/competition use' scope.",
        "baseline_limit_usd": 1000000,
        "baseline_limit_by_tier": null,
        "statutory_triggers": [],
        "sub_limit_exclusions": [
          {
            "category": "exclusion",
            "detail": "excludes professional or sanctioned racing series (SCCA, IMSA, etc.) which require a full standalone motorsport policy"
          },
          {
            "category": "structure",
            "detail": "written per-event/per-day, not as continuous coverage"
          },
          {
            "category": "exclusion",
            "detail": "spectator/bystander injury is often carved out to the event organizer's own liability policy rather than this rider"
          },
          {
            "category": "exclusion",
            "detail": "excludes wagering, prize competitions, and time-trial results-based payouts"
          }
        ],
        "cascade_rules": [
          {
            "condition": "account holder or a listed driver holds a competition license or an instructor/judging role (see Track Day/HPDE Instructor, Class Judge, Selection Committee Member in the auto role taxonomy)",
            "implies": "a standalone motorsport participant accident/liability policy is likely needed beyond this rider, since sanctioning bodies (SCCA, NASA, PCA) often require their own minimum liability separate from personal auto"
          },
          {
            "condition": "the vehicle used on-track is also the daily-scheduled agreed_value_fleet vehicle",
            "implies": "confirm the agreed_value_fleet policy's racing exclusion is specifically endorsed back in for the track dates, rather than relying on this policy alone for physical damage"
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "spare_parts_automobilia",
        "label": "Spare Parts & Automobilia",
        "trigger_type": "asset",
        "line_of_business": "Personal Lines",
        "is_new": true,
        "required_baseline_limit": "Scheduled at appraised replacement value; as a rule of thumb for pre-war/scarce-parts marques, budget 10-20% of the vehicle's agreed value in spare engines, parts, and automobilia inventory for a high-value restoration collection \u2014 scale the sublimit to the actual appraised schedule once inventory is documented, not to a flat percentage assumption. No sourced rate index exists for this line in the project's GWP_RateTrend_Table.",
        "baseline_limit_usd": 40000,
        "baseline_limit_by_tier": null,
        "statutory_triggers": [],
        "sub_limit_exclusions": [
          {
            "category": "condition",
            "detail": "named-peril only (fire/theft) if stored outside a secured, climate-controlled facility"
          },
          {
            "category": "sub_limit",
            "detail": "limited to a percentage of the associated vehicle's agreed value unless the parts/automobilia are separately scheduled and appraised"
          },
          {
            "category": "exclusion",
            "detail": "excludes mechanical breakdown/wear to stored parts"
          },
          {
            "category": "exclusion",
            "detail": "parts in transit are excluded here \u2014 covered instead under the transit coverage type"
          }
        ],
        "cascade_rules": [
          {
            "condition": "collection includes pre-war or scarce-parts marques (e.g., pre-1940 vehicles) where OEM parts are no longer manufactured",
            "implies": "parts/engine inventory value can approach or exceed 20% of the vehicle's agreed value and needs independent appraisal, not a flat percentage assumption"
          },
          {
            "condition": "spare parts are stored at the same facility as the vehicles",
            "implies": "garage_keepers or the facility's premises coverage should explicitly confirm parts/automobilia aren't silently excluded from that policy's definition of 'vehicle'"
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "restoration_work_in_progress",
        "label": "Restoration / Work-in-Progress",
        "trigger_type": "asset",
        "line_of_business": "Personal Lines",
        "is_new": true,
        "required_baseline_limit": "Limit should track cumulative cost-to-date (purchase price plus parts and labor invested) reported at each renewal or project milestone, converging on the projected completed agreed value at project end \u2014 typically written as a reporting-form policy rather than a flat limit, since a vehicle mid-restoration is worth a fraction of its finished value until the work is done. No sourced rate index exists for this line in the project's GWP_RateTrend_Table.",
        "baseline_limit_usd": 125000,
        "baseline_limit_by_tier": null,
        "statutory_triggers": [],
        "sub_limit_exclusions": [
          {
            "category": "exclusion",
            "detail": "excludes faulty workmanship or defective restoration itself \u2014 covers fire/theft/collision to the work-in-progress, not the quality of the work performed"
          },
          {
            "category": "structure",
            "detail": "sublimit scales with reported cost-to-date, not the projected finished value"
          },
          {
            "category": "condition",
            "detail": "time-limited \u2014 coverage can lapse if the project exceeds the policy's reporting period (commonly 60-90 days) without an updated cost report"
          },
          {
            "category": "transition",
            "detail": "excludes the vehicle once restoration is complete \u2014 it must transition back onto agreed_value_fleet at that point"
          }
        ],
        "cascade_rules": [
          {
            "condition": "a vehicle scheduled under agreed_value_fleet is sent out for restoration exceeding the policy's standard 'disassembled' time limit (commonly 60-90 days)",
            "implies": "restoration_work_in_progress coverage is very likely required to avoid a coverage gap on that specific vehicle"
          },
          {
            "condition": "restoration is performed at a third-party shop rather than an owner-controlled facility",
            "implies": "the shop's own garage_keepers liability and this owner-side restoration_work_in_progress coverage are complementary, not redundant \u2014 confirm which one responds first for a given loss type"
          }
        ],
        "note": ""
      }
    ],
    "personal": [
      {
        "coverage_type_id": "kr",
        "label": "Kidnap & Ransom (K&R)",
        "trigger_type": "person",
        "line_of_business": "Crime",
        "is_new": false,
        "required_baseline_limit": "$5,000,000 minimum aggregate per policy period, scaling to $25M+ for principals with elevated threat profile (public figures, family offices with international operations, or net worth >$500M). Retail K&R placements for UHNW families (Chubb/AIG/Hiscox) typically start at $1M-$5M primary with excess layers available to $50M+; families with travel/business exposure in OSAC high-risk jurisdictions typically carry $10M-$25M.",
        "baseline_limit_usd": 5000000,
        "baseline_limit_by_tier": null,
        "statutory_triggers": [
          {
            "jurisdiction": "United States (Federal)",
            "condition": "A ransom or extortion payment would go to an OFAC Specially Designated National, an embargoed jurisdiction, or a group providing material support to terrorism under 18 U.S.C. \u00a72339B",
            "requirement": "Payment is prohibited under OFAC sanctions regulations and federal anti-terrorism-financing law regardless of policy terms; the insurer requires sanctions clearance before indemnifying any ransom payment, and claims involving a prohibited recipient are void"
          }
        ],
        "sub_limit_exclusions": [
          {
            "type": "sub-limit",
            "detail": "Crisis-response/PR consultancy costs are typically sub-limited (commonly low hundreds of thousands) separately from the primary ransom/extortion limit"
          },
          {
            "type": "sub-limit",
            "detail": "Legal liability and reward-payment provisions carry their own sub-limits distinct from the core K&R indemnity"
          },
          {
            "type": "exclusion",
            "detail": "War between major powers and nuclear/biological/chemical event exclusion, standard market-wide"
          },
          {
            "type": "exclusion",
            "detail": "Prior knowledge of a specific threat existing before policy inception"
          },
          {
            "type": "exclusion",
            "detail": "Ransom paid without prior insurer notification/consent is typically not reimbursable"
          },
          {
            "type": "exclusion",
            "detail": "Fraudulent, dishonest, or criminal acts of the insured or a person acting on the insured's behalf"
          }
        ],
        "cascade_rules": [
          {
            "condition": "K&R policy is bound for a principal",
            "implies": "An Executive Protection Agent / Director of Protective Services role is likely already engaged (role taxonomy category 'Operations & Crew') \u2014 check for existing protective staff before treating this as a standalone coverage decision"
          },
          {
            "condition": "Family maintains K&R coverage",
            "implies": "travel_medical_evacuation is typically a bundled crisis-response rider, but its evacuation sub-limit should be checked independently \u2014 it is often inadequate standalone for the family's actual travel pattern"
          },
          {
            "condition": "Principal travels to or operates business in an OFAC-sanctioned or OSAC high-risk jurisdiction",
            "implies": "A sanctions/compliance review is required before binding \u2014 standard K&R limits, and even claims payment itself, may be void without it"
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "exec_do",
        "label": "Executive D&O",
        "trigger_type": "entity",
        "line_of_business": "Executive/Management Liability",
        "is_new": false,
        "required_baseline_limit": "$5,000,000-$10,000,000 primary, with excess/DIC towers to $25M-$50M for principals sitting on multiple boards (operating companies, private foundations, family investment vehicles) \u2014 sized to the number of fiduciary seats held and the litigation profile of each entity, consistent with private-company D&O placement practice for closely-held family enterprises.",
        "baseline_limit_usd": 5000000,
        "baseline_limit_by_tier": null,
        "statutory_triggers": [
          {
            "jurisdiction": "United States (Federal, IRC)",
            "condition": "Principal or family member serves as a director/officer/manager of a private family foundation",
            "requirement": "IRC \u00a74941 imposes a personal excise tax on foundation managers for self-dealing transactions; standard commercial D&O frequently excludes tax penalties, so a nonprofit/foundation-specific D&O endorsement is required to respond to this exposure"
          }
        ],
        "sub_limit_exclusions": [
          {
            "type": "exclusion",
            "detail": "Prior acts/prior knowledge exclusion tied to the policy's retroactive date"
          },
          {
            "type": "exclusion",
            "detail": "Insured-vs-insured exclusion (claims between family principals or entities within the same structure)"
          },
          {
            "type": "exclusion",
            "detail": "Fraud/dishonesty exclusion, applicable only upon final adjudication, not mere allegation"
          },
          {
            "type": "exclusion",
            "detail": "Bodily injury/property damage is routed to general/excess liability rather than D&O"
          },
          {
            "type": "sub-limit",
            "detail": "Punitive damages coverage is state-dependent; several states restrict insurability of punitive damages absent specific policy wording"
          },
          {
            "type": "sub-limit",
            "detail": "Side A (non-indemnifiable loss) is frequently structured with a separate sub-limit or tower from Side B/C"
          }
        ],
        "cascade_rules": [
          {
            "condition": "Family office manages capital for anyone outside the immediate family (not exclusively family assets)",
            "implies": "family_office_fiduciary_liability is likely required in addition to D&O \u2014 SEC/state Registered Investment Adviser status typically triggers this distinct exposure"
          },
          {
            "condition": "Principal sits on a private foundation board",
            "implies": "A nonprofit/foundation D&O endorsement and family_office_fiduciary_liability should both be reviewed for IRC \u00a74941 self-dealing exposure \u2014 ordinary commercial D&O usually does not respond"
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "cyber_crime",
        "label": "Cyber Crime",
        "trigger_type": "entity",
        "line_of_business": "Crime",
        "is_new": false,
        "required_baseline_limit": "$3,000,000-$5,000,000 minimum for entity-level crime (employee theft, funds-transfer fraud, social-engineering/business email compromise, forgery) at the family office \u2014 sized to annual outbound wire volume; family offices processing more than roughly $50M/year in wire transfers typically carry $10M+.",
        "baseline_limit_usd": 3000000,
        "baseline_limit_by_tier": null,
        "statutory_triggers": [],
        "sub_limit_exclusions": [
          {
            "type": "sub-limit",
            "detail": "Social-engineering/funds-transfer fraud (business email compromise) is standard-market sub-limited well below the primary crime limit, commonly to a fraction of it"
          },
          {
            "type": "sub-limit",
            "detail": "Cryptocurrency/virtual currency loss is typically excluded or minimally sub-limited"
          },
          {
            "type": "exclusion",
            "detail": "Collusion exclusion \u2014 acts committed by an owner, principal, or the family itself"
          },
          {
            "type": "exclusion",
            "detail": "Loss not discovered and reported within the policy's discovery period \u2014 crime forms are discovery-based, not claims-made or occurrence"
          }
        ],
        "cascade_rules": [
          {
            "condition": "Family office processes wire transfers or bill-pay on behalf of family members",
            "implies": "The standard social-engineering/funds-transfer-fraud sub-limit is almost certainly inadequate \u2014 negotiate an enhanced sub-limit or standalone endorsement"
          },
          {
            "condition": "Family office employs bookkeeping/accounting staff with check-signing or wire authority",
            "implies": "Employee-dishonesty/fidelity-bond coverage within this policy should be cross-checked against actual segregation-of-duties controls"
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "blanket_personal_articles",
        "label": "Blanket Personal Articles",
        "trigger_type": "person",
        "line_of_business": "Personal Lines",
        "is_new": false,
        "required_baseline_limit": "Scaled to a written schedule \u2014 typically 1-2% of total insured net worth for jewelry/watches/furs/silver, with individual items above roughly $50,000-$100,000 requiring their own appraisal-backed line rather than sitting in the blanket bucket. Unscheduled blanket limits for UHNW households commonly run $250,000-$1,000,000 with per-item caps of $10,000-$25,000 absent a schedule.",
        "baseline_limit_usd": 250000,
        "baseline_limit_by_tier": null,
        "statutory_triggers": [],
        "sub_limit_exclusions": [
          {
            "type": "sub-limit",
            "detail": "Standard homeowners policies cap unscheduled jewelry/furs/silverware/firearms at a low sub-limit, commonly $1,000-$2,500 \u2014 the core reason a blanket/scheduled valuables floater exists"
          },
          {
            "type": "exclusion",
            "detail": "Mysterious disappearance is not automatically covered on a standard homeowners policy and requires a valuable-articles floater endorsement"
          },
          {
            "type": "exclusion",
            "detail": "Wear and tear, gradual deterioration, and inherent vice"
          },
          {
            "type": "exclusion",
            "detail": "War and nuclear exclusion, standard"
          },
          {
            "type": "sub-limit",
            "detail": "Pairs-and-sets clause limits recovery to the proportional value of a lost item from a matched set rather than the full set's value"
          }
        ],
        "cascade_rules": [
          {
            "condition": "Any single scheduled item exceeds roughly $250,000-$500,000 in appraised value",
            "implies": "The item likely warrants its own agreed-value rider with a recurring 3-5 year appraisal cadence rather than sitting inside the blanket schedule"
          },
          {
            "condition": "Household owns fine art in addition to jewelry/watches",
            "implies": "fine_art_scheduled (separate vertical) is likely also needed \u2014 fine art requires its own valuation cadence and situs-specific coverage distinct from personal articles"
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "personal_excess_liability",
        "label": "Personal Excess/Umbrella Liability",
        "trigger_type": "person",
        "line_of_business": "Personal Lines / Excess Liability",
        "is_new": true,
        "required_baseline_limit": "$25,000,000-$50,000,000 minimum sitting above underlying auto/homeowners/watercraft liability, scaling with net worth \u2014 UHNW excess-liability placement convention (PURE, Chubb, AIG Private Client) generally targets total liability limits roughly proportionate to net worth for high litigation-exposure households, with $50M-$100M+ towers common above roughly $250M net worth.",
        "baseline_limit_usd": 25000000,
        "baseline_limit_by_tier": null,
        "statutory_triggers": [],
        "sub_limit_exclusions": [
          {
            "type": "exclusion",
            "detail": "Business pursuits/professional liability excluded \u2014 requires separate E&O"
          },
          {
            "type": "exclusion",
            "detail": "Liability arising from watercraft over a stated length or aircraft is typically excluded or capped, requiring separate marine/aviation liability scheduling"
          },
          {
            "type": "sub-limit",
            "detail": "Uninsured/underinsured motorist coverage is often sub-limited well below the stated umbrella liability limit"
          },
          {
            "type": "sub-limit",
            "detail": "Punitive damages coverage is state-dependent on insurability"
          },
          {
            "type": "exclusion",
            "detail": "Intentional acts / assault & battery exclusion \u2014 relevant given household security-staff exposure"
          }
        ],
        "cascade_rules": [
          {
            "condition": "Household owns a yacht over roughly 26ft or an aircraft",
            "implies": "Personal excess liability typically excludes or caps marine and aviation liability \u2014 hull_machinery/liability_protection (yacht) or aviation_liability (aviation) scheduling is required to avoid a gap between the underlying and excess layers"
          },
          {
            "condition": "Household employs domestic staff, security personnel, or a private chauffeur",
            "implies": "domestic_staff_epli and household_workers_comp exposure exists \u2014 excess liability alone does not respond to employment-related claims"
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "domestic_staff_epli",
        "label": "Domestic Staff Employment Practices Liability (EPLI)",
        "trigger_type": "entity",
        "line_of_business": "Executive/Management Liability",
        "is_new": true,
        "required_baseline_limit": "$1,000,000-$3,000,000 per claim/aggregate, sized to domestic staff headcount \u2014 households with 5+ FTE staff (estate manager, chauffeur, security detail, household staff) typically carry $2M-$5M given the frequency of wrongful-termination, harassment, and wage-and-hour claims against high-net-worth employers, which carry outsized reputational and settlement severity relative to headcount.",
        "baseline_limit_usd": 1000000,
        "baseline_limit_by_tier": null,
        "statutory_triggers": [
          {
            "jurisdiction": "California",
            "condition": "Household employs domestic workers meeting the California Domestic Worker Bill of Rights (AB 241, 2013) thresholds",
            "requirement": "Overtime and meal/rest-break requirements apply to the household as employer, creating the wage-and-hour claim exposure EPLI is underwritten against"
          },
          {
            "jurisdiction": "New York",
            "condition": "Household employs one or more domestic workers",
            "requirement": "New York Domestic Workers' Bill of Rights (2010) grants overtime, day-of-rest, and anti-harassment protections enforceable against the household as employer"
          },
          {
            "jurisdiction": "United States (Federal)",
            "condition": "Household employs domestic staff and pays wages above the annual IRS 'nanny tax' threshold",
            "requirement": "FLSA companionship-services provisions and IRS Schedule H (Household Employment Taxes) obligations apply; worker misclassification under these rules underlies most EPLI wage-and-hour claims"
          }
        ],
        "sub_limit_exclusions": [
          {
            "type": "sub-limit",
            "detail": "Punitive damages coverage is state-dependent on insurability"
          },
          {
            "type": "sub-limit",
            "detail": "Claims involving alleged criminal conduct or sexual misconduct often carry a separate, lower defense-only sub-limit"
          },
          {
            "type": "sub-limit",
            "detail": "Third-party EPLI (claims by non-employees such as vendors or guests alleging discrimination) is often a lower sub-limit or requires a separate endorsement"
          },
          {
            "type": "sub-limit",
            "detail": "Wage-and-hour defense-cost coverage is frequently capped at its own sub-limit given how common and expensive these claims are"
          }
        ],
        "cascade_rules": [
          {
            "condition": "Household headcount of domestic staff exceeds roughly 3-5 FTE",
            "implies": "household_workers_comp and formal background screening (RoleTax_Personal's 'Background Screening & Vetting Provider' role) become materially more relevant \u2014 staff scale crosses from ad-hoc to institutional employer risk"
          },
          {
            "condition": "Household employs a security detail or executive protection agents",
            "implies": "EPLI intersects with kr's crisis-response coverage \u2014 use-of-force or termination-of-security-staff claims sit at the boundary of both policies and defense coordination should be checked"
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "household_workers_comp",
        "label": "Household/Domestic Staff Workers' Compensation",
        "trigger_type": "person",
        "line_of_business": "Workers' Compensation",
        "is_new": true,
        "required_baseline_limit": "Statutory minimum benefit level per the state of primary employment (workers' comp Part A is a statutorily-set benefit, not a negotiated limit), plus Employer's Liability (Coverage B) excess of $1,000,000-$2,000,000. UHNW households with multi-state staff (e.g., a Florida primary residence plus a Hamptons summer property) need coverage that follows staff across states or separate state-specific policies, since workers' comp is state-administered and non-transferable.",
        "baseline_limit_usd": 1000000,
        "baseline_limit_by_tier": null,
        "statutory_triggers": [
          {
            "jurisdiction": "Florida",
            "condition": "domestic staff headcount > 3",
            "requirement": "Florida workers' compensation coverage becomes mandatory"
          },
          {
            "jurisdiction": "New York",
            "condition": "Household employs a domestic worker for 40 or more hours per week for one employer",
            "requirement": "New York Workers' Compensation Law mandates coverage for domestic workers meeting this threshold \u2014 extended to part-time domestic workers under the state's 2010 Domestic Workers' Bill of Rights amendments"
          },
          {
            "jurisdiction": "California",
            "condition": "Household employs a domestic worker in excess of roughly 52 hours or $100 in wages within a 90-day period (the household-employer test used for CA UI/WC registration)",
            "requirement": "California requires workers' compensation coverage for household domestic employees meeting this threshold"
          }
        ],
        "sub_limit_exclusions": [
          {
            "type": "exclusion",
            "detail": "Independent-contractor misclassification is the most common gap \u2014 true 1099 contractors are not covered, and misclassifying household staff as contractors voids the intended protection"
          },
          {
            "type": "sub-limit",
            "detail": "Coverage B (Employer's Liability) carries a per-occurrence sub-limit distinct from the statutory Part A benefit, which is not capped"
          },
          {
            "type": "exclusion",
            "detail": "A single-state policy leaves staff who travel with the family to a second-home state uncovered absent an 'Other States' endorsement"
          },
          {
            "type": "exclusion",
            "detail": "Occupational disease/repetitive-stress claims are often subject to different statutory notice/time limits than acute injury"
          }
        ],
        "cascade_rules": [
          {
            "condition": "Household maintains staff across more than one state (e.g., seasonal residences)",
            "implies": "A single-state workers' comp policy is inadequate \u2014 an 'Other States' endorsement or separate state-specific policies are required, cross-checked against every real_estate asset's situs state"
          },
          {
            "condition": "Domestic staff headcount crosses the state's mandatory-coverage threshold",
            "implies": "domestic_staff_epli exposure typically rises in parallel \u2014 formalized employer status increases both claim types simultaneously"
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "family_office_fiduciary_liability",
        "label": "Family Office Fiduciary Liability / Investment Adviser E&O",
        "trigger_type": "entity",
        "line_of_business": "Executive/Management Liability",
        "is_new": true,
        "required_baseline_limit": "$5,000,000-$10,000,000 minimum, scaling with assets under management/advisement. For a family office registered as an SEC or state Registered Investment Adviser, limits are typically benchmarked against AUM and RIA E&O litigation-severity precedent rather than a flat figure; single-family offices exempt from RIA registration under the Family Offices Rule still carry comparable limits given equivalent investment-decision liability exposure to the family principals themselves.",
        "baseline_limit_usd": 5000000,
        "baseline_limit_by_tier": null,
        "statutory_triggers": [
          {
            "jurisdiction": "United States (Federal, SEC)",
            "condition": "Family office serves anyone outside the 'family clients' definition, or otherwise fails any prong of the Family Offices Rule",
            "requirement": "Loses its exemption under Investment Advisers Act \u00a7202(a)(11)(G) / Rule 202(a)(11)(G)-1 and must register as an RIA with the SEC, triggering Advisers Act fiduciary-duty and Form ADV disclosure obligations that materially raise E&O claim exposure"
          },
          {
            "jurisdiction": "United States (Federal, IRC)",
            "condition": "Family office administers a private family foundation and a manager engages in a self-dealing transaction",
            "requirement": "IRC \u00a74941 excise tax on self-dealing applies to foundation managers personally \u2014 a real exposure driver for fiduciary liability underwriting, distinct from ordinary D&O"
          }
        ],
        "sub_limit_exclusions": [
          {
            "type": "exclusion",
            "detail": "Prior-acts exclusion tied to the policy's retroactive date (claims-made form)"
          },
          {
            "type": "exclusion",
            "detail": "Insured-vs-insured exclusion (family members suing the family office)"
          },
          {
            "type": "exclusion",
            "detail": "Investment-performance exclusion \u2014 E&O never covers 'bad investment returns' per se, only process/fiduciary breach; a critical, frequently-misunderstood carve-out"
          },
          {
            "type": "sub-limit",
            "detail": "Regulatory-investigation defense costs are often sub-limited below the full liability limit"
          }
        ],
        "cascade_rules": [
          {
            "condition": "Family office loses its Family Office Rule exemption and registers as an RIA",
            "implies": "exec_do (D&O) alone is insufficient \u2014 full Investment Adviser E&O limits and regulatory-defense sub-limits must be re-underwritten against RIA-specific claim frequency"
          },
          {
            "condition": "Family office administers a private foundation or donor-advised structure",
            "implies": "IRC \u00a74941 self-dealing exposure exists \u2014 fiduciary liability limits should be reviewed alongside exec_do for foundation-specific endorsements"
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "travel_medical_evacuation",
        "label": "Emergency Medical Evacuation & Travel Security Assistance",
        "trigger_type": "person",
        "line_of_business": "Accident & Health / Travel",
        "is_new": true,
        "required_baseline_limit": "$1,000,000-$5,000,000 per person for medical evacuation/repatriation \u2014 commonly bundled as a rider to the K&R policy's crisis-response section, but frequently also purchased standalone for family members and staff whose travel exposure doesn't otherwise warrant full K&R limits. Sized to the most remote/high-risk destination in the family's actual travel pattern; expedition travel, conflict-adjacent regions, and medically underserved destinations all push toward the higher end.",
        "baseline_limit_usd": 1000000,
        "baseline_limit_by_tier": null,
        "statutory_triggers": [],
        "sub_limit_exclusions": [
          {
            "type": "exclusion",
            "detail": "Pre-existing condition exclusion, though buy-up waivers are commonly available"
          },
          {
            "type": "exclusion",
            "detail": "War/high-risk-destination exclusion unless specifically endorsed \u2014 a core reason to coordinate with kr's war/terrorism carve-back"
          },
          {
            "type": "sub-limit",
            "detail": "Search-and-rescue coverage is often capped well below the primary medical-evacuation limit for expedition/mountaineering scenarios"
          },
          {
            "type": "sub-limit",
            "detail": "Age-based sub-limits or exclusions apply for family members above a stated age threshold"
          }
        ],
        "cascade_rules": [
          {
            "condition": "Family travels to or through an OSAC high-risk or conflict-adjacent jurisdiction",
            "implies": "kr's crisis-response coverage and this coverage's evacuation limits should be reconciled \u2014 neither policy's war/terrorism exclusion should leave a gap the other was assumed to fill"
          },
          {
            "condition": "Family owns or charters aircraft for personal travel",
            "implies": "Aviation vertical's crew_accident/war_risk coverage typically addresses crew but not always family passengers \u2014 confirm passenger medical/evacuation coverage isn't wrongly assumed to be covered by the aviation policy alone"
          }
        ],
        "note": ""
      },
      {
        "coverage_type_id": "personal_cyber_liability",
        "label": "Personal Cyber Liability & Identity Theft",
        "trigger_type": "person",
        "line_of_business": "Personal Lines / Cyber",
        "is_new": true,
        "required_baseline_limit": "$1,000,000-$3,000,000 per household, covering identity-theft restoration, cyber extortion/ransomware against personal devices and smart-home systems, online fraud, and cyberbullying/reputational harm to family members. Distinct from cyber_crime's entity-level funds-transfer-fraud limit, this is priced and underwritten per household (Chubb Masterpiece Cyber, AIG Family CyberEdge, PURE Cyber all offer this as a standalone personal-lines endorsement).",
        "baseline_limit_usd": 1000000,
        "baseline_limit_by_tier": null,
        "statutory_triggers": [
          {
            "jurisdiction": "All 50 US states + DC",
            "condition": "A personal data breach exposing a family member's PII occurs",
            "requirement": "State data breach notification laws (first enacted by California SB 1386 in 2003, now universal across all states and DC) require notification to affected individuals and, in many states, to the state attorney general \u2014 driving the cost this coverage is underwritten to reimburse"
          }
        ],
        "sub_limit_exclusions": [
          {
            "type": "exclusion",
            "detail": "Cryptocurrency theft/loss from personal wallets is typically excluded or minimally sub-limited"
          },
          {
            "type": "sub-limit",
            "detail": "Smart-home/IoT device coverage is often a distinct, lower sub-limit from the core identity-theft/cyber-extortion limit"
          },
          {
            "type": "sub-limit",
            "detail": "Reputational-harm/cyberbullying coverage typically carries its own modest sub-limit as a newer, narrower insuring agreement"
          },
          {
            "type": "exclusion",
            "detail": "War/state-sponsored-actor exclusion \u2014 an increasingly live point of dispute in commercial cyber markets that personal cyber forms have followed with their own carve-backs"
          }
        ],
        "cascade_rules": [
          {
            "condition": "Family office or household maintains smart-home security/automation systems tied to the physical security program",
            "implies": "personal_cyber_liability intersects with the Physical Security Systems Integrator role (RoleTax_Personal) \u2014 a cyber-physical breach (disabled cameras/access control) sits at the boundary of this policy and the household's physical security program"
          },
          {
            "condition": "A family member holds a public-facing role or the family already carries kr coverage",
            "implies": "Elevated identity-theft/doxxing/cyberbullying exposure exists \u2014 personal_cyber_liability limits and reputational-harm sub-limits should scale with the same threat profile driving the kr limit"
          }
        ],
        "note": ""
      }
    ],
    "fine_art": [
      {
        "coverage_type_id": "fine_art_scheduled",
        "label": "Fine Art (Scheduled)",
        "trigger_type": "asset",
        "line_of_business": "Personal Lines",
        "is_new": false,
        "required_baseline_limit": "Scheduled item-by-item at current appraised/replacement value, typically $500,000-$25,000,000+ in aggregate for a genuine UHNW collection \u2014 no blanket cap, since the schedule itself IS the limit (brief \u00a76 item 6: fine art is its own asset class with a situs, not nested under Yacht). Reassessed at each renewal on a 3-5 year appraisal cadence, matching blanket_personal_articles' own re-appraisal convention for high-value scheduled items.",
        "baseline_limit_usd": 500000,
        "baseline_limit_by_tier": null,
        "statutory_triggers": [],
        "sub_limit_exclusions": [
          {
            "type": "exclusion",
            "detail": "Wear and tear, gradual deterioration, inherent vice, and restoration/repair damage excluded \u2014 this is a physical-loss policy, not a conservation warranty."
          },
          {
            "type": "exclusion",
            "detail": "War and nuclear exclusion, standard market-wide."
          },
          {
            "type": "condition",
            "detail": "Coverage is situs-specific to the scheduled location(s); an item moved to an unscheduled location (including aboard a yacht) without notice can fall outside cover \u2014 see fine_art_marine_rider for the yacht-specific gap this creates."
          },
          {
            "type": "sub_limit",
            "detail": "Pairs-and-sets clause limits recovery to the proportional value of a lost item from a matched set rather than the full set's value."
          }
        ],
        "cascade_rules": [
          {
            "condition": "scheduled items are ever transported aboard the account's yacht",
            "implies": "fine_art_marine_rider (yacht vertical) is likely needed \u2014 this policy's situs-specific exclusion does not follow the collection to sea."
          },
          {
            "condition": "account also carries blanket_personal_articles (personal vertical)",
            "implies": "confirm no double-scheduling of the same item across both policies \u2014 fine art and jewelry/watches/furs are typically kept on separate schedules with separate appraisal cadences."
          }
        ],
        "note": ""
      }
    ]
  },
  "total_coverage_types": 50,
  "new_coverage_types_2026_08_16": 32
};
const GWP_RATE_TREND = {
  "hull_machinery": {
    "annual_trend_pct": "+3.5%",
    "source": "IUMI Stats Report 2025 \u2014 Ocean Hull premium +3.5%"
  },
  "liability_protection": {
    "annual_trend_pct": "+1.5%",
    "source": "IUMI Stats Report 2025 \u2014 Marine global premium +1.5%"
  },
  "crew_medical_mlc": {
    "annual_trend_pct": "+0.0%",
    "source": "[NO SOURCE FOUND \u2014 ESTIMATE] MLC-driven, not market-rate-driven; held flat, priced via Parameter Multiplier instead"
  },
  "aviation_hull": {
    "annual_trend_pct": "+2.0%",
    "source": "[NO SOURCE FOUND \u2014 ESTIMATE] no aviation-hull-specific index cited in brief \u00a77"
  },
  "aviation_liability": {
    "annual_trend_pct": "+2.0%",
    "source": "[NO SOURCE FOUND \u2014 ESTIMATE] no aviation-liability-specific index cited in brief \u00a77"
  },
  "crew_accident": {
    "annual_trend_pct": "+2.0%",
    "source": "[NO SOURCE FOUND \u2014 ESTIMATE]"
  },
  "war_risk": {
    "annual_trend_pct": "+2.0%",
    "source": "[NO SOURCE FOUND \u2014 ESTIMATE]"
  },
  "coastal_wind_flood": {
    "annual_trend_pct": "-12.0%",
    "source": "Marsh GIMI Q2 2026 \u2014 global Property composite -12%"
  },
  "high_value_property": {
    "annual_trend_pct": "-12.0%",
    "source": "Marsh GIMI Q2 2026 \u2014 global Property composite -12%"
  },
  "premises_liability": {
    "annual_trend_pct": "+7.0%",
    "source": "Marsh GIMI Q2 2026 \u2014 US Casualty +7% (the one in-range figure, one line/region)"
  },
  "agreed_value_fleet": {
    "annual_trend_pct": "+3.0%",
    "source": "[NO SOURCE FOUND \u2014 ESTIMATE]"
  },
  "transit": {
    "annual_trend_pct": "+3.0%",
    "source": "[NO SOURCE FOUND \u2014 ESTIMATE]"
  },
  "garage_keepers": {
    "annual_trend_pct": "+7.0%",
    "source": "Marsh GIMI Q2 2026 \u2014 US Casualty +7% (garage keepers modeled as casualty-adjacent)"
  },
  "kr": {
    "annual_trend_pct": "+3.0%",
    "source": "[NO SOURCE FOUND \u2014 ESTIMATE]"
  },
  "exec_do": {
    "annual_trend_pct": "+2.0%",
    "source": "Marsh GIMI Q2 2026 \u2014 global Casualty +2% (D&O modeled as casualty-adjacent, entity-triggered)"
  },
  "cyber_crime": {
    "annual_trend_pct": "+3.0%",
    "source": "[NO SOURCE FOUND \u2014 ESTIMATE]"
  },
  "blanket_personal_articles": {
    "annual_trend_pct": "+3.0%",
    "source": "[NO SOURCE FOUND \u2014 ESTIMATE]"
  },
  "fine_art_scheduled": {
    "annual_trend_pct": "+2.0%",
    "source": "[NO SOURCE FOUND \u2014 ESTIMATE] no fine-art-specific index found; conservative placeholder"
  },
  "marine_war_risk": {
    "annual_trend_pct": "+2.0%",
    "source": "[NO SOURCE FOUND \u2014 ESTIMATE] no marine-war-risk-specific index cited; held near aviation war_risk's own estimate"
  },
  "increased_value_excess_liabilities": {
    "annual_trend_pct": "+3.5%",
    "source": "[NO SOURCE FOUND \u2014 ESTIMATE] follows hull_machinery's IUMI Stats Report 2025 Ocean Hull +3.5% trend \u2014 IV is a follow-form layer atop hull, not an independently rated line"
  },
  "loss_of_charter_hire": {
    "annual_trend_pct": "+3.0%",
    "source": "[NO SOURCE FOUND \u2014 ESTIMATE]"
  },
  "pollution_liability": {
    "annual_trend_pct": "+3.0%",
    "source": "[NO SOURCE FOUND \u2014 ESTIMATE]"
  },
  "crew_employers_liability_jones_act": {
    "annual_trend_pct": "+7.0%",
    "source": "Marsh GIMI Q2 2026 \u2014 US Casualty +7% (Jones Act crew liability modeled as casualty-adjacent, same convention as garage_keepers)"
  },
  "fine_art_marine_rider": {
    "annual_trend_pct": "+2.0%",
    "source": "[NO SOURCE FOUND \u2014 ESTIMATE] no fine-art-specific index found; conservative placeholder, consistent with fine_art_scheduled"
  },
  "excess_umbrella_liability": {
    "annual_trend_pct": "+2.0%",
    "source": "Marsh GIMI Q2 2026 \u2014 global Casualty +2% (excess/umbrella modeled as casualty-adjacent, same convention as exec_do; shared coverage_type_id across yacht/real_estate/auto verticals)"
  },
  "non_owned_aircraft_liability": {
    "annual_trend_pct": "+2.0%",
    "source": "[NO SOURCE FOUND \u2014 ESTIMATE] no aviation-specific index cited in brief \u00a77"
  },
  "hangarkeepers_liability": {
    "annual_trend_pct": "+2.0%",
    "source": "[NO SOURCE FOUND \u2014 ESTIMATE] no aviation-specific index cited in brief \u00a77"
  },
  "loss_of_license": {
    "annual_trend_pct": "+2.0%",
    "source": "[NO SOURCE FOUND \u2014 ESTIMATE] no aviation-specific index cited in brief \u00a77"
  },
  "guest_voluntary_settlement": {
    "annual_trend_pct": "+2.0%",
    "source": "[NO SOURCE FOUND \u2014 ESTIMATE] no aviation-specific index cited in brief \u00a77"
  },
  "trustee_additional_insured_indemnity": {
    "annual_trend_pct": "+2.0%",
    "source": "[NO SOURCE FOUND \u2014 ESTIMATE] no aviation-specific index cited in brief \u00a77"
  },
  "excess_flood": {
    "annual_trend_pct": "-12.0%",
    "source": "Marsh GIMI Q2 2026 \u2014 global Property composite -12% (private excess flood follows the same primary property market conditions as coastal_wind_flood)"
  },
  "earthquake_dic": {
    "annual_trend_pct": "+0.0%",
    "source": "[NO SOURCE FOUND \u2014 ESTIMATE] catastrophe-exposed segment often diverges from the broader property composite; held flat pending a seismic-specific index"
  },
  "builders_risk_course_of_construction": {
    "annual_trend_pct": "+0.0%",
    "source": "[NO SOURCE FOUND \u2014 ESTIMATE] project-based one-off placement, not a renewal-rated line"
  },
  "vacant_unoccupied_dwelling": {
    "annual_trend_pct": "+0.0%",
    "source": "[NO SOURCE FOUND \u2014 ESTIMATE] endorsement premium is typically a nominal add-on, not independently trended"
  },
  "equipment_breakdown_service_line": {
    "annual_trend_pct": "+3.0%",
    "source": "[NO SOURCE FOUND \u2014 ESTIMATE]"
  },
  "domestic_staff_liability": {
    "annual_trend_pct": "+7.0%",
    "source": "Marsh GIMI Q2 2026 \u2014 US Casualty +7% (household employer WC+EPLI bundle modeled as casualty-adjacent, same convention as garage_keepers)"
  },
  "environmental_pollution_liability": {
    "annual_trend_pct": "+3.0%",
    "source": "[NO SOURCE FOUND \u2014 ESTIMATE]"
  },
  "auto_liability": {
    "annual_trend_pct": "+7.0%",
    "source": "Marsh GIMI Q2 2026 \u2014 US Casualty +7% (personal auto liability modeled as casualty-adjacent, same convention as garage_keepers)"
  },
  "uninsured_underinsured_motorist": {
    "annual_trend_pct": "+7.0%",
    "source": "[NO SOURCE FOUND \u2014 ESTIMATE] follows auto_liability's Marsh GIMI Q2 2026 US Casualty +7% \u2014 UM/UIM is typically written matched to the BI limit it rides alongside"
  },
  "track_day_competition_use": {
    "annual_trend_pct": "+3.0%",
    "source": "[NO SOURCE FOUND \u2014 ESTIMATE] explicit gap \u2014 the coverage type most directly implicated by the auto vertical's own track/competition scope, per research"
  },
  "spare_parts_automobilia": {
    "annual_trend_pct": "+3.0%",
    "source": "[NO SOURCE FOUND \u2014 ESTIMATE]"
  },
  "restoration_work_in_progress": {
    "annual_trend_pct": "+3.0%",
    "source": "[NO SOURCE FOUND \u2014 ESTIMATE]"
  },
  "personal_excess_liability": {
    "annual_trend_pct": "+2.0%",
    "source": "Marsh GIMI Q2 2026 \u2014 global Casualty +2% (personal umbrella modeled as casualty-adjacent, same convention as exec_do)"
  },
  "domestic_staff_epli": {
    "annual_trend_pct": "+7.0%",
    "source": "Marsh GIMI Q2 2026 \u2014 US Casualty +7% (household employment-practices liability modeled as casualty-adjacent, same convention as garage_keepers/domestic_staff_liability)"
  },
  "household_workers_comp": {
    "annual_trend_pct": "+0.0%",
    "source": "[NO SOURCE FOUND \u2014 ESTIMATE] statutory-benefit-driven, not market-rate-driven; held flat, same convention as crew_medical_mlc"
  },
  "family_office_fiduciary_liability": {
    "annual_trend_pct": "+2.0%",
    "source": "Marsh GIMI Q2 2026 \u2014 global Casualty +2% (RIA/fiduciary E&O modeled as casualty-adjacent, same convention as exec_do)"
  },
  "travel_medical_evacuation": {
    "annual_trend_pct": "+3.0%",
    "source": "[NO SOURCE FOUND \u2014 ESTIMATE]"
  },
  "personal_cyber_liability": {
    "annual_trend_pct": "+3.0%",
    "source": "[NO SOURCE FOUND \u2014 ESTIMATE] held at cyber_crime's own estimate \u2014 no personal-cyber-specific index found either"
  }
};
const GWP_PRICING_METHODOLOGY = [
  {
    "method": "Ghost Policy",
    "trigger_scenario": "Policy previously bound with us, now lapsed",
    "confidence": "Exact \u2014 historical fact, trended forward"
  },
  {
    "method": "Peer Comp",
    "trigger_scenario": "Policy never written for this client",
    "confidence": "N-gated \u2014 high N>=15 / medium N=5-14 / low N<5 (brief \u00a77.4)"
  },
  {
    "method": "Parameter Multiplier",
    "trigger_scenario": "Coverage tied to a fixed operational ratio (Crew Medical = per-head)",
    "confidence": "High \u2014 algorithmic baseline"
  }
];
