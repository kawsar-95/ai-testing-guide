# Voices fact check: devops / aws-networking

Checked by an independent agent. Each Layman and Bangla panel was compared with the Technical panel of the same block, sentence by sentence, by a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page. Rounds 1 to 3 used a strict standard (PASS: the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker). From round 4 the standard is the rule of CLAUDE.md, "Layman and Bangla give no fact that Technical does not give": PASS if every fact of the sentence is in the Technical panel, the meaning is not stronger, weaker, or different, and the cite is a cite of the Technical panel on the same fact; left-out details are allowed, and the checker lists them in its note; FAIL if a fact is added or changed, the meaning is stronger, weaker, or different, a limiting word was dropped so that the claim says more, or a cite is on a sentence that its source does not support. The checker judged the Bangla by its meaning and had to say when it could not read a sentence well enough to judge it. No person who reads Bangla has read this page. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`. The checkers' remarks about a writing skill of their own environment (1 sentences) are left out; nothing that a checker said about the page is.

## Round 1 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / aws-networking (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | Sentence 1 says "your own private network". The Technical panel says "logically isolated virtual network that you have defined" and "launch AWS resources", and S1 does not say "private network". Sentence 2 says "several servers". The Technical panel and S2 say "targets", and S2 gives servers as only one kind of target. Sentence 2 also drops "automatically". Sentence 3 drops "highly available and scalable". Sentence 4 drops "static and dynamic" and says "faster", which is a looser form of "speeds up distribution". Facts are dropped or changed, so this fails. |
| What it is | Bangla | FAIL | It has the same changes as the Layman panel. "প্রাইভেট নেটওয়ার্ক" does not carry "logically isolated". "সার্ভার" replaces "targets". "automatically" is dropped. "Route 53 DNS সামলায়" drops "highly available and scalable". "static and dynamic" is dropped. The meaning of each sentence is clear to me, and these are facts missing or changed against the Technical panel. |

Open FAILs after round 1: 2

Note: The two voice FAILs are strict readings: they flag simplified wording that drops or changes a source fact.

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / aws-networking (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | The four sentences match the Technical panel's facts and cites 1 to 4. Nothing is added, dropped, or changed. Only the first sentence differs, and only in wording: it says "Amazon VPC" where Technical spells out the full name. This is not plain English, but the task judges facts, not register. |
| What it is | Bangla | PASS | I could read all four sentences. They carry the same facts as the Technical panel, with cites 1 to 4 on the matching sentences. VPC: launch AWS resources in a logically isolated virtual network that you define. ELB: automatically distributes incoming traffic across multiple targets. Route 53: a highly available and scalable DNS web service. CloudFront: a web service that speeds up distribution of static and dynamic content to users. Product names stay in English. |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / aws-networking (round 4)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every sentence restates a Technical sentence with the same meaning and the same cite. "Several targets" matches "multiple targets". "Delivery" matches "distribution". The panel leaves out nothing from the Technical panel. |
| What it is | Bangla | PASS | I can read the Bangla well enough to judge it. Each sentence matches the Technical sentence and carries the same cite. "স্বয়ংক্রিয়ভাবে" is "automatically". "একাধিক target" is "multiple targets". "গতি বাড়ায়" is "speeds up". The panel leaves out nothing from the Technical panel. The words "Domain Name System" are kept. |

Open FAILs after round 4: 0

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / aws-networking (round 5)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every sentence restates a Technical sentence, and each cite is on the same fact. "several" for "multiple", "spreads" for "distributes", and "delivery" for "distribution" keep the meaning. Left out: the "you have defined" wording (the Layman text says "you define your own virtual network", which is the same fact). No limits were dropped or added. |
| What it is | Bangla | PASS | I can read the Bangla well enough to judge it. Each sentence matches the Technical panel and the cites are on the right facts. The VPC sentence says you build a virtual network, that it is logically isolated, and that you can launch AWS resources in it. The Elastic Load Balancing sentence says it spreads traffic automatically across several targets. The Route 53 sentence says it is a DNS web service that is highly available and scalable. The CloudFront sentence says it speeds up the delivery of static and dynamic web content to users. Left out: the word "Domain Name System" is kept, and nothing else is omitted beyond the plain wording ("চালু করতে পারেন" for "launch", "গতি বাড়ায়" for "speeds up"). |

Open FAILs after round 5: 0

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md). Round 6 and later check the new text with the brief of the full pages.

## Round 6 (2026-11-18)

# Voices fact check: devops / aws-networking (round 6)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | The text is word for word the same as the Technical panel, with the same cites. It adds no fact and leaves nothing out. It is not plainer or shorter. That is a style gap, not a fact error. |
| What it is | Bangla | PASS | Every sentence matches the Technical panel in meaning, and the cites are on the same facts. Nothing is added. Details left out: none. |
| How it works | Layman | PASS | Word for word the same as the Technical panel, including the code and output blocks. Nothing is left out. It is not plainer. |
| How it works | Bangla | PASS | The meaning matches the Technical panel throughout. Limits are kept: "only", "at a time", "default", "up to eight", and "might". Small note: "launch-এর সময় স্পষ্টভাবে একটা public address" adds "স্পষ্টভাবে" (explicitly), which the Technical panel does not say. It does not change the meaning. Details left out: none. |
| Try it | Layman | PASS | Word for word the same as the Technical panel. The code blocks, commands, and outputs are the same. Nothing is left out. It is not plainer. |
| Try it | Bangla | PASS | The meaning matches the Technical panel. The code blocks, commands, and outputs are the same as in the Technical panel. The cites are on the same facts. Details left out: none. |
| How a tester uses it | Layman | PASS | Word for word the same as the Technical panel. Nothing is left out. It is not plainer. |
| How a tester uses it | Bangla | PASS | The meaning matches the Technical panel, and the cites are on the same facts. Details left out: none. |
| Common mistakes | Layman | PASS | Word for word the same as the Technical panel. The "Testing a changed file..." bullet gives the same "until the cache duration ... passes" claim as the Technical panel. That bullet is an open FAIL in the fact check (row 218). |
| Common mistakes | Bangla | PASS | The meaning matches the Technical panel. The CloudFront bullet repeats the Technical wording without "Typically" (see fact-check row 218). Details left out: none. |
| What a tester can check | Layman | PASS | Word for word the same as the Technical callout. It is the same "Tutorial advice" callout, with the same 12 items. Nothing is left out. |
| What a tester can check | Bangla | PASS | The intro line and all 12 items match the Technical callout in meaning. Details left out: none. |

Open FAILs after round 6: 0

Changed after this round: No FAIL in this round. The Layman and Bangla panels got the same edits as the Technical panel, with Bangla sentences for the new CIDR notation and flow log facts and for "Typically".

## Round 7 (2026-11-18)

# Voices fact check: devops / aws-networking (round 7)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | The panel is a word-for-word copy of the Technical panel. It adds no fact, and the cites match. Nothing is left out. It uses no plainer words or shorter sentences, so it does not meet the repo's plain-language aim. |
| What it is | Bangla | PASS | Every sentence matches a Technical sentence in meaning, with the same cite. Nothing is left out. |
| How it works | Layman | PASS | It is a word-for-word copy of the Technical panel, including the lists. No fact is added or changed. Nothing is left out, and the text is not simplified. |
| How it works | Bangla | FAIL | One added word: "আপনি launch-এর সময় স্পষ্টভাবে একটা public address দিতে পারেন" says "explicitly" assign. The Technical panel says only "You can assign a public address at launch". Fix: remove "স্পষ্টভাবে". The rest matches. Left out: nothing. |
| Try it | Layman | PASS | It is a word-for-word copy of the Technical panel, including all code blocks. No fact is added. It repeats the step-2 code-block problem from the fact check (`create-security-group` is not in the cited source). It is not simplified. |
| Try it | Bangla | PASS | The code blocks are identical to the Technical panel. Every sentence matches in meaning and cite. Left out: nothing. |
| How a tester uses it | Layman | PASS | It is a word-for-word copy of the Technical panel. No fact is added. Nothing is left out, and the text is not simplified. |
| How a tester uses it | Bangla | PASS | Every bullet matches the Technical bullet in meaning and cite. Nothing is left out. |
| Common mistakes | Layman | PASS | It is a word-for-word copy of the Technical panel. No fact is added. Nothing is left out, and the text is not simplified. |
| Common mistakes | Bangla | PASS | Every bullet matches the Technical bullet in meaning and cite. The words "by default" and "typically" ("সাধারণত") are kept. Nothing is left out. |
| What a tester can check | Layman | PASS | It is a word-for-word copy of the callout. No fact is added. Nothing is left out. |
| What a tester can check | Bangla | PASS | All 12 advice items match the Technical callout in meaning. Nothing is left out. |

Open FAILs after round 7: 1

Changed after this round: How it works, Bangla: the sentence on assigning a public address at launch no longer says "স্পষ্টভাবে" (explicitly), as the Technical panel. The Layman and Bangla panels of step 2 and step 3 got the new sentences of the fact fix.

## Round 8 (2026-11-18)

# Voices fact check: devops / aws-networking (round 8)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | The text is word for word the same as the Technical panel. It adds no fact and each cite is on the same fact. It does not use plainer words or shorter sentences. Nothing is left out. |
| What it is | Bangla | PASS | The meaning matches the Technical panel sentence by sentence, with the same cites. Nothing is added, and "automatically", "allowed", "one or more" are kept. Nothing is left out. |
| How it works | Layman | PASS | The text is word for word the same as the Technical panel. It adds no fact. It does not use plainer words. Nothing is left out. |
| How it works | Bangla | PASS | The meaning, numbers, code names, and cites match the Technical panel. The limits "by default", "only", "might", "typically" are kept. The Bangla gives no new fact. Nothing is left out. |
| Try it | Layman | PASS | The text is word for word the same as the Technical panel. The code blocks are the same. It adds no fact. It does not use plainer words. Nothing is left out. |
| Try it | Bangla | PASS | The meaning, numbers, and cites match the Technical panel. The code blocks are the same as in the Technical panel. The Bangla adds no new fact. Nothing is left out. |
| How a tester uses it | Layman | PASS | The text is word for word the same as the Technical panel. It adds no fact. It does not use plainer words. Nothing is left out. |
| How a tester uses it | Bangla | PASS | The meaning and cites match the Technical panel. "might" is kept as "পারে". Nothing is added. Nothing is left out. |
| Common mistakes | Layman | PASS | The text is word for word the same as the Technical panel. It adds no fact. It does not use plainer words. Nothing is left out. |
| Common mistakes | Bangla | PASS | The meaning and cites match the Technical panel. "Typically" is kept as "সাধারণত". Nothing is added. Nothing is left out. |
| What a tester can check | Layman | PASS | The callout is word for word the same as the Technical panel. It adds no fact. Nothing is left out. |
| What a tester can check | Bangla | PASS | Each advice line has the same meaning as in the Technical panel. Nothing is added, and the callout title is kept. Nothing is left out. |

Open FAILs after round 8: 0

Open FAILs: 0
