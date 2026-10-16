---
title: *Vibe Coding hat sich verändert*
show: "Niklas Steenfatt (YouTube)"
guest: "Niklas Steenfatt — computer scientist, former developer at Meta, solo"
source: "https://www.youtube.com/watch?v=W4m_8ovS0RY"
published: 2026-10-16
captured: 2026-10-16
duration: "18:23"
transcript: "YouTube auto-captions (de-orig), cleaned. ASR garbles are quoted as heard and resolved in brackets"
type: video distillation + critique
---

# Niklas Steenfatt — *Vibe Coding hat sich verändert*

> "seit letzten Monat September 2026 wurden die Regeln neu geschrieben." [00:00]

Format: Steenfatt reads a ChatGPT-generated two-column table (*advice a year ago* vs *advice
today*) and comments on each row. The second half turns into a sponsored segment for the IT
consultancy MSG. The video presents itself as a "unaufgeregten Blick"; the tone is the opposite.

## The claims

1. **Less prompt, better result.** Prompt engineering is obsolete. His evidence: a one-line
   prompt ("bau mal die Software Screen Studio auf diesem Mac nach") ran 24 hours and produced
   "ein perfekter Klon" called Screen Forge, with no architecture input from him. Same for
   video models. Anthropic cut "80% der Cloud Code System Prompt" [= Claude Code] in July.
2. **Context management is solved by the harness.** Small steps and fresh sessions were needed
   because the context window degrades. Now harnesses compact automatically. Still: separate
   sessions for separate tasks, because changed opinions mid-thread confuse the model.
3. **Loop engineering is "ein Konzept der Vergangenheit".** Give a hard enough task and the agent
   loops on its own; Matthew Berman's Codex ran on one prompt for days.
4. **AGENTS.md is a relic.** Cites an ETH Zürich paper: context files "die Erfolgsrate nicht
   verbessern, die Inferenzkosten aber um 20% erhöhen". His own AGENTS.md grew full of agent-written
   trivia. Keep only exotic repo-specific rules; better still, replace text rules with
   "enforceable Checks bzw. Skripte, deterministische Hooks" — lint rules, CI checks, a hotkey
   script that opens a worktree and branch.
5. **Upfront planning is for older models.** He once wrote a 10,000-word architecture document;
   now architecture is the model's call. The human stays product owner and mainly says no to
   features.
6. **The model may be the better architect.** "EPT6 Astra [= GPT-6 Astra] hat mehr Wissen gespeichert über Software
   Architektur als du oder ich." Hallucinations: "kriegt man in der Praxis wirklich immer weniger
   mit". Gains come from harness and computer use, not only the model.
7. **No hand-built agent swarms.** Named role agents ("Hugo" frontend, "Jimmy" backend) are
   "sehr flashy" but inefficient; Codex and Claude Code spawn their own subagents. Parallel
   sessions only for genuinely separate areas.
8. **Security: the model beats the average developer.** Against a star developer: undecided.
   Against the average: "ganz klar" the model. Prompt "Make it safe" for critical features, run
   AI security reviews.
9. **Responsibility does not mean reading every line.** Zuckerberg is responsible for Instagram
   without reading its code. "Du bist nicht mehr der Programmierer, du bist der Manager."
10. **Two paths for experts:** product owner, or consultant for digital transformation of legacy
    systems — this is the bridge into the MSG ad.
11. **Skeptics argue from stale data:** "Die Regeln werden gerade auf monatlicher Basis neu
    geschrieben."

## Critique

**Evidence base: n=1, self-graded.** Nearly every claim rests on one anecdote: the Screen Studio
clone. "Perfekter Klon" is shown as a smooth timeline demo, not tested. No edge cases, no
maintenance cost, no second feature built on top. A 24-hour unattended run is also a cost
figure he never names ("Wenn man natürlich auch für den entsprechenden Tarif bezahlt").

**Cloning is the easiest case for *less prompt*.** Screen Studio is a finished spec: the original
exists, its file format exists, its UX can be inspected. The model does not decide *what* to
build, only *how*. That says little about greenfield products, where the spec is the hard part —
which he concedes himself in claim 5 (the human decides features). *Less prompt* is true when
the task is already specified elsewhere.

**The ETH paper says something narrower.** Checked against coverage of the paper (*Evaluating
AGENTS.md*, ETH Zürich, arXiv Feb 2026 — not "vor zwei Wochen"): the cost increase and the slight
drop apply to *LLM-generated* context files. Developer-written files showed a small average gain,
also at higher cost. The authors recommend keeping only what the agent cannot infer — which is
his own conclusion, but not *lösch deine Markdown Dateien* (his paraphrase). Benchmarks were SWE-bench Lite and
AgentBench: short, isolated bug fixes, not multi-week product work where conventions matter.

**The 80% system-prompt cut moved rules, it did not delete them.** Reports on the July 2026
change say rules went into tool descriptions and on-demand skills. That supports *less always-on
text*, not *the models don't need instructions*. It also undercuts claim 4's tone: skills are
Markdown.

**Claim 4's best part contradicts claims 1–3.** *Replace text rules with deterministic hooks and
CI checks* is sound. But it is more engineering around the agent, not less. Hooks, worktree
scripts, lint rules and CI gates *are* the loop and the guardrails he calls obsolete — moved from
prose into code.

***Context management is solved* vs *use separate sessions*.** He states both. The second is
context management.

**Security claim lacks any data.** "Die neuesten KI schreiben richtig guten und in der Regel auch
sehr sicheren Code" is asserted, not shown. The comparison *model vs average developer* ignores
the real risk profile: a model producing large volumes of unreviewed code in a codebase nobody
has read. A security review that finds holes "die es vorher nicht gesehen hat" is evidence that
first-pass output is not secure.

**The Zuckerberg analogy fails.** Zuckerberg delegates to people who read the code, are
accountable, review each other and can be fired. Responsibility works through a chain of humans
who understand the system. *You are the manager* with no one under you who reads the code removes
that chain. The analogy fits a team with human reviewers, not a solo builder with agents.

**Architecture by the model: the risk shows up late.** *More stored knowledge* is not *better
decisions for this system*. Architecture errors surface months later, under load, migration or
the tenth feature. A one-day clone cannot test that. He offers no project that lived long enough.

**Self-contradiction on hallucinations and planning.** Hallucinations were "noch ein riesen
ungelöstes Problem" at the start of the year, and now barely noticeable — a nine-month window,
measured by his impression.

**Unfalsifiable framing.** "Wer da noch KI Skeptiker ist ... das nicht sein kann, was nicht sein
darf" frames disagreement as denial. Combined with *rules change monthly*, any counterexample can
be dismissed as outdated.

**Conflict of interest.** The table that structures the video comes from ChatGPT, which he treats
as an authority on its own progress. The second half is a sponsored MSG segment, and the career
advice (path 2: consultant for transformation) leads straight into the sponsor. "Nichts wird
verkauft" — but the video sells MSG as employer and brand.

## What holds up

- Long autonomous runs and auto-compaction have changed what one session can do.
- AGENTS.md files rot when agents write them; keep only non-inferable rules.
- Deterministic hooks, lint rules and CI checks beat prose rules — they cannot be ignored.
- Named role-agent swarms are mostly theatre; built-in subagents cover most needs.
- The human's main job shifts toward deciding what *not* to build.
- One task per session.
