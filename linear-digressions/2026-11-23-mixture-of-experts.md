---
title: "Mixture of Experts: How Giant LLMs Get Smaller Without Being Smaller"
podcast: "Linear Digressions"
hosts: "Katie Malone with co-host (ASR: \"Phoebe\", name unverified)"
source: "https://feeds.soundcloud.com/stream/2441979675-linear-digressions-mixture-of-experts-how-giant.mp3"
feed: "https://feeds.feedburner.com/linear-digressions?format=xml"
published: 2026-11-23
captured: 2026-11-23
duration: "32:27"
transcript: "local (faster-whisper base.en, tools/podcast-transcribe.py)"
related: "2026-10-26-ai-inference-101.md, 2026-11-02-kv-cache-fundamentals.md, 2026-11-09-gpu-architecture-for-llm-inference.md"
---

# Mixture of Experts

> **An MoE model is not a small model. It is a big model of which each token touches only a
> slice.** A light router sends each token to a few "experts" in the feed-forward layers and
> ignores the rest. DeepSeek V3 has 671 billion parameters; about 37 billion take part in any one
> token. The gain is less data to move, not less model to store. Fourth part of her inference
> series, after AI Inference 101, the KV cache and GPU hardware.

**Source note:** written from a full local transcription (32:27), no speaker labels. Katie Malone
explains; the co-host asks and reads the paper examples aloud. ASR garbles read through: "Jeff
Hinton" = Geoff Hinton, "No Shazir" = Noam Shazeer, "LOM" = LLM, "make sure of experts" = mixture
of experts. The three papers are named or dated in the episode; the full titles of the 1991 and
2017 papers are my identification, not hers: Jacobs, Jordan, Nowlan & Hinton, *Adaptive Mixtures
of Local Experts* (1991); Shazeer et al., *Outrageously Large Neural Networks: The Sparsely-Gated
Mixture-of-Experts Layer* (2017). The 2021 paper she names herself: *Transformer Feed-Forward
Layers Are Key-Value Memories*.

## Insights

1. **Recap: two latency regimes.** Prefill is the first pass over the whole prompt, measured as
   time to first token. Decode then emits token after token, and the context it has to read grows
   with each one. What slows both down most is moving data in and out of GPU memory.
2. **Where the weights sit.** A transformer interleaves attention layers and feed-forward layers.
   Attention lets tokens look at each other — the conversation so far. Feed-forward layers take
   each token alone and match it against what the model learned in training. Most of a model's
   parameters live in the feed-forward layers, so that is where MoE cuts.
3. **The mechanism.** A lightweight router picks the one, two or four best experts for a token,
   often out of about 256, and sends the token only there. The rest of the feed-forward network —
   "90% maybe more" in her words — is skipped for that token. Only the chosen weights have to be
   loaded.
4. **Smaller without being smaller.** DeepSeek V3: 671 billion parameters in total, 37 billion
   active per token, roughly 5%. The full model is still stored; only the slice touched per pass
   shrinks. She calls the idea that MoE splits a big model into small ones a misconception she
   held herself. (The co-host's joke "only uses 5% of its brain" — she adds that the claim is not
   true of humans either, even though many people say it.)
5. **Experts live on different machines.** In production the experts are spread across hardware.
   The weights stay put and the token's vector travels to them. Her picture: a student doing a
   school project visits the experts in their buildings, so nobody has to *"lug their
   bookshelves"* across town. The price is communication between machines.
6. **History.** The idea dates from a 1991 paper with Geoff Hinton among the authors. It stayed
   academic because distributing it efficiently was hard. In 2017 a Google paper with Noam
   Shazeer and Jeff Dean engineered it as a distributed system. Today "MoE" in a model name
   signals the architecture.
7. **"Experts" is a metaphor.** They are not Python experts or botany experts. *Transformer
   Feed-Forward Layers Are Key-Value Memories* (2021) had graduate students inspect which input
   phrases trigger keys in a 16-layer transformer:
   - shallow pattern: phrases that end in "substitutes";
   - semantic pattern: one thing being part of another ("part of the Indian delegation");
   - semantic pattern: time ranges ("between 3 p.m. and 7").

   Shallow word-matching keys cluster in the layers near the input; semantic, concept-like keys
   in the later layers near the output — the usual picture from interpretability work.
8. **Next.** Quantization — fewer bits per number — is the topic of this week's Substack
   newsletter, not the episode.

Personal takeaways: [`insights-for-jens.md`](insights-for-jens.md).
