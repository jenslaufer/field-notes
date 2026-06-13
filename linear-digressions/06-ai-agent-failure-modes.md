---
title: "AI Agent Failure Modes (The Agents Season, Episode 6)"
podcast: "Linear Digressions"
hosts: "Katie Malone & Ben Jaffe"
source: "https://feeds.soundcloud.com/stream/2326598789-linear-digressions-ai-agent-failure-modes-the.mp3"
published: 2026-05-25
captured: 2026-06-13
---

# AI Agent Failure Modes

> Marketing says agents are nearly infallible; anyone who's used one knows better.
> The deepest problem isn't any single mistake — it's **compounding**. Small
> per-step error rates multiply into near-certain end-to-end failure on long
> tasks, and a mistake early on quietly poisons everything downstream.

## Core message

Agent reliability is governed by arithmetic, not vibes. A respectable per-step
success rate becomes a terrible whole-task success rate once the task is long
enough — and most real work is long. Reliability is a *systems* property
(scaffolding, verification, termination), not just a model property.

## The compounding-error math (the heart of the episode)

A **90% per-step** success rate sounds great until you chain it:
- over **10 steps** → ~**35%** end-to-end success.
- over **100 steps** → **rounds to zero**.

To stay above **90% on a 100-step task** you need **four nines** of per-step
reliability — **99.99%**. That gap between "looks reliable" and "is reliable over
a long horizon" is why agents feel magical in demos and flaky in production.

**Why it's worse than independent dice:** errors aren't just lost steps, they
**corrupt downstream state**. A wrong result at step 3 poisons every later step
that reasons on top of it. The agent often proceeds confidently on a polluted
foundation.

## Measuring it honestly: τ-bench and Pass@K

- **τ-bench (tau-bench, 2024)** introduced **Pass@K**: not "can it succeed once?"
  but "can it succeed **consistently across repeated runs?**" — the metric that
  matters for anything you'd actually deploy.
- 2024 result: even the best models scored **below 25% on Pass@8** for retail
  customer-service tasks. Single-shot scores hid how *inconsistent* the agents
  were.

## A taxonomy of how they break

**"Why Do Multi-Agent LLM Systems Fail?"** (UC Berkeley, 2025) analyzed
**1,600+ agent execution traces** and distilled **14 distinct failure modes**
(the MAST taxonomy) into **three categories**:

1. **Specification & system-design failures** — disobeying the spec, looping,
   losing earlier history/context.
2. **Inter-agent misalignment** — coordination breakdowns, agents reaching
   contradictory conclusions.
3. **Task verification & termination failures** — stopping too early (job not
   actually done) or too late (grinding past completion).

Note categories 2 and 3: more agents can mean *more* ways to fail. Multi-agent
systems sometimes **underperform a single agent** because coordination cost
exceeds the benefit (echoed later in Episode 8).

## Capability is real — but uneven and scaffold-dependent

- **SWE-bench Verified**: **<2% (2023) → ~94% (early 2026)**. Genuine, fast
  progress where outputs are verifiable.
- **SWE-bench Mobile**: best configurations only **~12%** — realistic mobile dev
  work is far harder than the headline number suggests.
- **Scaffolding dominates**: the *same* model inside different frameworks/tools/
  evaluation setups shows up to **six-fold** differences. The harness around the
  model often does as much work as the model.

## Practical takeaways

The post breaks advice out by audience:

- **AI-curious non-experts**: agents are not infallible; confident output ≠ correct
  output. Expect failure on long, multi-step tasks and verify.
- **Managers / decision-makers**: judge agents on **Pass@K-style consistency**,
  not one good demo. Long-horizon tasks need either very high per-step reliability
  or a human checkpoint between steps.
- **Developers building agentic systems**: design for the three failure
  categories — clamp specs, prevent loops, preserve history, and add explicit
  **verification and termination** logic. Keep tasks short; insert checks between
  steps so an early error can't silently poison the rest.
- **ML engineers / researchers**: invest in **scaffolding and evaluation**, not
  just bigger models — that's where the six-fold swings live.

## Newsletter teaser

Closes deadpan — "*Have we reached the singularity yet? No.*" — and points ahead
to a deeper look at **how you actually evaluate an agent** (Episode 7).
