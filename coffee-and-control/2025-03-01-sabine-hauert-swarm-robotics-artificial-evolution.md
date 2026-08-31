---
title: "Sabine Hauert — Swarm robotics and artificial evolution"
podcast: "Coffee and Control (Lucy Hodgins)"
episode: "Sabine Hauert (Swarm robotics and artificial evolution)"
published: 2025-03-01
duration: "54:48"
captured: 2026-08-31
source: "https://open.spotify.com/episode/65iwMh2NstKqXvfATpzfm4"
transcript: "own, whisper base.en, 54:48"
---

# Sabine Hauert on Swarm Robotics and Artificial Evolution

> **The sentence that carries the episode is the field giving up its own definition:**
> *"we've also realized that definitions around swarms like huge numbers the fact that
> they're autonomous the fact that they're homogeneous all of those I think are being
> relaxed so that we can make these swarms work in the real world"*

Read this note against [`../complexity/2019-10-16-sabine-hauert-swarming-across-scales.md`](../complexity/2019-10-16-sabine-hauert-swarming-across-scales.md),
the same researcher six years earlier. There she retracted one claim — decentralised does
not imply scalable, and nobody had tested it. Here she retracts four more, and they are
the four that the popular swarm pitch is built from: many, identical, simple, dense.
**That is the finding of this episode, and it is what makes it worth reading for anyone
thinking about LLM swarms**, because those four properties are exactly what the LLM-swarm
pitch promises.

---

## 1. What is being dropped, and what replaces it

Her lab's focus for the past five years has been "making swarms for people" — logistics,
hub-to-doorstep delivery, wildfire detection. Contact with deployment is what dissolved the
definitions. Four of them, each with its replacement:

| Textbook property | What she says now |
|---|---|
| Homogeneous | "these systems probably will be heterogeneous lots of robots that do different tasks and have different hardware and different control" |
| Fully autonomous | autonomous, "but there needs to be that human monitoring and control and the ability to have confidence that the swarm is doing the right thing" |
| Dense | *"you're gonna have lots of robots but you're not gonna see a hundred of them you're gonna see one here and then maybe your neighbor has one"* — a swarm at the scale of a city, not of a room |
| Simple agents | *"our robots probably won't be simple they're going to be really sophisticated robots because they need to make sense of the world around them"* |

The hardware follows the retraction. Her early platform was the coin-sized kilobot; the
current one, the Dots, carries GPUs, CPUs and laser range scanners and is still cheap. Her
own verdict on the state of the field: *"it's all now at a tipping point in terms of making
them real"*.

**Note the tension she leaves standing, because it is the useful part.** In the same
conversation she also says, about the trail-following algorithm, *"the numbers is where the
intelligence comes from"* — agents that only do random motion and local message exchange,
no calibration, working out of the box. Both are true, and which one applies is a property
of the task, not of swarms. That is the same shape as the finding in
[`../papers/llm-swarm-intelligence.md`](../papers/llm-swarm-intelligence.md): aggregation pays
where the task has a statistical anchor and mostly does not where it has none. **Screen the
task first; the architecture is downstream of that answer.**

---

## 2. Puzzle, problem, mess — a usable ladder for *how hard is this really*

From Garzón-Ramos & Hauert, *Designing robot swarms: a puzzle, a problem, and a mess*
(arXiv 2410.22478). Three levels, and the point is that most work sits on the first while
claiming the third:

- **Puzzle** — well structured. Find the set of rules and conditions that produce a desired
  behaviour *in a structured environment*.
- **Problem** — solution not immediately apparent. Develop automatic methods of designing
  swarms.
- **Mess** — "an interconnected and interdependent systems of problems which can't be
  addressed separately". Swarms that work out of the box in unpredictable real-world
  applications.

Her framing of the last twenty years: the field designed swarms for controlled environments
and then tested them in the environments they were created for. The conclusion of the paper
is not a technique but a demand — rethink the research goals and hypotheses, and build
holistic frameworks rather than another controller.

**Transfer:** this is a cheap triage question for any agent system. If the evaluation
environment is the one the system was designed against, it is a puzzle and the score means
little.

---

## 3. Artificial evolution: what it is, and its two failure modes

Generation zero is a population of random programs. Copy each onto the whole swarm, run it,
score the *swarm* (not the agent), keep the best, cross them over, mutate, repeat. It is a
form of reinforcement learning in a different sequence and structure. It works whenever the
swarm can be simulated and scored.

**Failure mode one — the score gets what it asked for.** *"if you tell a swarm of robots to
never hit an obstacle and your score is never hit an obstacle usually what gets evolved is
that the robots don't move at all"*. She names surprise as a *feature*: "if we knew upfront
how to design our controllers we wouldn't … use it."

**Failure mode two — the winner is unreadable.** In her PhD the robots had no GPS and knew
only who they were connected to. Evolution produced a strategy she had not imagined: the
robots formed chains, the chains synchronised, and the chain swept from left to right,
exploiting the turning dynamics of the aircraft. She then *"spent a lot of time reverse
engineering those controllers"* before putting them on the aircraft, because neural networks
were a black box and she needed to understand what she was throwing into the air.

**Transfer:** reverse-engineering an evolved winner before deployment is an interpretability
gate priced in researcher-months, and she paid it voluntarily. The equivalent for an agent
pipeline is refusing to ship a prompt or a policy whose behaviour nobody can state in
sentences, however good the eval number is.

---

## 4. MAP-Elites: ship a library, not a winner

The one directly stealable technique in the episode. Plain artificial evolution returns one
answer, the best-scoring one. MAP-Elites is an *illumination* technique:

> *"rather than just doing artificial evolution which gives us one answer the one with the
> best score map elites gives us trade-offs"*

Energy efficiency against performance against safety — you cannot have the best of all, so
the output is a library of solutions along the trade-off axes and the human operator picks
which behaviour gets deployed. That is simultaneously an optimisation method and a
**control-handover mechanism**: it is how the operator gets a choice over an emergent system
whose behaviour is only visible once it runs.

**Transfer, and this is the idea I would actually build:** most agent tuning ends with one
"best" configuration chosen by one aggregate score. The MAP-Elites shape is to keep the
whole frontier — cost against latency against thoroughness — and let the caller choose per
task. It costs nothing extra: the population already exists during tuning and is thrown away
at the end.

---

## 5. Supervisory control: ask the operator what control they actually want

For wildfire detection over areas the size of California, the lab interviewed **50
firefighters** about how much control they wanted over a swarm. The answer was a trade-off,
not a preference: they accept that the robots must be autonomous to do what they are good
at, but they want to direct *where* the swarm explores — draw a square on a screen — and
they want to understand what the fire looks like and how best to extinguish it.

The hard part is that the swarm's behaviour is emergent and only visible once simulated or
deployed, so the lab evolves the *supervisor* too, searching over what a human supervisor
might do at a high level.

**Transfer:** *how much autonomy do you want* is the wrong question and produces a useless
answer. *Which decision do you want to keep* produces a design.

---

## 6. Morphogenesis: Turing's equations running on 300 robots

Done with James Sharpe's group, who study embryogenesis. **300 kilobots**, coin-sized,
sensing about **10 centimeters** around them, an LED for state, imprecise movement. Each
robot is a cell; together they are a robotic tissue.

The mechanism is reaction-diffusion, straight from Turing. Every robot cell carries two
virtual chemicals (morphogens). On each robot they react — one produces itself and the
other, the other depletes itself, a feedback loop — and they diffuse by messaging
neighbours. Let it run for **10 minutes** and patches appear across the swarm, the same
spots and stripes Turing derived for animal skin.

In biology the spots are where cells multiply and elsewhere cells die. She cannot kill
hardware, so **robots that would have died move to where robots would grow** — and limbs
protrude from the blob. The swarm properties come along for free: cut off a limb and it
regrows, split the tissue and it heals.

The follow-up work added controllability: parameters on top of the morphogenesis, driven by
gradients in the local rules, that decide whether a limb grows long and slim or short and
stubby. Note what is *not* claimed — you still do not specify the shape you want. She calls
it blue-sky work and is explicit that the application she is excited about is swarm
construction, "and maybe the bricks are robots too".

---

## 7. Nanoparticles as a swarm — and the best transferable result in the episode

At MIT with Sangeeta Bhatia she worked on nanoparticles for cancer treatment, at a scale of
**10 to the power 13**. They cannot be programmed — no computer on board — but they have the
building blocks anyway: they **sense** by interacting with their environment, **act** by
releasing a drug or heat, and **communicate**, because what one releases can activate
another. Instead of a program you turn knobs: size, shape, material, coating, payload,
release profile. Artificial evolution turns the knobs, scored on treating a simulated
tumour.

**The result worth carrying out of this episode**, because it is counterintuitive, was
validated in vivo, and generalises far beyond medicine:

> *"a sticky particle that sticks to cancer cells sounds great but the collective behavior
> was poor because they all ended up in the same place"*

A particle optimised to bind cancer cells binds the *first* layer of them and never
penetrates the tumour. **Individually optimal, collectively useless** — and the failure is
invisible at the level of the individual agent, where every particle did exactly its job.

Second transferable habit, forced on her by bad data at the nanoscale:

> *"what we've learned to do is to not find one answer but to get a sense for ranges as
> parameters"*

Not "this is the perfect particle", because there is no perfect simulation to prove it, but
the band of parameter values in which a particle does better. It generalises better precisely
where the model is weak. This is the same instinct as the interval finding in
[`../papers/llm-swarm-intelligence.md`](../papers/llm-swarm-intelligence.md), arrived at from
the opposite direction.

**Consensus without computation.** For deciding which cell type dominates a tumour: send in
two particle types, each triggered by one cell type, whose outputs react with each other.
The readout of that reaction is the answer. A vote taken chemically, by agents that cannot
count.

**And the transfer ran the other way too.** A trail-forming algorithm developed for
nanoparticles — simplified until it worked for agents that only diffuse and exchange local
messages — was put on kilobots, which then searched an environment, found a robot, and laid
sleek trails back to the source, avoiding obstacles. No calibration, worked immediately,
scaled.

---

## 8. Her own answer on LLMs, which is narrower than the hype

Asked what controller she would like to try next, she goes to generative models — and the
role she gives them is not *be the swarm*:

> *"they're still going to have their local rules they're still going to have their
> algorithms in terms of a swarm control but how can they look at picture and make sense of
> what that picture says how can they make a decision and then communicate that using
> language to other robots or to other humans in the environment"*

**The LLM is the perception and communication layer. The coordination stays algorithmic.**
That is the hybrid she is excited about, and it is the opposite of the usual LLM-swarm
proposal, in which language models *are* the agents and coordination is expected to emerge
from them talking to each other.

---

## Can LLM swarms work? What this episode adds to the answer

The measured answer already lives in [`../papers/llm-swarm-intelligence.md`](../papers/llm-swarm-intelligence.md):
aggregation helps consistently but modestly; the gain depends on whether the task has a
statistical anchor; resampling one model mostly re-measures its own bias. This episode adds
three things that a paper on estimation tasks cannot:

**1. The four properties being sold are the four the source field is abandoning.** Many,
identical, simple, no leader — twenty years of robotics deployment has relaxed every one of
them. An LLM-swarm design that leans on them is inheriting a pitch, not a result. The
convergence is worth stating plainly: Hauert drops homogeneity because deployment demands
heterogeneity; the ECIS paper measures that homogeneous resampling buys little because it
re-measures the same bias. Two fields, no contact, same conclusion — **diversity has to be
real, and it has to be engineered in, not hoped for.**

**2. Where the analogy actually holds is the failure mode, not the capability.** The sticky
nanoparticle is the sharpest warning available for multi-agent LLM systems: every agent
locally optimal, the collective outcome bad, and nothing visible at the agent level. Any
multi-agent setup where each agent is scored on its own output has this failure available
to it. The swarm literature's answer is to score the *swarm*, which for agent pipelines
means the end-to-end artefact and not the per-step rubric.

**3. Human control is a design problem with a known shape.** Emergent behaviour is only
visible once it runs, so control is handed over through a library of trade-offs (MAP-Elites)
and a high-level direction channel (*explore this square*), not through more commands. That
is a concrete architecture for a supervised agent fleet.

**Where the analogy breaks, and it should be said:** swarm robotics agents are cheap,
failure-tolerant and physically embedded, and their local interaction is nearly free. LLM
calls are expensive, and the "local interaction" is the most expensive part of the system.
Hauert's swarms buy robustness by wasting agents. An LLM swarm that wastes agents is buying
the same robustness at a price nobody has shown to be worth paying. The 2019 note's
retraction bites hardest here: **decentralised does not mean scalable, and it was never
tested.**

---

## Own ideas worth trying

1. **Keep the frontier, not the winner.** When tuning any agent configuration, retain the
   MAP-Elites library across cost/latency/thoroughness instead of collapsing to one best
   score. The population already exists; discarding it is the only reason we ship one.
2. **Score the artefact, not the step.** The sticky-particle result says per-agent rubrics
   can be fully green while the collective output is bad. Add one end-to-end score per
   pipeline that no individual agent can move on its own.
3. **Ranges instead of point answers where the model is weak.** Where a simulation or eval
   is known to be poor, report the parameter band that works rather than the single best
   configuration. Cheap, and it survives the eval being wrong.
4. **A *puzzle / problem / mess* line in every eval report.** One word stating which level
   the evaluation environment sits at. A green score on a puzzle should never read like a
   green score on a mess.
5. **Reverse-engineer before deploy.** Do not ship a tuned configuration whose behaviour
   cannot be stated in two sentences, however good the number. She paid this in
   researcher-months on hardware that could fall out of the sky.
6. **The interview she actually ran is the cheap part.** Fifty firefighters, asked not *how
   much autonomy* but *which decision do you want to keep*. That question is free and is
   almost never asked before building an autonomous tool.

---

## Solo-builder read

The closing exchange is not about swarms and is the most immediately useful thing she says:

> *"my favorite papers just in general are the ones they get rejected several time and then
> get accepted"*

Her reason is mechanical, not sentimental: new ideas get rejected *because* they have not
followed the expected benchmark and have not been done in the expected way. The rejection is
evidence about the reviewer's frame, not about the work — and she keeps going because the
category of work that gets rejected first is the same category that changes how things are
done. Worth holding next to
[`../my-rejection-story/`](../my-rejection-story/) and the tiny-experiments material there.

---

## References cited in the episode

From the show notes, which carry the full list — nothing here is reconstructed from the
audio.

**The paper the episode is built around**
- Garzón-Ramos & Hauert, *Designing robot swarms: a puzzle, a problem, and a mess* — https://arxiv.org/abs/2410.22478
- David Garzón-Ramos — https://dgarzonramos.com/

**Bio-inspiration**
- Invertebrate inspiration review — https://iopscience.iop.org/article/10.1088/1748-3190/acc223/meta
- Centipede-inspired decentralised control for myriapod robots — https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0171421

**PhD and artificial evolution**
- PhD thesis — https://infoscience.epfl.ch/entities/publication/dbb9fe40-930c-4e54-a5c0-10b62ebb6d1c
- Robot swarm video (the fixed-wing aircraft) — https://www.youtube.com/watch?v=n_qRuHkD5lc
- Onboard evolution of swarm behaviours — https://advanced.onlinelibrary.wiley.com/doi/pdf/10.1002/aisy.201900031
- Supervisory control — https://research-information.bris.ac.uk/files/229980063/Paper_SWARM2019.pdf
- MAP-Elites — https://link.springer.com/chapter/10.1007/978-3-319-77538-8_49

**Morphogenesis**
- Original paper, Science Robotics — https://www.science.org/doi/full/10.1126/scirobotics.aau9178
- Toward controllable morphogenesis in large robot swarms — https://research-information.bris.ac.uk/en/publications/toward-controllable-morphogenesis-in-large-robot-swarms
- Turing, reaction-diffusion — https://www.dna.caltech.edu/courses/cs191/paperscs191/turing.pdf
- James Sharpe — https://www.embl.org/people/person/james-sharpe/
- Controllability Gramian, Steve Brunton — https://www.youtube.com/watch?v=ZNHx62HbKNA

**Nanoswarms**
- Nanoswarm paper — https://pmc.ncbi.nlm.nih.gov/articles/PMC4295824/
- Sangeeta Bhatia — https://ki.mit.edu/people/faculty/sangeeta-bhatia
- Bioethics of nanoswarm clinical trials: Jonathan Ives — https://www.bristol.ac.uk/people/person/Jonathan-Ives-fa38de81-8d34-4978-a99d-1f55efe2e0f4/ · Matimba Swana — https://research-information.bris.ac.uk/en/persons/matimba-c-swana

**Hardware and people**
- Dot robots — https://arxiv.org/pdf/2203.13809
- Dario Floreano — https://people.epfl.ch/dario.floreano?lang=en
- Manuela Veloso — https://engineering.cmu.edu/directory/bios/veloso-manuela.html
- Radhika Nagpal — https://www.radhikanagpal.org/
- Hauert Lab — https://hauertlab.com/

**Outreach**
- AIhub — https://aihub.org/ · Robohub — https://robohub.org/

---

---

## What the transcript gets wrong

Whisper base.en garbles proper nouns badly in this episode. Every name below was corrected
against the show notes, not guessed. Recorded so nothing false is quoted onward:

| Transcript | Actually |
|---|---|
| "Sabine Howard" | Sabine Hauert |
| "Darrio Floriano" | Dario Floreano |
| "Manuela Velocis" | Manuela Veloso |
| "Sengidabat", "Saguita Batya" | Sangeeta Bhatia |
| "Radik and Nagpazlam" | Radhika Nagpal |
| "James Sharp" | James Sharpe |
| "Steve Bronton" | Steve Brunton |
| "John I's and Matimba Suana" | Jonathan Ives and Matimba Swana |
| "Miriaporta robots" | myriapod robots |
| "magnifliotic chip" | microfluidic chip |
| "nanomanicine", "canons to treatment" | nanomedicine, cancer treatment |
| "Swarghar Bufic" | swarm robotics |
| "more for genesis" | morphogenesis |
| "chat TPT" | ChatGPT |

The host's own summary at the top also says "swarm withdrawal" where the episode means
swarm robotics. Quotes in this note are verbatim from the transcript including its ASR
roughness ("how can they look at picture") — smoothing them would be inventing a quote.

---
