# Market sizing by hand

How big is a store market, how is it split, and what can you earn at a realistic rank? Two tools: the **10-minute shelf ceiling** and the **rank-size model** in a spreadsheet. Both are upper bounds with stated inputs, never forecasts.

Method source: rank-size (power law) and Bass diffusion from Scott Page, *The Model Thinker*, calibrated on one run over 8 live extensions and 1 planned one.

## The 10-minute shelf ceiling

1. Search the store with 7–10 buyer queries.
2. List every result. Split them by **job**: drop listings that answer a different job, and write down what you dropped.
3. Sum the users of the on-topic listings.
4. Ceiling = on-topic users × your install-to-paid rate × monthly price.

Examples:

- FinGrab: #1 on 10 of 13 buyer queries, but the whole Yahoo-export shelf held 1,748 users. At 1.13 % paid and $9/month: ~20 subscriptions ≈ $178/month.
- PlaylistGrab: ten queries reported 507,003 users, ~450,000 of them on playlist managers doing a different job. Import shelf ~1,250, export shelf ~15,200 — a factor of 12 between two "shelves".
- InvoiceGrab: #2 on a German shelf whose best listing had 17 users — a good rank in an empty shelf.

The ceiling assumes you win the whole shelf. It often ends the discussion.

What a target needs: €5k MRR = 556 payers at €9, 172 at €29, 63 at €79. On a Chrome shelf: 26k paid-eligible users at €19 and 1 % paid, 10k at €49 and 1 %.

## Read store numbers correctly

- **Buckets.** The Chrome Web Store prints exact counts below 1,000 and buckets above: "10,000 users" means 10,000+. Buckets step 1,000–9,000 by 1,000, 10,000–90,000 by 10,000, and so on. The upper bound is the next bucket (2,000 → 3,000; 30,000 → 40,000). A sum of buckets is an order of magnitude.
- **Hidden count.** A listing with a title but no user count is below the display threshold: tiny, not zero, not missing. Leave it out of the model; count it separately.
- **Gone listing.** A bare store page or 404 = removed. Takedown signal.
- **Rating counts** like "1.6K ratings" = 1,600.
- A search returning 0 results never means "no market". Rephrase and retry.
- **Never compare raw user counts across stores.** Each counts something else:

| Store | What "users" counts | Quality |
|---|---|---|
| Chrome Web Store | weekly active users, bucketed (lower bound) | bucketed |
| Firefox Add-ons | average daily users | exact |
| Apify | users in the last 30 days | exact |
| Atlassian | active installs | exact (ignore the API's star average; it jumped 3.23 → 4.13 within minutes; average the reviews yourself) |
| WordPress.org | active installs, bucket d × 10^k from 10 up | bucketed |
| Shopify, WooCommerce | no installs published; use review counts | proxy only |
| Slack, Miro, Canva, Notion, ChatGPT Apps | neither users nor reviews | no data — never rank |

Compare a job across stores only inside one group: browser (CWS, Firefox, Edge), automation (Apify), CMS (WordPress), team tools (Atlassian, monday, HubSpot — competition between these is unconfirmed).

- **Catalog numbers need their distribution.** "979 downloads in 3 months" for a paid Obsidian plugin looked like a thin niche. The directory (6,463 entries) had median 572, p75 4,575, p90 16,727 — 979 is average. Pull median and p90 of the population before reading one number.
- **Providers ≠ demand.** ~25 providers in a niche whose largest had 4,493 downloads (catalog leader: 7.1M) is thin on demand, not thin on competition.

## The rank-size model in a spreadsheet

### 1. Collect

Per market: one job sentence, 3–6 queries, known competitors. Run the queries, list every result once. Per listing: name, users (lower bound), upper bound, rating, rating count, last updated, price.

### 2. Code inclusion

Each listing gets a class and a one-line reason quoting the deciding phrase:

- **core** — does the job for the same user; a user would install it *instead of* yours. Only core enters the model.
- **adjacent** — overlaps part of the job (a suite with this as one feature, the same job on another site). Mine its reviews; keep it out of the model.
- **out** — keyword collision or another job.

Doubt between core and adjacent → adjacent. A padded core inflates the market and flattens β.

### 3. Rank and fit β

Sort core listings by users (lower bound), descending; ties by rating count. Drop 0-user and hidden-count listings.

| | A | B | C | D |
|---|---|---|---|---|
| 1 | rank | users (low) | users (high) | weight |
| 2 | 1 | 20000 | 30000 | `=A2^-$G$1` |
| 3 | 2 | 9000 | 10000 | `=A3^-$G$1` |
| … | | | | |

- **β** (in G1): `=-SLOPE(LOG10(B2:B9), LOG10(A2:A9))` (LibreOffice/Google Sheets accept array arguments; in Excel add helper columns with `=LOG10(..)`).
- **R²**: `=RSQ(LOG10(B2:B9), LOG10(A2:A9))`. Expect 0.8–0.96 for n ≥ 5.
- n < 3 → no β, no scenario.
- Larger β = steeper market: the leader holds more, lower ranks earn little.

### 4. Share at rank k

Zipf share: s_k = k^−β ÷ Σ_{i=1..n} i^−β, with **this market's own n**.

Spreadsheet: share at rank k = `=INDEX(D2:D9, k) / SUM(D2:D9)`.

### 5. Pick the target rank

- Default: the first competitor below rank 1 that is **abandoned** (no update > 365 days) or **weak** (≤ 3.0★ from ≥ 3 ratings). Its slot is takeable.
- Otherwise the median rank (upper median when n is even; at least 2).
- **Never rank 1.** Rank 1 is the ceiling, reported only as such. A manual run once headlined €3,417/month for an extension at rank 25 of 32, and €737/month for one at rank 10 of 12. Both were unreachable; both read like targets.
- Write the reason for the target rank down.

### 6. Revenue scenarios (per month)

- **Band** = Σ lower bounds … Σ upper bounds. Mid = the average of both.
- **Price** = monthly equivalent of each *active* plan (year ÷ 12, one-time ÷ 12). Never from legacy purchases: one run priced from 2 old purchases (≈ €0.66/month) instead of the active plans (≈ €2.01/month).
- **Conversion** = payers ÷ users. Own data first. Without it on the Chrome Web Store: 1.9 % borrowed (one extension: 161 installs → 3 payers — a single data point). FinGrab measured 1.13 %. Never carry the CWS rate to another store; there, no measured or sourced rate = **unpriced**.
- Borrowed conversion range: value ÷ 2 … value × 1.5.

| Scenario | Formula |
|---|---|
| low | band low × smallest share considered × conversion low × cheapest plan |
| base | band mid × target share × conversion × mean plan |
| high | band high × largest share considered × conversion high × dearest plan |
| ceiling | band mid × rank-1 share × conversion × mean plan |

Shares considered: target rank, one rank better (if ≥ 2), your current rank. Multiply every figure by (1 − store share) — Apify 20 %, others see the pricing table in [Idea research](05-idea-research.md).

Other pricing models:

- **Per install paid** (Atlassian): conversion = paid share of installs; price = per install at the buyer's seat tier.
- **Usage share** (Apify): conversion = share of 30-day users who pay; price = assumed monthly spend per payer, labelled an assumption.

### 7. Compare with the bar

| Effort tier | Bar (net per month at target rank) | Typical |
|---|---|---|
| weekend | 150 | Chrome, Firefox, Apify |
| medium | 500 | WordPress (PHP, review queue of ~2,000 plugins) |
| big | 1,000 | Atlassian (approval 10–15 business days, security questionnaire); anything with a backend |

`× bar` = base ÷ bar. ≥ 1 passes.

For a live product: **scaling pays** when max(current MRR, base) ≥ your threshold AND the target rank is above your current rank. Otherwise: keep running, don't invest.

### 8. Sanity check

Recompute n, band, rank order and base revenue once from the raw list. Check every number in your write-up against the sheet. A mismatch is a mistake to find, not a number to patch.

## Worked example

Eight core listings (users low / high): 20,000/30,000 · 9,000/10,000 · 5,000/6,000 · 3,000/4,000 · 2,000/3,000 · 1,000/2,000 · 600 · 300.

- β = 1.93, R² = 0.93 — a steep market.
- Shares: rank 1 64 %, rank 2 17 %, rank 3 7.6 %, rank 4 4.4 %.
- Band 40,900 … 55,900, mid 48,400.
- Rank 3 was last updated 14 months ago → target rank 3.
- Base = 48,400 × 0.076 × 0.019 × $5 = **≈ $351/month** → 2.3× the weekend bar. Passes.
- Ceiling (rank 1, information only) ≈ $2,931/month.

## Tail exponent α (optional)

Only with n ≥ 8: α = n ÷ Σ ln(x ÷ x_min), x_min = the smallest core listing. β ≈ 1/α; the scales run opposite (steep market: large β, small α). Never compare one market's β with another's α. Below n = 8, β leads and α is `n/a`.

## Growth curve (Bass, live products only)

Fit only with ≥ 6 dated user counts over ≥ 8 weeks and a publish date. A fitted q above 2/year is implausible (one run fitted ~6/year). Otherwise state the literature prior (p ≈ 0.03, q ≈ 0.38) as text, never as a curve.

## Supply never overrules demand

A shelf measurement shows installs, not current search demand. The store publishes no search volume. Check demand separately with Keyword Planner and autocomplete.
