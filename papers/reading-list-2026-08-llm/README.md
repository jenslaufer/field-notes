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
- [ ] `2608.01810` — RADAR: rubric dependency and redundancy
- [ ] `2606.26300` — The Verification Horizon
- [ ] `2607.26117` — Try Again, Don't Look Back
- [ ] `2606.23196` — When Does Intrinsic Self-Correction Help?
- [ ] `2608.04355` — The Calibration Floor (*also seen*, but the sharpest methodological warning of the four sections — treat as a main entry)

## 3. Swarm and emergence with smaller models

- [ ] `2606.27288` — Co-Failure Ceiling across 67 frontier models
- [ ] `2607.20216` — Small, Free, and Effective (orchestrating open-weight SLMs)
- [ ] `2605.10698` — The Bystander Effect in Multi-Agent Reasoning
- [ ] `2608.02827` — Emergence of Biased Consensus in Multi-Agent Debates
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
