---
title: "Marketing Agents Are Too Good Now"
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg"
guest: "Cody Schneider (companiesgraph.com)"
source: "https://www.youtube.com/watch?v=U2hogriGmEw (published 2026-07-27)"
published: 2026-07-27
captured: 2026-07-28
companion: "marketing-agent-build-prompt.md — copy-paste Claude Code prompt to build the system below"
related: "2026-03-02-145k-marketing-machine-claude-mcps.md (Cody's first appearance), 2026-07-13-making-money-loop-engineering.md (the loop pattern)"
---

# Marketing Agents Are Too Good Now

> Two parts. **(1) A startup idea Greg loves: "AI for WordPress"** — Lovable-for-WordPress
> (vibe-code your site on top of the platform that runs **43 % of the indexed web**),
> or the sharper version: take a WordPress plugin with *already-validated* demand
> (Yoast, WPForms, WooCommerce, Akismet, Wordfence) and ship the **AI-first** version
> that *does the work* instead of showing you red/green dots. **(2) The real payload:
> Cody Schneider builds, end to end, a Facebook-ads marketing agent** — not a Zapier
> linear flow, but *code in the cloud making decisions off live business data*. A
> real marketing agent is three things: **unified data** (pipeline + warehouse),
> an **autonomous decision loop on a cadence**, and **learning from the data it gets
> back**. The worked build: research pain points (Perplexity → Reddit) → generate
> on-brand creative (Nano Banana statics + HeyGen/Seedance UGC, QA'd by a vision
> model) → publish *write-only* through the Facebook Marketing API → unify data in
> Airbyte → ClickHouse → run a kill-losers/promote-winners loop → **solve entropy**
> so the agent doesn't get stuck. The kicker: what used to be a **$tens-of-thousands/mo
> agency** you can now stand up **in ~90 minutes** as an "agent jockey" — feed Claude
> Code the transcript and say "walk me through setting this up."

## Part 1 — The startup idea: AI for WordPress

- **Why the category is blue ocean:** WordPress powers **43 %** of all Google-indexed
  websites and **almost nobody is building AI-native tooling for it.** Greg was a
  partner at 19 in a WordPress-migration agency (moved time.com, techcrunch.com onto
  WordPress, officially partnered with Automattic) — says the money in the plugin
  ecosystem was "absurd."
- **The obvious version:** "Lovable / anything.com but for WordPress." Let people
  *vibe-code* their site on top of WordPress. Bundle the 10 plugins people normally
  hodgepodge (forms, CRM, etc.) into one package. **Token pricing:** e.g. base tier
  **$29/mo → X tokens.** Serve it lightweight (Astro mentioned) so it's fast.
- **The sharper version (Greg's reframe — the real play):** find plugins with
  **proven paid demand but no AI component**, and build the **AI-first** version that's
  10× better because an agent *does the task*:
  - **Yoast SEO** → instead of red/green dots telling you to fix things, an agent that
    writes the meta, restructures the content, adds internal links.
  - **WPForms** → a conversational AI form that *qualifies the lead and answers
    questions*, not a static form.
  - **WooCommerce** → an "AI storekeeper": auto-writes product descriptions, runs
    abandoned-cart flows.
  - **Akismet** (spam), **Wordfence** (security) → endless similar targets.
- **Honest hard part (both admit it):** building a genuinely good product, and then
  **finding a distribution channel that actually gets customers** — which is the whole
  point of Part 2.

## Part 2 — What a "marketing agent" actually is

Cody's definition (he's blunt that most people talking about this "are full of it"):
a real marketing agent must be **all three**:

1. **Solve the data problem** — give the agent *unified data clarity* over the whole
   pipeline (one place where every channel is in context with every other channel).
2. **Autonomously make decisions on a cadence** — a real thinking loop, not a linear
   Zapier automation.
3. **Improve from the data it gets back** — it runs a process, looks at the results,
   adjusts.

Explicitly **not** AGI/"Hermes thinking on its own" — he doesn't want that. He wants a
**virtual employee focused on one channel** that has all the data it needs to judge
what drives revenue. Infrastructure required: **a data pipeline + a data warehouse +
cloud hosting for the agents.**

## The worked build: a Facebook-ads agent, step by step

> Goal: an agent that *entirely* runs Facebook ads — researches pain points, makes
> on-brand creative (statics + AI-avatar UGC), publishes it, kills losers, promotes
> winners, and loops.

### Step 1 — Research the pain points (Perplexity → Reddit)

- Tool: **Perplexity** (easy to screen-share live). Prompt shape:
  > "Scrape Reddit pain points and outcomes people who run WordPress websites have —
  > why would they buy an AI WordPress tool that solves all the plugin problems and
  > lets them vibe-code the design?"
- **Why Reddit:** real people *complaining* = genuine dialogue (caveat he names himself:
  Reddit is being eroded by people seeding it for LLMs — "I am the problem").
- Then rank: **"rank-stack by most-referenced, give me the top three."** In the worked
  example → (1) the plugin layer (biggest pain), (2) performance & speed (answer: serve
  lightweight via Astro), (3) security & maintenance (answer: never think about plugin
  security again). **Those top pains become what the ads are about.**

### Step 2 — Understand post-Andromeda Facebook targeting

- **Andromeda** = Facebook's new ad algorithm. **You no longer do interest-based
  targeting.** Instead you make creative that speaks to the pain points/outcomes and
  send it to a landing page. Andromeda's AI reads *the creative* (image, text, video,
  the video's script) **and the landing page**, and decides who to show it to.
- Claim: **"Facebook has become the best B2B ads channel that exists."** It will find
  even the ~10 people in the US with an obscure problem and deliver a qualified lead.
- Example creative script (unpolished, first-person, problem-first):
  > "I used to pay my agency $1,000/mo to maintain my WordPress site — unresponsive,
  > never got the designs I wanted. Then I found this plugin that lets me *chat with AI*
  > to change my website, and it includes all the plugins I used to pay extra for, for
  > free. Click the link to learn more."
  Facebook auto-identifies "WordPress site owners with this problem" from the creative.
- Set a **conversion event** on the deeper funnel action (sign-up / payment).

### Step 3 — Generate the creative (agent-driven)

- **Statics:** **Kie AI** (heard as "Kai AI" — an aggregator that exposes all the image
  *and* video models in one place), generating via **Google Nano Banana**. Method: give
  it an **example ad already running** (a competitor's, or a tangential industry's) as a
  seed. Enforce **brand style guides** — the exact fonts and colors — then put a **vision
  model over the outputs** as QA: "Does this match brand style guides? Is the text
  readable? Are the fonts on-brand?"
- **Video (AI-avatar UGC):** **HeyGen** (still great results), experimenting with
  **Seedance**. Limit: Seedance clips are short (~9 s, "don't quote me") so **stitching
  frames into a 30 s video is the hard part.** The avatar talks through the extracted
  pain points/outcomes.
- Everything here is *an agent* doing the research and the API calls to build creative.

### Step 4 — Publish via the Facebook Marketing API (write-only!)

- Use the **Facebook Marketing API** only to **publish content / turn ads off / promote
  ads** — i.e. **writes**.
- **Why accounts get banned:** *not* because "an agent used it" — because people
  **violate TOS by spamming the API to pull hundreds of millions of rows** of ad data.
  **Don't read bulk data through the ads API.** (That's what the warehouse is for.)

### Step 5 — Solve the data problem: pipeline + warehouse

- **Data pipeline: Airbyte** (open-source, self-hostable, pre-built connectors). Have
  **Claude Code set it up for you.** It pipes every source in.
- **Data warehouse: ClickHouse** (open-source, self-hostable). Unifies all sources so
  the agent sees everything *in context*. The sources that matter for ads:
  **Facebook Ads + Google Analytics + PostHog + CRM (HubSpot) + Stripe** — so you can
  trace *the literal specific ad → revenue out the other side*.
- Bonus you get for free: point **Claude Code / Codex** at the warehouse for
  **conversational analytics** and custom dashboards — literally ask "we're having
  trouble hitting payroll this month, what's going wrong?" → "your accounts receivable
  are off."

### Step 6 — Host the agent in the cloud

- An agent is **just code**: a decision tree + a live data stream + an LLM decision loop
  optimized for an outcome (usually revenue). **Deploy to any cloud — Heroku, Railway,
  etc.** You do **not** need a local Mac mini as a server.

### Step 7 — Run the learning loop (real numbers he uses)

- For one client: **2 ad sets/day, 5 ads per ad set**, auto-uploaded from the research +
  what the warehouse says already worked.
- Let each batch run a **2–3 day window** for initial signal → **turn off the worst
  performers** → winners live on → **winning ad sets enter a "winners pool" and compete
  for budget** against each other.
- Over the top: keep a **database of every ad ever created** — the actual JSON prompts
  sent to Nano Banana and the ad scripts sent to HeyGen/Seedance — and let the agent
  analyze *that* to get better at making winning creative.

### Step 8 — Solve entropy (the part "nobody talks about")

- **Entropy** = the agent gets stuck thinking the same way; output degrades day over day
  ("feels good on day one, worse on day two/three…"). You must actively feed new DNA:
  1. **Facebook Ads Library** → pull competitors' running ads → new creative DNA.
  2. **YouTube + podcast transcripts** → mine insights from the hundreds of channels in
     your niche (e.g. WordPress) → run ads off those insights.
  3. **Viral Loop** (has an API) → scrapes TikTok (and reportedly Instagram Reels):
     "show me the most viral posts in the beauty category this week" → lift the trending
     concept/format → feed the creative engine. Short-form social is where trends
     originate and trickle down.

## The mindset shifts (why this beats hiring an agency)

- **Marketing is no longer campaigns (start → stop). It's continuous** — feedback loops
  are so fast (fashion-trend speed, ~10× faster than the early 2000s) that you need
  standing observability and constant adjustment.
- **You are not Don Draper.** Don't impose your idea on the market. **Put creative *into*
  the market and let it tell you what wins.** Test ~1,000 creatives; you'll have clear
  delineation of the winner **within 48 hours.**
- **The #1 beginner mistake:** try a few ads, they flop, quit. Instead take the same ad
  and **change the positioning 10–20 times** — surprising angles win (e.g. an *anti-Yoast*
  "Yoast is bad" positioning you'd never have guessed).
- **Facebook ads = the ATM:** "put $1 in, $5 can come out — keep feeding it." Most
  cost-efficient way to get customers if you don't want to spend months building an
  audience (though he says *still* make content too).
- **Your new job = "agent jockey":** take your domain knowledge and build it into code.
  A **semi-technical person with Claude Code** can do it — "give it the transcript we
  just made and say *walk me through setting this up.*" What was a **$tens-of-thousands/mo
  agency** or **2 weeks to make 100 ads** is now **~90 minutes** to stand up the whole
  system. Keep a **human in the loop** at first.

## The other agents (Cody's menu — a future series if people ask)

Comment-to-vote list of agents he's deploying, each the same shape (data + loop + one
channel):

- **Google Ads agent** running the whole account.
- **Influencer-outreach agent** — researches influencers in your category, cold-emails,
  negotiates pricing, hand-raises the good fits.
- **Cold-email agent** — finds target customers, finds their emails, cold-emails, then
  manages the inbox to book meetings.
- **TikTok reel-farm** — 10 cloud TikTok accounts, slideshows at scale, schedule/post,
  aggregate views.
- **SEO agent** — keyword research → research + write the article → on-brand voice +
  unique POV so it ranks and reads well.
- **AI-search / citations agent** — build citations, cold-outreach to get your brand
  listed where LLMs already cite in your category.
- **Social-media management agent** — run LinkedIn / Twitter accounts.
- **Podcast → newsletter agent** — research the podcast, write the script, read it with
  ElevenLabs voices, build lead magnets to grow an email list on top.

## Named tools / references

- **Research:** Perplexity (Reddit pain-point scrape).
- **Creative:** Kie AI (model aggregator, "Kai AI" as heard) · Google **Nano Banana**
  (statics) · **HeyGen** + **Seedance** (avatar UGC) · **ElevenLabs** (voices) · a vision
  model for brand-guide QA.
- **Distribution:** Facebook **Marketing API** (write-only) · Facebook **Ads Library**
  (competitor DNA) · **Andromeda** (Meta's ad algorithm) · **Viral Loop** (TikTok/Reels
  trend API).
- **Data:** **Airbyte** (pipeline, OSS) · **ClickHouse** (warehouse, OSS) · sources:
  Facebook Ads, Google Analytics, PostHog, HubSpot, Stripe.
- **Build & host:** **Claude Code / Codex** (build + conversational analytics) ·
  **Heroku / Railway** (agent hosting) · **Astro** (fast serving for the WP product).
- **People/links:** Cody Schneider — **companiesgraph.com**, active on Twitter + LinkedIn;
  his first appearance = the $145K marketing-machine episode.

---

## Insights for me (Jens) — honest, not an echo

1. **This is the literal spec for `fullstack-business`, my own dormant project.** Its
   one-line purpose is "Pain Points → Marketing Material → Campaigns → Analysis" — which
   is *exactly* Cody's loop (Perplexity pain-points → Nano Banana/HeyGen creative →
   Marketing-API publish → ClickHouse analysis → kill/promote). The episode is a
   ready-made architecture for the project I already scoped but never built. If any single
   product of mine deserves this system wired in, it's that one.

2. **The unified warehouse is the "one number / fast-feedback-loop" I keep circling in
   #78.** My data is scattered — Stripe, GSC, CWS installs (`cws-rank.py`), Bing/Google
   Ads, FinGrab. Airbyte → ClickHouse → "ask Claude Code" is *directly buildable on the
   mini-PC* and would finally give me standing observability I can query conversationally,
   instead of hand-pulling each source per session. This is the most immediately useful,
   channel-agnostic piece and it needs no ad budget. Strong candidate for the separate
   build-prompt (companion file).

3. **The FinGrab post-mortem, restated: I under-tested creative, not just budget.** #88
   concluded "demand, not budget" is the FinGrab ad constraint. This episode adds the
   other half I skipped: **"change the positioning 10–20 times."** My Google/Bing attempts
   ran a handful of ads, not 15 angles — Cody's whole thesis is that the *surprising*
   angle wins and you can't know it a priori. Doesn't resurrect Google (that was a policy
   block, `FULLY_LIMITED`), but it reframes "the channel is dead" as possibly "I never
   ran enough creative DNA through it." A cheap, honest experiment *if* a channel reopens.

4. **Facebook is a genuinely untested channel for me — with a real caveat.** I've fought
   Google (policy-blocked) and Bing (token expired) for FinGrab and never touched Meta.
   The post-Andromeda "creative-not-interests, finds your 10 niche buyers, best B2B
   channel" pitch is exactly the kind of channel a no-audience builder should probe. **But
   the Taleb-honest caveat stands: the agent removes the *labor*, not the *ad spend*.**
   Cody's whole model still burns paid budget — which is precisely my binding constraint
   (burn raises the withdrawal rate). So this is a "when there's cashflow to feed the ATM"
   move, not a zero-cost one.

5. **"AI-for-WordPress plugin with validated demand" is the best build-once/sell-many
   idea in months — and it fits my stack.** Take a plugin with *proven paid demand*
   (Yoast/WPForms/WooCommerce) and ship the AI-first version. It's fullstack + agents =
   my exact skills, it's a *product* (not a service/hours ceiling like the FDE thread),
   and demand is pre-validated (the antidote to my FK/HC "build-then-nobody-comes" trap).
   The honest wall is the same one the episode names out loud: **distribution.** WordPress
   plugins have their own directory + a real install channel, which is *more* than my
   calculators ever had. Worth a proper channel-fit pass before any code — but this is the
   first idea in a while I'd actually run through validation.

6. **I *am* the "agent jockey" the episode says is now rare-and-valuable.** "Semi-technical
   person + Claude Code + domain knowledge → build the marketing agent" describes me
   precisely (I already run assistant + Fabrik + agent-tasks). Same thread as the FDE and
   agent-SaaS notes: the scarce skill is *managing agents against a business outcome*, and
   I have more reps at it than almost anyone. The gap is the same as always — pointing it
   at a channel that actually converts, not building yet another system for its own sake.

7. **What NOT to do:** don't let this become artifact N+1. The distribution-first lesson
   holds — the value here is (a) the warehouse-for-my-own-data (insight 2) as a *tool that
   serves every channel decision*, and (b) the WordPress idea as a *validated* build. Both
   go through a channel-fit gate before code. The Facebook-agent build is real but gated on
   having budget to feed. See the companion **build-prompt** for the one piece I can stand
   up cheaply.
