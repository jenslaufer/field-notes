---
title: "Towards a Science of AI Agent Reliability"
type: "paper"
authors: "Rabanser, Kapoor, Kirgis et al."
year: 2026
arxiv: "2602.16666"
link: "https://arxiv.org/abs/2602.16666"
venue: "ICML 2026"
survey: "../orthogonal-agent-verification.md"
family: "5 — Measuring reliability itself"
captured: 2026-06-14
---

# Towards a Science of AI Agent Reliability

> Part of the [Orthogonal Verification survey](../orthogonal-agent-verification.md) (family 5 — Measuring reliability itself). Paper: [arxiv.org/abs/2602.16666](https://arxiv.org/abs/2602.16666) · ICML 2026
>
> Published after the assistant's knowledge cutoff — summary built from the paper fetched 2026-06-14; treat figures as captured, not memorised.

**Problem.** A single success metric "obscures critical operational flaws." Two agents with the same accuracy can be wildly different to operate — one steady, one erratic.

**Method.** Decompose agent reliability into **four dimensions**, each with concrete metrics (12 in total):
- **Consistency** — same behaviour across repeated runs.
- **Robustness** — survives perturbation of the input/environment.
- **Predictability** — failures fall into expected, anticipatable patterns.
- **Safety** — errors stay bounded; no catastrophic blow-ups.

**Key finding.** Testing 15 models on 2 benchmarks: recent **capability gains brought only small reliability gains**. Accuracy and reliability are *different axes* — getting smarter does not automatically get more trustworthy.

**Takeaway.** Measure reliability separately from capability. "Is it good?" and "can I depend on it?" are distinct questions and need distinct metrics.
