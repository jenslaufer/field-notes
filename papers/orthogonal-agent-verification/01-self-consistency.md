---
title: "Self-Consistency Improves Chain of Thought Reasoning"
type: "paper"
authors: "Wang, Wei, Schuurmans, Le, Chi, Narang, Chowdhery, Zhou"
year: 2022
arxiv: "2203.11171"
link: "https://arxiv.org/abs/2203.11171"
survey: "../orthogonal-agent-verification.md"
family: "1 — Redundancy"
captured: 2026-06-14
---

# Self-Consistency

> Part of the [Orthogonal Verification survey](../orthogonal-agent-verification.md) (family 1 — Redundancy). Paper: [arxiv.org/abs/2203.11171](https://arxiv.org/abs/2203.11171)

**Problem.** Greedy chain-of-thought decoding commits to a single reasoning trace. One wrong step poisons the whole answer, and you have no signal that it happened.

**Method.** Sample *many* diverse reasoning paths at temperature, then **marginalise over the reasoning and take a majority vote on the final answers**. No extra model, no training, no verifier — just stop trusting one trace.

**Why it works.** A hard problem usually has several valid routes to the *same* correct answer, so correct answers cluster while mistakes scatter in different wrong directions. Agreement is the filter.

**Result.** Large reasoning gains on top of CoT: GSM8K +17.9%, SVAMP +11.0%, AQuA +12.2% (with PaLM-540B and similar). Robust across model scales.

**Takeaway.** The cheapest orthogonality there is. Cost scales linearly with sample count, and it only helps where answers are discrete enough to vote over. It's the redundancy floor every richer method builds on.
