---
title: "Many Agents, Many Problems"
podcast: "Linear Digressions"
season: "2 — The Agents Season, episode 8"
hosts: "Katie Malone (solo)"
source: "https://feeds.soundcloud.com/stream/2334937361-linear-digressions-many-agents-many-problems-the.mp3"
published: 2026-06-08
captured: 2026-06-13
rewritten: 2026-08-04
duration: "~28:15 (last transcript segment 28:15)"
transcript: "local (faster-whisper base.en, assistant tools/podcast-transcribe.py)"
---

# Many Agents, Many Problems

> *"Just throwing more agents at the problem doesn't mean you're building a better system.
> It runs into the same core problem as building a team of humans."*

**Source note:** rewritten 2026-08-04 from a **full local transcription of the audio**.
Unlike episodes 9, 10 and 11, the show-notes version of this file was substantially
**correct** — the published description for this episode was detailed, and the audio
confirmed the two papers, all three "laws", the 45 % threshold and both swing figures. What
the rewrite adds is the verbatim argument, the framing Katie builds the episode on, her own
caveat about the age of the evidence, and a relevance section, which the file did not have.
**One correction:** the front matter named "Katie Malone & Ben Jaffe"; this is Katie solo.

Corrected ASR slip: *"prompt engineer your **weight** out of"* → *way* out of.

Verbal slip worth flagging, because it inverts her meaning: at 23:33 she says *"So the point
is that the multi-agent is bad"* — from the surrounding sentences she plainly means *the
point is **not** that multi-agent is bad*, and continues *"it's that it requires matching the
architecture to the task."*

## The framing: you already know this failure mode

She opens not with agents but with the listener:

> *"Sometimes I can be really effective alone and sometimes I can be really effective with a
> team, but also I can be distracted and not very effective and procrastinate and have all
> kinds of failure modes when I'm working alone. And I can also have all kinds of pathologies
> when I'm working with other people, where **the challenge of us collaborating with each
> other is offsetting any of the gains** that we might have from having multiple minds working
> together."*

Then the pivot: agents scale out for the same reason humans do, and hit team failure modes
for the same reason. The whole episode is that analogy taken seriously rather than
decoratively.

The system under examination: an orchestrator takes a research task and spins up a web-search
agent, a summarization agent, a fact-checking agent, passing results around until the
orchestrator synthesizes an answer. *"This looks super cool and it is, but the question that
we're going to dig pretty deeply into today is: does something with this level of complexity
and sophistication actually work better than **one good agent** doing the whole thing?"*

## Paper 1 — The Collaboration Gap (Davidson et al., Microsoft Research / EPFL, 2025)

The prior question, before scaling: *"Can an agent coordinate with another agent that they've
never worked with before, the way that humans do?"* — not a scripted, pre-wired workflow.

**Setup.** Two agents, one maze each, half the cells hidden, **the two copies
complementary** — put them together and you have the full maze, so neither can solve it
alone. **No prescribed format**: they may describe the maze however they like. 32 models,
tested solo and in pairs.

**Result:** models that solve the maze well solo *"often fail pretty substantially when
they're required to collaborate. And the failure, moreover, is not like a small failure
sometimes. It can be dramatic. **It can just fall off a cliff.**"*

**Why.** Two humans would converge on a grid within a minute — *"I'm on the third row from
the bottom, I'm in the fifth column over and there's a wall on my right"* — and then build on
it. The agents don't:

> *"One of them might be using directions like left and right and up and down. One of them
> might be using coordinates like East and West and North and South. One of them might start
> counting from the upper left hand corner … One of them might be starting from the center …
> They're talking about the same task, but they're not using the same representation. And so
> they're spending all of this conversation time, all of this back and forth, just trying to
> figure out each other's representation and **going in circles** … And they're not actually
> solving the maze when they do this."*

**The finding she says she did not expect — distilled models collapse hardest.**

> *"When you're distilling the model, that process is maintaining the ability for the model to
> produce correct answers. … But what it's not necessarily optimizing for is producing models
> that after the distillation process are any good at **explaining their reasoning in a way
> another agent can build on**. So they're geniuses at coming up with the correct answer, but
> they're doing a particularly poor job at communicating and explaining to one another."*

**Thesis:** collaboration is *"a separate and distinct capability from just raw task
capability or raw intelligence."* Her human version: *"we have all worked with people who are
really brilliant and terrible at explaining their reasoning."* And the hard part —
*"this isn't a problem that you can prompt engineer your way out of."*

**The partial fix, "relay inference".** Pair a strong agent with a weak one and let the strong
one go first, laying down the shared representation (*"I'm just going to lay down the rules of
communication in this conversation"*); the weaker one follows. It closed most of the gap. Her
caveat is the important half:

> *"This isn't two partners that are collaborating with each other as equals. … **You're not
> really getting teamwork. You're getting leader and follower.**"*

## Paper 2 — Scaling laws of multi-agent systems (Google DeepMind / MIT, late 2024)

Granting that collaboration works: when does adding agents actually help? **180
configurations, 4 benchmarks, 3 model families.** Three patterns that behave almost like
laws.

**Law 1 — tool use kills multi-agent value.** On tool-heavy tasks (browsing, API calls,
retrieval), coordination overhead dominates, because *"every time there's a message between
those agents, it's consuming some of the budget that it has for reasoning."* The agents *"end
up spending most of their energy coordinating instead of actually doing the task."* Here a
single well-equipped agent *"almost always wins."*

**Law 2 — the 45 % threshold.**

> *"Once you have a single agent that can solve a task about **45 % of the time on its own**,
> adding more agents past that point stops helping and it starts hurting."*

Below it, parallel explorers raise the chance that at least one succeeds. Above it,
coordination cost exceeds the benefit. She is careful about its status: *"not a law that you
can derive from first principles … it's more of an empirical finding."* Her analogy: stuck on
hard maths homework, a study group helps; already the strongest student in the class, *"having
five people all in there trying different stuff and second guessing each other's approaches
and trying to figure out who's right, that can actually slow you down."*

**Law 3 — topology amplifies errors.** In a hierarchy, a sub-agent's mistake passed back up
*"can corrupt the entire task"*, and *"sometimes you have subagents with subagents with
subagents"* — worse with every layer. Flat topologies fail differently but also fail. The
general point:

> *"All of the multi-agent topologies that they study … have error amplification risks, and
> those risks simply **don't exist with a single agent**, because there is no way with a
> single agent of having an error for one part of the system propagate to another."*

**The swing, same researchers, same models, only the task structure changed:**

| Task structure | Effect of multi-agent |
|---|---|
| Parallelizable (independent sub-tasks; their case was financial analysis) | **+80 %** performance |
| Sequential planning (step B depends on A, C on B) | **−70 %** performance |

## The synthesis — the fix for paper 1 is the failure case of paper 2

This is the sharpest move in the episode, and it is easy to miss. Relay inference — strong
agent sets the terms, weak agent follows — *"is really similar in some ways to a **sequential
pipeline**, where you would have a strong agent that does step one, and then it has a handoff
to a weaker agent for step two."* And sequential pipelines are

> *"exactly one of the cases where the scaling law paper says those can be some of the most
> fragile and most prone to error amplification, when you have errors in one step that can be
> handed off to the next step, and then just propagate all the way through the system."*

So the partial solution to the collaboration problem lands directly in the structural problem.

**Where it leaves her:**

> *"The closer a multi-agent system looks like a well-equipped single agent — and by that I
> mean you have a model with good tools working alone — the closer you get to something that
> looks like that, the better it tends to perform."*

Multi-agent keeps a real place: genuinely parallelizable tasks, tasks below the 45 %
threshold, tasks where independent explorers help. *"But that's kind of a narrower use case
than the hype suggests."*

**Her own caveat on the evidence, which the show notes omit:** both papers are from 2024 and
2025, and she says she will keep watching for updates *"as agent systems become more
sophisticated, as models become better."* Treat the 45 % number as a dated empirical marker,
not a constant.

**The smell test:**

> *"Just because there's a system that says it has a bunch of agents and they're all
> orchestrated … and there's a diagram on a slide and it's got 70 boxes on it and they all
> have arrows pointing to each other — **this is the time when your detectors should be going
> off** … A question to ask yourself is: **if you had one really good agent with the right
> tools, could it do this?**"*

And the season-arc conclusion: *"delegation of a task to a team of AIs is not obviously better
than delegation to one good one. And in many cases, it's worse."*

## Relevance for Jens

**Genre: architecture verdict on this operation, with three of the paper's regimes testable
against what already runs here.** No money thread — the payoff is avoided work, not new
revenue.

**1. The three "single agent wins" regimes all describe an agent-task YAML — so the current
architecture is already the recommended one.** Take a typical task: it is **tool-heavy** (git,
test runner, gh, file edits — Law 1), it is **strictly sequential** (write the failing test →
implement → quality gate → PR; step B depends on A — the −70 % case), and its **solo success
rate is far above 45 %** (July: 72 merged non-Dependabot PRs — Law 2). Three independent
criteria, all pointing the same way: **one strong agent with good tools per task.** That is
exactly what a YAML is. The practical consequence is a *non*-action: the recurring temptation
to build an orchestrator that splits a ticket across specialist agents would move this setup
from the regime where it wins into the regime where the research measures −70 %. **Written
down so it does not get rebuilt in six weeks.**

**2. Fabrik is in the good regime, and for a structural reason worth protecting.** Workers
pull *whole issues* independently and work them end to end — independent sub-tasks, no
inter-agent messaging, no shared representation to negotiate. That is the +80 % column. The
property doing the work is not the number of workers but that **they never have to talk to
each other.** Any future feature that makes workers coordinate on a shared ticket trades the
good regime for the bad one.

**3. The relay warning has a specific address here: model escalation.** The house rule is
cheap model for routine, Opus for the hard parts, with sonnet→opus escalation once a task
touches several files. Whenever that becomes "weak model does step one, strong model picks up
step two" (my phrasing, not hers — and note it runs the *opposite* direction to the paper's
relay, where the strong agent leads), it is the same sequential-pipeline shape — which this episode identifies as a sequential
pipeline, the most error-amplifying topology, because step one's mistakes are inherited rather
than caught. **Escalation should re-do the step, not continue from it.** Deciding the model
before the work starts, rather than handing a half-finished chain upward, is the cheaper and
safer form.

**4. The distilled-model finding compounds a risk already logged.** The LiteLLM fallback chain
is `smart → cloud-oss → simple`, and the bottom two rungs are small/distilled models. The
distillation episode already established that distilled students are trained on the **mode**,
so creativity sits in the edges that get shaved off. This paper adds a second, independent
penalty: distilled models are *"the models that showed some of the most dramatic collapse"*
specifically at **collaborating** — good answers, poor explanations. Consequence for this
setup: a fallback to `simple` degrades a solo task somewhat, but degrades anything involving a
**handoff** — subagent reports, YAML prompts written for another agent to execute, PR
descriptions meant to be read by the next agent — **disproportionately**. If the top of the
chain ever disappears (and episode 10 documents that happening within days by government
directive), the first thing to give up is fan-out, not depth.

## Newsletter teaser

A paper horse-racing two ways to resolve disagreement between agents — **debate** (each tries
to convince the other) versus **voting** — for multi-agent LLMs. She deliberately does not
spoil the result; the link is in the newsletter.

## Links

- The Collaboration Gap — Davidson et al., Microsoft Research / EPFL, 2025
- Scaling laws of multi-agent systems — Google DeepMind / MIT, late 2024
- Newsletter — substack.com/linear-digressions
- Next: [`09-agent-trust-oversight-and-control.md`](09-agent-trust-oversight-and-control.md)
- Previous: [`07-how-do-you-evaluate-an-ai-agent.md`](07-how-do-you-evaluate-an-ai-agent.md)
- Related: [`2026-07-27-distillation-how-to-steal-a-model.md`](2026-07-27-distillation-how-to-steal-a-model.md)
  — the mechanism behind the distilled-model collapse described here
