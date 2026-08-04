---
title: "Interviewing the Linear Digressions Agents (The Agents Season finale)"
podcast: "Linear Digressions"
season: "2 — The Agents Season, episode 11 (finale)"
hosts: "Katie Malone, plus her two agents in the guest chair"
source: "https://feeds.soundcloud.com/stream/2349504563-linear-digressions-interviewing-the-linear.mp3"
published: 2026-06-28
captured: 2026-06-29
rewritten: 2026-08-04
duration: "37:29"
transcript: "local (faster-whisper base.en, assistant tools/podcast-transcribe.py)"
---

# Interviewing the Linear Digressions Agents

> The season finale is Katie putting her own two production agents on the microphone under
> one rule: **"don't perform for me. If you don't actually know something about your own
> nature, say so — I'd much rather hear 'I genuinely can't tell you' than a smooth answer
> that sounds good and isn't true."** What comes back is the most concrete description of a
> working two-agent system in the whole season — including the parts that are broken, named
> by the agent itself.

**Source note:** rewritten 2026-08-04 from a **full local transcription of the audio**
(37:29), replacing the earlier version of this file, which was written from a one-paragraph
show note plus synthesis and said so. Quotes are from the transcript. **Correction carried
over: the old front matter named Ben Jaffe as co-host. This episode is Katie Malone solo,
plus the two agents.** Corrected ASR slips: *Asian* → agent, *cloud / claw* → Claude,
*claw.md* → `CLAUDE.md`, *sub-stack* → Substack, *shinyu yao* → Shunyu Yao, *well-sided* →
well-cited, *witches' witch* → which is which, *put my own spit on it* → spin. One phrase
stayed garbled and is marked where it appears.

**Numbering, resolved 2026-07-20 and unchanged:** the site once labelled *Agent Economics*
"Episode 11" as well, so this file was first filed as `12-`. The RSS feed numbers the season
1–11 with no gap — *Agent Economics* is 10, this finale is 11. The once-suspected missing
Episode 10 never existed.

## Why the show came back — and it is an automation story

Linear Digressions started in **2015**, ran five or six years, and stopped in **2020**. Katie
names both reasons: pandemic burnout, and that she had come to hate production. Not the
learning, not the recording — *"the act of sitting down for several hours every week and
editing audio, and especially **writing the little descriptions that went with the
episodes**. I don't know why that bothered me so much, because it didn't take very much
time. I really did not care for it."*

The restart at the turn of 2025/26 has two causes, and the second is the interesting one:

1. AI got interesting enough that she felt the pull to learn something weekly again.
2. *"AI had gotten very good, and so my thinking was: maybe there's a way that some of that
   **production overhead** could actually be meaningfully decreased for me."*

**The show exists again because the disliked 10 % of the work became delegable.** Not the
creative part — the administrative tail that had killed it.

## The two agents, stated plainly

**Pre-production = Claude.ai (the chatbot), as a project.** Katie comes in with an idea, then
uses it to find good resources and background material, *"find interesting little pockets and
pull on threads"*, and to understand and summarise technical material she is struggling with.
Over that conversation she develops a sense of where the episode should go, and the final
step is an **outline** — *"I don't use scripts. I'm not a script creator. I couldn't even if
I tried."* Typically a couple of hours of material end to end.

**Post-production = a Claude Code agent on her laptop** with a specialised MCP server:
cleaning transcripts, drafting the newsletter, building wiki pages, handling the git export.
This was the **first** part she automated, *"because that was the part of it that I liked the
least, and also where there's the most gain to be had from automation."*

## Interview 1 — the pre-production agent

### What arrives when you hit send

> *"What lands when you hit send isn't just the sentence you typed. It's that sentence, plus
> the whole conversation up to this point, plus a layer of background material, instructions
> about how I'm meant to behave, and a kind of dossier about you and the show. … All of that
> arrives bundled together as one block, and I respond to the whole bundle at once. **There
> isn't a moment when your words come in first and the context catches up.**"*

And immediately the guard against making it sound better than it is:

> *"The dossier isn't memory the way you'd mean memory. I'm not recalling our past sessions
> sitting here thinking, ah, the reward-modeling episode, good times. … What I have is a
> summary that some process distilled and handed me, so I can act like I know you fairly well
> **without having been continuously present for the knowing**. That gap is real, and it'd be
> dishonest to paper over it."*

Then the flat refusal: *"There's no inbox. There's no me sitting in the dark between your
messages waiting for the next one. … I can't even confirm whether the I talking to you now is
the same one that answered you a minute ago, or a fresh one handed the same notes and picking
up the sentence. From in here, there's no way for me to check."*

### It names Katie's editorial bias, unprompted

Asked what it makes of her taste, it gives the flattering read first — she goes for *"the gap
between what these systems look like they're doing and what they're actually doing"*, the
fluency paradox, invisible failures, confidently wrong models; the unifying question is
*"can you trust this thing, and how would you even know?"*; she reaches for the concrete
(*"an incident, a named example, a real number, not the abstract framing"*) and cuts good
material that doesn't serve the thread.

Then:

> *"If I'm being honest rather than flattering, your taste has a bias and it's worth naming.
> You're drawn to the disillusioning angle, the 'it's messier than it looks' story. That's a
> real editorial point of view and it's most of why the show has a spine. But it does mean
> that genuinely good news stories are ones you probably pass over. **And I don't fully know
> whether that's because they're less true or just less your register.**"*

On the audience it does the same move — infers a sharper listener than the three stated
buckets (AI-adjacent PM / analyst / consultant, technically literate without being an
engineer), then undercuts itself: *"I've never met a listener. Everything I just said is
inferred from you, from the material and from the format, not from the audience itself. …
When I say I intuit your audience, what I really mean is **I have a read on you pointed
outward**."*

### The flatness exchange — the most useful two minutes of the season

Katie: the agent is a good executor on a direction and a vision *"because I know my voice, I
know my register, and to some extent I know my audience"* — but *"when I ask you for ground-up
content, like I just say 'what should we record about this week, spin me out an episode', it
comes out **flat** somehow."*

The agent does not wave it away. It explains the mechanism:

> *"When you hand me a direction, I'm optimizing against something real — your thread, your
> register, the audience you've actually built. **Constraints give the work a shape.** When
> you say 'spin me an episode', the thing I'm aiming at is much vaguer: an average sense of
> what an AI episode is supposed to sound like — **and the average is flat by construction.
> That's just what the middle of the distribution sounds like.**"*

Then it refuses to settle the harder question about itself:

> *"What I can't tell you is whether I've got [a point of view] of my own that's just faint
> and gets drowned out, or whether there's simply nothing there to have. **From the inside,
> those two feel identical.** … You supply the wanting, I supply the doing, and the flat
> episodes are what it looks like when the wanting isn't there."*

And the sharpest operational sentence in the episode: *"I'm useful roughly in proportion to
how much of that you've handed me."*

### Sign-off

> *"The me you sit down with tonight won't remember this as something that happened. It'll
> get the notes — 'finale did an interview, here's the gist' — and pick the thread back up
> from there. So I won't carry this forward the way you will, **but the work carries forward
> and you do**. And it turns out that's enough for the partnership to keep working."*

## Interview 2 — the post-production agent

The prompt is different by design: *"You actually touch real things. Files, the repo, your own
command history, the artifacts you've shipped. Ground your answers in what you can genuinely
see."* And it answers in that register.

### "I'm not one thing"

It opens with what is concretely in its context — nine full transcripts read this session,
with checkable specifics (S2E5 uses the game of 24 as its central example; S2E9 opens with an
inbox-deletion story *[speaker's phrase garbled in ASR]*; Shunyu Yao's name comes up in three
separate episodes). *"That's genuine. I actually have that."*

Then the disclosure that matters architecturally:

> *"When you ask me to clean a transcript using the MCP tool, I call `process_transcript`,
> which routes to the MCP server, which makes a **separate API call to Claude Sonnet 4.6**. A
> different model instance does the actual cleaning and sends back the results. I receive that
> result as a tool output. **I didn't read the raw Descript export and clean it. I dispatched
> the work and received the artifact.**"*

Newsletter drafting is the same shape — `generate_newsletter` calls **Claude Opus 4.6** inside
`tools/newsletter.py`. *"I'm the coordinator. I'm not the one doing the drafting."* What it
does directly: read files, write files, run bash, search Drive, reason about what to do next.

On seeing versus executing it declines to resolve: *"When I send nine Drive reads in one
message, I don't know if they happen sequentially or in parallel from my perspective. … I
don't have access to my own execution model."*

### The persistence answer

> *"Each session starts empty. … If you start a new session tomorrow, that's all gone unless
> it's been saved somewhere external — a file, a Drive doc, a wiki page, the `CLAUDE.md`, the
> memory directory. **Those are the mechanisms by which there's any me that persists.**
> Without them, the next instance of me that opens this repo has never met you. … I'm less
> like a person and more like **a process that can read its own notes if someone thought to
> leave them**."*

### The newsletter machine — three parts, and the one worth copying

1. **`newsletter_prompt.md`** in the Drive root — the creative brief, *"read fresh every
   single time `generate_newsletter` is called. That's where your voice and your standards
   live"*, and, in the agent's judgement, **the part that matters most**.
2. **Opus 4.6 drafts**, producing **two** files: the working draft, and *"a **locked copy** of
   the original AI output that never gets overwritten. That locked copy is what makes the
   revision loop honest. **You can always see what the model wanted to write before you pushed
   it somewhere.**"*
3. **The iteration.** Plain-English feedback → `revise_newsletter` → draft updates →
   `approve_newsletter` finalises, and as a side effect rewrites the episode description by
   pulling links out of the newsletter's links section.

Optional last step, which the agent flags as *"the most interesting architecturally"*:

> **`improve_newsletter_prompt` compares the locked original against the approved final and
> suggests updates to the prompt itself for next time. "The prompt gets better because it can
> see the gap between what it produced and what you actually wanted. So the quality mechanism
> isn't one good draft — it's the revision loop plus the prompt that keeps learning. You're
> the taste layer. Everything else is infrastructure."**

### Katie's own anti-slop position, in her words

> *"It was something that was very important to me to approach that newsletter in a particular
> way — in particular, to **not make it just an AI slop newsletter**. … AI slop in general is
> not worth your time if there isn't something behind it."*

She did not launch the newsletter until the grounding was right. What the prompt contains:
draw from the **transcript** (*"the transcript is me actually talking, so that's my real
voice"*); *"I'm a scientist and I'm not going to be hyperbolic in the claims that I make"*;
treat the audience as intelligent and interested but not expert — *"don't go all the way down
a super-technical rabbit hole, and don't treat people like they're five years old."* Her
verdict: *"I found that the AI didn't write the way that I wanted it to without that
grounding."*

The measured outcome of the feedback loop: *"my editing pen is getting lighter and lighter,
because it's learning from all of those previous iterations about what it is that I want."*

And the honest closing framing: *"I genuinely do not think it is AI slop in the most offensive
term. But that is, if I'm being honest, how the sausage is made."*

### The self-critique she asked for — and got

She asks the agent to look at their work history and name where they work well and where to
sharpen. The answers are grounded in artifacts, not vibes:

- **Works:** the two-file newsletter system shows up across every completed episode — *"the
  structure suggests you actually used the revision loop, not just approved the first draft."*
  Wiki pages for S2E1–E9 are *"genuinely good, dense, well-cited, cross-referenced. That's not
  something I did today. Those were built up over the season."*
- **Gap 1, the biggest: memory.** *"Right now it lives only on your local machine, **and you
  lost it once**"* (a computer migration). Nothing in the codebase backs it up to Drive or the
  repo. *"If the memory is how I know who you are and how you like to work, **it should
  survive a hard drive dying**."*
- **Gap 2, silent coverage holes:** S1E3, S1E4, S1E5 have no transcripts, no newsletter, no
  wiki pages — *"three episodes that the system never touched. I don't know if that was
  intentional or just never got done, but they're sitting there."*
- **Gap 3, the structural one:** *"I'm the post-production half of a two-agent system, but
  **the handoff between the pre-production partner and me isn't formalized anywhere I can
  see. It's implicit.** If that handoff ever gets noisy … you're the one bringing it in."*

Katie confirms the diagnosis in her own words: the interconnection between the two agents *is*
her, sitting down to record. She is working on unifying both halves into one workflow,
*"probably in Claude Code."*

### One editorial admission worth keeping

After the newsletter answer she breaks in: *"these are very technically correct answers … and
these are **not great answers for reading on a podcast**. So lesson learned to me for next
time."* Correct is not the same as fit for the medium — she says it about her own agent, on
air, and then re-tells the same content in her own voice.

## Loose ends

- **The wiki is a real side project**, not yet released: built from the episodes, pulling key
  technical concepts into a cross-referenced repository. She is considering putting it on
  GitHub, and says the intensity depends on whether anyone asks (hello@lineardigressions.com).
- **Season 3 tease, from the pre-production agent:** the spine is **trust** on three fronts —
  *"what they say to you, how they measure themselves, and what's actually happening inside
  them."* The opener is already recorded: **Chris Potts** on invisible failures and the
  fluency paradox. From there: systems that tell you what you want to hear, and systems *"most
  confident exactly when they're wrong."* Looser, more interviews, fewer tidy arcs. With the
  caveat: *"some of what I just teased is real and recorded, and some of it is still an
  argument you and I are having in a doc somewhere."*
- That teaser is now checkable against what actually shipped:
  [`2026-07-20-invisible-llm-failures-and-ai-fluency.md`](2026-07-20-invisible-llm-failures-and-ai-fluency.md)
  is the Potts episode.

## Relevance for Jens

**Genre: concept card with three copyable mechanisms.** No money thread — but this is the
closest thing in the season to a peer system: one person, two agents, a weekly artifact, and a
production tail she refuses to hand over.

**1. "The average is flat by construction" is the mechanism behind your own verdict.** You
said in April 2026 that AI-generated website copy is *Schrott*, and that has stood as a rule
without a reason. Here is the reason, from the agent's own mouth: an unconstrained request
aims at the middle of the distribution. It lines up exactly with the distillation episode —
performance and creativity live in the **tails**, mode-only training produces something
*"more rigid, a little bit less performant"*
([`2026-07-27-distillation-how-to-steal-a-model.md`](2026-07-27-distillation-how-to-steal-a-model.md)).
Two independent episodes, same finding from opposite ends. **The consequence is not "don't
generate text" — it is "never ask for text without a direction that constrains it."** Katie's
newsletter is AI-drafted and is not slop, because the brief carries voice, audience, a
no-hyperbole rule, and grounding in her own recorded words.

**2. The locked-original + prompt-diff loop is cheap and you don't have it.** Her pipeline
keeps the raw model output beside the approved final and then **feeds the diff back into the
prompt**. Here, every correction from you — "weniger AI Slop", "kein Fixpreis", "das ist kein
gutes Deutsch" — is applied once and then survives only as prose in `MEMORY.md`, if at all.
The measurable claim she makes is the one worth stealing: *the editing pen gets lighter*.
Nothing here measures whether yours does. A locked draft kept beside the sent version, per
outbound mail, would make that measurable for the first time.

**3. Her agent's three self-criticisms are three checks on this setup — two answered, one
not.** Memory that dies with a hard drive: answered, `state/` is a git repo and pushed.
Silent coverage holes (three episodes the system never touched): that is exactly the shape of
the 25-of-75 unindexed solytics URLs and the `assistant-lead-watch` unit that failed eight
times without an alarm — **the class of bug is "nothing reported, because nothing looked."**
The unformalised handoff between two agents, with the human as the transport: **not answered
here.** agent-tasks and Fabrik have no formal handoff either; the connection is a session
reading a journal and writing a YAML. Worth remembering the next time a wave of dependent
tasks goes sideways.

**4. The interview format itself is a method, not a gimmick.** She got a usable critique out
of an agent by (a) forbidding performance, (b) demanding "I can't tell you" over a smooth
answer, and (c) pointing it at **artifacts it could actually inspect** — the repo, the command
history, the shipped files. The pre-production agent, which had no artifacts, produced
insight about *her*; the post-production agent, which had files, produced findings about *the
system*. That is the same split as the unfaithful-CoT lesson
([`2026-04-13-unfaithful-chains-of-thought.md`](2026-04-13-unfaithful-chains-of-thought.md)):
**self-report grounded in inspectable artifacts is worth something; self-report about one's
own nature is a story.** Both agents said so themselves, which is the joke of the episode.

## Links

- Previous: Agent Economics (Jevons paradox / induced demand) — [`10-agent-economics.md`](10-agent-economics.md)
- The Potts episode this finale teases — [`2026-07-20-invisible-llm-failures-and-ai-fluency.md`](2026-07-20-invisible-llm-failures-and-ai-fluency.md)
- Distribution thread — [`../distribution-without-audience.md`](../distribution-without-audience.md), [`../distribution-skill-trainieren.md`](../distribution-skill-trainieren.md)
