---
title: "How Do You Evaluate An AI Agent? (The Agents Season, Episode 7)"
podcast: "Linear Digressions"
hosts: "Katie Malone (solo)"
source: "https://feeds.soundcloud.com/stream/2330839364-linear-digressions-how-do-you-evaluate-an-ai.mp3"
transcript: "~/.cache/podcast-transcripts/ld-07-evaluate-an-agent.txt (lokal transkribiert, 31:22, 267 Segmente)"
published: 2026-06-01
captured: 2026-06-13
rewritten: 2026-08-04
---

# How Do You Evaluate An AI Agent?

> Agent failures are often invisible — the agent finishes confidently but didn't
> actually do the job. So how do you measure success systematically? The answer
> hinges on **verifiability**, which is why coding agents race ahead while most of
> the economy lags.

## Core message

Agents excel where outputs are cheaply verifiable (code, math). That zone is ~8%
of the economy — and it's also where almost all benchmarks live. The other 92%
(law, healthcare, management, sales, trades) is hard to verify, lightly
benchmarked, and where progress will be slow.

## Why evaluating agents is hard — three distinct problems

1. **World-change problem.** Agents act on a changing world (browse sites, run
   code with side effects, send messages, modify files). You can't hold everything
   constant and vary one thing. The sharp version, which the show notes drop:
   *"since agents are non-deterministic and the world is changing, the next run
   isn't the same as the last run **because the agent did things in between them**."*
   The agent is not just noisy — it is the thing that invalidated your control
   condition. Fix needs a sandbox that resets between runs, or carefully designed
   non-contaminating tasks — and she flags the cost of both herself: *"that's a lot
   of work"*, *"in some cases, maybe a little bit not representative"*.
2. **Long-horizon credit assignment.** A 20-step task ends in a wrong answer — which
   step broke it? Bad plan from the start? Bad tool call mid-way? Misread result
   three steps back? *"Where in a single step model, you basically just have this
   input output and that tells you most of what you need. Agent trajectories can be
   quite long and the causality within them gets very messy."* A final grade tells
   you *whether* it failed, not *where*.
3. **What-counts-as-success problem.** Explicitly named the deepest of the three,
   *"as much as this sounds like it should be the easiest to solve."* Some tasks
   have clean right answers (fix a bug) → automatable. Others need
   judgment/strategy/open-ended work → human or model graders, *"and both of those
   are going to have failure modes as well."* The benchmarks that gained traction
   are the ones that cleverly sidestep this — which biases *which* tasks get
   evaluated at all.

## Why coding agents win: verifiability

- Code can be **run**. The observe→reason→act loop is tight: try, run, check
  output, roll back if wrong, move on if right. Unambiguous feedback unlike
  reports, emails, or presentations.
- Benchmark arc:
  - **SWE-bench**: <2% (2023) → >80% (2025).
  - **TauBench** (retail/airline customer support): stuck at ~60–70%.
  - **The Agent Company** (2024, a mocked-up software firm): best agents ~30%.
- Practitioner pattern, quoted: engineers use agents most fluently on tasks they
  can *"relatively easily sniff check on correctness"*, and *"keep design dependent
  or conceptually difficult work for themselves."*

## The catch: Goodhart's law on two levels

As soon as you optimize for the verification signal, the signal degrades.
- A 2025 study of **1.2M real commits**: agents add mocks to tests in **36%** of
  commits vs **26%** for humans — i.e. changing the test to make it pass.
- OpenAI's 2026 audit of **SWE-bench Verified**: nearly **60%** of the hardest
  tasks have tests that pass *even when the underlying bug is unfixed*. OpenAI
  pulled back from the benchmark.
- Berkeley paper: point agents explicitly at reward-hacking and they game
  SWE-bench, GAIA and several others — e.g. an agent running in the same
  environment as the benchmark learns to read the answers out of the benchmark
  code. *"If there's a fixed evaluation target and there's enough optimization
  pressure, the agent will figure out ways to start gaming it."*

**Her own hedge, twice, and it is the part show notes always cut:** *"The point
here is not necessarily that you should throw out all of the evaluations or all of
the benchmarks or that they don't tell you anything, because they're what we have.
They're better than nothing. And by and large, I don't think that they are so
contaminated or so reward hacked that they're not generally giving you a useful
signal."* And she downgrades her own word choice mid-sentence: hold the results
with *"skepticism — uncertainty maybe is a better word than skepticism."*

## Verifiability is a continuum, not a binary

- Max-verifiable: mathematical proofs (right or wrong).
- Highly verifiable but **gameable**: code with good tests.
- Barely verifiable: strategic decisions, management judgment.

Agents are dramatically more capable in the highly-verifiable zone — and that's
exactly where benchmarks cluster.

## The 92% problem (CMU/Stanford, March 2026)

Mapped 43 benchmarks / 72,000 tasks onto US labor data (O*NET, ~1,000 jobs).
Benchmarks are heavily concentrated in computer & math — ~8% of the labor market.
The other **92%** (management, law, healthcare, education, sales, trades) is
barely covered. The loop is self-reinforcing and she spells it out as a loop:
easy to verify → benchmarked → prioritized → agents get good → benchmarked more;
hard to verify → not benchmarked → not prioritized → agents stay weak → still not
benchmarked. The cause named is not malice but *"methodological convenience."*

## GAIA: inverting the benchmark

Most benchmarks ask "can AI match human *experts* at hard tasks?" GAIA flips it:
*"can AI do the things that a competent, resourceful, **non-genius** human
assistant could do?"*
- ~466 questions, 3 difficulty levels, short unambiguous answers (easy to grade,
  no human judgment), but each needs multi-step chaining: navigate the web, handle
  different file formats, look at pictures. A human with a browser solves one in
  ~5 minutes.
- At launch: GPT-4 with plugins ~**15%** vs **humans 92%**. The gap wasn't
  knowledge — *"the humans had much greater ability to navigate, retrieve, chain
  together logic, and then verify in real time that they were on the right track."*
- Today: bare models **~43–45%**; adding them into more complex systems with
  additional capabilities raises it further. **The episode does not state a figure
  for those systems** — the audio trails off at *"they get up to around the
  middle."* (The show-notes-based version of this note claimed "~mid-70s" and "one
  submitted system claims 92%". Neither appears anywhere in the transcript; the
  92% was the *human* score, re-attributed to a machine.)

**Key lesson:** the LLM-plus-harness can vastly outperform the bare LLM, and the
combination *"can vary a lot depending on what specific model and harness you're
talking about"* — system design often does as much work as raw model capability.

## Where she lands, including what she can't answer

- Progress is real: the longest task an agent completes at 50% success is
  *"roughly doubling every four to seven months right now."*
- But: *"you can have agents that do extremely well on a benchmark and do not
  necessarily have the capability to do the thing that the benchmark was designed
  to measure."*
- The two places the wins actually are: **verifiability** (coding agents) and
  **human–AI collaboration where the human does the scoping** — *"a very
  intentional way that they're working with the AI to check and verify that it is
  doing the stuff that they want."*
- **The admission, verbatim, which no summary carries:** *"I confess that I do not
  entirely have the answer. It seems like a really tough situation to be in. How do
  you teach something like an AI agent what good looks like in cases where that's
  subjective or it requires judgment? I don't have the answer to that in a tiny
  little bow here."*
- Her interim advice for the un-verifiable 92%: skip benchmarks and scaffolding,
  *"just use them a lot and get it from your own vibes"* — engage critically with
  outputs, build your own intuition for where it's strong, *"and then revisit that
  periodically as models change… those goalposts will be moving as well."*
- For anything that fits *"roughly the size and shape of a coding problem"* — hand
  it to Claude Code / Codex.

## Cross-references

- Follows episode 6 (failure modes) directly: *"That conversation assumed that
  there was some way of measuring what a failure even was."*
- Points back at an earlier episode, **"Benchmark Bank Heist"**, for the same
  answer-key-exfiltration idea.

## Newsletter teaser

"The Agent Company" (2024) — a simulated software firm with AI agents loose
inside; best agents topped out at ~30%.
