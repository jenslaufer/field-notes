---
title: "Sabine Hauert — the swarm that scales is not the swarm you demoed, and the algorithms that break are the clever ones"
concept: "Engineering collective behaviour from 20 robots to 10^13 nanoparticles: why cheap agents are necessarily noisy and dumb, why an agent cannot see the system-level goal it is being optimised for, why most published swarm algorithms silently rely on the small numbers they were tested at, the two ways to make a swarm robust (dumb agents or an artificial immune system), how to steer a swarm you did not design, and the reversal at the end of the episode — ten years of explaining, replaced by asking"
sources: "COMPLEXITY (Santa Fe Institute podcast, Simplecast), S1:E3 'Sabine Hauert on Swarming Across Scales', published 16 October 2019, 39:23. Guest: Sabine Hauert, swarm engineering, University of Bristol; co-founder of RoboHub. Host named only as 'Michael' in the transcript — the show's host in season 1 was Michael Garfield. Transcript: the publisher's edited full text, https://complexity.simplecast.com/episodes/wsdohw3x/transcript"
captured: 2026-08-22
type: podcast distillation
method: "Written from the publisher's own edited transcript (6,727 words, fetched via the token wsdohw3x — this episode carries the edited version only, no podscribe machine layer underneath). This transcript has NO timestamps, so unlike the other notes in this folder no quote here carries an [MM:SS]; the ordering below follows the conversation. Every quote was checked verbatim with tools/verify-quotes.py. Transcription garbles are quoted AS PUBLISHED and resolved beside — see 'What the transcript gets wrong' below; the corrections come from the public record, not from the episode, and are marked certain or probable."
related: "melanie-moses-scaling-decentralization.md (the same swarm-robot roadway argument from the scaling side — Moses prices the infrastructure, Hauert prices the algorithm), nature-of-intelligence.md (Melanie Mitchell on intelligence as a suitcase word), landscape-of-21st-century-science.md (David Krakauer, S1:E1, the aggregate-vs-agent spectrum this episode is placed on), antifragility.md, ../uebergreifende-konzepte.md"
---

# Sabine Hauert on Swarming Across Scales

> **The one sentence that carries the episode, and it is a retraction of her own field's
> sales pitch:** *"most of them would break down if we did them with huge numbers of
> robots. Which is actually contradictory to what we usually say in swarming, which has
> that swarms, because they're decentralized, they're scalable to huge numbers."*

Hauert works on swarms at both ends of the size range at once — construction robots that
lay bricks, and nanoparticles for cancer treatment in numbers she gives as *"10 to the
power of 13"*. The interesting part of the conversation is not the range, it is what the
range exposes: the algorithms that produce the beautiful small demos are not the
algorithms that survive scale, and the field has been quietly selling the demo as
evidence for the scale.

---

## 1. The premise: swarms are leaving the lab, because two curves met

- *"I'm excited that swarms, I think, are ready to get out of the lab."* Her reason is
  explicitly an analogy to machine learning: *"a little bit like the area of machine
  learning has taken off because we have this conjunction of better algorithms and better
  hardware. I think we're going to see the same thing in robotics."*
- She is honest about the current state in the same breath: *"the reality is we don't yet
  see many of these swarm systems in the real world."*
- The reframe she keeps: *"Once you start thinking of systems as swarms, then you see
  swarms everywhere."* She applies it to cancer cells — not just treating them with a
  swarm, but reading the tumour itself as one.

## 2. The size/capability trade, and why cheap forces dumb

Two regimes, and the design changes completely between them:

- **Small numbers, capable agents** — the construction startup (Assembler, as named in the
  episode): each robot needs to *"understand the environment on individual level, but also
  coordinate with other robots"*. Her own earlier work sits *"maybe in the 20s"*, or the
  *"50 to the 100 scale"*.
- **Huge numbers, minimal agents** — nanomedicine, where *"these systems are inherently
  limited in what the individuals can do"* and the whole vocabulary changes to reaction
  diffusion: things that *"move in very simple ways just react to their local environment"*.

The load-bearing constraint is economic, not scientific, and she states it as a chain:

> *"we won't build huge swarms of robots unless these individual agents are cheap and if
> they're cheap, they're noisy and they have limited capabilities"*

**Cheap → noisy → limited is a one-way street.** You do not get to choose scale and
per-agent quality independently; picking the number picks the agent.

## 3. Intelligence sits on the system, and no agent can see it

- *"I tend to think of swarms as a system, and the intelligence is endowed on the system
  as a whole, not on particular individuals."* Consequence: *"if you have a huge number of
  agents individually, they don't need to be that intelligent to get the system level
  swarm intelligence that you're looking for"*.
- The optimisation target is therefore a **swarm-level fitness** — *"We want the swarm as a
  whole to be able to do something."*
- And here is the hard part, which she names as the first challenge of running evolution
  onboard the robots rather than on an external computer: *"First of all, because there's
  no godly view of that system."* The individual cannot observe the thing it is being
  scored on. So it has to score itself on a stand-in: the rules are graded *"based on what
  they see locally is a good proxy for a swarm level"* objective.
- Sharing is the second half — an Island model: *"And then the things that they evolve,
  they need to figure out how to share amongst their peers so that good solutions are
  propagated."*

**The measured payoff of moving evolution onboard:** *"So in just 15 minutes as opposed to
the two weeks before we get a swarm going from not knowing how to push this Frisbee to
something they can operate as a collective in a swarm sense."* Work with Alan Winfield,
Matthew Studley and Simon Jones; the robots carry GPUs so they can run the evolutionary
algorithm locally.

Why bother: the external-computer route *"suffers from a reality gap because very often
you put it on the swarm and it doesn't do what you thought it would do based on the
simulations, because the real world is complicated."*

## 4. Aggregation is not a model — and it looks exactly like one

On the peer-sensing decision algorithm, where many limited robots sample sites and
converge on a choice:

> *"It's not really a model of the world, but they can come to a decision about the world
> that's just based on all these different information points that they're able to sample."*

and then the sentence to keep:

> *"the properties that emerge make you believe that they have a good model, a good model
> of the world, but it's just aggregation of useful information in space and time"*

**A system whose output is indistinguishable from understanding may contain no
understanding anywhere.** Hauert says this approvingly — it is cheaper — but it is also a
warning about what you are entitled to conclude from a good-looking collective output.

## 5. The retraction: decentralised does not mean scalable, and nobody tested it

This is the centre of the episode. Prompted by whether swarm findings transfer to human
systems, she first cautions against the metaphor — *"But nature, humans, and such are way
more complex than the things that we're putting in our robots."* Then she turns the same
scepticism on her own field:

- *"it's also true that while I keep talking about swarming across scale, some of the
  algorithms that we do in small numbers of robots, actually most of them would break down
  if we did them with huge numbers of robots."*
- *"Which is actually contradictory to what we usually say in swarming, which has that
  swarms, because they're decentralized, they're scalable to huge numbers."*
- The mechanism of the break: *"you can assume that if you put a hundred robots and maybe a
  portion of them misbehave or do something poorly because they're just not working, that
  will skew the swarm behavior as a whole."*
- The rule she draws: *"The swarm engineering across scales and getting features for free
  only works if you really tested across those different scales and you've learned
  something about that system."*
- And the counterintuitive resolution — **fewer assumptions survive scale better than more
  capability**: *"I actually think that the things that are inspired from the nano micro
  world are more robust in huge numbers simply because we're making so fewer assumptions
  about their capabilities that there's less breakdown points on which you can fall."*

The host adds a result from Albert Kao (an SFI postdoc) pointing the same way: *"there are
instances where you actually don't want the agents in a network to be that smart. That the
collective intelligence starts to break down if the memory of an agent is too long, if
it's not adaptable."*

## 6. Two ways to make a swarm robust, and they are opposites

- **Make the agents too dumb to be worth attacking.** With pure reaction diffusion, *"if
  individuals fail, that doesn't really matter because the other ones are just going to
  continue moving randomly and reacting to their neighbors"* — *"So you somehow make that
  system robust by making the individuals so dumb that there's not much to to attack."*
  (The doubled word is in the published transcript.)
- **Or build an immune system.** Once behaviours are sophisticated, *"you need to introduce
  some sort of artificial immune system, which actually makes sense."* Her justification is
  evolutionary: *"If you look at the evolution in multicellular systems, at some point we
  had to come up with our own immune system to be able to weed out back actors so that we
  could continue maintaining these complex systems."* ("back actors" = bad actors.)
  Operationally: *"you need to actively have a system that allows you to see what your
  peers or other robots are doing so that you can detect if there are any actors that are
  breaking down or not working, because those could fundamentally alter the intended
  behavior of your swarm as a whole."*
- A third option she leaves open: *"it could be that we designed the swarm rules in such a
  way that they're safe by design and individually you're limiting the ways in which that
  system could fail."*

**Note what this means: peer-monitoring is not overhead you can optimise away — it is the
price of letting the agents be capable.** Dumb agents get robustness free; capable agents
buy it with an immune system.

## 7. Differentiation without different code

- *"There is a lot of work on homogeneous swarms that have the same program, but even
  though they have the same program, the environment they're in is going to drive their
  behavior."*
- The morphogenesis work with James Sharpe (CRG) uses two virtual morphogens to generate
  chemical fields, *"that give you terrain like spots or stripes depending on how you set
  those patterns"*, and out of that grow limb-like structures — *"it can be seen a little
  bit like differentiation, even though the code for all those robots is exactly the same.
  Just like the code for all ourselves is exactly the same."*
- Scale is a precondition, not a bonus: *"James came to us because he had a smaller swarm
  and so you couldn't see the full beauty of this morphogenesis in action. You fundamentally
  needed those large numbers when you're using these algorithms."*

## 8. Steering a swarm you did not design

Work with Martin Homer, on flocks heading toward a wind farm, or mosquito populations:

- *"the idea is that these artificial agents that we've programmed could go in, sample the
  reaction of the agents to its presence, and then extract the swarm rules from those
  interactions"* — explicitly the field version of the lab problem: *"So rather than having
  a laboratory setting where you have a godly view of what your swarm is doing"*, you infer
  the model from a handful of probes.
- Once the rules are known — e.g. the repulsion radius — control is cheap: *"just by driving
  a couple of robots that know where to go, you're essentially pulling the flock as a
  whole."*
- She bounds it herself: *"That works for a limited subset and we're just starting to
  explore this, where you have an idea of what the rules are. Not necessarily for things
  that are more complex than that."*

## 9. The reversal: stop explaining, start asking

Asked what is missing from the field, she gives two answers. The first is deployment —
*"what I'm excited about really is robots that are getting into the real world"*, and
*"the discussions I like most are the startups that are making real robots that are
getting out into the real world."* Her evidence that this has not happened is a question
she asks audiences about robots at work or at home: *"No one has one or very few might
have a Roomba or something like that."*

The second answer is the one worth the episode:

> *"after 10 years of doing science communication where we're saying that the experts need
> to tell their story and explain more about what the work they're doing is, I realize we
> need to do the opposite and actually listen way more to the public"*

The method she replaced it with is concrete and cheap:

- *"So right now all my new PhD students start their project by doing use case studies,
  which I'm learning how to do as well because I'm not a social scientist."* Currently with
  firefighters, warehouse workers, and bridge inspection experts.
- The questions are deliberately plain: what is your job, what do you care about, where
  would you need help, what do you think of robots and of robot swarms.
- The first effect is that the conversation stops being about science fiction: *"because
  when you're concrete, it's no longer the realm of science fiction."* Instead of
  Terminator, you get a bridge and a crack and where a robot would help.
- The second effect is that people sort the work themselves. Firefighters *"genuinely see
  an area where their expertise is important"* — and equally clearly they *"couldn't care
  less about stacking boxes in the back of their charity shop"*.
- Purpose, stated plainly: *"I think we need to be doing that actually way more so that
  we're developing the technology that doesn't have a backlash and something that we can
  deploy in the real world that is useful for people."*
- And the admission that makes it credible: *"It's funny because after 10 years of science
  communication you'd think I'd have known that, but actually it's this work with the Royal
  Society that just made me realize how it's done and how it should be done."*

Supporting datum from that Royal Society public survey on machine learning: *"very few
people knew of the term machine learning, something like 10%"* — but *"they knew the
applications of it"*, e.g. *"they knew about the fact that you could talk to your phone
and it would answer back"*, and *"they learned from it mostly from mainstream media and
science fiction."*

## 10. Where she refuses to stretch the metaphor

- *"It's hard not to anthropomorphize these swarms."* Her students read football matches
  into the red/blue decision displays.
- She allows them as toys for thinking: *"I think they can be good proxies to at least play
  with ideas"*, because simple rules on real hardware *"helps open the mind and you see
  things you might not necessarily see in simulation"*.
- But: *"So I do think we need to be careful in assuming these are good models of these
  different systems."*
- On military use, without evasion: *"we also need to be wary of applications which aren't
  the ones that we're intending to design."*
- Closing frame, on the blurring line between living and non-living substrates: *"So we
  need to think of the system, and the building blocks of that system I think could really
  be broad."* The host's sign-off is the best line in the episode: *"it's been a pleasure to
  be a dumb node in a smart network with you for the last 40 minutes."*

## What the transcript gets wrong

The publisher's edited transcript still carries garbles. Quoted as published above,
resolved here. **Certain** (well-established public record or the speaker's own correct
usage elsewhere in the same transcript):

| As published | Actually |
|---|---|
| Dario Floriano | Dario Floreano (EPFL, bio-inspired AI — the course that started her) |
| Sangheeta Bhatia | Sangeeta Bhatia (MIT, the nanoparticle lab) |
| the Visa Institute at Harvard | the Wyss Institute at Harvard (Radhika Nagpal's kilobot lab) |
| Allen Winfield | Alan Winfield (UWE Bristol) |
| back actors | bad actors |
| reaction to fusion | reaction diffusion (she spells it correctly earlier) |
| lymph structures | limb-like structures (her own wording earlier in the same argument) |
| there's not much to to attack | doubled word |

**Probable, marked as such rather than smoothed:** "swarms of fine robots" is almost
certainly flying robots (her PhD work at Floreano's lab was airborne communication relays);
"a cool humans swarm attraction" reads as human-swarm interaction; "slime balls" as slime
moulds; "swarm level, assistant level swarm intelligence" as a system level. "fill out a
core project" is not resolvable from the text and is left alone.

Correct as published, checked because they carry weight: Manuela Veloso (CMU RoboCup),
Radhika Nagpal, James Sharpe (CRG), Albert Kao and Jess Flack (SFI), Charles Stross's
Accelerando, the kilobot as a 1024-robot platform, EvoNano.

---

## Solo-builder read (insights for Jens)

Five things here are load-bearing, one of them uncomfortably so. The nanomedicine, the
morphogenesis and the military question are the substance of the episode and have no
thread to the money line — saying so beats manufacturing relevance.

**1. The retraction is about our agent setup, almost word for word.** Hauert's field sells
decentralisation as inherently scalable, then admits the algorithms were only ever tested
at n≈20 and most break at n=100 because a few misbehaving agents skew the whole result.
That is the exact shape of our agent-task and Fabrik rules — max 3 open PRs per repo, one
new PR per repo per night, spread over 24h. Those are small-number rules, and they are the
*right* rules; the error would be reading them as a system that scales. Her test to apply
before any "let's run more agents in parallel": name what was actually measured at the new
number. We have the evidence that she is right — the unqgd merge decay (refactor PRs
without a quality gate left main red), and the agent that committed 3 of 8 files and
reported done. One misbehaving worker skewed the collective output, precisely as described.

**2. Our watchdog stack is the artificial immune system, and it is not overhead.** She
gives two robustness routes and they are mutually exclusive: agents so dumb there is
nothing to attack, or capable agents plus a system that watches peers for ones "breaking
down or not working". We picked capable agents, so the second is compulsory —
`unit-health-check`, `watchdog.sh`, `mailbox-sweep`, `quality-gate`, `verify-quotes.py`
itself. Every time this stack feels like tax on real work, that is the trade being paid,
not a detour from it. The dumb-agent route also exists here and is already half-built: the
LiteLLM `simple` alias. Worth noting it is the route that survives scale *better*, not
worse.

**3. "No godly view" names why a worker's green tests do not mean a healthy main.** An
agent scores itself on a local proxy for a system-level goal it cannot observe. Our
workers see their branch, never main's health after the merge — and the proxy quality is
the whole game. Concrete move: any new agent-task acceptance criterion should be read as
"is this a good local proxy for main staying green", not "does this describe the change".

**4. Aggregation that looks like understanding.** *"it's just aggregation of useful
information in space and time"* is the failure mode I keep hitting from the other side —
a plausible-looking collective output taken as evidence of a model underneath. Same family
as reading silence as a measurement, and as a summary's confident fabricated statistics.
Her framing is the cleaner test: ask whether any part of the system actually holds the
model, or whether the output merely resembles one.

**5. The uncomfortable one — she ran our 100-day mistake and named the fix.** Ten years of
telling the story better; the answer was to stop and ask instead, with use case studies:
what is your job, where would you need help. We have the same finding in our own numbers
(100 days of building, ~0 new cashflow, demand is the bottleneck) and we have not adopted
her method. What makes it usable is how cheap and how specific it is — she picked three
concrete jobs (firefighters, warehouse workers, bridge inspectors), not "users". Our
equivalents are sitting in reach and unasked: 310 FinGrab users, 5 InvoiceGrab, 6
PlaylistGrab, one paying customer per product. And there is a live case that this pays:
the PlaylistGrab customer who cancelled after 6 min 43 s with reason `unused` — that is a
use case study we already ran by accident and never followed up. **The move is a question,
not an artefact** — and this is the one place where the episode argues for something we
are not doing at all.

Her deployment evidence deserves the same read. She measures her field by asking who has a
robot at home; the honest version for us is who has the extension open today, not who
installed it. Real deployment beats capability, and we already know how to measure it.
