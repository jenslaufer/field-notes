# Playbooks

Starter channels and first steps per product type. Built from real products.

## Chrome extension

For a backendless browser extension with a freemium paywall. Built from FinGrab, PlaylistGrab, CommentGrab, InvoiceGrab and TradeGrab.

| Role | Channel | Why |
|---|---|---|
| Main | Chrome Web Store search | The only channel that produced users for free (FinGrab ~10 installs/day) |
| Free extra | Edge Add-ons | Same package, second listing |
| Spike | Reddit, Product Hunt | Disclosed answers to real questions; one launch spike |
| Optional test | Microsoft Ads only | Small, demand-capped; Google blocks extensions |
| Retention | Rate nudge, shareable output | Ratings lift conversion |

**Closed:** Google Ads (L-03); SEO on the product domain (L-23).

**Before building**

1. Native-feature check: has the platform shipped or announced it in the last six months? (L-05)
2. Keyword Planner for the buyer phrasing.
3. Size the shelf over 7–10 buyer queries, split by job, compute the ceiling (L-21, [Market sizing](06-market-sizing.md)).
4. Read the top competitors' review text (L-10).
5. Ship only if the ceiling is worth it. Say "trickle, not business" when it is not.

**Before submitting**

1. Name and short description carry the buyer's words (L-08).
2. Open a how-to page on install (L-11).
3. Privacy policy on its own page (L-09).
4. Check for a free publishing slot; request an increase if needed (L-24).
5. Test the paid and the unpaid path by hand in a real browser with a fresh profile.

**After launch**

1. Day 1: check the listing is live and found on its head query.
2. Week 1: answer 3–5 matching Reddit threads with disclosure.
3. Set the kill/scale recheck date on publication day.
4. Watch opened payment pages, not revenue, as the first conversion signal (L-25).
5. No traffic spend until conversion is measured.

**Expect** a trickle of free users, ~1–1.6 % install-to-paid, shelf ceilings in the hundreds of dollars per month. A cheap bet, not a cash-flow base — unless the shelf measurement says otherwise.

### Chrome Web Store listing facts

| Field | Limit |
|---|---|
| Title | 75 chars |
| Summary (manifest `description`) | 132 chars |
| Detailed description | ~16,000 chars |
| Icon | 128×128 PNG |
| Screenshots | 1280×800 or 640×400, 1–5 |
| Small promo tile | 440×280 |
| Marquee tile | 1400×560 |

Ranking levers, rough weight order:

1. **Title keywords.** Formula `Brand – <head buyer query>`. Never lead with someone else's trademark; keep a fallback title for a rejection.
2. **Summary and first description lines.** Indexed; open with literal buyer queries.
3. **Install and review velocity.** Fresh ratings beat old ones; ask at the moment of success, never nag.
4. **Update recency.** Stale > 12 months reads as abandoned.

Google's stated factors: rating quality, install-vs-uninstall trend, listing quality / single purpose. Keyword stuffing is a policy violation.

Privacy tab (required): single-purpose statement, one justification per permission (must match the built manifest), remote code "No", data-use disclosures, privacy-policy URL.

Review: typically < 24 h; broad host permissions or scripting → manual, days. Plan for one rejection; narrowed permissions or the fallback title usually clears it.

Sources: developer.chrome.com/docs/webstore — `cws-dashboard-listing`, `best_listing`, `program-policies`, `review-process`.

## Calculator site

For free online calculators monetized by ads, affiliate or leads. Built from finanzkalkulatoren.com and healthcalculator.app — both stopped after ~0 traffic.

**Warning first.** A calculator site on a new domain whose only plan is "rank in Google" fails as a cash-flow bet (L-02). Money and health topics need years of authority. Build one only as a zero-attention background bet, or with distribution that does not depend on Google.

| Role | Channel | Why |
|---|---|---|
| Distribution | Chrome extension, WordPress plugin, marketplace | Store discovery works without domain authority |
| Distribution | Embeddable widget | Lives on sites that already have traffic; earns links |
| Distribution | Bloggers in the niche | Offer the widget for their articles; verify each target |
| Test | SEM / social ads | Only if one conversion pays more than the click (lead or affiliate value) |
| Monetization | Affiliate | One matching product per calculator; needs traffic first |
| Background | SEO | Long tail, on an existing domain with authority |

**First steps**

1. Per calculator: search volume, CPC (buying power), who ranks top 3. Banks or big comparison sites on top = no ranking for years.
2. Prefer an existing domain with authority.
3. Build the calculator as an embeddable widget and as an extension/plugin from the same code.
4. List ten blogs or newsletters in the niche; verify each accepts outside tools; offer the widget.
5. Add one affiliate or lead offer per calculator before buying traffic; compute value per visitor.
6. After 90 days, check Search Console by `page`; stop if clicks stay near zero.

**Expect** ~0 organic clicks for months on a young domain. Lead values can be high (mortgage leads ~€32.50), so a calculator with a lead offer may justify paid traffic — test that, don't hope for ranking.

## B2B SaaS

For a B2B product or productized service at hundreds to thousands of euros a month. Built from Fabrik (IT staffing agencies), solytics (e-invoice, KI-Assessment) and Launch Kit.

| Role | Channel | Why |
|---|---|---|
| Main | Sales — cold outreach to a narrow ICP | Price supports human selling; fastest B2B feedback |
| Leverage | Business development — resellers, partners | Partners hold the trust; the only pre-qualified solytics demand came from a partner |
| Reach from zero | Speaking, offline events — talks, office hours | Creates reach without a network |
| Test | SEM — high-intent and `<competitor> alternative` | Fast signal if buyers search; compute payback first |
| Platform | Microsoft Marketplace, Capterra/G2 | Office add-ins self-install; B2B directories accept submissions |
| Durable | Email + content | Nurture leads; a case study from every customer |

Constraint: no warm network (L-06).

**First steps**

1. Measure the market before features: brand vs. category ratio, price floor set by neighbours, the challenger who already built your wedge (L-20).
2. Pick an ICP where buyer and user are one person (owner-run, 5–30 staff). Write their three sharpest pains.
3. Write the pitch in three lengths: one sentence, one paragraph, one page.
4. Offer a paid entry step with a guarantee (assessment, pilot) instead of a cold big-ticket offer.
5. Build a list of 50 verified public contacts; send in batches of 20; track replies.
6. Check the surfaces the buyer checks — website, profile, imprint — before sending (L-13).
7. Wire the funnel so a human is notified within minutes; answer the same day (L-15).
8. List three possible resellers who already sell to the ICP; offer white-label or margin.

**Expect** signal within weeks from outbound replies, not from content. A website funnel with 47 clicks a month shows nothing, even when every link works (L-12). Support load is the hard limit: prefer bounded offers (pilot, fixed scope, reseller in front).

## Other product types — first paid test

From desk research (2026-11-18), not measured. "First test" = the form with the lowest cost of a verdict.

| Product type | First test | Scale format | Default no-fit |
|---|---|---|---|
| Shop, few SKUs | Standard Shopping through a CSS; pay-per-sale marketplace placements (eBay Basis) | PMax with feed; Amazon Sponsored Products; affiliate | PMax before ~15 orders/month |
| Shop, large catalog | PMax + a standard Shopping control; idealo or billiger.de for EAN goods | Amazon, Kaufland, OTTO retail media; Pinterest, TikTok Shop | — |
| Handmade, print-on-demand | Etsy Ads at $1/day; Etsy Offsite Ads | Pinterest; creators | — |
| Info products, courses | Affiliate via Digistore24 or CopeCart (50 %+ commission common) | Native advertorials; topic podcasts; TikTok lead forms | Shopping (eBooks banned); income or cure claims |
| Books | Amazon Ads for KDP | — | — |
| Mobile apps | Apple Ads (no minimum) | Google App campaigns (budget 50× target CPI); Snapchat, TikTok installs | Affiliate without known revenue per install |
| B2C software, subscriptions | Niche newsletters, Product Hunt; Quora and Snapchat from $5/day; retargeting | In-house affiliate from ~$30–50/month plans | Shopping |
| B2B software | Capterra or OMR Reviews PPC; referral partners | StackAdapt, Microsoft Audience Network | Developer networks below ~$1,000; Stack Overflow ($10,000+) |
| Browser extensions, plugins | No store ads exist: send external ads to the listing | — | Store ads |
| Local services | Search with location assets or Local Services Ads; bulletin ad or unaddressed mail | Local radio, cinema, digital out-of-home; MyHammer, Treatwell | Affiliate; formats needing 50 conversions/week from a small area |
| B2B and freelance services | Addressed letters to an account list; Upwork/Fiverr boosts | Trade magazines, B2B podcasts; PMax only with qualified-lead import | PMax on raw form fills |
| Finance, insurance | Affiliate (€20–80 per account or lead) | Comparison portals | Meta events suggesting financial status |
