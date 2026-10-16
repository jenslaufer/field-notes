---
title: "Constitutional AI: Harmlessness from AI Feedback"
type: "paper"
authors: "Bai et al. (Anthropic)"
year: 2022
arxiv: "2212.08073"
link: "https://arxiv.org/abs/2212.08073"
survey: "../orthogonal-agent-verification.md"
family: "2 — Solve-then-check"
captured: 2026-06-14
---

# Constitutional AI

> Part of the [Orthogonal Verification survey](../orthogonal-agent-verification.md) (family 2 — Solve-then-check). Paper: [arxiv.org/abs/2212.08073](https://arxiv.org/abs/2212.08073)

**Problem.** Aligning a model with human-labelled harmlessness data is expensive, slow, and opaque — and the labels don't *explain* themselves.

**Method.** Replace most human feedback with an **explicit written constitution** (a set of principles).
- *Phase 1 (supervised):* the model critiques and revises its own responses against the constitution, then is fine-tuned on the revised outputs.
- *Phase 2 (RLAIF):* the model judges which of two responses better follows the principles, that builds a preference dataset, a preference model is trained, and the policy is RL-optimised against it.

**Why it works.** The yardstick is an independent normative document the generator didn't author — orthogonality from a *separate standard*, not a separate model.

**Result.** Harmless **but non-evasive** behaviour: the model explains its objection instead of refusing blankly, with far less human labelling.

**Takeaway.** Verification can be a written rule set, not just a second model. Make the standard explicit and you can critique against it automatically.
