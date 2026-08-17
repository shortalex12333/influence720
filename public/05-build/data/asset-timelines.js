// Influence 720 — hard-asset valuation + ownership-transaction timeline (Dashboard 2 per-asset pies). Regenerated FROM Influence720_MasterOntology.xlsx.
const ASSET_VALUATIONS = [
  {
    "asset_id": "AST.HOLLOWELL.YACHT",
    "valuation_usd": 92000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026), S5 band ($60.0M-$155.0M): 70m (230ft) large custom superyacht, Lurssen/Oceanco/Feadship/Amels tier; priced upper-mid-band reflecting a well-maintained hull with a recent major refit."
  },
  {
    "asset_id": "AST.HOLLOWELL.RE1",
    "valuation_usd": 18500000,
    "valuation_basis": "US High-Value Residential Real Estate band, High-Value Residential ($5.0M-$35.0M): Nantucket waterfront/luxury-acreage market; priced upper-mid-band consistent with a large ranch-style estate in a top-tier coastal market."
  },
  {
    "asset_id": "AST.HOLLOWELL.AUTO",
    "valuation_usd": 27000000,
    "valuation_basis": "Curated Collector Car Collections band, 18-Car Curated Collection ($16.0M-$32.0M): full-spectrum private collection; priced upper-mid-band reflecting several trophy-tier anchor pieces alongside a deep modern-hypercar bench."
  },
  {
    "asset_id": "AST.RUTHERGLEN.YACHT",
    "valuation_usd": 4200000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026), S2 band ($2.0M-$7.8M): 20m semi-custom/production flybridge motor yacht, Sunseeker/Princess/Azimut Grande tier; priced mid-band for an approximately 8-year-old vessel with a completed refit."
  },
  {
    "asset_id": "AST.RUTHERGLEN.AVI",
    "valuation_usd": 19500000,
    "valuation_basis": "Private Aviation Hull Insurance band for Cessna Citation Longitude ($15.0M-$23.0M): in-production super-midsize jet with thin pre-owned supply; priced upper-mid-band for a relatively low-hour, recent-vintage example."
  },
  {
    "asset_id": "AST.RUTHERGLEN.RE1",
    "valuation_usd": 22000000,
    "valuation_basis": "US High-Value Residential Real Estate band, High-Value Residential ($5.0M-$35.0M): Montecito is a premier California luxury market; priced upper-band reflecting the estate's historic pedigree."
  },
  {
    "asset_id": "AST.RUTHERGLEN.AUTO",
    "valuation_usd": 15500000,
    "valuation_basis": "Curated Collector Car Collections band, 12-Car Curated Collection ($10.0M-$20.0M): deep classic-and-modern bench; priced upper-mid-band reflecting an active acquisition and rotation history."
  },
  {
    "asset_id": "AST.DRUMMOND.YACHT",
    "valuation_usd": 178000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026), S6 band ($120.0M-$290.0M): 90m megayacht tier (Lurssen/Oceanco/Feadship); priced upper-mid-band reflecting a relatively young hull, consistent with the band note that S6-tier agreed values track replacement-cost appraisal given thin resale liquidity."
  },
  {
    "asset_id": "AST.DRUMMOND.RE1",
    "valuation_usd": 29000000,
    "valuation_basis": "US High-Value Residential Real Estate band, High-Value Residential ($5.0M-$35.0M): Manhattan coastal/waterfront properties sit at the top of the luxury-market range; priced near the top of band."
  },
  {
    "asset_id": "AST.DRUMMOND.AUTO",
    "valuation_usd": 17000000,
    "valuation_basis": "Curated Collector Car Collections band, 12-Car Curated Collection ($10.0M-$20.0M): priced mid-band reflecting a balanced classic and modern hypercar mix."
  },
  {
    "asset_id": "AST.WENTWORTH.YACHT",
    "valuation_usd": 620000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026), S1 band ($280K-$950K): 12m (39ft) production flybridge/express cruiser, Princess/Sunseeker/Fairline tier; priced mid-band for a well-maintained example roughly 7 years old."
  },
  {
    "asset_id": "AST.WENTWORTH.AVI",
    "valuation_usd": 14500000,
    "valuation_basis": "Private Aviation Hull Insurance band for Bombardier Global 6000 ($11.0M-$22.0M): out-of-production large-cabin jet; priced lower-mid-band reflecting an older acquisition vintage against the model's steep age-driven depreciation curve."
  },
  {
    "asset_id": "AST.WENTWORTH.RE1",
    "valuation_usd": 8500000,
    "valuation_basis": "US High-Value Residential Real Estate band, High-Value Residential ($5.0M-$35.0M): Palm Springs sits below the Aspen/Hamptons/Palm Beach tier of the luxury market; priced lower-mid-band."
  },
  {
    "asset_id": "AST.WENTWORTH.RE2",
    "valuation_usd": 3800000,
    "valuation_basis": "US High-Value Residential Real Estate band, Additional Property ($1.2M-$10.0M): secondary/vacation property priced consistent with the band's typical 20-40% ratio to a family's primary residence value."
  },
  {
    "asset_id": "AST.WENTWORTH.AUTO",
    "valuation_usd": 4200000,
    "valuation_basis": "Curated Collector Car Collections band, 4-Car Curated Collection ($2.5M-$6.0M): boutique mix of one classic icon, one modern hypercar, and two blue-chip exotics; priced upper-mid-band."
  },
  {
    "asset_id": "AST.PELHAM.YACHT",
    "valuation_usd": 78000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026), S5 band ($60.0M-$155.0M): 70m large custom superyacht tier; priced lower-mid-band reflecting an older hull despite a completed major refit."
  },
  {
    "asset_id": "AST.PELHAM.RE1",
    "valuation_usd": 9200000,
    "valuation_basis": "US High-Value Residential Real Estate band, High-Value Residential ($5.0M-$35.0M): Palm Springs lakefront property priced lower-mid-band consistent with the market tier."
  },
  {
    "asset_id": "AST.PELHAM.AUTO",
    "valuation_usd": 3600000,
    "valuation_basis": "Curated Collector Car Collections band, 4-Car Curated Collection ($2.5M-$6.0M): boutique mix; priced mid-band."
  },
  {
    "asset_id": "AST.BEAUMONT.YACHT",
    "valuation_usd": 41500000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026), band S4 ($26.0M-$68.0M): 50m full-custom superyacht (Heesen/Feadship/Benetti/CRN tier), priced mid-band reflecting a well-maintained hull with a documented major refit."
  },
  {
    "asset_id": "AST.BEAUMONT.RE1",
    "valuation_usd": 18500000,
    "valuation_basis": "US High-Value Residential Real Estate, High-Value Residential band ($5.0M-$35.0M): historic Hamptons estate priced upper-mid band per Douglas Elliman/Miller Samuel Hamptons luxury comps."
  },
  {
    "asset_id": "AST.BEAUMONT.RE2",
    "valuation_usd": 6200000,
    "valuation_basis": "US High-Value Residential Real Estate, Additional Property band ($1.2M-$10.0M): Martha's Vineyard historic estate priced mid-band reflecting a well-kept seasonal secondary residence."
  },
  {
    "asset_id": "AST.BEAUMONT.AUTO",
    "valuation_usd": 14500000,
    "valuation_basis": "Curated Collector Car Collections (2026), 12-Car Curated Collection band ($10.0M-$20.0M): priced lower-mid band, a deep classic-plus-modern bench without ultra-outlier trophy pieces."
  },
  {
    "asset_id": "AST.MOREAU.YACHT",
    "valuation_usd": 185000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026), band S6 ($120.0M-$290.0M): 90m megayacht tier (Lurssen/Oceanco/Feadship class), priced upper-mid band reflecting a relatively young hull with a documented major refit; thin resale pool at this size, value tracks replacement-cost appraisal."
  },
  {
    "asset_id": "AST.MOREAU.RE1",
    "valuation_usd": 27500000,
    "valuation_basis": "US High-Value Residential Real Estate, High-Value Residential band ($5.0M-$35.0M): Cap Ferrat mountain residence priced near the top of band reflecting an ultra-premium French Riviera location."
  },
  {
    "asset_id": "AST.MOREAU.AUTO",
    "valuation_usd": 6300000,
    "valuation_basis": "Curated Collector Car Collections (2026), 6-Car Curated Collection band ($4.0M-$9.0M): priced mid-band, a period classic plus modern exotic core with one added hypercar."
  },
  {
    "asset_id": "AST.KIRKBRIDE.YACHT",
    "valuation_usd": 15800000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026), band S3 ($8.5M-$27.0M): 32m entry-level custom/semi-custom superyacht (Sanlorenzo/Westport/Horizon/Benetti tier), priced mid-band reflecting a moderate age with recent refit work."
  },
  {
    "asset_id": "AST.KIRKBRIDE.AVI",
    "valuation_usd": 8200000,
    "valuation_basis": "Private Aviation Hull Insurance, Gulfstream G450 band ($5.0M-$12.0M): out-of-production large-cabin jet priced mid-band reflecting moderate hours and an avionics upgrade."
  },
  {
    "asset_id": "AST.KIRKBRIDE.RE1",
    "valuation_usd": 16500000,
    "valuation_basis": "US High-Value Residential Real Estate, High-Value Residential band ($5.0M-$35.0M): Jackson Hole lakefront residence priced mid-band reflecting a premium mountain-lakefront setting with recent renovation."
  },
  {
    "asset_id": "AST.MERRIVALE.YACHT",
    "valuation_usd": 12900000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026), band S3 ($8.5M-$27.0M): 32m entry-level custom/semi-custom superyacht, priced lower-mid band reflecting a somewhat older hull profile relative to comps."
  },
  {
    "asset_id": "AST.MERRIVALE.AVI",
    "valuation_usd": 14700000,
    "valuation_basis": "Private Aviation Hull Insurance, Bombardier Global 6000 band ($11.0M-$22.0M): out-of-production large-cabin long-range jet priced lower-mid band reflecting age and hours since acquisition."
  },
  {
    "asset_id": "AST.MERRIVALE.RE1",
    "valuation_usd": 21000000,
    "valuation_basis": "US High-Value Residential Real Estate, High-Value Residential band ($5.0M-$35.0M): Palm Beach lakefront residence priced upper-mid band reflecting a premium waterfront Palm Beach setting."
  },
  {
    "asset_id": "AST.MERRIVALE.RE2",
    "valuation_usd": 8400000,
    "valuation_basis": "US High-Value Residential Real Estate, Additional Property band ($1.2M-$10.0M): Beverly Hills historic estate priced near the top of band reflecting the prestige of the location and a full restoration."
  },
  {
    "asset_id": "AST.MERRIVALE.AUTO",
    "valuation_usd": 5400000,
    "valuation_basis": "Curated Collector Car Collections (2026), 6-Car Curated Collection band ($4.0M-$9.0M): priced lower-mid band, a period classic plus modern-exotic core with one added hypercar."
  },
  {
    "asset_id": "AST.HARCOURT.YACHT",
    "valuation_usd": 210000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026), band S6 ($120.0M-$290.0M): 90m megayacht tier, priced upper band reflecting a newly delivered hull acquired directly from the builder with minimal depreciation."
  },
  {
    "asset_id": "AST.HARCOURT.AVI",
    "valuation_usd": 19500000,
    "valuation_basis": "Private Aviation Hull Insurance, Gulfstream G550 band ($10.0M-$29.0M): out-of-production large-cabin ultra-long-range jet priced upper-mid band reflecting a well-maintained airframe with a full avionics refurbishment."
  },
  {
    "asset_id": "AST.HARCOURT.RE1",
    "valuation_usd": 24000000,
    "valuation_basis": "US High-Value Residential Real Estate, High-Value Residential band ($5.0M-$35.0M): Gstaad penthouse priced upper-mid band reflecting an ultra-premium alpine resort location."
  },
  {
    "asset_id": "AST.HARCOURT.RE2",
    "valuation_usd": 4300000,
    "valuation_basis": "US High-Value Residential Real Estate, Additional Property band ($1.2M-$10.0M): Charleston lakefront residence priced lower-mid band reflecting a modest secondary Southern retreat."
  },
  {
    "asset_id": "AST.HARCOURT.AUTO",
    "valuation_usd": 9600000,
    "valuation_basis": "Curated Collector Car Collections (2026), 8-Car Curated Collection band ($6.0M-$13.0M): priced mid-band, an F40/Enzo-tier trophy classic plus a Veyron/Chiron-tier hypercar layered onto the base collection."
  },
  {
    "asset_id": "AST.NIGHTINGALE.YACHT",
    "valuation_usd": 16800000,
    "valuation_basis": "Motor Superyacht Resale band S3 (32m entry-level custom superyacht, $8.5M-$27M); mid-band placement reflecting a ~2016-build, refit-updated 32m hull."
  },
  {
    "asset_id": "AST.NIGHTINGALE.AVI",
    "valuation_usd": 11200000,
    "valuation_basis": "Private Aviation Hull Insurance band \u2014 Airbus H175 in-production heavy twin ($8M-$17M); mid-low band reflecting a 2017-vintage airframe with moderate hours."
  },
  {
    "asset_id": "AST.NIGHTINGALE.RE1",
    "valuation_usd": 18500000,
    "valuation_basis": "US High-Value Residential band (primary UHNW residence, $5M-$35M); upper-mid placement for a working Napa vineyard estate with substantial acreage."
  },
  {
    "asset_id": "AST.NIGHTINGALE.RE2",
    "valuation_usd": 5600000,
    "valuation_basis": "US High-Value Residential \u2014 Additional Property band ($1.2M-$10M); mid-band for a Miami waterfront villa used as a seasonal secondary residence."
  },
  {
    "asset_id": "AST.NIGHTINGALE.RE3",
    "valuation_usd": 7200000,
    "valuation_basis": "US High-Value Residential \u2014 Additional Property band applied to commercial-use holding ($1.2M-$10M); upper-band for a retail plaza in the Montecito luxury corridor."
  },
  {
    "asset_id": "AST.NIGHTINGALE.AUTO",
    "valuation_usd": 4600000,
    "valuation_basis": "Curated Collector Car Collections band \u2014 4-Car tier ($2.5M-$6M); upper-mid placement reflecting a collection anchored by a modern hypercar."
  },
  {
    "asset_id": "AST.ZAMORA.YACHT",
    "valuation_usd": 42000000,
    "valuation_basis": "Motor Superyacht Resale band S4 (50m full-custom superyacht, $26M-$68M); mid-band for a ~2017-build 50m hull with standard maintenance history."
  },
  {
    "asset_id": "AST.ZAMORA.AVI",
    "valuation_usd": 19500000,
    "valuation_basis": "Private Aviation Hull Insurance band \u2014 Citation Longitude in-production super-midsize ($15M-$23M); mid-band for a 2021-vintage low-hour airframe."
  },
  {
    "asset_id": "AST.ZAMORA.RE1",
    "valuation_usd": 16000000,
    "valuation_basis": "US High-Value Residential band (primary/trophy residence, $5M-$35M); mid-upper placement for a Malibu waterfront estate."
  },
  {
    "asset_id": "AST.ESTERHAZY.YACHT",
    "valuation_usd": 12900000,
    "valuation_basis": "Motor Superyacht Resale band S3 (32m entry-level custom superyacht, $8.5M-$27M); lower-mid band reflecting an older-generation hull nearing mid-life refit."
  },
  {
    "asset_id": "AST.ESTERHAZY.AVI",
    "valuation_usd": 16800000,
    "valuation_basis": "Private Aviation Hull Insurance band \u2014 Citation Longitude ($15M-$23M); lower-mid band for a 2020-vintage airframe with above-average hours."
  },
  {
    "asset_id": "AST.ESTERHAZY.RE1",
    "valuation_usd": 13500000,
    "valuation_basis": "US High-Value Residential band (primary/secondary UHNW residence, $5M-$35M); mid-band for a Sun Valley estate."
  },
  {
    "asset_id": "AST.ESTERHAZY.AUTO",
    "valuation_usd": 9200000,
    "valuation_basis": "Curated Collector Car Collections band \u2014 8-Car tier ($6M-$13M); mid-band for a collection spanning period classics through a modern hypercar."
  },
  {
    "asset_id": "AST.TREVELYAN.YACHT",
    "valuation_usd": 175000000,
    "valuation_basis": "Motor Superyacht Resale band S6 (90m megayacht tier, $120M-$290M); mid-band reflecting a ~2015-build 90m hull with a documented refit history, valued primarily via replacement-cost appraisal given the thin resale pool at this size."
  },
  {
    "asset_id": "AST.TREVELYAN.AVI",
    "valuation_usd": 14200000,
    "valuation_basis": "Private Aviation Hull Insurance band \u2014 Airbus H175 ($8M-$17M); upper-mid band for a 2021-vintage low-hour airframe."
  },
  {
    "asset_id": "AST.TREVELYAN.RE1",
    "valuation_usd": 22000000,
    "valuation_basis": "US High-Value Residential band (primary UHNW residence, $5M-$35M); upper-band for a Sag Harbor waterfront estate in the Hamptons luxury corridor."
  },
  {
    "asset_id": "AST.TREVELYAN.RE2",
    "valuation_usd": 8400000,
    "valuation_basis": "US High-Value Residential \u2014 Additional Property band ($1.2M-$10M); upper band for a Beverly Hills penthouse used as a West Coast pied-a-terre."
  },
  {
    "asset_id": "AST.TREVELYAN.RE3",
    "valuation_usd": 6800000,
    "valuation_basis": "US High-Value Residential \u2014 Additional Property band ($1.2M-$10M); mid-upper band for an Aspen-area villa used as a seasonal retreat."
  },
  {
    "asset_id": "AST.TREVELYAN.AUTO",
    "valuation_usd": 5100000,
    "valuation_basis": "Curated Collector Car Collections band \u2014 4-Car tier ($2.5M-$6M); upper band reflecting a collection with a strong modern hypercar anchor."
  },
  {
    "asset_id": "AST.FARLEIGH.YACHT",
    "valuation_usd": 19500000,
    "valuation_basis": "Motor Superyacht Resale band S3 (32m entry-level custom superyacht, $8.5M-$27M); upper-mid band for a ~2019-build 32m hull with low charter use."
  },
  {
    "asset_id": "AST.FARLEIGH.AVI",
    "valuation_usd": 18500000,
    "valuation_basis": "Private Aviation Hull Insurance band \u2014 Challenger 350 in-production super-midsize ($13M-$26M); mid-band for a 2019-vintage airframe with moderate hours."
  },
  {
    "asset_id": "AST.FARLEIGH.RE1",
    "valuation_usd": 17200000,
    "valuation_basis": "US High-Value Residential band (primary/secondary UHNW residence, $5M-$35M); mid-upper band for a Martha's Vineyard estate."
  },
  {
    "asset_id": "AST.HALLOWAY.YACHT",
    "valuation_usd": 15500000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S3 (32m entry-level custom/semi-custom superyacht, Sanlorenzo/Westport/Horizon/Benetti tier, $8.5M-$27M); positioned mid-band reflecting a roughly decade-old hull in well-maintained, refit condition."
  },
  {
    "asset_id": "AST.HALLOWAY.RE1",
    "valuation_usd": 8200000,
    "valuation_basis": "US High-Value Residential Real Estate band, Primary UHNW residence tier ($5M-$35M); positioned in the lower-middle of the band reflecting a historic, non-waterfront-trophy estate in a strong but secondary luxury market."
  },
  {
    "asset_id": "AST.CASTELLAN.YACHT",
    "valuation_usd": 195000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S6 (90m megayacht tier, Lurssen/Oceanco/Feadship class, $120M-$290M); positioned upper-mid-band reflecting a relatively young, well-specified hull comparable to known ~90-95m transactions."
  },
  {
    "asset_id": "AST.CASTELLAN.RE1",
    "valuation_usd": 22000000,
    "valuation_basis": "US High-Value Residential Real Estate band, Primary UHNW residence tier ($5M-$35M); positioned near the top of the band reflecting Gstaad's trophy alpine-market status, comparable to the Aspen-tier comps underlying the researched band despite being a non-US market."
  },
  {
    "asset_id": "AST.CASTELLAN.AUTO",
    "valuation_usd": 10200000,
    "valuation_basis": "Curated Collector Car Collections band, 8-Car Curated Collection tier ($6M-$13M); positioned upper-band reflecting a mature, trophy-anchored 8-car mix per the researched blended-$/car methodology."
  },
  {
    "asset_id": "AST.HARTLEY.RE1",
    "valuation_usd": 18500000,
    "valuation_basis": "US High-Value Residential Real Estate band, Primary UHNW residence tier ($5M-$35M); positioned upper-mid-band reflecting Palm Beach's premium, trophy-adjacent luxury market status."
  },
  {
    "asset_id": "AST.HARTLEY.RE2",
    "valuation_usd": 3600000,
    "valuation_basis": "US High-Value Residential Real Estate band, Additional Property tier ($1.2M-$10M); positioned lower-mid-band consistent with a secondary residence relative to the family's larger Palm Beach primary estate."
  },
  {
    "asset_id": "AST.HARTLEY.AUTO",
    "valuation_usd": 4300000,
    "valuation_basis": "Curated Collector Car Collections band, 4-Car Curated Collection tier ($2.5M-$6M); positioned mid-band reflecting a boutique mix of one classic icon and modern exotics per the researched methodology."
  },
  {
    "asset_id": "AST.ISHERWOOD.YACHT",
    "valuation_usd": 158000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S6 (90m megayacht tier, Lurssen/Oceanco/Feadship class, $120M-$290M); positioned mid-band reflecting a moderately aged hull relative to a newly delivered comp at this size."
  },
  {
    "asset_id": "AST.ISHERWOOD.AVI",
    "valuation_usd": 6200000,
    "valuation_basis": "Private Aviation Hull Insurance band, Sikorsky S-76 (variant-and-hours-driven range $1.5M-$9M); positioned upper-band reflecting a later-generation C++/D-model variant consistent with UHNW private/executive use."
  },
  {
    "asset_id": "AST.ISHERWOOD.RE1",
    "valuation_usd": 16000000,
    "valuation_basis": "US High-Value Residential Real Estate band, Primary UHNW residence tier ($5M-$35M); positioned mid-upper band reflecting Vail's premium ski-market status, comparable to the Aspen-tier comps underlying the researched band."
  },
  {
    "asset_id": "AST.ISHERWOOD.RE2",
    "valuation_usd": 9500000,
    "valuation_basis": "US High-Value Residential Real Estate band, Additional Property tier ($1.2M-$10M); positioned at the top of the band reflecting Cap Ferrat's premium French Riviera coastal market despite the tier's US-centric naming."
  },
  {
    "asset_id": "AST.ISHERWOOD.AUTO",
    "valuation_usd": 6800000,
    "valuation_basis": "Curated Collector Car Collections band, 6-Car Curated Collection tier ($4M-$9M); positioned mid-upper band reflecting a broadened classic-plus-modern-exotic mix per the researched methodology."
  },
  {
    "asset_id": "AST.FENWICK.YACHT",
    "valuation_usd": 92000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S5 (70m large custom superyacht, Lurssen/Oceanco/Feadship/Amels tier, $60M-$155M); positioned mid-band, consistent with a mid-life hull in the thin 70m resale pool where agreed values track replacement-cost appraisal."
  },
  {
    "asset_id": "AST.FENWICK.RE1",
    "valuation_usd": 28000000,
    "valuation_basis": "US High-Value Residential Real Estate band, Primary UHNW residence tier ($5M-$35M); positioned near the top of the band reflecting Malibu oceanfront's trophy-tier status within the researched luxury segment."
  },
  {
    "asset_id": "AST.FENWICK.AUTO",
    "valuation_usd": 8900000,
    "valuation_basis": "Curated Collector Car Collections band, 8-Car Curated Collection tier ($6M-$13M); positioned mid-band reflecting a developing but not yet fully trophy-saturated 8-car mix per the researched methodology."
  },
  {
    "asset_id": "AST.LINDQVIST.YACHT",
    "valuation_usd": 14500000,
    "valuation_basis": "Motor Superyacht Resale/Insured Hull Value (2026) band S3 (32m, $8.5M-$27M): positioned lower-mid-band, consistent with a well-maintained but non-flagship 32m Sanlorenzo/Westport/Horizon-tier yacht of moderate fleet age."
  },
  {
    "asset_id": "AST.LINDQVIST.RE1",
    "valuation_usd": 19500000,
    "valuation_basis": "US High-Value Residential Real Estate band, High-Value Residential tier ($5M-$35M): positioned mid-band for a trophy West Coast primary residence consistent with Douglas Elliman/ILHM luxury-segment comps."
  },
  {
    "asset_id": "AST.BRAMWELL.YACHT",
    "valuation_usd": 95000000,
    "valuation_basis": "Motor Superyacht Resale/Insured Hull Value (2026) band S5 (70m, $60M-$155M): positioned upper-mid-band for a relatively young Lurssen/Oceanco/Feadship/Amels-tier 70m yacht; thin resale liquidity at this size means the figure tracks replacement-cost appraisal."
  },
  {
    "asset_id": "AST.BRAMWELL.RE1",
    "valuation_usd": 28000000,
    "valuation_basis": "US High-Value Residential Real Estate band, High-Value Residential tier ($5M-$35M): positioned near the top of the band reflecting a large mixed-use/commercial holding in the Palm Beach luxury corridor."
  },
  {
    "asset_id": "AST.BRAMWELL.RE2",
    "valuation_usd": 8600000,
    "valuation_basis": "US High-Value Residential Real Estate band, Additional Property tier ($1.2M-$10M): positioned near the top of the band reflecting a beachfront villa on the French Riviera."
  },
  {
    "asset_id": "AST.BRAMWELL.AUTO",
    "valuation_usd": 4300000,
    "valuation_basis": "Curated Collector Car Collections band, 4-Car Curated Collection tier ($2.5M-$6M): positioned mid-band for a boutique mix anchored by one classic icon and one modern hypercar."
  },
  {
    "asset_id": "AST.THISTLEWOOD.YACHT",
    "valuation_usd": 43500000,
    "valuation_basis": "Motor Superyacht Resale/Insured Hull Value (2026) band S4 (50m, $26M-$68M): positioned mid-band for a full-custom Heesen/Feadship/Benetti/CRN-tier 50m yacht of moderate fleet age."
  },
  {
    "asset_id": "AST.THISTLEWOOD.RE1",
    "valuation_usd": 23000000,
    "valuation_basis": "US High-Value Residential Real Estate band, High-Value Residential tier ($5M-$35M): positioned mid-band for a sizable secondary vineyard estate on the French Riviera."
  },
  {
    "asset_id": "AST.THISTLEWOOD.AUTO",
    "valuation_usd": 9800000,
    "valuation_basis": "Curated Collector Car Collections band, 8-Car Curated Collection tier ($6M-$13M): positioned mid-upper-band reflecting a deep mix of period classics and limited-run modern exotics."
  },
  {
    "asset_id": "AST.STAVROS.YACHT",
    "valuation_usd": 4200000,
    "valuation_basis": "Motor Superyacht Resale/Insured Hull Value (2026) band S2 (20m, $2M-$7.8M): positioned lower-mid-band for an entry-level semi-custom flybridge motor yacht of moderate fleet age."
  },
  {
    "asset_id": "AST.STAVROS.AUTO",
    "valuation_usd": 7600000,
    "valuation_basis": "Curated Collector Car Collections band, 8-Car Curated Collection tier ($6M-$13M): positioned lower-mid-band reflecting a collection weighted toward blue-chip modern exotics rather than trophy classics."
  },
  {
    "asset_id": "AST.CAVANAUGH.YACHT",
    "valuation_usd": 19800000,
    "valuation_basis": "Motor Superyacht Resale/Insured Hull Value (2026) band S3 (32m, $8.5M-$27M): positioned upper-mid-band reflecting a well-refitted 32m Sanlorenzo/Westport/Horizon-tier yacht."
  },
  {
    "asset_id": "AST.CAVANAUGH.AVI",
    "valuation_usd": 19500000,
    "valuation_basis": "Private Aviation Hull Insurance band, Cessna Citation Longitude ($15M-$23M): positioned upper-mid-band reflecting a relatively low-hour, in-production super-midsize jet with an upgraded avionics package."
  },
  {
    "asset_id": "AST.CAVANAUGH.RE1",
    "valuation_usd": 33000000,
    "valuation_basis": "US High-Value Residential Real Estate band, High-Value Residential tier ($5M-$35M): positioned near the top of the band reflecting a trophy East Coast waterfront compound."
  },
  {
    "asset_id": "AST.CAVANAUGH.AUTO",
    "valuation_usd": 16500000,
    "valuation_basis": "Curated Collector Car Collections band, 12-Car Curated Collection tier ($10M-$20M): positioned upper-mid-band reflecting deep classic and modern hypercar benches."
  },
  {
    "asset_id": "AST.FOXLEIGH.YACHT",
    "valuation_usd": 92000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S5 (70m, $60M-$155M); positioned mid-band reflecting a moderately aged hull with maintained systems, below the thin-liquidity upper tier reserved for near-new flagship comps."
  },
  {
    "asset_id": "AST.FOXLEIGH.RE1",
    "valuation_usd": 18500000,
    "valuation_basis": "US High-Value Residential band (primary UHNW residence, $5M-$35M); positioned upper-mid reflecting a large ranch-style estate in the Montecito luxury corridor, below trophy waterfront comps."
  },
  {
    "asset_id": "AST.FOXLEIGH.AUTO",
    "valuation_usd": 4200000,
    "valuation_basis": "Curated Collector Car Collections band, 4-Car tier ($2.5M-$6M); positioned mid-band reflecting a boutique mix of one classic and one modern hypercar anchor alongside two blue-chip exotics."
  },
  {
    "asset_id": "AST.DUNMORE.YACHT",
    "valuation_usd": 175000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S6 (90m, $120M-$290M); positioned mid-band given thin resale liquidity at this size, cross-checked against known ~90-95m transaction comps (e.g. Kismet-class)."
  },
  {
    "asset_id": "AST.DUNMORE.AVI",
    "valuation_usd": 19500000,
    "valuation_basis": "Private Aviation Hull Insurance band, Bombardier Challenger 350 ($13M-$26M, in-production/shallow-depreciation); positioned mid-band reflecting a mid-life airframe with moderate hours."
  },
  {
    "asset_id": "AST.DUNMORE.RE1",
    "valuation_usd": 14000000,
    "valuation_basis": "US High-Value Residential band ($5M-$35M); positioned lower-mid reflecting a ski-resort penthouse rather than a full trophy estate."
  },
  {
    "asset_id": "AST.DUNMORE.AUTO",
    "valuation_usd": 24500000,
    "valuation_basis": "Curated Collector Car Collections band, 18-Car tier ($16M-$32M); positioned mid-band reflecting a full-spectrum collection anchored by two to three trophy classics without ultra-outlier pre-war or 250-series pieces."
  },
  {
    "asset_id": "AST.LOXLEY.YACHT",
    "valuation_usd": 42000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S4 (50m, $26M-$68M); positioned mid-band reflecting a full-custom yacht with moderate age and a documented refit history."
  },
  {
    "asset_id": "AST.LOXLEY.RE1",
    "valuation_usd": 12500000,
    "valuation_basis": "US High-Value Residential band ($5M-$35M); positioned lower-mid reflecting a seasonal lakefront residence rather than a year-round trophy primary."
  },
  {
    "asset_id": "AST.LOXLEY.AUTO",
    "valuation_usd": 15000000,
    "valuation_basis": "Curated Collector Car Collections band, 12-Car tier ($10M-$20M); positioned mid-band reflecting a deep bench of period classics and modern exotics with a second trophy-tier hypercar."
  },
  {
    "asset_id": "AST.EASTCOTT.YACHT",
    "valuation_usd": 38000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S4 (50m, $26M-$68M); positioned lower-mid reflecting an older-generation hull with standard maintenance history rather than a recent refit."
  },
  {
    "asset_id": "AST.EASTCOTT.RE1",
    "valuation_usd": 27000000,
    "valuation_basis": "US High-Value Residential band (primary UHNW residence, $5M-$35M); positioned upper-mid reflecting a trophy Manhattan penthouse in a premier building."
  },
  {
    "asset_id": "AST.EASTCOTT.AUTO",
    "valuation_usd": 9200000,
    "valuation_basis": "Curated Collector Car Collections band, 8-Car tier ($6M-$13M); positioned mid-band reflecting an F40/Enzo-tier trophy classic paired with a hypercar and a mixed modern-exotic bench."
  },
  {
    "asset_id": "AST.OVERBURY.YACHT",
    "valuation_usd": 620000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S1 (12m production flybridge/express cruiser, $280K-$950K); positioned mid-band reflecting a moderately aged production motor yacht in good condition."
  },
  {
    "asset_id": "AST.OVERBURY.RE1",
    "valuation_usd": 9500000,
    "valuation_basis": "US High-Value Residential band ($5M-$35M); positioned lower-mid reflecting a vineyard-country villa outside the primary trophy coastal markets."
  },
  {
    "asset_id": "AST.OVERBURY.AUTO",
    "valuation_usd": 6800000,
    "valuation_basis": "Curated Collector Car Collections band, 6-Car tier ($4M-$9M); positioned mid-band reflecting two period classics alongside a modern hypercar and blue-chip exotic bench."
  },
  {
    "asset_id": "AST.LACHANCE.YACHT",
    "valuation_usd": 41500000,
    "valuation_basis": "Motor Superyacht Resale/Insured Hull Value (2026) band S4 (50m full-custom superyacht, Heesen/Feadship/Benetti/CRN tier, $26M-$68M); positioned upper-mid band reflecting a well-maintained ~7-year-old hull."
  },
  {
    "asset_id": "AST.LACHANCE.RE1",
    "valuation_usd": 14750000,
    "valuation_basis": "US High-Value Residential Real Estate band, primary residence tier ($5M-$35M); mid-band reflecting a Big Sky lakefront property with strong but not trophy-tier waterfront positioning."
  },
  {
    "asset_id": "AST.LACHANCE.AUTO",
    "valuation_usd": 6350000,
    "valuation_basis": "Curated Collector Car Collections band, 6-Car Curated Collection tier ($4M-$9M); mid-band reflecting a balanced mix of period classics and modern exotics without an ultra-trophy anchor piece."
  },
  {
    "asset_id": "AST.VERLAINE.YACHT",
    "valuation_usd": 34800000,
    "valuation_basis": "Motor Superyacht Resale/Insured Hull Value (2026) band S4 (50m full-custom superyacht, $26M-$68M); lower-mid band reflecting an older hull age within the 5-25yr resale spread."
  },
  {
    "asset_id": "AST.VERLAINE.RE1",
    "valuation_usd": 27500000,
    "valuation_basis": "US High-Value Residential Real Estate band, primary residence tier ($5M-$35M); upper band reflecting a Beverly Hills beachfront villa's trophy waterfront positioning."
  },
  {
    "asset_id": "AST.VERLAINE.RE2",
    "valuation_usd": 7900000,
    "valuation_basis": "US High-Value Residential Real Estate band, Additional Property tier ($1.2M-$10M); upper band reflecting Sag Harbor's premium oceanfront positioning within the secondary-home segment."
  },
  {
    "asset_id": "AST.VERLAINE.AUTO",
    "valuation_usd": 5600000,
    "valuation_basis": "Curated Collector Car Collections band, 6-Car Curated Collection tier ($4M-$9M); lower-mid band reflecting a collection weighted toward blue-chip modern exotics rather than trophy classics."
  },
  {
    "asset_id": "AST.THORNBURY.YACHT",
    "valuation_usd": 392000000,
    "valuation_basis": "Motor Superyacht Resale/Insured Hull Value (2026) band S7 (115m flagship giga yacht tier, Feadship/Lurssen/Oceanco class, $270M-$490M); mid-upper band reflecting a relatively young hull with thin comparable resale data, valued primarily via replacement-cost appraisal."
  },
  {
    "asset_id": "AST.THORNBURY.RE1",
    "valuation_usd": 18200000,
    "valuation_basis": "US High-Value Residential Real Estate band, primary residence tier ($5M-$35M); mid-upper band reflecting a large luxury-tier mountain residence."
  },
  {
    "asset_id": "AST.THORNBURY.RE2",
    "valuation_usd": 3450000,
    "valuation_basis": "US High-Value Residential Real Estate band, Additional Property tier ($1.2M-$10M); lower-mid band reflecting a secondary vacation property."
  },
  {
    "asset_id": "AST.THORNBURY.RE3",
    "valuation_usd": 5100000,
    "valuation_basis": "US High-Value Residential Real Estate band, Additional Property tier ($1.2M-$10M); mid-band reflecting a well-appointed secondary urban penthouse."
  },
  {
    "asset_id": "AST.THORNBURY.AUTO",
    "valuation_usd": 25800000,
    "valuation_basis": "Curated Collector Car Collections band, 18-Car Curated Collection full-spectrum tier ($16M-$32M); upper-mid band reflecting a deep bench of trophy classics anchoring a modern hypercar collection."
  },
  {
    "asset_id": "AST.BRACKENRIDGE.YACHT",
    "valuation_usd": 318000000,
    "valuation_basis": "Motor Superyacht Resale/Insured Hull Value (2026) band S7 (115m flagship tier, $270M-$490M); lower-mid band reflecting an older hull within this size class, valued primarily via replacement-cost appraisal given the thin resale pool."
  },
  {
    "asset_id": "AST.BRACKENRIDGE.AVI",
    "valuation_usd": 4600000,
    "valuation_basis": "Private Aviation Hull Insurance band for the Sikorsky S-76 ($1.5M-$9M); mid-band reflecting a mid-life C+/C++ variant with moderate airframe hours, value driven primarily by variant rather than calendar year."
  },
  {
    "asset_id": "AST.BRACKENRIDGE.RE1",
    "valuation_usd": 11800000,
    "valuation_basis": "US High-Value Residential Real Estate band, primary residence tier ($5M-$35M); lower-mid band reflecting a Miami-area estate with working vineyard acreage rather than pure trophy waterfront positioning."
  },
  {
    "asset_id": "AST.BRACKENRIDGE.AUTO",
    "valuation_usd": 4250000,
    "valuation_basis": "Curated Collector Car Collections band, 4-Car Curated Collection boutique tier ($2.5M-$6M); mid-upper band reflecting a mix including a modern hypercar anchor."
  },
  {
    "asset_id": "AST.ELPHINSTONE.YACHT",
    "valuation_usd": 13900000,
    "valuation_basis": "Motor Superyacht Resale/Insured Hull Value (2026) band S3 (32m entry-level custom/semi-custom superyacht, Sanlorenzo/Westport/Horizon/Benetti tier, $8.5M-$27M); lower-mid band reflecting a moderate-age hull."
  },
  {
    "asset_id": "AST.ELPHINSTONE.RE1",
    "valuation_usd": 9600000,
    "valuation_basis": "US High-Value Residential Real Estate band, primary residence tier ($5M-$35M); lower-mid band reflecting a historic estate property with legacy architecture rather than modern trophy construction."
  },
  {
    "asset_id": "AST.ELPHINSTONE.RE2",
    "valuation_usd": 6700000,
    "valuation_basis": "US High-Value Residential Real Estate band, Additional Property tier ($1.2M-$10M); upper-mid band reflecting Aspen's premium ski-market positioning within the secondary-home segment."
  },
  {
    "asset_id": "AST.ELPHINSTONE.AUTO",
    "valuation_usd": 7150000,
    "valuation_basis": "Curated Collector Car Collections band, 6-Car Curated Collection tier ($4M-$9M); upper band reflecting a collection anchored by two trophy-tier pieces."
  },
  {
    "asset_id": "AST.UXBRIDGE.YACHT",
    "valuation_usd": 92500000,
    "valuation_basis": "Motor Superyacht Resale/Insured Hull Value (2026) band S5 (70m/230ft custom superyacht, Lurssen/Oceanco/Feadship/Amels tier, $60M-$155M); positioned mid-band reflecting moderate fleet age and a standard refit cycle."
  },
  {
    "asset_id": "AST.UXBRIDGE.AVI",
    "valuation_usd": 20500000,
    "valuation_basis": "Private Aviation Hull Insurance band for Cessna Citation Longitude (in-production super-midsize, 2019-present, $15M-$23M); valued near the top of the band reflecting a low-hour, recent-vintage airframe."
  },
  {
    "asset_id": "AST.UXBRIDGE.RE1",
    "valuation_usd": 28000000,
    "valuation_basis": "US High-Value Residential Real Estate band (Aspen/Hamptons/Palm Beach-tier primary residence, $5M-$35M); valued near the top of the band reflecting a trophy compound-scale property."
  },
  {
    "asset_id": "AST.UXBRIDGE.AUTO",
    "valuation_usd": 4600000,
    "valuation_basis": "Curated Collector Car Collections band for a 4-car boutique mix (period classic + modern hypercar + two blue-chip exotics, $2.5M-$6M); valued mid-band reflecting a balanced but not maximal collection."
  },
  {
    "asset_id": "AST.SINCLAIR.YACHT",
    "valuation_usd": 165000000,
    "valuation_basis": "Motor Superyacht Resale/Insured Hull Value (2026) band S6 (90m/295ft megayacht tier, Lurssen/Oceanco/Feadship, $120M-$290M); positioned toward the lower-mid of a thin-comp band given limited open-market transactions at this size."
  },
  {
    "asset_id": "AST.SINCLAIR.RE1",
    "valuation_usd": 9800000,
    "valuation_basis": "US High-Value Residential Real Estate band ($5M-$35M); valued toward the lower-mid of the range, consistent with a historic Charleston-market villa rather than a trophy waterfront estate."
  },
  {
    "asset_id": "AST.IVANOVIC.YACHT",
    "valuation_usd": 44000000,
    "valuation_basis": "Motor Superyacht Resale/Insured Hull Value (2026) band S4 (50m/164ft full-custom superyacht, Heesen/Feadship/Benetti/CRN tier, $26M-$68M); valued mid-band reflecting moderate fleet age."
  },
  {
    "asset_id": "AST.IVANOVIC.RE1",
    "valuation_usd": 24000000,
    "valuation_basis": "US High-Value Residential Real Estate band ($5M-$35M); valued toward the upper range reflecting a historic mountain-market estate in the Vail/Aspen luxury tier."
  },
  {
    "asset_id": "AST.IVANOVIC.AUTO",
    "valuation_usd": 6700000,
    "valuation_basis": "Curated Collector Car Collections band for a 6-car collection (adds a second period classic and a second limited-run modern exotic to the 4-car base, $4M-$9M); valued mid-band."
  },
  {
    "asset_id": "AST.OSGOOD.YACHT",
    "valuation_usd": 4900000,
    "valuation_basis": "Motor Superyacht Resale/Insured Hull Value (2026) band S2 (20m/66ft semi-custom flybridge motor yacht, Sunseeker/Princess/Azimut tier, $2M-$7.8M); valued mid-band."
  },
  {
    "asset_id": "AST.OSGOOD.AVI",
    "valuation_usd": 19500000,
    "valuation_basis": "Private Aviation Hull Insurance band for Bombardier Challenger 350 (in-production super-midsize, 2014-present, $13M-$26M); valued mid-band reflecting a moderate-vintage, moderate-hour airframe."
  },
  {
    "asset_id": "AST.OSGOOD.RE1",
    "valuation_usd": 11500000,
    "valuation_basis": "US High-Value Residential Real Estate band ($5M-$35M); valued in the lower-mid range consistent with a villa-scale (rather than compound-scale) luxury property."
  },
  {
    "asset_id": "AST.OSGOOD.AUTO",
    "valuation_usd": 5800000,
    "valuation_basis": "Curated Collector Car Collections band for a 6-car collection ($4M-$9M); valued in the lower-mid range reflecting a collection weighted toward blue-chip modern exotics rather than trophy classics."
  },
  {
    "asset_id": "AST.HEXHAM.YACHT",
    "valuation_usd": 52000000,
    "valuation_basis": "Motor Superyacht Resale/Insured Hull Value (2026) band S4 (50m/164ft full-custom superyacht, Heesen/Feadship/Benetti/CRN tier, $26M-$68M); valued toward the upper-mid range reflecting a newer-build, low-fleet-age vessel."
  },
  {
    "asset_id": "AST.HEXHAM.AUTO",
    "valuation_usd": 26500000,
    "valuation_basis": "Curated Collector Car Collections band for an 18-car full-spectrum collection (trophy classics anchoring a deep modern hypercar bench, $16M-$32M); valued toward the upper-mid of the range."
  },
  {
    "asset_id": "AST.INGLEBY.YACHT",
    "valuation_usd": 175000000,
    "valuation_basis": "Motor Superyacht S6 band ($120M-$290M, 90m megayacht tier, Lurssen/Oceanco/Feadship comp class); positioned mid-band reflecting a well-maintained ~2018-vintage hull with completed major refit."
  },
  {
    "asset_id": "AST.INGLEBY.RE1",
    "valuation_usd": 14500000,
    "valuation_basis": "High-Value Residential band ($5M-$35M) for a Aspen/Telluride-tier mountain trophy market; priced upper-mid reflecting a substantial luxury ski property below the ultra-outlier compound threshold."
  },
  {
    "asset_id": "AST.INGLEBY.AUTO",
    "valuation_usd": 4200000,
    "valuation_basis": "Curated Collector Car Collections 4-Car band ($2.5M-$6M); priced upper-mid reflecting a boutique mix of one classic icon and one modern hypercar anchoring two blue-chip modern exotics."
  },
  {
    "asset_id": "AST.PRENTISS.YACHT",
    "valuation_usd": 98000000,
    "valuation_basis": "Motor Superyacht S5 band ($60M-$155M, 70m large custom tier, Lurssen/Oceanco/Feadship/Amels comp class); priced mid-band reflecting a maintained hull with completed major refit and active charter status."
  },
  {
    "asset_id": "AST.PRENTISS.RE1",
    "valuation_usd": 18500000,
    "valuation_basis": "High-Value Residential band ($5M-$35M) for a large working equestrian estate in a UHNW secondary market; priced upper-mid reflecting acreage and outbuildings typical of a Charleston-tier ranch property."
  },
  {
    "asset_id": "AST.PRENTISS.AUTO",
    "valuation_usd": 15500000,
    "valuation_basis": "Curated Collector Car Collections 12-Car band ($10M-$20M); priced mid-band reflecting DB5/Carrera GT-era pieces alongside a second trophy-tier hypercar."
  },
  {
    "asset_id": "AST.UNDERHILL.YACHT",
    "valuation_usd": 42000000,
    "valuation_basis": "Motor Superyacht S4 band ($26M-$68M, 50m full-custom tier, Heesen/Feadship/Benetti/CRN comp class); priced lower-mid reflecting a 2019-acquisition age profile with one completed major refit."
  },
  {
    "asset_id": "AST.UNDERHILL.AVI",
    "valuation_usd": 8200000,
    "valuation_basis": "Private Aviation Gulfstream G450 band ($5M-$12M, out of production since 2018); priced mid-band reflecting a pre-owned acquisition with completed avionics upgrade."
  },
  {
    "asset_id": "AST.UNDERHILL.RE1",
    "valuation_usd": 22000000,
    "valuation_basis": "High-Value Residential band ($5M-$35M) for a Montecito-tier vineyard estate, a premium California UHNW market; priced upper-mid reflecting acreage and working-vineyard improvements."
  },
  {
    "asset_id": "AST.PENHALLOW.YACHT",
    "valuation_usd": 34500000,
    "valuation_basis": "Motor Superyacht S4 band ($26M-$68M, 50m full-custom tier, Heesen/Feadship/Benetti/CRN comp class); priced lower-mid reflecting an older 2018-acquisition age profile relative to comp fleet."
  },
  {
    "asset_id": "AST.PENHALLOW.AVI",
    "valuation_usd": 19500000,
    "valuation_basis": "Private Aviation Bombardier Challenger 350 band ($13M-$26M, in-production super-midsize); priced mid-band reflecting a 2019-vintage aircraft with completed interior and avionics refresh."
  },
  {
    "asset_id": "AST.PENHALLOW.RE1",
    "valuation_usd": 16800000,
    "valuation_basis": "High-Value Residential band ($5M-$35M) for a Jackson Hole-tier mountain penthouse; priced mid-band reflecting a premium ski-resort penthouse below the ultra-outlier compound threshold."
  },
  {
    "asset_id": "AST.BLACKWOOD.YACHT",
    "valuation_usd": 112000000,
    "valuation_basis": "Motor Superyacht S5 band ($60M-$155M, 70m large custom tier, Lurssen/Oceanco/Feadship/Amels comp class); priced upper-mid reflecting a well-refitted hull with active charter status and recent trust transfer."
  },
  {
    "asset_id": "AST.BLACKWOOD.AVI",
    "valuation_usd": 41000000,
    "valuation_basis": "Private Aviation Dassault Falcon 8X band ($30M-$50M, in-production ultra-long-range trijet); priced mid-band reflecting a 2018-vintage cabin with completed refresh and avionics update."
  },
  {
    "asset_id": "AST.BLACKWOOD.RE1",
    "valuation_usd": 24500000,
    "valuation_basis": "High-Value Residential band ($5M-$35M) for a Vail-tier ranch estate; priced upper-mid reflecting a large equestrian property with expanded guest capacity."
  },
  {
    "asset_id": "AST.BLACKWOOD.RE2",
    "valuation_usd": 7500000,
    "valuation_basis": "Additional Property band ($1.2M-$10M) for a secondary Aspen-tier ski residence, roughly 20-40% of the family's primary residence value per the luxury-vacation-home comp pattern; priced upper-mid reflecting Aspen's premium secondary market."
  },
  {
    "asset_id": "AST.BLACKWOOD.AUTO",
    "valuation_usd": 6800000,
    "valuation_basis": "Curated Collector Car Collections 6-Car band ($4M-$9M); priced upper-mid reflecting a broadened mix of two period classics and two limited-run modern exotics alongside blue-chip filler."
  },
  {
    "asset_id": "AST.YARDLEY.YACHT",
    "valuation_usd": 92000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026), band S5 ($60M-$155M): 70m large custom superyacht (Lurssen/Oceanco/Feadship/Amels tier); mid-upper band reflecting a well-maintained hull post-refit."
  },
  {
    "asset_id": "AST.YARDLEY.AVI",
    "valuation_usd": 45000000,
    "valuation_basis": "Private Aviation Hull Insurance, Gulfstream G650 band ($28M-$62M): in-production ultra-long-range flagship; mid-band for a several-years-old low-to-moderate hour airframe."
  },
  {
    "asset_id": "AST.YARDLEY.RE1",
    "valuation_usd": 22000000,
    "valuation_basis": "US High-Value Residential Real Estate band ($5M-$35M): trophy oceanfront primary residence in a top-tier luxury market, positioned above the $10M luxury-entry threshold."
  },
  {
    "asset_id": "AST.YARDLEY.RE2",
    "valuation_usd": 6500000,
    "valuation_basis": "US High-Value Residential Real Estate, Additional Property band ($1.2M-$10M): secondary coastal residence priced consistent with the luxury-vacation-home segment."
  },
  {
    "asset_id": "AST.YARDLEY.RE3",
    "valuation_usd": 7800000,
    "valuation_basis": "US High-Value Residential Real Estate, Additional Property band ($1.2M-$10M): premium alpine secondary residence, priced near the top of the band given Gstaad market strength."
  },
  {
    "asset_id": "AST.ASHWORTH.AVI",
    "valuation_usd": 4200000,
    "valuation_basis": "Private Aviation Hull Insurance, Sikorsky S-76 band ($1.5M-$9M): mid-tier C/C+ variant airframe, value driven primarily by variant and hours rather than calendar year."
  },
  {
    "asset_id": "AST.ASHWORTH.RE1",
    "valuation_usd": 19500000,
    "valuation_basis": "US High-Value Residential Real Estate band ($5M-$35M): trophy waterfront primary residence in a top-tier West Coast luxury market."
  },
  {
    "asset_id": "AST.ASHWORTH.RE2",
    "valuation_usd": 4800000,
    "valuation_basis": "US High-Value Residential Real Estate, Additional Property band ($1.2M-$10M): secondary European lake-view residence, mid-band pricing."
  },
  {
    "asset_id": "AST.ASHWORTH.AUTO",
    "valuation_usd": 6300000,
    "valuation_basis": "Curated Collector Car Collections, 6-Car Curated Collection band ($4M-$9M): boutique mix of period classics and modern exotics, mid-band."
  },
  {
    "asset_id": "AST.JARNAC.YACHT",
    "valuation_usd": 78000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026), band S5 ($60M-$155M): 70m large custom superyacht, priced toward the lower-mid band reflecting an older resale hull."
  },
  {
    "asset_id": "AST.JARNAC.AVI",
    "valuation_usd": 52000000,
    "valuation_basis": "Private Aviation Hull Insurance, Gulfstream G650 band ($28M-$62M): in-production ultra-long-range flagship, priced toward the upper-mid band for a newer low-hour airframe."
  },
  {
    "asset_id": "AST.JARNAC.RE1",
    "valuation_usd": 24000000,
    "valuation_basis": "US High-Value Residential Real Estate band ($5M-$35M): trophy oceanfront historic primary residence in a top-tier East Coast luxury market."
  },
  {
    "asset_id": "AST.JARNAC.AUTO",
    "valuation_usd": 24500000,
    "valuation_basis": "Curated Collector Car Collections, 18-Car Curated Collection band ($16M-$32M): full-spectrum collection anchored by trophy classics and a modern hypercar bench, mid-band."
  },
  {
    "asset_id": "AST.IVERSON.YACHT",
    "valuation_usd": 620000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026), band S1 ($280K-$950K): 12m production flybridge/express cruiser tier, mid-band for a moderately aged, well-kept hull."
  },
  {
    "asset_id": "AST.IVERSON.AVI",
    "valuation_usd": 19500000,
    "valuation_basis": "Private Aviation Hull Insurance, Bombardier Challenger 350 band ($13M-$26M): in-production super-midsize jet, mid-upper band."
  },
  {
    "asset_id": "AST.IVERSON.RE1",
    "valuation_usd": 12500000,
    "valuation_basis": "US High-Value Residential Real Estate band ($5M-$35M): established primary residence in a top-tier Northeast luxury market, mid-band."
  },
  {
    "asset_id": "AST.IVERSON.RE2",
    "valuation_usd": 5600000,
    "valuation_basis": "US High-Value Residential Real Estate, Additional Property band ($1.2M-$10M): secondary winter penthouse, mid-band."
  },
  {
    "asset_id": "AST.IVERSON.AUTO",
    "valuation_usd": 3900000,
    "valuation_basis": "Curated Collector Car Collections, 4-Car Curated Collection band ($2.5M-$6M): boutique mix of one classic icon and modern exotics, mid-band."
  },
  {
    "asset_id": "AST.TALBOT.YACHT",
    "valuation_usd": 185000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026), band S6 ($120M-$290M): 90m megayacht tier, upper-mid band reflecting a well-maintained hull with recent refit."
  },
  {
    "asset_id": "AST.TALBOT.AVI",
    "valuation_usd": 17500000,
    "valuation_basis": "Private Aviation Hull Insurance, Gulfstream G550 band ($10M-$29M): out-of-production large-cabin jet, mid-band for a mid-life airframe."
  },
  {
    "asset_id": "AST.TALBOT.RE1",
    "valuation_usd": 16000000,
    "valuation_basis": "US High-Value Residential Real Estate band ($5M-$35M): historic mountain-town primary residence in a top-tier luxury market, mid-band."
  },
  {
    "asset_id": "AST.TALBOT.AUTO",
    "valuation_usd": 4600000,
    "valuation_basis": "Curated Collector Car Collections, 4-Car Curated Collection band ($2.5M-$6M): boutique mix of a classic icon, modern exotics, and a hypercar, upper-mid band."
  },
  {
    "asset_id": "AST.LANSDOWNE.YACHT",
    "valuation_usd": 610000,
    "valuation_basis": "S1 band ($280K-$950K): 12m production flybridge/express cruiser (Princess/Sunseeker/Fairline tier); valued mid-band reflecting a well-maintained vessel of moderate fleet age."
  },
  {
    "asset_id": "AST.LANSDOWNE.RE1",
    "valuation_usd": 9200000,
    "valuation_basis": "High-Value Residential band ($5M-$35M) per ILHM/Douglas Elliman luxury market reporting; valued in the lower-mid range consistent with a single-family ski chalet in a secondary luxury market."
  },
  {
    "asset_id": "AST.LANSDOWNE.RE2",
    "valuation_usd": 3600000,
    "valuation_basis": "Additional Property band ($1.2M-$10M), priced at roughly 30% of the family's primary residence value consistent with the secondary-home discount pattern in luxury market reporting."
  },
  {
    "asset_id": "AST.LANSDOWNE.AUTO",
    "valuation_usd": 6800000,
    "valuation_basis": "6-Car Curated Collection band ($4M-$9M) per RM Sotheby's/Gooding & Company realized comps; valued upper-mid reflecting a curated blend of period classics and modern exotics."
  },
  {
    "asset_id": "AST.RADCLIFFE.YACHT",
    "valuation_usd": 46000000,
    "valuation_basis": "S4 band ($26M-$68M): 50m full-custom superyacht (Heesen/Feadship/Benetti/CRN tier); valued mid-band reflecting moderate refit history within the 5-25yr resale spread."
  },
  {
    "asset_id": "AST.RADCLIFFE.RE1",
    "valuation_usd": 14500000,
    "valuation_basis": "High-Value Residential band ($5M-$35M); valued mid-band consistent with a premium penthouse unit in a resort luxury market."
  },
  {
    "asset_id": "AST.RADCLIFFE.RE2",
    "valuation_usd": 5400000,
    "valuation_basis": "Additional Property band ($1.2M-$10M); valued upper-mid reflecting a lakefront residence in a premium Northeast market."
  },
  {
    "asset_id": "AST.RADCLIFFE.AUTO",
    "valuation_usd": 3900000,
    "valuation_basis": "4-Car Curated Collection band ($2.5M-$6M); valued mid-band reflecting a boutique mix of one classic icon and modern exotics."
  },
  {
    "asset_id": "AST.FITZWILLIAM.YACHT",
    "valuation_usd": 52000000,
    "valuation_basis": "S4 band ($26M-$68M): 50m full-custom superyacht; valued upper-mid reflecting a newer build with lower refit needs than a comparable vessel."
  },
  {
    "asset_id": "AST.FITZWILLIAM.RE1",
    "valuation_usd": 21000000,
    "valuation_basis": "High-Value Residential band ($5M-$35M); valued in the upper range reflecting the premium Manhattan market."
  },
  {
    "asset_id": "AST.FITZWILLIAM.RE2",
    "valuation_usd": 7200000,
    "valuation_basis": "Additional Property band ($1.2M-$10M); valued in the upper range reflecting a mixed-use commercial plaza in a premium Alpine market."
  },
  {
    "asset_id": "AST.FITZWILLIAM.RE3",
    "valuation_usd": 8600000,
    "valuation_basis": "Additional Property band ($1.2M-$10M); valued near the top of the band reflecting a trophy villa in the Beverly Hills market."
  },
  {
    "asset_id": "AST.FITZWILLIAM.AUTO",
    "valuation_usd": 15500000,
    "valuation_basis": "12-Car Curated Collection band ($10M-$20M); valued mid-band reflecting a deep bench of classic and modern hypercar pieces."
  },
  {
    "asset_id": "AST.PEMBERTON.YACHT",
    "valuation_usd": 92000000,
    "valuation_basis": "S5 band ($60M-$155M): 70m large custom superyacht (Lurssen/Oceanco/Feadship/Amels tier); valued in the lower-mid range reflecting thin resale liquidity and replacement-cost-anchored appraisal at this size."
  },
  {
    "asset_id": "AST.PEMBERTON.AVI",
    "valuation_usd": 19500000,
    "valuation_basis": "Bombardier Challenger 350 band ($13M-$26M); valued mid-band reflecting a moderate-vintage airframe with steady in-production demand support."
  },
  {
    "asset_id": "AST.PEMBERTON.RE1",
    "valuation_usd": 17000000,
    "valuation_basis": "High-Value Residential band ($5M-$35M); valued mid-band reflecting a vineyard estate with working agricultural acreage in a premium Northeast market."
  },
  {
    "asset_id": "AST.EVERLEIGH.YACHT",
    "valuation_usd": 105000000,
    "valuation_basis": "S5 band ($60M-$155M); valued in the mid range reflecting a newer-build 70m custom superyacht with a comprehensive systems refit."
  },
  {
    "asset_id": "AST.EVERLEIGH.RE1",
    "valuation_usd": 11500000,
    "valuation_basis": "High-Value Residential band ($5M-$35M); valued in the lower-mid range reflecting a mixed-use commercial plaza asset in the Palm Springs market."
  },
  {
    "asset_id": "AST.EVERLEIGH.RE2",
    "valuation_usd": 9200000,
    "valuation_basis": "Additional Property band ($1.2M-$10M); valued near the top of the band reflecting a trophy oceanfront compound in the Hamptons market."
  },
  {
    "asset_id": "AST.STANDISH.YACHT",
    "valuation_usd": 520000,
    "valuation_basis": "S1 band (12m production flybridge/express cruiser, $280K-$950K) per Motor Superyacht Resale reference; positioned mid-band reflecting a ~2016-model-year hull with moderate use and one documented refit."
  },
  {
    "asset_id": "AST.STANDISH.AVI",
    "valuation_usd": 12500000,
    "valuation_basis": "Airbus H175 band ($8.0M-$17.0M) per Private Aviation Hull Insurance reference; positioned upper-mid band reflecting a 2019-vintage airframe with moderate accumulated hours."
  },
  {
    "asset_id": "AST.STANDISH.RE1",
    "valuation_usd": 18500000,
    "valuation_basis": "High-Value Residential band ($5.0M-$35.0M) per US High-Value Residential Real Estate reference; positioned upper-mid band reflecting Aspen-tier ranch estate acreage and finish."
  },
  {
    "asset_id": "AST.STANDISH.AUTO",
    "valuation_usd": 6200000,
    "valuation_basis": "6-Car Curated Collection band ($4.0M-$9.0M) per Curated Collector Car Collections reference; positioned mid-band for a boutique classic-plus-modern-exotic mix."
  },
  {
    "asset_id": "AST.ROTHBURY.YACHT",
    "valuation_usd": 42000000,
    "valuation_basis": "S4 band (50m full-custom superyacht, $26.0M-$68.0M) per Motor Superyacht Resale reference; positioned mid-band reflecting a mid-life custom build with documented refit and charter history."
  },
  {
    "asset_id": "AST.ROTHBURY.RE1",
    "valuation_usd": 27000000,
    "valuation_basis": "High-Value Residential band ($5.0M-$35.0M) per US High-Value Residential Real Estate reference, applied as the nearest comparable UHNW tier for an international trophy estate; positioned near the top of band reflecting Lake Como lakefront prestige."
  },
  {
    "asset_id": "AST.ROTHBURY.RE2",
    "valuation_usd": 8800000,
    "valuation_basis": "Additional Property band ($1.2M-$10.0M) per US High-Value Residential Real Estate reference; positioned near the top of band reflecting Palm Beach oceanfront positioning."
  },
  {
    "asset_id": "AST.ROTHBURY.AUTO",
    "valuation_usd": 9500000,
    "valuation_basis": "8-Car Curated Collection band ($6.0M-$13.0M) per Curated Collector Car Collections reference; positioned mid-band reflecting a mix of trophy classics and modern hypercars."
  },
  {
    "asset_id": "AST.NORWOOD.YACHT",
    "valuation_usd": 365000000,
    "valuation_basis": "S7 band (115m flagship giga yacht, $270.0M-$490.0M) per Motor Superyacht Resale reference; positioned mid-band per replacement-cost appraisal standard given the thin open resale market at this size tier."
  },
  {
    "asset_id": "AST.NORWOOD.RE1",
    "valuation_usd": 22000000,
    "valuation_basis": "High-Value Residential band ($5.0M-$35.0M) per US High-Value Residential Real Estate reference; positioned upper-mid band reflecting Martha's Vineyard trophy coastal pricing."
  },
  {
    "asset_id": "AST.NORWOOD.AUTO",
    "valuation_usd": 15500000,
    "valuation_basis": "12-Car Curated Collection band ($10.0M-$20.0M) per Curated Collector Car Collections reference; positioned mid-band reflecting a deep bench of classic and modern hypercar pieces."
  },
  {
    "asset_id": "AST.BALLANTINE.YACHT",
    "valuation_usd": 195000000,
    "valuation_basis": "S6 band (90m megayacht tier, $120.0M-$290.0M) per Motor Superyacht Resale reference; positioned mid-band reflecting a mid-life custom megayacht with documented refit history."
  },
  {
    "asset_id": "AST.BALLANTINE.RE1",
    "valuation_usd": 16000000,
    "valuation_basis": "High-Value Residential band ($5.0M-$35.0M) per US High-Value Residential Real Estate reference; positioned mid-band consistent with Hamptons-tier luxury residential pricing."
  },
  {
    "asset_id": "AST.BALLANTINE.AUTO",
    "valuation_usd": 10200000,
    "valuation_basis": "8-Car Curated Collection band ($6.0M-$13.0M) per Curated Collector Car Collections reference; positioned upper-mid band reflecting a trophy-heavy classic and hypercar mix."
  },
  {
    "asset_id": "AST.CHASTAIN.RE1",
    "valuation_usd": 19500000,
    "valuation_basis": "High-Value Residential band ($5.0M-$35.0M) per US High-Value Residential Real Estate reference; positioned mid-upper band reflecting Sun Valley-tier historic estate pricing."
  },
  {
    "asset_id": "AST.CHASTAIN.RE2",
    "valuation_usd": 7600000,
    "valuation_basis": "Additional Property band ($1.2M-$10.0M) per US High-Value Residential Real Estate reference; positioned upper band reflecting Miami oceanfront positioning."
  },
  {
    "asset_id": "AST.CHASTAIN.AUTO",
    "valuation_usd": 8900000,
    "valuation_basis": "8-Car Curated Collection band ($6.0M-$13.0M) per Curated Collector Car Collections reference; positioned lower-mid band reflecting a balanced classic-and-exotic mix."
  },
  {
    "asset_id": "AST.CARRINGTON.YACHT",
    "valuation_usd": 13800000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S3 ($8.5M-$27M, 32m entry-level custom superyacht tier); positioned mid-band reflecting an 8-year-old hull offset by a 2020 major refit."
  },
  {
    "asset_id": "AST.CARRINGTON.AVI",
    "valuation_usd": 12800000,
    "valuation_basis": "Private Aviation Hull Insurance band for Airbus H175 ($8M-$17M, in-production heavy offshore/SAR twin); positioned mid-band for a 2019-vintage airframe with a 2021 avionics/maintenance upgrade."
  },
  {
    "asset_id": "AST.GREVILLE.YACHT",
    "valuation_usd": 195000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S6 ($120M-$290M, 90m megayacht tier); positioned upper-mid-band reflecting new-build 2018 delivery and a substantial 2021 refit against thin resale-comp liquidity at this size."
  },
  {
    "asset_id": "AST.GREVILLE.AVI",
    "valuation_usd": 20500000,
    "valuation_basis": "Private Aviation Hull Insurance band for Cessna Citation Longitude ($15M-$23M, in-production super-midsize); positioned upper-mid-band for a low-hour 2020-delivery airframe with a 2022 cabin/avionics upgrade."
  },
  {
    "asset_id": "AST.GREVILLE.AUTO",
    "valuation_usd": 7300000,
    "valuation_basis": "Curated Collector Car Collections band for a 6-Car Curated Collection ($4M-$9M); positioned upper-mid-band reflecting a blended classic/modern-exotic mix assembled and expanded 2019-2021."
  },
  {
    "asset_id": "AST.FAIRWEATHER.AUTO",
    "valuation_usd": 5900000,
    "valuation_basis": "Curated Collector Car Collections band for a 6-Car Curated Collection ($4M-$9M); positioned mid-band reflecting turnover (one deaccessioned unit, one hypercar addition) that keeps the mix moderately blue-chip rather than trophy-heavy."
  },
  {
    "asset_id": "AST.KENSINGTON.YACHT",
    "valuation_usd": 4100000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S2 ($2M-$7.8M, 20m semi-custom flybridge motor yacht tier); positioned mid-band for a 2019-acquired hull with a 2021 engine/navigation refit."
  },
  {
    "asset_id": "AST.JESSOP.YACHT",
    "valuation_usd": 112000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S5 ($60M-$155M, 70m large custom superyacht tier); positioned mid-upper-band reflecting new-build 2018 delivery and a substantial 2020 beach-club refit."
  },
  {
    "asset_id": "AST.JESSOP.RE1",
    "valuation_usd": 27500000,
    "valuation_basis": "US High-Value Residential Real Estate band, High-Value Residential tier ($5M-$35M); positioned near the top of the band reflecting trophy oceanfront positioning and a full 2021 renovation, consistent with the reference's top-tier luxury-segment comps."
  },
  {
    "asset_id": "AST.JESSOP.AUTO",
    "valuation_usd": 8100000,
    "valuation_basis": "Curated Collector Car Collections band for a 6-Car Curated Collection ($4M-$9M); positioned upper-band reflecting the 2022 addition of a modern hypercar to the core."
  },
  {
    "asset_id": "AST.RAVENSWORTH.YACHT",
    "valuation_usd": 620000,
    "valuation_basis": "S1 band ($280K-$950K) for a 12m production flybridge motor yacht (Sunseeker/Princess/Fairline tier); priced mid-band reflecting a well-maintained, moderately aged hull."
  },
  {
    "asset_id": "AST.RAVENSWORTH.RE1",
    "valuation_usd": 14500000,
    "valuation_basis": "High-Value Residential band ($5M-$35M) for UHNW primary/secondary properties in Aspen/Hamptons/Palm Beach-tier markets; Sag Harbor historic waterfront estate priced upper-mid band reflecting trophy status and lot scarcity."
  },
  {
    "asset_id": "AST.QUINTRELL.YACHT",
    "valuation_usd": 4900000,
    "valuation_basis": "S2 band ($2.0M-$7.8M) for a 20m semi-custom/production flybridge motor yacht (Sunseeker 76/Princess X95/Azimut Grande tier); priced upper-mid band reflecting a well-specified, moderately aged vessel."
  },
  {
    "asset_id": "AST.QUINTRELL.RE1",
    "valuation_usd": 27000000,
    "valuation_basis": "High-Value Residential band ($5M-$35M); Cap Ferrat is among the most land-constrained ultra-prime markets on the French Riviera, priced near the top of the band reflecting trophy waterfront positioning."
  },
  {
    "asset_id": "AST.QUINTRELL.AUTO",
    "valuation_usd": 9800000,
    "valuation_basis": "8-Car Curated Collection band ($6.0M-$13.0M) per the Curated Collector Car methodology; priced mid-band reflecting a blended classic/modern-exotic mix without an ultra-outlier trophy piece."
  },
  {
    "asset_id": "AST.COMBERFORD.YACHT",
    "valuation_usd": 16500000,
    "valuation_basis": "S3 band ($8.5M-$27.0M) for a 32m entry-level custom/semi-custom superyacht (Sanlorenzo/Westport/Horizon/Benetti tier); priced upper-mid band reflecting the vessel's status as a traded-up flagship for the family."
  },
  {
    "asset_id": "AST.COMBERFORD.RE1",
    "valuation_usd": 19000000,
    "valuation_basis": "High-Value Residential band ($5M-$35M); Hamptons luxury-segment comp, priced upper-mid band reflecting a fully renovated primary residence."
  },
  {
    "asset_id": "AST.COMBERFORD.RE2",
    "valuation_usd": 3600000,
    "valuation_basis": "Additional Property band ($1.2M-$10.0M), typically 20-40% of a primary UHNW residence's value; priced low-mid band reflecting a smaller secondary desert property."
  },
  {
    "asset_id": "AST.SEDGEMOOR.YACHT",
    "valuation_usd": 385000000,
    "valuation_basis": "S7 band ($270M-$490M) for a 115m flagship giga yacht (Feadship/Lurssen/Oceanco-class, Ahpo/Al Lusail scale); priced upper-mid band reflecting recent delivery and full custom specification, with the open resale market at this size essentially nonexistent so value tracks replacement-cost appraisal."
  },
  {
    "asset_id": "AST.SEDGEMOOR.AVI",
    "valuation_usd": 52000000,
    "valuation_basis": "Gulfstream G650 band ($28.0M-$62.0M) per Private Aviation Hull Insurance methodology; priced upper-mid band reflecting a relatively low-hour, well-optioned airframe."
  },
  {
    "asset_id": "AST.SEDGEMOOR.RE1",
    "valuation_usd": 24500000,
    "valuation_basis": "High-Value Residential band ($5M-$35M); Greenwich coastal estate priced upper-mid band reflecting waterfront positioning and post-renovation condition."
  },
  {
    "asset_id": "AST.SEDGEMOOR.AUTO",
    "valuation_usd": 4200000,
    "valuation_basis": "4-Car Curated Collection band ($2.5M-$6.0M) per the Curated Collector Car methodology; priced mid-upper band reflecting a boutique classic-plus-hypercar mix."
  },
  {
    "asset_id": "AST.GRANTHAM.YACHT",
    "valuation_usd": 44000000,
    "valuation_basis": "S4 band ($26.0M-$68.0M) for a 50m full-custom superyacht (Heesen/Feadship/Benetti/CRN tier); priced mid-band reflecting a mid-life vessel with a completed major refit."
  },
  {
    "asset_id": "AST.GRANTHAM.AVI",
    "valuation_usd": 47000000,
    "valuation_basis": "Gulfstream G650 band ($28.0M-$62.0M) per Private Aviation Hull Insurance methodology; priced mid-upper band reflecting a well-maintained, moderately aged airframe with recent cabin refurbishment."
  },
  {
    "asset_id": "AST.GRANTHAM.AUTO",
    "valuation_usd": 10400000,
    "valuation_basis": "8-Car Curated Collection band ($6.0M-$13.0M) per the Curated Collector Car methodology; priced upper-mid band reflecting two trophy-tier anchor pieces."
  },
  {
    "asset_id": "AST.OGILVIE.YACHT",
    "valuation_usd": 14500000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S3 ($8.5M-$27M): 32m entry-level custom/semi-custom superyacht (Sanlorenzo/Westport/Horizon/Benetti Classic tier), positioned mid-band reflecting moderate age and a completed refit."
  },
  {
    "asset_id": "AST.OGILVIE.AVI",
    "valuation_usd": 17500000,
    "valuation_basis": "Private Aviation Hull Insurance band 'Bombardier Challenger 350' ($13M-$26M): in-production super-midsize jet, valued mid-band reflecting a mid-vintage low-to-moderate-hour airframe."
  },
  {
    "asset_id": "AST.OGILVIE.RE1",
    "valuation_usd": 18000000,
    "valuation_basis": "US High-Value Residential Real Estate band 'High-Value Residential' ($5M-$35M): trophy Newport, RI waterfront primary/secondary residence, positioned above midpoint reflecting waterfront frontage."
  },
  {
    "asset_id": "AST.OGILVIE.AUTO",
    "valuation_usd": 6200000,
    "valuation_basis": "Curated Collector Car Collections band '6-Car Curated Collection' ($4M-$9M): mid-band mix of one period classic, one modern hypercar, and blue-chip modern exotics."
  },
  {
    "asset_id": "AST.KILLIGREW.YACHT",
    "valuation_usd": 205000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S6 ($120M-$290M): 90m megayacht tier, valued against known ~90-95m transaction comps (Kismet-class); thin resale pool pushes agreed value toward replacement-cost appraisal."
  },
  {
    "asset_id": "AST.KILLIGREW.AVI",
    "valuation_usd": 21000000,
    "valuation_basis": "Private Aviation Hull Insurance band 'Bombardier Challenger 350' ($13M-$26M): valued above midpoint reflecting a newer, low-hour, direct-from-factory acquisition."
  },
  {
    "asset_id": "AST.KILLIGREW.RE1",
    "valuation_usd": 24000000,
    "valuation_basis": "US High-Value Residential Real Estate band 'High-Value Residential' ($5M-$35M): trophy Lake Como-tier estate, positioned above midpoint reflecting prestige lake-frontage comps."
  },
  {
    "asset_id": "AST.KILLIGREW.AUTO",
    "valuation_usd": 9800000,
    "valuation_basis": "Curated Collector Car Collections band '8-Car Curated Collection' ($6M-$13M): mid-band mix anchored by an F40-tier trophy classic and a Veyron/Chiron-tier hypercar."
  },
  {
    "asset_id": "AST.DEVEREUX.YACHT",
    "valuation_usd": 4200000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S2 ($2M-$7.8M): 20m semi-custom/production flybridge motor yacht (Sunseeker/Princess/Azimut Grande tier), positioned mid-band."
  },
  {
    "asset_id": "AST.DEVEREUX.RE1",
    "valuation_usd": 9500000,
    "valuation_basis": "US High-Value Residential Real Estate band 'High-Value Residential' ($5M-$35M): entry-tier luxury Miami lakefront residence, valued near the lower-middle of the band."
  },
  {
    "asset_id": "AST.DEVEREUX.AUTO",
    "valuation_usd": 5400000,
    "valuation_basis": "Curated Collector Car Collections band '6-Car Curated Collection' ($4M-$9M): lower-mid band reflecting a mix without a top-tier trophy anchor piece."
  },
  {
    "asset_id": "AST.ALDERTON.YACHT",
    "valuation_usd": 92000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S5 ($60M-$155M): 70m large custom superyacht (L\u00fcrssen/Oceanco/Feadship/Amels tier), positioned mid-band reflecting an established build with a completed refit."
  },
  {
    "asset_id": "AST.ALDERTON.RE1",
    "valuation_usd": 16500000,
    "valuation_basis": "US High-Value Residential Real Estate band 'High-Value Residential' ($5M-$35M): trophy Big Sky-tier estate, valued mid-band reflecting a renovated main residence and expanded grounds."
  },
  {
    "asset_id": "AST.ALDERTON.AUTO",
    "valuation_usd": 10500000,
    "valuation_basis": "Curated Collector Car Collections band '8-Car Curated Collection' ($6M-$13M): upper-mid band reflecting an Enzo-tier trophy classic paired with a Chiron-tier hypercar."
  },
  {
    "asset_id": "AST.INGLEWOOD.YACHT",
    "valuation_usd": 118000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S5 ($60M-$155M): 70m large custom superyacht, valued above midpoint reflecting a newer build delivered direct from the yard with a completed interior refit."
  },
  {
    "asset_id": "AST.INGLEWOOD.AVI",
    "valuation_usd": 15500000,
    "valuation_basis": "Private Aviation Hull Insurance band 'Bombardier Global 6000' ($11M-$22M): out-of-production large-cabin jet, valued mid-band reflecting a mid-vintage pre-owned airframe."
  },
  {
    "asset_id": "AST.INGLEWOOD.RE1",
    "valuation_usd": 21000000,
    "valuation_basis": "US High-Value Residential Real Estate band 'High-Value Residential' ($5M-$35M): trophy Martha's Vineyard-tier estate, valued above midpoint reflecting a renovated main house and guest cottage addition."
  },
  {
    "asset_id": "AST.INGLEWOOD.AUTO",
    "valuation_usd": 24500000,
    "valuation_basis": "Curated Collector Car Collections band '18-Car Curated Collection' ($16M-$32M): mid-band full-spectrum private collection anchored by multiple trophy classics and a deep modern hypercar bench."
  },
  {
    "asset_id": "AST.KILBRIDE.YACHT",
    "valuation_usd": 15800000,
    "valuation_basis": "S3-class Motor Superyacht band ($8.5M-$27M) for a 32m entry-level custom superyacht (Sanlorenzo/Westport/Horizon/Benetti tier); positioned mid-band reflecting a mid-2010s build with moderate refit history."
  },
  {
    "asset_id": "AST.KILBRIDE.AVI",
    "valuation_usd": 14200000,
    "valuation_basis": "Private Aviation Hull Insurance band for Bombardier Global 6000 ($11M-$22M), out-of-production large-cabin jet; positioned lower-mid band reflecting a mid-2010s vintage airframe with moderate flight hours."
  },
  {
    "asset_id": "AST.KILBRIDE.RE1",
    "valuation_usd": 12500000,
    "valuation_basis": "US High-Value Residential band ($5M-$35M) for a UHNW primary/secondary residence; positioned mid-band reflecting Nantucket's historic-district premium and waterfront proximity typical of Douglas Elliman luxury comps."
  },
  {
    "asset_id": "AST.KILBRIDE.RE2",
    "valuation_usd": 6800000,
    "valuation_basis": "US High-Value Residential 'Additional Property' band ($1.2M-$10M); positioned toward the upper end reflecting Malibu's premium coastal micro-market."
  },
  {
    "asset_id": "AST.DEVENPORT.YACHT",
    "valuation_usd": 92000000,
    "valuation_basis": "S5-class Motor Superyacht band ($60M-$155M) for a 70m large custom superyacht (Lurssen/Oceanco/Feadship/Amels tier); positioned mid-band reflecting a well-maintained late-2010s build with documented refit history."
  },
  {
    "asset_id": "AST.DEVENPORT.RE1",
    "valuation_usd": 18500000,
    "valuation_basis": "US High-Value Residential band ($5M-$35M); positioned upper-mid-band reflecting a trophy Palm Beach-tier estate with vineyard acreage, consistent with ILHM luxury-segment reporting."
  },
  {
    "asset_id": "AST.DEVENPORT.AUTO",
    "valuation_usd": 6300000,
    "valuation_basis": "Curated Collector Car Collections band for a 6-Car Curated Collection ($4M-$9M); positioned mid-band reflecting a blended classic-plus-modern-exotic mix consistent with realized RM Sotheby's/Gooding comps."
  },
  {
    "asset_id": "AST.ANCASTER.YACHT",
    "valuation_usd": 78000000,
    "valuation_basis": "S5-class Motor Superyacht band ($60M-$155M) for a 70m large custom superyacht; positioned lower-mid band reflecting an early-2010s build with a longer ownership and depreciation history."
  },
  {
    "asset_id": "AST.ANCASTER.RE1",
    "valuation_usd": 21000000,
    "valuation_basis": "US High-Value Residential band ($5M-$35M); positioned upper-mid-band reflecting a large-acreage Greenwich-tier estate consistent with Miller Samuel/Douglas Elliman luxury market comps."
  },
  {
    "asset_id": "AST.NORTHCOTE.AVI",
    "valuation_usd": 38500000,
    "valuation_basis": "Private Aviation Hull Insurance band for Dassault Falcon 8X ($30M-$50M), in-production ultra-long-range trijet; positioned lower-mid band reflecting a 2018-vintage airframe."
  },
  {
    "asset_id": "AST.NORTHCOTE.RE1",
    "valuation_usd": 16200000,
    "valuation_basis": "US High-Value Residential band ($5M-$35M); positioned mid-band reflecting an Aspen-tier lakefront residence consistent with ILHM luxury market comps."
  },
  {
    "asset_id": "AST.NORTHCOTE.AUTO",
    "valuation_usd": 4100000,
    "valuation_basis": "Curated Collector Car Collections band for a 4-Car Curated Collection ($2.5M-$6M); positioned mid-band reflecting a boutique classic-plus-hypercar mix."
  },
  {
    "asset_id": "AST.VANDERMEER.YACHT",
    "valuation_usd": 175000000,
    "valuation_basis": "S6-class Motor Superyacht band ($120M-$290M) for a 90m megayacht (Lurssen/Oceanco/Feadship tier); positioned mid-band reflecting a well-documented build with strong known-comp alignment to the ~90-95m tier."
  },
  {
    "asset_id": "AST.VANDERMEER.AVI",
    "valuation_usd": 17500000,
    "valuation_basis": "Private Aviation Hull Insurance band for Gulfstream G550 ($10M-$29M), out-of-production large-cabin jet; positioned lower-mid band reflecting a mid-2010s vintage airframe with moderate hours."
  },
  {
    "asset_id": "AST.VANDERMEER.RE1",
    "valuation_usd": 19800000,
    "valuation_basis": "US High-Value Residential band ($5M-$35M); positioned upper-mid-band reflecting a large-acreage Newport-tier coastal estate."
  },
  {
    "asset_id": "AST.VANDERMEER.AUTO",
    "valuation_usd": 4700000,
    "valuation_basis": "Curated Collector Car Collections band for a 4-Car Curated Collection ($2.5M-$6M); positioned upper-mid-band reflecting a boutique mix with a strong hypercar anchor."
  },
  {
    "asset_id": "AST.WHITMORE.AVI",
    "valuation_usd": 8200000,
    "valuation_basis": "Private Aviation Hull Insurance band, Gulfstream G450 ($5.0M-$12.0M): priced mid-band reflecting an out-of-production large-cabin airframe with moderate hours and an upgraded avionics package."
  },
  {
    "asset_id": "AST.WHITMORE.RE1",
    "valuation_usd": 19500000,
    "valuation_basis": "US High-Value Residential Real Estate band ($5.0M-$35.0M): priced in the upper-middle of the range reflecting a large, mixed commercial-scale Napa-tier holding."
  },
  {
    "asset_id": "AST.WHITMORE.AUTO",
    "valuation_usd": 6800000,
    "valuation_basis": "Curated Collector Car Collections band, 6-Car Curated Collection ($4.0M-$9.0M): priced in the upper-middle reflecting a well-rounded classic-plus-modern-exotic mix."
  },
  {
    "asset_id": "AST.MONTFORT.YACHT",
    "valuation_usd": 42000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value band S4 (50m full-custom superyacht, $26.0M-$68.0M): priced mid-band reflecting a mid-life custom-yard build with a moderate refit history."
  },
  {
    "asset_id": "AST.MONTFORT.RE1",
    "valuation_usd": 22000000,
    "valuation_basis": "High-Value Residential reference band ($5.0M-$35.0M): priced in the upper range reflecting a trophy lakefront/mountain estate comparable to Aspen/Napa-tier luxury comps."
  },
  {
    "asset_id": "AST.MONTFORT.RE2",
    "valuation_usd": 4200000,
    "valuation_basis": "US High-Value Residential Real Estate band, Additional Property class ($1.2M-$10.0M): priced mid-band reflecting a well-appointed secondary lakefront residence."
  },
  {
    "asset_id": "AST.ELLSWORTH.AVI",
    "valuation_usd": 6750000,
    "valuation_basis": "Private Aviation Hull Insurance band, Gulfstream G450 ($5.0M-$12.0M): priced toward the lower-middle reflecting higher airframe hours typical of an earlier-vintage example."
  },
  {
    "asset_id": "AST.ELLSWORTH.RE1",
    "valuation_usd": 16800000,
    "valuation_basis": "US High-Value Residential Real Estate band ($5.0M-$35.0M): priced mid-band reflecting a well-located but non-trophy luxury residence."
  },
  {
    "asset_id": "AST.GATTENBY.YACHT",
    "valuation_usd": 38500000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value band S4 (50m full-custom superyacht, $26.0M-$68.0M): priced mid-band reflecting moderate age with a documented refit history."
  },
  {
    "asset_id": "AST.GATTENBY.RE1",
    "valuation_usd": 12500000,
    "valuation_basis": "US High-Value Residential Real Estate band ($5.0M-$35.0M): priced in the lower-middle reflecting a high-value but non-trophy urban penthouse."
  },
  {
    "asset_id": "AST.GATTENBY.AUTO",
    "valuation_usd": 4300000,
    "valuation_basis": "Curated Collector Car Collections band, 4-Car Curated Collection ($2.5M-$6.0M): priced mid-band reflecting a boutique mix of one period classic and one modern hypercar."
  },
  {
    "asset_id": "AST.GROSVENOR.RE1",
    "valuation_usd": 9800000,
    "valuation_basis": "US High-Value Residential Real Estate band ($5.0M-$35.0M): priced near the lower end reflecting an entry-tier luxury-segment Hamptons-area property."
  },
  {
    "asset_id": "AST.GROSVENOR.AUTO",
    "valuation_usd": 3600000,
    "valuation_basis": "Curated Collector Car Collections band, 4-Car Curated Collection ($2.5M-$6.0M): priced toward the lower-middle reflecting a boutique classic-and-exotic mix without a halo hypercar anchor."
  },
  {
    "asset_id": "AST.ASHCOMBE.YACHT",
    "valuation_usd": 176500000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S6 (90m megayacht tier, $120M-$290M); priced mid-band reflecting a hull roughly a decade old with a 2020 major refit keeping systems current."
  },
  {
    "asset_id": "AST.ASHCOMBE.RE1",
    "valuation_usd": 29500000,
    "valuation_basis": "US High-Value Residential Real Estate band (primary UHNW residence, $5M-$35M); priced near the top of band reflecting beachfront trophy positioning in the Hamptons luxury market."
  },
  {
    "asset_id": "AST.ASHCOMBE.AUTO",
    "valuation_usd": 7600000,
    "valuation_basis": "Curated Collector Car Collections band (6-Car Curated Collection, $4M-$9M); priced upper-mid reflecting an added modern-hypercar tranche."
  },
  {
    "asset_id": "AST.GAINSBOROUGH.AVI",
    "valuation_usd": 13200000,
    "valuation_basis": "Private Aviation Hull Insurance band for Airbus H175 ($8M-$17M); priced upper-mid reflecting a 2019 delivery with a 2022 avionics/cabin refresh."
  },
  {
    "asset_id": "AST.GAINSBOROUGH.RE1",
    "valuation_usd": 15800000,
    "valuation_basis": "US High-Value Residential Real Estate band (primary UHNW residence, $5M-$35M); priced mid-band reflecting a renovated mountain-lakefront property in the Telluride luxury market."
  },
  {
    "asset_id": "AST.GAINSBOROUGH.AUTO",
    "valuation_usd": 4600000,
    "valuation_basis": "Curated Collector Car Collections band (4-Car Curated Collection, $2.5M-$6M); priced upper-mid reflecting an added modern hypercar."
  },
  {
    "asset_id": "AST.DELACROIX.YACHT",
    "valuation_usd": 96000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S5 (70m large custom superyacht tier, $60M-$155M); priced mid-band reflecting an approximately 8-year-old hull with a 2021 major refit."
  },
  {
    "asset_id": "AST.DELACROIX.AVI",
    "valuation_usd": 14500000,
    "valuation_basis": "Private Aviation Hull Insurance band for Bombardier Global 6000 ($11M-$22M, out of production since 2018); priced mid-band reflecting a pre-owned 2018 acquisition with a 2021 cabin/avionics refresh."
  },
  {
    "asset_id": "AST.DELACROIX.RE1",
    "valuation_usd": 31000000,
    "valuation_basis": "US High-Value Residential Real Estate band (primary UHNW residence, $5M-$35M); priced near the top of band reflecting trophy waterfront positioning consistent with the top end of the luxury comp set."
  },
  {
    "asset_id": "AST.RADCLIFFETHISTLEWOOD.YACHT",
    "valuation_usd": 44000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S4 (50m full-custom superyacht tier, $26M-$68M); priced mid-band reflecting a 2022 major refit including new engines."
  },
  {
    "asset_id": "AST.RADCLIFFETHISTLEWOOD.RE1",
    "valuation_usd": 21500000,
    "valuation_basis": "US High-Value Residential Real Estate band (primary UHNW residence, $5M-$35M); priced upper-mid reflecting Vail's premium ski-market positioning and a 2023 renovation."
  },
  {
    "asset_id": "AST.RADCLIFFETHISTLEWOOD.RE2",
    "valuation_usd": 6400000,
    "valuation_basis": "US High-Value Residential Real Estate band (secondary/additional property, $1.2M-$10M); priced upper-mid reflecting Martha's Vineyard's premium coastal secondary-home market."
  },
  {
    "asset_id": "AST.BRACKENRIDGEBRAMWELL.YACHT",
    "valuation_usd": 215000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S6 (90m megayacht tier, $120M-$290M); priced toward the top of band reflecting a 2020 new-build delivery, among the youngest hulls in this size tier."
  },
  {
    "asset_id": "AST.BRACKENRIDGEBRAMWELL.AVI",
    "valuation_usd": 20500000,
    "valuation_basis": "Private Aviation Hull Insurance band for Cessna Citation Longitude ($15M-$23M); priced upper-mid reflecting a 2020 delivery and thin pre-owned supply keeping in-production values firm."
  },
  {
    "asset_id": "AST.BRACKENRIDGEBRAMWELL.RE1",
    "valuation_usd": 17500000,
    "valuation_basis": "US High-Value Residential Real Estate band (primary UHNW residence, $5M-$35M); priced mid-band reflecting a 2023 full interior renovation."
  },
  {
    "asset_id": "AST.BRACKENRIDGEBRAMWELL.AUTO",
    "valuation_usd": 6900000,
    "valuation_basis": "Curated Collector Car Collections band (6-Car Curated Collection, $4M-$9M); priced upper-mid reflecting an added modern-hypercar tranche."
  },
  {
    "asset_id": "AST.KENSINGTONOVERBURY.YACHT",
    "valuation_usd": 172000000,
    "valuation_basis": "Motor Superyacht Resale/Insured Hull Value band S6 ($120M-$290M): 90m megayacht tier (Lurssen/Oceanco/Feadship-class); priced mid-band reflecting a well-maintained flagship vessel with a completed major refit and thin resale-comp pool typical of this size class."
  },
  {
    "asset_id": "AST.KENSINGTONOVERBURY.RE1",
    "valuation_usd": 14500000,
    "valuation_basis": "US High-Value Residential Real Estate band ($5M-$35M): priced toward the middle of the luxury-market band appropriate for an Aspen/Telluride-tier ski chalet, below trophy-compound scale."
  },
  {
    "asset_id": "AST.KENSINGTONOVERBURY.AUTO",
    "valuation_usd": 9200000,
    "valuation_basis": "Curated Collector Car Collections band, 8-Car tier ($6M-$13M): priced mid-band reflecting a mix anchored by an F40/Enzo-tier classic and a Veyron/Chiron-tier hypercar alongside blue-chip modern exotics."
  },
  {
    "asset_id": "AST.KENSINGTONUNDERHILL.AVI",
    "valuation_usd": 19500000,
    "valuation_basis": "Private Aviation Hull Insurance band, Cessna Citation Longitude ($15M-$23M): in-production super-midsize with thin pre-owned supply keeping values firm; priced upper-mid-band reflecting a relatively low-hour, low-vintage airframe."
  },
  {
    "asset_id": "AST.KENSINGTONUNDERHILL.RE1",
    "valuation_usd": 28000000,
    "valuation_basis": "US High-Value Residential Real Estate band ($5M-$35M): priced toward the upper end of the band reflecting the scale of a Manhattan commercial plaza relative to the segment's luxury-property comps."
  },
  {
    "asset_id": "AST.KENSINGTONUNDERHILL.RE2",
    "valuation_usd": 6500000,
    "valuation_basis": "US High-Value Residential Real Estate band, Additional Property tier ($1.2M-$10M): priced mid-band reflecting a working vineyard estate consistent with the secondary/vacation-property segment."
  },
  {
    "asset_id": "AST.KENSINGTONUNDERHILL.AUTO",
    "valuation_usd": 24000000,
    "valuation_basis": "Curated Collector Car Collections band, 18-Car tier ($16M-$32M): priced upper-mid-band reflecting a full-spectrum collection with two to three trophy-tier classics anchoring a deep modern hypercar bench."
  },
  {
    "asset_id": "AST.MERRIVALEANCASTER.RE1",
    "valuation_usd": 17500000,
    "valuation_basis": "US High-Value Residential Real Estate band ($5M-$35M): priced mid-band consistent with a Newport, RI waterfront-tier trophy residence."
  },
  {
    "asset_id": "AST.MERRIVALEANCASTER.RE2",
    "valuation_usd": 7800000,
    "valuation_basis": "US High-Value Residential Real Estate band, Additional Property tier ($1.2M-$10M): priced upper-mid-band reflecting the income-producing scale of a Nantucket commercial plaza relative to the secondary-property segment."
  },
  {
    "asset_id": "AST.MERRIVALEANCASTER.AUTO",
    "valuation_usd": 6200000,
    "valuation_basis": "Curated Collector Car Collections band, 6-Car tier ($4M-$9M): priced mid-band reflecting a boutique mix broadened by a second period classic and second modern exotic."
  },
  {
    "asset_id": "AST.HARCOURTLACHANCE.YACHT",
    "valuation_usd": 15500000,
    "valuation_basis": "Motor Superyacht Resale/Insured Hull Value band S3 ($8.5M-$27M): 32m entry-level custom/semi-custom superyacht tier (Sanlorenzo/Westport/Horizon/Benetti Classic-Oasis-class); priced mid-band reflecting a mid-life vessel with a completed refit and active charter use."
  },
  {
    "asset_id": "AST.HARCOURTLACHANCE.RE1",
    "valuation_usd": 22000000,
    "valuation_basis": "US High-Value Residential Real Estate band ($5M-$35M): priced upper-mid-band reflecting a multi-building compound scale rather than a single trophy residence."
  },
  {
    "asset_id": "AST.HARCOURTLACHANCE.AUTO",
    "valuation_usd": 8700000,
    "valuation_basis": "Curated Collector Car Collections band, 8-Car tier ($6M-$13M): priced upper-mid-band reflecting a Gullwing-era classic anchor plus multiple later hypercar and modern-exotic additions."
  },
  {
    "asset_id": "AST.FENWICKTALBOT.AVI",
    "valuation_usd": 41000000,
    "valuation_basis": "Private Aviation Hull Insurance band, Dassault Falcon 8X ($30M-$50M): in-production ultra-long-range trijet holding value better than twin-engine peers; priced mid-band reflecting a mid-vintage airframe with completed cabin refresh."
  },
  {
    "asset_id": "AST.FENWICKTALBOT.RE1",
    "valuation_usd": 19500000,
    "valuation_basis": "US High-Value Residential Real Estate band ($5M-$35M): priced mid-band consistent with a Martha's Vineyard-tier ranch estate with working land and multiple structures."
  },
  {
    "asset_id": "AST.BRAMWELLANCASTER.YACHT",
    "valuation_usd": 98500000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value band S5 ($60,000,000-$155,000,000): 70m full-custom superyacht valued upper-mid-band reflecting a relatively recent build and Lurssen/Oceanco/Feadship-tier specification."
  },
  {
    "asset_id": "AST.BRAMWELLANCASTER.RE1",
    "valuation_usd": 21000000,
    "valuation_basis": "US High-Value Residential Real Estate band, High-Value Residential ($5,000,000-$35,000,000): Newport oceanfront compound priced in the upper-middle of the trophy waterfront tier."
  },
  {
    "asset_id": "AST.BRAMWELLANCASTER.AUTO",
    "valuation_usd": 9600000,
    "valuation_basis": "Curated Collector Car Collections band, 8-Car Curated Collection ($6,000,000-$13,000,000): valued mid-band reflecting a blue-chip mix of period classics and modern exotics."
  },
  {
    "asset_id": "AST.JESSOPJARNAC.YACHT",
    "valuation_usd": 610000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value band S1 ($280,000-$950,000): 12m production flybridge cruiser valued mid-band reflecting moderate age and standard specification."
  },
  {
    "asset_id": "AST.JESSOPJARNAC.RE1",
    "valuation_usd": 8200000,
    "valuation_basis": "US High-Value Residential Real Estate band, High-Value Residential ($5,000,000-$35,000,000): Charleston-area mountain residence priced toward the lower-middle of the primary-residence tier."
  },
  {
    "asset_id": "AST.JESSOPJARNAC.AUTO",
    "valuation_usd": 7400000,
    "valuation_basis": "Curated Collector Car Collections band, 8-Car Curated Collection ($6,000,000-$13,000,000): valued toward the lower end, reflecting a collection weighted toward blue-chip modern exotics rather than trophy-tier classics."
  },
  {
    "asset_id": "AST.HARTLEYOVERBURY.YACHT",
    "valuation_usd": 15800000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value band S3 ($8,500,000-$27,000,000): 32m entry-level custom superyacht valued mid-band, typical of this segment's age/refit-status spread."
  },
  {
    "asset_id": "AST.HARTLEYOVERBURY.AVI",
    "valuation_usd": 16500000,
    "valuation_basis": "Private Aviation Hull Insurance band, Gulfstream G550 ($10,000,000-$29,000,000): valued mid-band, consistent with a mid-vintage airframe carrying moderate hours off the ~$61.5M original list price."
  },
  {
    "asset_id": "AST.HARTLEYOVERBURY.RE1",
    "valuation_usd": 19500000,
    "valuation_basis": "US High-Value Residential Real Estate band, High-Value Residential ($5,000,000-$35,000,000): Charleston waterfront estate priced upper-middle, reflecting premium water frontage."
  },
  {
    "asset_id": "AST.HARTLEYOVERBURY.AUTO",
    "valuation_usd": 4100000,
    "valuation_basis": "Curated Collector Car Collections band, 4-Car Curated Collection ($2,500,000-$6,000,000): valued mid-band reflecting a boutique mix of one classic icon and modern exotics."
  },
  {
    "asset_id": "AST.MONTFORTOGILVIE.YACHT",
    "valuation_usd": 365000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value band S7 ($270,000,000-$490,000,000): 115m flagship giga yacht valued mid-upper-band; at this size the open resale market is thin, so insured value tracks replacement-cost appraisal."
  },
  {
    "asset_id": "AST.MONTFORTOGILVIE.AVI",
    "valuation_usd": 48000000,
    "valuation_basis": "Private Aviation Hull Insurance band, Gulfstream G650 ($28,000,000-$62,000,000): valued upper-mid-band, reflecting a relatively low-hour, late-model airframe."
  },
  {
    "asset_id": "AST.MONTFORTOGILVIE.RE1",
    "valuation_usd": 32000000,
    "valuation_basis": "US High-Value Residential Real Estate band, High-Value Residential ($5,000,000-$35,000,000): Beverly Hills waterfront-adjacent estate priced at the top of the trophy tier, consistent with this family's ultra-high-net-worth profile."
  },
  {
    "asset_id": "AST.OVERBURYDRUMMOND.RE1",
    "valuation_usd": 6800000,
    "valuation_basis": "US High-Value Residential Real Estate band, High-Value Residential ($5,000,000-$35,000,000): ski chalet priced toward the lower end of the primary-residence tier."
  },
  {
    "asset_id": "AST.OVERBURYDRUMMOND.AUTO",
    "valuation_usd": 8300000,
    "valuation_basis": "Curated Collector Car Collections band, 8-Car Curated Collection ($6,000,000-$13,000,000): valued mid-low-band reflecting a solid blue-chip mix without top trophy-tier pieces."
  },
  {
    "asset_id": "AST.THORNBURYRUTHERGLEN.YACHT",
    "valuation_usd": 15500000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S3 ($8.5M-$27M): 32m entry-level custom/semi-custom superyacht tier (Sanlorenzo/Westport/Horizon/Benetti Classic-Oasis comps); positioned mid-band reflecting a moderately aged hull with a documented refit history."
  },
  {
    "asset_id": "AST.THORNBURYRUTHERGLEN.RE1",
    "valuation_usd": 8500000,
    "valuation_basis": "US High-Value Residential Real Estate band ($5M-$35M): Palm Springs desert-mountain luxury market entry-to-mid tier per ILHM/Douglas Elliman luxury reporting; priced toward the lower-middle of the band as a secondary winter retreat rather than a trophy compound."
  },
  {
    "asset_id": "AST.THORNBURYRUTHERGLEN.RE2",
    "valuation_usd": 4200000,
    "valuation_basis": "US High-Value Residential Real Estate band, Additional Property tier ($1.2M-$10M): secondary vacation property priced at roughly 20-40% of a primary UHNW residence per NAR/Redfin luxury-segment reporting; positioned mid-band reflecting a completed interior renovation."
  },
  {
    "asset_id": "AST.THORNBURYRUTHERGLEN.AUTO",
    "valuation_usd": 6200000,
    "valuation_basis": "Curated Collector Car Collections band, 6-Car Curated Collection tier ($4M-$9M): classic-plus-modern-exotic mix per RM Sotheby's/Gooding & Company/Bonhams comps; positioned mid-band reflecting one deaccessioned unit offset by newer hypercar additions."
  },
  {
    "asset_id": "AST.LACHANCELANSDOWNE.YACHT",
    "valuation_usd": 4600000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S2 ($2M-$7.8M): 20m production/semi-custom flybridge motor yacht tier (Sunseeker/Princess/Azimut Grande comps); positioned upper-mid band reflecting a relatively young hull with a documented electronics/engine refit."
  },
  {
    "asset_id": "AST.LACHANCELANSDOWNE.AVI",
    "valuation_usd": 15500000,
    "valuation_basis": "Private Aviation Hull Insurance band, Bombardier Global 6000 ($11M-$22M): out-of-production large-cabin long-range jet, steep depreciation off original list; positioned mid-band reflecting cabin refurbishment and avionics upgrade history."
  },
  {
    "asset_id": "AST.LACHANCELANSDOWNE.RE1",
    "valuation_usd": 24000000,
    "valuation_basis": "US High-Value Residential Real Estate band ($5M-$35M): Aspen luxury market trophy tier per Douglas Elliman/ILHM Aspen market reporting; positioned toward the upper band reflecting a completed guest-wing renovation and premium river-frontage siting."
  },
  {
    "asset_id": "AST.LACHANCELANSDOWNE.AUTO",
    "valuation_usd": 8800000,
    "valuation_basis": "Curated Collector Car Collections band, 8-Car Curated Collection tier ($6M-$13M): broadened classic-plus-hypercar mix per RM Sotheby's/Bring a Trailer comps; positioned mid-band reflecting turnover of two earlier vehicles against newer trophy additions."
  },
  {
    "asset_id": "AST.ELPHINSTONERADCLIFFE.YACHT",
    "valuation_usd": 42000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S4 ($26M-$68M): 50m full-custom superyacht tier (Heesen/Feadship/Benetti/CRN comps); positioned lower-mid band reflecting a mid-life hull now supported by a completed exterior/interior refit and active charter deployment."
  },
  {
    "asset_id": "AST.ELPHINSTONERADCLIFFE.RE1",
    "valuation_usd": 19000000,
    "valuation_basis": "US High-Value Residential Real Estate band ($5M-$35M): Malibu luxury coastal market upper-mid tier per Douglas Elliman/ILHM luxury reporting; positioned above midpoint reflecting seismic retrofitting and full landscape renovation as a primary West Coast residence."
  },
  {
    "asset_id": "AST.ELPHINSTONERADCLIFFE.AUTO",
    "valuation_usd": 5400000,
    "valuation_basis": "Curated Collector Car Collections band, 6-Car Curated Collection tier ($4M-$9M): classic-plus-modern-exotic mix per RM Sotheby's/Gooding & Company comps; positioned low-mid band following a recent deaccession that trimmed the collection's total roster value."
  },
  {
    "asset_id": "AST.BRAMWELLNIGHTINGALE.YACHT",
    "valuation_usd": 185000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S6 ($120M-$290M): 90m megayacht tier (Lurssen/Oceanco/Feadship, Kismet-class comps); positioned mid-band given a thin resale pool at this size, with agreed value weighted toward replacement-cost appraisal and supported by a completed 5-year systems overhaul."
  },
  {
    "asset_id": "AST.BRAMWELLNIGHTINGALE.AVI",
    "valuation_usd": 18200000,
    "valuation_basis": "Private Aviation Hull Insurance band, Bombardier Global 6000 ($11M-$22M): out-of-production large-cabin long-range jet; positioned upper-mid band reflecting a relatively low-hour airframe with a recent cabin refresh and updated satcom suite."
  },
  {
    "asset_id": "AST.BRAMWELLNIGHTINGALE.RE1",
    "valuation_usd": 27500000,
    "valuation_basis": "US High-Value Residential Real Estate band ($5M-$35M): Nantucket luxury coastal market trophy tier per Douglas Elliman/ILHM luxury reporting; positioned upper band reflecting waterfront siting and completed guest-cottage and dock renovation."
  },
  {
    "asset_id": "AST.BRAMWELLNIGHTINGALE.AUTO",
    "valuation_usd": 24500000,
    "valuation_basis": "Curated Collector Car Collections band, 18-Car Curated Collection tier ($16M-$32M): full-spectrum private collection with multiple trophy-tier classics anchoring a deep modern hypercar bench per RM Sotheby's/Gooding & Company comps; positioned mid-band reflecting a roster refined by prior deaccessions."
  },
  {
    "asset_id": "AST.STAVROSRADCLIFFE.YACHT",
    "valuation_usd": 98000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S5 ($60M-$155M): 70m large custom superyacht tier (Lurssen/Oceanco/Feadship/Amels comps); positioned lower-mid band given the thin resale pool at this size, supported by a documented repaint and stabilization-system upgrade."
  },
  {
    "asset_id": "AST.STAVROSRADCLIFFE.RE1",
    "valuation_usd": 16500000,
    "valuation_basis": "US High-Value Residential Real Estate band ($5M-$35M): Vail ski-market upper-mid tier per Douglas Elliman/ILHM luxury reporting; positioned above midpoint reflecting ski-in/ski-out access and a renovated entertainment level."
  },
  {
    "asset_id": "AST.STAVROSRADCLIFFE.AUTO",
    "valuation_usd": 14200000,
    "valuation_basis": "Curated Collector Car Collections band, 12-Car Curated Collection tier ($10M-$20M): deepened classic-plus-hypercar bench per RM Sotheby's/Bonhams comps; positioned mid-band reflecting turnover of two units against newer trophy-tier additions."
  },
  {
    "asset_id": "AST.KENSINGTONASHWORTH.YACHT",
    "valuation_usd": 172000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value band S6 ($120M-$290M): 90m megayacht tier, positioned upper-mid reflecting a ~10-12yr hull age with a completed major refit, consistent with 90m comps (Kismet-class)."
  },
  {
    "asset_id": "AST.KENSINGTONASHWORTH.AVI",
    "valuation_usd": 9500000,
    "valuation_basis": "Private Aviation Hull Insurance band, Gulfstream G450 ($5M-$12M): positioned upper-mid reflecting moderate hours and a post-2021 avionics upgrade keeping the airframe current."
  },
  {
    "asset_id": "AST.KENSINGTONASHWORTH.RE1",
    "valuation_usd": 14500000,
    "valuation_basis": "US High-Value Residential Real Estate band, High-Value Residential ($5M-$35M): Charleston coastal estate positioned in the lower-mid band, consistent with waterfront trophy properties below the $25M+ outlier tier."
  },
  {
    "asset_id": "AST.KENSINGTONASHWORTH.RE2",
    "valuation_usd": 8200000,
    "valuation_basis": "US High-Value Residential Real Estate band, Additional Property ($1.2M-$10M): positioned near the top of the band reflecting Manhattan's premium secondary-property market within this size class."
  },
  {
    "asset_id": "AST.KENSINGTONASHWORTH.AUTO",
    "valuation_usd": 6800000,
    "valuation_basis": "Curated Collector Car Collections band, 6-Car ($4M-$9M): mid-band blended $/car consistent with a curated mix of one classic icon, one modern hypercar, and blue-chip modern exotics."
  },
  {
    "asset_id": "AST.JESSOPPRENTISS.YACHT",
    "valuation_usd": 15500000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value band S3 ($8.5M-$27M): mid-band for a 32m entry-level custom superyacht with moderate age and one completed refit."
  },
  {
    "asset_id": "AST.JESSOPPRENTISS.AVI",
    "valuation_usd": 7200000,
    "valuation_basis": "Private Aviation Hull Insurance band, Gulfstream G450 ($5M-$12M): lower-mid band reflecting an older 2018-era acquisition vintage within this out-of-production type."
  },
  {
    "asset_id": "AST.JESSOPPRENTISS.RE1",
    "valuation_usd": 9800000,
    "valuation_basis": "US High-Value Residential Real Estate band, High-Value Residential ($5M-$35M): Newport penthouse positioned toward the lower end given its smaller footprint relative to full estate properties in this band."
  },
  {
    "asset_id": "AST.GREVILLEBRACKENRIDGE.YACHT",
    "valuation_usd": 195000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value band S6 ($120M-$290M): positioned in the upper band reflecting a new-build 2019 delivery and comparatively young hull age relative to the fleet."
  },
  {
    "asset_id": "AST.GREVILLEBRACKENRIDGE.RE1",
    "valuation_usd": 19000000,
    "valuation_basis": "US High-Value Residential Real Estate band, High-Value Residential ($5M-$35M): Miami mixed-use holding positioned mid-band."
  },
  {
    "asset_id": "AST.GREVILLEBRACKENRIDGE.RE2",
    "valuation_usd": 7600000,
    "valuation_basis": "US High-Value Residential Real Estate band, Additional Property ($1.2M-$10M): Hamptons vineyard estate positioned toward the upper end given the added vineyard acreage."
  },
  {
    "asset_id": "AST.GREVILLEBRACKENRIDGE.AUTO",
    "valuation_usd": 4300000,
    "valuation_basis": "Curated Collector Car Collections band, 4-Car ($2.5M-$6M): mid-band blended $/car for a boutique 4-car mix."
  },
  {
    "asset_id": "AST.CAVANAUGHALDERTON.YACHT",
    "valuation_usd": 92000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value band S5 ($60M-$155M): 70m custom superyacht positioned mid-band reflecting ~8yr age and a completed major refit."
  },
  {
    "asset_id": "AST.CAVANAUGHALDERTON.AVI",
    "valuation_usd": 11500000,
    "valuation_basis": "Private Aviation Hull Insurance band, Airbus H175 ($8M-$17M): mid-band reflecting moderate fleet hours consistent with a 2020-era acquisition."
  },
  {
    "asset_id": "AST.CAVANAUGHALDERTON.AUTO",
    "valuation_usd": 7100000,
    "valuation_basis": "Curated Collector Car Collections band, 6-Car ($4M-$9M): upper-mid band reflecting an expanded lineup including a trophy-tier hypercar addition."
  },
  {
    "asset_id": "AST.HOLLOWELLDEVENPORT.YACHT",
    "valuation_usd": 12800000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value band S3 ($8.5M-$27M): lower-mid band reflecting an older ~2018 acquisition vintage and a standard refit cycle."
  },
  {
    "asset_id": "AST.HOLLOWELLDEVENPORT.RE1",
    "valuation_usd": 16200000,
    "valuation_basis": "US High-Value Residential Real Estate band, High-Value Residential ($5M-$35M): Napa ranch estate positioned mid-band reflecting a working vineyard property with a renovated main residence."
  },
  {
    "asset_id": "AST.HOLLOWELLDEVENPORT.AUTO",
    "valuation_usd": 4650000,
    "valuation_basis": "Curated Collector Car Collections band, 4-Car ($2.5M-$6M): mid-band blended $/car for a boutique 4-car mix with one expansion."
  },
  {
    "asset_id": "AST.JARNACFOXLEIGH.YACHT",
    "valuation_usd": 92000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) \u2014 S5 band ($60M\u2013$155M), 70m large custom superyacht (Lurssen/Oceanco/Feadship tier); priced mid-band reflecting a moderately-aged, well-maintained hull."
  },
  {
    "asset_id": "AST.JARNACFOXLEIGH.RE1",
    "valuation_usd": 18500000,
    "valuation_basis": "US High-Value Residential Real Estate band ($5M\u2013$35M luxury-segment tier); priced upper-mid reflecting a large coastal compound with extensive grounds."
  },
  {
    "asset_id": "AST.UNDERHILLFARLEIGH.YACHT",
    "valuation_usd": 14200000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) \u2014 S3 band ($8.5M\u2013$27M), 32m entry-level custom/semi-custom superyacht (Sanlorenzo/Westport/Horizon tier); priced lower-mid reflecting mid-fleet age."
  },
  {
    "asset_id": "AST.UNDERHILLFARLEIGH.RE1",
    "valuation_usd": 21500000,
    "valuation_basis": "US High-Value Residential Real Estate band ($5M\u2013$35M luxury-segment tier); priced upper-mid reflecting an Aspen-market trophy property."
  },
  {
    "asset_id": "AST.UNDERHILLFARLEIGH.RE2",
    "valuation_usd": 7100000,
    "valuation_basis": "US High-Value Residential Real Estate \u2014 Additional Property band ($1.2M\u2013$10M, roughly 20\u201340% of primary residence value); priced upper-mid for a Greenwich waterfront villa."
  },
  {
    "asset_id": "AST.UNDERHILLFARLEIGH.AUTO",
    "valuation_usd": 23500000,
    "valuation_basis": "Curated Collector Car Collections band \u2014 18-Car tier ($16M\u2013$32M), full-spectrum private collection; priced upper-mid reflecting several trophy modern hypercars anchoring the bench."
  },
  {
    "asset_id": "AST.ELPHINSTONEJARNAC.YACHT",
    "valuation_usd": 41000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) \u2014 S4 band ($26M\u2013$68M), 50m full-custom superyacht (Heesen/Feadship/Benetti/CRN tier); priced mid-band."
  },
  {
    "asset_id": "AST.ELPHINSTONEJARNAC.AVI",
    "valuation_usd": 4300000,
    "valuation_basis": "Private Aviation Hull Insurance band \u2014 Sikorsky S-76 ($1.5M\u2013$9M, variant/hours-driven); priced mid-band consistent with a C+/C++-era airframe with moderate hours."
  },
  {
    "asset_id": "AST.ELPHINSTONEJARNAC.RE1",
    "valuation_usd": 16800000,
    "valuation_basis": "US High-Value Residential Real Estate band ($5M\u2013$35M luxury-segment tier); priced mid-band for a Sun Valley resort-market waterfront estate."
  },
  {
    "asset_id": "AST.PRENTISSESTERHAZY.YACHT",
    "valuation_usd": 172000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) \u2014 S6 band ($120M\u2013$290M), 90m megayacht tier (Lurssen/Oceanco/Feadship); priced mid-band given the thin resale pool at this size, comps drawn from known ~90\u201395m transactions."
  },
  {
    "asset_id": "AST.PRENTISSESTERHAZY.RE1",
    "valuation_usd": 30500000,
    "valuation_basis": "US High-Value Residential Real Estate band ($5M\u2013$35M luxury-segment tier) applied as the nearest comparable trophy-residential benchmark; priced near the top given the estate's ultra-prime European lakefront positioning."
  },
  {
    "asset_id": "AST.PRENTISSESTERHAZY.AUTO",
    "valuation_usd": 6900000,
    "valuation_basis": "Curated Collector Car Collections band \u2014 6-Car tier ($4M\u2013$9M); priced upper-mid reflecting a broadened rarity spread across period classics and modern exotics."
  },
  {
    "asset_id": "AST.INGLEWOODGROSVENOR.RE1",
    "valuation_usd": 27500000,
    "valuation_basis": "US High-Value Residential Real Estate band ($5M\u2013$35M luxury-segment tier); priced near the top reflecting a trophy historic Malibu coastal estate."
  },
  {
    "asset_id": "AST.INGLEWOODGROSVENOR.AUTO",
    "valuation_usd": 5400000,
    "valuation_basis": "Curated Collector Car Collections band \u2014 6-Car tier ($4M\u2013$9M); priced lower-mid reflecting a boutique-leaning mix without a top-tier hypercar anchor."
  },
  {
    "asset_id": "AST.LINDQVISTPELHAM.YACHT",
    "valuation_usd": 4600000,
    "valuation_basis": "Motor Superyacht Resale/Insured Hull Value (2026) band S2 (20m production/semi-custom flybridge motor yacht, $2.0M-$7.8M); mid-band placement reflects a moderately aged, well-maintained vessel."
  },
  {
    "asset_id": "AST.LINDQVISTPELHAM.RE1",
    "valuation_usd": 14500000,
    "valuation_basis": "US High-Value Residential Real Estate band (primary UHNW residence, $5M-$35M); mid-band placement reflects a trophy mountain-market property consistent with Aspen/Telluride-tier luxury comps."
  },
  {
    "asset_id": "AST.LINDQVISTPELHAM.AUTO",
    "valuation_usd": 24000000,
    "valuation_basis": "Curated Collector Car Collections band, 18-car tier ($16M-$32M full-spectrum classic + modern exotic/hypercar mix); mid-upper placement reflects several trophy-tier anchor pieces."
  },
  {
    "asset_id": "AST.YARDLEYOGILVIE.YACHT",
    "valuation_usd": 620000,
    "valuation_basis": "Motor Superyacht Resale/Insured Hull Value (2026) band S1 (12m production flybridge/express cruiser, $280K-$950K); mid-band placement reflects a moderately aged, well-maintained vessel."
  },
  {
    "asset_id": "AST.YARDLEYOGILVIE.RE1",
    "valuation_usd": 18000000,
    "valuation_basis": "US High-Value Residential Real Estate band (primary UHNW residence, $5M-$35M); upper-mid placement reflects a trophy waterfront villa toward the high end of the luxury-market band."
  },
  {
    "asset_id": "AST.YARDLEYOGILVIE.RE2",
    "valuation_usd": 6500000,
    "valuation_basis": "US High-Value Residential Real Estate \u2014 Additional Property band ($1.2M-$10M secondary/vacation residence); mid-band placement reflects a well-appointed ski-market secondary home."
  },
  {
    "asset_id": "AST.YARDLEYOGILVIE.RE3",
    "valuation_usd": 3200000,
    "valuation_basis": "US High-Value Residential Real Estate \u2014 Additional Property band ($1.2M-$10M secondary/vacation residence); lower-mid placement reflects a smaller condo-scale mountain unit."
  },
  {
    "asset_id": "AST.HEXHAMMERRIVALE.YACHT",
    "valuation_usd": 195000000,
    "valuation_basis": "Motor Superyacht Resale/Insured Hull Value (2026) band S6 (90m megayacht tier, $120M-$290M); mid-band placement reflects a well-maintained flagship-scale vessel with limited open-market comps."
  },
  {
    "asset_id": "AST.HEXHAMMERRIVALE.RE1",
    "valuation_usd": 22000000,
    "valuation_basis": "US High-Value Residential Real Estate band (primary UHNW residence, $5M-$35M); upper-mid placement reflects a trophy Napa-tier vineyard/waterfront estate."
  },
  {
    "asset_id": "AST.HEXHAMMERRIVALE.AUTO",
    "valuation_usd": 9200000,
    "valuation_basis": "Curated Collector Car Collections band, 8-car tier ($6M-$13M, adds F40/Enzo-tier trophy classic and Veyron/Chiron-tier hypercar); mid-band placement."
  },
  {
    "asset_id": "AST.NORTHCOTECASTELLAN.YACHT",
    "valuation_usd": 15500000,
    "valuation_basis": "Motor Superyacht Resale/Insured Hull Value (2026) band S3 (32m entry-level custom/semi-custom superyacht, $8.5M-$27M); mid-band placement reflects a moderately aged, well-kept vessel."
  },
  {
    "asset_id": "AST.NORTHCOTECASTELLAN.RE1",
    "valuation_usd": 28000000,
    "valuation_basis": "US High-Value Residential Real Estate band (trophy-tier property, $5M-$35M); upper placement reflects a large mixed-use Greenwich commercial asset near the top of the band."
  },
  {
    "asset_id": "AST.NORTHCOTECASTELLAN.AUTO",
    "valuation_usd": 6800000,
    "valuation_basis": "Curated Collector Car Collections band, 6-car tier ($4M-$9M, adds second period classic and limited-run modern exotic); mid-upper band placement."
  },
  {
    "asset_id": "AST.INGLEWOODCAVANAUGH.YACHT",
    "valuation_usd": 42000000,
    "valuation_basis": "Motor Superyacht Resale/Insured Hull Value (2026) band S4 (50m full-custom superyacht, $26M-$68M); mid-band placement reflects a well-maintained vessel with moderate refit history."
  },
  {
    "asset_id": "AST.INGLEWOODCAVANAUGH.AVI",
    "valuation_usd": 4200000,
    "valuation_basis": "Private Aviation Hull Insurance band, Sikorsky S-76 ($1.5M-$9M, variant/hours-driven); mid-band placement reflects a mid-generation C/C+ variant with moderate airframe hours."
  },
  {
    "asset_id": "AST.INGLEWOODCAVANAUGH.RE1",
    "valuation_usd": 19500000,
    "valuation_basis": "US High-Value Residential Real Estate band (primary UHNW residence, $5M-$35M); upper-mid placement reflects a trophy alpine estate consistent with the luxury market's upper tier."
  },
  {
    "asset_id": "AST.INGLEWOODCAVANAUGH.AUTO",
    "valuation_usd": 5900000,
    "valuation_basis": "Curated Collector Car Collections band, 6-car tier ($4M-$9M); lower-mid band placement reflects a newer, still-developing collection."
  },
  {
    "asset_id": "AST.PEMBERTONGATTENBY.YACHT",
    "valuation_usd": 42500000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S4 (50m, $26.0M-$68.0M) \u2014 Heesen/Feadship/Benetti/CRN full-custom tier; positioned mid-band reflecting a mid-fleet-age hull with a completed major refit."
  },
  {
    "asset_id": "AST.PEMBERTONGATTENBY.AVI",
    "valuation_usd": 19800000,
    "valuation_basis": "Private Aviation Hull Insurance band: Bombardier Challenger 350 ($13.0M-$26.0M), in-production super-midsize with a shallow depreciation curve; positioned mid-upper band for a relatively low-hour airframe."
  },
  {
    "asset_id": "AST.PEMBERTONGATTENBY.RE1",
    "valuation_usd": 24500000,
    "valuation_basis": "US High-Value Residential Real Estate band: High-Value Residential ($5.0M-$35.0M), UHNW primary-residence tier; positioned upper-mid band for a Manhattan waterfront trophy property."
  },
  {
    "asset_id": "AST.PEMBERTONGATTENBY.RE2",
    "valuation_usd": 6200000,
    "valuation_basis": "US High-Value Residential Real Estate band: Additional Property ($1.2M-$10.0M), secondary/vacation residence tier; positioned mid-band for a Greenwich penthouse."
  },
  {
    "asset_id": "AST.PEMBERTONGATTENBY.AUTO",
    "valuation_usd": 4300000,
    "valuation_basis": "Curated Collector Car Collections band: 4-Car Curated Collection ($2.5M-$6.0M), boutique classic-plus-hypercar mix; positioned mid-band."
  },
  {
    "asset_id": "AST.ASHCOMBEYARDLEY.AVI",
    "valuation_usd": 41000000,
    "valuation_basis": "Private Aviation Hull Insurance band: Dassault Falcon 8X ($30.0M-$50.0M), in-production ultra-long-range trijet holding value well; positioned upper-mid band."
  },
  {
    "asset_id": "AST.ASHCOMBEYARDLEY.RE1",
    "valuation_usd": 11800000,
    "valuation_basis": "US High-Value Residential Real Estate band: High-Value Residential ($5.0M-$35.0M), UHNW primary-residence tier; positioned lower-mid band for a Sun Valley penthouse."
  },
  {
    "asset_id": "AST.ASHCOMBEYARDLEY.AUTO",
    "valuation_usd": 15500000,
    "valuation_basis": "Curated Collector Car Collections band: 12-Car Curated Collection ($10.0M-$20.0M), deep classic-and-modern bench; positioned mid-band."
  },
  {
    "asset_id": "AST.TALBOTQUINTRELL.YACHT",
    "valuation_usd": 98000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S5 (70m, $60.0M-$155.0M) \u2014 Lurssen/Oceanco/Feadship/Amels tier; thin open-resale pool at this size means insured value tracks replacement-cost appraisal, positioned lower-mid band."
  },
  {
    "asset_id": "AST.TALBOTQUINTRELL.AVI",
    "valuation_usd": 12500000,
    "valuation_basis": "Private Aviation Hull Insurance band: Airbus H175 ($8.0M-$17.0M), in-production heavy offshore/SAR twin; positioned mid-band."
  },
  {
    "asset_id": "AST.TALBOTQUINTRELL.RE1",
    "valuation_usd": 27000000,
    "valuation_basis": "US High-Value Residential Real Estate band: High-Value Residential ($5.0M-$35.0M), UHNW primary-residence tier; positioned upper band reflecting Aspen's trophy mountain-estate premium."
  },
  {
    "asset_id": "AST.TALBOTQUINTRELL.RE2",
    "valuation_usd": 3900000,
    "valuation_basis": "US High-Value Residential Real Estate band: Additional Property ($1.2M-$10.0M), secondary residence tier; positioned lower-mid band for a Charleston penthouse."
  },
  {
    "asset_id": "AST.TALBOTQUINTRELL.AUTO",
    "valuation_usd": 3700000,
    "valuation_basis": "Curated Collector Car Collections band: 4-Car Curated Collection ($2.5M-$6.0M), boutique classic-plus-hypercar mix; positioned lower-mid band."
  },
  {
    "asset_id": "AST.ASHCOMBEIVANOVIC.YACHT",
    "valuation_usd": 16800000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S3 (32m, $8.5M-$27.0M) \u2014 Sanlorenzo/Westport/Horizon/Benetti Classic-Oasis entry-custom tier; positioned mid-band after a completed major refit."
  },
  {
    "asset_id": "AST.ASHCOMBEIVANOVIC.RE1",
    "valuation_usd": 19500000,
    "valuation_basis": "US High-Value Residential Real Estate band: High-Value Residential ($5.0M-$35.0M), UHNW primary-residence tier; positioned mid-band for a Miami waterfront estate."
  },
  {
    "asset_id": "AST.ASHCOMBEIVANOVIC.RE2",
    "valuation_usd": 5600000,
    "valuation_basis": "US High-Value Residential Real Estate band: Additional Property ($1.2M-$10.0M), secondary residence tier; positioned mid-band for a Sun Valley mountain residence."
  },
  {
    "asset_id": "AST.ASHCOMBEIVANOVIC.AUTO",
    "valuation_usd": 6400000,
    "valuation_basis": "Curated Collector Car Collections band: 6-Car Curated Collection ($4.0M-$9.0M), broadened classic-and-exotic mix; positioned mid-band."
  },
  {
    "asset_id": "AST.PENHALLOWJARNAC.YACHT",
    "valuation_usd": 12200000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S3 (32m, $8.5M-$27.0M) \u2014 entry-custom superyacht tier; positioned lower band reflecting an older hull acquired in 2018."
  },
  {
    "asset_id": "AST.PENHALLOWJARNAC.RE1",
    "valuation_usd": 14900000,
    "valuation_basis": "US High-Value Residential Real Estate band: High-Value Residential ($5.0M-$35.0M), UHNW primary-residence tier; positioned lower-mid band for a Sun Valley villa."
  },
  {
    "asset_id": "AST.PENHALLOWJARNAC.AUTO",
    "valuation_usd": 5300000,
    "valuation_basis": "Curated Collector Car Collections band: 6-Car Curated Collection ($4.0M-$9.0M), broadened classic-and-exotic mix; positioned lower-mid band."
  },
  {
    "asset_id": "AST.ESTERHAZYPRENTISS.YACHT",
    "valuation_usd": 178500000,
    "valuation_basis": "Motor Superyacht S6 band ($120M-$290M) for 90m megayacht tier (Lurssen/Oceanco/Feadship comps); priced upper-mid given full LOA match to the basis vessel and a completed major refit."
  },
  {
    "asset_id": "AST.ESTERHAZYPRENTISS.AVI",
    "valuation_usd": 18750000,
    "valuation_basis": "Private Aviation band for Cessna Citation Longitude ($15M-$23M); mid-range reflecting a 2021-vintage low-hour airframe."
  },
  {
    "asset_id": "AST.ESTERHAZYPRENTISS.RE1",
    "valuation_usd": 19500000,
    "valuation_basis": "US High-Value Residential band ($5M-$35M); priced toward the upper range for a trophy waterfront estate per ILHM luxury market comps."
  },
  {
    "asset_id": "AST.ESTERHAZYPRENTISS.RE2",
    "valuation_usd": 7200000,
    "valuation_basis": "US High-Value Residential 'Additional Property' band ($1.2M-$10M); mid-range for a Palm Beach beachfront secondary residence."
  },
  {
    "asset_id": "AST.ESTERHAZYPRENTISS.AUTO",
    "valuation_usd": 24500000,
    "valuation_basis": "Curated Collector Car band for an 18-car collection ($16M-$32M); mid-range for a full-spectrum classic-plus-hypercar mix."
  },
  {
    "asset_id": "AST.TREVELYANGATTENBY.YACHT",
    "valuation_usd": 165000000,
    "valuation_basis": "Motor Superyacht S6 band ($120M-$290M) for 90m megayacht tier; positioned below the Meridian-tier comp given an older build year and no recent major refit."
  },
  {
    "asset_id": "AST.TREVELYANGATTENBY.RE1",
    "valuation_usd": 14000000,
    "valuation_basis": "US High-Value Residential band ($5M-$35M); mid-range for a secondary mountain property."
  },
  {
    "asset_id": "AST.TREVELYANGATTENBY.AUTO",
    "valuation_usd": 15500000,
    "valuation_basis": "Curated Collector Car band for a 12-car collection ($10M-$20M); mid-range reflecting a balanced classic/modern mix."
  },
  {
    "asset_id": "AST.LACHANCEDUNMORE.RE1",
    "valuation_usd": 22000000,
    "valuation_basis": "US High-Value Residential band ($5M-$35M); priced high given the historic-estate premium typical of Aspen luxury comps."
  },
  {
    "asset_id": "AST.LACHANCEDUNMORE.AUTO",
    "valuation_usd": 6300000,
    "valuation_basis": "Curated Collector Car band for a 6-car collection ($4M-$9M); mid-range for a boutique classic-plus-exotic mix."
  },
  {
    "asset_id": "AST.BRAMWELLJARNAC.RE1",
    "valuation_usd": 11500000,
    "valuation_basis": "US High-Value Residential band ($5M-$35M); mid-range for a desert ranch-style estate."
  },
  {
    "asset_id": "AST.BRAMWELLJARNAC.AUTO",
    "valuation_usd": 27800000,
    "valuation_basis": "Curated Collector Car band for an 18-car collection ($16M-$32M); priced high-mid for a deep trophy-classic bench."
  },
  {
    "asset_id": "AST.SINCLAIRSTANDISH.RE1",
    "valuation_usd": 16800000,
    "valuation_basis": "US High-Value Residential band ($5M-$35M); mid-upper range for a Jackson Hole mountain trophy property."
  },
  {
    "asset_id": "AST.SINCLAIRSTANDISH.AUTO",
    "valuation_usd": 5400000,
    "valuation_basis": "Curated Collector Car band for a 6-car collection ($4M-$9M); lower-mid range for a modest classic-forward mix."
  },
  {
    "asset_id": "AST.PELHAMBRAMWELL.YACHT",
    "valuation_usd": 39500000,
    "valuation_basis": "Motor Superyacht Resale/Insured Hull Value S4 band ($26M-$68M; 50m full-custom superyacht, Heesen/Feadship/Benetti/CRN tier); placed upper-mid band reflecting a moderately aged hull with a documented 2020 refit."
  },
  {
    "asset_id": "AST.PELHAMBRAMWELL.AVI",
    "valuation_usd": 19750000,
    "valuation_basis": "Private Aviation Hull Insurance band for Cessna Citation Longitude ($15M-$23M); placed upper-mid band reflecting a 2019 delivery with low accumulated hours."
  },
  {
    "asset_id": "AST.PELHAMBRAMWELL.RE1",
    "valuation_usd": 17800000,
    "valuation_basis": "US High-Value Residential band ($5M-$35M, UHNW luxury-tier primary residence); placed mid-band consistent with a renovated single-family estate."
  },
  {
    "asset_id": "AST.PELHAMBRAMWELL.RE2",
    "valuation_usd": 4300000,
    "valuation_basis": "US High-Value Residential 'Additional Property' band ($1.2M-$10M); placed low-mid band for a secondary vineyard property."
  },
  {
    "asset_id": "AST.PELHAMBRAMWELL.AUTO",
    "valuation_usd": 25400000,
    "valuation_basis": "Curated Collector Car Collections 18-Car band ($16M-$32M); placed mid-band reflecting a full-spectrum classic-plus-hypercar mix without ultra-outlier pre-war pieces."
  },
  {
    "asset_id": "AST.TREVELYANCARRINGTON.YACHT",
    "valuation_usd": 89000000,
    "valuation_basis": "Motor Superyacht Resale/Insured Hull Value S5 band ($60M-$155M; 70m large custom superyacht, Lurssen/Oceanco/Feadship/Amels tier); placed low-mid band reflecting the thin resale pool at this size, where agreed value tracks replacement-cost appraisal."
  },
  {
    "asset_id": "AST.TREVELYANCARRINGTON.AVI",
    "valuation_usd": 6800000,
    "valuation_basis": "Private Aviation Hull Insurance band for Gulfstream G450 ($5M-$12M); placed low-mid band reflecting an out-of-production airframe with moderate hours."
  },
  {
    "asset_id": "AST.TREVELYANCARRINGTON.RE1",
    "valuation_usd": 21500000,
    "valuation_basis": "US High-Value Residential band ($5M-$35M); placed mid-upper band for a renovated seasonal mountain estate."
  },
  {
    "asset_id": "AST.TREVELYANCARRINGTON.AUTO",
    "valuation_usd": 9600000,
    "valuation_basis": "Curated Collector Car Collections 8-Car band ($6M-$13M); placed mid-band."
  },
  {
    "asset_id": "AST.HARCOURTTHORNBURY.YACHT",
    "valuation_usd": 4900000,
    "valuation_basis": "Motor Superyacht Resale/Insured Hull Value S2 band ($2M-$7.8M; 20m semi-custom flybridge tier); placed mid-band reflecting a new-build purchase with a documented refit."
  },
  {
    "asset_id": "AST.HARCOURTTHORNBURY.RE1",
    "valuation_usd": 13900000,
    "valuation_basis": "US High-Value Residential band ($5M-$35M); placed low-mid band for a renovated Sag Harbor residence."
  },
  {
    "asset_id": "AST.HARCOURTTHORNBURY.RE2",
    "valuation_usd": 8900000,
    "valuation_basis": "US High-Value Residential 'Additional Property' band ($1.2M-$10M); placed at the top of band reflecting a historic estate's premium location."
  },
  {
    "asset_id": "AST.HARCOURTTHORNBURY.AUTO",
    "valuation_usd": 7800000,
    "valuation_basis": "Curated Collector Car Collections 8-Car band ($6M-$13M); placed low-mid band."
  },
  {
    "asset_id": "AST.HARCOURTQUINTRELL.YACHT",
    "valuation_usd": 33800000,
    "valuation_basis": "Motor Superyacht Resale/Insured Hull Value S4 band ($26M-$68M); placed low-mid band reflecting a secondhand acquisition with subsequent refit."
  },
  {
    "asset_id": "AST.HARCOURTQUINTRELL.AVI",
    "valuation_usd": 22400000,
    "valuation_basis": "Private Aviation Hull Insurance band for Bombardier Challenger 350 ($13M-$26M); placed upper-mid band reflecting a 2020 delivery with a shallow depreciation curve."
  },
  {
    "asset_id": "AST.HARCOURTQUINTRELL.RE1",
    "valuation_usd": 16200000,
    "valuation_basis": "US High-Value Residential band ($5M-$35M); placed mid-band for a renovated seasonal villa."
  },
  {
    "asset_id": "AST.HARCOURTQUINTRELL.RE2",
    "valuation_usd": 5700000,
    "valuation_basis": "US High-Value Residential 'Additional Property' band ($1.2M-$10M); placed mid-band for a lakefront secondary residence."
  },
  {
    "asset_id": "AST.HARCOURTQUINTRELL.AUTO",
    "valuation_usd": 10900000,
    "valuation_basis": "Curated Collector Car Collections 8-Car band ($6M-$13M); placed upper-mid band reflecting a hypercar-anchored mix."
  },
  {
    "asset_id": "AST.WENTWORTHGREVILLE.YACHT",
    "valuation_usd": 15300000,
    "valuation_basis": "Motor Superyacht Resale/Insured Hull Value S3 band ($8.5M-$27M; 32m entry-level custom superyacht tier); placed mid-band."
  },
  {
    "asset_id": "AST.WENTWORTHGREVILLE.RE1",
    "valuation_usd": 24600000,
    "valuation_basis": "US High-Value Residential band ($5M-$35M); placed upper-mid band reflecting a renovated estate with equestrian facilities."
  },
  {
    "asset_id": "AST.WENTWORTHGREVILLE.RE2",
    "valuation_usd": 6800000,
    "valuation_basis": "US High-Value Residential 'Additional Property' band ($1.2M-$10M); placed mid-band for a coastal seasonal residence."
  },
  {
    "asset_id": "AST.WENTWORTHGREVILLE.AUTO",
    "valuation_usd": 6300000,
    "valuation_basis": "Curated Collector Car Collections 6-Car band ($4M-$9M); placed mid-band."
  },
  {
    "asset_id": "AST.ELLSWORTHISHERWOOD.YACHT",
    "valuation_usd": 175000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S6 ($120M-$290M): 90m megayacht tier (Lurssen/Oceanco/Feadship comps, e.g. Kismet-class); priced upper-mid reflecting a ~2018 build with a completed major refit and no signs of deferred maintenance."
  },
  {
    "asset_id": "AST.ELLSWORTHISHERWOOD.RE1",
    "valuation_usd": 18500000,
    "valuation_basis": "US High-Value Residential Real Estate band ($5M-$35M): Sag Harbor waterfront estate priced above the luxury-segment entry threshold, reflecting trophy waterfront positioning per Douglas Elliman/Miller Samuel Hamptons market reporting."
  },
  {
    "asset_id": "AST.ELLSWORTHISHERWOOD.RE2",
    "valuation_usd": 4200000,
    "valuation_basis": "US High-Value Residential Real Estate band, Additional Property ($1.2M-$10M): Newport mountain residence priced near the low-mid range typical of a secondary retreat property."
  },
  {
    "asset_id": "AST.CASTELLANVANDERMEER.YACHT",
    "valuation_usd": 46000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S4 ($26M-$68M): 50m full-custom superyacht (Heesen/Feadship/Benetti/CRN tier); priced mid-band reflecting a ~2018 acquisition with one completed major refit."
  },
  {
    "asset_id": "AST.CASTELLANVANDERMEER.RE1",
    "valuation_usd": 9800000,
    "valuation_basis": "US High-Value Residential Real Estate band ($5M-$35M): Napa Valley penthouse priced low-mid, consistent with luxury-segment entry-tier condominium/penthouse product in that market per ILHM luxury market reporting."
  },
  {
    "asset_id": "AST.CASTELLANVANDERMEER.RE2",
    "valuation_usd": 3600000,
    "valuation_basis": "US High-Value Residential Real Estate band, Additional Property ($1.2M-$10M): secondary residence priced low-mid, consistent with a getaway property rather than a primary trophy estate."
  },
  {
    "asset_id": "AST.CASTELLANVANDERMEER.AUTO",
    "valuation_usd": 4100000,
    "valuation_basis": "Curated Collector Car Collections band, 4-Car Collection ($2.5M-$6M): boutique mix of one classic icon and one modern exotic/hypercar anchor, priced mid-band."
  },
  {
    "asset_id": "AST.ESTERHAZYHALLOWAY.YACHT",
    "valuation_usd": 98000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S5 ($60M-$155M): 70m large custom superyacht (Lurssen/Oceanco/Feadship/Amels tier); priced mid-band reflecting a ~2018 acquisition with a completed exterior/interior refit."
  },
  {
    "asset_id": "AST.ESTERHAZYHALLOWAY.AVI",
    "valuation_usd": 21500000,
    "valuation_basis": "Private Aviation Hull Insurance band, Bombardier Challenger 350 ($13M-$26M): in-production super-midsize jet; priced upper-mid reflecting relatively low hours and an updated avionics package."
  },
  {
    "asset_id": "AST.ESTERHAZYHALLOWAY.RE1",
    "valuation_usd": 14200000,
    "valuation_basis": "US High-Value Residential Real Estate band ($5M-$35M): Telluride mountain estate priced mid-band, consistent with a ski-season trophy property per ILHM luxury market reporting."
  },
  {
    "asset_id": "AST.ESTERHAZYHALLOWAY.AUTO",
    "valuation_usd": 15800000,
    "valuation_basis": "Curated Collector Car Collections band, 12-Car Collection ($10M-$20M): mixed classic and modern exotic bench with trophy-tier hypercar additions; priced mid-band."
  },
  {
    "asset_id": "AST.STAVROSCOMBERFORD.YACHT",
    "valuation_usd": 112000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S5 ($60M-$155M): 70m large custom superyacht; priced upper-mid reflecting a newer (2019) acquisition with a completed systems refit."
  },
  {
    "asset_id": "AST.STAVROSCOMBERFORD.RE1",
    "valuation_usd": 16500000,
    "valuation_basis": "US High-Value Residential Real Estate band ($5M-$35M): Sun Valley lakefront residence priced mid-band, consistent with a trophy lakefront property per NAR/Redfin luxury-segment data."
  },
  {
    "asset_id": "AST.STAVROSCOMBERFORD.RE2",
    "valuation_usd": 5400000,
    "valuation_basis": "US High-Value Residential Real Estate band, Additional Property ($1.2M-$10M): Lake Como mountain residence priced mid-band, consistent with a European secondary vacation property."
  },
  {
    "asset_id": "AST.LINDQVISTVERLAINE.YACHT",
    "valuation_usd": 79000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S5 ($60M-$155M): 70m large custom superyacht; priced lower-mid reflecting a 2018 acquisition age and standard (not full) refit history."
  },
  {
    "asset_id": "AST.LINDQVISTVERLAINE.RE1",
    "valuation_usd": 8900000,
    "valuation_basis": "US High-Value Residential Real Estate band ($5M-$35M): Sag Harbor penthouse priced low-mid, consistent with a luxury condominium/penthouse product rather than a full waterfront estate."
  },
  {
    "asset_id": "AST.LINDQVISTVERLAINE.AUTO",
    "valuation_usd": 3400000,
    "valuation_basis": "Curated Collector Car Collections band, 4-Car Collection ($2.5M-$6M): priced lower-mid, reflecting a mix of one modern exotic and one period classic without a hypercar anchor."
  },
  {
    "asset_id": "AST.LANSDOWNEPELHAM.YACHT",
    "valuation_usd": 175000000,
    "valuation_basis": "Motor Superyacht Resale/Insured Hull Value reference, S6 band ($120M-$290M, 90m megayacht tier, Lurssen/Oceanco/Feadship comps e.g. Kismet-class); priced mid-band reflecting a ~2018-build hull carrying a subsequent major refit."
  },
  {
    "asset_id": "AST.LANSDOWNEPELHAM.RE1",
    "valuation_usd": 22000000,
    "valuation_basis": "US High-Value Residential Real Estate reference, High-Value Residential band ($5M-$35M); priced toward the trophy end for an oceanfront compound consolidating two parcels."
  },
  {
    "asset_id": "AST.LANSDOWNEPELHAM.RE2",
    "valuation_usd": 7500000,
    "valuation_basis": "US High-Value Residential Real Estate reference, Additional Property band ($1.2M-$10M); priced high given prime Malibu beachfront positioning."
  },
  {
    "asset_id": "AST.LANSDOWNEPELHAM.RE3",
    "valuation_usd": 6800000,
    "valuation_basis": "US High-Value Residential Real Estate reference, Additional Property band ($1.2M-$10M); priced upper-mid reflecting an expanded ranch estate with additional acreage."
  },
  {
    "asset_id": "AST.LANSDOWNEPELHAM.AUTO",
    "valuation_usd": 4200000,
    "valuation_basis": "Curated Collector Car Collections reference, 4-Car Curated Collection band ($2.5M-$6M); priced mid-band for a classic-plus-modern-exotic mix without a halo hypercar anchor yet."
  },
  {
    "asset_id": "AST.SINCLAIRMOREAU.YACHT",
    "valuation_usd": 42000000,
    "valuation_basis": "Motor Superyacht Resale/Insured Hull Value reference, S4 band ($26M-$68M, 50m Heesen/Feadship/Benetti/CRN tier); priced mid-band reflecting a 2018-acquired hull with a subsequent major refit."
  },
  {
    "asset_id": "AST.SINCLAIRMOREAU.AVI",
    "valuation_usd": 38000000,
    "valuation_basis": "Private Aviation Hull Insurance reference, Dassault Falcon 8X band ($30M-$50M, in-production ultra-long-range trijet); priced mid-band for a 2019-delivery airframe with a subsequent avionics upgrade."
  },
  {
    "asset_id": "AST.SINCLAIRMOREAU.RE1",
    "valuation_usd": 24000000,
    "valuation_basis": "US High-Value Residential Real Estate reference, High-Value Residential band ($5M-$35M); priced toward the trophy end reflecting a prime Beverly Hills location with a ground-up renovation."
  },
  {
    "asset_id": "AST.SINCLAIRMOREAU.RE2",
    "valuation_usd": 4500000,
    "valuation_basis": "US High-Value Residential Real Estate reference, Additional Property band ($1.2M-$10M); priced mid-band for a renovated ski chalet."
  },
  {
    "asset_id": "AST.SINCLAIRMOREAU.AUTO",
    "valuation_usd": 15500000,
    "valuation_basis": "Curated Collector Car Collections reference, 12-Car Curated Collection band ($10M-$20M); priced mid-band for a deep classic-plus-hypercar bench built out over four acquisition rounds."
  },
  {
    "asset_id": "AST.DELACROIXHOLLOWELL.YACHT",
    "valuation_usd": 650000,
    "valuation_basis": "Motor Superyacht Resale/Insured Hull Value reference, S1 band ($280K-$950K, 12m production flybridge tier); priced upper-mid for a 2019 build with a subsequent refit."
  },
  {
    "asset_id": "AST.DELACROIXHOLLOWELL.AVI",
    "valuation_usd": 33000000,
    "valuation_basis": "Private Aviation Hull Insurance reference, Dassault Falcon 8X band ($30M-$50M); priced lower-mid reflecting an earlier 2018 acquisition vintage relative to newer in-fleet comps."
  },
  {
    "asset_id": "AST.DELACROIXHOLLOWELL.RE1",
    "valuation_usd": 9500000,
    "valuation_basis": "US High-Value Residential Real Estate reference, High-Value Residential band ($5M-$35M); priced toward the lower-mid end for an income-producing commercial plaza rather than a trophy primary residence."
  },
  {
    "asset_id": "AST.WHISPER.YACHT",
    "valuation_usd": 138000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S6 (megayacht tier, $120M-$290M, replacement-cost-appraisal driven); priced toward the lower portion of the band reflecting M/Y Whisper's 70m LOA against the tier's 90m reference comps (e.g. Kismet-class)."
  },
  {
    "asset_id": "AST.WHISPER.JET",
    "valuation_usd": 47000000,
    "valuation_basis": "Private Aviation Hull Insurance model-specific band for Gulfstream G650 (in-production ultra-long-range flagship, $28M-$62M); priced mid-upper reflecting a late-model, low-hour airframe consistent with the family's newer holdings."
  },
  {
    "asset_id": "AST.SOLSTICE.YACHT",
    "valuation_usd": 78000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S5 (large custom superyacht tier, $60M-$155M); priced in the lower-mid range reflecting M/Y Solstice's 55m LOA against the tier's 70m reference comps."
  },
  {
    "asset_id": "AST.AURELIA.YACHT",
    "valuation_usd": 82000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S5 (large custom superyacht tier, $60M-$155M); priced in the lower-mid range reflecting M/Y Aurelia's 62m LOA against the tier's 70m reference comps."
  },
  {
    "asset_id": "AST.HALCYON.YACHT",
    "valuation_usd": 42000000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S4 (full-custom 50m-tier superyacht, $26M-$68M); priced near the tier midpoint reflecting M/Y Halcyon's 45m LOA and moderate fleet age."
  },
  {
    "asset_id": "AST.VOSS.CHALET",
    "valuation_usd": 14500000,
    "valuation_basis": "US High-Value Residential Real Estate band (Aspen/Hamptons/Palm Beach/Napa-tier primary/secondary UHNW properties, $5M-$35M); priced mid-upper reflecting an Aspen ski-market trophy chalet."
  },
  {
    "asset_id": "AST.CASTELLANE.JET",
    "valuation_usd": 18500000,
    "valuation_basis": "Private Aviation Hull Insurance model-specific band for Gulfstream G550 (out of production since 2021, $10M-$29M); priced near the tier midpoint reflecting a mid-vintage airframe with moderate hours."
  },
  {
    "asset_id": "AST.CASTELLANE.AUTO",
    "valuation_usd": 16500000,
    "valuation_basis": "Curated Collector Car Collections band for a 12-Car Curated Collection ($10M-$20M); priced mid-upper reflecting the collection's hypercar-weighted composition."
  },
  {
    "asset_id": "AST.BELLWEATHER.HELI",
    "valuation_usd": 4200000,
    "valuation_basis": "Private Aviation Hull Insurance model-specific band for Sikorsky S-76 (long-lived A-D variant family, $1.5M-$9M, value driven mainly by variant/hours); priced near the tier midpoint reflecting a mid-generation variant with moderate airframe hours."
  },
  {
    "asset_id": "AST.OKONKWO.YACHT",
    "valuation_usd": 29500000,
    "valuation_basis": "Motor Superyacht Resale / Insured Hull Value (2026) band S4 (full-custom 50m-tier superyacht, $26M-$68M); priced near the band floor reflecting M/Y Meridian II's smaller 38m LOA relative to the tier's 50m reference."
  }
];
const ASSET_OWNERSHIP_TIMELINE = [
  {
    "event_id": "EVT.00001",
    "asset_id": "AST.HOLLOWELL.YACHT",
    "seq": 1,
    "date": "2018-05-14",
    "event_type": "delivered_new",
    "role_ref_hint": "the previous owner, a European shipping family",
    "role_ref_resolved_id": null,
    "note": "M/Y Borealis was delivered new to her first owner, a European shipping family, before later changing hands."
  },
  {
    "event_id": "EVT.00002",
    "asset_id": "AST.HOLLOWELL.YACHT",
    "seq": 2,
    "date": "2020-11-02",
    "event_type": "traded_up_from_prior_vessel",
    "role_ref_hint": "Hollowell Family Trust",
    "role_ref_resolved_id": "PRIN.HOLLOWELL",
    "note": "Hollowell Family Trust acquired the 70m M/Y Borealis, trading up from a smaller yacht in the family's prior fleet."
  },
  {
    "event_id": "EVT.00003",
    "asset_id": "AST.HOLLOWELL.YACHT",
    "seq": 3,
    "date": "2023-03-19",
    "event_type": "major_refit",
    "role_ref_hint": "Camille Fontaine",
    "role_ref_resolved_id": "ROLE.HOLLOWELL.OWNE",
    "note": "Borealis underwent a major refit covering interior refresh and systems upgrades, overseen on the family's behalf by Camille Fontaine."
  },
  {
    "event_id": "EVT.00004",
    "asset_id": "AST.HOLLOWELL.YACHT",
    "seq": 4,
    "date": "2025-09-08",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Hollowell Family Trust",
    "role_ref_resolved_id": "PRIN.HOLLOWELL",
    "note": "Title to M/Y Borealis was formally transferred into the Hollowell Family Trust as part of a broader estate-planning restructuring."
  },
  {
    "event_id": "EVT.00005",
    "asset_id": "AST.HOLLOWELL.RE1",
    "seq": 1,
    "date": "2019-06-21",
    "event_type": "acquired",
    "role_ref_hint": "Hollowell Family Trust",
    "role_ref_resolved_id": "PRIN.HOLLOWELL",
    "note": "Hollowell Family Trust purchased the Nantucket Ranch Estate as a seasonal family property."
  },
  {
    "event_id": "EVT.00006",
    "asset_id": "AST.HOLLOWELL.RE1",
    "seq": 2,
    "date": "2021-08-04",
    "event_type": "renovated",
    "role_ref_hint": "Camille Fontaine",
    "role_ref_resolved_id": "ROLE.HOLLOWELL.OWNE",
    "note": "The main residence and grounds were renovated and expanded, a project overseen by Camille Fontaine."
  },
  {
    "event_id": "EVT.00007",
    "asset_id": "AST.HOLLOWELL.RE1",
    "seq": 3,
    "date": "2024-02-17",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Hollowell Family Trust",
    "role_ref_resolved_id": "PRIN.HOLLOWELL",
    "note": "The estate was retitled into the Hollowell Family Trust as part of the family's estate-planning structure."
  },
  {
    "event_id": "EVT.00008",
    "asset_id": "AST.HOLLOWELL.AUTO",
    "seq": 1,
    "date": "2019-04-11",
    "event_type": "expanded_collection",
    "role_ref_hint": "Arjun Malhotra",
    "role_ref_resolved_id": "ROLE.HOLLOWELL.ESTA",
    "note": "The core of the 18-car collection was assembled, blending period classics with early modern exotics, curated with Arjun Malhotra."
  },
  {
    "event_id": "EVT.00009",
    "asset_id": "AST.HOLLOWELL.AUTO",
    "seq": 2,
    "date": "2021-10-27",
    "event_type": "expanded_collection",
    "role_ref_hint": "Hollowell Family Trust",
    "role_ref_resolved_id": "PRIN.HOLLOWELL",
    "note": "The collection was expanded with additional modern hypercar-tier acquisitions."
  },
  {
    "event_id": "EVT.00010",
    "asset_id": "AST.HOLLOWELL.AUTO",
    "seq": 3,
    "date": "2023-12-09",
    "event_type": "expanded_collection",
    "role_ref_hint": "Arjun Malhotra",
    "role_ref_resolved_id": "ROLE.HOLLOWELL.ESTA",
    "note": "A trophy-tier classic anchor piece was added, deepening the collection's period-classic bench."
  },
  {
    "event_id": "EVT.00011",
    "asset_id": "AST.HOLLOWELL.AUTO",
    "seq": 4,
    "date": "2025-05-30",
    "event_type": "refinanced",
    "role_ref_hint": "Hollowell Family Trust",
    "role_ref_resolved_id": "PRIN.HOLLOWELL",
    "note": "The full 18-car collection was refinanced and re-insured against an updated appraisal reflecting its expanded scope."
  },
  {
    "event_id": "EVT.00012",
    "asset_id": "AST.RUTHERGLEN.YACHT",
    "seq": 1,
    "date": "2018-07-09",
    "event_type": "acquired",
    "role_ref_hint": "Rutherglen Family Office",
    "role_ref_resolved_id": "PRIN.RUTHERGLEN",
    "note": "Rutherglen Family Office took delivery of the newly built M/Y Wraith, a 20m flybridge motor yacht."
  },
  {
    "event_id": "EVT.00013",
    "asset_id": "AST.RUTHERGLEN.YACHT",
    "seq": 2,
    "date": "2021-05-15",
    "event_type": "major_refit",
    "role_ref_hint": "Anya Petrova",
    "role_ref_resolved_id": "ROLE.RUTHERGLEN.OWNE",
    "note": "Wraith underwent a major refit of her exterior paint and onboard systems, overseen by Anya Petrova."
  },
  {
    "event_id": "EVT.00014",
    "asset_id": "AST.RUTHERGLEN.YACHT",
    "seq": 3,
    "date": "2024-09-22",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Rutherglen Family Office",
    "role_ref_resolved_id": "PRIN.RUTHERGLEN",
    "note": "The yacht entered a limited seasonal charter program to help offset ownership costs during off-peak months."
  },
  {
    "event_id": "EVT.00015",
    "asset_id": "AST.RUTHERGLEN.AVI",
    "seq": 1,
    "date": "2020-03-03",
    "event_type": "acquired",
    "role_ref_hint": "Rutherglen Family Office",
    "role_ref_resolved_id": "PRIN.RUTHERGLEN",
    "note": "Rutherglen Family Office acquired a new-build Cessna Citation Longitude for the family's private travel needs."
  },
  {
    "event_id": "EVT.00016",
    "asset_id": "AST.RUTHERGLEN.AVI",
    "seq": 2,
    "date": "2022-11-18",
    "event_type": "refinanced",
    "role_ref_hint": "Rutherglen Family Office",
    "role_ref_resolved_id": "PRIN.RUTHERGLEN",
    "note": "The aircraft was refinanced under the family office's lending facility to optimize the ownership structure."
  },
  {
    "event_id": "EVT.00017",
    "asset_id": "AST.RUTHERGLEN.AVI",
    "seq": 3,
    "date": "2025-06-06",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Thaddeus Wren",
    "role_ref_resolved_id": null,
    "note": "Title to the Citation Longitude was transferred into a trust structure managed on the family's behalf by Thaddeus Wren."
  },
  {
    "event_id": "EVT.00018",
    "asset_id": "AST.RUTHERGLEN.RE1",
    "seq": 1,
    "date": "2019-09-14",
    "event_type": "acquired",
    "role_ref_hint": "the previous owner, a longtime Hollywood entertainment family",
    "role_ref_resolved_id": null,
    "note": "Rutherglen Family Office acquired the historic Montecito estate from its previous owner, a longtime Hollywood entertainment family."
  },
  {
    "event_id": "EVT.00019",
    "asset_id": "AST.RUTHERGLEN.RE1",
    "seq": 2,
    "date": "2021-04-08",
    "event_type": "renovated",
    "role_ref_hint": "Leila Haddad",
    "role_ref_resolved_id": null,
    "note": "The historic main house was restored, a project overseen by Leila Haddad."
  },
  {
    "event_id": "EVT.00020",
    "asset_id": "AST.RUTHERGLEN.RE1",
    "seq": 3,
    "date": "2024-01-25",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Rutherglen Family Office",
    "role_ref_resolved_id": "PRIN.RUTHERGLEN",
    "note": "The Montecito estate was retitled into the family's trust structure."
  },
  {
    "event_id": "EVT.00021",
    "asset_id": "AST.RUTHERGLEN.AUTO",
    "seq": 1,
    "date": "2018-11-19",
    "event_type": "expanded_collection",
    "role_ref_hint": "Connor MacAllister",
    "role_ref_resolved_id": null,
    "note": "Foundational pieces of the collection were acquired, curated with Connor MacAllister."
  },
  {
    "event_id": "EVT.00022",
    "asset_id": "AST.RUTHERGLEN.AUTO",
    "seq": 2,
    "date": "2020-06-12",
    "event_type": "expanded_collection",
    "role_ref_hint": "Rutherglen Family Office",
    "role_ref_resolved_id": "PRIN.RUTHERGLEN",
    "note": "A DB5/Carrera GT-era piece was added, broadening the collection's period-classic range."
  },
  {
    "event_id": "EVT.00023",
    "asset_id": "AST.RUTHERGLEN.AUTO",
    "seq": 3,
    "date": "2022-08-03",
    "event_type": "expanded_collection",
    "role_ref_hint": "Connor MacAllister",
    "role_ref_resolved_id": null,
    "note": "A trophy-tier modern hypercar was added to the collection."
  },
  {
    "event_id": "EVT.00024",
    "asset_id": "AST.RUTHERGLEN.AUTO",
    "seq": 4,
    "date": "2025-01-21",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "Yuki Tanaka",
    "role_ref_resolved_id": null,
    "note": "One early acquisition was sold to fund the purchase of a higher-tier replacement, a decision made with Yuki Tanaka."
  },
  {
    "event_id": "EVT.00025",
    "asset_id": "AST.DRUMMOND.YACHT",
    "seq": 1,
    "date": "2020-02-11",
    "event_type": "acquired",
    "role_ref_hint": "Drummond Holdings",
    "role_ref_resolved_id": "PRIN.DRUMMOND",
    "note": "Drummond Holdings took delivery of the newly built 90m M/Y Fathom."
  },
  {
    "event_id": "EVT.00026",
    "asset_id": "AST.DRUMMOND.YACHT",
    "seq": 2,
    "date": "2022-07-29",
    "event_type": "major_refit",
    "role_ref_hint": "Tobias Reinholt",
    "role_ref_resolved_id": null,
    "note": "Fathom underwent an early-life systems upgrade during a scheduled yard period, overseen by Tobias Reinholt."
  },
  {
    "event_id": "EVT.00027",
    "asset_id": "AST.DRUMMOND.YACHT",
    "seq": 3,
    "date": "2024-11-05",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Meredith Achebe",
    "role_ref_resolved_id": "ROLE.DRUMMOND.OWNE",
    "note": "The yacht entered a select charter program during the owner's off-season months."
  },
  {
    "event_id": "EVT.00028",
    "asset_id": "AST.DRUMMOND.YACHT",
    "seq": 4,
    "date": "2026-02-14",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Drummond Holdings",
    "role_ref_resolved_id": "PRIN.DRUMMOND",
    "note": "Ownership of M/Y Fathom was restructured into the Drummond Holdings trust vehicle."
  },
  {
    "event_id": "EVT.00029",
    "asset_id": "AST.DRUMMOND.RE1",
    "seq": 1,
    "date": "2019-05-20",
    "event_type": "acquired",
    "role_ref_hint": "the previous owner, an old New York banking family",
    "role_ref_resolved_id": null,
    "note": "Drummond Holdings purchased the Manhattan Coastal Estate from its previous owner, an old New York banking family."
  },
  {
    "event_id": "EVT.00030",
    "asset_id": "AST.DRUMMOND.RE1",
    "seq": 2,
    "date": "2022-03-16",
    "event_type": "renovated",
    "role_ref_hint": "Aisha Bello",
    "role_ref_resolved_id": null,
    "note": "A full renovation of the residence was completed, overseen by Aisha Bello."
  },
  {
    "event_id": "EVT.00031",
    "asset_id": "AST.DRUMMOND.RE1",
    "seq": 3,
    "date": "2025-07-02",
    "event_type": "refinanced",
    "role_ref_hint": "Drummond Holdings",
    "role_ref_resolved_id": "PRIN.DRUMMOND",
    "note": "The estate was refinanced against an updated market appraisal."
  },
  {
    "event_id": "EVT.00032",
    "asset_id": "AST.DRUMMOND.AUTO",
    "seq": 1,
    "date": "2019-08-08",
    "event_type": "expanded_collection",
    "role_ref_hint": "Declan Fitzgerald",
    "role_ref_resolved_id": "ROLE.DRUMMOND.GROU",
    "note": "The core collection was assembled, curated with Declan Fitzgerald."
  },
  {
    "event_id": "EVT.00033",
    "asset_id": "AST.DRUMMOND.AUTO",
    "seq": 2,
    "date": "2021-12-14",
    "event_type": "expanded_collection",
    "role_ref_hint": "Drummond Holdings",
    "role_ref_resolved_id": "PRIN.DRUMMOND",
    "note": "A modern hypercar-tier piece was added to the collection."
  },
  {
    "event_id": "EVT.00034",
    "asset_id": "AST.DRUMMOND.AUTO",
    "seq": 3,
    "date": "2024-04-27",
    "event_type": "expanded_collection",
    "role_ref_hint": "Declan Fitzgerald",
    "role_ref_resolved_id": "ROLE.DRUMMOND.GROU",
    "note": "A trophy-tier classic anchor piece was added, deepening the collection's rarity spread."
  },
  {
    "event_id": "EVT.00035",
    "asset_id": "AST.DRUMMOND.AUTO",
    "seq": 4,
    "date": "2026-01-09",
    "event_type": "refinanced",
    "role_ref_hint": "Drummond Holdings",
    "role_ref_resolved_id": "PRIN.DRUMMOND",
    "note": "The 12-car collection was refinanced and re-insured against its current appraised value."
  },
  {
    "event_id": "EVT.00036",
    "asset_id": "AST.WENTWORTH.YACHT",
    "seq": 1,
    "date": "2019-06-04",
    "event_type": "acquired",
    "role_ref_hint": "Wentworth Family Office Trust",
    "role_ref_resolved_id": "PRIN.WENTWORTH",
    "note": "Wentworth Family Office Trust purchased the 12m M/Y Juno as a coastal day and weekend cruiser."
  },
  {
    "event_id": "EVT.00037",
    "asset_id": "AST.WENTWORTH.YACHT",
    "seq": 2,
    "date": "2022-09-19",
    "event_type": "major_refit",
    "role_ref_hint": "Bram Hendricks",
    "role_ref_resolved_id": "ROLE.WENTWORTH.OWNE",
    "note": "Juno received engine and systems servicing during a scheduled refit, overseen by Bram Hendricks."
  },
  {
    "event_id": "EVT.00038",
    "asset_id": "AST.WENTWORTH.YACHT",
    "seq": 3,
    "date": "2025-03-11",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Wentworth Family Office Trust",
    "role_ref_resolved_id": "PRIN.WENTWORTH",
    "note": "Title to the vessel was formally consolidated into the Wentworth Family Office Trust."
  },
  {
    "event_id": "EVT.00039",
    "asset_id": "AST.WENTWORTH.AVI",
    "seq": 1,
    "date": "2018-11-27",
    "event_type": "acquired",
    "role_ref_hint": "the previous owner, a Gulf-region charter operator",
    "role_ref_resolved_id": null,
    "note": "Wentworth Family Office Trust purchased the Global 6000 pre-owned from its previous owner, a Gulf-region charter operator."
  },
  {
    "event_id": "EVT.00040",
    "asset_id": "AST.WENTWORTH.AVI",
    "seq": 2,
    "date": "2021-02-08",
    "event_type": "major_refit",
    "role_ref_hint": "Chidinma Eze",
    "role_ref_resolved_id": "ROLE.WENTWORTH.DIRE",
    "note": "The aircraft's cabin was refurbished and avionics upgraded, a project overseen by Chidinma Eze."
  },
  {
    "event_id": "EVT.00041",
    "asset_id": "AST.WENTWORTH.AVI",
    "seq": 3,
    "date": "2024-08-15",
    "event_type": "refinanced",
    "role_ref_hint": "Wentworth Family Office Trust",
    "role_ref_resolved_id": "PRIN.WENTWORTH",
    "note": "The Global 6000 was refinanced under updated family office lending terms."
  },
  {
    "event_id": "EVT.00042",
    "asset_id": "AST.WENTWORTH.RE1",
    "seq": 1,
    "date": "2020-04-22",
    "event_type": "acquired",
    "role_ref_hint": "Wentworth Family Office Trust",
    "role_ref_resolved_id": "PRIN.WENTWORTH",
    "note": "Wentworth Family Office Trust acquired the Palm Springs Waterfront Estate as a warm-weather family residence."
  },
  {
    "event_id": "EVT.00043",
    "asset_id": "AST.WENTWORTH.RE1",
    "seq": 2,
    "date": "2023-01-30",
    "event_type": "renovated",
    "role_ref_hint": "Lars Kettering",
    "role_ref_resolved_id": null,
    "note": "The pool area and guest house were renovated, overseen by Lars Kettering."
  },
  {
    "event_id": "EVT.00044",
    "asset_id": "AST.WENTWORTH.RE1",
    "seq": 3,
    "date": "2025-09-17",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Wentworth Family Office Trust",
    "role_ref_resolved_id": "PRIN.WENTWORTH",
    "note": "The residence was retitled into the Wentworth Family Office Trust."
  },
  {
    "event_id": "EVT.00045",
    "asset_id": "AST.WENTWORTH.RE2",
    "seq": 1,
    "date": "2019-12-05",
    "event_type": "acquired",
    "role_ref_hint": "Priscilla Odom",
    "role_ref_resolved_id": null,
    "note": "Wentworth Family Office Trust purchased the Cap Ferrat Ski Chalet as a secondary getaway property, a decision made with Priscilla Odom."
  },
  {
    "event_id": "EVT.00046",
    "asset_id": "AST.WENTWORTH.RE2",
    "seq": 2,
    "date": "2022-11-11",
    "event_type": "renovated",
    "role_ref_hint": "Priscilla Odom",
    "role_ref_resolved_id": null,
    "note": "The chalet's interior was renovated and updated."
  },
  {
    "event_id": "EVT.00047",
    "asset_id": "AST.WENTWORTH.RE2",
    "seq": 3,
    "date": "2024-06-23",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Wentworth Family Office Trust",
    "role_ref_resolved_id": "PRIN.WENTWORTH",
    "note": "The chalet was retitled into the Wentworth Family Office Trust."
  },
  {
    "event_id": "EVT.00048",
    "asset_id": "AST.WENTWORTH.AUTO",
    "seq": 1,
    "date": "2019-03-14",
    "event_type": "expanded_collection",
    "role_ref_hint": "Emrys Powell",
    "role_ref_resolved_id": null,
    "note": "A foundational classic and a modern exotic were acquired to start the collection, curated with Emrys Powell."
  },
  {
    "event_id": "EVT.00049",
    "asset_id": "AST.WENTWORTH.AUTO",
    "seq": 2,
    "date": "2021-07-19",
    "event_type": "expanded_collection",
    "role_ref_hint": "Wentworth Family Office Trust",
    "role_ref_resolved_id": "PRIN.WENTWORTH",
    "note": "A modern hypercar was added to the collection."
  },
  {
    "event_id": "EVT.00050",
    "asset_id": "AST.WENTWORTH.AUTO",
    "seq": 3,
    "date": "2023-10-02",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "Talia Rosen",
    "role_ref_resolved_id": "ROLE.WENTWORTH.LOCA",
    "note": "One earlier acquisition was sold to make room for a higher-tier replacement, a decision made with Talia Rosen."
  },
  {
    "event_id": "EVT.00051",
    "asset_id": "AST.PELHAM.YACHT",
    "seq": 1,
    "date": "2018-04-09",
    "event_type": "acquired",
    "role_ref_hint": "the previous owner, a South American mining conglomerate family",
    "role_ref_resolved_id": null,
    "note": "Pelham Family Partnership purchased the 70m M/Y Amara from its previous owner, a South American mining conglomerate family."
  },
  {
    "event_id": "EVT.00052",
    "asset_id": "AST.PELHAM.YACHT",
    "seq": 2,
    "date": "2020-09-23",
    "event_type": "major_refit",
    "role_ref_hint": "Soren Halvorsen",
    "role_ref_resolved_id": "ROLE.PELHAM.OWNE",
    "note": "Amara underwent a full refit covering exterior paint and interior systems, overseen by Soren Halvorsen."
  },
  {
    "event_id": "EVT.00053",
    "asset_id": "AST.PELHAM.YACHT",
    "seq": 3,
    "date": "2023-05-17",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Zainab Idris",
    "role_ref_resolved_id": null,
    "note": "The yacht entered a limited seasonal charter program, a decision made with Zainab Idris."
  },
  {
    "event_id": "EVT.00054",
    "asset_id": "AST.PELHAM.YACHT",
    "seq": 4,
    "date": "2025-11-30",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Pelham Family Partnership",
    "role_ref_resolved_id": "PRIN.PELHAM",
    "note": "Ownership of M/Y Amara was restructured into the Pelham Family Partnership's trust vehicle."
  },
  {
    "event_id": "EVT.00055",
    "asset_id": "AST.PELHAM.RE1",
    "seq": 1,
    "date": "2019-07-12",
    "event_type": "acquired",
    "role_ref_hint": "Pelham Family Partnership",
    "role_ref_resolved_id": "PRIN.PELHAM",
    "note": "Pelham Family Partnership purchased the Palm Springs Lakefront Residence as a family retreat."
  },
  {
    "event_id": "EVT.00056",
    "asset_id": "AST.PELHAM.RE1",
    "seq": 2,
    "date": "2022-02-26",
    "event_type": "renovated",
    "role_ref_hint": "Preston Locke",
    "role_ref_resolved_id": null,
    "note": "The lakefront residence was renovated, a project overseen by Preston Locke."
  },
  {
    "event_id": "EVT.00057",
    "asset_id": "AST.PELHAM.RE1",
    "seq": 3,
    "date": "2024-10-08",
    "event_type": "refinanced",
    "role_ref_hint": "Pelham Family Partnership",
    "role_ref_resolved_id": "PRIN.PELHAM",
    "note": "The property was refinanced against an updated appraisal."
  },
  {
    "event_id": "EVT.00058",
    "asset_id": "AST.PELHAM.AUTO",
    "seq": 1,
    "date": "2018-09-06",
    "event_type": "expanded_collection",
    "role_ref_hint": "Corinne Abernathy",
    "role_ref_resolved_id": null,
    "note": "The core of the collection was acquired, curated with Corinne Abernathy."
  },
  {
    "event_id": "EVT.00059",
    "asset_id": "AST.PELHAM.AUTO",
    "seq": 2,
    "date": "2020-12-15",
    "event_type": "expanded_collection",
    "role_ref_hint": "Pelham Family Partnership",
    "role_ref_resolved_id": "PRIN.PELHAM",
    "note": "A modern hypercar was added to the collection."
  },
  {
    "event_id": "EVT.00060",
    "asset_id": "AST.PELHAM.AUTO",
    "seq": 3,
    "date": "2023-06-21",
    "event_type": "expanded_collection",
    "role_ref_hint": "Corinne Abernathy",
    "role_ref_resolved_id": null,
    "note": "A second blue-chip modern exotic was added, rounding out the four-car collection."
  },
  {
    "event_id": "EVT.00061",
    "asset_id": "AST.BEAUMONT.YACHT",
    "seq": 1,
    "date": "2019-04-12",
    "event_type": "acquired",
    "role_ref_hint": "Beaumont Family Trust",
    "role_ref_resolved_id": "PRIN.BEAUMONT",
    "note": "Beaumont Family Trust acquired M/Y Bellwether, 50m from its previous owner, a Middle Eastern shipping family, via a privately brokered sale."
  },
  {
    "event_id": "EVT.00062",
    "asset_id": "AST.BEAUMONT.YACHT",
    "seq": 2,
    "date": "2022-01-20",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Bellwether underwent a major refit including new stabilizers and an interior refresh ahead of the 2022 Mediterranean season."
  },
  {
    "event_id": "EVT.00063",
    "asset_id": "AST.BEAUMONT.YACHT",
    "seq": 3,
    "date": "2024-09-05",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Beaumont Family Trust",
    "role_ref_resolved_id": "PRIN.BEAUMONT",
    "note": "Ownership of M/Y Bellwether was formally transferred into the Beaumont Family Trust as part of a broader estate restructuring."
  },
  {
    "event_id": "EVT.00064",
    "asset_id": "AST.BEAUMONT.RE1",
    "seq": 1,
    "date": "2018-06-15",
    "event_type": "acquired",
    "role_ref_hint": "Vivienne Calloway",
    "role_ref_resolved_id": "ROLE.BEAUMONT.OWNE",
    "note": "Vivienne Calloway acquired The Hamptons Historic Estate as the family's primary East Coast residence."
  },
  {
    "event_id": "EVT.00065",
    "asset_id": "AST.BEAUMONT.RE1",
    "seq": 2,
    "date": "2020-11-02",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The estate's main house underwent a structural renovation preserving its historic facade while modernizing systems."
  },
  {
    "event_id": "EVT.00066",
    "asset_id": "AST.BEAUMONT.RE1",
    "seq": 3,
    "date": "2023-07-19",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Beaumont Family Trust",
    "role_ref_resolved_id": "PRIN.BEAUMONT",
    "note": "Title to the Hamptons estate was transferred into the Beaumont Family Trust."
  },
  {
    "event_id": "EVT.00067",
    "asset_id": "AST.BEAUMONT.RE2",
    "seq": 1,
    "date": "2019-08-10",
    "event_type": "acquired",
    "role_ref_hint": "Josh Tanaka",
    "role_ref_resolved_id": null,
    "note": "Josh Tanaka acquired the Martha's Vineyard Historic Estate as a seasonal family retreat."
  },
  {
    "event_id": "EVT.00068",
    "asset_id": "AST.BEAUMONT.RE2",
    "seq": 2,
    "date": "2021-05-14",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The property's guest cottage and boathouse were renovated."
  },
  {
    "event_id": "EVT.00069",
    "asset_id": "AST.BEAUMONT.RE2",
    "seq": 3,
    "date": "2025-06-22",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Beaumont Family Trust",
    "role_ref_resolved_id": "PRIN.BEAUMONT",
    "note": "The Martha's Vineyard property was folded into the Beaumont Family Trust's real estate holdings."
  },
  {
    "event_id": "EVT.00070",
    "asset_id": "AST.BEAUMONT.AUTO",
    "seq": 1,
    "date": "2018-09-01",
    "event_type": "acquired",
    "role_ref_hint": "Felix Bergstrom",
    "role_ref_resolved_id": null,
    "note": "Felix Bergstrom acquired the core of the 12-car collection's classic-era anchor pieces from a retiring European collector."
  },
  {
    "event_id": "EVT.00071",
    "asset_id": "AST.BEAUMONT.AUTO",
    "seq": 2,
    "date": "2021-04-18",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Two modern hypercars were added, rounding the collection out to its current 12-car configuration."
  },
  {
    "event_id": "EVT.00072",
    "asset_id": "AST.BEAUMONT.AUTO",
    "seq": 3,
    "date": "2024-02-09",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The collection was refinanced under a collector-car credit facility to fund additional acquisitions."
  },
  {
    "event_id": "EVT.00073",
    "asset_id": "AST.MOREAU.YACHT",
    "seq": 1,
    "date": "2020-02-14",
    "event_type": "acquired",
    "role_ref_hint": "Moreau Family Office",
    "role_ref_resolved_id": "PRIN.MOREAU",
    "note": "Moreau Family Office acquired M/Y Infinite, 90m via private sale from its original owner, a Gulf sovereign-linked family."
  },
  {
    "event_id": "EVT.00074",
    "asset_id": "AST.MOREAU.YACHT",
    "seq": 2,
    "date": "2022-06-30",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Infinite completed a major refit at a European yard, including an upgraded tender garage and owner's-deck expansion."
  },
  {
    "event_id": "EVT.00075",
    "asset_id": "AST.MOREAU.YACHT",
    "seq": 3,
    "date": "2025-03-11",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Moreau Family Office",
    "role_ref_resolved_id": "PRIN.MOREAU",
    "note": "Vessel ownership was restructured under the Moreau Family Office's yacht-holding entity."
  },
  {
    "event_id": "EVT.00076",
    "asset_id": "AST.MOREAU.RE1",
    "seq": 1,
    "date": "2019-07-08",
    "event_type": "acquired",
    "role_ref_hint": "Renata Vasquez",
    "role_ref_resolved_id": "ROLE.MOREAU.OWNE",
    "note": "Renata Vasquez acquired the Cap Ferrat Mountain Residence as the family's Riviera base."
  },
  {
    "event_id": "EVT.00077",
    "asset_id": "AST.MOREAU.RE1",
    "seq": 2,
    "date": "2021-09-25",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The residence underwent a full renovation of its terraces and pool pavilion."
  },
  {
    "event_id": "EVT.00078",
    "asset_id": "AST.MOREAU.RE1",
    "seq": 3,
    "date": "2024-05-16",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Moreau Family Office",
    "role_ref_resolved_id": "PRIN.MOREAU",
    "note": "Title was transferred into the Moreau Family Office's real estate holding entity."
  },
  {
    "event_id": "EVT.00079",
    "asset_id": "AST.MOREAU.AUTO",
    "seq": 1,
    "date": "2018-11-20",
    "event_type": "acquired",
    "role_ref_hint": "Grant Okafor",
    "role_ref_resolved_id": "ROLE.MOREAU.COLL",
    "note": "Grant Okafor assembled the initial core of the 6-car collection, anchored by a period classic and a modern exotic."
  },
  {
    "event_id": "EVT.00080",
    "asset_id": "AST.MOREAU.AUTO",
    "seq": 2,
    "date": "2022-03-04",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A limited-run modern hypercar was added to the collection."
  },
  {
    "event_id": "EVT.00081",
    "asset_id": "AST.MOREAU.AUTO",
    "seq": 3,
    "date": "2025-10-01",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The collection was refinanced to fund a planned acquisition of an additional trophy piece."
  },
  {
    "event_id": "EVT.00082",
    "asset_id": "AST.KIRKBRIDE.YACHT",
    "seq": 1,
    "date": "2019-05-22",
    "event_type": "acquired",
    "role_ref_hint": "Warrick Sloane",
    "role_ref_resolved_id": "ROLE.KIRKBRIDE.OWNE",
    "note": "Warrick Sloane acquired M/Y Horizon, 32m from a Sanlorenzo brokerage listing."
  },
  {
    "event_id": "EVT.00083",
    "asset_id": "AST.KIRKBRIDE.YACHT",
    "seq": 2,
    "date": "2021-11-10",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Horizon underwent engine and generator overhauls plus a full exterior repaint."
  },
  {
    "event_id": "EVT.00084",
    "asset_id": "AST.KIRKBRIDE.YACHT",
    "seq": 3,
    "date": "2023-08-03",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Kirkbride Holdings",
    "role_ref_resolved_id": "PRIN.KIRKBRIDE",
    "note": "Ownership of M/Y Horizon was transferred to Kirkbride Holdings."
  },
  {
    "event_id": "EVT.00085",
    "asset_id": "AST.KIRKBRIDE.AVI",
    "seq": 1,
    "date": "2020-01-15",
    "event_type": "acquired",
    "role_ref_hint": "Delphine Achterberg",
    "role_ref_resolved_id": null,
    "note": "Delphine Achterberg acquired the Gulfstream G450 to replace the family's prior mid-size jet."
  },
  {
    "event_id": "EVT.00086",
    "asset_id": "AST.KIRKBRIDE.AVI",
    "seq": 2,
    "date": "2022-07-19",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The G450 received an avionics upgrade and cabin refurbishment."
  },
  {
    "event_id": "EVT.00087",
    "asset_id": "AST.KIRKBRIDE.AVI",
    "seq": 3,
    "date": "2025-02-28",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Kirkbride Holdings",
    "role_ref_resolved_id": "PRIN.KIRKBRIDE",
    "note": "The aircraft was transferred into Kirkbride Holdings' aviation asset entity."
  },
  {
    "event_id": "EVT.00088",
    "asset_id": "AST.KIRKBRIDE.RE1",
    "seq": 1,
    "date": "2018-09-12",
    "event_type": "acquired",
    "role_ref_hint": "Rosalind Fetterman",
    "role_ref_resolved_id": null,
    "note": "Rosalind Fetterman acquired the Jackson Hole Lakefront Residence as a seasonal mountain retreat."
  },
  {
    "event_id": "EVT.00089",
    "asset_id": "AST.KIRKBRIDE.RE1",
    "seq": 2,
    "date": "2020-12-05",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The main lodge was renovated with an expanded great room and an updated lakefront dock."
  },
  {
    "event_id": "EVT.00090",
    "asset_id": "AST.KIRKBRIDE.RE1",
    "seq": 3,
    "date": "2024-06-17",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Kirkbride Holdings",
    "role_ref_resolved_id": "PRIN.KIRKBRIDE",
    "note": "The property was transferred into Kirkbride Holdings' real estate portfolio."
  },
  {
    "event_id": "EVT.00091",
    "asset_id": "AST.MERRIVALE.YACHT",
    "seq": 1,
    "date": "2019-03-08",
    "event_type": "acquired",
    "role_ref_hint": "Beatrix S\u00f8rensen",
    "role_ref_resolved_id": "ROLE.MERRIVALE.OWNE",
    "note": "Beatrix S\u00f8rensen acquired M/Y Odyssey, 32m from the previous owner, a Nordic shipping family."
  },
  {
    "event_id": "EVT.00092",
    "asset_id": "AST.MERRIVALE.YACHT",
    "seq": 2,
    "date": "2022-05-27",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Odyssey completed a refit including new navigation electronics and refreshed guest cabins."
  },
  {
    "event_id": "EVT.00093",
    "asset_id": "AST.MERRIVALE.YACHT",
    "seq": 3,
    "date": "2024-10-14",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Merrivale Family Office Trust",
    "role_ref_resolved_id": "PRIN.MERRIVALE",
    "note": "Title to M/Y Odyssey was transferred into the Merrivale Family Office Trust."
  },
  {
    "event_id": "EVT.00094",
    "asset_id": "AST.MERRIVALE.AVI",
    "seq": 1,
    "date": "2018-06-25",
    "event_type": "acquired",
    "role_ref_hint": "Halston Pryce",
    "role_ref_resolved_id": "ROLE.MERRIVALE.DIRE",
    "note": "Halston Pryce acquired the Bombardier Global 6000 as the family's long-range aircraft."
  },
  {
    "event_id": "EVT.00095",
    "asset_id": "AST.MERRIVALE.AVI",
    "seq": 2,
    "date": "2021-02-11",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Global 6000 underwent a cabin refurbishment and winglet inspection."
  },
  {
    "event_id": "EVT.00096",
    "asset_id": "AST.MERRIVALE.AVI",
    "seq": 3,
    "date": "2025-04-09",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Merrivale Family Office Trust",
    "role_ref_resolved_id": "PRIN.MERRIVALE",
    "note": "The aircraft was transferred into the Merrivale Family Office Trust's aviation holding entity."
  },
  {
    "event_id": "EVT.00097",
    "asset_id": "AST.MERRIVALE.RE1",
    "seq": 1,
    "date": "2019-01-30",
    "event_type": "acquired",
    "role_ref_hint": "Nadia Chowdhury",
    "role_ref_resolved_id": null,
    "note": "Nadia Chowdhury acquired the Palm Beach Lakefront Residence as the family's winter residence."
  },
  {
    "event_id": "EVT.00098",
    "asset_id": "AST.MERRIVALE.RE1",
    "seq": 2,
    "date": "2021-10-08",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The residence's guest wing and dock were renovated."
  },
  {
    "event_id": "EVT.00099",
    "asset_id": "AST.MERRIVALE.RE1",
    "seq": 3,
    "date": "2023-12-19",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Merrivale Family Office Trust",
    "role_ref_resolved_id": "PRIN.MERRIVALE",
    "note": "The property was transferred into the Merrivale Family Office Trust."
  },
  {
    "event_id": "EVT.00100",
    "asset_id": "AST.MERRIVALE.RE2",
    "seq": 1,
    "date": "2020-04-17",
    "event_type": "acquired",
    "role_ref_hint": "William Ashcombe",
    "role_ref_resolved_id": "ROLE.MERRIVALE.ADMI",
    "note": "William Ashcombe acquired the Beverly Hills Historic Estate as a West Coast base."
  },
  {
    "event_id": "EVT.00101",
    "asset_id": "AST.MERRIVALE.RE2",
    "seq": 2,
    "date": "2022-09-02",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The estate's original 1930s architecture was restored alongside a modernized kitchen wing."
  },
  {
    "event_id": "EVT.00102",
    "asset_id": "AST.MERRIVALE.RE2",
    "seq": 3,
    "date": "2025-11-05",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Merrivale Family Office Trust",
    "role_ref_resolved_id": "PRIN.MERRIVALE",
    "note": "The property was transferred into the Merrivale Family Office Trust."
  },
  {
    "event_id": "EVT.00103",
    "asset_id": "AST.MERRIVALE.AUTO",
    "seq": 1,
    "date": "2019-06-11",
    "event_type": "acquired",
    "role_ref_hint": "Corinne Massey",
    "role_ref_resolved_id": "ROLE.MERRIVALE.HOUS",
    "note": "Corinne Massey assembled the initial 6-car collection, anchored by a period classic and two modern exotics."
  },
  {
    "event_id": "EVT.00104",
    "asset_id": "AST.MERRIVALE.AUTO",
    "seq": 2,
    "date": "2023-01-23",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A limited-run modern hypercar was added, rounding out the collection's modern bench."
  },
  {
    "event_id": "EVT.00105",
    "asset_id": "AST.MERRIVALE.AUTO",
    "seq": 3,
    "date": "2025-08-30",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The collection was refinanced under a collector-vehicle credit facility."
  },
  {
    "event_id": "EVT.00106",
    "asset_id": "AST.HARCOURT.YACHT",
    "seq": 1,
    "date": "2021-04-06",
    "event_type": "acquired",
    "role_ref_hint": "Alistair Bromwell",
    "role_ref_resolved_id": "ROLE.HARCOURT.OWNE",
    "note": "Alistair Bromwell acquired M/Y Lumina, 90m directly from the builder as a newly delivered vessel."
  },
  {
    "event_id": "EVT.00107",
    "asset_id": "AST.HARCOURT.YACHT",
    "seq": 2,
    "date": "2023-07-14",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Lumina underwent warranty-period system upgrades and an expanded beach club installation."
  },
  {
    "event_id": "EVT.00108",
    "asset_id": "AST.HARCOURT.YACHT",
    "seq": 3,
    "date": "2025-09-22",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Harcourt Family Holdings",
    "role_ref_resolved_id": "PRIN.HARCOURT",
    "note": "Ownership of M/Y Lumina was transferred into Harcourt Family Holdings."
  },
  {
    "event_id": "EVT.00109",
    "asset_id": "AST.HARCOURT.AVI",
    "seq": 1,
    "date": "2019-11-03",
    "event_type": "acquired",
    "role_ref_hint": "Genevieve Marchand",
    "role_ref_resolved_id": "ROLE.HARCOURT.HOUS",
    "note": "Genevieve Marchand acquired the Gulfstream G550 to support the family's long-range travel needs."
  },
  {
    "event_id": "EVT.00110",
    "asset_id": "AST.HARCOURT.AVI",
    "seq": 2,
    "date": "2022-04-28",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The G550 received a full avionics and interior refurbishment."
  },
  {
    "event_id": "EVT.00111",
    "asset_id": "AST.HARCOURT.AVI",
    "seq": 3,
    "date": "2024-08-15",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Harcourt Family Holdings",
    "role_ref_resolved_id": "PRIN.HARCOURT",
    "note": "The aircraft was transferred into Harcourt Family Holdings' aviation entity."
  },
  {
    "event_id": "EVT.00112",
    "asset_id": "AST.HARCOURT.RE1",
    "seq": 1,
    "date": "2018-12-20",
    "event_type": "acquired",
    "role_ref_hint": "Silas Vance",
    "role_ref_resolved_id": null,
    "note": "Silas Vance acquired the Gstaad Penthouse as the family's alpine residence."
  },
  {
    "event_id": "EVT.00113",
    "asset_id": "AST.HARCOURT.RE1",
    "seq": 2,
    "date": "2021-01-18",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The penthouse's interior was fully renovated with a new chalet-style finish."
  },
  {
    "event_id": "EVT.00114",
    "asset_id": "AST.HARCOURT.RE1",
    "seq": 3,
    "date": "2023-03-27",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Harcourt Family Holdings",
    "role_ref_resolved_id": "PRIN.HARCOURT",
    "note": "The property was transferred into Harcourt Family Holdings."
  },
  {
    "event_id": "EVT.00115",
    "asset_id": "AST.HARCOURT.RE2",
    "seq": 1,
    "date": "2020-06-09",
    "event_type": "acquired",
    "role_ref_hint": "Priyanka Raman",
    "role_ref_resolved_id": null,
    "note": "Priyanka Raman acquired the Charleston Lakefront Residence as a seasonal Southern retreat."
  },
  {
    "event_id": "EVT.00116",
    "asset_id": "AST.HARCOURT.RE2",
    "seq": 2,
    "date": "2022-11-14",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The residence's dock and guest cottage were renovated."
  },
  {
    "event_id": "EVT.00117",
    "asset_id": "AST.HARCOURT.RE2",
    "seq": 3,
    "date": "2025-05-20",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Harcourt Family Holdings",
    "role_ref_resolved_id": "PRIN.HARCOURT",
    "note": "The property was transferred into Harcourt Family Holdings' real estate portfolio."
  },
  {
    "event_id": "EVT.00118",
    "asset_id": "AST.HARCOURT.AUTO",
    "seq": 1,
    "date": "2019-02-14",
    "event_type": "acquired",
    "role_ref_hint": "Dominic Salvatore",
    "role_ref_resolved_id": "ROLE.HARCOURT.COLL",
    "note": "Dominic Salvatore acquired the initial core of the 8-car collection, anchored by a trophy classic."
  },
  {
    "event_id": "EVT.00119",
    "asset_id": "AST.HARCOURT.AUTO",
    "seq": 2,
    "date": "2021-08-06",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A Veyron/Chiron-tier hypercar was added to the collection."
  },
  {
    "event_id": "EVT.00120",
    "asset_id": "AST.HARCOURT.AUTO",
    "seq": 3,
    "date": "2024-12-11",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The collection was refinanced to fund the acquisition of an additional trophy-tier piece."
  },
  {
    "event_id": "EVT.00121",
    "asset_id": "AST.NIGHTINGALE.YACHT",
    "seq": 1,
    "date": "2019-03-14",
    "event_type": "acquired",
    "role_ref_hint": "Nightingale Family Office",
    "role_ref_resolved_id": "PRIN.NIGHTINGALE",
    "note": "Nightingale Family Office acquired M/Y Jubilee from her previous owner, a Monaco-based shipping family, as the family's first custom-built superyacht."
  },
  {
    "event_id": "EVT.00122",
    "asset_id": "AST.NIGHTINGALE.YACHT",
    "seq": 2,
    "date": "2021-06-02",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Interior and exterior refit completed at a Netherlands yard, updating the yacht's stabilization and tender garage systems."
  },
  {
    "event_id": "EVT.00123",
    "asset_id": "AST.NIGHTINGALE.YACHT",
    "seq": 3,
    "date": "2023-09-20",
    "event_type": "hull_insured_value_reassessed",
    "role_ref_hint": "Imogen Faraday",
    "role_ref_resolved_id": "ROLE.NIGHTINGALE.OWNE",
    "note": "Imogen Faraday commissioned a fresh marine survey ahead of policy renewal, resetting the agreed hull value upward to reflect the refit."
  },
  {
    "event_id": "EVT.00124",
    "asset_id": "AST.NIGHTINGALE.YACHT",
    "seq": 4,
    "date": "2025-11-10",
    "event_type": "chartered_out_partial",
    "role_ref_hint": "Kwame Asante",
    "role_ref_resolved_id": "ROLE.NIGHTINGALE.DIRE",
    "note": "Jubilee entered limited private charter rotation during the family's off-season months, managed by Kwame Asante."
  },
  {
    "event_id": "EVT.00125",
    "asset_id": "AST.NIGHTINGALE.AVI",
    "seq": 1,
    "date": "2018-05-01",
    "event_type": "acquired",
    "role_ref_hint": "Nightingale Family Office",
    "role_ref_resolved_id": "PRIN.NIGHTINGALE",
    "note": "Nightingale Family Office purchased the H175 to replace an aging light helicopter used for estate-to-estate transfers."
  },
  {
    "event_id": "EVT.00126",
    "asset_id": "AST.NIGHTINGALE.AVI",
    "seq": 2,
    "date": "2020-08-15",
    "event_type": "avionics_upgrade",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Cockpit avionics suite upgraded to current synthetic-vision standard."
  },
  {
    "event_id": "EVT.00127",
    "asset_id": "AST.NIGHTINGALE.AVI",
    "seq": 3,
    "date": "2024-02-28",
    "event_type": "hull_policy_renewed",
    "role_ref_hint": "Lucia Ferreira",
    "role_ref_resolved_id": "ROLE.NIGHTINGALE.AIRC",
    "note": "Lucia Ferreira renewed the hull and liability policy following an updated appraisal reflecting airframe hours."
  },
  {
    "event_id": "EVT.00128",
    "asset_id": "AST.NIGHTINGALE.RE1",
    "seq": 1,
    "date": "2018-11-30",
    "event_type": "acquired",
    "role_ref_hint": "Nightingale Family Office",
    "role_ref_resolved_id": "PRIN.NIGHTINGALE",
    "note": "Nightingale Family Office purchased the Napa Valley vineyard estate as the family's primary West Coast residence."
  },
  {
    "event_id": "EVT.00129",
    "asset_id": "AST.NIGHTINGALE.RE1",
    "seq": 2,
    "date": "2022-04-18",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Main residence and tasting pavilion underwent a full renovation, including a new wine cellar."
  },
  {
    "event_id": "EVT.00130",
    "asset_id": "AST.NIGHTINGALE.RE1",
    "seq": 3,
    "date": "2025-07-09",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Amara Chukwu",
    "role_ref_resolved_id": null,
    "note": "Amara Chukwu oversaw transfer of title into the family trust structure as part of a broader estate-planning restructuring."
  },
  {
    "event_id": "EVT.00131",
    "asset_id": "AST.NIGHTINGALE.RE2",
    "seq": 1,
    "date": "2020-01-22",
    "event_type": "acquired",
    "role_ref_hint": "Dmitri Volkov",
    "role_ref_resolved_id": "ROLE.NIGHTINGALE.COLL",
    "note": "Dmitri Volkov negotiated acquisition of the Miami villa as a winter residence for the family."
  },
  {
    "event_id": "EVT.00132",
    "asset_id": "AST.NIGHTINGALE.RE2",
    "seq": 2,
    "date": "2023-03-05",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Villa underwent hurricane-hardening renovations including impact windows and a reinforced roof."
  },
  {
    "event_id": "EVT.00133",
    "asset_id": "AST.NIGHTINGALE.RE2",
    "seq": 3,
    "date": "2026-01-14",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Existing mortgage on the villa was refinanced at improved terms."
  },
  {
    "event_id": "EVT.00134",
    "asset_id": "AST.NIGHTINGALE.RE3",
    "seq": 1,
    "date": "2019-06-11",
    "event_type": "acquired",
    "role_ref_hint": "Nightingale Family Office",
    "role_ref_resolved_id": "PRIN.NIGHTINGALE",
    "note": "Nightingale Family Office acquired the Montecito commercial plaza as an income-generating diversification asset."
  },
  {
    "event_id": "EVT.00135",
    "asset_id": "AST.NIGHTINGALE.RE3",
    "seq": 2,
    "date": "2021-10-02",
    "event_type": "tenant_repositioned",
    "role_ref_hint": "Soo-min Park",
    "role_ref_resolved_id": null,
    "note": "Soo-min Park led a repositioning of the plaza's retail tenant mix toward higher-end lessees."
  },
  {
    "event_id": "EVT.00136",
    "asset_id": "AST.NIGHTINGALE.RE3",
    "seq": 3,
    "date": "2024-08-19",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Facade and common-area renovation completed to align the property with neighboring luxury retail."
  },
  {
    "event_id": "EVT.00137",
    "asset_id": "AST.NIGHTINGALE.AUTO",
    "seq": 1,
    "date": "2019-09-01",
    "event_type": "acquired",
    "role_ref_hint": "Kwame Asante",
    "role_ref_resolved_id": "ROLE.NIGHTINGALE.DIRE",
    "note": "Kwame Asante began assembling the family's curated car collection with the purchase of a period classic and a limited-run modern exotic."
  },
  {
    "event_id": "EVT.00138",
    "asset_id": "AST.NIGHTINGALE.AUTO",
    "seq": 2,
    "date": "2021-12-15",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A modern hypercar was added to the collection, rounding it out to four vehicles."
  },
  {
    "event_id": "EVT.00139",
    "asset_id": "AST.NIGHTINGALE.AUTO",
    "seq": 3,
    "date": "2024-05-27",
    "event_type": "insured_value_reassessed",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Collection was re-appraised for insurance purposes following two auction sales of comparable vehicles."
  },
  {
    "event_id": "EVT.00140",
    "asset_id": "AST.ZAMORA.YACHT",
    "seq": 1,
    "date": "2018-04-09",
    "event_type": "acquired",
    "role_ref_hint": "Zamora Holdings",
    "role_ref_resolved_id": "PRIN.ZAMORA",
    "note": "Zamora Holdings acquired M/Y Tranquil from her previous owner, a Middle Eastern investment family, as the flagship of the family's fleet."
  },
  {
    "event_id": "EVT.00141",
    "asset_id": "AST.ZAMORA.YACHT",
    "seq": 2,
    "date": "2020-11-20",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Full engine room overhaul and exterior repaint completed at a Genoa yard."
  },
  {
    "event_id": "EVT.00142",
    "asset_id": "AST.ZAMORA.YACHT",
    "seq": 3,
    "date": "2023-06-14",
    "event_type": "hull_insured_value_reassessed",
    "role_ref_hint": "Tariq Haddad",
    "role_ref_resolved_id": "ROLE.ZAMORA.PROP",
    "note": "Tariq Haddad commissioned an updated appraisal ahead of a Mediterranean cruising season, resetting the agreed hull value."
  },
  {
    "event_id": "EVT.00143",
    "asset_id": "AST.ZAMORA.YACHT",
    "seq": 4,
    "date": "2025-09-03",
    "event_type": "chartered_out_partial",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Tranquil entered a limited charter program during the family's reduced usage months."
  },
  {
    "event_id": "EVT.00144",
    "asset_id": "AST.ZAMORA.AVI",
    "seq": 1,
    "date": "2021-03-18",
    "event_type": "acquired",
    "role_ref_hint": "Zamora Holdings",
    "role_ref_resolved_id": "PRIN.ZAMORA",
    "note": "Zamora Holdings took delivery of a new Citation Longitude to replace an older midsize jet."
  },
  {
    "event_id": "EVT.00145",
    "asset_id": "AST.ZAMORA.AVI",
    "seq": 2,
    "date": "2023-07-25",
    "event_type": "interior_refurbished",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Cabin interior was refreshed with updated cabinetry and connectivity systems."
  },
  {
    "event_id": "EVT.00146",
    "asset_id": "AST.ZAMORA.AVI",
    "seq": 3,
    "date": "2026-02-10",
    "event_type": "hull_policy_renewed",
    "role_ref_hint": "Yuki Tanaka",
    "role_ref_resolved_id": null,
    "note": "Yuki Tanaka renewed hull coverage following a routine airframe inspection."
  },
  {
    "event_id": "EVT.00147",
    "asset_id": "AST.ZAMORA.RE1",
    "seq": 1,
    "date": "2019-02-14",
    "event_type": "acquired",
    "role_ref_hint": "Anjali Rao",
    "role_ref_resolved_id": null,
    "note": "Anjali Rao negotiated purchase of the Malibu residence as the family's California base."
  },
  {
    "event_id": "EVT.00148",
    "asset_id": "AST.ZAMORA.RE1",
    "seq": 2,
    "date": "2022-08-30",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Property underwent a full renovation including a new boat dock and guest pavilion."
  },
  {
    "event_id": "EVT.00149",
    "asset_id": "AST.ZAMORA.RE1",
    "seq": 3,
    "date": "2025-12-05",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Connor Blackwood",
    "role_ref_resolved_id": null,
    "note": "Title was transferred into a family trust as part of estate planning led by Connor Blackwood."
  },
  {
    "event_id": "EVT.00150",
    "asset_id": "AST.ESTERHAZY.YACHT",
    "seq": 1,
    "date": "2018-07-22",
    "event_type": "acquired",
    "role_ref_hint": "Esterhazy Family Trust",
    "role_ref_resolved_id": "PRIN.ESTERHAZY",
    "note": "Esterhazy Family Trust acquired M/Y Pinnacle from her previous owner, a Greek shipping magnate, as a starter superyacht for the family."
  },
  {
    "event_id": "EVT.00151",
    "asset_id": "AST.ESTERHAZY.YACHT",
    "seq": 2,
    "date": "2022-05-11",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Mid-life refit completed, replacing generators and updating navigation electronics."
  },
  {
    "event_id": "EVT.00152",
    "asset_id": "AST.ESTERHAZY.YACHT",
    "seq": 3,
    "date": "2024-10-08",
    "event_type": "hull_insured_value_reassessed",
    "role_ref_hint": "Farid Rostami",
    "role_ref_resolved_id": "ROLE.ESTERHAZY.OWNE",
    "note": "Farid Rostami commissioned a fresh survey resetting the agreed hull value following the refit."
  },
  {
    "event_id": "EVT.00153",
    "asset_id": "AST.ESTERHAZY.AVI",
    "seq": 1,
    "date": "2020-09-04",
    "event_type": "acquired",
    "role_ref_hint": "Esterhazy Family Trust",
    "role_ref_resolved_id": "PRIN.ESTERHAZY",
    "note": "Esterhazy Family Trust purchased the Longitude to support the family's transatlantic travel."
  },
  {
    "event_id": "EVT.00154",
    "asset_id": "AST.ESTERHAZY.AVI",
    "seq": 2,
    "date": "2023-01-29",
    "event_type": "avionics_upgrade",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Avionics package upgraded to include enhanced weather radar."
  },
  {
    "event_id": "EVT.00155",
    "asset_id": "AST.ESTERHAZY.AVI",
    "seq": 3,
    "date": "2025-06-17",
    "event_type": "hull_policy_renewed",
    "role_ref_hint": "Chidi Eze",
    "role_ref_resolved_id": null,
    "note": "Chidi Eze renewed hull coverage following a scheduled heavy maintenance check."
  },
  {
    "event_id": "EVT.00156",
    "asset_id": "AST.ESTERHAZY.RE1",
    "seq": 1,
    "date": "2019-12-01",
    "event_type": "acquired",
    "role_ref_hint": "Camille Dubois",
    "role_ref_resolved_id": null,
    "note": "Camille Dubois led acquisition of the Sun Valley estate as a family retreat."
  },
  {
    "event_id": "EVT.00157",
    "asset_id": "AST.ESTERHAZY.RE1",
    "seq": 2,
    "date": "2021-09-14",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Estate underwent renovation adding a private ski-access wing."
  },
  {
    "event_id": "EVT.00158",
    "asset_id": "AST.ESTERHAZY.RE1",
    "seq": 3,
    "date": "2024-03-22",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Existing financing on the estate was refinanced at improved terms."
  },
  {
    "event_id": "EVT.00159",
    "asset_id": "AST.ESTERHAZY.AUTO",
    "seq": 1,
    "date": "2018-03-19",
    "event_type": "acquired",
    "role_ref_hint": "Hana Kobayashi",
    "role_ref_resolved_id": "ROLE.ESTERHAZY.HOUS",
    "note": "Hana Kobayashi began the family's car collection with two period classics purchased at a European auction."
  },
  {
    "event_id": "EVT.00160",
    "asset_id": "AST.ESTERHAZY.AUTO",
    "seq": 2,
    "date": "2020-10-27",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Collection expanded with the addition of a trophy-tier hypercar and two modern exotics."
  },
  {
    "event_id": "EVT.00161",
    "asset_id": "AST.ESTERHAZY.AUTO",
    "seq": 3,
    "date": "2023-04-13",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Two further limited-run exotics were added, bringing the collection to eight vehicles."
  },
  {
    "event_id": "EVT.00162",
    "asset_id": "AST.ESTERHAZY.AUTO",
    "seq": 4,
    "date": "2025-11-30",
    "event_type": "insured_value_reassessed",
    "role_ref_hint": "Malik Freeman",
    "role_ref_resolved_id": "ROLE.ESTERHAZY.COLL",
    "note": "Malik Freeman commissioned a full re-appraisal of the collection ahead of policy renewal."
  },
  {
    "event_id": "EVT.00163",
    "asset_id": "AST.TREVELYAN.YACHT",
    "seq": 1,
    "date": "2018-01-30",
    "event_type": "acquired",
    "role_ref_hint": "Trevelyan Family Office Trust",
    "role_ref_resolved_id": "PRIN.TREVELYAN",
    "note": "Trevelyan Family Office Trust acquired M/Y Amara from her previous owner, a Russian industrial conglomerate, as the family's flagship vessel."
  },
  {
    "event_id": "EVT.00164",
    "asset_id": "AST.TREVELYAN.YACHT",
    "seq": 2,
    "date": "2021-02-16",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Extensive refit completed at a German yard, including new stabilizers and a rebuilt guest deck."
  },
  {
    "event_id": "EVT.00165",
    "asset_id": "AST.TREVELYAN.YACHT",
    "seq": 3,
    "date": "2023-11-05",
    "event_type": "hull_insured_value_reassessed",
    "role_ref_hint": "Astrid Lindqvist",
    "role_ref_resolved_id": "ROLE.TREVELYAN.OWNE",
    "note": "Astrid Lindqvist commissioned an updated replacement-cost appraisal, resetting the agreed hull value."
  },
  {
    "event_id": "EVT.00166",
    "asset_id": "AST.TREVELYAN.YACHT",
    "seq": 4,
    "date": "2025-08-21",
    "event_type": "chartered_out_partial",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Amara entered a limited high-end charter program under the family's management arm."
  },
  {
    "event_id": "EVT.00167",
    "asset_id": "AST.TREVELYAN.AVI",
    "seq": 1,
    "date": "2021-05-12",
    "event_type": "acquired",
    "role_ref_hint": "Trevelyan Family Office Trust",
    "role_ref_resolved_id": "PRIN.TREVELYAN",
    "note": "Trevelyan Family Office Trust purchased the H175 for estate and yacht-tender air transfer."
  },
  {
    "event_id": "EVT.00168",
    "asset_id": "AST.TREVELYAN.AVI",
    "seq": 2,
    "date": "2023-09-30",
    "event_type": "avionics_upgrade",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Helicopter received an avionics and cabin refresh."
  },
  {
    "event_id": "EVT.00169",
    "asset_id": "AST.TREVELYAN.AVI",
    "seq": 3,
    "date": "2026-01-08",
    "event_type": "hull_policy_renewed",
    "role_ref_hint": "Julian Reyes",
    "role_ref_resolved_id": "ROLE.TREVELYAN.DIRE",
    "note": "Julian Reyes renewed the hull policy following a scheduled inspection."
  },
  {
    "event_id": "EVT.00170",
    "asset_id": "AST.TREVELYAN.RE1",
    "seq": 1,
    "date": "2018-06-25",
    "event_type": "acquired",
    "role_ref_hint": "Nadia Petrova",
    "role_ref_resolved_id": null,
    "note": "Nadia Petrova negotiated acquisition of the Sag Harbor estate as the family's East Coast primary residence."
  },
  {
    "event_id": "EVT.00171",
    "asset_id": "AST.TREVELYAN.RE1",
    "seq": 2,
    "date": "2020-04-03",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Main house underwent a full architectural renovation and dock rebuild."
  },
  {
    "event_id": "EVT.00172",
    "asset_id": "AST.TREVELYAN.RE1",
    "seq": 3,
    "date": "2024-07-19",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Title was transferred into the family office trust structure."
  },
  {
    "event_id": "EVT.00173",
    "asset_id": "AST.TREVELYAN.RE2",
    "seq": 1,
    "date": "2020-10-16",
    "event_type": "acquired",
    "role_ref_hint": "Emeka Obi",
    "role_ref_resolved_id": "ROLE.TREVELYAN.COLL",
    "note": "Emeka Obi negotiated purchase of the Beverly Hills penthouse for the family's West Coast business travel."
  },
  {
    "event_id": "EVT.00174",
    "asset_id": "AST.TREVELYAN.RE2",
    "seq": 2,
    "date": "2022-12-09",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Penthouse underwent a full interior renovation."
  },
  {
    "event_id": "EVT.00175",
    "asset_id": "AST.TREVELYAN.RE2",
    "seq": 3,
    "date": "2025-03-27",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Financing on the penthouse was refinanced at improved terms."
  },
  {
    "event_id": "EVT.00176",
    "asset_id": "AST.TREVELYAN.RE3",
    "seq": 1,
    "date": "2019-08-08",
    "event_type": "acquired",
    "role_ref_hint": "Trevelyan Family Office Trust",
    "role_ref_resolved_id": "PRIN.TREVELYAN",
    "note": "Trevelyan Family Office Trust acquired the Aspen villa as a ski-season retreat."
  },
  {
    "event_id": "EVT.00177",
    "asset_id": "AST.TREVELYAN.RE3",
    "seq": 2,
    "date": "2021-11-22",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Villa underwent renovation adding a ski-in/ski-out access point."
  },
  {
    "event_id": "EVT.00178",
    "asset_id": "AST.TREVELYAN.RE3",
    "seq": 3,
    "date": "2024-02-14",
    "event_type": "insured_value_reassessed",
    "role_ref_hint": "Siena Bellucci",
    "role_ref_resolved_id": null,
    "note": "Siena Bellucci commissioned a re-appraisal ahead of policy renewal."
  },
  {
    "event_id": "EVT.00179",
    "asset_id": "AST.TREVELYAN.AUTO",
    "seq": 1,
    "date": "2019-04-30",
    "event_type": "acquired",
    "role_ref_hint": "Grace Lindstrom",
    "role_ref_resolved_id": null,
    "note": "Grace Lindstrom assembled the initial pairing of a period classic and a modern exotic for the family's collection."
  },
  {
    "event_id": "EVT.00180",
    "asset_id": "AST.TREVELYAN.AUTO",
    "seq": 2,
    "date": "2022-07-17",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A modern hypercar was added, rounding the collection to four vehicles."
  },
  {
    "event_id": "EVT.00181",
    "asset_id": "AST.TREVELYAN.AUTO",
    "seq": 3,
    "date": "2025-05-06",
    "event_type": "insured_value_reassessed",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Collection was re-appraised ahead of policy renewal."
  },
  {
    "event_id": "EVT.00182",
    "asset_id": "AST.FARLEIGH.YACHT",
    "seq": 1,
    "date": "2019-05-15",
    "event_type": "acquired",
    "role_ref_hint": "Farleigh Family Holdings",
    "role_ref_resolved_id": "PRIN.FARLEIGH",
    "note": "Farleigh Family Holdings took delivery of M/Y Juno as a newly built custom superyacht."
  },
  {
    "event_id": "EVT.00183",
    "asset_id": "AST.FARLEIGH.YACHT",
    "seq": 2,
    "date": "2022-09-03",
    "event_type": "hull_insured_value_reassessed",
    "role_ref_hint": "Thabo Mokoena",
    "role_ref_resolved_id": "ROLE.FARLEIGH.OWNE",
    "note": "Thabo Mokoena commissioned a survey resetting the agreed hull value ahead of a Caribbean crossing."
  },
  {
    "event_id": "EVT.00184",
    "asset_id": "AST.FARLEIGH.YACHT",
    "seq": 3,
    "date": "2025-01-27",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Interior refresh and updated tender garage completed at a Palma yard."
  },
  {
    "event_id": "EVT.00185",
    "asset_id": "AST.FARLEIGH.AVI",
    "seq": 1,
    "date": "2019-10-21",
    "event_type": "acquired",
    "role_ref_hint": "Rosalind Chen",
    "role_ref_resolved_id": null,
    "note": "Rosalind Chen negotiated acquisition of the Challenger 350 for the family's regular transatlantic travel."
  },
  {
    "event_id": "EVT.00186",
    "asset_id": "AST.FARLEIGH.AVI",
    "seq": 2,
    "date": "2022-03-08",
    "event_type": "interior_refurbished",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Cabin interior was refreshed with updated seating and connectivity."
  },
  {
    "event_id": "EVT.00187",
    "asset_id": "AST.FARLEIGH.AVI",
    "seq": 3,
    "date": "2025-10-02",
    "event_type": "hull_policy_renewed",
    "role_ref_hint": "\u00c9tienne Laurent",
    "role_ref_resolved_id": null,
    "note": "\u00c9tienne Laurent renewed hull coverage following a scheduled inspection."
  },
  {
    "event_id": "EVT.00188",
    "asset_id": "AST.FARLEIGH.RE1",
    "seq": 1,
    "date": "2018-08-14",
    "event_type": "acquired",
    "role_ref_hint": "Farleigh Family Holdings",
    "role_ref_resolved_id": "PRIN.FARLEIGH",
    "note": "Farleigh Family Holdings acquired the Martha's Vineyard estate as the family's summer residence."
  },
  {
    "event_id": "EVT.00189",
    "asset_id": "AST.FARLEIGH.RE1",
    "seq": 2,
    "date": "2021-06-29",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Estate underwent a full renovation including a new guest cottage and pool house."
  },
  {
    "event_id": "EVT.00190",
    "asset_id": "AST.FARLEIGH.RE1",
    "seq": 3,
    "date": "2024-09-11",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Keiko Sato",
    "role_ref_resolved_id": null,
    "note": "Keiko Sato oversaw transfer of title into the family holdings structure."
  },
  {
    "event_id": "EVT.00191",
    "asset_id": "AST.HALLOWAY.YACHT",
    "seq": 1,
    "date": "2019-03-18",
    "event_type": "acquired",
    "role_ref_hint": "Marcus Delacroix",
    "role_ref_resolved_id": "ROLE.HALLOWAY.PROP",
    "note": "Marcus Delacroix led the acquisition of M/Y Borealis from the previous owner, a Monaco-based shipping family, as the Halloway family's first superyacht."
  },
  {
    "event_id": "EVT.00192",
    "asset_id": "AST.HALLOWAY.YACHT",
    "seq": 2,
    "date": "2021-06-22",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Borealis underwent a hull and interior refit at a Ft. Lauderdale yard, refreshing guest cabins and updating onboard systems."
  },
  {
    "event_id": "EVT.00193",
    "asset_id": "AST.HALLOWAY.YACHT",
    "seq": 3,
    "date": "2023-09-14",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Halloway Family Office",
    "role_ref_resolved_id": "PRIN.HALLOWAY",
    "note": "Ownership of M/Y Borealis was restructured into the Halloway Family Office holding entity for estate-planning purposes."
  },
  {
    "event_id": "EVT.00194",
    "asset_id": "AST.HALLOWAY.YACHT",
    "seq": 4,
    "date": "2025-02-10",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Borealis entered a limited seasonal charter program to offset operating costs during the family's reduced usage months."
  },
  {
    "event_id": "EVT.00195",
    "asset_id": "AST.HALLOWAY.RE1",
    "seq": 1,
    "date": "2018-05-09",
    "event_type": "inherited",
    "role_ref_hint": "Dana Okafor",
    "role_ref_resolved_id": null,
    "note": "Dana Okafor inherited the Charleston Historic Estate from a family member, bringing it into the Halloway family's real estate holdings."
  },
  {
    "event_id": "EVT.00196",
    "asset_id": "AST.HALLOWAY.RE1",
    "seq": 2,
    "date": "2020-11-03",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Charleston Historic Estate underwent a preservation-grade renovation restoring period architectural details while modernizing mechanical systems."
  },
  {
    "event_id": "EVT.00197",
    "asset_id": "AST.HALLOWAY.RE1",
    "seq": 3,
    "date": "2024-07-19",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Halloway Family Office",
    "role_ref_resolved_id": "PRIN.HALLOWAY",
    "note": "The Charleston Historic Estate was retitled into the Halloway Family Office trust structure for succession planning."
  },
  {
    "event_id": "EVT.00198",
    "asset_id": "AST.CASTELLAN.YACHT",
    "seq": 1,
    "date": "2020-04-11",
    "event_type": "acquired",
    "role_ref_hint": "Julian Ashford",
    "role_ref_resolved_id": "ROLE.CASTELLAN.OWNE",
    "note": "Julian Ashford led the acquisition of M/Y Mistral, newly delivered, direct from the builder as the Castellan family's flagship vessel."
  },
  {
    "event_id": "EVT.00199",
    "asset_id": "AST.CASTELLAN.YACHT",
    "seq": 2,
    "date": "2022-08-27",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Mistral underwent an interior refresh and range-extension refit to prepare the vessel for extended transatlantic cruising."
  },
  {
    "event_id": "EVT.00200",
    "asset_id": "AST.CASTELLAN.YACHT",
    "seq": 3,
    "date": "2024-01-15",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Castellan Family Trust",
    "role_ref_resolved_id": "PRIN.CASTELLAN",
    "note": "Ownership of M/Y Mistral was consolidated under the Castellan Family Trust as part of a broader estate restructuring."
  },
  {
    "event_id": "EVT.00201",
    "asset_id": "AST.CASTELLAN.YACHT",
    "seq": 4,
    "date": "2025-10-02",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A new shadow support vessel was added to accompany M/Y Mistral on extended voyages, expanding the yacht's tender and support fleet."
  },
  {
    "event_id": "EVT.00202",
    "asset_id": "AST.CASTELLAN.RE1",
    "seq": 1,
    "date": "2018-12-05",
    "event_type": "acquired",
    "role_ref_hint": "Camille Fontaine",
    "role_ref_resolved_id": null,
    "note": "Camille Fontaine acquired the Gstaad Historic Estate from the previous owner, a longstanding Swiss banking family, as a winter residence for the family."
  },
  {
    "event_id": "EVT.00203",
    "asset_id": "AST.CASTELLAN.RE1",
    "seq": 2,
    "date": "2021-02-14",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Gstaad Historic Estate's chalet-style main residence was renovated with an expanded spa and improved ski-in/ski-out access."
  },
  {
    "event_id": "EVT.00204",
    "asset_id": "AST.CASTELLAN.RE1",
    "seq": 3,
    "date": "2023-06-08",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Castellan Family Trust",
    "role_ref_resolved_id": "PRIN.CASTELLAN",
    "note": "The Gstaad Historic Estate was retitled under the Castellan Family Trust for cross-border estate planning."
  },
  {
    "event_id": "EVT.00205",
    "asset_id": "AST.CASTELLAN.AUTO",
    "seq": 1,
    "date": "2019-05-20",
    "event_type": "acquired",
    "role_ref_hint": "Rafael Ontiveros",
    "role_ref_resolved_id": "ROLE.CASTELLAN.COLL",
    "note": "Rafael Ontiveros began assembling the Castellan family's curated car collection with the purchase of two period classics and a modern exotic."
  },
  {
    "event_id": "EVT.00206",
    "asset_id": "AST.CASTELLAN.AUTO",
    "seq": 2,
    "date": "2021-09-11",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The collection was expanded with a limited-run modern hypercar, materially increasing the collection's blended value."
  },
  {
    "event_id": "EVT.00207",
    "asset_id": "AST.CASTELLAN.AUTO",
    "seq": 3,
    "date": "2023-11-30",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Two additional trophy-tier pieces were acquired, rounding the collection out to its current 8-car curated form."
  },
  {
    "event_id": "EVT.00208",
    "asset_id": "AST.CASTELLAN.AUTO",
    "seq": 4,
    "date": "2025-04-17",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Castellan Family Trust",
    "role_ref_resolved_id": "PRIN.CASTELLAN",
    "note": "The 8-Car Curated Collection was retitled under the Castellan Family Trust for insurance and succession consolidation."
  },
  {
    "event_id": "EVT.00209",
    "asset_id": "AST.HARTLEY.RE1",
    "seq": 1,
    "date": "2018-03-22",
    "event_type": "acquired",
    "role_ref_hint": "Charlotte Wexford",
    "role_ref_resolved_id": "ROLE.HARTLEY.OWNE",
    "note": "Charlotte Wexford acquired the Palm Beach Historic Estate from the previous owner, a longtime Palm Beach society family, as the Hartley family's primary winter residence."
  },
  {
    "event_id": "EVT.00210",
    "asset_id": "AST.HARTLEY.RE1",
    "seq": 2,
    "date": "2020-09-16",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Palm Beach Historic Estate was renovated, restoring original 1920s architectural detailing alongside a full mechanical systems upgrade."
  },
  {
    "event_id": "EVT.00211",
    "asset_id": "AST.HARTLEY.RE1",
    "seq": 3,
    "date": "2022-12-04",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A guest wing and pool pavilion were added to the Palm Beach Historic Estate to accommodate extended family gatherings."
  },
  {
    "event_id": "EVT.00212",
    "asset_id": "AST.HARTLEY.RE1",
    "seq": 4,
    "date": "2025-05-29",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Hartley Family Office Trust",
    "role_ref_resolved_id": "PRIN.HARTLEY",
    "note": "The Palm Beach Historic Estate was retitled into the Hartley Family Office Trust as part of a generational estate plan."
  },
  {
    "event_id": "EVT.00213",
    "asset_id": "AST.HARTLEY.RE2",
    "seq": 1,
    "date": "2019-07-08",
    "event_type": "acquired",
    "role_ref_hint": "Sanjay Patel",
    "role_ref_resolved_id": "ROLE.HARTLEY.COLL",
    "note": "Sanjay Patel purchased the Miami Mountain Residence as a secondary property for the Hartley family, closer to South Florida business interests."
  },
  {
    "event_id": "EVT.00214",
    "asset_id": "AST.HARTLEY.RE2",
    "seq": 2,
    "date": "2023-03-25",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Miami Mountain Residence underwent an interior modernization and expansion of its outdoor living space."
  },
  {
    "event_id": "EVT.00215",
    "asset_id": "AST.HARTLEY.AUTO",
    "seq": 1,
    "date": "2020-06-13",
    "event_type": "acquired",
    "role_ref_hint": "Walter Higgins",
    "role_ref_resolved_id": null,
    "note": "Walter Higgins assembled the Hartley family's initial 4-car curated collection, anchored by a period classic and a modern hypercar."
  },
  {
    "event_id": "EVT.00216",
    "asset_id": "AST.HARTLEY.AUTO",
    "seq": 2,
    "date": "2022-10-19",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The collection was rounded out with two additional blue-chip modern exotics."
  },
  {
    "event_id": "EVT.00217",
    "asset_id": "AST.HARTLEY.AUTO",
    "seq": 3,
    "date": "2024-08-07",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Hartley Family Office Trust",
    "role_ref_resolved_id": "PRIN.HARTLEY",
    "note": "The 4-Car Curated Collection was retitled under the Hartley Family Office Trust for insurance consolidation."
  },
  {
    "event_id": "EVT.00218",
    "asset_id": "AST.ISHERWOOD.YACHT",
    "seq": 1,
    "date": "2018-11-27",
    "event_type": "traded_up_from_prior_vessel",
    "role_ref_hint": "Nathaniel Cross",
    "role_ref_resolved_id": "ROLE.ISHERWOOD.OWNE",
    "note": "Nathaniel Cross traded up from a smaller 55m vessel to acquire M/Y Fathom as the Isherwood family's new flagship."
  },
  {
    "event_id": "EVT.00219",
    "asset_id": "AST.ISHERWOOD.YACHT",
    "seq": 2,
    "date": "2021-05-06",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Fathom underwent an extensive refit upgrading navigation, entertainment, and tender-garage systems."
  },
  {
    "event_id": "EVT.00220",
    "asset_id": "AST.ISHERWOOD.YACHT",
    "seq": 3,
    "date": "2023-08-21",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Fathom entered a limited charter program during off-peak months to offset annual operating costs."
  },
  {
    "event_id": "EVT.00221",
    "asset_id": "AST.ISHERWOOD.YACHT",
    "seq": 4,
    "date": "2025-12-03",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Isherwood Holdings",
    "role_ref_resolved_id": "PRIN.ISHERWOOD",
    "note": "Ownership of M/Y Fathom was consolidated under Isherwood Holdings as part of a broader asset restructuring."
  },
  {
    "event_id": "EVT.00222",
    "asset_id": "AST.ISHERWOOD.AVI",
    "seq": 1,
    "date": "2019-02-14",
    "event_type": "acquired",
    "role_ref_hint": "Simone Devereux",
    "role_ref_resolved_id": null,
    "note": "Simone Devereux acquired the Sikorsky S-76 to provide airport and estate-to-yacht transfer service for the Isherwood family."
  },
  {
    "event_id": "EVT.00223",
    "asset_id": "AST.ISHERWOOD.AVI",
    "seq": 2,
    "date": "2022-07-09",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Sikorsky S-76's avionics suite was upgraded and the cabin interior refreshed."
  },
  {
    "event_id": "EVT.00224",
    "asset_id": "AST.ISHERWOOD.AVI",
    "seq": 3,
    "date": "2024-11-18",
    "event_type": "refinanced",
    "role_ref_hint": "Isherwood Holdings",
    "role_ref_resolved_id": "PRIN.ISHERWOOD",
    "note": "The Sikorsky S-76 was refinanced under Isherwood Holdings to optimize the family's aviation asset financing structure."
  },
  {
    "event_id": "EVT.00225",
    "asset_id": "AST.ISHERWOOD.RE1",
    "seq": 1,
    "date": "2018-08-02",
    "event_type": "acquired",
    "role_ref_hint": "Roland Bexley",
    "role_ref_resolved_id": null,
    "note": "Roland Bexley acquired the Vail Beachfront Villa from the previous owner, a Colorado ranching family, establishing it as the Isherwood family's primary mountain residence."
  },
  {
    "event_id": "EVT.00226",
    "asset_id": "AST.ISHERWOOD.RE1",
    "seq": 2,
    "date": "2021-01-25",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Vail Beachfront Villa was expanded with a new primary suite wing and a mechanical systems overhaul."
  },
  {
    "event_id": "EVT.00227",
    "asset_id": "AST.ISHERWOOD.RE1",
    "seq": 3,
    "date": "2024-04-30",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Isherwood Holdings",
    "role_ref_resolved_id": "PRIN.ISHERWOOD",
    "note": "The Vail Beachfront Villa was retitled into Isherwood Holdings for estate-planning purposes."
  },
  {
    "event_id": "EVT.00228",
    "asset_id": "AST.ISHERWOOD.RE2",
    "seq": 1,
    "date": "2020-06-17",
    "event_type": "acquired",
    "role_ref_hint": "Mikael Johansson",
    "role_ref_resolved_id": null,
    "note": "Mikael Johansson acquired the Cap Ferrat Coastal Estate as a secondary residence for the Isherwood family's summers on the French Riviera."
  },
  {
    "event_id": "EVT.00229",
    "asset_id": "AST.ISHERWOOD.RE2",
    "seq": 2,
    "date": "2023-05-11",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Cap Ferrat Coastal Estate was renovated with an expanded terrace and updated coastal-facing guest quarters."
  },
  {
    "event_id": "EVT.00230",
    "asset_id": "AST.ISHERWOOD.AUTO",
    "seq": 1,
    "date": "2019-09-06",
    "event_type": "acquired",
    "role_ref_hint": "Isabela Franco",
    "role_ref_resolved_id": "ROLE.ISHERWOOD.OFFI",
    "note": "Isabela Franco began the Isherwood family's curated car collection with an initial pairing of a classic icon and a modern exotic."
  },
  {
    "event_id": "EVT.00231",
    "asset_id": "AST.ISHERWOOD.AUTO",
    "seq": 2,
    "date": "2021-12-14",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The collection was expanded to include a second period classic and a limited-run modern exotic."
  },
  {
    "event_id": "EVT.00232",
    "asset_id": "AST.ISHERWOOD.AUTO",
    "seq": 3,
    "date": "2024-06-23",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Final pieces were added, rounding the collection out to its current 6-car curated form."
  },
  {
    "event_id": "EVT.00233",
    "asset_id": "AST.FENWICK.YACHT",
    "seq": 1,
    "date": "2018-07-19",
    "event_type": "acquired",
    "role_ref_hint": "Beatrix Hollande",
    "role_ref_resolved_id": "ROLE.FENWICK.OWNE",
    "note": "Beatrix Hollande acquired M/Y Kinship from the previous owner, a Middle Eastern royal family, as the Fenwick family's flagship vessel."
  },
  {
    "event_id": "EVT.00234",
    "asset_id": "AST.FENWICK.YACHT",
    "seq": 2,
    "date": "2020-10-08",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Kinship underwent a full refit at a European yard modernizing propulsion and stabilization systems."
  },
  {
    "event_id": "EVT.00235",
    "asset_id": "AST.FENWICK.YACHT",
    "seq": 3,
    "date": "2023-02-27",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Kinship entered a seasonal charter arrangement to offset operating costs during reduced family usage."
  },
  {
    "event_id": "EVT.00236",
    "asset_id": "AST.FENWICK.YACHT",
    "seq": 4,
    "date": "2025-09-12",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Fenwick Family Partnership",
    "role_ref_resolved_id": "PRIN.FENWICK",
    "note": "Ownership of M/Y Kinship was consolidated under the Fenwick Family Partnership as part of a succession restructuring."
  },
  {
    "event_id": "EVT.00237",
    "asset_id": "AST.FENWICK.RE1",
    "seq": 1,
    "date": "2018-04-14",
    "event_type": "acquired",
    "role_ref_hint": "Samuel Okoye",
    "role_ref_resolved_id": "ROLE.FENWICK.DIRE",
    "note": "Samuel Okoye acquired the Malibu Oceanfront Compound as the Fenwick family's primary West Coast residence."
  },
  {
    "event_id": "EVT.00238",
    "asset_id": "AST.FENWICK.RE1",
    "seq": 2,
    "date": "2021-08-23",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Malibu Oceanfront Compound underwent a full architectural renovation, adding a guest house and an expanded oceanfront terrace."
  },
  {
    "event_id": "EVT.00239",
    "asset_id": "AST.FENWICK.RE1",
    "seq": 3,
    "date": "2024-02-09",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Fenwick Family Partnership",
    "role_ref_resolved_id": "PRIN.FENWICK",
    "note": "The Malibu Oceanfront Compound was retitled into the Fenwick Family Partnership for estate-planning purposes."
  },
  {
    "event_id": "EVT.00240",
    "asset_id": "AST.FENWICK.AUTO",
    "seq": 1,
    "date": "2019-01-28",
    "event_type": "acquired",
    "role_ref_hint": "Peter Lindgren",
    "role_ref_resolved_id": null,
    "note": "Peter Lindgren began assembling the Fenwick family's curated car collection with a pairing of a classic icon and a modern hypercar."
  },
  {
    "event_id": "EVT.00241",
    "asset_id": "AST.FENWICK.AUTO",
    "seq": 2,
    "date": "2021-06-15",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The collection was expanded with two blue-chip modern exotics and a second period classic."
  },
  {
    "event_id": "EVT.00242",
    "asset_id": "AST.FENWICK.AUTO",
    "seq": 3,
    "date": "2023-10-02",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Final trophy-tier pieces were added, rounding the collection out to its current 8-car curated form."
  },
  {
    "event_id": "EVT.00243",
    "asset_id": "AST.FENWICK.AUTO",
    "seq": 4,
    "date": "2025-07-20",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Fenwick Family Partnership",
    "role_ref_resolved_id": "PRIN.FENWICK",
    "note": "The 8-Car Curated Collection was retitled under the Fenwick Family Partnership for insurance consolidation."
  },
  {
    "event_id": "EVT.00244",
    "asset_id": "AST.LINDQVIST.YACHT",
    "seq": 1,
    "date": "2019-03-14",
    "event_type": "acquired",
    "role_ref_hint": "Lindqvist Family Office",
    "role_ref_resolved_id": "PRIN.LINDQVIST",
    "note": "Lindqvist Family Office acquired M/Y Meridian from her previous owner, a Scandinavian shipping family, as a step up from a smaller flybridge cruiser."
  },
  {
    "event_id": "EVT.00245",
    "asset_id": "AST.LINDQVIST.YACHT",
    "seq": 2,
    "date": "2021-06-20",
    "event_type": "major_refit",
    "role_ref_hint": "Elias Thorne",
    "role_ref_resolved_id": "ROLE.LINDQVIST.OWNE",
    "note": "Elias Thorne authorized a major refit covering new navigation electronics and an interior refresh ahead of the Mediterranean charter season."
  },
  {
    "event_id": "EVT.00246",
    "asset_id": "AST.LINDQVIST.YACHT",
    "seq": 3,
    "date": "2024-02-08",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Lindqvist Family Office",
    "role_ref_resolved_id": "PRIN.LINDQVIST",
    "note": "Title to M/Y Meridian was transferred into the Lindqvist Family Office structure as part of an estate-planning reorganization."
  },
  {
    "event_id": "EVT.00247",
    "asset_id": "AST.LINDQVIST.RE1",
    "seq": 1,
    "date": "2018-11-02",
    "event_type": "acquired",
    "role_ref_hint": "Lindqvist Family Office",
    "role_ref_resolved_id": "PRIN.LINDQVIST",
    "note": "Lindqvist Family Office purchased the Beverly Hills Coastal Estate as the family's primary US residence."
  },
  {
    "event_id": "EVT.00248",
    "asset_id": "AST.LINDQVIST.RE1",
    "seq": 2,
    "date": "2020-09-17",
    "event_type": "renovated",
    "role_ref_hint": "Priya Anand",
    "role_ref_resolved_id": null,
    "note": "Priya Anand oversaw a full renovation of the estate's main residence and guest quarters."
  },
  {
    "event_id": "EVT.00249",
    "asset_id": "AST.LINDQVIST.RE1",
    "seq": 3,
    "date": "2023-05-11",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The estate was refinanced on favorable terms to help fund the family's yacht refit program."
  },
  {
    "event_id": "EVT.00250",
    "asset_id": "AST.BRAMWELL.YACHT",
    "seq": 1,
    "date": "2018-04-05",
    "event_type": "delivered_from_shipyard",
    "role_ref_hint": "Bramwell Family Trust",
    "role_ref_resolved_id": "PRIN.BRAMWELL",
    "note": "Bramwell Family Trust took delivery of M/Y Peregrine as a new-build flagship commission."
  },
  {
    "event_id": "EVT.00251",
    "asset_id": "AST.BRAMWELL.YACHT",
    "seq": 2,
    "date": "2020-11-19",
    "event_type": "major_refit",
    "role_ref_hint": "Naomi Kessler",
    "role_ref_resolved_id": null,
    "note": "Naomi Kessler commissioned a major refit adding an extended beach club and upgraded stabilization systems."
  },
  {
    "event_id": "EVT.00252",
    "asset_id": "AST.BRAMWELL.YACHT",
    "seq": 3,
    "date": "2023-07-02",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Peregrine entered a partial charter program to offset annual operating costs while retaining private-use blocks for the family."
  },
  {
    "event_id": "EVT.00253",
    "asset_id": "AST.BRAMWELL.YACHT",
    "seq": 4,
    "date": "2025-01-14",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Bramwell Family Trust",
    "role_ref_resolved_id": "PRIN.BRAMWELL",
    "note": "Formal title to M/Y Peregrine was transferred into the Bramwell Family Trust as part of a broader estate restructuring."
  },
  {
    "event_id": "EVT.00254",
    "asset_id": "AST.BRAMWELL.RE1",
    "seq": 1,
    "date": "2019-06-24",
    "event_type": "acquired",
    "role_ref_hint": "Bramwell Family Trust",
    "role_ref_resolved_id": "PRIN.BRAMWELL",
    "note": "Bramwell Family Trust acquired the Palm Beach Commercial Plaza as an income-generating real estate holding."
  },
  {
    "event_id": "EVT.00255",
    "asset_id": "AST.BRAMWELL.RE1",
    "seq": 2,
    "date": "2022-03-09",
    "event_type": "renovated",
    "role_ref_hint": "Declan Fitzgerald",
    "role_ref_resolved_id": null,
    "note": "Declan Fitzgerald oversaw renovation of the plaza's retail frontage to attract higher-tier tenants."
  },
  {
    "event_id": "EVT.00256",
    "asset_id": "AST.BRAMWELL.RE1",
    "seq": 3,
    "date": "2024-10-30",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The property was refinanced to help fund additional portfolio acquisitions."
  },
  {
    "event_id": "EVT.00257",
    "asset_id": "AST.BRAMWELL.RE2",
    "seq": 1,
    "date": "2020-07-08",
    "event_type": "acquired",
    "role_ref_hint": "Bramwell Family Trust",
    "role_ref_resolved_id": "PRIN.BRAMWELL",
    "note": "Bramwell Family Trust purchased the Cap Ferrat Beachfront Villa as a summer residence on the French Riviera."
  },
  {
    "event_id": "EVT.00258",
    "asset_id": "AST.BRAMWELL.RE2",
    "seq": 2,
    "date": "2023-08-21",
    "event_type": "renovated",
    "role_ref_hint": "Rafael Ochoa",
    "role_ref_resolved_id": null,
    "note": "Rafael Ochoa managed a renovation of the villa's guest pavilion and pool terrace."
  },
  {
    "event_id": "EVT.00259",
    "asset_id": "AST.BRAMWELL.AUTO",
    "seq": 1,
    "date": "2019-02-16",
    "event_type": "acquired",
    "role_ref_hint": "Julian Castellanos",
    "role_ref_resolved_id": "ROLE.BRAMWELL.OWNE",
    "note": "Julian Castellanos assembled the initial 4-car curated collection, anchored by a classic Mercedes 300SL Gullwing."
  },
  {
    "event_id": "EVT.00260",
    "asset_id": "AST.BRAMWELL.AUTO",
    "seq": 2,
    "date": "2021-09-05",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A modern hypercar was added to the collection, broadening its rarity spread."
  },
  {
    "event_id": "EVT.00261",
    "asset_id": "AST.BRAMWELL.AUTO",
    "seq": 3,
    "date": "2024-04-12",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "One entry-level exotic was deaccessioned from the collection to make room for a higher-tier acquisition."
  },
  {
    "event_id": "EVT.00262",
    "asset_id": "AST.THISTLEWOOD.YACHT",
    "seq": 1,
    "date": "2018-09-11",
    "event_type": "acquired",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Thistlewood Holdings acquired M/Y Elysian from her previous owner, a Middle Eastern investment family, following a multi-month survey and sea trial."
  },
  {
    "event_id": "EVT.00263",
    "asset_id": "AST.THISTLEWOOD.YACHT",
    "seq": 2,
    "date": "2021-05-27",
    "event_type": "major_refit",
    "role_ref_hint": "Callum Reyes",
    "role_ref_resolved_id": "ROLE.THISTLEWOOD.ESTA",
    "note": "Callum Reyes commissioned a major refit including new engines and an updated owner's suite."
  },
  {
    "event_id": "EVT.00264",
    "asset_id": "AST.THISTLEWOOD.YACHT",
    "seq": 3,
    "date": "2024-06-03",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Thistlewood Holdings",
    "role_ref_resolved_id": "PRIN.THISTLEWOOD",
    "note": "Ownership of M/Y Elysian was transferred into the Thistlewood Holdings structure for succession planning."
  },
  {
    "event_id": "EVT.00265",
    "asset_id": "AST.THISTLEWOOD.RE1",
    "seq": 1,
    "date": "2019-04-19",
    "event_type": "acquired",
    "role_ref_hint": "Thistlewood Holdings",
    "role_ref_resolved_id": "PRIN.THISTLEWOOD",
    "note": "Thistlewood Holdings purchased the Cap Ferrat Vineyard Estate as a secondary European residence with an operating vineyard."
  },
  {
    "event_id": "EVT.00266",
    "asset_id": "AST.THISTLEWOOD.RE1",
    "seq": 2,
    "date": "2022-11-14",
    "event_type": "renovated",
    "role_ref_hint": "Farrah Haddad",
    "role_ref_resolved_id": null,
    "note": "Farrah Haddad oversaw restoration of the estate's main house and modernization of the vineyard's production facility."
  },
  {
    "event_id": "EVT.00267",
    "asset_id": "AST.THISTLEWOOD.RE1",
    "seq": 3,
    "date": "2025-03-06",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The estate was refinanced to fund continued vineyard operations and capital improvements."
  },
  {
    "event_id": "EVT.00268",
    "asset_id": "AST.THISTLEWOOD.AUTO",
    "seq": 1,
    "date": "2018-12-03",
    "event_type": "acquired",
    "role_ref_hint": "Bennett Okonkwo",
    "role_ref_resolved_id": "ROLE.THISTLEWOOD.CHIE",
    "note": "Bennett Okonkwo began assembling the 8-car curated collection with a pair of period classics."
  },
  {
    "event_id": "EVT.00269",
    "asset_id": "AST.THISTLEWOOD.AUTO",
    "seq": 2,
    "date": "2020-06-22",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "An F40-tier trophy classic was added, deepening the collection's classic bench."
  },
  {
    "event_id": "EVT.00270",
    "asset_id": "AST.THISTLEWOOD.AUTO",
    "seq": 3,
    "date": "2023-01-17",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A modern hypercar was acquired to round out the collection's contemporary bench."
  },
  {
    "event_id": "EVT.00271",
    "asset_id": "AST.STAVROS.YACHT",
    "seq": 1,
    "date": "2019-05-09",
    "event_type": "acquired",
    "role_ref_hint": "Stavros Family Office Trust",
    "role_ref_resolved_id": "PRIN.STAVROS",
    "note": "Stavros Family Office Trust acquired M/Y Fathom as an entry point into yacht ownership, purchased through a Sunseeker dealer network broker."
  },
  {
    "event_id": "EVT.00272",
    "asset_id": "AST.STAVROS.YACHT",
    "seq": 2,
    "date": "2022-07-25",
    "event_type": "major_refit",
    "role_ref_hint": "Dimitri Kalantzis",
    "role_ref_resolved_id": "ROLE.STAVROS.OWNE",
    "note": "Dimitri Kalantzis commissioned an interior refresh and upgraded electronics package."
  },
  {
    "event_id": "EVT.00273",
    "asset_id": "AST.STAVROS.YACHT",
    "seq": 3,
    "date": "2024-08-30",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Fathom entered a limited day-charter program in the Mediterranean to offset seasonal running costs."
  },
  {
    "event_id": "EVT.00274",
    "asset_id": "AST.STAVROS.AUTO",
    "seq": 1,
    "date": "2020-03-14",
    "event_type": "acquired",
    "role_ref_hint": "Wren Ashcombe",
    "role_ref_resolved_id": null,
    "note": "Wren Ashcombe assembled the initial core of the 8-car collection around two blue-chip modern exotics."
  },
  {
    "event_id": "EVT.00275",
    "asset_id": "AST.STAVROS.AUTO",
    "seq": 2,
    "date": "2022-10-08",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A period classic was added to broaden the collection's historical range."
  },
  {
    "event_id": "EVT.00276",
    "asset_id": "AST.STAVROS.AUTO",
    "seq": 3,
    "date": "2025-02-19",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "One modern exotic was deaccessioned and sold to help fund acquisition of a higher-tier hypercar."
  },
  {
    "event_id": "EVT.00277",
    "asset_id": "AST.CAVANAUGH.YACHT",
    "seq": 1,
    "date": "2018-06-21",
    "event_type": "acquired",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Cavanaugh Family Holdings acquired M/Y Bellwether from her previous owner, a South American agribusiness family."
  },
  {
    "event_id": "EVT.00278",
    "asset_id": "AST.CAVANAUGH.YACHT",
    "seq": 2,
    "date": "2021-02-16",
    "event_type": "major_refit",
    "role_ref_hint": "Soren Vance",
    "role_ref_resolved_id": "ROLE.CAVANAUGH.FLIG",
    "note": "Soren Vance commissioned a major refit updating the yacht's exterior paint and navigation suite."
  },
  {
    "event_id": "EVT.00279",
    "asset_id": "AST.CAVANAUGH.YACHT",
    "seq": 3,
    "date": "2023-11-04",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Bellwether entered a partial charter program managed through a Mediterranean brokerage."
  },
  {
    "event_id": "EVT.00280",
    "asset_id": "AST.CAVANAUGH.AVI",
    "seq": 1,
    "date": "2020-08-13",
    "event_type": "acquired",
    "role_ref_hint": "Cavanaugh Family Holdings",
    "role_ref_resolved_id": "PRIN.CAVANAUGH",
    "note": "Cavanaugh Family Holdings acquired a Cessna Citation Longitude to replace an aging mid-size charter arrangement."
  },
  {
    "event_id": "EVT.00281",
    "asset_id": "AST.CAVANAUGH.AVI",
    "seq": 2,
    "date": "2023-04-27",
    "event_type": "avionics_upgrade",
    "role_ref_hint": "Fatima Al-Rashid",
    "role_ref_resolved_id": "ROLE.CAVANAUGH.DIRE",
    "note": "Fatima Al-Rashid authorized an avionics upgrade to the latest connectivity and safety package."
  },
  {
    "event_id": "EVT.00282",
    "asset_id": "AST.CAVANAUGH.AVI",
    "seq": 3,
    "date": "2025-06-09",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Cavanaugh Family Holdings",
    "role_ref_resolved_id": "PRIN.CAVANAUGH",
    "note": "Aircraft title was transferred into the Cavanaugh Family Holdings structure."
  },
  {
    "event_id": "EVT.00283",
    "asset_id": "AST.CAVANAUGH.RE1",
    "seq": 1,
    "date": "2018-03-08",
    "event_type": "acquired",
    "role_ref_hint": "Cavanaugh Family Holdings",
    "role_ref_resolved_id": "PRIN.CAVANAUGH",
    "note": "Cavanaugh Family Holdings purchased the Manhattan Oceanfront Compound as the family's primary East Coast residence."
  },
  {
    "event_id": "EVT.00284",
    "asset_id": "AST.CAVANAUGH.RE1",
    "seq": 2,
    "date": "2020-12-15",
    "event_type": "renovated",
    "role_ref_hint": "Grigor Petrosyan",
    "role_ref_resolved_id": null,
    "note": "Grigor Petrosyan oversaw a full interior renovation and structural reinforcement of the waterfront terrace."
  },
  {
    "event_id": "EVT.00285",
    "asset_id": "AST.CAVANAUGH.RE1",
    "seq": 3,
    "date": "2024-09-22",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The compound was refinanced to help fund the acquisition of additional collection assets."
  },
  {
    "event_id": "EVT.00286",
    "asset_id": "AST.CAVANAUGH.AUTO",
    "seq": 1,
    "date": "2019-01-29",
    "event_type": "acquired",
    "role_ref_hint": "Leilani Kahale",
    "role_ref_resolved_id": null,
    "note": "Leilani Kahale began assembling the 12-car curated collection, anchored by a Carrera GT-era classic."
  },
  {
    "event_id": "EVT.00287",
    "asset_id": "AST.CAVANAUGH.AUTO",
    "seq": 2,
    "date": "2021-08-06",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A second trophy-tier hypercar was acquired, deepening the collection's modern bench."
  },
  {
    "event_id": "EVT.00288",
    "asset_id": "AST.CAVANAUGH.AUTO",
    "seq": 3,
    "date": "2023-05-18",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "DB5-era pieces were added to broaden the collection's classic range."
  },
  {
    "event_id": "EVT.00289",
    "asset_id": "AST.CAVANAUGH.AUTO",
    "seq": 4,
    "date": "2026-02-11",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "Viktor Nowak",
    "role_ref_resolved_id": null,
    "note": "Viktor Nowak deaccessioned two lower-tier units to consolidate the collection around fewer, higher-value pieces."
  },
  {
    "event_id": "EVT.00290",
    "asset_id": "AST.FOXLEIGH.YACHT",
    "seq": 1,
    "date": "2019-03-14",
    "event_type": "acquired",
    "role_ref_hint": "Nathaniel Choi",
    "role_ref_resolved_id": "ROLE.FOXLEIGH.OWNE",
    "note": "Nathaniel Choi acquired M/Y Drift in a private brokerage sale from the previous owner, a Monaco-based shipping family, following a two-year charter evaluation period."
  },
  {
    "event_id": "EVT.00291",
    "asset_id": "AST.FOXLEIGH.YACHT",
    "seq": 2,
    "date": "2021-07-02",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Drift underwent a major refit at a Dutch yard, replacing stabilizers and updating the owner's deck interior."
  },
  {
    "event_id": "EVT.00292",
    "asset_id": "AST.FOXLEIGH.YACHT",
    "seq": 3,
    "date": "2023-11-20",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Foxleigh Family Office Trust",
    "role_ref_resolved_id": "PRIN.FOXLEIGH",
    "note": "Title to M/Y Drift was transferred into the Foxleigh Family Office Trust as part of a broader estate-planning restructuring."
  },
  {
    "event_id": "EVT.00293",
    "asset_id": "AST.FOXLEIGH.YACHT",
    "seq": 4,
    "date": "2025-05-09",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Drift was enrolled in a limited eight-week seasonal charter program in the Western Mediterranean to offset annual operating costs."
  },
  {
    "event_id": "EVT.00294",
    "asset_id": "AST.FOXLEIGH.RE1",
    "seq": 1,
    "date": "2018-09-11",
    "event_type": "acquired",
    "role_ref_hint": "Nathaniel Choi",
    "role_ref_resolved_id": "ROLE.FOXLEIGH.OWNE",
    "note": "Nathaniel Choi purchased the Montecito Ranch Estate as the family's primary West Coast residence."
  },
  {
    "event_id": "EVT.00295",
    "asset_id": "AST.FOXLEIGH.RE1",
    "seq": 2,
    "date": "2020-02-28",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The main residence and equestrian outbuildings were renovated, including a full kitchen and guest-wing remodel."
  },
  {
    "event_id": "EVT.00296",
    "asset_id": "AST.FOXLEIGH.RE1",
    "seq": 3,
    "date": "2024-07-15",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Foxleigh Family Office Trust",
    "role_ref_resolved_id": "PRIN.FOXLEIGH",
    "note": "The estate's title was transferred into the Foxleigh Family Office Trust."
  },
  {
    "event_id": "EVT.00297",
    "asset_id": "AST.FOXLEIGH.AUTO",
    "seq": 1,
    "date": "2019-04-05",
    "event_type": "acquired",
    "role_ref_hint": "Isabela Marques",
    "role_ref_resolved_id": "ROLE.FOXLEIGH.HOUS",
    "note": "Isabela Marques acquired the first two pieces of the collection, a period classic and a blue-chip modern exotic, from a dealer consignment."
  },
  {
    "event_id": "EVT.00298",
    "asset_id": "AST.FOXLEIGH.AUTO",
    "seq": 2,
    "date": "2021-09-18",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The collection was expanded with the addition of a limited-production modern hypercar."
  },
  {
    "event_id": "EVT.00299",
    "asset_id": "AST.FOXLEIGH.AUTO",
    "seq": 3,
    "date": "2023-06-02",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A fourth vehicle, a second blue-chip modern exotic, was added to round out the collection."
  },
  {
    "event_id": "EVT.00300",
    "asset_id": "AST.DUNMORE.YACHT",
    "seq": 1,
    "date": "2018-05-22",
    "event_type": "acquired",
    "role_ref_hint": "Dunmore Family Trust",
    "role_ref_resolved_id": "PRIN.DUNMORE",
    "note": "The Dunmore Family Trust acquired M/Y Cascade directly from her builder as a new-build delivery."
  },
  {
    "event_id": "EVT.00301",
    "asset_id": "AST.DUNMORE.YACHT",
    "seq": 2,
    "date": "2020-10-11",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Cascade returned to her builder's yard for a scheduled systems refit, including an upgraded tender garage and stabilization overhaul."
  },
  {
    "event_id": "EVT.00302",
    "asset_id": "AST.DUNMORE.YACHT",
    "seq": 3,
    "date": "2022-03-30",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The vessel's acquisition financing was refinanced to a marine-secured facility on improved terms."
  },
  {
    "event_id": "EVT.00303",
    "asset_id": "AST.DUNMORE.YACHT",
    "seq": 4,
    "date": "2025-08-19",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Tobias Hartmann",
    "role_ref_resolved_id": "ROLE.DUNMORE.DIRE",
    "note": "Tobias Hartmann enrolled M/Y Cascade in a select-invitation charter program during the summer Mediterranean season."
  },
  {
    "event_id": "EVT.00304",
    "asset_id": "AST.DUNMORE.AVI",
    "seq": 1,
    "date": "2020-01-16",
    "event_type": "acquired",
    "role_ref_hint": "Simone Okonkwo",
    "role_ref_resolved_id": null,
    "note": "Simone Okonkwo purchased the Challenger 350 from an OEM-affiliated pre-owned inventory program."
  },
  {
    "event_id": "EVT.00305",
    "asset_id": "AST.DUNMORE.AVI",
    "seq": 2,
    "date": "2022-11-04",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The aircraft underwent a cabin refresh and avionics upgrade during scheduled heavy maintenance."
  },
  {
    "event_id": "EVT.00306",
    "asset_id": "AST.DUNMORE.AVI",
    "seq": 3,
    "date": "2024-06-27",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Dunmore Family Trust",
    "role_ref_resolved_id": "PRIN.DUNMORE",
    "note": "Title to the aircraft was transferred into the Dunmore Family Trust."
  },
  {
    "event_id": "EVT.00307",
    "asset_id": "AST.DUNMORE.RE1",
    "seq": 1,
    "date": "2019-12-03",
    "event_type": "acquired",
    "role_ref_hint": "Diego Salazar",
    "role_ref_resolved_id": "ROLE.DUNMORE.APPR",
    "note": "Diego Salazar acquired the Telluride Penthouse as a seasonal mountain residence."
  },
  {
    "event_id": "EVT.00308",
    "asset_id": "AST.DUNMORE.RE1",
    "seq": 2,
    "date": "2021-08-14",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The penthouse's interior was fully renovated, including a ski-in mudroom expansion."
  },
  {
    "event_id": "EVT.00309",
    "asset_id": "AST.DUNMORE.RE1",
    "seq": 3,
    "date": "2023-10-09",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Dunmore Family Trust",
    "role_ref_resolved_id": "PRIN.DUNMORE",
    "note": "The property was transferred into the Dunmore Family Trust."
  },
  {
    "event_id": "EVT.00310",
    "asset_id": "AST.DUNMORE.AUTO",
    "seq": 1,
    "date": "2018-06-19",
    "event_type": "acquired",
    "role_ref_hint": "Haruki Tanaka",
    "role_ref_resolved_id": "ROLE.DUNMORE.FLIG",
    "note": "Haruki Tanaka assembled the initial core of the collection, acquiring six period classics and modern exotics from a single estate sale."
  },
  {
    "event_id": "EVT.00311",
    "asset_id": "AST.DUNMORE.AUTO",
    "seq": 2,
    "date": "2020-05-08",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The collection was expanded with the addition of two modern hypercars sourced through private sale."
  },
  {
    "event_id": "EVT.00312",
    "asset_id": "AST.DUNMORE.AUTO",
    "seq": 3,
    "date": "2022-09-25",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A trophy-tier classic was added at auction, anchoring the collection's upper end."
  },
  {
    "event_id": "EVT.00313",
    "asset_id": "AST.DUNMORE.AUTO",
    "seq": 4,
    "date": "2025-02-14",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "Bianca Rossi",
    "role_ref_resolved_id": "ROLE.DUNMORE.COLL",
    "note": "Bianca Rossi deaccessioned two duplicate-era vehicles to refine the collection's focus."
  },
  {
    "event_id": "EVT.00314",
    "asset_id": "AST.LOXLEY.YACHT",
    "seq": 1,
    "date": "2019-07-01",
    "event_type": "acquired",
    "role_ref_hint": "Rajiv Kapoor",
    "role_ref_resolved_id": "ROLE.LOXLEY.ESTA",
    "note": "Rajiv Kapoor acquired M/Y Isolde from the previous owner, a Middle Eastern trading family, through a brokered sale."
  },
  {
    "event_id": "EVT.00315",
    "asset_id": "AST.LOXLEY.YACHT",
    "seq": 2,
    "date": "2021-04-17",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Isolde underwent a major refit including new paint, updated navigation systems, and an interior refresh."
  },
  {
    "event_id": "EVT.00316",
    "asset_id": "AST.LOXLEY.YACHT",
    "seq": 3,
    "date": "2024-01-23",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Loxley Family Office",
    "role_ref_resolved_id": "PRIN.LOXLEY",
    "note": "Ownership of M/Y Isolde was transferred into the Loxley Family Office structure."
  },
  {
    "event_id": "EVT.00317",
    "asset_id": "AST.LOXLEY.RE1",
    "seq": 1,
    "date": "2018-08-20",
    "event_type": "acquired",
    "role_ref_hint": "Ana\u00efs Belanger",
    "role_ref_resolved_id": "ROLE.LOXLEY.OWNE",
    "note": "Ana\u00efs Belanger purchased the Nantucket Lakefront Residence as a summer retreat."
  },
  {
    "event_id": "EVT.00318",
    "asset_id": "AST.LOXLEY.RE1",
    "seq": 2,
    "date": "2022-06-11",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The residence's boathouse and main dock were rebuilt following storm damage."
  },
  {
    "event_id": "EVT.00319",
    "asset_id": "AST.LOXLEY.RE1",
    "seq": 3,
    "date": "2025-03-30",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Loxley Family Office",
    "role_ref_resolved_id": "PRIN.LOXLEY",
    "note": "The property was placed into the Loxley Family Office holding structure."
  },
  {
    "event_id": "EVT.00320",
    "asset_id": "AST.LOXLEY.AUTO",
    "seq": 1,
    "date": "2019-02-12",
    "event_type": "acquired",
    "role_ref_hint": "Katarina Novak",
    "role_ref_resolved_id": null,
    "note": "Katarina Novak acquired the founding eight vehicles of the collection from a retiring European collector."
  },
  {
    "event_id": "EVT.00321",
    "asset_id": "AST.LOXLEY.AUTO",
    "seq": 2,
    "date": "2021-10-05",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Four additional vehicles, including a second trophy-tier hypercar, were added to the collection."
  },
  {
    "event_id": "EVT.00322",
    "asset_id": "AST.LOXLEY.AUTO",
    "seq": 3,
    "date": "2023-12-01",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "Desmond Achebe",
    "role_ref_resolved_id": "ROLE.LOXLEY.TRUS",
    "note": "Desmond Achebe deaccessioned one early-era vehicle to fund the acquisition of a more significant piece."
  },
  {
    "event_id": "EVT.00323",
    "asset_id": "AST.EASTCOTT.YACHT",
    "seq": 1,
    "date": "2018-11-09",
    "event_type": "acquired",
    "role_ref_hint": "Julian Ashworth",
    "role_ref_resolved_id": "ROLE.EASTCOTT.OWNE",
    "note": "Julian Ashworth acquired M/Y Lumina from the previous owner, a Greek shipping family, at the end of her charter career."
  },
  {
    "event_id": "EVT.00324",
    "asset_id": "AST.EASTCOTT.YACHT",
    "seq": 2,
    "date": "2020-09-14",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Lumina underwent an engine overhaul and hull recoating during a scheduled yard period."
  },
  {
    "event_id": "EVT.00325",
    "asset_id": "AST.EASTCOTT.YACHT",
    "seq": 3,
    "date": "2023-05-27",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Eastcott Holdings",
    "role_ref_resolved_id": "PRIN.EASTCOTT",
    "note": "Ownership of M/Y Lumina was transferred to Eastcott Holdings."
  },
  {
    "event_id": "EVT.00326",
    "asset_id": "AST.EASTCOTT.RE1",
    "seq": 1,
    "date": "2019-01-30",
    "event_type": "acquired",
    "role_ref_hint": "Consuela Vidal",
    "role_ref_resolved_id": null,
    "note": "Consuela Vidal purchased the Manhattan Penthouse as the family's primary East Coast residence."
  },
  {
    "event_id": "EVT.00327",
    "asset_id": "AST.EASTCOTT.RE1",
    "seq": 2,
    "date": "2022-02-18",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The penthouse underwent a full architectural renovation, combining two adjacent units."
  },
  {
    "event_id": "EVT.00328",
    "asset_id": "AST.EASTCOTT.RE1",
    "seq": 3,
    "date": "2024-11-07",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Eastcott Holdings",
    "role_ref_resolved_id": "PRIN.EASTCOTT",
    "note": "The property was transferred into the Eastcott Holdings structure."
  },
  {
    "event_id": "EVT.00329",
    "asset_id": "AST.EASTCOTT.AUTO",
    "seq": 1,
    "date": "2019-05-16",
    "event_type": "acquired",
    "role_ref_hint": "Benedikt Auer",
    "role_ref_resolved_id": "ROLE.EASTCOTT.PRIV",
    "note": "Benedikt Auer acquired the founding six vehicles of the collection through a series of private-treaty sales."
  },
  {
    "event_id": "EVT.00330",
    "asset_id": "AST.EASTCOTT.AUTO",
    "seq": 2,
    "date": "2021-11-22",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A trophy-tier classic was added at a European auction, anchoring the collection."
  },
  {
    "event_id": "EVT.00331",
    "asset_id": "AST.EASTCOTT.AUTO",
    "seq": 3,
    "date": "2024-04-03",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A modern hypercar was added, completing the collection's eighth vehicle."
  },
  {
    "event_id": "EVT.00332",
    "asset_id": "AST.OVERBURY.YACHT",
    "seq": 1,
    "date": "2020-06-08",
    "event_type": "acquired",
    "role_ref_hint": "Alessandro Conti",
    "role_ref_resolved_id": "ROLE.OVERBURY.OWNE",
    "note": "Alessandro Conti purchased M/Y Kinship as a family day-boat and weekender."
  },
  {
    "event_id": "EVT.00333",
    "asset_id": "AST.OVERBURY.YACHT",
    "seq": 2,
    "date": "2022-07-19",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Kinship's engines and electronics were upgraded during a routine refit."
  },
  {
    "event_id": "EVT.00334",
    "asset_id": "AST.OVERBURY.YACHT",
    "seq": 3,
    "date": "2025-04-11",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Overbury Family Partnership",
    "role_ref_resolved_id": "PRIN.OVERBURY",
    "note": "The vessel was transferred into the Overbury Family Partnership."
  },
  {
    "event_id": "EVT.00335",
    "asset_id": "AST.OVERBURY.RE1",
    "seq": 1,
    "date": "2018-10-25",
    "event_type": "acquired",
    "role_ref_hint": "Ingrid Solberg",
    "role_ref_resolved_id": null,
    "note": "Ingrid Solberg purchased the Napa Valley villa as a seasonal wine-country retreat."
  },
  {
    "event_id": "EVT.00336",
    "asset_id": "AST.OVERBURY.RE1",
    "seq": 2,
    "date": "2021-03-13",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The villa's guest cottage and vineyard-view terrace were renovated."
  },
  {
    "event_id": "EVT.00337",
    "asset_id": "AST.OVERBURY.RE1",
    "seq": 3,
    "date": "2024-09-02",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Overbury Family Partnership",
    "role_ref_resolved_id": "PRIN.OVERBURY",
    "note": "The property was transferred into the Overbury Family Partnership."
  },
  {
    "event_id": "EVT.00338",
    "asset_id": "AST.OVERBURY.AUTO",
    "seq": 1,
    "date": "2019-08-14",
    "event_type": "acquired",
    "role_ref_hint": "Beatriz Nunes",
    "role_ref_resolved_id": null,
    "note": "Beatriz Nunes acquired the founding four vehicles of the collection from a regional dealer."
  },
  {
    "event_id": "EVT.00339",
    "asset_id": "AST.OVERBURY.AUTO",
    "seq": 2,
    "date": "2022-01-29",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A second period classic was added to the collection."
  },
  {
    "event_id": "EVT.00340",
    "asset_id": "AST.OVERBURY.AUTO",
    "seq": 3,
    "date": "2024-08-20",
    "event_type": "expanded_collection",
    "role_ref_hint": "Faisal Al-Rashid",
    "role_ref_resolved_id": null,
    "note": "Faisal Al-Rashid added a limited-run modern exotic, bringing the collection to six vehicles."
  },
  {
    "event_id": "EVT.00341",
    "asset_id": "AST.LACHANCE.YACHT",
    "seq": 1,
    "date": "2019-03-10",
    "event_type": "acquired",
    "role_ref_hint": "Julien Castellane",
    "role_ref_resolved_id": "ROLE.LACHANCE.OWNE",
    "note": "Julien Castellane, acting on behalf of the Lachance Family Trust, purchased M/Y Elysian on the brokerage market from her original Dutch-yard owner."
  },
  {
    "event_id": "EVT.00342",
    "asset_id": "AST.LACHANCE.YACHT",
    "seq": 2,
    "date": "2021-08-22",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Elysian underwent a refit at a Dutch yard covering exterior repaint, tender garage upgrade, and stabilizer overhaul."
  },
  {
    "event_id": "EVT.00343",
    "asset_id": "AST.LACHANCE.YACHT",
    "seq": 3,
    "date": "2023-05-01",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Lachance Family Trust",
    "role_ref_resolved_id": "PRIN.LACHANCE",
    "note": "Formal title to M/Y Elysian was transferred into the Lachance Family Trust as part of a broader estate-planning restructuring."
  },
  {
    "event_id": "EVT.00344",
    "asset_id": "AST.LACHANCE.YACHT",
    "seq": 4,
    "date": "2025-02-14",
    "event_type": "insured_value_reappraised",
    "role_ref_hint": "Renata Kessler",
    "role_ref_resolved_id": null,
    "note": "Renata Kessler commissioned an updated hull and machinery appraisal ahead of the annual insurance renewal."
  },
  {
    "event_id": "EVT.00345",
    "asset_id": "AST.LACHANCE.RE1",
    "seq": 1,
    "date": "2018-11-05",
    "event_type": "acquired",
    "role_ref_hint": "Desmond Achebe",
    "role_ref_resolved_id": "ROLE.LACHANCE.TRUS",
    "note": "Desmond Achebe purchased the Big Sky lakefront residence from the previous owner, a Montana ranching family, as the family's primary mountain retreat."
  },
  {
    "event_id": "EVT.00346",
    "asset_id": "AST.LACHANCE.RE1",
    "seq": 2,
    "date": "2020-07-19",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The lakefront residence's kitchen and boathouse were renovated to modernize the property for year-round use."
  },
  {
    "event_id": "EVT.00347",
    "asset_id": "AST.LACHANCE.RE1",
    "seq": 3,
    "date": "2024-09-30",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Lachance Family Trust",
    "role_ref_resolved_id": "PRIN.LACHANCE",
    "note": "Title to the Big Sky lakefront residence was transferred into the Lachance Family Trust."
  },
  {
    "event_id": "EVT.00348",
    "asset_id": "AST.LACHANCE.AUTO",
    "seq": 1,
    "date": "2019-04-12",
    "event_type": "acquired",
    "role_ref_hint": "Anjali Nair",
    "role_ref_resolved_id": "ROLE.LACHANCE.PRIV",
    "note": "Anjali Nair assembled the initial two-car nucleus of the collection, a period classic and a modern exotic."
  },
  {
    "event_id": "EVT.00349",
    "asset_id": "AST.LACHANCE.AUTO",
    "seq": 2,
    "date": "2021-10-08",
    "event_type": "expanded_collection",
    "role_ref_hint": "Tobias Reinholt",
    "role_ref_resolved_id": null,
    "note": "Tobias Reinholt added a limited-run modern hypercar to the collection."
  },
  {
    "event_id": "EVT.00350",
    "asset_id": "AST.LACHANCE.AUTO",
    "seq": 3,
    "date": "2023-12-01",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A second period classic was added, rounding the collection out to six cars."
  },
  {
    "event_id": "EVT.00351",
    "asset_id": "AST.LACHANCE.AUTO",
    "seq": 4,
    "date": "2025-06-17",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "Ines Delgado",
    "role_ref_resolved_id": "ROLE.LACHANCE.TRUS2",
    "note": "Ines Delgado sold one of the earlier-acquired exotics to fund the collection's most recent trophy addition."
  },
  {
    "event_id": "EVT.00352",
    "asset_id": "AST.VERLAINE.YACHT",
    "seq": 1,
    "date": "2018-09-03",
    "event_type": "acquired",
    "role_ref_hint": "Declan Fitzgerald",
    "role_ref_resolved_id": null,
    "note": "Declan Fitzgerald purchased M/Y Nomad from the previous owner, a Greek shipping family, on the secondary market."
  },
  {
    "event_id": "EVT.00353",
    "asset_id": "AST.VERLAINE.YACHT",
    "seq": 2,
    "date": "2020-02-27",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Nomad underwent an interior refit refreshing guest cabins and upgrading the entertainment systems."
  },
  {
    "event_id": "EVT.00354",
    "asset_id": "AST.VERLAINE.YACHT",
    "seq": 3,
    "date": "2022-11-15",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Farah Hassan",
    "role_ref_resolved_id": "ROLE.VERLAINE.OWNE",
    "note": "Farah Hassan authorized limited charter availability for Nomad during the family's off-season months."
  },
  {
    "event_id": "EVT.00355",
    "asset_id": "AST.VERLAINE.YACHT",
    "seq": 4,
    "date": "2025-07-09",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Verlaine Family Office",
    "role_ref_resolved_id": "PRIN.VERLAINE",
    "note": "Ownership of M/Y Nomad was consolidated under the Verlaine Family Office."
  },
  {
    "event_id": "EVT.00356",
    "asset_id": "AST.VERLAINE.RE1",
    "seq": 1,
    "date": "2018-05-21",
    "event_type": "acquired",
    "role_ref_hint": "Sana Malik",
    "role_ref_resolved_id": null,
    "note": "Sana Malik purchased the Beverly Hills beachfront villa as the family's primary West Coast residence."
  },
  {
    "event_id": "EVT.00357",
    "asset_id": "AST.VERLAINE.RE1",
    "seq": 2,
    "date": "2021-06-30",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The villa's oceanfront terrace and pool deck were fully rebuilt following storm damage."
  },
  {
    "event_id": "EVT.00358",
    "asset_id": "AST.VERLAINE.RE1",
    "seq": 3,
    "date": "2024-03-11",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Verlaine Family Office",
    "role_ref_resolved_id": "PRIN.VERLAINE",
    "note": "Title to the beachfront villa was transferred into the Verlaine Family Office's holding structure."
  },
  {
    "event_id": "EVT.00359",
    "asset_id": "AST.VERLAINE.RE2",
    "seq": 1,
    "date": "2019-08-14",
    "event_type": "acquired",
    "role_ref_hint": "Viktor Petrenko",
    "role_ref_resolved_id": null,
    "note": "Viktor Petrenko acquired the Sag Harbor oceanfront compound as a summer property."
  },
  {
    "event_id": "EVT.00360",
    "asset_id": "AST.VERLAINE.RE2",
    "seq": 2,
    "date": "2022-05-02",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The compound's guest house was expanded and the dock rebuilt."
  },
  {
    "event_id": "EVT.00361",
    "asset_id": "AST.VERLAINE.RE2",
    "seq": 3,
    "date": "2025-08-20",
    "event_type": "refinanced",
    "role_ref_hint": "Adaeze Nwosu",
    "role_ref_resolved_id": null,
    "note": "Adaeze Nwosu refinanced the Sag Harbor compound to consolidate the family's real estate debt structure."
  },
  {
    "event_id": "EVT.00362",
    "asset_id": "AST.VERLAINE.AUTO",
    "seq": 1,
    "date": "2020-01-18",
    "event_type": "acquired",
    "role_ref_hint": "Felix Rothman",
    "role_ref_resolved_id": null,
    "note": "Felix Rothman began the collection with a pair of blue-chip modern exotics."
  },
  {
    "event_id": "EVT.00363",
    "asset_id": "AST.VERLAINE.AUTO",
    "seq": 2,
    "date": "2022-09-06",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A period classic was added to broaden the collection's rarity spread."
  },
  {
    "event_id": "EVT.00364",
    "asset_id": "AST.VERLAINE.AUTO",
    "seq": 3,
    "date": "2024-04-25",
    "event_type": "expanded_collection",
    "role_ref_hint": "Declan Fitzgerald",
    "role_ref_resolved_id": null,
    "note": "Declan Fitzgerald added a limited-run hypercar, bringing the collection to six vehicles."
  },
  {
    "event_id": "EVT.00365",
    "asset_id": "AST.THORNBURY.YACHT",
    "seq": 1,
    "date": "2019-06-01",
    "event_type": "delivered_new",
    "role_ref_hint": "Nikolai Petrov",
    "role_ref_resolved_id": "ROLE.THORNBURY.DIRE",
    "note": "M/Y Denali was delivered new to Nikolai Petrov, acting for Thornbury Holdings, from a European flagship yard."
  },
  {
    "event_id": "EVT.00366",
    "asset_id": "AST.THORNBURY.YACHT",
    "seq": 2,
    "date": "2021-11-12",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Denali underwent a systems and interior refit at her build yard, including a full audiovisual upgrade."
  },
  {
    "event_id": "EVT.00367",
    "asset_id": "AST.THORNBURY.YACHT",
    "seq": 3,
    "date": "2023-09-08",
    "event_type": "insured_value_reappraised",
    "role_ref_hint": "Chidi Eze",
    "role_ref_resolved_id": null,
    "note": "Chidi Eze commissioned a full replacement-cost appraisal of Denali ahead of a hull policy renewal."
  },
  {
    "event_id": "EVT.00368",
    "asset_id": "AST.THORNBURY.YACHT",
    "seq": 4,
    "date": "2026-01-20",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Thornbury Holdings",
    "role_ref_resolved_id": "PRIN.THORNBURY",
    "note": "Ownership of M/Y Denali was formally consolidated under Thornbury Holdings."
  },
  {
    "event_id": "EVT.00369",
    "asset_id": "AST.THORNBURY.RE1",
    "seq": 1,
    "date": "2018-04-09",
    "event_type": "acquired",
    "role_ref_hint": "Leila Farhani",
    "role_ref_resolved_id": null,
    "note": "Leila Farhani purchased the Sag Harbor mountain residence as the family's primary East Coast base."
  },
  {
    "event_id": "EVT.00370",
    "asset_id": "AST.THORNBURY.RE1",
    "seq": 2,
    "date": "2020-10-17",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The residence's main house underwent a full interior renovation."
  },
  {
    "event_id": "EVT.00371",
    "asset_id": "AST.THORNBURY.RE1",
    "seq": 3,
    "date": "2023-06-02",
    "event_type": "expanded",
    "role_ref_hint": "Grace Okonkwo",
    "role_ref_resolved_id": null,
    "note": "Grace Okonkwo oversaw an addition of a guest wing and expanded garaging."
  },
  {
    "event_id": "EVT.00372",
    "asset_id": "AST.THORNBURY.RE2",
    "seq": 1,
    "date": "2019-12-03",
    "event_type": "acquired",
    "role_ref_hint": "Henrik Solberg",
    "role_ref_resolved_id": null,
    "note": "Henrik Solberg acquired the Palm Springs ski chalet as a seasonal getaway property."
  },
  {
    "event_id": "EVT.00373",
    "asset_id": "AST.THORNBURY.RE2",
    "seq": 2,
    "date": "2022-02-14",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The chalet's interior was refreshed and the garage expanded for equipment storage."
  },
  {
    "event_id": "EVT.00374",
    "asset_id": "AST.THORNBURY.RE3",
    "seq": 1,
    "date": "2020-08-28",
    "event_type": "acquired",
    "role_ref_hint": "Yuki Sato",
    "role_ref_resolved_id": null,
    "note": "Yuki Sato purchased the Palm Springs penthouse as a pied-a-terre for the family."
  },
  {
    "event_id": "EVT.00375",
    "asset_id": "AST.THORNBURY.RE3",
    "seq": 2,
    "date": "2023-03-19",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The penthouse underwent a full interior redesign."
  },
  {
    "event_id": "EVT.00376",
    "asset_id": "AST.THORNBURY.RE3",
    "seq": 3,
    "date": "2025-11-05",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Thornbury Holdings",
    "role_ref_resolved_id": "PRIN.THORNBURY",
    "note": "Title to the penthouse was transferred into Thornbury Holdings."
  },
  {
    "event_id": "EVT.00377",
    "asset_id": "AST.THORNBURY.AUTO",
    "seq": 1,
    "date": "2018-07-11",
    "event_type": "acquired",
    "role_ref_hint": "Nikolai Petrov",
    "role_ref_resolved_id": "ROLE.THORNBURY.DIRE",
    "note": "Nikolai Petrov began the collection with a set of four period classics and two modern exotics."
  },
  {
    "event_id": "EVT.00378",
    "asset_id": "AST.THORNBURY.AUTO",
    "seq": 2,
    "date": "2020-05-06",
    "event_type": "expanded_collection",
    "role_ref_hint": "Chidi Eze",
    "role_ref_resolved_id": null,
    "note": "Chidi Eze added a trophy-tier hypercar and three further modern exotics."
  },
  {
    "event_id": "EVT.00379",
    "asset_id": "AST.THORNBURY.AUTO",
    "seq": 3,
    "date": "2023-01-23",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A second trophy classic anchor piece was added, deepening the collection's rarity profile."
  },
  {
    "event_id": "EVT.00380",
    "asset_id": "AST.THORNBURY.AUTO",
    "seq": 4,
    "date": "2025-09-15",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "Leila Farhani",
    "role_ref_resolved_id": null,
    "note": "Leila Farhani sold two lower-tier units from the collection to fund a further trophy-tier acquisition."
  },
  {
    "event_id": "EVT.00381",
    "asset_id": "AST.BRACKENRIDGE.YACHT",
    "seq": 1,
    "date": "2018-03-15",
    "event_type": "acquired",
    "role_ref_hint": "Omar El-Sayed",
    "role_ref_resolved_id": "ROLE.BRACKENRIDGE.OWNE",
    "note": "Omar El-Sayed acquired M/Y Serein from the previous owner, a Gulf state royal family, on the private market."
  },
  {
    "event_id": "EVT.00382",
    "asset_id": "AST.BRACKENRIDGE.YACHT",
    "seq": 2,
    "date": "2020-09-22",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Serein underwent a major refit at a European yard covering hull recoating and full MEP systems overhaul."
  },
  {
    "event_id": "EVT.00383",
    "asset_id": "AST.BRACKENRIDGE.YACHT",
    "seq": 3,
    "date": "2022-12-10",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Brackenridge Family Office Trust",
    "role_ref_resolved_id": "PRIN.BRACKENRIDGE",
    "note": "Ownership of M/Y Serein was placed into the Brackenridge Family Office Trust."
  },
  {
    "event_id": "EVT.00384",
    "asset_id": "AST.BRACKENRIDGE.YACHT",
    "seq": 4,
    "date": "2025-04-03",
    "event_type": "insured_value_reappraised",
    "role_ref_hint": "Ingrid Halvorsen",
    "role_ref_resolved_id": null,
    "note": "Ingrid Halvorsen commissioned an updated replacement-cost appraisal ahead of policy renewal."
  },
  {
    "event_id": "EVT.00385",
    "asset_id": "AST.BRACKENRIDGE.AVI",
    "seq": 1,
    "date": "2019-01-29",
    "event_type": "acquired",
    "role_ref_hint": "Carmen Reyes",
    "role_ref_resolved_id": "ROLE.BRACKENRIDGE.HOUS",
    "note": "Carmen Reyes acquired the Sikorsky S-76 for regional and yacht-tender transport."
  },
  {
    "event_id": "EVT.00386",
    "asset_id": "AST.BRACKENRIDGE.AVI",
    "seq": 2,
    "date": "2021-07-14",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The S-76 underwent an avionics upgrade and interior refurbishment."
  },
  {
    "event_id": "EVT.00387",
    "asset_id": "AST.BRACKENRIDGE.AVI",
    "seq": 3,
    "date": "2024-10-08",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Brackenridge Family Office Trust",
    "role_ref_resolved_id": "PRIN.BRACKENRIDGE",
    "note": "The helicopter's title was transferred into the Brackenridge Family Office Trust."
  },
  {
    "event_id": "EVT.00388",
    "asset_id": "AST.BRACKENRIDGE.RE1",
    "seq": 1,
    "date": "2018-10-19",
    "event_type": "acquired",
    "role_ref_hint": "Willa Ashford",
    "role_ref_resolved_id": "ROLE.BRACKENRIDGE.COLL",
    "note": "Willa Ashford purchased the Miami vineyard estate from the previous owner, a citrus-growing family, converting part of the grounds to vineyard use."
  },
  {
    "event_id": "EVT.00389",
    "asset_id": "AST.BRACKENRIDGE.RE1",
    "seq": 2,
    "date": "2021-04-27",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The estate's main residence and tasting room were renovated."
  },
  {
    "event_id": "EVT.00390",
    "asset_id": "AST.BRACKENRIDGE.RE1",
    "seq": 3,
    "date": "2024-06-30",
    "event_type": "expanded",
    "role_ref_hint": "Tomasz Wojcik",
    "role_ref_resolved_id": null,
    "note": "Tomasz Wojcik oversaw an expansion of the vineyard acreage and addition of a guest cottage."
  },
  {
    "event_id": "EVT.00391",
    "asset_id": "AST.BRACKENRIDGE.AUTO",
    "seq": 1,
    "date": "2020-03-11",
    "event_type": "acquired",
    "role_ref_hint": "Beatrice Osei",
    "role_ref_resolved_id": null,
    "note": "Beatrice Osei acquired a period classic and a modern hypercar to found the collection."
  },
  {
    "event_id": "EVT.00392",
    "asset_id": "AST.BRACKENRIDGE.AUTO",
    "seq": 2,
    "date": "2022-08-19",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Two further blue-chip modern exotics were added, completing the four-car collection."
  },
  {
    "event_id": "EVT.00393",
    "asset_id": "AST.ELPHINSTONE.YACHT",
    "seq": 1,
    "date": "2019-05-16",
    "event_type": "acquired",
    "role_ref_hint": "Katya Sorokin",
    "role_ref_resolved_id": null,
    "note": "Katya Sorokin purchased M/Y Sirocco from the previous owner, a Swiss banking family, on the brokerage market."
  },
  {
    "event_id": "EVT.00394",
    "asset_id": "AST.ELPHINSTONE.YACHT",
    "seq": 2,
    "date": "2021-09-25",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Sirocco underwent a refit covering engine overhaul and exterior teak replacement."
  },
  {
    "event_id": "EVT.00395",
    "asset_id": "AST.ELPHINSTONE.YACHT",
    "seq": 3,
    "date": "2024-02-08",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Elphinstone Family Enterprises",
    "role_ref_resolved_id": "PRIN.ELPHINSTONE",
    "note": "Ownership of M/Y Sirocco was transferred into Elphinstone Family Enterprises."
  },
  {
    "event_id": "EVT.00396",
    "asset_id": "AST.ELPHINSTONE.RE1",
    "seq": 1,
    "date": "2018-02-12",
    "event_type": "acquired",
    "role_ref_hint": "Jamal Whitaker",
    "role_ref_resolved_id": null,
    "note": "Jamal Whitaker acquired the Big Sky historic estate from the previous owner, a founding ranching family in the valley."
  },
  {
    "event_id": "EVT.00397",
    "asset_id": "AST.ELPHINSTONE.RE1",
    "seq": 2,
    "date": "2020-11-03",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The estate's original homestead was restored while preserving its historic character."
  },
  {
    "event_id": "EVT.00398",
    "asset_id": "AST.ELPHINSTONE.RE1",
    "seq": 3,
    "date": "2023-07-21",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Elphinstone Family Enterprises",
    "role_ref_resolved_id": "PRIN.ELPHINSTONE",
    "note": "Title to the historic estate was transferred into Elphinstone Family Enterprises."
  },
  {
    "event_id": "EVT.00399",
    "asset_id": "AST.ELPHINSTONE.RE2",
    "seq": 1,
    "date": "2019-12-20",
    "event_type": "acquired",
    "role_ref_hint": "Greta Lindqvist",
    "role_ref_resolved_id": "ROLE.ELPHINSTONE.HOUS",
    "note": "Greta Lindqvist purchased the Aspen villa as a seasonal ski property."
  },
  {
    "event_id": "EVT.00400",
    "asset_id": "AST.ELPHINSTONE.RE2",
    "seq": 2,
    "date": "2022-04-14",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The villa's ski-in access and mudroom were rebuilt."
  },
  {
    "event_id": "EVT.00401",
    "asset_id": "AST.ELPHINSTONE.RE2",
    "seq": 3,
    "date": "2025-01-09",
    "event_type": "refinanced",
    "role_ref_hint": "Rashid Al-Sayed",
    "role_ref_resolved_id": null,
    "note": "Rashid Al-Sayed refinanced the Aspen villa as part of a broader family liquidity plan."
  },
  {
    "event_id": "EVT.00402",
    "asset_id": "AST.ELPHINSTONE.AUTO",
    "seq": 1,
    "date": "2018-08-30",
    "event_type": "acquired",
    "role_ref_hint": "Naomi Feldstein",
    "role_ref_resolved_id": null,
    "note": "Naomi Feldstein founded the collection with a period classic and a modern hypercar."
  },
  {
    "event_id": "EVT.00403",
    "asset_id": "AST.ELPHINSTONE.AUTO",
    "seq": 2,
    "date": "2020-12-15",
    "event_type": "expanded_collection",
    "role_ref_hint": "Connor Blackwood",
    "role_ref_resolved_id": null,
    "note": "Connor Blackwood added a second period classic and a limited-run modern exotic."
  },
  {
    "event_id": "EVT.00404",
    "asset_id": "AST.ELPHINSTONE.AUTO",
    "seq": 3,
    "date": "2023-10-02",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A second modern hypercar was added, completing the six-car collection."
  },
  {
    "event_id": "EVT.00405",
    "asset_id": "AST.ELPHINSTONE.AUTO",
    "seq": 4,
    "date": "2026-02-18",
    "event_type": "insured_value_reappraised",
    "role_ref_hint": "Katya Sorokin",
    "role_ref_resolved_id": null,
    "note": "Katya Sorokin commissioned an updated valuation of the full collection ahead of policy renewal."
  },
  {
    "event_id": "EVT.00406",
    "asset_id": "AST.UXBRIDGE.YACHT",
    "seq": 1,
    "date": "2019-06-14",
    "event_type": "acquired",
    "role_ref_hint": "Uxbridge Family Office",
    "role_ref_resolved_id": "PRIN.UXBRIDGE",
    "note": "Uxbridge Family Office acquired M/Y Drift, 70m, from its previous owner, a Monaco-based shipping family, via private brokered sale."
  },
  {
    "event_id": "EVT.00407",
    "asset_id": "AST.UXBRIDGE.YACHT",
    "seq": 2,
    "date": "2021-09-03",
    "event_type": "major_refit",
    "role_ref_hint": "Uxbridge Family Office",
    "role_ref_resolved_id": "PRIN.UXBRIDGE",
    "note": "M/Y Drift underwent a scheduled major refit at a European yard, including exterior repaint and interior refresh."
  },
  {
    "event_id": "EVT.00408",
    "asset_id": "AST.UXBRIDGE.YACHT",
    "seq": 3,
    "date": "2023-11-20",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Uxbridge Family Office",
    "role_ref_resolved_id": "PRIN.UXBRIDGE",
    "note": "Ownership of the 70m M/Y Drift was restructured into the Uxbridge Family Office holding entity for estate-planning purposes."
  },
  {
    "event_id": "EVT.00409",
    "asset_id": "AST.UXBRIDGE.YACHT",
    "seq": 4,
    "date": "2025-04-08",
    "event_type": "insured_value_reassessed",
    "role_ref_hint": "Uxbridge Family Office",
    "role_ref_resolved_id": "PRIN.UXBRIDGE",
    "note": "Insured hull value for M/Y Drift reassessed upward following the 2021 refit and current S5-class brokerage comps."
  },
  {
    "event_id": "EVT.00410",
    "asset_id": "AST.UXBRIDGE.AVI",
    "seq": 1,
    "date": "2020-03-11",
    "event_type": "acquired",
    "role_ref_hint": "Uxbridge Family Office",
    "role_ref_resolved_id": "PRIN.UXBRIDGE",
    "note": "Uxbridge Family Office acquired a new Cessna Citation Longitude directly from Textron Aviation to support transatlantic family travel."
  },
  {
    "event_id": "EVT.00411",
    "asset_id": "AST.UXBRIDGE.AVI",
    "seq": 2,
    "date": "2022-05-19",
    "event_type": "avionics_upgrade",
    "role_ref_hint": "Uxbridge Family Office",
    "role_ref_resolved_id": "PRIN.UXBRIDGE",
    "note": "The Citation Longitude's avionics suite was upgraded with an expanded satellite connectivity package."
  },
  {
    "event_id": "EVT.00412",
    "asset_id": "AST.UXBRIDGE.AVI",
    "seq": 3,
    "date": "2024-08-27",
    "event_type": "refinanced",
    "role_ref_hint": "Uxbridge Family Office",
    "role_ref_resolved_id": "PRIN.UXBRIDGE",
    "note": "Aircraft financing for the Citation Longitude was restructured under a new operating-lease arrangement managed by the family office."
  },
  {
    "event_id": "EVT.00413",
    "asset_id": "AST.UXBRIDGE.RE1",
    "seq": 1,
    "date": "2018-11-02",
    "event_type": "acquired",
    "role_ref_hint": "Uxbridge Family Office",
    "role_ref_resolved_id": "PRIN.UXBRIDGE",
    "note": "Uxbridge Family Office acquired the Gstaad Oceanfront Compound from the estate of its previous owner, a Swiss industrialist family."
  },
  {
    "event_id": "EVT.00414",
    "asset_id": "AST.UXBRIDGE.RE1",
    "seq": 2,
    "date": "2020-07-15",
    "event_type": "renovated",
    "role_ref_hint": "Uxbridge Family Office",
    "role_ref_resolved_id": "PRIN.UXBRIDGE",
    "note": "The Gstaad Oceanfront Compound's main residence and guest quarters underwent a full renovation."
  },
  {
    "event_id": "EVT.00415",
    "asset_id": "AST.UXBRIDGE.RE1",
    "seq": 3,
    "date": "2023-02-09",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Uxbridge Family Office",
    "role_ref_resolved_id": "PRIN.UXBRIDGE",
    "note": "Title to the Gstaad Oceanfront Compound was transferred into a family trust structure for succession planning."
  },
  {
    "event_id": "EVT.00416",
    "asset_id": "AST.UXBRIDGE.AUTO",
    "seq": 1,
    "date": "2019-05-06",
    "event_type": "acquired",
    "role_ref_hint": "Nathaniel Cho",
    "role_ref_resolved_id": null,
    "note": "Nathaniel Cho began assembling the family's 4-car curated collection with the acquisition of a period classic and a modern exotic."
  },
  {
    "event_id": "EVT.00417",
    "asset_id": "AST.UXBRIDGE.AUTO",
    "seq": 2,
    "date": "2021-10-14",
    "event_type": "expanded_collection",
    "role_ref_hint": "Nathaniel Cho",
    "role_ref_resolved_id": null,
    "note": "The 4-car curated collection was expanded with the addition of a limited-run modern hypercar."
  },
  {
    "event_id": "EVT.00418",
    "asset_id": "AST.UXBRIDGE.AUTO",
    "seq": 3,
    "date": "2024-03-22",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "Nathaniel Cho",
    "role_ref_resolved_id": null,
    "note": "One earlier acquisition from the 4-car collection was sold at auction to fund a higher-tier trophy piece."
  },
  {
    "event_id": "EVT.00419",
    "asset_id": "AST.SINCLAIR.YACHT",
    "seq": 1,
    "date": "2019-08-17",
    "event_type": "acquired",
    "role_ref_hint": "Sinclair Family Trust",
    "role_ref_resolved_id": "PRIN.SINCLAIR",
    "note": "Sinclair Family Trust acquired M/Y Ethereal, 90m, from its previous owner, a Middle Eastern holding company, in a private sale."
  },
  {
    "event_id": "EVT.00420",
    "asset_id": "AST.SINCLAIR.YACHT",
    "seq": 2,
    "date": "2021-12-05",
    "event_type": "major_refit",
    "role_ref_hint": "Sinclair Family Trust",
    "role_ref_resolved_id": "PRIN.SINCLAIR",
    "note": "M/Y Ethereal completed a major refit at a Northern European yard, including new stabilizers and an updated interior."
  },
  {
    "event_id": "EVT.00421",
    "asset_id": "AST.SINCLAIR.YACHT",
    "seq": 3,
    "date": "2024-06-11",
    "event_type": "annual_survey_completed",
    "role_ref_hint": "Sinclair Family Trust",
    "role_ref_resolved_id": "PRIN.SINCLAIR",
    "note": "M/Y Ethereal completed its class-society periodic survey with no material findings."
  },
  {
    "event_id": "EVT.00422",
    "asset_id": "AST.SINCLAIR.RE1",
    "seq": 1,
    "date": "2018-04-23",
    "event_type": "acquired",
    "role_ref_hint": "Sinclair Family Trust",
    "role_ref_resolved_id": "PRIN.SINCLAIR",
    "note": "Sinclair Family Trust acquired the Charleston Villa as a secondary East Coast residence."
  },
  {
    "event_id": "EVT.00423",
    "asset_id": "AST.SINCLAIR.RE1",
    "seq": 2,
    "date": "2022-09-08",
    "event_type": "renovated",
    "role_ref_hint": "Sinclair Family Trust",
    "role_ref_resolved_id": "PRIN.SINCLAIR",
    "note": "The Charleston Villa underwent a historic-preservation-compliant renovation of the primary residence."
  },
  {
    "event_id": "EVT.00424",
    "asset_id": "AST.SINCLAIR.RE1",
    "seq": 3,
    "date": "2025-01-30",
    "event_type": "refinanced",
    "role_ref_hint": "Sinclair Family Trust",
    "role_ref_resolved_id": "PRIN.SINCLAIR",
    "note": "The Charleston Villa was refinanced on favorable terms as part of a broader Sinclair Family Trust restructuring."
  },
  {
    "event_id": "EVT.00425",
    "asset_id": "AST.IVANOVIC.YACHT",
    "seq": 1,
    "date": "2020-02-18",
    "event_type": "acquired",
    "role_ref_hint": "Ivanovic Holdings",
    "role_ref_resolved_id": "PRIN.IVANOVIC",
    "note": "Ivanovic Holdings acquired M/Y Ember, 50m, from its previous owner, a Greek shipping family, through a private brokered transaction."
  },
  {
    "event_id": "EVT.00426",
    "asset_id": "AST.IVANOVIC.YACHT",
    "seq": 2,
    "date": "2022-07-12",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Ivanovic Holdings",
    "role_ref_resolved_id": "PRIN.IVANOVIC",
    "note": "M/Y Ember entered a limited seasonal charter program to offset annual operating costs."
  },
  {
    "event_id": "EVT.00427",
    "asset_id": "AST.IVANOVIC.YACHT",
    "seq": 3,
    "date": "2024-11-04",
    "event_type": "major_refit",
    "role_ref_hint": "Ivanovic Holdings",
    "role_ref_resolved_id": "PRIN.IVANOVIC",
    "note": "M/Y Ember completed a major refit including new engines and updated navigation electronics."
  },
  {
    "event_id": "EVT.00428",
    "asset_id": "AST.IVANOVIC.RE1",
    "seq": 1,
    "date": "2018-12-01",
    "event_type": "inherited",
    "role_ref_hint": "Omar Haddad",
    "role_ref_resolved_id": "ROLE.IVANOVIC.OWNE",
    "note": "Omar Haddad inherited the Vail Historic Estate from a family member's estate."
  },
  {
    "event_id": "EVT.00429",
    "asset_id": "AST.IVANOVIC.RE1",
    "seq": 2,
    "date": "2021-06-25",
    "event_type": "renovated",
    "role_ref_hint": "Omar Haddad",
    "role_ref_resolved_id": "ROLE.IVANOVIC.OWNE",
    "note": "The Vail Historic Estate's main lodge underwent restoration while preserving original architectural features."
  },
  {
    "event_id": "EVT.00430",
    "asset_id": "AST.IVANOVIC.RE1",
    "seq": 3,
    "date": "2023-08-14",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Ivanovic Holdings",
    "role_ref_resolved_id": "PRIN.IVANOVIC",
    "note": "Title to the Vail Historic Estate was transferred into Ivanovic Holdings for consolidated estate management."
  },
  {
    "event_id": "EVT.00431",
    "asset_id": "AST.IVANOVIC.AUTO",
    "seq": 1,
    "date": "2019-03-09",
    "event_type": "acquired",
    "role_ref_hint": "Siobhan Byrne",
    "role_ref_resolved_id": null,
    "note": "Siobhan Byrne began the family's curated collection with the acquisition of two period classics."
  },
  {
    "event_id": "EVT.00432",
    "asset_id": "AST.IVANOVIC.AUTO",
    "seq": 2,
    "date": "2021-05-27",
    "event_type": "expanded_collection",
    "role_ref_hint": "Siobhan Byrne",
    "role_ref_resolved_id": null,
    "note": "The collection was expanded with two modern limited-run exotics."
  },
  {
    "event_id": "EVT.00433",
    "asset_id": "AST.IVANOVIC.AUTO",
    "seq": 3,
    "date": "2023-09-16",
    "event_type": "expanded_collection",
    "role_ref_hint": "Siobhan Byrne",
    "role_ref_resolved_id": null,
    "note": "Two additional vehicles were added, rounding the collection to its current six-car curated mix."
  },
  {
    "event_id": "EVT.00434",
    "asset_id": "AST.OSGOOD.YACHT",
    "seq": 1,
    "date": "2020-05-20",
    "event_type": "acquired",
    "role_ref_hint": "Osgood Family Office Trust",
    "role_ref_resolved_id": "PRIN.OSGOOD",
    "note": "Osgood Family Office Trust acquired M/Y Sirocco, 20m, new from the builder for coastal and Mediterranean cruising."
  },
  {
    "event_id": "EVT.00435",
    "asset_id": "AST.OSGOOD.YACHT",
    "seq": 2,
    "date": "2022-04-11",
    "event_type": "renovated",
    "role_ref_hint": "Osgood Family Office Trust",
    "role_ref_resolved_id": "PRIN.OSGOOD",
    "note": "M/Y Sirocco's interior was refreshed and flybridge electronics upgraded."
  },
  {
    "event_id": "EVT.00436",
    "asset_id": "AST.OSGOOD.YACHT",
    "seq": 3,
    "date": "2024-09-02",
    "event_type": "annual_survey_completed",
    "role_ref_hint": "Osgood Family Office Trust",
    "role_ref_resolved_id": "PRIN.OSGOOD",
    "note": "M/Y Sirocco completed a routine hull and systems survey ahead of insurance renewal."
  },
  {
    "event_id": "EVT.00437",
    "asset_id": "AST.OSGOOD.AVI",
    "seq": 1,
    "date": "2019-11-14",
    "event_type": "acquired",
    "role_ref_hint": "Osgood Family Office Trust",
    "role_ref_resolved_id": "PRIN.OSGOOD",
    "note": "Osgood Family Office Trust acquired a pre-owned Bombardier Challenger 350 from a corporate flight department."
  },
  {
    "event_id": "EVT.00438",
    "asset_id": "AST.OSGOOD.AVI",
    "seq": 2,
    "date": "2023-02-06",
    "event_type": "avionics_upgrade",
    "role_ref_hint": "Osgood Family Office Trust",
    "role_ref_resolved_id": "PRIN.OSGOOD",
    "note": "The Challenger 350 received an avionics upgrade including updated cockpit displays."
  },
  {
    "event_id": "EVT.00439",
    "asset_id": "AST.OSGOOD.AVI",
    "seq": 3,
    "date": "2025-06-19",
    "event_type": "refinanced",
    "role_ref_hint": "Osgood Family Office Trust",
    "role_ref_resolved_id": "PRIN.OSGOOD",
    "note": "Financing for the Challenger 350 was restructured under the family office's consolidated credit facility."
  },
  {
    "event_id": "EVT.00440",
    "asset_id": "AST.OSGOOD.RE1",
    "seq": 1,
    "date": "2018-07-08",
    "event_type": "acquired",
    "role_ref_hint": "Osgood Family Office Trust",
    "role_ref_resolved_id": "PRIN.OSGOOD",
    "note": "Osgood Family Office Trust acquired the Gstaad Beachfront Villa from its previous owner, a French banking family."
  },
  {
    "event_id": "EVT.00441",
    "asset_id": "AST.OSGOOD.RE1",
    "seq": 2,
    "date": "2021-03-17",
    "event_type": "renovated",
    "role_ref_hint": "Osgood Family Office Trust",
    "role_ref_resolved_id": "PRIN.OSGOOD",
    "note": "The Gstaad Beachfront Villa was renovated with expanded outdoor living space and updated finishes."
  },
  {
    "event_id": "EVT.00442",
    "asset_id": "AST.OSGOOD.RE1",
    "seq": 3,
    "date": "2024-10-25",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Osgood Family Office Trust",
    "role_ref_resolved_id": "PRIN.OSGOOD",
    "note": "Title to the Gstaad Beachfront Villa was transferred into the Osgood Family Office Trust structure."
  },
  {
    "event_id": "EVT.00443",
    "asset_id": "AST.OSGOOD.AUTO",
    "seq": 1,
    "date": "2020-01-13",
    "event_type": "acquired",
    "role_ref_hint": "Arjun Kapoor",
    "role_ref_resolved_id": "ROLE.OSGOOD.OWNE",
    "note": "Arjun Kapoor assembled the initial four vehicles of the family's curated collection."
  },
  {
    "event_id": "EVT.00444",
    "asset_id": "AST.OSGOOD.AUTO",
    "seq": 2,
    "date": "2022-06-29",
    "event_type": "expanded_collection",
    "role_ref_hint": "Arjun Kapoor",
    "role_ref_resolved_id": "ROLE.OSGOOD.OWNE",
    "note": "Two additional vehicles, including a period classic, were added, bringing the collection to six cars."
  },
  {
    "event_id": "EVT.00445",
    "asset_id": "AST.OSGOOD.AUTO",
    "seq": 3,
    "date": "2025-02-17",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "Arjun Kapoor",
    "role_ref_resolved_id": "ROLE.OSGOOD.OWNE",
    "note": "One earlier vehicle from the collection was sold at auction to make room for a higher-value acquisition."
  },
  {
    "event_id": "EVT.00446",
    "asset_id": "AST.HEXHAM.YACHT",
    "seq": 1,
    "date": "2021-04-09",
    "event_type": "acquired",
    "role_ref_hint": "Hexham Family Holdings",
    "role_ref_resolved_id": "PRIN.HEXHAM",
    "note": "Hexham Family Holdings acquired M/Y Meridian Voyager, 50m, new from the builder."
  },
  {
    "event_id": "EVT.00447",
    "asset_id": "AST.HEXHAM.YACHT",
    "seq": 2,
    "date": "2023-05-21",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Hexham Family Holdings",
    "role_ref_resolved_id": "PRIN.HEXHAM",
    "note": "M/Y Meridian Voyager entered a limited charter program during off-peak family-use months."
  },
  {
    "event_id": "EVT.00448",
    "asset_id": "AST.HEXHAM.YACHT",
    "seq": 3,
    "date": "2025-09-03",
    "event_type": "annual_survey_completed",
    "role_ref_hint": "Hexham Family Holdings",
    "role_ref_resolved_id": "PRIN.HEXHAM",
    "note": "M/Y Meridian Voyager completed its periodic class survey, with minor findings closed out ahead of the season."
  },
  {
    "event_id": "EVT.00449",
    "asset_id": "AST.HEXHAM.AUTO",
    "seq": 1,
    "date": "2018-09-19",
    "event_type": "acquired",
    "role_ref_hint": "Petra Vogel",
    "role_ref_resolved_id": null,
    "note": "Petra Vogel began the Hexham family's collection with the acquisition of several period classics from a European dealer network."
  },
  {
    "event_id": "EVT.00450",
    "asset_id": "AST.HEXHAM.AUTO",
    "seq": 2,
    "date": "2020-11-06",
    "event_type": "expanded_collection",
    "role_ref_hint": "Petra Vogel",
    "role_ref_resolved_id": null,
    "note": "The collection was substantially expanded with the addition of multiple modern hypercars."
  },
  {
    "event_id": "EVT.00451",
    "asset_id": "AST.HEXHAM.AUTO",
    "seq": 3,
    "date": "2023-04-15",
    "event_type": "expanded_collection",
    "role_ref_hint": "Petra Vogel",
    "role_ref_resolved_id": null,
    "note": "Two trophy-tier classic pieces were added, deepening the collection's anchor holdings."
  },
  {
    "event_id": "EVT.00452",
    "asset_id": "AST.HEXHAM.AUTO",
    "seq": 4,
    "date": "2026-01-12",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Hexham Family Holdings",
    "role_ref_resolved_id": "PRIN.HEXHAM",
    "note": "The full 18-car collection was consolidated under Hexham Family Holdings for insurance and estate-planning purposes."
  },
  {
    "event_id": "EVT.00453",
    "asset_id": "AST.INGLEBY.YACHT",
    "seq": 1,
    "date": "2018-11-14",
    "event_type": "acquired",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Ingleby Family Office acquired M/Y Mistral, 90m, from the previous owner, a Greek shipping family, entering the family into the megayacht tier."
  },
  {
    "event_id": "EVT.00454",
    "asset_id": "AST.INGLEBY.YACHT",
    "seq": 2,
    "date": "2021-06-02",
    "event_type": "major_refit",
    "role_ref_hint": "Julian Ashworth",
    "role_ref_resolved_id": "ROLE.INGLEBY.OWNE",
    "note": "M/Y Mistral underwent a major refit covering exterior repaint and interior refresh, overseen on the family's behalf by Julian Ashworth."
  },
  {
    "event_id": "EVT.00455",
    "asset_id": "AST.INGLEBY.YACHT",
    "seq": 3,
    "date": "2023-09-20",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Ingleby Family Office",
    "role_ref_resolved_id": "PRIN.INGLEBY",
    "note": "M/Y Mistral entered a limited seasonal charter program to offset operating costs, managed under Ingleby Family Office."
  },
  {
    "event_id": "EVT.00456",
    "asset_id": "AST.INGLEBY.YACHT",
    "seq": 4,
    "date": "2025-02-11",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Ingleby Family Office",
    "role_ref_resolved_id": "PRIN.INGLEBY",
    "note": "Ownership of M/Y Mistral was transferred into the Ingleby Family Office holding structure for estate planning purposes."
  },
  {
    "event_id": "EVT.00457",
    "asset_id": "AST.INGLEBY.RE1",
    "seq": 1,
    "date": "2019-04-08",
    "event_type": "acquired",
    "role_ref_hint": "Ingleby Family Office",
    "role_ref_resolved_id": "PRIN.INGLEBY",
    "note": "Ingleby Family Office purchased the Telluride Villa as a seasonal mountain residence."
  },
  {
    "event_id": "EVT.00458",
    "asset_id": "AST.INGLEBY.RE1",
    "seq": 2,
    "date": "2021-08-19",
    "event_type": "renovated",
    "role_ref_hint": "Priyanka Menon",
    "role_ref_resolved_id": null,
    "note": "The villa's primary suite was renovated and a home theater added, overseen by Priyanka Menon."
  },
  {
    "event_id": "EVT.00459",
    "asset_id": "AST.INGLEBY.RE1",
    "seq": 3,
    "date": "2024-12-03",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Ingleby Family Office",
    "role_ref_resolved_id": "PRIN.INGLEBY",
    "note": "The Telluride Villa was retitled into a family trust structure for estate planning."
  },
  {
    "event_id": "EVT.00460",
    "asset_id": "AST.INGLEBY.AUTO",
    "seq": 1,
    "date": "2019-03-15",
    "event_type": "expanded_collection",
    "role_ref_hint": "Ingleby Family Office",
    "role_ref_resolved_id": "PRIN.INGLEBY",
    "note": "Ingleby Family Office acquired the first two vehicles of the collection, a period classic and a modern hypercar."
  },
  {
    "event_id": "EVT.00461",
    "asset_id": "AST.INGLEBY.AUTO",
    "seq": 2,
    "date": "2021-10-07",
    "event_type": "expanded_collection",
    "role_ref_hint": "Desmond Okonkwo",
    "role_ref_resolved_id": null,
    "note": "Desmond Okonkwo sourced two additional blue-chip modern exotics, rounding the collection to four cars."
  },
  {
    "event_id": "EVT.00462",
    "asset_id": "AST.INGLEBY.AUTO",
    "seq": 3,
    "date": "2024-05-22",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The collection's period classic underwent a concours-level mechanical restoration ahead of a regional show entry."
  },
  {
    "event_id": "EVT.00463",
    "asset_id": "AST.PRENTISS.YACHT",
    "seq": 1,
    "date": "2018-05-11",
    "event_type": "traded_up_from_prior_vessel",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Prentiss Family Trust traded up to M/Y Cielo, 70m, from a smaller 45m vessel, acquiring her from the previous owner, a Latin American industrial family."
  },
  {
    "event_id": "EVT.00464",
    "asset_id": "AST.PRENTISS.YACHT",
    "seq": 2,
    "date": "2020-09-24",
    "event_type": "major_refit",
    "role_ref_hint": "Alistair Grant",
    "role_ref_resolved_id": "ROLE.PRENTISS.OWNE",
    "note": "M/Y Cielo underwent a major refit of exterior teak decking and navigation systems, coordinated by Alistair Grant."
  },
  {
    "event_id": "EVT.00465",
    "asset_id": "AST.PRENTISS.YACHT",
    "seq": 3,
    "date": "2023-02-16",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Meilin Zhao",
    "role_ref_resolved_id": "ROLE.PRENTISS.HOUS",
    "note": "M/Y Cielo entered a limited charter program managed by Meilin Zhao."
  },
  {
    "event_id": "EVT.00466",
    "asset_id": "AST.PRENTISS.YACHT",
    "seq": 4,
    "date": "2025-11-03",
    "event_type": "refinanced",
    "role_ref_hint": "Prentiss Family Trust",
    "role_ref_resolved_id": "PRIN.PRENTISS",
    "note": "Prentiss Family Trust refinanced the vessel's marine mortgage to fund a planned 2026 systems upgrade."
  },
  {
    "event_id": "EVT.00467",
    "asset_id": "AST.PRENTISS.RE1",
    "seq": 1,
    "date": "2019-06-27",
    "event_type": "acquired",
    "role_ref_hint": "Prentiss Family Trust",
    "role_ref_resolved_id": "PRIN.PRENTISS",
    "note": "Prentiss Family Trust acquired the Charleston Ranch Estate as a working equestrian property."
  },
  {
    "event_id": "EVT.00468",
    "asset_id": "AST.PRENTISS.RE1",
    "seq": 2,
    "date": "2022-03-14",
    "event_type": "renovated",
    "role_ref_hint": "Ines Faria",
    "role_ref_resolved_id": null,
    "note": "The estate's main house and stables were renovated, overseen by Ines Faria."
  },
  {
    "event_id": "EVT.00469",
    "asset_id": "AST.PRENTISS.RE1",
    "seq": 3,
    "date": "2025-01-09",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Prentiss Family Trust",
    "role_ref_resolved_id": "PRIN.PRENTISS",
    "note": "The Charleston Ranch Estate was formally retitled under Prentiss Family Trust for succession planning."
  },
  {
    "event_id": "EVT.00470",
    "asset_id": "AST.PRENTISS.AUTO",
    "seq": 1,
    "date": "2018-08-19",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The collection reached six vehicles with the addition of a DB5-era classic and a modern limited-run exotic."
  },
  {
    "event_id": "EVT.00471",
    "asset_id": "AST.PRENTISS.AUTO",
    "seq": 2,
    "date": "2021-05-12",
    "event_type": "expanded_collection",
    "role_ref_hint": "Solomon Adebayo",
    "role_ref_resolved_id": null,
    "note": "Solomon Adebayo oversaw acquisition of four additional vehicles, growing the garage to ten cars including a Carrera GT-era piece."
  },
  {
    "event_id": "EVT.00472",
    "asset_id": "AST.PRENTISS.AUTO",
    "seq": 3,
    "date": "2023-11-06",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The collection reached its full 12-car roster with the addition of a second trophy-tier hypercar."
  },
  {
    "event_id": "EVT.00473",
    "asset_id": "AST.PRENTISS.AUTO",
    "seq": 4,
    "date": "2025-06-25",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A flagship classic in the collection underwent a full mechanical and cosmetic restoration ahead of an invitational concours."
  },
  {
    "event_id": "EVT.00474",
    "asset_id": "AST.UNDERHILL.YACHT",
    "seq": 1,
    "date": "2019-07-02",
    "event_type": "acquired",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Underhill Holdings acquired M/Y Sirocco, 50m, from the previous owner, a European family long established in the shipping trade."
  },
  {
    "event_id": "EVT.00475",
    "asset_id": "AST.UNDERHILL.YACHT",
    "seq": 2,
    "date": "2021-11-18",
    "event_type": "major_refit",
    "role_ref_hint": "Anton Reyes",
    "role_ref_resolved_id": "ROLE.UNDERHILL.OWNE",
    "note": "M/Y Sirocco underwent a major refit including new stabilizers and updated interior finishes, overseen by Anton Reyes."
  },
  {
    "event_id": "EVT.00476",
    "asset_id": "AST.UNDERHILL.YACHT",
    "seq": 3,
    "date": "2024-08-09",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Wilhelmina Brandt",
    "role_ref_resolved_id": "ROLE.UNDERHILL.HOUS",
    "note": "M/Y Sirocco entered a limited summer charter program managed by Wilhelmina Brandt."
  },
  {
    "event_id": "EVT.00477",
    "asset_id": "AST.UNDERHILL.AVI",
    "seq": 1,
    "date": "2018-09-21",
    "event_type": "acquired",
    "role_ref_hint": "Underhill Holdings",
    "role_ref_resolved_id": "PRIN.UNDERHILL",
    "note": "Underhill Holdings acquired a pre-owned Gulfstream G450 for family and business travel."
  },
  {
    "event_id": "EVT.00478",
    "asset_id": "AST.UNDERHILL.AVI",
    "seq": 2,
    "date": "2021-04-13",
    "event_type": "major_refit",
    "role_ref_hint": "Tomasz Wieczorek",
    "role_ref_resolved_id": null,
    "note": "The aircraft underwent an avionics upgrade and cabin refurbishment, coordinated by Tomasz Wieczorek."
  },
  {
    "event_id": "EVT.00479",
    "asset_id": "AST.UNDERHILL.AVI",
    "seq": 3,
    "date": "2024-10-30",
    "event_type": "refinanced",
    "role_ref_hint": "Underhill Holdings",
    "role_ref_resolved_id": "PRIN.UNDERHILL",
    "note": "Underhill Holdings refinanced the aircraft loan on favorable terms ahead of a planned upgrade cycle."
  },
  {
    "event_id": "EVT.00480",
    "asset_id": "AST.UNDERHILL.RE1",
    "seq": 1,
    "date": "2020-02-06",
    "event_type": "acquired",
    "role_ref_hint": "Underhill Holdings",
    "role_ref_resolved_id": "PRIN.UNDERHILL",
    "note": "Underhill Holdings acquired the Montecito Vineyard Estate as a working vineyard and family retreat."
  },
  {
    "event_id": "EVT.00481",
    "asset_id": "AST.UNDERHILL.RE1",
    "seq": 2,
    "date": "2022-09-17",
    "event_type": "renovated",
    "role_ref_hint": "Simone Laurent",
    "role_ref_resolved_id": null,
    "note": "The estate's main residence and tasting room were renovated, overseen by Simone Laurent."
  },
  {
    "event_id": "EVT.00482",
    "asset_id": "AST.UNDERHILL.RE1",
    "seq": 3,
    "date": "2025-05-28",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Underhill Holdings",
    "role_ref_resolved_id": "PRIN.UNDERHILL",
    "note": "The Montecito Vineyard Estate was retitled into Underhill Holdings' estate planning structure."
  },
  {
    "event_id": "EVT.00483",
    "asset_id": "AST.PENHALLOW.YACHT",
    "seq": 1,
    "date": "2018-06-04",
    "event_type": "acquired",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Penhallow Family Office Trust acquired M/Y Juno, 50m, from the previous owner, a Middle Eastern trading family."
  },
  {
    "event_id": "EVT.00484",
    "asset_id": "AST.PENHALLOW.YACHT",
    "seq": 2,
    "date": "2020-12-15",
    "event_type": "major_refit",
    "role_ref_hint": "Beatrix Calloway",
    "role_ref_resolved_id": "ROLE.PENHALLOW.OWNE",
    "note": "M/Y Juno underwent a major refit including an engine overhaul and updated navigation electronics, overseen by Beatrix Calloway."
  },
  {
    "event_id": "EVT.00485",
    "asset_id": "AST.PENHALLOW.YACHT",
    "seq": 3,
    "date": "2023-04-11",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Cormac Delaney",
    "role_ref_resolved_id": "ROLE.PENHALLOW.PROP",
    "note": "M/Y Juno entered a limited charter program managed by Cormac Delaney."
  },
  {
    "event_id": "EVT.00486",
    "asset_id": "AST.PENHALLOW.YACHT",
    "seq": 4,
    "date": "2025-09-08",
    "event_type": "refinanced",
    "role_ref_hint": "Penhallow Family Office Trust",
    "role_ref_resolved_id": "PRIN.PENHALLOW",
    "note": "Penhallow Family Office Trust refinanced the vessel's marine mortgage ahead of a planned 2026 refit."
  },
  {
    "event_id": "EVT.00487",
    "asset_id": "AST.PENHALLOW.AVI",
    "seq": 1,
    "date": "2019-05-20",
    "event_type": "acquired",
    "role_ref_hint": "Penhallow Family Office Trust",
    "role_ref_resolved_id": "PRIN.PENHALLOW",
    "note": "Penhallow Family Office Trust acquired a Bombardier Challenger 350 for regional and transcontinental family travel."
  },
  {
    "event_id": "EVT.00488",
    "asset_id": "AST.PENHALLOW.AVI",
    "seq": 2,
    "date": "2022-07-01",
    "event_type": "major_refit",
    "role_ref_hint": "Farrukh Aliyev",
    "role_ref_resolved_id": "ROLE.PENHALLOW.CHIE",
    "note": "The aircraft's interior was refreshed and avionics updated, coordinated by Farrukh Aliyev."
  },
  {
    "event_id": "EVT.00489",
    "asset_id": "AST.PENHALLOW.AVI",
    "seq": 3,
    "date": "2025-03-19",
    "event_type": "refinanced",
    "role_ref_hint": "Penhallow Family Office Trust",
    "role_ref_resolved_id": "PRIN.PENHALLOW",
    "note": "Penhallow Family Office Trust refinanced the aircraft to consolidate financing under the family office structure."
  },
  {
    "event_id": "EVT.00490",
    "asset_id": "AST.PENHALLOW.RE1",
    "seq": 1,
    "date": "2020-11-12",
    "event_type": "acquired",
    "role_ref_hint": "Penhallow Family Office Trust",
    "role_ref_resolved_id": "PRIN.PENHALLOW",
    "note": "Penhallow Family Office Trust acquired the Jackson Hole Penthouse as a seasonal mountain residence."
  },
  {
    "event_id": "EVT.00491",
    "asset_id": "AST.PENHALLOW.RE1",
    "seq": 2,
    "date": "2023-01-23",
    "event_type": "renovated",
    "role_ref_hint": "Odalys Ferreira",
    "role_ref_resolved_id": null,
    "note": "The penthouse underwent an interior renovation including a kitchen remodel, overseen by Odalys Ferreira."
  },
  {
    "event_id": "EVT.00492",
    "asset_id": "AST.PENHALLOW.RE1",
    "seq": 3,
    "date": "2025-08-14",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Penhallow Family Office Trust",
    "role_ref_resolved_id": "PRIN.PENHALLOW",
    "note": "The Jackson Hole Penthouse was retitled under Penhallow Family Office Trust for succession planning."
  },
  {
    "event_id": "EVT.00493",
    "asset_id": "AST.BLACKWOOD.YACHT",
    "seq": 1,
    "date": "2019-03-08",
    "event_type": "acquired",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Blackwood Family Holdings acquired M/Y Denali, 70m, from the previous owner, a Russian industrial family."
  },
  {
    "event_id": "EVT.00494",
    "asset_id": "AST.BLACKWOOD.YACHT",
    "seq": 2,
    "date": "2021-08-25",
    "event_type": "major_refit",
    "role_ref_hint": "Idris Kamara",
    "role_ref_resolved_id": "ROLE.BLACKWOOD.OWNE",
    "note": "M/Y Denali underwent a major refit including a full repaint and upgraded stabilization systems, overseen by Idris Kamara."
  },
  {
    "event_id": "EVT.00495",
    "asset_id": "AST.BLACKWOOD.YACHT",
    "seq": 3,
    "date": "2023-10-02",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Odette Falkenberg",
    "role_ref_resolved_id": null,
    "note": "M/Y Denali entered a limited seasonal charter program managed by Odette Falkenberg."
  },
  {
    "event_id": "EVT.00496",
    "asset_id": "AST.BLACKWOOD.YACHT",
    "seq": 4,
    "date": "2026-01-19",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Blackwood Family Holdings",
    "role_ref_resolved_id": "PRIN.BLACKWOOD",
    "note": "Ownership of M/Y Denali was transferred into the Blackwood Family Holdings structure for estate planning."
  },
  {
    "event_id": "EVT.00497",
    "asset_id": "AST.BLACKWOOD.AVI",
    "seq": 1,
    "date": "2018-10-16",
    "event_type": "acquired",
    "role_ref_hint": "Blackwood Family Holdings",
    "role_ref_resolved_id": "PRIN.BLACKWOOD",
    "note": "Blackwood Family Holdings acquired a Dassault Falcon 8X for intercontinental family and business travel."
  },
  {
    "event_id": "EVT.00498",
    "asset_id": "AST.BLACKWOOD.AVI",
    "seq": 2,
    "date": "2021-06-11",
    "event_type": "major_refit",
    "role_ref_hint": "Takeshi Furukawa",
    "role_ref_resolved_id": null,
    "note": "The aircraft's cabin was refreshed and long-range avionics updated, coordinated by Takeshi Furukawa."
  },
  {
    "event_id": "EVT.00499",
    "asset_id": "AST.BLACKWOOD.AVI",
    "seq": 3,
    "date": "2024-09-04",
    "event_type": "refinanced",
    "role_ref_hint": "Blackwood Family Holdings",
    "role_ref_resolved_id": "PRIN.BLACKWOOD",
    "note": "Blackwood Family Holdings refinanced the aircraft loan under improved terms."
  },
  {
    "event_id": "EVT.00500",
    "asset_id": "AST.BLACKWOOD.RE1",
    "seq": 1,
    "date": "2019-01-14",
    "event_type": "acquired",
    "role_ref_hint": "Blackwood Family Holdings",
    "role_ref_resolved_id": "PRIN.BLACKWOOD",
    "note": "Blackwood Family Holdings acquired the Vail Ranch Estate as a family retreat and equestrian property."
  },
  {
    "event_id": "EVT.00501",
    "asset_id": "AST.BLACKWOOD.RE1",
    "seq": 2,
    "date": "2022-05-09",
    "event_type": "renovated",
    "role_ref_hint": "Hector Villanueva",
    "role_ref_resolved_id": null,
    "note": "The main lodge underwent renovation including expanded guest quarters, overseen by Hector Villanueva."
  },
  {
    "event_id": "EVT.00502",
    "asset_id": "AST.BLACKWOOD.RE1",
    "seq": 3,
    "date": "2025-07-21",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Blackwood Family Holdings",
    "role_ref_resolved_id": "PRIN.BLACKWOOD",
    "note": "The Vail Ranch Estate was retitled under Blackwood Family Holdings for estate planning."
  },
  {
    "event_id": "EVT.00503",
    "asset_id": "AST.BLACKWOOD.RE2",
    "seq": 1,
    "date": "2020-12-05",
    "event_type": "acquired",
    "role_ref_hint": "Blackwood Family Holdings",
    "role_ref_resolved_id": "PRIN.BLACKWOOD",
    "note": "Blackwood Family Holdings acquired the Aspen Penthouse as a secondary ski residence."
  },
  {
    "event_id": "EVT.00504",
    "asset_id": "AST.BLACKWOOD.RE2",
    "seq": 2,
    "date": "2023-02-27",
    "event_type": "renovated",
    "role_ref_hint": "Astrid Lindqvist",
    "role_ref_resolved_id": "ROLE.BLACKWOOD.PURS",
    "note": "The penthouse underwent a cosmetic renovation of the common living areas, overseen by Astrid Lindqvist."
  },
  {
    "event_id": "EVT.00505",
    "asset_id": "AST.BLACKWOOD.RE2",
    "seq": 3,
    "date": "2025-11-16",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Blackwood Family Holdings",
    "role_ref_resolved_id": "PRIN.BLACKWOOD",
    "note": "The Aspen Penthouse was retitled under Blackwood Family Holdings' estate planning structure."
  },
  {
    "event_id": "EVT.00506",
    "asset_id": "AST.BLACKWOOD.AUTO",
    "seq": 1,
    "date": "2018-04-10",
    "event_type": "expanded_collection",
    "role_ref_hint": "Blackwood Family Holdings",
    "role_ref_resolved_id": "PRIN.BLACKWOOD",
    "note": "Blackwood Family Holdings' collection began with a period classic and a modern blue-chip exotic, forming the core of what would grow into the 6-car roster."
  },
  {
    "event_id": "EVT.00507",
    "asset_id": "AST.BLACKWOOD.AUTO",
    "seq": 2,
    "date": "2021-09-23",
    "event_type": "expanded_collection",
    "role_ref_hint": "Damian Osei",
    "role_ref_resolved_id": "ROLE.BLACKWOOD.DIRE",
    "note": "Damian Osei oversaw acquisition of a second period classic and a limited-run modern exotic, expanding the collection to four cars."
  },
  {
    "event_id": "EVT.00508",
    "asset_id": "AST.BLACKWOOD.AUTO",
    "seq": 3,
    "date": "2024-03-30",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The collection reached its full 6-car roster with the addition of two further vehicles spanning classic and modern tiers."
  },
  {
    "event_id": "EVT.00509",
    "asset_id": "AST.YARDLEY.YACHT",
    "seq": 1,
    "date": "2018-05-12",
    "event_type": "acquired",
    "role_ref_hint": "Yardley Family Office",
    "role_ref_resolved_id": "PRIN.YARDLEY",
    "note": "Yardley Family Office acquired M/Y Halcyon II as a resale from the original commissioning owner, a Middle Eastern shipping family."
  },
  {
    "event_id": "EVT.00510",
    "asset_id": "AST.YARDLEY.YACHT",
    "seq": 2,
    "date": "2020-09-30",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Halcyon II underwent a major refit at a European yard, updating interior finishes and exterior paintwork."
  },
  {
    "event_id": "EVT.00511",
    "asset_id": "AST.YARDLEY.YACHT",
    "seq": 3,
    "date": "2023-02-14",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Yardley Family Office",
    "role_ref_resolved_id": "PRIN.YARDLEY",
    "note": "Ownership of M/Y Halcyon II was transferred into the Yardley Family Office trust structure for estate planning purposes."
  },
  {
    "event_id": "EVT.00512",
    "asset_id": "AST.YARDLEY.YACHT",
    "seq": 4,
    "date": "2025-06-01",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Yardley Family Office",
    "role_ref_resolved_id": "PRIN.YARDLEY",
    "note": "M/Y Halcyon II was placed into a limited seasonal charter program to help offset operating costs."
  },
  {
    "event_id": "EVT.00513",
    "asset_id": "AST.YARDLEY.AVI",
    "seq": 1,
    "date": "2019-04-10",
    "event_type": "acquired",
    "role_ref_hint": "Colm Doherty",
    "role_ref_resolved_id": "ROLE.YARDLEY.OWNE",
    "note": "Colm Doherty, on behalf of the Yardley family, acquired the Gulfstream G650 as a low-hour pre-owned aircraft."
  },
  {
    "event_id": "EVT.00514",
    "asset_id": "AST.YARDLEY.AVI",
    "seq": 2,
    "date": "2021-11-05",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Gulfstream G650 was refinanced under a new aircraft-secured credit facility to optimize the family's balance sheet."
  },
  {
    "event_id": "EVT.00515",
    "asset_id": "AST.YARDLEY.AVI",
    "seq": 3,
    "date": "2024-07-18",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Gulfstream G650's cabin interior was refurbished with updated avionics and cabin materials."
  },
  {
    "event_id": "EVT.00516",
    "asset_id": "AST.YARDLEY.RE1",
    "seq": 1,
    "date": "2018-01-20",
    "event_type": "acquired",
    "role_ref_hint": "Yardley Family Office",
    "role_ref_resolved_id": "PRIN.YARDLEY",
    "note": "Yardley Family Office acquired the Aspen Oceanfront Compound as the family's primary seasonal residence."
  },
  {
    "event_id": "EVT.00517",
    "asset_id": "AST.YARDLEY.RE1",
    "seq": 2,
    "date": "2020-08-15",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Aspen Oceanfront Compound underwent a full renovation of the main residence and guest quarters."
  },
  {
    "event_id": "EVT.00518",
    "asset_id": "AST.YARDLEY.RE1",
    "seq": 3,
    "date": "2023-05-01",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Yardley Family Office",
    "role_ref_resolved_id": "PRIN.YARDLEY",
    "note": "Title to the Aspen Oceanfront Compound was transferred into a family trust structure."
  },
  {
    "event_id": "EVT.00519",
    "asset_id": "AST.YARDLEY.RE2",
    "seq": 1,
    "date": "2019-09-12",
    "event_type": "acquired",
    "role_ref_hint": "Giulia Bertolini",
    "role_ref_resolved_id": null,
    "note": "Giulia Bertolini acquired the Miami Coastal Estate as a secondary winter residence for the Yardley family."
  },
  {
    "event_id": "EVT.00520",
    "asset_id": "AST.YARDLEY.RE2",
    "seq": 2,
    "date": "2022-03-22",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Miami Coastal Estate's dock and seawall were rebuilt following a storm-damage assessment."
  },
  {
    "event_id": "EVT.00521",
    "asset_id": "AST.YARDLEY.RE3",
    "seq": 1,
    "date": "2020-12-01",
    "event_type": "acquired",
    "role_ref_hint": "Astrid Lindqvist",
    "role_ref_resolved_id": "ROLE.YARDLEY.PROP",
    "note": "Astrid Lindqvist acquired the Gstaad Mountain Residence as a ski-season retreat for the Yardley family."
  },
  {
    "event_id": "EVT.00522",
    "asset_id": "AST.YARDLEY.RE3",
    "seq": 2,
    "date": "2023-11-10",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Gstaad Mountain Residence's chalet was expanded with an additional guest wing."
  },
  {
    "event_id": "EVT.00523",
    "asset_id": "AST.YARDLEY.RE3",
    "seq": 3,
    "date": "2025-04-01",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Gstaad Mountain Residence was refinanced to help fund an unrelated family acquisition."
  },
  {
    "event_id": "EVT.00524",
    "asset_id": "AST.ASHWORTH.AVI",
    "seq": 1,
    "date": "2018-06-05",
    "event_type": "acquired",
    "role_ref_hint": "Ashworth Family Trust",
    "role_ref_resolved_id": "PRIN.ASHWORTH",
    "note": "Ashworth Family Trust acquired the Sikorsky S-76 for regional transport between family properties."
  },
  {
    "event_id": "EVT.00525",
    "asset_id": "AST.ASHWORTH.AVI",
    "seq": 2,
    "date": "2021-02-14",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Sikorsky S-76 underwent an avionics upgrade and cabin refurbishment."
  },
  {
    "event_id": "EVT.00526",
    "asset_id": "AST.ASHWORTH.AVI",
    "seq": 3,
    "date": "2024-09-01",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Sikorsky S-76 was refinanced under a new operating lease structure."
  },
  {
    "event_id": "EVT.00527",
    "asset_id": "AST.ASHWORTH.RE1",
    "seq": 1,
    "date": "2018-11-20",
    "event_type": "acquired",
    "role_ref_hint": "Rosalind Achebe",
    "role_ref_resolved_id": null,
    "note": "Rosalind Achebe acquired the Malibu Waterfront Estate as the Ashworth family's primary California residence."
  },
  {
    "event_id": "EVT.00528",
    "asset_id": "AST.ASHWORTH.RE1",
    "seq": 2,
    "date": "2021-07-08",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Malibu Waterfront Estate's main residence was rebuilt following a coastal-erosion mitigation project."
  },
  {
    "event_id": "EVT.00529",
    "asset_id": "AST.ASHWORTH.RE1",
    "seq": 3,
    "date": "2024-01-15",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Ashworth Family Trust",
    "role_ref_resolved_id": "PRIN.ASHWORTH",
    "note": "Title to the Malibu Waterfront Estate was transferred into the Ashworth Family Trust."
  },
  {
    "event_id": "EVT.00530",
    "asset_id": "AST.ASHWORTH.RE2",
    "seq": 1,
    "date": "2019-05-30",
    "event_type": "acquired",
    "role_ref_hint": "Ines Duarte",
    "role_ref_resolved_id": "ROLE.ASHWORTH.HOUS",
    "note": "Ines Duarte acquired the Lake Como Penthouse as a European base for the Ashworth family."
  },
  {
    "event_id": "EVT.00531",
    "asset_id": "AST.ASHWORTH.RE2",
    "seq": 2,
    "date": "2022-10-12",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Lake Como Penthouse interior was renovated with updated finishes and a private terrace expansion."
  },
  {
    "event_id": "EVT.00532",
    "asset_id": "AST.ASHWORTH.AUTO",
    "seq": 1,
    "date": "2018-08-01",
    "event_type": "acquired",
    "role_ref_hint": "Ashworth Family Trust",
    "role_ref_resolved_id": "PRIN.ASHWORTH",
    "note": "The Ashworth family began assembling the 6-Car Curated Collection with the acquisition of a period classic and a modern exotic."
  },
  {
    "event_id": "EVT.00533",
    "asset_id": "AST.ASHWORTH.AUTO",
    "seq": 2,
    "date": "2020-04-18",
    "event_type": "expanded_collection",
    "role_ref_hint": "Viktor Petrov",
    "role_ref_resolved_id": "ROLE.ASHWORTH.DIRE",
    "note": "Viktor Petrov added a second modern exotic to the 6-Car Curated Collection."
  },
  {
    "event_id": "EVT.00534",
    "asset_id": "AST.ASHWORTH.AUTO",
    "seq": 3,
    "date": "2023-06-25",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The 6-Car Curated Collection was rounded out with a second period classic sourced at auction."
  },
  {
    "event_id": "EVT.00535",
    "asset_id": "AST.ASHWORTH.AUTO",
    "seq": 4,
    "date": "2025-02-09",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "One early acquisition was deaccessioned from the 6-Car Curated Collection to make room for a newer hypercar."
  },
  {
    "event_id": "EVT.00536",
    "asset_id": "AST.JARNAC.YACHT",
    "seq": 1,
    "date": "2018-02-10",
    "event_type": "traded_up_from_prior_vessel",
    "role_ref_hint": "Jarnac Holdings",
    "role_ref_resolved_id": "PRIN.JARNAC",
    "note": "Jarnac Holdings traded up to M/Y Wanderlust from a smaller 45m vessel previously in the family fleet."
  },
  {
    "event_id": "EVT.00537",
    "asset_id": "AST.JARNAC.YACHT",
    "seq": 2,
    "date": "2020-05-22",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Wanderlust underwent a major refit including new stabilizers and updated guest interiors."
  },
  {
    "event_id": "EVT.00538",
    "asset_id": "AST.JARNAC.YACHT",
    "seq": 3,
    "date": "2023-11-30",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Wanderlust was entered into a partial charter program managed by a European brokerage."
  },
  {
    "event_id": "EVT.00539",
    "asset_id": "AST.JARNAC.YACHT",
    "seq": 4,
    "date": "2025-08-05",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Jarnac Holdings",
    "role_ref_resolved_id": "PRIN.JARNAC",
    "note": "Title to M/Y Wanderlust was transferred into Jarnac Holdings' trust structure."
  },
  {
    "event_id": "EVT.00540",
    "asset_id": "AST.JARNAC.AVI",
    "seq": 1,
    "date": "2019-03-15",
    "event_type": "acquired",
    "role_ref_hint": "Simone Laurent",
    "role_ref_resolved_id": "ROLE.JARNAC.OWNE",
    "note": "Simone Laurent acquired the Gulfstream G650 as a low-hour aircraft for Jarnac Holdings."
  },
  {
    "event_id": "EVT.00541",
    "asset_id": "AST.JARNAC.AVI",
    "seq": 2,
    "date": "2022-06-20",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Gulfstream G650 cabin was refreshed with updated avionics and connectivity systems."
  },
  {
    "event_id": "EVT.00542",
    "asset_id": "AST.JARNAC.AVI",
    "seq": 3,
    "date": "2024-12-01",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Gulfstream G650 was refinanced to align with Jarnac Holdings' broader asset financing strategy."
  },
  {
    "event_id": "EVT.00543",
    "asset_id": "AST.JARNAC.RE1",
    "seq": 1,
    "date": "2018-10-05",
    "event_type": "acquired",
    "role_ref_hint": "Arjun Mehta",
    "role_ref_resolved_id": null,
    "note": "Arjun Mehta acquired the Charleston Oceanfront Compound as the Jarnac family's East Coast primary residence."
  },
  {
    "event_id": "EVT.00544",
    "asset_id": "AST.JARNAC.RE1",
    "seq": 2,
    "date": "2021-04-19",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Charleston Oceanfront Compound underwent a full historic-preservation renovation of the main house."
  },
  {
    "event_id": "EVT.00545",
    "asset_id": "AST.JARNAC.RE1",
    "seq": 3,
    "date": "2024-03-27",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Jarnac Holdings",
    "role_ref_resolved_id": "PRIN.JARNAC",
    "note": "Title to the Charleston Oceanfront Compound was transferred into Jarnac Holdings."
  },
  {
    "event_id": "EVT.00546",
    "asset_id": "AST.JARNAC.AUTO",
    "seq": 1,
    "date": "2018-01-10",
    "event_type": "acquired",
    "role_ref_hint": "Jarnac Holdings",
    "role_ref_resolved_id": "PRIN.JARNAC",
    "note": "Jarnac Holdings began assembling the 18-Car Curated Collection, anchored by a trophy-tier classic."
  },
  {
    "event_id": "EVT.00547",
    "asset_id": "AST.JARNAC.AUTO",
    "seq": 2,
    "date": "2020-07-15",
    "event_type": "expanded_collection",
    "role_ref_hint": "Beatriz Santos",
    "role_ref_resolved_id": "ROLE.JARNAC.AVIA",
    "note": "Beatriz Santos added a modern hypercar bench to the 18-Car Curated Collection."
  },
  {
    "event_id": "EVT.00548",
    "asset_id": "AST.JARNAC.AUTO",
    "seq": 3,
    "date": "2022-11-02",
    "event_type": "expanded_collection",
    "role_ref_hint": "Yusuf Demir",
    "role_ref_resolved_id": "ROLE.JARNAC.COLL",
    "note": "Yusuf Demir sourced two further period classics at auction for the 18-Car Curated Collection."
  },
  {
    "event_id": "EVT.00549",
    "asset_id": "AST.JARNAC.AUTO",
    "seq": 4,
    "date": "2025-05-20",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Two overlapping modern exotics were deaccessioned from the 18-Car Curated Collection to fund a new trophy acquisition."
  },
  {
    "event_id": "EVT.00550",
    "asset_id": "AST.IVERSON.YACHT",
    "seq": 1,
    "date": "2019-06-01",
    "event_type": "acquired",
    "role_ref_hint": "Ayesha Malik",
    "role_ref_resolved_id": "ROLE.IVERSON.OWNE",
    "note": "Ayesha Malik acquired M/Y Kestrel as a family day-cruiser for coastal use."
  },
  {
    "event_id": "EVT.00551",
    "asset_id": "AST.IVERSON.YACHT",
    "seq": 2,
    "date": "2022-08-10",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Kestrel underwent engine and electronics upgrades during a major refit."
  },
  {
    "event_id": "EVT.00552",
    "asset_id": "AST.IVERSON.YACHT",
    "seq": 3,
    "date": "2025-09-01",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Iverson Family Office Trust",
    "role_ref_resolved_id": "PRIN.IVERSON",
    "note": "Title to M/Y Kestrel was transferred into the Iverson Family Office Trust."
  },
  {
    "event_id": "EVT.00553",
    "asset_id": "AST.IVERSON.AVI",
    "seq": 1,
    "date": "2019-02-20",
    "event_type": "acquired",
    "role_ref_hint": "Lucas Ferreira",
    "role_ref_resolved_id": null,
    "note": "Lucas Ferreira acquired the Bombardier Challenger 350 as a low-hour aircraft for the Iverson family."
  },
  {
    "event_id": "EVT.00554",
    "asset_id": "AST.IVERSON.AVI",
    "seq": 2,
    "date": "2021-10-05",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Bombardier Challenger 350 cabin was refreshed with updated seating and connectivity."
  },
  {
    "event_id": "EVT.00555",
    "asset_id": "AST.IVERSON.AVI",
    "seq": 3,
    "date": "2024-04-11",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Bombardier Challenger 350 was refinanced under a new aircraft-secured facility."
  },
  {
    "event_id": "EVT.00556",
    "asset_id": "AST.IVERSON.RE1",
    "seq": 1,
    "date": "2018-04-14",
    "event_type": "acquired",
    "role_ref_hint": "Iverson Family Office Trust",
    "role_ref_resolved_id": "PRIN.IVERSON",
    "note": "Iverson Family Office Trust acquired the Greenwich Mountain Residence as the family's primary Connecticut residence."
  },
  {
    "event_id": "EVT.00557",
    "asset_id": "AST.IVERSON.RE1",
    "seq": 2,
    "date": "2020-09-19",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Greenwich Mountain Residence underwent a full kitchen and guest-wing renovation."
  },
  {
    "event_id": "EVT.00558",
    "asset_id": "AST.IVERSON.RE1",
    "seq": 3,
    "date": "2023-08-02",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Iverson Family Office Trust",
    "role_ref_resolved_id": "PRIN.IVERSON",
    "note": "Title to the Greenwich Mountain Residence was formally transferred into the Iverson Family Office Trust."
  },
  {
    "event_id": "EVT.00559",
    "asset_id": "AST.IVERSON.RE2",
    "seq": 1,
    "date": "2020-01-25",
    "event_type": "acquired",
    "role_ref_hint": "Ingrid Solheim",
    "role_ref_resolved_id": null,
    "note": "Ingrid Solheim acquired the Palm Beach Penthouse as a winter residence for the Iverson family."
  },
  {
    "event_id": "EVT.00560",
    "asset_id": "AST.IVERSON.RE2",
    "seq": 2,
    "date": "2023-03-30",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Palm Beach Penthouse underwent an interior renovation and impact-window upgrade ahead of hurricane season."
  },
  {
    "event_id": "EVT.00561",
    "asset_id": "AST.IVERSON.AUTO",
    "seq": 1,
    "date": "2019-07-08",
    "event_type": "acquired",
    "role_ref_hint": "Omar El-Sayed",
    "role_ref_resolved_id": null,
    "note": "Omar El-Sayed assembled the initial 4-Car Curated Collection with one classic icon and one modern exotic."
  },
  {
    "event_id": "EVT.00562",
    "asset_id": "AST.IVERSON.AUTO",
    "seq": 2,
    "date": "2022-05-17",
    "event_type": "expanded_collection",
    "role_ref_hint": "Elena Rusu",
    "role_ref_resolved_id": null,
    "note": "Elena Rusu added a modern hypercar to round out the 4-Car Curated Collection."
  },
  {
    "event_id": "EVT.00563",
    "asset_id": "AST.IVERSON.AUTO",
    "seq": 3,
    "date": "2025-01-22",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "One early acquisition was deaccessioned from the 4-Car Curated Collection to make room for a newer model."
  },
  {
    "event_id": "EVT.00564",
    "asset_id": "AST.TALBOT.YACHT",
    "seq": 1,
    "date": "2018-09-03",
    "event_type": "acquired",
    "role_ref_hint": "Talbot Family Partnership",
    "role_ref_resolved_id": "PRIN.TALBOT",
    "note": "Talbot Family Partnership acquired M/Y Kinship as a resale from the previous owner, a Russian industrial family."
  },
  {
    "event_id": "EVT.00565",
    "asset_id": "AST.TALBOT.YACHT",
    "seq": 2,
    "date": "2021-06-12",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Kinship underwent a major refit at a Dutch yard, including a full repaint and updated guest suites."
  },
  {
    "event_id": "EVT.00566",
    "asset_id": "AST.TALBOT.YACHT",
    "seq": 3,
    "date": "2023-10-08",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Kinship was entered into a limited charter program to help offset annual operating costs."
  },
  {
    "event_id": "EVT.00567",
    "asset_id": "AST.TALBOT.YACHT",
    "seq": 4,
    "date": "2025-12-15",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Talbot Family Partnership",
    "role_ref_resolved_id": "PRIN.TALBOT",
    "note": "Title to M/Y Kinship was transferred into the Talbot Family Partnership structure."
  },
  {
    "event_id": "EVT.00568",
    "asset_id": "AST.TALBOT.AVI",
    "seq": 1,
    "date": "2019-01-09",
    "event_type": "acquired",
    "role_ref_hint": "Noor Al-Sayed",
    "role_ref_resolved_id": "ROLE.TALBOT.OWNE",
    "note": "Noor Al-Sayed acquired the Gulfstream G550 as a mid-life aircraft for the Talbot family fleet."
  },
  {
    "event_id": "EVT.00569",
    "asset_id": "AST.TALBOT.AVI",
    "seq": 2,
    "date": "2022-02-27",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Gulfstream G550 underwent an avionics upgrade to maintain airspace compliance."
  },
  {
    "event_id": "EVT.00570",
    "asset_id": "AST.TALBOT.AVI",
    "seq": 3,
    "date": "2024-08-14",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Gulfstream G550 was refinanced under a new financing arrangement ahead of a planned fleet upgrade."
  },
  {
    "event_id": "EVT.00571",
    "asset_id": "AST.TALBOT.RE1",
    "seq": 1,
    "date": "2018-12-11",
    "event_type": "acquired",
    "role_ref_hint": "Bridget O'Connell",
    "role_ref_resolved_id": null,
    "note": "Bridget O'Connell acquired the Jackson Hole Historic Estate as the Talbot family's mountain residence."
  },
  {
    "event_id": "EVT.00572",
    "asset_id": "AST.TALBOT.RE1",
    "seq": 2,
    "date": "2021-09-06",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Jackson Hole Historic Estate underwent a historic-preservation renovation of its main lodge."
  },
  {
    "event_id": "EVT.00573",
    "asset_id": "AST.TALBOT.RE1",
    "seq": 3,
    "date": "2024-06-23",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Talbot Family Partnership",
    "role_ref_resolved_id": "PRIN.TALBOT",
    "note": "Title to the Jackson Hole Historic Estate was transferred into the Talbot Family Partnership."
  },
  {
    "event_id": "EVT.00574",
    "asset_id": "AST.TALBOT.AUTO",
    "seq": 1,
    "date": "2019-11-19",
    "event_type": "acquired",
    "role_ref_hint": "Tariq Hassan",
    "role_ref_resolved_id": null,
    "note": "Tariq Hassan assembled the initial 4-Car Curated Collection with a classic icon and a modern exotic."
  },
  {
    "event_id": "EVT.00575",
    "asset_id": "AST.TALBOT.AUTO",
    "seq": 2,
    "date": "2021-12-03",
    "event_type": "expanded_collection",
    "role_ref_hint": "Freya Halvorsen",
    "role_ref_resolved_id": null,
    "note": "Freya Halvorsen added a second modern exotic to the 4-Car Curated Collection."
  },
  {
    "event_id": "EVT.00576",
    "asset_id": "AST.TALBOT.AUTO",
    "seq": 3,
    "date": "2024-10-29",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A modern hypercar was added to complete the 4-Car Curated Collection."
  },
  {
    "event_id": "EVT.00577",
    "asset_id": "AST.LANSDOWNE.YACHT",
    "seq": 1,
    "date": "2019-04-12",
    "event_type": "acquired",
    "role_ref_hint": "Desmond Okonjo",
    "role_ref_resolved_id": null,
    "note": "Desmond Okonjo purchased M/Y Jubilee, a 12m flybridge cruiser, as a family day-boat for coastal use."
  },
  {
    "event_id": "EVT.00578",
    "asset_id": "AST.LANSDOWNE.YACHT",
    "seq": 2,
    "date": "2021-06-20",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Jubilee underwent a major refit including engine overhaul and interior refresh to maintain resale-grade condition."
  },
  {
    "event_id": "EVT.00579",
    "asset_id": "AST.LANSDOWNE.YACHT",
    "seq": 3,
    "date": "2023-09-08",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Lansdowne Family Office",
    "role_ref_resolved_id": "PRIN.LANSDOWNE",
    "note": "Ownership of Jubilee was transferred into the Lansdowne Family Office structure for estate planning purposes."
  },
  {
    "event_id": "EVT.00580",
    "asset_id": "AST.LANSDOWNE.RE1",
    "seq": 1,
    "date": "2018-11-02",
    "event_type": "acquired",
    "role_ref_hint": "Ingrid S\u00f8rensen",
    "role_ref_resolved_id": null,
    "note": "Ingrid S\u00f8rensen acquired the Charleston Ski Chalet as a winter retreat for family ski activities."
  },
  {
    "event_id": "EVT.00581",
    "asset_id": "AST.LANSDOWNE.RE1",
    "seq": 2,
    "date": "2020-05-14",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The chalet underwent a full renovation of the kitchen and primary suite to modern luxury standards."
  },
  {
    "event_id": "EVT.00582",
    "asset_id": "AST.LANSDOWNE.RE1",
    "seq": 3,
    "date": "2024-08-19",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Lansdowne Family Office",
    "role_ref_resolved_id": "PRIN.LANSDOWNE",
    "note": "Title to the chalet was transferred into the Lansdowne Family Office for estate consolidation."
  },
  {
    "event_id": "EVT.00583",
    "asset_id": "AST.LANSDOWNE.RE2",
    "seq": 1,
    "date": "2019-07-25",
    "event_type": "acquired",
    "role_ref_hint": "Tomas Ferreira",
    "role_ref_resolved_id": null,
    "note": "Tomas Ferreira acquired the Jackson Hole estate as a secondary retreat for the family."
  },
  {
    "event_id": "EVT.00584",
    "asset_id": "AST.LANSDOWNE.RE2",
    "seq": 2,
    "date": "2022-03-11",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Minor renovations were completed to update the guest accommodations."
  },
  {
    "event_id": "EVT.00585",
    "asset_id": "AST.LANSDOWNE.RE2",
    "seq": 3,
    "date": "2025-01-30",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The property was refinanced to release equity for other family investments."
  },
  {
    "event_id": "EVT.00586",
    "asset_id": "AST.LANSDOWNE.AUTO",
    "seq": 1,
    "date": "2018-09-03",
    "event_type": "acquired",
    "role_ref_hint": "Amara Osei",
    "role_ref_resolved_id": null,
    "note": "Amara Osei began assembling the collection with the acquisition of two period classics."
  },
  {
    "event_id": "EVT.00587",
    "asset_id": "AST.LANSDOWNE.AUTO",
    "seq": 2,
    "date": "2021-04-17",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The collection was expanded with two limited-run modern exotics to broaden the rarity spread."
  },
  {
    "event_id": "EVT.00588",
    "asset_id": "AST.LANSDOWNE.AUTO",
    "seq": 3,
    "date": "2023-11-05",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "One earlier acquisition was sold to make room for a higher-value addition."
  },
  {
    "event_id": "EVT.00589",
    "asset_id": "AST.LANSDOWNE.AUTO",
    "seq": 4,
    "date": "2025-06-22",
    "event_type": "expanded_collection",
    "role_ref_hint": "Amara Osei",
    "role_ref_resolved_id": null,
    "note": "A modern hypercar was added, completing the current 6-car lineup."
  },
  {
    "event_id": "EVT.00590",
    "asset_id": "AST.RADCLIFFE.YACHT",
    "seq": 1,
    "date": "2018-05-09",
    "event_type": "acquired",
    "role_ref_hint": "Elias Whitfield",
    "role_ref_resolved_id": null,
    "note": "Elias Whitfield acquired M/Y Cascade, a 50m full-custom superyacht, from her previous owner, a Middle Eastern shipping family."
  },
  {
    "event_id": "EVT.00591",
    "asset_id": "AST.RADCLIFFE.YACHT",
    "seq": 2,
    "date": "2020-09-14",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Cascade underwent a major refit including exterior repaint and upgraded stabilization systems."
  },
  {
    "event_id": "EVT.00592",
    "asset_id": "AST.RADCLIFFE.YACHT",
    "seq": 3,
    "date": "2023-02-27",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The yacht was partially converted for seasonal charter use to offset operating costs."
  },
  {
    "event_id": "EVT.00593",
    "asset_id": "AST.RADCLIFFE.YACHT",
    "seq": 4,
    "date": "2025-07-16",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Radcliffe Holdings",
    "role_ref_resolved_id": "PRIN.RADCLIFFE",
    "note": "Ownership was restructured under Radcliffe Holdings for liability protection."
  },
  {
    "event_id": "EVT.00594",
    "asset_id": "AST.RADCLIFFE.RE1",
    "seq": 1,
    "date": "2019-12-06",
    "event_type": "acquired",
    "role_ref_hint": "Marguerite Kessler",
    "role_ref_resolved_id": "ROLE.RADCLIFFE.OWNE",
    "note": "Marguerite Kessler purchased the Big Sky Penthouse as a family ski residence."
  },
  {
    "event_id": "EVT.00595",
    "asset_id": "AST.RADCLIFFE.RE1",
    "seq": 2,
    "date": "2022-06-19",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The penthouse was renovated with a full interior redesign and smart-home integration."
  },
  {
    "event_id": "EVT.00596",
    "asset_id": "AST.RADCLIFFE.RE1",
    "seq": 3,
    "date": "2024-10-02",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The property was refinanced as part of a broader family liquidity strategy."
  },
  {
    "event_id": "EVT.00597",
    "asset_id": "AST.RADCLIFFE.RE2",
    "seq": 1,
    "date": "2018-08-21",
    "event_type": "acquired",
    "role_ref_hint": "Camila Andrade",
    "role_ref_resolved_id": null,
    "note": "Camila Andrade acquired the Greenwich lakefront residence as a secondary East Coast base."
  },
  {
    "event_id": "EVT.00598",
    "asset_id": "AST.RADCLIFFE.RE2",
    "seq": 2,
    "date": "2021-11-08",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The residence underwent renovation of the boathouse and dock facilities."
  },
  {
    "event_id": "EVT.00599",
    "asset_id": "AST.RADCLIFFE.RE2",
    "seq": 3,
    "date": "2024-04-25",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Radcliffe Holdings",
    "role_ref_resolved_id": "PRIN.RADCLIFFE",
    "note": "Title was transferred into Radcliffe Holdings for estate planning."
  },
  {
    "event_id": "EVT.00600",
    "asset_id": "AST.RADCLIFFE.AUTO",
    "seq": 1,
    "date": "2019-03-15",
    "event_type": "acquired",
    "role_ref_hint": "Otieno Wambua",
    "role_ref_resolved_id": null,
    "note": "Otieno Wambua acquired the founding pieces of the collection, including a period classic icon."
  },
  {
    "event_id": "EVT.00601",
    "asset_id": "AST.RADCLIFFE.AUTO",
    "seq": 2,
    "date": "2022-08-09",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A modern hypercar was added to the collection."
  },
  {
    "event_id": "EVT.00602",
    "asset_id": "AST.RADCLIFFE.AUTO",
    "seq": 3,
    "date": "2025-05-30",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Two additional blue-chip modern exotics completed the current 4-car lineup."
  },
  {
    "event_id": "EVT.00603",
    "asset_id": "AST.FITZWILLIAM.YACHT",
    "seq": 1,
    "date": "2018-02-11",
    "event_type": "acquired",
    "role_ref_hint": "Alistair Kwan",
    "role_ref_resolved_id": "ROLE.FITZWILLIAM.OWNE",
    "note": "Alistair Kwan acquired M/Y Ravel from its previous owner, a European industrial family."
  },
  {
    "event_id": "EVT.00604",
    "asset_id": "AST.FITZWILLIAM.YACHT",
    "seq": 2,
    "date": "2021-05-23",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Ravel underwent a major refit of her navigation and entertainment systems."
  },
  {
    "event_id": "EVT.00605",
    "asset_id": "AST.FITZWILLIAM.YACHT",
    "seq": 3,
    "date": "2023-08-04",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Fitzwilliam Family Trust",
    "role_ref_resolved_id": "PRIN.FITZWILLIAM",
    "note": "Ownership was transferred into the Fitzwilliam Family Trust."
  },
  {
    "event_id": "EVT.00606",
    "asset_id": "AST.FITZWILLIAM.YACHT",
    "seq": 4,
    "date": "2026-01-18",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The yacht entered limited seasonal charter service."
  },
  {
    "event_id": "EVT.00607",
    "asset_id": "AST.FITZWILLIAM.RE1",
    "seq": 1,
    "date": "2019-06-07",
    "event_type": "acquired",
    "role_ref_hint": "Adaeze Nwosu",
    "role_ref_resolved_id": null,
    "note": "Adaeze Nwosu purchased the Manhattan residence as the family's primary base."
  },
  {
    "event_id": "EVT.00608",
    "asset_id": "AST.FITZWILLIAM.RE1",
    "seq": 2,
    "date": "2021-09-16",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A full gut renovation was completed to modernize the residence."
  },
  {
    "event_id": "EVT.00609",
    "asset_id": "AST.FITZWILLIAM.RE1",
    "seq": 3,
    "date": "2024-12-01",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Fitzwilliam Family Trust",
    "role_ref_resolved_id": "PRIN.FITZWILLIAM",
    "note": "Title was transferred into the Fitzwilliam Family Trust."
  },
  {
    "event_id": "EVT.00610",
    "asset_id": "AST.FITZWILLIAM.RE2",
    "seq": 1,
    "date": "2018-10-19",
    "event_type": "acquired",
    "role_ref_hint": "Piotr Kaczmarek",
    "role_ref_resolved_id": null,
    "note": "Piotr Kaczmarek acquired the Gstaad commercial plaza as an income-generating investment."
  },
  {
    "event_id": "EVT.00611",
    "asset_id": "AST.FITZWILLIAM.RE2",
    "seq": 2,
    "date": "2022-01-27",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The plaza's retail units were renovated to attract premium tenants."
  },
  {
    "event_id": "EVT.00612",
    "asset_id": "AST.FITZWILLIAM.RE2",
    "seq": 3,
    "date": "2025-03-13",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The property was refinanced to fund further family investments."
  },
  {
    "event_id": "EVT.00613",
    "asset_id": "AST.FITZWILLIAM.RE3",
    "seq": 1,
    "date": "2020-04-08",
    "event_type": "acquired",
    "role_ref_hint": "Rosalind Duarte",
    "role_ref_resolved_id": null,
    "note": "Rosalind Duarte acquired the Beverly Hills villa as a West Coast family residence."
  },
  {
    "event_id": "EVT.00614",
    "asset_id": "AST.FITZWILLIAM.RE3",
    "seq": 2,
    "date": "2023-07-22",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The villa underwent landscaping and pool-house renovations."
  },
  {
    "event_id": "EVT.00615",
    "asset_id": "AST.FITZWILLIAM.RE3",
    "seq": 3,
    "date": "2025-11-10",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Fitzwilliam Family Trust",
    "role_ref_resolved_id": "PRIN.FITZWILLIAM",
    "note": "Title was transferred into the Fitzwilliam Family Trust."
  },
  {
    "event_id": "EVT.00616",
    "asset_id": "AST.FITZWILLIAM.AUTO",
    "seq": 1,
    "date": "2018-06-14",
    "event_type": "acquired",
    "role_ref_hint": "Minh Tran",
    "role_ref_resolved_id": null,
    "note": "Minh Tran began the collection with the acquisition of several founding classic pieces."
  },
  {
    "event_id": "EVT.00617",
    "asset_id": "AST.FITZWILLIAM.AUTO",
    "seq": 2,
    "date": "2020-10-29",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The collection was expanded with a trophy-tier hypercar addition."
  },
  {
    "event_id": "EVT.00618",
    "asset_id": "AST.FITZWILLIAM.AUTO",
    "seq": 3,
    "date": "2022-12-03",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Further DB5/Carrera GT-era pieces were added, deepening the classic bench."
  },
  {
    "event_id": "EVT.00619",
    "asset_id": "AST.FITZWILLIAM.AUTO",
    "seq": 4,
    "date": "2025-09-19",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "One early acquisition was sold to a fellow collector to fund a second trophy-tier hypercar purchase."
  },
  {
    "event_id": "EVT.00620",
    "asset_id": "AST.PEMBERTON.YACHT",
    "seq": 1,
    "date": "2018-03-05",
    "event_type": "acquired",
    "role_ref_hint": "Sanjay Bhatt",
    "role_ref_resolved_id": "ROLE.PEMBERTON.DIRE",
    "note": "Sanjay Bhatt acquired M/Y Denali from her previous owner, a Gulf state royal family."
  },
  {
    "event_id": "EVT.00621",
    "asset_id": "AST.PEMBERTON.YACHT",
    "seq": 2,
    "date": "2020-11-12",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Denali underwent a major refit including new exterior paint and upgraded guest suites."
  },
  {
    "event_id": "EVT.00622",
    "asset_id": "AST.PEMBERTON.YACHT",
    "seq": 3,
    "date": "2023-05-21",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Pemberton Family Office Trust",
    "role_ref_resolved_id": "PRIN.PEMBERTON",
    "note": "Ownership was transferred into the Pemberton Family Office Trust."
  },
  {
    "event_id": "EVT.00623",
    "asset_id": "AST.PEMBERTON.YACHT",
    "seq": 4,
    "date": "2025-10-08",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The yacht entered limited charter availability during the family's off-season months."
  },
  {
    "event_id": "EVT.00624",
    "asset_id": "AST.PEMBERTON.AVI",
    "seq": 1,
    "date": "2019-08-17",
    "event_type": "acquired",
    "role_ref_hint": "Liesel Hoffmann",
    "role_ref_resolved_id": null,
    "note": "Liesel Hoffmann acquired the Challenger 350 for family and business travel."
  },
  {
    "event_id": "EVT.00625",
    "asset_id": "AST.PEMBERTON.AVI",
    "seq": 2,
    "date": "2022-04-06",
    "event_type": "avionics_upgrade",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The aircraft received an avionics upgrade to maintain compliance with updated airspace requirements."
  },
  {
    "event_id": "EVT.00626",
    "asset_id": "AST.PEMBERTON.AVI",
    "seq": 3,
    "date": "2025-01-23",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Pemberton Family Office Trust",
    "role_ref_resolved_id": "PRIN.PEMBERTON",
    "note": "Title was transferred into the Pemberton Family Office Trust."
  },
  {
    "event_id": "EVT.00627",
    "asset_id": "AST.PEMBERTON.RE1",
    "seq": 1,
    "date": "2018-09-30",
    "event_type": "acquired",
    "role_ref_hint": "\u00c9tienne Marchand",
    "role_ref_resolved_id": null,
    "note": "\u00c9tienne Marchand acquired the Greenwich vineyard estate as the family's primary residence."
  },
  {
    "event_id": "EVT.00628",
    "asset_id": "AST.PEMBERTON.RE1",
    "seq": 2,
    "date": "2021-07-15",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The estate's main residence and vineyard outbuildings were renovated."
  },
  {
    "event_id": "EVT.00629",
    "asset_id": "AST.PEMBERTON.RE1",
    "seq": 3,
    "date": "2024-02-11",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The property was refinanced to fund vineyard expansion."
  },
  {
    "event_id": "EVT.00630",
    "asset_id": "AST.EVERLEIGH.YACHT",
    "seq": 1,
    "date": "2018-12-04",
    "event_type": "acquired",
    "role_ref_hint": "Thaddeus Bramwell",
    "role_ref_resolved_id": "ROLE.EVERLEIGH.OWNE",
    "note": "Thaddeus Bramwell acquired M/Y Radiance from her previous owner, a South American mining family."
  },
  {
    "event_id": "EVT.00631",
    "asset_id": "AST.EVERLEIGH.YACHT",
    "seq": 2,
    "date": "2021-03-19",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Radiance underwent a major refit of her propulsion and stabilization systems."
  },
  {
    "event_id": "EVT.00632",
    "asset_id": "AST.EVERLEIGH.YACHT",
    "seq": 3,
    "date": "2024-06-27",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Everleigh Family Partnership",
    "role_ref_resolved_id": "PRIN.EVERLEIGH",
    "note": "Ownership was transferred into the Everleigh Family Partnership."
  },
  {
    "event_id": "EVT.00633",
    "asset_id": "AST.EVERLEIGH.RE1",
    "seq": 1,
    "date": "2019-05-13",
    "event_type": "acquired",
    "role_ref_hint": "Solveig Nyman",
    "role_ref_resolved_id": null,
    "note": "Solveig Nyman acquired the Palm Springs commercial plaza as an investment property."
  },
  {
    "event_id": "EVT.00634",
    "asset_id": "AST.EVERLEIGH.RE1",
    "seq": 2,
    "date": "2022-09-01",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The plaza underwent renovation to upgrade retail and hospitality tenant spaces."
  },
  {
    "event_id": "EVT.00635",
    "asset_id": "AST.EVERLEIGH.RE1",
    "seq": 3,
    "date": "2025-04-17",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The property was refinanced to release capital for further acquisitions."
  },
  {
    "event_id": "EVT.00636",
    "asset_id": "AST.EVERLEIGH.RE2",
    "seq": 1,
    "date": "2018-07-08",
    "event_type": "acquired",
    "role_ref_hint": "Rafael Contreras",
    "role_ref_resolved_id": null,
    "note": "Rafael Contreras acquired the Hamptons oceanfront compound as the family's summer retreat."
  },
  {
    "event_id": "EVT.00637",
    "asset_id": "AST.EVERLEIGH.RE2",
    "seq": 2,
    "date": "2020-08-22",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The compound underwent a full renovation including a new guest house and pool complex."
  },
  {
    "event_id": "EVT.00638",
    "asset_id": "AST.EVERLEIGH.RE2",
    "seq": 3,
    "date": "2023-06-14",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Everleigh Family Partnership",
    "role_ref_resolved_id": "PRIN.EVERLEIGH",
    "note": "Title was transferred into the Everleigh Family Partnership."
  },
  {
    "event_id": "EVT.00639",
    "asset_id": "AST.EVERLEIGH.RE2",
    "seq": 4,
    "date": "2026-02-09",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The property was refinanced as part of a broader family liquidity strategy."
  },
  {
    "event_id": "EVT.00640",
    "asset_id": "AST.STANDISH.YACHT",
    "seq": 1,
    "date": "2019-04-18",
    "event_type": "acquired",
    "role_ref_hint": "Standish Family Trust",
    "role_ref_resolved_id": "PRIN.STANDISH",
    "note": "Standish Family Trust acquired M/Y Horizon (12m) from its original owner to serve as the family's coastal day-boat and short-range cruiser."
  },
  {
    "event_id": "EVT.00641",
    "asset_id": "AST.STANDISH.YACHT",
    "seq": 2,
    "date": "2021-06-09",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Engine room overhaul and full navigation/electronics refit completed on M/Y Horizon."
  },
  {
    "event_id": "EVT.00642",
    "asset_id": "AST.STANDISH.YACHT",
    "seq": 3,
    "date": "2024-09-22",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Standish Family Trust",
    "role_ref_resolved_id": "PRIN.STANDISH",
    "note": "Vessel title formally consolidated under the Standish Family Trust as part of broader estate planning."
  },
  {
    "event_id": "EVT.00643",
    "asset_id": "AST.STANDISH.AVI",
    "seq": 1,
    "date": "2019-11-14",
    "event_type": "acquired",
    "role_ref_hint": "Standish Family Trust",
    "role_ref_resolved_id": "PRIN.STANDISH",
    "note": "Standish Family Trust acquired a new-delivery Airbus H175 for executive and estate-to-estate transport."
  },
  {
    "event_id": "EVT.00644",
    "asset_id": "AST.STANDISH.AVI",
    "seq": 2,
    "date": "2022-02-27",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Avionics suite upgrade and cabin refurbishment completed on the H175."
  },
  {
    "event_id": "EVT.00645",
    "asset_id": "AST.STANDISH.AVI",
    "seq": 3,
    "date": "2024-08-05",
    "event_type": "reappraised",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Hull insured value reappraised following a scheduled heavy maintenance inspection."
  },
  {
    "event_id": "EVT.00646",
    "asset_id": "AST.STANDISH.RE1",
    "seq": 1,
    "date": "2018-07-11",
    "event_type": "acquired",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Standish Family Trust purchased the Aspen Ranch Estate from the previous owner, a Denver-based energy family."
  },
  {
    "event_id": "EVT.00647",
    "asset_id": "AST.STANDISH.RE1",
    "seq": 2,
    "date": "2020-05-19",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Main residence and guest lodge modernized while preserving the ranch's original timber-frame character."
  },
  {
    "event_id": "EVT.00648",
    "asset_id": "AST.STANDISH.RE1",
    "seq": 3,
    "date": "2024-01-30",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Standish Family Trust",
    "role_ref_resolved_id": "PRIN.STANDISH",
    "note": "Property title transferred into the Standish Family Trust structure as part of estate restructuring."
  },
  {
    "event_id": "EVT.00649",
    "asset_id": "AST.STANDISH.AUTO",
    "seq": 1,
    "date": "2018-09-03",
    "event_type": "acquired",
    "role_ref_hint": "Standish Family Trust",
    "role_ref_resolved_id": "PRIN.STANDISH",
    "note": "Standish Family Trust began its curated collection with the purchase of a period classic and a modern hypercar anchor piece."
  },
  {
    "event_id": "EVT.00650",
    "asset_id": "AST.STANDISH.AUTO",
    "seq": 2,
    "date": "2021-11-16",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Collection expanded to six vehicles with a second limited-run modern exotic and a blue-chip period classic."
  },
  {
    "event_id": "EVT.00651",
    "asset_id": "AST.STANDISH.AUTO",
    "seq": 3,
    "date": "2023-06-08",
    "event_type": "reappraised",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Collection revalued for insurance purposes following acquisition activity and marque appreciation."
  },
  {
    "event_id": "EVT.00652",
    "asset_id": "AST.ROTHBURY.YACHT",
    "seq": 1,
    "date": "2018-03-14",
    "event_type": "acquired",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Rothbury Family Office acquired M/Y Pinnacle (50m) from its original owner, a Middle Eastern shipping family, to serve as the family's primary cruising yacht."
  },
  {
    "event_id": "EVT.00653",
    "asset_id": "AST.ROTHBURY.YACHT",
    "seq": 2,
    "date": "2020-09-27",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Full exterior repaint and interior refresh completed at a European refit yard."
  },
  {
    "event_id": "EVT.00654",
    "asset_id": "AST.ROTHBURY.YACHT",
    "seq": 3,
    "date": "2022-12-05",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Pinnacle entered limited seasonal charter management to offset operating costs while retaining private-use priority."
  },
  {
    "event_id": "EVT.00655",
    "asset_id": "AST.ROTHBURY.YACHT",
    "seq": 4,
    "date": "2025-05-21",
    "event_type": "reappraised",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Insured hull value reappraised following a class survey and systems overhaul."
  },
  {
    "event_id": "EVT.00656",
    "asset_id": "AST.ROTHBURY.RE1",
    "seq": 1,
    "date": "2018-06-02",
    "event_type": "acquired",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Rothbury Family Office acquired the Lake Como Historic Estate from the previous owner, an Italian noble family, as a summer residence."
  },
  {
    "event_id": "EVT.00657",
    "asset_id": "AST.ROTHBURY.RE1",
    "seq": 2,
    "date": "2021-04-13",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Historic villa and lakefront grounds underwent a full restoration preserving original frescoes and architecture."
  },
  {
    "event_id": "EVT.00658",
    "asset_id": "AST.ROTHBURY.RE1",
    "seq": 3,
    "date": "2024-10-09",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Rothbury Family Office",
    "role_ref_resolved_id": "PRIN.ROTHBURY",
    "note": "Estate title transferred into the Rothbury Family Office holding structure."
  },
  {
    "event_id": "EVT.00659",
    "asset_id": "AST.ROTHBURY.RE2",
    "seq": 1,
    "date": "2019-02-08",
    "event_type": "acquired",
    "role_ref_hint": "Rothbury Family Office",
    "role_ref_resolved_id": "PRIN.ROTHBURY",
    "note": "Rothbury Family Office purchased the Palm Beach Oceanfront Compound as a winter residence."
  },
  {
    "event_id": "EVT.00660",
    "asset_id": "AST.ROTHBURY.RE2",
    "seq": 2,
    "date": "2023-01-17",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Compound updated with a rebuilt seawall and hurricane-resilient construction."
  },
  {
    "event_id": "EVT.00661",
    "asset_id": "AST.ROTHBURY.RE2",
    "seq": 3,
    "date": "2025-06-04",
    "event_type": "reappraised",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Property revalued for insurance purposes following renovation completion and regional market appreciation."
  },
  {
    "event_id": "EVT.00662",
    "asset_id": "AST.ROTHBURY.AUTO",
    "seq": 1,
    "date": "2018-11-22",
    "event_type": "acquired",
    "role_ref_hint": "Rothbury Family Office",
    "role_ref_resolved_id": "PRIN.ROTHBURY",
    "note": "Rothbury Family Office established its collection with a trophy-tier classic and a hypercar anchor piece."
  },
  {
    "event_id": "EVT.00663",
    "asset_id": "AST.ROTHBURY.AUTO",
    "seq": 2,
    "date": "2021-07-30",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Collection expanded to eight vehicles, adding a second period classic and a limited-run modern exotic."
  },
  {
    "event_id": "EVT.00664",
    "asset_id": "AST.ROTHBURY.AUTO",
    "seq": 3,
    "date": "2024-03-11",
    "event_type": "reappraised",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Collection revalued for insurance purposes following two years of acquisition activity."
  },
  {
    "event_id": "EVT.00665",
    "asset_id": "AST.NORWOOD.YACHT",
    "seq": 1,
    "date": "2018-05-06",
    "event_type": "acquired",
    "role_ref_hint": "Norwood Holdings",
    "role_ref_resolved_id": "PRIN.NORWOOD",
    "note": "Norwood Holdings took delivery of M/Y Aria (115m) as a newbuild flagship vessel."
  },
  {
    "event_id": "EVT.00666",
    "asset_id": "AST.NORWOOD.YACHT",
    "seq": 2,
    "date": "2020-10-15",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Interior refresh and tender/toy inventory upgrade completed following the vessel's first major class survey."
  },
  {
    "event_id": "EVT.00667",
    "asset_id": "AST.NORWOOD.YACHT",
    "seq": 3,
    "date": "2023-02-19",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Norwood Holdings",
    "role_ref_resolved_id": "PRIN.NORWOOD",
    "note": "Vessel ownership consolidated under Norwood Holdings' marine asset-holding entity."
  },
  {
    "event_id": "EVT.00668",
    "asset_id": "AST.NORWOOD.YACHT",
    "seq": 4,
    "date": "2025-11-03",
    "event_type": "reappraised",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Insured hull value reappraised via replacement-cost survey given the limited comparable resale market at this size tier."
  },
  {
    "event_id": "EVT.00669",
    "asset_id": "AST.NORWOOD.RE1",
    "seq": 1,
    "date": "2019-06-21",
    "event_type": "acquired",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Norwood Holdings purchased the Martha's Vineyard Villa from the previous owner, a Boston publishing family, as a summer residence."
  },
  {
    "event_id": "EVT.00670",
    "asset_id": "AST.NORWOOD.RE1",
    "seq": 2,
    "date": "2022-08-14",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Villa underwent a full renovation including a new guest wing and coastal landscaping."
  },
  {
    "event_id": "EVT.00671",
    "asset_id": "AST.NORWOOD.RE1",
    "seq": 3,
    "date": "2025-04-27",
    "event_type": "reappraised",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Property revalued for insurance purposes reflecting regional market appreciation."
  },
  {
    "event_id": "EVT.00672",
    "asset_id": "AST.NORWOOD.AUTO",
    "seq": 1,
    "date": "2018-04-09",
    "event_type": "acquired",
    "role_ref_hint": "Norwood Holdings",
    "role_ref_resolved_id": "PRIN.NORWOOD",
    "note": "Norwood Holdings began the collection with a period classic and two modern hypercar anchor pieces."
  },
  {
    "event_id": "EVT.00673",
    "asset_id": "AST.NORWOOD.AUTO",
    "seq": 2,
    "date": "2020-12-02",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Collection expanded past eight vehicles with the addition of DB5/Carrera GT-era classics."
  },
  {
    "event_id": "EVT.00674",
    "asset_id": "AST.NORWOOD.AUTO",
    "seq": 3,
    "date": "2023-05-25",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Collection reached twelve vehicles with a second trophy-tier hypercar acquisition."
  },
  {
    "event_id": "EVT.00675",
    "asset_id": "AST.NORWOOD.AUTO",
    "seq": 4,
    "date": "2025-09-08",
    "event_type": "reappraised",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Collection revalued for insurance purposes following continued acquisition activity."
  },
  {
    "event_id": "EVT.00676",
    "asset_id": "AST.BALLANTINE.YACHT",
    "seq": 1,
    "date": "2018-09-17",
    "event_type": "acquired",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Ballantine Family Office Trust acquired M/Y Ember (90m) from the previous owner, a Russian industrial family, as the family's flagship vessel."
  },
  {
    "event_id": "EVT.00677",
    "asset_id": "AST.BALLANTINE.YACHT",
    "seq": 2,
    "date": "2021-03-10",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Full refit completed including exterior repaint, updated stabilization systems, and interior refresh."
  },
  {
    "event_id": "EVT.00678",
    "asset_id": "AST.BALLANTINE.YACHT",
    "seq": 3,
    "date": "2023-07-23",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Ember entered limited charter management during off-peak family-use months."
  },
  {
    "event_id": "EVT.00679",
    "asset_id": "AST.BALLANTINE.YACHT",
    "seq": 4,
    "date": "2025-12-01",
    "event_type": "reappraised",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Insured hull value reappraised following a class survey."
  },
  {
    "event_id": "EVT.00680",
    "asset_id": "AST.BALLANTINE.RE1",
    "seq": 1,
    "date": "2019-01-28",
    "event_type": "acquired",
    "role_ref_hint": "Ballantine Family Office Trust",
    "role_ref_resolved_id": "PRIN.BALLANTINE",
    "note": "Ballantine Family Office Trust purchased the Hamptons Ski Chalet as a secondary family residence."
  },
  {
    "event_id": "EVT.00681",
    "asset_id": "AST.BALLANTINE.RE1",
    "seq": 2,
    "date": "2022-05-12",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Residence renovated with expanded guest quarters and updated mechanical systems."
  },
  {
    "event_id": "EVT.00682",
    "asset_id": "AST.BALLANTINE.RE1",
    "seq": 3,
    "date": "2024-11-19",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Ballantine Family Office Trust",
    "role_ref_resolved_id": "PRIN.BALLANTINE",
    "note": "Property title consolidated into the Ballantine Family Office Trust."
  },
  {
    "event_id": "EVT.00683",
    "asset_id": "AST.BALLANTINE.AUTO",
    "seq": 1,
    "date": "2018-06-25",
    "event_type": "acquired",
    "role_ref_hint": "Ballantine Family Office Trust",
    "role_ref_resolved_id": "PRIN.BALLANTINE",
    "note": "Ballantine Family Office Trust established its collection with a trophy classic and a modern exotic anchor piece."
  },
  {
    "event_id": "EVT.00684",
    "asset_id": "AST.BALLANTINE.AUTO",
    "seq": 2,
    "date": "2020-09-08",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Collection expanded to eight vehicles with the addition of a hypercar and a second period classic."
  },
  {
    "event_id": "EVT.00685",
    "asset_id": "AST.BALLANTINE.AUTO",
    "seq": 3,
    "date": "2024-02-14",
    "event_type": "reappraised",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Collection revalued for insurance purposes following market appreciation across held marques."
  },
  {
    "event_id": "EVT.00686",
    "asset_id": "AST.CHASTAIN.RE1",
    "seq": 1,
    "date": "2018-08-16",
    "event_type": "acquired",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Chastain Family Trust acquired the Sun Valley Historic Estate from the previous owner, a Pacific Northwest timber family."
  },
  {
    "event_id": "EVT.00687",
    "asset_id": "AST.CHASTAIN.RE1",
    "seq": 2,
    "date": "2021-02-22",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Historic main lodge restored and guest cabins modernized while preserving the property's period architecture."
  },
  {
    "event_id": "EVT.00688",
    "asset_id": "AST.CHASTAIN.RE1",
    "seq": 3,
    "date": "2024-06-30",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Chastain Family Trust",
    "role_ref_resolved_id": "PRIN.CHASTAIN",
    "note": "Estate title formally consolidated into the Chastain Family Trust."
  },
  {
    "event_id": "EVT.00689",
    "asset_id": "AST.CHASTAIN.RE2",
    "seq": 1,
    "date": "2019-10-04",
    "event_type": "acquired",
    "role_ref_hint": "Chastain Family Trust",
    "role_ref_resolved_id": "PRIN.CHASTAIN",
    "note": "Chastain Family Trust purchased the Miami Oceanfront Compound as a winter residence."
  },
  {
    "event_id": "EVT.00690",
    "asset_id": "AST.CHASTAIN.RE2",
    "seq": 2,
    "date": "2023-03-27",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Compound updated with hurricane-resilient windows and a rebuilt seawall."
  },
  {
    "event_id": "EVT.00691",
    "asset_id": "AST.CHASTAIN.RE2",
    "seq": 3,
    "date": "2025-07-15",
    "event_type": "reappraised",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Property revalued for insurance purposes reflecting South Florida coastal market appreciation."
  },
  {
    "event_id": "EVT.00692",
    "asset_id": "AST.CHASTAIN.AUTO",
    "seq": 1,
    "date": "2018-12-11",
    "event_type": "acquired",
    "role_ref_hint": "Chastain Family Trust",
    "role_ref_resolved_id": "PRIN.CHASTAIN",
    "note": "Chastain Family Trust began its collection with a period classic and a limited-run modern exotic."
  },
  {
    "event_id": "EVT.00693",
    "asset_id": "AST.CHASTAIN.AUTO",
    "seq": 2,
    "date": "2022-04-19",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Collection expanded to eight vehicles with the addition of a hypercar and a second period classic."
  },
  {
    "event_id": "EVT.00694",
    "asset_id": "AST.CHASTAIN.AUTO",
    "seq": 3,
    "date": "2025-01-23",
    "event_type": "reappraised",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Collection revalued for insurance purposes following continued market appreciation."
  },
  {
    "event_id": "EVT.00695",
    "asset_id": "AST.CARRINGTON.YACHT",
    "seq": 1,
    "date": "2018-06-14",
    "event_type": "acquired",
    "role_ref_hint": "Nathaniel Sorensen",
    "role_ref_resolved_id": "ROLE.CARRINGTON.OWNE",
    "note": "Nathaniel Sorensen acquired M/Y Jubilee (32m) from the previous owner, a Monaco-based shipping family, through a private brokerage sale."
  },
  {
    "event_id": "EVT.00696",
    "asset_id": "AST.CARRINGTON.YACHT",
    "seq": 2,
    "date": "2020-03-02",
    "event_type": "major_refit",
    "role_ref_hint": "Carrington Family Trust",
    "role_ref_resolved_id": "PRIN.CARRINGTON",
    "note": "The Carrington Family Trust commissioned a refit at a Dutch yard covering exterior paint, updated navigation electronics, and an interior refresh."
  },
  {
    "event_id": "EVT.00697",
    "asset_id": "AST.CARRINGTON.YACHT",
    "seq": 3,
    "date": "2022-11-20",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Priya Chandrasekaran",
    "role_ref_resolved_id": null,
    "note": "Priya Chandrasekaran authorized limited seasonal charter availability for Jubilee to offset running costs during the family's off-season months."
  },
  {
    "event_id": "EVT.00698",
    "asset_id": "AST.CARRINGTON.YACHT",
    "seq": 4,
    "date": "2025-05-08",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Carrington Family Trust",
    "role_ref_resolved_id": "PRIN.CARRINGTON",
    "note": "Ownership of Jubilee was formally transferred into the Carrington Family Trust structure for estate planning purposes."
  },
  {
    "event_id": "EVT.00699",
    "asset_id": "AST.CARRINGTON.AVI",
    "seq": 1,
    "date": "2019-09-10",
    "event_type": "acquired",
    "role_ref_hint": "Marcus Okafor",
    "role_ref_resolved_id": "ROLE.CARRINGTON.AVIA",
    "note": "Marcus Okafor acquired the Airbus H175 for family and executive transport, purchased directly from an offshore operator's fleet."
  },
  {
    "event_id": "EVT.00700",
    "asset_id": "AST.CARRINGTON.AVI",
    "seq": 2,
    "date": "2021-07-15",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The helicopter underwent scheduled heavy maintenance and an avionics upgrade at an authorized Airbus service center."
  },
  {
    "event_id": "EVT.00701",
    "asset_id": "AST.CARRINGTON.AVI",
    "seq": 3,
    "date": "2024-02-28",
    "event_type": "refinanced",
    "role_ref_hint": "Elena Vasquez",
    "role_ref_resolved_id": null,
    "note": "Elena Vasquez refinanced the H175 under a new asset-backed facility to fund a broader family fleet consolidation."
  },
  {
    "event_id": "EVT.00702",
    "asset_id": "AST.GREVILLE.YACHT",
    "seq": 1,
    "date": "2018-01-20",
    "event_type": "acquired",
    "role_ref_hint": "Hassan Al-Rashid",
    "role_ref_resolved_id": "ROLE.GREVILLE.FLIG",
    "note": "Hassan Al-Rashid took delivery of the newly built M/Y Jubilee (90m) directly from the shipyard."
  },
  {
    "event_id": "EVT.00703",
    "asset_id": "AST.GREVILLE.YACHT",
    "seq": 2,
    "date": "2021-06-05",
    "event_type": "major_refit",
    "role_ref_hint": "Greville Family Office",
    "role_ref_resolved_id": "PRIN.GREVILLE",
    "note": "The Greville Family Office commissioned an extensive refit adding an expanded owner's suite and updated stabilization systems."
  },
  {
    "event_id": "EVT.00704",
    "asset_id": "AST.GREVILLE.YACHT",
    "seq": 3,
    "date": "2023-09-12",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Katherine Loewenstein",
    "role_ref_resolved_id": null,
    "note": "Katherine Loewenstein approved a limited seasonal charter program for Jubilee to broaden utilization."
  },
  {
    "event_id": "EVT.00705",
    "asset_id": "AST.GREVILLE.YACHT",
    "seq": 4,
    "date": "2025-11-03",
    "event_type": "refinanced",
    "role_ref_hint": "Michael Braithwaite",
    "role_ref_resolved_id": null,
    "note": "Michael Braithwaite refinanced the vessel under the family office's consolidated credit facility ahead of a broader portfolio restructuring."
  },
  {
    "event_id": "EVT.00706",
    "asset_id": "AST.GREVILLE.AVI",
    "seq": 1,
    "date": "2020-04-18",
    "event_type": "acquired",
    "role_ref_hint": "Ingrid Solberg",
    "role_ref_resolved_id": null,
    "note": "Ingrid Solberg acquired the Cessna Citation Longitude new from Textron Aviation for family and business travel."
  },
  {
    "event_id": "EVT.00707",
    "asset_id": "AST.GREVILLE.AVI",
    "seq": 2,
    "date": "2022-08-09",
    "event_type": "major_refit",
    "role_ref_hint": "Kenji Nakamura",
    "role_ref_resolved_id": null,
    "note": "Kenji Nakamura authorized an avionics and cabin interior upgrade during a scheduled maintenance visit."
  },
  {
    "event_id": "EVT.00708",
    "asset_id": "AST.GREVILLE.AVI",
    "seq": 3,
    "date": "2025-01-22",
    "event_type": "refinanced",
    "role_ref_hint": "Greville Family Office",
    "role_ref_resolved_id": "PRIN.GREVILLE",
    "note": "The Greville Family Office refinanced the Longitude as part of a fleet-wide financing restructure."
  },
  {
    "event_id": "EVT.00709",
    "asset_id": "AST.GREVILLE.AUTO",
    "seq": 1,
    "date": "2019-05-30",
    "event_type": "acquired",
    "role_ref_hint": "Fatima Zubairi",
    "role_ref_resolved_id": null,
    "note": "Fatima Zubairi began assembling the collection with the acquisition of two anchor pieces from a private European dealer."
  },
  {
    "event_id": "EVT.00710",
    "asset_id": "AST.GREVILLE.AUTO",
    "seq": 2,
    "date": "2021-10-14",
    "event_type": "expanded_collection",
    "role_ref_hint": "Hassan Al-Rashid",
    "role_ref_resolved_id": "ROLE.GREVILLE.FLIG",
    "note": "Hassan Al-Rashid added a limited-run modern exotic and a period classic, bringing the collection to its current six-car composition."
  },
  {
    "event_id": "EVT.00711",
    "asset_id": "AST.GREVILLE.AUTO",
    "seq": 3,
    "date": "2024-06-02",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Greville Family Office",
    "role_ref_resolved_id": "PRIN.GREVILLE",
    "note": "Ownership of the six-car collection was consolidated under the Greville Family Office for insurance and estate purposes."
  },
  {
    "event_id": "EVT.00712",
    "asset_id": "AST.FAIRWEATHER.AUTO",
    "seq": 1,
    "date": "2018-08-22",
    "event_type": "acquired",
    "role_ref_hint": "Gregory Ashworth",
    "role_ref_resolved_id": null,
    "note": "Gregory Ashworth acquired the first three cars of the collection, including a period classic bought from the previous owner, a retired racing driver in Southern Europe."
  },
  {
    "event_id": "EVT.00713",
    "asset_id": "AST.FAIRWEATHER.AUTO",
    "seq": 2,
    "date": "2020-12-11",
    "event_type": "expanded_collection",
    "role_ref_hint": "Simone Laurent",
    "role_ref_resolved_id": null,
    "note": "Simone Laurent added two modern exotics sourced through a specialist dealer network, bringing the count to five."
  },
  {
    "event_id": "EVT.00714",
    "asset_id": "AST.FAIRWEATHER.AUTO",
    "seq": 3,
    "date": "2023-03-19",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "Deborah Whitcombe",
    "role_ref_resolved_id": null,
    "note": "Deborah Whitcombe sold one earlier acquisition to fund the purchase of a higher-tier hypercar, holding the collection at six vehicles."
  },
  {
    "event_id": "EVT.00715",
    "asset_id": "AST.FAIRWEATHER.AUTO",
    "seq": 4,
    "date": "2025-09-07",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Fairweather Holdings",
    "role_ref_resolved_id": "PRIN.FAIRWEATHER",
    "note": "The collection's title was transferred to Fairweather Holdings as part of a broader asset consolidation."
  },
  {
    "event_id": "EVT.00716",
    "asset_id": "AST.KENSINGTON.YACHT",
    "seq": 1,
    "date": "2019-04-03",
    "event_type": "acquired",
    "role_ref_hint": "Charles Pemberton",
    "role_ref_resolved_id": "ROLE.KENSINGTON.OWNE",
    "note": "Charles Pemberton acquired M/Y Gale (20m) from the previous owner, a Nordic industrial family, through a brokered resale."
  },
  {
    "event_id": "EVT.00717",
    "asset_id": "AST.KENSINGTON.YACHT",
    "seq": 2,
    "date": "2021-08-17",
    "event_type": "major_refit",
    "role_ref_hint": "Liam O'Sullivan",
    "role_ref_resolved_id": null,
    "note": "Liam O'Sullivan commissioned an engine overhaul and updated navigation package for Gale at a regional yard."
  },
  {
    "event_id": "EVT.00718",
    "asset_id": "AST.KENSINGTON.YACHT",
    "seq": 3,
    "date": "2024-05-25",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Kensington Family Office Trust",
    "role_ref_resolved_id": "PRIN.KENSINGTON",
    "note": "Ownership of Gale was transferred into the Kensington Family Office Trust structure."
  },
  {
    "event_id": "EVT.00719",
    "asset_id": "AST.JESSOP.YACHT",
    "seq": 1,
    "date": "2018-02-11",
    "event_type": "acquired",
    "role_ref_hint": "Theodore Ashcombe",
    "role_ref_resolved_id": "ROLE.JESSOP.OWNE2",
    "note": "Theodore Ashcombe took delivery of the newly built M/Y Nautilus (70m) directly from a Northern European yard."
  },
  {
    "event_id": "EVT.00720",
    "asset_id": "AST.JESSOP.YACHT",
    "seq": 2,
    "date": "2020-09-28",
    "event_type": "major_refit",
    "role_ref_hint": "Malik Johnson",
    "role_ref_resolved_id": null,
    "note": "Malik Johnson commissioned an extended refit for Nautilus adding a beach club and updated exterior styling."
  },
  {
    "event_id": "EVT.00721",
    "asset_id": "AST.JESSOP.YACHT",
    "seq": 3,
    "date": "2023-07-04",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Claire Bergstrom",
    "role_ref_resolved_id": null,
    "note": "Claire Bergstrom approved limited seasonal charter availability for Nautilus during the Mediterranean summer months."
  },
  {
    "event_id": "EVT.00722",
    "asset_id": "AST.JESSOP.YACHT",
    "seq": 4,
    "date": "2026-01-15",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Jessop Family Trust",
    "role_ref_resolved_id": "PRIN.JESSOP",
    "note": "Ownership of Nautilus was formally transferred into the Jessop Family Trust for estate planning."
  },
  {
    "event_id": "EVT.00723",
    "asset_id": "AST.JESSOP.RE1",
    "seq": 1,
    "date": "2018-11-30",
    "event_type": "acquired",
    "role_ref_hint": "Rosa Delgado",
    "role_ref_resolved_id": "ROLE.JESSOP.HOUS",
    "note": "Rosa Delgado acquired the Cap Ferrat oceanfront compound from the previous owner, a French industrialist family, in a private sale."
  },
  {
    "event_id": "EVT.00724",
    "asset_id": "AST.JESSOP.RE1",
    "seq": 2,
    "date": "2021-05-19",
    "event_type": "renovated",
    "role_ref_hint": "Edmund Wycliffe",
    "role_ref_resolved_id": "ROLE.JESSOP.PRIV",
    "note": "Edmund Wycliffe oversaw a full renovation of the compound's main residence and grounds, including a new pool pavilion."
  },
  {
    "event_id": "EVT.00725",
    "asset_id": "AST.JESSOP.RE1",
    "seq": 3,
    "date": "2024-10-08",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Jessop Family Trust",
    "role_ref_resolved_id": "PRIN.JESSOP",
    "note": "The compound's title was transferred into the Jessop Family Trust as part of an estate restructuring."
  },
  {
    "event_id": "EVT.00726",
    "asset_id": "AST.JESSOP.AUTO",
    "seq": 1,
    "date": "2019-06-25",
    "event_type": "acquired",
    "role_ref_hint": "Sven Lindqvist",
    "role_ref_resolved_id": null,
    "note": "Sven Lindqvist assembled the initial four-car core of the collection through a series of private acquisitions."
  },
  {
    "event_id": "EVT.00727",
    "asset_id": "AST.JESSOP.AUTO",
    "seq": 2,
    "date": "2022-02-14",
    "event_type": "expanded_collection",
    "role_ref_hint": "Theodore Ashcombe",
    "role_ref_resolved_id": "ROLE.JESSOP.OWNE2",
    "note": "Theodore Ashcombe added two further vehicles, including a modern hypercar, bringing the collection to six cars."
  },
  {
    "event_id": "EVT.00728",
    "asset_id": "AST.JESSOP.AUTO",
    "seq": 3,
    "date": "2025-04-30",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Jessop Family Trust",
    "role_ref_resolved_id": "PRIN.JESSOP",
    "note": "The six-car collection was placed under the Jessop Family Trust for consolidated insurance coverage."
  },
  {
    "event_id": "EVT.00729",
    "asset_id": "AST.RAVENSWORTH.YACHT",
    "seq": 1,
    "date": "2019-05-14",
    "event_type": "acquired",
    "role_ref_hint": "Julian Forsythe",
    "role_ref_resolved_id": "ROLE.RAVENSWORTH.OWNE",
    "note": "Julian Forsythe acquired M/Y Tranquil, a 12m flybridge cruiser, from a Fort Lauderdale brokerage as the family's entry-level tender to yachting."
  },
  {
    "event_id": "EVT.00730",
    "asset_id": "AST.RAVENSWORTH.YACHT",
    "seq": 2,
    "date": "2021-09-02",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Tranquil underwent a refit of its electronics suite and interior upholstery ahead of the family's summer cruising season."
  },
  {
    "event_id": "EVT.00731",
    "asset_id": "AST.RAVENSWORTH.YACHT",
    "seq": 3,
    "date": "2024-03-11",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Ravensworth Family Office",
    "role_ref_resolved_id": "PRIN.RAVENSWORTH",
    "note": "Title to M/Y Tranquil was transferred into the Ravensworth Family Office holding structure for estate-planning purposes."
  },
  {
    "event_id": "EVT.00732",
    "asset_id": "AST.RAVENSWORTH.RE1",
    "seq": 1,
    "date": "2018-06-22",
    "event_type": "acquired",
    "role_ref_hint": "Julian Forsythe",
    "role_ref_resolved_id": "ROLE.RAVENSWORTH.OWNE",
    "note": "Julian Forsythe acquired the Sag Harbor Historic Estate from its previous owner, a Long Island whaling-heritage family, as the family's principal East Coast residence."
  },
  {
    "event_id": "EVT.00733",
    "asset_id": "AST.RAVENSWORTH.RE1",
    "seq": 2,
    "date": "2020-11-05",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Sag Harbor Historic Estate's main house underwent a preservation-grade restoration of its period facade and mechanical systems."
  },
  {
    "event_id": "EVT.00734",
    "asset_id": "AST.RAVENSWORTH.RE1",
    "seq": 3,
    "date": "2023-02-17",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Ravensworth Family Office",
    "role_ref_resolved_id": "PRIN.RAVENSWORTH",
    "note": "The Sag Harbor Historic Estate was retitled under the Ravensworth Family Office for succession planning."
  },
  {
    "event_id": "EVT.00735",
    "asset_id": "AST.QUINTRELL.YACHT",
    "seq": 1,
    "date": "2019-04-09",
    "event_type": "acquired",
    "role_ref_hint": "Isabela Cardoso",
    "role_ref_resolved_id": "ROLE.QUINTRELL.OWNE",
    "note": "Isabela Cardoso acquired M/Y Mirage, a 20m flybridge motor yacht, through a Mediterranean brokerage as the family's first larger cruising vessel."
  },
  {
    "event_id": "EVT.00736",
    "asset_id": "AST.QUINTRELL.YACHT",
    "seq": 2,
    "date": "2022-07-18",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Mirage's flybridge helm and navigation electronics were fully refit ahead of a planned Adriatic cruising itinerary."
  },
  {
    "event_id": "EVT.00737",
    "asset_id": "AST.QUINTRELL.YACHT",
    "seq": 3,
    "date": "2025-05-30",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Mirage entered a limited seasonal charter program to offset running costs during the family's off-peak months."
  },
  {
    "event_id": "EVT.00738",
    "asset_id": "AST.QUINTRELL.RE1",
    "seq": 1,
    "date": "2019-08-01",
    "event_type": "acquired",
    "role_ref_hint": "Declan O'Farrell",
    "role_ref_resolved_id": "ROLE.QUINTRELL.HOUS",
    "note": "Declan O'Farrell acquired the Cap Ferrat Villa from the previous owner, a French industrialist family, as the Quintrells' Riviera summer residence."
  },
  {
    "event_id": "EVT.00739",
    "asset_id": "AST.QUINTRELL.RE1",
    "seq": 2,
    "date": "2021-06-14",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Cap Ferrat Villa's guest wing and terraced grounds were fully renovated to modern Riviera standards."
  },
  {
    "event_id": "EVT.00740",
    "asset_id": "AST.QUINTRELL.RE1",
    "seq": 3,
    "date": "2024-09-27",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Quintrell Family Trust",
    "role_ref_resolved_id": "PRIN.QUINTRELL",
    "note": "The Cap Ferrat Villa was transferred into the Quintrell Family Trust as part of a broader estate restructuring."
  },
  {
    "event_id": "EVT.00741",
    "asset_id": "AST.QUINTRELL.AUTO",
    "seq": 1,
    "date": "2018-03-19",
    "event_type": "expanded_collection",
    "role_ref_hint": "Mei-Ling Tan",
    "role_ref_resolved_id": null,
    "note": "Mei-Ling Tan added an F40-tier trophy classic to the family's growing car collection."
  },
  {
    "event_id": "EVT.00742",
    "asset_id": "AST.QUINTRELL.AUTO",
    "seq": 2,
    "date": "2021-10-08",
    "event_type": "acquired",
    "role_ref_hint": "Anders Lindqvist",
    "role_ref_resolved_id": null,
    "note": "Anders Lindqvist acquired a Veyron/Chiron-tier hypercar to round out the collection's modern hypercar bench."
  },
  {
    "event_id": "EVT.00743",
    "asset_id": "AST.QUINTRELL.AUTO",
    "seq": 3,
    "date": "2023-12-02",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A lower-tier blue-chip exotic was sold out of the 8-car collection to fund a subsequent acquisition."
  },
  {
    "event_id": "EVT.00744",
    "asset_id": "AST.QUINTRELL.AUTO",
    "seq": 4,
    "date": "2025-04-21",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A limited-run modern exotic was added to the 8-car collection, deepening its trophy-piece bench."
  },
  {
    "event_id": "EVT.00745",
    "asset_id": "AST.COMBERFORD.YACHT",
    "seq": 1,
    "date": "2019-02-25",
    "event_type": "traded_up_from_prior_vessel",
    "role_ref_hint": "Hassan Al-Rashid",
    "role_ref_resolved_id": null,
    "note": "Hassan Al-Rashid traded up from the family's smaller motor yacht into M/Y Halcyon II, a 32m custom-built superyacht."
  },
  {
    "event_id": "EVT.00746",
    "asset_id": "AST.COMBERFORD.YACHT",
    "seq": 2,
    "date": "2021-11-13",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Halcyon II underwent a major refit of its engine room and exterior teak decking."
  },
  {
    "event_id": "EVT.00747",
    "asset_id": "AST.COMBERFORD.YACHT",
    "seq": 3,
    "date": "2024-06-06",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Halcyon II entered a Western Mediterranean seasonal charter program to offset annual operating costs."
  },
  {
    "event_id": "EVT.00748",
    "asset_id": "AST.COMBERFORD.RE1",
    "seq": 1,
    "date": "2018-05-30",
    "event_type": "acquired",
    "role_ref_hint": "Beatrice Lindgren",
    "role_ref_resolved_id": "ROLE.COMBERFORD.DIRE",
    "note": "Beatrice Lindgren acquired The Hamptons Villa from its previous owner, a New York banking family, as the Comberfords' summer residence."
  },
  {
    "event_id": "EVT.00749",
    "asset_id": "AST.COMBERFORD.RE1",
    "seq": 2,
    "date": "2022-08-19",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Hamptons Villa's main residence and pool house were fully renovated with contemporary coastal finishes."
  },
  {
    "event_id": "EVT.00750",
    "asset_id": "AST.COMBERFORD.RE1",
    "seq": 3,
    "date": "2025-01-15",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Comberford Holdings",
    "role_ref_resolved_id": "PRIN.COMBERFORD",
    "note": "The Hamptons Villa was retitled under Comberford Holdings as part of an estate-planning restructuring."
  },
  {
    "event_id": "EVT.00751",
    "asset_id": "AST.COMBERFORD.RE2",
    "seq": 1,
    "date": "2020-10-02",
    "event_type": "acquired",
    "role_ref_hint": "Yuki Tanaka",
    "role_ref_resolved_id": null,
    "note": "Yuki Tanaka acquired the Palm Springs Villa as a winter retreat for the family."
  },
  {
    "event_id": "EVT.00752",
    "asset_id": "AST.COMBERFORD.RE2",
    "seq": 2,
    "date": "2023-04-11",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Palm Springs Villa was renovated with a desert-contemporary interior and pool deck update."
  },
  {
    "event_id": "EVT.00753",
    "asset_id": "AST.SEDGEMOOR.YACHT",
    "seq": 1,
    "date": "2020-09-04",
    "event_type": "acquired",
    "role_ref_hint": "Alistair Blackwood",
    "role_ref_resolved_id": "ROLE.SEDGEMOOR.OWNE",
    "note": "Alistair Blackwood took delivery of M/Y Solace, a 115m custom-built flagship, direct from the builder."
  },
  {
    "event_id": "EVT.00754",
    "asset_id": "AST.SEDGEMOOR.YACHT",
    "seq": 2,
    "date": "2023-05-22",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Solace underwent a post-warranty refit addressing stabilizer systems and interior guest suites."
  },
  {
    "event_id": "EVT.00755",
    "asset_id": "AST.SEDGEMOOR.YACHT",
    "seq": 3,
    "date": "2025-11-10",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Sedgemoor Family Office Trust",
    "role_ref_resolved_id": "PRIN.SEDGEMOOR",
    "note": "M/Y Solace was transferred into the Sedgemoor Family Office Trust as part of a multi-generational estate plan."
  },
  {
    "event_id": "EVT.00756",
    "asset_id": "AST.SEDGEMOOR.AVI",
    "seq": 1,
    "date": "2019-07-16",
    "event_type": "acquired",
    "role_ref_hint": "Simone Laurent",
    "role_ref_resolved_id": null,
    "note": "Simone Laurent acquired the family's Gulfstream G650 out of a fractional-ownership program."
  },
  {
    "event_id": "EVT.00757",
    "asset_id": "AST.SEDGEMOOR.AVI",
    "seq": 2,
    "date": "2022-03-29",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The G650's cabin was refurbished and its avionics suite upgraded during a scheduled maintenance visit."
  },
  {
    "event_id": "EVT.00758",
    "asset_id": "AST.SEDGEMOOR.AVI",
    "seq": 3,
    "date": "2024-10-07",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The G650 was refinanced under a new aircraft-backed credit facility."
  },
  {
    "event_id": "EVT.00759",
    "asset_id": "AST.SEDGEMOOR.RE1",
    "seq": 1,
    "date": "2018-04-12",
    "event_type": "acquired",
    "role_ref_hint": "Adaeze Nwosu",
    "role_ref_resolved_id": null,
    "note": "Adaeze Nwosu acquired the Greenwich Coastal Estate from its previous owner, a Connecticut hedge-fund family."
  },
  {
    "event_id": "EVT.00760",
    "asset_id": "AST.SEDGEMOOR.RE1",
    "seq": 2,
    "date": "2021-09-24",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Greenwich Coastal Estate's main house and boathouse were renovated with updated waterfront amenities."
  },
  {
    "event_id": "EVT.00761",
    "asset_id": "AST.SEDGEMOOR.RE1",
    "seq": 3,
    "date": "2024-12-18",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Sedgemoor Family Office Trust",
    "role_ref_resolved_id": "PRIN.SEDGEMOOR",
    "note": "The Greenwich Coastal Estate was transferred into the Sedgemoor Family Office Trust."
  },
  {
    "event_id": "EVT.00762",
    "asset_id": "AST.SEDGEMOOR.AUTO",
    "seq": 1,
    "date": "2019-06-03",
    "event_type": "acquired",
    "role_ref_hint": "Henrik Solberg",
    "role_ref_resolved_id": "ROLE.SEDGEMOOR.COLL",
    "note": "Henrik Solberg acquired a Gullwing-tier period classic to anchor the family's four-car collection."
  },
  {
    "event_id": "EVT.00763",
    "asset_id": "AST.SEDGEMOOR.AUTO",
    "seq": 2,
    "date": "2021-02-27",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A 918/P1-tier modern hypercar was added to the collection alongside the anchor classic."
  },
  {
    "event_id": "EVT.00764",
    "asset_id": "AST.SEDGEMOOR.AUTO",
    "seq": 3,
    "date": "2023-08-15",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Two blue-chip modern exotics were added, completing the four-car curated collection."
  },
  {
    "event_id": "EVT.00765",
    "asset_id": "AST.GRANTHAM.YACHT",
    "seq": 1,
    "date": "2019-01-28",
    "event_type": "acquired",
    "role_ref_hint": "Nathaniel Osei",
    "role_ref_resolved_id": "ROLE.GRANTHAM.OWNE",
    "note": "Nathaniel Osei acquired M/Y Gale, a 50m full-custom superyacht, from its previous owner, a Middle Eastern royal family's holding company."
  },
  {
    "event_id": "EVT.00766",
    "asset_id": "AST.GRANTHAM.YACHT",
    "seq": 2,
    "date": "2022-05-09",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Gale underwent a major refit of its engine room and exterior paint system."
  },
  {
    "event_id": "EVT.00767",
    "asset_id": "AST.GRANTHAM.YACHT",
    "seq": 3,
    "date": "2025-07-01",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Gale entered a limited summer charter program in the Balearics."
  },
  {
    "event_id": "EVT.00768",
    "asset_id": "AST.GRANTHAM.AVI",
    "seq": 1,
    "date": "2020-02-14",
    "event_type": "acquired",
    "role_ref_hint": "Ingrid Solheim",
    "role_ref_resolved_id": null,
    "note": "Ingrid Solheim acquired the family's Gulfstream G650 directly through Gulfstream's pre-owned aircraft program."
  },
  {
    "event_id": "EVT.00769",
    "asset_id": "AST.GRANTHAM.AVI",
    "seq": 2,
    "date": "2023-06-20",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The G650's cabin was refurbished and its forward galley upgraded during scheduled maintenance."
  },
  {
    "event_id": "EVT.00770",
    "asset_id": "AST.GRANTHAM.AVI",
    "seq": 3,
    "date": "2025-09-12",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The G650 was refinanced under a new aircraft-backed credit facility."
  },
  {
    "event_id": "EVT.00771",
    "asset_id": "AST.GRANTHAM.AUTO",
    "seq": 1,
    "date": "2018-09-08",
    "event_type": "acquired",
    "role_ref_hint": "Marcus Chen",
    "role_ref_resolved_id": "ROLE.GRANTHAM.COLL",
    "note": "Marcus Chen acquired a Gullwing-tier period classic to anchor the family's eight-car collection."
  },
  {
    "event_id": "EVT.00772",
    "asset_id": "AST.GRANTHAM.AUTO",
    "seq": 2,
    "date": "2020-04-17",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A modern hypercar was added to the collection alongside the anchor classic."
  },
  {
    "event_id": "EVT.00773",
    "asset_id": "AST.GRANTHAM.AUTO",
    "seq": 3,
    "date": "2022-11-26",
    "event_type": "acquired",
    "role_ref_hint": "Farida Haidari",
    "role_ref_resolved_id": null,
    "note": "Farida Haidari acquired an F40-tier trophy classic from a European collector to broaden the collection's rarity spread."
  },
  {
    "event_id": "EVT.00774",
    "asset_id": "AST.GRANTHAM.AUTO",
    "seq": 4,
    "date": "2024-08-03",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A lower-tier unit was sold out of the eight-car collection to make room for a Chiron-tier hypercar acquisition."
  },
  {
    "event_id": "EVT.00775",
    "asset_id": "AST.OGILVIE.YACHT",
    "seq": 1,
    "date": "2019-04-12",
    "event_type": "acquired",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Ogilvie Family Office acquired M/Y Vesper from her prior owner, a Monaco-based shipping family, through the Antibes brokerage market."
  },
  {
    "event_id": "EVT.00776",
    "asset_id": "AST.OGILVIE.YACHT",
    "seq": 2,
    "date": "2021-09-01",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Vesper underwent a major refit at a Genoa yard, replacing her exterior teak decking and upgrading the stabilizer system."
  },
  {
    "event_id": "EVT.00777",
    "asset_id": "AST.OGILVIE.YACHT",
    "seq": 3,
    "date": "2023-06-15",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Julian Ferreira",
    "role_ref_resolved_id": "ROLE.OGILVIE.OWNE",
    "note": "Julian Ferreira authorized Vesper's entry into limited seasonal charter to offset operating costs."
  },
  {
    "event_id": "EVT.00778",
    "asset_id": "AST.OGILVIE.YACHT",
    "seq": 4,
    "date": "2025-11-20",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Ogilvie Family Office",
    "role_ref_resolved_id": "PRIN.OGILVIE",
    "note": "Ownership of Vesper was consolidated under the Ogilvie Family Office holding structure ahead of the 2026 policy renewal."
  },
  {
    "event_id": "EVT.00779",
    "asset_id": "AST.OGILVIE.AVI",
    "seq": 1,
    "date": "2019-02-10",
    "event_type": "acquired",
    "role_ref_hint": "Ogilvie Family Office",
    "role_ref_resolved_id": "PRIN.OGILVIE",
    "note": "Ogilvie Family Office acquired the Challenger 350 through a fractional-to-whole buyout from a used-inventory listing."
  },
  {
    "event_id": "EVT.00780",
    "asset_id": "AST.OGILVIE.AVI",
    "seq": 2,
    "date": "2022-05-01",
    "event_type": "avionics_upgrade",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Aircraft received a cockpit avionics upgrade to maintain compliance with updated ADS-B mandates."
  },
  {
    "event_id": "EVT.00781",
    "asset_id": "AST.OGILVIE.AVI",
    "seq": 3,
    "date": "2024-08-01",
    "event_type": "major_overhaul",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Completed a scheduled engine inspection and cabin interior refresh at Bombardier's service center."
  },
  {
    "event_id": "EVT.00782",
    "asset_id": "AST.OGILVIE.AVI",
    "seq": 4,
    "date": "2026-01-15",
    "event_type": "insured_value_reassessed",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Insured hull value reassessed ahead of the 2026 policy renewal, reflecting current market comps for mid-hour Challenger 350s."
  },
  {
    "event_id": "EVT.00783",
    "asset_id": "AST.OGILVIE.RE1",
    "seq": 1,
    "date": "2018-06-01",
    "event_type": "acquired",
    "role_ref_hint": "Ogilvie Family Office",
    "role_ref_resolved_id": "PRIN.OGILVIE",
    "note": "Ogilvie Family Office purchased the Newport waterfront estate as a seasonal residence."
  },
  {
    "event_id": "EVT.00784",
    "asset_id": "AST.OGILVIE.RE1",
    "seq": 2,
    "date": "2020-03-01",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Estate underwent a kitchen and boathouse renovation."
  },
  {
    "event_id": "EVT.00785",
    "asset_id": "AST.OGILVIE.RE1",
    "seq": 3,
    "date": "2023-09-01",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Ogilvie Family Office",
    "role_ref_resolved_id": "PRIN.OGILVIE",
    "note": "Property title transferred into a family trust structure for estate planning purposes."
  },
  {
    "event_id": "EVT.00786",
    "asset_id": "AST.OGILVIE.RE1",
    "seq": 4,
    "date": "2025-05-01",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Estate refinanced at prevailing rates to fund additional collection acquisitions."
  },
  {
    "event_id": "EVT.00787",
    "asset_id": "AST.OGILVIE.AUTO",
    "seq": 1,
    "date": "2018-11-01",
    "event_type": "acquired",
    "role_ref_hint": "Ogilvie Family Office",
    "role_ref_resolved_id": "PRIN.OGILVIE",
    "note": "Ogilvie Family Office began assembling the collection with the purchase of a 1963 Mercedes-Benz 300SL Gullwing."
  },
  {
    "event_id": "EVT.00788",
    "asset_id": "AST.OGILVIE.AUTO",
    "seq": 2,
    "date": "2020-07-01",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Collection expanded with the addition of a Porsche 918 Spyder hypercar."
  },
  {
    "event_id": "EVT.00789",
    "asset_id": "AST.OGILVIE.AUTO",
    "seq": 3,
    "date": "2022-02-01",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A second period classic, a Shelby Cobra 427, was added to the garage."
  },
  {
    "event_id": "EVT.00790",
    "asset_id": "AST.OGILVIE.AUTO",
    "seq": 4,
    "date": "2024-10-01",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Collection rounded out with a limited-run Lamborghini Aventador SVJ, bringing the roster to six vehicles."
  },
  {
    "event_id": "EVT.00791",
    "asset_id": "AST.KILLIGREW.YACHT",
    "seq": 1,
    "date": "2018-05-10",
    "event_type": "acquired",
    "role_ref_hint": "Killigrew Family Trust",
    "role_ref_resolved_id": "PRIN.KILLIGREW",
    "note": "Killigrew Family Trust acquired M/Y Solace directly from her builder upon delivery."
  },
  {
    "event_id": "EVT.00792",
    "asset_id": "AST.KILLIGREW.YACHT",
    "seq": 2,
    "date": "2021-01-01",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Solace completed a major refit at L\u00fcrssen's Bremen facility, including a new tender garage and upgraded stabilization system."
  },
  {
    "event_id": "EVT.00793",
    "asset_id": "AST.KILLIGREW.YACHT",
    "seq": 3,
    "date": "2023-11-01",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Grace Whitfield",
    "role_ref_resolved_id": null,
    "note": "Grace Whitfield approved limited charter availability for Solace during the Mediterranean season."
  },
  {
    "event_id": "EVT.00794",
    "asset_id": "AST.KILLIGREW.YACHT",
    "seq": 4,
    "date": "2025-06-01",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Killigrew Family Trust",
    "role_ref_resolved_id": "PRIN.KILLIGREW",
    "note": "Vessel ownership consolidated under the Killigrew Family Trust structure ahead of insurance renewal."
  },
  {
    "event_id": "EVT.00795",
    "asset_id": "AST.KILLIGREW.AVI",
    "seq": 1,
    "date": "2020-03-15",
    "event_type": "acquired",
    "role_ref_hint": "Killigrew Family Trust",
    "role_ref_resolved_id": "PRIN.KILLIGREW",
    "note": "Killigrew Family Trust acquired a new-build Challenger 350 directly from Bombardier."
  },
  {
    "event_id": "EVT.00796",
    "asset_id": "AST.KILLIGREW.AVI",
    "seq": 2,
    "date": "2022-09-01",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Aircraft received a cabin interior refresh and updated connectivity package."
  },
  {
    "event_id": "EVT.00797",
    "asset_id": "AST.KILLIGREW.AVI",
    "seq": 3,
    "date": "2024-04-01",
    "event_type": "major_overhaul",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Completed a scheduled heavy maintenance check at Bombardier's service center in Tucson."
  },
  {
    "event_id": "EVT.00798",
    "asset_id": "AST.KILLIGREW.AVI",
    "seq": 4,
    "date": "2026-02-01",
    "event_type": "insured_value_reassessed",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Insured hull value reassessed for the 2026 renewal cycle reflecting the aircraft's low total airframe hours."
  },
  {
    "event_id": "EVT.00799",
    "asset_id": "AST.KILLIGREW.RE1",
    "seq": 1,
    "date": "2018-08-01",
    "event_type": "acquired",
    "role_ref_hint": "Killigrew Family Trust",
    "role_ref_resolved_id": "PRIN.KILLIGREW",
    "note": "Killigrew Family Trust purchased the Lake Como estate as a summer residence."
  },
  {
    "event_id": "EVT.00800",
    "asset_id": "AST.KILLIGREW.RE1",
    "seq": 2,
    "date": "2021-05-01",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Estate underwent full landscaping work and villa restoration."
  },
  {
    "event_id": "EVT.00801",
    "asset_id": "AST.KILLIGREW.RE1",
    "seq": 3,
    "date": "2023-07-01",
    "event_type": "acquired_adjacent_parcel",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Additional lakefront parcel acquired to expand the estate's grounds and privacy buffer."
  },
  {
    "event_id": "EVT.00802",
    "asset_id": "AST.KILLIGREW.RE1",
    "seq": 4,
    "date": "2025-09-01",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Killigrew Family Trust",
    "role_ref_resolved_id": "PRIN.KILLIGREW",
    "note": "Property retitled under the Killigrew Family Trust for succession planning."
  },
  {
    "event_id": "EVT.00803",
    "asset_id": "AST.KILLIGREW.AUTO",
    "seq": 1,
    "date": "2018-04-01",
    "event_type": "acquired",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Collection founded with acquisition of a Ferrari F40 as anchor piece."
  },
  {
    "event_id": "EVT.00804",
    "asset_id": "AST.KILLIGREW.AUTO",
    "seq": 2,
    "date": "2020-10-01",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Added a Bugatti Veyron to the collection's modern hypercar bench."
  },
  {
    "event_id": "EVT.00805",
    "asset_id": "AST.KILLIGREW.AUTO",
    "seq": 3,
    "date": "2022-06-01",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Porsche 993 RS and McLaren 765LT added, deepening both classic and modern rosters."
  },
  {
    "event_id": "EVT.00806",
    "asset_id": "AST.KILLIGREW.AUTO",
    "seq": 4,
    "date": "2025-01-01",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Collection reached eight vehicles with the addition of a Mercedes-Benz 300SL Gullwing."
  },
  {
    "event_id": "EVT.00807",
    "asset_id": "AST.DEVEREUX.YACHT",
    "seq": 1,
    "date": "2019-06-01",
    "event_type": "acquired",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Devereux Holdings purchased M/Y Juno from her original owner, a Florida-based yacht dealer's demonstrator fleet."
  },
  {
    "event_id": "EVT.00808",
    "asset_id": "AST.DEVEREUX.YACHT",
    "seq": 2,
    "date": "2021-08-01",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Juno's flybridge electronics and navigation suite were upgraded."
  },
  {
    "event_id": "EVT.00809",
    "asset_id": "AST.DEVEREUX.YACHT",
    "seq": 3,
    "date": "2024-03-01",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Interior refit completed, including new upholstery and salon furnishings."
  },
  {
    "event_id": "EVT.00810",
    "asset_id": "AST.DEVEREUX.YACHT",
    "seq": 4,
    "date": "2025-12-01",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Vessel refinanced to reflect updated insured value ahead of the 2026 renewal."
  },
  {
    "event_id": "EVT.00811",
    "asset_id": "AST.DEVEREUX.RE1",
    "seq": 1,
    "date": "2018-09-01",
    "event_type": "acquired",
    "role_ref_hint": "Devereux Holdings",
    "role_ref_resolved_id": "PRIN.DEVEREUX",
    "note": "Devereux Holdings acquired the Miami lakefront residence as a primary family residence."
  },
  {
    "event_id": "EVT.00812",
    "asset_id": "AST.DEVEREUX.RE1",
    "seq": 2,
    "date": "2020-11-01",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Residence underwent a full kitchen and dock renovation."
  },
  {
    "event_id": "EVT.00813",
    "asset_id": "AST.DEVEREUX.RE1",
    "seq": 3,
    "date": "2022-05-01",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Devereux Holdings",
    "role_ref_resolved_id": "PRIN.DEVEREUX",
    "note": "Property retitled under Devereux Holdings for estate planning purposes."
  },
  {
    "event_id": "EVT.00814",
    "asset_id": "AST.DEVEREUX.RE1",
    "seq": 4,
    "date": "2025-08-01",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Residence refinanced to help fund the family's collector car acquisitions."
  },
  {
    "event_id": "EVT.00815",
    "asset_id": "AST.DEVEREUX.AUTO",
    "seq": 1,
    "date": "2019-02-01",
    "event_type": "acquired",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Collection begun with purchase of a Jaguar E-Type as founding classic."
  },
  {
    "event_id": "EVT.00816",
    "asset_id": "AST.DEVEREUX.AUTO",
    "seq": 2,
    "date": "2021-06-01",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "McLaren 765LT added as the collection's first modern exotic."
  },
  {
    "event_id": "EVT.00817",
    "asset_id": "AST.DEVEREUX.AUTO",
    "seq": 3,
    "date": "2023-09-01",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Porsche 918 Spyder added, introducing the collection's hybrid hypercar."
  },
  {
    "event_id": "EVT.00818",
    "asset_id": "AST.DEVEREUX.AUTO",
    "seq": 4,
    "date": "2025-04-01",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Shelby Cobra 427 added, rounding the collection to six vehicles."
  },
  {
    "event_id": "EVT.00819",
    "asset_id": "AST.ALDERTON.YACHT",
    "seq": 1,
    "date": "2018-03-01",
    "event_type": "acquired",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Alderton Family Office Trust acquired M/Y Ember from her prior owner, a Middle Eastern royal family, through a private brokered sale."
  },
  {
    "event_id": "EVT.00820",
    "asset_id": "AST.ALDERTON.YACHT",
    "seq": 2,
    "date": "2020-10-01",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Ember completed a major refit at Feadship's Kaag Island yard, including a new paint scheme and upgraded guest suite."
  },
  {
    "event_id": "EVT.00821",
    "asset_id": "AST.ALDERTON.YACHT",
    "seq": 3,
    "date": "2023-05-01",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Thaddeus Okonkwo",
    "role_ref_resolved_id": "ROLE.ALDERTON.OWNE",
    "note": "Thaddeus Okonkwo approved seasonal charter availability to offset operating costs."
  },
  {
    "event_id": "EVT.00822",
    "asset_id": "AST.ALDERTON.YACHT",
    "seq": 4,
    "date": "2025-10-01",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Alderton Family Office Trust",
    "role_ref_resolved_id": "PRIN.ALDERTON",
    "note": "Vessel title consolidated under the Alderton Family Office Trust ahead of the 2026 policy renewal."
  },
  {
    "event_id": "EVT.00823",
    "asset_id": "AST.ALDERTON.RE1",
    "seq": 1,
    "date": "2018-07-01",
    "event_type": "acquired",
    "role_ref_hint": "Alderton Family Office Trust",
    "role_ref_resolved_id": "PRIN.ALDERTON",
    "note": "Alderton Family Office Trust purchased the Big Sky estate as a family retreat."
  },
  {
    "event_id": "EVT.00824",
    "asset_id": "AST.ALDERTON.RE1",
    "seq": 2,
    "date": "2021-02-01",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Estate underwent a full main-residence renovation and guest lodge addition."
  },
  {
    "event_id": "EVT.00825",
    "asset_id": "AST.ALDERTON.RE1",
    "seq": 3,
    "date": "2023-11-01",
    "event_type": "acquired_adjacent_parcel",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Adjacent parcel acquired to extend the estate's coastal frontage."
  },
  {
    "event_id": "EVT.00826",
    "asset_id": "AST.ALDERTON.RE1",
    "seq": 4,
    "date": "2026-01-01",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Alderton Family Office Trust",
    "role_ref_resolved_id": "PRIN.ALDERTON",
    "note": "Property retitled under the Alderton Family Office Trust for the 2026 policy renewal."
  },
  {
    "event_id": "EVT.00827",
    "asset_id": "AST.ALDERTON.AUTO",
    "seq": 1,
    "date": "2018-05-01",
    "event_type": "acquired",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Collection founded with acquisition of a Ferrari Enzo as anchor hypercar."
  },
  {
    "event_id": "EVT.00828",
    "asset_id": "AST.ALDERTON.AUTO",
    "seq": 2,
    "date": "2020-08-01",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Mercedes-Benz Gullwing added as the collection's period classic centerpiece."
  },
  {
    "event_id": "EVT.00829",
    "asset_id": "AST.ALDERTON.AUTO",
    "seq": 3,
    "date": "2022-12-01",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Bugatti Chiron added, deepening the modern hypercar bench."
  },
  {
    "event_id": "EVT.00830",
    "asset_id": "AST.ALDERTON.AUTO",
    "seq": 4,
    "date": "2025-06-01",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Collection reached eight vehicles with the addition of a Porsche Carrera GT."
  },
  {
    "event_id": "EVT.00831",
    "asset_id": "AST.INGLEWOOD.YACHT",
    "seq": 1,
    "date": "2019-04-01",
    "event_type": "acquired",
    "role_ref_hint": "Inglewood Family Partnership",
    "role_ref_resolved_id": "PRIN.INGLEWOOD",
    "note": "Inglewood Family Partnership acquired M/Y Infinite directly from her builder upon delivery."
  },
  {
    "event_id": "EVT.00832",
    "asset_id": "AST.INGLEWOOD.YACHT",
    "seq": 2,
    "date": "2022-03-01",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Infinite completed an interior refit and upgraded entertainment systems at Oceanco's Alblasserdam yard."
  },
  {
    "event_id": "EVT.00833",
    "asset_id": "AST.INGLEWOOD.YACHT",
    "seq": 3,
    "date": "2024-07-01",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Sofia Alvarez",
    "role_ref_resolved_id": "ROLE.INGLEWOOD.OWNE",
    "note": "Sofia Alvarez authorized limited charter placement for the Caribbean season."
  },
  {
    "event_id": "EVT.00834",
    "asset_id": "AST.INGLEWOOD.YACHT",
    "seq": 4,
    "date": "2026-02-01",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Inglewood Family Partnership",
    "role_ref_resolved_id": "PRIN.INGLEWOOD",
    "note": "Vessel ownership consolidated under the Inglewood Family Partnership structure ahead of the 2026 renewal."
  },
  {
    "event_id": "EVT.00835",
    "asset_id": "AST.INGLEWOOD.AVI",
    "seq": 1,
    "date": "2019-01-01",
    "event_type": "acquired",
    "role_ref_hint": "Inglewood Family Partnership",
    "role_ref_resolved_id": "PRIN.INGLEWOOD",
    "note": "Inglewood Family Partnership acquired the Global 6000 as a pre-owned aircraft from a European charter operator."
  },
  {
    "event_id": "EVT.00836",
    "asset_id": "AST.INGLEWOOD.AVI",
    "seq": 2,
    "date": "2021-11-01",
    "event_type": "major_overhaul",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Aircraft completed a scheduled heavy maintenance check and cabin refresh."
  },
  {
    "event_id": "EVT.00837",
    "asset_id": "AST.INGLEWOOD.AVI",
    "seq": 3,
    "date": "2023-06-01",
    "event_type": "avionics_upgrade",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Cockpit avionics upgraded to maintain ADS-B and CPDLC compliance for transatlantic operations."
  },
  {
    "event_id": "EVT.00838",
    "asset_id": "AST.INGLEWOOD.AVI",
    "seq": 4,
    "date": "2025-09-01",
    "event_type": "insured_value_reassessed",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Insured hull value reassessed downward for the 2026 renewal, reflecting typical Global 6000 depreciation since production ended."
  },
  {
    "event_id": "EVT.00839",
    "asset_id": "AST.INGLEWOOD.RE1",
    "seq": 1,
    "date": "2018-06-01",
    "event_type": "acquired",
    "role_ref_hint": "Inglewood Family Partnership",
    "role_ref_resolved_id": "PRIN.INGLEWOOD",
    "note": "Inglewood Family Partnership purchased the Martha's Vineyard residence as a summer retreat."
  },
  {
    "event_id": "EVT.00840",
    "asset_id": "AST.INGLEWOOD.RE1",
    "seq": 2,
    "date": "2020-09-01",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Residence underwent a full main-house renovation and guest cottage addition."
  },
  {
    "event_id": "EVT.00841",
    "asset_id": "AST.INGLEWOOD.RE1",
    "seq": 3,
    "date": "2023-04-01",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Inglewood Family Partnership",
    "role_ref_resolved_id": "PRIN.INGLEWOOD",
    "note": "Property retitled under the Inglewood Family Partnership for estate planning purposes."
  },
  {
    "event_id": "EVT.00842",
    "asset_id": "AST.INGLEWOOD.RE1",
    "seq": 4,
    "date": "2025-11-01",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Residence refinanced at prevailing rates ahead of the 2026 policy renewal."
  },
  {
    "event_id": "EVT.00843",
    "asset_id": "AST.INGLEWOOD.AUTO",
    "seq": 1,
    "date": "2018-03-01",
    "event_type": "acquired",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Collection founded with acquisition of a Ferrari 288 GTO as the anchor classic."
  },
  {
    "event_id": "EVT.00844",
    "asset_id": "AST.INGLEWOOD.AUTO",
    "seq": 2,
    "date": "2020-05-01",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Collection expanded significantly with the addition of a McLaren F1 and a matched pair of Porsche 911s."
  },
  {
    "event_id": "EVT.00845",
    "asset_id": "AST.INGLEWOOD.AUTO",
    "seq": 3,
    "date": "2022-09-01",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "LaFerrari and Bugatti Chiron added, establishing the collection's modern hypercar bench."
  },
  {
    "event_id": "EVT.00846",
    "asset_id": "AST.INGLEWOOD.AUTO",
    "seq": 4,
    "date": "2025-03-01",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Collection reached eighteen vehicles with the addition of a Mercedes-Benz Gullwing and a Lamborghini Miura."
  },
  {
    "event_id": "EVT.00847",
    "asset_id": "AST.KILBRIDE.YACHT",
    "seq": 1,
    "date": "2018-03-12",
    "event_type": "acquired",
    "role_ref_hint": "Desmond Hartley",
    "role_ref_resolved_id": null,
    "note": "Desmond Hartley, on behalf of the Kilbride Family Trust, acquired M/Y Opaline from her previous owner, a German shipping family exiting the segment."
  },
  {
    "event_id": "EVT.00848",
    "asset_id": "AST.KILBRIDE.YACHT",
    "seq": 2,
    "date": "2021-06-20",
    "event_type": "major_refit",
    "role_ref_hint": "Kilbride Family Trust",
    "role_ref_resolved_id": "PRIN.KILBRIDE",
    "note": "The Kilbride Family Trust commissioned a refit of M/Y Opaline's exterior teak decking and navigation systems ahead of the Mediterranean season."
  },
  {
    "event_id": "EVT.00849",
    "asset_id": "AST.KILBRIDE.YACHT",
    "seq": 3,
    "date": "2023-09-05",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Ingrid Solberg",
    "role_ref_resolved_id": null,
    "note": "Ingrid Solberg, acting as family office advisor, authorized listing M/Y Opaline for limited third-party charter to offset annual carrying costs."
  },
  {
    "event_id": "EVT.00850",
    "asset_id": "AST.KILBRIDE.YACHT",
    "seq": 4,
    "date": "2025-11-14",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Priyanka Rao",
    "role_ref_resolved_id": null,
    "note": "Ownership of M/Y Opaline was formally consolidated under the Kilbride Family Trust as part of a broader estate restructuring led by Priyanka Rao."
  },
  {
    "event_id": "EVT.00851",
    "asset_id": "AST.KILBRIDE.AVI",
    "seq": 1,
    "date": "2019-02-08",
    "event_type": "acquired",
    "role_ref_hint": "Desmond Hartley",
    "role_ref_resolved_id": null,
    "note": "Desmond Hartley acquired the Bombardier Global 6000 from a Swiss private aviation broker to support the family's transatlantic travel."
  },
  {
    "event_id": "EVT.00852",
    "asset_id": "AST.KILBRIDE.AVI",
    "seq": 2,
    "date": "2022-05-17",
    "event_type": "major_refit",
    "role_ref_hint": "Tomas Nowak",
    "role_ref_resolved_id": "ROLE.KILBRIDE.CHIE",
    "note": "The aircraft underwent a cabin refurbishment and avionics upgrade coordinated by Tomas Nowak to extend its service life."
  },
  {
    "event_id": "EVT.00853",
    "asset_id": "AST.KILBRIDE.AVI",
    "seq": 3,
    "date": "2024-10-02",
    "event_type": "refinanced",
    "role_ref_hint": "Kilbride Family Trust",
    "role_ref_resolved_id": "PRIN.KILBRIDE",
    "note": "The Kilbride Family Trust refinanced the aircraft's financing arrangement as part of a wider fleet consolidation."
  },
  {
    "event_id": "EVT.00854",
    "asset_id": "AST.KILBRIDE.RE1",
    "seq": 1,
    "date": "2018-07-01",
    "event_type": "acquired",
    "role_ref_hint": "Desmond Hartley",
    "role_ref_resolved_id": null,
    "note": "Desmond Hartley purchased the Nantucket Historic Estate from its previous owner, a longtime Boston merchant family, as a seasonal retreat."
  },
  {
    "event_id": "EVT.00855",
    "asset_id": "AST.KILBRIDE.RE1",
    "seq": 2,
    "date": "2020-08-19",
    "event_type": "renovated",
    "role_ref_hint": "Ingrid Solberg",
    "role_ref_resolved_id": null,
    "note": "Ingrid Solberg oversaw a preservation-compliant renovation of the estate's main residence and guest cottage."
  },
  {
    "event_id": "EVT.00856",
    "asset_id": "AST.KILBRIDE.RE1",
    "seq": 3,
    "date": "2023-06-11",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Kilbride Family Trust",
    "role_ref_resolved_id": "PRIN.KILBRIDE",
    "note": "The property was retitled under the Kilbride Family Trust for estate-planning purposes."
  },
  {
    "event_id": "EVT.00857",
    "asset_id": "AST.KILBRIDE.RE2",
    "seq": 1,
    "date": "2020-04-22",
    "event_type": "acquired",
    "role_ref_hint": "Priyanka Rao",
    "role_ref_resolved_id": null,
    "note": "Priyanka Rao acquired the Malibu Villa as a West Coast base for the family, purchasing from a retiring entertainment-industry owner."
  },
  {
    "event_id": "EVT.00858",
    "asset_id": "AST.KILBRIDE.RE2",
    "seq": 2,
    "date": "2022-11-30",
    "event_type": "renovated",
    "role_ref_hint": "Amara Chukwu",
    "role_ref_resolved_id": null,
    "note": "The villa's ocean-facing terrace and pool were renovated under Amara Chukwu's direction."
  },
  {
    "event_id": "EVT.00859",
    "asset_id": "AST.DEVENPORT.YACHT",
    "seq": 1,
    "date": "2018-09-14",
    "event_type": "acquired",
    "role_ref_hint": "Marcus Whitfield",
    "role_ref_resolved_id": null,
    "note": "Marcus Whitfield acquired M/Y Crescendo from her original owner, a European shipyard-affiliated group, shortly after her delivery."
  },
  {
    "event_id": "EVT.00860",
    "asset_id": "AST.DEVENPORT.YACHT",
    "seq": 2,
    "date": "2021-03-09",
    "event_type": "major_refit",
    "role_ref_hint": "Devenport Family Office",
    "role_ref_resolved_id": "PRIN.DEVENPORT",
    "note": "The Devenport Family Office commissioned a major refit of M/Y Crescendo including a new tender garage and interior redesign."
  },
  {
    "event_id": "EVT.00861",
    "asset_id": "AST.DEVENPORT.YACHT",
    "seq": 3,
    "date": "2023-07-25",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Rosalind Achterberg",
    "role_ref_resolved_id": null,
    "note": "Rosalind Achterberg authorized limited seasonal charter availability for M/Y Crescendo to offset the vessel's operating costs."
  },
  {
    "event_id": "EVT.00862",
    "asset_id": "AST.DEVENPORT.YACHT",
    "seq": 4,
    "date": "2025-05-02",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Sanjay Mehta",
    "role_ref_resolved_id": null,
    "note": "Ownership of M/Y Crescendo was consolidated under the Devenport Family Office as part of a multi-generational succession plan led by Sanjay Mehta."
  },
  {
    "event_id": "EVT.00863",
    "asset_id": "AST.DEVENPORT.RE1",
    "seq": 1,
    "date": "2019-01-15",
    "event_type": "acquired",
    "role_ref_hint": "Marcus Whitfield",
    "role_ref_resolved_id": null,
    "note": "Marcus Whitfield purchased the Palm Beach Vineyard Estate from its previous owner, a Florida citrus and agriculture family."
  },
  {
    "event_id": "EVT.00864",
    "asset_id": "AST.DEVENPORT.RE1",
    "seq": 2,
    "date": "2021-10-08",
    "event_type": "renovated",
    "role_ref_hint": "Giulia Ferraro",
    "role_ref_resolved_id": null,
    "note": "Giulia Ferraro directed a full renovation of the estate's main house and vineyard outbuildings."
  },
  {
    "event_id": "EVT.00865",
    "asset_id": "AST.DEVENPORT.RE1",
    "seq": 3,
    "date": "2024-02-27",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Devenport Family Office",
    "role_ref_resolved_id": "PRIN.DEVENPORT",
    "note": "The estate was retitled under the Devenport Family Office for estate-planning purposes."
  },
  {
    "event_id": "EVT.00866",
    "asset_id": "AST.DEVENPORT.AUTO",
    "seq": 1,
    "date": "2019-06-04",
    "event_type": "acquired",
    "role_ref_hint": "Devon Blackwood",
    "role_ref_resolved_id": null,
    "note": "Devon Blackwood began assembling the collection, acquiring its first classic and modern-exotic anchor pieces."
  },
  {
    "event_id": "EVT.00867",
    "asset_id": "AST.DEVENPORT.AUTO",
    "seq": 2,
    "date": "2022-04-19",
    "event_type": "expanded_collection",
    "role_ref_hint": "Keiko Tanaka",
    "role_ref_resolved_id": null,
    "note": "Keiko Tanaka expanded the collection with two additional limited-run modern exotics acquired at auction."
  },
  {
    "event_id": "EVT.00868",
    "asset_id": "AST.DEVENPORT.AUTO",
    "seq": 3,
    "date": "2024-09-30",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "Devon Blackwood",
    "role_ref_resolved_id": null,
    "note": "One earlier acquisition was deaccessioned and sold privately to fund the collection's newest addition."
  },
  {
    "event_id": "EVT.00869",
    "asset_id": "AST.ANCASTER.YACHT",
    "seq": 1,
    "date": "2018-02-11",
    "event_type": "acquired",
    "role_ref_hint": "Adrian Kowalski",
    "role_ref_resolved_id": "ROLE.ANCASTER.OWNE",
    "note": "Adrian Kowalski acquired M/Y Vesper from her previous owner, a Middle Eastern royal family divesting part of its fleet."
  },
  {
    "event_id": "EVT.00870",
    "asset_id": "AST.ANCASTER.YACHT",
    "seq": 2,
    "date": "2020-11-23",
    "event_type": "major_refit",
    "role_ref_hint": "Ancaster Holdings",
    "role_ref_resolved_id": "PRIN.ANCASTER",
    "note": "Ancaster Holdings commissioned a major refit of M/Y Vesper's propulsion and stabilization systems."
  },
  {
    "event_id": "EVT.00871",
    "asset_id": "AST.ANCASTER.YACHT",
    "seq": 3,
    "date": "2023-08-16",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Fatima Al-Rashid",
    "role_ref_resolved_id": null,
    "note": "Fatima Al-Rashid authorized seasonal charter operations for M/Y Vesper to offset carrying costs."
  },
  {
    "event_id": "EVT.00872",
    "asset_id": "AST.ANCASTER.YACHT",
    "seq": 4,
    "date": "2026-01-20",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Benedikt Lindqvist",
    "role_ref_resolved_id": null,
    "note": "Ownership of M/Y Vesper was consolidated under Ancaster Holdings as part of a corporate restructuring led by Benedikt Lindqvist."
  },
  {
    "event_id": "EVT.00873",
    "asset_id": "AST.ANCASTER.RE1",
    "seq": 1,
    "date": "2018-05-30",
    "event_type": "acquired",
    "role_ref_hint": "Adrian Kowalski",
    "role_ref_resolved_id": "ROLE.ANCASTER.OWNE",
    "note": "Adrian Kowalski purchased the Greenwich Ranch Estate from its previous owner, a retired Wall Street financier."
  },
  {
    "event_id": "EVT.00874",
    "asset_id": "AST.ANCASTER.RE1",
    "seq": 2,
    "date": "2021-09-14",
    "event_type": "renovated",
    "role_ref_hint": "Camille Dupont",
    "role_ref_resolved_id": null,
    "note": "Camille Dupont directed a renovation of the estate's main residence and equestrian facilities."
  },
  {
    "event_id": "EVT.00875",
    "asset_id": "AST.ANCASTER.RE1",
    "seq": 3,
    "date": "2024-06-05",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Ancaster Holdings",
    "role_ref_resolved_id": "PRIN.ANCASTER",
    "note": "The estate was retitled under Ancaster Holdings for estate-planning purposes."
  },
  {
    "event_id": "EVT.00876",
    "asset_id": "AST.NORTHCOTE.AVI",
    "seq": 1,
    "date": "2019-04-10",
    "event_type": "acquired",
    "role_ref_hint": "Sebastian Cole",
    "role_ref_resolved_id": null,
    "note": "Sebastian Cole acquired the Falcon 8X new from Dassault's delivery center to support the family's global travel needs."
  },
  {
    "event_id": "EVT.00877",
    "asset_id": "AST.NORTHCOTE.AVI",
    "seq": 2,
    "date": "2022-08-21",
    "event_type": "major_refit",
    "role_ref_hint": "Priscilla Mbeki",
    "role_ref_resolved_id": null,
    "note": "Priscilla Mbeki commissioned an interior cabin refresh and satellite communications upgrade for the Falcon 8X."
  },
  {
    "event_id": "EVT.00878",
    "asset_id": "AST.NORTHCOTE.AVI",
    "seq": 3,
    "date": "2025-03-13",
    "event_type": "refinanced",
    "role_ref_hint": "Northcote Family Office Trust",
    "role_ref_resolved_id": "PRIN.NORTHCOTE",
    "note": "The Northcote Family Office Trust refinanced the aircraft as part of a broader fleet-financing restructuring."
  },
  {
    "event_id": "EVT.00879",
    "asset_id": "AST.NORTHCOTE.RE1",
    "seq": 1,
    "date": "2018-12-05",
    "event_type": "acquired",
    "role_ref_hint": "Sebastian Cole",
    "role_ref_resolved_id": null,
    "note": "Sebastian Cole purchased the Aspen Lakefront Residence from its previous owner, a Colorado ski-industry pioneer."
  },
  {
    "event_id": "EVT.00880",
    "asset_id": "AST.NORTHCOTE.RE1",
    "seq": 2,
    "date": "2020-07-28",
    "event_type": "renovated",
    "role_ref_hint": "Douglas Farrow",
    "role_ref_resolved_id": "ROLE.NORTHCOTE.DIRE",
    "note": "Douglas Farrow directed a renovation of the residence's lakefront wing and guest quarters."
  },
  {
    "event_id": "EVT.00881",
    "asset_id": "AST.NORTHCOTE.RE1",
    "seq": 3,
    "date": "2023-11-17",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Northcote Family Office Trust",
    "role_ref_resolved_id": "PRIN.NORTHCOTE",
    "note": "The residence was retitled under the Northcote Family Office Trust for estate-planning purposes."
  },
  {
    "event_id": "EVT.00882",
    "asset_id": "AST.NORTHCOTE.AUTO",
    "seq": 1,
    "date": "2019-09-02",
    "event_type": "acquired",
    "role_ref_hint": "Helena Kristiansen",
    "role_ref_resolved_id": null,
    "note": "Helena Kristiansen assembled the initial collection, acquiring a period classic and a modern hypercar anchor piece."
  },
  {
    "event_id": "EVT.00883",
    "asset_id": "AST.NORTHCOTE.AUTO",
    "seq": 2,
    "date": "2023-02-14",
    "event_type": "expanded_collection",
    "role_ref_hint": "Anwar Siddiqui",
    "role_ref_resolved_id": null,
    "note": "Anwar Siddiqui expanded the collection with two additional blue-chip modern exotics acquired at auction."
  },
  {
    "event_id": "EVT.00884",
    "asset_id": "AST.VANDERMEER.YACHT",
    "seq": 1,
    "date": "2018-06-19",
    "event_type": "acquired",
    "role_ref_hint": "Nikolai Petrov",
    "role_ref_resolved_id": "ROLE.VANDERMEER.OWNE",
    "note": "Nikolai Petrov acquired M/Y Nomad from her previous owner, a Russian shipping and logistics family, shortly after her delivery."
  },
  {
    "event_id": "EVT.00885",
    "asset_id": "AST.VANDERMEER.YACHT",
    "seq": 2,
    "date": "2021-04-27",
    "event_type": "major_refit",
    "role_ref_hint": "Vandermeer Family Holdings",
    "role_ref_resolved_id": "PRIN.VANDERMEER",
    "note": "Vandermeer Family Holdings commissioned a major refit of M/Y Nomad's exterior paint and interior owner's suite."
  },
  {
    "event_id": "EVT.00886",
    "asset_id": "AST.VANDERMEER.YACHT",
    "seq": 3,
    "date": "2024-01-15",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Chiara Bellini",
    "role_ref_resolved_id": null,
    "note": "Chiara Bellini authorized limited high-end charter availability for M/Y Nomad during the family's off-season months."
  },
  {
    "event_id": "EVT.00887",
    "asset_id": "AST.VANDERMEER.YACHT",
    "seq": 4,
    "date": "2025-10-08",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Amina Bello",
    "role_ref_resolved_id": null,
    "note": "Ownership of M/Y Nomad was consolidated under Vandermeer Family Holdings as part of a succession plan led by Amina Bello."
  },
  {
    "event_id": "EVT.00888",
    "asset_id": "AST.VANDERMEER.AVI",
    "seq": 1,
    "date": "2019-03-01",
    "event_type": "acquired",
    "role_ref_hint": "Nikolai Petrov",
    "role_ref_resolved_id": "ROLE.VANDERMEER.OWNE",
    "note": "Nikolai Petrov acquired the Gulfstream G550 from a US-based aviation broker to support the family's international travel."
  },
  {
    "event_id": "EVT.00889",
    "asset_id": "AST.VANDERMEER.AVI",
    "seq": 2,
    "date": "2022-09-12",
    "event_type": "major_refit",
    "role_ref_hint": "Declan Murphy",
    "role_ref_resolved_id": "ROLE.VANDERMEER.APPR",
    "note": "Declan Murphy commissioned an avionics upgrade and cabin refurbishment for the G550."
  },
  {
    "event_id": "EVT.00890",
    "asset_id": "AST.VANDERMEER.AVI",
    "seq": 3,
    "date": "2025-06-25",
    "event_type": "refinanced",
    "role_ref_hint": "Vandermeer Family Holdings",
    "role_ref_resolved_id": "PRIN.VANDERMEER",
    "note": "Vandermeer Family Holdings refinanced the aircraft as part of a wider fleet consolidation."
  },
  {
    "event_id": "EVT.00891",
    "asset_id": "AST.VANDERMEER.RE1",
    "seq": 1,
    "date": "2018-10-09",
    "event_type": "acquired",
    "role_ref_hint": "Nikolai Petrov",
    "role_ref_resolved_id": "ROLE.VANDERMEER.OWNE",
    "note": "Nikolai Petrov purchased the Newport Ranch Estate from its previous owner, a New England textile-manufacturing family."
  },
  {
    "event_id": "EVT.00892",
    "asset_id": "AST.VANDERMEER.RE1",
    "seq": 2,
    "date": "2021-05-16",
    "event_type": "renovated",
    "role_ref_hint": "Soo-jin Park",
    "role_ref_resolved_id": null,
    "note": "Soo-jin Park directed a renovation of the estate's main residence and coastal gardens."
  },
  {
    "event_id": "EVT.00893",
    "asset_id": "AST.VANDERMEER.RE1",
    "seq": 3,
    "date": "2024-03-22",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Vandermeer Family Holdings",
    "role_ref_resolved_id": "PRIN.VANDERMEER",
    "note": "The estate was retitled under Vandermeer Family Holdings for estate-planning purposes."
  },
  {
    "event_id": "EVT.00894",
    "asset_id": "AST.VANDERMEER.AUTO",
    "seq": 1,
    "date": "2020-01-20",
    "event_type": "acquired",
    "role_ref_hint": "Tobias Reinhardt",
    "role_ref_resolved_id": null,
    "note": "Tobias Reinhardt assembled the initial collection, acquiring a period classic and a modern hypercar anchor piece."
  },
  {
    "event_id": "EVT.00895",
    "asset_id": "AST.VANDERMEER.AUTO",
    "seq": 2,
    "date": "2023-05-11",
    "event_type": "expanded_collection",
    "role_ref_hint": "Chiara Bellini",
    "role_ref_resolved_id": null,
    "note": "Chiara Bellini expanded the collection with an additional limited-run modern exotic acquired at auction."
  },
  {
    "event_id": "EVT.00896",
    "asset_id": "AST.WHITMORE.AVI",
    "seq": 1,
    "date": "2018-05-14",
    "event_type": "acquired",
    "role_ref_hint": "Nathaniel Cross",
    "role_ref_resolved_id": "ROLE.WHITMORE.OWNE",
    "note": "Whitmore Family Office, represented by Nathaniel Cross, acquired the G450 from a Geneva-based charter fleet to support transatlantic family travel."
  },
  {
    "event_id": "EVT.00897",
    "asset_id": "AST.WHITMORE.AVI",
    "seq": 2,
    "date": "2020-09-02",
    "event_type": "avionics_upgrade",
    "role_ref_hint": "Nathaniel Cross",
    "role_ref_resolved_id": "ROLE.WHITMORE.OWNE",
    "note": "Nathaniel Cross authorized a full avionics upgrade to meet new European ADS-B datalink mandates."
  },
  {
    "event_id": "EVT.00898",
    "asset_id": "AST.WHITMORE.AVI",
    "seq": 3,
    "date": "2023-02-18",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Cabin interior refurbished and engines sent for scheduled overhaul during a planned maintenance layover."
  },
  {
    "event_id": "EVT.00899",
    "asset_id": "AST.WHITMORE.AVI",
    "seq": 4,
    "date": "2025-06-30",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Whitmore Family Office",
    "role_ref_resolved_id": "PRIN.WHITMORE",
    "note": "Aircraft title transferred into the Whitmore Family Office holding structure as part of a broader estate-planning restructuring."
  },
  {
    "event_id": "EVT.00900",
    "asset_id": "AST.WHITMORE.RE1",
    "seq": 1,
    "date": "2018-11-20",
    "event_type": "acquired",
    "role_ref_hint": "Whitmore Family Office",
    "role_ref_resolved_id": "PRIN.WHITMORE",
    "note": "Whitmore Family Office acquired the Napa Valley plaza from the previous owner, a regional vineyard holding company, as a diversification asset."
  },
  {
    "event_id": "EVT.00901",
    "asset_id": "AST.WHITMORE.RE1",
    "seq": 2,
    "date": "2021-04-09",
    "event_type": "renovated",
    "role_ref_hint": "Priyanka Rao",
    "role_ref_resolved_id": null,
    "note": "Priyanka Rao oversaw a renovation of the plaza's retail and hospitality wings to modernize tenant space."
  },
  {
    "event_id": "EVT.00902",
    "asset_id": "AST.WHITMORE.RE1",
    "seq": 3,
    "date": "2024-08-15",
    "event_type": "acquired_adjacent_parcel",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "An adjoining parcel was purchased to expand parking and event-space capacity."
  },
  {
    "event_id": "EVT.00903",
    "asset_id": "AST.WHITMORE.RE1",
    "seq": 4,
    "date": "2026-01-10",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Whitmore Family Office",
    "role_ref_resolved_id": "PRIN.WHITMORE",
    "note": "Property title transferred into the Whitmore Family Office trust structure for estate-planning purposes."
  },
  {
    "event_id": "EVT.00904",
    "asset_id": "AST.WHITMORE.AUTO",
    "seq": 1,
    "date": "2019-06-05",
    "event_type": "acquired",
    "role_ref_hint": "Marcus Adeyemi",
    "role_ref_resolved_id": "ROLE.WHITMORE.DIRE",
    "note": "Whitmore Family Office, guided by Marcus Adeyemi, acquired the founding pieces of the collection at a Monterey auction week sale."
  },
  {
    "event_id": "EVT.00905",
    "asset_id": "AST.WHITMORE.AUTO",
    "seq": 2,
    "date": "2021-10-22",
    "event_type": "expanded_collection",
    "role_ref_hint": "Marcus Adeyemi",
    "role_ref_resolved_id": "ROLE.WHITMORE.DIRE",
    "note": "Marcus Adeyemi added a limited-run modern exotic to broaden the collection's post-2015 bench."
  },
  {
    "event_id": "EVT.00906",
    "asset_id": "AST.WHITMORE.AUTO",
    "seq": 3,
    "date": "2023-05-14",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "One early-1990s unit was sold privately to fund the acquisition of a period classic."
  },
  {
    "event_id": "EVT.00907",
    "asset_id": "AST.WHITMORE.AUTO",
    "seq": 4,
    "date": "2025-09-30",
    "event_type": "expanded_collection",
    "role_ref_hint": "Marcus Adeyemi",
    "role_ref_resolved_id": "ROLE.WHITMORE.DIRE",
    "note": "A second period classic was added, rounding the collection out to its current six-car mix."
  },
  {
    "event_id": "EVT.00908",
    "asset_id": "AST.MONTFORT.YACHT",
    "seq": 1,
    "date": "2018-07-11",
    "event_type": "acquired",
    "role_ref_hint": "Montfort Family Trust",
    "role_ref_resolved_id": "PRIN.MONTFORT",
    "note": "Montfort Family Trust acquired M/Y Talisman from the previous owner, a Middle Eastern shipping family, via a private brokered sale."
  },
  {
    "event_id": "EVT.00909",
    "asset_id": "AST.MONTFORT.YACHT",
    "seq": 2,
    "date": "2020-02-28",
    "event_type": "major_refit",
    "role_ref_hint": "Dimitri Volkov",
    "role_ref_resolved_id": "ROLE.MONTFORT.OWNE",
    "note": "Dimitri Volkov commissioned a major refit covering exterior paintwork and interior guest-suite renovation."
  },
  {
    "event_id": "EVT.00910",
    "asset_id": "AST.MONTFORT.YACHT",
    "seq": 3,
    "date": "2022-06-17",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Dimitri Volkov",
    "role_ref_resolved_id": "ROLE.MONTFORT.OWNE",
    "note": "The vessel was placed into limited seasonal charter management to offset running costs."
  },
  {
    "event_id": "EVT.00911",
    "asset_id": "AST.MONTFORT.YACHT",
    "seq": 4,
    "date": "2025-03-04",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A scheduled five-year survey refit replaced the main engines' running gear and updated navigation electronics."
  },
  {
    "event_id": "EVT.00912",
    "asset_id": "AST.MONTFORT.RE1",
    "seq": 1,
    "date": "2019-01-15",
    "event_type": "acquired",
    "role_ref_hint": "Montfort Family Trust",
    "role_ref_resolved_id": "PRIN.MONTFORT",
    "note": "Montfort Family Trust acquired the Lake Como chalet from the previous owner, an Italian industrial family, as a summer residence."
  },
  {
    "event_id": "EVT.00913",
    "asset_id": "AST.MONTFORT.RE1",
    "seq": 2,
    "date": "2021-08-09",
    "event_type": "renovated",
    "role_ref_hint": "Anjali Mehta",
    "role_ref_resolved_id": null,
    "note": "Anjali Mehta oversaw a full interior renovation, including a new lakeside guest pavilion."
  },
  {
    "event_id": "EVT.00914",
    "asset_id": "AST.MONTFORT.RE1",
    "seq": 3,
    "date": "2024-05-22",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Montfort Family Trust",
    "role_ref_resolved_id": "PRIN.MONTFORT",
    "note": "Property retitled fully under Montfort Family Trust as part of a European asset consolidation."
  },
  {
    "event_id": "EVT.00915",
    "asset_id": "AST.MONTFORT.RE2",
    "seq": 1,
    "date": "2020-06-18",
    "event_type": "acquired",
    "role_ref_hint": "Connor Doyle",
    "role_ref_resolved_id": null,
    "note": "Connor Doyle purchased the Newport lakefront residence as a secondary family retreat."
  },
  {
    "event_id": "EVT.00916",
    "asset_id": "AST.MONTFORT.RE2",
    "seq": 2,
    "date": "2023-09-01",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Dock and boathouse structures were rebuilt following storm damage."
  },
  {
    "event_id": "EVT.00917",
    "asset_id": "AST.MONTFORT.RE2",
    "seq": 3,
    "date": "2025-11-12",
    "event_type": "refinanced",
    "role_ref_hint": "Montfort Family Trust",
    "role_ref_resolved_id": "PRIN.MONTFORT",
    "note": "The property was refinanced to fund improvements elsewhere in the family's real estate portfolio."
  },
  {
    "event_id": "EVT.00918",
    "asset_id": "AST.ELLSWORTH.AVI",
    "seq": 1,
    "date": "2018-09-25",
    "event_type": "acquired",
    "role_ref_hint": "Ellsworth Family Office Trust",
    "role_ref_resolved_id": "PRIN.ELLSWORTH",
    "note": "Ellsworth Family Office Trust acquired the G450 from a US-based fractional operator to support domestic and transatlantic travel."
  },
  {
    "event_id": "EVT.00919",
    "asset_id": "AST.ELLSWORTH.AVI",
    "seq": 2,
    "date": "2021-03-30",
    "event_type": "major_refit",
    "role_ref_hint": "Alessandro Conti",
    "role_ref_resolved_id": "ROLE.ELLSWORTH.OWNE",
    "note": "Alessandro Conti authorized a cabin interior refresh and engine mid-life inspection."
  },
  {
    "event_id": "EVT.00920",
    "asset_id": "AST.ELLSWORTH.AVI",
    "seq": 3,
    "date": "2024-10-08",
    "event_type": "avionics_upgrade",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Cockpit avionics updated to comply with expanded international datalink requirements."
  },
  {
    "event_id": "EVT.00921",
    "asset_id": "AST.ELLSWORTH.RE1",
    "seq": 1,
    "date": "2019-04-11",
    "event_type": "acquired",
    "role_ref_hint": "Fatima Al-Rashid",
    "role_ref_resolved_id": null,
    "note": "Fatima Al-Rashid purchased the Beverly Hills residence as the family's primary West Coast home."
  },
  {
    "event_id": "EVT.00922",
    "asset_id": "AST.ELLSWORTH.RE1",
    "seq": 2,
    "date": "2022-01-19",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A full kitchen and primary suite renovation was completed."
  },
  {
    "event_id": "EVT.00923",
    "asset_id": "AST.ELLSWORTH.RE1",
    "seq": 3,
    "date": "2025-07-27",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Ellsworth Family Office Trust",
    "role_ref_resolved_id": "PRIN.ELLSWORTH",
    "note": "Title transferred into the Ellsworth Family Office Trust as part of estate planning."
  },
  {
    "event_id": "EVT.00924",
    "asset_id": "AST.GATTENBY.YACHT",
    "seq": 1,
    "date": "2018-12-03",
    "event_type": "acquired",
    "role_ref_hint": "Gattenby Holdings",
    "role_ref_resolved_id": "PRIN.GATTENBY",
    "note": "Gattenby Holdings acquired M/Y Ember from the previous owner, a South American mining conglomerate, through a brokered resale."
  },
  {
    "event_id": "EVT.00925",
    "asset_id": "AST.GATTENBY.YACHT",
    "seq": 2,
    "date": "2021-05-16",
    "event_type": "major_refit",
    "role_ref_hint": "Vivienne Laurent",
    "role_ref_resolved_id": "ROLE.GATTENBY.OWNE",
    "note": "Vivienne Laurent commissioned a refit of the exterior teak decking and an upgrade of onboard entertainment systems."
  },
  {
    "event_id": "EVT.00926",
    "asset_id": "AST.GATTENBY.YACHT",
    "seq": 3,
    "date": "2023-08-29",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Vivienne Laurent",
    "role_ref_resolved_id": "ROLE.GATTENBY.OWNE",
    "note": "The yacht entered a limited charter program during the Mediterranean summer season."
  },
  {
    "event_id": "EVT.00927",
    "asset_id": "AST.GATTENBY.YACHT",
    "seq": 4,
    "date": "2026-02-14",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A scheduled classification-society survey refit addressed hull coatings and a main generator replacement."
  },
  {
    "event_id": "EVT.00928",
    "asset_id": "AST.GATTENBY.RE1",
    "seq": 1,
    "date": "2020-03-06",
    "event_type": "acquired",
    "role_ref_hint": "Andres Villareal",
    "role_ref_resolved_id": null,
    "note": "Andres Villareal purchased the Miami penthouse as a winter residence."
  },
  {
    "event_id": "EVT.00929",
    "asset_id": "AST.GATTENBY.RE1",
    "seq": 2,
    "date": "2022-11-14",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Interior finishes were upgraded, including a full remodel of the primary terrace."
  },
  {
    "event_id": "EVT.00930",
    "asset_id": "AST.GATTENBY.RE1",
    "seq": 3,
    "date": "2025-04-02",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Gattenby Holdings",
    "role_ref_resolved_id": "PRIN.GATTENBY",
    "note": "Property retitled under Gattenby Holdings for liability and estate-planning purposes."
  },
  {
    "event_id": "EVT.00931",
    "asset_id": "AST.GATTENBY.AUTO",
    "seq": 1,
    "date": "2019-09-21",
    "event_type": "acquired",
    "role_ref_hint": "Elena Petrova",
    "role_ref_resolved_id": null,
    "note": "Elena Petrova assembled the founding two cars of the collection, a period classic and a limited-run modern exotic."
  },
  {
    "event_id": "EVT.00932",
    "asset_id": "AST.GATTENBY.AUTO",
    "seq": 2,
    "date": "2022-06-08",
    "event_type": "expanded_collection",
    "role_ref_hint": "Elena Petrova",
    "role_ref_resolved_id": null,
    "note": "A modern hypercar was added, rounding the collection to its current four-car mix."
  },
  {
    "event_id": "EVT.00933",
    "asset_id": "AST.GATTENBY.AUTO",
    "seq": 3,
    "date": "2024-12-19",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "One early exotic was sold at auction to fund a subsequent acquisition."
  },
  {
    "event_id": "EVT.00934",
    "asset_id": "AST.GROSVENOR.RE1",
    "seq": 1,
    "date": "2018-06-30",
    "event_type": "acquired",
    "role_ref_hint": "Frederick Ashworth",
    "role_ref_resolved_id": null,
    "note": "Frederick Ashworth purchased the Sag Harbor residence as a summer retreat for the extended family."
  },
  {
    "event_id": "EVT.00935",
    "asset_id": "AST.GROSVENOR.RE1",
    "seq": 2,
    "date": "2021-09-17",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The property underwent a full exterior and landscaping renovation."
  },
  {
    "event_id": "EVT.00936",
    "asset_id": "AST.GROSVENOR.RE1",
    "seq": 3,
    "date": "2024-03-25",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Grosvenor Family Trust",
    "role_ref_resolved_id": "PRIN.GROSVENOR",
    "note": "Title transferred into the Grosvenor Family Trust as part of a broader estate restructuring."
  },
  {
    "event_id": "EVT.00937",
    "asset_id": "AST.GROSVENOR.AUTO",
    "seq": 1,
    "date": "2020-08-12",
    "event_type": "acquired",
    "role_ref_hint": "Ling Zhao",
    "role_ref_resolved_id": null,
    "note": "Ling Zhao began the collection with the purchase of a period classic and two blue-chip modern exotics."
  },
  {
    "event_id": "EVT.00938",
    "asset_id": "AST.GROSVENOR.AUTO",
    "seq": 2,
    "date": "2023-02-27",
    "event_type": "expanded_collection",
    "role_ref_hint": "Ling Zhao",
    "role_ref_resolved_id": null,
    "note": "A fourth car, a limited-run modern exotic, was added to complete the current mix."
  },
  {
    "event_id": "EVT.00939",
    "asset_id": "AST.GROSVENOR.AUTO",
    "seq": 3,
    "date": "2025-10-05",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The collection was scheduled for a fresh appraisal and insurance revaluation following the latest acquisition."
  },
  {
    "event_id": "EVT.00940",
    "asset_id": "AST.ASHCOMBE.YACHT",
    "seq": 1,
    "date": "2018-06-12",
    "event_type": "acquired",
    "role_ref_hint": "Ashcombe Family Office",
    "role_ref_resolved_id": "PRIN.ASHCOMBE",
    "note": "Ashcombe Family Office acquired M/Y Lumina from her original owner, a Gulf-based shipping family, in a privately negotiated sale."
  },
  {
    "event_id": "EVT.00941",
    "asset_id": "AST.ASHCOMBE.YACHT",
    "seq": 2,
    "date": "2020-09-20",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Lumina underwent a major refit at a European yard, updating interior systems and exterior paint ahead of the 2021 charter season."
  },
  {
    "event_id": "EVT.00942",
    "asset_id": "AST.ASHCOMBE.YACHT",
    "seq": 3,
    "date": "2022-03-15",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Conrad Whitfield",
    "role_ref_resolved_id": null,
    "note": "Ownership of M/Y Lumina was restructured under the Ashcombe Family Office's yacht-holding SPV as part of a broader estate-planning exercise led by Conrad Whitfield."
  },
  {
    "event_id": "EVT.00943",
    "asset_id": "AST.ASHCOMBE.YACHT",
    "seq": 4,
    "date": "2024-11-08",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Nathaniel Reyes",
    "role_ref_resolved_id": "ROLE.ASHCOMBE.OWNE",
    "note": "M/Y Lumina was placed into limited seasonal charter management to offset fixed operating costs, overseen by Nathaniel Reyes."
  },
  {
    "event_id": "EVT.00944",
    "asset_id": "AST.ASHCOMBE.RE1",
    "seq": 1,
    "date": "2019-04-03",
    "event_type": "acquired",
    "role_ref_hint": "Ashcombe Family Office",
    "role_ref_resolved_id": "PRIN.ASHCOMBE",
    "note": "Ashcombe Family Office purchased the Hamptons beachfront villa from its prior owner, a New York banking family, as a summer residence."
  },
  {
    "event_id": "EVT.00945",
    "asset_id": "AST.ASHCOMBE.RE1",
    "seq": 2,
    "date": "2021-07-19",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The villa underwent a full coastal renovation including a new pool pavilion and storm-hardened windows."
  },
  {
    "event_id": "EVT.00946",
    "asset_id": "AST.ASHCOMBE.RE1",
    "seq": 3,
    "date": "2023-05-11",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Isabella Conti",
    "role_ref_resolved_id": "ROLE.ASHCOMBE.APPR",
    "note": "Title to the Hamptons beachfront villa was transferred into the Ashcombe Family Office's real estate holding trust for estate-planning purposes, arranged by Isabella Conti."
  },
  {
    "event_id": "EVT.00947",
    "asset_id": "AST.ASHCOMBE.AUTO",
    "seq": 1,
    "date": "2018-09-14",
    "event_type": "expanded_collection",
    "role_ref_hint": "Ashcombe Family Office",
    "role_ref_resolved_id": "PRIN.ASHCOMBE",
    "note": "Ashcombe Family Office acquired the core of the 6-car collection, anchored by a period classic and a modern hypercar, from a retiring European collector."
  },
  {
    "event_id": "EVT.00948",
    "asset_id": "AST.ASHCOMBE.AUTO",
    "seq": 2,
    "date": "2021-02-27",
    "event_type": "expanded_collection",
    "role_ref_hint": "Tomas Novak",
    "role_ref_resolved_id": "ROLE.ASHCOMBE.GROU",
    "note": "Two additional limited-run modern exotics were added to the collection at auction, curated with guidance from Tomas Novak."
  },
  {
    "event_id": "EVT.00949",
    "asset_id": "AST.ASHCOMBE.AUTO",
    "seq": 3,
    "date": "2023-10-05",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "One earlier acquisition was sold at auction to make room for a higher-priority hypercar addition, refining the collection's overall balance."
  },
  {
    "event_id": "EVT.00950",
    "asset_id": "AST.GAINSBOROUGH.AVI",
    "seq": 1,
    "date": "2019-03-08",
    "event_type": "acquired",
    "role_ref_hint": "Gainsborough Family Trust",
    "role_ref_resolved_id": "PRIN.GAINSBOROUGH",
    "note": "Gainsborough Family Trust acquired the Airbus H175 new from the manufacturer for executive and family transport."
  },
  {
    "event_id": "EVT.00951",
    "asset_id": "AST.GAINSBOROUGH.AVI",
    "seq": 2,
    "date": "2022-06-22",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The H175 underwent a scheduled avionics upgrade and cabin refurbishment at an authorized service center."
  },
  {
    "event_id": "EVT.00952",
    "asset_id": "AST.GAINSBOROUGH.AVI",
    "seq": 3,
    "date": "2025-01-14",
    "event_type": "refinanced",
    "role_ref_hint": "Julian Osei",
    "role_ref_resolved_id": null,
    "note": "The aircraft was refinanced under a new operating lease structure managed by Julian Osei to optimize the Trust's balance sheet."
  },
  {
    "event_id": "EVT.00953",
    "asset_id": "AST.GAINSBOROUGH.RE1",
    "seq": 1,
    "date": "2020-08-19",
    "event_type": "acquired",
    "role_ref_hint": "Gainsborough Family Trust",
    "role_ref_resolved_id": "PRIN.GAINSBOROUGH",
    "note": "Gainsborough Family Trust purchased the Telluride lakefront residence from its prior owner, a Denver-based energy executive, as a mountain retreat."
  },
  {
    "event_id": "EVT.00954",
    "asset_id": "AST.GAINSBOROUGH.RE1",
    "seq": 2,
    "date": "2023-11-02",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The residence's lakefront frontage and great room were renovated ahead of the 2024 ski season."
  },
  {
    "event_id": "EVT.00955",
    "asset_id": "AST.GAINSBOROUGH.AUTO",
    "seq": 1,
    "date": "2019-05-16",
    "event_type": "expanded_collection",
    "role_ref_hint": "Gainsborough Family Trust",
    "role_ref_resolved_id": "PRIN.GAINSBOROUGH",
    "note": "The Gainsborough Family Trust assembled the initial 4-car collection, purchasing a period classic and a modern exotic from a private Zurich-based seller."
  },
  {
    "event_id": "EVT.00956",
    "asset_id": "AST.GAINSBOROUGH.AUTO",
    "seq": 2,
    "date": "2022-09-24",
    "event_type": "expanded_collection",
    "role_ref_hint": "Renata Kowalski",
    "role_ref_resolved_id": null,
    "note": "A modern hypercar was added to the collection at a Monterey auction, curated by Renata Kowalski."
  },
  {
    "event_id": "EVT.00957",
    "asset_id": "AST.GAINSBOROUGH.AUTO",
    "seq": 3,
    "date": "2024-04-09",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "One earlier blue-chip exotic was sold to fund the acquisition of a higher-specification replacement, refining the collection's balance."
  },
  {
    "event_id": "EVT.00958",
    "asset_id": "AST.DELACROIX.YACHT",
    "seq": 1,
    "date": "2018-11-27",
    "event_type": "acquired",
    "role_ref_hint": "Delacroix Holdings",
    "role_ref_resolved_id": "PRIN.DELACROIX",
    "note": "Delacroix Holdings acquired M/Y Solace from her original owner, a Russian industrial family, in a privately brokered sale."
  },
  {
    "event_id": "EVT.00959",
    "asset_id": "AST.DELACROIX.YACHT",
    "seq": 2,
    "date": "2021-04-13",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Solace underwent a major refit including new stabilizers and a refreshed owner's suite at a Dutch yard."
  },
  {
    "event_id": "EVT.00960",
    "asset_id": "AST.DELACROIX.YACHT",
    "seq": 3,
    "date": "2023-08-30",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Anders Lindqvist",
    "role_ref_resolved_id": "ROLE.DELACROIX.OWNE",
    "note": "Ownership of M/Y Solace was restructured into Delacroix Holdings' yacht-owning SPV, arranged by Anders Lindqvist."
  },
  {
    "event_id": "EVT.00961",
    "asset_id": "AST.DELACROIX.YACHT",
    "seq": 4,
    "date": "2025-06-17",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Solace entered limited seasonal charter operation in the Western Mediterranean to offset running costs."
  },
  {
    "event_id": "EVT.00962",
    "asset_id": "AST.DELACROIX.AVI",
    "seq": 1,
    "date": "2018-02-06",
    "event_type": "acquired",
    "role_ref_hint": "Delacroix Holdings",
    "role_ref_resolved_id": "PRIN.DELACROIX",
    "note": "Delacroix Holdings acquired the Bombardier Global 6000 pre-owned from its original corporate operator."
  },
  {
    "event_id": "EVT.00963",
    "asset_id": "AST.DELACROIX.AVI",
    "seq": 2,
    "date": "2021-10-11",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Global 6000 underwent a cabin refurbishment and avionics update at a Bombardier-authorized facility."
  },
  {
    "event_id": "EVT.00964",
    "asset_id": "AST.DELACROIX.AVI",
    "seq": 3,
    "date": "2024-07-25",
    "event_type": "refinanced",
    "role_ref_hint": "Rosalind Achterberg",
    "role_ref_resolved_id": "ROLE.DELACROIX.HOUS",
    "note": "The aircraft was refinanced under a new lease structure managed by Rosalind Achterberg."
  },
  {
    "event_id": "EVT.00965",
    "asset_id": "AST.DELACROIX.RE1",
    "seq": 1,
    "date": "2020-05-08",
    "event_type": "acquired",
    "role_ref_hint": "Delacroix Holdings",
    "role_ref_resolved_id": "PRIN.DELACROIX",
    "note": "Delacroix Holdings purchased the Cap Ferrat residence from its prior owner, a French industrialist family, as a European base."
  },
  {
    "event_id": "EVT.00966",
    "asset_id": "AST.DELACROIX.RE1",
    "seq": 2,
    "date": "2022-06-14",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The residence's waterfront terrace and guest wing were renovated to modern standards."
  },
  {
    "event_id": "EVT.00967",
    "asset_id": "AST.DELACROIX.RE1",
    "seq": 3,
    "date": "2025-03-21",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Chiara Bellandi",
    "role_ref_resolved_id": null,
    "note": "Title was transferred into Delacroix Holdings' real estate holding entity as part of a succession plan led by Chiara Bellandi."
  },
  {
    "event_id": "EVT.00968",
    "asset_id": "AST.RADCLIFFETHISTLEWOOD.YACHT",
    "seq": 1,
    "date": "2019-07-09",
    "event_type": "acquired",
    "role_ref_hint": "Radcliffe-Thistlewood Family Office Trust",
    "role_ref_resolved_id": "PRIN.RADCLIFFE_THISTLEWOOD",
    "note": "The Radcliffe-Thistlewood Family Office Trust acquired M/Y Jubilee from her original owner, a Scandinavian shipping family, in a privately brokered sale."
  },
  {
    "event_id": "EVT.00969",
    "asset_id": "AST.RADCLIFFETHISTLEWOOD.YACHT",
    "seq": 2,
    "date": "2022-05-17",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Jubilee underwent a major refit including new engines and updated navigation systems at a Dutch yard."
  },
  {
    "event_id": "EVT.00970",
    "asset_id": "AST.RADCLIFFETHISTLEWOOD.YACHT",
    "seq": 3,
    "date": "2024-09-02",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Beatrix Solheim",
    "role_ref_resolved_id": "ROLE.RADCLIFFETHISTLEWOOD.DIRE",
    "note": "Ownership of M/Y Jubilee was formally consolidated under the Trust's yacht-holding SPV, arranged by Beatrix Solheim."
  },
  {
    "event_id": "EVT.00971",
    "asset_id": "AST.RADCLIFFETHISTLEWOOD.RE1",
    "seq": 1,
    "date": "2019-12-12",
    "event_type": "acquired",
    "role_ref_hint": "Radcliffe-Thistlewood Family Office Trust",
    "role_ref_resolved_id": "PRIN.RADCLIFFE_THISTLEWOOD",
    "note": "The Radcliffe-Thistlewood Family Office Trust purchased the Vail penthouse from its prior owner, a Texas oil family, as a ski residence."
  },
  {
    "event_id": "EVT.00972",
    "asset_id": "AST.RADCLIFFETHISTLEWOOD.RE1",
    "seq": 2,
    "date": "2023-02-06",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The penthouse's living area and ski-in access were renovated ahead of the 2023-24 season."
  },
  {
    "event_id": "EVT.00973",
    "asset_id": "AST.RADCLIFFETHISTLEWOOD.RE2",
    "seq": 1,
    "date": "2021-06-23",
    "event_type": "acquired",
    "role_ref_hint": "Radcliffe-Thistlewood Family Office Trust",
    "role_ref_resolved_id": "PRIN.RADCLIFFE_THISTLEWOOD",
    "note": "The Radcliffe-Thistlewood Family Office Trust acquired the Martha's Vineyard penthouse as a secondary summer residence, purchased from a Boston-based family."
  },
  {
    "event_id": "EVT.00974",
    "asset_id": "AST.RADCLIFFETHISTLEWOOD.RE2",
    "seq": 2,
    "date": "2024-05-30",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Interior finishes were updated ahead of the 2024 summer season."
  },
  {
    "event_id": "EVT.00975",
    "asset_id": "AST.BRACKENRIDGEBRAMWELL.YACHT",
    "seq": 1,
    "date": "2020-03-04",
    "event_type": "acquired",
    "role_ref_hint": "Brackenridge-Bramwell Family Trust",
    "role_ref_resolved_id": "PRIN.BRACKENRIDGE_BRAMWELL",
    "note": "The Brackenridge-Bramwell Family Trust acquired M/Y Ember new from the builder, taking delivery of the 90m hull."
  },
  {
    "event_id": "EVT.00976",
    "asset_id": "AST.BRACKENRIDGEBRAMWELL.YACHT",
    "seq": 2,
    "date": "2023-06-19",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Ember underwent a warranty-period systems upgrade and exterior repaint at her build yard."
  },
  {
    "event_id": "EVT.00977",
    "asset_id": "AST.BRACKENRIDGEBRAMWELL.YACHT",
    "seq": 3,
    "date": "2025-09-11",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Magnus Ferreira",
    "role_ref_resolved_id": "ROLE.BRACKENRIDGEBRAMWELL.FAMI",
    "note": "Ownership was consolidated under the Trust's yacht-holding SPV as part of succession planning led by Magnus Ferreira."
  },
  {
    "event_id": "EVT.00978",
    "asset_id": "AST.BRACKENRIDGEBRAMWELL.AVI",
    "seq": 1,
    "date": "2020-11-16",
    "event_type": "acquired",
    "role_ref_hint": "Brackenridge-Bramwell Family Trust",
    "role_ref_resolved_id": "PRIN.BRACKENRIDGE_BRAMWELL",
    "note": "The Brackenridge-Bramwell Family Trust acquired the Cessna Citation Longitude new from Cessna for family and business travel."
  },
  {
    "event_id": "EVT.00979",
    "asset_id": "AST.BRACKENRIDGEBRAMWELL.AVI",
    "seq": 2,
    "date": "2024-02-08",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Longitude received a scheduled cabin and avionics update."
  },
  {
    "event_id": "EVT.00980",
    "asset_id": "AST.BRACKENRIDGEBRAMWELL.RE1",
    "seq": 1,
    "date": "2021-04-27",
    "event_type": "acquired",
    "role_ref_hint": "Brackenridge-Bramwell Family Trust",
    "role_ref_resolved_id": "PRIN.BRACKENRIDGE_BRAMWELL",
    "note": "The Brackenridge-Bramwell Family Trust purchased the Hamptons mountain residence from its prior owner, a New England publishing family."
  },
  {
    "event_id": "EVT.00981",
    "asset_id": "AST.BRACKENRIDGEBRAMWELL.RE1",
    "seq": 2,
    "date": "2023-09-15",
    "event_type": "renovated",
    "role_ref_hint": "Colette Dubois",
    "role_ref_resolved_id": null,
    "note": "The residence underwent a full interior renovation led by Colette Dubois."
  },
  {
    "event_id": "EVT.00982",
    "asset_id": "AST.BRACKENRIDGEBRAMWELL.AUTO",
    "seq": 1,
    "date": "2019-08-21",
    "event_type": "expanded_collection",
    "role_ref_hint": "Brackenridge-Bramwell Family Trust",
    "role_ref_resolved_id": "PRIN.BRACKENRIDGE_BRAMWELL",
    "note": "The Brackenridge-Bramwell Family Trust assembled the core 6-car collection, acquiring a period classic and blue-chip modern exotics from a private London dealer."
  },
  {
    "event_id": "EVT.00983",
    "asset_id": "AST.BRACKENRIDGEBRAMWELL.AUTO",
    "seq": 2,
    "date": "2022-10-03",
    "event_type": "expanded_collection",
    "role_ref_hint": "Trevor Ashworth",
    "role_ref_resolved_id": "ROLE.BRACKENRIDGEBRAMWELL.COLL",
    "note": "A modern hypercar was added to the collection at auction, curated with guidance from Trevor Ashworth."
  },
  {
    "event_id": "EVT.00984",
    "asset_id": "AST.BRACKENRIDGEBRAMWELL.AUTO",
    "seq": 3,
    "date": "2025-05-19",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "One earlier classic acquisition was sold to fund a higher-priority modern exotic addition."
  },
  {
    "event_id": "EVT.00985",
    "asset_id": "AST.KENSINGTONOVERBURY.YACHT",
    "seq": 1,
    "date": "2019-04-12",
    "event_type": "acquired",
    "role_ref_hint": "Viktor Kaminski",
    "role_ref_resolved_id": null,
    "note": "Viktor Kaminski acquired M/Y Kinship (90m) from its previous owner, a Gulf-based shipping family, adding a flagship megayacht to the family's holdings."
  },
  {
    "event_id": "EVT.00986",
    "asset_id": "AST.KENSINGTONOVERBURY.YACHT",
    "seq": 2,
    "date": "2021-09-20",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Kinship underwent a major refit at a European yard, updating interior systems and exterior paintwork ahead of the following charter season."
  },
  {
    "event_id": "EVT.00987",
    "asset_id": "AST.KENSINGTONOVERBURY.YACHT",
    "seq": 3,
    "date": "2023-06-05",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Kensington-Overbury Family Trust",
    "role_ref_resolved_id": "PRIN.KENSINGTON_OVERBURY",
    "note": "Title to M/Y Kinship was transferred into the Kensington-Overbury Family Trust as part of a broader estate restructuring."
  },
  {
    "event_id": "EVT.00988",
    "asset_id": "AST.KENSINGTONOVERBURY.YACHT",
    "seq": 4,
    "date": "2025-02-14",
    "event_type": "insured_value_reassessed",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The insured hull value of M/Y Kinship was reassessed upward following the 2021 refit and continued appreciation in the megayacht resale market."
  },
  {
    "event_id": "EVT.00989",
    "asset_id": "AST.KENSINGTONOVERBURY.RE1",
    "seq": 1,
    "date": "2018-11-30",
    "event_type": "acquired",
    "role_ref_hint": "Amara Osei",
    "role_ref_resolved_id": "ROLE.KENSINGTONOVERBURY.OWNE",
    "note": "Amara Osei purchased the Telluride Ski Chalet from a Denver-based ski-industry family as a seasonal mountain retreat."
  },
  {
    "event_id": "EVT.00990",
    "asset_id": "AST.KENSINGTONOVERBURY.RE1",
    "seq": 2,
    "date": "2020-07-15",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The chalet underwent a full interior renovation, adding a home theater and expanded ski storage room."
  },
  {
    "event_id": "EVT.00991",
    "asset_id": "AST.KENSINGTONOVERBURY.RE1",
    "seq": 3,
    "date": "2023-12-01",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Kensington-Overbury Family Trust",
    "role_ref_resolved_id": "PRIN.KENSINGTON_OVERBURY",
    "note": "Ownership of the Telluride Ski Chalet was transferred into the Kensington-Overbury Family Trust for estate-planning purposes."
  },
  {
    "event_id": "EVT.00992",
    "asset_id": "AST.KENSINGTONOVERBURY.AUTO",
    "seq": 1,
    "date": "2019-05-10",
    "event_type": "acquired",
    "role_ref_hint": "Meera Chandrasekaran",
    "role_ref_resolved_id": null,
    "note": "Meera Chandrasekaran began assembling the 8-car curated collection with the purchase of a classic-era anchor piece."
  },
  {
    "event_id": "EVT.00993",
    "asset_id": "AST.KENSINGTONOVERBURY.AUTO",
    "seq": 2,
    "date": "2021-08-22",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The collection was expanded with the addition of a limited-run modern hypercar, broadening the mix between classic and contemporary marques."
  },
  {
    "event_id": "EVT.00994",
    "asset_id": "AST.KENSINGTONOVERBURY.AUTO",
    "seq": 3,
    "date": "2024-03-17",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "One earlier acquisition was sold at auction to make room for a newer trophy-tier addition, keeping the 8-car collection at target size."
  },
  {
    "event_id": "EVT.00995",
    "asset_id": "AST.KENSINGTONUNDERHILL.AVI",
    "seq": 1,
    "date": "2020-01-22",
    "event_type": "acquired",
    "role_ref_hint": "Derek Holloway",
    "role_ref_resolved_id": null,
    "note": "Derek Holloway acquired the Cessna Citation Longitude new from the manufacturer to support the family office's transatlantic travel needs."
  },
  {
    "event_id": "EVT.00996",
    "asset_id": "AST.KENSINGTONUNDERHILL.AVI",
    "seq": 2,
    "date": "2022-10-05",
    "event_type": "avionics_upgrade",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The aircraft received an avionics suite upgrade and cabin interior refresh at a factory-authorized service center."
  },
  {
    "event_id": "EVT.00997",
    "asset_id": "AST.KENSINGTONUNDERHILL.AVI",
    "seq": 3,
    "date": "2025-04-11",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Kensington-Underhill Family Office",
    "role_ref_resolved_id": "PRIN.KENSINGTON_UNDERHILL",
    "note": "Title to the Citation Longitude was transferred to the Kensington-Underhill Family Office for centralized asset management."
  },
  {
    "event_id": "EVT.00998",
    "asset_id": "AST.KENSINGTONUNDERHILL.RE1",
    "seq": 1,
    "date": "2018-06-14",
    "event_type": "acquired",
    "role_ref_hint": "Isabelle Fontaine",
    "role_ref_resolved_id": "ROLE.KENSINGTONUNDERHILL.DIRE",
    "note": "Isabelle Fontaine acquired the Manhattan Commercial Plaza from a New York real estate holding company as an income-generating property."
  },
  {
    "event_id": "EVT.00999",
    "asset_id": "AST.KENSINGTONUNDERHILL.RE1",
    "seq": 2,
    "date": "2021-02-28",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The plaza underwent a lobby and facade renovation to reposition it for premium commercial tenants."
  },
  {
    "event_id": "EVT.01000",
    "asset_id": "AST.KENSINGTONUNDERHILL.RE1",
    "seq": 3,
    "date": "2023-09-19",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The property was refinanced at favorable terms, freeing capital for further family office investment."
  },
  {
    "event_id": "EVT.01001",
    "asset_id": "AST.KENSINGTONUNDERHILL.RE1",
    "seq": 4,
    "date": "2026-01-10",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Kensington-Underhill Family Office",
    "role_ref_resolved_id": "PRIN.KENSINGTON_UNDERHILL",
    "note": "Ownership of the Manhattan Commercial Plaza was consolidated under the Kensington-Underhill Family Office."
  },
  {
    "event_id": "EVT.01002",
    "asset_id": "AST.KENSINGTONUNDERHILL.RE2",
    "seq": 1,
    "date": "2019-10-03",
    "event_type": "acquired",
    "role_ref_hint": "Simone Beaumont",
    "role_ref_resolved_id": "ROLE.KENSINGTONUNDERHILL.TRUS",
    "note": "Simone Beaumont purchased the Charleston Vineyard Estate from the prior owner, a South Carolina winemaking family, as a secondary residence and working vineyard."
  },
  {
    "event_id": "EVT.01003",
    "asset_id": "AST.KENSINGTONUNDERHILL.RE2",
    "seq": 2,
    "date": "2022-05-27",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The estate's main residence and tasting room were renovated, and vineyard irrigation systems were modernized."
  },
  {
    "event_id": "EVT.01004",
    "asset_id": "AST.KENSINGTONUNDERHILL.AUTO",
    "seq": 1,
    "date": "2018-03-08",
    "event_type": "acquired",
    "role_ref_hint": "Rajiv Nair",
    "role_ref_resolved_id": null,
    "note": "Rajiv Nair began the 18-car curated collection with the acquisition of a period classic anchor vehicle."
  },
  {
    "event_id": "EVT.01005",
    "asset_id": "AST.KENSINGTONUNDERHILL.AUTO",
    "seq": 2,
    "date": "2020-11-14",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The collection was substantially expanded with several limited-run modern exotics, deepening the bench between classic and contemporary marques."
  },
  {
    "event_id": "EVT.01006",
    "asset_id": "AST.KENSINGTONUNDERHILL.AUTO",
    "seq": 3,
    "date": "2023-07-02",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A trophy-tier hypercar was added to the collection, anchoring the modern segment of the 18-car garage."
  },
  {
    "event_id": "EVT.01007",
    "asset_id": "AST.KENSINGTONUNDERHILL.AUTO",
    "seq": 4,
    "date": "2025-09-30",
    "event_type": "insured_value_reassessed",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The full 18-car collection's insured value was reassessed following two years of continued acquisitions and market appreciation."
  },
  {
    "event_id": "EVT.01008",
    "asset_id": "AST.MERRIVALEANCASTER.RE1",
    "seq": 1,
    "date": "2018-08-19",
    "event_type": "acquired",
    "role_ref_hint": "Desmond Okonkwo",
    "role_ref_resolved_id": null,
    "note": "Desmond Okonkwo acquired the Newport Villa from its previous owner, a longtime New England shipping family, as a summer residence."
  },
  {
    "event_id": "EVT.01009",
    "asset_id": "AST.MERRIVALEANCASTER.RE1",
    "seq": 2,
    "date": "2021-06-11",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The villa underwent a full renovation of its guest wing and waterfront terrace."
  },
  {
    "event_id": "EVT.01010",
    "asset_id": "AST.MERRIVALEANCASTER.RE1",
    "seq": 3,
    "date": "2024-04-25",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Merrivale-Ancaster Holdings",
    "role_ref_resolved_id": "PRIN.MERRIVALE_ANCASTER",
    "note": "Ownership of the Newport Villa was transferred to Merrivale-Ancaster Holdings as part of estate consolidation."
  },
  {
    "event_id": "EVT.01011",
    "asset_id": "AST.MERRIVALEANCASTER.RE2",
    "seq": 1,
    "date": "2019-02-14",
    "event_type": "acquired",
    "role_ref_hint": "Anneliese Gruber",
    "role_ref_resolved_id": "ROLE.MERRIVALEANCASTER.HOUS",
    "note": "Anneliese Gruber acquired the Nantucket Commercial Plaza as an income-producing addition to the family's real estate holdings."
  },
  {
    "event_id": "EVT.01012",
    "asset_id": "AST.MERRIVALEANCASTER.RE2",
    "seq": 2,
    "date": "2022-09-08",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The plaza's retail units were renovated to attract higher-end seasonal tenants."
  },
  {
    "event_id": "EVT.01013",
    "asset_id": "AST.MERRIVALEANCASTER.RE2",
    "seq": 3,
    "date": "2025-05-19",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The property was refinanced to consolidate debt across the family's commercial real estate portfolio."
  },
  {
    "event_id": "EVT.01014",
    "asset_id": "AST.MERRIVALEANCASTER.AUTO",
    "seq": 1,
    "date": "2020-04-02",
    "event_type": "acquired",
    "role_ref_hint": "Baxter Lin",
    "role_ref_resolved_id": null,
    "note": "Baxter Lin began the 6-car curated collection with the purchase of a blue-chip modern exotic."
  },
  {
    "event_id": "EVT.01015",
    "asset_id": "AST.MERRIVALEANCASTER.AUTO",
    "seq": 2,
    "date": "2022-12-16",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A second period classic was added to the collection, broadening its rarity spread."
  },
  {
    "event_id": "EVT.01016",
    "asset_id": "AST.MERRIVALEANCASTER.AUTO",
    "seq": 3,
    "date": "2025-03-21",
    "event_type": "insured_value_reassessed",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The 6-car collection's insured value was reassessed following the addition of a second modern exotic in the prior cycle."
  },
  {
    "event_id": "EVT.01017",
    "asset_id": "AST.HARCOURTLACHANCE.YACHT",
    "seq": 1,
    "date": "2018-05-09",
    "event_type": "acquired",
    "role_ref_hint": "Vivienne Castellanos",
    "role_ref_resolved_id": null,
    "note": "Vivienne Castellanos acquired M/Y Kinship (32m) from the previous owner, a Mediterranean charter operator, as the family's first superyacht."
  },
  {
    "event_id": "EVT.01018",
    "asset_id": "AST.HARCOURTLACHANCE.YACHT",
    "seq": 2,
    "date": "2020-10-30",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Kinship underwent a major refit including new navigation electronics and refreshed guest cabins."
  },
  {
    "event_id": "EVT.01019",
    "asset_id": "AST.HARCOURTLACHANCE.YACHT",
    "seq": 3,
    "date": "2023-01-17",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The vessel was placed into a partial charter program during off-season months to offset operating costs."
  },
  {
    "event_id": "EVT.01020",
    "asset_id": "AST.HARCOURTLACHANCE.YACHT",
    "seq": 4,
    "date": "2025-11-06",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Harcourt-Lachance Family Office Trust",
    "role_ref_resolved_id": "PRIN.HARCOURT_LACHANCE",
    "note": "Title to M/Y Kinship was transferred into the Harcourt-Lachance Family Office Trust."
  },
  {
    "event_id": "EVT.01021",
    "asset_id": "AST.HARCOURTLACHANCE.RE1",
    "seq": 1,
    "date": "2019-07-23",
    "event_type": "acquired",
    "role_ref_hint": "Omar Farouk",
    "role_ref_resolved_id": null,
    "note": "Omar Farouk acquired the Telluride compound from its prior owner, a Colorado land development family, as a multi-building mountain retreat."
  },
  {
    "event_id": "EVT.01022",
    "asset_id": "AST.HARCOURTLACHANCE.RE1",
    "seq": 2,
    "date": "2021-11-02",
    "event_type": "expanded",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A guest cottage and equestrian facility were added to the compound, expanding its footprint."
  },
  {
    "event_id": "EVT.01023",
    "asset_id": "AST.HARCOURTLACHANCE.RE1",
    "seq": 3,
    "date": "2024-06-28",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The main residence underwent a full renovation of its great room and outdoor living spaces."
  },
  {
    "event_id": "EVT.01024",
    "asset_id": "AST.HARCOURTLACHANCE.AUTO",
    "seq": 1,
    "date": "2018-09-14",
    "event_type": "acquired",
    "role_ref_hint": "Bridget Callahan",
    "role_ref_resolved_id": null,
    "note": "Bridget Callahan began the 8-car curated collection with the acquisition of a Gullwing-era classic."
  },
  {
    "event_id": "EVT.01025",
    "asset_id": "AST.HARCOURTLACHANCE.AUTO",
    "seq": 2,
    "date": "2021-04-19",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A modern hypercar was added to the collection, complementing its existing classic anchor pieces."
  },
  {
    "event_id": "EVT.01026",
    "asset_id": "AST.HARCOURTLACHANCE.AUTO",
    "seq": 3,
    "date": "2024-10-08",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Two blue-chip modern exotics were added, rounding out the collection's contemporary bench."
  },
  {
    "event_id": "EVT.01027",
    "asset_id": "AST.FENWICKTALBOT.AVI",
    "seq": 1,
    "date": "2018-12-03",
    "event_type": "acquired",
    "role_ref_hint": "Cordelia Ashby",
    "role_ref_resolved_id": null,
    "note": "Cordelia Ashby acquired the Dassault Falcon 8X new from the manufacturer for the family's long-range international travel."
  },
  {
    "event_id": "EVT.01028",
    "asset_id": "AST.FENWICKTALBOT.AVI",
    "seq": 2,
    "date": "2021-05-26",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The aircraft's cabin interior was refreshed and its avionics suite updated at a Dassault-authorized service center."
  },
  {
    "event_id": "EVT.01029",
    "asset_id": "AST.FENWICKTALBOT.AVI",
    "seq": 3,
    "date": "2024-08-14",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Fenwick-Talbot Family Holdings",
    "role_ref_resolved_id": "PRIN.FENWICK_TALBOT",
    "note": "Title to the Falcon 8X was transferred to Fenwick-Talbot Family Holdings for centralized fleet management."
  },
  {
    "event_id": "EVT.01030",
    "asset_id": "AST.FENWICKTALBOT.RE1",
    "seq": 1,
    "date": "2019-09-11",
    "event_type": "acquired",
    "role_ref_hint": "Malik Freeman",
    "role_ref_resolved_id": "ROLE.FENWICKTALBOT.DIRE",
    "note": "Malik Freeman acquired the Martha's Vineyard Ranch Estate from its prior owner, a longtime island farming family, as a seasonal residence."
  },
  {
    "event_id": "EVT.01031",
    "asset_id": "AST.FENWICKTALBOT.RE1",
    "seq": 2,
    "date": "2022-03-30",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The estate's main barn was converted into a guest residence and the primary house underwent a kitchen renovation."
  },
  {
    "event_id": "EVT.01032",
    "asset_id": "AST.FENWICKTALBOT.RE1",
    "seq": 3,
    "date": "2025-07-15",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Fenwick-Talbot Family Holdings",
    "role_ref_resolved_id": "PRIN.FENWICK_TALBOT",
    "note": "Ownership of the estate was transferred into Fenwick-Talbot Family Holdings as part of estate planning."
  },
  {
    "event_id": "EVT.01033",
    "asset_id": "AST.BRAMWELLANCASTER.YACHT",
    "seq": 1,
    "date": "2018-03-15",
    "event_type": "acquired",
    "role_ref_hint": "Julian Ashworth",
    "role_ref_resolved_id": "ROLE.BRAMWELLANCASTER.OWNE",
    "note": "Julian Ashworth, on behalf of the Bramwell-Ancaster Family Office, completed the acquisition of M/Y Denali from her previous owner, a Greek shipping family."
  },
  {
    "event_id": "EVT.01034",
    "asset_id": "AST.BRAMWELLANCASTER.YACHT",
    "seq": 2,
    "date": "2020-07-22",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Denali underwent a major refit at a European yard, updating exterior paint, the tender garage, and guest interiors."
  },
  {
    "event_id": "EVT.01035",
    "asset_id": "AST.BRAMWELLANCASTER.YACHT",
    "seq": 3,
    "date": "2022-01-10",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Bramwell-Ancaster Family Office",
    "role_ref_resolved_id": "PRIN.BRAMWELL_ANCASTER",
    "note": "Title to M/Y Denali was transferred into the Bramwell-Ancaster Family Office structure for estate-planning purposes."
  },
  {
    "event_id": "EVT.01036",
    "asset_id": "AST.BRAMWELLANCASTER.YACHT",
    "seq": 4,
    "date": "2024-05-30",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Denali was placed into limited-availability charter management to help offset her annual running costs."
  },
  {
    "event_id": "EVT.01037",
    "asset_id": "AST.BRAMWELLANCASTER.RE1",
    "seq": 1,
    "date": "2019-06-01",
    "event_type": "acquired",
    "role_ref_hint": "Elodie Fankhauser",
    "role_ref_resolved_id": null,
    "note": "Elodie Fankhauser acquired the Newport Oceanfront Compound as a summer residence for the family."
  },
  {
    "event_id": "EVT.01038",
    "asset_id": "AST.BRAMWELLANCASTER.RE1",
    "seq": 2,
    "date": "2021-09-14",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The main residence underwent a full renovation of the guest wing along with seawall reinforcement work."
  },
  {
    "event_id": "EVT.01039",
    "asset_id": "AST.BRAMWELLANCASTER.RE1",
    "seq": 3,
    "date": "2023-03-20",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A detached guest cottage and pool house were added to the Newport compound."
  },
  {
    "event_id": "EVT.01040",
    "asset_id": "AST.BRAMWELLANCASTER.RE1",
    "seq": 4,
    "date": "2025-02-11",
    "event_type": "refinanced",
    "role_ref_hint": "Bramwell-Ancaster Family Office",
    "role_ref_resolved_id": "PRIN.BRAMWELL_ANCASTER",
    "note": "The property was refinanced on favorable terms as part of a broader family office liquidity restructuring."
  },
  {
    "event_id": "EVT.01041",
    "asset_id": "AST.BRAMWELLANCASTER.AUTO",
    "seq": 1,
    "date": "2018-11-05",
    "event_type": "acquired",
    "role_ref_hint": "Desmond Okwuosa",
    "role_ref_resolved_id": null,
    "note": "Desmond Okwuosa assembled the core of the collection, acquiring a cluster of period classics and modern exotics through a European dealer network."
  },
  {
    "event_id": "EVT.01042",
    "asset_id": "AST.BRAMWELLANCASTER.AUTO",
    "seq": 2,
    "date": "2020-04-18",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The collection was expanded with the addition of a limited-production modern hypercar."
  },
  {
    "event_id": "EVT.01043",
    "asset_id": "AST.BRAMWELLANCASTER.AUTO",
    "seq": 3,
    "date": "2022-08-09",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "An early 1990s-era exotic acquisition was sold to fund newer additions to the collection."
  },
  {
    "event_id": "EVT.01044",
    "asset_id": "AST.BRAMWELLANCASTER.AUTO",
    "seq": 4,
    "date": "2024-06-25",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A trophy-tier classic was added, rounding out the collection's period-to-modern spread."
  },
  {
    "event_id": "EVT.01045",
    "asset_id": "AST.JESSOPJARNAC.YACHT",
    "seq": 1,
    "date": "2019-05-10",
    "event_type": "acquired",
    "role_ref_hint": "Marcus Whitfield",
    "role_ref_resolved_id": "ROLE.JESSOPJARNAC.OWNE",
    "note": "Marcus Whitfield purchased M/Y Crescendo new from a dealer as a family day-boat and weekend cruiser."
  },
  {
    "event_id": "EVT.01046",
    "asset_id": "AST.JESSOPJARNAC.YACHT",
    "seq": 2,
    "date": "2021-06-15",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Crescendo received an engine service and electronics upgrade ahead of the family's summer season."
  },
  {
    "event_id": "EVT.01047",
    "asset_id": "AST.JESSOPJARNAC.YACHT",
    "seq": 3,
    "date": "2023-04-02",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Jessop-Jarnac Family Trust",
    "role_ref_resolved_id": "PRIN.JESSOP_JARNAC",
    "note": "Title to M/Y Crescendo was transferred into the Jessop-Jarnac Family Trust for liability protection."
  },
  {
    "event_id": "EVT.01048",
    "asset_id": "AST.JESSOPJARNAC.YACHT",
    "seq": 4,
    "date": "2025-05-20",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Interior upholstery and helm electronics were refreshed ahead of the 2025 season."
  },
  {
    "event_id": "EVT.01049",
    "asset_id": "AST.JESSOPJARNAC.RE1",
    "seq": 1,
    "date": "2018-08-22",
    "event_type": "acquired",
    "role_ref_hint": "Isabelle Chastain",
    "role_ref_resolved_id": null,
    "note": "Isabelle Chastain acquired the Charleston Mountain Residence as the family's primary residence."
  },
  {
    "event_id": "EVT.01050",
    "asset_id": "AST.JESSOPJARNAC.RE1",
    "seq": 2,
    "date": "2020-10-05",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The residence underwent kitchen and primary suite renovations."
  },
  {
    "event_id": "EVT.01051",
    "asset_id": "AST.JESSOPJARNAC.RE1",
    "seq": 3,
    "date": "2023-01-17",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Jessop-Jarnac Family Trust",
    "role_ref_resolved_id": "PRIN.JESSOP_JARNAC",
    "note": "Title was transferred into the Jessop-Jarnac Family Trust as part of estate planning."
  },
  {
    "event_id": "EVT.01052",
    "asset_id": "AST.JESSOPJARNAC.RE1",
    "seq": 4,
    "date": "2025-09-03",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The property was refinanced to consolidate financing across the family's real estate holdings."
  },
  {
    "event_id": "EVT.01053",
    "asset_id": "AST.JESSOPJARNAC.AUTO",
    "seq": 1,
    "date": "2019-03-12",
    "event_type": "acquired",
    "role_ref_hint": "Yusuf Demir",
    "role_ref_resolved_id": "ROLE.JESSOPJARNAC.SENI",
    "note": "Yusuf Demir began assembling the collection with a pair of blue-chip modern exotics sourced through a regional dealer."
  },
  {
    "event_id": "EVT.01054",
    "asset_id": "AST.JESSOPJARNAC.AUTO",
    "seq": 2,
    "date": "2021-07-28",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Two additional period classics were added at auction."
  },
  {
    "event_id": "EVT.01055",
    "asset_id": "AST.JESSOPJARNAC.AUTO",
    "seq": 3,
    "date": "2023-11-14",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "An early modern exotic was sold to make room for a newer acquisition."
  },
  {
    "event_id": "EVT.01056",
    "asset_id": "AST.JESSOPJARNAC.AUTO",
    "seq": 4,
    "date": "2025-04-09",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A limited-production hypercar was added to the collection."
  },
  {
    "event_id": "EVT.01057",
    "asset_id": "AST.HARTLEYOVERBURY.YACHT",
    "seq": 1,
    "date": "2018-04-20",
    "event_type": "acquired",
    "role_ref_hint": "Alistair Renwick",
    "role_ref_resolved_id": "ROLE.HARTLEYOVERBURY.OWNE",
    "note": "Alistair Renwick acquired M/Y Horizon from her previous owner, a Monaco-based hedge fund principal."
  },
  {
    "event_id": "EVT.01058",
    "asset_id": "AST.HARTLEYOVERBURY.YACHT",
    "seq": 2,
    "date": "2020-09-11",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Horizon underwent a major refit including new stabilizers and updated guest cabins."
  },
  {
    "event_id": "EVT.01059",
    "asset_id": "AST.HARTLEYOVERBURY.YACHT",
    "seq": 3,
    "date": "2022-06-03",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The vessel entered limited charter management during the Mediterranean season."
  },
  {
    "event_id": "EVT.01060",
    "asset_id": "AST.HARTLEYOVERBURY.YACHT",
    "seq": 4,
    "date": "2024-10-15",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Hartley-Overbury Family Office Trust",
    "role_ref_resolved_id": "PRIN.HARTLEY_OVERBURY",
    "note": "Title was transferred into the Hartley-Overbury Family Office Trust."
  },
  {
    "event_id": "EVT.01061",
    "asset_id": "AST.HARTLEYOVERBURY.AVI",
    "seq": 1,
    "date": "2019-02-14",
    "event_type": "acquired",
    "role_ref_hint": "Valentina Roux",
    "role_ref_resolved_id": "ROLE.HARTLEYOVERBURY.PROP",
    "note": "Valentina Roux acquired the Gulfstream G550 from a corporate flight department divesting its long-range fleet."
  },
  {
    "event_id": "EVT.01062",
    "asset_id": "AST.HARTLEYOVERBURY.AVI",
    "seq": 2,
    "date": "2021-05-19",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The aircraft underwent an avionics and cabin refurbishment program."
  },
  {
    "event_id": "EVT.01063",
    "asset_id": "AST.HARTLEYOVERBURY.AVI",
    "seq": 3,
    "date": "2023-08-22",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The aircraft's financing was refinanced under the family office's consolidated credit facility."
  },
  {
    "event_id": "EVT.01064",
    "asset_id": "AST.HARTLEYOVERBURY.AVI",
    "seq": 4,
    "date": "2025-01-30",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Hartley-Overbury Family Office Trust",
    "role_ref_resolved_id": "PRIN.HARTLEY_OVERBURY",
    "note": "Title was transferred into the Hartley-Overbury Family Office Trust."
  },
  {
    "event_id": "EVT.01065",
    "asset_id": "AST.HARTLEYOVERBURY.RE1",
    "seq": 1,
    "date": "2018-07-01",
    "event_type": "acquired",
    "role_ref_hint": "Eleanor Vance",
    "role_ref_resolved_id": "ROLE.HARTLEYOVERBURY.TRUS",
    "note": "Eleanor Vance acquired the Charleston Waterfront Estate as the family's primary residence."
  },
  {
    "event_id": "EVT.01066",
    "asset_id": "AST.HARTLEYOVERBURY.RE1",
    "seq": 2,
    "date": "2020-03-25",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The estate's dock and boathouse were rebuilt following storm damage."
  },
  {
    "event_id": "EVT.01067",
    "asset_id": "AST.HARTLEYOVERBURY.RE1",
    "seq": 3,
    "date": "2023-05-16",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Hartley-Overbury Family Office Trust",
    "role_ref_resolved_id": "PRIN.HARTLEY_OVERBURY",
    "note": "Title was transferred into the Hartley-Overbury Family Office Trust."
  },
  {
    "event_id": "EVT.01068",
    "asset_id": "AST.HARTLEYOVERBURY.RE1",
    "seq": 4,
    "date": "2025-06-12",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The estate was refinanced as part of a broader consolidation of the family's real estate debt."
  },
  {
    "event_id": "EVT.01069",
    "asset_id": "AST.HARTLEYOVERBURY.AUTO",
    "seq": 1,
    "date": "2019-09-08",
    "event_type": "acquired",
    "role_ref_hint": "Kwame Asante",
    "role_ref_resolved_id": null,
    "note": "Kwame Asante assembled the boutique collection, beginning with a classic icon sourced at a European auction."
  },
  {
    "event_id": "EVT.01070",
    "asset_id": "AST.HARTLEYOVERBURY.AUTO",
    "seq": 2,
    "date": "2021-02-23",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A modern hypercar was added to the collection."
  },
  {
    "event_id": "EVT.01071",
    "asset_id": "AST.HARTLEYOVERBURY.AUTO",
    "seq": 3,
    "date": "2024-04-11",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Two blue-chip modern exotics were added, rounding out the four-car collection."
  },
  {
    "event_id": "EVT.01072",
    "asset_id": "AST.MONTFORTOGILVIE.YACHT",
    "seq": 1,
    "date": "2018-01-25",
    "event_type": "acquired",
    "role_ref_hint": "Anders Falkenberg",
    "role_ref_resolved_id": "ROLE.MONTFORTOGILVIE.FAMI",
    "note": "Anders Falkenberg took delivery of M/Y Ethereal from her building yard as a full-custom new-build commission."
  },
  {
    "event_id": "EVT.01073",
    "asset_id": "AST.MONTFORTOGILVIE.YACHT",
    "seq": 2,
    "date": "2021-03-14",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Ethereal underwent a scheduled major refit, including an exterior repaint and systems upgrades, at a European yard."
  },
  {
    "event_id": "EVT.01074",
    "asset_id": "AST.MONTFORTOGILVIE.YACHT",
    "seq": 3,
    "date": "2023-07-19",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Montfort-Ogilvie Holdings",
    "role_ref_resolved_id": "PRIN.MONTFORT_OGILVIE",
    "note": "Title to M/Y Ethereal was transferred into Montfort-Ogilvie Holdings for tax and liability structuring."
  },
  {
    "event_id": "EVT.01075",
    "asset_id": "AST.MONTFORTOGILVIE.YACHT",
    "seq": 4,
    "date": "2025-08-01",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The vessel entered a limited, invitation-only charter program during select weeks of the season."
  },
  {
    "event_id": "EVT.01076",
    "asset_id": "AST.MONTFORTOGILVIE.AVI",
    "seq": 1,
    "date": "2019-04-16",
    "event_type": "acquired",
    "role_ref_hint": "Camila Duarte",
    "role_ref_resolved_id": null,
    "note": "Camila Duarte acquired a new-build Gulfstream G650, replacing the family's prior long-range aircraft."
  },
  {
    "event_id": "EVT.01077",
    "asset_id": "AST.MONTFORTOGILVIE.AVI",
    "seq": 2,
    "date": "2021-10-08",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The aircraft underwent a cabin interior refresh and avionics update."
  },
  {
    "event_id": "EVT.01078",
    "asset_id": "AST.MONTFORTOGILVIE.AVI",
    "seq": 3,
    "date": "2024-02-27",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Montfort-Ogilvie Holdings",
    "role_ref_resolved_id": "PRIN.MONTFORT_OGILVIE",
    "note": "Title was transferred into Montfort-Ogilvie Holdings."
  },
  {
    "event_id": "EVT.01079",
    "asset_id": "AST.MONTFORTOGILVIE.RE1",
    "seq": 1,
    "date": "2018-05-30",
    "event_type": "acquired",
    "role_ref_hint": "\u00c9tienne Belrose",
    "role_ref_resolved_id": "ROLE.MONTFORTOGILVIE.HOUS",
    "note": "\u00c9tienne Belrose acquired the Beverly Hills estate from its previous owner, an entertainment-industry executive."
  },
  {
    "event_id": "EVT.01080",
    "asset_id": "AST.MONTFORTOGILVIE.RE1",
    "seq": 2,
    "date": "2020-11-12",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The estate underwent a full renovation of the main residence and grounds."
  },
  {
    "event_id": "EVT.01081",
    "asset_id": "AST.MONTFORTOGILVIE.RE1",
    "seq": 3,
    "date": "2022-09-05",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Montfort-Ogilvie Holdings",
    "role_ref_resolved_id": "PRIN.MONTFORT_OGILVIE",
    "note": "Title was transferred into Montfort-Ogilvie Holdings."
  },
  {
    "event_id": "EVT.01082",
    "asset_id": "AST.MONTFORTOGILVIE.RE1",
    "seq": 4,
    "date": "2025-03-21",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The estate was refinanced on favorable terms as part of a broader family liquidity strategy."
  },
  {
    "event_id": "EVT.01083",
    "asset_id": "AST.OVERBURYDRUMMOND.RE1",
    "seq": 1,
    "date": "2019-12-01",
    "event_type": "acquired",
    "role_ref_hint": "Peregrine Ashcombe",
    "role_ref_resolved_id": "ROLE.OVERBURYDRUMMOND.COLL",
    "note": "Peregrine Ashcombe acquired the ski chalet as a winter retreat for the family."
  },
  {
    "event_id": "EVT.01084",
    "asset_id": "AST.OVERBURYDRUMMOND.RE1",
    "seq": 2,
    "date": "2021-04-14",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The chalet underwent a renovation of the great room and its ski-in/ski-out entrance."
  },
  {
    "event_id": "EVT.01085",
    "asset_id": "AST.OVERBURYDRUMMOND.RE1",
    "seq": 3,
    "date": "2024-08-19",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Overbury-Drummond Family Trust",
    "role_ref_resolved_id": "PRIN.OVERBURY_DRUMMOND",
    "note": "Title was transferred into the Overbury-Drummond Family Trust."
  },
  {
    "event_id": "EVT.01086",
    "asset_id": "AST.OVERBURYDRUMMOND.AUTO",
    "seq": 1,
    "date": "2018-06-17",
    "event_type": "acquired",
    "role_ref_hint": "Solene Fabron",
    "role_ref_resolved_id": null,
    "note": "Solene Fabron began the collection with a cluster of period classics and modern exotics acquired from a private dealer."
  },
  {
    "event_id": "EVT.01087",
    "asset_id": "AST.OVERBURYDRUMMOND.AUTO",
    "seq": 2,
    "date": "2020-02-20",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A modern hypercar was added to the collection."
  },
  {
    "event_id": "EVT.01088",
    "asset_id": "AST.OVERBURYDRUMMOND.AUTO",
    "seq": 3,
    "date": "2022-10-03",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "An early period classic was sold at auction to fund newer acquisitions."
  },
  {
    "event_id": "EVT.01089",
    "asset_id": "AST.OVERBURYDRUMMOND.AUTO",
    "seq": 4,
    "date": "2025-01-14",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A second modern hypercar was added, completing the eight-car collection."
  },
  {
    "event_id": "EVT.01090",
    "asset_id": "AST.THORNBURYRUTHERGLEN.YACHT",
    "seq": 1,
    "date": "2019-05-14",
    "event_type": "acquired",
    "role_ref_hint": "Julian Ashworth",
    "role_ref_resolved_id": "ROLE.THORNBURYRUTHERGLEN.OWNE",
    "note": "Julian Ashworth acquired M/Y Odyssey, a 32m S3-class superyacht, from the previous owner, a Monaco-based shipping family, via private brokerage sale."
  },
  {
    "event_id": "EVT.01091",
    "asset_id": "AST.THORNBURYRUTHERGLEN.YACHT",
    "seq": 2,
    "date": "2021-03-22",
    "event_type": "major_refit",
    "role_ref_hint": "Julian Ashworth",
    "role_ref_resolved_id": "ROLE.THORNBURYRUTHERGLEN.OWNE",
    "note": "M/Y Odyssey underwent a major refit including new teak decking and updated navigation electronics, commissioned by Julian Ashworth."
  },
  {
    "event_id": "EVT.01092",
    "asset_id": "AST.THORNBURYRUTHERGLEN.YACHT",
    "seq": 3,
    "date": "2023-11-09",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Thornbury-Rutherglen Family Office",
    "role_ref_resolved_id": "PRIN.THORNBURY_RUTHERGLEN",
    "note": "Ownership of M/Y Odyssey was transferred into the Thornbury-Rutherglen Family Office structure for estate planning purposes."
  },
  {
    "event_id": "EVT.01093",
    "asset_id": "AST.THORNBURYRUTHERGLEN.YACHT",
    "seq": 4,
    "date": "2025-06-17",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Consuela Reyes",
    "role_ref_resolved_id": "ROLE.THORNBURYRUTHERGLEN.PROP",
    "note": "M/Y Odyssey was placed into limited seasonal charter management to offset carrying costs, arranged by Consuela Reyes."
  },
  {
    "event_id": "EVT.01094",
    "asset_id": "AST.THORNBURYRUTHERGLEN.RE1",
    "seq": 1,
    "date": "2018-09-05",
    "event_type": "acquired",
    "role_ref_hint": "Desmond Okoye",
    "role_ref_resolved_id": "ROLE.THORNBURYRUTHERGLEN.COLL",
    "note": "Desmond Okoye purchased the Palm Springs Mountain Residence as a winter retreat property."
  },
  {
    "event_id": "EVT.01095",
    "asset_id": "AST.THORNBURYRUTHERGLEN.RE1",
    "seq": 2,
    "date": "2020-07-11",
    "event_type": "renovated",
    "role_ref_hint": "Desmond Okoye",
    "role_ref_resolved_id": "ROLE.THORNBURYRUTHERGLEN.COLL",
    "note": "The Palm Springs Mountain Residence underwent renovation of its pool and outdoor living spaces under Desmond Okoye's direction."
  },
  {
    "event_id": "EVT.01096",
    "asset_id": "AST.THORNBURYRUTHERGLEN.RE1",
    "seq": 3,
    "date": "2024-02-28",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Thornbury-Rutherglen Family Office",
    "role_ref_resolved_id": "PRIN.THORNBURY_RUTHERGLEN",
    "note": "The Palm Springs Mountain Residence was retitled into the Thornbury-Rutherglen Family Office for succession planning."
  },
  {
    "event_id": "EVT.01097",
    "asset_id": "AST.THORNBURYRUTHERGLEN.RE2",
    "seq": 1,
    "date": "2019-08-19",
    "event_type": "acquired",
    "role_ref_hint": "Anneke van der Berg",
    "role_ref_resolved_id": null,
    "note": "Anneke van der Berg acquired the Nantucket Mountain Residence as a secondary vacation property."
  },
  {
    "event_id": "EVT.01098",
    "asset_id": "AST.THORNBURYRUTHERGLEN.RE2",
    "seq": 2,
    "date": "2022-05-06",
    "event_type": "refinanced",
    "role_ref_hint": "Anneke van der Berg",
    "role_ref_resolved_id": null,
    "note": "The Nantucket Mountain Residence was refinanced by Anneke van der Berg to fund unrelated portfolio acquisitions."
  },
  {
    "event_id": "EVT.01099",
    "asset_id": "AST.THORNBURYRUTHERGLEN.RE2",
    "seq": 3,
    "date": "2025-03-14",
    "event_type": "renovated",
    "role_ref_hint": "Anneke van der Berg",
    "role_ref_resolved_id": null,
    "note": "Interior renovations were completed on the Nantucket Mountain Residence, updating the kitchen and primary suite."
  },
  {
    "event_id": "EVT.01100",
    "asset_id": "AST.THORNBURYRUTHERGLEN.AUTO",
    "seq": 1,
    "date": "2018-04-02",
    "event_type": "expanded_collection",
    "role_ref_hint": "Kavya Rajan",
    "role_ref_resolved_id": null,
    "note": "Kavya Rajan added a period classic and a limited-run modern exotic to establish the core of the 6-car curated collection."
  },
  {
    "event_id": "EVT.01101",
    "asset_id": "AST.THORNBURYRUTHERGLEN.AUTO",
    "seq": 2,
    "date": "2021-09-27",
    "event_type": "expanded_collection",
    "role_ref_hint": "Kavya Rajan",
    "role_ref_resolved_id": null,
    "note": "The collection was expanded with a second modern hypercar acquisition, broadening the collection's rarity spread."
  },
  {
    "event_id": "EVT.01102",
    "asset_id": "AST.THORNBURYRUTHERGLEN.AUTO",
    "seq": 3,
    "date": "2023-12-08",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "Th\u00e9o Marchand",
    "role_ref_resolved_id": null,
    "note": "One earlier vehicle was sold out of the collection to make room for a newer acquisition, arranged by Th\u00e9o Marchand."
  },
  {
    "event_id": "EVT.01103",
    "asset_id": "AST.THORNBURYRUTHERGLEN.AUTO",
    "seq": 4,
    "date": "2025-10-21",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Thornbury-Rutherglen Family Office",
    "role_ref_resolved_id": "PRIN.THORNBURY_RUTHERGLEN",
    "note": "The 6-car curated collection was retitled under the Thornbury-Rutherglen Family Office for insurance consolidation."
  },
  {
    "event_id": "EVT.01104",
    "asset_id": "AST.LACHANCELANSDOWNE.YACHT",
    "seq": 1,
    "date": "2020-06-03",
    "event_type": "acquired",
    "role_ref_hint": "Farid Hosseini",
    "role_ref_resolved_id": "ROLE.LACHANCELANSDOWNE.OWNE",
    "note": "Farid Hosseini purchased M/Y Horizon, a 20m S2-class flybridge motor yacht, new from the builder."
  },
  {
    "event_id": "EVT.01105",
    "asset_id": "AST.LACHANCELANSDOWNE.YACHT",
    "seq": 2,
    "date": "2022-08-15",
    "event_type": "major_refit",
    "role_ref_hint": "Farid Hosseini",
    "role_ref_resolved_id": "ROLE.LACHANCELANSDOWNE.OWNE",
    "note": "M/Y Horizon received an engine service and electronics upgrade following its second season in charter use."
  },
  {
    "event_id": "EVT.01106",
    "asset_id": "AST.LACHANCELANSDOWNE.YACHT",
    "seq": 3,
    "date": "2024-04-10",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Lachance-Lansdowne Family Trust",
    "role_ref_resolved_id": "PRIN.LACHANCE_LANSDOWNE",
    "note": "M/Y Horizon was transferred into the Lachance-Lansdowne Family Trust."
  },
  {
    "event_id": "EVT.01107",
    "asset_id": "AST.LACHANCELANSDOWNE.AVI",
    "seq": 1,
    "date": "2018-11-20",
    "event_type": "acquired",
    "role_ref_hint": "Naledi Mokoena",
    "role_ref_resolved_id": null,
    "note": "Naledi Mokoena acquired the Bombardier Global 6000 from a corporate flight department divesting its long-range fleet."
  },
  {
    "event_id": "EVT.01108",
    "asset_id": "AST.LACHANCELANSDOWNE.AVI",
    "seq": 2,
    "date": "2021-02-08",
    "event_type": "major_refit",
    "role_ref_hint": "Naledi Mokoena",
    "role_ref_resolved_id": null,
    "note": "The Global 6000 underwent a cabin refurbishment and avionics update, commissioned by Naledi Mokoena."
  },
  {
    "event_id": "EVT.01109",
    "asset_id": "AST.LACHANCELANSDOWNE.AVI",
    "seq": 3,
    "date": "2023-07-25",
    "event_type": "refinanced",
    "role_ref_hint": "Naledi Mokoena",
    "role_ref_resolved_id": null,
    "note": "The aircraft was refinanced by Naledi Mokoena to consolidate financing terms across the family's aviation assets."
  },
  {
    "event_id": "EVT.01110",
    "asset_id": "AST.LACHANCELANSDOWNE.RE1",
    "seq": 1,
    "date": "2019-12-12",
    "event_type": "acquired",
    "role_ref_hint": "Callum Bretherton",
    "role_ref_resolved_id": null,
    "note": "Callum Bretherton acquired the Aspen Waterfront Estate from the previous owner, a Texas oil and gas family."
  },
  {
    "event_id": "EVT.01111",
    "asset_id": "AST.LACHANCELANSDOWNE.RE1",
    "seq": 2,
    "date": "2022-01-30",
    "event_type": "renovated",
    "role_ref_hint": "Callum Bretherton",
    "role_ref_resolved_id": null,
    "note": "The Aspen Waterfront Estate underwent a full renovation of its riverside guest wing, overseen by Callum Bretherton."
  },
  {
    "event_id": "EVT.01112",
    "asset_id": "AST.LACHANCELANSDOWNE.RE1",
    "seq": 3,
    "date": "2025-05-19",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Lachance-Lansdowne Family Trust",
    "role_ref_resolved_id": "PRIN.LACHANCE_LANSDOWNE",
    "note": "The Aspen Waterfront Estate was retitled into the Lachance-Lansdowne Family Trust."
  },
  {
    "event_id": "EVT.01113",
    "asset_id": "AST.LACHANCELANSDOWNE.AUTO",
    "seq": 1,
    "date": "2018-06-14",
    "event_type": "expanded_collection",
    "role_ref_hint": "Simone Duarte",
    "role_ref_resolved_id": "ROLE.LACHANCELANSDOWNE.SENI",
    "note": "Simone Duarte began assembling the 8-car curated collection with two period classics acquired at auction."
  },
  {
    "event_id": "EVT.01114",
    "asset_id": "AST.LACHANCELANSDOWNE.AUTO",
    "seq": 2,
    "date": "2020-10-02",
    "event_type": "expanded_collection",
    "role_ref_hint": "Wei-Ling Chao",
    "role_ref_resolved_id": null,
    "note": "Wei-Ling Chao added a limited-run modern exotic and a Veyron-tier hypercar to the collection."
  },
  {
    "event_id": "EVT.01115",
    "asset_id": "AST.LACHANCELANSDOWNE.AUTO",
    "seq": 3,
    "date": "2023-03-17",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "Bram Van Acker",
    "role_ref_resolved_id": null,
    "note": "Two earlier-generation vehicles were sold out of the collection to fund newer acquisitions, arranged by Bram Van Acker."
  },
  {
    "event_id": "EVT.01116",
    "asset_id": "AST.LACHANCELANSDOWNE.AUTO",
    "seq": 4,
    "date": "2025-09-04",
    "event_type": "expanded_collection",
    "role_ref_hint": "Bram Van Acker",
    "role_ref_resolved_id": null,
    "note": "A trophy-tier hypercar was added, completing the current 8-car collection under Bram Van Acker's management."
  },
  {
    "event_id": "EVT.01117",
    "asset_id": "AST.ELPHINSTONERADCLIFFE.YACHT",
    "seq": 1,
    "date": "2019-03-08",
    "event_type": "acquired",
    "role_ref_hint": "Priyanka Iyer",
    "role_ref_resolved_id": "ROLE.ELPHINSTONERADCLIFFE.CONS",
    "note": "Priyanka Iyer acquired M/Y Ethereal, a 50m S4-class custom superyacht, from the previous owner, a Middle Eastern royal family estate."
  },
  {
    "event_id": "EVT.01118",
    "asset_id": "AST.ELPHINSTONERADCLIFFE.YACHT",
    "seq": 2,
    "date": "2021-11-16",
    "event_type": "major_refit",
    "role_ref_hint": "Priyanka Iyer",
    "role_ref_resolved_id": "ROLE.ELPHINSTONERADCLIFFE.CONS",
    "note": "M/Y Ethereal underwent a major refit including a full repaint and interior refresh, commissioned by Priyanka Iyer."
  },
  {
    "event_id": "EVT.01119",
    "asset_id": "AST.ELPHINSTONERADCLIFFE.YACHT",
    "seq": 3,
    "date": "2024-06-21",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Magnus Halvorsen",
    "role_ref_resolved_id": "ROLE.ELPHINSTONERADCLIFFE.DIRE",
    "note": "M/Y Ethereal was entered into limited charter management to offset annual operating costs, arranged by Magnus Halvorsen."
  },
  {
    "event_id": "EVT.01120",
    "asset_id": "AST.ELPHINSTONERADCLIFFE.YACHT",
    "seq": 4,
    "date": "2026-01-12",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Elphinstone-Radcliffe Holdings",
    "role_ref_resolved_id": "PRIN.ELPHINSTONE_RADCLIFFE",
    "note": "M/Y Ethereal was retitled into Elphinstone-Radcliffe Holdings for estate consolidation."
  },
  {
    "event_id": "EVT.01121",
    "asset_id": "AST.ELPHINSTONERADCLIFFE.RE1",
    "seq": 1,
    "date": "2020-02-04",
    "event_type": "acquired",
    "role_ref_hint": "Odalys Ferreira",
    "role_ref_resolved_id": null,
    "note": "Odalys Ferreira purchased the Malibu Mountain Residence as the family's West Coast primary residence."
  },
  {
    "event_id": "EVT.01122",
    "asset_id": "AST.ELPHINSTONERADCLIFFE.RE1",
    "seq": 2,
    "date": "2022-09-13",
    "event_type": "renovated",
    "role_ref_hint": "Odalys Ferreira",
    "role_ref_resolved_id": null,
    "note": "The Malibu Mountain Residence underwent seismic retrofitting and a full landscape renovation, overseen by Odalys Ferreira."
  },
  {
    "event_id": "EVT.01123",
    "asset_id": "AST.ELPHINSTONERADCLIFFE.RE1",
    "seq": 3,
    "date": "2025-04-27",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Elphinstone-Radcliffe Holdings",
    "role_ref_resolved_id": "PRIN.ELPHINSTONE_RADCLIFFE",
    "note": "The Malibu Mountain Residence was retitled into Elphinstone-Radcliffe Holdings."
  },
  {
    "event_id": "EVT.01124",
    "asset_id": "AST.ELPHINSTONERADCLIFFE.AUTO",
    "seq": 1,
    "date": "2018-08-09",
    "event_type": "expanded_collection",
    "role_ref_hint": "Tobias Kingsley",
    "role_ref_resolved_id": null,
    "note": "Tobias Kingsley assembled the initial core of the 6-car curated collection, anchored by a Gullwing-era classic."
  },
  {
    "event_id": "EVT.01125",
    "asset_id": "AST.ELPHINSTONERADCLIFFE.AUTO",
    "seq": 2,
    "date": "2021-05-22",
    "event_type": "expanded_collection",
    "role_ref_hint": "Amara Chukwu",
    "role_ref_resolved_id": null,
    "note": "Amara Chukwu added a modern hypercar and a second blue-chip exotic to the collection."
  },
  {
    "event_id": "EVT.01126",
    "asset_id": "AST.ELPHINSTONERADCLIFFE.AUTO",
    "seq": 3,
    "date": "2024-10-30",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "S\u00e9bastien Roux",
    "role_ref_resolved_id": null,
    "note": "One vehicle was sold out of the collection to fund the acquisition of a newer model, arranged by S\u00e9bastien Roux."
  },
  {
    "event_id": "EVT.01127",
    "asset_id": "AST.BRAMWELLNIGHTINGALE.YACHT",
    "seq": 1,
    "date": "2020-09-11",
    "event_type": "acquired",
    "role_ref_hint": "Elena Voskresenskaya",
    "role_ref_resolved_id": "ROLE.BRAMWELLNIGHTINGALE.COLL",
    "note": "Elena Voskresenskaya took delivery of M/Y Umbra, a 90m S6-class megayacht, direct from the builder."
  },
  {
    "event_id": "EVT.01128",
    "asset_id": "AST.BRAMWELLNIGHTINGALE.YACHT",
    "seq": 2,
    "date": "2022-06-18",
    "event_type": "major_refit",
    "role_ref_hint": "Elena Voskresenskaya",
    "role_ref_resolved_id": "ROLE.BRAMWELLNIGHTINGALE.COLL",
    "note": "M/Y Umbra underwent a scheduled 5-year survey and systems overhaul, commissioned by Elena Voskresenskaya."
  },
  {
    "event_id": "EVT.01129",
    "asset_id": "AST.BRAMWELLNIGHTINGALE.YACHT",
    "seq": 3,
    "date": "2024-03-02",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Bramwell-Nightingale Family Office Trust",
    "role_ref_resolved_id": "PRIN.BRAMWELL_NIGHTINGALE",
    "note": "M/Y Umbra was transferred into the Bramwell-Nightingale Family Office Trust."
  },
  {
    "event_id": "EVT.01130",
    "asset_id": "AST.BRAMWELLNIGHTINGALE.YACHT",
    "seq": 4,
    "date": "2025-12-05",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Rafael Contreras",
    "role_ref_resolved_id": null,
    "note": "M/Y Umbra was entered into a limited charter program during off-peak months, arranged by Rafael Contreras."
  },
  {
    "event_id": "EVT.01131",
    "asset_id": "AST.BRAMWELLNIGHTINGALE.AVI",
    "seq": 1,
    "date": "2019-04-05",
    "event_type": "acquired",
    "role_ref_hint": "Hana Kobayashi",
    "role_ref_resolved_id": null,
    "note": "Hana Kobayashi acquired the Bombardier Global 6000 to support the family's transatlantic travel needs."
  },
  {
    "event_id": "EVT.01132",
    "asset_id": "AST.BRAMWELLNIGHTINGALE.AVI",
    "seq": 2,
    "date": "2021-07-14",
    "event_type": "major_refit",
    "role_ref_hint": "Hana Kobayashi",
    "role_ref_resolved_id": null,
    "note": "The Global 6000 received a cabin interior refresh and updated satellite communications suite."
  },
  {
    "event_id": "EVT.01133",
    "asset_id": "AST.BRAMWELLNIGHTINGALE.AVI",
    "seq": 3,
    "date": "2024-11-22",
    "event_type": "refinanced",
    "role_ref_hint": "Hana Kobayashi",
    "role_ref_resolved_id": null,
    "note": "The aircraft was refinanced by Hana Kobayashi as part of a broader fleet financing restructuring."
  },
  {
    "event_id": "EVT.01134",
    "asset_id": "AST.BRAMWELLNIGHTINGALE.RE1",
    "seq": 1,
    "date": "2018-07-01",
    "event_type": "acquired",
    "role_ref_hint": "Declan Fitzgerald",
    "role_ref_resolved_id": null,
    "note": "Declan Fitzgerald acquired the Nantucket Coastal Estate from the previous owner, a New England banking family."
  },
  {
    "event_id": "EVT.01135",
    "asset_id": "AST.BRAMWELLNIGHTINGALE.RE1",
    "seq": 2,
    "date": "2020-05-19",
    "event_type": "renovated",
    "role_ref_hint": "Declan Fitzgerald",
    "role_ref_resolved_id": null,
    "note": "The Nantucket Coastal Estate underwent renovation of its guest cottage and dock facilities."
  },
  {
    "event_id": "EVT.01136",
    "asset_id": "AST.BRAMWELLNIGHTINGALE.RE1",
    "seq": 3,
    "date": "2023-08-08",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Bramwell-Nightingale Family Office Trust",
    "role_ref_resolved_id": "PRIN.BRAMWELL_NIGHTINGALE",
    "note": "The Nantucket Coastal Estate was retitled into the Bramwell-Nightingale Family Office Trust."
  },
  {
    "event_id": "EVT.01137",
    "asset_id": "AST.BRAMWELLNIGHTINGALE.AUTO",
    "seq": 1,
    "date": "2018-03-16",
    "event_type": "expanded_collection",
    "role_ref_hint": "Zainab Al-Farsi",
    "role_ref_resolved_id": null,
    "note": "Zainab Al-Farsi began assembling the full-spectrum 18-car collection with several trophy-tier classics."
  },
  {
    "event_id": "EVT.01138",
    "asset_id": "AST.BRAMWELLNIGHTINGALE.AUTO",
    "seq": 2,
    "date": "2020-12-04",
    "event_type": "expanded_collection",
    "role_ref_hint": "Piotr Wi\u015bniewski",
    "role_ref_resolved_id": null,
    "note": "Piotr Wi\u015bniewski added a deep bench of modern hypercars, including multiple limited-production units."
  },
  {
    "event_id": "EVT.01139",
    "asset_id": "AST.BRAMWELLNIGHTINGALE.AUTO",
    "seq": 3,
    "date": "2022-09-27",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "Piotr Wi\u015bniewski",
    "role_ref_resolved_id": null,
    "note": "Several duplicate-era vehicles were sold out of the collection to refine the collection's focus."
  },
  {
    "event_id": "EVT.01140",
    "asset_id": "AST.BRAMWELLNIGHTINGALE.AUTO",
    "seq": 4,
    "date": "2025-07-15",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Bramwell-Nightingale Family Office Trust",
    "role_ref_resolved_id": "PRIN.BRAMWELL_NIGHTINGALE",
    "note": "The 18-car collection was retitled under the Bramwell-Nightingale Family Office Trust for consolidated insurance coverage."
  },
  {
    "event_id": "EVT.01141",
    "asset_id": "AST.STAVROSRADCLIFFE.YACHT",
    "seq": 1,
    "date": "2019-10-03",
    "event_type": "acquired",
    "role_ref_hint": "Nikolai Petrov",
    "role_ref_resolved_id": "ROLE.STAVROSRADCLIFFE.OWNE",
    "note": "Nikolai Petrov acquired M/Y Serein, a 70m S5-class large custom superyacht, from the previous owner, a Greek shipping family."
  },
  {
    "event_id": "EVT.01142",
    "asset_id": "AST.STAVROSRADCLIFFE.YACHT",
    "seq": 2,
    "date": "2021-12-11",
    "event_type": "major_refit",
    "role_ref_hint": "Nikolai Petrov",
    "role_ref_resolved_id": "ROLE.STAVROSRADCLIFFE.OWNE",
    "note": "M/Y Serein underwent a major refit including a new paint scheme and upgraded stabilization systems, commissioned by Nikolai Petrov."
  },
  {
    "event_id": "EVT.01143",
    "asset_id": "AST.STAVROSRADCLIFFE.YACHT",
    "seq": 3,
    "date": "2023-09-19",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Stavros-Radcliffe Family Holdings",
    "role_ref_resolved_id": "PRIN.STAVROS_RADCLIFFE",
    "note": "M/Y Serein was transferred into Stavros-Radcliffe Family Holdings."
  },
  {
    "event_id": "EVT.01144",
    "asset_id": "AST.STAVROSRADCLIFFE.YACHT",
    "seq": 4,
    "date": "2026-02-06",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Grace Adeyemi",
    "role_ref_resolved_id": null,
    "note": "M/Y Serein was placed into selective charter availability to offset operating costs, arranged by Grace Adeyemi."
  },
  {
    "event_id": "EVT.01145",
    "asset_id": "AST.STAVROSRADCLIFFE.RE1",
    "seq": 1,
    "date": "2020-11-09",
    "event_type": "acquired",
    "role_ref_hint": "Soren Lindqvist",
    "role_ref_resolved_id": null,
    "note": "Soren Lindqvist purchased the Vail Ski Chalet as the family's winter mountain residence."
  },
  {
    "event_id": "EVT.01146",
    "asset_id": "AST.STAVROSRADCLIFFE.RE1",
    "seq": 2,
    "date": "2022-03-24",
    "event_type": "renovated",
    "role_ref_hint": "Soren Lindqvist",
    "role_ref_resolved_id": null,
    "note": "The Vail Ski Chalet underwent renovation of its ski-in/ski-out access and lower-level entertainment space."
  },
  {
    "event_id": "EVT.01147",
    "asset_id": "AST.STAVROSRADCLIFFE.RE1",
    "seq": 3,
    "date": "2025-01-30",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Stavros-Radcliffe Family Holdings",
    "role_ref_resolved_id": "PRIN.STAVROS_RADCLIFFE",
    "note": "The Vail Ski Chalet was retitled into Stavros-Radcliffe Family Holdings."
  },
  {
    "event_id": "EVT.01148",
    "asset_id": "AST.STAVROSRADCLIFFE.AUTO",
    "seq": 1,
    "date": "2018-05-21",
    "event_type": "expanded_collection",
    "role_ref_hint": "Layla Haddad",
    "role_ref_resolved_id": null,
    "note": "Layla Haddad assembled the initial core of the 12-car curated collection with several period classics."
  },
  {
    "event_id": "EVT.01149",
    "asset_id": "AST.STAVROSRADCLIFFE.AUTO",
    "seq": 2,
    "date": "2020-08-13",
    "event_type": "expanded_collection",
    "role_ref_hint": "Connor McAllister",
    "role_ref_resolved_id": "ROLE.STAVROSRADCLIFFE.CLAS",
    "note": "Connor McAllister added a second trophy-tier hypercar and a Carrera GT-era piece to deepen the collection's modern bench."
  },
  {
    "event_id": "EVT.01150",
    "asset_id": "AST.STAVROSRADCLIFFE.AUTO",
    "seq": 3,
    "date": "2023-06-06",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "Fatima Zahra Benali",
    "role_ref_resolved_id": "ROLE.STAVROSRADCLIFFE.COLL",
    "note": "Two vehicles were sold out of the collection to fund the acquisition of newer models, arranged by Fatima Zahra Benali."
  },
  {
    "event_id": "EVT.01151",
    "asset_id": "AST.STAVROSRADCLIFFE.AUTO",
    "seq": 4,
    "date": "2025-11-17",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Stavros-Radcliffe Family Holdings",
    "role_ref_resolved_id": "PRIN.STAVROS_RADCLIFFE",
    "note": "The 12-car collection was retitled under Stavros-Radcliffe Family Holdings for consolidated coverage."
  },
  {
    "event_id": "EVT.01152",
    "asset_id": "AST.KENSINGTONASHWORTH.YACHT",
    "seq": 1,
    "date": "2018-05-12",
    "event_type": "acquired",
    "role_ref_hint": "Kensington-Ashworth Family Office",
    "role_ref_resolved_id": "PRIN.KENSINGTON_ASHWORTH",
    "note": "Kensington-Ashworth Family Office completed the brokered acquisition of M/Y Kestrel from her previous owner, a Monaco-based shipping family."
  },
  {
    "event_id": "EVT.01153",
    "asset_id": "AST.KENSINGTONASHWORTH.YACHT",
    "seq": 2,
    "date": "2020-09-01",
    "event_type": "major_refit",
    "role_ref_hint": "Julian Ferro",
    "role_ref_resolved_id": "ROLE.KENSINGTONASHWORTH.OWNE",
    "note": "The 90m M/Y Kestrel underwent a major refit including new interior joinery and exterior paintwork overseen by Julian Ferro."
  },
  {
    "event_id": "EVT.01154",
    "asset_id": "AST.KENSINGTONASHWORTH.YACHT",
    "seq": 3,
    "date": "2022-03-15",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Tobias Reinholt",
    "role_ref_resolved_id": null,
    "note": "Ownership of M/Y Kestrel was transferred into the Kensington-Ashworth Family Office structure for estate planning purposes, coordinated by Tobias Reinholt."
  },
  {
    "event_id": "EVT.01155",
    "asset_id": "AST.KENSINGTONASHWORTH.YACHT",
    "seq": 4,
    "date": "2025-06-20",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Camille Laurent",
    "role_ref_resolved_id": null,
    "note": "M/Y Kestrel was placed into a limited seasonal charter program to offset operating costs, managed by Camille Laurent."
  },
  {
    "event_id": "EVT.01156",
    "asset_id": "AST.KENSINGTONASHWORTH.AVI",
    "seq": 1,
    "date": "2019-02-10",
    "event_type": "acquired",
    "role_ref_hint": "Ines Duarte",
    "role_ref_resolved_id": null,
    "note": "The family office acquired this Gulfstream G450 as its primary long-range business jet, added to the fleet by Ines Duarte."
  },
  {
    "event_id": "EVT.01157",
    "asset_id": "AST.KENSINGTONASHWORTH.AVI",
    "seq": 2,
    "date": "2021-11-05",
    "event_type": "avionics_upgrade",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The G450 received an ADS-B and cockpit avionics upgrade to maintain international operating compliance."
  },
  {
    "event_id": "EVT.01158",
    "asset_id": "AST.KENSINGTONASHWORTH.AVI",
    "seq": 3,
    "date": "2023-08-18",
    "event_type": "heavy_maintenance_check",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The aircraft completed a scheduled heavy maintenance check at an authorized Gulfstream service center."
  },
  {
    "event_id": "EVT.01159",
    "asset_id": "AST.KENSINGTONASHWORTH.AVI",
    "seq": 4,
    "date": "2025-01-22",
    "event_type": "reregistered",
    "role_ref_hint": "Graham Ashcombe",
    "role_ref_resolved_id": "ROLE.KENSINGTONASHWORTH.CLAS",
    "note": "The aircraft was re-registered under a new operating entity as part of the family office's fleet restructuring, coordinated by Graham Ashcombe."
  },
  {
    "event_id": "EVT.01160",
    "asset_id": "AST.KENSINGTONASHWORTH.RE1",
    "seq": 1,
    "date": "2018-07-30",
    "event_type": "acquired",
    "role_ref_hint": "Mikael Petrov",
    "role_ref_resolved_id": null,
    "note": "The Charleston Coastal Estate was purchased as a primary East Coast residence, acquired by Mikael Petrov on behalf of the family."
  },
  {
    "event_id": "EVT.01161",
    "asset_id": "AST.KENSINGTONASHWORTH.RE1",
    "seq": 2,
    "date": "2020-04-14",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The estate underwent a full renovation of the main residence and waterfront dock facilities."
  },
  {
    "event_id": "EVT.01162",
    "asset_id": "AST.KENSINGTONASHWORTH.RE1",
    "seq": 3,
    "date": "2023-09-09",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Kensington-Ashworth Family Office",
    "role_ref_resolved_id": "PRIN.KENSINGTON_ASHWORTH",
    "note": "Title to the Charleston Coastal Estate was transferred into the Kensington-Ashworth Family Office trust structure."
  },
  {
    "event_id": "EVT.01163",
    "asset_id": "AST.KENSINGTONASHWORTH.RE2",
    "seq": 1,
    "date": "2019-05-02",
    "event_type": "acquired",
    "role_ref_hint": "Julian Ferro",
    "role_ref_resolved_id": "ROLE.KENSINGTONASHWORTH.OWNE",
    "note": "The Manhattan Villa was acquired as a secondary residence for business and social use in New York City, acquired by Julian Ferro."
  },
  {
    "event_id": "EVT.01164",
    "asset_id": "AST.KENSINGTONASHWORTH.RE2",
    "seq": 2,
    "date": "2022-01-18",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Interior renovations were completed to modernize the property's kitchen and master suite."
  },
  {
    "event_id": "EVT.01165",
    "asset_id": "AST.KENSINGTONASHWORTH.RE2",
    "seq": 3,
    "date": "2024-10-11",
    "event_type": "refinanced",
    "role_ref_hint": "Tobias Reinholt",
    "role_ref_resolved_id": null,
    "note": "The property was refinanced under favorable terms as part of a broader family office liquidity strategy, arranged by Tobias Reinholt."
  },
  {
    "event_id": "EVT.01166",
    "asset_id": "AST.KENSINGTONASHWORTH.AUTO",
    "seq": 1,
    "date": "2018-03-20",
    "event_type": "acquired",
    "role_ref_hint": "Graham Ashcombe",
    "role_ref_resolved_id": "ROLE.KENSINGTONASHWORTH.CLAS",
    "note": "The core of the 6-car collection was assembled, anchored by a period classic and a modern hypercar, curated by Graham Ashcombe."
  },
  {
    "event_id": "EVT.01167",
    "asset_id": "AST.KENSINGTONASHWORTH.AUTO",
    "seq": 2,
    "date": "2021-06-25",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Two additional limited-run modern exotics were added to the collection."
  },
  {
    "event_id": "EVT.01168",
    "asset_id": "AST.KENSINGTONASHWORTH.AUTO",
    "seq": 3,
    "date": "2024-02-14",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "Camille Laurent",
    "role_ref_resolved_id": null,
    "note": "One earlier acquisition was sold at auction to make room for a newer addition, handled by Camille Laurent."
  },
  {
    "event_id": "EVT.01169",
    "asset_id": "AST.KENSINGTONASHWORTH.AUTO",
    "seq": 4,
    "date": "2025-11-30",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A final trophy-tier hypercar was added, completing the current 6-car curated lineup."
  },
  {
    "event_id": "EVT.01170",
    "asset_id": "AST.JESSOPPRENTISS.YACHT",
    "seq": 1,
    "date": "2019-08-04",
    "event_type": "traded_up_from_prior_vessel",
    "role_ref_hint": "Fiona Whitcombe",
    "role_ref_resolved_id": "ROLE.JESSOPPRENTISS.OWNE",
    "note": "The Jessop-Prentiss Family Trust traded up from a smaller flybridge motor yacht to acquire the 32m M/Y Halcyon II, arranged by Fiona Whitcombe."
  },
  {
    "event_id": "EVT.01171",
    "asset_id": "AST.JESSOPPRENTISS.YACHT",
    "seq": 2,
    "date": "2021-05-19",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Halcyon II underwent a major refit of her exterior teak decking and tender garage."
  },
  {
    "event_id": "EVT.01172",
    "asset_id": "AST.JESSOPPRENTISS.YACHT",
    "seq": 3,
    "date": "2023-07-02",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Rashid Al-Amin",
    "role_ref_resolved_id": null,
    "note": "The yacht was entered into a limited charter program during the off-peak season, managed by Rashid Al-Amin."
  },
  {
    "event_id": "EVT.01173",
    "asset_id": "AST.JESSOPPRENTISS.YACHT",
    "seq": 4,
    "date": "2026-01-15",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Jessop-Prentiss Family Trust",
    "role_ref_resolved_id": "PRIN.JESSOP_PRENTISS",
    "note": "Ownership of M/Y Halcyon II was formally transferred into the Jessop-Prentiss Family Trust."
  },
  {
    "event_id": "EVT.01174",
    "asset_id": "AST.JESSOPPRENTISS.AVI",
    "seq": 1,
    "date": "2018-10-22",
    "event_type": "acquired",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Jessop-Prentiss Family Trust acquired this Gulfstream G450 from its previous owner, a Texas-based energy executive."
  },
  {
    "event_id": "EVT.01175",
    "asset_id": "AST.JESSOPPRENTISS.AVI",
    "seq": 2,
    "date": "2020-12-03",
    "event_type": "heavy_maintenance_check",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The aircraft completed a scheduled heavy maintenance inspection at an authorized service facility."
  },
  {
    "event_id": "EVT.01176",
    "asset_id": "AST.JESSOPPRENTISS.AVI",
    "seq": 3,
    "date": "2024-04-27",
    "event_type": "avionics_upgrade",
    "role_ref_hint": "Kenji Watanabe",
    "role_ref_resolved_id": "ROLE.JESSOPPRENTISS.DIRE",
    "note": "Cockpit avionics were upgraded to meet current international airspace requirements, overseen by Kenji Watanabe."
  },
  {
    "event_id": "EVT.01177",
    "asset_id": "AST.JESSOPPRENTISS.RE1",
    "seq": 1,
    "date": "2020-06-11",
    "event_type": "acquired",
    "role_ref_hint": "Larissa Vasquez",
    "role_ref_resolved_id": "ROLE.JESSOPPRENTISS.PRIV",
    "note": "The Newport Penthouse was purchased as a seasonal residence, acquired by Larissa Vasquez on behalf of the trust."
  },
  {
    "event_id": "EVT.01178",
    "asset_id": "AST.JESSOPPRENTISS.RE1",
    "seq": 2,
    "date": "2022-09-16",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The penthouse underwent renovation of its rooftop terrace and interior finishes."
  },
  {
    "event_id": "EVT.01179",
    "asset_id": "AST.JESSOPPRENTISS.RE1",
    "seq": 3,
    "date": "2025-03-08",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Noelani Kahale",
    "role_ref_resolved_id": null,
    "note": "Title to the Newport Penthouse was formally transferred into the Jessop-Prentiss Family Trust, coordinated by Noelani Kahale."
  },
  {
    "event_id": "EVT.01180",
    "asset_id": "AST.GREVILLEBRACKENRIDGE.YACHT",
    "seq": 1,
    "date": "2019-11-08",
    "event_type": "acquired",
    "role_ref_hint": "Greville-Brackenridge Holdings",
    "role_ref_resolved_id": "PRIN.GREVILLE_BRACKENRIDGE",
    "note": "Greville-Brackenridge Holdings took delivery of the newly built 90m M/Y Flourish directly from the yard."
  },
  {
    "event_id": "EVT.01181",
    "asset_id": "AST.GREVILLEBRACKENRIDGE.YACHT",
    "seq": 2,
    "date": "2022-02-27",
    "event_type": "major_refit",
    "role_ref_hint": "Estelle Coetzee",
    "role_ref_resolved_id": "ROLE.GREVILLEBRACKENRIDGE.OWNE",
    "note": "The yacht underwent an early major refit to upgrade her tender and toy garage systems, overseen by Estelle Coetzee."
  },
  {
    "event_id": "EVT.01182",
    "asset_id": "AST.GREVILLEBRACKENRIDGE.YACHT",
    "seq": 3,
    "date": "2024-08-30",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Hassan El-Sayed",
    "role_ref_resolved_id": null,
    "note": "M/Y Flourish entered a limited high-season charter program, managed by Hassan El-Sayed."
  },
  {
    "event_id": "EVT.01183",
    "asset_id": "AST.GREVILLEBRACKENRIDGE.RE1",
    "seq": 1,
    "date": "2018-04-19",
    "event_type": "acquired",
    "role_ref_hint": "Dimitri Volkov",
    "role_ref_resolved_id": null,
    "note": "The Miami property was acquired as a mixed-use holding within the family's real estate portfolio, arranged by Dimitri Volkov."
  },
  {
    "event_id": "EVT.01184",
    "asset_id": "AST.GREVILLEBRACKENRIDGE.RE1",
    "seq": 2,
    "date": "2021-10-05",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The property underwent renovation of its street-level and upper-floor spaces."
  },
  {
    "event_id": "EVT.01185",
    "asset_id": "AST.GREVILLEBRACKENRIDGE.RE1",
    "seq": 3,
    "date": "2024-12-12",
    "event_type": "refinanced",
    "role_ref_hint": "Greville-Brackenridge Holdings",
    "role_ref_resolved_id": "PRIN.GREVILLE_BRACKENRIDGE",
    "note": "The holding was refinanced as part of a broader portfolio restructuring led by Greville-Brackenridge Holdings."
  },
  {
    "event_id": "EVT.01186",
    "asset_id": "AST.GREVILLEBRACKENRIDGE.RE2",
    "seq": 1,
    "date": "2019-06-14",
    "event_type": "acquired",
    "role_ref_hint": "Bridget Callahan",
    "role_ref_resolved_id": null,
    "note": "The Hamptons Vineyard Estate was purchased as a seasonal secondary residence, acquired by Bridget Callahan."
  },
  {
    "event_id": "EVT.01187",
    "asset_id": "AST.GREVILLEBRACKENRIDGE.RE2",
    "seq": 2,
    "date": "2022-07-21",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The estate's main house and vineyard outbuildings were renovated."
  },
  {
    "event_id": "EVT.01188",
    "asset_id": "AST.GREVILLEBRACKENRIDGE.RE2",
    "seq": 3,
    "date": "2025-09-03",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Tom\u00e1s Rivera",
    "role_ref_resolved_id": null,
    "note": "Title to the estate was transferred into the Greville-Brackenridge Holdings structure, coordinated by Tom\u00e1s Rivera."
  },
  {
    "event_id": "EVT.01189",
    "asset_id": "AST.GREVILLEBRACKENRIDGE.AUTO",
    "seq": 1,
    "date": "2020-03-11",
    "event_type": "acquired",
    "role_ref_hint": "Lena Brandt",
    "role_ref_resolved_id": null,
    "note": "The 4-car collection was assembled with a period classic and a modern hypercar anchoring the set, curated by Lena Brandt."
  },
  {
    "event_id": "EVT.01190",
    "asset_id": "AST.GREVILLEBRACKENRIDGE.AUTO",
    "seq": 2,
    "date": "2023-05-29",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A blue-chip modern exotic was added to round out the collection."
  },
  {
    "event_id": "EVT.01191",
    "asset_id": "AST.GREVILLEBRACKENRIDGE.AUTO",
    "seq": 3,
    "date": "2025-12-19",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "One earlier vehicle was sold to a private collector to refresh the collection's composition."
  },
  {
    "event_id": "EVT.01192",
    "asset_id": "AST.CAVANAUGHALDERTON.YACHT",
    "seq": 1,
    "date": "2018-09-25",
    "event_type": "acquired",
    "role_ref_hint": "Cavanaugh-Alderton Family Office Trust",
    "role_ref_resolved_id": "PRIN.CAVANAUGH_ALDERTON",
    "note": "The Cavanaugh-Alderton Family Office Trust acquired the 70m M/Y Flourish from her previous owner, a Middle Eastern trading family."
  },
  {
    "event_id": "EVT.01193",
    "asset_id": "AST.CAVANAUGHALDERTON.YACHT",
    "seq": 2,
    "date": "2021-04-08",
    "event_type": "major_refit",
    "role_ref_hint": "Devraj Kapoor",
    "role_ref_resolved_id": "ROLE.CAVANAUGHALDERTON.OWNE",
    "note": "The yacht underwent a major refit including new stabilizers and updated guest suite interiors, overseen by Devraj Kapoor."
  },
  {
    "event_id": "EVT.01194",
    "asset_id": "AST.CAVANAUGHALDERTON.YACHT",
    "seq": 3,
    "date": "2023-11-14",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Ingrid Thorsen",
    "role_ref_resolved_id": "ROLE.CAVANAUGHALDERTON.FLIG",
    "note": "M/Y Flourish was entered into a seasonal charter program, managed by Ingrid Thorsen."
  },
  {
    "event_id": "EVT.01195",
    "asset_id": "AST.CAVANAUGHALDERTON.YACHT",
    "seq": 4,
    "date": "2026-02-01",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Cavanaugh-Alderton Family Office Trust",
    "role_ref_resolved_id": "PRIN.CAVANAUGH_ALDERTON",
    "note": "Ownership of the vessel was formally consolidated under the Cavanaugh-Alderton Family Office Trust."
  },
  {
    "event_id": "EVT.01196",
    "asset_id": "AST.CAVANAUGHALDERTON.AVI",
    "seq": 1,
    "date": "2020-01-17",
    "event_type": "acquired",
    "role_ref_hint": "Callum Bramwell",
    "role_ref_resolved_id": null,
    "note": "The trust acquired this Airbus H175 as its primary offshore and executive-transport helicopter, arranged by Callum Bramwell."
  },
  {
    "event_id": "EVT.01197",
    "asset_id": "AST.CAVANAUGHALDERTON.AVI",
    "seq": 2,
    "date": "2022-06-22",
    "event_type": "heavy_maintenance_check",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The helicopter completed scheduled heavy maintenance and a rotor-system inspection."
  },
  {
    "event_id": "EVT.01198",
    "asset_id": "AST.CAVANAUGHALDERTON.AVI",
    "seq": 3,
    "date": "2025-04-10",
    "event_type": "avionics_upgrade",
    "role_ref_hint": "Odalys Ferreira",
    "role_ref_resolved_id": null,
    "note": "The H175 received an avionics and communications suite upgrade, coordinated by Odalys Ferreira."
  },
  {
    "event_id": "EVT.01199",
    "asset_id": "AST.CAVANAUGHALDERTON.AUTO",
    "seq": 1,
    "date": "2019-03-30",
    "event_type": "acquired",
    "role_ref_hint": "Ravi Chandran",
    "role_ref_resolved_id": null,
    "note": "The core 6-car collection was assembled, anchored by a period classic and a modern hypercar, curated by Ravi Chandran."
  },
  {
    "event_id": "EVT.01200",
    "asset_id": "AST.CAVANAUGHALDERTON.AUTO",
    "seq": 2,
    "date": "2021-08-16",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Two limited-run modern exotics were added to broaden the collection's rarity spread."
  },
  {
    "event_id": "EVT.01201",
    "asset_id": "AST.CAVANAUGHALDERTON.AUTO",
    "seq": 3,
    "date": "2024-05-23",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "Niamh O'Sullivan",
    "role_ref_resolved_id": "ROLE.CAVANAUGHALDERTON.COLL",
    "note": "An earlier acquisition was sold at auction to fund a newer addition, handled by Niamh O'Sullivan."
  },
  {
    "event_id": "EVT.01202",
    "asset_id": "AST.CAVANAUGHALDERTON.AUTO",
    "seq": 4,
    "date": "2025-10-07",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A trophy-tier hypercar was added, completing the current 6-car lineup."
  },
  {
    "event_id": "EVT.01203",
    "asset_id": "AST.HOLLOWELLDEVENPORT.YACHT",
    "seq": 1,
    "date": "2018-02-14",
    "event_type": "acquired",
    "role_ref_hint": "Hollowell-Devenport Family Holdings",
    "role_ref_resolved_id": "PRIN.HOLLOWELL_DEVENPORT",
    "note": "Hollowell-Devenport Family Holdings acquired the 32m M/Y Ember from her previous owner, a South American agribusiness family."
  },
  {
    "event_id": "EVT.01204",
    "asset_id": "AST.HOLLOWELLDEVENPORT.YACHT",
    "seq": 2,
    "date": "2020-10-19",
    "event_type": "major_refit",
    "role_ref_hint": "Xavier Beaumont",
    "role_ref_resolved_id": "ROLE.HOLLOWELLDEVENPORT.OWNE",
    "note": "M/Y Ember underwent a major refit of her engines and exterior paintwork, overseen by Xavier Beaumont."
  },
  {
    "event_id": "EVT.01205",
    "asset_id": "AST.HOLLOWELLDEVENPORT.YACHT",
    "seq": 3,
    "date": "2023-03-27",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Adaeze Nwosu",
    "role_ref_resolved_id": null,
    "note": "The yacht was placed into a limited charter program during the Mediterranean season, managed by Adaeze Nwosu."
  },
  {
    "event_id": "EVT.01206",
    "asset_id": "AST.HOLLOWELLDEVENPORT.RE1",
    "seq": 1,
    "date": "2019-07-09",
    "event_type": "acquired",
    "role_ref_hint": "Soren Lindqvist",
    "role_ref_resolved_id": null,
    "note": "The Napa Valley Ranch Estate was acquired as a primary West Coast residence and working vineyard, purchased by Soren Lindqvist."
  },
  {
    "event_id": "EVT.01207",
    "asset_id": "AST.HOLLOWELLDEVENPORT.RE1",
    "seq": 2,
    "date": "2021-12-01",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The main residence and winery facilities underwent a full renovation."
  },
  {
    "event_id": "EVT.01208",
    "asset_id": "AST.HOLLOWELLDEVENPORT.RE1",
    "seq": 3,
    "date": "2024-06-06",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Bashir Osman",
    "role_ref_resolved_id": "ROLE.HOLLOWELLDEVENPORT.DIRE",
    "note": "Title to the estate was transferred into the Hollowell-Devenport Family Holdings structure, coordinated by Bashir Osman."
  },
  {
    "event_id": "EVT.01209",
    "asset_id": "AST.HOLLOWELLDEVENPORT.AUTO",
    "seq": 1,
    "date": "2020-05-15",
    "event_type": "acquired",
    "role_ref_hint": "Consuela Marin",
    "role_ref_resolved_id": "ROLE.HOLLOWELLDEVENPORT.COLL",
    "note": "The 4-car collection was assembled around a period classic and a modern hypercar, curated by Consuela Marin."
  },
  {
    "event_id": "EVT.01210",
    "asset_id": "AST.HOLLOWELLDEVENPORT.AUTO",
    "seq": 2,
    "date": "2022-11-11",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A second limited-run modern exotic was added to the collection."
  },
  {
    "event_id": "EVT.01211",
    "asset_id": "AST.HOLLOWELLDEVENPORT.AUTO",
    "seq": 3,
    "date": "2025-08-20",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "Farrukh Nazarov",
    "role_ref_resolved_id": "ROLE.HOLLOWELLDEVENPORT.SENI",
    "note": "One vehicle was sold to a private buyer to make room for a new acquisition, handled by Farrukh Nazarov."
  },
  {
    "event_id": "EVT.01212",
    "asset_id": "AST.JARNACFOXLEIGH.YACHT",
    "seq": 1,
    "date": "2019-04-12",
    "event_type": "acquired",
    "role_ref_hint": "Jarnac-Foxleigh Family Office",
    "role_ref_resolved_id": "PRIN.JARNAC_FOXLEIGH",
    "note": "Jarnac-Foxleigh Family Office acquired M/Y Nautilus from her previous owner, a Greek shipping family, through a private brokered sale in Monaco."
  },
  {
    "event_id": "EVT.01213",
    "asset_id": "AST.JARNACFOXLEIGH.YACHT",
    "seq": 2,
    "date": "2021-09-03",
    "event_type": "major_refit",
    "role_ref_hint": "Colm Fitzgerald",
    "role_ref_resolved_id": null,
    "note": "A twelve-month refit at a Dutch yard replaced the stabilizers and refreshed the guest interior, overseen on the family's behalf by Colm Fitzgerald."
  },
  {
    "event_id": "EVT.01214",
    "asset_id": "AST.JARNACFOXLEIGH.YACHT",
    "seq": 3,
    "date": "2023-11-20",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Jarnac-Foxleigh Family Office",
    "role_ref_resolved_id": "PRIN.JARNAC_FOXLEIGH",
    "note": "Registered ownership of the vessel was restructured into the Jarnac-Foxleigh Family Office holding entity as part of a broader estate-planning exercise."
  },
  {
    "event_id": "EVT.01215",
    "asset_id": "AST.JARNACFOXLEIGH.YACHT",
    "seq": 4,
    "date": "2025-06-15",
    "event_type": "reappraised",
    "role_ref_hint": "Nadia Petrov",
    "role_ref_resolved_id": "ROLE.JARNACFOXLEIGH.OWNE",
    "note": "The insured hull value was revised upward following a post-refit marine survey commissioned by Nadia Petrov."
  },
  {
    "event_id": "EVT.01216",
    "asset_id": "AST.JARNACFOXLEIGH.RE1",
    "seq": 1,
    "date": "2018-05-22",
    "event_type": "acquired",
    "role_ref_hint": "Jarnac-Foxleigh Family Office",
    "role_ref_resolved_id": "PRIN.JARNAC_FOXLEIGH",
    "note": "Jarnac-Foxleigh Family Office purchased the compound from its previous owner, a retired Los Angeles entertainment executive."
  },
  {
    "event_id": "EVT.01217",
    "asset_id": "AST.JARNACFOXLEIGH.RE1",
    "seq": 2,
    "date": "2020-08-09",
    "event_type": "renovated",
    "role_ref_hint": "Aditi Rao",
    "role_ref_resolved_id": null,
    "note": "The main residence and guest house were fully renovated, with the project managed by Aditi Rao."
  },
  {
    "event_id": "EVT.01218",
    "asset_id": "AST.JARNACFOXLEIGH.RE1",
    "seq": 3,
    "date": "2024-02-28",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Jarnac-Foxleigh Family Office",
    "role_ref_resolved_id": "PRIN.JARNAC_FOXLEIGH",
    "note": "The property was deeded into the Jarnac-Foxleigh Family Office trust structure alongside the family's other principal holdings."
  },
  {
    "event_id": "EVT.01219",
    "asset_id": "AST.UNDERHILLFARLEIGH.YACHT",
    "seq": 1,
    "date": "2019-03-14",
    "event_type": "acquired",
    "role_ref_hint": "Underhill-Farleigh Family Trust",
    "role_ref_resolved_id": "PRIN.UNDERHILL_FARLEIGH",
    "note": "Underhill-Farleigh Family Trust acquired M/Y Kinship from her previous owner, a Swiss private-equity investor, at a Fort Lauderdale brokerage sale."
  },
  {
    "event_id": "EVT.01220",
    "asset_id": "AST.UNDERHILLFARLEIGH.YACHT",
    "seq": 2,
    "date": "2021-07-30",
    "event_type": "major_refit",
    "role_ref_hint": "Desmond Achebe",
    "role_ref_resolved_id": "ROLE.UNDERHILLFARLEIGH.OWNE",
    "note": "Engine room systems and exterior teak were overhauled during a scheduled refit coordinated by Desmond Achebe."
  },
  {
    "event_id": "EVT.01221",
    "asset_id": "AST.UNDERHILLFARLEIGH.YACHT",
    "seq": 3,
    "date": "2023-10-05",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Ingrid Halvorsen",
    "role_ref_resolved_id": "ROLE.UNDERHILLFARLEIGH.PROP",
    "note": "The vessel was placed into limited seasonal charter to offset running costs, arranged under Ingrid Halvorsen's oversight."
  },
  {
    "event_id": "EVT.01222",
    "asset_id": "AST.UNDERHILLFARLEIGH.YACHT",
    "seq": 4,
    "date": "2025-04-18",
    "event_type": "reappraised",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The hull's insured value was reassessed following a routine class survey."
  },
  {
    "event_id": "EVT.01223",
    "asset_id": "AST.UNDERHILLFARLEIGH.RE1",
    "seq": 1,
    "date": "2018-11-02",
    "event_type": "acquired",
    "role_ref_hint": "Underhill-Farleigh Family Trust",
    "role_ref_resolved_id": "PRIN.UNDERHILL_FARLEIGH",
    "note": "Underhill-Farleigh Family Trust acquired the Aspen property from its previous owner, a Texas energy-sector family."
  },
  {
    "event_id": "EVT.01224",
    "asset_id": "AST.UNDERHILLFARLEIGH.RE1",
    "seq": 2,
    "date": "2022-01-17",
    "event_type": "renovated",
    "role_ref_hint": "Camille Duval",
    "role_ref_resolved_id": "ROLE.UNDERHILLFARLEIGH.HOUS",
    "note": "The property underwent a full interior renovation directed by Camille Duval."
  },
  {
    "event_id": "EVT.01225",
    "asset_id": "AST.UNDERHILLFARLEIGH.RE1",
    "seq": 3,
    "date": "2025-09-11",
    "event_type": "refinanced",
    "role_ref_hint": "Farrukh Karimov",
    "role_ref_resolved_id": "ROLE.UNDERHILLFARLEIGH.DIRE",
    "note": "The holding was refinanced against improved market comparables, arranged by Farrukh Karimov."
  },
  {
    "event_id": "EVT.01226",
    "asset_id": "AST.UNDERHILLFARLEIGH.RE2",
    "seq": 1,
    "date": "2020-06-25",
    "event_type": "acquired",
    "role_ref_hint": "Yusuf Demir",
    "role_ref_resolved_id": null,
    "note": "The villa was purchased as a secondary residence, with the acquisition led by Yusuf Demir on the family's behalf."
  },
  {
    "event_id": "EVT.01227",
    "asset_id": "AST.UNDERHILLFARLEIGH.RE2",
    "seq": 2,
    "date": "2023-05-09",
    "event_type": "renovated",
    "role_ref_hint": "Odalys Reyes",
    "role_ref_resolved_id": null,
    "note": "Storm-related exterior repairs and a dock rebuild were completed, overseen by Odalys Reyes."
  },
  {
    "event_id": "EVT.01228",
    "asset_id": "AST.UNDERHILLFARLEIGH.AUTO",
    "seq": 1,
    "date": "2018-09-01",
    "event_type": "acquired",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The core of the collection was assembled beginning with a handful of period classics purchased from various private sellers and auction houses."
  },
  {
    "event_id": "EVT.01229",
    "asset_id": "AST.UNDERHILLFARLEIGH.AUTO",
    "seq": 2,
    "date": "2020-11-14",
    "event_type": "expanded_collection",
    "role_ref_hint": "Desmond Achebe",
    "role_ref_resolved_id": "ROLE.UNDERHILLFARLEIGH.OWNE",
    "note": "Several limited-run modern exotics were added to the garage, with acquisitions guided by Desmond Achebe."
  },
  {
    "event_id": "EVT.01230",
    "asset_id": "AST.UNDERHILLFARLEIGH.AUTO",
    "seq": 3,
    "date": "2022-06-08",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A hypercar-tier anchor piece was acquired at auction, purchased from its previous owner, a Hong Kong-based collector."
  },
  {
    "event_id": "EVT.01231",
    "asset_id": "AST.UNDERHILLFARLEIGH.AUTO",
    "seq": 4,
    "date": "2024-12-03",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "Ingrid Halvorsen",
    "role_ref_resolved_id": "ROLE.UNDERHILLFARLEIGH.PROP",
    "note": "Two duplicate-era classics were sold out of the collection to fund further acquisitions, a decision made by Ingrid Halvorsen."
  },
  {
    "event_id": "EVT.01232",
    "asset_id": "AST.ELPHINSTONEJARNAC.YACHT",
    "seq": 1,
    "date": "2019-02-19",
    "event_type": "acquired",
    "role_ref_hint": "Elphinstone-Jarnac Holdings",
    "role_ref_resolved_id": "PRIN.ELPHINSTONE_JARNAC",
    "note": "Elphinstone-Jarnac Holdings acquired M/Y Quill from her previous owner, an Italian industrial family, through a private sale."
  },
  {
    "event_id": "EVT.01233",
    "asset_id": "AST.ELPHINSTONEJARNAC.YACHT",
    "seq": 2,
    "date": "2022-08-27",
    "event_type": "major_refit",
    "role_ref_hint": "Vikram Chandrasekaran",
    "role_ref_resolved_id": "ROLE.ELPHINSTONEJARNAC.OWNE",
    "note": "A comprehensive refit replaced the vessel's navigation suite and refreshed guest cabins, managed by Vikram Chandrasekaran."
  },
  {
    "event_id": "EVT.01234",
    "asset_id": "AST.ELPHINSTONEJARNAC.YACHT",
    "seq": 3,
    "date": "2024-03-15",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Elphinstone-Jarnac Holdings",
    "role_ref_resolved_id": "PRIN.ELPHINSTONE_JARNAC",
    "note": "Ownership was consolidated under Elphinstone-Jarnac Holdings as part of a wider corporate restructuring."
  },
  {
    "event_id": "EVT.01235",
    "asset_id": "AST.ELPHINSTONEJARNAC.AVI",
    "seq": 1,
    "date": "2020-04-06",
    "event_type": "acquired",
    "role_ref_hint": "Siobhan McAllister",
    "role_ref_resolved_id": "ROLE.ELPHINSTONEJARNAC.HOUS",
    "note": "The helicopter was purchased for family and executive transport, with the acquisition overseen by Siobhan McAllister."
  },
  {
    "event_id": "EVT.01236",
    "asset_id": "AST.ELPHINSTONEJARNAC.AVI",
    "seq": 2,
    "date": "2022-10-11",
    "event_type": "major_overhaul",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A scheduled heavy maintenance overhaul was completed, including engine and rotor system inspection."
  },
  {
    "event_id": "EVT.01237",
    "asset_id": "AST.ELPHINSTONEJARNAC.AVI",
    "seq": 3,
    "date": "2025-07-02",
    "event_type": "reappraised",
    "role_ref_hint": "Rosalind Achterberg",
    "role_ref_resolved_id": null,
    "note": "The insured hull value was updated following an avionics upgrade arranged by Rosalind Achterberg."
  },
  {
    "event_id": "EVT.01238",
    "asset_id": "AST.ELPHINSTONEJARNAC.RE1",
    "seq": 1,
    "date": "2018-12-14",
    "event_type": "acquired",
    "role_ref_hint": "Elphinstone-Jarnac Holdings",
    "role_ref_resolved_id": "PRIN.ELPHINSTONE_JARNAC",
    "note": "Elphinstone-Jarnac Holdings purchased the estate from its previous owner, a Pacific Northwest timber family."
  },
  {
    "event_id": "EVT.01239",
    "asset_id": "AST.ELPHINSTONEJARNAC.RE1",
    "seq": 2,
    "date": "2021-05-20",
    "event_type": "renovated",
    "role_ref_hint": "Th\u00e9o Lindqvist",
    "role_ref_resolved_id": null,
    "note": "The main house underwent a full renovation, with the project directed by Th\u00e9o Lindqvist."
  },
  {
    "event_id": "EVT.01240",
    "asset_id": "AST.ELPHINSTONEJARNAC.RE1",
    "seq": 3,
    "date": "2024-09-30",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Elphinstone-Jarnac Holdings",
    "role_ref_resolved_id": "PRIN.ELPHINSTONE_JARNAC",
    "note": "The property was folded into the Elphinstone-Jarnac Holdings structure alongside the family's other real estate."
  },
  {
    "event_id": "EVT.01241",
    "asset_id": "AST.PRENTISSESTERHAZY.YACHT",
    "seq": 1,
    "date": "2019-06-28",
    "event_type": "acquired",
    "role_ref_hint": "Prentiss-Esterhazy Family Office Trust",
    "role_ref_resolved_id": "PRIN.PRENTISS_ESTERHAZY",
    "note": "Prentiss-Esterhazy Family Office Trust acquired M/Y Zenith from her previous owner, a Middle Eastern royal family, in a privately negotiated sale."
  },
  {
    "event_id": "EVT.01242",
    "asset_id": "AST.PRENTISSESTERHAZY.YACHT",
    "seq": 2,
    "date": "2021-11-09",
    "event_type": "major_refit",
    "role_ref_hint": "Isabela Cortez",
    "role_ref_resolved_id": "ROLE.PRENTISSESTERHAZY.OWNE",
    "note": "A two-year refit programme replaced the exterior paint system and upgraded the tender garage, overseen by Isabela Cortez."
  },
  {
    "event_id": "EVT.01243",
    "asset_id": "AST.PRENTISSESTERHAZY.YACHT",
    "seq": 3,
    "date": "2023-08-22",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Declan Whitfield",
    "role_ref_resolved_id": null,
    "note": "The vessel entered limited high-season charter availability under an arrangement managed by Declan Whitfield."
  },
  {
    "event_id": "EVT.01244",
    "asset_id": "AST.PRENTISSESTERHAZY.YACHT",
    "seq": 4,
    "date": "2026-01-10",
    "event_type": "reappraised",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The insured hull value was reassessed by the underwriter's appraiser following completion of the refit programme."
  },
  {
    "event_id": "EVT.01245",
    "asset_id": "AST.PRENTISSESTERHAZY.RE1",
    "seq": 1,
    "date": "2018-07-03",
    "event_type": "acquired",
    "role_ref_hint": "Prentiss-Esterhazy Family Office Trust",
    "role_ref_resolved_id": "PRIN.PRENTISS_ESTERHAZY",
    "note": "Prentiss-Esterhazy Family Office Trust purchased the estate from its previous owner, a Milanese industrial family."
  },
  {
    "event_id": "EVT.01246",
    "asset_id": "AST.PRENTISSESTERHAZY.RE1",
    "seq": 2,
    "date": "2020-09-16",
    "event_type": "renovated",
    "role_ref_hint": "Naledi Mthembu",
    "role_ref_resolved_id": null,
    "note": "The lakefront villa and gardens were restored under the direction of Naledi Mthembu."
  },
  {
    "event_id": "EVT.01247",
    "asset_id": "AST.PRENTISSESTERHAZY.RE1",
    "seq": 3,
    "date": "2024-04-25",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Prentiss-Esterhazy Family Office Trust",
    "role_ref_resolved_id": "PRIN.PRENTISS_ESTERHAZY",
    "note": "The property was retitled under the Prentiss-Esterhazy Family Office Trust as part of a broader succession plan."
  },
  {
    "event_id": "EVT.01248",
    "asset_id": "AST.PRENTISSESTERHAZY.AUTO",
    "seq": 1,
    "date": "2019-10-12",
    "event_type": "acquired",
    "role_ref_hint": "Soren Kjaer",
    "role_ref_resolved_id": null,
    "note": "The founding pieces of the collection were purchased at auction, with selections guided by Soren Kjaer."
  },
  {
    "event_id": "EVT.01249",
    "asset_id": "AST.PRENTISSESTERHAZY.AUTO",
    "seq": 2,
    "date": "2022-02-04",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A second period classic and a limited-run modern exotic were added to the garage."
  },
  {
    "event_id": "EVT.01250",
    "asset_id": "AST.PRENTISSESTERHAZY.AUTO",
    "seq": 3,
    "date": "2025-03-19",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A blue-chip modern exotic was acquired from its previous owner, a German industrialist, to round out the collection."
  },
  {
    "event_id": "EVT.01251",
    "asset_id": "AST.INGLEWOODGROSVENOR.RE1",
    "seq": 1,
    "date": "2018-03-30",
    "event_type": "acquired",
    "role_ref_hint": "Inglewood-Grosvenor Family Partnership",
    "role_ref_resolved_id": "PRIN.INGLEWOOD_GROSVENOR",
    "note": "Inglewood-Grosvenor Family Partnership acquired the estate from its previous owner, a founding Hollywood studio family."
  },
  {
    "event_id": "EVT.01252",
    "asset_id": "AST.INGLEWOODGROSVENOR.RE1",
    "seq": 2,
    "date": "2021-01-25",
    "event_type": "renovated",
    "role_ref_hint": "Fenella Brightwater",
    "role_ref_resolved_id": null,
    "note": "A historically sensitive restoration of the main residence was completed, directed by Fenella Brightwater."
  },
  {
    "event_id": "EVT.01253",
    "asset_id": "AST.INGLEWOODGROSVENOR.RE1",
    "seq": 3,
    "date": "2024-06-11",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Inglewood-Grosvenor Family Partnership",
    "role_ref_resolved_id": "PRIN.INGLEWOOD_GROSVENOR",
    "note": "The estate was retitled under the Inglewood-Grosvenor Family Partnership structure."
  },
  {
    "event_id": "EVT.01254",
    "asset_id": "AST.INGLEWOODGROSVENOR.AUTO",
    "seq": 1,
    "date": "2020-05-08",
    "event_type": "acquired",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The collection's initial cars were purchased from a mix of private sellers and regional auctions."
  },
  {
    "event_id": "EVT.01255",
    "asset_id": "AST.INGLEWOODGROSVENOR.AUTO",
    "seq": 2,
    "date": "2022-09-17",
    "event_type": "expanded_collection",
    "role_ref_hint": "Omar Al-Rashid",
    "role_ref_resolved_id": null,
    "note": "A second modern exotic was added, with the purchase arranged by Omar Al-Rashid."
  },
  {
    "event_id": "EVT.01256",
    "asset_id": "AST.INGLEWOODGROSVENOR.AUTO",
    "seq": 3,
    "date": "2025-02-27",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "Katarina Novak",
    "role_ref_resolved_id": null,
    "note": "One earlier-era vehicle was sold to make room for a more recent acquisition, a decision made by Katarina Novak."
  },
  {
    "event_id": "EVT.01257",
    "asset_id": "AST.LINDQVISTPELHAM.YACHT",
    "seq": 1,
    "date": "2019-05-14",
    "event_type": "acquired",
    "role_ref_hint": "Ingrid Solvang",
    "role_ref_resolved_id": "ROLE.LINDQVISTPELHAM.OWNE",
    "note": "Ingrid Solvang purchased M/Y Nirvana from the previous owner, a Monaco-based shipping family, as the household's entry into the 20m flybridge motor yacht segment."
  },
  {
    "event_id": "EVT.01258",
    "asset_id": "AST.LINDQVISTPELHAM.YACHT",
    "seq": 2,
    "date": "2021-09-02",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Nirvana underwent an interior refit and engine overhaul at a Fort Lauderdale yard to extend her charter-ready condition."
  },
  {
    "event_id": "EVT.01259",
    "asset_id": "AST.LINDQVISTPELHAM.YACHT",
    "seq": 3,
    "date": "2023-11-20",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Lindqvist-Pelham Family Trust",
    "role_ref_resolved_id": "PRIN.LINDQVIST_PELHAM",
    "note": "Ownership of M/Y Nirvana was transferred into the Lindqvist-Pelham Family Trust as part of a broader estate-planning restructuring."
  },
  {
    "event_id": "EVT.01260",
    "asset_id": "AST.LINDQVISTPELHAM.YACHT",
    "seq": 4,
    "date": "2025-06-10",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Jonas Eklund",
    "role_ref_resolved_id": null,
    "note": "M/Y Nirvana was placed into a limited seasonal charter program managed by Jonas Eklund to offset annual carrying costs."
  },
  {
    "event_id": "EVT.01261",
    "asset_id": "AST.LINDQVISTPELHAM.RE1",
    "seq": 1,
    "date": "2018-07-03",
    "event_type": "acquired",
    "role_ref_hint": "Ingrid Solvang",
    "role_ref_resolved_id": "ROLE.LINDQVISTPELHAM.OWNE",
    "note": "Ingrid Solvang purchased the Telluride Beachfront Villa as the family's primary mountain residence."
  },
  {
    "event_id": "EVT.01262",
    "asset_id": "AST.LINDQVISTPELHAM.RE1",
    "seq": 2,
    "date": "2020-10-15",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The property underwent a full kitchen and primary suite renovation to modernize the residence for year-round use."
  },
  {
    "event_id": "EVT.01263",
    "asset_id": "AST.LINDQVISTPELHAM.RE1",
    "seq": 3,
    "date": "2024-03-08",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Lindqvist-Pelham Family Trust",
    "role_ref_resolved_id": "PRIN.LINDQVIST_PELHAM",
    "note": "Title to the Telluride Beachfront Villa was transferred into the Lindqvist-Pelham Family Trust."
  },
  {
    "event_id": "EVT.01264",
    "asset_id": "AST.LINDQVISTPELHAM.AUTO",
    "seq": 1,
    "date": "2018-02-20",
    "event_type": "expanded_collection",
    "role_ref_hint": "Femi Adeyemi",
    "role_ref_resolved_id": null,
    "note": "Femi Adeyemi began consolidating scattered individual acquisitions into a single curated 18-car collection housed in a dedicated climate-controlled facility."
  },
  {
    "event_id": "EVT.01265",
    "asset_id": "AST.LINDQVISTPELHAM.AUTO",
    "seq": 2,
    "date": "2021-05-11",
    "event_type": "expanded_collection",
    "role_ref_hint": "Femi Adeyemi",
    "role_ref_resolved_id": null,
    "note": "Two limited-run modern hypercars were added to the collection, broadening its post-2015 bench."
  },
  {
    "event_id": "EVT.01266",
    "asset_id": "AST.LINDQVISTPELHAM.AUTO",
    "seq": 3,
    "date": "2023-08-30",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "Femi Adeyemi",
    "role_ref_resolved_id": null,
    "note": "One early-2000s exotic was deaccessioned at auction to fund the acquisition of a trophy-tier classic."
  },
  {
    "event_id": "EVT.01267",
    "asset_id": "AST.LINDQVISTPELHAM.AUTO",
    "seq": 4,
    "date": "2025-04-17",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Lindqvist-Pelham Family Trust",
    "role_ref_resolved_id": "PRIN.LINDQVIST_PELHAM",
    "note": "The full 18-car collection was retitled under the Lindqvist-Pelham Family Trust for succession planning."
  },
  {
    "event_id": "EVT.01268",
    "asset_id": "AST.YARDLEYOGILVIE.YACHT",
    "seq": 1,
    "date": "2020-06-01",
    "event_type": "acquired",
    "role_ref_hint": "Declan Whitfield",
    "role_ref_resolved_id": "ROLE.YARDLEYOGILVIE.DIRE",
    "note": "Declan Whitfield purchased M/Y Flourish as a coastal day/weekend cruiser."
  },
  {
    "event_id": "EVT.01269",
    "asset_id": "AST.YARDLEYOGILVIE.YACHT",
    "seq": 2,
    "date": "2022-08-19",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Flourish received new electronics and a canvas/upholstery refresh."
  },
  {
    "event_id": "EVT.01270",
    "asset_id": "AST.YARDLEYOGILVIE.YACHT",
    "seq": 3,
    "date": "2024-09-05",
    "event_type": "traded_up_from_prior_vessel",
    "role_ref_hint": "Declan Whitfield",
    "role_ref_resolved_id": "ROLE.YARDLEYOGILVIE.DIRE",
    "note": "The vessel was retained as a secondary tender-scale boat after the family's primary yacht purchase."
  },
  {
    "event_id": "EVT.01271",
    "asset_id": "AST.YARDLEYOGILVIE.RE1",
    "seq": 1,
    "date": "2018-04-22",
    "event_type": "acquired",
    "role_ref_hint": "Noor Khalil",
    "role_ref_resolved_id": null,
    "note": "Noor Khalil purchased the Lake Como Villa as the family's primary European residence."
  },
  {
    "event_id": "EVT.01272",
    "asset_id": "AST.YARDLEYOGILVIE.RE1",
    "seq": 2,
    "date": "2021-07-14",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The villa underwent a full restoration of its lakeside terraces and boathouse."
  },
  {
    "event_id": "EVT.01273",
    "asset_id": "AST.YARDLEYOGILVIE.RE1",
    "seq": 3,
    "date": "2023-12-01",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Yardley-Ogilvie Family Office",
    "role_ref_resolved_id": "PRIN.YARDLEY_OGILVIE",
    "note": "The property was transferred into the Yardley-Ogilvie Family Office structure."
  },
  {
    "event_id": "EVT.01274",
    "asset_id": "AST.YARDLEYOGILVIE.RE2",
    "seq": 1,
    "date": "2019-11-08",
    "event_type": "acquired",
    "role_ref_hint": "Anders Falk",
    "role_ref_resolved_id": "ROLE.YARDLEYOGILVIE.TAXD",
    "note": "Anders Falk purchased the Aspen Coastal Estate as a secondary ski-season property."
  },
  {
    "event_id": "EVT.01275",
    "asset_id": "AST.YARDLEYOGILVIE.RE2",
    "seq": 2,
    "date": "2022-02-25",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The estate received a mudroom and ski-storage expansion."
  },
  {
    "event_id": "EVT.01276",
    "asset_id": "AST.YARDLEYOGILVIE.RE2",
    "seq": 3,
    "date": "2025-01-30",
    "event_type": "refinanced",
    "role_ref_hint": "Anders Falk",
    "role_ref_resolved_id": "ROLE.YARDLEYOGILVIE.TAXD",
    "note": "The property was refinanced to fund improvements elsewhere in the portfolio."
  },
  {
    "event_id": "EVT.01277",
    "asset_id": "AST.YARDLEYOGILVIE.RE3",
    "seq": 1,
    "date": "2021-03-16",
    "event_type": "acquired",
    "role_ref_hint": "Lucia Ferraro",
    "role_ref_resolved_id": null,
    "note": "Lucia Ferraro purchased the Vail Villa as a supplementary mountain retreat for extended family use."
  },
  {
    "event_id": "EVT.01278",
    "asset_id": "AST.YARDLEYOGILVIE.RE3",
    "seq": 2,
    "date": "2023-06-09",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Minor interior updates were made to the Vail Villa ahead of the winter season."
  },
  {
    "event_id": "EVT.01279",
    "asset_id": "AST.HEXHAMMERRIVALE.YACHT",
    "seq": 1,
    "date": "2019-03-12",
    "event_type": "acquired",
    "role_ref_hint": "Mireille Bassong",
    "role_ref_resolved_id": "ROLE.HEXHAMMERRIVALE.OWNE",
    "note": "Mireille Bassong took delivery of M/Y Serein directly from the builder, commissioning her as the family's flagship vessel."
  },
  {
    "event_id": "EVT.01280",
    "asset_id": "AST.HEXHAMMERRIVALE.YACHT",
    "seq": 2,
    "date": "2022-01-28",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Serein underwent a scheduled five-year survey and systems refit, including exterior repaint and tender refresh."
  },
  {
    "event_id": "EVT.01281",
    "asset_id": "AST.HEXHAMMERRIVALE.YACHT",
    "seq": 3,
    "date": "2024-10-04",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Hexham-Merrivale Holdings",
    "role_ref_resolved_id": "PRIN.HEXHAM_MERRIVALE",
    "note": "Ownership of M/Y Serein was restructured under Hexham-Merrivale Holdings for liability and succession purposes."
  },
  {
    "event_id": "EVT.01282",
    "asset_id": "AST.HEXHAMMERRIVALE.YACHT",
    "seq": 4,
    "date": "2026-02-19",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Idris Osman",
    "role_ref_resolved_id": "ROLE.HEXHAMMERRIVALE.DIRE",
    "note": "M/Y Serein was made available for a limited number of high-end charter weeks under Idris Osman's management."
  },
  {
    "event_id": "EVT.01283",
    "asset_id": "AST.HEXHAMMERRIVALE.RE1",
    "seq": 1,
    "date": "2018-09-20",
    "event_type": "acquired",
    "role_ref_hint": "Colette Fontaine",
    "role_ref_resolved_id": null,
    "note": "Colette Fontaine purchased the Napa Valley Waterfront Estate as the family's West Coast primary residence."
  },
  {
    "event_id": "EVT.01284",
    "asset_id": "AST.HEXHAMMERRIVALE.RE1",
    "seq": 2,
    "date": "2020-05-17",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The estate's main residence and guest house underwent a full architectural renovation."
  },
  {
    "event_id": "EVT.01285",
    "asset_id": "AST.HEXHAMMERRIVALE.RE1",
    "seq": 3,
    "date": "2023-03-29",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Hexham-Merrivale Holdings",
    "role_ref_resolved_id": "PRIN.HEXHAM_MERRIVALE",
    "note": "The estate was transferred into Hexham-Merrivale Holdings."
  },
  {
    "event_id": "EVT.01286",
    "asset_id": "AST.HEXHAMMERRIVALE.AUTO",
    "seq": 1,
    "date": "2019-06-11",
    "event_type": "expanded_collection",
    "role_ref_hint": "Rafael Contreras",
    "role_ref_resolved_id": null,
    "note": "Rafael Contreras built out the 8-car collection with the addition of a trophy-tier hypercar."
  },
  {
    "event_id": "EVT.01287",
    "asset_id": "AST.HEXHAMMERRIVALE.AUTO",
    "seq": 2,
    "date": "2022-09-23",
    "event_type": "expanded_collection",
    "role_ref_hint": "Rafael Contreras",
    "role_ref_resolved_id": null,
    "note": "A period-correct classic was added to deepen the collection's historic bench."
  },
  {
    "event_id": "EVT.01288",
    "asset_id": "AST.HEXHAMMERRIVALE.AUTO",
    "seq": 3,
    "date": "2025-07-02",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "Rafael Contreras",
    "role_ref_resolved_id": null,
    "note": "One earlier acquisition was deaccessioned at a Gooding & Company sale to make room for a newer hypercar."
  },
  {
    "event_id": "EVT.01289",
    "asset_id": "AST.NORTHCOTECASTELLAN.YACHT",
    "seq": 1,
    "date": "2020-04-09",
    "event_type": "acquired",
    "role_ref_hint": "Amara Chukwu",
    "role_ref_resolved_id": "ROLE.NORTHCOTECASTELLAN.OWNE",
    "note": "Amara Chukwu purchased M/Y Nautilus from the previous owner, a German industrial family, as the household's entry into custom superyacht ownership."
  },
  {
    "event_id": "EVT.01290",
    "asset_id": "AST.NORTHCOTECASTELLAN.YACHT",
    "seq": 2,
    "date": "2022-11-14",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Nautilus underwent an interior refit and navigation systems upgrade."
  },
  {
    "event_id": "EVT.01291",
    "asset_id": "AST.NORTHCOTECASTELLAN.YACHT",
    "seq": 3,
    "date": "2025-05-27",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Northcote-Castellan Family Office Trust",
    "role_ref_resolved_id": "PRIN.NORTHCOTE_CASTELLAN",
    "note": "M/Y Nautilus was retitled under the Northcote-Castellan Family Office Trust."
  },
  {
    "event_id": "EVT.01292",
    "asset_id": "AST.NORTHCOTECASTELLAN.RE1",
    "seq": 1,
    "date": "2018-12-03",
    "event_type": "acquired",
    "role_ref_hint": "Wren Ashcombe",
    "role_ref_resolved_id": "ROLE.NORTHCOTECASTELLAN.PROP",
    "note": "Wren Ashcombe acquired the Greenwich Commercial Plaza as an income-generating addition to the family's real estate holdings."
  },
  {
    "event_id": "EVT.01293",
    "asset_id": "AST.NORTHCOTECASTELLAN.RE1",
    "seq": 2,
    "date": "2021-06-21",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The plaza underwent a facade and common-area modernization to improve tenant retention."
  },
  {
    "event_id": "EVT.01294",
    "asset_id": "AST.NORTHCOTECASTELLAN.RE1",
    "seq": 3,
    "date": "2024-08-16",
    "event_type": "refinanced",
    "role_ref_hint": "Wren Ashcombe",
    "role_ref_resolved_id": "ROLE.NORTHCOTECASTELLAN.PROP",
    "note": "The property was refinanced at improved terms to fund further portfolio acquisitions."
  },
  {
    "event_id": "EVT.01295",
    "asset_id": "AST.NORTHCOTECASTELLAN.AUTO",
    "seq": 1,
    "date": "2019-10-30",
    "event_type": "expanded_collection",
    "role_ref_hint": "Faisal Nasser",
    "role_ref_resolved_id": null,
    "note": "Faisal Nasser assembled the initial core of the 6-car collection around a period classic and a modern exotic."
  },
  {
    "event_id": "EVT.01296",
    "asset_id": "AST.NORTHCOTECASTELLAN.AUTO",
    "seq": 2,
    "date": "2023-02-12",
    "event_type": "expanded_collection",
    "role_ref_hint": "Faisal Nasser",
    "role_ref_resolved_id": null,
    "note": "A second limited-run modern exotic was added, broadening the collection's post-2015 representation."
  },
  {
    "event_id": "EVT.01297",
    "asset_id": "AST.NORTHCOTECASTELLAN.AUTO",
    "seq": 3,
    "date": "2025-09-08",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Northcote-Castellan Family Office Trust",
    "role_ref_resolved_id": "PRIN.NORTHCOTE_CASTELLAN",
    "note": "The collection was retitled under the Northcote-Castellan Family Office Trust."
  },
  {
    "event_id": "EVT.01298",
    "asset_id": "AST.INGLEWOODCAVANAUGH.YACHT",
    "seq": 1,
    "date": "2019-01-22",
    "event_type": "acquired",
    "role_ref_hint": "Odette Marchand",
    "role_ref_resolved_id": "ROLE.INGLEWOODCAVANAUGH.OWNE",
    "note": "Odette Marchand purchased M/Y Ethereal from the previous owner, a Middle Eastern royal family, as the household's flagship vessel."
  },
  {
    "event_id": "EVT.01299",
    "asset_id": "AST.INGLEWOODCAVANAUGH.YACHT",
    "seq": 2,
    "date": "2021-10-06",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Ethereal underwent a full interior refit and exterior repaint at a Netherlands yard."
  },
  {
    "event_id": "EVT.01300",
    "asset_id": "AST.INGLEWOODCAVANAUGH.YACHT",
    "seq": 3,
    "date": "2024-06-14",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Inglewood-Cavanaugh Capital",
    "role_ref_resolved_id": "PRIN.INGLEWOOD_CAVANAUGH",
    "note": "Ownership of M/Y Ethereal was restructured under Inglewood-Cavanaugh Capital."
  },
  {
    "event_id": "EVT.01301",
    "asset_id": "AST.INGLEWOODCAVANAUGH.AVI",
    "seq": 1,
    "date": "2020-08-11",
    "event_type": "acquired",
    "role_ref_hint": "Soren Kessler",
    "role_ref_resolved_id": null,
    "note": "Soren Kessler acquired the Sikorsky S-76 to support executive and family transport between properties."
  },
  {
    "event_id": "EVT.01302",
    "asset_id": "AST.INGLEWOODCAVANAUGH.AVI",
    "seq": 2,
    "date": "2023-04-19",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The helicopter underwent scheduled avionics upgrades and a cabin refurbishment."
  },
  {
    "event_id": "EVT.01303",
    "asset_id": "AST.INGLEWOODCAVANAUGH.AVI",
    "seq": 3,
    "date": "2025-11-25",
    "event_type": "refinanced",
    "role_ref_hint": "Inglewood-Cavanaugh Capital",
    "role_ref_resolved_id": "PRIN.INGLEWOOD_CAVANAUGH",
    "note": "The aircraft's financing was restructured under Inglewood-Cavanaugh Capital."
  },
  {
    "event_id": "EVT.01304",
    "asset_id": "AST.INGLEWOODCAVANAUGH.RE1",
    "seq": 1,
    "date": "2018-05-30",
    "event_type": "acquired",
    "role_ref_hint": "Naledi Mokoena",
    "role_ref_resolved_id": null,
    "note": "Naledi Mokoena purchased the Gstaad Coastal Estate as the family's alpine primary residence."
  },
  {
    "event_id": "EVT.01305",
    "asset_id": "AST.INGLEWOODCAVANAUGH.RE1",
    "seq": 2,
    "date": "2020-12-08",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The estate's chalet underwent a full interior renovation and spa wing addition."
  },
  {
    "event_id": "EVT.01306",
    "asset_id": "AST.INGLEWOODCAVANAUGH.RE1",
    "seq": 3,
    "date": "2023-09-17",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Inglewood-Cavanaugh Capital",
    "role_ref_resolved_id": "PRIN.INGLEWOOD_CAVANAUGH",
    "note": "The estate was transferred into Inglewood-Cavanaugh Capital's holding structure."
  },
  {
    "event_id": "EVT.01307",
    "asset_id": "AST.INGLEWOODCAVANAUGH.AUTO",
    "seq": 1,
    "date": "2021-01-15",
    "event_type": "expanded_collection",
    "role_ref_hint": "Marcus Villanueva",
    "role_ref_resolved_id": "ROLE.INGLEWOODCAVANAUGH.COLL",
    "note": "Marcus Villanueva began assembling the 6-car collection, anchored by a period classic and a modern exotic."
  },
  {
    "event_id": "EVT.01308",
    "asset_id": "AST.INGLEWOODCAVANAUGH.AUTO",
    "seq": 2,
    "date": "2023-07-28",
    "event_type": "expanded_collection",
    "role_ref_hint": "Marcus Villanueva",
    "role_ref_resolved_id": "ROLE.INGLEWOODCAVANAUGH.COLL",
    "note": "A second period classic was added to the collection."
  },
  {
    "event_id": "EVT.01309",
    "asset_id": "AST.INGLEWOODCAVANAUGH.AUTO",
    "seq": 3,
    "date": "2025-03-04",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "Marcus Villanueva",
    "role_ref_resolved_id": "ROLE.INGLEWOODCAVANAUGH.COLL",
    "note": "One entry-tier vehicle was sold to fund a limited-run modern exotic acquisition."
  },
  {
    "event_id": "EVT.01310",
    "asset_id": "AST.PEMBERTONGATTENBY.YACHT",
    "seq": 1,
    "date": "2019-03-15",
    "event_type": "acquired",
    "role_ref_hint": "Julian Ferro",
    "role_ref_resolved_id": "ROLE.PEMBERTONGATTENBY.OWNE",
    "note": "Julian Ferro acquired M/Y Mirage as the family's flagship 50m superyacht, upgrading from a smaller vessel."
  },
  {
    "event_id": "EVT.01311",
    "asset_id": "AST.PEMBERTONGATTENBY.YACHT",
    "seq": 2,
    "date": "2021-06-10",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "M/Y Mirage underwent a major refit including new interior finishes and updated navigation systems."
  },
  {
    "event_id": "EVT.01312",
    "asset_id": "AST.PEMBERTONGATTENBY.YACHT",
    "seq": 3,
    "date": "2023-09-01",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Pemberton-Gattenby Family Office",
    "role_ref_resolved_id": "PRIN.PEMBERTON_GATTENBY",
    "note": "Ownership of M/Y Mirage was transferred into the Pemberton-Gattenby Family Office structure for estate planning purposes."
  },
  {
    "event_id": "EVT.01313",
    "asset_id": "AST.PEMBERTONGATTENBY.AVI",
    "seq": 1,
    "date": "2020-02-01",
    "event_type": "acquired",
    "role_ref_hint": "Julian Ferro",
    "role_ref_resolved_id": "ROLE.PEMBERTONGATTENBY.OWNE",
    "note": "Julian Ferro acquired the Challenger 350 to support the family's transatlantic travel needs."
  },
  {
    "event_id": "EVT.01314",
    "asset_id": "AST.PEMBERTONGATTENBY.AVI",
    "seq": 2,
    "date": "2022-11-15",
    "event_type": "refinanced",
    "role_ref_hint": "Pemberton-Gattenby Family Office",
    "role_ref_resolved_id": "PRIN.PEMBERTON_GATTENBY",
    "note": "The aircraft was refinanced under a new operating lease structure managed by the family office."
  },
  {
    "event_id": "EVT.01315",
    "asset_id": "AST.PEMBERTONGATTENBY.AVI",
    "seq": 3,
    "date": "2024-05-20",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Avionics suite upgraded to the latest flight-deck standard during scheduled maintenance."
  },
  {
    "event_id": "EVT.01316",
    "asset_id": "AST.PEMBERTONGATTENBY.RE1",
    "seq": 1,
    "date": "2018-07-01",
    "event_type": "acquired",
    "role_ref_hint": "Ana\u00efs Vandermolen",
    "role_ref_resolved_id": "ROLE.PEMBERTONGATTENBY.DIRE",
    "note": "Ana\u00efs Vandermolen purchased the Manhattan waterfront estate as the family's primary East Coast residence."
  },
  {
    "event_id": "EVT.01317",
    "asset_id": "AST.PEMBERTONGATTENBY.RE1",
    "seq": 2,
    "date": "2020-01-10",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Extensive renovation completed on the waterfront estate, including a full kitchen and facade restoration."
  },
  {
    "event_id": "EVT.01318",
    "asset_id": "AST.PEMBERTONGATTENBY.RE1",
    "seq": 3,
    "date": "2023-04-18",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Pemberton-Gattenby Family Office",
    "role_ref_resolved_id": "PRIN.PEMBERTON_GATTENBY",
    "note": "Property title transferred into the Pemberton-Gattenby Family Office trust structure."
  },
  {
    "event_id": "EVT.01319",
    "asset_id": "AST.PEMBERTONGATTENBY.RE2",
    "seq": 1,
    "date": "2019-09-05",
    "event_type": "acquired",
    "role_ref_hint": "Consuela Reyes",
    "role_ref_resolved_id": null,
    "note": "Consuela Reyes acquired the Greenwich penthouse as a secondary residence close to the family office."
  },
  {
    "event_id": "EVT.01320",
    "asset_id": "AST.PEMBERTONGATTENBY.RE2",
    "seq": 2,
    "date": "2022-03-12",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Interior renovation completed, updating finishes throughout the penthouse."
  },
  {
    "event_id": "EVT.01321",
    "asset_id": "AST.PEMBERTONGATTENBY.AUTO",
    "seq": 1,
    "date": "2018-05-01",
    "event_type": "acquired",
    "role_ref_hint": "Kwame Asante",
    "role_ref_resolved_id": null,
    "note": "Kwame Asante began the 4-car curated collection with the acquisition of a period classic anchor piece."
  },
  {
    "event_id": "EVT.01322",
    "asset_id": "AST.PEMBERTONGATTENBY.AUTO",
    "seq": 2,
    "date": "2021-08-22",
    "event_type": "expanded_collection",
    "role_ref_hint": "Kwame Asante",
    "role_ref_resolved_id": null,
    "note": "Collection expanded with the addition of a modern hypercar to complement the existing classics."
  },
  {
    "event_id": "EVT.01323",
    "asset_id": "AST.PEMBERTONGATTENBY.AUTO",
    "seq": 3,
    "date": "2024-02-14",
    "event_type": "expanded_collection",
    "role_ref_hint": "Kwame Asante",
    "role_ref_resolved_id": null,
    "note": "A limited-run modern exotic was added, completing the collection's current four-car lineup."
  },
  {
    "event_id": "EVT.01324",
    "asset_id": "AST.ASHCOMBEYARDLEY.AVI",
    "seq": 1,
    "date": "2019-10-01",
    "event_type": "traded_up_from_prior_vessel",
    "role_ref_hint": "Desmond Achebe",
    "role_ref_resolved_id": "ROLE.ASHCOMBEYARDLEY.OWNE",
    "note": "Desmond Achebe traded up to the Falcon 8X trijet from a prior long-range jet to support increased intercontinental travel."
  },
  {
    "event_id": "EVT.01325",
    "asset_id": "AST.ASHCOMBEYARDLEY.AVI",
    "seq": 2,
    "date": "2022-06-14",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Cabin refurbished with updated interior finishes and connectivity systems during scheduled maintenance."
  },
  {
    "event_id": "EVT.01326",
    "asset_id": "AST.ASHCOMBEYARDLEY.AVI",
    "seq": 3,
    "date": "2024-09-30",
    "event_type": "refinanced",
    "role_ref_hint": "Ashcombe-Yardley Holdings",
    "role_ref_resolved_id": "PRIN.ASHCOMBE_YARDLEY",
    "note": "Aircraft financing restructured under Ashcombe-Yardley Holdings."
  },
  {
    "event_id": "EVT.01327",
    "asset_id": "AST.ASHCOMBEYARDLEY.RE1",
    "seq": 1,
    "date": "2020-01-20",
    "event_type": "acquired",
    "role_ref_hint": "Liliana Moreau",
    "role_ref_resolved_id": "ROLE.ASHCOMBEYARDLEY.ESTA",
    "note": "Liliana Moreau purchased the Sun Valley penthouse as a ski-season residence."
  },
  {
    "event_id": "EVT.01328",
    "asset_id": "AST.ASHCOMBEYARDLEY.RE1",
    "seq": 2,
    "date": "2023-07-11",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Penthouse renovated with expanded outdoor living space and updated mountain-view glazing."
  },
  {
    "event_id": "EVT.01329",
    "asset_id": "AST.ASHCOMBEYARDLEY.AUTO",
    "seq": 1,
    "date": "2018-04-10",
    "event_type": "acquired",
    "role_ref_hint": "Priya Anand",
    "role_ref_resolved_id": null,
    "note": "Priya Anand began assembling the 12-car curated collection with several period classic acquisitions."
  },
  {
    "event_id": "EVT.01330",
    "asset_id": "AST.ASHCOMBEYARDLEY.AUTO",
    "seq": 2,
    "date": "2020-11-02",
    "event_type": "expanded_collection",
    "role_ref_hint": "Priya Anand",
    "role_ref_resolved_id": null,
    "note": "Collection expanded with the addition of a Carrera GT-era anchor piece."
  },
  {
    "event_id": "EVT.01331",
    "asset_id": "AST.ASHCOMBEYARDLEY.AUTO",
    "seq": 3,
    "date": "2022-08-19",
    "event_type": "expanded_collection",
    "role_ref_hint": "Priya Anand",
    "role_ref_resolved_id": null,
    "note": "A second trophy-tier hypercar was added, deepening the collection's modern bench."
  },
  {
    "event_id": "EVT.01332",
    "asset_id": "AST.ASHCOMBEYARDLEY.AUTO",
    "seq": 4,
    "date": "2025-03-07",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Ashcombe-Yardley Holdings",
    "role_ref_resolved_id": "PRIN.ASHCOMBE_YARDLEY",
    "note": "The full collection was retitled under Ashcombe-Yardley Holdings for estate planning purposes."
  },
  {
    "event_id": "EVT.01333",
    "asset_id": "AST.TALBOTQUINTRELL.YACHT",
    "seq": 1,
    "date": "2019-05-14",
    "event_type": "acquired",
    "role_ref_hint": "Nathaniel Cross",
    "role_ref_resolved_id": "ROLE.TALBOTQUINTRELL.AIRC",
    "note": "Nathaniel Cross acquired M/Y Kestrel, a 70m custom superyacht, from its previous owner, a Middle Eastern shipping family."
  },
  {
    "event_id": "EVT.01334",
    "asset_id": "AST.TALBOTQUINTRELL.YACHT",
    "seq": 2,
    "date": "2021-09-30",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Kestrel underwent a major refit including new engines and an expanded beach club."
  },
  {
    "event_id": "EVT.01335",
    "asset_id": "AST.TALBOTQUINTRELL.YACHT",
    "seq": 3,
    "date": "2024-06-05",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Talbot-Quintrell Family Office Trust",
    "role_ref_resolved_id": "PRIN.TALBOT_QUINTRELL",
    "note": "Vessel partially converted to charter availability during the family's off-season months, managed under Talbot-Quintrell Family Office Trust."
  },
  {
    "event_id": "EVT.01336",
    "asset_id": "AST.TALBOTQUINTRELL.AVI",
    "seq": 1,
    "date": "2020-03-18",
    "event_type": "acquired",
    "role_ref_hint": "Yui Tanaka",
    "role_ref_resolved_id": null,
    "note": "Yui Tanaka acquired the Airbus H175 to support helicopter transfers between the family's yacht and shoreside properties."
  },
  {
    "event_id": "EVT.01337",
    "asset_id": "AST.TALBOTQUINTRELL.AVI",
    "seq": 2,
    "date": "2023-01-25",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Cabin interior updated and avionics refreshed during scheduled maintenance."
  },
  {
    "event_id": "EVT.01338",
    "asset_id": "AST.TALBOTQUINTRELL.RE1",
    "seq": 1,
    "date": "2018-12-01",
    "event_type": "acquired",
    "role_ref_hint": "Simone Beaulieu",
    "role_ref_resolved_id": "ROLE.TALBOTQUINTRELL.AVIA",
    "note": "Simone Beaulieu purchased the Aspen mountain residence as the family's primary winter home."
  },
  {
    "event_id": "EVT.01339",
    "asset_id": "AST.TALBOTQUINTRELL.RE1",
    "seq": 2,
    "date": "2021-02-14",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Residence renovated with an expanded great room and updated ski-in/ski-out access."
  },
  {
    "event_id": "EVT.01340",
    "asset_id": "AST.TALBOTQUINTRELL.RE1",
    "seq": 3,
    "date": "2025-11-10",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Talbot-Quintrell Family Office Trust",
    "role_ref_resolved_id": "PRIN.TALBOT_QUINTRELL",
    "note": "Property retitled under the Talbot-Quintrell Family Office Trust."
  },
  {
    "event_id": "EVT.01341",
    "asset_id": "AST.TALBOTQUINTRELL.RE2",
    "seq": 1,
    "date": "2020-06-22",
    "event_type": "acquired",
    "role_ref_hint": "Rashid Karim",
    "role_ref_resolved_id": "ROLE.TALBOTQUINTRELL.COLL",
    "note": "Rashid Karim acquired the Charleston penthouse as a secondary residence for family gatherings."
  },
  {
    "event_id": "EVT.01342",
    "asset_id": "AST.TALBOTQUINTRELL.RE2",
    "seq": 2,
    "date": "2023-10-08",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Interior finishes updated throughout the penthouse."
  },
  {
    "event_id": "EVT.01343",
    "asset_id": "AST.TALBOTQUINTRELL.AUTO",
    "seq": 1,
    "date": "2019-07-19",
    "event_type": "acquired",
    "role_ref_hint": "Petra Lindqvist",
    "role_ref_resolved_id": "ROLE.TALBOTQUINTRELL.DIRE",
    "note": "Petra Lindqvist began the 4-car curated collection with a period classic icon."
  },
  {
    "event_id": "EVT.01344",
    "asset_id": "AST.TALBOTQUINTRELL.AUTO",
    "seq": 2,
    "date": "2022-04-03",
    "event_type": "expanded_collection",
    "role_ref_hint": "Petra Lindqvist",
    "role_ref_resolved_id": "ROLE.TALBOTQUINTRELL.DIRE",
    "note": "A modern hypercar was added to the collection."
  },
  {
    "event_id": "EVT.01345",
    "asset_id": "AST.TALBOTQUINTRELL.AUTO",
    "seq": 3,
    "date": "2024-12-11",
    "event_type": "expanded_collection",
    "role_ref_hint": "Petra Lindqvist",
    "role_ref_resolved_id": "ROLE.TALBOTQUINTRELL.DIRE",
    "note": "Two blue-chip modern exotics were added, completing the collection's current lineup."
  },
  {
    "event_id": "EVT.01346",
    "asset_id": "AST.ASHCOMBEIVANOVIC.YACHT",
    "seq": 1,
    "date": "2019-08-09",
    "event_type": "acquired",
    "role_ref_hint": "Beatrix Solano",
    "role_ref_resolved_id": "ROLE.ASHCOMBEIVANOVIC.TRUS",
    "note": "Beatrix Solano acquired M/Y Juno, a 32m entry-level custom superyacht, as the family's first vessel."
  },
  {
    "event_id": "EVT.01347",
    "asset_id": "AST.ASHCOMBEIVANOVIC.YACHT",
    "seq": 2,
    "date": "2022-05-17",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Juno underwent a major refit including updated navigation electronics and refreshed exterior teak."
  },
  {
    "event_id": "EVT.01348",
    "asset_id": "AST.ASHCOMBEIVANOVIC.YACHT",
    "seq": 3,
    "date": "2024-10-02",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Ashcombe-Ivanovic Family Trust",
    "role_ref_resolved_id": "PRIN.ASHCOMBE_IVANOVIC",
    "note": "Vessel ownership transferred into the Ashcombe-Ivanovic Family Trust."
  },
  {
    "event_id": "EVT.01349",
    "asset_id": "AST.ASHCOMBEIVANOVIC.RE1",
    "seq": 1,
    "date": "2018-11-15",
    "event_type": "acquired",
    "role_ref_hint": "Corbin Achterberg",
    "role_ref_resolved_id": null,
    "note": "Corbin Achterberg purchased the Miami waterfront estate as the family's primary Florida residence."
  },
  {
    "event_id": "EVT.01350",
    "asset_id": "AST.ASHCOMBEIVANOVIC.RE1",
    "seq": 2,
    "date": "2021-07-28",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Estate renovated with a new dock and expanded outdoor entertaining areas."
  },
  {
    "event_id": "EVT.01351",
    "asset_id": "AST.ASHCOMBEIVANOVIC.RE2",
    "seq": 1,
    "date": "2020-09-04",
    "event_type": "acquired",
    "role_ref_hint": "Elena Marsh",
    "role_ref_resolved_id": null,
    "note": "Elena Marsh acquired the Sun Valley mountain residence as a seasonal ski property."
  },
  {
    "event_id": "EVT.01352",
    "asset_id": "AST.ASHCOMBEIVANOVIC.RE2",
    "seq": 2,
    "date": "2023-03-21",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Property renovated with updated mountain-facing glazing and interior finishes."
  },
  {
    "event_id": "EVT.01353",
    "asset_id": "AST.ASHCOMBEIVANOVIC.AUTO",
    "seq": 1,
    "date": "2019-02-11",
    "event_type": "acquired",
    "role_ref_hint": "Dmitri Volkov",
    "role_ref_resolved_id": null,
    "note": "Dmitri Volkov began the 6-car curated collection with the acquisition of a period classic and a modern exotic."
  },
  {
    "event_id": "EVT.01354",
    "asset_id": "AST.ASHCOMBEIVANOVIC.AUTO",
    "seq": 2,
    "date": "2021-11-30",
    "event_type": "expanded_collection",
    "role_ref_hint": "Dmitri Volkov",
    "role_ref_resolved_id": null,
    "note": "A second period classic was added, broadening the collection's rarity spread."
  },
  {
    "event_id": "EVT.01355",
    "asset_id": "AST.ASHCOMBEIVANOVIC.AUTO",
    "seq": 3,
    "date": "2024-07-16",
    "event_type": "expanded_collection",
    "role_ref_hint": "Dmitri Volkov",
    "role_ref_resolved_id": null,
    "note": "A second limited-run modern exotic was added to the collection."
  },
  {
    "event_id": "EVT.01356",
    "asset_id": "AST.PENHALLOWJARNAC.YACHT",
    "seq": 1,
    "date": "2018-06-25",
    "event_type": "acquired",
    "role_ref_hint": "Solveig Halvorsen",
    "role_ref_resolved_id": null,
    "note": "Solveig Halvorsen acquired M/Y Opaline from its previous owner, a European shipping family."
  },
  {
    "event_id": "EVT.01357",
    "asset_id": "AST.PENHALLOWJARNAC.YACHT",
    "seq": 2,
    "date": "2020-10-13",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Opaline underwent a major refit including new interior soft furnishings and updated tenders."
  },
  {
    "event_id": "EVT.01358",
    "asset_id": "AST.PENHALLOWJARNAC.YACHT",
    "seq": 3,
    "date": "2023-08-29",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Penhallow-Jarnac Private Trust Company",
    "role_ref_resolved_id": "PRIN.PENHALLOW_JARNAC",
    "note": "Vessel ownership transferred to the Penhallow-Jarnac Private Trust Company."
  },
  {
    "event_id": "EVT.01359",
    "asset_id": "AST.PENHALLOWJARNAC.RE1",
    "seq": 1,
    "date": "2019-01-30",
    "event_type": "acquired",
    "role_ref_hint": "Emeka Obi",
    "role_ref_resolved_id": null,
    "note": "Emeka Obi purchased the Sun Valley villa as the family's winter mountain residence."
  },
  {
    "event_id": "EVT.01360",
    "asset_id": "AST.PENHALLOWJARNAC.RE1",
    "seq": 2,
    "date": "2022-12-19",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Villa renovated with an expanded lower level and updated ski access."
  },
  {
    "event_id": "EVT.01361",
    "asset_id": "AST.PENHALLOWJARNAC.AUTO",
    "seq": 1,
    "date": "2018-09-14",
    "event_type": "acquired",
    "role_ref_hint": "Charlotte Pryce",
    "role_ref_resolved_id": "ROLE.PENHALLOWJARNAC.APPR",
    "note": "Charlotte Pryce began the 6-car curated collection with two period classics."
  },
  {
    "event_id": "EVT.01362",
    "asset_id": "AST.PENHALLOWJARNAC.AUTO",
    "seq": 2,
    "date": "2021-04-27",
    "event_type": "expanded_collection",
    "role_ref_hint": "Charlotte Pryce",
    "role_ref_resolved_id": "ROLE.PENHALLOWJARNAC.APPR",
    "note": "A modern limited-run exotic was added to the collection."
  },
  {
    "event_id": "EVT.01363",
    "asset_id": "AST.PENHALLOWJARNAC.AUTO",
    "seq": 3,
    "date": "2025-05-06",
    "event_type": "expanded_collection",
    "role_ref_hint": "Charlotte Pryce",
    "role_ref_resolved_id": "ROLE.PENHALLOWJARNAC.APPR",
    "note": "A second modern exotic was added, rounding out the collection's current six-car lineup."
  },
  {
    "event_id": "EVT.01364",
    "asset_id": "AST.ESTERHAZYPRENTISS.YACHT",
    "seq": 1,
    "date": "2019-03-14",
    "event_type": "acquired",
    "role_ref_hint": "Marcus Kildare",
    "role_ref_resolved_id": "ROLE.ESTERHAZYPRENTISS.OWNE",
    "note": "Marcus Kildare acquired M/Y Meridian from her previous owner, a Middle Eastern shipping magnate, via private brokerage sale."
  },
  {
    "event_id": "EVT.01365",
    "asset_id": "AST.ESTERHAZYPRENTISS.YACHT",
    "seq": 2,
    "date": "2021-06-01",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "An 18-month exterior and MTU engine refit was completed at a European yard, extending the vessel's insured service life."
  },
  {
    "event_id": "EVT.01366",
    "asset_id": "AST.ESTERHAZYPRENTISS.YACHT",
    "seq": 3,
    "date": "2023-09-20",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Esterhazy-Prentiss Family Office",
    "role_ref_resolved_id": "PRIN.ESTERHAZY_PRENTISS",
    "note": "Ownership of M/Y Meridian was restructured into the Esterhazy-Prentiss Family Office holding entity for estate-planning purposes."
  },
  {
    "event_id": "EVT.01367",
    "asset_id": "AST.ESTERHAZYPRENTISS.YACHT",
    "seq": 4,
    "date": "2025-11-05",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Interior refresh of the owner's suite and guest cabins was completed ahead of the 2026 charter season."
  },
  {
    "event_id": "EVT.01368",
    "asset_id": "AST.ESTERHAZYPRENTISS.AVI",
    "seq": 1,
    "date": "2021-02-10",
    "event_type": "acquired",
    "role_ref_hint": "Priya Anand",
    "role_ref_resolved_id": null,
    "note": "Priya Anand took delivery of the new-build Citation Longitude directly from Cessna's Wichita completion center on behalf of the family."
  },
  {
    "event_id": "EVT.01369",
    "asset_id": "AST.ESTERHAZYPRENTISS.AVI",
    "seq": 2,
    "date": "2023-04-18",
    "event_type": "avionics_upgrade",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Cabin Wi-Fi and avionics suite were upgraded to support the family's long-range transatlantic mission profile."
  },
  {
    "event_id": "EVT.01370",
    "asset_id": "AST.ESTERHAZYPRENTISS.AVI",
    "seq": 3,
    "date": "2025-07-02",
    "event_type": "hangar_relocation",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Citation Longitude was repositioned to a new home-base FBO near Big Sky to shorten positioning legs for family travel."
  },
  {
    "event_id": "EVT.01371",
    "asset_id": "AST.ESTERHAZYPRENTISS.RE1",
    "seq": 1,
    "date": "2018-08-22",
    "event_type": "acquired",
    "role_ref_hint": "Marcus Kildare",
    "role_ref_resolved_id": "ROLE.ESTERHAZYPRENTISS.OWNE",
    "note": "Marcus Kildare purchased the Big Sky waterfront estate as the family's primary summer residence."
  },
  {
    "event_id": "EVT.01372",
    "asset_id": "AST.ESTERHAZYPRENTISS.RE1",
    "seq": 2,
    "date": "2020-05-15",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A full renovation of the main lodge and guest wing was completed, including a new boathouse on the waterfront."
  },
  {
    "event_id": "EVT.01373",
    "asset_id": "AST.ESTERHAZYPRENTISS.RE1",
    "seq": 3,
    "date": "2024-01-30",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Esterhazy-Prentiss Family Office",
    "role_ref_resolved_id": "PRIN.ESTERHAZY_PRENTISS",
    "note": "The property title was transferred into the Esterhazy-Prentiss Family Office for estate-planning purposes."
  },
  {
    "event_id": "EVT.01374",
    "asset_id": "AST.ESTERHAZYPRENTISS.RE2",
    "seq": 1,
    "date": "2020-11-01",
    "event_type": "acquired",
    "role_ref_hint": "Diego Fuentes",
    "role_ref_resolved_id": null,
    "note": "Diego Fuentes negotiated the purchase of the Palm Beach villa as a winter residence for the family."
  },
  {
    "event_id": "EVT.01375",
    "asset_id": "AST.ESTERHAZYPRENTISS.RE2",
    "seq": 2,
    "date": "2022-03-12",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Hurricane-hardening upgrades and a kitchen renovation were completed."
  },
  {
    "event_id": "EVT.01376",
    "asset_id": "AST.ESTERHAZYPRENTISS.RE2",
    "seq": 3,
    "date": "2025-09-08",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The villa was refinanced under favorable terms as part of a broader family office liquidity plan."
  },
  {
    "event_id": "EVT.01377",
    "asset_id": "AST.ESTERHAZYPRENTISS.AUTO",
    "seq": 1,
    "date": "2018-06-01",
    "event_type": "acquired",
    "role_ref_hint": "Walter Higgins",
    "role_ref_resolved_id": null,
    "note": "Walter Higgins began assembling the collection with the acquisition of three period-classic anchor pieces."
  },
  {
    "event_id": "EVT.01378",
    "asset_id": "AST.ESTERHAZYPRENTISS.AUTO",
    "seq": 2,
    "date": "2021-10-19",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The collection expanded to 14 cars with the addition of a Bugatti Chiron and two limited-run modern exotics."
  },
  {
    "event_id": "EVT.01379",
    "asset_id": "AST.ESTERHAZYPRENTISS.AUTO",
    "seq": 3,
    "date": "2023-12-04",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A final tranche of four cars was acquired, bringing the collection to its full 18-car roster."
  },
  {
    "event_id": "EVT.01380",
    "asset_id": "AST.ESTERHAZYPRENTISS.AUTO",
    "seq": 4,
    "date": "2025-05-27",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "One early-tranche classic was sold at auction to fund acquisition of a newer hypercar, keeping the roster at 18."
  },
  {
    "event_id": "EVT.01381",
    "asset_id": "AST.TREVELYANGATTENBY.YACHT",
    "seq": 1,
    "date": "2018-04-09",
    "event_type": "acquired",
    "role_ref_hint": "Alistair Bregman",
    "role_ref_resolved_id": "ROLE.TREVELYANGATTENBY.DIRE",
    "note": "Alistair Bregman acquired M/Y Wanderlust from her previous owner, a Russian energy entrepreneur, in a negotiated private sale."
  },
  {
    "event_id": "EVT.01382",
    "asset_id": "AST.TREVELYANGATTENBY.YACHT",
    "seq": 2,
    "date": "2020-09-25",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A two-year refit program was completed, including new stabilizers and a full repaint."
  },
  {
    "event_id": "EVT.01383",
    "asset_id": "AST.TREVELYANGATTENBY.YACHT",
    "seq": 3,
    "date": "2024-06-11",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The vessel entered a limited seasonal charter rotation to offset annual running costs, managed by a third-party yacht management firm."
  },
  {
    "event_id": "EVT.01384",
    "asset_id": "AST.TREVELYANGATTENBY.RE1",
    "seq": 1,
    "date": "2019-12-15",
    "event_type": "acquired",
    "role_ref_hint": "Camille Dupris",
    "role_ref_resolved_id": null,
    "note": "Camille Dupris purchased the Montecito chalet as a family winter retreat."
  },
  {
    "event_id": "EVT.01385",
    "asset_id": "AST.TREVELYANGATTENBY.RE1",
    "seq": 2,
    "date": "2022-02-08",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Ski-in/ski-out access was upgraded with a new lower-level entertainment wing."
  },
  {
    "event_id": "EVT.01386",
    "asset_id": "AST.TREVELYANGATTENBY.RE1",
    "seq": 3,
    "date": "2025-03-19",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Trevelyan-Gattenby Family Trust",
    "role_ref_resolved_id": "PRIN.TREVELYAN_GATTENBY",
    "note": "The property was retitled under the Trevelyan-Gattenby Family Trust."
  },
  {
    "event_id": "EVT.01387",
    "asset_id": "AST.TREVELYANGATTENBY.AUTO",
    "seq": 1,
    "date": "2019-05-20",
    "event_type": "acquired",
    "role_ref_hint": "Hassan Al-Rashid",
    "role_ref_resolved_id": null,
    "note": "Hassan Al-Rashid acquired the founding four cars of the collection, anchored by a Mercedes 300SL Gullwing."
  },
  {
    "event_id": "EVT.01388",
    "asset_id": "AST.TREVELYANGATTENBY.AUTO",
    "seq": 2,
    "date": "2022-08-14",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The collection grew to nine cars with the addition of a Porsche Carrera GT and two modern limited-run exotics."
  },
  {
    "event_id": "EVT.01389",
    "asset_id": "AST.TREVELYANGATTENBY.AUTO",
    "seq": 3,
    "date": "2024-11-02",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The final three cars were added, including a Bugatti Veyron, completing the 12-car roster."
  },
  {
    "event_id": "EVT.01390",
    "asset_id": "AST.LACHANCEDUNMORE.RE1",
    "seq": 1,
    "date": "2018-07-11",
    "event_type": "inherited",
    "role_ref_hint": "Julian Ferro",
    "role_ref_resolved_id": null,
    "note": "Julian Ferro inherited the historic Aspen estate from his father's estate."
  },
  {
    "event_id": "EVT.01391",
    "asset_id": "AST.LACHANCEDUNMORE.RE1",
    "seq": 2,
    "date": "2021-01-25",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A full restoration of the original 1890s lodge structure was completed while preserving its historic facade."
  },
  {
    "event_id": "EVT.01392",
    "asset_id": "AST.LACHANCEDUNMORE.RE1",
    "seq": 3,
    "date": "2023-10-30",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Lachance-Dunmore Holdings",
    "role_ref_resolved_id": "PRIN.LACHANCE_DUNMORE",
    "note": "The estate was retitled into Lachance-Dunmore Holdings for succession planning."
  },
  {
    "event_id": "EVT.01393",
    "asset_id": "AST.LACHANCEDUNMORE.AUTO",
    "seq": 1,
    "date": "2020-03-06",
    "event_type": "acquired",
    "role_ref_hint": "Aisha Bakr",
    "role_ref_resolved_id": null,
    "note": "Aisha Bakr began the collection with the purchase of a Jaguar E-Type and a McLaren 720S."
  },
  {
    "event_id": "EVT.01394",
    "asset_id": "AST.LACHANCEDUNMORE.AUTO",
    "seq": 2,
    "date": "2023-07-17",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The collection expanded to six cars with a Porsche 993 RS and a Ferrari 488 Pista."
  },
  {
    "event_id": "EVT.01395",
    "asset_id": "AST.BRAMWELLJARNAC.RE1",
    "seq": 1,
    "date": "2019-09-02",
    "event_type": "acquired",
    "role_ref_hint": "Beatrix Solheim",
    "role_ref_resolved_id": null,
    "note": "Beatrix Solheim purchased the Palm Springs ranch estate as a desert retreat."
  },
  {
    "event_id": "EVT.01396",
    "asset_id": "AST.BRAMWELLJARNAC.RE1",
    "seq": 2,
    "date": "2021-11-14",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The pool complex and guest casitas were renovated in a mid-century modern restoration."
  },
  {
    "event_id": "EVT.01397",
    "asset_id": "AST.BRAMWELLJARNAC.RE1",
    "seq": 3,
    "date": "2024-04-22",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Bramwell-Jarnac Family Office Trust",
    "role_ref_resolved_id": "PRIN.BRAMWELL_JARNAC",
    "note": "The property was retitled under the Bramwell-Jarnac Family Office Trust."
  },
  {
    "event_id": "EVT.01398",
    "asset_id": "AST.BRAMWELLJARNAC.AUTO",
    "seq": 1,
    "date": "2018-02-19",
    "event_type": "acquired",
    "role_ref_hint": "Fatima Al-Sayed",
    "role_ref_resolved_id": null,
    "note": "Fatima Al-Sayed acquired the founding pieces of the collection, including an Aston Martin DB5."
  },
  {
    "event_id": "EVT.01399",
    "asset_id": "AST.BRAMWELLJARNAC.AUTO",
    "seq": 2,
    "date": "2020-10-08",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The collection expanded to 11 cars with the addition of a LaFerrari and two Cobra 427s."
  },
  {
    "event_id": "EVT.01400",
    "asset_id": "AST.BRAMWELLJARNAC.AUTO",
    "seq": 3,
    "date": "2023-06-25",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The roster grew to 16 cars with a Ferrari Enzo and a Bugatti Chiron acquired at auction."
  },
  {
    "event_id": "EVT.01401",
    "asset_id": "AST.BRAMWELLJARNAC.AUTO",
    "seq": 4,
    "date": "2025-12-01",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The final two cars were added, completing the 18-car collection ahead of year-end."
  },
  {
    "event_id": "EVT.01402",
    "asset_id": "AST.SINCLAIRSTANDISH.RE1",
    "seq": 1,
    "date": "2018-12-03",
    "event_type": "acquired",
    "role_ref_hint": "Cassandra Blackwood",
    "role_ref_resolved_id": null,
    "note": "Cassandra Blackwood purchased the Jackson Hole residence as the family's primary mountain home."
  },
  {
    "event_id": "EVT.01403",
    "asset_id": "AST.SINCLAIRSTANDISH.RE1",
    "seq": 2,
    "date": "2021-08-19",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The great room and primary suite were renovated with expanded mountain-view glazing."
  },
  {
    "event_id": "EVT.01404",
    "asset_id": "AST.SINCLAIRSTANDISH.RE1",
    "seq": 3,
    "date": "2026-02-10",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Sinclair-Standish Family Trust",
    "role_ref_resolved_id": "PRIN.SINCLAIR_STANDISH",
    "note": "The residence was retitled under the Sinclair-Standish Family Trust."
  },
  {
    "event_id": "EVT.01405",
    "asset_id": "AST.SINCLAIRSTANDISH.AUTO",
    "seq": 1,
    "date": "2019-04-27",
    "event_type": "acquired",
    "role_ref_hint": "Harold Steinmetz",
    "role_ref_resolved_id": null,
    "note": "Harold Steinmetz assembled the initial three-car collection anchored by a Porsche 911 Carrera RS."
  },
  {
    "event_id": "EVT.01406",
    "asset_id": "AST.SINCLAIRSTANDISH.AUTO",
    "seq": 2,
    "date": "2022-09-13",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The collection expanded to six cars with a McLaren 675LT and an Aston Martin DB5."
  },
  {
    "event_id": "EVT.01407",
    "asset_id": "AST.PELHAMBRAMWELL.YACHT",
    "seq": 1,
    "date": "2018-03-14",
    "event_type": "acquired",
    "role_ref_hint": "Pelham-Bramwell Family Office",
    "role_ref_resolved_id": "PRIN.PELHAM_BRAMWELL",
    "note": "M/Y Nirvana (50m) acquired secondhand from the previous owner, a Middle Eastern shipping family, brokered on behalf of the family office."
  },
  {
    "event_id": "EVT.01408",
    "asset_id": "AST.PELHAMBRAMWELL.YACHT",
    "seq": 2,
    "date": "2020-07-22",
    "event_type": "major_refit",
    "role_ref_hint": "Tobias Reinholt",
    "role_ref_resolved_id": null,
    "note": "Full refit including exterior repaint and interior joinery refresh completed for M/Y Nirvana."
  },
  {
    "event_id": "EVT.01409",
    "asset_id": "AST.PELHAMBRAMWELL.YACHT",
    "seq": 3,
    "date": "2023-05-09",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Simone Kavanagh",
    "role_ref_resolved_id": "ROLE.PELHAMBRAMWELL.CHIE",
    "note": "Ownership of M/Y Nirvana restructured into the family trust."
  },
  {
    "event_id": "EVT.01410",
    "asset_id": "AST.PELHAMBRAMWELL.YACHT",
    "seq": 4,
    "date": "2025-09-18",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Camille Fontaine",
    "role_ref_resolved_id": null,
    "note": "Vessel placed into a limited private charter program to offset running costs."
  },
  {
    "event_id": "EVT.01411",
    "asset_id": "AST.PELHAMBRAMWELL.AVI",
    "seq": 1,
    "date": "2019-11-05",
    "event_type": "acquired",
    "role_ref_hint": "Mateus Albuquerque",
    "role_ref_resolved_id": "ROLE.PELHAMBRAMWELL.ESTA",
    "note": "Citation Longitude accepted new from the manufacturer for the family's aviation needs."
  },
  {
    "event_id": "EVT.01412",
    "asset_id": "AST.PELHAMBRAMWELL.AVI",
    "seq": 2,
    "date": "2022-08-19",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Cabin refurbishment and avionics upgrade completed on the Longitude."
  },
  {
    "event_id": "EVT.01413",
    "asset_id": "AST.PELHAMBRAMWELL.AVI",
    "seq": 3,
    "date": "2025-01-27",
    "event_type": "refinanced",
    "role_ref_hint": "Pelham-Bramwell Family Office",
    "role_ref_resolved_id": "PRIN.PELHAM_BRAMWELL",
    "note": "Financing restructured against the aircraft."
  },
  {
    "event_id": "EVT.01414",
    "asset_id": "AST.PELHAMBRAMWELL.RE1",
    "seq": 1,
    "date": "2018-06-02",
    "event_type": "acquired",
    "role_ref_hint": "Pelham-Bramwell Family Office",
    "role_ref_resolved_id": "PRIN.PELHAM_BRAMWELL",
    "note": "Vail Coastal Estate purchased as the family's primary residence."
  },
  {
    "event_id": "EVT.01415",
    "asset_id": "AST.PELHAMBRAMWELL.RE1",
    "seq": 2,
    "date": "2021-09-14",
    "event_type": "renovated",
    "role_ref_hint": "Ingrid Solberg",
    "role_ref_resolved_id": null,
    "note": "Full architectural renovation of the main residence completed."
  },
  {
    "event_id": "EVT.01416",
    "asset_id": "AST.PELHAMBRAMWELL.RE1",
    "seq": 3,
    "date": "2024-03-30",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Simone Kavanagh",
    "role_ref_resolved_id": "ROLE.PELHAMBRAMWELL.CHIE",
    "note": "Property retitled into the family trust structure."
  },
  {
    "event_id": "EVT.01417",
    "asset_id": "AST.PELHAMBRAMWELL.RE2",
    "seq": 1,
    "date": "2020-05-11",
    "event_type": "acquired",
    "role_ref_hint": "Declan Sheahan",
    "role_ref_resolved_id": "ROLE.PELHAMBRAMWELL.COLL",
    "note": "Newport Vineyard Estate purchased as a secondary property."
  },
  {
    "event_id": "EVT.01418",
    "asset_id": "AST.PELHAMBRAMWELL.RE2",
    "seq": 2,
    "date": "2022-10-06",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Main residence and vineyard operations building renovated."
  },
  {
    "event_id": "EVT.01419",
    "asset_id": "AST.PELHAMBRAMWELL.RE2",
    "seq": 3,
    "date": "2025-04-23",
    "event_type": "refinanced",
    "role_ref_hint": "Pelham-Bramwell Family Office",
    "role_ref_resolved_id": "PRIN.PELHAM_BRAMWELL",
    "note": "Mortgage refinanced against the vineyard estate."
  },
  {
    "event_id": "EVT.01420",
    "asset_id": "AST.PELHAMBRAMWELL.AUTO",
    "seq": 1,
    "date": "2018-01-16",
    "event_type": "acquired",
    "role_ref_hint": "Mateus Albuquerque",
    "role_ref_resolved_id": "ROLE.PELHAMBRAMWELL.ESTA",
    "note": "Core six-vehicle collection assembled through auction and private sale."
  },
  {
    "event_id": "EVT.01421",
    "asset_id": "AST.PELHAMBRAMWELL.AUTO",
    "seq": 2,
    "date": "2020-11-08",
    "event_type": "expanded_collection",
    "role_ref_hint": "Tobias Reinholt",
    "role_ref_resolved_id": null,
    "note": "Collection expanded with additional modern hypercars."
  },
  {
    "event_id": "EVT.01422",
    "asset_id": "AST.PELHAMBRAMWELL.AUTO",
    "seq": 3,
    "date": "2023-07-25",
    "event_type": "expanded_collection",
    "role_ref_hint": "Camille Fontaine",
    "role_ref_resolved_id": null,
    "note": "Further trophy classics added, bringing the collection to eighteen vehicles."
  },
  {
    "event_id": "EVT.01423",
    "asset_id": "AST.PELHAMBRAMWELL.AUTO",
    "seq": 4,
    "date": "2025-12-03",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Simone Kavanagh",
    "role_ref_resolved_id": "ROLE.PELHAMBRAMWELL.CHIE",
    "note": "Collection retitled under trust ownership."
  },
  {
    "event_id": "EVT.01424",
    "asset_id": "AST.TREVELYANCARRINGTON.YACHT",
    "seq": 1,
    "date": "2018-04-19",
    "event_type": "traded_up_from_prior_vessel",
    "role_ref_hint": "Kwame Boateng",
    "role_ref_resolved_id": null,
    "note": "M/Y Radiance (70m) acquired by trading up from the family's previous 45m yacht."
  },
  {
    "event_id": "EVT.01425",
    "asset_id": "AST.TREVELYANCARRINGTON.YACHT",
    "seq": 2,
    "date": "2020-09-02",
    "event_type": "major_refit",
    "role_ref_hint": "Farah Haidari",
    "role_ref_resolved_id": "ROLE.TREVELYANCARRINGTON.OWNE",
    "note": "Extensive refit including new stabilizers and an interior refresh."
  },
  {
    "event_id": "EVT.01426",
    "asset_id": "AST.TREVELYANCARRINGTON.YACHT",
    "seq": 3,
    "date": "2023-06-14",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Lucia Bergonzi",
    "role_ref_resolved_id": null,
    "note": "Vessel entered a limited private charter program during off-season months."
  },
  {
    "event_id": "EVT.01427",
    "asset_id": "AST.TREVELYANCARRINGTON.YACHT",
    "seq": 4,
    "date": "2025-11-21",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Trevelyan-Carrington Family Trust",
    "role_ref_resolved_id": "PRIN.TREVELYAN_CARRINGTON",
    "note": "Ownership formally transferred into the family trust structure."
  },
  {
    "event_id": "EVT.01428",
    "asset_id": "AST.TREVELYANCARRINGTON.AVI",
    "seq": 1,
    "date": "2019-03-08",
    "event_type": "acquired",
    "role_ref_hint": "Sven Lindqvist",
    "role_ref_resolved_id": "ROLE.TREVELYANCARRINGTON.LOCA",
    "note": "G450 purchased pre-owned from a private equity principal, the previous owner."
  },
  {
    "event_id": "EVT.01429",
    "asset_id": "AST.TREVELYANCARRINGTON.AVI",
    "seq": 2,
    "date": "2021-07-17",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Cabin refurbishment and engine overhaul completed ahead of increased flight hours."
  },
  {
    "event_id": "EVT.01430",
    "asset_id": "AST.TREVELYANCARRINGTON.AVI",
    "seq": 3,
    "date": "2024-10-05",
    "event_type": "refinanced",
    "role_ref_hint": "Trevelyan-Carrington Family Trust",
    "role_ref_resolved_id": "PRIN.TREVELYAN_CARRINGTON",
    "note": "Financing restructured against the aircraft."
  },
  {
    "event_id": "EVT.01431",
    "asset_id": "AST.TREVELYANCARRINGTON.RE1",
    "seq": 1,
    "date": "2018-12-11",
    "event_type": "acquired",
    "role_ref_hint": "Noor Abdullah",
    "role_ref_resolved_id": null,
    "note": "Jackson Hole Villa purchased as a seasonal mountain residence."
  },
  {
    "event_id": "EVT.01432",
    "asset_id": "AST.TREVELYANCARRINGTON.RE1",
    "seq": 2,
    "date": "2021-05-26",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Full renovation of the main residence and guest lodge completed."
  },
  {
    "event_id": "EVT.01433",
    "asset_id": "AST.TREVELYANCARRINGTON.RE1",
    "seq": 3,
    "date": "2024-08-09",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Isabela Duarte",
    "role_ref_resolved_id": null,
    "note": "Property retitled into the family trust."
  },
  {
    "event_id": "EVT.01434",
    "asset_id": "AST.TREVELYANCARRINGTON.AUTO",
    "seq": 1,
    "date": "2018-09-04",
    "event_type": "acquired",
    "role_ref_hint": "Kwame Boateng",
    "role_ref_resolved_id": null,
    "note": "Initial four-vehicle core collection assembled."
  },
  {
    "event_id": "EVT.01435",
    "asset_id": "AST.TREVELYANCARRINGTON.AUTO",
    "seq": 2,
    "date": "2020-12-15",
    "event_type": "expanded_collection",
    "role_ref_hint": "Lucia Bergonzi",
    "role_ref_resolved_id": null,
    "note": "Collection expanded to eight vehicles with the addition of a period classic and a modern hypercar."
  },
  {
    "event_id": "EVT.01436",
    "asset_id": "AST.TREVELYANCARRINGTON.AUTO",
    "seq": 3,
    "date": "2023-09-28",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "One vehicle underwent full concours-level restoration."
  },
  {
    "event_id": "EVT.01437",
    "asset_id": "AST.TREVELYANCARRINGTON.AUTO",
    "seq": 4,
    "date": "2025-06-12",
    "event_type": "refinanced",
    "role_ref_hint": "Trevelyan-Carrington Family Trust",
    "role_ref_resolved_id": "PRIN.TREVELYAN_CARRINGTON",
    "note": "Collection financing restructured."
  },
  {
    "event_id": "EVT.01438",
    "asset_id": "AST.HARCOURTTHORNBURY.YACHT",
    "seq": 1,
    "date": "2019-06-03",
    "event_type": "acquired",
    "role_ref_hint": "Grace Whitfield",
    "role_ref_resolved_id": "ROLE.HARCOURTTHORNBURY.OWNE",
    "note": "M/Y Nirvana (20m) purchased new from the builder."
  },
  {
    "event_id": "EVT.01439",
    "asset_id": "AST.HARCOURTTHORNBURY.YACHT",
    "seq": 2,
    "date": "2022-04-20",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Engine service and electronics upgrade completed."
  },
  {
    "event_id": "EVT.01440",
    "asset_id": "AST.HARCOURTTHORNBURY.YACHT",
    "seq": 3,
    "date": "2024-09-11",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Hendrik Larsen",
    "role_ref_resolved_id": null,
    "note": "Vessel entered a regional charter program."
  },
  {
    "event_id": "EVT.01441",
    "asset_id": "AST.HARCOURTTHORNBURY.RE1",
    "seq": 1,
    "date": "2018-07-07",
    "event_type": "acquired",
    "role_ref_hint": "Odalys Reyes",
    "role_ref_resolved_id": null,
    "note": "Sag Harbor Villa purchased as a primary residence."
  },
  {
    "event_id": "EVT.01442",
    "asset_id": "AST.HARCOURTTHORNBURY.RE1",
    "seq": 2,
    "date": "2020-10-19",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Full renovation including a new guest wing completed."
  },
  {
    "event_id": "EVT.01443",
    "asset_id": "AST.HARCOURTTHORNBURY.RE1",
    "seq": 3,
    "date": "2023-03-02",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Harcourt-Thornbury Holdings",
    "role_ref_resolved_id": "PRIN.HARCOURT_THORNBURY",
    "note": "Property retitled into the Harcourt-Thornbury holding structure."
  },
  {
    "event_id": "EVT.01444",
    "asset_id": "AST.HARCOURTTHORNBURY.RE1",
    "seq": 4,
    "date": "2025-08-16",
    "event_type": "refinanced",
    "role_ref_hint": "Tomas Krupa",
    "role_ref_resolved_id": null,
    "note": "Mortgage refinanced against the property."
  },
  {
    "event_id": "EVT.01445",
    "asset_id": "AST.HARCOURTTHORNBURY.RE2",
    "seq": 1,
    "date": "2018-02-14",
    "event_type": "inherited",
    "role_ref_hint": "Grace Whitfield",
    "role_ref_resolved_id": "ROLE.HARCOURTTHORNBURY.OWNE",
    "note": "Cap Ferrat Historic Estate inherited from the prior generation of the family."
  },
  {
    "event_id": "EVT.01446",
    "asset_id": "AST.HARCOURTTHORNBURY.RE2",
    "seq": 2,
    "date": "2020-06-08",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Sympathetic restoration completed, preserving original architectural details."
  },
  {
    "event_id": "EVT.01447",
    "asset_id": "AST.HARCOURTTHORNBURY.RE2",
    "seq": 3,
    "date": "2024-01-23",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Yara Nasser",
    "role_ref_resolved_id": null,
    "note": "Estate retitled under the Harcourt-Thornbury holding structure."
  },
  {
    "event_id": "EVT.01448",
    "asset_id": "AST.HARCOURTTHORNBURY.AUTO",
    "seq": 1,
    "date": "2019-01-09",
    "event_type": "acquired",
    "role_ref_hint": "Bennett Okonkwo",
    "role_ref_resolved_id": null,
    "note": "Core five-vehicle collection assembled."
  },
  {
    "event_id": "EVT.01449",
    "asset_id": "AST.HARCOURTTHORNBURY.AUTO",
    "seq": 2,
    "date": "2021-11-16",
    "event_type": "expanded_collection",
    "role_ref_hint": "Hendrik Larsen",
    "role_ref_resolved_id": null,
    "note": "Collection expanded to eight vehicles with two modern exotics added."
  },
  {
    "event_id": "EVT.01450",
    "asset_id": "AST.HARCOURTTHORNBURY.AUTO",
    "seq": 3,
    "date": "2024-05-30",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A period classic underwent full mechanical restoration."
  },
  {
    "event_id": "EVT.01451",
    "asset_id": "AST.HARCOURTQUINTRELL.YACHT",
    "seq": 1,
    "date": "2018-05-21",
    "event_type": "acquired",
    "role_ref_hint": "Harcourt-Quintrell Family Office Trust",
    "role_ref_resolved_id": "PRIN.HARCOURT_QUINTRELL",
    "note": "M/Y Nomad (50m) acquired from the previous owner, a Gulf-region shipping conglomerate."
  },
  {
    "event_id": "EVT.01452",
    "asset_id": "AST.HARCOURTQUINTRELL.YACHT",
    "seq": 2,
    "date": "2021-03-13",
    "event_type": "major_refit",
    "role_ref_hint": "Colm Faherty",
    "role_ref_resolved_id": "ROLE.HARCOURTQUINTRELL.OWNE",
    "note": "Full refit including new paint and refreshed interior joinery."
  },
  {
    "event_id": "EVT.01453",
    "asset_id": "AST.HARCOURTQUINTRELL.YACHT",
    "seq": 3,
    "date": "2023-10-04",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Renata Villanueva",
    "role_ref_resolved_id": null,
    "note": "Vessel entered a limited seasonal charter program."
  },
  {
    "event_id": "EVT.01454",
    "asset_id": "AST.HARCOURTQUINTRELL.YACHT",
    "seq": 4,
    "date": "2026-05-06",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Zainab Idris",
    "role_ref_resolved_id": "ROLE.HARCOURTQUINTRELL.PROP",
    "note": "Ownership formally consolidated under the family office trust."
  },
  {
    "event_id": "EVT.01455",
    "asset_id": "AST.HARCOURTQUINTRELL.AVI",
    "seq": 1,
    "date": "2020-02-17",
    "event_type": "acquired",
    "role_ref_hint": "Felix Marotta",
    "role_ref_resolved_id": "ROLE.HARCOURTQUINTRELL.AIRC",
    "note": "Challenger 350 purchased new from the manufacturer."
  },
  {
    "event_id": "EVT.01456",
    "asset_id": "AST.HARCOURTQUINTRELL.AVI",
    "seq": 2,
    "date": "2022-09-29",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Interior refresh and avionics upgrade completed."
  },
  {
    "event_id": "EVT.01457",
    "asset_id": "AST.HARCOURTQUINTRELL.AVI",
    "seq": 3,
    "date": "2025-03-11",
    "event_type": "refinanced",
    "role_ref_hint": "Harcourt-Quintrell Family Office Trust",
    "role_ref_resolved_id": "PRIN.HARCOURT_QUINTRELL",
    "note": "Financing restructured against the aircraft."
  },
  {
    "event_id": "EVT.01458",
    "asset_id": "AST.HARCOURTQUINTRELL.RE1",
    "seq": 1,
    "date": "2019-08-25",
    "event_type": "acquired",
    "role_ref_hint": "Dmitri Volkov",
    "role_ref_resolved_id": "ROLE.HARCOURTQUINTRELL.DIRE",
    "note": "Palm Springs Beachfront Villa purchased as a seasonal residence."
  },
  {
    "event_id": "EVT.01459",
    "asset_id": "AST.HARCOURTQUINTRELL.RE1",
    "seq": 2,
    "date": "2021-12-07",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Full renovation of the pool pavilion and main residence completed."
  },
  {
    "event_id": "EVT.01460",
    "asset_id": "AST.HARCOURTQUINTRELL.RE1",
    "seq": 3,
    "date": "2024-07-19",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Layla Haddad",
    "role_ref_resolved_id": null,
    "note": "Property retitled into the family office trust."
  },
  {
    "event_id": "EVT.01461",
    "asset_id": "AST.HARCOURTQUINTRELL.RE2",
    "seq": 1,
    "date": "2020-09-14",
    "event_type": "acquired",
    "role_ref_hint": "Colm Faherty",
    "role_ref_resolved_id": "ROLE.HARCOURTQUINTRELL.OWNE",
    "note": "Napa Valley Lakefront Residence purchased as a secondary property."
  },
  {
    "event_id": "EVT.01462",
    "asset_id": "AST.HARCOURTQUINTRELL.RE2",
    "seq": 2,
    "date": "2023-04-02",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Main residence and boathouse renovated."
  },
  {
    "event_id": "EVT.01463",
    "asset_id": "AST.HARCOURTQUINTRELL.RE2",
    "seq": 3,
    "date": "2025-10-28",
    "event_type": "refinanced",
    "role_ref_hint": "Renata Villanueva",
    "role_ref_resolved_id": null,
    "note": "Mortgage refinanced against the property."
  },
  {
    "event_id": "EVT.01464",
    "asset_id": "AST.HARCOURTQUINTRELL.AUTO",
    "seq": 1,
    "date": "2018-11-06",
    "event_type": "acquired",
    "role_ref_hint": "Zainab Idris",
    "role_ref_resolved_id": "ROLE.HARCOURTQUINTRELL.PROP",
    "note": "Initial five-vehicle collection assembled."
  },
  {
    "event_id": "EVT.01465",
    "asset_id": "AST.HARCOURTQUINTRELL.AUTO",
    "seq": 2,
    "date": "2021-06-21",
    "event_type": "expanded_collection",
    "role_ref_hint": "Felix Marotta",
    "role_ref_resolved_id": "ROLE.HARCOURTQUINTRELL.AIRC",
    "note": "Collection expanded to eight vehicles with the addition of a hypercar and a period classic."
  },
  {
    "event_id": "EVT.01466",
    "asset_id": "AST.HARCOURTQUINTRELL.AUTO",
    "seq": 3,
    "date": "2024-02-15",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "One vehicle underwent full concours restoration ahead of exhibition."
  },
  {
    "event_id": "EVT.01467",
    "asset_id": "AST.WENTWORTHGREVILLE.YACHT",
    "seq": 1,
    "date": "2019-04-10",
    "event_type": "acquired",
    "role_ref_hint": "Wentworth-Greville Family Enterprises",
    "role_ref_resolved_id": "PRIN.WENTWORTH_GREVILLE",
    "note": "M/Y Ethereal (32m) acquired from the previous owner, a Scandinavian shipping family."
  },
  {
    "event_id": "EVT.01468",
    "asset_id": "AST.WENTWORTHGREVILLE.YACHT",
    "seq": 2,
    "date": "2021-08-24",
    "event_type": "major_refit",
    "role_ref_hint": "Sofia Marchesi",
    "role_ref_resolved_id": "ROLE.WENTWORTHGREVILLE.DIRE",
    "note": "Engine overhaul and interior refresh completed."
  },
  {
    "event_id": "EVT.01469",
    "asset_id": "AST.WENTWORTHGREVILLE.YACHT",
    "seq": 3,
    "date": "2024-05-17",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Julian Ekwueme",
    "role_ref_resolved_id": null,
    "note": "Vessel entered a limited Mediterranean charter program."
  },
  {
    "event_id": "EVT.01470",
    "asset_id": "AST.WENTWORTHGREVILLE.RE1",
    "seq": 1,
    "date": "2018-10-01",
    "event_type": "acquired",
    "role_ref_hint": "Petra Novak",
    "role_ref_resolved_id": null,
    "note": "Cap Ferrat Ranch Estate purchased as the family's primary residence."
  },
  {
    "event_id": "EVT.01471",
    "asset_id": "AST.WENTWORTHGREVILLE.RE1",
    "seq": 2,
    "date": "2020-12-19",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Full renovation of the main house and equestrian facilities completed."
  },
  {
    "event_id": "EVT.01472",
    "asset_id": "AST.WENTWORTHGREVILLE.RE1",
    "seq": 3,
    "date": "2023-08-08",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Ravi Subramaniam",
    "role_ref_resolved_id": "ROLE.WENTWORTHGREVILLE.THIR",
    "note": "Property retitled under the family enterprise structure."
  },
  {
    "event_id": "EVT.01473",
    "asset_id": "AST.WENTWORTHGREVILLE.RE2",
    "seq": 1,
    "date": "2019-07-13",
    "event_type": "acquired",
    "role_ref_hint": "Charlotte Ainsley",
    "role_ref_resolved_id": null,
    "note": "Nantucket Beachfront Villa purchased as a seasonal coastal residence."
  },
  {
    "event_id": "EVT.01474",
    "asset_id": "AST.WENTWORTHGREVILLE.RE2",
    "seq": 2,
    "date": "2022-05-06",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Full renovation including a new guest cottage completed."
  },
  {
    "event_id": "EVT.01475",
    "asset_id": "AST.WENTWORTHGREVILLE.RE2",
    "seq": 3,
    "date": "2025-09-02",
    "event_type": "refinanced",
    "role_ref_hint": "Malik Freeman",
    "role_ref_resolved_id": null,
    "note": "Mortgage refinanced against the property."
  },
  {
    "event_id": "EVT.01476",
    "asset_id": "AST.WENTWORTHGREVILLE.AUTO",
    "seq": 1,
    "date": "2019-02-12",
    "event_type": "acquired",
    "role_ref_hint": "Malik Freeman",
    "role_ref_resolved_id": null,
    "note": "Initial four-vehicle collection assembled."
  },
  {
    "event_id": "EVT.01477",
    "asset_id": "AST.WENTWORTHGREVILLE.AUTO",
    "seq": 2,
    "date": "2021-10-27",
    "event_type": "expanded_collection",
    "role_ref_hint": "Sofia Marchesi",
    "role_ref_resolved_id": "ROLE.WENTWORTHGREVILLE.DIRE",
    "note": "Collection expanded to six vehicles with the addition of a modern exotic and a period classic."
  },
  {
    "event_id": "EVT.01478",
    "asset_id": "AST.WENTWORTHGREVILLE.AUTO",
    "seq": 3,
    "date": "2024-11-14",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A period classic underwent mechanical restoration ahead of a concours event."
  },
  {
    "event_id": "EVT.01479",
    "asset_id": "AST.ELLSWORTHISHERWOOD.YACHT",
    "seq": 1,
    "date": "2018-11-02",
    "event_type": "delivered_new_build",
    "role_ref_hint": "Ellsworth-Isherwood Family Trust",
    "role_ref_resolved_id": "PRIN.ELLSWORTH_ISHERWOOD",
    "note": "M/Y Cielo (90m) was delivered from the builder directly into the Ellsworth-Isherwood Family Trust's ownership structure."
  },
  {
    "event_id": "EVT.01480",
    "asset_id": "AST.ELLSWORTHISHERWOOD.YACHT",
    "seq": 2,
    "date": "2021-06-15",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A scheduled major refit refreshed the interior and updated navigation and safety systems ahead of the following season."
  },
  {
    "event_id": "EVT.01481",
    "asset_id": "AST.ELLSWORTHISHERWOOD.YACHT",
    "seq": 3,
    "date": "2023-09-10",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Nathaniel Byrne",
    "role_ref_resolved_id": "ROLE.ELLSWORTHISHERWOOD.TRUS",
    "note": "Nathaniel Byrne, representing the family office, authorized a limited seasonal charter program to offset running costs."
  },
  {
    "event_id": "EVT.01482",
    "asset_id": "AST.ELLSWORTHISHERWOOD.YACHT",
    "seq": 4,
    "date": "2025-02-20",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Ellsworth-Isherwood Family Trust",
    "role_ref_resolved_id": "PRIN.ELLSWORTH_ISHERWOOD",
    "note": "Formal title was consolidated under the Ellsworth-Isherwood Family Trust as part of a broader estate-planning restructuring."
  },
  {
    "event_id": "EVT.01483",
    "asset_id": "AST.ELLSWORTHISHERWOOD.RE1",
    "seq": 1,
    "date": "2019-05-14",
    "event_type": "acquired",
    "role_ref_hint": "Elena Voskresenskaya",
    "role_ref_resolved_id": null,
    "note": "Elena Voskresenskaya acquired the Sag Harbor waterfront estate as a primary East Coast residence for the family."
  },
  {
    "event_id": "EVT.01484",
    "asset_id": "AST.ELLSWORTHISHERWOOD.RE1",
    "seq": 2,
    "date": "2021-03-01",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A full renovation modernized the main house and boathouse while preserving the estate's waterfront character."
  },
  {
    "event_id": "EVT.01485",
    "asset_id": "AST.ELLSWORTHISHERWOOD.RE1",
    "seq": 3,
    "date": "2024-07-22",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Ellsworth-Isherwood Family Trust",
    "role_ref_resolved_id": "PRIN.ELLSWORTH_ISHERWOOD",
    "note": "Title was transferred into the Ellsworth-Isherwood Family Trust as part of estate consolidation."
  },
  {
    "event_id": "EVT.01486",
    "asset_id": "AST.ELLSWORTHISHERWOOD.RE2",
    "seq": 1,
    "date": "2020-08-09",
    "event_type": "acquired",
    "role_ref_hint": "Kenji Watanabe",
    "role_ref_resolved_id": null,
    "note": "Kenji Watanabe purchased the Newport mountain residence as a secondary retreat property."
  },
  {
    "event_id": "EVT.01487",
    "asset_id": "AST.ELLSWORTHISHERWOOD.RE2",
    "seq": 2,
    "date": "2023-01-15",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Interior renovations updated the property's finishes and mechanical systems."
  },
  {
    "event_id": "EVT.01488",
    "asset_id": "AST.ELLSWORTHISHERWOOD.RE2",
    "seq": 3,
    "date": "2025-11-03",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The property was refinanced under favorable terms as part of a family liquidity review."
  },
  {
    "event_id": "EVT.01489",
    "asset_id": "AST.CASTELLANVANDERMEER.YACHT",
    "seq": 1,
    "date": "2018-04-10",
    "event_type": "traded_up_from_prior_vessel",
    "role_ref_hint": "Castellan-Vandermeer Family Office",
    "role_ref_resolved_id": "PRIN.CASTELLAN_VANDERMEER",
    "note": "The Castellan-Vandermeer Family Office traded up from a smaller 38m motor yacht to acquire M/Y Gale (50m)."
  },
  {
    "event_id": "EVT.01490",
    "asset_id": "AST.CASTELLANVANDERMEER.YACHT",
    "seq": 2,
    "date": "2020-09-18",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A major refit upgraded engines and stabilization systems following two seasons of active cruising."
  },
  {
    "event_id": "EVT.01491",
    "asset_id": "AST.CASTELLANVANDERMEER.YACHT",
    "seq": 3,
    "date": "2023-05-05",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Graham Ashcroft",
    "role_ref_resolved_id": "ROLE.CASTELLANVANDERMEER.OWNE",
    "note": "Graham Ashcroft approved entry into a limited charter program during the family's off-season months."
  },
  {
    "event_id": "EVT.01492",
    "asset_id": "AST.CASTELLANVANDERMEER.RE1",
    "seq": 1,
    "date": "2019-10-02",
    "event_type": "acquired",
    "role_ref_hint": "Simone Lagarde",
    "role_ref_resolved_id": null,
    "note": "Simone Lagarde acquired the Napa Valley penthouse as a wine-country residence for the family."
  },
  {
    "event_id": "EVT.01493",
    "asset_id": "AST.CASTELLANVANDERMEER.RE1",
    "seq": 2,
    "date": "2022-06-11",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The penthouse underwent a full interior renovation, including a wine cellar expansion."
  },
  {
    "event_id": "EVT.01494",
    "asset_id": "AST.CASTELLANVANDERMEER.RE1",
    "seq": 3,
    "date": "2025-04-27",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Castellan-Vandermeer Family Office",
    "role_ref_resolved_id": "PRIN.CASTELLAN_VANDERMEER",
    "note": "Ownership was transferred into the Castellan-Vandermeer Family Office structure."
  },
  {
    "event_id": "EVT.01495",
    "asset_id": "AST.CASTELLANVANDERMEER.RE2",
    "seq": 1,
    "date": "2021-02-14",
    "event_type": "acquired",
    "role_ref_hint": "Tomas Nowak",
    "role_ref_resolved_id": null,
    "note": "Tomas Nowak purchased the secondary residence as a getaway property for the family."
  },
  {
    "event_id": "EVT.01496",
    "asset_id": "AST.CASTELLANVANDERMEER.RE2",
    "seq": 2,
    "date": "2023-11-30",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Renovations updated the property's mechanical systems and outdoor living spaces."
  },
  {
    "event_id": "EVT.01497",
    "asset_id": "AST.CASTELLANVANDERMEER.RE2",
    "seq": 3,
    "date": "2026-01-19",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The property was refinanced to consolidate financing terms across the family's real estate holdings."
  },
  {
    "event_id": "EVT.01498",
    "asset_id": "AST.CASTELLANVANDERMEER.AUTO",
    "seq": 1,
    "date": "2019-07-08",
    "event_type": "expanded_collection",
    "role_ref_hint": "Aisha Bello",
    "role_ref_resolved_id": null,
    "note": "Aisha Bello began assembling the family's curated 4-car collection with the acquisition of a period classic anchor piece."
  },
  {
    "event_id": "EVT.01499",
    "asset_id": "AST.CASTELLANVANDERMEER.AUTO",
    "seq": 2,
    "date": "2021-12-03",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A modern hypercar was added to the collection, rounding out the mix of classic and contemporary marques."
  },
  {
    "event_id": "EVT.01500",
    "asset_id": "AST.CASTELLANVANDERMEER.AUTO",
    "seq": 3,
    "date": "2024-08-16",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "Ollie Tane",
    "role_ref_resolved_id": null,
    "note": "Ollie Tane authorized the sale of one earlier acquisition to make room for a higher-priority piece."
  },
  {
    "event_id": "EVT.01501",
    "asset_id": "AST.ESTERHAZYHALLOWAY.YACHT",
    "seq": 1,
    "date": "2018-03-22",
    "event_type": "acquired",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Esterhazy-Halloway Holdings acquired M/Y Zenith from its previous owner, a Middle Eastern shipping family."
  },
  {
    "event_id": "EVT.01502",
    "asset_id": "AST.ESTERHAZYHALLOWAY.YACHT",
    "seq": 2,
    "date": "2020-11-14",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A major refit modernized the yacht's exterior paintwork and interior guest areas."
  },
  {
    "event_id": "EVT.01503",
    "asset_id": "AST.ESTERHAZYHALLOWAY.YACHT",
    "seq": 3,
    "date": "2023-07-01",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Rafael Ibarra",
    "role_ref_resolved_id": "ROLE.ESTERHAZYHALLOWAY.OWNE",
    "note": "Rafael Ibarra approved a limited charter program to offset annual operating costs."
  },
  {
    "event_id": "EVT.01504",
    "asset_id": "AST.ESTERHAZYHALLOWAY.YACHT",
    "seq": 4,
    "date": "2025-09-19",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Esterhazy-Halloway Holdings",
    "role_ref_resolved_id": "PRIN.ESTERHAZY_HALLOWAY",
    "note": "Title was consolidated under Esterhazy-Halloway Holdings as part of a broader asset restructuring."
  },
  {
    "event_id": "EVT.01505",
    "asset_id": "AST.ESTERHAZYHALLOWAY.AVI",
    "seq": 1,
    "date": "2020-05-06",
    "event_type": "acquired",
    "role_ref_hint": "Miriam Choi",
    "role_ref_resolved_id": null,
    "note": "Miriam Choi acquired the Challenger 350 to support the family's transatlantic travel needs."
  },
  {
    "event_id": "EVT.01506",
    "asset_id": "AST.ESTERHAZYHALLOWAY.AVI",
    "seq": 2,
    "date": "2022-10-12",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The cabin interior was refreshed with updated avionics and cabin management systems."
  },
  {
    "event_id": "EVT.01507",
    "asset_id": "AST.ESTERHAZYHALLOWAY.AVI",
    "seq": 3,
    "date": "2025-06-25",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The aircraft financing was restructured to better align with the family's broader fleet holdings."
  },
  {
    "event_id": "EVT.01508",
    "asset_id": "AST.ESTERHAZYHALLOWAY.RE1",
    "seq": 1,
    "date": "2019-01-28",
    "event_type": "acquired",
    "role_ref_hint": "Callum Bryce",
    "role_ref_resolved_id": null,
    "note": "Callum Bryce purchased the Telluride estate as a ski-season residence for the family."
  },
  {
    "event_id": "EVT.01509",
    "asset_id": "AST.ESTERHAZYHALLOWAY.RE1",
    "seq": 2,
    "date": "2021-08-09",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A full renovation added a guest wing and updated the property's mountain-facing terraces."
  },
  {
    "event_id": "EVT.01510",
    "asset_id": "AST.ESTERHAZYHALLOWAY.RE1",
    "seq": 3,
    "date": "2024-12-04",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Esterhazy-Halloway Holdings",
    "role_ref_resolved_id": "PRIN.ESTERHAZY_HALLOWAY",
    "note": "Ownership was transferred into Esterhazy-Halloway Holdings as part of estate planning."
  },
  {
    "event_id": "EVT.01511",
    "asset_id": "AST.ESTERHAZYHALLOWAY.AUTO",
    "seq": 1,
    "date": "2018-06-19",
    "event_type": "expanded_collection",
    "role_ref_hint": "Noor Hassan",
    "role_ref_resolved_id": null,
    "note": "Noor Hassan began the family's 12-car curated collection, anchored by a period classic icon."
  },
  {
    "event_id": "EVT.01512",
    "asset_id": "AST.ESTERHAZYHALLOWAY.AUTO",
    "seq": 2,
    "date": "2021-04-02",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Two limited-run modern exotics were added, broadening the collection's rarity spread."
  },
  {
    "event_id": "EVT.01513",
    "asset_id": "AST.ESTERHAZYHALLOWAY.AUTO",
    "seq": 3,
    "date": "2023-09-27",
    "event_type": "expanded_collection",
    "role_ref_hint": "Bianca Ferretti",
    "role_ref_resolved_id": null,
    "note": "Bianca Ferretti authorized the acquisition of a trophy-tier hypercar to anchor the collection's modern bench."
  },
  {
    "event_id": "EVT.01514",
    "asset_id": "AST.ESTERHAZYHALLOWAY.AUTO",
    "seq": 4,
    "date": "2026-02-11",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "One earlier acquisition was sold to a private collector to fund the most recent addition."
  },
  {
    "event_id": "EVT.01515",
    "asset_id": "AST.STAVROSCOMBERFORD.YACHT",
    "seq": 1,
    "date": "2019-09-05",
    "event_type": "acquired",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Stavros-Comberford Family Office Trust acquired M/Y Quintessa from its previous owner, a European industrial family."
  },
  {
    "event_id": "EVT.01516",
    "asset_id": "AST.STAVROSCOMBERFORD.YACHT",
    "seq": 2,
    "date": "2022-02-17",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A major refit upgraded the yacht's stabilization and entertainment systems."
  },
  {
    "event_id": "EVT.01517",
    "asset_id": "AST.STAVROSCOMBERFORD.YACHT",
    "seq": 3,
    "date": "2024-10-08",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Isabela Mar\u00edn",
    "role_ref_resolved_id": "ROLE.STAVROSCOMBERFORD.OWNE",
    "note": "Isabela Mar\u00edn approved a limited seasonal charter program."
  },
  {
    "event_id": "EVT.01518",
    "asset_id": "AST.STAVROSCOMBERFORD.RE1",
    "seq": 1,
    "date": "2018-12-01",
    "event_type": "acquired",
    "role_ref_hint": "Desmond Okonkwo",
    "role_ref_resolved_id": null,
    "note": "Desmond Okonkwo acquired the Sun Valley lakefront residence as a family retreat."
  },
  {
    "event_id": "EVT.01519",
    "asset_id": "AST.STAVROSCOMBERFORD.RE1",
    "seq": 2,
    "date": "2021-07-19",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The residence underwent a full renovation, including a boathouse and dock rebuild."
  },
  {
    "event_id": "EVT.01520",
    "asset_id": "AST.STAVROSCOMBERFORD.RE1",
    "seq": 3,
    "date": "2025-03-14",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Stavros-Comberford Family Office Trust",
    "role_ref_resolved_id": "PRIN.STAVROS_COMBERFORD",
    "note": "Title was transferred into the Stavros-Comberford Family Office Trust."
  },
  {
    "event_id": "EVT.01521",
    "asset_id": "AST.STAVROSCOMBERFORD.RE2",
    "seq": 1,
    "date": "2020-04-23",
    "event_type": "acquired",
    "role_ref_hint": "Anders Berglund",
    "role_ref_resolved_id": null,
    "note": "Anders Berglund purchased the Lake Como mountain residence as a European secondary property."
  },
  {
    "event_id": "EVT.01522",
    "asset_id": "AST.STAVROSCOMBERFORD.RE2",
    "seq": 2,
    "date": "2023-06-30",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Renovations modernized the property's kitchen and guest quarters."
  },
  {
    "event_id": "EVT.01523",
    "asset_id": "AST.STAVROSCOMBERFORD.RE2",
    "seq": 3,
    "date": "2026-01-09",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The property was refinanced as part of a broader review of the family's European real estate financing."
  },
  {
    "event_id": "EVT.01524",
    "asset_id": "AST.LINDQVISTVERLAINE.YACHT",
    "seq": 1,
    "date": "2018-08-11",
    "event_type": "acquired",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Lindqvist-Verlaine Family Holdings acquired M/Y Cascade from its previous owner, a Scandinavian shipping family."
  },
  {
    "event_id": "EVT.01525",
    "asset_id": "AST.LINDQVISTVERLAINE.YACHT",
    "seq": 2,
    "date": "2021-05-27",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A major refit updated the yacht's engines and exterior coatings."
  },
  {
    "event_id": "EVT.01526",
    "asset_id": "AST.LINDQVISTVERLAINE.YACHT",
    "seq": 3,
    "date": "2024-03-15",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Henrik Dahlgren",
    "role_ref_resolved_id": "ROLE.LINDQVISTVERLAINE.OWNE",
    "note": "Henrik Dahlgren approved a limited charter program to offset operating costs."
  },
  {
    "event_id": "EVT.01527",
    "asset_id": "AST.LINDQVISTVERLAINE.RE1",
    "seq": 1,
    "date": "2019-11-06",
    "event_type": "acquired",
    "role_ref_hint": "Chidinma Eze",
    "role_ref_resolved_id": null,
    "note": "Chidinma Eze acquired the Sag Harbor penthouse as an East Coast residence for the family."
  },
  {
    "event_id": "EVT.01528",
    "asset_id": "AST.LINDQVISTVERLAINE.RE1",
    "seq": 2,
    "date": "2022-09-21",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The penthouse was renovated with updated interior finishes and a rooftop terrace expansion."
  },
  {
    "event_id": "EVT.01529",
    "asset_id": "AST.LINDQVISTVERLAINE.RE1",
    "seq": 3,
    "date": "2025-05-30",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Lindqvist-Verlaine Family Holdings",
    "role_ref_resolved_id": "PRIN.LINDQVIST_VERLAINE",
    "note": "Title was transferred into Lindqvist-Verlaine Family Holdings as part of estate planning."
  },
  {
    "event_id": "EVT.01530",
    "asset_id": "AST.LINDQVISTVERLAINE.AUTO",
    "seq": 1,
    "date": "2020-02-28",
    "event_type": "expanded_collection",
    "role_ref_hint": "Marcus Feldman",
    "role_ref_resolved_id": null,
    "note": "Marcus Feldman began assembling the family's curated 4-car collection with a blue-chip modern exotic."
  },
  {
    "event_id": "EVT.01531",
    "asset_id": "AST.LINDQVISTVERLAINE.AUTO",
    "seq": 2,
    "date": "2022-12-19",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A period classic was added to the collection, balancing the modern exotics already held."
  },
  {
    "event_id": "EVT.01532",
    "asset_id": "AST.LINDQVISTVERLAINE.AUTO",
    "seq": 3,
    "date": "2025-07-04",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "Renata Almeida",
    "role_ref_resolved_id": null,
    "note": "Renata Almeida authorized the sale of one vehicle to fund a higher-priority acquisition."
  },
  {
    "event_id": "EVT.01533",
    "asset_id": "AST.LANSDOWNEPELHAM.YACHT",
    "seq": 1,
    "date": "2018-06-14",
    "event_type": "acquired",
    "role_ref_hint": "Lansdowne-Pelham Family Office",
    "role_ref_resolved_id": "PRIN.LANSDOWNE_PELHAM",
    "note": "M/Y Umbra was delivered new-build from the yard to the Lansdowne-Pelham Family Office, entering service as the family's flagship 90m vessel."
  },
  {
    "event_id": "EVT.01534",
    "asset_id": "AST.LANSDOWNEPELHAM.YACHT",
    "seq": 2,
    "date": "2021-03-02",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A scheduled major refit refreshed Umbra's exterior paintwork and updated onboard systems ahead of the family's Mediterranean charter season."
  },
  {
    "event_id": "EVT.01535",
    "asset_id": "AST.LANSDOWNEPELHAM.YACHT",
    "seq": 3,
    "date": "2023-09-20",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Julian Ashworth",
    "role_ref_resolved_id": "ROLE.LANSDOWNEPELHAM.OWNE",
    "note": "Ownership of M/Y Umbra was restructured into the family office's holding structure for estate-planning purposes, with Julian Ashworth signing as trustee."
  },
  {
    "event_id": "EVT.01536",
    "asset_id": "AST.LANSDOWNEPELHAM.YACHT",
    "seq": 4,
    "date": "2025-11-05",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Ananya Krishnan",
    "role_ref_resolved_id": null,
    "note": "Umbra was placed into limited seasonal charter availability, managed by Ananya Krishnan on behalf of the family office, to offset annual running costs."
  },
  {
    "event_id": "EVT.01537",
    "asset_id": "AST.LANSDOWNEPELHAM.RE1",
    "seq": 1,
    "date": "2019-02-11",
    "event_type": "acquired",
    "role_ref_hint": "Klaus Bergmann",
    "role_ref_resolved_id": null,
    "note": "The Vail oceanfront compound was purchased by Klaus Bergmann as a family retreat, consolidating two adjoining parcels."
  },
  {
    "event_id": "EVT.01538",
    "asset_id": "AST.LANSDOWNEPELHAM.RE1",
    "seq": 2,
    "date": "2022-07-18",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A full renovation expanded the main residence and added a dedicated wellness wing."
  },
  {
    "event_id": "EVT.01539",
    "asset_id": "AST.LANSDOWNEPELHAM.RE1",
    "seq": 3,
    "date": "2024-12-01",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Odette Fontaine",
    "role_ref_resolved_id": null,
    "note": "The compound was retitled into the Lansdowne-Pelham Family Office's trust structure, with Odette Fontaine overseeing the transfer."
  },
  {
    "event_id": "EVT.01540",
    "asset_id": "AST.LANSDOWNEPELHAM.RE2",
    "seq": 1,
    "date": "2020-05-09",
    "event_type": "acquired",
    "role_ref_hint": "Renzo Villanueva",
    "role_ref_resolved_id": null,
    "note": "Renzo Villanueva purchased the Malibu beachfront villa as a West Coast base for the family."
  },
  {
    "event_id": "EVT.01541",
    "asset_id": "AST.LANSDOWNEPELHAM.RE2",
    "seq": 2,
    "date": "2023-04-22",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Storm damage to the seawall prompted a renovation that also updated the villa's interior finishes."
  },
  {
    "event_id": "EVT.01542",
    "asset_id": "AST.LANSDOWNEPELHAM.RE2",
    "seq": 3,
    "date": "2025-08-30",
    "event_type": "refinanced",
    "role_ref_hint": "Lansdowne-Pelham Family Office",
    "role_ref_resolved_id": "PRIN.LANSDOWNE_PELHAM",
    "note": "The villa was refinanced by the family office to free up liquidity for the Umbra refit program."
  },
  {
    "event_id": "EVT.01543",
    "asset_id": "AST.LANSDOWNEPELHAM.RE3",
    "seq": 1,
    "date": "2018-09-25",
    "event_type": "acquired",
    "role_ref_hint": "Grant Whitfield",
    "role_ref_resolved_id": "ROLE.LANSDOWNEPELHAM.COLL",
    "note": "the previous owner, a Wyoming cattle-ranching family, sold the estate to Grant Whitfield, who converted it into a private family retreat."
  },
  {
    "event_id": "EVT.01544",
    "asset_id": "AST.LANSDOWNEPELHAM.RE3",
    "seq": 2,
    "date": "2021-11-14",
    "event_type": "acreage_expanded",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The estate's holdings grew when an adjacent 40-acre parcel was purchased to secure the ranch's water rights."
  },
  {
    "event_id": "EVT.01545",
    "asset_id": "AST.LANSDOWNEPELHAM.RE3",
    "seq": 3,
    "date": "2024-06-03",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Lansdowne-Pelham Family Office",
    "role_ref_resolved_id": "PRIN.LANSDOWNE_PELHAM",
    "note": "The ranch estate was placed into the Lansdowne-Pelham Family Office's trust alongside the family's other real estate holdings."
  },
  {
    "event_id": "EVT.01546",
    "asset_id": "AST.LANSDOWNEPELHAM.AUTO",
    "seq": 1,
    "date": "2019-03-15",
    "event_type": "acquired",
    "role_ref_hint": "Julian Ashworth",
    "role_ref_resolved_id": "ROLE.LANSDOWNEPELHAM.OWNE",
    "note": "Julian Ashworth assembled the core of the collection with the purchase of a Mercedes-Benz 300SL Gullwing and a Porsche 993 RS."
  },
  {
    "event_id": "EVT.01547",
    "asset_id": "AST.LANSDOWNEPELHAM.AUTO",
    "seq": 2,
    "date": "2021-10-08",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A McLaren 765LT was added to the garage, rounding out the collection's modern-exotic bench."
  },
  {
    "event_id": "EVT.01548",
    "asset_id": "AST.LANSDOWNEPELHAM.AUTO",
    "seq": 3,
    "date": "2024-02-19",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A Porsche 918 Spyder was acquired at auction, adding the collection's first hybrid hypercar."
  },
  {
    "event_id": "EVT.01549",
    "asset_id": "AST.SINCLAIRMOREAU.YACHT",
    "seq": 1,
    "date": "2018-04-20",
    "event_type": "acquired",
    "role_ref_hint": "Desmond Okonkwo",
    "role_ref_resolved_id": "ROLE.SINCLAIRMOREAU.OWNE",
    "note": "Desmond Okonkwo purchased M/Y Opaline from her original owner, a Greek shipping family, as the trust's first superyacht."
  },
  {
    "event_id": "EVT.01550",
    "asset_id": "AST.SINCLAIRMOREAU.YACHT",
    "seq": 2,
    "date": "2020-08-11",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A major refit updated Opaline's stabilizers and refreshed the guest cabin interiors."
  },
  {
    "event_id": "EVT.01551",
    "asset_id": "AST.SINCLAIRMOREAU.YACHT",
    "seq": 3,
    "date": "2023-05-30",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Ingrid Lindqvist",
    "role_ref_resolved_id": "ROLE.SINCLAIRMOREAU.PROP",
    "note": "Opaline entered limited charter rotation under Ingrid Lindqvist's management to offset operating costs."
  },
  {
    "event_id": "EVT.01552",
    "asset_id": "AST.SINCLAIRMOREAU.YACHT",
    "seq": 4,
    "date": "2025-09-12",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Sinclair-Moreau Family Trust",
    "role_ref_resolved_id": "PRIN.SINCLAIR_MOREAU",
    "note": "Ownership of Opaline was consolidated into the Sinclair-Moreau Family Trust as part of a broader estate restructuring."
  },
  {
    "event_id": "EVT.01553",
    "asset_id": "AST.SINCLAIRMOREAU.AVI",
    "seq": 1,
    "date": "2019-06-05",
    "event_type": "acquired",
    "role_ref_hint": "Tom\u00e1s Reyes",
    "role_ref_resolved_id": null,
    "note": "Tom\u00e1s Reyes took delivery of the Falcon 8X new from Dassault, replacing the family's prior mid-size jet."
  },
  {
    "event_id": "EVT.01554",
    "asset_id": "AST.SINCLAIRMOREAU.AVI",
    "seq": 2,
    "date": "2022-01-17",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The aircraft underwent a cabin refresh and avionics upgrade during a scheduled heavy maintenance check."
  },
  {
    "event_id": "EVT.01555",
    "asset_id": "AST.SINCLAIRMOREAU.AVI",
    "seq": 3,
    "date": "2024-10-02",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Sinclair-Moreau Family Trust",
    "role_ref_resolved_id": "PRIN.SINCLAIR_MOREAU",
    "note": "The aircraft was retitled to the Sinclair-Moreau Family Trust for liability and estate-planning purposes."
  },
  {
    "event_id": "EVT.01556",
    "asset_id": "AST.SINCLAIRMOREAU.RE1",
    "seq": 1,
    "date": "2018-11-30",
    "event_type": "acquired",
    "role_ref_hint": "Soo-jin Park",
    "role_ref_resolved_id": null,
    "note": "the previous owner, a film industry executive, sold the residence to Soo-jin Park."
  },
  {
    "event_id": "EVT.01557",
    "asset_id": "AST.SINCLAIRMOREAU.RE1",
    "seq": 2,
    "date": "2021-07-25",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A ground-up renovation modernized the residence's hillside terraces and added a screening room."
  },
  {
    "event_id": "EVT.01558",
    "asset_id": "AST.SINCLAIRMOREAU.RE1",
    "seq": 3,
    "date": "2024-03-14",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Sinclair-Moreau Family Trust",
    "role_ref_resolved_id": "PRIN.SINCLAIR_MOREAU",
    "note": "The residence was placed into the Sinclair-Moreau Family Trust."
  },
  {
    "event_id": "EVT.01559",
    "asset_id": "AST.SINCLAIRMOREAU.RE2",
    "seq": 1,
    "date": "2020-12-19",
    "event_type": "acquired",
    "role_ref_hint": "Baptiste Ferrand",
    "role_ref_resolved_id": null,
    "note": "Baptiste Ferrand purchased the Sun Valley chalet as a winter retreat for the family."
  },
  {
    "event_id": "EVT.01560",
    "asset_id": "AST.SINCLAIRMOREAU.RE2",
    "seq": 2,
    "date": "2023-02-08",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The chalet's ski-in/ski-out access was upgraded alongside interior renovations."
  },
  {
    "event_id": "EVT.01561",
    "asset_id": "AST.SINCLAIRMOREAU.RE2",
    "seq": 3,
    "date": "2025-11-27",
    "event_type": "refinanced",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The chalet was refinanced to help fund the Falcon 8X's avionics upgrade."
  },
  {
    "event_id": "EVT.01562",
    "asset_id": "AST.SINCLAIRMOREAU.AUTO",
    "seq": 1,
    "date": "2018-05-16",
    "event_type": "acquired",
    "role_ref_hint": "Charlotte Vance",
    "role_ref_resolved_id": null,
    "note": "Charlotte Vance began the collection with an Aston Martin DB5 and a Porsche Carrera GT."
  },
  {
    "event_id": "EVT.01563",
    "asset_id": "AST.SINCLAIRMOREAU.AUTO",
    "seq": 2,
    "date": "2020-09-21",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A Ferrari F40 was added, becoming the collection's first trophy-tier classic."
  },
  {
    "event_id": "EVT.01564",
    "asset_id": "AST.SINCLAIRMOREAU.AUTO",
    "seq": 3,
    "date": "2022-06-04",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A Bugatti Chiron joined the garage, adding a second hypercar-tier vehicle."
  },
  {
    "event_id": "EVT.01565",
    "asset_id": "AST.SINCLAIRMOREAU.AUTO",
    "seq": 4,
    "date": "2025-04-11",
    "event_type": "expanded_collection",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "A Lamborghini SVJ rounded out the modern-exotic bench, bringing the collection to its full 12-car roster."
  },
  {
    "event_id": "EVT.01566",
    "asset_id": "AST.DELACROIXHOLLOWELL.YACHT",
    "seq": 1,
    "date": "2019-07-10",
    "event_type": "acquired",
    "role_ref_hint": "Nathaniel Pryce",
    "role_ref_resolved_id": "ROLE.DELACROIXHOLLOWELL.OWNE",
    "note": "Nathaniel Pryce purchased M/Y Kestrel new from the builder as a day-boat for coastal use."
  },
  {
    "event_id": "EVT.01567",
    "asset_id": "AST.DELACROIXHOLLOWELL.YACHT",
    "seq": 2,
    "date": "2022-05-03",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "Kestrel's engines and electronics were refreshed during a routine refit."
  },
  {
    "event_id": "EVT.01568",
    "asset_id": "AST.DELACROIXHOLLOWELL.YACHT",
    "seq": 3,
    "date": "2025-06-21",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Delacroix-Hollowell Holdings",
    "role_ref_resolved_id": "PRIN.DELACROIX_HOLLOWELL",
    "note": "Ownership of Kestrel was transferred to Delacroix-Hollowell Holdings as part of a consolidation of the family's smaller assets."
  },
  {
    "event_id": "EVT.01569",
    "asset_id": "AST.DELACROIXHOLLOWELL.AVI",
    "seq": 1,
    "date": "2018-08-22",
    "event_type": "acquired",
    "role_ref_hint": "Elena Kovalenko",
    "role_ref_resolved_id": null,
    "note": "the previous owner, a European industrial conglomerate, sold the aircraft to Elena Kovalenko."
  },
  {
    "event_id": "EVT.01570",
    "asset_id": "AST.DELACROIXHOLLOWELL.AVI",
    "seq": 2,
    "date": "2021-04-09",
    "event_type": "major_refit",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The Falcon 8X underwent a heavy maintenance check that included an interior refresh."
  },
  {
    "event_id": "EVT.01571",
    "asset_id": "AST.DELACROIXHOLLOWELL.AVI",
    "seq": 3,
    "date": "2024-08-15",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Delacroix-Hollowell Holdings",
    "role_ref_resolved_id": "PRIN.DELACROIX_HOLLOWELL",
    "note": "The aircraft was retitled to Delacroix-Hollowell Holdings."
  },
  {
    "event_id": "EVT.01572",
    "asset_id": "AST.DELACROIXHOLLOWELL.RE1",
    "seq": 1,
    "date": "2020-03-17",
    "event_type": "acquired",
    "role_ref_hint": "Adaeze Nwosu",
    "role_ref_resolved_id": null,
    "note": "Adaeze Nwosu acquired the Sun Valley commercial plaza as an income-producing addition to the family's real estate holdings."
  },
  {
    "event_id": "EVT.01573",
    "asset_id": "AST.DELACROIXHOLLOWELL.RE1",
    "seq": 2,
    "date": "2022-10-26",
    "event_type": "renovated",
    "role_ref_hint": "",
    "role_ref_resolved_id": null,
    "note": "The plaza's retail units were renovated to attract higher-tier tenants."
  },
  {
    "event_id": "EVT.01574",
    "asset_id": "AST.DELACROIXHOLLOWELL.RE1",
    "seq": 3,
    "date": "2025-01-30",
    "event_type": "refinanced",
    "role_ref_hint": "Hugo Bergstr\u00f6m",
    "role_ref_resolved_id": null,
    "note": "Hugo Bergstr\u00f6m refinanced the property on favorable terms, freeing capital for other family investments."
  },
  {
    "event_id": "EVT.01575",
    "asset_id": "AST.WHISPER.YACHT",
    "seq": 1,
    "date": "2018-03-12",
    "event_type": "acquired",
    "role_ref_hint": "Marchetti Family Trust",
    "role_ref_resolved_id": "PRIN.MARCHETTI",
    "note": "Marchetti Family Trust acquired M/Y Whisper from her previous owner, a Middle Eastern shipping family, adding the vessel to the family's fleet."
  },
  {
    "event_id": "EVT.01576",
    "asset_id": "AST.WHISPER.YACHT",
    "seq": 2,
    "date": "2020-06-01",
    "event_type": "major_refit",
    "role_ref_hint": "Capt. James Doyle",
    "role_ref_resolved_id": "MCR.2.WHISPER",
    "note": "M/Y Whisper underwent a major refit including new stabilizers and an interior refresh, overseen by Capt. James Doyle."
  },
  {
    "event_id": "EVT.01577",
    "asset_id": "AST.WHISPER.YACHT",
    "seq": 3,
    "date": "2023-09-15",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Marchetti Family Trust",
    "role_ref_resolved_id": "PRIN.MARCHETTI",
    "note": "Ownership of M/Y Whisper was formally consolidated into the Marchetti Family Trust structure for estate planning purposes."
  },
  {
    "event_id": "EVT.01578",
    "asset_id": "AST.WHISPER.YACHT",
    "seq": 4,
    "date": "2025-11-20",
    "event_type": "refinanced",
    "role_ref_hint": "Marchetti Family Trust",
    "role_ref_resolved_id": "PRIN.MARCHETTI",
    "note": "The Marchetti Family Trust refinanced M/Y Whisper's acquisition loan to secure improved marine lending terms."
  },
  {
    "event_id": "EVT.01579",
    "asset_id": "AST.WHISPER.JET",
    "seq": 1,
    "date": "2019-05-10",
    "event_type": "acquired",
    "role_ref_hint": "Elena Marchetti",
    "role_ref_resolved_id": "OWN.9",
    "note": "Elena Marchetti authorized acquisition of the Gulfstream G650 to support the family's long-range travel requirements."
  },
  {
    "event_id": "EVT.01580",
    "asset_id": "AST.WHISPER.JET",
    "seq": 2,
    "date": "2021-02-18",
    "event_type": "major_refit",
    "role_ref_hint": "Capt. James Doyle",
    "role_ref_resolved_id": "MCR.2.WHISPER",
    "note": "The G650 received an avionics and cabin connectivity upgrade coordinated by Capt. James Doyle."
  },
  {
    "event_id": "EVT.01581",
    "asset_id": "AST.WHISPER.JET",
    "seq": 3,
    "date": "2024-07-22",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Marchetti Family Trust",
    "role_ref_resolved_id": "PRIN.MARCHETTI",
    "note": "Aircraft title was transferred to the Marchetti Family Trust alongside the family's other major fleet assets."
  },
  {
    "event_id": "EVT.01582",
    "asset_id": "AST.SOLSTICE.YACHT",
    "seq": 1,
    "date": "2018-11-05",
    "event_type": "acquired",
    "role_ref_hint": "Diane Foster",
    "role_ref_resolved_id": "OWN.7.MERIDIAN",
    "note": "Meridian Family Office, at the direction of Diane Foster, acquired M/Y Solstice from her previous owner, a Greek shipping family."
  },
  {
    "event_id": "EVT.01583",
    "asset_id": "AST.SOLSTICE.YACHT",
    "seq": 2,
    "date": "2021-04-14",
    "event_type": "major_refit",
    "role_ref_hint": "Chief Eng. Priya Deshmukh",
    "role_ref_resolved_id": "MCR.3.SOLSTICE",
    "note": "M/Y Solstice completed a major refit of her engine room and exterior paint under Chief Eng. Priya Deshmukh's supervision."
  },
  {
    "event_id": "EVT.01584",
    "asset_id": "AST.SOLSTICE.YACHT",
    "seq": 3,
    "date": "2023-08-30",
    "event_type": "partial_charter_conversion",
    "role_ref_hint": "Capt. Owen Rees",
    "role_ref_resolved_id": "MCR.2.SOLSTICE",
    "note": "M/Y Solstice was placed into limited charter rotation to help offset operating costs, managed by Capt. Owen Rees."
  },
  {
    "event_id": "EVT.01585",
    "asset_id": "AST.SOLSTICE.YACHT",
    "seq": 4,
    "date": "2025-06-10",
    "event_type": "refinanced",
    "role_ref_hint": "Meridian Family Office",
    "role_ref_resolved_id": "PRIN.MERIDIAN",
    "note": "Meridian Family Office refinanced M/Y Solstice's marine mortgage under improved lending terms."
  },
  {
    "event_id": "EVT.01586",
    "asset_id": "AST.AURELIA.YACHT",
    "seq": 1,
    "date": "2019-02-20",
    "event_type": "acquired",
    "role_ref_hint": "Nigel Ashworth",
    "role_ref_resolved_id": "OWN.9.HARTWELL",
    "note": "Hartwell Holdings, led by Nigel Ashworth, acquired M/Y Aurelia from her previous owner, a Russian industrial family."
  },
  {
    "event_id": "EVT.01587",
    "asset_id": "AST.AURELIA.YACHT",
    "seq": 2,
    "date": "2021-09-12",
    "event_type": "major_refit",
    "role_ref_hint": "ETO Sam Whitfield",
    "role_ref_resolved_id": "MCR.4.AURELIA",
    "note": "M/Y Aurelia underwent a major refit of her navigation and stabilization systems, overseen by ETO Sam Whitfield."
  },
  {
    "event_id": "EVT.01588",
    "asset_id": "AST.AURELIA.YACHT",
    "seq": 3,
    "date": "2024-03-05",
    "event_type": "traded_up_from_prior_vessel",
    "role_ref_hint": "Hartwell Holdings",
    "role_ref_resolved_id": "PRIN.HARTWELL",
    "note": "Hartwell Holdings sold a smaller 45m vessel to help fund upgrades to M/Y Aurelia's tender and toy inventory."
  },
  {
    "event_id": "EVT.01589",
    "asset_id": "AST.AURELIA.YACHT",
    "seq": 4,
    "date": "2026-01-18",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Capt. Lena Brandt",
    "role_ref_resolved_id": "MCR.2.AURELIA",
    "note": "Ownership of M/Y Aurelia was restructured under Hartwell Holdings' trust framework, with Capt. Lena Brandt retained as master."
  },
  {
    "event_id": "EVT.01590",
    "asset_id": "AST.HALCYON.YACHT",
    "seq": 1,
    "date": "2018-07-08",
    "event_type": "acquired",
    "role_ref_hint": "Richard Voss",
    "role_ref_resolved_id": "OWN.12",
    "note": "Richard Voss commissioned M/Y Halcyon new from the shipyard for the family's Mediterranean cruising."
  },
  {
    "event_id": "EVT.01591",
    "asset_id": "AST.HALCYON.YACHT",
    "seq": 2,
    "date": "2020-10-25",
    "event_type": "major_refit",
    "role_ref_hint": "Richard Voss",
    "role_ref_resolved_id": "OWN.12",
    "note": "M/Y Halcyon received a major interior refit and full exterior repaint."
  },
  {
    "event_id": "EVT.01592",
    "asset_id": "AST.HALCYON.YACHT",
    "seq": 3,
    "date": "2023-05-17",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Isabelle Voss",
    "role_ref_resolved_id": "OWN.9.VOSS",
    "note": "Isabelle Voss oversaw the transfer of M/Y Halcyon's title into the Voss Family Trust."
  },
  {
    "event_id": "EVT.01593",
    "asset_id": "AST.VOSS.CHALET",
    "seq": 1,
    "date": "2019-12-03",
    "event_type": "acquired",
    "role_ref_hint": "Richard Voss",
    "role_ref_resolved_id": "OWN.12",
    "note": "Richard Voss purchased the Aspen Ski Chalet as a family winter retreat, with property management arranged through Fiona Aldridge."
  },
  {
    "event_id": "EVT.01594",
    "asset_id": "AST.VOSS.CHALET",
    "seq": 2,
    "date": "2022-08-19",
    "event_type": "renovated",
    "role_ref_hint": "Fiona Aldridge",
    "role_ref_resolved_id": "RE.PM.VOSS",
    "note": "The Aspen Ski Chalet underwent a full renovation of its kitchen and primary suite."
  },
  {
    "event_id": "EVT.01595",
    "asset_id": "AST.VOSS.CHALET",
    "seq": 3,
    "date": "2025-02-14",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Voss Family Trust",
    "role_ref_resolved_id": "PRIN.VOSS",
    "note": "The chalet's title was transferred into the Voss Family Trust alongside the family's other major assets."
  },
  {
    "event_id": "EVT.01596",
    "asset_id": "AST.CASTELLANE.JET",
    "seq": 1,
    "date": "2018-04-22",
    "event_type": "acquired",
    "role_ref_hint": "Marcus Delacroix",
    "role_ref_resolved_id": "AVI.RISK.CASTELLANE",
    "note": "Marcus Delacroix acquired the Gulfstream G550 from its previous owner, a European private equity executive."
  },
  {
    "event_id": "EVT.01597",
    "asset_id": "AST.CASTELLANE.JET",
    "seq": 2,
    "date": "2020-11-30",
    "event_type": "major_refit",
    "role_ref_hint": "Chief Pilot Renata Solis",
    "role_ref_resolved_id": "AVI.PILOT.CASTELLANE",
    "note": "The G550 received an ADS-B and avionics compliance upgrade coordinated by Chief Pilot Renata Solis."
  },
  {
    "event_id": "EVT.01598",
    "asset_id": "AST.CASTELLANE.JET",
    "seq": 3,
    "date": "2023-06-08",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Castellane Trust",
    "role_ref_resolved_id": "PRIN.CASTELLANE",
    "note": "Aircraft title was transferred into the Castellane Trust structure."
  },
  {
    "event_id": "EVT.01599",
    "asset_id": "AST.CASTELLANE.AUTO",
    "seq": 1,
    "date": "2019-03-15",
    "event_type": "acquired",
    "role_ref_hint": "Devon Pratt",
    "role_ref_resolved_id": "AUTO.MGR.CASTELLANE",
    "note": "Marcus Delacroix began assembling the collection with its first anchor pieces, advised by Devon Pratt."
  },
  {
    "event_id": "EVT.01600",
    "asset_id": "AST.CASTELLANE.AUTO",
    "seq": 2,
    "date": "2021-07-09",
    "event_type": "expanded_collection",
    "role_ref_hint": "Devon Pratt",
    "role_ref_resolved_id": "AUTO.MGR.CASTELLANE",
    "note": "The collection grew to twelve vehicles with the addition of several limited-run modern hypercars, curated by Devon Pratt."
  },
  {
    "event_id": "EVT.01601",
    "asset_id": "AST.CASTELLANE.AUTO",
    "seq": 3,
    "date": "2024-09-27",
    "event_type": "deaccessioned_unit",
    "role_ref_hint": "Odette Vance",
    "role_ref_resolved_id": "PER.EA.CASTELLANE",
    "note": "Odette Vance oversaw the sale of one earlier acquisition from the collection to make room for a newer trophy piece."
  },
  {
    "event_id": "EVT.01602",
    "asset_id": "AST.CASTELLANE.AUTO",
    "seq": 4,
    "date": "2025-12-11",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Castellane Trust",
    "role_ref_resolved_id": "PRIN.CASTELLANE",
    "note": "The collection's title was consolidated under the Castellane Trust for estate planning purposes."
  },
  {
    "event_id": "EVT.01603",
    "asset_id": "AST.BELLWEATHER.HELI",
    "seq": 1,
    "date": "2018-09-01",
    "event_type": "acquired",
    "role_ref_hint": "Howard Ngata",
    "role_ref_resolved_id": "AVI.RISK.BELLWEATHER",
    "note": "Bellweather Family Office, under Howard Ngata's direction, acquired the Sikorsky S-76 for regional executive transport."
  },
  {
    "event_id": "EVT.01604",
    "asset_id": "AST.BELLWEATHER.HELI",
    "seq": 2,
    "date": "2021-05-16",
    "event_type": "major_refit",
    "role_ref_hint": "Chief Pilot Dana Okafor",
    "role_ref_resolved_id": "AVI.PILOT.BELLWEATHER",
    "note": "The S-76 underwent an avionics and interior refurbishment overseen by Chief Pilot Dana Okafor."
  },
  {
    "event_id": "EVT.01605",
    "asset_id": "AST.BELLWEATHER.HELI",
    "seq": 3,
    "date": "2024-02-28",
    "event_type": "refinanced",
    "role_ref_hint": "Bellweather Family Office",
    "role_ref_resolved_id": "PRIN.BELLWEATHER",
    "note": "Bellweather Family Office refinanced the helicopter's lease-to-own arrangement."
  },
  {
    "event_id": "EVT.01606",
    "asset_id": "AST.OKONKWO.YACHT",
    "seq": 1,
    "date": "2018-06-14",
    "event_type": "acquired",
    "role_ref_hint": "Chidi Okonkwo",
    "role_ref_resolved_id": "OWN.9.OKONKWO",
    "note": "Chidi Okonkwo acquired M/Y Meridian II from her previous owner, a Norwegian shipping magnate."
  },
  {
    "event_id": "EVT.01607",
    "asset_id": "AST.OKONKWO.YACHT",
    "seq": 2,
    "date": "2022-01-20",
    "event_type": "major_refit",
    "role_ref_hint": "Chidi Okonkwo",
    "role_ref_resolved_id": "OWN.9.OKONKWO",
    "note": "M/Y Meridian II completed a major refit of her engines and exterior coating."
  },
  {
    "event_id": "EVT.01608",
    "asset_id": "AST.OKONKWO.YACHT",
    "seq": 3,
    "date": "2025-04-09",
    "event_type": "title_transferred_to_trust",
    "role_ref_hint": "Okonkwo Family Trust",
    "role_ref_resolved_id": "PRIN.OKONKWO",
    "note": "Ownership of M/Y Meridian II was transferred into the Okonkwo Family Trust."
  }
];
