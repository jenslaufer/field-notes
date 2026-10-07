---
title: "The Impact of AI on Podcasting (Harvard Data Science Review Cross-Post)"
podcast: "Linear Digressions"
hosts: "Katie Malone with Jon Krohn (Super Data Science), moderated by Xiao-Li Meng (HDSR Editor-in-Chief); intro by Liberty Vittert"
source: "https://feeds.soundcloud.com/stream/2404380537-linear-digressions-the-impact-of-ai-on-podcasting.mp3"
feed: "https://feeds.feedburner.com/linear-digressions?format=xml"
published: 2026-09-21
captured: 2026-10-07
duration: "29:38"
transcript: "local (faster-whisper base.en, tools/podcast-transcribe.py), 300 lines"
---

# The Impact of AI on Podcasting

> **Two podcast hosts use AI for everything around the conversation and keep it out of the
> conversation itself.** Katie Malone (a solo hobby show) and Jon Krohn (a show with staff and
> contractors) both let AI write show notes, summaries, newsletters and shorts, and use it as a
> research scout. Both draw the line at editorial direction and interview questions: there it
> *"starts to get real jagged real quick"* and later *"settles into a rut really quickly"* (both Katie).
> The open problem they name is attribution: an AI detector rates Katie's newsletter *"90% AI
> generated"* although the curation was hers. Katie's closing point: there is *"a pretty big gap"*
> between a model *"being really good at spitting out tokens"* and actual change in the real world.

**Source note:** written from a full local transcription (29:38). This is not a regular
episode: Katie re-publishes a Harvard Data Science Review (HDSR) podcast episode. The ASR does
not label speakers; attribution below follows the moderator's hand-offs ("maybe this time start
with John", "Thank you, Katie") and is approximate. ASR garbles names: "John Krohn" is Jon
Krohn; "Jolly Mang", "Shally Mang" and "Jowli" are HDSR Editor-in-Chief Xiao-Li Meng; "Liberty
Vitter Capita" is Liberty Vittert; "Kitty" is Katie; "Elle lens" is LLMs; "LMM Notebook",
"Notebook LMM", "No Book L.M." and "notebook LN" are all NotebookLM; "Lighting AI" is Lightning
AI. Quoted as heard, meaning unclear or uncertain: "Claude fable five" (a Claude model name),
"clawed approved", "booksparts", "wherever green topics" (likely evergreen), "monster of the
weak" (likely monster of the week), "mis-requisites" (likely misattributes), and the web
address "hdsr.net.edu".

## Who is talking

- **Katie Malone** started Linear Digressions in 2015 out of leftover material from a Udacity
  machine-learning course. She ran it *"for five or six years"*, burned out, and came back
  *"about six months ago"*, weekly since. A hobby, one person.
- **Jon Krohn**, CEO of an AI software company (ASR: "Y-Carrot") and host of Super Data Science.
  His show has an operations manager (Sonia), a research contractor (Serge) and a shorts
  contractor (Anthony).
- **Xiao-Li Meng** moderates and brings the journal editor's questions: trust and disclosure.

## Where AI does the work

- **Jon: show notes and summaries.** For years a professional writer with a PhD wrote the episode
  summaries. This year a Claude model (ASR: *"Claude fable five"*) wrote them as well, with
  fewer niche mistakes — his one *"genuinely like regrettable example"* of headcount lost to AI.
- **Jon: animated shorts.** A contractor turns each hour-long interview into *"half a dozen one
  minute long shorts"*; AI picks the clips and generates the animation.
- **Jon: research.** The research contractor has *"huge amounts of agents working for him"* and
  delivers pages on each guest with suggested topics and questions.
- **Katie: the chores that burned her out.** Writing descriptions *"just took something out of
  me"*. AI taking these over *"is one of the things that makes it sustainable"*.
- **Katie: a Substack newsletter** of summary and notes, *"all AI produced"* from the transcript,
  which she always edits.
- **Katie: research scout.** AI as *"a research partner and a little bit of a scout"* saves her the
  blind alleys when preparing a topic or a guest.

## Where they keep it out

Both keep editorial direction human. Katie: once AI moves into scripting or suggesting questions,
quality drops, and for *"authenticity, quality, and honestly my own personal satisfaction"* she
stays hands-on. Jon: listeners expect *"our unique take"*; he only considers using AI for
brainstorming next topics, and has not done it yet. Asked for a magic wand, Katie (by content;
the ASR hand-off "Thank you, John" sits mid-answer) wants better interview lines: AI *"comes up
with some okay stuff first"*, then gets stuck in a rut. Jon wants the full hour on YouTube
animated as if an expert editor had cut it.

## Disclosure and attribution

- Meng's framing: nobody discloses using a calculator, so where is the line?
- Katie's answer is maximum transparency: her agents series (*"about 10, 11 episodes"*) ended
  with an episode in which she walked through her own production agent.
- **The detector problem.** Substack now integrates Pangram, which labels her newsletter *"70% AI
  generated or 90% AI generated"*. The labelled text is AI prose, but the curation and
  presentation before it are hers: *"I don't know if that's really fair."*
- Jon sharpens it: you have the ideas, do the research, draft the bullets, AI writes the prose —
  *"Then it's like 100% AI"* by the detector, *"but actually I did almost all the work"*. He also
  claims Anthropic models will carry invisible text watermarks; that claim is his, not checked
  here.
- Katie's worry about detectors: someone will get a false positive and *"a really bad day or a bad
  month or a bad year"*.

## Learning by podcast

NotebookLM is the reference example for all three. Katie: AI lets her say what she wants to learn
and have the podcast format *"fill in the blanks"* — but as a physics PhD she holds that hands-on
struggle is not replaced. Jon reports that Lightning AI's CEO has the whole company listen to
NotebookLM podcasts about the business. Meng mentions a test of a short podcast per HDSR article.

## Jobs and the gap

Neither host has seen job losses first-hand beyond Jon's one writer; Katie says labour economists
see *"a little bit mixed"* signals. Her point: models' capability and real-world change are far
apart, because people and businesses must first rework their routines so that AI *"is actually
delivering value in a meaningful way"*. Jon's closing worry: if anyone can generate a professional
podcast on demand, AI *"can maybe in the not too distant future compete me out of my job"*.

## Insights for me (Jens) — my connections, flagged as mine

- **My assistant does exactly what Katie does with her newsletter.** It transcribes and summarises
  podcasts for me. The difference that matters: I check the result against the source
  (`verify-quotes.py`, numbers against the transcript). Katie edits by hand; she names no check.
  My setup is stricter, and this episode gives no reason to change it.
- **The line they draw matches mine.** AI for chores and scouting, human for direction and
  judgement. The field-note rule "Insights for me, flagged as mine" is the same split as their
  editorial line. Nothing to change.
- **The detector question does not touch me today.** I publish nothing from these notes. If I
  ever turn field notes into public posts, a Pangram-style label would mark them as AI text
  although the selection is mine — worth knowing, nothing to do now.
- **Their magic-wand wish is a known weakness.** AI-suggested interview questions "settle into a
  rut" — matches my experience that drafts converge on the obvious. No action; just do not
  outsource question-finding for client interviews.
