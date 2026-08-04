---
title: "Agentic Planning (The Agents Season, Episode 5)"
podcast: "Linear Digressions"
hosts: "Katie Malone (solo)"
source: "https://feeds.soundcloud.com/stream/2322083060-linear-digressions-agentic-planning-the.mp3"
transcript: "~/.cache/podcast-transcripts/ld-05-agentic-planning.txt (lokal transkribiert, 23:46, 523 Segmente)"
published: 2026-05-18
captured: 2026-06-13
rewritten: 2026-08-04
---

# Agentic Planning

> Planning is **search**, not smarter linear reasoning — and the same GPT-4 goes
> from 4% to 74% on a puzzle without a single weight changing. But the episode
> spends its second half taking that number back down: the benchmark was unusually
> friendly, the technique is expensive enough to be rare in production, and the
> open question isn't *can* an agent plan but *when is it worth paying for*.

## Core message

*"Memory is about what the agent can access. Planning is more about what the agent
can do with it, whether it just reacts to what's immediately in front of it or
whether it can model a path forward, explore different routes, and then as it's
going evaluate whether it's on the right track or if it needs to backtrack and
pursue a different strategy."*

Most agents are not planning. From the think-act-observe loop of episode 1 *"you
might deduce pretty accurately that most agents most of the time are doing
something that's closer to reaction than to planning."*

## The headline result

**Tree of Thoughts** (2023), *"researchers at Princeton and Google DeepMind"*. One
of them is **Shunyu Yao** — *"this is the second time that we've mentioned him in
this series on agents. It won't be the last."* (He returns in episode 6 as the
author of τ-bench.)

The **Game of 24**: given `4, 9, 10, 13`, use each exactly once with `+ − × ÷` to
make 24. Solution given in the episode: `(10 − 4) × (13 − 9)` = `6 × 4`.

Same GPT-4, three strategies:

| Strategy | Solved |
|---|---|
| Standard prompting | *"about 7%"* (paper: 7.3%) |
| Chain-of-thought | **4%** — worse |
| Tree of Thoughts | **74%** |

*"So we went from 4% in the worst case to 74% with the same underlying model,
which of course is stunning … This is not a better model working. It is a
different way of thinking that is imposed on top of the same model."*

Why the puzzle is a good benchmark: *"it requires a genuine combinatorial search in
order to solve. You're not gonna be able to just pattern match or predict the next
token in the sequence and get the right answer on a problem like this."*

## Why chain-of-thought does *worse* than no reasoning

Chain-of-thought externalises the reasoning trace, and that helps — *"It's kind of
like being able to write out your intermediate steps to a math problem … The steps
are constraining each other."*

Its structural limit: *"It's just this single path through the search space."* The
model commits early, and *"if it starts taking a wrong turn early on or it wanders
off course, it can be quite difficult for it to recover. It just keeps reasoning
fluently in that wrong direction."* There is *"no explicit mechanism"* to notice
it, *"no backtracking, there's no evaluation of different alternatives."*

The failure mode has a name in this house: it *"ends up being really confident,
even if it's wrong."*

So for combinatorial problems *"where the right answer isn't necessarily on the
most plausible path"*, chain-of-thought is *"fundamentally just the wrong way to
solve them."*

## The tree

At each step, generate several candidate next-steps instead of one; the model
**evaluates** each branch, *"which one looks more promising, which one are clearly
dead ends"*; it then prunes, goes deeper on what looks good, *"or it can also
backtrack to an earlier node and try something different."*

*"And this is what deliberate planning looks like. It's not just what should I be
doing next, but it's like, what are my different options? If I think down the road
a little ways, where do I wanna end up? How do I get there?"*

### Two ancestors the show notes leave out

- **Kahneman**, *Thinking Fast and Slow*: chain-of-thought is *"closer to system
  two than raw generation"*, but *"Tree of Thoughts is a genuine attempt at system
  two reasoning on top of an LLM"* — and system two is the kind Kahneman
  *"associated with solving hard problems."*
- **Newell and Simon, 1950s**: the notion of a **problem space**, *"this graph of
  possible states"*, searched as *"the fundamental model of cognition."* They were
  *"describing human problem solving in symbolic terms decades before neural
  networks existed"*, and the paper calls back to it explicitly. What is new is
  only the evaluator: a language model scoring the options.

### The objection she raises against herself

Can a model judge its own candidates? *"You might think that a model evaluating its
own search options is kind of like self-blind in a way … there's a circularity to
that."*

Empirically it works, and the reason generalises: *"evaluation seems to be an
easier task in some ways than generation … it's easier to judge whether a partial
solution is on the right track than to generate the right next step from scratch."*
Same asymmetry as checking a Game-of-24 answer versus finding one.

## The hedge that gets dropped everywhere else

The 74% is **not** a general result, and she says so:

*"The game of 24 also helps you a little bit with the intuition of how this works …
the task structure makes that searching and evaluation task tractable."*
Intermediate states are literal sub-equations you can evaluate mathematically and
prune immediately. *"The evaluation isn't just this guess and check, there's this
real signal as you're starting to traverse the search space. And that's partly why
the results are so dramatic for that particular task."*

Read that as the boundary condition: **tree search pays where partial solutions can
be scored cheaply and honestly.** Where the score is itself a guess, the tree
multiplies cost without multiplying signal.

## The cost, and why you rarely meet this in production

*"The biggest one is that tree of thoughts is expensive. It's not prohibitively so,
but it's expensive enough that it changes the calculation for real systems."* Each
step is *"multiple calls to the LLM, multiple different paths"* across multiple
steps — *"and so that combinatorially explodes on you."*

Hence: *"For most tasks, chain of thought is good enough."* Tree of thought is
*"overkill"* on straightforward linear work — her example is *"you need to read a
file, you need to summarize it, then you need to write an email, then you need to
send the email."* It is worth it *"only when there's this genuine combinatorial
structure"*, with wrong paths *"that are hard to distinguish from the right ones
early on."*

**The open research question is the triage, not the technique:** *"identifying
upfront when you have one of those combinatorial problems versus one that's where
the cheaper reactive loop is gonna be just fine."*

Two shapes currently in use: start with chain-of-thought, *"detecting when you're
starting to get stuck, and then escalating up to the tree search"*; or a planning
step up front, *"called by default for certain task types."*

### Where reasoning models sit

For *"the most capable reasoning models, like the O series for OpenAI or the
extended thinking modes in Claud"*, the behaviour is *"kind of similar to Tree of
Thoughts in some way, but it's not being prompted or imposed upon the model, like
it's something the models have learned natively."* So there is *"this boundary
between clever prompting and learned planning"* … *"that is getting blurry"* — and
what Tree of Thoughts
proved is that *"there's this underlying capability in the LLM"* at all.

## What this says about delegation

*"When you delegate a task to a human, you're gonna expect that human to be able to
handle unexpected forks in the road"* — to notice plan A isn't working, try
something else, and come back to you *"only when they're genuinely stuck."*

*"An agent that can only follow the most plausible next step, that can only handle
straightforward tasks well."* One that can search and backtrack *"can navigate
tasks with genuine uncertainty with much more capability without having to
necessarily escalate back to you on the very first thing that gets stuck."*

So the **complexity of what you can hand over scales with planning**, not with raw
model quality: *"it starts to scale as they become better planners."*

## The diagnostic worth keeping

*"When you might be disappointed by the capability of an agent in real life … there's
a decent chance that it's not because the agent is underpowered with respect to
planning at the fundamental LLM level. There's a decent chance it's because … it's
in more of a reactive mode when what it kind of needs … probably related to cost —
is planning this closer to search or tree of thoughts."*

## Relevance here — a concept card, no money thread

Declared as such: this changes how tasks are *specified*, it does not touch a
paying customer.

- **Our agent-task YAMLs have exactly one planning lever, and it is the model
  field.** When greenfield calculators came back as no-diff four times out of four,
  the fix was `model: claude-opus-4-7`, `effort: high` — and it worked. This episode
  names the second lever we have never pulled: the *shape* of the instruction.
  A YAML that says "implement X, tests first" is a chain-of-thought instrument. It
  asks for one path.
- **The triage question is ours too.** Most YAMLs really are linear — read a file,
  write tests, implement, run them. Her own overkill example is nearly a
  description of them. So the honest reading is *not* "make everything plan", it is:
  the few tasks with genuine branching (a refactor with several viable cut lines, a
  bug with several plausible causes) are the ones where the reactive loop is the
  wrong tool, and we have never marked them as different.
- **Fits the escalation rule from episode 8.** There the warning was that
  mid-task model escalation is the fragile topology — escalate by *redoing* the
  step. Here escalation is *"detecting when you're starting to get stuck, and then
  escalating up to the tree search"*, which is the same move done right: a new,
  wider search over the step, not a bigger model appended to a corrupted state.
- **Evaluation is cheaper than generation** is the reusable half. It is the reason
  the partial-commit guard, the citation checker, and `unit-health-check.py` earn
  their keep: each one *judges* an artefact instead of producing a better one.

## Corrections to the previous version of this file

It was written from the published show notes. Beyond gaps, it contained **invented
material** — the fourth such find in this series:

- An entire section headed `Search is the recurring pattern at AI inflection
  points`, with **Deep Blue beating Kasparov by searching ~200 million positions/second**
  and **AlphaGo beating Lee Sedol with Monte Carlo Tree Search**. None of it is in
  the episode. `chess`, `Kasparov`, `Deep Blue`, `AlphaGo`, `Lee Sedol`, `Monte
  Carlo`, `alpha-beta`, `200 million` — **zero hits across all 16 transcripts.**
  The real ancestors named in the audio are Kahneman and Newell/Simon.
- A **quoted sentence about Claude Code's `/plan`** — `The act of seeing the plan
  laid out often changes what I actually do` — presented as if from the episode.
  `seeing the plan` and `slash plan`: zero hits. Claude Code is discussed in
  episodes 4, 11 and the 2026-07-20 episode, never here.
- Host line said *"Katie Malone & Ben Jaffe"*. The transcript is Katie alone.
- Framing loss: the old version sold 4% → 74% as a general capability jump and
  dropped the hedge that the Game of 24 is unusually well suited to the method —
  which is the single most decision-relevant sentence in the episode.

## Next in the season

Episode 6, teed up in her own words: *"74% on Game of 24 is really good. But it's
not 100%."* What happens when the plan itself is wrong and *"pursued confidently,
perhaps across many steps"* — why agents fail.
