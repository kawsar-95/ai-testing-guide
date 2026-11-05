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

Open FAILs: 0
