---
title: "CRITIC: LLMs Can Self-Correct with Tool-Interactive Critiquing"
type: "paper"
authors: "Gou, Shao, Gong, Shen, Yang, Duan, Chen"
year: 2023
arxiv: "2305.11738"
link: "https://arxiv.org/abs/2305.11738"
survey: "../orthogonal-agent-verification.md"
family: "2 — Solve-then-check"
captured: 2026-06-14
---

# CRITIC

> Part of the [Orthogonal Verification survey](../orthogonal-agent-verification.md) (family 2 — Solve-then-check). Paper: [arxiv.org/abs/2305.11738](https://arxiv.org/abs/2305.11738)

**Problem.** "Let the model check its own work" mostly fails. By introspection alone, a model rarely catches its own errors — the same blind spot that produced the mistake also passes it.

**Method.** Generate → **critique using external tools** → revise, looping. The critic is grounded in a real oracle: a search engine, code interpreter, calculator, or toxicity API. The tool — not the model's opinion of itself — produces the feedback that drives revision.

**Why it works.** The external tool fails for *different reasons* than the generator. That independence is what makes the critique trustworthy.

**Key finding.** *Unaided* self-correction is unreliable; the tool is what turns the actor/critic loop into a real check rather than a confident rubber stamp.

**Result.** Consistent gains across QA, math, and toxicity-reduction tasks versus no-tool self-correction.

**Takeaway.** If you want self-correction to mean anything, give the critic a real-world oracle to consult. Pure introspection is not verification.
