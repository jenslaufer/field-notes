# Appendix: worksheets, benchmarks, glossary

## Worksheet A — Niche sweep

| # | Niche (as job) | Complaint 1 / 2 / 3 (quote, URL, date) | Best in-store payer (store · price · users/ratings · rank · status) | Reach (where · size · store phrasing) | Pain | Payer | Reach | Total /6 |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

Payer gate: top 5 by users · or price + ≥ 25 ratings · or ≥ $500/month for the store product. SaaS never counts.

## Worksheet B — Paid-proof table (per niche × store)

| Product | Price | Users or ratings | Job (same / substitute) | Rank by users | Source | Status | Date |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Gate passed? ☐ yes ☐ substitute only (monetization 1) ☐ no → park

## Worksheet C — Store weakness sweep

| Query | Rank | Listing | Users | Rating (count) | Last updated | Price | Class (Abandoned / Hated / Paid-proof / Underserved / Crowded-free) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

"Notable users" calibration for this niche: ______

## Worksheet D — Scan scorecard (per candidate)

| Dimension | 0–2 | Evidence line | Status |
|---|---|---|---|
| Demand evidence | | | |
| Incumbent weakness (ranks 1–3) | | | |
| Monetization proof | | | |
| Effort fit (× bar) | | | |
| Advantage fit | | | |
| **Total /10** | | | |

Drop checks: ☐ graveyard ☐ account bans ☐ Terms ban ☐ crowded-free without gap ☐ monetization 0
Case against: ______ What would remove it: ______

## Worksheet E — Idea rubric

| Dimension | 0–2 | Evidence line | Status |
|---|---|---|---|
| Pain evidence | | | |
| Demand proxies | | | |
| Competition gap | | | |
| Willingness to pay | | | |
| Build feasibility (Terms read: ☐) | | | |
| Reachability | | | |
| **Total /12** | | | |

GO ≥ 9 · CONDITIONAL 6–8 · NO-GO ≤ 5 · any 0 caps at CONDITIONAL · all-free competitors → NO-GO · no competitors → max CONDITIONAL · Terms ban → NO-GO

## Worksheet F — Market sizing sheet

| rank | name | users low | users high | rating (count) | last updated | class | weight = rank^−β |
|---|---|---|---|---|---|---|---|
| | | | | | | core | |
| | | | | | | core | |
| | | | | | | core | |
| | | | | | | core | |
| | | | | | | core | |
| | | | | | | core | |
| | | | | | | core | |
| | | | | | | core | |
| | | | | | | core | |
| | | | | | | core | |

```
β          = -SLOPE(LOG10(users low), LOG10(rank))
R²         = RSQ(LOG10(users low), LOG10(rank))
share(k)   = weight(k) / SUM(weights)
band       = SUM(low) … SUM(high); mid = average
target k   = first abandoned/weak below rank 1, else median (never 1)
base       = mid × share(k) × conversion × mean monthly plan × (1 − store share)
× bar      = base ÷ (150 weekend | 500 medium | 1,000 big)
```

## Worksheet G — Reverse funnel

| Stage | Required | Rate | Source label |
|---|---|---|---|
| Revenue target / period | | — | |
| Payers (÷ price) | | | |
| Installs or signups (÷ free→paid) | | | |
| Views or visits (÷ view→install) | | | |
| Per channel: volume vs. ceiling | | | |

CAC = CPC ÷ (view→install × free→paid) = ______  · Net LTV = ______  · CAC < LTV/3? ☐
Days to kill threshold at real run rate: ______

## Worksheet H — Channel scoring (all 19)

| Channel | Gate (open / closed: why) | Fit / Maybe / No-fit | Score | Tier | Reason |
|---|---|---|---|---|---|
| SEM | | | 55 | A | |
| Social & Display Ads | | | 57 | A | |
| Offline Ads | | | 38 | C | |
| Affiliate | | | 45 | B | |
| SEO | | | 43 | C | |
| Content | | | 42 | C | |
| Email | | | 61 | A | |
| Engineering as Marketing | | | 48 | B | |
| Viral | | | 49 | B | |
| Community | | | 43 | C | |
| PR | | | 46 | B | |
| Unconventional PR | | | 42 | C | |
| Targeting Blogs | | | 50 | A | |
| Existing Platforms | | | 52 | A | |
| Speaking | | | 40 | C | |
| Business Development | | | 45 | B | |
| Sales | | | 46 | B | |
| Trade Shows | | | 38 | C | |
| Offline Events | | | 34 | C | |
| + store's own channels | | | | | |

Verdict: ☐ realistic ☐ conditional ☐ not realistic — binding constraint: ______ — test first: ______

## Worksheet I — Bet log

| Bet | Start (first traffic) | End (+14 days) | Spent | Visitors | Purchases | Revenue | Cost per buyer | ≥ €1,000? | Decision |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

## Benchmarks

| Rate | Value | Source |
|---|---|---|
| free → paid (extension) | 1.13 % FinGrab; 1.9 % one extension (161 → 3); 1–1.6 % across own extensions | own data |
| free → paid (general) | 0.5–4 % | community benchmark |
| store view → install | 15–35 % | community benchmark |
| uninstall decay month 1 | 20–40 % | community benchmark |
| listicle / community CTR → listing | 1–5 % | community benchmark |
| visit → paid (web) | 1–3 % | community benchmark |
| subscription churn replacement | 3–8 %/month | community benchmark |
| ratings per user, normal | 0.5–2 %; > 5 % = solicited | own observation |
| organic installs, a #1-ranked niche extension | ~10/day | own data (FinGrab) |
| cost per install, Microsoft Ads (niche extension) | €1.43 | own data (FinGrab) |
| young-domain SEO | ~0.1 % CTR, positions 50–100 | own data (FK/HC) |
| affiliate: approved partners who ever refer | 15 %; who bring a payer 6.4 % | desk research |
| podcast promo codes capture | 20–30 % of conversions | desk research |
| Shopify installs per review | ~30 (assumption) | unverified |
| Apify / Atlassian store share | 20 % / 0 % to $1M then 16–17 % | store docs |
| bars per effort tier | 150 / 500 / 1,000 net per month | own convention |

## Glossary

- **Bet** — one idea under test. **Stock** — a bet whose test is over and that stays online without effort.
- **Job / JTBD** — "When [situation] I want to [motivation] so I can [outcome]."
- **Job cluster** — listings that do the same core job.
- **Paid proof** — an in-store product that already earns for this job (or a substitute) and passes a payer path.
- **Substitute** — a product a user of this job could buy instead (overlapping core feature).
- **Shelf** — all store listings answering a job on the buyer queries.
- **Ceiling** — the revenue at rank 1, or the whole shelf at your conversion; information, never a target.
- **Core / adjacent / out** — inclusion classes for the market model.
- **β (beta)** — rank-size slope; larger = steeper market, more for the leader.
- **α (alpha)** — tail exponent; β ≈ 1/α. Only from n ≥ 8.
- **Band** — sum of users' lower bounds … upper bounds.
- **Bar** — net revenue a candidate must reach at target rank for its effort tier.
- **Measured / unmeasured track** — stores with / without public user counts.
- **Access: second-hand** — the store bans automated access; evidence from snippets and third parties.
- **Abandoned / Hated / Underserved / Crowded-free** — weakness classes.
- **Raster** — the 8 channel axes. **Gate** — an owner constraint that closes a channel.
- **Bullseye** — test 2–3 channels cheaply, double down on the winner, move it into a durable owned channel.
- **CAC / LTV** — customer acquisition cost / net lifetime value.
- **Stand-in event** — a cheap conversion (signup, install) optimized when real purchases are too few.
- **Graveyard** — the list of dead ideas with reason and date.
- **Case against** — the strongest reason to pass, plus the one finding that would flip it.
- **ASO** — app store optimization: listing title, summary, screenshots, reviews.
