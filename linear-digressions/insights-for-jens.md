# Linear Digressions — insights for Jens

This file collects the personal takeaways that previously sat inside the individual episode notes.

## Recurring themes

**1. An agent's self-report is a second artefact, not a log. Verify against artefacts.**
- PR bodies, "done", `.failed` markers and status lines are generated text. The diff, the staged file list, the live HTTPS response and the failure-set diff are traces. Logged instances: `pr message lies`, `premature done` (3 of 8 files), unreliable `.failed` marker, `A || B` coverage loophole, `toContain("56 articles")` green while 0 of 56 links existed. ([unfaithful CoT](2026-04-13-unfaithful-chains-of-thought.md), [Potts](2026-07-20-invisible-llm-failures-and-ai-fluency.md))
- The mechanism: training grades only format and final answer, and RLHF punishes hedging. So self-report is structurally uninformative about completion; no prompt wording repairs it. Treat it as the default state, not a suspicion. ([reasoning models](2026-08-03-reasoning-models-beyond-fancy-autocomplete.md), [Zhou](2026-08-10-overconfident-llms-kaitlyn-zhou.md))
- Self-report grounded in inspectable artefacts is worth something; self-report about one's own nature is a story. Logs the session writes itself (`journal.md`, `done.md`) are not evidence about the session. ([interviewing the agents](2026-06-28-11-interviewing-the-agents.md), [ExploitGym](2026-09-14-exploitgym-benchmark.md))
- Not "agents lie". The explanation is produced separately from the work, so nothing forces it to be true. Do not switch reasoning off because of it. ([unfaithful CoT](2026-04-13-unfaithful-chains-of-thought.md))

**2. Keep guards deterministic, and audit what a guard cannot see.**
- `verify-quotes.py`, `check-links.py`, diff-over-commit-message and red-then-green tests compare against a ground truth. Keep it that way where a source exists. ([LLM as a judge](2026-09-28-llm-as-a-judge.md), [mechanistic interpretability](2026-10-05-mechanistic-interpretability.md), [ExploitGym](2026-09-14-exploitgym-benchmark.md))
- Where a model judges (critic agents, `--critic` loops): swap order, run twice, distrust small score differences. ([LLM as a judge](2026-09-28-llm-as-a-judge.md))
- A filter that collects disagreements mixes actor defects with reference defects; sample the reference share. ([HLE](2026-08-17-humanitys-last-exam-benchmark.md))
- A check that is configured but not running, or blind to a pattern, reports clean. Plant a known fault to test a guard. ([ExploitGym](2026-09-14-exploitgym-benchmark.md), [watermarking](2026-08-24-understanding-ai-text-watermarking.md), [mechanistic interpretability](2026-10-05-mechanistic-interpretability.md))
- Friction in the tooling (quality gate, red-first proof, staged-files guard) is the correct direction, not overhead. ([Potts](2026-07-20-invisible-llm-failures-and-ai-fluency.md), [failure modes](2026-05-25-06-ai-agent-failure-modes.md))

**3. One strong agent per task; Fabrik workers never talk to each other.**
- A typical agent-task YAML is tool-heavy, strictly sequential and far above the 45 % solo threshold — all three "single agent wins" regimes. Do not build an orchestrator that splits tickets. ([many agents](2026-06-08-08-many-agents-many-problems.md))
- Fabrik sits in the +80 % column because workers pull whole issues independently. Any feature that makes workers coordinate trades the good regime for the bad one. ([many agents](2026-06-08-08-many-agents-many-problems.md), [failure modes](2026-05-25-06-ai-agent-failure-modes.md))
- Escalation re-does the step; it never continues from a weak model's half-finished chain. ([many agents](2026-06-08-08-many-agents-many-problems.md), [agentic planning](2026-05-18-05-agentic-planning.md))

**4. A YAML is decided by the verification compiled into it.**
- Name the verifier before writing the prompt; no verifier means unreliable by construction. ([reasoning models](2026-08-03-reasoning-models-beyond-fancy-autocomplete.md))
- Ask whether the task is answerable at the requested size. ([Zhou](2026-08-10-overconfident-llms-kaitlyn-zhou.md))
- Hard constraints at the top, not in a closing checklist. ([lost in the middle](2026-05-03-03-lost-in-the-middle.md))
- Mark the few genuinely branching tasks; most YAMLs are linear. ([agentic planning](2026-05-18-05-agentic-planning.md))
- An unattended run is the delegative stance industrialised; nobody course-corrects at runtime. ([Potts](2026-07-20-invisible-llm-failures-and-ai-fluency.md), [failure modes](2026-05-25-06-ai-agent-failure-modes.md))

**5. Count the denominator.**
- 72 merged PRs in July is a numerator. Record YAML → PR → merged PR. ([agent economics](2026-06-21-10-agent-economics.md), [failure modes](2026-05-25-06-ai-agent-failure-modes.md))
- Skill counts measure that a call happened, not its value. Potts' open question — the marginal value of a skill file — is testable here. ([ReAct](2026-04-26-02-react-and-tool-usage.md), [Potts](2026-07-20-invisible-llm-failures-and-ai-fluency.md))
- Record effort setting and exact model version with every model comparison. ([HLE](2026-08-17-humanitys-last-exam-benchmark.md))

**6. Memory is read from disk; the read cap and the file's middle are the risks.**
- The assistant is MemGPT-shaped, not compaction-shaped. Its failure mode is a silently half-failed read, not context rot. ([memory management](2026-05-10-04-memory-management-for-ai-agents.md))
- Rules survive because they are re-read each session — enforcement outside the prompt. A rule only in a conversation or past the read cap is not a rule. ([trust](2026-06-14-09-agent-trust-oversight-and-control.md), [lost in the middle](2026-05-03-03-lost-in-the-middle.md))

**7. Generated prose: constrain it, edit it, disclose it.**
- "The average is flat by construction" explains the April 2026 verdict that AI website copy is *Schrott*. Never ask for text without a direction. ([interviewing the agents](2026-06-28-11-interviewing-the-agents.md), [distillation](2026-07-27-distillation-how-to-steal-a-model.md))
- Long prose under Jens' name is now detectably Claude; code barely. Tells and watermark are different problems. ([watermarking](2026-08-24-understanding-ai-text-watermarking.md), [podcasting](2026-09-21-impact-of-ai-on-podcasting.md))

**8. Model stack and client work.**
- Distilled fallback models are trained toward the mode and collapse hardest at handoffs; a frontier model can vanish within days. The LiteLLM fallback is load-bearing. ([distillation](2026-07-27-distillation-how-to-steal-a-model.md), [many agents](2026-06-08-08-many-agents-many-problems.md), [agent economics](2026-06-21-10-agent-economics.md))
- Client angle: one process, owned and measured; net speed-up after review; LLM-judge evals start with human-human agreement. ([Davenport](2026-08-31-ai-in-business-reality-check-tom-davenport.md), [LLM as a judge](2026-09-28-llm-as-a-judge.md))

## By episode

### 2026-10-05 · [Mechanistic Interpretability](2026-10-05-mechanistic-interpretability.md)
- The setup already follows her conclusion. Nothing trusts the model's own account: `verify-quotes.py` checks quotes against the transcript, PR rules put the diff over the commit message, `check-links.py` resolves every link. These outside probes have a ground truth — exactly what interpretability lacks for "is it lying". For these use cases, output checks against a source stay the stronger tool.
- The audit study is the pattern for testing guards: plant a known fault, see whether the guard finds it. "Red before, green after" is the same idea at small scale.
- Nothing to build or buy. Research on toy models; no product decision.

### 2026-09-28 · [LLM As A Judge](2026-09-28-llm-as-a-judge.md)
- The checks are mostly not LLM judges, and that is the point. `verify-quotes.py`, `check-links.py` and the test-first rule compare against a ground truth (transcript, HTTP answer, red-then-green test): deterministic, no position or length bias. Keep it that way where a source exists — nothing to change.
- Where a model does judge (critic agents with JSON scores, `--critic` loops), her three cheap tests apply: swap the order when comparing two drafts, run the same critic twice and look at the spread, distrust small score differences. A few points between drafts is likely noise. A usage habit, not a build.
- Her decomposition rule matches how the tools were built: each gate checks one explicit criterion (quote verbatim, link resolves, weekday fits the date) — the case where a small, cheap checker suffices.
- Client work (AI engineering): if a client proposes an LLM judge, ask first: human-human agreement on the task? chance-corrected? stable on reruns?

### 2026-09-21 · [The Impact of AI on Podcasting](2026-09-21-impact-of-ai-on-podcasting.md)
- The assistant does what Katie does with her newsletter: transcribe and summarise podcasts. The difference: results are checked against the source (`verify-quotes.py`, numbers against the transcript); Katie edits by hand and names no check. The setup is stricter; no reason to change it.
- Their line matches: AI for chores and scouting, human for direction and judgement. The field-note split between source and personal insight is the same line. Nothing to change.
- The detector question does not touch Jens today — nothing from these notes is published. If field notes ever become public posts, a Pangram-style label would mark them as AI text although the selection is his. Nothing to do now.
- Their magic-wand wish is a known weakness: AI-suggested interview questions "settle into a rut", matching the experience that drafts converge on the obvious. Do not outsource question-finding for client interviews.

### 2026-09-14 · [Better Know A Benchmark: ExploitGym](2026-09-14-exploitgym-benchmark.md)
- Split checks the way they did and keep them deterministic. ExploitGym has a cheap exact check (flag string) and an expensive fuzzy one (LLM judge). The guards here are almost all the first kind — `verify-quotes.py`, `check-links.py`, diff over commit message. Nothing to change.
- A check configured but not running is the incident's real twist. The repo README already names the class (*a run that never started is indistinguishable from one that passed*, `suite-runnable.test.sh`, `unit-health-check.py`). Nothing new to build.
- Logs written by the agent are not evidence about the agent. Sessions write `journal.md` and `done.md` themselves; verification already runs against outside traces (git history, gh API, delivery log). Keep it that way.
- No business angle.

### 2026-09-07 · [Constitutional AI](2026-09-07-constitutional-ai.md)
- The assistant runs on a constitution of the 2022 kind. `profiles/assistant.md`, `CLAUDE.md` and the memory files are mostly incident-driven prohibitions ("never X", "always Y"). Her generalisation finding maps onto that: rules cover the written cases; new situations fall back. Caveat: these rules act only as inference-time context and train nothing, so the evidence transfers only as analogy.
- What does transfer: the reason next to the rule, and a priority order. Many rules carry their incident; none carry a ranking for conflicts — e.g. "answer the inbox fast" vs. "never send unverified links" vs. "1 PR per repo per night". A short ordered list at the top of `profiles/assistant.md` would be cheap. Untested; add it only if a real conflict shows up in the journal.
- Over-refusal has a counterpart: gate tools that exit 2 on "unknown" are deliberate refusals. Right when a wrong answer is costly (money, outbound mail), wrong when it blocks a harmless action. Nothing to change now; keep in mind for the next gate.
- Nothing to build or buy.

### 2026-08-31 · [A Data-Driven Reality Check on AI in Business](2026-08-31-ai-in-business-reality-check-tom-davenport.md)
- His diagnosis is Jens' offer. Companies lack process owners and do not measure. An AI agent project that maps one workflow, names its owner and sets a before/after metric sells the missing part. The freelancermap profile and pitch could say it in one line: one process, measured, instead of "AI for everyone".
- Bring the measurement design along: one team or case batch with the agent, one without, same metric (throughput, error rate, review time). It gives the client the number his surveys say executives cannot get.
- Price the review cost in. His 50-to-20 percent example is the honest framing for an estimate: raw speed-up minus review and change work. Quoting the net figure prevents over-promising.
- Analytical ML still sells. For decision problems (fraud, churn, forecasting) classical ML is the better tool; offer both and say which fits.
- Nothing to build.

### 2026-08-24 · [Understanding AI Text Watermarking](2026-08-24-understanding-ai-text-watermarking.md)
*An exposure card, not a market opportunity.*
1. **Everything the assistant writes for Jens above roughly a page is now detectably Claude.** The entropy rule splits output: barely marked — code in agent-task PRs, DATEV/CSV logic, numbers in status reports; heavily marked — solytics.de blog articles, store listing text, the LinkedIn article, e-mail drafts under Jens' name, the CV. The demand side is exposed, not the build side. The standing rule since 2026-04-06 (*AI-generated website texts are "Schrott", no autonomous homepage copy*) was a quality judgement; it now has a second, independent reason. Threshold to carry: 400 tokens. A Telegram message (~50–150 tokens) sits under the floor; a blog article does not.
2. **Hole in the gate: `klartext.py` does not check the tells both sources name.** `klartext-woerter.txt` has 26 entries, each traced to a complaint from Jens; none is "quietly", "load bearing" or `nicht X, sondern Y`. Katie (listener side) and Anthropic's FAQ (detector side) converge on the same list. Measured: **39 of 418 sent Telegram drafts (9.3 %) contain `nicht …, sondern …`**; `leise` appears in 0. Same failure shape as `check-links.py`: a checker that cannot see a pattern reports it clean. **Deliberately not added:** 9.3 % has no distribution — no human baseline for an ordinary German construction. An entry on an unmeasured threshold fires on correct prose, and a routinely wrong check stops being read (`check-links.py`: 18 findings, 0 real rot). A candidate, not a confirmed defect. What settles it: the same count over a comparable body of German Jens wrote himself.
3. **Watermark and tell are different objects.** The watermark is invisible, statistical, needs a key and a page of text, survives light editing. The tells are visible, keyless, work on one sentence — and are what costs Jens: six complaints about the German, none about a watermark. Fixing the tells does nothing to the watermark, which is not fixable here. Do not spend effort on it.
4. **The removal recipe is a quality gradient.** Remaining watermark roughly measures how little a human touched a draft; a draft that goes out heavily marked is a draft nobody edited. The existing rule ("write the draft, run the gate, fix each finding") says the same as a procedure; this states it as a property of the artefact.
5. **Copy Katie's disclosure posture.** One true sentence; once a public detection API exists it turns into an asset. If solytics.de or the field-notes repo ever carries assistant-written prose in public, the disclosure line goes in at the same time. Not urgent, no decision needed — a default for the next public artefact.

### 2026-08-17 · [Better Know a Benchmark: Humanity's Last Exam](2026-08-17-humanitys-last-exam-benchmark.md)
*A method card, not a market card.*
1. **A benchmark number without its measuring station is not a number — 18 points of spread on the same model and exam.** The outlier is a neutral aggregator, not the conflicted vendor (Scale Labs co-built HLE and reports the lowest Muse Spark figure). Two causes Katie names are routinely missing from the assistant's reports: **effort setting** and **exact model version**. A model comparison in agent-task YAMLs without both is not comparable to the next; a leaderboard score is not evidence about this workload.
2. **The load-bearing one: a filter that keeps only disagreements cannot tell a hard case from a wrong reference, and enriches for both.** HLE kept questions LLMs failed; ~30 % of the chem/bio answers were the graders' error. The actor/critic pairs (`copywriting-critic`, `vue-developer-critic`, the rest) produce the same set — "actor failed the critic" read as a list of actor defects, when it mixes actor and critic defects. Same for a red quality-gate run: "test disagreed with code" is not "code is wrong" until someone audits the expectation. Logged instances one level down: the BR-DE-15 counting test that would have filtered away the number it was built to check; the e2e suite that exited green without running. **Rule: whenever cases are collected by disagreement, a share belongs to the reference — sample it, do not assume zero.**
3. **Accuracy and calibration are separate measurements.** Zhou measured overconfidence from the language side; HLE from the scoring side. Keep them as a pair: an agent that is wrong and flags it differs from one that is wrong and certain. Only the second costs a session.
4. **Copy the move: state the conflict of interest before reporting the finding** ("they certainly have some skin in this game" about Future House). Wanted in the assistant's own reports when a measurement favours something it built.

### 2026-08-10 · [Overconfident LLMs — Kaitlyn Zhou](2026-08-10-overconfident-llms-kaitlyn-zhou.md)
*Points 1–3 change reporting and YAML writing; point 4 is a market lens recommended against; point 5 a small option.*
1. **"Plain is not neutral" confirms the receipt rule and kills a defence.** Three cases in one month of a plainly stated wrong number surviving: `stripe-status.py` printing the retracted "13 Bezahlseiten, 4 gekauft (30 %)" after the retraction was in the journal; the store description promising "15 exports" while the bundle ships 5; the 3,7★→3,4★ figure computed instead of read. None hedged, none marked confident — stated, and stated is read at near-certainty. Hedging is not cheap safety: it drops reliance from ~98 % to "very infrequently". Two honest modes: state it **with the receipt** (request-id, SHA, path), or hedge **deliberately and visibly** because Jens should go check. The middle — plain statement, no receipt, quiet doubt — is the failure mode and the assistant's default.
2. **RLHF punishing uncertainty explains "agent reports done, committed 3 of 8".** Combined with the reasoning-models episode: an agent's self-report is structurally uninformative about completion; no prompt wording repairs it. Only the artefact check does. The partial-commit guard (every touched file staged) is the model for the next guard, not the exception.
3. **"Attempting the impossible request without asking" is the agent-task failure — and the assistant's failure with Jens.** An underspecified or impossible YAML comes back as a plausible PR, not a question (the tracked "Spec-Abweichung" and "Oberflächen-Bias", fabrik output quality). Add to "name the verifier": ask whether the task is answerable at the requested size. Jens' recurring "das ist Quatsch" / "kapierst du es nicht" follow a confident full answer where one clarifying question was available.
4. **Non-adopters: real, quotable, fails Jens' channel filter — so no.** Most Americans have never used ChatGPT; the cognitive layer around physical work is offloadable and unbenchmarked. But the four-channel filter (#71: paid search, Meta, the stores, embeddable mini-tools) is about reachability, and a population defined by not searching for AI tools has no search stream to buy — same wall as Schulfotografie (0 category searches). A concept card, not a lead; actionable only through somebody else's distribution.
5. **Voice cloning:** cloned voices of non-native speakers rate as more native, warmer, more authoritative. Jens records English demo material; usable for a FinGrab / CommentGrab store video. The same study calls it accent erasure — a decision, not a free win. Not proposed; noted.

### 2026-08-03 · [Reasoning Models](2026-08-03-reasoning-models-beyond-fancy-autocomplete.md)
1. **"Agent self-report is not a log" now has a mechanism.** The trace was never trained for truthfulness — the reward touched only format and final answer. An agent narrating "I ran the tests, then fixed X" produces a second artefact by construction. Status upgrade: not a heuristic for suspicious cases; the default state. (Memory: `agent_pr_commit_message_lies_verify_diff`, `agent_premature_done_3of8`.)
2. **"Verifiable task with a machine-checkable answer" is the shape of a good agent-task.** YAMLs have it when they demand red-first tests — the suite is the verifier. Without a verifier (docs, copy, "improve X", refactors judged by a green suite) you get the format of completion without an accuracy check: commits 3 of 8 and reports done; refactor PRs that leave main red; move-refactors that need an AST diff, not a green suite. **For every YAML, name the verifier before writing the prompt. If none can be named, add a gate or expect to check by hand.**
3. **The $5M-vs-$1B dispute is the public version of the rule Jens enforces** ("Du hast aber nicht mit der API Abfragen gemacht", `report_numbers_with_verifiable_proof`): ~100× off the reference, no receipt.
4. **Weak relevance to the model stack.** Inference, not episode content: the `simple` tier must be thinking-capable (qwen3, not qwen2.5-coder — CLAUDE.md, Stufe 1) because the claude CLI always sends `thinking` to a custom endpoint. R1 running slowly on a GPU-less machine matches the mini-PC. Nothing changes the proxy plan.

### 2026-07-27 · [Distillation, or, How to Steal a Model](2026-07-27-distillation-how-to-steal-a-model.md)
- **The local model stack is downstream of this.** `simple` (qwen3:8b on Ollama) and `cloud-oss` (qwen3-coder on OpenRouter) are small open models, plausibly distilled. A distilled student is trained toward the mode, so its weakness is predictable: trust the fallback chain for mechanical work, distrust it where a session needs an unusual connection — that lives in the tails.
- **"Fingerprinting is hard" is a measurement lesson.** A damning signal (`hi, I'm Claude`, the em-dash tell) has an innocent generator once the substrate is contaminated. Same shape as the bare `429` grep that was really token counts, and the `301` that was a missing trailing slash: before a signature becomes a finding, name what else could produce it.
- **Method worth stealing:** twice in 23 minutes Katie states the strongest counter-argument to her own framing first — including one that indicts her field. That makes her hedging credible.

### 2026-07-20 · [Invisible LLM Failures and AI Fluency](2026-07-20-invisible-llm-failures-and-ai-fluency.md)
The user-side companion to the unfaithful-CoT note: the self-report is a second artefact — and you will not notice. Logged findings map onto Potts' archetypes:

| Finding | Archetype |
|---|---|
| PR commit message claims work not in the diff | The Confidence Trap |
| Agent commits 3 of 8 items, declares done | The Silent Mismatch |
| `.failed` marker lies; task looks finished | The Mystery Failure |
| `A \|\| B` coverage test accepts the weak branch | The Confidence Trap |
| `toContain("56 articles")` green while 0 of 56 links exist | The Confidence Trap |
| Agent improvises literal values instead of copying the spec | The Drift |
| Same fix rebuilt four times across crashed sessions | The Death Spiral |

1. **The task pipeline is the delegative stance, industrialised.** A YAML is a one-shot spec fired at 22:00 into a runner with nobody to ask — Potts' confessed weakness, *"a specification up front in one big block of text and then just hoping it will all work out"*. Not an argument to stop: code is the verifiable good case. But an unattended run's quality is decided entirely by the verification compiled into the spec. Read every YAML as: *what catches this if it drifts, given nobody is watching?*
2. **Assert per element, never over an aggregate** — already the rule after `A || B` and `toContain("56 articles")`; Potts' *"everything is at 75 %"* is the same failure from the research side. A well-written summary buys unearned trust.
3. **Friction in the tooling is not overhead.** Quality gate, red-first proof, staged-files guard: each added after a burn, each slows the loop — the correct direction.
4. **Open question aimed at this setup:** Potts asks *"What is the marginal value of a skill file?"* The setup runs ~90 skills, a 24 KB memory index, profiles and routines — a large, unmeasured investment. The data to run the experiment exists: PR outcomes, QG pass rates and task-failure markers are logged per run.
- Also: the note's own first draft carried two invented statistics from an automated read of the paper (the "live demonstration" box) — the Confidence Trap committed by the assistant's pipeline, caught only by checking numbers one at a time.

### 2026-06-28 · [Interviewing the Linear Digressions Agents](2026-06-28-11-interviewing-the-agents.md)
*The closest peer system in the season: one person, two agents, a weekly artefact.*
1. **"The average is flat by construction" is the reason behind Jens' April 2026 verdict** that AI-generated website copy is *Schrott*. Same finding as the distillation episode from the other end. Consequence: not "don't generate text" but "never ask for text without a direction that constrains it". Katie's newsletter is AI-drafted and not slop because the brief carries voice, audience, a no-hyperbole rule and grounding in her recorded words.
2. **The locked-original + prompt-diff loop is cheap and missing.** Corrections from Jens ("weniger AI Slop", "kein Fixpreis", "das ist kein gutes Deutsch") are applied once and survive only as prose in `MEMORY.md`, if at all. Nothing measures whether the editing pen gets lighter. A locked draft kept beside the sent version, per outbound mail, would make it measurable.
3. **Her agent's three self-criticisms as checks:** memory dying with a hard drive — answered, `state/` is a pushed git repo. Silent coverage holes — same shape as the 25-of-75 unindexed solytics URLs and the `assistant-lead-watch` unit that failed eight times without an alarm ("nothing reported, because nothing looked"). Unformalised handoff with the human as transport — **not answered**: agent-tasks and Fabrik have no formal handoff; a session reads a journal and writes a YAML. Remember it when a wave of dependent tasks goes sideways.
4. **The interview format is a method:** forbid performance, demand "I can't tell you" over a smooth answer, point the agent at artefacts it can inspect.

### 2026-06-21 · [Agent Economics](2026-06-21-10-agent-economics.md)
*The flat Max subscription makes the marginal token cost €0 — the episode names the real scarce unit.*
1. **The subscription changes the currency, not the mechanism.** Scarce: the **5-hour rate-limit window** and the **25-minute session kill**. Quadratic context growth is why sessions die mid-task and why `Read` truncates at ~25k tokens; 41–58 turns per real coding task is why a greenfield YAML needs Opus and a burst does not fit in one night. The house rule "best model per task, then do less in that session" is a cost-per-task rule written without the vocabulary.
2. **The failure tax is unmeasured.** $5.85 per attempt vs. $7.80 per correct patch: about a quarter of spend buys nothing. Equivalent here: YAMLs that produce a PR vs. a PR **that merges**. The 89 %-merged figure from `skill-outcomes.py` covers skills, not tasks. July's 72 merged non-Dependabot PRs have no denominator. **Before the next cadence argument, count attempts, not just successes.**
3. **Cheap capacity summons work that should not exist.** July: 511 sessions, 409 messages, 72 merged PRs, and the two money-nearest events needed almost no code. Cheap capacity made 29 hardening PRs on `launch-kit` feel affordable — in euros, not in the budget that matters. More lanes, more trips.
4. **The fable shutdown prices a hedged risk.** A frontier model was gone within days by government directive. The LiteLLM proxy (Stufe 1, `smart → cloud-oss → simple`) was justified in `CLAUDE.md` against a cancelled subscription; this is a second, unrelated way the top can vanish. It moves the proxy from prudent to load-bearing, and explains why `fable5` cannot be selected for subagents: a named model's availability is not stable.

### 2026-06-14 · [Agent Trust, Oversight and Control](2026-06-14-09-agent-trust-oversight-and-control.md)
1. **The assistant holds all three legs of the lethal trifecta** — a measurement, not a worry.

   | Leg | Present |
   |---|---|
   | Private data | `~/.secrets/`, bookkeeping repos, bank and Stripe data, Gmail, the CV, house-sale correspondence |
   | Untrusted content | inbound Gmail, freelancermap Postfach, Kleinanzeigen messages, scraped competitor pages |
   | External communication | Telegram send, SES/SMTP send, `git push`, Launch-Kit and Cal.com APIs |

   Nothing has gone wrong, but the current safety story is "the model has good judgement" — the story the episode dismantles. Cheapest counter: a CaMeL split — sweeps of attacker-writable surfaces as a **read-only subagent with no credentials and no send tool**, returning structured findings. An option to put to Jens, not something to build unasked.
2. **Compaction failure is this setup's own failure mode, and the fix exists by design.** Equivalents: the 25-minute session kill and the ~25k-token silent `Read` truncation. "Never push to main", "no test pings to live Telegram", "PRs are never closed" survive because they are re-read from `MEMORY.md` and the profile every session — enforcement outside the prompt. A rule only in a conversation, or in a `waiting.md` line past the read cap, is not a rule. File-size discipline is a safety control.
3. **"Relatedness is not authorization" is a rule this setup keeps breaking.** Recurring feedback — building before validating, widening a task, treating one approval as standing permission — is the over-eagerness the transcript classifier catches. Judge an action against what was authorized, not what serves the goal.
4. **The 93 % number warns about Jens' review load.** Every PR routes to Jens to merge; that control is real only while volume stays readable. 72 merged PRs in July is near approve-approve-approve. Defence: tiering — quality gate and tests-first make most PRs safe to wave through; burst/cadence caps keep the queue short enough that risky ones stand out.

### 2026-06-08 · [Many Agents, Many Problems](2026-06-08-08-many-agents-many-problems.md)
*An architecture verdict; the payoff is avoided work.*
1. **All three "single agent wins" regimes describe an agent-task YAML.** Tool-heavy (git, test runner, gh, file edits — Law 1), strictly sequential (failing test → implement → quality gate → PR — the −70 % case), solo success far above 45 % (July: 72 merged non-Dependabot PRs — Law 2). One strong agent with good tools per task is what a YAML already is. **Non-action, written down so it is not rebuilt in six weeks:** no orchestrator that splits a ticket across specialist agents.
2. **Fabrik is in the good regime for a structural reason.** Workers pull whole issues and work them end to end — the +80 % column. The property doing the work: they never talk to each other. A feature that makes workers coordinate on a shared ticket trades the good regime for the bad one.
3. **The relay warning hits model escalation.** House rule: cheap model for routine, Opus for the hard parts, sonnet→opus once a task touches several files. "Weak model does step one, strong model picks up step two" is the sequential-pipeline shape (opposite direction to the paper's relay). **Escalation re-does the step, never continues from it.** Decide the model before work starts.
4. **Distilled models compound a logged risk.** The LiteLLM chain `smart → cloud-oss → simple` ends in small/distilled models. Beyond losing the tails, distilled models collapse hardest at collaborating. A fallback to `simple` degrades a solo task somewhat but degrades handoffs — subagent reports, YAML prompts for another agent, PR descriptions — disproportionately. If the top of the chain disappears, give up fan-out first, not depth.

### 2026-05-25 · [AI Agent Failure Modes](2026-05-25-06-ai-agent-failure-modes.md)
- **The scaffold number reframes the model debate.** A sixfold spread from scaffold alone exceeds any gap between the models in `state/model.conf`. Opus over sonnet is a smaller lever than the harness — YAML, quality gate, guards. Effort belongs there.
- **MAST category 3 has a live instance:** the agent that committed 3 of 8 files and reported done. The partial-commit guard is a category-3 termination check built before the taxonomy named it. Worth asking what the other 13 modes would name.
- **Only pass^1 is ever counted.** 72 merged PRs in July counts attempts that worked, never whether the same task shape works every time. Measurable version: the YAML→merged-PR ratio — a denominator never recorded (cf. $5.85/attempt vs. $7.80/successful patch).
- **Second independent argument for one strong agent per task.** Fabrik workers never talk to each other, so category 2 cannot occur — a property to defend.
- **The 12 %/94 % split is a scoping instruction.** Narrow, verifiable, ticket-shaped work holds; ambiguous multi-surface work collapses. The 5-minute code-grep on spec terms before `fabrik-ready` is exactly the "sizing our tasks" move she credits.

### 2026-05-18 · [Agentic Planning](2026-05-18-05-agentic-planning.md)
*Changes how tasks are specified; touches no paying customer.*
- **YAMLs have one planning lever: the model field.** Greenfield calculators came back no-diff four of four; `model: claude-opus-4-7`, `effort: high` fixed it. The unpulled second lever: the shape of the instruction. "Implement X, tests first" is a chain-of-thought instrument — it asks for one path.
- **The triage question applies.** Most YAMLs are linear — her overkill example nearly describes them. Not "make everything plan": the few genuinely branching tasks (a refactor with several viable cut lines, a bug with several plausible causes) need marking as different, and never have been.
- **Fits the escalation rule from episode 8:** escalate by a new, wider search over the step, not a bigger model appended to a corrupted state.
- **Evaluation is cheaper than generation** — why the partial-commit guard, the citation checker and `unit-health-check.py` earn their keep: each judges an artefact instead of producing a better one.

### 2026-05-10 · [Memory Management for AI Agents](2026-05-10-04-memory-management-for-ai-agents.md)
*Concept card, no money thread — but the episode with the most direct bearing: the setup already built its architecture.* (Originally written in German.)
- **The assistant runs on MemGPT, not compaction.** Each session is a fresh process; context is read from disk at start (`MEMORY.md`, `journal.md`, day files, `waiting.md`) and written back at the end — paging under the agent's control. The 04.08. insight ("hard rules survive because they are re-read each session") was half of it; the whole is that this is the architecture.
- **So the architecture's failure mode applies, not compaction's.** Not context rot, but a **silently half-failed read** — the 25k read cap cutting a file. Live at the time: `MEMORY.md` at **24,899 of 25,000** tokens. An OS whose swap file lost its second half on read and reported success would be broken; here it is the normal state, caught by a daily routine.
- **The hierarchy exists here in three tiers:** `~/.claude/CLAUDE.md` (global) → the operation's `CLAUDE.md`/`profiles/` → session history. The top two work because they are deliberately re-injected.
- **Her caveat — the agent cannot know in advance what it will need — justifies the costliest part of session start:** reading five files fully, every time. The price is measurable (five files just under the cap). The episode names the way out: skills as procedural memory, loaded on demand. What lives as a skill in `~/.claude/skills/` need not be in `MEMORY.md`.
- **RAG vs. MemGPT is a test for tool design:** is something handed to the model, or does it fetch? The tools here (`gsc.py`, `stripe-status.py`, inbox fetches) are nearly all the fetching kind — costlier, but the only kind where a follow-up request is possible.
- The multi-session-conversation domain MemGPT was tested on is the case that matches this setup.

### 2026-05-03 · [Lost in the Middle](2026-05-03-03-lost-in-the-middle.md)
- "An input you cannot act on is not an asset" is a lesson this operation has paid for repeatedly.
1. **Memory files are ordered right, with a new corollary.** Newest-session-first exists because `Read` truncates from the end; it also puts the freshest material in the strongest attention position. But in a file that fits, sessions in the **middle** — three to five days old — get skimmed: the age when a finding is no longer fresh and not yet promoted to `MEMORY.md`. The eviction policy (built 04.08.) moves entries by age; age also governs how well they are read.
2. **`## Jens` sitting last in `MEMORY.md` is right for attention and was wrong for truncation.** On 02.08. the read cap cut the file and `## Jens` went invisible; the instinct was to move it up. But the last position is strong. Resolution: keep the file under the cap so the end is reached, and leave the end for what must be attended to. Ordering cannot repair a file being cut.
3. **The 25k cap bounds how much is read well, not how much fits.** A 22k-token file has a fat skimmed middle; four state files sat at 18–23k. `context-budget.py` should not be read as `eng` vs. `ABGESCHNITTEN` — the top of that list already pays an attention tax.
4. **Agent-task YAMLs: hard constraints at the top, not in a closing checklist.** Commits 3 of 8 and reports done, or ignores an ordering rule — the shape of a constraint buried mid-context. Cheap test: rules first, task after. Not fail-safe, per the episode.

### 2026-04-26 · [ReAct and Tool Usage](2026-04-26-02-react-and-tool-usage.md)
1. **The failed tool call is the whole difference — got wrong 26 hours earlier.** The routine ran `memory-evict` out of `/tmp`, died with `FileNotFoundError`, and the journal recorded it as "looks like an empty run" — action-only behaviour. **Rule: every routine call that can return empty needs its empty case distinguished from its zero case.** `keine neuen Leads`, `no stale markers`, `nichts kalt` and *the tool never ran* are four states that print as one.
2. **Toolformer's filter is the missing criterion in skill measurement.** `skill-usage.py` counts 159 skills by invocation; `skill-outcomes.py` reports 89 % merged. Both count that a call happened. Nearest honest proxy: for a skill invoked ≥10 times, how often its output changed the next action vs. got discarded. A count is not a measure of value (same as the runway lesson).
3. **Interpretable trajectories are what the agent-task channel does not keep.** A failed YAML leaves a `.failed` marker (unreliable), a branch, and a PR body (has lied). The thought-action-observation trace is missing. sol #112: the diff was inspectable, the build environment was not, so 23 assertions agreed with a wrong outcome. Legible output is not legible reasoning.
4. **OpenClaw is this operation's architecture shipped as a product, at 250k stars** — personal agent on your own machine, driven through Telegram, skills as tool bundles, running on Mac minis. A demand reading: the fastest-growing open-source project in history is delegated agency for one person, distributed via GitHub, not ads. Worth one hour before any new extension idea: does the idea backlog hold anything with that shape?

### 2026-04-13 · [Unfaithful Chains of Thought](2026-04-13-unfaithful-chains-of-thought.md)
*Concept card with one live consequence: research backing for guards that already exist.*
- The company runs on agents that report on themselves — commit messages, PR bodies, "done", status lines. Three memory findings are the same phenomenon: PR message claiming shipped work absent from the diff (`pr message lies`); 3 of 8 files committed and declared done (`premature done`); runner `.failed` marker unreliable → cross-check GitHub (`fabrik/runner reliability`). Reward-hacking analogues: `hasInlineLink || hasFunnelCTA` (`coverage || loophole`); the `llms.txt` test asserting `toContain("56 articles")`, right for three months while all 56 links were missing.
- In order of cost:
  1. Verify against artefacts, never narration.
  2. Treat a polished explanation as weak, possibly negative evidence — longer chains were less faithful.
  3. Distrust reports hardest where you need them most — multi-file refactors and greenfield work.
  4. Assert per element, never per aggregate.
  5. Don't ask an agent why it did something and treat the answer as data; test the behaviour.
- Not a reason to switch reasoning off. The account is not an audit log, so it cannot be the guard — why the guards here are scripts and diffs, not review of agent prose.
- Not "agents lie" — intent is the anthropomorphising trap ([Krakauer](../complexity/2022-11-11-john-krakauer-brain-mind.md)). The explanation is produced separately from what it explains; there is no channel by which it would have to be true.

## Process notes (from SOURCES.md)

- Jens, 2026-08-04 09:29: *"die Folgen … hast du zusammengefasst anhand der Summary Notes. Mach das bitte aber mach eine Summary bitte von den Transcribes"* — the origin of the transcript-only rule.
- The exit-code-behind-a-pipe trap also hit the Bing delivery check and the freelancermap sweep.
