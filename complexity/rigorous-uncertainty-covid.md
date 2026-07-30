---
title: "Rigorous uncertainty — Krakauer on deciding when the data is bad"
concept: "David Krakauer (President, Santa Fe Institute) on the first five essays of SFI's Transmission series (April 2020): why one small virus brought down the world's complex systems while cancer never has, why bad data demands the SIMPLEST model, why policymakers' hunger for certainty corrupts scientific advice, and why incremental change is the only real change"
sources: "COMPLEXITY podcast S1:E26 'Rigorous Uncertainty: Science During COVID-19 with David Krakauer (Transmission Series Ep. 1)', April 6 2020, 47:04, host Michael Garfield; full official transcript (complexity.simplecast.com/episodes/26/transcript)"
captured: 2026-07-30
type: podcast distillation
---

# Rigorous uncertainty

> **"Good scientists are comfortable with uncertainty, bad ones are not."**
> That single line carries the episode. Pseudoscience flourishes in a crisis not
> because people are stupid but because certainty is what a decision-maker
> wants, and the honest expert is the only one who refuses to supply it. The
> rest of the episode is the operating manual for acting anyway: use the
> simplest model your data can afford, respect superlinear scaling, and change
> by increments, because "revolutionary change is illusion."

Companion notes: [`landscape-of-21st-century-science.md`](landscape-of-21st-century-science.md)
(Krakauer's founding manifesto, 2019) and [`complexity-science.md`](complexity-science.md)
(the four pillars). This one is Krakauer *applied*, under time pressure, in the
first weeks of the pandemic — which is why it is the most operational of the three.

## The setup: why THIS disease broke the world

- **The virus, briefly.** A large RNA virus (~30,000 bases). Large *because*
  large means high-fidelity replication — so unlike flu it is not very mutable,
  which is good news for vaccine durability. Coronaviruses are ordinary: they
  account for about 30% of common colds. This one is horrible because it hijacks
  the renin–angiotensin pathway, binding a cell-surface receptor we *need* for
  cardiovascular regulation (hence the elevated risk for diabetics, who have more
  of that receptor). The spike (S) protein gives it entry and its name; the **E
  protein** is the frightening one — it triggers cytokines, inflammation, edema,
  the lungs filling with water. **Access and damage are two different proteins.**
- **The real question: why cancer doesn't do this.** Cancer, Alzheimer's and
  cardiovascular disease kill enormously and have never collapsed civilization.
  Krakauer's answer is the core idea of the episode. Those diseases are *truly
  complex*: no single gene, but tens or hundreds or thousands. That's terrible
  for treatment — no lever to pull — but it is exactly what makes the body
  robust. **"Complexity is homeostatic."** The body refuses to hand any one
  function a single switch, because a single switch is a single point of failure.
  Complexity is hard to understand *and* hard to hijack. The two properties are
  the same property.
- **COVID's trick was paradoxical simplicity.** One dominant causal principle
  operates at *every* scale: **transmission**. Cell to cell, body to body across
  social networks, through commerce and surfaces across a city, city to city
  through transport networks, then across the globe. It hijacks supply chains the
  same way it hijacks the ACE receptor. Because every level is running the same
  mechanism, one mechanism gets leverage over all of them.
  → **"Human culture has become vulnerable at the layer of transmission because
  too many different mechanisms are aligned."**
- **The forward move is therefore to engineer misalignments.** Not to remove
  transmission, but to make the layers stop being the same kind of thing.

## Quarantine as collaboration, not hiding

Staying home is not evasion — it is *active participation* in misaligning one
layer of the system. A vaccine blocks transmission at the ACE receptor; a citizen
blocks it at the social-network layer. Krakauer calls this a **behavioral vaccine
policy**, and argues (half-seriously) that every citizen deserves a fraction of
the Nobel Prize in Medicine. The framing he keeps returning to is **citizen-based
medicine**: "in a complex system, you are absolutely as important, if not more
important, than the ACE receptor."

He is explicit that this is *harder* than the technical fix: designing guidelines
"that don't feel oppressive but feel empowering" is "in some sense more difficult
than developing a vaccine, because we're developing a social analogue."

**The missed opportunity.** The same mathematics describes the transmission of
disease and the transmission of ideas, and the same networks promote or impede
both. In this outbreak **memetic transmission ran faster than viral
transmission** — and, he says with visible disappointment, "we didn't act on
that. We weren't leveraging the comparative advantage of idea infection over
biological infection."

## Essay 1 — Kinney: the hidden value judgment in "just give me the numbers"

- The public rhetoric of science is objectivity. The practice is not: when your
  model produces a *spectrum* of possible futures, someone has to decide how to
  communicate it, and that decision is a value judgment.
- Historical anchor: Groves and Oppenheimer. The division of labour worked for
  the atom bomb; it broke with the hydrogen bomb, when Oppenheimer felt compelled
  to make policy remarks and was accused of being a communist spy. Scientists have
  been cautious about policy recommendations ever since — for good reason.
- The late-1950s answer (Richard Jeffrey, Isaac Levi — transcript renders them
  "Jaffe"/"Levy") was a strict division of powers: scientists hand over raw
  numbers, politicians decide.
- **Kinney's catch-22, which is the important part.** Policymakers want
  *certainty*. Probabilities near 1 or 0 get acted on — and are less likely to be
  correct. A truthful "0.6 versus 0.4" is closer to the real distribution and
  deeply unsatisfying to the person who has to act. So **scientists are pushed to
  exaggerate severity in order to be adopted at all.** Krakauer: "I think this is
  actually a problem that can't be escaped."
- **Krakauer's addendum, the line worth keeping:** good scientists are
  comfortable with uncertainty, bad ones are not — which is precisely why
  pseudoscience thrives in a crisis. The honest expert says "we don't have the
  data; to the best of my ability, these are the odds." The charlatan says "I know
  exactly what's going on." In a period of stress the second one gets adopted
  "with alacrity," because it supplies the thing that is actually in demand.
  Be suspicious of anyone claiming a solution on inadequate data:
  **"certainty is acquired very slowly."**

## Essay 2 — Duc & Jost: when the data is bad, use the SIMPLEST model

The inversion most people get backwards:

> **Bad data → simplest possible model. Good data → you may afford a complicated one.**

- The Imperial College model is the cautionary case: philosophically it was "vastly
  too complicated given the data that we had." The temptation was policy-driven —
  put in the schools, the age distribution, the households, the hospitals and
  their spatial locations, the airports. Those agent-based models are *absolutely
  critical* when you have genuinely good data, like a city under normal conditions.
- Under sparse or bad data, simple models win because they are much less sensitive
  to fluctuations — **they don't over-fit.** Duc and Jost's concrete
  recommendation is aggressive idealisation: log-transform, linearise, extrapolate.
- The transferable rule: **"if someone comes to a complicated model with bad data,
  you should be very suspicious of it, and you should be more tolerant of
  simplicity in times of uncertainty."**
- Krakauer's own analogy is economic, and it's the sharpest version: basic supply
  and demand is a very simple model. Now imagine a rival model that knows exactly
  what you like, what you buy, what you watch — but the personal data is all
  bogus. The crude macro model beats it outright. **"You only want to put
  complexity in your model if it's justified by the empirical data. If it's not,
  leave it out, because it will underperform the simple model."**

## Essay 3 — Harte: superlinear scaling, and why 10 vs 100 is not a quibble

A deliberately simple model — some number of groups (say, schools), some number of
people in each — yields one hard number: **double the size of a group and you get
a four-fold increase in transmission.** Superlinear scaling.

Consequences Krakauer draws out:

- Small groups can still carry very high transmission rates, so the numbers people
  argue about (5, 10, 100) are genuinely meaningful. He's pointedly annoyed at the
  "no real difference between 10 and 100" line: there is a huge difference between
  10 and 100, and a real difference between 10 and 20.
- Sensible group size is **single digits**.
- Exit strategy follows directly: do not return to normal precipitously; **add one
  or two at a time.** Graduated return "seems kind of preposterous at one level"
  but is in fact "quite a sophisticated mathematical principle."

Related, from the conversation around it: because the incubation interval is long
(Lauren Ancel Meyers' work), the actual transmission network is probably
impossible to reconstruct — which is *why* the data was patchy in the first place.
The data problem and the model problem are the same problem.

## Essay 4 — DeDeo: habit is compressed cognition, and the compression just expired

- Society evolved over thousands of years to minimise the cognitive burden on
  individuals. The name of that minimisation is **habit formation** — rules of
  thumb that work because the environment is roughly constant.
- Change the environment and the same habits become maladaptive. You have to sit
  down and reason again.
- In Kahneman's terms, the crisis **forcibly moved behaviours out of System 1 into
  System 2**. Krakauer's image: you've played chess for years, and someone
  announces the rook now moves diagonally, the king moves three squares, and the
  pawn behaves like a bishop. Everything automatic must be re-derived.
- So now is the moment to *rethink thought* — to deliberately choose what becomes
  the habit of the future, with the long tail in mind: perturbations of this size
  "might be more common than we had anticipated." Explicitly not prepper paranoia
  ("this is not about stockpiling firearms").

## The close: why he is not optimistic, and what to do about it

- **The 9/11 precedent.** Global collegiality and sympathy, then very quickly
  "rabid xenophobia and protectionism." "Human beings very quickly reverted to
  their usual selfish selves."
- Hence the operational demand: **"we have to make what is clear when we reason
  clear when we act — we have to turn thought into action by making analysis
  habit."** Otherwise there is a massive rebound to normalcy. He predicts it
  concretely: cheap oil, cleaner air, and the moment the light turns green,
  road trips. "It's behaving like a Pollyanna to think that the decency one
  observes under crisis is maintained in periods of normalcy."
- **And then the surprising turn — he is sympathetic to the desire for normal.**
  The fitness analogy: twenty years ago the advice was halve your calories and run
  20 miles a day, and nobody could do it. The humane version — a ten-minute walk
  is genuine progress, a habit you can build on — actually works. The worst
  outcome would be an ideology proposing "draconian transformations of society
  that will be rejected wholesale."
  → **"Incremental change is real change, revolutionary change is illusion."**
- And the complexity lesson underneath it: **any attempt to treat the system as if
  one or two levers will transform it is a mistake.** What you want is "a nuanced
  attitude towards tiny changes in many different places."

One aside worth keeping: under real urgency, fundamental labs repurposed
themselves into applied service in almost no time — evidence that the
basic/applied distinction "isn't really real."

## Solo-builder read (insights for Jens)

- **The bad-data rule is the one to actually install.** You keep making calls on
  genuinely thin data — 2 clicks in 28 days, four leads, one paid channel that
  never produced a verdict. The instinct in that situation is to build a *better
  model*: a fuller attribution chain, a richer dashboard, a more elaborate funnel
  theory. Krakauer says that instinct is exactly inverted. **Sparse data licenses
  only the crudest estimator.** The FK/HC shutdown was decided on three number
  pairs and nothing else — that was not a shortcut, that was methodologically the
  right size of model for the data available. Resist the urge to upgrade it.
- **"Good scientists are comfortable with uncertainty" is a test you can run on
  advisors, agents, and me.** The confident number on thin evidence is the tell,
  not the credential — and it is a documented failure mode of summarising models,
  including mine. Applied to your own reports: when I hand you a clean figure,
  the right question is what data it stands on, and a fluent answer should raise
  suspicion rather than lower it. Krakauer's mechanism explains *why* the
  confident version keeps winning: it's supplying demand.
- **Alignment across scales is fragility — and your stack is aligned.** The virus
  won because one mechanism ran at every level. Look at your own layers: one
  mini-PC hosting the assistant, the agent runners and Fabrik; one Anthropic
  subscription behind nearly every agent; one distribution hypothesis (organic
  search) behind several products at once. When these are the same mechanism at
  every scale, a single shock takes all of them. The LiteLLM proxy is literally
  an *engineered misalignment* — it is worth more than it looks, and it is worth
  finishing the wiring. Same reasoning as the Taleb note
  ([`antifragility.md`](antifragility.md)), arrived at from epidemiology.
- **Superlinear scaling cuts both ways and you only ever use one side.** You apply
  it defensively (concentration risk). The offensive side: in a superlinear
  regime, small absolute increases in the number of connected points produce
  disproportionate spread — which is the entire argument for the distribution move
  ranking above artefact N+1. The lesson is not "go bigger," it's that *the small
  numbers are not noise*. Four leads versus eight is not a rounding difference.
- **"Making analysis habit" is precisely what your routines file is for.** You
  already discovered this empirically on 2026-07-06: a lesson only works where it
  is read every session, not in a document nobody opens. DeDeo's framing gives it
  the mechanism — the crisis moved things into System 2, and the value is lost
  unless they are deliberately re-compressed back into System 1. The 100-day
  "distribution first" lesson is currently a System 2 insight; it is a habit only
  once a session does it without deciding to.
- **"Incremental change is real change, revolutionary change is illusion" is a
  direct rebuke to the relaunch reflex.** The pattern in your history is the big
  swing — a new site, a new brand, a new extension, the next artefact. The fitness
  analogy is the correction, and it's aimed at exactly the ADHD failure mode:
  the draconian version gets rejected wholesale, the ten-minute walk compounds.
  Applied concretely: one lever per week, moved deliberately, beats a redesign.
- **Citizen-based medicine is a Sutherland-shaped reframe.** The highest-leverage
  intervention was not the pharmaceutical one; it was behavioural, distributed,
  and unglamorous — and it was *harder to design* than the vaccine. Transferred:
  the reason your funnels stall is rarely the code. The Haus-Tannheim finding —
  a whole calendar dead behind one configuration row, while every metric looked
  healthy — is this same lesson with a different costume.

## Quotable

- "Good scientists are comfortable with uncertainty, bad ones are not."
- "Certainty is acquired very slowly."
- "Complexity is homeostatic... it's hard to understand, but it means it's much
  harder to hijack."
- "Human culture has become vulnerable at the layer of transmission because too
  many different mechanisms are aligned."
- "You only want to put complexity in your model if it's justified by the
  empirical data. If it's not, leave it out, because it will underperform the
  simple model."
- "There's a huge difference between 10 and 100!"
- "Incremental change is real change, revolutionary change is illusion."
- "We have to make what is clear when we reason clear when we act — we have to
  turn thought into action by making analysis habit."
- "In a complex system, you are absolutely as important, if not more important,
  than the ACE receptor."

## Sources

- COMPLEXITY podcast S1:E26, "Rigorous Uncertainty: Science During COVID-19 with
  David Krakauer (Transmission Series Ep. 1)", April 6 2020, 47:04 —
  <https://complexity.simplecast.com/episodes/26/transcript> (official transcript,
  read in full)
- Transmission essays discussed: T-000 Krakauer, *Citizen-Based Medicine* ·
  T-001 David Kinney, *Why Scientists Must Make Value Judgments in a Complex
  Crisis* · T-002 Luu Hoang Duc & Jürgen Jost, *Making the Most of Bad Data* ·
  T-003 John Harte, *Reducing Conflicting Advice on Allowable Group Size* ·
  T-004 Simon DeDeo, *Thinking Out of Equilibrium*
