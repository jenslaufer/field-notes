---
title: "Claude Fable 5.2: How I'd Make Money With It"
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg"
guest: "none (solo)"
feed: "https://rss2.flightcast.com/ordbkg8yojpehffas7vr7qpc.xml"
transcript_url: "https://rss.flightcast.com/transcripts/01M7329H19KNND6THD05Q80BFE.vtt"
published: 2026-11-10
captured: 2026-11-13
duration: "19:35"
transcript: "publisher VTT (flightcast), ~3,100 words — full episode"
companion: "Greg's Letter 'AI agents + startups', 2026-11-12 (newsletter, 11-part guide, 26 prompts)"
related: "2026-10-28-agent-harnesses-gamma-jon-noronha.md, 2026-10-29-saas-is-dead-free-tool-upsell-intelligence.md, 2026-11-02-grok-bot-for-xyz-bops-nick-orgo.md"
---

# Fable 5.2: twelve prompts, plus the newsletter's 26

> Release-day riff. Twelve prompts in four groups: make money, be productive, video and
> content, hardware. Two days later his newsletter turned the same ideas into an 11-part
> playbook with 26 prompts. Five prompts appear in both.

**Source note:** solo, live in the Claude app. Two prompts run on screen (business audit on
his agency LCA, a freelance job pulled from Upwork), one finishes on screen (hardware). The
"100 niches" prompt is never read aloud; its text is only in the newsletter. Numbers he cites
from Anthropic's launch post (freelance score 21 % → 41 %, runs of 10–12 hours, three devices
from one prompt) are not checked here. Same for the newsletter's price ($8 / $40 per million
tokens in/out) and the Intercom figure ($0.99 per resolved ticket, >$100M ARR).

## Episode prompts (as spoken, light cleanup)

**Make money**

1. **Audit the business.** *"Audit my entire business, the website, pricing, onboarding,
   emails, and top five competitors. Work until it's actually finished. Keep a running log."*
   … ranked list of the 10 changes most likely to make money, with evidence for each.
2. **Do a freelance job end to end.** Do the whole job as if you were a freelancer. Then
   tell me which parts you're confident in, which parts a human should check, and what you'd
   charge for it as a fixed-price service. (Live: the model picked a $450 equity-analyst job
   on Upwork itself.) Point: sell the job, not the hour.
3. **100 niches at once** — subagents, one per niche. Text only in the newsletter (N1 below).
4. **Rebuild the ancient software.** *"Here's the spreadsheet my client has run their
   business on for 12 years. Figure out what it actually does, rebuild it as a simple web
   app, move the data over, and write a one-page guide for the staff."* Price per output, not
   $50–100 per hour.
5. **Deal checker for buying a boring business.** Here's the seller's P&L and listing. Find
   everything that doesn't add up, mark each number as verified, unverified or suspicious,
   and write the 15 questions I should ask before making an offer. His reason: the model
   now says "I don't know" — *"The I don't know era."*

**Be productive**

6. **Grill me.** *"Interview me with 20 questions about how I make decisions in my business
   one at a time. Then turn my answers into a skill file you'll follow from now on."*
7. **Run the apps that never had an API.** *"open our old invoicing app, export last month's
   invoices, match them against the bank statement and list anything unpaid, and then ask
   me before sending anything."*
8. **Red team my plan.** *"here's my plan for the next quarter, argue against it like an
   investor who wants to pass, then tell me the one thing that would change your mind."*
   He fed it his LCA vision deck; rated it above a well-known advisor's feedback.

**Video and content**

9. **Short-form editor.** *"Here's a raw four minute talking head video. Cut the silences and
   retakes, find the strongest 45 seconds, add captions and simple motion graphics"*, export
   vertical, show three different hooks.
10. **Niche explainer.** *"make a 60 second animated explainer on this topic for this niche.
    Write the script, build the animation and code and render it. Then make five variations
    with different first lines."* Business: faceless vertical channels at $1–5 per video —
    "social media is almost like real estate", without the capital.
11. **One episode, every format.** *"here's the transcript. make a PDF playbook, five tweets
    of my voice, a newsletter, a free tool someone could use in two minutes, and then flag
    any claim you couldn't verify."*

**Hardware ("vibe manufacturing")**

12. **Device for one niche.** *"Design a small device that does one job for one niche. Give me
    the parts list with the prices, the circuit design, the firmware, and an enclosure I can
    print."* Then: what does it cost to make 100? Live result: "PlaneOne", a 4G calls-and-text
    handheld with a 45-key thumb keyboard and a 2.7-inch memory LCD, no browser, no app
    store — full parts list, power rails, pin map, keyboard matrix. His caveat: *"So I
    wouldn't 100% trust it."*

## Newsletter: the 11-part guide (2026-11-12)

The letter frames the episode as a playbook: pick a problem with money attached · second
brain · brief the LLM like an employee · harness · charge for the result · a door for agents
· work before the pitch · content machine · agents first, people for accountability · weekly
loop · reuse the harness for the next niche. Ideas the episode lacks:

- **Second brain** = a folder of plain text files: `company.md`, `voice.md`, `facts.md`
  (*"This is what stops it from making things up."*), `customers/`, `playbooks/`, `content/`,
  `decisions.md`, plus one `CLAUDE.md` with three rules — read company, voice and facts first;
  append with a date, never overwrite; write down what you learn about a customer.
- **Fable as manager**: it plans and checks, cheaper models do the bulk. Audit the bill monthly.
- **Price by result, not tokens.** Clinic example: $299 subscription vs. 15 % of recovered
  insurance denials ≈ $6,000/month. Agent businesses run at 50–60 % gross margin, classic
  SaaS at 80–90 %.
- **Agents as customers**: build an MCP server or skill (send job, check status, fetch result)
  before a dashboard.

## Overlap: episode vs. newsletter

| Episode | Newsletter | Verdict |
|---|---|---|
| 1 Audit the business | Part 9, last prompt | identical |
| 2 Freelance job | Part 1, second prompt | identical (newsletter adds "a real job posting") |
| 3 100 niches | Part 1, first prompt | same; full text only in newsletter |
| 8 Red team my plan | Part 3, "Make the best case against this plan" | same idea, shorter |
| 11 One episode, every format | Part 8, step three | similar; newsletter: X post, 30 s script, newsletter section, ChatGPT answer page |
| 6 Grill me | Part 9, "recording of me doing this task" → skill | related: both end in a skill file; newsletter learns from a recording, not an interview |
| 4, 5, 7, 9, 10, 12 | — | episode only |

## Newsletter-only prompts (verbatim)

**Part 1 — problem with money attached**
- N1 *"Spin up a subagent for each of these 100 niches. Each one finds the top 3 complaints
  people have, what they pay for today and how hard they are to reach. Give me one ranked
  table and the 5 I should build for."* (His result: paperwork with money attached won —
  clinics appealing insurance denials, refrigeration contractors keeping EPA logs.)
- N2 *"Pull every job posting from companies in [niche] over the last 60 days. Group them by
  the work they're hiring for. For the three most common roles, tell me how much of that job
  an agent could do today. Then write the email I'd send the hiring manager, offering to do
  it as a service for a third of the salary."*

**Part 2 — second brain**
- N3 *"Here's a voice note. Pull out every fact, decision, story and idea in it. File each one
  in the right place in the second brain with today's date. Then tell me what you filed, and
  flag anything that contradicts what was already there."*
- N4 *"Read this week's finished jobs and their outcomes. Update our playbook: what worked,
  what failed, and what to stop doing. Show me the changes before you save them."*
- N5 *"Read every sales call transcript from the last 90 days. Build a table of each
  objection, how often it came up, the exact words people used, and what we said when we won
  anyway. Then write one landing page headline and one ad for each of the top five."*

**Part 3 — brief like an employee**
- N6 *"Your goal is [outcome]. Read the second brain first. Work until it's actually finished,
  and keep a running log of what you did and why. When you think you're done, check the
  result against the goal and fix what falls short before you report back."*
- N7 *"Break this into pieces that can be done at the same time. Give each piece to its own
  subagent with clear instructions. Combine the results into one answer, and tell me where
  the subagents disagreed."*
- N8 *"Before I use this, tell me which parts you're confident in, which parts a human should
  check, and what you'd need to see to be sure."*

**Part 4 — harness**
- N9 *"You are this customer's toughest reviewer. Read the finished job and give me the
  strongest reason to reject it. Only pass work you can't knock down."*
- N10 *"Here are 50 past jobs with the correct result for each. Run every one through the new
  model with our current instructions. Tell me which model wins, what it costs per job, and
  the three cases where it did worse."*
- N11 *"Here's last month's model usage log. Find the 10 most expensive calls. For each one,
  tell me whether a cheaper model, a shorter prompt or a saved result would do the same job,
  and estimate what we'd save."*

**Part 6 — door for agents**
- N12 *"Ask ChatGPT, Claude and Gemini the 20 questions my customer would ask before buying.
  Record which companies each one recommends and which sources it cites. Tell me where we're
  missing and what we'd need to publish to show up."*

**Part 7 — work before the pitch**
- N13 *"For each of these 50 prospects, do ten minutes of real work for them: audit their
  checkout, rewrite their homepage headline, or fix their weakest ad. Then write a four
  sentence email that leads with the single most valuable thing you found and attaches the
  work."*
- N14 *"Here are my 20 best customers. Find what they have in common that isn't obvious, like
  the tools on their site, who they're hiring, or how they describe themselves. Then find 200
  more companies that match."*
- N15 *"Sign up for our product and these five competitors as a new customer. Record every
  screen, every email they send in the first seven days, and what happens when you try to
  cancel. Tell me what they do that we don't, and what we do that annoys people."*

**Part 8 — content machine**
- N16 *"Read this week's finished jobs. Find the three results a stranger would find
  surprising. For each one, write the story: the situation, what we did, and the number.
  Remove anything that identifies the customer."*
- N17 *"Here are my 50 best posts and 20 I'd never publish. Write a voice guide: the words I
  use, the words I never use, how long my sentences run, and how I open and close. Then act
  as my editor and reject any draft that breaks it."*
- N18 *"Here are last week's posts with their numbers, plus every reply and comment. Tell me
  which hooks, formats and topics won. Pull the ten best questions people asked. Update the
  content playbook, then draft next week's ten posts from what worked and what people
  asked."*

**Part 9 — agents first**
- N19 *"Here's a recording of me doing this task and explaining it as I go. Write it up as a
  skill: when to use it, the steps, the checks, and the mistakes to avoid. Then run it on a
  new example and show me where your result differs from mine."*

**Part 10 — weekly loop**
- N20 *"Here are this month's numbers for every job type we handle. Rank them by profit per
  hour of human time. Recommend one to stop doing and one to double, then make the best case
  against your own recommendation."*
- N21 *"Here are exports from Stripe, our bank and our ad accounts. Tell me the profit per
  customer by channel, the subscriptions we pay for and don't use, and the one customer
  segment that loses us money."*
- N22 *"Here are this month's exit interviews. Group the reasons people left. Tell me the one
  change that would have kept the most of them, and what I should remove from the product."*

## What it means for Jens

- **The second brain already exists** in his setup (CLAUDE.md, memory, field-notes). New
  for him: `facts.md` as a list of what an agent may claim, and the append-with-date rule.
- **N12 (ask three assistants the buyer's 20 questions)** and **N15 (sign up as a customer
  at five competitors)** fit his Chrome extensions directly and need no audience.
- **Prompt 2 / N2 are the Fiverr idea** from 23.10. again — Greg now frames it as "fixed
  price per job". Same weakness as before: the moat is the system, not the bidding.
- **N21** maps onto his own Stripe, FinTS and ad-account skills.
