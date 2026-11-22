# The 19 channel cards

The traction channels from *Traction* (Weinberg & Mares), made concrete. Raster order: Immediacy · Reach · Cost↓ · Effort↓ · Feedback · Scalability · Targeting · Durability. Score and tier from the [fastest-revenue ranking](07-channel-evaluation.md). "L-nn" refers to a learning in [Learnings](10-learnings.md).

---

## Paid

### Search Engine Marketing — 5·3·4·3·5·3·5·1 · score 55 · A

**Fit signal.** People already search for the solution with buying intent. Weak when demand must be created first.

**Sub-channels.** Google Search, Microsoft Ads, ChatGPT Ads (experimental), Performance Max, Shopping, price-comparison portals (idealo, billiger.de), brand bidding, search retargeting, local search ads, Local Services Ads.

**Tactics.**

- Pull volume, competition and CPC in Keyword Planner before guessing demand. CPC measures buying power; one-cent traffic is worthless.
- Start with Exact and Phrase only, a small daily budget, campaigns created paused; review, then enable.
- Bid on `<competitor> alternative` — often the only buyable cluster in a brand-dominated market.
- Before launch, compute how many days the kill and scale thresholds take at the expected run rate. Check delivery as a daily series.
- Microsoft Ads first for niche B2C tests: cheaper clicks, older desktop audience.
- Fix leaks with match type (Broad → Phrase), not with negatives (L-04).
- ChatGPT Ads: an experiment. Check category policy first; cap the campaign total; write context hints as topics, not keywords; verify conversions against your own data.
- Shops: standard Shopping with capped bids first; PMax only once ~15 orders a month exist. In Europe run Shopping through a third-party CSS. Don't count on free listings in the EEA.
- PMax: budget from CPA (3× CPA per day); brand exclusions and negatives on day one; for leads import qualified leads, never raw form fills.
- Digital products: Shopping bans eBooks, services and most subscriptions.
- Local services: check Local Services Ads eligibility first; about ten leads make a test.

**Own findings.** Google blocks Chrome extensions (L-03). Bing too small to decide for a niche extension (L-07). Brand-to-category ratio and price floor (L-20). Two-sided supply side (L-16).

### Social & Display Ads — 5·5·4·3·5·5·3·1 · score 57 · A

**Fit signal.** Audience targetable by interest, demographics or behaviour; visual or emotional offer; demand must be *created*. Broad B2C; LinkedIn for B2B.

**Sub-channels.** Meta, TikTok, LinkedIn, Reddit, X, Pinterest, YouTube; programmatic display; native (Taboola, Outbrain); Snapchat.

**Tactics.**

- Test message-market fit: 3–5 creatives, one audience, small daily budget, 3–7 days; keep the winner.
- Lead with the outcome as an image or a 15-second screen recording; hook in the first two seconds.
- Retarget visitors; cold audiences convert far worse.
- Compute the learning phase first. Meta/TikTok: weekly budget ≈ 50 optimization events × cost per event. Demand Gen: 10–20× target CPA.
- Below that, optimize a cheap stand-in event and multiply up the funnel yourself.
- Run CAC math per price before picking a platform. $5/month fails by default.
- Reddit only where the audience's subreddit exists; target the community.
- Health and finance hit policy walls on Meta and Pinterest; check policy before the creative. Pinterest bans weight-loss and BMI language. X may hold a first campaign until Premium.
- Germany: pixel and Conversions API fire only after consent. Paid creator posts: label "Werbung" or "Anzeige" at the start.
- Native: send clicks to a labelled advertorial, never to a pricing page.
- LinkedIn has an approval wall — file it on day one.

**Own findings.** None yet; the Meta account was never live.

### Offline Ads — 3·5·5·3·1·4·2·1 · score 38 · C

**Fit signal.** Broad audience with high customer value, or a local offer. Rarely fits early niche products.

**Sub-channels.** TV/CTV, radio, podcast spots, print (papers, municipal bulletins, trade magazines), out-of-home, cinema, direct mail, package inserts.

**Tactics.**

- Local: a notice in a local paper, chamber magazine or municipal bulletin (from ~€24). Book the local rate directly.
- Podcast spots in a niche show: cheapest testable form; unique code or URL. Codes catch only ~20–30 % of response — add "how did you hear of us".
- Direct mail to a short hand-picked B2B list beats broad print. Mail existing customers before cold lists; published response rates are for existing customers.
- Germany: addressed letters to consumers need no opt-in, but every mailing needs the Art. 13 notice and an objection line. "Keine Werbung" stickers block unaddressed mail only.
- An entry-price buy tests the mechanics, not the CAC.
- Match form to product: local media for local services, inserts for shops, host-read podcasts for software, letters and trade magazines for B2B.

**Own findings.** None yet.

### Affiliate Programs — 2·4·3·3·2·4·4·3 · score 45 · B

**Fit signal.** Clear trackable conversion value; margin to pay commission; a product others can credibly recommend. Two directions: pay affiliates to sell yours, or earn as an affiliate on your traffic (needs traffic first).

**Sub-channels.** Networks (Awin, Impact, CJ, financeAds), comparison and cashback portals, coupon sites, influencer affiliates, in-house program, refer-a-friend.

**Tactics.**

- Seller: a simple in-house referral with payout per paid user works on Stripe-based products.
- Tool by product type: info products → Digistore24 or CopeCart (also handles checkout); SaaS → in-house tracking; shop → Shopify affiliate app first.
- Recruit the first 5–10 affiliates by hand. A network listing does not recruit. Median program: 15 % of approved affiliates ever refer, 6.4 % bring a payer; half of small programs never record a sale.
- Price the network override in. Prohibit brand bidding. Expect coupon and cashback partners to claim sales that would have happened anyway.
- Germany: sales after declined consent go untracked; reconcile with your own orders.
- Publisher: one matching product per page; label as ad. Benchmarks (DE finance 2026): broker €40–150 per sale, mortgage lead ~€25–32.50, loans 1.5–1.85 % of volume.

**Own findings.** None yet. Publisher income needs a working traffic channel first.

---

## Owned

### SEO — 1·4·2·4·1·5·4·5 · score 43 · C

**Fit signal.** Recurring existing search demand; willingness to wait 6–18 months (money and health: longer). Weak for new categories and young domains.

**Sub-channels.** On-page and technical, content SEO, programmatic pages, long-tail jobs, local SEO, backlinks, AI search optimization.

**Tactics.**

- Measure first: Keyword Planner volume and brand-to-category ratio. Two-digit ratios mean no category stream.
- Use an existing domain with authority (solytics.de earned 26× the clicks of the young calculator sites on similar impressions).
- Earn links with embeddable tools.
- Structure answers for AI overviews: short definitions, FAQ schema, clear headings.
- In Search Console, sum over `page`, not `query` (query drops anonymised searches).

**Own findings.** Young domain brings no traffic (L-02). Domain clicks come on the brand name (L-23). Brand-to-category ratio (L-20). Intact funnel, zero output (L-12).

### Content Marketing — 1·4·2·4·2·4·3·5 · score 42 · C

**Fit signal.** Complex, explanation-heavy offer; audience consumes content; long sales cycle that needs trust. Compounding but slow.

**Tactics.**

- Write for a distribution surface you control (list, community, partner), not "for Google".
- Turn each customer conversation or measurement into one piece (case study, teardown, numbers post).
- YouTube tutorials rank in the second-largest search engine; link the tool in every description.
- Gate one useful asset (checklist, template, sample report) as a lead magnet; deliver it by autoresponder.

**Own findings.** solytics: 57 articles, 47 clicks per 28 days, 0 leads (L-12).

### Email Marketing — 5·2·1·3·4·3·5·5 · score 61 · A (closed until a list exists)

**Fit signal.** You can build a list (lead magnet, trial, purchase) and have recurring value to send. Almost always worth it once traffic exists. Cold email belongs to Sales.

**Tactics.**

- Segment, opt-in form and autoresponder in one session.
- Every funnel needs a watcher that tells a human when a lead arrives (L-15).
- Collect emails at the moment of value: "send me this result".
- A waitlist before launch validates demand and builds the launch list.

**Own findings.** L-12, L-15.

### Engineering as Marketing — 2·4·2·4·2·5·4·5 · score 48 · B

**Fit signal.** You can build a small useful tool that solves a slice of the problem and leads to the main offer. Plays to a builder's strength. The tool still needs its own distribution.

**Tactics.**

- Ship the free tool where the audience already is: a store, marketplace or partner site — not only your own domain.
- Embeddable widget with a "powered by" link.
- A grader or audit that returns a personal report and asks for an email.
- Package the tool as a Chrome extension: store search is free discovery.

**Own findings.** Calculators distributed only via SEO got no traffic (L-02).

### Viral Marketing — 1·5·2·3·2·5·4·5 · score 49 · B

**Fit signal.** A built-in reason to share or a network character; free or freemium. Weak for expensive private B2B tools.

**Tactics.**

- Make the output shareable: a result card with a clean link preview (`og:image`), a public link, a "made with" footer.
- Ask for a review at the moment of success. FinGrab's rate nudge after exports lifted 3.7 → 4.3★.
- Referral: reward both sides with something the product already gives.
- Measure the viral coefficient (invites sent × invite conversion) before investing more.

**Own findings.** Link preview belongs to the channel (L-18).

### Community Building — 1·3·2·5·3·3·5·5 · score 43 · C

**Fit signal.** Recurring use plus identity; users benefit from each other; long horizon. Joining existing communities is the cheap entry; running your own is expensive.

**Tactics.**

- Search for threads asking exactly your product's question; answer with disclosure.
- Read each community's self-promotion rules first.
- Give before asking: ten answers without a link before your own post.
- One launch spike (Product Hunt, Show HN, a fitting subreddit) is cheap.

**Own findings.** Reddit: disclosed answers only (L-14).

---

## Earned

### Public Relations — 3·4·2·4·3·2·3·3 · score 46 · B

**Fit signal.** Something newsworthy; a story or data hook. Spikes and backlinks, not steady flow.

**Tactics.**

- Data stories: publish an original number (a shelf measurement, a dataset) and pitch niche journalists.
- Answer expert-query services (Qwoted, Featured) weekly.
- Local press for local offers ("local founder offers free AI office hours").
- B2B: pitch trade media of the target industry, not general tech press.

### Unconventional PR — 3·4·2·4·3·1·2·2 · score 42 · C

**Fit signal.** A brand with personality; B2C; creativity instead of budget. A garnish, not a main channel.

**Tactics.** Newsjacking (publish the fix or explainer the day a platform changes); a contrarian take with data; a personal founder reply to every early review.

### Targeting Blogs — 3·3·2·3·3·2·5·3 · score 50 · A

**Fit signal.** Blogs or newsletters exist that *exactly* your audience reads. High precision, limited reach each.

**Tactics.**

- Find "best tools for X" listicles that already rank; ask the author to add you; offer a free licence.
- Small niche newsletter slot: flat fee, no learning phase — a few hundred euros give a verdict. UTM link, own landing page; judge on cost per click and signup, not opens.
- Verify each target accepts submissions (open vs. editorial) before listing it (L-01).
- Offer an embeddable widget or a co-branded resource page for a link.

### Existing Platforms — 2·5·1·3·3·5·3·3 · score 52 · A

**Fit signal.** A large platform holds your audience and has built-in search; your offer fits as app, extension or plugin. Huge reach at near-zero cash, but platform risk. For Jens the only channel that has produced users for free.

**Sub-channels.** App stores, Chrome/Edge/Firefox, plugin marketplaces (Shopify, WordPress, Figma, Slack, Notion, Obsidian), Microsoft Marketplace (Office add-ins), marketplaces (Amazon, Etsy, Kleinanzeigen, property portals), social organic mechanics, GitHub.

**Tactics.**

- Before building: native-feature check; size the shelf and compute the ceiling.
- Listing: buyer's words in name and short description; keep winning words as an exact prefix; screenshots lead with the moment of value.
- First run: open a how-to page on install.
- Read competitor review text; ask for ratings after success.
- Edge Add-ons runs Chrome extensions nearly unchanged — a free second listing.
- Publishing cap: request an increase; never unpublish to free a slot (L-24).
- Marketplaces: check every channel was actually switched on; judge visibility on the filtered view buyers use (L-17).
- In-platform paid placement: start pay-per-sale; clear the eligibility gate (seller account, brand registry, shop age) before budgeting. Click ads: ~100 clicks per product before judging; break-even from your own margin.
- Some fees become mandatory advertising above a sales threshold; read the fee rules.
- Stores without ads (extensions, most plugin stores; Chrome states you cannot pay to be featured): work ranking and featuring, send external ads to the listing. B2B software's paid layer is the review directories (Capterra from $2 bids, OMR Reviews from €100/month).
- Microsoft: the Microsoft Store is Windows apps; **Microsoft Marketplace** (ex-AppSource) holds Office add-ins — web apps (HTML/JS, static) running inside Outlook, Word, Excel, Teams; build effort ≈ a Chrome extension; users self-install via "Get Add-ins" unless IT blocks it; billing through Microsoft possible.

**Own findings.** L-01, L-05, L-08, L-09, L-10, L-11, L-14, L-17, L-18, L-19, L-21, L-22, L-24, L-25.

### Speaking Engagements — 2·2·2·4·3·1·4·3 · score 40 · C

**Fit signal.** Explanation-heavy or thought-leadership offer; visible founder; B2B or expert audience. One of few channels creating reach without a network.

**Tactics.** Local stages first (IHK, business clubs, start-up centres — they look for speakers). Talk about a measured result, end with one offer. Record it; it becomes content. Pitch niche podcasts with one specific story.

---

## Outbound

### Business Development — 2·4·2·4·2·3·4·4 · score 45 · B

**Fit signal.** Others already hold your audience's trust; complementary products; deal value justifies negotiation. Lead-time heavy.

**Tactics.**

- Find who already sells to your buyer and lacks your asset; offer white-label or a reseller margin.
- Integrate into a tool your buyer uses and get listed in its marketplace.
- In two-sided models, price the supply side first (L-16).
- Measure a partner by the leads it brings.

**Examples.** The solytics partner channel was the only pre-qualified demand ever. Fabrik sells only through owner-run IT staffing agencies as white-label.

### Sales — 4·2·3·5·4·2·5·2 · score 46 · B

**Fit signal.** Price supports human selling; B2B; offer needs explanation.

**Tactics.**

- Narrow ICP where buyer and user are one person (owner-run, 5–30 staff).
- Prospect list from verified public contacts, 20–50 per batch, personal first line.
- Paid entry step with a guarantee (e.g. €990 assessment, money back) instead of a cold €3,000 pitch.
- Before optimizing messages, check the surface the buyer checks: profile, website, imprint (L-13).
- Answer the same day.

**Own findings.** Two surfaces (L-13). No warm network (L-06).

### Trade Shows — 3·3·5·4·3·1·4·2 · score 38 · C

**Fit signal.** B2B in a concentrated industry that meets in person; high deal value.

**Tactics.** Visit, don't exhibit: book meetings with target exhibitors in advance. The exhibitor list is a prospect list. Side-stage speaker slots cost less than a booth.

### Offline Events — 2·2·4·5·3·1·4·3 · score 34 · C

**Fit signal.** High-value local relationships; B2B or high-touch B2C; founder time available.

**Tactics.** Recurring public office hours at a fixed place and time — low prep, repeatable, reach without a network. Partner with a venue that brings the audience (business centre, chamber, coworking). Collect contacts at the door into the email list.
