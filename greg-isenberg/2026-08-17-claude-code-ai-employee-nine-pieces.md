---
title: "How to use Claude Code better than 99% of People"
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg"
guest: null
source: "https://www.youtube.com/watch?v=SkY-tR9kf-k"
published: 2026-08-17
captured: 2026-08-22
revised: 2026-08-23
duration: "48:10"
transcript: "official publisher transcript from the audio feed (flightcast VTT, 7,935 words, timestamped — full episode)"
related: "2026-08-19-skills-plugins-team-distribution-remy.md, 2026-08-21-grok-bot-agent-team-newsletter-billy-howell.md, 2026-08-12-ai-agent-workforce-allie-k-miller.md, 2026-02-23-obsidian-claude-code-personal-os.md"
---

# How to use Claude Code better than 99% of People

> Solo episode, sponsored by Anthropic. One metaphor carried for 48 minutes: **give Claude the
> nine things you would give a person joining your company.** Workspace, memory, brief, ticket,
> eyes, review, schedule, permissions, skills — built live around one real idea, with every
> prompt spoken out loud. It closes with a seven-day plan.
>
> **Revision note (2026-08-23):** the first version of this note was a gap analysis — it
> assumed the recipe was already known here and spent its length on what we lack. Jens asked
> for the episode itself. This version is the walkthrough: every step in his order, every
> prompt reconstructed, every screen result he reads out. The comparison against our own
> setup now sits at the end, where it belongs.

---

## Source, and one thing that does not check out

Written from the **publisher's own transcript**, not the show notes and not kome.ai. The audio
feed (`rss2.flightcast.com`) carries a `<podcast:transcript>` tag per episode pointing at a
timestamped VTT — Greg's own file, so every quote below carries its `[MM:SS]`.

**The promised prompts are not published.** At [47:43] he says: *"In the show notes, in the
description, I'm going to include all the prompts that I went through so you can learn from
them, so you can copy this workflow, so you can too spin up your AI employees using
CloudCode."* The YouTube description (fetched 2026-08-23) contains the sponsor links, eleven
chapter timestamps, six "key points" and his social profiles — **no prompts.** So the prompts
in this note, reconstructed from the spoken text, are the only written form of them that
exists. They are marked as reconstructions throughout; he speaks them, he does not read them
off a file, so wording is his sentence, not his file.

**Two title warnings.** The same video is titled **"Claude Code New Features, Explained"** on
YouTube right now — the channel A/B-tests titles, so the stable identifier is the `videoId`
(`SkY-tR9kf-k`), never the title. And the **"99%" is never said in the episode**; it is the
publisher's title, not a claim Greg makes. Identity confirmed three ways: audio-feed title,
date 2026-08-17, and length 2,890 s matching YouTube's `lengthSeconds` exactly.

**The count of pieces is itself inconsistent, and it is worth knowing which list is real.**
He opens at [00:24] with *"the nine different areas that you need to master"*. His own recap
at [05:07] names **seven**: *"So the map is basically workspace, memory, ticket, eyes, reviews,
schedule, and permissions"* — dropping the brief and the skills. The YouTube description names
**eight** (adds the brief back, still no skills). The eleven chapter markers name **nine
steps**, and the walkthrough delivers nine. Read the walkthrough, not the recaps.

**The ASR garbles the product name throughout**: "Cloud Code", "Claw", "cloud.md", "CloudCode"
all mean *Claude Code* / `CLAUDE.md`. "AI slot" at [14:16] is *AI slop*. Quotes are left
**verbatim**, garbles included, rather than smoothed — smoothing a quote is exactly the
failure `verify-quotes.py` exists to catch.

**One structural fact that changes how much of this transfers:** he works in the **Claude
Desktop app**, not the terminal. *"I prefer using it in the desktop app."* [05:58] *"It's a lot
less overwhelming than in the terminal, so we're going to use that today."* [06:00] Desktop
preview, the visual diff view, the code tab's parallel sessions and the routines UI are all
desktop features he leans on. The concepts are portable; several of the mechanics are not.

---

## The frame

*"If you want Claude Co. to act more like an employee, you need to give it the same basic
things you would give a person joining your company."* [01:36]

He walks the list before building anything:

- **Workspace** — the repo. Where the product lives, where the files live, where Claude can go
  and do the work.
- **Memory** — the context you put into the project, so Claude understands *"what you're
  building, who the customer is, what matters right now, what good work looks like, and we'll
  get into that later, and what you've already learned"* [02:06] — the last one *"so it doesn't
  repeat mistakes"* [02:17].
- **Brief** — plan mode. *"look around, read the context, think through the job, and tell me
  how you'd approach it before you touch anything"* [02:31]. Model note in passing: *"And for
  something like that, you might want to use like a fable over an opus."* [02:39]
- **Ticket** — a real assignment. *"The mistake a lot of people make is they'll say, make the
  app better."* [02:54] The fix is specificity: add a waitlist form to the landing page with a
  success state, and check it in desktop preview.
- **Eyes** — open the app, click the flow, inspect what is confusing, report *"what a customer
  would actually experience by going through this"* [03:36].
- **Review** — *"you want a system where changes get actually checked against your standards
  before anything important ships"* [04:03].
- **Schedule** — recurring work. Morning brief, weekly issue review, pull-request reviews.
  *"Claude calls this routines"* [04:31].
- **Permissions** — read files, inspect the repo, run tests, work on small branches freely; but
  *"before touching things like dependencies, before touching migrations, before touching
  payments, these like bigger things, you basically want to make sure that the human owns those
  trust decisions"* [04:52].

The payoff sentence: *"And once you set it up this way, Cloud Code starts to feel less of like
a one-off chat thing and really more of like an operating layer for your company."* [05:37]

**The worked example** is a real idea off ideabrowser.com: a **missed-lead responder for med
spas**. Someone fills out a form, DMs the business or calls after hours asking about pricing,
and the business replies too late. Buyer: the med spa owner/operator. Everything below is built
against that one idea, which is why the prompts are concrete enough to copy.

---

## Step 1 — The workspace [05:47]

Folder layout:

```
/app          the product
/context      the business brain
/customers    sales calls, support notes, objections, customer language
/specs        specifications
/demos        demo flows, Loom scripts, screenshots
/routines     the recurring prompts
CLAUDE.md     how Claude should work
roadmap.md    what matters right now
review.md     how to judge the work before it ships
```

*"Slash context is the business brain."* [07:02] The three root MD files are, in his words, the
operating manual. The takeaway he wants you to keep: *"So the takeaway I want you to have is
Claude gets just way more useful when the project explains itself."* [07:55]

### Prompt 1 — scaffold the workspace (reconstructed)

```
Help me set up this repo as an AI employee workspace.

Create or update: CLAUDE.md, roadmap.md, review.md, /context, /customers, /specs,
/demos, /routines.

Use this business context:
  Product: missed-lead responder for med spas
  Buyer:   med spa owner / operator
  Pain:    inbound leads go cold when the team replies too late
  Promise: respond to every missed lead before they book somewhere else
  Goal:    build a simple landing page and demo flow

Before writing, ask me for any missing context that would materially change the setup,
and keep the first version simple.
```

That last sentence is the load-bearing one. Claude answers *"I'll ask you a few high leverage
questions first"* [09:29] and adds that the answers change how it structures the demo flow and
the customer/spec folders, filling everything else with sensible defaults. He answers the
questions, and the scaffold is generated rather than hand-built.

### Prompt 2 — make CLAUDE.md read like an employee handbook (reconstructed)

He splits it into three sections, and the framing is explicit: *"If you hired a junior employee,
any employee you would want to be like, this is how I would like you to work."* [10:46]

**Working style:**
```
- Small, reviewable changes
- Explain the plan before editing when the task affects product behaviour
- Keep changes focused
- Use the existing code style
- Run relevant checks after changes
- Summarise what changed, what you tested, and what needs human review
```

**Business context:** the product helps med spas respond to missed inbound leads faster; the
buyer is an owner/operator; restate the promise.

**Quality bar:** the landing page should be clear in five seconds; the demo flow should work on
desktop and mobile; use specific customer language.

*"All this stuff you're putting in your cloud.md file because you want it to know how you work,
what does success look like to you, and just your guiding process."* [11:45] — *"You're
guiding, you're mentoring, you're mentoring it."* [11:57]

### Prompt 3 — roadmap.md, and the fence around it (reconstructed)

```
Current goal: build a simple demo showing how a med spa can recover missed leads.

This week:
  - landing page
  - waitlist form
  - demo flow
  - send Looms to 10 med spa owners

Out of scope: payments, CRM integration, admin dashboards, multi-user permissions.
```

The out-of-scope list is not filler. *"And the reason I'm doing this is I want it to basically
cook on the MVP."* [12:58] — *"I want it to exceed my expectations."* [13:03] Naming the fence
is what buys depth inside it.

### Prompt 4 — review.md, the written standard (reconstructed)

*"This is the file that knows your standards."* [13:15] His checklist, before shipping:

```
- Does the change match the current roadmap?
- Is the change small enough to review?
- Does the main user flow still work?
- Are there mobile layout issues?
- Are form errors handled correctly?
- Are there auth, payment or production-data risks?
- Did we add unnecessary complexity?

Landing-page specific:
- Can a first-time visitor understand the offer in five seconds?
- Is the CTA visible?
- Is the copy specific to the buyer?
- Does the page use the words customers would actually use?
```

*"And you're basically just, you're letting Claude know that, hey, you can't just ship
garbage."* [14:09] — *"You know, we can't ship AI slot."* [14:16] And the reason a strong model
does not remove the need for the file: *"And the beauty about, you know, Opus 4.8 or Fable 5,
you know, with the right MD files and the right structure and the right brain, it does such a
good job, but it does need these guardrails."* [14:18]

---

## Step 2 — The brief and plan mode [14:53]

*"When you give a real person an important task, you don't just throw the task over the wall
and just hope that they understand it, right?"* [15:05]

### Prompt 5 — plan mode (reconstructed)

```
Use plan mode. I want to add a waitlist form to the landing page.

First inspect the current app, CLAUDE.md, roadmap.md and review.md.

Then give me:
  - the files that need to change
  - the smallest clean implementation
  - the user experience
  - the risks
  - how we will verify it
  - what you are intentionally leaving out for the first version

Wait for my approval before editing.
```

Two details he flags himself. On the inspect line: *"Important that you ask it to do that, by
the way."* [16:05] — *"It's important to gather the context to get the best quality output."*
[16:14] And on the last line: *"And you say, wait for my approval before editing."* [16:29]

What comes back is a plan naming context, files, the stack (Next.js + TypeScript), the UX, the
one-line promise, and risks such as spam and abuse — which he then accepts, rejects or revises.
The value is not the plan's correctness: *"the important thing here is you're now going to have
something to react to"* [16:33]. His examples of reacting: keep it front-end only; actually
connect it to Supabase because I want real submissions; simplify to name, email, company;
don't touch auth, payments or the database yet.

*"The way I think about it is it's like, you know the quote, measure twice, cut once?"* [18:02]

---

## Step 3 — The ticket and defining done [18:08]

*"So Claude code is very good at doing the work, but it needs to know what done looks like."*
[18:17] — *"A ticket is a small, clear assignment with a visible finish line."* [18:25]

His model of a good ticket: add a waitlist form to the landing page; it should collect name,
email and company; after someone submits, show a simple success message; keep it consistent
with our current brand identity. *"It gives Claude the job, the scope, the expected user
experience, and the boundary."* [18:54]

Three further tickets he would write:

- Create a pricing page using the existing design system, consistent with the homepage.
- Fix the onboarding redirect bug after email verification.
- Turn these five customer objections into a sharper landing page section.

The failure mode: *"Make the app better, make this more viral, add AI, build the whole thing."*
[19:44] — *"And the problem with those prompts is Claude has to guess what matters."* [19:50]
And the cost of guessing, which is the sharpest line in the episode: *"And once it starts
guessing, you're no longer managing the work."* [19:55] — *"You're cleaning up the work."*
[19:58]

He then concedes the counter-argument himself: *"I will say Fable 5 has done an amazing job at
actually guessing what matters, but I still believe that this is an important part of the whole
process to get the most out of it."* [20:00]

### Prompt 6 — implement after the plan is approved (reconstructed)

```
Implement the approved plan as one focused change.
Keep the change small enough that I can review it in the diff view.
After editing: run the relevant checks, open the app in desktop preview, summarise what
changed, tell me what you tested, and tell me what still needs human review.
```

Ticket size and reviewability are the same variable: a small ticket produces a diff you can
manage, a massive one *"you end up with a giant pile of changes that might look impressive, but,
you know, it's hard to really trust it"* [21:13]. The rule: *"Give Claude one clear ticket at a
time, which is one task, one finish line and one reviewable change."* [21:26]

The returned summary has four parts he reads off screen: what was tested, what it could not do
and why, and what actually needs human review.

---

## Step 4 — The eyes and desktop preview [22:15]

*"If you think about a good employee, they do the task and then they check the task."* [22:33]
They open the product, click the flow, run the tests, look for errors, check the console, and
ask whether this would actually work for the customer.

*"You build the thing, you run the thing, you use the thing, you test the thing, you improve the
thing."* [22:55]

Why visual inspection is not optional for product work — four failure modes that all pass a
test suite:

- *"A landing page can load and still feel really confusing."* [23:08]
- A form can submit and still be awkward.
- A button can be on the page and still be hard to notice.
- *"A headline can explain the product, but still miss the buyer's pain."* [23:19]

But the eyes are broader than the browser: run the test suite, check console logs, check network
errors, check whether the form actually files the submission.

### Prompt 7 — inspect from the buyer's point of view (reconstructed)

```
Start the app and inspect the waitlist flow. Open the landing page in desktop preview.
Check the experience from the perspective of a med spa owner seeing this for the first time,
then verify the implementation.

Tell me:
  - what the buyer understands in the first five seconds
  - what feels confusing or low trust
  - whether the waitlist form works
  - what happens after submission

Then make one focused pass to improve the highest-impact issue.
```

He narrates the run: Claude tests as a first-time visitor, submits empty first, confirms the
empty state works, renders the success state, verifies the backend wrote the record, checks
console and network for errors — four tools used.

The finding it returns is the best argument in the episode for this step, because no test would
have produced it: *"The page asks a cold MedSpa owner to hand over their email with no
reassurance about what the wait list is or whether they'll get spam."* [25:19] Its proposed
focused pass: add expectation-setting micro-copy at the CTA.

*"And it's amazing how few people actually use the eyes."* [25:51]

---

## Step 5 — Review in layers and the diff view [26:13]

*"Because once Claude can build things quickly, as you see, the bottleneck moves to the
judgment."* [26:24] Did it solve the right problem, change the right files, create a weird edge
case, make the product clear for the customer?

**Layer 1 — your own read.** *"The first layer is your own read."* [26:58] Open the diff view,
look at the files Claude touched, and ask: does this match the ticket? does this match the plan?
is there something surprising in here? *"And surprising changes is usually where the risk is."*
[27:26] His example: a ticket that said *waitlist form* and a diff that touches auth, routing
and databases is something he wants to know about immediately.

**Layer 2 — Claude against your written standard.**

### Prompt 8 — review against review.md (reconstructed)

```
Use review.md as the standard. Review the current changes for production issues, broken
edge cases and confusing user flows.

Separate the issues into: must-fix / should-fix / okay-to-ship.

Focus on bugs, user confusion, security risks, unnecessary complexity, files changed
outside the scope of the ticket, and anything that violates the roadmap.
```

*"So all that good work that we did with the review.md upfront is going to pay dividends."*
[28:27] The output comes back in the three buckets and offers to fix the first two. *"And I just
find this format of must, should, and okay to be super, super helpful."* [28:55]

**Depth is a choice, not a constant.** `/review` for ordinary code; *"But if you're doing really
risky stuff, you might want to do slash ultra review."* [29:09] — which launches a remote
review session, reserved for authentication, payments, anything going to production.

---

## Step 6 — The schedule and routines [29:34]

This is where he thinks the aha lands: up to here Claude only works while you sit with it.

**Start boring, deliberately.** *"I wouldn't start by asking Claude to ship production code
while I'm asleep."* [30:42] — *"I would start by just giving it a recurring operator task."*
[30:46] The class of work he means: someone has to look at customer notes, notice which issues
keep coming up, review open tasks. *"That kind of work is, you know, quote unquote, boring, not
glamorous."* [30:27] — and it is what keeps a company moving.

### Prompt 9 — the morning brief routine (reconstructed)

```
Every weekday morning at 7am: read /customers and /context, open GitHub issues if connected,
then create or update /context/morning-brief.md with:
  - the top customer pain point from the latest notes
  - one product risk
  - one recommended build task for today
  - one question I should ask customers today

Don't edit production code. Don't open a pull request. Keep it under 500 words.
```

*"I like this task as your first task because it's useful and controlled."* [31:51] It does not
change the product, does not touch production, does not build random features.

### Prompt 10 — the weekly ops review (reconstructed)

```
Every Friday at 3pm: review open issues and recent customer notes. Group related issues and
identify duplicates. Suggest the single highest-leverage fix for the week and post the summary
to /context/weekly-ops.md. Do not edit code.
```

*"And it's almost like a chief of staff that helps you do that."* [33:08]

### Prompt 11 — the pull-request hook, which closes the loop (reconstructed)

```
When a pull request opens, review it using review.md. Leave comments only on issues that could
create bugs, broken user flows, security problems or confusing behaviour. Then post a short
summary with what looks good, what needs attention, and whether this is ready for human review.
```

That is his definition of the night shift, and it is more modest than the phrase usually
implies: *"They mean that the work is going to continually get organized, the feedback's getting
summarized over time as it comes in, risks for the business are getting surfaced, and then what
you should be working on, the next set of tasks are getting clearer and clearer."* [34:16]
Note what is absent: nobody ships code overnight.

---

## Step 7 — Parallel agents and worktree isolation [34:32]

In Claude Desktop the code tab runs separate sessions, each with its own context and its own set
of changes; worktree isolation keeps those changes apart. *"Each session should feel like you're
handed one clear assignment to one person."* [35:28]

His three morning workstreams, chosen because they are **different kinds of job** — one
debugging, one product and copy, one sales enablement:

| Session | Job | Required handoff |
|---|---|---|
| Bug | onboarding redirect broken after email verification | root cause · files changed · checks run · what to look for in the diff |
| Product | landing page hero too vague for a med spa owner | before/after hero · customer language used · what changed in preview · why it is clearer |
| Sales | turn customer notes into a demo script | the objection handled · what to review before recording |

The three prompts follow one shape: name the job, name the context files to read first, bound
the scope, and specify the handoff. The sales one is explicit about source material — *"Use the
customer's actual language where possible"* — and about structure: the demo should show the
pain, the product moment, and the payoff.

The reason for splitting: *"You don't want a giant pile of AI work at the end of the day that
you have to untangle because that's not fun."* [37:12] — *"You basically want little packets of
work that the human being, you, can inspect, accept, revise, or reject."* [37:18] And the guard
against parallelism as an end in itself: *"The point is not to have AI spray work in every
direction."* [39:00]

---

## Step 8 — Permissions: safe, ask first, human-owned [39:14]

*"So permissions are really important because this is risky business."* [39:23] He thinks about
it as delegation, in three tiers:

| Tier | Actions |
|---|---|
| **Safe** | read files · inspect the codebase · propose plans · run local tests · edit a small feature branch · update docs · create a draft pull request |
| **Ask first** | install dependencies · change database migrations · touch authentication · change payment logic · delete files |
| **Human-owned** | production deploys · customer-data decisions · billing decisions · security-sensitive changes |

*"Even if you do have AI employees, that high-risk stuff, you still want to be with human
beings."* [40:23]

The tiers are not static. Start conservative, use plan mode for the bigger changes, use manual
review while you are learning the system, and let Claude move faster *"as the repo brain, the
review checklist, and task scopes get stronger and stronger"* [40:45]. *"That's the management
model."* [40:53] — *"You give the AI room to work."* [40:55] — *"And boundaries."* [40:57] The
alternative he rejects by name is YOLO mode: *"It's a bit too risky."* [41:05]

---

## Step 9 — Skills, connectors and hooks [41:15]

*"This is the part where Cloud Code stops feeling like this generic thing, and it starts feeling
like it belongs to your company."* [41:21]

**Skill** = a repeatable way of doing work. The test is mechanical: *"If you find yourself
typing the same prompt over and over again, chances are that should just be a skill."* [41:36]
Three he would build for this one product:

1. **Landing page teardown** — look at the page like a med spa owner, check the five-second
   clarity, find vague copy, look for missing trust signals, inspect the CTA, suggest one
   focused improvement.
2. **Customer notes** — *"I'd read latest calls or support notes and pull out the exact words
   that customers use, the repeated objections and the buying triggers."* [42:07] The reason:
   *"That's super, super useful because now Claude isn't just building from my opinion, right?"*
   [42:19] — *"It's building from customer language."* [42:24] Same skill feeds ad copy.
3. **Demo script** — latest product state plus customer notes into a short demo: the pain, the
   product moment, the payoff. *"That's the type of thing that's going to save you hours every
   single week."* [42:51]

**Connector** = better context: GitHub, Linear, Google Drive, Slack.

**Hook** = *"A hook are the guardrails around the work."* [43:34] After Claude edits code, run
formatting. Before a PR summary, run tests. Before a change ships, run the checks that matter.

*"So you've got skills that make the work repeatable. You've got connectors that give Claude
better context. And now you've got hooks that make the workflow safer."* [43:47] Combined with
roadmap, review standards, customer notes and routines: *"These are like power-ups for your
business."* [44:12] — *"And you can imagine that this is creating a kind of moat."* [44:17]

---

## The seven-day plan [44:28]

He is explicit that the unit is arbitrary — *"you can do this in seven hours"* [44:50], or 70
minutes, or seven days, or 31 days [44:55–44:57]; *"It depends how technical you are, how much
time you have."* [44:59]

| Day | Do | Output |
|---|---|---|
| 1 | Create the repo brain: CLAUDE.md, roadmap.md, review.md, /context, /customers | customer, problem, current goal, definition of done — written down |
| 2 | Run plan mode on one small product task; make Claude inspect the repo before editing | a plan, a file list, risks, verification steps |
| 3 | Build one visible improvement (waitlist form, pricing page, demo flow, onboarding bug) | *"small enough to review and real enough to show a real customer"* [45:48] |
| 4 | Use the preview loop: open the app, click the flow, check mobile, improve clarity | a clarity fix you can see |
| 5 | Review: open the diff view, read before/after, review against review.md, use the deeper review flow for a serious change | a must/should/okay list |
| 6 | *"On day six, you can actually send it to 10 people."* [46:16] Loom, demo or landing page | replies, filed into /customers |
| 7 | Create the first routine — the morning brief | a loop that runs without you |

*"Now you have this loop, it's alive, it's breathing, and you're starting each day with context,
feedback, and a next move."* [46:41]

**The closing loop, in his words** [46:55]: customer feedback goes into `/customers` · product
direction into `roadmap.md` · working style into `CLAUDE.md` · quality standards into
`review.md` · small tasks through plan mode · changes through preview and review · recurring
work becomes a scheduled routine.

---

## Where Otto already stands — measured, not assumed

Measured in `~/repos/assistant` on 2026-08-22.

| # | Piece | Otto | Verdict |
|---|---|---|---|
| 1 | Workspace | `profiles/ prompts/ state/ scripts/ tools/` | **have** |
| 2 | Memory | `MEMORY.md` + dated files + `learnings.md`, with a **byte cap and an eviction tool** | **ahead** — he has no eviction policy at all |
| 3 | Brief / plan mode | agent-tasks go straight to implementation | **gap, minor** |
| 4 | Ticket | agent-task YAML + GitHub issue, ≤3 open PRs/repo, 1 PR/repo/night | **have** |
| 5 | Eyes | `browse`, `handtest`, `extension-e2e`, screenshot tools exist | **have, under-used** |
| 6 | Review | `quality-gate` skill; **no `review.md`** | **partial** |
| 7 | Schedule | **44 routine lines**, 5 systemd timers, watchdog, second alert path over e-mail | **far ahead** |
| 8 | Permissions | MAY / MUST NOT written out in `profiles/assistant.md` | **have** |
| 9 | Skills / connectors / hooks | **118 skills**, Gmail/Drive/Calendar connectors, hooks | **have** |

`unit-health-check.py` exit 0 in the same minute — every declared unit healthy, so the schedule
row is a live measurement, not a paper claim.

### The two we do not have

**1. `/customers`.** He gives it a folder of its own, day 6 of 7 is sending it to ten people,
and day 7 files the replies back into it. Measured: `fingrab`, `invoicegrab`, `playlistgrab`,
`commentgrab`, `hostgrab` — **five of five have no `customers/`, no `feedback/`, no `reviews/`,
no `context/`.** Zero. And we are not short of customer language, only of a place to put it:
**16 written FinGrab store reviews** at 4.3★ (21.08.); a PlaylistGrab customer who cancelled
after **6 min 43 s** with reason `unused`, unread for **53 days**; the first InvoiceGrab buyer
on 20.08. Not one of them sits in a file an agent can read.

That is the 100-day retro's finding arriving from an unrelated direction. His plan puts talking
to customers on day 6 of 7. Ours puts it nowhere — no routine says *read what the buyers wrote*.

**2. `review.md`.** We have `quality-gate` (does it pass) but no file that says what good looks
like. Our quality bar lives as prose across `CLAUDE.md` and `profiles/assistant.md`, so every
reviewing agent re-derives it. The must-fix / should-fix / okay-to-ship split is worth taking on
its own — it is the difference between a review that blocks and a review that informs.

### Three smaller things worth taking

- **Out-of-scope belongs in the ticket.** He writes what is excluded this week and why. Our
  agent-tasks name the target; they rarely name the fence.
- **Split parallel sessions by kind of job**, not just by ticket — bug, copy, sales. We have
  worktree isolation; we do not routinely split that way.
- **Two review depths.** He reserves the deep remote review for auth, payments, production. We
  run one gate at one depth for everything.

### Where he is behind us

Worth saying plainly, because the episode is sponsored and reads as a maturity ladder. His
schedule piece is **two routines** and a PR hook. Ours is 44 routine lines, five timers, an
hourly watchdog, a mailbox-sweep staleness check and a **second alert path over e-mail for the
case where Telegram itself is the fault**. He has no answer to the case where an agent is blind
and does not know it — the exact failure this estate has been bitten by and has since
instrumented. His memory piece has no size limit; ours has a measured one because `MEMORY.md`
tore through its read cap in 16 hours.

---

## Relevance for Jens

**Two concrete moves, both cheap, both distribution-side:**

1. **Create `customers/` in the three selling repos and fill it from what already exists** — 16
   FinGrab reviews, the `unused` cancellation with its 6:43, the InvoiceGrab buyer. One session,
   and it converts dead evidence into something every future agent reads before writing a
   listing, an ad or a landing page.
2. **Write `review.md`** with the must-fix / should-fix / okay-to-ship split, and point
   `quality-gate` at it.

**The uncomfortable read:** this is a checklist we score 8/9 on, and the one we fail is the one
that touches customers. That is not a coincidence — it is the shape of the whole 100 days. The
pieces we built out furthest (schedule, memory, permissions) are the inward-facing ones; the
piece we never built is the one where a stranger's words come in.
