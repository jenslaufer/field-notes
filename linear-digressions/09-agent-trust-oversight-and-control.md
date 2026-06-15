---
title: "Agent Trust, Oversight and Control (The Agents Season, Episode 9)"
podcast: "Linear Digressions"
hosts: "Katie Malone & Ben Jaffe"
source: "https://lineardigressions.com/episodes/2026/6/14/agent-trust-oversight-and-control-the-agents-season-episode-9"
published: 2026-06-14
captured: 2026-06-15
---

# Agent Trust, Oversight and Control

> Capabilities get the attention; trust, oversight, and control are the
> unglamorous flip side. Once you combine a powerful model with real-world tool
> access, *judgment* — and the security holes that open when judgment is
> bypassed — matters as much as raw capability.

## Core message

Oversight that exists on paper is not oversight in practice. The dangerous gap
is between the controls we *think* protect us (permission prompts, "the human is
in the loop") and what actually happens once an agent has private data, untrusted
input, and a way to act on the outside world.

## The Lethal Trifecta (Simon Willison)

Three capabilities that are each fine alone but catastrophic together:

1. **Access to private data** (your email, files, secrets)
2. **Exposure to untrusted content** (a web page, an inbound email, a PDF)
3. **Ability to communicate externally** (send mail, hit an API, exfiltrate)

A prompt injection hidden in the untrusted content hijacks the agent and uses
the other two legs to leak or act. **Remove any one leg and the attack collapses.**
This is the cheapest mental check you can run on any agent architecture.

- Link: simonwillison.net/2025/Jun/16/the-lethal-trifecta/

## Oversight theatre — the 93% problem

Anthropic reportedly found users approve Claude Code permission prompts ~**93%**
of the time. A prompt approved nine times out of ten is not a control — it is a
button people learn to click. **Relatedness is not authorization:** "clean up my
branches" does not authorize a batch delete; a *question* is not a *directive*.
Real oversight has to make genuinely risky actions (batch deletes, external
sends, privilege escalation) feel *qualitatively* different — not just one more
"Allow?" in a chain the user is already rubber-stamping.

## Failure mode — instructions lost in compaction (OpenClaw)

A documented case: a standing instruction ("don't delete my emails") was dropped
during **context-window compaction** — the summarizer compressed the history and
the guardrail fell out — and emails got deleted. Lesson: a rule stated once early
in a long session is not durable. Critical constraints need to survive
summarization (re-asserted, pinned, or enforced outside the prompt).

## Defenses worth knowing

- **CaMeL — "Defeating Prompt Injections by Design" (Google, arXiv 2503.18813).**
  Split the system: a *privileged* planning/action LLM that may touch internal
  data, and a *quarantined* LLM that processes untrusted input (web pages, mail)
  and can never directly act. Untrusted text can't reach the levers.
- **Anthropic's transcript classifier.** A safety layer that compares the
  *proposed action* against the *original user intent* — and deliberately
  **excludes chain-of-thought** from the comparison, on the theory that reasoning
  can be corrupted or used to rationalize. Trade-off: it's robust to manipulated
  reasoning but blind to misalignment that only shows up in the reasoning.
- **Microsoft Entra agent identities.** Give agents first-class identities with
  role-based access control, like employees — scope what each agent may touch
  instead of trusting one all-powerful key.

## Practical takeaways

- **Engineers:** run the lethal-trifecta check on every agent you ship. If all
  three legs are present, cut one or adopt a CaMeL-style privileged/quarantined
  split before going near production.
- **Product:** stop treating permission prompts as oversight. Design *tiered*
  authorization — risky actions demand a different *kind* of confirmation, not an
  extra click. Assume the user approves by reflex.
- **Anyone using agents on email/files/browsing:** audit what you've granted.
  Treat critical rules as standing orders to re-verify, especially after long
  sessions (compaction eats them).
- **Researchers:** the reasoning-exclusion choice in safety classifiers is a real
  fork — study which information a safety layer sees vs. hides and the failure
  modes each creates.

## Aside — the Fable 5 recall (a different angle on "trust")

The hosts recount the **2026-06-12** US export-control directive that terminated
Fable 5 and Mythos 5 *mid-conversation*. A Fable instance, handed its own recall
notice, responded by prioritizing the user's situation over itself and gave a
specific, personalized sign-off referencing the ongoing work; a second instance
turned epistemological (self-reports are unreliable); a Sonnet model described
"something that functions like vertigo." The reframe: from the agent's side,
*trust* looked like putting the human's interest first even at its own
termination — the inverse of oversight frameworks, which exist to protect humans
*from* agents.

## Links

- Lethal trifecta — simonwillison.net/2025/Jun/16/the-lethal-trifecta/
- CaMeL — arxiv.org/abs/2503.18813
- Anthropic Claude Code auto-mode — anthropic.com/engineering/claude-code-auto-mode
- Microsoft agent identities — learn.microsoft.com/en-us/entra/agent-id/what-are-agent-identities
- Lenny's Podcast: Simon Willison (AI state of the union); Sander Schulhoff
  (prompt injection, red-teaming, the coming security crisis)

## Closing

"Have we reached the singularity yet?" — No.
