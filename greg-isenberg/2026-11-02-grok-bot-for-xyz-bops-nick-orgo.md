---
title: "The $1M+ Solo Grok Bot Business (Full Course)"
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg"
guest: "Nick (co-founder of Orgo, computers for agents)"
feed: "https://rss2.flightcast.com/ordbkg8yojpehffas7vr7qpc.xml"
transcript_url: "https://rss.flightcast.com/transcripts/01M6EPTDAZQ58ZZHC626RH2PDT.vtt"
published: 2026-11-02
captured: 2026-11-04
duration: "49:32"
transcript: "publisher VTT (flightcast), ~9,100 words — full episode"
related: "2026-08-21-grok-bot-agent-team-newsletter-billy-howell.md, 2026-10-28-agent-harnesses-gamma-jon-noronha.md, 2026-10-29-saas-is-dead-free-tool-upsell-intelligence.md"
---

# Build a "GrokBot for one industry" and sell it as a system the owner keeps

> Nick built "Bops" (business ops), a GrokBot clone, in 36 hours. Every bot has its own phone
> number, email, connectors and computer. His offer: a custom build for one SMB at $25K up front
> plus an optional $3K/month, or one product for a whole industry at 10–20× GrokBot's price.

**Source note:** guest is the co-founder of Orgo, the computer layer he recommends — he says so
himself. No customer revenue is shown; "$25K" and "$3K/month" are his proposed prices. The 75K
views and the a16z "2 % of the US pays for AI tools" are cited, not shown.

## Insights

1. **The gap.** GrokBot, Dots and Muse do not set up niche use cases, and a busy owner who
   unboxes one is *"so overwhelmed, they're not going to know how to use it"*. An AI
   transformation agency is too much for them. They want the problem solved, pre-built.
2. **What a bot gets:** its own phone number (Agent Phone), email (Agent Mail), connectors
   (Composio, one API for all), and its own computer with four screens (Orgo). In GrokBot each
   bot gets its own screen, not its own computer. Demo: he calls his chief-of-staff bot "Boppy"
   by phone and gives it three tasks.
3. **One agent per platform.** A Twitter agent, an email agent, a Skool agent, a LinkedIn agent
   that connects with prospects, messages after the connection and books the call — *"Then I
   jump on the call. I have the brief already."*
4. **His build process.** (1) **Research first** — the first prompt asks the model to study
   GrokBot, Muse and Dots so it knows what it is building. (2) **Design before code** in Paper
   (Figma-like, via MCP): ask for three or four variations, then combine — *"Diverge and then
   converge."* (3) Pick the stack and tell the agent to *"read the docs and read the API
   references"* for every tool. (4) Screenshot bugs and UI you like and feed them back (a swipe
   file). (5) Host (Orgo, Fly, Vercel) and ship. One long thread in T3 Code with Opus 5.5 on high,
   loops overnight, never pushed to GitHub.
5. **Offer to one business.** $25K up front (half at start, half after a 30-day implementation),
   then an optional $3K/month for maintenance. Selling point: the owner *owns* the system —
   *"business owners don't want to be, feel like they're held by the neck on a retainer"*.
   Value argument for a dental clinic: the front-desk person costs $50–70K a year, the bot is one
   of 15.
6. **Greg's sweeteners.** Bundle a redesigned website for free, frame $3K/month as an hourly
   wage, and offer a money-back clause on the bottleneck you fix (*"if you aren't able to get back
   to people quicker … I will give you back the 3K a month"*). Nick adds free lead-magnet tools,
   e.g. a braces-cost calculator for an orthodontist.
7. **Offer to an industry.** GrokBot costs $200/month; a version built for insurance agencies can
   charge *"10 to 20x"* (Greg), plus seat-based expansion.
8. **Finding the niche.** Do not pick it up front. Call *"the 50 people I know"* who run a
   business, do the first one for free as a case study, shadow the owner while they work
   (invoices, presentations), and only then choose. Nick's first one was a promotional-products
   (swag) company he did not know existed.
9. **Free case study with a price tag.** Greg: say you normally charge $50K a year, do it free,
   and ask for three intros to peers in the next town; Nick: add a $5K credit for each one. The
   point: *"at no point ever are you selling cold"*.
10. **Open source.** Bops is on GitHub — fork it, customize, sell.

## What it means for Jens

- **The sales path does not fit.** Every step of the go-to-market — 50 people you know, free
  case study, three warm intros — needs a network. Jens has none, so the episode's niche-finding
  method is not usable for him as described.
- **The build part he already has.** Research → design → docs → screenshots → ship is his
  agent-task/Fabrik routine; per-bot email, phone and computer is what the assistant does with
  Telegram, SMTP and the mini-PC. Not a reason to build Bops.
- **The usable piece is the offer structure.** "You own the system" with a one-off price and an
  optional maintenance fee answers the retainer objection. For freelancermap applications this
  is a framing he could test against the day rate — no numbers from the episode support it.
- Nick sells the computer layer he recommends. Read the stack list as a sales pitch.
