---
title: "Embracing complexity — Krakauer on tails, redundancy, and why single levers break"
concept: "David Krakauer (President, Santa Fe Institute) on week five of SFI's Transmission series (May 2020): why reporting the average outbreak size is dangerous, why testing capacity can make a curve look flat for the wrong reasons, why 'conviction narratives' are both the best tool we have under radical uncertainty and a trap, why monotherapy fails and multi-system intervention works, and why civilizations fall not to one catastrophe but to two stacked with no recovery interval — read here explicitly through Taleb's antifragile/fragile/robust lens"
sources: "COMPLEXITY podcast S1:E31 'Embracing Complexity for Systemic Interventions with David Krakauer (Transmission Series Ep. 5)', May 4 2020, 44:55, host Michael Garfield; full official transcript (https://complexity.simplecast.com/episodes/31/transcript)"
captured: 2026-08-13
type: podcast distillation
---

# Embracing complexity

> **"Complex causality requires complex control or complex intervention."**
> Krakauer calls this "one useful mantra" for the whole episode, and it is the
> thread that ties together five otherwise unrelated essays: a virus statistic,
> a testing shortage, a decision-theory paper, a geriatrics piece, and a history
> of plagues. Every one of them is a variation on the same failure — reaching
> for a single lever (the average, the metric, the narrative, the monotherapy,
> the one named cause) on a system that does not have a single lever. Read
> through Taleb, this is the fragile-versus-antifragile distinction wearing five
> different costumes: single-point systems break: redundant, distributed,
> tail-aware ones don't.

Companion notes: [`rigorous-uncertainty-covid.md`](rigorous-uncertainty-covid.md)
(the first episode in the same Transmission series — same format, same host
and guest) and [`antifragility.md`](antifragility.md)
(Taleb's antifragile triad, convexity, barbell, via negativa, optionality,
skin in the game — read in full before this note, since the framing below
depends on it).

**On the antifragility framing.** Jens asked for this episode read explicitly
through Taleb. Three of the five essays map onto the triad unusually cleanly —
Moore's tail-risk argument, the radical-uncertainty essay's forecasting problem,
and the frailty/monotherapy piece's redundancy argument — and those sections say
so precisely, not just by gesture. Two essays fit less cleanly (testing capacity
is an instrumentation problem, not an exposure-shape problem; the historical
essay is a different facet of the framework — compounding/correlated shocks
rather than convex payoffs). Both of those say so plainly rather than forcing
a fit that isn't there.

## Essay 1 — Moore: R-naught and the danger of averages

Cris Moore's contribution starts from the number everyone was quoting in
spring 2020 — R-naught, the expected count of secondary infections per primary
one — and makes a point Krakauer treats as foundational to the whole series:
**"R-naught is not just a property of a virus; it's a property of its host."**
It gets reported as if it were a fixed property of a pathogen, when it is
really an average over a population that is anything but uniform.

Moore's models show what the average conceals. Take a locality with an
R-naught around 0.8, sub-critical, meant to peter out. Even so, you'd expect a
distribution of outbreak sizes: most localities small, but "about 1% of them
would be about 50 and in one of those localities it may go up as high as 80
even though the expected numbers with an R-naught of 0.8 would be five on
average." Layer in the super-spreader — an individual who "can generate, say,
20 secondary infections" — and an outbreak whose average is still five can
produce "hundreds of individuals being infected." Krakauer names the mechanism
directly: "beware of the average, consider the variance, which leads you to a
contemplation of what's called the heavy tail that there are in the, if you
like, probability distribution outliers that are more common than you might
have anticipated." He grounds it locally too — McKinley County, New Mexico,
with a large Native American population, ran far hotter than the state
average, "and so it's very dangerous to be reporting the average."

**Antifragility read.** This is Taleb's mean-versus-tail argument, almost word
for word, arrived at independently from epidemiology instead of finance. The
core antifragility claim — that a heavy-tailed process punishes anyone who
manages to the mean instead of the distribution — is exactly Moore's claim
about R-naught. The super-spreader *is* the fat-tail event: bounded-looking on
average, unbounded in the one draw that matters. And the shape is the same one
antifragility.md flags as the single most common modeling error: treating the
mean as if it told you about risk, when the risk lives entirely in the tail
you averaged away.

## Essay 2 — Savage: testing capacity, "flattening the curve," and null models

Van Savage's piece is about a more mundane failure: the instrument, not the
signal. If the true number of infections exceeds testing capacity — which it
did — and you're only testing symptomatic people — which was standard — then
"what you're ultimately doing is reporting on noise. And the curve will appear
to be flattening for pathological reasons." Krakauer's stadium analogy makes
it vivid: the Rose Bowl and Wembley Stadium both hold "about 90,000 fans," and
if both sell out, "you wouldn't conclude that there were only 90,000 football
fans in the U.S. or U.K." — you'd recognize you'd hit supply, not measured
demand. Savage's simulations demonstrate the same trap for testing: "there are
only two options available to us: We either massively increase the testing
capability or we test randomly." Krakauer generalizes this as building a
**null model** — a rigorous simulation of what you'd expect to see even absent
a real signal, because "we don't really know how to interpret data unless we
have an expectation."

**Antifragility read — genuinely thin, said plainly.** This essay's fit with
the triad is weak, and forcing it would be worse than admitting that. Savage's
problem is epistemic — your instrument saturates before your signal does — not
an exposure-shape problem in Taleb's sense. The nearest honest connection is a
family resemblance to Moore's essay rather than a new instance of the
framework: undertesting doesn't just misjudge the tail the way an averaged
R-naught does, it makes the tail *invisible*, which is a different and in some
ways worse failure. But that's a comment about instrumentation, not about
convexity or redundancy, and it doesn't belong forced into the triad.

## Essay 3 — Smith et al. (four authors): radical uncertainty and the cone of possibilities

The third essay — "four authors, all of whom are focused on this particular
issue of radical uncertainty," prominently associated with Lenny Smith — asks
what to do "when you really don't know," where "the quantification of a cost
and a consequence is highly contestable" but a decision has to be made anyway.
Its central claim: the best statistical model you can honestly build "will be
vastly less informative in a deep sense than the cone of all possibilities."
You are better off knowing the shape of your ignorance — the cone, the
variance, the higher moments — than pretending to a point estimate. Krakauer
grounds this with a number: "yesterday U.S. corona-correlated deaths were
about 60,000, and that was a number that surprised a lot of people because it
wasn't expected to reach that level until about August."

Their proposed answer, once you concede you can't quantify your way out, is
**conviction narratives**: reach a defensible conclusion, act on it, and
construct "a narrative that makes sense of them that doesn't appear irrational
or totalitarian." This is the territory of John Kay and Mervyn King's 2020
book *Radical Uncertainty*, which Krakauer credits with "dethroning the
reigning probabilistic connotative school" but faults because "they don't do
such a good job in replacing it." He's explicit about the danger baked into
their own proposed cure: "narratives can be very, very dangerous because
they're very subject to cognitive biases" — attribution, confirmation,
framing. His own preferred alternative, non-quantitative but still rigorous,
is closer to mathematics than statistics — "the Greek proofs in mathematics
are very rarely quantitative."

Michael Garfield connects this to the OODA loop — observe, orient, decide,
act, developed by fighter pilot and USAF colonel John Boyd for exactly this
kind of decision under time pressure — and to fitness landscapes (recalling
Manfred Laublicher's earlier piece): "optimization in radical uncertainty is
dangerous because its premises are not satisfied on a fitness landscape...
There are valleys where mountains used to be. And if you continue to optimize
for the mountain of your narrative, then you're going to walk off a cliff."
Krakauer adds a second citation for the same worry: Jerry Muller's *The
Tyranny of Metrics*, and the H-index as the case study — "It measures
scientific popularity, not scientific profundity, and these indices which
have been proliferating across different sectors are essentially a substitute
for judgment." And he names his own working concept for a good conviction
narrative: "I've described narrative as ontology engines a number of times" —
citing Neal Stephenson, a former SFI Miller Scholar, as an author who does
this well by exploring the full counterfactual space rather than committing
early.

**Antifragility read — the strongest hit, and the tension worth naming.** The
essay's own move — you can't forecast the point outcome, so plan for the cone
instead — is close kin to Taleb's central prescription: stop trying to predict
the future and instead build convex exposure to it. But the essay's own
proposed instrument for acting under that cone — a conviction narrative — is
itself a single, confidently held story standing in for a forecast. That is
close to the exact failure mode Taleb warns against: a fluent narrative
supplies the certainty a decision-maker wants, which is not the same thing as
being positioned so that being wrong is cheap. Krakauer half-diagnoses this
himself when he flags narrative's vulnerability to cognitive bias, and the
fitness-landscape image — optimizing for the mountain of your narrative and
walking off a cliff when the landscape shifts — is, read carefully, a warning
against exactly the tool the essay just proposed. The OODA loop sits closer to
genuine antifragility than conviction narratives do: it's a short,
iterated observe-act cycle that revises on contact with reality, not one
big bet on a story. The Tyranny of Metrics thread is the Goodhart's-law
cousin of the same problem — optimizing a legible proxy (the H-index) instead
of the thing it stands in for is a different way of pretending you have
resolved uncertainty you haven't.

## Essay 4 — John Krakauer & Carlson: frailty, monotherapy, and systemic intervention

David's brother John Krakauer, a neurologist, and Michelle Carlson write on
frailty — "a real biological syndrome that about 10% of Americans have,"
marked by muscle tissue loss, slowed gait, reduced physical activity, and
persistent low energy. "This syndrome increases markedly over the age of 65
and we can't but notice that the age of 65 is that kind of magic category
where you become significantly more susceptible to the coronavirus" — "it's
the group of 65 up that are most vulnerable to this infection and are
experiencing the highest hospitalization rates."

Their argument against how medicine typically responds: "there is a
preference to treat conditions with monotherapies. We can attack that single
system with a single drug and the fact is that most of us know it doesn't
work" — citing hormone replacement therapy as the standard example. Citing
Linda Fried's foundational work on frailty syndrome, they make the opposite
case for physical activity: "the extraordinary thing about physical activity
is that it's not a monotherapy. It actually up-regulates many systems that
are necessary to maintain health," and it happens to be "particularly
effective at ameliorating two chronic diseases, hypertension and type-two
diabetes that are the primary co-morbidities with coronavirus infection." The
group most exposed to the shock is also the group whose intervention has to
be the least monotherapy-shaped — and the essay's practical suggestion is
gamified movement (Wii Sports, Beat Saber, Ring Fit Adventure) to lower the
psychological barrier to activity for people who feel too unwell to start.
Garfield supplies the image that sticks: "physical exercise might be like the
keystone species. If you remove it then the entire web collapses." Krakauer
cites a related book, Peter Sterling's *What is Health?*, making the same
point about hypertension and diabetes directly, and closes on: "Medicine will
evolve by recognizing the complexity of the body and pursuing complex
interventions. Physical exercise and sleep are two very good examples of
that."

**Antifragility read — the second strong hit.** This is close to a direct
restatement of antifragility.md's redundancy claim: nature doesn't run
efficient, single-lever systems — it carries spare capacity, and that spare
capacity is what turns a shock into something survivable instead of ruinous.
Monotherapy is the fragile shape: one lever, one point of failure, no slack if
that lever fails or the problem turns out to be multi-causal. Multi-system
physical activity, "up-regulating many systems," is the redundancy itself —
built in advance, general-purpose, and not aimed at any one diagnosis. And the
essay closes the loop precisely where Taleb's framework predicts it should:
the shock lands hardest exactly on the population with the least physiological
reserve. Frailty — reduced systemic redundancy — concentrates over 65, and
that is exactly the group the virus hits hardest. That's not a coincidence in
either framework: negative redundancy (Taleb's word for it is close to "debt")
is what converts a survivable stressor into a catastrophic one.

## Essay 5 — Crabtree: quarantine's origins, plagues, and compounding catastrophe

Stefani Crabtree's piece opens by tracing the practice everyone was suddenly
living under to its origin: "the practice of quarantine that we are now
experiencing derives from a 14th-century Venetian convention of keeping ships
at harbor to protect the citizens of the city-state from pathogens." She goes
back further, to "the plague of Athens in the fifth century, which killed
one-third of the city-state's population," and to Thucydides' account of it,
noting that "he describes the spread of fear as moving more quickly than the
spread of the plague." Her own archaeological specialty is the Chaco culture —
"this is the culture right here, very close to us, which thrived between the
10th and the 12th centuries, but experienced a very precipitous decline when
the ancestral Puebloans left," a decline hypothesized to involve drought and
protein shortage that "led to significant escalations in warfare and
violence." Later in the conversation Garfield recaps the mechanism: "when
productivity failed, the Chacoan hierarchical society fractured, violence
increased, and society reorganized into regional communities."

Krakauer extends the point with Kyle Harper's *The Fate of Rome*, contrasted
against Edward Gibbon's classic explanation for Rome's fall — for Gibbon "the
empire declines for two reasons, really. One is self-destructive religious
superstition, and the other is warfare at its boundaries." Harper's revision
foregrounds climate and disease instead: the Antonine Plague, "in the second
century A.D., where a thriving Roman Empire under Augustus was brought to its
knees by smallpox." The detail Krakauer stresses is the sequencing: right as
Rome was recovering, "Rome experienced what's called the late antique little
ice age, which was very, very unfavorable to agriculture. And so one
catastrophe came on the heels of another and that compounding effect really
brought the empire down, as opposed to the standard Gibbon explanation."
Krakauer draws the general lesson forward to the present crisis: "much of what
we're observing is pre-existing inequalities of susceptibility or economic
circumstance amplifying the effects of a virus" — collapsing that to a single
named cause (the virus) is the same mistake as collapsing Rome's fall to two
tidy Gibbon reasons. Two further threads are named but not developed in this
transcript: Miguel Fuentes' work on how social graphs disintegrate under
crisis, and Tony Eagan's piece on the balance between federal and state
governance in disasters — both mentioned only in passing as the episode
closes.

**Antifragility read — a real but different facet of the framework.** This
essay doesn't map onto convexity or the mean-versus-tail argument; it maps
onto a different part of antifragility.md — hormesis and correlated failure.
The claim there is that a system shrugs off many small recoverable stressors
but shatters under one shock that exceeds its recovery capacity, and that
correlated, stacked shocks are far more dangerous than the same shocks
spread out with slack between them. Rome had survived plagues and climate
swings before; what Harper's account says actually broke it was two
catastrophes landing back to back, with no recovery interval — precisely the
distinction hormesis draws between a dose that strengthens and a blow that
breaks. Worth flagging honestly: this kind of historical pattern-match is
exactly the sort that's easy to assert post hoc (antifragility.md's own
critique section names this risk), so it's offered here as a plausible
structural analogy, not as proof that Rome's fall obeyed Taleb's math.

## Closing synthesis

Krakauer's own summary line for the episode is worth taking at face value
because he flags it as one: "complex causality requires complex control or
complex intervention." He pairs it with a diagnosis of why we keep reaching
for the single lever anyway — "the history of thought is a history of
low-hanging fruit. We start with the simplest things that we can intervene
into in the simplest way" — gravity from a falling apple, ballistics from
gravity — and a plain admission of where we stand with genuinely complex
systems: "we're just at the baby steps of understanding how to intervene into
complex systems. And the last thing we want to do is pretend that they're
simple systems." Read across all five essays at once, the antifragility frame
converges on one claim stated five different ways: averaging away the
variance, saturating the test, mistaking a narrative for a forecast, reaching
for the single drug, and naming the single historical cause are all the same
move — collapsing a distributed, redundant, tail-heavy reality down to one
number or one lever, which is exactly the shape that breaks under a shock the
simple model didn't see coming.

## Solo-builder read (insights for Jens)

- **Averages hide the tail in your own reporting, not just in epidemiology.**
  When you check whether a channel or product "is working," a single average
  conversion or click number does what Moore says the national R-naught does —
  it erases the possibility that most days contribute ~0 and one rare event (a
  single lead source, a single viral post) is carrying the whole period. The
  fix Moore's essay implies is the one you already half-apply elsewhere in this
  repo (`learning_cold_start_number_needs_its_distribution.md`): ask for the
  distribution, not the mean, before calling a channel dead or alive.
- **Conviction narratives are the trap in the assistant's own reports, and the
  agent-task cadence rule is the antidote already in place.** A fluent
  end-of-session summary can supply the certainty you want without actually
  reducing uncertainty — that's exactly the tension Krakauer names in his own
  source material. The one-PR-per-repo-per-night rule and the ≤3-open-PR cap
  aren't just governance — read through this episode, they're an OODA loop:
  small, fast, revisable bets instead of one big narrative-driven push. Worth
  naming that mechanism explicitly next time the instinct is to write a
  bigger, more confident plan instead of the next small step.
- **The business's frailty concentrates exactly where the essay predicts it
  would.** John Krakauer & Carlson's finding — the shock lands hardest on the
  group with the least systemic redundancy — has a blunt literal reading here:
  a one-person company has exactly one operator, and if that operator is out
  (illness, burnout), there's no second system to compensate, the same way a
  frail 65-year-old has no spare capacity to absorb a respiratory shock. The
  multi-model proxy (`config/litellm-config.yaml`) is the closest thing this
  operation has to "physical exercise" in this metaphor — general-purpose
  redundancy rather than a single-lever fix — but per the assistant's own
  README it is "not yet wired into the agents." The up-regulation exists;
  it isn't load-bearing yet.
- **The Tyranny of Metrics thread already happened once, concretely.** The
  H-index critique — a legible proxy replacing judgment — is not a hypothetical
  here: `feedback_haiku_escalation.md` records exactly this failure, where a
  jq bug turned a cosmetic "model label" into something that briefly looked
  like a real signal, before Jens's rule reasserted that cost and judgment
  decide, not the label. Worth keeping as the concrete case when this pattern
  threatens to repeat with some other new dashboard number.
- **Compounding catastrophe is a checklist gap.** Rome didn't fall to the
  plague or the climate shock; it fell to both landing without recovery time
  between them. The existing fragility learnings here (single mini-PC, single
  Anthropic subscription, single distribution hypothesis) are all framed as
  independent risks. This essay argues for also asking the *combination*
  question directly: which two of those, landing in the same week with no
  slack between them, would do what the little ice age did to Rome — a
  question none of the existing single-risk audits ask.
- **Van Savage's null-model instinct is worth stating as a rule before
  trusting a zero.** "0 leads" or "0 clicks" reads as information; it might
  just be a saturated or under-sampled instrument, the way a sold-out stadium
  looks like maximum demand instead of limited supply. Before concluding a
  channel produced nothing, ask what the null model — what you'd see anyway,
  from measurement limits alone — would have looked like.

## Quotable

- "R-naught is not just a property of a virus; it's a property of its host."
- "So the average is dangerous because of regional variation."
- "Then what you're ultimately doing is reporting on noise. And the curve will
  appear to be flattening for pathological reasons."
- "We either massively increase the testing capability or we test randomly."
- "There are valleys where mountains used to be."
- "If you continue to optimize for the mountain of your narrative, then you're
  going to walk off a cliff."
- "I've described narrative as ontology engines a number of times."
- "It measures scientific popularity, not scientific profundity, and these
  indices which have been proliferating across different sectors are
  essentially a substitute for judgment."
- "Medicine will evolve by recognizing the complexity of the body and pursuing
  complex interventions. Physical exercise and sleep are two very good
  examples of that."
- "Complex causality requires complex control or complex intervention."
- "One catastrophe came on the heels of another and that compounding effect
  really brought the empire down."

## Sources

- COMPLEXITY podcast S1:E31, "Embracing Complexity for Systemic Interventions
  with David Krakauer (Transmission Series Ep. 5)", May 4 2020, 44:55, host
  Michael Garfield — <https://complexity.simplecast.com/episodes/31/transcript>
  (official transcript, read in full)
- Essays discussed: Cris Moore, on R-naught and the danger of averages ·
  Van Savage, on testing capacity, "flattening the curve," and null models ·
  four authors (prominently Lenny Smith), on radical uncertainty, conviction
  narratives, and the cone of possibilities · John Krakauer & Michelle
  Carlson, on frailty, monotherapy, and systemic intervention · Stefani
  Crabtree, on the history of quarantine, plagues, and civilizational collapse
- Named in passing, not separately developed in this transcript: Miguel
  Fuentes (social-graph disintegration under crisis) and Tony Eagan (federal
  vs. state governance in disasters)
