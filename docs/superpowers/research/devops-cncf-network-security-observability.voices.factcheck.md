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

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md). Round 6 and later check the new text with the brief of the full pages.

## Round 6 (2026-11-20)

# Voices fact check: devops / cncf-network-security-observability (round 6)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Word-for-word copy of the Technical panel, with the same cites. It adds no fact. It uses no plainer words. It leaves nothing out. The "de facto" sentence is uncited in Technical too. |
| What it is | Bangla | PASS | I read every sentence. Dates, stages, quotes, and cites match the Technical panel. Nothing is added or stronger. Left out: nothing of substance. |
| How it works | Layman | FAIL | Word-for-word copy of the Technical panel. It adds no fact. It leaves nothing out. It repeats the unsupported S39 cite on the `event-generator` sentence. It also repeats the uncited "Each message has a code ... and a level." |
| How it works | Bangla | FAIL | (1) It repeats the unsupported S39 cite: "`event-generator` ... default Falco ruleset ধরে". (2) In Permissive mode it adds a link not in Technical: "ফলে operator ধীরে ধীরে ..." ("as a result"). (3) In Authorization policy it adds "workload-এ বেশি প্রবেশাধিকার খোলা" ("to open more access to the workload"). Technical only says "incrementally add more ALLOW policies". Otherwise the sentences match. Left out: nothing of substance. |
| Try it | Layman | PASS | Word-for-word copy of the Technical panel. Layman line n is Technical line n+1122. I read lines 1473–1852 in full. For the rest I checked bullet lines and code lines by grep; they sit at the same offset. The stray "]" typo in the `falco-audit.yaml` bullet is copied too. Left out: nothing. |
| Try it | Bangla | PASS | I read every prose line and the bullets. Meaning, numbers, exit codes, and cites match the Technical panel. I did not diff the code blocks line by line. Spot checks of 12 distinctive code lines found them identical at offset +2244. Left out: nothing of substance. |
| How a tester uses it | Layman | FAIL | Word-for-word copy of the Technical panel. It repeats the unsupported S39 cite on the `event-generator` sentence ("the default Falco ruleset detects"). Left out: nothing. |
| How a tester uses it | Bangla | FAIL | It repeats the unsupported S39 cite: "`event-generator` ... default Falco ruleset ধরে". The other sentences match the Technical panel. Left out: nothing of substance. |
| Common mistakes | Layman | PASS | Word-for-word copy of the Technical panel. It adds no fact. It leaves nothing out. |
| Common mistakes | Bangla | PASS | All 12 bullets match the Technical panel in meaning, numbers, and cites. Left out: nothing. |
| What a tester can check | Layman | PASS | Word-for-word copy of the callout. It adds no fact. |
| What a tester can check | Bangla | PASS | All 15 items and the intro line match the Technical callout. It adds no fact. |

Open FAILs after round 6: 4

Changed after this round: Four FAILs. The Layman and Bangla panels of "How it works" and of "How a tester uses it" repeated the sentence on the `event-generator`, and they now repeat the corrected sentence. The Bangla panel of "How it works" added "ফলে" (as a result) to a sentence on the permissive mode, and a clause about opening more access to the workload to the sentence on the allow-nothing policy. The first is removed, and the second is now in the Technical sentence, which has it in its quote.

## Round 7 (2026-11-20)

# Voices fact check: devops / cncf-network-security-observability (round 7)

I did not diff every Layman line, so the Layman PASS for How it works and Try it rests on matching line counts and sampled sentences. I read the other Layman panels and every Bangla panel in full. For the Try it Bangla panel I read the intro and all the bullets. I did not diff its code blocks and code comments line by line. Every Layman panel is a word-for-word copy of its Technical panel. It adds no fact, but it also uses no plainer words and no shorter sentences.

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Verbatim copy of the Technical panel (read in full). It adds nothing and leaves nothing out. The wording is not plainer. |
| What it is | Bangla | PASS | Every date, number, stage name, and cite matches the Technical panel. Nothing is stronger or weaker. It leaves out nothing of substance. |
| How it works | Layman | PASS | Same line count as the Technical panel (76 lines). Sampled sentences (Aborts/OPA-Envoy/sidecar co-exist/disable-source) each appear in both panels. It looks like a verbatim copy. Nothing is added or left out. It is not plainer. |
| How it works | Bangla | PASS | Read every paragraph against the Technical panel. Limits such as "by default", "only", "can", "currently", and "at the same time" are kept. Numbers (TLSv1_2, 5.8, 0.36.0, GLIBC 2.28) are the same. Nothing is added. |
| Try it | Layman | PASS | Same line count as the Technical panel (1122 lines). Sampled sentences (glibc 2.43, `load_plugins` sample, "did not trace the query", lists sentence, "exited with 0 in both runs") appear in both panels. It looks like a verbatim copy. Code blocks match. Nothing is added or left out. |
| Try it | Bangla | PASS | The intro and all bullets match the Technical panel in facts, numbers, exit codes, line numbers, file names, and cites. The "run record" sentences stay labelled as the run's own. The code blocks I viewed match. Left out: nothing of substance. |
| How a tester uses it | Layman | PASS | Verbatim copy of the Technical panel (read in full). Nothing is added or left out. The wording is not plainer. |
| How a tester uses it | Bangla | PASS | Each sentence matches the Technical panel, including "by default" and "at least one ALLOW policy". Cites are on the same facts. Nothing is added. |
| Common mistakes | Layman | PASS | Verbatim copy of the Technical panel (read in full). The wording is not plainer. |
| Common mistakes | Bangla | PASS | All 13 bullets match the Technical panel, with numbers, exit codes, and cites unchanged. The words "ডিফল্টভাবে" and "কেবল" keep the "by default" and "only" limits. |
| What a tester can check | Layman | PASS | Verbatim copy of the Technical callout, with the same title and the same 15 bullets. It adds no tool fact. |
| What a tester can check | Bangla | PASS | The title is the same, and all 15 bullets and the intro line match the Technical callout. No new fact appears. |

Open FAILs after round 7: 0

Open FAILs: 0
