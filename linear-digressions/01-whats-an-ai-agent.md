---
title: "What's an AI Agent? And Why Is that Hard to Define? (The Agents Season, Episode 1)"
podcast: "Linear Digressions"
hosts: "Katie Malone (solo)"
source: "https://soundcloud.com/linear-digressions/whats-an-ai-agent-and-whys"
transcript: "~/.cache/podcast-transcripts/ld-01-whats-an-ai-agent.txt (lokal transkribiert, 18:48)"
published: 2026-04-19
captured: 2026-06-13
rewritten: 2026-08-05
---

# What's an AI Agent? And Why Is that Hard to Define?

> The show-notes version of this note delivered the conclusion — *it's a loop, not
> a tool call* — and skipped the thing the episode actually does: it walks **four
> examples up a ladder**, and the rungs are not equally spaced. Between rung three
> (book me a flight) and rung four (manage my email) the object being delegated
> changes kind: from a **task with a finish line** to a **policy that keeps
> running**. That is where "is it done?" stops being answerable, and where the
> accountability question gets its teeth.

## Core message

The episode refuses to open with a definition, on purpose:

> "Because the abstract definition I think is not very useful, I think watching the
> concepts emerges you think through increasingly complex examples is a little bit
> cleaner."

The ambiguity around the word is not only marketing noise:

> "Some of it maybe is sloppy marketing, but I think it's reflecting something
> deeper, which is that this is actually a concept that's tricky to pin down."

The span it has to cover is genuinely enormous —

> "It can be everything from a slightly smarter chatbot to something that is
> theoretically autonomously running an entire company while you're sleeping."

— so instead of a category test, the episode installs the **observe → reason → act
→ repeat** loop as the season's mental model, and does it by climbing.

## The ladder, which is the actual content

### Rung 1 — the responder

ChatGPT, one question, one answer, nothing else happens.

> "Let's call it a responder."
>
> "The interaction between you and the LLM is complete when the answer is
> generated."
>
> "There's no loop, there's no persistence, there's no consequence beyond just the
> conversation that you and the AI have."

### Rung 2 — one tool call (still not an agent)

Same question, but the model may run a web search. It **does** act on the world:

> "It reached outside of itself and it did something to the world, namely it kicked
> off a web search"

And it still isn't an agent, because:

> "It searched once, it got the results and it stopped."
>
> "It didn't look at the results and decide it needed to search again with a
> different query."

The test that survives the whole season:

> "So the key question isn't whether a tool was used, it's whether the model is
> observing the results of the actions that it took and deciding what to do next."

### Rung 3 — book me a flight (the thing most people mean)

*Cheapest option under $400 to New York next Thursday, United preferred.* Search,
compare, notice a violated criterion, retry, fill a form, handle a confirmation —
and know when it's finished. Two things are new here.

**The control flow changes:**

> "So it's not executing this predetermined script, it's not an automation, it's a
> navigation."

**And the consequences leave the chat window:**

> "There's actually $400 that leaves your bank account."

The termination problem shows up immediately and is flagged as unsolved:

> "How does it know when to stop?"
>
> "And that's actually one of the hard problems in agent design."

### Rung 4 — OpenClaw, and the switch from task to policy

> "This was actually the example that motivated me to do this series in the first
> place."

An agent that *manages* email rather than answering when asked:

> "Everybody sends you an email. The AI sees that and can respond to it without you
> ever being in the loop potentially."

The sharpest passage in the episode, and the one the old note flattened into a
bullet about *durable, real-world harm*:

> "If an email gets sent on my behalf that says, sure, I would love to meet you for
> coffee next week. Was that me who sent that email? It came from my account."

What was handed over is not a task but a **standing rule**:

> "So what I might have done for that agent is I gave it a policy."
>
> "And then I might have stepped back and the AI agent is just applying that policy,
> applying that judgment ever since."

And so the completion question dissolves rather than getting harder:

> "it's not working toward a single goal or a single task that you've given it."
>
> "It's just managing this ongoing relationship with the world on your behalf."

## The accountability gap, stated as open

Not hedged, not resolved:

> "when they make those mistakes, can you catch them, can you correct them?"
>
> "And who's accountable when that happens?"
>
> "Super tricky question, and it is not actually answered yet."

The framing at rung 4 is deliberately not a technical one:

> "It's doing this decision making that used to require me to be present but doesn't
> anymore."

## Three definitions, kept side by side

| Source | Emphasis | Verbatim |
|---|---|---|
| Russell & Norvig | perception + actuation | "an agent perceives this environment through sensors and acts upon that environment through actuators." |
| Anthropic | persistence of effects | "agents take actions in the world with real effects that persist." |
| ReAct paper | the loop | "the authors emphasize that loop, observing, reasoning, and then acting, observe what happened, reason about what to do next, and then act again." |

The season adopts the third, and says why the other two are not being dismissed:

> "It's not because the other definitions are wrong. They're all catching something
> that's real."

The load-bearing part of the chosen definition is the negation that precedes it:

> "This is not just about a response. This is not even a sequence of actions."
>
> "It's this cycle of perception and decision making that keeps running until the
> goal is met."

Working definition for the rest of the season: **"something running that loop with
real consequences on the other end."**

## The host's own agent — the part with the most transferable advice

She built one for podcast production (a rung-3 agent, explicitly not rung 4), and
the design lesson she reports is not about tools or frameworks:

> "a lot of the task is about thinking what even should go to the agent in the first
> place, what stays with you and what lives in the middle region between them."

With an honest dependency admission:

> "I don't think I could do this podcast in its current form without that little
> extra help from AI."

## Practical takeaways

- **Locate a system on the ladder before arguing about the label.** Rungs 1 and 2
  are responders; only rung 3 closes the loop; rung 4 changes what is being
  delegated. *Agentic* is a claim about control flow, not about having plugins.
- **Ask what kind of object you handed over: a task or a policy.** A task can be
  reviewed when it finishes. A policy never finishes — it just keeps applying, and
  every application is attributable to you.
- **Build the catch path before granting the permission.** The episode's own
  question — can you catch them, can you correct them — is left open on purpose;
  for anything acting under your name, that is the design question, not an
  afterthought.
- **Decide the middle region explicitly.** What goes to the agent, what stays with
  you, and what sits between is the actual work of building one.

## Next in the season

Episode 2: ReAct, tool use "for the first time" — and the teaser names one more
thing this note previously omitted:

> "we'll also name drop MCP"

## Was die alte Fassung falsch hatte (belegt gegen das Transkript)

- **Erfundenes Zitat.** *"basically a responder with extra steps"* stand zweimal in
  Anführungszeichen. Im Transkript: nur `Let's call it a responder.` — "with extra
  steps" kommt in der Folge **nicht vor**.
- **Paraphrase als Blockzitat.** Die "working definition" *"an AI that perceives its
  environment, reasons about what to do next, acts, and then repeats that cycle
  until a goal is met"* ist eine Umschrift zweier getrennter Stellen, kein Zitat.
- **Zitat, das keines ist.** *"doesn't have clean answers yet"* — gesagt wird
  `Super tricky question, and it is not actually answered yet.`
- **Vorspann falsch.** `hosts: "Katie Malone & Ben Jaffe"` — die Folge ist ein
  Solo-Monolog (*"What I wanted to do was unpack AI agents"*). Derselbe Fehler wie
  in `03` und `07`.
- **Fremdwissen im Ausblick.** *"die zwei 2022–2023 Papiere — ReAct und
  Toolformer"*: Folge 1 nennt **kein** Toolformer. Der Ausblick nennt ReAct, "tool
  use for the first time" und **MCP** — MCP fehlte.
- **Weggelassen:** die vier Beispiele als Aufbau, OpenClaw als Auslöser der ganzen
  Staffel, der Wechsel von Aufgabe zu **Policy**, das Kaffee-Mail-Beispiel, das
  Verschwinden der Fertig-Frage, und der eigene Agent der Moderatorin samt
  Mittelregion-Lektion.
