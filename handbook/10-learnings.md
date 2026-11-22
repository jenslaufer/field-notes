# Learnings

Findings from real products, each measured. Numbered by date (L-01 oldest). Grouped by theme. Format: **finding** — evidence — what to do.

| # | Date | Learning | Theme |
|---|---|---|---|
| L-01 | 2026-05-21 | Verify every named platform before recommending it | Validate |
| L-02 | 2026-06-27 | SEO on a young domain brings no traffic | SEO |
| L-03 | 2026-06-28 | Google Ads does not serve ads for Chrome extensions | Paid search |
| L-04 | 2026-06-29 | Fix a paid-search leak with the match type, not negatives | Paid search |
| L-05 | 2026-07-14 | A native platform feature kills a wrapper product | Validate |
| L-06 | 2026-07-16 | Plans built on a warm network are void | Funnels |
| L-07 | 2026-07-20 | Microsoft Ads for a niche extension is too small to decide | Paid search |
| L-08 | 2026-07-20 | Chrome Web Store search ranks on the words in the name | Store |
| L-09 | 2026-07-25 | Store review needs a real privacy-policy page | Store |
| L-10 | 2026-07-30 | Competitor reviews are the cheapest evidence | Validate |
| L-11 | 2026-07-31 | An extension must show itself on install | Store |
| L-12 | 2026-08-03 | A funnel can work in every link and still produce nothing | Funnels |
| L-13 | 2026-08-03 | An outbound channel has two surfaces | Funnels |
| L-14 | 2026-08-03 | Reddit: disclosed answers only, never a launch post | Funnels |
| L-15 | 2026-08-04 | A funnel ends at a notified human | Funnels |
| L-16 | 2026-08-05 | In a two-sided model the supply side blocks | Validate |
| L-17 | 2026-08-05 | Check that existing channels exist before paying for a new one | Inventory |
| L-18 | 2026-08-06 | The click target and its link preview belong to the channel | Inventory |
| L-19 | 2026-08-08 | A catalog number means nothing without median and p90 | Validate |
| L-20 | 2026-08-10 | Measure brand-to-category ratio and price floor before entering | Validate |
| L-21 | 2026-08-14 | A store shelf has a revenue ceiling you can compute in ten minutes | Validate |
| L-22 | 2026-08-21 | When the words already match, listing copy is not the rank lever | Store |
| L-23 | 2026-08-21 | Clicks on own domains come from the brand name | SEO |
| L-24 | 2026-09-03 | The Chrome Web Store publishing cap is per publisher | Store |
| L-25 | 2026-09-12 | FinGrab's bottleneck was conversion, not traffic | Store |

---

## Validate before building

### L-05 A native platform feature kills a wrapper product

**Finding.** Search demand answers "do people want this?", not "does the platform give it away?". A tool filling a platform gap dies the day the platform ships the feature.

**Evidence.** TradeGrab (Trade Republic statement PDF → CSV) was killed pre-launch: Trade Republic had shipped a native CSV export in April 2026, three months before the research — better and free. Three build phases, a store item and screenshots were wasted.

**Do.** Before speccing a tool around a platform, check its changelog, blog, X account and app release notes for the feature, shipped or announced, over the last six months. Native-feature check and channel fit come before the first line of code.

### L-20 Measure brand-to-category ratio and the price floor before entering a market

**Finding.** Two measurements answer "can we enter market X" before any feature talk: the ratio of brand searches to category searches, and whether a neighbouring player gives the software away.

**Evidence.** Photographer galleries, Germany: `picdrop` 22,200 searches/month against ~380 for the whole category (58 : 1). Only `<brand> alternative` (~230/month) was buyable: 610 clicks × €3.50 = €2,135 → 6 customers → €72/month → ~30 months payback. A print lab gives gallery and shop away at €0 — software is their sales cost. A challenger had already shipped the exact wedge and had 50 brand searches/month.

**Do.** A two-digit brand : category ratio means there is no search stream to buy into. Search `<leader> alternative`, open the challenger, measure its brand volume. Never conclude "empty field" from zero category searches. Write the payback math out every time.

### L-16 In a two-sided model the supply side blocks

**Finding.** One checks demand by reflex; the locked side is almost always supply. CPC measures buying power, not cost.

**Evidence.** Funeral portal: `bestatter` 22,200 searches/month, €1.38–6.84 CPC, ~€507 commission per case — viable from ~1 % close rate. Closed anyway: incumbents hold 850–1,000+ partner businesses, a funded player buys more, and partners are won by association, trade fair and phone — a network Jens lacks. One-cent traffic (`was tun im todesfall`) is a price tag for worthlessness.

**Do.** Price both sides separately before designing anything. Pull volume, competition and CPC before speculating about demand. Under a regulatory block, look for the legal form others use.

### L-21 A store shelf has a revenue ceiling you can compute in ten minutes

**Finding.** Sum the users of the real competitors on the buyer queries × your install-to-paid rate × price. An upper bound, not a forecast — and it often ends the discussion.

**Evidence.** FinGrab: #1 on 10 of 13 queries, whole shelf 1,748 users → at 1.13 % and $9 ≈ $178/month. InvoiceGrab: #2 on a shelf whose best listing had 17 users. PlaylistGrab: 507,003 reported users, ~450,000 on a different job; import shelf ~1,250 vs. export ~15,200.

**Do.** Split listings by job before quoting a total; name what you filtered. Sums of bucketed numbers are orders of magnitude. A missing count stays unknown, never 0. A supply measurement never overrules a demand measurement.

### L-19 A catalog number means nothing without median and p90

**Finding.** A single download or revenue figure sounds like evidence; its meaning comes from the distribution. Counting providers answers "is it full?", not "does anyone want it?".

**Evidence.** "New paid Obsidian plugin, 979 downloads in 3 months" looked like a thin paying niche. Directory of 6,463: median 572, p75 4,575, p90 16,727 — 979 is average. The finance niche had ~25 providers, the largest at 4,493 downloads vs. 7.1M for the catalog leader: thin on demand.

**Do.** Pull median and p90 of the whole population (often a public stats file). Measure provider count and their user counts separately.

### L-10 Competitor reviews are the cheapest evidence on a store shelf

**Finding.** Review text beats every marketing claim and every star average. It tells you what the incumbent really fails at — and your own reviews are bug reports.

**Evidence.** CommentGrab: incumbent reviews showed it was abandoned ("email undeliverable, domain inactive") and that the real complaint was a replies paywall, not the assumed comment cap. A 4.9★ query owner had 805 ratings on 2,000 users (~40 %; normal 0.5–2 %; above ~5 % = solicited). FinGrab's drop 3.7 → 3.4★ was a reproducible data bug in the text, not a mood.

**Do.** Read review text with its date and reviewed version. Read rating together with rating count. Diff a "ready fix" against the complaint before shipping it.

### L-01 Verify every named platform before recommending it

**Finding.** Platform categories do not transfer across countries and verticals. Open "submit your tool" aggregators are an English-web pattern.

**Evidence.** A plan named German calculator aggregators as a top-3 lever. 9 of 9 were invalid: redirects, own calculators, editorial-only, bans on outside content. B2B SaaS directories (Capterra, G2) do accept submissions.

**Do.** When a plan names three or more platforms, check each in 1–2 minutes: exists, submission path exists, open or editorial. Unchecked ones are `unverified` and stay out of the top list.

---

## The store channel

### L-08 Chrome Web Store search ranks on the words in the name

**Finding.** Rank follows the words in name and short description, not installs or rating. It works once: when the name misses the buyer's word, adding it wins rank.

**Evidence.** FinGrab placed top 3 on all 7 queries built from words in its name, absent from all 6 built from missing words. A competitor with 21 users and 0 ratings outranked FinGrab (211 users, 3.7★) on the Excel cluster — only because "Excel" was in its name. The long description weighs far less.

**Do.** Put the buyer's exact phrasing into name (≤ 75) and short description (≤ 132); both live in the manifest and need a package upload. Keep words that already earn rank as an exact prefix. Before calling "not ranked" a gap, read the top 3: an off-topic result page means no supply, not a winnable gap. Never claim a format the product cannot emit ("to CSV for Excel", not "Excel export").

### L-22 When the words already match, listing copy is not the rank lever

**Finding.** Once the listing covers the buyer's words, more copy does not move rank. The listings ahead hold installed base, and rank among them does not track installs either.

**Evidence.** PlaylistGrab day 14: rank #5–#10 → #4–#6, #1/#2 on none of 7 queries. Word coverage by rank 76 % / 73 % / 65 % — flat. On one query PlaylistGrab covered 100 % at #4; the #1 covered 67 % with 845 users vs. 6. Rank vs. users correlation over 25 listings: 0.00.

**Do.** Measure word coverage against the listings above you. If yours equals or beats theirs, stop writing copy. Find what actually brought the shelf's users before spending more.

### L-25 FinGrab's bottleneck was conversion, not traffic

**Finding.** Store search brought free users steadily; buyers stopped because nobody hit the paywall.

**Evidence.** 448 users, 4.3★, ~10 organic installs/day, #1 on 12 of 13 queries. 7 buyers total (~€12 each). The 1-year export range was free and preselected, so no one reached the wall; the last payment page opened on 2026-08-25. v2.0.9 put 1 year behind the paywall. A rate nudge lifted 3.7 → 4.3★.

**Do.** After a paywall change, the first signal is opened payment pages, not revenue. If they stay at zero, test the unpaid path in a real browser with an unpaid profile. No traffic spend while conversion is unmeasured.

### L-11 An extension must show itself on install

**Finding.** Chrome does not pin a new icon. An extension that only appears on one site and opens nothing on install looks broken.

**Evidence.** FinGrab's overlay lived only on one Yahoo Finance page. The only negative review then, "Doesn't load." (1★), described exactly that.

**Do.** Open the how-to page once on install (`chrome.runtime.onInstalled`, reason `install`; `chrome.tabs.create` needs no permission). Ship such fixes with the next upload; afterwards they cost a review cycle.

### L-09 Store review needs a real privacy-policy page

**Finding.** The reviewer must land on a dedicated privacy-policy page at a public URL, not a marketing site.

**Evidence.** A FinGrab submission was rejected on 2026-07-25 for exactly this.

**Do.** Host the policy at its own URL before the first submission. Listing copy, screenshots and privacy declarations are dashboard-only; complete them before publishing.

### L-24 The Chrome Web Store publishing cap is a per-publisher number

**Finding.** The cap on published extensions is set per publisher and can be raised by request. Not a fixed wall.

**Evidence.** 13 listings against a cap of 14 (grandfathered when the 2026 rule landed). Docs: default two slots; an increase can be requested; low sustained engagement is a refusal reason.

**Do.** Request an increase before a new submission; it is free. Never unpublish dead listings to make room — it may lower the cap for good. Updates to a published listing need no slot.

---

## Paid search

### L-03 Google Ads does not serve ads for Chrome extensions

**Finding.** Google classes extensions as `FREE_DESKTOP_SOFTWARE` and limits the ads fully. Landing page or copy changes do not help.

**Evidence.** All 3 FinGrab ads disapproved, `FULLY_LIMITED`, 0 impressions ever — though they pointed at the official store listing. Paused 2026-07-07.

**Do.** No Google Search campaigns for extensions. Microsoft Ads if paid search at all, and expect it to be demand-capped.

### L-07 Microsoft Ads for a niche extension is too small to decide anything

**Finding.** The channel works technically but delivers too little volume for a verdict, and each install costs more than the product earns.

**Evidence.** Lifetime to 2026-07-19: 5,234 impressions, 134 clicks, €38.39, 20 add-to-Chrome intents. After cleaning navigational queries: cost per intent €2.03 → €0.95, but spend fell to €0.27/day — demand, not budget, was the limit. A €500 kill line would take ~5 years. Later: €1.43 per install; at ~€12 per buyer, ~12 % of installers would have to buy (freemium converts 1–5 %).

**Do.** Before a paid test, compute how long kill and scale thresholds take at the real run rate. Years → the test cannot conclude. Check delivery per day, never per aggregate.

### L-04 Fix a paid-search leak with the match type, not with negatives

**Finding.** Negatives against a Broad keyword are whack-a-mole; new variants keep leaking.

**Evidence.** FinGrab Bing: navigational searches (`yahoo finance`) leaked through Broad keywords. Nine negatives patched the symptom. Switching 15 keywords to Phrase closed the class in five minutes.

**Do.** Check live match types before the search-term report. Tighten Broad → Phrase as the root fix; negatives as backup. Launch notes saying "exact + phrase only" drift — check the live state.

---

## SEO and own sites

### L-02 SEO on a young domain brings no traffic

**Finding.** Calculator sites on new domains do not rank. Google suppresses new, mass-built content; money and health topics need years of authority.

**Evidence.** finanzkalkulatoren.com: ~700 indexed pages, 13 clicks from 12,338 impressions in 86 days, most at position 50–100. Same 28 days: FK 4,161 impressions / 2 clicks, healthcalculator.app 2,250 / 2, solytics.de (older domain) 4,645 / 53 — 26× the yield on similar impressions. Both sites stopped.

**Do.** "Rank in Google" as the only plan fails as a cash-flow bet; fine only as a zero-attention lottery. Never call SEO easy; name 12–24 months for money/health topics. Many sites under one Google identity share one failure point.

### L-23 Clicks on own domains come from the brand name, not the category

**Finding.** A product site does not open a category search channel. It catches people who already know the name.

**Evidence.** fingrab.app, 180 days: 51 clicks from 2,902 impressions; 23 of 24 attributed clicks were on "fingrab". Ten category blog pages: 13 clicks from 2,493 impressions, positions 14–69, despite full indexing.

**Do.** Before arguing "it worked for Y", measure Y. In Search Console sum over `page`; `query` drops anonymised searches (736 vs. 2,902). Buy a domain for the privacy page and brand searches, not to win category searches.

---

## Funnels and outbound

### L-12 A funnel can work in every link and still produce nothing

**Finding.** When traffic is too low, no conversion rate can show. Tuning the page then repeats the calculator-site mistake.

**Evidence.** solytics.de: booking page healthy, lead capture works, autoresponder active — 0 bookings, 0 contacts. Traffic: 47 clicks per 28 days.

**Do.** Measure a funnel backwards: yield → mechanics → traffic. Undersupplied → work on demand, not on CTAs or more articles.

### L-15 A funnel ends at a notified human

**Finding.** "Built" without a notification only means "stored". Consulting leads are won on response speed.

**Evidence.** The sign-up form sat on 57 articles; everything worked — and nobody ever read the contact list. The only inquiry in months became a call because it got a same-day answer.

**Do.** For every funnel ask: who learns that it fired, and within how many minutes?

### L-13 An outbound channel has two surfaces

**Finding.** The message you send, and the static page the recipient checks it against (profile, website, listing). The second ages silently; when they disagree, the checkable one wins.

**Evidence.** 16 polished freelance applications while the public profile showed a 2024 title and project history ending 12/2020. One agency wrote into every posting: "only apply if you updated your profile".

**Do.** Before optimizing the next message, open the checking surface anonymously and compare. Read a counterpart's postings as a set for house rules.

### L-06 Plans built on a warm network are void

**Finding.** No network, audience or list. Any plan starting "ask people you know" fails at step one.

**Evidence.** A warm-circle test for the KI-Assessment was rejected; it became a public format instead (KI-Sprechstunde).

**Do.** Pick channels that create reach from zero: public office hours, talks at IHK or local centres, paid search, stores and marketplaces, cold outreach to verified public contacts.

### L-14 Reddit: disclosed answers to questions actually asked, never a launch post

**Finding.** Reddit works only where real users ask the exact question, and only as an honest disclosed answer. Expect single-digit installs.

**Evidence.** InvoiceGrab: German Q&A surfaces forbid self-promotion — zero. PlaylistGrab: r/youtube, r/NewTubers, r/DataHoarder hold real "move my playlist" threads.

**Do.** Search threads with the buyer's question; answer with disclosure. Read subreddit rules first.

---

## Channel inventory

### L-17 Check that existing channels exist before paying for a new one

**Finding.** A channel list can carry an entry nobody switched on. "No inquiries from there" is no signal when nothing was published.

**Evidence.** Selling a house: a ~CHF 140 Swiss portal was proposed while ImmoScout24.de, the market leader, had never carried the listing. On the buyer's filtered search (≤ €300k) the Kleinanzeigen ad was on page 1 of 19, not page 8 of 211. The Swiss portal's rules said "Switzerland only", but its form offered Germany.

**Do.** Check each channel on its own public surface. Judge visibility on the filtered view a buyer uses. Read the platform's form and live stock, not its help page. Read advertised prices against their footnotes.

### L-18 The click target and its link preview belong to the channel

**Finding.** Every channel ends on a page, and shared links are judged by their preview.

**Evidence.** The Kleinanzeigen ad linked to the house website, which had no `og:image`. Every forwarded link showed a grey box. Preview bots run no JavaScript; the single-page app served them an empty `<div>`.

**Do.** Test previews with real crawler user agents (WhatsApp, `facebookexternalhit`, TelegramBot), not a browser. Image: 1200×630 JPEG < 300 KB in a static, unhashed path.
