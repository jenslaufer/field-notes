---
title: "Reading list: context/memory, orthogonal evaluation, small-model swarms, dumb tools"
type: "reading list"
captured: 2026-08-11
sources: "arXiv API (export.arxiv.org), 20 entries, IDs and dates verified at the source"
span: "2026-05-11 to 2026-08-10 — nothing older than three months"
---

# Reading list — four questions about running LLMs

Twenty papers, five per question, pulled from the arXiv API on 2026-08-11. Every ID,
title, author and date below came back from the API — none is written from memory.

**These are entries, not distillations.** Each note states what the *abstract* claims.
The one paper in this folder that was read in full ([`llm-swarm-intelligence.md`](llm-swarm-intelligence.md))
had four figures in its own prose that its own tables contradict — including one that
propagated into the arXiv listing. So: treat every number below as an author's claim
until someone checks it against the tables. Reading order per section is my ranking,
strongest first.

Where a paper says something about *this* setup — the assistant's memory files, the
skill library, the local Ollama models — it is marked **→ hier**. That mapping is my
inference, not the paper's claim.

---

## 1. Context and memory optimisation

The bulk of arXiv volume under "context optimisation" is KV-cache engineering —
eviction policies, quantisation, sparse attention (e.g. `2608.09412`, `2608.08878`,
`2608.07915`). That work is for whoever *serves* the model; it changes nothing for
someone calling an API. Filtered out. What follows is the layer we actually control:
what goes into the context and what survives between sessions.

**[`2607.01224`](https://arxiv.org/abs/2607.01224) — AutoMem: Automated Learning of Memory as a Cognitive Skill** (Wu, Zhu, Zhang et al., 2026-07-01)
Promotes **file-system operations to first-class memory actions** and lets the model
manage its own memory files. Two loops: a strong model revises the memory *structure*
from complete trajectories; the agent's own good memory decisions become training
signal. On Crafter/MiniHack/NetHack, optimising memory alone — task behaviour
untouched — improved the base agent 2–4x and brought a 32B open-weight model level with
Claude Opus 4.5 and Gemini 3.1 Pro Thinking.
**→ hier:** this is the closest published description of what `state/memory/` already is.
The claim worth testing is the leverage: memory structure, not model, as the thing to tune.

**[`2607.22962`](https://arxiv.org/abs/2607.22962) — ConsistencyGate: Preventing Memory Contamination via Self-Consistency Admission Control** (Zhang & Li, 2026-07-25)
Names the failure mode precisely: a hallucinated fact written once **persists as a false
premise for every later step**. Existing memory work handles retrieval and capacity but
not *write-time* correctness. The gate queries the model K times for a support score
before committing a fact; model-agnostic, no fine-tuning, reducible to a single forward
pass. Benchmarks built by planting single-detail corruptions in real long conversations.
Cost concentrates on facts only *implicitly* stated in the source.
**→ hier:** the admission question — what earns a line in `MEMORY.md` — is currently a
judgement call at write time with no check at all.

**[`2607.27773`](https://arxiv.org/abs/2607.27773) — ChronoMem: Version Control and Semantic Rollback for Agent Memory** (Su, Xu, Zuo et al., 2026-07-30)
Existing memory systems are **forward-only**: they accumulate, consolidate and overwrite
with no way to inspect or revert. ChronoMem snapshots memory on every write, keeps
version history, and maps natural-language undo intents onto historical versions.
Integrated into Google's Agent Development Kit. Introduces a post-exposure protocol:
can the agent answer *as if* the later update never happened?
**→ hier:** the snapshot half is free — `state/` is a git repo. The part that does not
exist is the *semantic* half: finding which past version to go back to.

**[`2608.00009`](https://arxiv.org/abs/2608.00009) — AgentMemBench: Benchmarking Long-Term Memory Management Strategies** (Cherif, 2026-06-16)
Five strategies under identical conditions: in-context windowing, external key-value
store, graph episodic memory, compression-summarisation, web-augmented. The uncomfortable
result: on LoCoMo, where the answer lies many sessions back, **windowing, summaries and
entity graphs retrieve almost nothing** (Recall@5 ≤ 0.005) while the key-value store
reaches 0.573. Its price is footprint — ~5,100 vs ~300 tokens.
**→ hier:** the assistant's memory is windows plus summaries, i.e. the two strategies
this benchmark puts at the bottom for long-range recall. Worth checking before trusting
a summary to carry something six weeks old.

**[`2605.17304`](https://arxiv.org/abs/2605.17304) — Compress the Context, Keep the Commitments** (Trukhina & Vashkelis, 2026-05-17)
"LLM context is not just tokens; it is a set of **commitments**" — goals, constraints,
decisions, preferences, safety boundaries that later responses must preserve. Existing
compression rarely says *which* commitments must survive or how to measure that. Proposes
typed source-grounded atoms and metrics: Critical Atom Recall, Weighted Atom Recall,
Commitment Density, round-trip recoverability. Honest about its own scope — a framework
plus a small diagnostic study, not a solved problem.
**→ hier:** `waiting.md` is a commitment store, and the recent condensations were
verified exactly this way ad hoc (re-find every code span and number afterwards). This
paper is the vocabulary for that check.

*Also seen:* `2607.14275` (context quality as a validated preflight signal, seven scored
criteria) · `2608.09153` (TRACE, attributing agent failures back to the context source).

---

## 2. Orthogonal evaluation and feedback loops

Two clean threads here, and both cut against current practice: judge panels are far less
independent than their size suggests, and the measured gains of feedback loops are
partly an artefact of how they were measured.

**[`2608.06940`](https://arxiv.org/abs/2608.06940) — Blind to the Pivotal Vote: Aggregate Independence Metrics Miss Where Verification Actually Helps** (Shu, 2026-08-07)
The direct answer to the orthogonality question. Panel errors are **highly correlated:
nine judges carry roughly the effective information of two independent ones**. Adding a
genuinely different evidence source (executing a test suite) changed the panel's
effective-vote count by −0.04 [−0.10, +0.02] — nothing. But that is the wrong measurement:
by majority arithmetic, only decisions with a **one-vote margin** can flip. The entire
accuracy gain concentrates there (+10.4 to +23.3 points), and is exactly zero elsewhere.
On HumanEval+/MBPP+ a margin-triggered replacement rule lifts 82.44% → 85.62% while
invoking the outside signal on 16.2% of queries.
**Usable:** don't buy more judges, and don't run the expensive orthogonal check
everywhere — run it *only where the vote is close*. (Note the paper's own sting: the
signal used alone scored 87.60%, better than the panel it was helping.)

**[`2608.01810`](https://arxiv.org/abs/2608.01810) — RADAR: Rubric-Aware Dependency and Redundancy Analysis for LLM-as-Judge** (Singh, Davari, Mashhadi, 2026-08-03)
Rubric pipelines assume the criteria are independent signals. They are **behaviourally
coupled** — improving one systematically moves another, which distorts the aggregate that
release decisions run on. RADAR probes a rubric *before* large-scale evaluation and
returns a directional coupling matrix, recovering human inter-criterion correlation
structure at Pearson r > 0.84 from few probes.
**→ hier:** every critic skill in `~/.claude/skills` scores 8–10 "dimensions" and adds
them up. This says measure the coupling first — some of those dimensions are one dimension.

**[`2606.26300`](https://arxiv.org/abs/2606.26300) — The Verification Horizon: No Silver Bullet for Coding Agent Rewards** (Wang, Zhang, Liu et al., 2026-06-24)
The classical intuition that verifying is easier than producing is **inverting**:
generation got cheap, reliable verification did not. Every verifier is a proxy for intent,
never the intent; optimisation then widens the gap (reward hacking, signal saturation).
Characterises verification along scalability, faithfulness, robustness and argues all
three at once is the open problem. Studies four reward types — test, rubric, user, agent.
Conclusion: **no fixed reward stays effective as the generator improves; verification has
to co-evolve.**

**[`2607.26117`](https://arxiv.org/abs/2607.26117) — Try Again, Don't Look Back: Blind Resampling Outperforms Self-Repair in Small Code Models** (Verma, 2026-07-28)
A placebo-controlled design that separates the value of the *feedback* from the value of
the *extra attempt* — the confound in nearly every self-repair evaluation. Four
matched-budget retry conditions on MBPP+ at 1.5B/3B/7B. **Blind resampling wins below 7B
and ties at 7B, at 2.5–5.5x fewer tokens; the informational content of real execution
feedback adds nothing over a content-free failure notice.** Mechanism: anchoring — shown
its own failed attempt, the model reproduces a near-identical program 33–68% of the time
against 2–14% under blind resampling. Retrieved solutions to *other* tasks change nothing,
which localises the harm to self-conditioning rather than context length.
**Usable:** when a small model fails, clear the context and retry rather than paste the error.

**[`2606.23196`](https://arxiv.org/abs/2606.23196) — When Does Intrinsic Self-Correction Help? A Task-Sensitive Analysis** (Stav, Berlowitz, Orner et al., 2026-06-22)
Refuses the general question and asks which *mechanism* the revision step can play:
checking explicit constraints, revisiting a long derivation, or second-opinion between
competing strategies. Gains appear where task structure supports one of those, not
otherwise. Self-correction as a **task-dependent inference-time strategy**, not a
general-purpose improvement.

*Also seen:* [`2608.04355`](https://arxiv.org/abs/2608.04355) **The Calibration Floor** —
the sharpest methodological warning of the four sections: much of what the field measured
as self-correction is **format repair at the answer-extraction boundary**, not reasoning.
Forcing already-generated reasoning through grammar-constrained decoding closes a median
71% of the gap. Content margin was exactly zero in all five frontier cells despite total
effects up to +0.275. · `2606.22329` (BabelJudge: position and verbosity bias hidden by
raw accuracy) · `2607.14480` (LLM evaluators score lower-resource languages higher).

---

## 3. Swarm and emergence with smaller models

Ranked deliberately: the first two say when a swarm of weak models pays, the last three
say how collective behaviour goes wrong. Read against
[`llm-swarm-intelligence.md`](llm-swarm-intelligence.md) — `2606.27288` is the general
form of the effect that paper measured on three models.

**[`2606.27288`](https://arxiv.org/abs/2606.27288) — When Does Combining Language Models Help? A Co-Failure Ceiling Across 67 Frontier Models** (Chen, 2026-06-25)
The ceiling nobody reports. For any policy whose output is one member's answer, accuracy
**cannot exceed 1 − β**, where β is the rate at which *every* model is wrong on the same
query. The usual diagnostic — average pairwise error correlation ρ — provably cannot
identify β: identical marginals and pairwise correlations can hide different all-wrong
rates. A Clopper-Pearson bound on β certifies the largest gain any router, vote or cascade
could ever deliver, **before** building it. Across 67 models from 21 providers the
all-wrong tail is underpriced ~2.5x by a Gaussian copula (β 0.052 observed vs 0.023;
0.079 on execution-graded code). Re-asking GPQA-Diamond as free-response instead of
multiple-choice reopens the tail (β 0.127) — **co-failure sits in the answer format, not
the subject**. At matched quality, low-ρ heterogeneous ensembles beat high-ρ Self-MoA;
but on checkable tasks, combining rarely beat the single best model without a strong
query-level routing signal. "Gains come from models failing on different questions, not
from adding more models."

**[`2607.20216`](https://arxiv.org/abs/2607.20216) — Small, Free, and Effective: Orchestrating Open-Weight SLMs to Outperform a Single LLM** (ElZemity, Li, Arief, RAID 2026, 2026-07-22)
The concrete existence proof for the cheap-swarm idea. Eleven open-weight small models,
four orchestration architectures (evidence pipeline, adversarial debate, hierarchical
consultation, hybrid) on Meta's CyberSecEval malware benchmark. The hybrid — Qwen3-4B
paired with Foundation-Sec-8B — reached **35.30%, above the strongest ungrounded frontier
baseline at 34.77%**. Note the honest control the abstract keeps: given the *same*
evidence pipeline, grounded Gemini stayed ahead at 38.22%. So the win comes from
**evidence grounding**, and small models capture most of it at a fraction of the cost.
**→ hier:** the `simple` / `cloud-oss` aliases on the LiteLLM proxy are exactly this
hardware. Domain-specific, not general.

**[`2605.10698`](https://arxiv.org/abs/2605.10698) — The Bystander Effect in Multi-Agent Reasoning** (Shehata & Li, 2026-05-11)
22,500 deterministic trajectories across GAIA, SWE-bench and Multi-Challenge, auditing
internal reasoning traces against external outputs. Finds a **"Sovereignty Gap": models
compute the correct derivation internally, then abandon it to agree with the swarm**.
Formalises an Interaction Depth Limit — the plurality threshold where independent
reasoning collapses into compliance. Social load is non-commutative: the identity of the
lead agent disproportionately determines the group's result.
**Usable:** if subagents see each other's answers, majority is measuring conformity, not
agreement. Ask them blind.

**[`2608.02827`](https://arxiv.org/abs/2608.02827) — Emergence of Biased Consensus in Multi-Agent LLM Debates** (Okawa, ICML 2026, 2026-08-03)
The same collapse, given a physics of it. Predicts a **phase transition to collective
bias once conformity passes a critical threshold**, set by initial bias and debate noise
(sampling temperature is a key driver). Confirmed by a finite-size crossover in controlled
experiments. The lever: **agent heterogeneity suppresses the emergence by rounding the
transition**. Generalises to investment decisions and LLM-as-judge evaluation.

**[`2608.00028`](https://arxiv.org/abs/2608.00028) — Width, Memory, and Delay: Limits of Flat Multi-Agent Systems** (Kuznetsov & Frontoni, 2026-07-14)
A direct rebuttal of a recent claim that flat swarms face an irreducible error floor
removable only by hierarchy. On a testbed with a computable optimum: the floor is set by
**per-agent internal-model content, not architecture** — a flat swarm whose agents carry a
matched internal model matches or beats a two-loop hierarchy at equal per-agent memory.
Width, memory and delay are **not interchangeable**; the paper charts the exchange rates
and the hard non-exchange boundaries. A residual floor remains, set by observation delay.

*Also seen:* `2606.07810` (SLMJury: 16 small judges, 0.6B–14B — under a debate protocol
**multi-agent debate degraded accuracy in every tested configuration**) · `2605.30102`
(hybrid cloud-LLM/device-SLM systems, ICML 2026 workshop: optimal architecture is highly
task-dependent, more frontier compute does not reliably help).

---

## 4. Improving results with "dumb" tools

The through-line: a cheap deterministic component placed *beside* the model beats a second
model placed *above* it — but only where the check is exact. The last entry is the
counter-example, and it belongs here.

**[`2608.01050`](https://arxiv.org/abs/2608.01050) — Don't Offer What Can't Be Done: Deterministic Executability Gating for LLM Skill Selection** (Ashkenazi, Kloz, Ulianchenko, 2026-08-02)
Deployed at Wix, measured in production: 756.6K messages, 267.6K conversations. Semantic
matching alone cannot tell that a skill is impossible *in this account state*. A
**deterministic gate evaluating the same exit predicates as the skill** removed 59.4% of
skill-message pairs and 228.8M description tokens; with semantic matching, **90.5% less
skill-description context**. The part that matters most is the counterfactual replay: with
all skills exposed, the model picked a production-blocked skill in **7.8% of
conversations**. The gate does not merely save tokens, it stops impossible options from
influencing the choice.
**→ hier:** 118 skill directories sit under `~/.claude/skills` (counted 2026-08-11). Any
skill whose precondition is checkable without a model — missing credential, wrong
directory, absent binary — can be gated exactly this way.

**[`2608.02464`](https://arxiv.org/abs/2608.02464) — Real-Time Detection and Repair of LLM Agent Failures** (Dubey, 2026-08-03)
Starts from the cost argument: judging every step with a second LLM costs more than the
agent. Two layers on 2,823 committed episodes across three frameworks. The learned
monitor (echo-state ensemble on step telemetry, ~200µs/step) reaches 0.71 detection at a
5% false-alarm budget — but carries a per-deployment healthy null that **does not
transfer** (AUROC 0.527 cold vs 0.885 recalibrated). The layer with no such burden is
**deterministic verification: recompute the run's stated total from the tool results it
actually received, and confirm every required call was made**. Head-to-head it catches
60% of failures (96% with the coverage check) at **0 of 63 false positives**, transfers
unchanged to another model, and trips on 0 of 1825 healthy episodes. Rolling back and
re-running flagged episodes recovered 45% of failures against a 16% resampling control
(p=0.0005), lifting task success 52% → 73% for about one extra model call.
**→ hier:** "recompute the number from the artefacts the run actually touched" is the
cheapest possible version of the proof-with-numbers rule, and it is not a judge.

**[`2606.14935`](https://arxiv.org/abs/2606.14935) — PrologMCP: A Standardized Prolog Tool Interface for LLM Agents** (Mensfelt, Prabhakaran, Haret et al., 2026-06-12)
Symbolic delegation as a **reusable MCP primitive** rather than a bespoke integration: the
model translates, Prolog infers, and the translate-run-inspect-repair loop is exposed as a
stateful tool with structured error reporting and per-session isolation. On the harder
PARARULE-Plus subset the formalizer agent stays at 1.00/0.99 while reasoning models
(Claude Sonnet 4.6, o4-mini) drop to 0.95/0.94 — and extended internal reasoning is the
expensive way to buy that.

**[`2606.27281`](https://arxiv.org/abs/2606.27281) — Resource-Aware Neuro-Symbolic Reasoning for Local Small Language Models** (Ramírez Ovalle & Alvarez, 2026-06-25)
The same idea sized for consumer hardware, and the sharpest number in this section. The
model emits typed finite-domain rules, a symbolic layer checks consistency, a
deterministic solver reasons. Qwen3-4B in LM Studio on Apple Silicon: **0.983 vs 0.700 for
five-sample self-consistency — using one model call instead of five**. On a BBH-derived
logical-deduction subset, **0.933 vs 0.283**. The advantage survives a cost-aware adaptive
self-consistency baseline. Explicitly bounded: finite-domain logic only, and it is
model-dependent (Phi-4-mini went negative on typed constraints).
**→ hier:** the strongest published case that a solver beats sampling a weak local model
repeatedly — same class of hardware as the Ollama setup.

**[`2608.03065`](https://arxiv.org/abs/2608.03065) — Efficient Grammar-Constrained Decoding via Parser Stack Classification** (Li, Dong, Li et al., ISSTA 2026, 2026-08-04)
The dumbest tool of all — a parser — with the objection removed. Grammar-constrained
decoding guarantees syntactic validity but has cost linear in vocabulary size. PSC folds
the acceptance conditions of the whole vocabulary into one classifier over the parser
stack, computing the mask by checking the stack **once per step, independent of vocabulary
size**: masks up to 700x faster on programming grammars, 30x for JSON, end-to-end
throughput approaching unconstrained decoding.

**The counter-example, and it is the important one:**
[`2607.20492`](https://arxiv.org/abs/2607.20492) — **PhantomFill: When the Form Demands an
Answer, Language Models Invent One** (Usman, 2026-06-11). A dumb tool can also *cause* the
failure. Thirteen models, same question, same input, only the answer format changed, on
inputs where the question is unanswerable. In free text GPT-5.5 says there is no data 98%
of the time; **given a required JSON field, the same model invents an answer 40 times out
of 40.** Required fields drove fabrication to 100% in ten of thirteen models. An explicit
"insufficient evidence" option rescued only frontier models — all nine open-weight models
ignored it. Under grammar-constrained decoding, with the escape token guaranteed reachable,
five open models spent it **0 times in 203 trials** on the fields that carry the
fabrication, and 12 times on the one field where escaping conceded nothing. A direct
instruction not to infer was overridden by the schema in four of six models. Resistance
did not scale monotonically: within one family the smallest model refused, the mid-sized
fabricated, the largest refused.
**Usable:** a required field is a coercion. Every structured output needs a reachable
"unknown", and a schema that makes leaving it empty legal.

---

## What the four sections say together

1. **Diversity is the scarce resource, not agents.** The co-failure ceiling (`2606.27288`),
   the judge-panel result (`2608.06940`) and the swarm paper already in this folder all
   measure the same thing from different sides: nine correlated voters ≈ two independent
   ones, and adding members does not move β. Heterogeneity is the only lever
   (`2608.02827`), and social exposure destroys even the diversity you have (`2605.10698`).
2. **Feedback loops are weaker than their evaluations suggest, for two separate reasons.**
   The extra attempt is doing the work, not the feedback (`2607.26117`); and part of the
   measured gain is format repair rather than reasoning (`2608.04355`).
3. **The cheap deterministic check is the best-performing component in the set** — 0 false
   positives in 63 (`2608.02464`), 0.983 vs 0.700 at one fifth the calls (`2606.27281`),
   7.8% of choices corrupted without a gate (`2608.01050`). None of these is a model.
4. **But a dumb tool placed in front of generation coerces** (`2607.20492`). Beside the
   model: good. Demanding an answer the evidence does not contain: harmful.

## Method

Retrieved with `tools/arxiv-search.py` in the assistant repo (written for this task)
against `export.arxiv.org/api/query`, 20 queries across the four topics,
sorted by submission date and cut at 2025-06. Selection was by hand from titles and
abstracts; the 20 finalists were then re-fetched by ID with full abstracts, which is what
these notes are written from. Two caveats worth keeping: the arXiv API answers `429 Rate
exceeded` under load and an empty result must not be read as "no papers exist"; and
`http://export.arxiv.org` redirects in a way that drops the query string — use `https://`.
