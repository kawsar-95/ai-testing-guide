# Voices fact check: devops / cncf-network-security-observability

Checked by an independent agent. Each Layman and Bangla panel was compared with the Technical panel of the same block, sentence by sentence, by a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page. Rounds 1 to 3 used a strict standard (PASS: the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker). From round 4 the standard is the rule of CLAUDE.md, "Layman and Bangla give no fact that Technical does not give": PASS if every fact of the sentence is in the Technical panel, the meaning is not stronger, weaker, or different, and the cite is a cite of the Technical panel on the same fact; left-out details are allowed, and the checker lists them in its note; FAIL if a fact is added or changed, the meaning is stronger, weaker, or different, a limiting word was dropped so that the claim says more, or a cite is on a sentence that its source does not support. The checker judged the Bangla by its meaning and had to say when it could not read a sentence well enough to judge it. No person who reads Bangla has read this page. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / cncf-network-security-observability (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| About the projects | Layman | FAIL | (1) Cite 1 changed: the Technical panel says the CNCF "hosts critical components of the global technology infrastructure". The Layman panel says it "hosts open-source projects for the cloud". "Critical" is dropped, and "open-source" and "for the cloud" are added. S1 does not say this in the passage quoted. (2) Cite 2 weakened: "considered stable and used successfully in production" becomes "stable enough for production". "Considered" and "used successfully" are dropped. (3) Cite 3: "zero-trust" is dropped. It says only "security". (4) Cite 4: "provides runtime security" becomes "watches ... while they run". "Cloud native" is dropped. (5) Cite 5: "general-purpose" is dropped. |
| About the projects | Bangla | FAIL | It has the same changes as the Layman panel. (1) Cite 1: "ক্লাউডের জন্য ওপেন-সোর্স প্রজেক্ট হোস্ট করে" replaces "critical components of the global technology infrastructure". This adds "open-source" and drops "critical". (2) Cite 2: "used successfully" is dropped. It keeps "ধরা হয়" (considered), but the claim is weaker than the Technical panel. (3) Cite 3: "zero-trust" is dropped. It says only "security". (4) Cite 4: "নজরে রাখে" (watches) replaces "provides runtime security". "Cloud native" is dropped. (5) Cite 5: "general-purpose" is dropped. I could read the Bangla well enough to judge these points. |

Open FAILs after round 1: 2

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / cncf-network-security-observability (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| About the projects | Layman | PASS | The text is word for word the same as the Technical panel. It has the same five facts and the same cites 1 to 5. Nothing is added, dropped or changed. It is not simpler than the Technical panel, but that is not a fact error. |
| About the projects | Bangla | PASS | I read the Bangla and judged its meaning. It has the same five facts with the same cites 1 to 5. CNCF "hosts critical components" matches cite 1. "stable বলে ধরা হয়" and "সফলভাবে ব্যবহার করা হচ্ছে" match cite 2. "code না বদলেই" matches "without code changes". The three capabilities match cite 3. "hosts, containers, Kubernetes ও cloud environment জুড়ে runtime security" matches cite 4. "open source, general-purpose policy engine ... policy enforcement একীভূত করে" matches cite 5. Nothing is added or dropped, and no claim is made stronger or weaker. |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / cncf-network-security-observability (round 4)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| About the projects | Layman | PASS | Every sentence restates a Technical sentence, and each cite sits on the same fact as in the Technical panel. "Its graduated and incubating projects" became "The graduated and incubating projects of the CNCF", which is the same meaning. "does not need code changes" matches "without code changes". "brings policy enforcement together" matches "unifies". Left out: nothing of substance. The only change is "gives applications capabilities" became "abilities". |
| About the projects | Bangla | PASS | The Bangla meaning matches the Technical panel sentence by sentence. It adds no fact and changes no scope, number, or direction. Product names stay in English, which is correct. "কোড বদলানোর দরকার হয় না" matches "without code changes". "সফলভাবে ব্যবহার করে" matches "used successfully". Left out: nothing of substance. |

Open FAILs after round 4: 0

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / cncf-network-security-observability (round 5)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| About the projects | Layman | PASS | Every sentence restates a Technical sentence. Each cite is on the same fact as in the Technical panel. "Parts" for "components", "gives abilities" for "gives capabilities", and "brings together" for "unifies" keep the meaning. "You do not need to change the code" matches "without code changes". The limit "considered stable" is kept. Left out: nothing of substance. The words "an infrastructure layer" became "a layer of infrastructure", and "Its" became "of the CNCF". |
| About the projects | Bangla | PASS | I can read the Bangla well enough to judge it. It matches the Technical panel sentence by sentence. "stable বলে ধরা হয়" keeps the limit "considered stable". "কোড বদলানোর দরকার হয় না" matches "without code changes". "একসাথে আনে" matches "unifies". Product and command names stay in English. Cites are on the same facts as in the Technical panel. Left out: nothing of substance. "(critical)" is added only as a gloss of "গুরুত্বপূর্ণ". |

Open FAILs after round 5: 0

Not checked: the claims were not run against any text outside `pages/`. The "Istio is a service mesh" claim passes on S3's title and heading, not on a sentence that says it directly.

Open FAILs: 0
