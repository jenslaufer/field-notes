# Papers — insights for Jens

Collects the personal takeaways that previously sat inside the individual paper notes (the
"→ hier" paragraphs, "Our stack" lines and setup-specific transfers).

The German synthesis [`reading-list-2026-08-llm/ZUSAMMENFASSUNG.md`](reading-list-2026-08-llm/ZUSAMMENFASSUNG.md)
("was davon heute in unser Setup passt", written for Jens on 2026-08-11) stays as it was. It
carries the prioritised to-do list for the 22 papers; this file carries the per-note detail.

Memory-entry names in backticks (`unrunnable check`, `proof with numbers`, …) are the
`[[...]]` links the notes carried into Jens' learnings.

## Recurring themes

### 1. The `*-critic` agents are the machinery most papers land on

- 13 critic agents, **137 required numeric score fields, 0 escape values** (counted 2026-08-11
  across `~/.claude/agents/*-critic/v1.md`). `email-marketing-critic:77` and `seo-critic:67`
  prescribe **100 points** for a dimension that does not apply — a fabricated maximum flowing
  into the average that gates the loop. Fix: `null` / `insufficient_evidence` per dimension,
  skipped by the aggregate; a schema linter would flag 137 of 137
  ([PhantomFill](reading-list-2026-08-llm/2607.20492-phantomfill.md)).
- No rubric has ever been checked for whether its 8–10 dimensions are separate signals. Run the
  RADAR self-effect probe (N=1 suffices: 20 generations, 200 scoring calls — an afternoon) and
  score each dimension in its own call
  ([RADAR](reading-list-2026-08-llm/2608.01810-radar.md),
  [reading list](reading-list-2026-08-llm.md),
  [Bystander](reading-list-2026-08-llm/2605.10698-bystander.md)).
- Every critic is reject-only: it scores, it gates, no repair channel beyond "try again". Measured,
  that shape scores **below doing nothing** (0.250 vs 0.275). Never ship a check — critic or
  `/quality-gate` — without a repair path
  ([VFR-LLM](reading-list-2026-08-llm/2606.27281-resource-aware-neuro-symbolic.md)).
- A critic without outside evidence changes nothing; taste checks ("is this AI slop", tone) are
  the low-verifiability case where a second pass costs accuracy. Bring evidence or skip the loop
  ([Calibration Floor](reading-list-2026-08-llm/2608.04355-calibration-floor.md),
  [When does SC help](reading-list-2026-08-llm/2606.23196-when-does-sc-help.md),
  [Pivotal Vote](reading-list-2026-08-llm/2608.06940-pivotal-vote.md)).
- Score critics before trusting them — reject rate + MCC on a calibration sample, never raw
  accuracy ([Pivotal Vote](reading-list-2026-08-llm/2608.06940-pivotal-vote.md)). The actor/critic
  skills are the CRITIC / Constitutional pattern
  ([02](orthogonal-agent-verification/02-constitutional-ai.md),
  [survey](orthogonal-agent-verification.md)).

### 2. Deterministic check first, model second

- Run the test suite, the `grep`, the API call, `git ls-files -s` before any panel. The repeated
  finding that a measurement beats a judgement (`unrunnable check`, `absence test`,
  `proof with numbers`) is the same result
  ([Pivotal Vote](reading-list-2026-08-llm/2608.06940-pivotal-vote.md),
  [Detection and Repair](reading-list-2026-08-llm/2608.02464-detection-and-repair.md)).
- Existing fragments: `deadline-check.py` (exit 2 = unreadable), `context-budget.py`,
  `cal-availability-check.py`. Missing: **no figure in a Telegram report that does not trace to a
  fetched result** ([Detection and Repair](reading-list-2026-08-llm/2608.02464-detection-and-repair.md),
  [reading list](reading-list-2026-08-llm.md)).
- The Quality Gate (unit + build + e2e in clean containers) is the external oracle CRITIC asks
  for ([03](orthogonal-agent-verification/03-critic.md), [survey](orthogonal-agent-verification.md)).
- Ablate the deterministic parts first when an orchestration result looks good — they are
  usually load-bearing ([Small, Free, Effective](reading-list-2026-08-llm/2607.20216-small-free-effective.md)).

### 3. How to prompt a checking agent

- Never state the prior conclusion ("Verify: X", "the previous session found X", "prüfe diesen
  Befund"). Use the refutation shape only: *"try to refute this; default to refuted=true if
  uncertain"* ([Bystander](reading-list-2026-08-llm/2605.10698-bystander.md)).
- Give coordinates, never the verdict: name the failing check, withhold the value
  (45 % vs 36 %) ([Detection and Repair](reading-list-2026-08-llm/2608.02464-detection-and-repair.md)).
- Shuffle findings before a verification pass; the first item anchors. Hand each verifier one
  finding, blind to the rest ([Bystander](reading-list-2026-08-llm/2605.10698-bystander.md),
  [Biased Consensus](reading-list-2026-08-llm/2608.02827-biased-consensus.md)).
- Actor and critic on different temperatures, ideally different families — at comparable
  quality only ([Biased Consensus](reading-list-2026-08-llm/2608.02827-biased-consensus.md)).
- A wrong subagent result: re-dispatch fresh, do not paste it back. Cap loops at two
  ([Try Again](reading-list-2026-08-llm/2607.26117-try-again.md)). Put the checklist in the first
  prompt before building a second pass ([When does SC help](reading-list-2026-08-llm/2606.23196-when-does-sc-help.md)).
- Premortem memory + refute-by-default skeptics = debate / devil's advocate on own findings
  ([04](orthogonal-agent-verification/04-multi-agent-debate.md)).

### 4. The assistant's memory (`state/memory/`, `MEMORY.md`, `waiting.md`, `routines.md`)

- `state/memory/` is windows (today + yesterday) plus summaries — the two strategies AgentMemBench
  rates last (0.000 / 0.005). Do not trust a summary to carry something six weeks back; the exact
  path is `grep` over `learnings.md`. If ever built: the MemGPT shape
  ([AgentMemBench](reading-list-2026-08-llm/2608.00009-agentmembench.md)).
- The file that grows needs a key, not more discipline — same lesson as the `waiting.md` /
  `routines.md` condensations ([AutoMem](reading-list-2026-08-llm/2607.01224-automem.md)).
- Do not gate `MEMORY.md` writes with a consistency check (it drops 2 of 5 true implicit facts);
  gate only short structured writes (API numbers, invoices, store pages) with the LogProb variant
  ([ConsistencyGate](reading-list-2026-08-llm/2607.22962-consistencygate.md)).
- Revoke a fact in the file, not in the instruction; `git log -S` beats a semantic version picker
  ([ChronoMem](reading-list-2026-08-llm/2607.27773-chronomem.md)). Stale rule files fail like
  stale internal models ([Width, Memory, Delay](reading-list-2026-08-llm/2608.00028-width-memory-delay.md)).
- Accept a compaction by Critical Atom Recall, checked by a decoder that never saw the original
  ([Context Codec](reading-list-2026-08-llm/2605.17304-context-codec.md)). The memory files are
  Reflexion ([06](orthogonal-agent-verification/06-reflexion.md)).

### 5. LiteLLM aliases and local models

- `smart` (Opus) and `simple` (qwen3:8b) are unequal: **voting across them hurts** (−0.10)
  ([Co-Failure Ceiling](reading-list-2026-08-llm/2606.27288-co-failure-ceiling.md),
  [PhantomFill](reading-list-2026-08-llm/2607.20492-phantomfill.md)).
- `smart → cloud-oss → simple` buys availability, not quality — keep the README claim there
  ([Co-Failure Ceiling](reading-list-2026-08-llm/2606.27288-co-failure-ceiling.md)).
- `simple` is the model class where a schema doubles quality and where an offered escape is never
  taken; it is also the class a formalisation harness can destroy
  ([PSC](reading-list-2026-08-llm/2608.03065-parser-stack-classification.md),
  [VFR-LLM](reading-list-2026-08-llm/2606.27281-resource-aware-neuro-symbolic.md),
  [reading list](reading-list-2026-08-llm.md)).

### 6. Measuring own experiments and bake-offs

- Matched-budget controls before believing any loop helped: run the actor twice at the same
  budget; run the self-debate diagonal; ask whether a random second opinion helps more
  ([Try Again](reading-list-2026-08-llm/2607.26117-try-again.md),
  [Small, Free, Effective](reading-list-2026-08-llm/2607.20216-small-free-effective.md),
  [Pivotal Vote](reading-list-2026-08-llm/2608.06940-pivotal-vote.md)).
- The recurring own failure — the instrument's failure scored as the subject's (`unrunnable
  check`, `false 429`, exit 126 on 13 test files at mode 100644, `booking ≠ attendance`). Keep a
  third outcome "unreadable" everywhere
  ([Calibration Floor](reading-list-2026-08-llm/2608.04355-calibration-floor.md),
  [When does SC help](reading-list-2026-08-llm/2606.23196-when-does-sc-help.md)).
- Small denominators: FinGrab's 7 reviews, a 12-sample case study, a three-question A/B
  ([Small, Free, Effective](reading-list-2026-08-llm/2607.20216-small-free-effective.md)).
- Fabrik bake-offs: N-version divergence is the signal, compare arms pairwise, track cost,
  read behaviour, measure run-to-run consistency of Fabrik workers; check token ceilings in
  `topic_fabrik_output_quality` A/Bs ([01](orthogonal-agent-verification/01-self-consistency.md),
  [08](orthogonal-agent-verification/08-llm-blender.md),
  [09](orthogonal-agent-verification/09-ai-agent-reliability.md),
  [10](orthogonal-agent-verification/10-holistic-agent-leaderboard.md),
  [Try Again](reading-list-2026-08-llm/2607.26117-try-again.md)).

### 7. The skill index as a menu

- 118 skill directories under `~/.claude/skills` (2026-08-11); 122 of 162 skills never invoked,
  8,642 index tokens per session, 67 % dead. Gate skills whose preconditions fail (`test -f` on a
  credential, missing repo, discontinued channel, broken browser stack) instead of pruning by
  memory ([Executability Gating](reading-list-2026-08-llm/2608.01050-executability-gating.md),
  [reading list](reading-list-2026-08-llm.md)).

## By episode

### 2026-08-11 · [Reading list — four questions about running LLMs](reading-list-2026-08-llm.md)

- The list marked setup mappings as **→ hier** (Jens' inference, not the papers' claim).
- AutoMem: closest published description of `state/memory/`; test the leverage — memory
  structure, not model. ConsistencyGate: what earns a line in `MEMORY.md` is a write-time
  judgement call with no check. ChronoMem: the snapshot half is free (`state/` is git); the
  semantic half is missing. AgentMemBench: windows + summaries rank last for long-range recall.
  Context Codec: `waiting.md` is a commitment store; recent condensations were verified ad hoc
  this way (re-find every code span and number).
- RADAR: every critic skill scores 8–10 dimensions and sums them — measure coupling first.
- Small/Free/Effective: the `simple` / `cloud-oss` aliases are this hardware; domain-specific.
- Executability Gating: 118 skill dirs; gate those with model-free preconditions (missing
  credential, wrong directory, absent binary).
- Detection and Repair: "recompute the number from the artefacts the run touched" is the cheapest
  proof-with-numbers rule, and no judge.
- VFR-LLM: strongest case that a solver beats resampling a weak local model — same hardware class
  as the Ollama setup.
- Method: retrieved with `tools/arxiv-search.py` in the assistant repo.

### 2026-08-11 · [AutoMem](reading-list-2026-08-llm/2607.01224-automem.md)

- Closest description of `state/memory/`, but the claim is narrower: scaffold beats model, on
  episodic memory, with a frontier reviewer reading whole traces. Port the four Appendix-B
  scaffold rules, above all the deduplicating key — the `waiting.md` / `routines.md` lesson.

### 2026-08-11 · [ConsistencyGate](reading-list-2026-08-llm/2607.22962-consistencygate.md)

- Not for `MEMORY.md`: session learnings are the LoCoMo shape (gate drops two of five true facts).
  Fits short, structured, single-source writes — a number from an API response, an invoice, a
  store page — with the cheap LogProb variant.

### 2026-08-11 · [ChronoMem](reading-list-2026-08-llm/2607.27773-chronomem.md)

- `state/` is git, which adds branching ChronoMem lacks. Do **not** build the semantic picker:
  Recall@1 20.5 % means wrong four times in five; `git log -S '<the wrong fact>'` is exact.
- Keep the negative result: revoke a fact in the file, not the instruction
  (`retraction hits generator`).

### 2026-08-11 · [AgentMemBench](reading-list-2026-08-llm/2608.00009-agentmembench.md)

- Rates the assistant's memory design last: `state/memory/` = ICW + CBS (`MEMORY.md`, daily
  notes), 0.000 and 0.005. Not "build a vector store" — never trust a summary for something six
  weeks back; `grep` over `learnings.md` is the exact path the benchmark never measures. Copy the
  MemGPT row if this gets built: small bounded context, rest on disk, fetched on demand.

### 2026-08-11 · [Context Codec](reading-list-2026-08-llm/2605.17304-context-codec.md)

- Vocabulary for the compaction work on `waiting.md`, `routines.md`, `MEMORY.md`.
- Acceptance test = Critical Atom Recall, not byte count. The `routines.md` pass (2026-08-11)
  re-checked 181 code spans and 104 numbers, 0 missing (two real losses caught on the first run).
  The `waiting.md` "max 4 lines" rule caps a surface unit (`rule caps wrong unit`).
- Own compaction checks are circular (same author writes compaction and check). Fix: a decoder
  that sees only the compressed file reconstructs the commitments.
- Do not invent a notation; git already gives diffing and audit for `state/`.
- Use the error taxonomy as a review checklist for podcast notes, distillations, handovers. The
  obsolete "Sie waren nie im Haus" surviving into a later draft was a temporal/decision error.

### 2026-08-11 · [Pivotal Vote](reading-list-2026-08-llm/2608.06940-pivotal-vote.md)

- The repo runs actor/critic pairs everywhere (`copywriting-critic`, `webdesign-critic`,
  `python-backend-critic`, …) on the intuition the paper attacks.
- Run the deterministic check alone before any panel (test suite, `grep`, API call,
  `git ls-files -s`).
- Score critics by reject rate + MCC on a calibration sample, not raw accuracy.
- A third source adds nothing when two agree; locally the checks are the cheap side, so run the
  check always and convene a panel only on disagreement.
- Steal the permutation control.

### 2026-08-11 · [RADAR](reading-list-2026-08-llm/2608.01810-radar.md)

- Lands most directly on running machinery: a dozen critics (`copywriting-critic`,
  `webdesign-critic`, `vue-developer-critic`, `python-backend-critic`, `research-critic`,
  `task-spec-critic`, `ticket-critic`) at 8–10 dimensions, none checked for separability.
- Self-effect probe first (one good, one bad example per dimension; N=1 is enough; 20 generations
  + 200 scoring calls). Trust leakage findings, not clean matrices. Score each criterion in its own
  call — cheap fix regardless of the audit. Same result as Pivotal Vote: opinions ≠ independent
  signals.

### 2026-08-11 · [The Verification Horizon](reading-list-2026-08-llm/2606.26300-verification-horizon.md)

- Judging store copy, a PR description or a draft by reading it is the static judge that gets
  gamed (`copy vs shipped behaviour`, `absence test`).
- The four evaluator failure modes are a checklist for critic prompts; at least two shipped
  already — judging by reading, and fixing while reviewing.
- More rules made the judge worse (v4 → v5): ask that before adding a rule to a critic prompt or
  `CLAUDE.md`.
- Silence = approval (76.6 %): the base rate behind Jens' inbox. A message silent on the last
  action is the modal case, not a signal; the recurring error is reading quiet as a finding.
- Keep the failures: `w_neg = 0.0` scored 4.6 points below full weight — `learnings.md` stays
  long, wrong turns stay in the journal.

### 2026-08-11 · [Try Again, Don't Look Back](reading-list-2026-08-llm/2607.26117-try-again.md)

- Third paper in a row: the control decides. Before believing a critic/repair loop helped, run the
  actor twice at the same budget.
- Re-dispatch a wrong subagent fresh (33–68 % near-identical regeneration otherwise;
  `retraction hits generator`).
- Cap "iterate until it's good" at two rounds (46–53 % of gain by k=2, ~0 by k=7).
- A budget binding one arm measures the budget (`unrunnable check`, `false 429`); check token
  ceilings in the `topic_fabrik_output_quality` A/Bs before their outputs.
- Refusal: no licence for "self-repair is useless" on Opus-class work — all models ≤7B; the
  method transfers, not the sign.

### 2026-08-11 · [When Does Intrinsic SC Help?](reading-list-2026-08-llm/2606.23196-when-does-sc-help.md)

- Before any two-stage draft→review, test one stage with the review criteria in the instruction.
- Most critic asks (tone, "is this AI slop", "is this a good idea") are Movie Recommendation, not
  SAT; with a checker (tests, `grep`, API response, `deadline-check.py`) the second pass earns its
  keep (C2W ≤ 2.1 %).
- Deleting unanswered instances is a silent version of the recurring failure (`unrunnable check`,
  `false 429`, `booking ≠ attendance`).

### 2026-08-11 · [Calibration Floor](reading-list-2026-08-llm/2608.04355-calibration-floor.md)

- Jens' most-repeated failure mode, found in the literature: instrument failure scored as subject
  failure — unrunnable check read as passed, `429` read as dead API, 13 test files at mode 100644
  returning exit 126, empty booking list read as nobody attending.
- Third outcome "unreadable" in every scoring pipeline, like `deadline-check.py` exit 2.
- Constrain subagent output instead of regex-parsing it (median 71 % of the effect).
- Steal the probe and its fidelity control (≥ 90 % on already-parsed rows).
- For the actor/critic skills: bring outside evidence or skip the loop.
- The permutation-floor and published-bug honesty is the bar for own numbers
  (`proof with numbers`).

### 2026-08-11 · [Co-Failure Ceiling](reading-list-2026-08-llm/2606.27288-co-failure-ceiling.md)

- Most load-bearing paper for the multi-agent work. Run the β certificate (Clopper–Pearson on one
  held-out set) before building any panel.
- Jens' work is free-response (drafts, analyses, code, decisions) — the ceiling-bound regime;
  multiple-choice orchestration gains do not transfer.
- "Three models once" holds only at matched quality (+0.027); across `smart` (Opus) and `simple`
  (qwen3:8b) voting loses 0.10. Corrects the 07-30 note from the swarm paper.
- The fallback chain `smart → cloud-oss → simple` is a verifier-less cascade: availability, not
  accuracy. The README's "an answer always returns" is fine; do not let it drift into a quality
  claim.
- An LLM router routed to the best model 100 % of the time — do not assume a dispatcher agent can
  allocate by reading the task (`rubric weights`, `one-answer criterion`).
- Both instrument bugs the authors caught are Jens' own too.

### 2026-08-11 · [Small, Free, and Effective](reading-list-2026-08-llm/2607.20216-small-free-effective.md)

- Measure every actor/critic or debate setup against itself twice (self-debate diagonal).
- Ablate deterministic parts first (`unrunnable check`, `absence test`).
- When claiming a scaffold beat a plain call, give the plain call the same context, tools and
  evidence.
- Check denominators: FinGrab's 7 reviews, a 12-sample case study, a three-question A/B
  (`proof with numbers`, `number needs distribution`).

### 2026-08-11 · [The Bystander Effect](reading-list-2026-08-llm/2605.10698-bystander.md)

- The manipulation prompt is one Jens writes constantly ("Verify this finding", "The previous
  session concluded X — check it", "Three reviewers flagged this").
- Stop stating prior conclusions; the Workflow refutation pattern should be the only shape; run
  checks where possible (`unrunnable check`).
- Order is load-bearing: do not pass findings in finder order; a flip under reordering is a
  harness signal (`rubric weights`).
- Never difference two numbers from one judge call — the `*-critic` agents emit 8–10 dimensions in
  one response (`coverage || loophole`, `proof with numbers`).

### 2026-08-11 · [Biased Consensus](reading-list-2026-08-llm/2608.02827-biased-consensus.md)

- Actor and critic must not share a temperature, probably not a family — mix only at comparable
  quality.
- Lock-in happens in rounds 1–2: collect independent verdicts first, then aggregate.
- Fit `m(t) → m(t+1)` from existing traces to separate bias from conformity.
- Handing a verifier all prior findings is all-to-all; one finding each is the sparse version the
  pipeline pattern uses when not short-circuited (`rubric weights`).

### 2026-08-11 · [Width, Memory, and Delay](reading-list-2026-08-llm/2608.00028-width-memory-delay.md)

- Stale internal model = a `routines.md` line whose kill condition fell weeks ago, or "Sie waren
  nie im Haus" surviving into a later draft (`handover = live state`,
  `retraction hits generator`). "Measure what none can do first" ties to `false 429`.

### 2026-08-11 · [Executability Gating](reading-list-2026-08-llm/2608.01050-executability-gating.md)

- Own skill index: **122 of 162 skills never invoked, 8,642 tokens per session, 67 % dead**
  (2026-08-11). Treated as pruning; Wix's answer is better — a skill whose preconditions cannot
  hold should not be on the menu.
- Preconditions are deterministic: missing credential file, repo not checked out, discontinued
  channel, broken browser stack. The only gate today is memory — the design §4.3 argues against.
  Gate with `test -f` before loading descriptions. Wix cut 59.4 % on a maintained library.
- Gate/skill duplication = `conflict = duplication`, `retraction hits generator`; fail-open vs
  fail-closed = `unrunnable check`. Wants the same GenAI disclosure norm on own notes.

### 2026-08-11 · [Real-Time Detection and Repair](reading-list-2026-08-llm/2608.02464-detection-and-repair.md)

- Write the three checks, not the watchdog. Fragments exist (`deadline-check.py`,
  `context-budget.py`, `cal-availability-check.py`); missing: no figure in a Telegram report that
  does not trace to a fetched result (`proof with numbers`, `unrunnable check`).
- Every "prüfe diesen Befund" prompt did the opposite of "coordinates, not verdict".
- Anything tuned on one model, temperature or toolset is at chance on the next (0.527 vs 0.885).
- "Absent" vs "undetected" = `unrunnable check` and exit 126.

### 2026-08-11 · [PrologMCP](reading-list-2026-08-llm/2606.14935-prologmcp.md)

- The degenerate label set is `one-answer criterion` from the data side; Jens has that check for
  criteria — extend it to label sets.
- "Contradiction of the default reading" is what cost money: a booking list is not an attendance
  list; a listing's online state lives on the seller profile; `.failed` lies (`booking ≠
  attendance`, `online? = seller page`, `absence test`).
- Non-fatal typed errors solve `unrunnable check` at the protocol layer; `depth_exceeded` matches
  `deadline-check.py` exit 2.

### 2026-08-11 · [VFR-LLM](reading-list-2026-08-llm/2606.27281-resource-aware-neuro-symbolic.md)

- Every `*-critic` agent is reject-only — the shape that scores below no check. No `/quality-gate`
  or critic without a repair path.
- "Blocked by direct" into the vocabulary; own claims should name the saved resource; the paper
  sets the bar for own notes.
- `simple` (qwen3:8b) is the tested model class; measure a traceability analogue before wiring it
  into a harness (`co-failure ceiling`, `proof with numbers`, `unrunnable check`).

### 2026-08-11 · [PSC](reading-list-2026-08-llm/2608.03065-parser-stack-classification.md)

- The setup contains both halves (schema gain and PhantomFill coercion). `simple` on the LiteLLM
  proxy is where a schema doubles quality and an escape is never taken.
- A `ReportFindings`-shaped contract is the useful kind. Silent degradation = `unrunnable check`.

### 2026-08-11 · [PhantomFill](reading-list-2026-08-llm/2607.20492-phantomfill.md)

- Reversed the morning's Calibration Floor takeaway ("force subagent output") into: force the
  format, never a value.
- Gate on own critics: 13 agents, 137 required fields, 0 escapes; `email-marketing-critic:77` and
  `seo-critic:67` prescribe 100 for N/A — two of thirteen critics can inflate their own gate.
- Fixes: escape value per dimension, skipped in the aggregate; schema linter (137 of 137 flagged
  today), in the class of `git ls-files -s`; measure EUR — `simple` (qwen3:8b) is in the 60–100 %
  fabrication band, one more reason the aliases must not vote (`co-failure ceiling`).
- The gemma4 exclusion and structured refusal are `unrunnable check` done right.

### 2026-06-14 · [Orthogonal Verification Methods for AI Agents](orthogonal-agent-verification.md)

- The 20-lens checklist (factual, logical, math, counterexample, red-team, security, economic,
  stakeholder, historical, scientific, source quality, long-term, edge-case, premortem, devil's
  advocate, N-version, independent experts, tool-based, heterogeneous consensus) was Jens'.
- Mapping: actor/critic skills (`copywriting --critic`, `vue-developer --critic`) = CRITIC /
  Constitutional; A/B bake-offs (mini-PC vs Fabrik, same spec) = N-version; Quality Gate = tool
  verification with an external oracle before trusting a PR; premortem memory + refute-by-default
  workflow skeptics = debate / devil's advocate.

### 2026-06-14 · [01 · Self-Consistency](orthogonal-agent-verification/01-self-consistency.md)

- The principle under N-version / A-B bake-offs: divergence between independent attempts is the
  signal.

### 2026-06-14 · [02 · Constitutional AI](orthogonal-agent-verification/02-constitutional-ai.md)

- The actor/critic skills score against stated criteria — the same loop.

### 2026-06-14 · [03 · CRITIC](orthogonal-agent-verification/03-critic.md)

- The Quality Gate is this: unit/build/e2e in clean containers as the oracle before a PR is trusted.

### 2026-06-14 · [04 · Multi-Agent Debate](orthogonal-agent-verification/04-multi-agent-debate.md)

- Premortem memory + refute-by-default skeptics = debate applied to own findings.

### 2026-06-14 · [05 · Self-Verification](orthogonal-agent-verification/05-self-verification.md)

- Add "reconstruct the inputs from the output" wherever a result runs backward into its premises.

### 2026-06-14 · [06 · Reflexion](orthogonal-agent-verification/06-reflexion.md)

- The model behind the memory files: plain-language learnings ("X lied, verify the diff") read
  before repeating a mistake.

### 2026-06-14 · [07 · Tree of Thoughts](orthogonal-agent-verification/07-tree-of-thoughts.md)

- "Propose several, score each, keep the best" is the judge-panel shape in design-variant and
  exploration workflows.

### 2026-06-14 · [08 · LLM-Blender](orthogonal-agent-verification/08-llm-blender.md)

- Bake-offs: compare arms head-to-head, not each in isolation.

### 2026-06-14 · [09 · AI Agent Reliability](orthogonal-agent-verification/09-ai-agent-reliability.md)

- Track run-to-run consistency of agents and Fabrik workers, not whether a PR passed once.

### 2026-06-14 · [10 · HAL](orthogonal-agent-verification/10-holistic-agent-leaderboard.md)

- Justifies cost-tracking on bake-offs and reading what the agent did (diffs, tool calls), not
  only whether tests passed.
