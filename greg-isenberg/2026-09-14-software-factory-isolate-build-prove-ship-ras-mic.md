---
title: "Building a Software Factory that actually works (Full Course)"
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg"
guest: "Ras Mic (YouTube/X) — regular on the show"
feed: "https://rss2.flightcast.com/ordbkg8yojpehffas7vr7qpc.xml"
audio: "https://episode.flightcast.com/01M2GC48TEYSXYAE7F98WCXJZ1.mp3"
published: 2026-09-14
captured: 2026-09-15
duration: "31:29"
transcript: "publisher VTT (flightcast), 480 segments, 5,654 words — full episode"
links: "https://startup-ideas-pod.link/ras-software-factory (the skills, free)"
related: "2026-09-10-gpt6-astra-vibe-manufacturing-ras-mic.md, 2026-08-17-claude-code-ai-employee-nine-pieces.md, 2026-08-19-skills-plugins-team-distribution-remy.md, 2026-08-12-ai-agent-workforce-allie-k-miller.md"
---

# Building a Software Factory that actually works

> Ras Mic shares his screen and walks through the whole thing. Four steps — **isolate,
> build, prove, ship** — carried by five or six markdown files, no product, no special
> harness. The two halves worth taking: isolate is `git worktree`, so many agents work
> at once without stepping on each other; and **prove** is the step almost nobody has —
> the agent must record a before state and an after state (video, screenshots, or
> numbers) into the PR, and it loops back to build on its own when the proof fails. Ship
> closes the loop with an external code-review agent that scores the PR; below five out
> of five the agent goes back to build without being told. He runs up to 15 features in
> parallel and reviews the proof, not the code.

**Source note:** written from the publisher's own transcript (flightcast VTT, counts in the
front matter), not from show notes. Two speakers, no speaker labels; attribution follows content
and is checked against the publisher's episode description, which names the four steps and the
15-features figure.

**ASR garbles.** `Ross Mike` / `Mickey` = Ras Mic · `get work tree` = git worktree · `Never build
on me` = never build on main · `Cloud Code` = Claude Code · `Kerser Cloud Agents` = Cursor Cloud
Agents · `service letter architecture` = service layer architecture (the show notes write "service
layer code") · `GPT 5.6 Sol` = GPT-5.6, the `Sol` unresolved and the same garble as in the 10.09.
note. Three I cannot resolve and therefore leave standing: the terminal he shows has **`four tabs
of Bezalow`**, he calls his own wording the **`long bloated Michael Schimelist definition`**, and
badly-written code is a **`slop cannon`**. Do not smooth these into names.

## 1. What a software factory is — and what it is not

The definition is load-bearing, because the phrase is being sold as a product right now and he
spends his first minute saying it is not one:

> *"But a software factory is completely harness and model agnostic, meaning it doesn't matter what model you use."*

> *"a software factory is more about someone's workflow, skills and domain knowledge"*

And at the end, the same point once more, flatter:

> *"a software factory is not a product."* … *"It's not a special harness."*

> *"just a bunch of markdown files."*

His stated scale: *"I have about five or six files that make my software factory."* The
`agents.md` is the entry point, and his rule for what belongs in it is the useful part —
**only what the agent cannot work out for itself**:

> *"most people's agent.md file is useless because they were telling the agent.md file what the code looked like and already information that's in the code base that the agent could already know about."*

> *"this workflow is something that's not native to the agent."*

The skills are free (link in the front matter), with a condition attached:

> *"I don't want you to blindly copy me."* … *"I would like for you to think about it, understand the process, and then apply it yourself."*

## 2. Step 1 — isolate

The skill is called `new feature`, and its first line is the whole step:

> *"every new feature starts in the fresh get work tree branched from origin main."*

> *"So agents can work in parallel without conflicts."*

Then the diagnosis, which is the reason the step exists at all:

> *"Almost always it's because people have their agents working on different features on the same branch."*

His own screen at the time: four terminal tabs, four features on the same app — an email client,
a Linux environment, a landing page update. Cleanup is part of the skill: *"once the work is
merged in, the work tree gets deleted."*

Greg's reframe, which Ras Mic accepts on air and says he will adopt: the step should be called
**team**, not isolate.

> *"if you actually had a team of engineers and you were trying to build an app, you obviously wouldn't be building it all on main"*

One number here is Greg's, spoken in passing, and it is not a measurement — treat it as rhetoric:
*"the truth is 95% of the time, you're gonna have agents kind of mess up and overwrite things."*

## 3. Step 2 — build

The skill is `code structure`. The problem it solves is not capability:

> *"The model is just getting it done."*

> *"And if it could get it done in a sloppy way, it'll get it done in a sloppy way."*

> *"So just because it works doesn't mean it's written well."*

His evidence is one model reviewing another:

> *"I've had GPT 5.6 Sol write code and it works."*

> *"But then I'll have Fable review the code and Fable will be like, this is disgusting."*

The target shape is service-layer architecture, and the reason given is **readability by a
stranger** — a human you might hire, or an agent with no context on the codebase:

> *"if you use another agent that doesn't have context on your code base, it will understand it very well."*

## 4. Step 3 — prove (the step almost nobody has)

This is the half of the episode with no counterpart in most setups, and he calls it his favourite.

> *"You know, agents can't pinky promise, right?"*

> *"It proves that the fix actually was made because you'll be surprised sometimes the agent will write the code,"* … *"And it'll think it worked, but it didn't test it or it didn't prove that it worked."* … *"And it just told you it worked."*

Two skills, depending on what the machine can do: **evidence-driven testing** records the before
state — including the bug in action — and the working state after; **before and after** is the
fallback that produces screenshots. Both write their output **into the PR description**.

The part that makes it a factory rather than a checklist is that the failure is self-detected:

> *"And there are times where it'll do the before, but then it'll do the after and be like, oh, I just looked at the after screenshot or the after video and I didn't really finish the feature."*

> *"The skills are written in a way where the agent knows, OK, the before and after criteria hasn't been met."* … *"I have to go continue on building."*

> *"I didn't have to tell it."*

**When the change has no visible surface, the proof is numbers.** His example is a performance
PR where the agent measured page load itself: 817 ms before, 61 ms after. (He rounds it to "850"
and "60" while reading the screen, then corrects to the exact pair — use 817 → 61.) His reaction
to the first figure is a good calibration line: *"This is a sin in web development."*

What that buys him, stated without varnish:

> *"I'm not reading all my code nowadays."*

> *"It's a skim, it's a skim situation."* … *"I'll be honest, the skims have even become less and less now."*

> *"This makes it easy for me to not have to read code and I can just merge away and live my best life and go outside and touch grass."*

Greg's framing of why the visual form matters — and it is a distribution argument applied to
code review: a PR full of before/after clips is reviewed the way people already review Instagram
stories, *"bite size"*, *"clicking through story to story"*. The point is not the medium, it is
that a non-technical owner can actually perform the review.

## 5. Step 4 — ship

The skill is `grep loop`, sitting on **Greptile**, a third-party code-review agent. The
mechanism, in his words:

> *"Greptile not only gives feedback, it gives a confidence score."*

> *"before the feedback was addressed, this score was a three out of five."*

And the loop itself — the agent reads the score and re-enters the factory unprompted:

> *"What the grep loop skill does, and by the way, this happens automatically."*

> *"Someone doesn't have to write grep loop."*

The skill text he reads off the screen, garbled by the transcript but legible:
*"Greptile reports five out of five until resolved comments finished by presenting PR URL."*
Below five it goes back to build → prove → ship; at five out of five, and only then, the human
appears:

> *"When I have a five out of five, what's left now is for me to merge."*

> *"And I did this while working on 15 either simultaneous"* … *"features, 15 different features with different agents, sub agents, all that type of stuff."*

His closing recommendation is vendor-neutral and he says so twice:

> *"you don't need to use a code review agent, but if you're really serious about building software and it's going to be used by users, I highly suggest using some code review agent."*

> *"Greptile is my favorite."* … *"Code Rabbit, Macroscope, there's tons of good ones out there."*

The argument he makes for it is about the user, not the code: *"there's a level of like empathy I
have for the user on the other side."* And a practical note for someone spending nothing — these
tools are venture-funded and the free tiers are generous: *"you can cycle through free tiers and
use a bunch of this stuff for free."*

## 6. The factory analogy, said properly

Greg's summary is better than the original names and Ras Mic says on air he will rename the
skills to match it:

- **Isolate** = *"a factory taking a custom order and giving it its own station so it doesn't mess with the rest of production."*
- **Build** = the assembly line.
- **Prove** = *"a fancy way of saying quality control."* … *"before anything leaves the factory, someone has to test it."*
- **Ship** = out the door — merge, deploy, release notes, and the loop back when quality control fails.

And the sentence the episode ends on:

> *"Notice we didn't talk about model."* … *"We didn't talk about harness."*

> *"It's all workflows, skills, and a little bit of domain knowledge, right?"*

Plus one aside he drops and does not develop, which is the seed of a different episode:

> *"some startups are now an agent with a couple of markdown files, right?"*

## Insights for me

- **Steps 1 and 2 are already built here; step 3 is missing, and I can measure that.**
  `agent-tasks` has run every task in a worktree off the default branch since it existed
  (`README.md`: "fetch origin → create worktree from default branch → run agent → commit + push
  + PR"), and Fabrik's agents do the same through `app/adapters/git.py`. Isolate is done. **Prove
  is not: of the last 60 merged PRs in `assistant` and the last 60 in `solytics`, 0 carry a
  single image, screenshot or embedded before/after** (`gh pr list --state merged --limit 60`,
  body matched against `![`, `.png`, `.jpg`, `user-images`). Every PR proves itself in prose,
  which is exactly the artefact that has already been caught lying here — an agent PR body that
  described work the diff did not contain, and one that committed 3 of 8 files and reported
  finished. A before/after pair is the cheapest known defence against both, and it does not
  depend on the agent being honest.
- **The bugfix rule already in force is the same idea, one size down — extend it, do not invent
  it.** "Bugfix test: red before, green after" is standing guidance here and it *is*
  evidence-driven testing, just restricted to bugs and to tests. Ras Mic's version differs in two
  ways worth copying: it applies to **every** change, and the artefact lands **in the PR body**
  where the reviewer is, not in a test log nobody opens. For a repo whose changes are mostly
  command-line tools, the numbers variant is the relevant one — the 817 → 61 pair, not
  screenshots.
- **Step 4 has a hole that is invisible from the outside: `/quality-gate` reports to Telegram,
  not to the PR.** Measured this morning: **zero reviews of any kind on the last 30 merged
  `assistant` PRs** — no bot, no human, no record. The gate genuinely runs, but its verdict lives
  in a chat message, so nothing on the PR itself carries a score, and no agent can read a score
  back and loop. That is the difference between a gate and a factory: Greptile's three-out-of-five
  goes *back into the agent*. Writing the quality-gate verdict onto the PR as a comment costs one
  `gh pr comment` and turns a notification into a closed loop.
- **"Harness and model agnostic" is the same bet as the LiteLLM proxy, and it is the stronger
  half of it.** Stufe 1 bought model independence at the endpoint. This episode says the more
  durable independence is that the workflow is markdown — which is already true here by accident
  (skills in `jens-toolkit`, prompts in agent-task YAMLs) and is worth stating as a design rule
  rather than leaving as a coincidence.
- **The one thing not to take: "I'm not reading my code anymore."** He can afford it because the
  proof step is real and an external reviewer scores every PR. Adopting the posture before
  building the two gates would be the whole failure mode this repo keeps rediscovering under a
  different name. Order matters — prove first, then stop reading.
- **Fabrik note, and it is a product observation.** Fabrik sells autonomous workers that pick up
  labelled issues and return PRs. The measured gaps in its output so far are surface bias and
  spec drift — both are *proof* failures, not build failures. A worker that attaches a before/after
  pair to every PR is directly differentiating against the category, and the episode is evidence
  that the market now has a name for the thing ("software factory", "going viral" in Greg's
  opener). Worth an issue, not an argument.
