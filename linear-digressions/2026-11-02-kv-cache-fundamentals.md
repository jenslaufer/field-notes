---
title: "KV Cache Fundamentals"
podcast: "Linear Digressions"
hosts: "Katie Malone (solo)"
source: "https://feeds.soundcloud.com/stream/2429621733-linear-digressions-kv-cache-fundamentals.mp3"
feed: "https://feeds.feedburner.com/linear-digressions?format=xml"
published: 2026-11-02
captured: 2026-11-04
duration: "24:16"
transcript: "local (faster-whisper base.en, tools/podcast-transcribe.py)"
related: "2026-10-26-ai-inference-101.md"
---

# KV Cache Fundamentals

> **The KV cache is what makes LLMs affordable at all.** A token's key and value never change once
> computed, so they are stored and reused instead of recomputed every turn. That turns the n²
> attention cost into roughly linear cost, paid for in memory. PagedAttention (Berkeley, 2023,
> the core of vLLM) hands out that memory in small blocks on demand, like an operating system's
> virtual memory. For users it explains three habits: cached input is about 10× cheaper, a cache
> goes cold when you leave, and every model switch recomputes it.

**Source note:** written from a full local transcription (24:16). ASR garbles to read through:
"Kb cache" = KV cache, "page detention" = PagedAttention, "VLOM" = vLLM, "Cloud Code" = Claude
Code. Percentages are hers, cited from the 2023 work; not checked against the paper here.

## Insights

1. **The trick.** Without a cache, each turn recomputes attention over the whole growing
   transcript. With it, keys and values are computed once (in prefill), stored, and every newly
   decoded token appends its own K and V. *"This is the core of what makes LLM inference
   computationally tractable."*
2. **Context window ≠ KV cache.** The window is a fixed property of the model (16K → 1M tokens
   over the last years). The cache is the memory one request actually uses inside that window.
3. **Four usage regimes.** A short chat (small cache, discarded), a long multi-day chat (cache
   keeps growing), a single big request like RAG or "summarize this document" (expensive to
   build, used once or twice, then freed), and the hardest: **coding agents** — multi-hour
   sessions whose context, incl. subagents and tool calls, is resent every turn.
4. **The allocation problem.** Cache space is reserved at the first request. Reserve too much (a
   common default is ~2,000 output tokens) and memory is wasted — 20 to almost 40 % in early
   implementations; reserve too little and you evict and recompute.
5. **PagedAttention.** Reserve small blocks as the response grows, scattered anywhere in memory,
   linked by pointers so it looks contiguous. Her figures: waste can reach 60–80 % in the worst
   case; with PagedAttention under 4 %, and 2–4× the throughput at the same latency.
6. **vLLM** grew out of it: probably the most used inference engine, open source, part of the
   PyTorch Foundation, with startups spun out of the founder group.
7. **What providers do about it, using Claude Code as the example:**
   - cached input tokens are priced about 10× cheaper than cold input;
   - when you go idle (lunch), your cache is evicted for someone else's request — hence the
     nudge to clear the context on return instead of paying to recompute it;
   - `/usage` shows whether the cache is warm (a good hit rate is 90 %+);
   - **each model keeps its own cache.** Plan on an expensive model and hand off to a cheaper one
     once, fine. Alternating models turn by turn *"it's basically the worst thing you can do"*.

Personal takeaways: [`insights-for-jens.md`](insights-for-jens.md).
