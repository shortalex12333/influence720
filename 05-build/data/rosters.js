// Influence 720 — producer/leadership rosters. Regenerated FROM Influence720_MasterOntology.xlsx.
const PRODUCERS = [
  {
    "producer_id": "REP.SABINE",
    "name": "Sabine",
    "archetype": "High-Yield, Low-Touch",
    "region": "South Florida",
    "touchpoints_90d": 22,
    "gwp_captured_90d": 1850000,
    "pct_touches_ring1_2": 0.8,
    "touchpoints_90d_prior": 26,
    "gwp_captured_90d_prior": 1510000,
    "churn_risk_score": 1.2,
    "narrative": "80% Ring 1/2 signatories, massive GWP. The ideal state \u2014 talks to fewer people, exclusively economic buyers."
  },
  {
    "producer_id": "REP.VAUGHN",
    "name": "Vaughn",
    "archetype": "High-Touch, Low-Yield",
    "region": "South Florida",
    "touchpoints_90d": 210,
    "gwp_captured_90d": 240000,
    "pct_touches_ring1_2": 0.1,
    "touchpoints_90d_prior": 188,
    "gwp_captured_90d_prior": 255000,
    "churn_risk_score": 2,
    "narrative": "90% Ring 3/4 operational/crew, low GWP. Massive activity, almost none of it lands on a signatory."
  },
  {
    "producer_id": "REP.THEA",
    "name": "Thea",
    "archetype": "Legacy Book, Decaying Contact",
    "region": "South Florida",
    "touchpoints_90d": 9,
    "gwp_captured_90d": 2100000,
    "pct_touches_ring1_2": 0.35,
    "touchpoints_90d_prior": 21,
    "gwp_captured_90d_prior": 2140000,
    "churn_risk_score": 8.6,
    "narrative": "Massive GWP, but comm-frequency is decaying. Bound large accounts years ago, hasn't spoken to the Ring 1 signatory in 8 months."
  },
  {
    "producer_id": "REP.ELLERY",
    "name": "Ellery",
    "archetype": "Single-Vertical Concentration",
    "region": "South Florida",
    "touchpoints_90d": 60,
    "gwp_captured_90d": 680000,
    "pct_touches_ring1_2": 0.75,
    "touchpoints_90d_prior": 58,
    "gwp_captured_90d_prior": 665000,
    "churn_risk_score": 1.8,
    "narrative": "100% single-vertical GWP, zero adjacent policies. Has the Ring 1 ear of the UBO, leaves the cross-pollination money on the table."
  },
  {
    "producer_id": "REP.BECKETT",
    "name": "Beckett",
    "archetype": "High Activity, Unmapped Network",
    "region": "South Florida",
    "touchpoints_90d": 145,
    "gwp_captured_90d": 310000,
    "pct_touches_ring1_2": 0.18,
    "touchpoints_90d_prior": 98,
    "gwp_captured_90d_prior": 190000,
    "churn_risk_score": 3.4,
    "narrative": "High activity, calling largely unmapped Ring 3/4 contacts on cold accounts. Needs the Tier 1 referral web to find the warm path to the actual decision-makers."
  }
];
const LEADERSHIP = [
  {
    "leader_id": "LEAD.JONATHAN",
    "name": "Jonathan",
    "title": "Regional Director",
    "scope": "South Florida region \u2014 team lead tier, sees all 5 producers"
  },
  {
    "leader_id": "LEAD.LARKIN",
    "name": "Larkin",
    "title": "SVP",
    "scope": "Executive \u2014 sees the full regional roll-up"
  }
];
const ACCOUNT_PRODUCER_MAP = [
  {
    "ubo_id": "PRIN.MARCHETTI",
    "producer_id": "REP.SABINE"
  },
  {
    "ubo_id": "PRIN.MERIDIAN",
    "producer_id": "REP.THEA"
  },
  {
    "ubo_id": "PRIN.HARTWELL",
    "producer_id": "REP.VAUGHN"
  },
  {
    "ubo_id": "PRIN.VOSS",
    "producer_id": "REP.ELLERY"
  },
  {
    "ubo_id": "PRIN.CASTELLANE",
    "producer_id": "REP.SABINE"
  },
  {
    "ubo_id": "PRIN.BELLWEATHER",
    "producer_id": "REP.THEA"
  },
  {
    "ubo_id": "PRIN.OKONKWO",
    "producer_id": "REP.VAUGHN"
  },
  {
    "ubo_id": "PRIN.HOLLOWELL",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.RUTHERGLEN",
    "producer_id": "REP.THEA"
  },
  {
    "ubo_id": "PRIN.DRUMMOND",
    "producer_id": "REP.THEA"
  },
  {
    "ubo_id": "PRIN.WENTWORTH",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.PELHAM",
    "producer_id": "REP.THEA"
  },
  {
    "ubo_id": "PRIN.BEAUMONT",
    "producer_id": "REP.VAUGHN"
  },
  {
    "ubo_id": "PRIN.MOREAU",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.KIRKBRIDE",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.MERRIVALE",
    "producer_id": "REP.VAUGHN"
  },
  {
    "ubo_id": "PRIN.HARCOURT",
    "producer_id": "REP.THEA"
  },
  {
    "ubo_id": "PRIN.NIGHTINGALE",
    "producer_id": "REP.VAUGHN"
  },
  {
    "ubo_id": "PRIN.ZAMORA",
    "producer_id": "REP.SABINE"
  },
  {
    "ubo_id": "PRIN.ESTERHAZY",
    "producer_id": "REP.THEA"
  },
  {
    "ubo_id": "PRIN.TREVELYAN",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.FARLEIGH",
    "producer_id": "REP.ELLERY"
  },
  {
    "ubo_id": "PRIN.HALLOWAY",
    "producer_id": "REP.VAUGHN"
  },
  {
    "ubo_id": "PRIN.CASTELLAN",
    "producer_id": "REP.ELLERY"
  },
  {
    "ubo_id": "PRIN.HARTLEY",
    "producer_id": "REP.THEA"
  },
  {
    "ubo_id": "PRIN.ISHERWOOD",
    "producer_id": "REP.ELLERY"
  },
  {
    "ubo_id": "PRIN.FENWICK",
    "producer_id": "REP.VAUGHN"
  },
  {
    "ubo_id": "PRIN.LINDQVIST",
    "producer_id": "REP.ELLERY"
  },
  {
    "ubo_id": "PRIN.BRAMWELL",
    "producer_id": "REP.ELLERY"
  },
  {
    "ubo_id": "PRIN.THISTLEWOOD",
    "producer_id": "REP.SABINE"
  },
  {
    "ubo_id": "PRIN.STAVROS",
    "producer_id": "REP.ELLERY"
  },
  {
    "ubo_id": "PRIN.CAVANAUGH",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.FOXLEIGH",
    "producer_id": "REP.VAUGHN"
  },
  {
    "ubo_id": "PRIN.DUNMORE",
    "producer_id": "REP.THEA"
  },
  {
    "ubo_id": "PRIN.LOXLEY",
    "producer_id": "REP.VAUGHN"
  },
  {
    "ubo_id": "PRIN.EASTCOTT",
    "producer_id": "REP.VAUGHN"
  },
  {
    "ubo_id": "PRIN.OVERBURY",
    "producer_id": "REP.THEA"
  },
  {
    "ubo_id": "PRIN.LACHANCE",
    "producer_id": "REP.THEA"
  },
  {
    "ubo_id": "PRIN.VERLAINE",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.THORNBURY",
    "producer_id": "REP.VAUGHN"
  },
  {
    "ubo_id": "PRIN.BRACKENRIDGE",
    "producer_id": "REP.ELLERY"
  },
  {
    "ubo_id": "PRIN.ELPHINSTONE",
    "producer_id": "REP.ELLERY"
  },
  {
    "ubo_id": "PRIN.UXBRIDGE",
    "producer_id": "REP.SABINE"
  },
  {
    "ubo_id": "PRIN.SINCLAIR",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.IVANOVIC",
    "producer_id": "REP.VAUGHN"
  },
  {
    "ubo_id": "PRIN.OSGOOD",
    "producer_id": "REP.VAUGHN"
  },
  {
    "ubo_id": "PRIN.HEXHAM",
    "producer_id": "REP.ELLERY"
  },
  {
    "ubo_id": "PRIN.INGLEBY",
    "producer_id": "REP.SABINE"
  },
  {
    "ubo_id": "PRIN.PRENTISS",
    "producer_id": "REP.VAUGHN"
  },
  {
    "ubo_id": "PRIN.UNDERHILL",
    "producer_id": "REP.ELLERY"
  },
  {
    "ubo_id": "PRIN.PENHALLOW",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.BLACKWOOD",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.YARDLEY",
    "producer_id": "REP.THEA"
  },
  {
    "ubo_id": "PRIN.ASHWORTH",
    "producer_id": "REP.VAUGHN"
  },
  {
    "ubo_id": "PRIN.JARNAC",
    "producer_id": "REP.SABINE"
  },
  {
    "ubo_id": "PRIN.IVERSON",
    "producer_id": "REP.VAUGHN"
  },
  {
    "ubo_id": "PRIN.TALBOT",
    "producer_id": "REP.THEA"
  },
  {
    "ubo_id": "PRIN.LANSDOWNE",
    "producer_id": "REP.ELLERY"
  },
  {
    "ubo_id": "PRIN.RADCLIFFE",
    "producer_id": "REP.VAUGHN"
  },
  {
    "ubo_id": "PRIN.FITZWILLIAM",
    "producer_id": "REP.SABINE"
  },
  {
    "ubo_id": "PRIN.PEMBERTON",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.EVERLEIGH",
    "producer_id": "REP.SABINE"
  },
  {
    "ubo_id": "PRIN.STANDISH",
    "producer_id": "REP.SABINE"
  },
  {
    "ubo_id": "PRIN.ROTHBURY",
    "producer_id": "REP.THEA"
  },
  {
    "ubo_id": "PRIN.NORWOOD",
    "producer_id": "REP.THEA"
  },
  {
    "ubo_id": "PRIN.BALLANTINE",
    "producer_id": "REP.VAUGHN"
  },
  {
    "ubo_id": "PRIN.CHASTAIN",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.CARRINGTON",
    "producer_id": "REP.THEA"
  },
  {
    "ubo_id": "PRIN.GREVILLE",
    "producer_id": "REP.THEA"
  },
  {
    "ubo_id": "PRIN.FAIRWEATHER",
    "producer_id": "REP.ELLERY"
  },
  {
    "ubo_id": "PRIN.KENSINGTON",
    "producer_id": "REP.ELLERY"
  },
  {
    "ubo_id": "PRIN.JESSOP",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.RAVENSWORTH",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.QUINTRELL",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.COMBERFORD",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.SEDGEMOOR",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.GRANTHAM",
    "producer_id": "REP.VAUGHN"
  },
  {
    "ubo_id": "PRIN.OGILVIE",
    "producer_id": "REP.VAUGHN"
  },
  {
    "ubo_id": "PRIN.KILLIGREW",
    "producer_id": "REP.SABINE"
  },
  {
    "ubo_id": "PRIN.DEVEREUX",
    "producer_id": "REP.VAUGHN"
  },
  {
    "ubo_id": "PRIN.ALDERTON",
    "producer_id": "REP.VAUGHN"
  },
  {
    "ubo_id": "PRIN.INGLEWOOD",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.KILBRIDE",
    "producer_id": "REP.VAUGHN"
  },
  {
    "ubo_id": "PRIN.DEVENPORT",
    "producer_id": "REP.ELLERY"
  },
  {
    "ubo_id": "PRIN.ANCASTER",
    "producer_id": "REP.VAUGHN"
  },
  {
    "ubo_id": "PRIN.NORTHCOTE",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.VANDERMEER",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.WHITMORE",
    "producer_id": "REP.THEA"
  },
  {
    "ubo_id": "PRIN.MONTFORT",
    "producer_id": "REP.ELLERY"
  },
  {
    "ubo_id": "PRIN.ELLSWORTH",
    "producer_id": "REP.SABINE"
  },
  {
    "ubo_id": "PRIN.GATTENBY",
    "producer_id": "REP.THEA"
  },
  {
    "ubo_id": "PRIN.GROSVENOR",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.ASHCOMBE",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.GAINSBOROUGH",
    "producer_id": "REP.SABINE"
  },
  {
    "ubo_id": "PRIN.DELACROIX",
    "producer_id": "REP.ELLERY"
  },
  {
    "ubo_id": "PRIN.RADCLIFFE_THISTLEWOOD",
    "producer_id": "REP.SABINE"
  },
  {
    "ubo_id": "PRIN.BRACKENRIDGE_BRAMWELL",
    "producer_id": "REP.VAUGHN"
  },
  {
    "ubo_id": "PRIN.KENSINGTON_OVERBURY",
    "producer_id": "REP.VAUGHN"
  },
  {
    "ubo_id": "PRIN.KENSINGTON_UNDERHILL",
    "producer_id": "REP.ELLERY"
  },
  {
    "ubo_id": "PRIN.MERRIVALE_ANCASTER",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.HARCOURT_LACHANCE",
    "producer_id": "REP.ELLERY"
  },
  {
    "ubo_id": "PRIN.FENWICK_TALBOT",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.BRAMWELL_ANCASTER",
    "producer_id": "REP.THEA"
  },
  {
    "ubo_id": "PRIN.JESSOP_JARNAC",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.HARTLEY_OVERBURY",
    "producer_id": "REP.THEA"
  },
  {
    "ubo_id": "PRIN.MONTFORT_OGILVIE",
    "producer_id": "REP.VAUGHN"
  },
  {
    "ubo_id": "PRIN.OVERBURY_DRUMMOND",
    "producer_id": "REP.THEA"
  },
  {
    "ubo_id": "PRIN.THORNBURY_RUTHERGLEN",
    "producer_id": "REP.SABINE"
  },
  {
    "ubo_id": "PRIN.LACHANCE_LANSDOWNE",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.ELPHINSTONE_RADCLIFFE",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.BRAMWELL_NIGHTINGALE",
    "producer_id": "REP.SABINE"
  },
  {
    "ubo_id": "PRIN.STAVROS_RADCLIFFE",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.KENSINGTON_ASHWORTH",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.JESSOP_PRENTISS",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.GREVILLE_BRACKENRIDGE",
    "producer_id": "REP.VAUGHN"
  },
  {
    "ubo_id": "PRIN.CAVANAUGH_ALDERTON",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.HOLLOWELL_DEVENPORT",
    "producer_id": "REP.THEA"
  },
  {
    "ubo_id": "PRIN.JARNAC_FOXLEIGH",
    "producer_id": "REP.THEA"
  },
  {
    "ubo_id": "PRIN.UNDERHILL_FARLEIGH",
    "producer_id": "REP.ELLERY"
  },
  {
    "ubo_id": "PRIN.ELPHINSTONE_JARNAC",
    "producer_id": "REP.THEA"
  },
  {
    "ubo_id": "PRIN.PRENTISS_ESTERHAZY",
    "producer_id": "REP.VAUGHN"
  },
  {
    "ubo_id": "PRIN.INGLEWOOD_GROSVENOR",
    "producer_id": "REP.ELLERY"
  },
  {
    "ubo_id": "PRIN.LINDQVIST_PELHAM",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.YARDLEY_OGILVIE",
    "producer_id": "REP.VAUGHN"
  },
  {
    "ubo_id": "PRIN.HEXHAM_MERRIVALE",
    "producer_id": "REP.THEA"
  },
  {
    "ubo_id": "PRIN.NORTHCOTE_CASTELLAN",
    "producer_id": "REP.VAUGHN"
  },
  {
    "ubo_id": "PRIN.INGLEWOOD_CAVANAUGH",
    "producer_id": "REP.ELLERY"
  },
  {
    "ubo_id": "PRIN.PEMBERTON_GATTENBY",
    "producer_id": "REP.ELLERY"
  },
  {
    "ubo_id": "PRIN.ASHCOMBE_YARDLEY",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.TALBOT_QUINTRELL",
    "producer_id": "REP.ELLERY"
  },
  {
    "ubo_id": "PRIN.ASHCOMBE_IVANOVIC",
    "producer_id": "REP.VAUGHN"
  },
  {
    "ubo_id": "PRIN.PENHALLOW_JARNAC",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.ESTERHAZY_PRENTISS",
    "producer_id": "REP.VAUGHN"
  },
  {
    "ubo_id": "PRIN.TREVELYAN_GATTENBY",
    "producer_id": "REP.SABINE"
  },
  {
    "ubo_id": "PRIN.LACHANCE_DUNMORE",
    "producer_id": "REP.VAUGHN"
  },
  {
    "ubo_id": "PRIN.BRAMWELL_JARNAC",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.SINCLAIR_STANDISH",
    "producer_id": "REP.THEA"
  },
  {
    "ubo_id": "PRIN.PELHAM_BRAMWELL",
    "producer_id": "REP.ELLERY"
  },
  {
    "ubo_id": "PRIN.TREVELYAN_CARRINGTON",
    "producer_id": "REP.SABINE"
  },
  {
    "ubo_id": "PRIN.HARCOURT_THORNBURY",
    "producer_id": "REP.THEA"
  },
  {
    "ubo_id": "PRIN.HARCOURT_QUINTRELL",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.WENTWORTH_GREVILLE",
    "producer_id": "REP.SABINE"
  },
  {
    "ubo_id": "PRIN.ELLSWORTH_ISHERWOOD",
    "producer_id": "REP.SABINE"
  },
  {
    "ubo_id": "PRIN.CASTELLAN_VANDERMEER",
    "producer_id": "REP.SABINE"
  },
  {
    "ubo_id": "PRIN.ESTERHAZY_HALLOWAY",
    "producer_id": "REP.SABINE"
  },
  {
    "ubo_id": "PRIN.STAVROS_COMBERFORD",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.LINDQVIST_VERLAINE",
    "producer_id": "REP.VAUGHN"
  },
  {
    "ubo_id": "PRIN.LANSDOWNE_PELHAM",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.SINCLAIR_MOREAU",
    "producer_id": "REP.BECKETT"
  },
  {
    "ubo_id": "PRIN.DELACROIX_HOLLOWELL",
    "producer_id": "REP.VAUGHN"
  }
];
