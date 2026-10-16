# Niklas Steenfatt — insights for Jens

## Recurring themes

**Prose rules rot; deterministic checks hold**
- Agent-written context files collect trivia and cost tokens. Move enforceable rules into hooks, lint rules and CI. ([Vibe Coding hat sich verändert](2026-10-16-vibe-coding-hat-sich-veraendert.md))

## By episode

### 2026-10-16 · [Vibe Coding hat sich verändert](2026-10-16-vibe-coding-hat-sich-veraendert.md)

- **Audit the global CLAUDE.md and skills against the ETH result:** keep what an agent cannot infer (channel names agent-task vs Fabrik, secrets layout, skill distribution via version bump). Cut what the codebase already shows.
- **Turn rules into hooks where possible:** "commits only when requested" and "tickets only via the ticket skill" are prose today. A PreToolUse hook on `git commit` / `gh issue create` would enforce them — the 2026-09-15 incident (five issues written past the skill) is exactly a prose rule failing.
- **Do not drop the gates:** quality-gate, merge-branch and handtest are the deterministic loop the video calls obsolete. They are the part of its advice that holds.
