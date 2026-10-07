---
title: "Mechanistic Interpretability: How Researchers Try To See Inside Models"
podcast: "Linear Digressions"
hosts: "Katie Malone (solo)"
source: "https://feeds.soundcloud.com/stream/2413089360-linear-digressions-mechanistic-interpretability.mp3"
feed: "https://feeds.feedburner.com/linear-digressions?format=xml"
published: 2026-10-05
captured: 2026-10-07
duration: "29:21"
transcript: "local (faster-whisper base.en, tools/podcast-transcribe.py), 438 segments"
---

# Mechanistic Interpretability

> **Every trust tool of this season looks at the model from the outside; this one opens it —
> and it does not reach the models people use.** Chain of thought can be unfaithful, an LLM
> judge is *"outsourcing understanding of one black box algorithm to another black box
> algorithm"*, constitutional AI only shapes training. Mechanistic interpretability reads
> weights and activations instead. Two limits decide what it is worth today: the methods work
> on **small toy models**, and for the questions that matter — is the model lying, is it
> misaligned — **there is no ground-truth label** to check an interpretation against. Her
> verdict: *"the methods to understand the models are pretty well behind the models
> themselves"*. Use it as one more imperfect probe, not as the answer.

**Source note:** written from a full local transcription (29:21). Season finale: Katie
announces a break of *"a couple of weeks"*. ASR garbles names: "Chris Ola"/"Chris Olan" is
Chris Olah; "Caitlyn Joo" is Kaitlyn Zhou (episode of 10.08.); "polysematicity" is
polysemanticity; "hugging phase incident" is quoted as heard — which incident she means is not
clear from the audio.

## Why look inside at all

Accuracy and interpretability trade off. A linear regression explains itself through its
coefficients; an ensemble of a hundred voting trees already doesn't; an LLM even less. The
outside methods of this season each fail in a known way (unfaithful chain of thought, judge
biases, alignment that only acts during training). Her analogy: asking a person why they
decided is all words; a probe on the brain might show a signal *"that tells you if that
person is lying to you"*.

## The history in four steps

1. **2017, vision models (Chris Olah, then Google Brain).** Early layers learn edges, blobs,
   gradients; later layers combine them into parts we recognise, like a steering wheel for
   the class "car".
2. **2020, "Zoom In: An Introduction to Circuits".** Features are the unit of analysis, the
   wiring between layers forms **circuits**, and similar circuits form in different
   architectures — the method might generalise.
3. **2021, small transformers at Anthropic → induction heads.** After "Mr. and Mrs. Dursley",
   the next "Mrs." makes the head look back to where "Mrs." appeared and copy what followed:
   "Dursley".
4. **2022, "Toy Models of Superposition".** The wall: a model learns more concepts than it has
   neurons, so neurons carry several concepts each (**polysemanticity**). A firing neuron could
   be *"the cat neuron"* or *"the dump truck neuron"* — reading single neurons tells you nothing.

## Two methods

- **Sparse autoencoders.** A normal autoencoder compresses through a narrow middle; a sparse
  one goes the other way, a **wider** middle layer, trained to reconstruct the target model's
  activations at one point. The wider space pulls the overlapping concepts apart toward one
  concept per unit (monosemanticity) — *"In real life, it's not necessarily going to be just
  quite that tidy"*.
- **Circuits with causal tests.** Isolate the circuit that produces the next token, then
  intervene: transplant it into a control network or ablate it, and check whether "Dursley"
  appears or disappears. Her analogy is the AgRP neurons in the mouse hypothalamus — perturb
  them and a hungry mouse ignores food, a full one keeps eating. That turns correlation into
  a causal claim. Caveat she states herself: *"they're being done on very much smaller toy
  models"*.

## The two limits

1. **Scale.** The models that can be interpreted and the models in production are
   *"dramatically different"*; whether the methods scale up is unclear.
2. **No label for the important questions.** For next-token prediction the output is the
   ground truth. For lying or misalignment there is none. Anthropic's paper "Auditing
   Language Models for Hidden Objectives" works around it by **implanting** a hidden goal
   (exploit blind spots in its own reward model) and asking four blind research teams to find
   it — **three of the four succeeded**, using sparse autoencoders plus behavioural methods.
   The catch: you can only check because you planted the behaviour yourself. In the wild,
   *"how do you know in general whether the model is lying to you"*.

## Her conclusion for the season

Combine the imperfect probes (chain of thought, LLM judge, interpretability); invest in
alignment upfront, because hoping to catch misalignment afterwards is *"Not a great idea"*;
and as a user keep treating models as systems that are *"not fully trustworthy, not fully
foolproof"*. She says this is why the topic took about ten episodes instead of one.

## Insights for me (Jens) — my connections, flagged as mine

- **My setup already follows her conclusion.** Nothing in the assistant trusts the model's own
  account: `verify-quotes.py` checks quotes against the transcript, the PR rules say the diff
  beats the commit message, `check-links.py` resolves every link. These are outside probes
  with a ground truth (the source text, the diff). That is the one thing interpretability
  lacks for "is it lying" — so for my use cases, output checks against a source remain the
  stronger tool.
- **The audit study is the pattern for testing my own guards.** Plant a known fault, then see
  whether the guard finds it. The test rule "red before, green after" is the same idea at small
  scale.
- **Nothing here to build or buy.** The methods are research on toy models; no product
  decision follows.
