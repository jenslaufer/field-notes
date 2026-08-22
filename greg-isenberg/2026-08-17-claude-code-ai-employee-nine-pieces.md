---
title: "How to use Claude Code better than 99% of People"
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg"
guest: null
source: "https://www.youtube.com/watch?v=SkY-tR9kf-k"
published: 2026-08-17
captured: 2026-08-22
duration: "48:10"
transcript: "official publisher transcript from the audio feed (flightcast VTT, 7,935 words, timestamped — full episode)"
related: "2026-08-19-skills-plugins-team-distribution-remy.md, 2026-08-21-grok-bot-agent-team-newsletter-billy-howell.md, 2026-08-12-ai-agent-workforce-allie-k-miller.md, 2026-02-23-obsidian-claude-code-personal-os.md"
---

# How to use Claude Code better than 99% of People

> Solo episode, sponsored by Anthropic. Greg builds one metaphor for 48 minutes: **give Claude
> the nine things you would give a person joining your company.** Workspace, memory, brief,
> ticket, eyes, review, schedule, permissions, skills — set up live around a real idea, with
> every prompt read out. It closes with a seven-day plan.
>
> **Why this note is short on the how-to and long on the gap:** Otto already is this. Eight of
> his nine pieces have been running here for months, several further than his version. The
> useful part of the episode is therefore not the recipe — it is the **two pieces we do not
> have**, and one of them is the 100-day lesson in his vocabulary.

**Source note:** written from the **publisher's own transcript**, not from the show notes and
not from kome.ai. The audio feed (`rss2.flightcast.com`) carries a `<podcast:transcript>` tag
per episode pointing at a timestamped VTT — better than the YouTube path, because it is
Greg's own file and every quote below carries its `[MM:SS]`.

**Two title warnings.** The same video is titled **"Claude Code New Features, Explained"**
on YouTube right now — the channel A/B-tests titles, so the stable identifier is the
`videoId` (`SkY-tR9kf-k`), never the title. And the **"99%" is never said in the episode**;
it is the publisher's title, not a claim Greg makes. Identity confirmed three ways: audio-feed
title, date 2026-08-17, and length 2,890 s matching YouTube's `lengthSeconds` exactly.

**The ASR garbles the product name throughout**: "Cloud Code", "Claw", "cloud.md",
"CloudCode" all mean *Claude Code* / `CLAUDE.md`. Quotes below are left **verbatim**,
garbles included, rather than smoothed — smoothing a quote is exactly the failure
`verify-quotes.py` exists to catch. Read "Cloud" as "Claude".

---

## The nine pieces, in his order

| # | Piece | What it is | His one-line rule |
|---|---|---|---|
| 1 | Workspace | the repo — where the product and files live | — |
| 2 | Memory | context: what you build, who the customer is, what matters now | *"Claude gets just way more useful when the project explains itself."* [07:55] |
| 3 | Brief | plan mode — read context, propose an approach, **wait** | *"measure twice, cut once"* [18:06] |
| 4 | Ticket | one small assignment with a visible finish line | *"one task, one finish line and one reviewable change"* [21:26] |
| 5 | Eyes | open the app, click the flow, check console, report what a buyer experiences | *"they do the task and then they check the task"* [22:33] |
| 6 | Review | diff view first, then Claude against your written standard | *"the bottleneck moves to the judgment"* [26:24] |
| 7 | Schedule | recurring work — Claude calls these routines | *"I wouldn't start by asking Claude to ship production code while I'm asleep."* [30:42] |
| 8 | Permissions | safe / ask-first / human-owned | *"You give the AI room to work."* [40:55] |
| 9 | Skills, connectors, hooks | repeatable work, better context, guardrails | *"If you find yourself typing the same prompt over and over again, chances are that should just be a skill."* [41:36] |

His repo layout: `/app` `/context` `/customers` `/specs` `/demos` `/routines`, plus three root
files — `CLAUDE.md` (how to work), `roadmap.md` (what matters now), `review.md` (how to judge
work before it ships).

---

## Where Otto already stands — measured, not assumed

Measured in `~/repos/assistant` on 2026-08-22.

| # | Piece | Otto | Verdict |
|---|---|---|---|
| 1 | Workspace | `profiles/ prompts/ state/ scripts/ tools/` | **have** |
| 2 | Memory | `MEMORY.md` + dated files + `learnings.md`, with a **byte cap and an eviction tool** (`memory-evict.py`) | **ahead** — he has no eviction policy at all |
| 3 | Brief / plan mode | agent-tasks go straight to implementation | **gap, minor** |
| 4 | Ticket | agent-task YAML + GitHub issue, ≤3 open PRs/repo, 1 PR/repo/night | **have** |
| 5 | Eyes | `browse`, `handtest`, `extension-e2e`, screenshot tools exist | **have, under-used** |
| 6 | Review | `quality-gate` skill; **no `review.md`** | **partial** |
| 7 | Schedule | **44 routine lines**, 5 systemd timers, watchdog, second alert path over e-mail | **far ahead** — his two routines against our watched estate |
| 8 | Permissions | MAY / MUST NOT written out in `profiles/assistant.md` | **have** |
| 9 | Skills / connectors / hooks | **118 skills**, Gmail/Drive/Calendar connectors, hooks | **have** |

`unit-health-check.py` exit 0 in the same minute — every declared unit healthy, so the
schedule row is a live measurement, not a paper claim.

---

## The two things we do not have

### 1. `/customers` — and this is the 100-day lesson wearing his words

He gives it a folder of its own, day 6 of 7 is *"you can actually send it to 10 people"*
[46:16] and day 7 puts the replies back into it. His `customer notes` skill exists to
*"pull out the exact words that customers use, the repeated objections and the buying
triggers"* [42:07], so that — his sentence — *"Claude isn't just building from my opinion"*
[42:19].

**Measured:** `fingrab`, `invoicegrab`, `playlistgrab`, `commentgrab`, `hostgrab` — **five of
five have no `customers/`, no `feedback/`, no `reviews/`, no `context/`.** Zero.

And we are not short of customer language. We are short of a place to put it:

- **FinGrab: 16 written store reviews**, 4.3★ (measured 21.08.).
- **PlaylistGrab:** a customer who cancelled after **6 min 43 s** with reason `unused` — the
  sharpest sentence FinGrab's category has ever produced about its own first use, and it sat
  **53 days** unread.
- **InvoiceGrab:** first paying customer 20.08.
- Every one of these is a real buyer's own words, and **not one of them is in a file an agent
  can read.**

That is the same finding the 100-day retro produced ("distribution beats artifact N+1"),
arriving from an unrelated direction. Greg's seven-day plan puts talking to customers on day
6 of 7. Ours puts it nowhere — there is no step in any routine that says *read what the
buyers wrote*.

### 2. `review.md` — a written standard, not prose in a head

We have `quality-gate` (does it pass) but no file that says **what good looks like**. His
prompt is the whole idea: *"use review.md as the standard"* and sort findings into
must-fix / should-fix / okay-to-ship [28:01]. Our quality bar lives as prose across
`CLAUDE.md` and `profiles/assistant.md`, which means every reviewing agent re-derives it.
The must/should/okay split is worth stealing on its own — it is the difference between a
review that blocks and a review that informs.

---

## Three smaller things worth taking

- **Out-of-scope belongs in the roadmap.** He writes what is *excluded* this week (payments,
  CRM, admin dashboards, multi-user) and says why: *"I want it to basically cook on the
  MVP."* [13:03] Our agent-tasks name the target; they rarely name the fence.
- **Parallel sessions = separate packets, not a pile.** *"You don't want a giant pile of AI
  work at the end of the day that you have to untangle"* [37:12] — one session per job, with
  worktree isolation. We have worktree isolation; we do not routinely split by *kind of job*
  (bug / copy / sales) the way he does.
- **`/ultra review` for the risky changes.** He reserves it for auth, payments, production
  [29:09]. We run one gate at one depth for everything.

## Where he is behind us

Worth saying plainly, because the episode is sponsored and reads as a maturity ladder:
his schedule piece is **two routines** (a morning brief and a Friday ops review) and a PR
hook. Ours is 44 routine lines, five timers, an hourly watchdog, a mailbox-sweep staleness
check and a **second alert path over e-mail for the case where Telegram itself is the
fault**. He has no answer to the case where an agent is blind and does not know it — the exact
failure this estate has been bitten by and has since instrumented. His memory piece has no
size limit; ours has a measured one because `MEMORY.md` tore through its read cap in 16 hours.

## Relevance for Jens

**Two concrete moves, both cheap, both distribution-side:**

1. **Create `customers/` in the three selling repos and fill it from what already exists** —
   16 FinGrab reviews, the `unused` cancellation with its 6:43, the InvoiceGrab buyer. That
   is a one-session job and it converts dead evidence into something every future agent reads
   before writing a listing, an ad or a landing page. It is also the cheapest possible answer
   to the standing complaint that our copy is written from our opinion.
2. **Write `review.md`** with the must-fix / should-fix / okay-to-ship split, and point
   `quality-gate` at it.

**The uncomfortable read:** this episode is a checklist we would score 8/9 on, and the one we
fail is the one that touches customers. That is not a coincidence — it is the shape of the
whole 100 days. The pieces we built out furthest (schedule, memory, permissions) are the
inward-facing ones; the piece we never built is the one where a stranger's words come in.
