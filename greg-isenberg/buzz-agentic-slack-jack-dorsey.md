---
title: "Jack Dorsey's Buzz: Clearly Explained (and how to use it)"
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg"
guest: "Vinny (Wasp / OpenSaaS)"
source: "https://www.youtube.com/watch?v=_jGSgzBkzrY (published 2026-07-28)"
captured: 2026-08-02
related: "marketing-agents-too-good-cody-schneider.md (the agent-as-decision-loop pattern), making-money-loop-engineering.md (loops), obsidian-claude-code-personal-os.md (context as the asset)"
---

# Buzz — Slack where the agents are members, not integrations

> **Buzz is Block's open-source chat app (Jack Dorsey), built on the Nostr protocol,
> in which agents are first-class team members rather than bot integrations.** Two
> features are the actual news. **(1) The harness under any agent is swappable —
> Claude Code, Codex, Goose, open code — and your entire chat context comes with you
> when you switch.** That kills model-migration cost. **(2) Shared compute:** turn it
> on, download a local model, and your whole team uses that one machine's model from
> their own laptops. Around those: Git integrated with parallel worktrees and its own
> hosted remotes on your relay, audio huddles where the agent has the chat context,
> and public channels so a user's bug report can be handed to an agent in the same
> thread. Honest status: **beta, maybe alpha** — workflows and recurring tasks did not
> land, and it is slower than working directly in Claude Code because of the relay
> round trip. Sweet spot: solopreneurs and small teams, not complex software
> engineering. Greg's framing is the thing worth keeping: **your chat tool has quietly
> become your context hub, and models are only as good as the context they can see.**

## What it actually is

- "Slack with agents inside." Slack can host agents too — by adding an integration.
  In Buzz **they're first-class citizens: members of your team, not add-ons.** You get
  a set of default agents and can edit or add your own; agent instructions are just a
  system prompt.
- It runs on **relays** — servers you host yourself or have hosted for you by Block.
  Your chats, your data, the pushes to your agents: all of it lives on your relay.
- It is **open source, built on an open protocol (Nostr)**. Vinny's argument for why
  that matters is the lock-in one, not the ideology one: whatever you build inside a
  proprietary chat tool is your accumulated thinking, and if you ever want to leave,
  *"it's really hard, or it might not even be possible, to take all that data with
  you to some other platform. So you just stay there and you're stuck with them."*

## The two features that are the real news

### 1. Swappable harness, portable context

The harness under any agent can be changed — Claude Code, Codex, Goose, open code,
via adapters — **and nothing is lost in the switch.** All the context in that agent's
chats, everything you've been working on, comes with it to the new harness and the new
model.

Vinny names the pain this solves: *"AI moves at a breakneck pace. Today it's this
model, the next day it's the other model. I get model fatigue… I don't even want to
hear the good things about model X because I'm still over here using model Y."* Buzz
sits as a layer above that churn.

Two adjacent facts:

- **Globally installed skills work.** If your Claude Code skills and skill folders live
  in the global directory rather than being project-specific, Buzz agents can use them.
  You don't rebuild that library.
- **Git is integrated properly.** Agents create feature branches and work in **parallel
  worktrees** — copies, not your local files, so several can run at once. Buzz also has
  **its own hosted Git on your relay** alongside GitHub integration. Vinny's read:
  *"they're trying to take on GitHub as well."*

### 2. Shared compute

In settings, enable compute and it suggests local models you can download to your
laptop or desktop — **and share with the other members of your team.** Everyone chats
from their own machine; the model runs on one.

The worked scenario: you're a student with an idea, no time, no help, and no budget for
several unlimited-tier plans. Pool with friends, buy one decent machine — a Mac Studio
or a beefy Mac mini — turn on shared compute, and all of you use it.

## The rest of the surface

- **Audio huddles with agents.** You can voice-chat with an agent, and it carries the
  context of the whole written thread into the huddle. Vinny hadn't tested it. Greg's
  reason for caring: *"what I'm missing from building in the AI age is it feels very
  much like back and forth, back and forth. What's cool about huddles is live."* His
  stated holy grail is being able to FaceTime an agent.
- **Public and private channels.** Private for the team, public for your community.
  Which produces the genuinely new workflow: someone using your product posts a bug in
  the public channel, and fixing it is *"just an @ away"* — you tell an agent to tackle
  it, in the thread where it was reported, in front of the person who reported it.
- **Bitcoin, not yet.** Nostr is tightly coupled to Bitcoin Lightning. Nothing is
  integrated today; Vinny's guess is agents paying for compute, or people tipping
  people for work. Flagged here as speculation because he flags it as speculation.

## The two demos, and which one matters

**Demo 1 (impressive, shallow):** *"Spin up a simple CRM app using the Wasp full-stack
framework and deploy it to Railway for me."* It built it, pushed to a remote on the
relay, deployed it live, and sent back screenshots and links — before he had even
checked what it was doing.

**Demo 2 (the one to copy — a closed loop):** a tweet leaderboard for his team's
Twitter performance.

1. Agents build the full-stack app that collects the data.
2. He then has them build a **publicly facing API** on top of it.
3. A **workflow** hits that API daily and posts the numbers back into a Buzz channel.
4. He replies **in that channel** — *"what's the common thread between my successful
   tweets this week?"* — and the agent answers with the stats already in its context.

The point is step 3→4. The output of the app becomes the input to the agent's context
without a human exporting a CSV. Vinny's contrast: *"I used to be literally exporting
tweet data or copying and pasting it into ChatGPT in the browser."*

The finding it produced, as an example of what the loop is for: his top two tweets
cleared a million impressions each while a "this sucked" theme collectively got ~88,000
— **"novelty gets you reach, friction gets you engagement."**

Greg's reason for caring about this category: *"this is the boring stuff that every
business has, and if you can figure out how to have some unfair advantage here, it's
what separates a good business from a bad business."*

## Setup advice worth stealing regardless of Buzz

- **Pin agents to model tiers.** Vinny pinned one agent to a frontier model and another
  to a mid-tier one, *"because there are certain tasks that I don't need to use the
  power of [the frontier model] and burn through tokens so fast."* Cost discipline
  encoded in the agent roster rather than remembered per task.
- **Build a router agent.** He made a "Chief Agent Officer": once you have a copywriter,
  a brainstormer, a code reviewer and so on, you stop remembering who's who and
  **delegate the delegation** — "I have this task, who's best for it?"
- **Prompt normally.** Asked for special phrasing tricks: no. *"They're pretty good at
  pulling out the intent behind your questions these days. Just have a conversation
  with them like a normal person."* The leverage is the context they already hold, not
  the wording.

## Where it isn't there yet — stated plainly

- **Beta, possibly alpha.** *"Early preview software. Some things don't work that
  great."*
- **Workflows and recurring tasks "weren't really landing great."**
- **Slower** than working directly in Claude Code or Codex, because of the round trip
  to your relay.
- **Not for complex software engineering.** Good for solopreneurs, small teams,
  iterating on small software and small ideas.

## The strategic read

Greg's closing frame is the reusable one:

> *"A lot of us haven't realized how much of a context hub Slack and products like that
> have become. And we're learning that if you want to get the best out of any of these
> models, you need to have the most amount of context possible. What's cool about Buzz
> is it's basically saying: okay, we recognize that this is your context foundation,
> and we're going to help you pivot in a bunch of directions from it."*

Vinny adds the comparison to the previous wow-moment: OpenClaw showed agents could do
real productive work, *"and I have the feeling that it was missing something — this
shared context, because we're working in teams. Teams might even just mean your other
agents."*

Greg's own verdict is deliberately modest, and he declares no affiliation with Buzz,
Block or Dorsey: it's close, not there. But *"there is no losing in this situation"* —
either you switch, or you learn something and go configure Slack better. And the meta
point he keeps returning to: **the people who can see around the corner are the ones
who already have their hands dirty with the tools of the next era.**

---

## Relevance for a solo operator running agents

**1. The swappable-harness idea is the same bet as putting one proxy in front of every
model — and Buzz shows what the missing half is.** Owning a single endpoint gets you
model independence for *calls*. Buzz's contribution is that the switch is worthless if
the **context** doesn't come with it. If a proxy setup already exists, the open question
it raises is not "which model" but "what survives a model swap" — the skills directory,
the memory files, the conversation history. Anything that only exists inside one
vendor's session is the part that will actually pin you.

**2. Demo 2 is a template, and it does not require Buzz.** App → public API → scheduled
job posts numbers into the channel where you already talk → you ask questions with the
numbers already in context. Any assistant with a chat surface and a cron can do that.
The upgrade over "pull a report when I remember to" is that **the measurement arrives
in the place where decisions get made**, unprompted. Worth applying to whichever single
number is currently being asked for by hand.

**3. Pinning agents to model tiers is a rule, not a preference.** A roster where each
agent has a fixed model turns "use the best model per task, and do less on the
expensive one" from a judgement call made under time pressure into a configuration
decision made once, calmly.

**4. Public channel + agent = support that fixes.** The bug-report-to-fix-in-one-thread
pattern is the one genuinely new workflow here. It only works if there is a public
place where users already are — which for most solo products is the thing that doesn't
exist yet. Note it as a reason to have one, not as a reason to install Buzz.

**Two things not to repeat as fact:** Lightning payments are **not** integrated — that
was Vinny's guess about where Nostr coupling leads. And "Slack killer" is the
headline's word; both of them spend the episode qualifying it.
