---
title: "Melanie Moses — decentralization changes the scaling law, and the infrastructure that allows it is never free"
concept: "Scaling across ants, immune systems, cities, road networks and AI: why information scales differently from energy, why every decentralized system still needs (and pays for) infrastructure, why the ants that ignore the pheromone trail are the adaptive ones, and why the leverage in AI is the protocol connecting flawed agents rather than the agents themselves"
sources: "Scaling Theory (podcast, Network Law Review — host Thibault Schrepel, professor of antitrust law, Vrije Universiteit Amsterdam), episode #21 'Melanie Moses: From Cells to Algorithms', published 29 July 2025, 50:31. Guest: Melanie Moses, Professor of Computer Science, University of New Mexico · External Faculty, Santa Fe Institute · Chair, New Mexico AI Consortium. Feed: https://anchor.fm/s/f3a5f9e4/podcast/rss"
published: 2025-07-29
captured: 2026-08-06
type: podcast distillation
method: "Written from a local ASR transcript of the full audio (faster-whisper base.en, tools/podcast-transcribe.py, 512 segments), not from the show notes. Every quote below carries its [MM:SS]. Caveat: ASR mangles proper nouns and never labels speakers — names were corrected against the episode's own reference list, and where the speaker is genuinely ambiguous it is said so."
related: "2020-06-17-geoffrey-west-scaling-cities.md (the sublinear/superlinear result Moses builds on, and the West-Brown-Enquist network theory she rebuilt in simulation), 2024-09-25-nature-of-intelligence.md (Melanie Mitchell — different Melanie, adjacent argument about what intelligence is), antifragility.md (explore/exploit as convexity), ../uebergreifende-konzepte.md"
---

# Melanie Moses on Scaling Theory #21

> **The one sentence that carries the episode:** *"So these scaling laws don't come
> for free. They require some organizational system."* [20:49] — Moses spends fifty
> minutes on a single unfashionable point: everybody quotes the exponents, almost
> nobody prices the network that produces them. Her swarm robots only scaled once she
> built them a fractal road system in simulation — *"You have to build the roadway.
> You have to invest in big trucks."* [22:19]

The host is a lawyer, so the conversation keeps landing on governance; the guest is a
computer scientist who did her doctorate on metabolic scaling and then spent thirty
years on ant colonies, immune systems and swarm robots. The interesting friction is
that she refuses the two easy positions — neither "biology has the answers" nor "the
analogy is decorative."

Names as corrected against the episode's own reference list (the ASR mangles all of
them): Melanie Moses · Santa Fe Institute · Horacio Samaniego (the road-network
postdoc) · West–Brown–Enquist · pheromone · cytokine storm · DeepSeek · Marmiton (the
French recipe site) · James Evans (a previous guest).

---

## 1. The billion-dollar question: scalable trust

Schrepel opens with a hypothetical billion-dollar grant. Moses does not spend it on
biology.

- The target is **self-governance**: *"one of the things that's becoming apparent is
  that scalable trust is really difficult"* [02:43] — systems where people can trust
  that others follow the rules, and that the rules produce a better world, built so as
  to be *"not overburdened with a kind of bureaucracy that many people hate, myself
  included"* [03:02].
- Her own illustration of a trust system that works: a plane. *"Hundreds of people get
  in this steel aluminum thing and trust that it's going to stay up in the sky. You've
  got to trust the pilot and the FAA controllers and the engineers who built the plane
  and your fellow passengers."* [04:36] Against that: climate and plastics, where *"we
  haven't seen to have built systems that are so trustworthy and so good at the job of
  fixing a specified problem"* [05:06].
- Where she'd look: the **intersection of computation and law**. Computational
  hardware *"does what you tell it to do to first order absolutely all the time"*
  [05:59]; legal code is *"necessarily more fuzzy than that"* [06:07] — and should be.
  Mix the guarantee with the interpretability.
- The piece she'd import from biology is **natural selection**, and here she names a
  specific hole. US federalism already runs the experiments — fifty states, and right
  now fifty AI-regulation experiments — but *"we don't necessarily have a system that
  really looks at what is going on at all of these states and where should we actually
  elevate a particular approach that has been successful and combine approaches that
  have been successful at different states"* [06:49].

**The shape of that gap is general: variation is cheap and already happening; the
missing organ is selection.** A portfolio of experiments with no mechanism that
promotes the winner is not evolution, it is just churn.

## 2. Cities: the pavement is built for one city, the driving happens in another

- The standard result, restated: infrastructure scales **sublinearly** — road networks
  are *"a nice direct analogy to say a cardiovascular system"* [08:56] — while
  *"information systems, things like patents, negative interactions like crime, those
  sorts of things scale super linearly"* [09:17], because adding people adds
  interaction possibilities per capita rather than diluting them.
- Her own road-network study (with postdoc Horacio Samaniego; *Cities as Organisms:
  Allometric Scaling of Urban Road Networks*, 2008) asked how much pavement a city
  needs under two extreme designs: purely centralized (everything serves one downtown,
  the ~2/3 law for a 2D system) versus purely decentralized. Answer: real cities sit
  *"somewhere in the middle, almost exactly in the middle"* [11:58].
- **The finding that matters is the mismatch.** *"When we looked at miles driven, they
  appeared to be more centralized than the building of the roads."* [12:32] People
  still cross town; the pavement was built for a more decentralized city than the one
  they actually drive in. Her conclusion: big-city traffic is *"a failure to scale the
  infrastructure with the real way that people move through cities"* [12:53].
- Honest about the error bars, unlike most scaling talk: deviation in social systems is
  larger than in biology, and *"things might be two, three, four times different than
  your predictions"* [14:21]. A pattern you can reason with, not a law you can trust to
  a decimal.

## 3. Information scales differently from energy — and filters are load-bearing

Why information networks decentralize while circulatory ones don't:

- **Copying is nearly free.** You don't push a thousand copies from a center through a
  cardiovascular-style network: *"you can make copies along the way … send, say, two
  bits or four bits in two or four directions and then make copies as you go"* [16:14].
- **No center is required at all.** Chip design already does this because of energy:
  *"you communicate less often with things that are physically further apart. And so
  that leads to something that's indefinitely scalable."* [16:37]
- Therefore **bubbles are the efficient case, not the pathology** — and the filter is
  not optional: *"there are something, I don't know, six billion people on the
  internet, we can't communicate with all of them … we have to create some sort of
  filter in order to minimize that flow of information"* [17:29]. *"Imagine if we
  didn't have these information bubbles, if everyone actually knew everything that
  everyone was saying … it gives me a headache just to think about it."* [17:57]
- The lawyer's payoff, which she hands him: the filter can be **technical**
  (curation, personalization) or **legal** — content rules, and *"it may be copyright,
  which also is a good way to reduce the sharing of information"* [18:17].

## 4. The most underappreciated insight: what the scaling infrastructure costs

Asked for the field's blind spot, she gives three answers of rising interest:

1. Outside the complexity bubble, the basic framework hasn't landed — that quantities
   change *systematically* across orders of magnitude [19:06].
2. Inside it, the growing understanding is that **decentralization fundamentally
   changes the scaling law**: a decentralized process scales *"not necessarily more
   efficiently, but scale up and allow more interaction because it has the ability to
   have local interaction"* [20:16]. Lymph nodes instead of one central heart.
3. And the one she wants studied: **the cost of the infrastructure.** *"Even a
   decentralized infrastructure costs something … So these scaling laws don't come for
   free."* [20:36]

The worked example is her swarm robotics, and it is the most useful passage in the
episode:

- Robots mimicking ant foraging cooperated well and brought resources back.
- *"But when we tried to scale up to dozens, hundreds, thousands of robots … we would
  see real bottlenecks without having some sort of infrastructure to facilitate the
  movement of robots over large spaces."* [21:09]
- Fix, in simulation: a **fractal branching network** straight out of West–Brown–Enquist,
  plus letting individual robots change speed and size — *"big giant trucks going
  through a central corridor"* [21:52]. They could predict mathematically what was
  needed to break the scaling limit.
- Result: robots stay ant-like, decentralized and uncoordinated *"out in the leaves"*,
  but are constrained to a centralized network when moving things [22:02]. *"So that
  had huge benefits, but it also has a cost. You have to build the roadway. You have to
  invest in big trucks."* [22:19]
- Her closing question, which she puts back to the lawyer as a tax question: *"What is
  the cost of building the system that allows a scalable solution?"* [22:25]

## 5. No universal scaling law — but keep looking

- *"No, I don't think it exists. But yes, I think we should look for it."* [24:51] The
  **framework** may be universal; the contingencies are not. Energy through a network
  and information through a network already scale differently — *"maybe energy and
  information, maybe those are the only two we need to consider"* [25:20].
- The disqualifying test is a good one: *"if your universal law ends up looking [like]
  a legal book … and it's a hundred thousand pages long, then it's not very helpful"*
  [26:24].
- Why hunt for it anyway: *"it's an approach that lets us find regularities in the
  world that we might not otherwise see"* [25:53]. The search is the instrument, not
  the trophy.

## 6. Ants and immune systems: search without a controller

- Both are search problems with **no central controller** — *"The queen ant is not
  directing things. There's no even concept of the queen immune cell."* [28:49] Ants
  look for food, T cells for pathogens, at scales from hundreds to trillions of agents.
- The pheromone trail is a **map with built-in decay**: success lays a trail, other
  successful ants reinforce it, and *"they leverage the natural evaporation of
  chemicals … so that if the food disappears and the reinforcement stops, then the
  trail disappears"* [30:04]. Positive feedback plus forgetting; no garbage collector
  needed.
- **Pure decentralization is not what ants do.** There is *"some interplay of
  centralization and decentralization"* [30:37]: individuals respond locally, but every
  ant leaving the nest reads a gradient of signals *at one place* and makes a choice
  [30:27]. The immune system's version is lymph nodes — distributed "nests", each
  running its own search, with chemokines and cytokines as the reinforcing signal [31:16].

## 7. The randomness is the point (explore/exploit, in the field)

- The observation that made it: *"There's an excellent path to a giant pile of food
  that you have provided for these ants … and then large numbers of ants will just
  ignore that and wander off in another direction."* [31:54] Frustrating in the desert;
  modelling showed it is **adaptive**.
- *"That exploration for the next pile of food while others are exploiting an existing
  pile of food is really important to be able to find food in an uncertain world. We
  don't want everybody following the chemical trail."* [32:16] The immune system carries
  the same excess randomness, which she says has frustrated immunologists trying to
  explain *"why is there so much randomness in this system"* [32:31].
- She applies it to science itself. Departments and citation trails are the pheromone:
  they work, *"but it leaves lots of unexplored territory"* [33:00]. *"I think humans
  are a little too eager to follow the crowd and build upon the success of others. And
  not as rewarded for going out and exploring new things, many of which may fail."*
  [33:20]
- Schrepel adds the measured version — a *Nature* paper he'd read that day, **"the
  pivot penalty in research"**: the further you move from your core field, the fewer
  citations and patents you get, *"because you're not seen as an expert in the field"*
  [33:54]. (His summary; not independently checked here.)

## 8. AI: the leverage is the protocol between agents, not the agent

This is the section with the most transfer, and she puts it bluntly.

- On the fear that AI narrows research: the opposite is available. Set off agents *"each
  of which have a different sort of motivation, a different direction they might
  explore"*, and point them at abandoned branches — *"Look at the 17 or 17,000 other
  things … that were explored that could have become the standard"* [35:25]. Her verdict
  on the bottleneck: *"the limitation there is the way scientists are incentivized, not
  the way that AI is built"* [36:25].
- Neuromorphic hardware, yes — but the bigger miss is elsewhere: *"I think we tend to
  attribute too much in the incredible human intelligence that we have to the neural
  networks in our brains and not the interactions that we have among us."* [37:21]
  *"Scientific advancement very rarely happens because someone has an incredibly smart
  brain … most of it progresses because we find effective ways to collaborate and build
  on past knowledge."* [37:38]
- Hence the thesis: connect flawed agents the way the scientific method connects flawed
  humans — a system *"designed to find the flaws and seek truth by constant questioning
  among different agents. I think that's where the money is."* [38:34] She would spend
  part of the billion on **experimenting with the social architecture** of agent
  collectives, not on the agents.
- Aside, and a good one for anyone who has been early: *"I actually studied agents as
  an undergraduate. I made up a concentration in my major that was called agents, and I
  used to keep that off my CV. And now I say, I've been studying agents for 30 years."*
  [38:06]

## 9. Failure: nature is not a role model, and it does not fail gracefully

- *"We also don't want to make the mistake of assuming that things that happen in
  nature are ideal."* [40:03] Ant colonies work partly because *"all the ants are
  willing to die for their sisters"* — *"that's not something I would advocate for human
  society"* [40:13].
- Immune systems fail catastrophically, not gently: much of the COVID response was
  overreaction, and a **cytokine storm** is the positive feedback eating its host —
  more signal, more T cells, more damage, *"and that can itself kill you"* [41:09]. *"So
  you don't necessarily have only graceful failure in these natural systems."* [41:15]
- What the immune system *is* unmatched at is lifetime learning — *"evolution
  reinventing itself inside your body to evolve new receptors that will recognize new
  pathogens"* [41:34].

## 10. Energy: the 20-watt brain argument, corrected

The most quotable AI-efficiency comparison, and she immediately deflates the version
everyone repeats:

- Yes, the brain runs at *"like 20 watts … a pretty efficient light bulb"* [42:41], and
  training an LLM takes gigawatts.
- **But:** *"if you look at how much energy it took to train a brain to say a
  20-year-old's … amount of knowledge, it's only a few orders of magnitude less than it
  took to train something like chat GPT."* [42:57] The favourite factoid shrinks once
  you count the twenty years, not the inference.
- Her forecast: models can become *"not just as efficient as biology, but more
  efficient"* [43:45] — computers already beat brains at matrix math; sonnets are where
  they lose.
- In the stretch that follows [43:48–44:30] — speaker attribution is genuinely
  ambiguous in the ASR here — the argument is that biological efficiency came from a
  **constraint** (you had to get that energy off the landscape), and that **DeepSeek**
  was more efficient *"because it built upon"* earlier models. Same for AI generally: it
  inherits accumulated human knowledge, so *"They don't have to rediscover these
  things."*

## 11. The interdisciplinary career, without the sales pitch

- *"Yes, I enjoyed it immensely … And yes, I would do it again. I don't know that I
  could recreate the path. There was a lot of randomness in my path. I followed the
  randomness."* [46:05] — and, self-aware, *"maybe that's why I appreciated so much [it]
  in the ants."*
- Then the honesty most such answers skip: *"Is it the most productive way to have a
  career? Almost certainly not. People, I think, are probably more productive by
  following the paths that have been laid down by others."* [46:17]
- And the confession: she advised her *own* early students conservatively — get a core
  discipline first, because *"there's going to be a committee in some department, and
  you're going to have to convince those people that you are one of them"* [46:57].
  With age she now says: let me tell you what you're in for, then help you do it.
- On SFI: it was *"designed to be scalable"* [48:58], and we should have many such
  institutions with different philosophies — *"many of them wouldn't scale, and many of
  them would fail. But again, we shouldn't be so afraid of failure, just like the ant
  that doesn't find any food."* [49:14]
- Schrepel closes with the sharpest line of the episode, and she half-concedes it:
  *"if you were to design something with the ambition of scale, this may actually be the
  recipe for failure."* [49:43]

---

## Solo-builder read

Four things here are load-bearing for how I work; the rest is beautiful and not
actionable, and I'd rather say so than manufacture relevance.

**1. Price the roadway before claiming the scaling.** The swarm-robot result is the
cleanest statement I have found of a mistake I keep repeating: build the decentralized
workers, watch them work at n = 5, then hit a wall at n = 500 that no amount of
better workers fixes, because the missing piece is *infrastructure* — and the
infrastructure has to be paid for separately, in advance, with no visible output while
you build it. Test to apply before the next "let's scale this up": name the roadway and
the trucks, and their cost. If they aren't named, the plan is n = 5 with optimism.

**2. Superlinear is information, sublinear is stuff — and my portfolio is mostly stuff.**
Patents and crime scale superlinearly, pavement sublinearly. Every asset that pays off
per-capita-increasing is an information/interaction asset. Repos are pavement.

**3. The multi-agent bet is on the protocol, not the model.** *"That's where the money
is"* is about connecting unreliable agents in a structure whose job is to find the
flaws. That is precisely what a quality gate, an adversarial reviewer, or a critic
subagent is — and it says the marginal return is higher there than in a better single
agent. Concretely: a stronger model on one task is worth less than a cheap second agent
whose only job is to try to refute the first. This is the one place where the episode
argues *for* work I am already doing, and it argues for more of it.

**4. The ants that ignore the trail are load-bearing — but only against a working
trail.** Explore/exploit is not permission to scatter; the wandering ants are adaptive
*because the colony also has ants on the pheromone trail*. My failure mode is the
inverse of the scientist's: too many wandering ants, no reinforced trail. The correct
reading for me is not "explore more", it is "the exploration budget is only defensible
once something is being exploited." Add the pivot penalty [33:54] and it gets sharper:
the market pays the specialist, and pivots are punished by the reward system, not by
the ideas.

**Not applicable, said out loud:** scalable trust, governance, urban road allometry and
neuromorphic hardware are the substance of the episode and have no thread to my money
line. The filter argument [17:29] is interesting for anyone building distribution — you
are always competing against a filter that exists because it must — but that is an
observation, not a move.
