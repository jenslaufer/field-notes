# Research summaries

Pre-build scans. A scan is not a learning: it becomes one only when a real product measures the outcome. Every figure here is dated and mostly desk research.

## Demand scan: a product toward €5k MRR (2026-10-25)

**Question.** Which existing customer stream can carry a scalable, sellable product toward €5k MRR — measured before building? Criteria: stream size, ceiling at a realistic price, recurring revenue, transferable asset, support load, time to first signal.

**Why price decides.** €5k MRR needs 556 payers at €9/month, 172 at €29, 63 at €79. At consumer prices no shelf measured so far was big enough.

| Candidate | Stream | Weak-incumbent signal | Recurring, sellable | Support load | First signal |
|---|---|---|---|---|---|
| Shopify: EU-compliant invoices (+ XRechnung/ZUGFeRD) | ~7,800 reviews | Shopify's own Order Printer 45 % 1★ ("not compliant with UK or EU laws") | yes, yes | low | weeks |
| Shopify → Xero/QuickBooks sync | ~5,600 reviews, $15–749/month | both official integrations switched vendors in 2026 | yes, yes | high | weeks |
| CWS: Amazon review export | ~50k users | top 5 all 2.5–2.9★ | yes, yes | medium | days |
| CWS: invoice download from portals | ~38k users | leader abandoned | yes, yes | medium | days |
| PDF/bank statement → DATEV/CSV | paid SaaS at $20–39 | unknown | yes, yes | medium | unknown |
| Fiverr gigs | visible | — | **no**: accounts not transferable | high | — |

**Conclusion.** Scalable and sellable shift the answer from backendless consumer extensions toward the Shopify App Store: buyers already pay monthly, and apps sell at 23–39× monthly net profit (Empire Flippers). The cost is a backend. Recommendation was a Shopify app for EU-compliant invoices with e-invoicing as the wedge. Against it: 8 of the top 10 carry "Built for Shopify"; prices $10–20 mean 250–500 shops for €5k; six XRechnung apps launched in 2026 with zero reviews.

**Method lessons**

- Shopify ratings are inflated everywhere (median 4.7–5.0). Use 1★ share and recency of bad reviews instead of the average. Low averages appear mostly on platform-owned apps.
- Rough Shopify ceiling (unverified assumptions): installs ≈ reviews × 30, 30 % pay, a newcomer wins 1–5 % of the paying base.
- One app per Shopify Partner organization keeps a later sale simple.
- Fiverr: repeat gigs are product signals ("clean, merge CSV" across the top 6 gigs; "convert pdf to excel"). Fiverr blocks live access; Wayback snapshots work. Fiverr accounts cannot be sold — only a product built from the signal can.
- Chrome shelves: ceiling = on-topic users × 1–2 % × price, an upper bound that assumes you win the whole shelf. Planted review bursts (generic 5★ all on one day) and extreme user/rating ratios mark inflated listings.

## Paid channels beyond search (2026-11-18)

**Question.** Which paid platforms beyond Google/Microsoft search can a solo founder test with a few hundred euros from Germany, and at which price can CAC beat LTV?

**Findings**

1. **The learning phase eats a small budget.** Meta and TikTok need ~50 optimization events a week; Demand Gen 15–20× target CPA. At €30–150 per payer that is €1,500–7,500 a week.
2. A small auction test works only on a cheap **stand-in event** (signup, install). It yields click and signup cost, not CAC.
3. **Placements with existing intent give the cleanest small tests**: niche newsletters, Product Hunt, Apple Ads, Shopify App Store ads.
4. **ChatGPT Ads** is bookable from Germany but a beta without benchmarks: EU clicks €0.16–2.68, US $1.72–13; three B2B cases report 0–2 real leads.
5. **Health and finance** face extra walls on Meta, ChatGPT Ads and Pinterest.

| Platform | Cost | Minimum | Verdict threshold | Fits |
|---|---|---|---|---|
| ChatGPT Ads | CPC €0.16–2.68 (EU cases) | €15/day | none; beta | B2C with a conversation-shaped use case |
| Meta | CPC $0.60–1.95 | ~$5/day | ~50 events in 7 days | B2C with a visual hook at $10–50/month |
| Reddit | CPC $0.50–2.20 | $5/day per ad group | ~20 events (unverified) | dev and niche tools with a subreddit |
| LinkedIn | CPC ~$9.39 | $10/day | — | B2B from $50/month |
| TikTok | CPM ~$13 | $50/day campaign | 50 conversions per ad group | B2C with a video demo |
| YouTube (Demand Gen) | CPV $0.02–0.04 | ~$100/day in practice | 15–20× target CPA | demo-driven products |
| Niche newsletters | flat fee | none | none | niche B2B, topic-matching tools |
| Product Hunt | CPM up to $55 | — | none | AI and dev tools, extensions |
| Apple Ads | DE ~$2.14 per install | none | none | iOS apps |
| Shopify App Store ads | pay your bid | $5/day | none | Shopify apps |

**Conclusion.** For a first test below €500, buy intent or a flat-fee placement before an auction. Meta or Reddit only with a stand-in event and a price from ~$20/month. €300 on ChatGPT Ads judges click-through, not conversion.

## Paid channels by product type (2026-11-18)

**Findings**

1. **The billing model decides what a small test can tell.** Pay-per-sale needs no test budget (eBay Basis 2–100 % ad rate, Etsy Offsite 12–15 %, Gumroad Discover 30 %, affiliate). Pay-per-click needs enough clicks (Kaufland: 100 per product). Self-optimizing auctions need conversion volume.
2. **Entry prices are low; the gate is elsewhere.** Marketplaces: eligibility (Amazon professional account, Brand Registry; OTTO needs a company and €99.90/month). Affiliate: active partners. Offline: measurement. PMax: 3× CPA daily and 15 conversions in 30 days.
3. **Shops:** standard Shopping is the cheaper test, PMax the scale format. EU median CPC: Shopping €0.37, PMax €0.43, text €0.45 (one vendor).
4. **Free product listings** were reportedly removed from Search in the EEA in September 2026. Unconfirmed.
5. **Most software stores sell no placement** (Chrome states it; none found for Edge, Firefox, VS Code, JetBrains, WordPress.org, Slack, HubSpot, Zapier). B2B software's paid layer is review directories.
6. **Local services have the widest choice of cheap forms**: bulletin ads from ~€24, unaddressed mail from €300, local radio and cinema, Local Services Ads, lead marketplaces.
7. **Addressed letters to consumers need no opt-in in Germany.** Published response rates (4.1 %) are for existing customers.
8. **Platforms in older advice are gone:** ShareASale (closed 2025-10-06), Lemon Squeezy (no new sign-ups; ends 2027-03-31), Microsoft Invest DSP, Podcorn. Outbrain trades as Teads.

**Conclusion.** Pick the paid test by billing model before platform: commission first, flat fees and fixed-price clicks next, self-optimizing auctions last. The cheapest verdict sits where buyers already shop for that product type. The table "Other product types" in [Playbooks](09-playbooks.md) has the per-type picks.

**Against it.** Most cost benchmarks come from vendors with something to sell. No German cost figures for display, native, Pinterest, X, Snapchat, Quora.
