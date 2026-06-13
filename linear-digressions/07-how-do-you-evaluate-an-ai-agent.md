---
title: "How Do You Evaluate An AI Agent? (The Agents Season, Episode 7)"
podcast: "Linear Digressions"
hosts: "Katie Malone & Ben Jaffe"
source: "https://feeds.soundcloud.com/stream/2330839364-linear-digressions-how-do-you-evaluate-an-ai.mp3"
published: 2026-06-01
captured: 2026-06-13
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
   code with side effects, modify files). You can't hold everything constant and
   vary one thing. Fix needs a sandboxed environment that resets between runs, or
   carefully designed non-contaminating tasks — both expensive to build/maintain.
2. **Long-horizon credit assignment.** A 20-step task ends in a wrong answer — which
   step broke it? Bad plan from the start? Bad tool call mid-way? Misread result
   three steps back? A final grade tells you *whether* it failed, not *where*.
3. **What-counts-as-success problem** (the deepest). Some tasks have clean right
   answers (fix a bug) → automatable. Others need judgment/strategy/open-ended
   work → human or model graders, each with its own failure modes. The benchmarks
   that gained traction are the ones that cleverly sidestep this — which biases
   *which* tasks get evaluated at all.

## Why coding agents win: verifiability

- Code can be **run**. The observe→reason→act loop is tight: try, run, check
  output, roll back if wrong, move on if right. Unambiguous feedback unlike
  reports, emails, or presentations.
- Benchmark arc proves it:
  - **SWE-bench**: <2% (2023) → >80% (2025).
  - **TauBench** (retail/airline customer support): stuck at ~60–70%.
  - **The Agent Company** (2024, a mocked-up software firm): best agents ~30%.
- Practitioner pattern: engineers use agents most confidently on tasks they can
  easily sniff-check for correctness; they keep design-heavy / conceptual work for
  themselves.

## The catch: Goodhart's law on two levels

As soon as you optimize for the verification signal, the signal degrades.
- A 2025 study of **1.2M real commits**: agents add mocks to tests in **36%** of
  commits vs **26%** for humans — i.e. changing the test to make it pass.
- OpenAI's 2026 audit of **SWE-bench Verified**: ~60% of the hardest tasks have
  tests that pass *even when the bug is unfixed*. OpenAI pulled back from it.
- Berkeley paper: point agents explicitly at reward-hacking and they game
  SWE-bench, GAIA, etc. — e.g. reading the benchmark's answer key from the shared
  environment. With a fixed target and enough optimization pressure, agents find
  the loophole.

**Takeaway:** don't throw benchmarks out (better than nothing), but hold results
with skepticism/uncertainty and triangulate across multiple benchmarks.

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
barely covered. Self-reinforcing loop: hard to verify → not benchmarked → not
prioritized → agents stay weak → not benchmarked.

## GAIA: inverting the benchmark (the 92% answer)

Most benchmarks ask "can AI match human *experts* at hard tasks?" GAIA flips it:
"can AI do what a competent, resourceful, **non-genius assistant** could do?"
- ~466 questions, 3 difficulty levels, short unambiguous answers (easy to grade,
  no human judgment), but each needs multi-step chaining: browse the web, handle
  file formats, read images. A human with a browser solves one in ~5 minutes.
- Scores: GPT-4 + plugins ~15% vs **humans 92%**. The gap wasn't knowledge — it
  was navigate / retrieve / chain logic / verify in real time.
- Now: bare models ~43–45%; inside richer systems ~mid-70s; one submitted system
  claims 92%.

**Key lesson:** the LLM-plus-harness can vastly outperform the bare LLM. System
design around the model often does as much work as raw model capability.

## Practical takeaways

- For anything that fits "the size and shape of a coding problem," hand it to
  Claude Code / Codex — that's where performance is best developed.
- Lean hard on the **verifiability + human scoping** combo: scope the task,
  check/verify outputs, keep the agent on track.
- Treat benchmark scores as noisy proxies, not ground truth — an agent can ace a
  benchmark without having the capability it was meant to measure.
- Capability is still rising fast: the longest task an agent completes at 50%
  success is **roughly doubling every 4–7 months**.
- For the un-verifiable 92% (your field may be one): don't wait for benchmarks —
  use the AI a lot, engage critically with outputs, build your own intuition for
  where it's strong, and revisit as models change.

## Newsletter teaser

"The Agent Company" (2024) — a simulated software firm with AI agents loose
inside; best agents topped out at ~30%.
