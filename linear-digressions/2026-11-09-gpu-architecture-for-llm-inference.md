---
title: "GPU Architecture for LLM Inference: Memory, Bandwidth and Hardware Explained"
podcast: "Linear Digressions"
hosts: "Katie Malone (solo)"
source: "https://feeds.soundcloud.com/stream/2434023153-linear-digressions-gpu-architecture-for-llm.mp3"
feed: "https://feeds.feedburner.com/linear-digressions?format=xml"
published: 2026-11-09
captured: 2026-11-19
duration: "19:38"
transcript: "local (faster-whisper base.en, tools/podcast-transcribe.py)"
related: "2026-10-26-ai-inference-101.md, 2026-11-02-kv-cache-fundamentals.md"
---

# GPU Architecture for LLM Inference

> **Prefill wants compute, decode wants memory bandwidth, and one chip is rarely great at both.**
> A GPU holds data in tiers — tiny and fast next to the processor, larger and slower further out —
> and inference is the art of keeping the processor fed. Third part of her inference series, after
> AI Inference 101 and the KV cache.

**Source note:** written from a full local transcription (19:38). ASR garbles read through:
"Sarah Ross" = Cerebras, "trainee or training to" = Trainium 2, "Ferrantia too" = Inferentia 2,
"Vira Rubens" = Vera Rubin, "grok with a Q" = Groq (not xAI's Grok). All figures are hers and
rounded; she labels the memory figures as H100 numbers. Prices are her estimates.

## Insights

1. **Two regimes.** Prefill processes the whole prompt in parallel and is compute bound — you
   want FLOPs. Decode emits one token after another and is memory-bandwidth bound. *"it's just
   really hard for one chip to be great at both."*
2. **Why GPUs at all.** Built for video games: many simple calculations at huge scale, one per
   pixel. Then crypto mining, then deep learning (AlexNet, 2012). Large matrix multiplications
   are the same shape of work. A CPU is more flexible but much smaller in scale.
3. **The memory ladder (H100 figures).**

   | Tier | Where | Bandwidth | Size |
   |---|---|---|---|
   | SRAM | on the chip | ~20 TB/s | ~50 MB |
   | HBM | on the board | 3–4 TB/s (~6× slower) | ~80 GB |
   | NVLink | another GPU, same board | 1–2 TB/s per GPU | the neighbour's memory |
   | InfiniBand | another board | slowest hop, still faster than Ethernet | the rest of the data center |

   Each step out gives more capacity and costs latency. An H100 board carries eight GPUs.
4. **Hardware by tier.**
   - Her MacBook Air: ~8 GB for the GPU, ~250 GB/s. Most LLMs do not fit.
   - NVIDIA DGX Spark: 128 GB, 273 GB/s — similar bandwidth to the laptop, far more memory.
     $5–10K; runs models up to about 200B parameters locally.
   - H100: 80 GB HBM, less memory than a Spark but much faster data movement; the data-center
     workhorse, wired together in numbers.
   - Vera Rubin (second half of 2026): a whole rack, hundreds of thousands of dollars,
     200–300 GB HBM, ~20 TB/s in aggregate.
5. **Inference-specific chips.** Groq optimises the slow tail of prefill: P99 time to first
   token sits about 1.5× above P50, against 3–5× on other systems. Cerebras builds inference
   hardware; Google has the TPU; AWS splits training (Trainium 2) from inference (Inferentia 2).
   NVIDIA uses the same chips for both, with spec tweaks.
6. **Disaggregated serving.** Run prefill and decode on different machines. The first, with the
   biggest processors, computes the KV cache and ships it over the fast network; the second
   decodes. More complex, but each machine does the work it is built for.

Personal takeaways: [`insights-for-jens.md`](insights-for-jens.md).
