---
title: "Two kinds of uncertainty — Krakauer on exponentials, cities, and the asymmetry antifragility is built to exploit"
concept: "David Krakauer (President, Santa Fe Institute) on episode 6 of SFI's Transmission series: David Wolpert on the Landauer bound and the virus as a computer virus, Sid Redner (with Cris Moore) on exponentials and the uncertainty of the Butterfly Effect versus the uncertainty of ignorance, Chris Kempes and Geoff West on superlinear scaling in cities, Eric Maskin on Mechanism Design when markets stop working, and Pamela Yeh and Ian MacGregor-Fors on animals reclaiming the city"
sources: "COMPLEXITY podcast S1:E32 'Exponentials, Economics, and Ecology with David Krakauer (Transmission Series Ep. 6)', May 11 2020, 47:28, host Michael Garfield; full official transcript (https://complexity.simplecast.com/episodes/32/transcript)"
captured: 2026-08-13
type: podcast distillation
---

# Two kinds of uncertainty

> **"Not the uncertainty of ignorance, but the uncertainty of the Butterfly Effect."**
> Krakauer drops this almost in passing while unpacking Sid Redner's essay on
> exponentials, and it is the strongest idea in the episode — a distinction Taleb's
> own antifragility framework never quite spells out. Not every uncertainty closes
> with more data; some of it is amplification, not ignorance, and against that kind
> you cannot out-model, you can only out-structure. Everything else in the hour —
> compounding cities, a market that stops pricing anything, animals that forget how
> to be afraid — turns out to be a variation on the same asymmetry: small causes,
> exponential consequences, and which side of the sign you end up on is a design
> choice, not a forecast.

Companion notes: [`rigorous-uncertainty-covid.md`](rigorous-uncertainty-covid.md) (the
first episode of the same Transmission series — bad-data modeling, superlinear scaling
of group size, the value judgments hidden inside "just give me the numbers") and
[`antifragility.md`](antifragility.md) (Taleb's fragile/robust/antifragile triad,
convexity, the barbell, via negativa, skin in the game — the lens this note reads the
whole episode through, at Jens's explicit request). This episode returns, independently
and from a different essay, to almost the same mathematics as the first one — superlinear
scaling reappears, this time in cities rather than classroom groups — which is itself a
small piece of evidence for how load-bearing that idea is across the series.

## Essay 1 — David Wolpert: the virus as a computer virus

- Frames the pandemic through the Landauer bound: a physical limit on computation.
  Turing's 1936 machine was a pure logical construct, frictionless, living in "a kind of
  mathematical utopia." A physicist working at IBM in the 1960s noticed that *real*
  computers live in the physical world and are therefore bound by thermodynamics —
  specifically the second law. The result, the Landauer Principle: any logical
  manipulation of information — writing bits, erasing bits, combining bits —
  **"will generate heat, and that heat will be dissipated into the environment."**
  This is why transistor packing has a ceiling: pack enough of them and the circuit
  melts.
- A virus is a tiny organic computer. Its genome is its Turing tape; the function it
  computes is "copy." It should be bound by the same Landauer constraints — except it
  ingeniously outsources almost all the computational work to its host (the "extended
  phenotype" / niche-construction move): it doesn't encode the ribosome complex, we do.
  Consequence: **"most of the virus is not virus. Most of the virus is, in fact us."**
- Krakauer generalizes this to technology (the iPhone outsources to server farms cooled
  by river systems — Timothy Morton's term for this kind of thing is a hyper-object:
  **"an object that only partly lives in the dimension of your immediate experience,
  most of which is out of sight"**) and to biology (the spider-plus-web boundary problem
  from Krakauer's own Information Theory of Individuality work — where does an organism
  actually end?).
- **Antifragility fit: weak, and worth saying so rather than forcing it.** This essay is
  about thermodynamic limits and outsourced computation, not about exposure to
  volatility. The nearest honest connection is structural rather than Taleb's own
  vocabulary: a minimal replicator that externalizes almost all of its build and running
  cost to a host is, mechanically, a very cheap bet with an outsized potential payoff —
  but that's a description of the virus's economics, not something the essay itself
  argues, and pushing it further than that would be manufacturing a fit that isn't there.

## Essay 2 — Sid Redner (with Cris Moore): the uncertainty that more data can't fix

- Exponentials, Krakauer says, are "notoriously hard to get your brain around," and in
  popular culture they're behind the Butterfly Effect: **"two arbitrarily close initial
  conditions, where the two associated trajectories diverge exponentially in time."**
  Extreme sensitivity to initial conditions — that's the whole phenomenon.
- Redner's compound-interest example: **"you deposit a dollar with an outrageous
  interest rate, say 5% per day, and in about nine months you'd have a million
  dollars."** At 10% per day you're a millionaire in under five months.
- His Moore's-law example, which Krakauer likes even more: a gigaflop of processing
  power cost $18 billion in the 1960s, $20 million in the 1980s, about $1000 in the year
  2000. An iPhone X, ~$500 on eBay, runs at 600 gigaflops. Time-travel that phone back to
  1960 and — chip alone — **"your $500 iPhone is a trillion-dollar hyper-object."**
- Then the pivot to the virus: **"R-naught... is like the interest rate of the viral
  investment in its hosts. So we are the virus's genome bank and the virus does not
  make more money, it makes more genomes."** COVID's R0 of about 2.5 is, in Redner's
  framing, **"a 250% interest rate."**
- Cris Moore's companion insight, folded into the same discussion: model social
  distancing as reducing R0 from 2.5 by somewhere between 10% and 0% *per day*, averaging
  5%/day. On average you cross below 1 in about 20 days — but because the process is
  exponential, that average conceals enormous variance: **"the size of the epidemic
  could vary between a hundred times the initial number of infected to about 10,000
  times the initial number of infected."** Same average policy, wildly different
  outcomes, purely from the exponential amplifying ordinary day-to-day variation.
- Krakauer's own naming of what this is: **"Not the uncertainty of ignorance, but the
  uncertainty of the Butterfly Effect. Exponentials build this other kind of radical
  uncertainty into our models, which has nothing to do with ignorance"** — it comes,
  instead, from non-linearities that can massively amplify tiny measurement errors or
  tiny differences in initial conditions.

**Antifragility angle — the piece Taleb's own framework leaves implicit.**
`antifragility.md` treats "uncertainty" as essentially one thing: the thing a convex
payoff protects you against, the reason `E[f(x)] > f(E[x])` matters. Redner's distinction
sharpens that considerably by splitting uncertainty into two mechanically different
kinds. **Epistemic uncertainty** — not knowing enough — closes with more data, a better
model, a longer time series; this is exactly the territory of the bad-data lesson from
the companion first-episode note (simplify the model until the data can support it, and the
uncertainty shrinks as the data improves). **Chaotic uncertainty** — Redner's and Cris
Moore's kind — does *not* close with more data, because it is intrinsic to the dynamics:
the 100x-to-10,000x range in outbreak size isn't a measurement problem you can shrink
with a better thermometer, it is what an exponential process *does* to ordinary,
unavoidable variation in its inputs. This is precisely the kind of uncertainty convexity
and optionality are a defense *against* — not because they help you predict which
trajectory you're on, but because they don't require you to. You cannot out-model a
chaotic exponential; you can only structure your exposure to it (bounded downside, open
upside) so that whichever of the 10,000 possible trajectories arrives, you're fine. Where
the two kinds get blurred — treating a chaotic-uncertainty situation as if more analysis
would tame it — is exactly where "let's build a better model" quietly becomes the wrong
answer.

A second, related point, which is mine rather than the episode's: Redner's own analogy —
R0 *as* an interest rate — makes explicit that exponential growth is the same
mathematical object whether it's compounding in your favor or against you. A 10%/day
compounding bet and a 2.5 R0 outbreak are structurally identical; only the sign of what's
compounding differs. This is mechanically what "ruin" and fat tails mean in Taleb's
vocabulary — a fragile system explodes or implodes exponentially once past a threshold —
and it is exactly why capping the downside hard and leaving the upside open — the
barbell, via negativa — is the only stable posture toward a world built out of
exponentials: you can't
ask a compounding process to be moderate, you can only choose which side of the sign
you're exposed to, and by how much.

## Essay 3 — Chris Kempes & Geoff West: cities compound faster than everything else

- Around 2007 was, for the first time in history, the point where more human beings
  lived in cities than in rural populations. Krakauer's framing: **"cities are kind of
  time-travel machines. They speed everything up. They increase the rate parameters of
  these exponentials for all sorts of different processes."**
- The epidemiological hook: **"over two thirds of all COVID-19 cases in the U.S. comes
  from about eight jurisdictions, and all of those are concentrated around cities."**
- West's long-standing empirical finding: wages, patents, and wealth all scale
  super-linearly with a city's population, city-size raised to a power around 1.15 —
  **"a compounding effect of 15% per doubling."** Because this exponent applies to a
  process that is *itself* exponential in time, the rate parameter inherits the power
  law too: **"a city with a million people will double the number of cases in half the
  time a city of 10,000."** Bigger city, same exponential machine, just running faster.
- The surprising part, and the one Krakauer flags as genuinely novel: it isn't just
  wealth and patents that scale this way — **"in the city, disease transmission scales
  the way wealth scales, and those are really amazing results that we have to
  understand."** Epidemic and economy are not separable phenomena riding on the same
  city; they are, mechanically, the *same* scaling law expressed twice.
- The forward-looking claim: because cities integrate so many different processes
  through one shared infrastructure, they need the same kind of dedicated,
  cross-disciplinary surveillance systems we already build for weather, tsunamis, and
  earthquakes — not separate epidemiology-only and economics-only monitoring.
- **Antifragility fit: real, but indirect.** The superlinear-scaling result is a second,
  independent instance of the essay 2 theme (small structural differences compounding
  into large outcome differences) applied at civilizational scale rather than to a single
  outbreak curve. Its sharper antifragility connection surfaces one beat later, in how
  Krakauer bridges into the next essay.

## Essay 4 — Eric Maskin: Mechanism Design when the market vanishes

Krakauer's bridge from cities into economics: **"these systems are coupled. It also
shows us how they all break together"** — social distancing breaks market efficiency
itself, because the pricing mechanism that normally clears supply and demand stops
functioning when people can't transact freely.

- Eric Maskin won the Nobel Prize with Hurwicz and Myerson in 2007 for work on Mechanism
  Design — sometimes called "reverse game theory." Ordinary game theory starts from
  agents, strategies, and payoffs and looks for the stable solution (a Nash
  equilibrium). Mechanism design inverts the direction: it starts by naming the outcome
  you want and works backward to the strategies and payoffs that would get agents there
  on their own — the way auctions (eBay) and voting systems are actually designed.
- The canonical illustration is cake-cutting. Let one greedy person both cut the cake
  *and* divide the pieces, and — Krakauer's phrase — **"your selfish interests don't
  maximize the social welfare function, the wellbeing of everyone."** Fix: **"one person
  cuts the cake, and the other person chooses."** **"If you do that then there's actually
  no incentive to take more than half,"** so the outcome becomes fair without anyone
  having to be less selfish — only the *rule* has to change.
- Applied to COVID: allocating scarce ventilators without a working market. What actually
  happened was **"this spontaneous emergence of aberrant auctions in which state
  governors were bidding against each other very inefficiently to try and save lives."**
  Maskin's alternative (the Vickrey-Clarke-Groves mechanism, in essence): buyers and
  sellers report their true costs to a central mechanism, which then sets a payment rule
  engineered so that each party's own incentive lines up with the social outcome.
- The externality example generalizes the same move: a brick manufacturer that pollutes
  is currently allowed to leave that cost off its books. A working mechanism would price
  it in — **"your cost to production are proportional to the damage to the
  environment"** — at which point the manufacturer has every incentive to cut the
  pollution, without anyone commanding them to.
- Explicitly not central planning: **"it's not the command economy that says thou shalt
  produced x levels of y."** You still choose, you can still profit — but the payoff
  structure has been redesigned so that doing the individually rational thing *is* doing
  the socially good thing.

**Antifragility angle — this one is not a stretch.** Both fixes are, structurally,
skin-in-the-game mechanisms in Taleb's exact sense. `antifragility.md` describes the
failure mode this guards against: without that discipline, agents harvest convex upside
and transfer the concave downside to someone else, which fragilizes the whole system. The
cake-cutter, under the naive rule, harvests the upside (a bigger
piece) while the other person absorbs the downside — exactly the asymmetry skin in the
game exists to remove. The fix removes it by forcing the decider to internalize the
consequence: cut-then-choose makes the cutter act as though *they* might get the smaller
piece; true-cost pollution pricing makes the polluter feel their own externality. Maskin's
mechanism design is, in effect, a general-purpose engineering discipline for restoring
that symmetry in exactly the situation where the market — which normally enforces it
through price — has stopped working.

## Essay 5 — Pamela Yeh & Ian MacGregor-Fors: animals reclaim the city, and forget how to be afraid

- The now-familiar lockdown wildlife stories — goats in Welsh streets, buffalo on Delhi
  highways, dolphins in the Bosporus — frame a real natural experiment: what happens to
  animal behavior when the human stressor is removed?
- The Galapagos tortoise is the long-run case. Free of predators for long enough, on an
  island, it goes tame. Darwin in the 1830s: **"I met an immense Turpin that took little
  notice of me."** But a 2010 study out of Spain, across six historically
  human-indifferent Galapagos species, found that exposure to tourism reversed it:
  **"about half of them respond with fear to human tourists."** The fear response
  re-evolved fast, once there was pressure selecting for it again.
- Yeh and MacGregor-Fors's own research subject is dark-eyed juncos — songbirds that had
  been moving down from the mountains into Southern California cities, well adapted to
  human presence, having **"exploited our profligacy very efficiently."** The open
  question the essay raises: with the lockdown removing that human presence, do the
  juncos drift toward tortoise-like indifference — and does that become a liability once
  humans come back?
- The flip side is dependency, not fearlessness: a macaque population outside Bangkok
  had been fed by humans around monasteries, and with humans gone, **"the food has run
  dry... they're engaging in these huge conflicts over scarcity of resources."** A
  population whose baseline was propped up by a steady artificial input had no slack once
  that input stopped.
- Michael Garfield's framing of the larger point: alongside the animals' return there is
  **"a kind of counterflow which is the rewilding of the human imagination"** — the
  recognition, forced by the pandemic, that the city was never separate from the natural
  world it displaced.

**Antifragility angle — the second-strongest fit in the episode, and it barely needs
forcing.** The tortoise case is hormesis running in reverse, almost exactly the
touristification point from `antifragility.md`: stability bought by removing volatility
is borrowed fragility. A long absence of the relevant stressor (predators, then
humans) doesn't just fail to help the tortoise — it visibly erodes the defensive trait
(fear), and the trait only comes back once the stressor returns and starts selecting for
it again. That's the turkey problem with feathers instead of scales: a long calm record
is not evidence of safety, it's the condition under which fragility silently accumulates.
The macaque case is the same logic from the dependency side — an artificially smoothed
resource stream removes the small, recoverable stressors that would otherwise keep a
population's resilience exercised, which is `antifragility.md`'s point about redundancy
run in reverse: redundancy looks wasteful in calm times but is the mechanism that turns a
shock into a gain instead of a failure — the macaques had no redundancy, only a single
dependency, and the shock became a crisis instead of a recoverable dip.

## Synthesis: which side of the exponential are you on

Three domains — epidemiology (Redner, Cris Moore), urban economics (Kempes, West), and
market design (Maskin) — converge on one shape: systems built out of exponentials need
their incentive and exposure structure engineered on purpose, because analysis alone,
however good, cannot tame the chaotic component, and a city compounds whatever structure
is already there — good or bad — faster than a smaller system would. Worth stating
plainly: Krakauer never uses the word "antifragile" and never cites Taleb anywhere in
this episode; every explicit link above between an essay and the antifragile/fragile
vocabulary is this note's own reading, not the guest's framing, applied on top of
verified transcript content rather than invented as if he'd said it. What the transcript
itself actually supports is narrower and, if anything, more interesting: five
independently written essays, from five different fields, keep landing on the same
underlying object — a process where small differences compound exponentially — and keep
discovering, independently, that the honest response to that object is structural, not
predictive. The episode ends on a purely administrative note: the series moves to a
biweekly schedule and pauses to interview SFI's Miller Scholars, with Krakauer
signaling a change in tone toward "reflecting on what we've learned."

## Solo-builder read (insights for Jens)

- **Learn to sort your own thin-data calls into the two buckets before reaching for "more
  analysis."** A lot of your calls — a channel with a handful of clicks, a funnel with
  four leads — genuinely are epistemic uncertainty, and the E26 lesson (simplest model
  the data can support) is the right tool. But a channel about to go viral, a broad-match
  leak compounding daily, or one credential's silent expiry cascading through an aligned
  stack are chaotic-uncertainty situations: no amount of extra dashboarding will narrow
  the outcome range, because the range isn't a measurement problem, it's what the
  exponential does. The tell is the same as Redner's: does more data actually shrink the
  spread, or does the spread come from the dynamics themselves? If the latter, stop
  analyzing and start capping the downside.
- **R0-as-interest-rate is a genuinely useful frame for any of your growth loops.** A
  channel or asset with an effective R above 1 — organic search authority once it's
  actually earned, a referral loop that feeds itself — compounds without fresh fuel, the
  way Redner's virus compounds without new investment. Anything with R below 1 (most paid
  channels, most cold outreach) needs constant injection just to stay flat. Worth naming,
  explicitly, which of your channels are actually in which bucket rather than treating
  "traffic" as one undifferentiated thing.
- **Superlinear scaling is the same concentration-risk lesson as the E26 note, arrived at
  a second time from a different essay — which is itself worth noticing.** The mini-PC
  running the assistant, the agent runners, and Fabrik; one Anthropic subscription behind
  nearly all of it; one distribution hypothesis behind several products — that's your
  "city": one shared substrate, so a shock at any layer propagates through all of it
  faster than it would in a smaller, less coupled system. The LiteLLM proxy is the
  engineered de-coupling move, same conclusion as before, now backed by an independent
  line of reasoning.
- **Mechanism design's cut-and-choose principle names something your quality-gate already
  does right.** An agent that writes code and also grades its own work is the "you cut,
  you also divide the pieces" failure mode — no incentive not to take the bigger,
  easier-to-report piece. The actor/critic split, and quality-gate running as a genuinely
  separate step before merge, is the fix already in place: the party that decides is not
  the same party that judges the outcome. Worth checking, deliberately, for the places
  where that separation has quietly collapsed back into one party doing both.
- **Treat a long clean run as a question, not an answer.** The tortoise lost its fear
  response not despite years of calm but *because* of them; a credential, a cron job, or
  a funnel that's "been fine for months" is not evidence it's sound, it's evidence it
  hasn't yet met its stressor. This is the same shape as several of your own documented
  near-misses (creds expiring silently, an SSH lockout, a dead calendar sync behind one
  configuration row) — the episode supplies an ecological instance of exactly that
  pattern, independently of the outage learnings you already keep.
- **The standing rule worth actually installing:** when a report — an agent's, a
  dashboard's, your own first instinct — proposes "let's get more data" in response to
  something genuinely volatile, ask first whether the uncertainty in front of you is
  ignorance-shaped or amplification-shaped. Only the first kind gets smaller with more
  data. Applied to the exponential kind, the correct move is never "analyze harder," it's
  "cap the downside and let the upside stay open" — which is a decision you can make
  today, not a forecast you have to get right.

## Quotable

- "Not the uncertainty of ignorance, but the uncertainty of the Butterfly Effect."
- "Exponentials build this other kind of radical uncertainty into our models, which has
  nothing to do with ignorance."
- "R-naught... is like the interest rate of the viral investment in its hosts."
- "The size of the epidemic could vary between a hundred times the initial number of
  infected to about 10,000 times the initial number of infected."
- "Your $500 iPhone is a trillion-dollar hyper-object."
- "A city with a million people will double the number of cases in half the time a city
  of 10,000."
- "In the city, disease transmission scales the way wealth scales."
- "These systems are coupled. It also shows us how they all break together."
- "One person cuts the cake, and the other person chooses."
- "Most of the virus is not virus. Most of the virus is, in fact us."

## Sources

- COMPLEXITY podcast S1:E32, "Exponentials, Economics, and Ecology with David Krakauer
  (Transmission Series Ep. 6)", May 11 2020, 47:28 —
  <https://complexity.simplecast.com/episodes/32/transcript> (official transcript, read
  in full)
- Essays discussed: David Wolpert, *the virus as a computer virus / the Landauer bound* ·
  Sid Redner (with a companion insight from Cris Moore), *exponentials, R0, and the
  uncertainty of the Butterfly Effect* · Chris Kempes & Geoff West, *superlinear scaling
  in cities* · Eric Maskin, *Mechanism Design when markets fail* · Pamela Yeh & Ian
  MacGregor-Fors, *animals in cities during lockdown*
