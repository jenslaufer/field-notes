---
title: "Wisdom Of The (AI) Crowd: Investigating Artificial Swarm Intelligence In Large Language Models"
type: "paper distillation"
authors: "Justin Brenne, Christian Meske (Ruhr-University Bochum)"
venue: "ECIS 2026 Proceedings (Milan) — Completed Research Paper"
arxiv: "2606.31404"
captured: 2026-08-11
source: "https://arxiv.org/pdf/2606.31404 — full text, 6 pages"
---

# Wisdom Of The (AI) Crowd

> Ask one model once, or ask three models thirty times and average? This paper
> measures it. Answer: aggregation helps **consistently but modestly**, and *how
> much* depends almost entirely on whether the task has a statistical anchor.

**Setup.** 960 manually executed prompts. Three proprietary models — GPT-5, Gemini 2.5
Pro, Claude Sonnet 4.5 — on eight estimation tasks (five Fermi problems, three
anonymised economic forecasts). Two aggregation modes: **intra-model** (A1–A3, each
model prompted 30× independently) and **cross-model** (B1, 30 runs pooled, 10 per
model). Every prompt demanded a point estimate plus a self-reported 90% confidence
interval, and explicitly forbade visible reasoning.

---

## The five findings worth keeping

### 1. Aggregation always helped, but the headline number is one outlier task
Error reduction appeared in all eight tasks for GPT-5, Gemini and the pooled mode, and
in seven of eight for Claude. The abstract's "up to 37 percentage points" is **one
task**: F2 (cost to rebuild the NYC subway) under pooled aggregation, MAPE 109.52% →
72.11%. That is a bad estimate becoming a less bad estimate, not a good one. The
typical improvement is far smaller — for the stock-price tasks the paper itself says
**2–6 percentage points**.

### 2. The real variable is not the model, it is whether the task has an anchor
This is the transferable finding. Economic tasks (historical time series, bounded
ranges, visible trend) improved consistently; Fermi problems (pure order-of-magnitude
reasoning, no reference points) did not. Gemini's aggregated estimate on the
subscriber forecast hit **0.23% MAPE**; the same model on the subway task had a
standard deviation of **4.79e12**. The authors' own boundary condition: LLM swarms
"excel when aggregating over learned statistical regularities but have reduced
benefits when confronting novel estimation challenges lacking training data
precedents."

### 3. Low variance is not reliability — it is a correlated failure mode
Claude Sonnet 4.5 was the most *consistent* model (SD of 6.61 on Eco2 vs Gemini's
20.64) and benefited **least** from aggregation. The paper names the trap directly:
consistency "amplifies systematic errors when flawed", an echo-chamber effect from the
absence of true independence when resampling one model. **Repeated sampling of a
single model buys much less than it looks like it does.** Diversity has to come from
somewhere real.

### 4. Self-reported confidence intervals carry usable signal — but are badly calibrated
Wider self-reported intervals correlated with larger errors across every mode
(Spearman's ρ 0.283–0.568, all p<0.001), which the authors read as metacognition.
The catch is in the same tables: 90% intervals contained ground truth in as few as
**23.33%** of runs. So the *absolute* number is close to worthless, while the *ranking*
is informative — the model knows which of its answers are shakier, not how shaky.
The authors themselves concede the correlation may partly reflect task difficulty
rather than within-task self-awareness.

### 5. Pooling models fixed coverage, not accuracy
Under pooled aggregation the ground truth fell inside the averaged interval for **all
eight** tasks, versus six of eight for GPT-5 and Claude and five of eight for Gemini.
But point estimates did not correspondingly improve, and interval calibration did not
improve either. Model diversity widened the net rather than sharpening the aim.

---

## What is directly usable

- **The tiered-escalation rule** is the one concrete operational artefact: narrow
  self-reported interval → automate; moderate → human review; wide → escalate.
  Cheap to implement, and it uses the one signal the paper shows to be real (ordering,
  not calibration).
- **Ask three different models once each, before asking one model three times.** Finding 3
  says intra-model resampling mostly re-measures the same bias.
- **Screen the task before paying for a swarm.** Anchored/trend-bearing → aggregation pays.
  Open-ended order-of-magnitude → it mostly does not.
- Note the shape of this against [`orthogonal-agent-verification.md`](orthogonal-agent-verification.md):
  that literature's whole point is that checks must fail for *different* reasons.
  This paper is the empirical version of the same claim — measured, and weaker than hoped.

## Where it is thin

Six pages, proof-of-concept by the authors' own description. Eight tasks, three
models, numerical estimation only, everything executed manually through web
interfaces with **opaque and unequal temperature settings** across providers — which
is precisely the variable that drives intra-model variance, the paper's own
independent variable. No open-source models. Shared training data means correlated
hallucinations are a live risk that the human-crowd analogy does not cover.

## Internal inconsistencies (checked against the tables, flagged so nothing false gets quoted onward)

The findings above are stated only where the tables back them. Four places where the
prose does not match its own data — worth knowing before citing this paper:

1. **The abstract reports `ρ=0.242-0.568`; Table 6 has no value below `0.283`.** The
   number 0.242 appears exactly once in the paper — in the abstract — and nowhere in
   the results. Both figures also propagate into the arXiv listing.
2. **Section 5.1 reports interval coverage as "6/6 tasks" for pooled models, "4/6 for
   GPT-5 and Claude, 3/6 for Gemini".** The tables and Section 4 say eight tasks:
   8/8, 6/8, 6/8 and 5/8. The ratios differ, the ranking survives.
3. **Section 3.1 says responses were combined "across all six models"** — only three
   models exist in the study; the "30 runs aggregated (10 per model)" of Table 1 is
   consistent with three. Section 5.1 likewise refers to "modes A1-A6" where only
   A1–A3 are defined.
4. **The Eco3 ground truth is printed as `158.6e5`** (= 1.586e7) while the tables carry
   medians of `1.57e8`/`1.56e8`/`1.58e8` — and Table 2 alone prints `1.58e11`. Only the
   ~1.586e8 reading is consistent with Disney+ Q4-2024 subscribers, which the paper
   names as the source.

Nothing above changes the direction of the results; all four are reporting defects, not
data defects. The MAPE and ρ figures quoted in this note come from Tables 2–6.
