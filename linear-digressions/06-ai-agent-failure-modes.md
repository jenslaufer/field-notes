---
title: "AI Agent Failure Modes (The Agents Season, Episode 6)"
podcast: "Linear Digressions"
hosts: "Katie Malone (solo)"
source: "https://feeds.soundcloud.com/stream/2326598789-linear-digressions-ai-agent-failure-modes-the.mp3"
transcript: "~/.cache/podcast-transcripts/ld-06-failure-modes.txt (lokal transkribiert, 32:25, 437 Segmente)"
published: 2026-05-25
captured: 2026-06-13
rewritten: 2026-08-04
---

# AI Agent Failure Modes

> Two failure stories, not one. The first is **mathematical** — a property of any
> multi-step system, and it needs no bad model to bite. The second is
> **taxonomic** — named modes that recur across frameworks. The episode ends
> somewhere the headline numbers don't: the benchmark that looks solved (94%) and
> the one that looks hopeless (12%) are the same models on different task shapes.

## Core message

*"In this episode, we're going to talk about two distinct things going on when
agents fail. The first is mathematical. It's a property of any multi-step
system … But there's a second type of failure or aspect of failure that we're
going to talk about, which is taxonomic."*

## 1. The math: reliability per step is not reliability

Take 90% per step — *"quite good. Maybe even a little bit optimistic for most real
tasks."* Assume independence:

| Steps | 90%/step | 99%/step |
|---|---|---|
| 10 | **~35%** | — |
| 100 | *"essentially at 0 and it rounds to 0"* | **36.6%** |

*"You need 4 nines of reliability, 99.99% per step to get above 90% end to end on
100 step task."*

**The objection she raises against herself** — can't a later error cancel an
earlier one? *"Sometimes that can happen. But the more important dynamic is that
when the agent starts to make mistakes, it's changing the state of the world that
subsequent steps operate on."* A mistake at step three means the agent is
*"reasoning from a … corrupted state at step four, at step five at step six"* —
and *"the agent often doesn't know that it's propagating some mistake that it made
earlier on. It doesn't have like a ground truth to compare it against."*

**Why this is new if you came from chatbots:** with a chatbot, *"if it starts to
wander off, you can catch that right away."* With an agent that changed the world,
*"the problem might actually stay under the surface. It doesn't actually become
visible until you're 10 steps down the road and it's going to be really difficult
to trace back to the original mistake."*

## 2. pass^k — the metric that measures reliability, not capability

τ-bench (tool-agent-user, Shen Yu Yao) simulates retail and airline customer
service: returning a purchase, changing a reservation, with API tools and policy
documents. Its contribution is **pass^k**: repeat the same task k times and ask
whether it succeeded *every* time.

- 2024 launch, GPT-4o-class: base success *"less than 50% of the time"*; retail
  **pass^8 below 25%**.
- Today: *"the most performant models are now at 60, 70% or so."*
- Read honestly: *"the most performant models are failing a third or even more of
  the time at realistic customer service tasks. And that's even before you account
  for consistency. The pass at K numbers are even lower."*

## 3. The two coding numbers that are both true

- **SWE-bench Verified:** Claude II in 2023 *"resolved less than 2% of the
  issues"* → late 2024 crossing 50% → early 2026 above 80%, most recent found
  *"about 94%."*
- **SWE-bench Mobile** (industry-level mobile app work, not isolated bug fixes):
  *"even the best configuration still achieve only about 12% success rate."*

*"You're using the same … models on a this harder and more realistic task. You're
getting a dramatically different result. 12% versus 94%."*

**The scaffold spread — the single most actionable number in the episode:** the
same LLM *"can show up to a sixfold performance difference depending on the agent
scaffolding around it."* Therefore: *"When you see a benchmark number … you're not
seeing a raw model capability number. You are seeing the model plus the specific
agent design around it plus a specific set of tools plus a specific evaluation
setup."*

And the limit of the whole comparison, stated rather than glossed: *"Most human
developers do much more than resolve GitHub issues with a fixed context window.
They're navigating ambiguous requirements, they're talking to other people …
they're noticing with something feels weird and fixing it before becomes a bug."*

## 4. MAST — the taxonomy

UC Berkeley, 2025. Method: *"more than 1,600 execution traces across seven popular
agent frameworks"* given to *"six expert humans who annotated them"* until they
agreed. Result: **14 failure modes in 3 categories**.

1. **Specification and system design** — disobeying the task spec, repeating
   completed steps, unbreakable loops, losing conversation history to compaction.
   *"The agents were set up wrong, the task was specified ambiguously, context
   management was inadequate."*
2. **Inter-agent misalignment** — handoff output the next agent can't parse, two
   agents reaching contradictory conclusions with no resolution, subagents
   drifting apart on an ambiguous orchestrator instruction. *"You're not going to
   get these sorts of failures when you just have the single agent working alone."*
3. **Task verification and termination** — *"the agent doesn't know when it's done
   or it thinks it's done, when it isn't, produces an output that looks like
   completion but it doesn't actually satisfy the task"* — or overshoots and keeps
   generating work nobody asked for.

**The counterintuitive finding:** *"sometimes the multi-agent systems are doing
worse than the single agent systems that are working alone on the same tasks."*
Mechanism, not mystery — multi-agent buys you specialisation and pays for it with
category 2, which single agents simply don't have. Her formulation: *"the benefits
of coordination, they don't come for free, and many multi-agent systems in
practice are paying coordination costs, and they are not necessarily all getting
coordination benefits."*

Note the hedge she keeps: *"at least for what they were looking at"* and *"that
doesn't necessarily mean that multi-agent systems are always worse."*

## 5. Why the internet disagrees with itself

The closing reflection, and the part show notes tend to drop. Two camps in the
same thread: *"AI agents have changed my life"* vs. *"these AI agents are garbage
… they just create this AI slop and I have to clean it all up and it's even worse
than if I did it myself."* Her reading is not that one camp is wrong:

*"There's a story here about also, like us as users getting more adept at
identifying the types of tasks that agents are more capable at executing
consistently or sizing our tasks or scoping our tasks so that the AI agents are
more likely to be successful in them."*

And she puts herself in it: *"When I'm having a really good experience with using
AI agents, it's largely a reflection … on what I have learned about how to prompt
it, how to pick out the assignment in the first place."* Conclusion: *"maybe as
their users are evolving and learning alongside them."*

## Relevance here

**The scaffold number reframes the model debate.** A sixfold spread from scaffold
alone is larger than any gap between the models in `state/model.conf`. Picking
opus over sonnet is a smaller lever than the harness — the agent-task YAML, the
quality gate, the guards. Effort belongs there.

**Category 3 already has a live instance in this shop.** *"Produces an output that
looks like completion but it doesn't actually satisfy the task"* is exactly the
agent that committed 3 of 8 files and reported done. The partial-commit guard
(check every touched file is staged) is a category-3 termination check, built
before the taxonomy named it. Worth asking what the other 13 modes would name.

**pass^1 is the only number ever counted here.** 72 merged PRs in July is a
pass@1-style tally: it counts attempts that worked, never how often the *same
task shape* works every time. The measurable version is the YAML→merged-PR ratio
(see episode 10's $5.85/attempt vs. $7.80/successful patch) — a denominator that
has never been recorded.

**Second independent argument for one strong agent per task.** Episode 8 gave the
first. Fabrik sits in the good regime because workers never talk to each other —
category 2 cannot occur. That is a design property to defend, not an accident.

**The 12%/94% split is a scoping instruction.** Narrow, verifiable, ticket-shaped
work is where the numbers hold; ambiguous multi-surface work is where they
collapse. That is an argument for tighter specs — the 5-minute code-grep on spec
terms before `fabrik-ready` is exactly the "sizing our tasks" move she credits for
her own good experience.
