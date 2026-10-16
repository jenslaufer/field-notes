---
title: "Lost in the Middle (The Agents Season, Episode 3)"
podcast: "Linear Digressions"
hosts: "Katie Malone (solo)"
source: "https://feeds.soundcloud.com/stream/2313951773-linear-digressions-lost-in-the-middle-the-agent.mp3"
transcript: "~/.cache/podcast-transcripts/ld-03-lost-in-the-middle.txt (lokal transkribiert, 19:35)"
published: 2026-05-03
captured: 2026-06-13
rewritten: 2026-08-05
---

# Lost in the Middle

> The headline is old news: models read the start and the end of their context
> closely and skim the middle. What the episode actually delivers is the *reason* —
> and the reason is geometry, not habit. Causal masking puts the first token on
> every downstream attention path and a middle token on half of them. That is why
> a bigger context window does not fix it, and why the fix has to be an editorial
> decision about **where** something sits, not a purchase of more room.

## Core message

Position in the context window is a capability variable. The 2023 Stanford paper
*Lost in the Middle: How Language Models Use Long Contexts* measured it: give a
model 20 documents, exactly one of which answers the question, and move the
answer around. If attention were flat, position would not matter. It matters a
lot — performance traces a **U**: best at the very beginning, good at the very
end, degraded in between.

The result that makes this more than a curiosity: for GPT-3.5-turbo, the answer
sitting mid-list scored *worse than supplying no documents at all*.

> "the performance of the model was actually worse when the answer was in the
> middle of the document list then when there were no documents at all that were
> supplied and the model was just producing the answer to the question from
> memory"

So the extra context was not merely wasted — it was **negative**. The episode's
reading: the correct document "was effectively invisible to it", and the model
latched onto a wrong document at one of the two strong positions instead.

## The two findings that kill the obvious workarounds

**Bigger window does not help.** The paper varied context size and found
"the performance as a function of position was nearly identical for all the cases
that they studied". The dead zone scales with the window; it does not get
diluted by it.

**More documents does not help.** Going from 20 retrieved documents to 50 — more
chances that the right one is in there — bought "about 1.5%" for GPT-3.5-turbo.
The model "seems to be just kind of saturated and overwhelmed".

Both have the shape of a general lesson: an input you cannot act on is not an
asset. Retrieval that widens the haystack without
moving the needle into a strong position is retrieval theatre.

## Why — and the episode is careful about which explanation is primary

The intuitive story is training data: humans put important things at the top and
the bottom, so the model learned the habit. The episode explicitly refuses to let
that be the answer:

> "that's partially true as a story about training data but it's not the full
> picture and crucially it's not the primary explanation"

The primary explanation is architectural, and was **proven mathematically** by an
MIT group in 2025 (*On the Emergence of Position Bias in Transformers*, Jin Yi Wu
and collaborators — as spoken; spelling unverified from audio).

*Causal masking* — each token may attend only to tokens before it — creates the
asymmetry directly:

> "token number one the very first token in the context gets attended to by every
> single subsequent token token number two gets attended to by everything from
> token number three onward token number 500 which is sitting in the middle gets
> attended to by only everything after it which might be half the sequence"

That explains the *beginning*. The *end* gets a second, separate mechanism —
residual (skip) connections that let information bypass attention and hold a
stronger signal across layers. And here the host does something the show notes
would never keep:

> "this starts to get a little bit beyond some of my deep technical knowledge to
> be totally honest with you"

The hedge is worth preserving. The beginning-effect is derived; the end-effect is
described. One of those is load-bearing and the other is a plausible story, and
the episode says which is which.

Human analogue named but not overclaimed: the **serial position effect** —
primacy and recency in memory research. The surprise is that a transformer, which
"technically can pay attention to everything in its context equally", reproduces
it.

## What it means for an agent

An agent observes → reasons → acts in a loop, and every turn of that loop adds
tokens. So the danger is not falling out of the window, it is sinking inside it:

> "if there's critical information from step three that ends up kind of buried
> under 20 steps of subsequent context by the time you get to step 25 then the
> model may have functionally lost that information it didn't technically fall
> out of the context window but it's in that middle dead zone"

The prescription is front-loading critical constraints and instructions — with an
immediate honest limit:

> "It's not fail safe because agents accumulate context dynamically and you don't
> always control where information ends up"

And the status, stated without triumph: "It's partially solved." Training
interventions have improved long-context performance, "but there's still this
geometric structure of causal masking that hasn't fundamentally changed and the
problem hasn't gone away it's just become more manageable".

## What the show notes would have flattened

- *"not the primary explanation"* about training data — without it the piece
  reads as a reading habit instead of as geometry.
- The candid *"beyond some of my deep technical knowledge"* on residual
  connections, which separates the proven half from the described half.
- *"It's partially solved"* and *"not fail safe"* — two hedges that stop this
  from hardening into a rule and keep it a tendency to design around.
- The worse-than-nothing result, the only number in the episode that changes a
  decision: it makes adding context a move with a downside, not a free one.
