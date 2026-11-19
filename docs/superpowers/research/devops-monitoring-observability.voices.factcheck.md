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

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md). Round 6 and later check the new text with the brief of the full pages.

## Round 6 (2026-11-19)

# Voices fact check: devops / monitoring-observability (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | A word-for-word copy of the Technical panel. It adds no fact and every cite is supported. It is not in plainer words, but the rule is about facts. Nothing is left out. |
| What it is | Bangla | FAIL | The Monitoring sentence adds "যেমন query-র সংখ্যা ও ধরন, error-এর সংখ্যা ও ধরন, processing-এর সময় আর server-এর আয়ু" (query counts and types, error counts and types, processing times, server lifetimes). The Technical panel does not give this. Fix: remove the example list. Other sentences match the Technical panel. |
| How it works | Layman | FAIL | A word-for-word copy of the Technical panel. It repeats the unsupported cite on the sentence that says `amtool` validates a file with no running server (S24 limits this to UTF-8 strict mode). Nothing is left out. |
| How it works | Bangla | FAIL | The same `amtool` sentence is translated with the same unsupported S24 cite and no UTF-8 strict mode limit. I read the other sentences and found them to match the Technical panel in meaning. "জমা করে ও রেকর্ড করে" for "aggregate and record" is loose but I do not count it as a FAIL. Nothing else is left out. |
| Try it | Layman | FAIL | A word-for-word copy of the Technical panel, confirmed by line offsets and distinctive sentences. It repeats the two unsupported cites: the step 4 `amtool` no-server bullet (S24) and the step 8 "no parent, so it is the root span" bullet (S1). Nothing is left out. |
| Try it | Bangla | FAIL | The step 4 `amtool` no-server bullet and the step 8 "কোনো parent নেই, তাই সেটা root span" bullet carry the same unsupported cites. I read all the prose and bullets and they match the Technical panel in meaning. I only spot-checked the code blocks (distinctive lines) and did not compare every line. Nothing is left out. |
| How a tester uses it | Layman | PASS | A word-for-word copy of the Technical panel. Every cite is supported. Nothing is left out. |
| How a tester uses it | Bangla | PASS | Every sentence matches the Technical panel in meaning, with the same cites. Nothing is left out. |
| Common mistakes | Layman | PASS | A word-for-word copy of the Technical panel. Every cite is supported. Nothing is left out. |
| Common mistakes | Bangla | PASS | Every sentence matches the Technical panel in meaning, with the same cites. Nothing is left out. |
| What a tester can check | Layman | PASS | A word-for-word copy of the Technical callout. It adds no fact. Nothing is left out. |
| What a tester can check | Bangla | PASS | All 13 advice items and the intro line match the Technical callout. It adds no fact. Nothing is left out. |

Open FAILs after round 6: 5

Changed after this round: Bangla of What it is: the sentence on monitoring had an example list (query counts and types, error counts and types, processing times, and server lifetimes) that the Technical panel did not have. The Technical panel now has it. Layman and Bangla of How it works and of Try it carried the two unsupported cites of the Technical panel (`amtool` without a server, and the root span). All three panels got the same fixes.

## Round 7 (2026-11-19)

# Voices fact check: devops / monitoring-observability (round 7)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | The panel repeats the Technical panel word for word, with the same cites. It adds no fact. It uses no plainer words and leaves nothing out. |
| What it is | Bangla | PASS | Each sentence matches a Technical sentence in meaning, with the same cites. Product names stay in English. Left out: the word "Google" is kept, and nothing else is dropped. The two short Bangla sentences at the start give one Technical sentence and carry one cite at the end of the pair. |
| How it works | Layman | PASS | The panel repeats the Technical panel word for word. It adds no fact. It copies the uncited sentence "A Prometheus target exposes its metrics as text." (see FACTCHECK #64). It leaves nothing out. |
| How it works | Bangla | PASS | The meaning matches the Technical panel for every sentence I compared. Limits such as "should", "only", "can", and "automatically" are kept ("উচিত", "শুধু", "পারে", "নিজে থেকে"). It keeps the uncited text-format sentence, so it has the same gap as FACTCHECK #64. Left out: nothing of substance. |
| Try it | Layman | PASS | I read every prose paragraph and bullet. They repeat the Technical panel word for word. I checked the code blocks and the outputs by line position and by spot checks of the distinctive lines (the BUCKETS line, rule counts, `exp_samples`, `value: 4`, the `amtool` and `alertmanager` commands, `wait_for`, `lq`, `reporting_enabled`, the check 5 lines, and the file docstrings). They matched. I did not diff every code line. It copies the Technical sentences that FAIL (FACTCHECK #188, #192, #198). It adds no fact beyond them. |
| Try it | Bangla | PASS | I read every prose paragraph and bullet. The meaning matches the Technical panel, and the numbers, flags, and names are the same. Code blocks and outputs are at the same line positions, and the distinctive lines I spot-checked are identical to the Technical panel. I did not diff every code line. It carries the same three unsupported sentences as the Technical panel (FACTCHECK #188, #192, #198). The wording "একটা এক মুহূর্তে একটা instant query" is awkward but keeps the meaning of "at a single point in time". |
| How a tester uses it | Layman | PASS | It repeats the Technical panel word for word, with the same cites. It adds no fact. It leaves nothing out. |
| How a tester uses it | Bangla | PASS | Each bullet matches the Technical bullet in meaning, with the same cites. "Can only increase" becomes "শুধু বাড়তে পারে" and keeps the limit. Nothing is added. Left out: nothing of substance. |
| Common mistakes | Layman | PASS | It repeats the Technical panel word for word, with the same cites. It adds no fact. It leaves nothing out. |
| Common mistakes | Bangla | PASS | Each bullet matches the Technical bullet in meaning, with the same cites. The limits "should only", "will most likely", "cannot", and "no notifications" are kept. Nothing is added. Left out: nothing of substance. |
| What a tester can check | Layman | PASS | It repeats the callout word for word, with the same title. It adds no fact. It leaves nothing out. |
| What a tester can check | Bangla | PASS | It translates the callout and keeps the title "Tutorial advice" and the 13 advice items. It adds no fact and states the same commands. Left out: nothing. |

Open FAILs after round 7: 0

Changed after this round: No FAILs. The Bangla text got the same four fixes as the Technical text, and the Layman text follows the Technical text. The Bangla text got the same two fixes ("ডিফল্টভাবে" and the `bool` sentence with "যায়"; the condition of the `rate()` rule).

## Round 8 (2026-11-19)

# Voices fact check: devops / monitoring-observability (round 8)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Same text as the Technical panel, sentence by sentence. Cites match. Nothing is left out. It is not plainer or shorter than the Technical panel. |
| What it is | Bangla | PASS | Every sentence matches a Technical sentence and keeps its cite. Product names and terms stay in English. Details left out: none found. |
| How it works | Layman | PASS | Same text as the Technical panel; the paragraph and line counts match. Cites match. Nothing is left out. It is not plainer. |
| How it works | Bangla | PASS | All paragraphs match the Technical panel, and "by default", "should", "must", "only", "can", and "automatically" are kept. Small wording drifts that I judged acceptable: "aggregate and record" is "জমা করে ও রেকর্ড করে"; "union" is "সংযোগ" (the school-textbook word for union); "configurable buckets" is "বদলানো যায় এমন bucket". Details left out: none found. |
| Try it | Layman | PASS | Same text as the Technical panel; the line counts match, and the start and spot-checked sentences are identical. Code blocks look the same (same length). It repeats the uncited `--help` sentence that FACTCHECK row 215 marks FAIL. Nothing is left out. |
| Try it | Bangla | PASS | Each prose line matches the Technical panel, with the same cites, numbers, ports, and hashes. It repeats the uncited `--help` sentence (row 215), so the FAIL belongs to the Technical panel. Code blocks were not compared line by line; I checked the prose only, and the offsets match the Technical panel. Details left out: none found. |
| How a tester uses it | Layman | PASS | Same text as the Technical panel. Cites match. Nothing is left out. |
| How a tester uses it | Bangla | PASS | All 8 bullets match the Technical bullets and keep their cites. Details left out: none found. |
| Common mistakes | Layman | PASS | Same text as the Technical panel. Cites match. Nothing is left out. |
| Common mistakes | Bangla | PASS | All 17 bullets match the Technical bullets and keep their cites. Details left out: none found. |
| What a tester can check | Layman | PASS | Same callout, title, and 13 items. No tool fact added. |
| What a tester can check | Bangla | PASS | Same callout, title, and 13 items in Bangla. No tool fact added. Details left out: none found. |

Open FAILs after round 8: 0

Changed after this round: No FAILs. The Bangla text lost the same sentence.

## Round 9 (2026-11-19)

# Voices fact check: devops / monitoring-observability (round 9)

Note on method: each Layman panel is a word-for-word copy of its Technical panel. I confirmed this by reading the text and by counting repeated lines, including the code blocks, in `page.md`. The Bangla panels follow the Technical panels sentence by sentence. For the Bangla "Try it" section I read the prose and all the bullets. I confirmed the code blocks only by counting repeated code lines (36 hits for 11 patterns, which fits identical blocks), not by a full line diff. I could read all the Bangla sentences well enough to judge them. The Layman panels are not plainer than the Technical panels, but that is not a FAIL under the rule. Sentences that are uncited or wrongly cited in the Technical panel (rows 126, 134, 145) have the same fault in the Layman and Bangla copies. I did not count those again here.

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Identical to the Technical panel. No fact added, none left out. |
| What it is | Bangla | PASS | Every sentence matches the Technical sentence and carries the same cite. Left out: nothing. The meaning of "the first span represents the root span" is kept as "প্রথম span হলো root span". |
| How it works | Layman | PASS | Identical to the Technical panel. Nothing left out. |
| How it works | Bangla | PASS | Every sentence is a faithful translation, with the same cites. The limits are kept: "many of which are optional" as ঐচ্ছিক, "by default" as ডিফল্টভাবে, "should only" as শুধু ... উচিত, "most likely" as খুব সম্ভব. Left out: nothing. |
| Try it | Layman | PASS | Identical to the Technical panel, including all code blocks. Nothing left out. |
| Try it | Bangla | PASS | Prose and bullets match the Technical panel and keep the same cites and the same limits ("the tutorial's own choice", "no page that the tutorial read..."). The code blocks look identical by the line-count check. Left out: nothing found. |
| How a tester uses it | Layman | PASS | Identical to the Technical panel. Nothing left out. |
| How a tester uses it | Bangla | PASS | Faithful translation with the same cites. Left out: nothing. |
| Common mistakes | Layman | PASS | Identical to the Technical panel. Nothing left out. |
| Common mistakes | Bangla | PASS | Faithful translation with the same cites. The "most likely" and "only" limits are kept. Left out: nothing. |
| What a tester can check | Layman | PASS | Identical to the Technical panel, with the same "Tutorial advice" callout and the same 13 bullets. No tool fact added. |
| What a tester can check | Bangla | PASS | The callout has the same title and says it is the tutorial's own advice. All 13 bullets translate the Technical bullets. No tool fact added. |

Open FAILs after round 9: 0

Changed after this round: No FAILs. The Bangla text got the same three fixes.

## Round 10 (2026-11-19)

# Voices fact check: devops / monitoring-observability (round 10)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Word-for-word copy of the Technical panel. It adds no fact and the cites are the same. It is not in plainer words or shorter sentences. Nothing is left out. |
| What it is | Bangla | PASS | Every sentence matches a Technical sentence in meaning, and the cites are the same. The second and third sentences of "Observability" share one cite at the end of the group, which is allowed. Left out: nothing of substance. |
| How it works | Layman | PASS | Word-for-word copy of the Technical panel, with the same cites and no added fact. It is not simplified. Nothing is left out. |
| How it works | Bangla | PASS | All paragraphs follow the Technical panel with the same cites. The qualifiers are kept: "by default" (ডিফল্টভাবে), "most optional" (বেশির ভাগ ঐচ্ছিক), "usually" (সাধারণত), "should" and "must". The word "সংযোগ" for "union" in the alert-test sentence is loose, but the meaning stays close. Left out: nothing of substance. |
| Try it | Layman | PASS | Word-for-word copy of the Technical panel, including the code blocks and output. They are identical, with the same line offsets and bullet text in every step I compared. No added fact. It is not simplified. Nothing is left out. |
| Try it | Bangla | PASS | The prose of the run record, the install paragraphs, and all step bullets match the Technical panel in meaning, numbers, and cites. The "no page describes `--silenced`, `suppressed`, `detected_level`" notes are kept. The code blocks sit in the same positions as in the Technical panel (same line counts, same step offsets). I checked the prose lines and the placement of the code blocks. I did not diff each code line in the Bangla panel. Left out: nothing of substance. |
| How a tester uses it | Layman | PASS | Word-for-word copy of the Technical panel, with the same cites and no added fact. It is not simplified. Nothing is left out. |
| How a tester uses it | Bangla | PASS | Each bullet matches the Technical bullet, with the same cites. "implicitly" is kept as অপ্রকাশ্য. No added fact. Left out: nothing of substance. |
| Common mistakes | Layman | PASS | Word-for-word copy of the Technical panel, with the same cites and no added fact. It is not simplified. Nothing is left out. |
| Common mistakes | Bangla | PASS | Each bullet matches the Technical bullet in meaning, with the same cites. The advice "run step 7 on a machine and a network that you trust" is kept. No added fact. Left out: nothing of substance. |
| What a tester can check | Layman | PASS | Word-for-word copy of the Technical callout, with the same "Tutorial advice" framing and the same 13 advice lines. No added fact. Nothing is left out. |
| What a tester can check | Bangla | PASS | All 13 advice lines and the callout intro match the Technical callout in meaning. No cites are needed. No added fact. Left out: nothing of substance. |

Open FAILs after round 10: 0

Changed after this round: No FAILs. The Bangla sentences of the trace-id and the parent-id follow the new Technical sentences.

## Round 11 (2026-11-19)

# Voices fact check: devops / monitoring-observability (round 11)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Word for word the same as the Technical panel, with the same cites. It adds no fact. It is not simpler, and it leaves nothing out. |
| What it is | Bangla | PASS | Each sentence matches its Technical sentence, with the same cites. Product names stay in English. Left out: nothing of substance. |
| How it works | Layman | PASS | Word for word the same as the Technical panel, with the same cites. It adds no fact. It is not simpler, and it leaves nothing out. |
| How it works | Bangla | FAIL | The sentence on what Prometheus does with rules says "aggregate and record new time series". The Bangla says "নতুন time series জমা করে ও রেকর্ড করে". "জমা করে" means collect or store, not aggregate, so the meaning changes. A correct word is "একত্র করে". Every other sentence matches its Technical sentence. |
| Try it | Layman | PASS | Prose, bullets and code blocks are the same as the Technical panel, with the same cites. It adds no fact. It is not simpler, and it leaves nothing out. |
| Try it | Bangla | PASS | Prose and bullets match the Technical panel, with the same cites. The code blocks are the same. I could read all the Bangla sentences. The panel keeps the limits, such as "the tutorial's own choice", "the README does not write it that way", and "no page ... names". Left out: nothing of substance. |
| How a tester uses it | Layman | PASS | Word for word the same as the Technical panel, with the same cites. It adds no fact. It is not simpler, and it leaves nothing out. |
| How a tester uses it | Bangla | PASS | Each bullet matches the Technical bullet, with the same cites. Nothing is added. Left out: nothing of substance. |
| Common mistakes | Layman | PASS | Word for word the same as the Technical panel, with the same cites. It adds no fact. It is not simpler, and it leaves nothing out. |
| Common mistakes | Bangla | PASS | Each bullet matches the Technical bullet, with the same cites. Nothing is added. Left out: nothing of substance. |
| What a tester can check | Layman | PASS | The callout is word for word the same as the Technical callout. It has no cites and adds no fact. |
| What a tester can check | Bangla | PASS | Each of the 13 advice items matches the Technical callout. The callout title is kept and the intro says it is the tutorial's own advice. Nothing is added. |

Open FAILs after round 11: 1

Changed after this round: The Bangla sentence on what Prometheus does with rules said "জমা করে" (collect, store) for "aggregate". It now says "একত্র করে", the word that the Monitoring sentence already uses for "aggregating". No other use of "জমা" on the page stands for "aggregate".

## Round 12 (2026-11-19)

# Voices fact check: devops / monitoring-observability (round 12)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Word for word the same as the Technical panel, with the same cites. It adds no fact and leaves nothing out. It is not in plainer words. |
| What it is | Bangla | PASS | Every sentence matches the Technical meaning and its cite. "mechanism" is "প্রক্রিয়া". Nothing is added or changed. |
| How it works | Layman | PASS | Word for word the same as the Technical panel, with the same cites. It adds no fact and leaves nothing out. It is not in plainer words. I compared it by reading, not with a diff tool. |
| How it works | Bangla | PASS | Every sentence matches the Technical meaning and its cite. Limits are kept: "উচিত" for should, "ডিফল্টভাবে ... করতেই হয়" for must by default, "সবসময়" for always. Nothing is left out. |
| Try it | Layman | PASS | The prose, bullets, and cites are the same as the Technical panel. The 25 fenced code blocks are the same in number. I spot-checked the code and did not compare every line. It adds no fact and leaves nothing out. It is not in plainer words. |
| Try it | Bangla | PASS | Every prose sentence, bullet, and cite matches the Technical panel. The run record, the numbers, the "tutorial's own choice" remarks, and the no-page-names-it remarks are kept. Code blocks: the count (25 per panel) matches, and I checked only some lines, not every line. Left out: nothing found. |
| How a tester uses it | Layman | PASS | Word for word the same as the Technical panel, with the same cites. It adds no fact and leaves nothing out. |
| How a tester uses it | Bangla | PASS | Each bullet matches the Technical bullet and cite. "অপ্রকাশ্য error" is the right reading of "implicitly". Nothing is added or left out. |
| Common mistakes | Layman | PASS | Word for word the same as the Technical panel, with the same cites. It adds no fact and leaves nothing out. |
| Common mistakes | Bangla | PASS | Each item matches the Technical item and cite. The gauge example and the Loki penalties are kept. Nothing is added or left out. |
| What a tester can check | Layman | PASS | Same callout, title, and 13 items as the Technical panel. It adds nothing and leaves nothing out. |
| What a tester can check | Bangla | PASS | The callout intro and all 13 items match the Technical advice. "শূন্য নয় এমন exit status" means non-zero exit status. Nothing is added or left out. |

Open FAILs after round 12: 0

Changed after this round: No FAILs. The Bangla sentence follows the new Technical sentence.

## Round 13 (2026-11-20)

# Voices fact check: devops / monitoring-observability (round 13)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | The Layman panel is word-for-word the Technical panel, with the same cites. It adds nothing. It does not use plainer words. Left out: nothing. |
| What it is | Bangla | PASS | Meaning matches the Technical panel sentence by sentence, with the same cites. The cite-less first sentence of the Observability paragraph restates the cited next sentence. Left out: nothing of substance. |
| How it works | Layman | PASS | The Layman panel is word-for-word the Technical panel (paragraph by paragraph), with the same cites. Left out: nothing. |
| How it works | Bangla | PASS | Every sentence matches its Technical sentence in meaning, with the same cite. "configurable buckets" is rendered as "বদলানো যায় এমন bucket", which is close enough. All limits are kept ("by default", "only", "most likely", "always", "many of which"). Left out: nothing of substance. |
| Try it | Layman | PASS | The Layman panel is the Technical panel word for word. Its prose, bullets and cites match, and its code blocks have the same line count. I spot-checked 19 distinctive sentences from the second half and found each in both panels. Left out: nothing. |
| Try it | Bangla | PASS | Prose, bullets and cites match the Technical panel. Names, numbers, flags and the "no page describes ..." caveats are kept. I read the code blocks only to confirm that the panel has the same number of lines and the same structure. I did not compare them line by line. Left out: nothing of substance. |
| How a tester uses it | Layman | PASS | The Layman panel is identical to the Technical panel, with the same cites. Left out: nothing. |
| How a tester uses it | Bangla | PASS | Each bullet matches its Technical bullet in meaning, with the same cite. Limits are kept. Left out: nothing of substance. |
| Common mistakes | Layman | PASS | The Layman panel is identical to the Technical panel, with the same cites. Left out: nothing. |
| Common mistakes | Bangla | PASS | Each bullet matches its Technical bullet in meaning, with the same cite. "না ... পারেন না" and "সবসময়" keep the strength of the Technical text. Left out: nothing of substance. |
| What a tester can check | Layman | PASS | The Layman panel is the same callout and the same 13 advice bullets, with no cites and no added tool facts. Left out: nothing. |
| What a tester can check | Bangla | PASS | The Bangla callout translates the intro sentence and all 13 bullets, with no added fact. Left out: nothing. |

Open FAILs after round 13: 0

Open FAILs: 0
