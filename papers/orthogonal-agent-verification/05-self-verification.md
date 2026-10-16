---
title: "Large Language Models are Better Reasoners with Self-Verification"
type: "paper"
authors: "Weng, Zhu, Xia, Li, He, Liu, Sun, Liu, Zhao"
year: 2022
arxiv: "2212.09561"
link: "https://arxiv.org/abs/2212.09561"
survey: "../orthogonal-agent-verification.md"
family: "2 — Solve-then-check"
captured: 2026-06-14
---

# Self-Verification

> Part of the [Orthogonal Verification survey](../orthogonal-agent-verification.md) (family 2 — Solve-then-check). Paper: [arxiv.org/abs/2212.09561](https://arxiv.org/abs/2212.09561)

**Problem.** Forward reasoning produces several candidate answers but gives no internal way to tell which one is right.

**Method.** Forward-reason to candidates, then **verify backward**: mask one of the problem's original conditions, use the candidate answer to predict that masked condition, and score how well it reconstructs. The candidate that best regenerates the problem wins.

**Why it works.** Checking is a *different operation* from solving — running the inference in reverse exercises a different path, so it catches errors the forward pass is blind to. Separation, not a second model, is the source of independence.

**Result.** Backward verification reranks candidates and lifts reasoning accuracy over forward-only decoding on arithmetic and commonsense benchmarks.

**Takeaway.** A verifier need not be a separate system — reversing the task ("does this answer reproduce the question?") is a cheap, model-internal independent check.
