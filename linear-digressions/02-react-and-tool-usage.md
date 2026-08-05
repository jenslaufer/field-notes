---
title: "ReAct and Tool Usage (The Agents Season, Episode 2)"
podcast: "Linear Digressions"
hosts: "Katie Malone (solo)"
source: "https://soundcloud.com/linear-digressions/react-and-tool-usage-the"
transcript: "~/.cache/podcast-transcripts/ld-02-react-and-tool-usage.txt (lokal transkribiert, 23:30)"
published: 2026-04-26
captured: 2026-06-13
rewritten: 2026-08-05
---

# ReAct and Tool Usage

> The show-notes version of this note said ReAct beat chain-of-thought and left it
> there. The episode spends five of its twenty-three minutes on a single worked
> example, and the point of that example is not that ReAct wins. It is *where* the
> two runs diverge: the action-only run and the ReAct run hit the **identical**
> failed tool call, and only one of them recovered. The difference between a tool
> user and a tool caller is what happens in the step after something returns
> nothing.

## Core message

The 2022–23 inflection was not intelligence, it was reach:

> "It's not because the models got smarter in some abstract sense, but it's
> because researchers figured out how to let them reach outside of themselves."

Before it, reasoning was real but unanchored — the model

> "could reason about what was happening, but it couldn't check that reasoning"

— while a separate research line taught models to act without reasoning:

> "So they click around and then they do things, but they don't really think about
> why they just fail in these brittle ways when things didn't go as expected."

Two programmes that "weren't talking to each other". ReAct interleaves them.

## The worked example, which is the whole argument

HotpotQA: *Aside from the Apple Remote, what other device can control the program
Apple Remote was originally designed to interact with?* Four runs:

| Approach | Answer | |
|---|---|---|
| Standard | "iPod" | wrong |
| Chain-of-thought only | "iPhone, iPad and iPod touch" | wrong |
| Action only | "yes" | wrong |
| ReAct | "keyboard function keys" | **correct** |

The chain-of-thought run is the instructive wrong one: its reasoning is fluent,
internally consistent, and built on a fact it never checked. The action-only run
searched *Front Row*, got nothing back, searched *Front Row (software)*, learned it
was "a discontinued media center software" — and then finished with **"yes"**, an
answer that does not even have the shape of the question.

Now the part the show notes drop entirely. ReAct hits **the same wall**:

> "So now it's going to search for front row. Now remember that didn't work in the
> acting only paradigm. And it doesn't work here either."

Same tool, same empty result. What differs is the next token:

> "So thought three, front row is not found. I need to search front row software."

It reasons *about the failure*, reformulates, and continues. The capability gap
between the two runs is not retrieval and not knowledge — it is having a thought
between a failed observation and the next action.

> "The point is that the model is grounding its reasoning in reality at each step."

> "It's not just confidently asserting something that it might have hallucinated.
> It's going in and checking and then that checking dramatically changes the
> reliability profile of the answer that you get."

Measured: ReAct "significantly outperformed chain of thought alone by reducing
hallucination and error propagation", and on interactive tasks beat action-only
"by a lot".

> "So it's not just that the model's reasoning better. It was reasoning about real
> information that it had actually retrieved."

## The third finding, which the show notes omitted and which is the practical one

> "those trajectories are interpretable"

> "So you can read that thought action observation sequence and see exactly what
> the model was thinking at each step. And so when it goes wrong, because it does
> go wrong, you have some way to diagnose why."

*Because it does go wrong* is the load-bearing clause. The paper's third
contribution is not accuracy at all — it is that the failure mode is legible after
the fact.

## Toolformer — the trigger, not the loop

The question ReAct does not answer:

> "can you teach a model to know when to reach for a tool in the first place
> without being told"

Method, self-supervised:

> "They generated this huge data set of text with potential API calls annotated.
> They filtered for the ones the API calls that actually helped the model predict
> what came next and then they fine tune the model on those API calls."

The filter is the idea. A tool call survives training only if it **improved the
next prediction** — not if it ran, not if it returned something. Tools: calculator,
question answering, two search engines, translation, calendar. Result: a small
fine-tuned model competitive with a much larger one —

> "And that's not necessarily because it's smarter, but because it knew when to
> offload the hard parts."

> "So in effect, the model has, through this training process, learned its own
> limitations and has found routes around them."

The split, stated plainly: "React is about the architecture of reasoning and
acting", Toolformer is "about learning tool use. So when do you reach for a tool?
Not just how to reach for a tool once you've decided."

## MCP and Open Claw

MCP solves neither problem — it solves the wiring: N models × M tools bespoke
connectors, "so that space starts to commentarially explode" [sic, transcription of
*combinatorially*]. Announced by Anthropic **November 2024**, "like a USB-C port for
AI", now adopted by OpenAI and Google DeepMind. And explicitly:

> "Now MCP doesn't change anything about the fundamental architecture we've been
> talking about."

Open Claw: released **November 2025** by Peter Steinberger, first called ClaudBot,
"250,000 stars on GitHub", described as the fastest-growing open-source project in
history.

> "What it is is a personal AI agent that you run on your own computer, you can
> interact with it through messaging apps like WhatsApp or Telegram, and you can
> give it access to email, calendar, files, whatever you want."

> "And then it uses a skills system, which skills are little bundles of
> instructions that tell the agent how to use specific tools."

And the shift the episode says nobody had seen until then:

> "if you give the ability to an AI to have persistent access to your tools and
> have it act on your behalf, that's a different beast than asking questions. It's
> not like you've taken a chatbot and you've given it an upgrade. You are dealing
> with a different type of tool here."

> "they became this architecture that now millions of people ended up running on
> Mac minis just a couple years after these papers were published"

Closing: "But tool use is also where you raise the stakes." … "So the power and the
risk, they're scaling together."

## Address here

**1. The failed tool call is the whole difference, and I got this wrong 26 hours
ago.** Yesterday's routine line ran `memory-evict` out of `/tmp`; it died with
`FileNotFoundError`, and the journal entry records that the abort "looks like an
empty run". That is action-only behaviour exactly as the episode describes it: an
observation came back empty, no thought was inserted, the loop continued as if the
step had succeeded. ReAct's Front Row moment is the counter-example — same failure,
one extra thought, recovered. **Concrete rule, cheap to apply: every routine call
that can return empty needs its empty case distinguished from its zero case.**
`keine neuen Leads`, `no stale markers`, `nichts kalt` and *the tool never ran* are
four different states and currently print as one.

**2. Toolformer's filter is the criterion my skill measurement lacks.** `skill-usage.py`
counts 159 skills by invocation and `skill-outcomes.py` reports 89 % merged. Both
count that a call *happened*. Toolformer's training filter keeps an API call only
where it "actually helped the model predict what came next" — the counterfactual.
I cannot compute that offline, but the question is still the right one and it is the
same shape as the runway lesson: a count is not a measurement of value. The nearest
honest proxy available here: for a skill invoked ≥10 times, how often did its output
change the next action versus get discarded.

**3. Interpretable trajectories are what the agent-task channel does not keep.**
When a YAML fails I have a `.failed` marker (documented unreliable), a branch, and a
PR body — and the PR body has demonstrably lied about what it delivered. What is
missing is the thought-action-observation trace, the thing ReAct's authors named as
their third contribution. Yesterday's sol #112 is the same shape one level up: the
diff was fully inspectable, the *environment* the artifact would be built in was
not, so 23 assertions agreed with a wrong outcome. Legibility of the output is not
legibility of the reasoning.

**4. Open Claw is this operation's architecture, shipped as a product, at 250k
stars.** Personal agent on your own machine, driven through Telegram, with skills as
bundles of tool instructions, and "millions of people ended up running on Mac
minis" — that is a description of this repo running on the mini-PC. The useful part
is not a build idea; it is a demand reading with a citation: the fastest-growing
open-source project in history is *delegated agency for one person*, and its
distribution channel was GitHub, not ads. Worth exactly one hour before any new
extension idea: does the Idea-backlog contain anything with that shape.

## What the show-notes version got wrong

Checked against the transcript and, for the two invented items, against all 16
transcripts of the season:

1. **Invented quote.** The old note carried a block quote: *"Reasoning without
   action leaves a model stuck in its own head, and action without reasoning leads
   to brittle, aimless tool use."* `stuck in its own head` and `brittle, aimless`
   have **zero hits in any of the 16 transcripts**. The idea is in the episode; the
   sentence is not. (Error type 2 in `SOURCES.md`.)
2. **Outside knowledge as episode content.** *"Toolformer (Schick et al., Meta AI,
   2023)"* — `Schick` has **zero hits in any transcript**. The episode says only
   "it came out of meta AI in early 2023". Factually right, wrongly sourced — the
   type-4 error, the one that survives every fact check. (ReAct's first author *is*
   named in the audio: "Shen Yu Yao", spelling as spoken.)
3. **Host line wrong** — "Katie Malone & Ben Jaffe"; the episode is Katie solo.
4. **The worked example is missing entirely**, and with it the only mechanism the
   episode actually demonstrates.
5. **The interpretability finding is missing**, the one of the three ReAct results
   with a direct operational use.
6. The "practical takeaways" were derived, not spoken, and the three permission
   questions do not appear in the audio in that form.
