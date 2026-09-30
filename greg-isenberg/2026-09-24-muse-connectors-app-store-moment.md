---
title: "Muse AI Connectors: The Next App Store Moment?"
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg"
guest: "none — solo episode"
feed: "https://rss2.flightcast.com/ordbkg8yojpehffas7vr7qpc.xml"
audio: "https://episode.flightcast.com/01M3A8MAC6C2KX8AH816V14RJ9.mp3"
published: 2026-09-24
captured: 2026-09-30
duration: "26:14"
transcript: "publisher VTT (flightcast), 305 segments, 4,228 words — full episode"
links: "https://startup-ideas-pod.link/muse-connector-prompt (starter brief)"
related: "2026-08-26-webmcp-agent-ready-websites-vinny.md, 2026-09-14-software-factory-isolate-build-prove-ship-ras-mic.md, business-opportunities.md"
---

# Muse AI Connectors: The Next App Store Moment?

> Greg alone, no screen share. Meta has opened Muse, its personal AI agent, to developers: a
> **connector** is an API (or an existing MCP server) that Muse may call halfway through a user's
> request, listed in a Meta-run directory after review. Greg's frame is the 2008 App Store. He
> gives four ideas — supplier lead gen, home-repair dispatch, padel court finder, family dinner
> planning with an Instacart list — three growth routes that do not depend on Meta featuring you,
> a build recipe (one customer request → coding agent → availability check and quote first), and
> a pre-submission test list of awkward requests. His own pick on a small budget is lead gen,
> because a sample can be sold before software exists. The open questions are stated by him, not
> answered: how many users Muse will have, how many connectors Meta approves, and whether an unknown
> service ever gets recommended.

**Source note:** written from the publisher's own transcript (flightcast VTT, counts in the front
matter), not from show notes. One speaker. The episode names no Muse user count, no approval
rate, no connector pricing or revenue share, and no country availability — none of those are in
this note because none are in the episode.

**ASR garbles.** `Greg Eisenberg` = Greg Isenberg · `Cloud Code` = Claude Code · `paddle` = padel
(the racket sport; Playtomic is a padel booking app) · `OneCity` = one city. One garble changes a
number and must not be quoted as said: *"100 customers paying $99 a month would give you $99 in
MRR"* — the arithmetic gives a hundred times the figure the transcript prints; quote neither as his number. Three I
cannot resolve and leave standing: **`Stacktree's founder`** (a founder who published the submission
form), **`Why is the chart vertically?`** (his App Store feature story), and *"Two, what's cool"*
(probably "Too"). Do not smooth these into names.

## 1. The frame: App Store, 2008

The claim, stated at the top and hedged in the same breath:

> *"And you can now submit something called a connector, which gives Muse a way to use your service when someone asks for help."*

> *"By June 2010, less than two years after the store had opened, Apple had paid developers a billion dollars from paid apps and in-app purchases."*

> *"How big that market will become will depend on whether people actually use Muse for those jobs."*

His one data point for demand is a chart rank, not usage: *"it is today as of recording the number
one app in the App Store."*

The wrinkle that makes it different from an app store — the service enters mid-task:

> *"So your service can become useful halfway through a bigger request."*

> *"And there's a step where they need access to a business that can actually deliver and money's changing hands."*

## 2. What a connector is

His example is a podcast studio booking. The mechanism in his words: *"An API is a way for one
piece of software to ask another piece of software for something."* … *"The connector lets Muse
use that window."* The service quotes, Muse shows the offer, the user approves, the service books.

The caveat he repeats, and the one that matters for anyone who already has a product:

> *"what's cool is an agent makes it easier to ask for the service."* … *"The service still has to be good, though."*

> *"If you built software before, I'd start by looking at what your customers can already do through your API."*

> *"There might be a useful connector sitting inside the product that you already have."*

The live example is Duffel (flights), and he corrects his own number on air: the billion is
*"the value of bookings, by the way, passing through its business rather than Duffel's revenue."*

## 3. Four ideas — and the one he would start with

1. **Lead gen for business suppliers.** A linen service asks which restaurants open nearby; the
   connector returns verified openings with a source. The product is freshness: *"So keeping that
   information current is going to be a big part of what you're selling here."* Against Apollo:
   *"But your opportunity is knowing something timely about a specific market."*
2. **Home-repair dispatch.** Broken appliance, exact model, tomorrow. Charge the repair company
   *"like an agreed upon fee, $100 let's say, for a qualified intro or a confirmed booking."*
   Thumbtack is his proof that providers pay for leads.
3. **Padel match and court finder.** Clubs with empty slots, players several times a week. The
   hard part he names: *"You need those clubs, by the way, to obviously let you access their opening games."* … *"Some do and some won't."*
4. **Family dinner planning.** Three nights, 20 minutes, the fridge contents; the missing
   ingredients become an Instacart shoppable list. Acquisition as a possible exit, flagged as a guess.

His pick, and the reason is the useful part:

> *"Of these four ideas, I'd probably investigate the lead generation idea first if I was starting with a small budget."*

> *"You can put together a useful sample and show it to a potential customer before writing much software."*

## 4. How anyone finds a connector

He does not trust the directory and says so:

> *"But whether an unknown service is going to get recommended during a general conversation is something we still need evidence for."*

> *"So I build my initial plan around customers I have a way to reach."*

Three routes, then the fourth he discounts:

- **Creators with audiences** — pay per customer introduced; *"The size of the audience matters less to me, honestly, than whether the people in it need what you're selling."*
- **Product-led sharing** — the padel booking page sent to three other players. His own hedge: *"So I'd measure that before I'd call it a growth loop"*.
- **Existing connected marketplaces** — Ticketmaster events appear through its connector *"without each organizer doing additional integration work."*
- **Directory feature** — *"But let's be real, you're not going to be able to bank on that."* His early-app feature brought *"like 40,000 downloads every single day"*, and he calls it *"basically somewhat random."*

The decision rule he gives:

> *"You want to be able to point to a specific person or channel that can bring your first customers even while you're hoping the directory becomes a meaningful source of demand."*

## 5. Build, test, submit

Start from one sentence the customer should be able to say, hand the brief plus the target
system's docs to a coding agent, build *"the availability check and the quote first"*, booking
after. It must be hosted and must know which customer is calling. Two routes: a **custom
connector** in your own Muse to try it privately, then Meta's review. The form, per the unnamed
founder's account, accepts *"options for an API or an existing MCP server."*

The pre-submission list is the most reusable passage in the episode:

> *"So ask for time that's already booked."*

> *"Check that repeated request that doesn't actually create another reservation."*

> *"And I try the next thing a customer is likely going to ask, such as moving the court booking to another day."*

And the open question he leaves open: *"Is it going to be like YC where they only let in 0.01%?"*
… *"Or is it going to be like the Apple App Store?"* Where to start this week: one customer type,
*"I want to hear about the last time it happened."*

## Insights for me

My judgement from here on, not the episode's.

- **The episode is thin on facts and honest about it.** No user numbers, no approval rate, no
  pricing, no word on the EU. Before any build, the gate is a native check: is Muse available in
  Germany, does the directory accept a non-US developer, and do connectors get invoked for German
  users at all. Until that is measured, this is a US consumer channel and I am neither.
- **"A connector sitting inside the product you already have" is the one line that applies
  directly.** The e-invoice API and launch-kit already have APIs; Fabrik takes GitHub issues. An MCP
  server over an existing API is a small bet (days, not weeks) — but Muse is a consumer assistant
  and all three are B2B tools. The better fit for the same MCP wrapper is where Jens' buyers already
  work (Claude, ChatGPT connectors), which the WebMCP note (26.08.) already argued. Build the MCP
  server once; Muse is at most one more listing.
- **The distribution section is the usual trap for me.** Route 1 (creators) and route 3 (partner
  marketplaces) both assume reach Jens does not have; route 4 (feature) is a lottery by Greg's own
  account. Only route 2 — the product sends itself to the next person — works without a network,
  and it is the criterion to apply when choosing between ideas, Muse or not.
- **Idea 1 is the transferable one, and it does not need Muse.** "Show a sample before writing
  software, sell freshness in a narrow market" is a cashflow pattern: a verified weekly list for one
  vertical in one region (e.g. German companies facing the XRechnung mandate, new-build
  registrations for suppliers). It can be sold by cold mail/LinkedIn with a sample attached. Muse
  would only be the delivery surface, and a weak one for B2B buyers in Germany.
- **The awkward-request list is a free QG item.** Already booked, expired quote, idempotent repeat,
  the follow-up change — that is exactly what the e-invoice API and launch-kit booking flows should
  prove before any listing anywhere, and it fits the "prove" step from the 14.09. note.
