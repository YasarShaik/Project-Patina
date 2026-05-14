# Literature Survey — Patina
**Price Intelligence for Collectible Assets**

*Compiled: May 2026 | Author: Shaik Yasar Ali*

---

## 1. Why This Survey Exists

Patina is built on a hypothesis: that collectible asset markets are systematically underserved by data intelligence tools, and that this gap can be filled by a product combining clean data visualisation with rule-based price projection. This survey documents the academic and market evidence that supports — and complicates — that hypothesis.

---

## 2. The Global Collectible Asset Market

### 2.1 Market Size and Growth

The global classic car market was valued at approximately **$39.7 billion in 2024**, projected to reach **$77.8 billion by 2032** at a CAGR of 8.7% (Credence Research, 2025). A separate McKinsey analysis places the total global value of existing collectible car stock at approximately **€800 billion in 2024**, with about 5% of cars changing hands annually — representing roughly €45 billion in annual trade volume.

The market is not static. From early 2021 to mid-2022, approximately six years of market growth compressed into an 18-month window, driven by COVID-era liquidity and FOMO buying. Since mid-2022, the market has been in a measured correction, with the Hagerty Market Index broadly flat at 2022 levels as of early 2026.

### 2.2 Generational Shift

The demographic composition of the collector market is changing. As of 2024, Gen Z accounts for nearly 10% of insurance quotes at Hagerty — nearly triple the share of the oldest generation. Millennials and Gen Z together represent approximately 30% of the market. Vehicles from the 1980s, 1990s, and 2000s now account for 29% of public auction offerings, up from 13% for 1970s vehicles. The average age of cars being auctioned has dropped from 54 years (2012) to 38 years (2024).

**Implication for Patina:** The next wave of collectors is younger, more digitally native, and buying vehicles from eras they grew up with. They are the natural Patina user — accustomed to data-driven decisions in other areas of their life and underserved by current intelligence tools.

### 2.3 India Specifically

India represents one of the fastest-growing segments of the Asia-Pacific collector market. Key indicators:

- The inaugural **Oberoi Concours d'Elegance** (Udaipur, February 2024) received the 'Breakthrough Event of the Year' award at the International Historic Motoring Awards in London — placing India's collector scene on the global map for the first time at this level.
- Indian collector cars and motorcycles, including models once owned by Indian royalty, are now represented at international concours events.
- Emerging wealth and rising disposable income are driving first-generation collectors into the market.
- The Indian collector market is almost entirely **OTC (over-the-counter)** and relationship-driven — meaning pricing is opaque, unstructured, and deeply personal.

**The gap Patina fills:** No price intelligence product currently tracks Indian collectible vehicles — Ambassador, Padmini, vintage Royal Enfield, or early Hindustan Motors models — at any meaningful data level. This is both the problem and the opportunity.

---

## 3. Existing Price Intelligence Tools

### 3.1 Hagerty Valuation Tools (US/UK)

Hagerty is the closest comparable to what Patina aims to build. Key facts:

- Launched in 2010, covers **40,000+ collector vehicles** across cars, trucks, and motorcycles.
- Publishes the **Hagerty Price Guide** — updated quarterly, condition-graded (#1 through #4), based on auction results and private sale data.
- Runs **11 stock market-style indices** (Blue Chip, Muscle Car, Ferrari, German, British, RADindex, etc.) updated quarterly.
- The **Hagerty Market Rating** is a composite score (0–100) measuring market "heat," directional momentum, and underlying strength — using a weighted algorithm combining auction data, private sale activity, insured value ratios, and correlated financial instruments (S&P 500, gold price, home prices).

**What Hagerty does not do:**
- Cover any Indian market vehicles
- Provide buy/sell timing signals for individual users
- Offer portfolio tracking for multi-asset collectors
- Serve mobile-first experiences

**Hagerty's methodology for the Market Rating** is worth studying: it combines transactional data (auction + private), insurance valuation trends, and macroeconomic correlates. This is the direction Patina's quantitative layer should evolve toward — starting simple and graduating to composite signals.

### 3.2 Barrett-Jackson, RM Sotheby's, Bonhams, Mecum

These are auction houses, not intelligence products. They publish pre-sale estimates and post-sale results publicly. They are Patina's **primary data source for V0**, not competitors. Their results are the raw material; Patina is the analysis layer on top.

**Key insight:** Auction results represent only one slice of the market. Private sales — which are the dominant transaction type in India — are almost entirely undocumented. This is why Indian market data requires a different collection methodology than simply scraping auction results.

### 3.3 Classic.com

An aggregator platform that tracks classic car prices across auction houses globally. Data-rich but US/Europe focused, not India-facing, and not designed for individual collector portfolio tracking.

### 3.4 What Does Not Exist

No product currently:
- Tracks Indian collectible vehicle prices at a data level
- Offers a buy window signal for individual assets
- Provides portfolio appreciation tracking for multi-asset Indian collectors
- Covers collectible motorcycles (Royal Enfield, Honda CB series, Triumph vintage) with the same rigour as cars

This is the specific gap Patina enters.

---

## 4. Academic Research on Collectible Asset Pricing

### 4.1 Collectibles as an Asset Class

Academic literature generally classifies collectibles as **non-traditional alternative investments** — assets that do not generate cash flows, are not easily tradable, and are difficult to value using intrinsic methods. Key findings:

- A General Price Index of classic cars **outperformed the nominal average returns of the S&P 500 by 0.20%** from 1998 to 2017. However, when dividends are included, the S&P 500 outperforms. Classic cars also underperformed gold by 3.50% over the same period. (Laurs, 2017, via Bryant University)
- Academic research suggests collectibles are **best understood as alternative assets with low correlation to traditional financial markets** — making them valuable for portfolio diversification rather than pure return maximisation.
- The difficulty of valuing collectibles — no cash flows, no standard condition grading, illiquid markets — is precisely what creates the information asymmetry Patina addresses.

### 4.2 Price Index Construction

The standard methodology for building collectible price indices is the **repeat-sales method** (similar to the Case-Shiller home price index): tracking the same asset sold multiple times over time. This controls for quality variation between transactions.

For Patina V0, a simpler **hedonic price index** approach is appropriate: controlling for known quality factors (condition, originality, provenance, mileage) to make price comparisons across different transactions of the same model.

**Practical implication for V0:** Every data point in Patina's dataset should record condition grade, mileage range, and whether the vehicle is original or restored. This enables like-for-like comparison and makes the appreciation curve meaningful rather than misleading.

### 4.3 Quantitative Methods Applicable to Patina

The academic literature on asset pricing and machine learning (reviewed comprehensively in Bagnara, 2024, *Journal of Economic Surveys*) identifies a progression of applicable methods:

| Method | Complexity | Applicable Stage |
|--------|-----------|-----------------|
| Moving Averages | Low | V0 — buy window indicator |
| Linear/Polynomial Regression | Low-Medium | V1 — trend projection |
| ARIMA (Time Series) | Medium | V2 — seasonal auction cycle modelling |
| Hedonic Regression | Medium | V2 — condition-adjusted pricing |
| Cross-asset correlation analysis | High | V3 — inter-market signal detection |
| ML-based factor models | High | V4+ — full quantitative engine |

**The V0 commitment:** Patina's buy window indicator is a moving average comparison — current price vs 12-month average vs 36-month average. This is academically sound, computationally simple, and honest to communicate. It does not require ML. It requires clean data.

---

## 5. The Indian Market — Specific Research Gap

Academic literature on the Indian collectible vehicle market is essentially nonexistent at the price intelligence level. The following is documented:

- India's collector car community is organised primarily through **marque clubs** (Royal Enfield Owners Club chapters, Vintage & Classic Car Club of India, Heritage Motoring Club of India)
- Transactions occur primarily through **personal networks and dealer relationships** — BBT Automobiles being the most prominent national dealer for exotic and collectible vehicles
- Pricing is **negotiated, not discovered** — the market has no published price guide, no index, and no standardised condition grading system equivalent to Hagerty's
- The **Hindustan Ambassador, Fiat Padmini, and vintage Royal Enfield Bullet** represent the core of India's domestic collectible market — vehicles with genuine cultural resonance and growing collector interest but zero data coverage in any existing intelligence product

**This is Patina's primary research contribution:** the first systematic attempt to document and track price appreciation for Indian collectible vehicles using verifiable transaction data.

---

## 6. Key Takeaways for Patina's Design

Six things this survey confirms:

1. **The market is real and growing.** Global collectible cars at €800B in stock value, 8.7% CAGR, youngest collector cohort in history entering the market. Patina is not solving a niche problem.

2. **Hagerty proves the model works.** A data intelligence product for collectors can be built, trusted, and monetised. Hagerty's 15-year data set and composite index methodology is the directional goal for Patina's quantitative layer.

3. **India is undercovered and that's the moat.** No existing product tracks Indian collectible vehicles. First-mover advantage in a growing market with no direct competition.

4. **Data quality is the product.** Every academic analysis of collectible markets highlights the same problem — data opacity. Patina's source transparency block is not a UX flourish; it is the core credibility mechanism.

5. **Start simple on quant.** Moving averages and trend extrapolation are academically defensible for V0. The progression to ARIMA and cross-asset correlation is a V2/V3 roadmap, not a V0 requirement.

6. **Private sales data is the long-term moat.** Auction data is public. Private transaction data — the dominant mode in India — is not. Patina's V3 dealer network integration and portfolio tracker, when they generate real transaction data, become a proprietary dataset no competitor can replicate.

---

## 7. References

- Bagnara, M. (2024). Asset Pricing and Machine Learning: A critical review. *Journal of Economic Surveys*. Wiley Online Library.
- Credence Research (2025). Classic Cars Market Size, Growth, Share and Forecast to 2032.
- Hagerty Media (2025). 8 Charts That Explain the Classic Car Market. hagerty.com
- Hagerty Media (2025). How the Hagerty Market Rating Works. hagerty.com
- Hagerty Media (2024). By the Numbers: The Collector-Car Market in 2024. hagerty.com
- Laurs, A. (2017). Non-Traditional Alternative Investments: The Feasibility of Collectibles in a Portfolio. Bryant University Honors Finance.
- McKinsey & Company (2025). Collectible cars: From niche market to growth and innovation engine.
- AssetClassic (2025). 2024 Classic and Collectible Car Sector Review. assetclassic.substack.com
- Market Research Future (2026). Classic Car Market Size, Growth, Trends, Report 2035.

---

*This document will be updated as Patina collects its own transaction data and develops a proprietary methodology.*

*© 2026 Shaik Yasar Ali. All rights reserved.*