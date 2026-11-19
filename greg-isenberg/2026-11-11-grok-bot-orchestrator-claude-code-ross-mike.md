---
title: "I'm Obsessed With Grok Bot. Here's Why"
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg"
guest: "Ross Mike (YouTuber, AI explainer; Greg calls him \"Mickey\")"
feed: "https://rss2.flightcast.com/ordbkg8yojpehffas7vr7qpc.xml"
transcript_url: "https://rss.flightcast.com/transcripts/01M75SABE7AS0F06YAEKTZQ2E1.vtt"
published: 2026-11-11
captured: 2026-11-19
duration: "48:31"
transcript: "publisher VTT (flightcast), ~8,900 words — full episode"
related: "2026-11-02-grok-bot-for-xyz-bops-nick-orgo.md, 2026-08-21-grok-bot-agent-team-newsletter-billy-howell.md, 2026-09-15-instinct-personal-agent-imessage-remy.md, 2026-10-01-fde-full-course-process-mapping-four-buckets.md"
---

# GrokBot as the orchestrator, Claude Code as the engineer

> Ross Mike runs one GrokBot bot per serious project and hands the coding to Claude Code
> sessions it spins up. Why not Claude Code directly: the phone UX, and one surface that also
> knows his finances, content and customers. Five areas: engineering, design, content,
> business/finance, shopping.

**Source note:** a screen-share demo by a power user, no measurement. "Five out of five PRs",
"$200 MRR" for Bezalel and the short-form views are self-reported. The "$8,000 to $12,000" of
API credits per $200 Claude Code plan is his estimate, not shown. Both say they are not
affiliated with Paper or GrokBot. Security relies on an "obliterated" (uncensored) model he
does not show.

**New vs. earlier GrokBot notes:** Billy Howell (08-21) gave a four-week rhythm for one
newsletter team; Nick/Orgo (11-02) cloned GrokBot to sell per industry and also used Paper
before code. New here: GrokBot driving Claude Code over Tailscale, a bot lifecycle (create,
delete), a Plaid-connected advisor bot, an X-API content scout, and shopping by agent.

## 1. Engineering: GrokBot drives Claude Code

1. **Idea bot.** One general engineering bot with context on all projects. Dump random ideas:
   *"Give me something that works."* *"Push to my GitHub and I'll check it later."* Example:
   an AI-governance app built overnight — *"I haven't even run this."*
2. **Review before build.** For Pluto (pivot: users fine-tune a base model like Qwen on their
   app data) he gave the bot a plan PDF and only said "review this": *"I didn't tell it build
   this."* It pushed back, he pasted his co-founder's reply in verbatim, got a new plan, read
   it himself, then said build.
3. **Build prompt, as typed:** *"Build out everything."* *"Use CloudCode with UltraCode, Opus
   5.5."* *"If you need multiple sessions, go ahead slash goal."* It ran for hours. Result
   claimed: *"five out of five PRs"*, now with testers.
4. **Two ways to connect Claude Code.** Easy: *"every bot has a computer"* — tell it to log
   into Claude Code there. His: machines on Tailscale running T3 Code; GrokBot spins up a T3
   Code instance per task. How he set that up: *"Ask your agent because that's what I did."*
5. **Why the subscription.** $200/month Claude Code over the API; Opus 5.5 over Codex for now
   — *"This could change"*. Closing: *"So please try, at least before the subsidies end."*
6. **Business side in the same loop.** The VP Cloud bot (Canadian sovereign GPU cloud) asked
   another bot to email a GPU provider for a discount, unprompted, because costs were *"a
   little too high compared to the American equivalents."*

## 2. When a bot deserves to exist

- Rule: *"context is my decider"*. A screenshot extension built in two prompts: *"This does
  not deserve its own bot."*
- Own bot for what he takes seriously or ships: Pluto, the Bible app, Bezalel. Side quests
  (Terminal, Exchange) *"will probably get deleted in two days"*.
- Permanent bots: IT (manages his machine fleet), ML (downloads and fine-tunes local models),
  content.
- Delete freely against "bot fatigue" (*"15 different bots for 15 different things"*): *"I am
  not afraid to delete bots that have like not served their purpose."*

## 3. Security

- Run the best model you have with `/goal` and "do security checks".
- If Claude or Codex refuses, *"you would spin up a new thread and reword your prompt
  differently."*
- Required when *"payments are involved, if sensitive user information is involved."* His
  free, login-free Bible app gets none. Pluto gets an uncensored model in a background loop.

## 4. Design: Paper before code

1. Connect Paper's MCP to the agent (setup: ask the agent).
2. Collect inspiration from designers on X and Mobbin; screenshot what you like.
3. Prompt: *"create a design system using this site as reference"* — font, colours,
   typography, sizes, spacing, corner radius, button and card sizes. Tweak it, then reuse it
   across projects.
4. Leave comments on the Paper canvas, then *"tell my agent address the comments."*
5. Only then code: *"I'd rather lock in the design first, be happy with it, then have it
   generate code."* Example: his brother's clothing store, Paper design pushed into Shopify via
   a connected account.
- Greg: *"The mistake a lot of people are making right now is they're going straight to
  code."* The result has "AI smell".

## 5. Content: a scout bot on X

- A YouTube bot runs at 9 a.m. and 5 p.m. GrokBot's X API access *"feels like unlimited"*.
- Standing instruction: *"always share with me three topics."* *"that you think I would find
  interesting based on the type of content I create and share with me tweets that I can make
  videos from."* Output: topic, title idea, resources.
- No AI scripts: *"people prefer people."*
- Editor bot: he explores styles in plain words, then sends them to his human editor.
- Greg's short-form test: record on the phone, *"feed it to Cloud Code, give it some
  framework for thinking about how to edit videos and what makes a good video"*, post.
  "Hundreds of thousands of views" on some — unmeasured.

## 6. Business and finance: an advisor that says no

- Finance plugin uses Plaid; bots per business finance, personal finance, business investor,
  personal investor read his transactions.
- The advisor bot *"basically stops me from making bad decisions."* Example: a Canadian
  investment property — it flagged "unrepresented buyers only" and a boiler and furnace from
  2009, *"about 17 years old"*.
- The core argument: *"with CloudCo, when I spin up a new session, it has no idea that this
  is where my business is at."* *"Use GrokBot to orchestrate it so it knows what's going on."*

## 7. Shopping

- Daily eBay scans for GPU *"listings where people are selling GPUs where the boxes are
  sealed."*
- PS5 Pro: the bot emailed the seller, found a store *"two hours away"*, gave him the number
  and a call script (*"Obviously, I didn't use the script."*), then bought it.
- *"GrokBot is my interface to the internet."*

## What it means for Jens

- **The assistant already is this setup.** Telegram as the phone surface, profiles, journal and
  memory as the business context, agent-tasks and Fabrik as the Claude Code engineers. His core
  argument — a fresh Claude Code session *"has no idea"* where the business stands — is the
  problem the session's context loading solves. Nothing to build.
- **"Review this", not "build this".** Having a plan criticised before the build is the one
  habit worth copying as a step: before an agent-task YAML goes out, let a second agent attack
  the spec. The task-spec critic exists; using it on every larger YAML is the change.
- **An advisor that says no** exists as the bet-rules skill (forecast plus kill number before
  any recommendation). His property example shows the value is in the red flags it reads from
  documents — the same job the Tannheim sale already gets.
