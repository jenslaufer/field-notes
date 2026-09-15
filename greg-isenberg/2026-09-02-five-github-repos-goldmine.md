---
title: "These 5 Github Repos are a goldmine"
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg"
guest: "none — solo episode, new format"
feed: "https://rss2.flightcast.com/ordbkg8yojpehffas7vr7qpc.xml"
audio: "https://episode.flightcast.com/01M1HGMVD210P85FN5GWX5HEQG.mp3"
published: 2026-09-02
captured: 2026-09-15
duration: "24:43"
transcript: "publisher VTT (flightcast), 288 segments, 3,821 words — full episode"
related: "2026-08-19-skills-plugins-team-distribution-remy.md, 2026-09-10-gpt6-astra-vibe-manufacturing-ras-mic.md, 2026-08-31-marketing-engineer-growth-repo-six-systems.md"
---

# These 5 Github Repos are a goldmine

> A new format he tries out and asks the audience to vote on: he went through repos that got
> attention in the last 30 days and walks through five, in plain English, with the install
> command and one small first workflow for each. The five: **no-AI-slop skill** (Peter Yang),
> an **open-source CRM built for agents** (TriCompAI), **video-use** (browser-use — edit video
> with a coding agent), **Skill Spectre** (NVIDIA — scan a skill for prompt injection and
> exfiltration before installing it), and **Phone Harness** (drive a real iPhone or Android from
> Codex/Claude Code). The repeated move is the same one every time: install it, get one small
> workflow working, then decide whether to productize it.

**Source note:** written from the publisher's own transcript (flightcast VTT, counts in the front
matter), not from show notes. One speaker.

**Two discrepancies to carry, not smooth.** He says at the top *"I picked the six that I think you
should know about"* and at the bottom *"Five GitHub repos I think are really interesting"* — five
are actually presented, so the sixth was cut. And the Phone Harness section has an audible edit:
at [21:35] mid-sentence (*"For iPhone, you do need Mac"*) the transcript jumps to *"I'll see you
next time"* and then resumes with *"It's early."* Some Phone Harness detail is missing from the
published audio.

**ASR garbles.** `Cloud Code` = Claude Code · `Skill Spectre` / `Skills Spectre` / `skillspector`
= NVIDIA's scanner, spelling unverified from audio alone · `TriCompAI` = the CRM's publisher,
spelling unverified · `11labs` = ElevenLabs · `cdcrm, cpenv.example.env` = `cd crm`,
`cp .env.example .env` · `uvtoolinstallgitplus` = `uv tool install git+<url>` ·
`dash dash node dash LLM` = `--no-llm`.

## Why GitHub, in his framing

> *"it's turned into one of the best places to get an unfair advantage in the agentic era because you're seeing the tools people will be talking about in six months today."*

> *"A lot of the things that eventually become SaaS companies, agencies, workflows, and startup ideas show up there first."*

All five are free and open source, with the caveat he flags himself: *"some have dependencies,
like one has a dependency on 11 labs, which does cost money."*

## 1. No-AI-slop skill (Peter Yang)

The problem stated better than the usual complaint:

> *"technically, the writing is fine."* … *"But it has this weird smell to it."*

> *"Sometimes it has like, it's not X, but it's Y."* … *"or uses the word quietly a lot."*

> *"I feel like it feels like reading a keynote from a fake SaaS conference."*

What makes this one different from a grammar tool is the constraint it keeps:

> *"a lot of the writing tools make your writing cleaner, but sand off the interesting parts and make everyone sound the same."*

And the reason it is a business concern, not a taste concern:

> *"They might not say this was written by AI, they might not respond and say it, but they'll just trust you less."*

> *"this repo isn't really about making writing nicer."* … *"It's really about making your communication more believable."*

Install: `npx skills add <github link>`. **The workflow he recommends is the reverse of the
default**: write the rough draft yourself, even messy, get the real points down, and only then ask
the skill to strip the patterns — *"a human set of ideas first and then you have ai cleanup
second, which is different than how a lot of people today are creating content."*

## 2. Open-source CRM for agents (TriCompAI)

The diagnosis first, and it is the honest one:

> *"almost all of them depend on you doing the work."*

> *"you've had a CRM and it's just turned into these graveyards that you just sort of stop updating."*

The reframe:

> *"it treats your CRM as a workspace for an agent instead of a filing cabinet for you."*

> *"It should maintain the relationship graph for you."*

Why it is a money problem and not an admin problem:

> *"Most businesses actually don't fail from a lack of opportunities."* … *"A lot of times they fail because the opportunities are just scattered everywhere."*

> *"there's real money sitting inside those emails."*

He is explicit that this is **not** a Salesforce replacement. His own candidate pipelines: podcast
sponsorships, investor updates, waitlist follow-up for something vibe-coded, customer success for a
small SaaS. The first workflow he would build, name included:

> *"I'd make a pipeline called something like warm leads I can't afford to forget."*

> *"then I'd drop in every person who's shown any buying intent and they replied to any email or booked a call or asked about pricing or said they'd circle back in 45 days."*

Install needs **Bun and Docker**: clone, `cp .env.example .env`, `bun install`,
`docker compose up -d`, `bun run db deploy`, `bun run db seed`, `bun run dev`. Runs locally on
`localhost:3000` with the API on `3001`; sign-in and calendar need a Google or Microsoft OAuth
client. His own honest label: *"this isn't like a one-click, everything is set up, beautiful
thing, but it's real, it's a product-shaped repo."*

The category observation is the reusable part:

> *"everyone has a CRM problem and they just never really call it that."*

> *"They say I forgot to follow up or I forgot who to email or leads are a mess"*

## 3. video-use (browser-use)

Drop raw footage in a folder and ask Claude Code or Codex to edit it: remove filler words, cut
dead space, add subtitles, colour grade, build overlays, render, and check the output. He is clear
that AI video editors already exist and names what is different:

> *"the editing workflow here becomes something that your agent can understand and repeat automatically."*

> *"normally all that actually lives in a person's brain and muscle memory."*

Why it matters, in one line: *"you can have a great product and you're still going to lose if no
one's going to see it."* His warning about how people fail with it on day one:

> *"I wouldn't try to automate my whole YouTube channel on day one."* … *"it's because they just ask for too much."*

Start with one repeatable format — a founder's Loom into a 60-second launch video, or *"taking a
podcast recording and just being like, I need three banger clips from it."* Then the escalation he
repeats throughout the episode: one format → a system → run it yourself or sell it.

> *"Every niche needs content."*

> *"And pretty much no one enjoys editing it."*

Named buyers: real estate agents (listing videos), SaaS founders (product videos), coaches (clips),
agencies (ad variations). Setup is a paste-in prompt to Claude Code or Codex **with shell access**
— read `install.md`, install, wire up `ffmpeg`, register the skill, ask for the ElevenLabs API key
when needed. *"for 95% of people listening to this, might as well just have the agent install it
for you."*

## 4. Skill Spectre (NVIDIA) — the one with a deadline on it

This is the section with the most durable content, because it names a risk that grows with every
skill installed:

> *"a skill isn't just a block of text, right?"*

> *"It can include instructions and scripts and dependencies, tool access,"* … *"and basically behaviors that change how your agent works."*

What it scans for: *"prompt injection, data exfiltration, supply chain risk, hidden instructions,
basically any malicious patterns and MCP related risks."* The rule in one line:

> *"before you hand your AI a new tool."* … *"scan the tool right"*

And the argument for why this stops being somebody else's problem:

> *"at some point, your setup starts to look like a little operating system for your work."*

> *"once that happens, security stops being an enterprise-only problem and becomes a normal builder or founder problem."*

Install with `uv tool install git+<link>`; scan a local directory with
`skillspector scan ./my-skill` or a GitHub repo directly by URL. **`--no-llm` gives a faster static
scan that does not send file contents to an LLM provider** — his own note that it matters *"if
you're scanning like sensitive files or private files in general."* There is a Docker option for
people who do not want Python locally.

He declares no affiliation and says why NVIDIA's name is the point:

> *"I like that NVIDIA is attached to this one."* … *"because it gives the whole category credibility."*

The business observation he leaves open: *"If teams are going to install AI skills and MCP servers,
someone's going to need to help them decide what's safe"* — a trusted marketplace, a scanner, an
install gate for companies, or a feature inside every agent platform.

## 5. Phone Harness

Connects Codex or Claude Code to a **real** phone — iPhone mirroring on a Mac, ADB on Android.
*"You don't have to jailbreak it, no X code."* No app on the phone. The agent sees the screen,
taps, types, scrolls, opens apps, and *"it verifies what happens."*

The reason the surface matters:

> *"A huge amount of work happens on phones now and banking apps and messaging and social and food delivery."*

> *"there's a ton of workflows that are hard to automate because the only real interface is a phone screen."*

His first test is a QA pass, and the prompt is short enough to use as written:

> *"Open up the app, create an account,"* … *"tap through onboarding, try checkout, take screenshots, and tell me where it gets confusing or breaks."*

> *"Every mobile team should be constantly doing that, but most don't because it's tedious or they don't want to hire that person to go and do it."*

Limits, stated: *"This one is early and it has its limits."* — locked phones, Face ID and camera
flows are *"pretty tricky"*. And the pricing question he leaves hanging as the exercise:

> *"If you can productize mobile QA, would someone be willing to pay $100 a month, $500 a month for that?"*

> *"How many clients do you need to get to $10,000 a month?"*

## The pattern under all five

Stated once, explicitly, and it is the actual takeaway of the episode:

> *"you can install them step two is have a small workflow get it to work, add value and step three is then should I be productizing this for other people or just continue using this in my own workflows to be more productive, to make money and create value"*

And his own framing of the habit:

> *"I just think it's a really interesting thing to do, to just do monthly things."* … *"finding new GitHub repos, installing them."*

## Insights for me

- **Skill Spectre is the one to act on, and the exposure here is already large.** This machine
  runs a private plugin marketplace (`toolkit@jenslaufer-private`, ~40 own skills that auto-update
  from a push to `main`), plus foreign skills installed from elsewhere — gstack and the firecrawl
  symlinks — and a set of MCP servers. That is exactly the *"little operating system for your
  work"* he describes, assembled from sources with different trust levels, and none of it has ever
  been scanned. `--no-llm` matters specifically here: the skills carry credential paths and
  business context, so the static mode is the one to start with. A scan is cheap, one-off, and
  either finds nothing (and we know) or finds something (and we very much want to know).
- **The no-slop skill is `klartext` pointed at a different failure, and the comparison is
  instructive.** Both are gates on text before it reaches a human; `klartext` checks characters and
  structure, Peter Yang's checks the tells that cost trust. The part worth copying is not the word
  list but **his workflow order** — human draft first, cleanup second. The German drafts here are
  already written that way; the English ones (issue bodies, PR descriptions, the field notes
  themselves) are not gated at all.
- **"Warm leads I can't afford to forget" is a pipeline that exists here with no home.** Named,
  measurable instances: two contracting candidates in `waiting #354` with a window closing
  Thursday, the freelancermap threads that close after 31 days, 16 FinGrab reviewers, and a
  cancelled subscriber who gave the reason `unused`. Against that, `waiting.md` carries 78 items
  and grows monotonically. Note the honest limit before anyone builds the CRM: **the measured
  problem here is demand, not forgotten warm leads** — 17 checkout sessions in five months is not
  a follow-up failure. File the repo as a reference, do not open a project.
- **Phone Harness is the second independent mention of nightly mobile QA in three episodes** (it
  was prompt 7 on 10.09.) and it still does not apply — the products are Chrome extensions and a
  Go/Vue instance, all desktop. Worth naming so a later session does not rediscover it as an idea:
  the surface is absent, not neglected.
- **The format itself is the transferable thing.** "Go through what got attention in the last 30
  days, pick five, explain each in plain English with the install line and one small first
  workflow" is a content format with no audience requirement and a permanent supply of material.
  It is also what this repo already does for podcasts. If the distribution problem is the binding
  constraint, a monthly post in exactly this shape is a cheaper experiment than another product.
