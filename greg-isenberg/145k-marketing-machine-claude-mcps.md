---
title: "Claude Code & MCPs built my $145K marketing machine"
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg"
guest: "Cody Schneider (Graft.com — @codyxschneider)"
source: "https://www.youtube.com/watch?v=RB_M2mKiOcY"
captured: 2026-06-18
---

# Claude Code & MCPs built my $145K marketing machine

> Cody Schneider live-builds a GTM-engineering stack: **~10 Claude Code instances
> running in parallel** as agents for ads, cold email, outreach, and data
> analysis. The reframe: every keyboard task you used to do — the "middle work" —
> gets passed to an agent harness. You become an **"agent jockey,"** narrating by
> voice while agents work in the background, then deploy the winners to a server
> so they run 24/7.

## What GTM engineering became
- **Origin:** coined by clay.com for cascading data-enrichment → outbound (email,
  Slack, cold calls). Now it's any **personal software** an agent runs for you.
- **The loop demo'd live:** build 100 Facebook ads → publish to Facebook → build a
  dashboard → analyze the data in Claude Code → turn off low performers → bump
  winners into a dedicated-budget ad set. All in ~30 minutes.
- **Buy software by its API.** Salesforce > HubSpot here *because the API is more
  robust* — "every company is going to be an API company" (Altman). The UI is now
  the nice-to-have; the output and the running agent are what matter.

## The setup (do this first)
- **One folder you live out of** (his: "Graft Growth Agents"). All work happens
  in this repo.
- **An `.env` file holding every API key:** Intercom, SendGrid, HubSpot, cal.com,
  Perplexity, Facebook Ads, Million Verifier, Instantly. You interact with your
  whole stack via APIs from Claude Code.
- **Voice in:** Super Whisper (or any transcription) to prompt fast.
- **Optional:** Claude Code front-end design skill so generated UIs look decent.

## The agents he ran in parallel
- **LinkedIn responder** — Claude Chrome extension + a skill that auto-comments the
  lead magnet (Notion doc) to everyone who replied with a keyword ("triage"). Ran
  ~15 min unattended.
- **Bulk Facebook ad generator** — ads are **pure React components** rendered to PNG
  via html-to-canvas. Costs ~1,000 tokens to generate a thousand variations.
  Source pain points from Reddit/YouTube/Twitter via Perplexity API, then bulk-gen
  every angle and download as a zip/CSV.
- **Podcast booking machine** — scraped marketing-category podcast host emails via
  **Verifonic** → verify with **Million Verifier** → push to an **Instantly** cold-email
  campaign → an agent replies to book him on the show.
- **LinkedIn engagement scraper** — Slack `/linkedin-post` command → **PhantomBuster**
  pulls engagers → enrich with **Apollo** → verify with Million Verifier → add to
  Instantly.
- **Bulk ad uploader** — Facebook Ads API uploads all creative as drafts into an
  ad set (vs. the PTSD of uploading a thousand variations by hand).
- **Live dashboard** — Graft MCP pulls Facebook Ads data: clicks over time, CPC,
  spend scorecards, age-demographic bar chart.
- **Pruning agent** — Graft MCP pulls live warehouse data, finds highest-CPM ads,
  Facebook Ads API pauses them.

## The data-pipeline insight
- **MCPs hit a pagination wall.** Plug a raw Facebook Ads MCP in and you often see
  only ~5% of the data. At real spend you *need* a data warehouse + pipeline.
- **Graft MCP = a live data feed / endpoint** into the warehouse — query "show me my
  paid spend" from Claude on your phone, in the morning, as a conversation. Share
  it with the whole team across any harness (Claude Code, ChatGPT, Cursor).

## Deploy the winners (the real unlock)
- **Railway API** spins up servers/Postgres **on the fly** via Claude Code. Promote a
  working workflow to a server so it runs in perpetuity for the team.
- **On-the-fly everything:** a 5-hour data-cleaning job became ~20–30 min — spin up
  a Postgres DB, analyze with Claude, push outputs, spin the DB down.
- **The endgame:** a test campaign + a daily cron that prunes losers and promotes
  winners into dedicated-budget ad sets — fully autonomous marketing.

## Marketing tips
- **Ugly ads that name the pain often pull $1 → $1.50; great creative gets you to
  $3.** Generate a thousand ugly variations cheaply, find the winning *angle*, then
  spend tokens (Nano Banana Pro / Kie.ai) to remix the winner.
- **Mine real pain points** from Reddit/YouTube/Twitter via Perplexity — sell the
  outcome or speak to the pain, don't invent copy.
- **One winning format ports across formats:** static → UGC video via HeyGen API →
  bulk upload. Same idea, many channels.
- **Domain vocabulary is the moat.** The agent can build it, but a 20-year graphic
  designer describing texture ("TV-type texture") one-shots what a novice can't.

## Why this matters for us
- **Concrete vibe-marketing reference stack** — Phantom Buster, Instantly, Verifonic,
  Apollo, Million Verifier, Railway, Graft MCP — a shopping list for our own GTM
  automation.
- **"Buy software by its API"** is a procurement rule for any tool we adopt — pick
  the one we can drive from Claude Code.
- **Bulk-creative-as-code** (React → PNG, ~free) is a copyable recipe for testing ad
  hooks at volume for a launch-kit consumer push.
- **Deploy-to-Railway** shows the path from one-off agent → always-on service — the
  same arc for any automation we build.

## References
- Episode: https://www.youtube.com/watch?v=RB_M2mKiOcY
- Cody Schneider on LinkedIn: https://www.linkedin.com/in/codyxschneider/
- Graft: https://graft.com
- Instantly: https://instantly.ai
- PhantomBuster: https://phantombuster.com
- Million Verifier: https://millionverifier.com
- Apollo: https://www.apollo.io
- Railway: https://railway.com
- GTM Engineering Course (free, waitlist): https://gtmengineeringcourse.com
