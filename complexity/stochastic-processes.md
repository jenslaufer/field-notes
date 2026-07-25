---
title: "Stochastic processes outside physics — the working zoo"
concept: "What a stochastic process is, the eight process types that carry finance, biology, operations, social dynamics and modern ML, and the five load-bearing concepts that transfer between all of them"
sources: "Distilled from the standard canon: Ross 'Introduction to Probability Models'; Mandelbrot 'The (Mis)Behavior of Markets'; Taleb 'Fooled by Randomness'; Ole Peters' ergodicity-economics papers (Nature Physics 2019)"
captured: 2026-07-03
type: concept distillation
---

# Stochastic processes outside physics — the working zoo

> A random variable is a photograph. A stochastic process is a **film**: a whole
> random path unfolding in time. Almost every costly mistake people make with
> randomness comes from answering a path question with a photograph answer —
> quoting the average of all films when you will only ever live through one.
> Physics invented much of the math (Brownian motion, diffusion), but the ideas
> earn their living in finance, biology, operations, social dynamics and machine
> learning — anywhere something unfolds under noise and you must act before the
> ending is known.

## The 30-second version

- **Definition without ceremony:** a stochastic process is a collection of random
  variables indexed by time — the value now, the value next step, and a rule
  (usually probabilistic) connecting them. You study the *paths* it can take and
  the distribution over those paths.
- **The two questions that matter:** (1) What does a *typical single path* do?
  (2) What does the *ensemble of all paths* do on average? These can disagree
  violently — that disagreement is ergodicity breaking, and it is the single most
  practical idea in the field.
- **Why "outside physics" is the right frame:** in physics the particles don't
  care. Outside physics, *you are one of the paths* — a portfolio, a company, a
  patient, a queue customer. Ruin, path dependence and time averages suddenly
  matter more than ensemble means.

## The zoo — eight processes and where they earn their living

1. **Random walk** (sum of independent steps) — the null model of everything.
   Prices, cumulative profit/loss, A/B-test gaps, sports scores. Two anti-intuitive
   facts: it drifts arbitrarily far from zero (no "law of averages" pulling it
   back), and lead changes are much rarer than intuition expects (arcsine law —
   one side of a fair game spends most of the time ahead). If your KPI is a
   cumulative sum of noisy increments, most of the "trend" you see is this.
2. **Markov chains** (future depends only on the present state) — the workhorse.
   PageRank is a Markov chain over the web graph; credit-rating migration,
   customer-lifecycle models (lead → trial → paying → churned), board games,
   weather models, and language models are all "state → transition probabilities
   → next state". The Markov property is a *modeling choice about what you may
   forget* — and most systems are more Markov than they look once you pick the
   right state.
3. **Poisson process** (independent arrivals at rate λ) — the physics of waiting.
   Support tickets, insurance claims, conversions from an ad campaign, server
   requests, typos, machine failures. Its signature is that **true randomness
   looks clumpy**: gaps and clusters are expected, not anomalies. The practical
   consequence: with a low rate, a long stretch of zeros carries almost no
   information — you cannot judge a rare-event channel on a handful of trials.
4. **Branching processes** (each individual spawns a random number of offspring)
   — epidemics, viral growth, chain letters, nuclear reactions, family names
   dying out. One number governs everything: the mean offspring count (R₀ in
   epidemiology, K-factor in growth). Below 1, extinction is certain; above 1,
   extinction is still *possible* but a fraction of paths explode. Virality is
   a branching process, which is why "it either dies fast or compounds" — there
   is no stable middle.
5. **Martingales** (fair game: expected tomorrow = today) — the theory of why
   you can't beat noise with cleverness about *when to stop*. The optional
   stopping theorem says no exit rule turns a fair game into a profitable one
   (with bounded stakes). Doubling-down "Martingale" betting systems fail
   because of exactly this. Modern option pricing is built on finding the
   measure under which prices *are* martingales — the fair-game frame is that
   load-bearing.
6. **Multiplicative growth / geometric Brownian motion** (returns compound,
   noise multiplies) — wealth, portfolios, startups, anything that grows in
   percent. This is where ensemble and time averages split hardest: positive
   expected return per step is compatible with almost every single path going
   to zero (variance drag: time-average growth ≈ mean − σ²/2). Kelly sizing,
   "volatility is a tax", and my /ergodicity/ simulator all live here.
7. **Mean-reverting processes** (Ornstein–Uhlenbeck: pulled back to a level) —
   interest rates, pairs trading, body temperature, ad-auction prices, most
   operational KPIs. The trap runs the other way here: apparent "improvement
   after intervention" is often just regression to the mean — extreme
   measurements are followed by ordinary ones with no cause at all.
8. **Reinforcement / preferential attachment** (Pólya urn: success breeds
   success) — followers, citations, app-store rankings, GitHub stars, "winner
   takes most" market shares. Early random luck gets locked in and amplified;
   the resulting inequality is structural, not meritocratic. This is the process
   that makes distribution a cold-start problem: attention flows to where
   attention already is.

**Where ML sits:** modern AI is stochastic processes end to end — SGD is a random
walk on the loss surface (the noise is a feature: it escapes bad minima), MCMC
samples by running a Markov chain whose stationary distribution is the answer,
autoregressive LLMs generate text as a (very high-order) Markov chain, and
diffusion models literally learn to run a noising process *backwards*. Knowing
the zoo is knowing why these architectures look the way they do.

## The five concepts that transfer everywhere

- **Ergodicity** — does the time average of one path equal the ensemble average
  across paths? For additive processes, roughly yes; for multiplicative ones,
  no. Every "the expected value is positive, so do it" argument silently assumes
  ergodicity. Ask: *do I get the average, or do I get my path?*
- **Stationarity** — do the statistical rules stay constant over time? Only then
  is history a guide. Most real-world series (markets, channels, platforms) are
  non-stationary: the process that generated your old data is not the process
  you're betting on now. Backtests die here.
- **The Markov property** — what is the minimal "state" that makes the past
  irrelevant? Powerful as a modeling razor: if you carry the right state, you
  can forget the history. (And its failure mode: hidden state makes systems
  look random when they're just under-observed.)
- **Absorbing states** — states you cannot leave: ruin, death, churn, a burned
  reputation. Gambler's ruin: in a fair game against a much larger bankroll,
  *you* go bust with near-certainty — the boundary, not the odds, decides. Any
  positive-expectation bet changes character completely once a path can hit an
  absorbing barrier. Survival first is not a proverb, it's a theorem.
- **Tails** — thin-tailed processes (Poisson, Gaussian) are tamed by averaging;
  fat-tailed ones (wealth, virality, city sizes, word frequencies) are dominated
  by their largest single event, and sample means converge slowly or lie.
  Before averaging anything, ask which regime generated it — Mandelbrot's point
  about markets, Taleb's about everything else.

## Solo-builder read (what this changes for my work)

- **The concepts family already teaches half the zoo — now I can name the other
  half.** /ergodicity/, /sequence/, /compounding/ = multiplicative processes and
  path dependence; the feedback-loop sims = dynamics with noise; /uncertainty/ =
  distributions. Open, highly teachable gaps with strong predict-then-reveal
  material: **gambler's ruin / absorbing barriers** ("fair game, certain ruin —
  guess how long you survive"), **the Pólya urn** ("two identical products, one
  ends with 80% share — pure luck locked in"), and **Poisson clumping** ("here
  are 100 arrivals: which strip is random, which is human-faked?" — people
  reliably fake it too evenly). Each is a one-evening build on the existing
  scaffold, and each is a stochastic process, so the note doubles as a build
  backlog.
- **The fingrab verdict rule is Poisson thinking, formalized.** Judging a
  low-rate channel (conversions at small λ) on ~30 clicks is asking a photograph
  question of a film: at plausible conversion rates, weeks of zeros are the
  *expected* path, not evidence of death. The discipline — fix a clean
  measurement window first, then judge on one number — is exactly how you treat
  a rare-event arrival process. Corollary with teeth: the kill threshold should
  be set in *expected conversions* (spend × plausible rate), not in gut-feel
  days.
- **Distribution is hard because attention is a Pólya urn.** Preferential
  attachment says the cold start is not a skill deficit — it's the structural
  regime of every attention market. Two honest responses: buy your first
  attention (paid search = skipping the urn's early rounds) or make repeated
  cheap draws and let one lock in (the serendipity lane, measured at the input).
  Both lanes of the Tuesday routine are answers to the same process.
- **Non-stationarity is the epitaph of the freelance market call.** "My last
  three applications all converted to permanent-position offers" was the
  process announcing its rules had changed — old base rates (what worked in
  2021) were samples from a different process. When a channel's *generating
  process* shifts, more effort on old data is noise-chasing.
- **Absorbing states are the real risk frame for the runway.** The withdrawal
  model (net-withdrawal Monte Carlo) is a first-passage problem: the question
  is never "what's the average end wealth" but "which paths touch zero, and
  when". Spending flexibility works because it moves the absorbing barrier —
  same expected spend, radically fewer absorbed paths.

---

**Sources & going deeper:** Sheldon Ross, *Introduction to Probability Models*
(the standard applied text — Markov chains, Poisson, queues, with worked
examples from operations and biology) · Benoît Mandelbrot, *The (Mis)Behavior
of Markets* (why market processes are wilder than Brownian) · N.N. Taleb,
*Fooled by Randomness* (the zoo's failure modes in real decisions) · Ole
Peters, "The ergodicity problem in economics", *Nature Physics* (2019) — the
cleanest short statement of time vs. ensemble averages. If you only read one:
Peters' paper; if you only build one: gambler's ruin.
