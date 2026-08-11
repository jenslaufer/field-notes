# Full-text distillations — reading list 2026-08 (LLM)

One note per paper from [`../reading-list-2026-08-llm.md`](../reading-list-2026-08-llm.md).
Unlike the reading list, which is written from abstracts, **every note here is written from the
full text** (arXiv LaTeXML HTML), and each states what the paper's own tables contradict or
what its headline claim quietly excludes.

Started 2026-08-11. Notes are added in reading-list order; this index is the ledger.

## 1. Context and memory optimisation

- [x] [`2607.01224`](2607.01224-automem.md) — **AutoMem**: memory as a trainable skill. Scaffold beats model, but only on *episodic* memory, and the 32B win is bought with two Opus meta-LLMs offline.
- [x] [`2607.22962`](2607.22962-consistencygate.md) — **ConsistencyGate**: check a fact at write time. Costs 42 % of correct facts when they are implicit — the paper's own operating regime excludes conversational memory.
- [x] [`2607.27773`](2607.27773-chronomem.md) — **ChronoMem**: versioned memory + NL rollback. Recall@1 is 20.5 %; the durable result is the negative one (prompt-only rollback scores 2 %).
- [x] [`2608.00009`](2608.00009-agentmembench.md) — **AgentMemBench**: five strategies, one harness. Windows and summaries score 0.000–0.005 on long-range recall; the paper's own baseline table dissolves its cost argument.
- [x] [`2605.17304`](2605.17304-context-codec.md) — **Context Codec**: compress commitments, not tokens. Its own Table 5 trips its own rejection criterion 2 — structured prose ties on faithfulness and is shorter on average — and the BPE check undoes the token column.
- [ ] `2607.14275`, `2608.09153` (*also seen* in the reading list — lower priority)

## 2. Orthogonal evaluation and feedback loops

- [x] [`2608.06940`](2608.06940-pivotal-vote.md) — **Pivotal Vote**: a second ballot can only matter on a 4–3 split — zero gain elsewhere, provably. But its own Table 7 shows just running the tests beats every panel policy tested.
- [x] [`2608.01810`](2608.01810-radar.md) — **RADAR**: probe one criterion, watch the others move. Helpfulness/correctness couple at 0.92 — not two dimensions. But the advertised `r ≥ 0.84` holds in 20 of 36 grid cells; the worst reads **−0.04**.
- [x] [`2606.26300`](2606.26300-verification-horizon.md) — **The Verification Horizon** (Qwen, production): scalable/faithful/robust — pick two. A judge that *runs* the artifact resists the length exploitation a judge that *reads* it invites; five of seven "cheating" behaviours correlate with failure, not success.
- [x] [`2607.26117`](2607.26117-try-again.md) — **Try Again, Don't Look Back**: the placebo the self-repair literature omits. Below 7B, blind resampling beats showing the model its own failed program; the diagnostic content of execution feedback adds `+0.000`.
- [x] [`2606.23196`](2606.23196-when-does-sc-help.md) — **When Does Intrinsic SC Help?**: 19 of 35 cells significant, 4 negative, and SAT — the one benchmark with a real checker — carries the result. Missing the one-call control that would settle it.
- [x] [`2608.04355`](2608.04355-calibration-floor.md) — **Calibration Floor**: most measured "self-correction" is a regex finding a number. Forcing parseable output removes a median 71 % of the effect; a 32-token "finish your sentence" beats the full two-round review 63.5 % vs 19.2 %.

## 3. Swarm and emergence with smaller models

- [x] [`2606.27288`](2606.27288-co-failure-ceiling.md) — **Co-Failure Ceiling** (67 models, 21 providers): every router/vote/cascade is capped at `1−β`, and pairwise ρ **provably cannot see β**. Stripping the answer options from GPQA moves β from ≈0 to 0.127 — format sets the regime, not subject.
- [x] [`2607.20216`](2607.20216-small-free-effective.md) — **Small, Free, and Effective**: its own appendix shows self-debate reproduces **95 %** of the "collaboration" gain (Ministral-8B). The deterministic tools carry 11.17 pp, the LLM verifier 0.26 pp — a section-4 paper with a section-3 title.
- [x] [`2605.10698`](2605.10698-bystander.md) — **The Bystander Effect**: one sentence claiming a peer consensus takes GPT-5.4 from 1.00 to **0.23** (74 % adopt the wrong answer); Claude 4.6 unmoved. There is no swarm — the manipulation is prompt text, which is exactly why it applies here. Its Sovereignty Gap theorem differences a Likert score against an accuracy rate.
- [x] [`2608.02827`](2608.02827-biased-consensus.md) — **Biased Consensus**: a debate is a spin system and sampling temperature is the knob. Below T≈0.5 an arbitrarily small shared bias locks into unanimity **within 1–2 rounds**; *mixing* temperatures across agents cuts bias and lifts performance. Its ablation summary contradicts its own figure caption on the sign of λ.
- [ ] `2608.00028` — Width, Memory, and Delay

## 4. Improving results with "dumb" tools

- [ ] `2608.01050` — Deterministic Executability Gating (Wix, production)
- [ ] `2608.02464` — Real-Time Detection and Repair of Agent Failures
- [ ] `2606.14935` — PrologMCP
- [ ] `2606.27281` — Resource-Aware Neuro-Symbolic Reasoning
- [ ] `2608.03065` — Grammar-Constrained Decoding via Parser Stack Classification
- [ ] `2607.20492` — PhantomFill (the counter-example)

## How the full text is obtained

arXiv serves a LaTeXML HTML rendering at `https://arxiv.org/html/<id>v<N>` — full body, tables
included, no PDF parsing. All 22 papers above resolved this way on 2026-08-11 (v1–v3;
`ar5iv.labs.arxiv.org/html/<id>` is the fallback). Two traps, both hit in the earlier run and
recorded in the reading list's Method section: `http://export.arxiv.org` drops the query string
on redirect (use `https://`), and the API answers **`429 Rate exceeded` with HTTP 200**, so an
empty result must never be read as "no papers exist".
