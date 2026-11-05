# Voices fact check: devops / monitoring-observability

Checked by an independent agent. Each Layman and Bangla panel was compared with the Technical panel of the same block, sentence by sentence, by a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page. Rounds 1 to 3 used a strict standard (PASS: the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker). From round 4 the standard is the rule of CLAUDE.md, "Layman and Bangla give no fact that Technical does not give": PASS if every fact of the sentence is in the Technical panel, the meaning is not stronger, weaker, or different, and the cite is a cite of the Technical panel on the same fact; left-out details are allowed, and the checker lists them in its note; FAIL if a fact is added or changed, the meaning is stronger, weaker, or different, a limiting word was dropped so that the claim says more, or a cite is on a sentence that its source does not support. The checker judged the Bangla by its meaning and had to say when it could not read a sentence well enough to judge it. No person who reads Bangla has read this page. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`. The checkers' remarks about a writing skill of their own environment (1 sentences) are left out; nothing that a checker said about the page is.

## Round 1 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / monitoring-observability (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | Facts are dropped. "Open-source" and "toolkit" are missing for Prometheus. "Horizontally-scalable", "highly-available", "multi-tenant", "log aggregation system" and "inspired by Prometheus" are missing for Loki. Facts are also changed. "Prometheus collects metrics and alerts" is not in the Technical panel, which says "monitoring and alerting toolkit". The S2 text I checked does not say "collects metrics". "Loki collects logs" is weaker than "log aggregation system". The Observability sentence drops "ask questions … without knowing its inner workings" and says "find out what a system is doing", which is a different claim. |
| What it is | Bangla | FAIL | The same three sentences have the same gaps as the Layman panel. They drop "open-source", "toolkit", the Loki properties and "inspired by Prometheus". They add "মেট্রিক সংগ্রহ করে" (collects metrics) for Prometheus, which is not in the Technical panel. They weaken Loki to "লগ সংগ্রহ করে" (collects logs). The first sentence also says "অবস্থা বোঝা যায়" (the state can be understood), which is not "ask questions". I can read the Bangla well enough to judge it. |

Open FAILs after round 1: 2

Skipped: I did not read S1 or S3 in full. I used grep and a partial read, and that was enough for the three claims. Risk: the Layman and Bangla rewrites need the dropped facts added, or the added "collects metrics" claim removed, before they can pass.

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / monitoring-observability (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | All three facts and all three cites (1, 2, 3) match the Technical panel. No fact is added, dropped, or changed. The sentences are reworded only. "Horizontally scalable, highly available, and multi-tenant" and "inspired by Prometheus" have the same meaning as in Technical. |
| What it is | Bangla | PASS | The meaning matches the Technical panel. Observability lets you understand a system from outside and ask questions without knowing its inner workings (cite 1). Prometheus is an open-source systems monitoring and alerting toolkit (cite 2). Loki is a log aggregation system that is horizontally-scalable, highly-available, and multi-tenant, and is inspired by Prometheus (cite 3). I could read every sentence well enough to judge it. The cites are on the same facts as in Technical. Product names stay in English. |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / monitoring-observability (round 4)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Each sentence restates one Technical sentence, and each cite sits on the same fact. Left out: "by letting you" (the link between the outside view and the questions), "systems" as a plural noun, and that the three terms are joined in one sentence for Loki. |
| What it is | Bangla | PASS | I read the Bangla and its meaning matches the Technical panel sentence by sentence. The cites are on the same facts. Left out: "by letting you" (the link between the outside view and the questions), "systems" as a plural noun, and that the three terms are joined in one sentence for Loki. |

Open FAILs after round 4: 0

Note: I did not check beyond the cited lines in S1, S2 and S3.

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / monitoring-observability (round 5)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every sentence restates a Technical sentence, and each cite sits on the same fact. The Observability claim is split into two sentences, which is allowed. "Prometheus inspired it" matches "inspired by Prometheus". Left out: the phrase "by letting you ask questions" is reworded as a separate sentence. "Open-source" is kept. Nothing else is left out. |
| What it is | Bangla | PASS | I can read the Bangla well enough to judge it. It matches the Technical panel. "বাইরে থেকে" is "from the outside". "ভেতরে কীভাবে কাজ হয় তা না জেনেও" is "without knowing its inner workings". "অনুপ্রেরণা এসেছে" is "inspired by". Product names stay in English. Left out: the same small wording detail as the Layman panel, "by letting you ask questions". The word "systems" in "systems monitoring" is rendered as "system monitoring", which is a negligible change. Nothing else is left out. |

Open FAILs after round 5: 0

Not checked: the rest of S1 to S3 beyond the passages quoted above.

Open FAILs: 0
