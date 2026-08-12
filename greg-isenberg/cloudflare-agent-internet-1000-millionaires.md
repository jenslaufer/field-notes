---
title: "Cloudflare will make 1000+ AI millionaires"
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg (solo)"
source: "https://www.youtube.com/watch?v=MNNfat_QP0E"
published: 2026-08-10
captured: 2026-08-12
duration: "34:11"
transcript: "kome.ai API on the YouTube video (5,623 words, hasMore=false — full episode)"
related: "ai-agents-are-the-new-saas.md, fde-million-dollar-ai-job.md, 1000-per-hour-solo-ai-business.md, software-is-dead-unfair-advantage.md"
---

# Cloudflare will make 1000+ AI millionaires

> **The human web monetized attention. The agent web monetizes useful resources.** A human
> will not pay a third of a cent to read a recipe — a machine does not care. Once payment
> is part of the request itself, every clean, trusted, frequently-needed resource becomes a
> tiny business: *"the next great internet businesses might be these tiny paid doors that
> agents walk through all day."*

**Source note:** written from the full YouTube transcript (kome.ai, `hasMore=false`), not
from show notes. Solo episode — one speaker, attribution unambiguous. ASR garbles product
names; corrected where certain and verified against the vendor's own posts: `X42` → **x402**,
`LLM.txt` → **llms.txt**, `Corey Ganham` → Corey Ganim, `Alex Heroszi` → Alex Hormozi,
`exos exosome` → exosome, `ideabser.com` → ideabrowser.com, and `too fast growing competitors`
→ *two* (marked in the quote below). The three quotes attributed to Cloudflare come from the
vendor's blog, not from the audio.

**Near-miss worth recording:** the channel feed's newest *videoId* and newest *title* are not
the same entry if you grep the XML line-wise — the first `<title>` belongs to the channel, so
everything shifts by one. That mismatch handed me the 05.08. episode under the 10.08. title,
and the only reason it did not become this note is that the transcript was about cold outbound
and the title says Cloudflare. **Parse the feed with an XML parser; and read the first
paragraph of a transcript against the title before writing anything on top of it.**

## The frame: the old bargain, and what breaks it

The old deal: you let search engines crawl, because they sent you a **visitor**, and you
monetized the visitor's attention — ads, email capture, subscription, affiliate.
*"The crawler got the content, the website got the visitor, the visitor got the answer, and
the model funded a massive part of the internet."*

An AI agent reads the page, extracts the answer, hands it to the user — and the visit never
happens. The content still created value; the site lost the ad impression, the email capture,
the affiliate click. Greg's point is that the angry-publisher story is *"only the first
inning"*: agents will use the internet the way software uses infrastructure — request things,
call tools, compare products, retrieve data, buy access, take action. That needs **pricing
for machine usage**.

> *"If I clicked on a recipe and it said, 'Please pay 1/3 of a cent to see the sauce,' I would
> close the laptop and probably order tacos out of spite. But a machine doesn't care if the
> payment is tiny and automatic."*

The predictable objection — *agents don't have wallets* — he answers with: they will, and it
is already starting.

## What Cloudflare actually shipped (episode claims, checked against the vendor)

The episode names four things. All four are real; two important qualifiers are **not** in the
episode and matter for anyone acting on it.

| Episode says | Verified | Qualifier |
|---|---|---|
| **AI Crawl Control** — see, allow, block AI crawlers | yes | GA since Aug 2025 |
| **Pay per crawl** — charge crawlers; crawler presents payment intent or gets **402 Payment Required** with the price | yes | private beta since 01.07.2025 |
| **Monetization Gateway** — charge for *any* resource behind Cloudflare: web page, dataset, API, MCP tool | yes, announced **01.07.2026**: *"an engine that will give Cloudflare customers the ability to charge for any asset protected by Cloudflare: web pages, datasets, APIs, or MCP tools"* | **waitlist, not shipping.** *"The Monetization Gateway waitlist is open now"* |
| **x402** (ASR: "X42") as the rail, verification at the edge | yes: *"payments will settle in stablecoins over x402, the open protocol we are building with a coalition of more than 25 industry leaders"* | settlement is **stablecoins (USDC)** — the episode never says this |
| **AI Index** — MCP, llms.txt, search APIs, bulk data APIs | yes, Cloudflare auto-generating AI-optimised indices per domain | — |

**Not in the episode, and it changes idea #2 below:** Cloudflare shipped a free **Agent
Readiness score** on **17.04.2026** — any site owner enters a URL at `isitagentready.com` and
gets a graded report across discoverability, content format, bot access control and
capabilities. The technical half of the audit Greg proposes selling is already a free button.

## The stack that is forming

1. **Messy internet** — PDFs, pricing pages, old blog posts, support docs, *"websites that look like they were designed … when people still said web 2.0 without any irony."*
2. Someone **cleans** it into structured data.
3. Someone makes it **agent-readable** — API, MCP tool, search index, feed, llms.txt.
4. Someone adds **payment rules** — some free (distribution), some paid (valuable), some blocked (private).
5. Someone adds **trust and analytics** — is the data fresh, is the source reliable, which agents use it, which requests are worth money.

> *"Humans can tolerate messy websites… we read the FAQ from 2019, we open a PDF. We're good
> at suffering, human beings. But agents need really clean doors."*

**The one question to hold every idea against:** *"What resource does an agent need badly
enough and often enough and reliably enough to pay for?"*

## Idea 1 — the niche data refinery

Pick one niche where valuable information is messy, fragmented, changing and annoying to
collect; turn it into **"clean fuel for agents."** The raw material already exists — Google
Maps, job posts, reviews, directories, PDFs, pricing pages. Your work is refining.

His worked example is med spas (he lives in Miami). The owner wants to know: competitor
pricing, treatments offered, what reviews complain about, who is hiring, what is trending,
which offers work. With that data an agent says things like *"your Botox pricing is above the
local median, but your reviews do not support premium positioning yet"* or *"[two] fast growing
competitors are hiring injectors, which probably means they're expanding capacity."*
**The usefulness comes from the data, not from a generic AI wrapper.**

**The wedge, concretely:**
- One niche, **one city, 100 businesses** — not more. Manually at first.
- One spreadsheet: name, website, services, prices, review count, rating, top complaints, Instagram, recent posts, visible ad changes, hiring signals, booking flow.
- **Ten outputs** from that one sheet: local pricing map, competitor gap report, offer ideas, services-to-add recommendation, review-complaint summary, hiring-signal report, monthly market movement report.

**The part most people miss — the first customer is not the end business.** Selling
"agent-readable competitive analysis" to a med spa owner is a confusing sentence. Sell it to
the people *already* selling into that niche: marketing agencies, consultants, freelancers,
software companies, AI implementers. *"I built local market intelligence for med spas"* — they
charge a client $5K/month, your data helps them close one more or do better work, they pay
**$300–800/month**.

Then crawl-walk-run: **report → dashboard → API → MCP tool → pay-per-lookup** when the rails
are ready.

**Portable filter — the data must be:** *valuable* (better decisions make or save money) ·
*repeated* (needed again and again) · *changing* (freshness matters) · *fragmented* (one
person can't easily collect it) · *annoying* (that is where the margin lives).

Other verticals he lists: roofing (storm events, permits, insurance signals) · real-estate
investing (zoning, permits, ownership records, rent comps, tax delinquencies) · e-commerce
(competitor SKUs, price changes, review complaints, influencer rates, Shopify apps) · law
firms (competitors, practice-area positioning, ad copy, intake).

## Idea 2 — agent readiness as a service

*"SEO for the agent internet"* — but he insists on a sharper definition than the buzz-phrase
"AI SEO": **help companies become easy for agents to understand, trust, compare and
recommend.**

The buyer's process is being compressed. Ask an assistant *"find me the best payroll provider
for a 15-person company in California"* and the agent must answer: who is this for, what does
it cost, what does it replace, what integrations, what risks, what does implementation look
like, what do customers say, how does it compare. Most sites make this harder — hidden
pricing, buried docs, stale comparison pages, key facts in PDFs, and *"a lot of just like
foggy copywriting"* (*"unlocking operational excellence"*).

**The wedge is a paid audit, and the sales moment is a screenshot:**
1. Pick **one vertical** (B2B SaaS is the obvious one but too big — go deep: Shopify apps, law firms, healthcare clinics, financial advisors, insurance brokers, home services).
2. Run **20–50 buyer-intent prompts** across the major AI tools: *what is the best software for X · compare this company to top alternatives · what does it cost · who is it best for · what are the risks of this vendor · would you recommend it for a 20-person company · what integrations does it support.*
3. **Show the founder the answers.** *"When buyers ask AI for your category, you do not show up."* Or: AI quotes $8/month when your page says $20. Or: AI recommends the competitor because their docs are cleaner. Or: your site has the answer, buried in a PDF from 2002.
4. **Sell the fix** — an agent-readable source of truth: clean llms.txt · better documentation structure · a pricing page agents can parse · comparison pages that are honest and specific · use-case pages in plain language · customer proof organised by segment · structured FAQs around real buyer questions · schema markup · product feed · changelog · a lightweight MCP server or search endpoint *if* they have enough useful content.
5. **The recurring product is the measurement loop** — rerun the prompts monthly: are the answers more accurate, do they appear more often, did the comparisons improve, where is more structured proof needed.

**Prices he names:** $3,000–10,000 for audit + cleanup; $10,000–20,000 for larger B2B. After
**10 clients in the same niche** the repeated work is obvious (same missing docs, same unclear
pricing pages, same questions, same files, same monthly report) — *that* is when it becomes
software.

> *"You're not selling the future. You're selling the screenshot."*

Vertical translations: local business → *let AI assistants book appointments with you* ·
e-commerce → *make your catalogue easy for shopping agents to compare and buy* · B2B SaaS →
*make your product easy for procurement agents to evaluate* · publishers → *make your archive
easy for AI systems to understand and license*.

He expects venture-backed horizontal players here (already appearing) — the defensible move is
to go extremely vertical.

## Idea 3 — expert archives turned into agent tools

For creators, media companies, analysts, consultants, researchers sitting on years of content
— videos, podcasts, newsletters, templates, community posts. Today that monetises through ads,
sponsorships, subscriptions, consulting. In the agent internet the archive becomes **a tool**.

**Start with one job, never the whole brain.** *"Don't go to a creator and say, 'We're going
to turn your whole brain into AI.' That honestly sounds a little creepy, a little vague."*
Instead: *"You have 300 videos about sales. We're going to turn them into a tool your audience
could use to improve cold emails."*

Build order: pick an expert with a deep archive **and a specific audience** → collect and
transcribe everything → **tag by job, topic, audience, example, framework, outcome** → build
**one** workflow.

> *"A lot of people get lazy at this part. They throw everything into a vector database and
> then they just call it a day. That usually gives you a search box with confidence, but a
> real product needs structure."*

Tagging examples — sales archive: prospecting, subject line, offer, objection, follow-up,
personalisation, deliverability, close. Startup archive: idea, market, wedge, distribution,
pricing, MVP, community, moat, examples.

The workflow, e.g. sales: paste your cold email → agent critiques it with that expert's
principles, cites the source lessons, rewrites it, scores it, gives you one test to run.
Startup: paste your idea → wedge, customer, first offer, first distribution channel, what to
validate this week. He notes this is what ideabrowser.com does — *"one of our most popular
features is adding the MCP."*

**Pricing/packaging:** $19–50/month, bundled into a paid community, used as a lead magnet for
consulting, or licensed to agencies and software companies. **The creator already owns the
distribution and the trust** — that is the whole point of the partnership. The biggest mistake
in the category: *"chat with an expert"* is too broad. Specific and outcome-based beats it.

## Honest limits of this episode

- **Solo idea episode. No guest, no customer, no data.** Every number in it — $300–800/month, $3–10K audits, "1000+ millionaires" — is Greg's estimate, not a measured price or a case study.
- **The payment layer is a waitlist.** Monetization Gateway was announced 01.07.2026 with a waitlist; pay-per-crawl is private beta. Greg is straight about the consequence: *"you can start by building the manual version first … you can sell the human version now."* The pay-per-lookup end state is not buildable today.
- **Settlement is stablecoins.** Never said in the episode, and it is not a neutral detail for a German GmbH — USDC receipts are an accounting and tax question before they are a revenue line.
- **Idea 2's technical audit is already free** at isitagentready.com (17.04.2026). What is *not* free is the buyer-intent-prompt half and the monthly loop.

## Relevance for Jens

Ranked by how close each one sits to money he can actually collect, and with the known
constraints applied (no audience, no network, away 15.08.–07.09.).

**1. Idea 2 is a service offer, not a startup — and that is the version that fits.** The
audit → fix → monthly measurement loop is structurally the same shape as the FDE loop from
`fde-million-dollar-ai-job.md` (audit → evals → deployment), applied to a new deliverable. It
needs no product, no audience and no capital — it needs prospects. Jens sells day-rate work at
€2,000/day from 15.09., 54 live freelancermap postings demand agent skills, and making a
company legible to AI buyers is a sellable line item on that profile. **Concrete step:** one
bullet on the freelancermap profile and in the CV, alongside the harness positioning — not a
new business.

**2. A measurement, done today, not a plan.** Both of his live sites score **Level 1, "Basic
Web Presence"** on Cloudflare's free ladder (`isitagentready.com`, measured 12.08.2026 08:11 UTC):
solytics.de and fingrab.app both pass robots.txt, sitemap and AI bot rules, and both fail
Link headers, DNS-AID, markdown negotiation, Content Signals and the entire discovery block
(API catalogue, OAuth discovery, MCP server card, agent skills). The next rung is **one line in
robots.txt** (`Content-Signal: ai-train=no, search=yes, ai-input=no`). That is a real, cheap
step — but note what it is: it makes his sites *legible* to agents; it does not make anyone
find them. The authority bottleneck from the FK/HC post-mortem is unchanged.

**3. Idea 3 is blocked by a known constraint, and should not be attempted.** It runs on the
expert's distribution. Jens has no audience and no network — the model only works if he is the
*builder* for someone else's archive, which means the first move is an outbound sale to a
creator, i.e. exactly the cold channel that has produced nothing so far. The archive he does
own (field-notes, concept-simulator) has no audience attached to it.

**4. Idea 1's value here is the filter, not the idea.** *Valuable · repeated · changing ·
fragmented · annoying* is a better idea screen than anything currently in use, and it explains
several past dead ends in one line: the FK/HC calculators were none of the five (a computation
is not fragmented and does not change), tradegrab failed *annoying* the day Trade Republic
shipped native CSV export. Worth keeping as a screen. As a business it needs a niche where he
has an unfair advantage and a buyer he can reach — neither exists today.

**5. One second-order observation.** The episode's own premise is that agents will pay for
clean, structured, trustworthy resources. Everything Jens has built for himself in the last
months — the field notes, the tooling, the memory files — is exactly that shape and is
currently worth nothing to anyone else, because it is private and undistributed. The gap
between "I have a refinery" and "someone pays for the output" is the same distribution gap the
100-day retrospective already named. This episode does not solve it; it just prices it.

**Sources checked while writing this note:**
[Monetization Gateway](https://blog.cloudflare.com/monetization-gateway/) ·
[Agent Readiness score](https://blog.cloudflare.com/agent-readiness/) ·
[isitagentready.com](https://isitagentready.com) ·
[pay-per-crawl launch](https://techcrunch.com/2025/07/01/cloudflare-launches-a-marketplace-that-lets-websites-charge-ai-bots-for-scraping/)
