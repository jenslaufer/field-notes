---
title: "LLM-Blender: Ensembling LLMs with Pairwise Ranking and Generative Fusion"
type: "paper"
authors: "Jiang, Ren, Lin"
year: 2023
arxiv: "2306.02561"
link: "https://arxiv.org/abs/2306.02561"
survey: "../orthogonal-agent-verification.md"
family: "3 — Adversarial & heterogeneous"
captured: 2026-06-14
---

# LLM-Blender

> Part of the [Orthogonal Verification survey](../orthogonal-agent-verification.md) (family 3 — Adversarial & heterogeneous). Paper: [arxiv.org/abs/2306.02561](https://arxiv.org/abs/2306.02561)

**Problem.** No single LLM wins on every input — strengths and failure modes vary by model and by prompt. Picking one model leaves quality on the table.

**Method.** Ensemble *different* LLMs in two stages.
- **PairRanker:** compare candidate outputs **pairwise** to rank which is best for this specific input.
- **GenFuser:** **fuse** the top-ranked candidates into a single output stronger than any individual input.

**Why it works.** Orthogonality from model *heterogeneity* — different training data and architectures fail in different ways, so their errors don't coincide. Pairwise comparison is a more reliable judge than absolute scoring.

**Result.** The fused output beats the best individual model across instruction-following benchmarks; released with the MixInstruct dataset.

**Takeaway.** Diversity of *models* (not just samples from one model) is a stronger ensemble axis. And rank by comparison, not by absolute score.
