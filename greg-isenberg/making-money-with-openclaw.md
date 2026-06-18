---
title: "Making $$$ with OpenClaw"
podcast: "The Startup Ideas Podcast"
host: "Greg Isenberg"
guest: "Nick Vasilescu (Orgo — @nickvasiles)"
source: "https://www.youtube.com/watch?v=i13XK-uUOLQ"
captured: 2026-06-18
---

# Making $$$ with OpenClaw

> Nick Vasilescu shows how people turn **OpenClaw** (the open-source computer-use
> agent) into real revenue: live client deployments, **sub-agents + parallelization**
> for throughput, and a **design-thinking value-vs-effort** framework for picking
> what to automate. They build a **TikTok trend-hunting agent from scratch** on
> camera. Thesis: viral Twitter demos are toys — the money is automating one
> specific end-to-end business workflow for a paying client. **Agents are the new SaaS.**

## Getting set up (barrier ≈ zero)

- **Install OpenClaw on a VM via Orgo** — one curl command in the terminal,
  workspace ready in under a minute.
- **Orgo is optional.** Manus, Kimi, a Mac Mini, or any setup works.
- **Spin up a fresh client workspace in minutes** — isolated per customer.

## Find the wedge

- **Skip the toyish viral demos.** The real money is a *specific* workflow inside
  a business.
- **Example wedge:** download product data from a legacy platform and upload it
  into a **Zoho CRM** — automated end to end.
- **The wedge is the whole business model** — one painful, repeated, boring
  workflow you fully own.

## The Upwork hack (cold-start clients)

- **Zero clients? Start on Upwork.** People post **$500–$5,000 jobs** for AI
  workflow automation, desktop automation, RPA replacement — right now.
- **Fulfillment loop:** find the job → give context to OpenClaw or Claude Code →
  build a demo → submit the proposal. A lead-generation machine.
- **Automate the hunt itself:** Nick spawned sub-agents to scrape Upwork jobs,
  build demo proposals, and pick the best one — automatically.

## Sub-agents & parallelization

- **OpenClaw spawns up to 8 sub-agents,** each with its own computer.
- **Two strategies:** split one task across agents (speed), or run the same task
  across instances (volume).
- **Keep the orchestrator free** — delegate specialized work so the main agent
  stays available to coordinate.
- **Sub-agents vs. tasks vs. skills** — sub-agents delegate; tasks queue; skills
  are reusable capabilities. Compose them.

## Design thinking before code

- **Map every automation on two axes:** value created vs. effort/cost/time.
- **Start high-value, low-effort** — the low-hanging fruit.
- **Diagram the workflow** in Figma, or use **Mermaid code** for ExcaliDraw/TLDraw,
  so OpenClaw can execute tip to tail.
- **Use OpenClaw itself to prioritize** which automations to build first.

## Live build: TikTok Trend Hunter

- **Sourced the idea from Idea Browser**, then built it live.
- **Start with an MVP skill,** test, debug, iterate — don't architect the whole
  thing upfront.
- **Pipeline built with Claude Code:** a script that hunts TikTok trends, structured
  as a reusable skill, then demoed working.

## The arbitrage

- **Most businesses still need help** — verticalizing computer-use agents for one
  industry (manufacturing, real estate, distributorships) is the big opportunity
  **a16z is calling out**.
- **Agents are the new SaaS** — you sell an outcome-producing worker, not seats.
- **Build assets, not hours** — reusable skills compound; AI brings abundance.

## Marketing tips

- **Upwork as a paid lead-gen channel** — existing buyers with budget and a
  written brief; you reverse-engineer the demand instead of creating it.
- **Lead with a working demo, not a pitch** — build the proof with OpenClaw/Claude
  Code first, attach it to the proposal. Demo closes faster than copy.
- **Verticalize the message** — "computer-use agent for distributorships" lands
  harder than "automation services." Borrow a16z's vertical thesis as positioning.
- **Productize the wedge into a skill** — once one client's workflow works, the
  same skill resells across the whole vertical at near-zero marginal cost.

## Why this matters for us

- **Value-vs-effort mapping** is a clean prioritization tool for our own build
  backlog — ship high-value/low-effort first, diagram before coding.
- **Upwork-as-lead-gen** is a copyable cold-start funnel: existing demand, written
  briefs, demo-led close. Directly applicable to launch-kit lead funnels.
- **Wedge → skill → vertical** is a reusable productization path: solve one
  workflow, package it, resell across the niche.
- **Sub-agent parallelization** is a concrete throughput pattern for any
  research/scraping-heavy feature we build.

## References

- Episode: https://www.youtube.com/watch?v=i13XK-uUOLQ
- Orgo: https://startup-ideas-pod.link/orgo
- Idea Browser (trend research): https://www.ideabrowser.com/
- Upwork: https://www.upwork.com/
- Late Checkout Agency: https://latecheckout.agency/
- The Vibe Marketer: https://www.thevibemarketer.com/
- Nick on X/YouTube: https://www.youtube.com/@nickvasiles | https://www.nickvasilescu.com/

> Note: distilled from the episode's detailed YouTube show notes (timestamps,
> key points, numbered section summaries), not a verbatim transcript — transcript
> sources were unreachable. Numbers and tool names are the episode's stated figures.
