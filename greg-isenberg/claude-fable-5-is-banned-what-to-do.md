---
title: "Claude Fable 5 is BANNED. What to do?"
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg"
source: "https://www.youtube.com/watch?v=bdhUBBACglw"
captured: 2026-06-15
---

# Claude Fable 5 is BANNED. What to do?

> A solo, recorded-in-real-time reaction to Fable 5 being disabled overnight. The
> frame: the most powerful model on Earth vanished one government letter later, so
> the lesson is bigger than one ban — **own a part of your stack that nobody can
> take away**. The episode is a hands-on primer on local models (what, why, which,
> what hardware) plus five startup ideas that only exist because intelligence now
> runs on your desk for free.

## What happened, and the real lesson

Greg's weekend was planned around building a new idea on Fable 5. **Friday 5:21 p.m.**
the US government sent Anthropic a letter; **by Friday night the model was gone,
disabled for everyone — no warning, no appeal.** His takeaway isn't "cloud bad."
Frontier cloud models are still the smartest tool available and he uses them daily.
The point is **rented access can be revoked** — by a government, a policy change, a
price hike, or a terms violation you didn't read.

**The analogy that anchors the whole episode:** electricity. Most of the time you're
happy on the grid — cheaper, easier, someone else maintains it. But the truly
resilient keep **a generator in the garage** for when the hurricane hits. Local
models are that generator. "This is the weekend I finally bought the policy."

The "local models are garbage" objection is outdated — the switch flipped **~6 months
ago** (was true two years ago, maybe one). Today a model on a gaming GPU or a decent
Mac is **good enough for ~80% of what people use ChatGPT/Claude for**.

## What a local model is (kept deliberately simple)

An AI model that runs **entirely on your own computer** — no internet, no API key, no
per-token cost, nobody watching. Download the file once; from then on it's yours and
runs like a video game or photo editor would. Three things you get that cloud can't
give:

1. **Privacy** — data never leaves the machine. Not just a personal nicety: it's the
   unlock for selling to **healthcare, legal, finance** — industries that legally
   *cannot* send data to a third-party API.
2. **Zero marginal cost** — after the (increasingly expensive) hardware, every query
   is free and unlimited. Run it 24/7 for a month and the only bill is electricity.
   Changes the math on a whole category of products.
3. **Nobody can turn it off** — works whether the company that made it still exists,
   whether a government likes it, whether your internet is up. Works on a plane, in a
   bunker.

**The honest trade-off:** local models are generally a notch below the absolute
frontier. The biggest open models *can* match cloud but need serious ($5–20K)
hardware. The reframe: **you don't need frontier intelligence for most tasks — you
need good-enough intelligence that's private, free, and always on**, then match the
right model to the right job. That matching is itself the new skill.

## The learning path (in this exact order)

Most people get the order backwards — hunting for the perfect model before they can
run one.

1. **Runtime first.** The program that runs models on your machine. Two names:
   **Ollama** (command-line; the developer favorite, one command to run) and **LM
   Studio** (real GUI with a model browser, no scary terminal — start non-technical
   people here). Either gets you a running model in 10–20 minutes.
2. **Match model to hardware.** Size is measured in billions of parameters; bigger =
   smarter but also more memory. **The single most useful mapping in the episode:**

   | Model size | Hardware | Feel |
   |---|---|---|
   | **4B** | runs on basically anything — an 8 GB laptop, even many phones | baseline |
   | **12B** | the sweet spot for a **16 GB RAM** machine — *"where most people should live"* | solid daily driver |
   | **27–35B** | a good Mac with **30 GB+** or a dedicated GPU | "genuinely capable" |
   | **70B+** | a maxed-out Mac Studio or a dedicated box (e.g. **NVIDIA DGX Spark, 128 GB unified memory**) | frontier-adjacent |

   On the DGX Spark: 128 GB memory, stays on 24/7, runs Linux — becoming the default
   "AI box on your desk." Leave the model running and **connect to it from your phone**;
   your desk becomes a mini data center. (He notes he's not affiliated with Nvidia.)
3. **Know which model for which job** — the four to know:
   - **Qwen 3 / new 3.6 series** (Alibaba). Best all-around for most people. Strong at
     coding, strong multilingual, clean commercial license, 27B & 35B versions. Punches
     above its weight — outperforms previous-gen models 4× its size. *"If you only learn
     one, this is probably the one."*
   - **DeepSeek.** Strong at hard thinking and coding. Heads-up: reasoning models
     **think for 10–30 seconds** before answering — that's normal, not a hang.
   - **Gemma** (Google). Runs remarkably small — a version fits in **16 GB RAM** / on a
     phone — with clean, beautiful writing. *"If I were Google I'd be launching a new
     Gemma right now to take advantage of this moment."*
   - **Llama** (Meta). The backbone of the open ecosystem: huge community, tons of
     fine-tunes and tutorials, runs almost anywhere. When in doubt, there's a Llama for
     your situation.
4. **Quantization** — the under-discussed trick. Shrinks a model to run on weaker
   hardware with barely any quality loss. Analogy: a raw model is an uncompressed photo;
   quantization is **saving a high-quality JPEG** — much smaller, eye can't tell. Labels
   like **Q4 / Q5** are the compression level; **Q4 roughly halves the memory** a model
   needs with minimal loss. This is how a model that "needs a server" runs smoothly on a
   laptop — it makes your hardware do roughly twice as much.
5. **Connect it to an agent.** Chatting is cool; the real unlock is pointing an *agent*
   at your local model. He uses **Hermes** (a desktop agent app he covered last week) —
   built to run locally and never stop. Point a Hermes profile at your local model and
   you get an agent that **runs free, runs offline, remembers everything, writes its own
   skills**, and which you can message over Telegram while the heavy work runs on the box.

## Pro moves (what separates pros from tourists)

- **Context window is your real local constraint.** Cloud hands you a giant context for
  free; locally, context costs RAM. Keep sessions **tight** — don't dump your whole life
  into one thread or the machine chokes (and you'll wrongly conclude "local is bad").
- **Give the model tools.** A small local model with web search, file access, and
  code-execution **beats a giant model with none**. The capability gap closes fast.
  *"The model is the engine; the tools are the wheels."*
- **Known quirk (June 2026):** local models sometimes *forget their tools* mid-session.
- **Run local vs. cloud side by side for a week.** Fastest way to build the instinct for
  what to run where — you'll be shocked how often the free 12B is good enough and you
  stop reaching for the expensive option.

## Five startup ideas that only exist now

1. **On-device AI for regulated industries.** Healthcare, legal, finance have money and
   AI-solvable problems but **legally can't send data to a cloud API**. A product where
   the model runs entirely on the customer's device opens a market cloud competitors
   can't enter. Privacy constraint = your moat.
2. **"Your data never leaves" remakes of existing cloud tools.** Take any popular cloud
   AI product (notetakers, meeting summaries, document analyzers) and build the local
   version. Same product, but the pitch is *"nothing you give us touches the internet"* —
   slapped onto the landing page. Sell to lawyers, doctors, therapists, anyone handling
   sensitive documents.
3. **Air-gapped agent for sensitive operations.** Some businesses can't be online at all
   — defense contractors, certain financial operations, anyone paranoid about leaks. An
   agent that runs fully offline on local hardware. Note the nuance: even a *non*-sensitive
   industry can have a sensitive *operation* — that's the niche.
4. **Offline AI for places with no internet.** Ships, planes, rural clinics, field
   operations, disaster zones. Useful agents with zero internet is a product the entire
   cloud industry simply can't serve.
5. **Resilience-as-a-service.** After this weekend every serious company is asking "what
   happens to our AI workflows if our provider gets cut off?" Sell the answer: a fallback
   layer that kicks in when cloud models disappear. **Insurance against exactly what
   happened to Fable 5.**

## Throughline

The lesson isn't "cloud bad, local good" — it's **don't build your entire life on
something that can disappear with a single letter.** Own a layer of your stack. Keep
the generator in the garage. Local models are the insurance, and for 60–80% of routine
tasks they're already good enough across a huge range of use cases. The call to action:
don't just nod — download Ollama or LM Studio, pull Qwen 3, point an agent at it, take
one real task, and force yourself to do it **entirely local**. *"Go build something
today that nobody could turn off."*
