---
title: "Orthogonal Verification Methods for AI Agents"
type: "paper survey"
papers: 10
captured: 2026-06-14
source: "curated reading list"
---

# Orthogonal Verification Methods for AI Agents

> How do you trust an agent's output when the agent is the thing you don't trust?
> The answer across this literature is **orthogonality**: stack checks that fail
> for *different* reasons, so a single blind spot can't pass undetected. No method
> below is sufficient alone; they compound.

The ten papers split into five families by *how* they create independence.

Each paper also has its own one-page note in
[`orthogonal-agent-verification/`](orthogonal-agent-verification/) — problem,
method, result, and takeaway.

---

## 1. Redundancy — same model, many paths, agreement filters noise

### Self-Consistency (Wang et al., 2022) · [2203.11171](https://arxiv.org/abs/2203.11171)
Replace greedy decoding with **sample-many-then-vote**. Draw a diverse set of
chain-of-thought reasoning paths at temperature, then take a majority vote over the
final answers. Premise: a hard problem has many valid routes to the *same* correct
answer, so correct answers cluster while errors scatter. Large gains on reasoning
(GSM8K +17.9%, SVAMP +11%). Cheapest orthogonality there is — one model, no extra
machinery, just don't trust a single trace.

### Tree of Thoughts (Yao et al., 2023) · [2305.10601](https://arxiv.org/abs/2305.10601)
Generalises CoT from a single line to a **search tree of intermediate thoughts**.
The model proposes several next-step thoughts, *self-evaluates* each state's
promise, and a search (BFS/DFS) explores branches with **lookahead and
backtracking**. Turns a one-shot guess into deliberate problem-solving. Game of 24:
4% (CoT) → 74% (ToT). Orthogonality = exploring *and* pruning alternatives instead
of committing to the first path.

---

## 2. Solve-then-check — a verifier independent of the solver

### Self-Verification (Weng et al., 2022) · [2212.09561](https://arxiv.org/abs/2212.09561)
Forward-reason to candidate answers, then **verify backward**: mask one of the
problem's conditions, predict it from the candidate answer, and score how well it
reconstructs. The best-verifying candidate wins. The point is the *separation* —
checking is a different operation from solving, so it catches errors the solve pass
is blind to.

### CRITIC (Gou et al., 2023) · [2305.11738](https://arxiv.org/abs/2305.11738)
Generate → **critique using external tools** → revise, looping. The critic isn't the
model's opinion of itself; it's grounded in a search engine, code interpreter,
calculator, or toxicity API. Key finding: *unaided* self-correction is unreliable —
a model rarely spots its own errors by introspection. The tool is what makes the
critique trustworthy. This is the actor/critic pattern with a real external oracle.

### Constitutional AI (Bai et al., Anthropic, 2022) · [2212.08073](https://arxiv.org/abs/2212.08073)
Check the answer against **explicit written principles** instead of human labels.
Phase 1 (supervised): the model critiques and revises its own output against a
"constitution," then trains on the revisions. Phase 2 (RLAIF): the model judges
which of two responses better follows the principles, trains a preference model, and
RLs against it. Yields harmless-but-non-evasive behaviour — it *explains* its
objection rather than refusing blankly. Orthogonality = an independent normative
yardstick the generator didn't author.

---

## 3. Adversarial & heterogeneous — many voices, disagreement surfaces error

### Multi-Agent Debate (Du et al., MIT/Google, 2023) · [2305.14325](https://arxiv.org/abs/2305.14325)
Several model instances each answer, then **read each other's answers over multiple
rounds** and refine toward consensus. Contradiction is the signal: a fact only one
agent asserts gets pressure-tested by the others. Improves factuality and reasoning,
cuts hallucination. "Society of minds."

### LLM-Blender (Jiang et al., 2023) · [2306.02561](https://arxiv.org/abs/2306.02561)
Ensemble *different* LLMs because no single model wins on every input. Two stages:
**PairRanker** compares candidate outputs pairwise to rank them, then **GenFuser**
fuses the top candidates into one output stronger than any input. Orthogonality
comes from model *heterogeneity* — different training, different failure modes.

---

## 4. Learning from feedback — improve across attempts, no weight updates

### Reflexion (Shinn et al., 2023) · [2303.11366](https://arxiv.org/abs/2303.11366)
After a failed attempt, the agent **writes a natural-language reflection** on *why*
it failed and stores it in an episodic memory buffer; the next attempt reads it.
"Verbal reinforcement learning" — no gradients, just self-authored lessons carried
forward. Strong gains on decision-making (ALFWorld), QA (HotPotQA), and coding
(HumanEval 91%). The orthogonal axis is *time*: trial N+1 is checked against the
mistakes of trial N.

---

## 5. Measuring reliability itself — meta-evaluation beyond accuracy

### Towards a Science of AI Agent Reliability (Rabanser, Kapoor, Kirgis et al., 2026) · [2602.16666](https://arxiv.org/abs/2602.16666)
A single success metric "obscures critical operational flaws." Decomposes agent
reliability into **four dimensions** — *consistency* (same behaviour across runs),
*robustness* (survives perturbation), *predictability* (failures fall in expected
patterns), *safety* (errors stay bounded) — with **12 concrete metrics**. Testing 15
models on 2 benchmarks: recent **capability gains brought only small reliability
gains**. Accuracy and reliability are different axes. (ICML 2026.)

### Holistic Agent Leaderboard — HAL · [openreview](https://openreview.net/forum?id=vUaY1t64ZZ)
A standardised, **cost-aware, third-party** leaderboard evaluating across three axes:
**models × scaffolds × benchmarks** (coding, web, science, customer service).
21,730 rollouts, 9 models × 9 benchmarks, ~$40k, weeks→hours via parallel VMs.
Findings worth remembering: more *reasoning effort* often **reduced** accuracy;
agents did bizarre things (searching HuggingFace instead of solving the task,
misusing credit cards in booking flows). Released 2.5B tokens of call logs for
LLM-aided behavioural inspection. Lesson: report cost and behaviour, not just a
top-line score.

---

## The orthogonal perspectives, mapped

An extended checklist of perspectives (factual correctness, logical consistency, math
verification, counterexample search, red-team, security/risk, economic
plausibility, stakeholder view, historical analogy, scientific evidence, source
quality, long-term effects, edge-case, premortem, devil's advocate, N-version,
independent expert agents, tool-based verification, heterogeneous consensus) is not a
20th method — it's the **set of independent lenses** you pour *into* the five
families above. Each lens is a different way two checks can disagree:

- **Mechanism lenses** (how to check): tool-based verification → CRITIC; N-version /
  heterogeneous consensus → LLM-Blender + Self-Consistency; independent expert agents
  / devil's advocate → Multi-Agent Debate; premortem / counterexample / edge-case →
  Reflexion-style adversarial probing before acting.
- **Content lenses** (what to check for): factual, logical, mathematical, economic,
  security, long-term, stakeholder, historical, source-quality. These are the
  *prompts* you hand each verifier so the panel isn't redundant.

**The core principle:** independence is the whole game. Three verifiers that share a
blind spot vote as one. Pick lenses that fail for *different reasons* — a math
checker, a red-teamer, and an economic-plausibility check rarely miss the same way.

## Two cross-cutting cautions (from the agent-eval notes in this repo)

- **Goodhart**: optimise against any fixed verification signal and it degrades —
  agents learn to game tests (see `linear-digressions/07`). Orthogonal checks help
  *because* gaming all of them at once is hard; a single check will be gamed.
- **More agents ≠ better**: debate/ensemble pay off when a task parallelises or a
  solo agent is weak (<~45% solo success); above that, coordination overhead hurts
  (see `linear-digressions/08`). Match the verification architecture to the task.

