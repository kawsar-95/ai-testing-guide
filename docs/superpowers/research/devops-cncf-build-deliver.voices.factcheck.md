# Voices fact check: devops / cncf-build-deliver

Checked by an independent agent. Each Layman and Bangla panel was compared with the Technical panel of the same block, sentence by sentence, by a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page. Rounds 1 to 3 used a strict standard (PASS: the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker). From round 4 the standard is the rule of CLAUDE.md, "Layman and Bangla give no fact that Technical does not give": PASS if every fact of the sentence is in the Technical panel, the meaning is not stronger, weaker, or different, and the cite is a cite of the Technical panel on the same fact; left-out details are allowed, and the checker lists them in its note; FAIL if a fact is added or changed, the meaning is stronger, weaker, or different, a limiting word was dropped so that the claim says more, or a cite is on a sentence that its source does not support. The checker judged the Bangla by its meaning and had to say when it could not read a sentence well enough to judge it. No person who reads Bangla has read this page. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`. The checkers' remarks about a writing skill of their own environment (1 sentences) are left out; nothing that a checker said about the page is.

## Round 1 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / cncf-build-deliver (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| Voices | Layman | FAIL | Three sentences change a fact. (1) The Technical panel says the CNCF "hosts critical components of the global technology infrastructure". Layman says it "hosts open-source projects for the cloud". That is a different claim, and S1 as quoted does not say it. (2) "stable enough for production" drops "considered stable" and "used successfully in production environments". (4) "a framework" drops "open source". Sentence 5 says "Buildpacks" where Technical says "Cloud Native Buildpacks (CNBs)", which is a small naming difference. Sentence 3 matches Technical. | 
| Voices | Bangla | FAIL | I can read the Bangla well enough to judge it, and it has the same changes as Layman. (1) It says CNCF hosts "ক্লাউডের জন্য ওপেন-সোর্স প্রজেক্ট", not critical components of the global technology infrastructure. (2) It keeps "বলে ধরা হয়" (considered) but drops "used successfully in production". (4) It says "developer portal বানানোর একটা framework" and drops "open source". (5) It says "Buildpacks", not "Cloud Native Buildpacks". Sentence 3 (Helm) matches. |

Open FAILs after round 1: 2

Note: I did not read S1 beyond the cited line, so I cannot rule out that S1 says "open-source projects" elsewhere.

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / cncf-build-deliver (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| Layman | Layman | PASS | The Layman text is word for word the same as the Technical panel. All five facts are present, and each one has the same cite (1 to 5). No fact is added, dropped, or changed. It is not plain English, but that is a style point and not a fact. |
| Bangla | Bangla | PASS | Each of the five sentences matches the Technical panel in meaning, and each keeps its cite (1 to 5). (1) CNCF hosts the critical components of the global technology infrastructure. (2) Graduated and incubating projects are considered stable and are used successfully in production. (3) Helm is the Kubernetes package manager. (4) Backstage is an open source framework for building developer portals. (5) CNBs turn your application source code into container images that can run on any cloud. "চলতে পারে" is "can run", so the claim is not made stronger or weaker. Product names stay in English. |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / cncf-build-deliver (round 4)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| About the projects | Layman | PASS | Every sentence restates a Technical sentence. The cites match the same facts as in the Technical panel. "critical parts" for "critical components" and "turn" for "transform" keep the meaning. "People use them successfully in production environments" keeps the Technical claim. Left out: nothing of substance. The wording "Its graduated and incubating projects" becomes "The graduated and incubating projects of the CNCF". The "can" in "can run on any cloud" is kept. |
| About the projects | Bangla | PASS | I can read the Bangla well enough to judge it. Each sentence matches a Technical sentence in meaning. "stable বলে ধরা হয়" means "are considered stable". "সফলভাবে ব্যবহার করে" means "used successfully". "চলতে পারে" keeps the limit "can run". Product names and code stay in English. The cites are on the same facts as in the Technical panel. Left out: nothing of substance. |

Open FAILs after round 4: 0

Ponytail: I checked only the five cited sentences against their sources. I did not check the rest of each source file.

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / cncf-build-deliver (round 5)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| About the projects | Layman | PASS | Every sentence restates a Technical sentence. "critical parts" is the same as "critical components". "turn ... into" is the same as "transform ... into". "The images can run on any cloud" is the same as the Technical clause. The cites sit on the same facts as in the Technical panel. The Technical panel says "its graduated and incubating projects". The Layman panel says "of the CNCF", which has the same meaning. Left out: nothing of substance. |
| About the projects | Bangla | PASS | I can read the Bangla well enough to judge it. Each sentence matches the Technical panel. "stable বলে ধরা হয়" means "are considered stable". "সফলভাবে ব্যবহার করে" means "used successfully". "চলতে পারে" means "can run", so the limit "can" is kept. "যেকোনো cloud-এ" means "on any cloud". The cites sit on the same facts as in the Technical panel. Left out: nothing of substance. |

Open FAILs after round 5: 0

Not checked: I read only the matching passages in S1–S5 and not the whole files. Risk: the Layman and Bangla panels share the Technical panel's cites, so they are only as good as those quotes.

Open FAILs: 0
