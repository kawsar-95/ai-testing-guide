# Voices fact check: devops / cncf-runtime-data

Checked by an independent agent. Each Layman and Bangla panel was compared with the Technical panel of the same block, sentence by sentence, by a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page. Rounds 1 to 3 used a strict standard (PASS: the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker). From round 4 the standard is the rule of CLAUDE.md, "Layman and Bangla give no fact that Technical does not give": PASS if every fact of the sentence is in the Technical panel, the meaning is not stronger, weaker, or different, and the cite is a cite of the Technical panel on the same fact; left-out details are allowed, and the checker lists them in its note; FAIL if a fact is added or changed, the meaning is stronger, weaker, or different, a limiting word was dropped so that the claim says more, or a cite is on a sentence that its source does not support. The checker judged the Bangla by its meaning and had to say when it could not read a sentence well enough to judge it. No person who reads Bangla has read this page. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`. The checkers' remarks about a writing skill of their own environment (2 sentences) are left out; nothing that a checker said about the page is.

## Round 1 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / cncf-runtime-data (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| About the projects | Layman | FAIL | Sentence 1 changes the fact. The Technical panel says CNCF "hosts critical components of the global technology infrastructure". The Layman panel says it "hosts open-source projects for the cloud". "Critical components" and "global technology infrastructure" are dropped. "Open-source projects" and "for the cloud" are added, and S1 does not say them in that sentence. Sentence 2 is stronger than the Technical panel. "Are considered stable and are used successfully in production" becomes "are stable enough for production". This drops "considered" and "used successfully". Sentences 3 and 4 match the Technical panel and their cites. |
| About the projects | Bangla | FAIL | Sentence 1 has the same change as the Layman panel: "ক্লাউডের জন্য ওপেন-সোর্স প্রজেক্ট হোস্ট করে" replaces "critical components of the global technology infrastructure". Sentence 2 keeps "ধরা হয়" (considered). It drops "used successfully" and turns it into "ব্যবহারের মতো স্থিতিশীল" (stable enough for use). Sentences 3 and 4 match the Technical panel. I can read the Bangla well enough to judge these sentences. |

Open FAILs after round 1: 2

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / cncf-runtime-data (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| About the projects | Layman | PASS | All four sentences are word for word the same as the Technical panel. The facts and the cites 1, 2, 3, 4 are the same. Nothing is added, dropped, or changed. The panel is not in plainer English, but this is not a fact error. |
| About the projects | Bangla | PASS | Each of the four sentences has the same fact and the same cite (1, 2, 3, 4) as the Technical panel. Meaning is the same in each: CNCF hosts critical components of global technology infrastructure; graduated and incubating projects are considered stable and are used successfully in production; containerd is an industry-standard runtime with emphasis on simplicity, robustness and portability; Rook turns distributed storage systems into self-managing, self-scaling, self-healing storage services. Product names stay in English. Nothing is added, dropped, or made stronger or weaker. |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / cncf-runtime-data (round 4)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| About the projects | Layman | PASS | Every sentence restates a Technical sentence with the same meaning. Each cite sits on the matching fact. "critical parts" matches "critical components". "People use them successfully" matches "are used successfully". The "manage themselves, scale themselves, heal themselves" sentence matches "self-managing, self-scaling, self-healing". Left out: nothing of substance. The Technical panel's "Its" is rewritten as "of the CNCF", which keeps the meaning. |
| About the projects | Bangla | PASS | I can read the Bangla well enough to judge it. The meaning matches the Technical panel in all four groups: "গুরুত্বপূর্ণ (critical) অংশ host করে" = hosts critical components, "stable বলে ধরা হয়" = considered stable, "production পরিবেশে সফলভাবে ব্যবহার করে" = used successfully in production, and the containerd and Rook sentences also match. The service sentence says they are "নিজে নিজেই পরিচালিত হয়, scale হয় এবং নিজেকে সারিয়ে নেয়", which means self-managing, self-scaling and self-healing. Each cite sits on the matching fact. Left out: nothing of substance. The Bangla uses "অংশ" (part) for "components", which keeps the meaning. |

Open FAILs after round 4: 0

Note: I checked only the four source files in `pages/`.

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / cncf-runtime-data (round 5)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| About the projects | Layman | PASS | All four cited groups restate the Technical sentences with the same meaning, and each cite is on the same fact. "critical parts" matches "critical components". "are considered stable" and "People use them successfully in production environments" match the Technical wording. The Rook sentences keep all three properties (manage, scale, heal themselves). Left out: the word "components" (replaced by "parts"). Nothing else is left out. |
| About the projects | Bangla | PASS | I can read the Bangla well enough to judge it. Each group matches the Technical meaning: CNCF hosts critical parts of the infrastructure; the projects are "বলে ধরা হয়" (considered) stable and used successfully in production; containerd is an industry-standard runtime that stresses simplicity, robustness and portability; Rook turns distributed storage into services that manage, scale and heal themselves. The cites are on the right facts. Left out: "global" is kept, and no detail is dropped. The passive "considered" is kept. No added fact. |

Open FAILs after round 5: 0

Changed after this round: The Rook sentence and its source were changed in all three panels (see the fact report). Round 6 checks the new text.

## Round 6 (2026-11-15)

# Voices fact check: devops / cncf-runtime-data (round 6)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| About the projects | Layman | PASS | Every fact is in the Technical panel, and the cites are on the same facts. Left out: "cloud-native" in the Rook description. The wording "setup" stands for "deployment". |
| About the projects | Bangla | PASS | The meaning matches the Technical panel. The cites are on the same facts, and the product names stay in English. Left out: nothing of substance. "Critical" is kept in brackets. "নিজে নিজেই পরিচালিত হয়" matches "self-managing". |

Open FAILs after round 6: 0

Not checked: I did not invoke the writing-simplified-technical-english skill, and I did not check the S2 lines 33-34 wording against the page. The S2 line 112 quote covers the claim. I could not confirm that S1–S4 are the real pages, only that their text matches.

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md). Round 7 and later check the new text with the brief of the full pages.

## Round 7 (2026-11-20)

# Voices fact check: devops / cncf-runtime-data (round 7)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | The panel is a word-for-word copy of the Technical panel: same facts and same cites, nothing added and nothing left out. It is not plainer or shorter, but it adds no fact. It repeats the Technical wording "The same page says that Rook was accepted", which is the FAIL in fact row 11. |
| What it is | Bangla | PASS | Faithful translation of every Technical sentence, with the same cites. Dates, the stage names, the 4 stages and the CRD claims all match. Left out: nothing. The Bangla "একই page বলে" repeats the Technical wording from fact row 11. |
| How it works | Layman | PASS | Word-for-word copy of the Technical panel, with the same cites and the same limits ("optional", "only", "when the Validation Rules feature is enabled", "most"). Nothing left out. It is not plainer. |
| How it works | Bangla | PASS | Every sentence matches the Technical meaning. The limits ("বেশিরভাগ", "ঐচ্ছিক", "কেবল", "Validation Rules feature চালু থাকলে", "সুপারিশ") are kept. The cites match. Left out: nothing. The sentence "নিচের practice run কোনো user namespace সাজায় না..." matches the Technical sentence. |
| Try it | Layman | PASS | Word-for-word copy of the Technical panel. The code blocks, outputs, bullets and cites are the same (the line offsets match step by step). Nothing left out. It repeats the Technical sentences of fact rows 228 and 235 (uncited `docker exec` and Rook-docs commands claims). |
| Try it | Bangla | PASS | Code blocks and outputs are identical to the Technical panel. Every bullet and paragraph matches in meaning, with the same cites. Numbers, versions, names and the "tutorial's own" labels are kept. Left out: nothing found. It repeats the Technical wording of fact rows 228 and 235. |
| How a tester uses it | Layman | PASS | Word-for-word copy of the Technical panel with the same cites. Nothing left out. It repeats the uncited claims of fact rows 242 and 261. |
| How a tester uses it | Bangla | PASS | All 10 paragraphs match the Technical meaning, with the same cites, numbers and step references. "কিছু" and "ঐচ্ছিক" are kept. Left out: nothing. It repeats the uncited claims of fact rows 242 and 261 ("প্রতিটা node-এর container runtime দেখায়", "প্রতিটা blob একবারই রাখে"). |
| Common mistakes | Layman | PASS | Word-for-word copy of the Technical bullets, with the same cites. Nothing left out. It is not plainer. |
| Common mistakes | Bangla | PASS | All 10 bullets match the Technical meaning, with the same cites and step numbers. "may be destroyed" is kept as "ধ্বংস হয়ে যেতে পারে". Left out: nothing. |
| What a tester can check | Layman | PASS | Same callout, titled "Tutorial advice", with the same 11 items as the Technical panel. It has no cite and adds no fact. |
| What a tester can check | Bangla | PASS | Same callout with the same 11 items, in matching meaning. Commands and names stay in English. It adds no fact. |

Open FAILs after round 7: 0

## Round 8 (2026-11-20)

# Voices fact check: devops / cncf-runtime-data (round 8)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | The panel is a word-for-word copy of the Technical panel, with the same cites and no added fact. It is not simpler, but the rule checks facts only. Left out: nothing. |
| What it is | Bangla | PASS | Every sentence matches the Technical sentence and its cite. The dates, "4 stages", "critical" and "nonprofit" are kept. The English product terms are correct. Left out: nothing. |
| How it works | Layman | PASS | Word-for-word copy of the Technical panel, with the same cites. No added fact. Left out: nothing. |
| How it works | Bangla | PASS | The meaning matches. The limits "most", "optionally", "only", "never", "when the Validation Rules feature is enabled" and "currently" are kept. The "rule" in "soft or preferred" is also kept. Left out: nothing. |
| Try it | Layman | PASS | I read it in full against the Technical panel. The prose, bullets, cites and code blocks are identical to the Technical panel. No added fact. Left out: nothing. |
| Try it | Bangla | PASS | I read it in full. Code blocks and output are identical to the Technical panel. Each cited sentence keeps its meaning and its cite. The 'tutorial's own' markers are kept. Left out: nothing. |
| How a tester uses it | Layman | PASS | Word-for-word copy of the Technical panel. No added fact. Left out: nothing. |
| How a tester uses it | Bangla | PASS | Same facts, numbers and cites as the Technical panel. The limits "recommended", "critical" and "currently" are kept. Left out: nothing. |
| Common mistakes | Layman | PASS | Word-for-word copy of the Technical panel. No added fact. Left out: nothing. |
| Common mistakes | Bangla | PASS | Same facts and cites. The warnings keep "may" and "must". Left out: nothing. |
| What a tester can check | Layman | PASS | Word-for-word copy of the Technical callout. No added fact. Left out: nothing. |
| What a tester can check | Bangla | PASS | All 11 bullets keep the same advice and the same commands. Left out: nothing. |

Open FAILs after round 8: 0

## Round 9 (2026-11-20)

# Voices fact check: devops / cncf-runtime-data (round 9)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | The panel is a word-for-word copy of the Technical panel, with the same cites. No fact is added or changed. Nothing is left out. It is not plainer or shorter than the Technical panel, but the voice rule is met. The uncited summary sentence and the "tutorial's own summary" note are copied too, so the Technical FAIL (row 28) carries over. |
| What it is | Bangla | PASS | Read in Bangla. Dates, numbers, cites and product names match the Technical panel. Nothing is added or stronger. The "tutorial's own summary" sentence is kept. The same uncited summary sentence is also in Bangla (Technical row 28). No details are left out. |
| How it works | Layman | PASS | Word-for-word copy of the Technical panel, with the same cites. Nothing is added or left out. |
| How it works | Bangla | PASS | Read in Bangla. Every claim, number, flag and cite matches the Technical panel. Limits such as "optionally", "only", "when enabled", "never" and "may be destroyed" are kept. Nothing is left out. |
| Try it | Layman | PASS | Same line count as the Technical panel, with a fixed 629-line offset. I read and compared lines 850–1187 in full (intro to step 9). Spot checks of later steps (step 9 render note, steps 13–15 bullets, numbers such as 2540, 20 manifests and 7,867 bytes) also matched. The remaining lines were not read word by word. Code blocks, outputs and cites are identical in what I read. Nothing is left out or added. |
| Try it | Bangla | PASS | Read in full. Code blocks and outputs are the same as in the Technical panel. Each bullet and cite matches its Technical bullet, including the "tutorial's own reading" limits and "did not find out" statements. Nothing is left out. |
| How a tester uses it | Layman | PASS | Word-for-word copy of the Technical panel, with the same cites. Nothing is added or left out. |
| How a tester uses it | Bangla | PASS | Read in Bangla. Each claim and cite matches the Technical panel. Run findings and advice are the same. Nothing is left out. |
| Common mistakes | Layman | PASS | Word-for-word copy of the Technical panel, with the same cites. Nothing is added or left out. |
| Common mistakes | Bangla | PASS | Read in Bangla. All ten items match the Technical panel in meaning, numbers and cites. Nothing is left out. |
| What a tester can check | Layman | PASS | Word-for-word copy of the Technical callout, titled "Tutorial advice". No fact is added. |
| What a tester can check | Bangla | PASS | Read in Bangla. The callout title and all 11 advice items match the Technical callout in meaning. No fact is added or dropped. |

Open FAILs after round 9: 0

Changed after this round: The description line and the cut sentence were changed in the Layman and Bangla panels in the same way.

## Round 10 (2026-11-20)

# Voices fact check: devops / cncf-runtime-data (round 10)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | The panel is a word-for-word copy of the Technical panel, with the same cites. It adds no fact and leaves nothing out. It is not plainer or shorter, so it does not meet the repo's plain-words aim. |
| What it is | Bangla | PASS | I read it sentence by sentence. Facts, dates, numbers, and cites match the Technical panel. Nothing is left out. Product names stay in English. |
| How it works | Layman | PASS | Word-for-word copy of the Technical panel, with the same cites. It adds no fact and leaves nothing out. It is not plainer or shorter. |
| How it works | Bangla | PASS | Each sentence matches the Technical panel in meaning and cite. Limits such as "optionally", "only", "most", "currently", and "may be destroyed" are kept. Nothing is left out. |
| Try it | Layman | PASS | Word-for-word copy of the Technical panel. Code blocks and cites are the same. I checked by matching cite positions, by equal panel length, and by sample sentences. It adds no fact and leaves nothing out. It is not plainer or shorter. |
| Try it | Bangla | PASS | Prose is a faithful translation of the Technical panel, with the same cite positions. Code blocks and output are the same as in the Technical panel. Run values and limits are kept, such as "the tutorial did not find out why". Nothing is left out. |
| How a tester uses it | Layman | PASS | Word-for-word copy of the Technical panel, with the same cites. It adds no fact and leaves nothing out. It is not plainer or shorter. |
| How a tester uses it | Bangla | PASS | Meaning, numbers, and cites match the Technical panel. Limits such as "only one OSD", "recommended", and "critical" are kept. Nothing is left out. |
| Common mistakes | Layman | PASS | Word-for-word copy of the Technical panel. It gives no extra fact. It carries over the over-strong "even number of mons" heading that FAILs in the Technical panel (row 300). It is not plainer or shorter. |
| Common mistakes | Bangla | PASS | Faithful translation of each bullet, with the same cites. It carries over the same heading problem ("mon-এর সংখ্যা জোড় রাখা"). Nothing is left out. |
| What a tester can check | Layman | PASS | Word-for-word copy of the "Tutorial advice" callout. It adds no fact. |
| What a tester can check | Bangla | PASS | Translation of all 11 bullets and the intro line. The callout title and the commands stay in English. It adds no fact. |

Open FAILs after round 10: 0

Changed after this round: The Bangla of the item was changed in the same way.

## Round 11 (2026-11-20)

# Voices fact check: devops / cncf-runtime-data (round 11)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Word-for-word copy of the Technical panel, with the same cites. It adds no fact and leaves nothing out. It is not plainer or shorter than the Technical panel. |
| What it is | Bangla | PASS | Each sentence keeps the facts, numbers, dates and cites of the Technical panel. Meaning is not stronger or weaker. Nothing is left out. |
| How it works | Layman | PASS | Word-for-word copy of the Technical panel, including all code spans. It adds no fact and leaves nothing out. It is not plainer or shorter. |
| How it works | Bangla | PASS | Faithful sentence-by-sentence translation. Limits are kept ("optional", "only", "currently", "may be destroyed", "critical"). Command names, flags and values are the same as in the Technical panel. Nothing is left out. |
| Try it | Layman | PASS | Word-for-word copy of the Technical panel, with the same cites. I read it in full. Seven code lines, spot-checked by exact match, appear in all three panels. It adds no fact and leaves nothing out. |
| Try it | Bangla | PASS | Each prose sentence and bullet matches the Technical panel (run record, doc claims, and cites). Code blocks are the same. I checked this by reading the Bangla lines. I checked the code blocks by line count only: seven code lines, each found once in each of the three panels. Nothing is left out. |
| How a tester uses it | Layman | PASS | Word-for-word copy of the Technical panel. It adds no fact and leaves nothing out. It is not plainer. |
| How a tester uses it | Bangla | PASS | Faithful translation with the same facts, numbers, step references and cites. Nothing is left out. |
| Common mistakes | Layman | PASS | Word-for-word copy of the Technical panel. It adds no fact and leaves nothing out. It is not plainer. |
| Common mistakes | Bangla | PASS | Faithful translation. "Do not assume the default" and "The tutorial's advice is to read the events of the Pod first" are kept as in the Technical panel. Nothing is left out. |
| What a tester can check | Layman | PASS | Word-for-word copy of the callout, including the same "Tutorial advice" title and all 11 bullets. It adds no fact and leaves nothing out. |
| What a tester can check | Bangla | PASS | The Bangla callout keeps the title and the 11 bullets with the same meaning. It adds no fact and leaves nothing out. |

Open FAILs after round 11: 0

Open FAILs: 0
