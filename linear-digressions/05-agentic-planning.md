---
title: "Agentic Planning (The Agents Season, Episode 5)"
podcast: "Linear Digressions"
hosts: "Katie Malone & Ben Jaffe"
source: "https://feeds.soundcloud.com/stream/2322083060-linear-digressions-agentic-planning-the-agents.mp3"
published: 2026-05-18
captured: 2026-06-13
---

# Agentic Planning

> The smartest model still fails a hard multi-step task without a game plan. The
> jump from *reacting* to *planning* isn't more raw intelligence — it's letting
> the agent explore many paths, score them, and backtrack, instead of committing
> to one line and hoping. That single reframe turns a 7% solver into a 74% one.

## Core message

Planning = **search**, not smarter linear reasoning. A reactive agent walks one
path step-by-step and lives or dies by it. A planning agent treats the problem as
a space of possible solutions with **branching, evaluation, and backtracking** —
and that structure, not a bigger model, is what cracks genuinely hard tasks.

## The headline result: Tree of Thoughts

Paper: **"Tree of Thoughts: Deliberate Problem Solving with Large Language
Models"** — Yao, Yu, Zhao, Shafran, Griffiths, Cao, Narasimhan (2023,
arxiv.org/abs/2305.10601).

The **Game of 24**: combine `4, 9, 10, 13` with +−×÷ to make 24. Same GPT-4,
three strategies:
- **Standard prompting**: ~**7%**.
- **Chain-of-thought**: ~**4%** — *worse than no reasoning at all.*
- **Tree of Thoughts**: ~**74%**.

The chain-of-thought *drop* is the whole point (see below).

## Why chain-of-thought can hurt

On combinatorial problems, step-by-step prompting forces the model to **commit to
a single trajectory** early. One bad early move and the whole chain is doomed —
there's no mechanism to notice the dead end and back out. Linear reasoning has no
backtracking; search does.

## What makes search work

- **Branching**: generate several candidate next-steps, not one.
- **Self-evaluation**: the LLM judges its own intermediate states — which branches
  look promising, which are dead ends. Crucially, **evaluation is easier than
  generation**: a model that can't reliably *produce* the answer can often
  reliably *recognize* a bad partial path. That asymmetry is what the tree
  exploits.
- **Backtracking**: abandon a losing branch and try another, instead of grinding
  forward on a doomed line.

## Search is the recurring pattern at AI inflection points

- **Deep Blue** beat Kasparov (1997) not by *understanding* chess but by searching
  ~**200 million positions/second** (with alpha-beta pruning to cut the tree).
- **AlphaGo** beat Lee Sedol at Go with **Monte Carlo Tree Search** + deep neural
  nets — search guided by learned intuition.
- Tree of Thoughts is the same idea wearing an LLM: the model supplies the
  intuition, the tree supplies the deliberation.

## The catch: cost grows combinatorially

Every node in the tree costs **multiple LLM calls across multiple branches**, and
the cost compounds with depth and width. Tree search is expensive — wasteful on
routine tasks, worth it only on genuinely hard ones.

## Practical takeaways

- **Escalate, don't always search.** Start cheap (a single chain-of-thought).
  Only trigger expensive tree-search when the agent is visibly stuck. Match the
  reasoning budget to the difficulty.
- **Force the plan to surface before action.** Claude Code's `/plan` is a simple
  version of this: it pauses before doing anything and lays out dependencies and
  steps. "The act of seeing the plan laid out often changes what I actually do" —
  it catches the skipped step or wrong assumption *before* execution, not after.
- **Verification is your cheapest leverage.** Because evaluation beats generation,
  spending compute on *checking* candidate steps pays off more than spending it on
  generating more of them.
- Don't reach for tree search by default — its cost only earns out on the hard,
  combinatorial, easy-to-get-wrong problems.

## Next in the season

Episode 6 turns from *how agents plan* to *how agents break* — the many, varied,
and compounding ways AI agents fail.
