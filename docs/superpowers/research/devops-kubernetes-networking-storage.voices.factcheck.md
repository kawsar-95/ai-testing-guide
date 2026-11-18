# Voices fact check: devops / kubernetes-networking-storage

Checked by an independent agent. Each Layman and Bangla panel was compared with the Technical panel of the same block, sentence by sentence, by a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page. Rounds 1 to 3 used a strict standard (PASS: the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker). From round 4 the standard is the rule of CLAUDE.md, "Layman and Bangla give no fact that Technical does not give": PASS if every fact of the sentence is in the Technical panel, the meaning is not stronger, weaker, or different, and the cite is a cite of the Technical panel on the same fact; left-out details are allowed, and the checker lists them in its note; FAIL if a fact is added or changed, the meaning is stronger, weaker, or different, a limiting word was dropped so that the claim says more, or a cite is on a sentence that its source does not support. The checker judged the Bangla by its meaning and had to say when it could not read a sentence well enough to judge it. No person who reads Bangla has read this page. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`. The checkers' remarks about a writing skill of their own environment (4 sentences) are left out; nothing that a checker said about the page is.

## Round 1 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / kubernetes-networking-storage (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | Sentence 1 adds "a stable way to reach the Pods". The Technical panel says a Service is "a method for exposing a network application". It never says "stable". Sentence 4, "Volumes can help with that", covers only the lost-files problem. The Technical panel says volumes help with both problems, and the second one (containers in a Pod that need to share files) is dropped. Sentences 2 and 3 are acceptable. "DNS names" is a loose paraphrase of "DNS records". "when it stops" omits "crashes or is stopped". |
| What it is | Bangla | FAIL | The Bangla has the same two problems as the Layman panel. "স্থির পথ" ("a stable path") adds a "stable" claim that the Technical panel does not make. "volume এই সমস্যা সামলাতে সাহায্য করে" ("volume helps handle this problem") covers one problem only, and the shared-files problem and "both" are dropped. I could read the other sentences well enough to judge them. They match the Technical panel in meaning, with the same loose "DNS নাম" ("DNS name") for "DNS records". |

Open FAILs after round 1: 2

I did not check whether S1 says "stable" elsewhere. I checked only the lines that I found with search.

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / kubernetes-networking-storage (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | All six sentences match the Technical panel. Each carries the same cite (1, 2, 3, 3, 3, 3). The only changes are "method" to "way", a semicolon to a colon, and "help you to solve" to "help you solve". No fact is added, dropped, or made stronger or weaker. It is not simpler than the Technical panel, but that is not a fact error. |
| What it is | Bangla | PASS | All six sentences carry the same facts and cites as the Technical panel. The Service sentence says "এক বা একাধিক Pod হিসেবে চলা network application প্রকাশ (expose) করার একটা পদ্ধতি". The DNS sentence says records for Service and Pod. The files sentence says "ephemeral (অস্থায়ী)". The crash sentence says state is not saved and all files created or modified are lost. The sharing sentence says multiple containers in one Pod need to share files. The last sentence says volume abstraction "সাহায্য করতে পারে", which keeps "can help" and does not overstate it. Product names stay in English. |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / kubernetes-networking-storage (round 4)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | "Problem two: multiple containers run in one Pod and need to share files" drops the "when" from the Technical sentence ("Another problem occurs when multiple containers are running in a Pod and need to share files"). Read alone, it says that multiple containers always run in one Pod and always need to share files. That is stronger than the Technical panel. Fix: "Problem two: it happens when multiple containers run in one Pod and need to share files." The other sentences match the Technical panel. "Ephemeral. They do not last" restates "ephemeral". The cites sit on the same facts as in the Technical panel. Details left out: "On-disk" is written as "on its disk". "One problem occurs" and "Another problem occurs" become "Problem one" and "Problem two". "during the lifetime of the container" becomes "while it ran". |
| What it is | Bangla | FAIL | The same dropped limit. "দ্বিতীয় সমস্যা: একটা Pod-এ একাধিক container চলে এবং তাদের file share করতে হয়" has no "when" (যখন), so it reads as a general statement and not a condition. Fix: "দ্বিতীয় সমস্যা: যখন একটা Pod-এ একাধিক container চলে এবং তাদের file share করতে হয়।" The other sentences match the Technical panel in meaning. "সাহায্য করতে পারে" keeps "can help". "অর্থাৎ টেকে না" restates "ephemeral". Details left out: the same as in the Layman note. I can read the Bangla well enough to judge it. |

Open FAILs after round 4: 2

Changed after this round: Layman and Bangla: the second problem is a condition again ("Problem two happens when ...", "দ্বিতীয় সমস্যা হয় যখন ..."), as in the Technical sentence.

## Round 5 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / kubernetes-networking-storage (round 5)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every sentence restates a Technical sentence, and each cite sits on the same fact as in the Technical panel. "They do not last" is a plain gloss of "ephemeral" and adds no new fact. "Problem one" and "Problem two" restate "One problem" and "Another problem". "While it ran" restates "during the lifetime of the container". "Created or changed" restates "created or modified". The panel keeps "can help" and "one or more". Left out: "in Kubernetes" in the opening sentence, "on-disk" as a word (it says "on its disk"), and "during the lifetime of the container" as a phrase. |
| What it is | Bangla | PASS | I can read the Bangla well enough to judge it, and its meaning matches the Technical panel sentence by sentence. "অর্থাৎ টেকে না" is a gloss of ephemeral, the same as in the Layman panel. "সাহায্য করতে পারে" keeps the "can help" limit. "এক বা একাধিক Pod" keeps "one or more Pods". The cites sit on the same facts as in the Technical panel. Left out: "in Kubernetes" in the opening sentence, "during the lifetime of the container" as a phrase, and "ephemeral" is kept in English with a gloss. |

Open FAILs after round 5: 0

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md). Round 6 and later check the new text with the brief of the full pages.

## Round 6 (2026-11-18)

# Voices fact check: devops / kubernetes-networking-storage (round 6)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Faithful. Left out: "dynamically", "Kubernetes volume abstraction" detail kept, "possibly" kept as "maybe"; no added facts. |
| What it is | Bangla | PASS | Faithful in meaning. No added facts. Left out: the "usually" in the Service-selector line is kept as "সাধারণত". |
| How it works | Layman | FAIL | "Pods use storage by mounting the claim as a volume" adds "mounting". The Technical panel says "using the claim as a volume". Fix: "Pods use storage by using the claim as a volume". Also: "Kubernetes itself does not come with a load balancer" drops "directly" and "component". "search line" replaces "search option". Left out: "cluster IP … virtual IP address mechanism" is kept; "any necessary" updates. |
| How it works | Bangla | PASS | Faithful. Table, notes and diagram match the Technical panel. No added facts. |
| Try it | Layman | FAIL | "Pods use storage by mounting the claim as a volume" adds "mounting". The Technical panel says "using the claim as a volume". Fix: "Pods use storage by using the claim as a volume". Also: "deletes resources by type and name" restates "resources and names". "search line" replaces "search option". Left out: "specific" in `kubectl wait`, "verbose output" wording. |
| Try it | Bangla | PASS | Faithful. Code blocks and run records are identical to the Technical panel. Left out: nothing that changes the meaning. |
| How a tester uses it | Layman | PASS | Faithful. "Among other things" for "among other questions". Left out: "namespace-qualified" wording. |
| How a tester uses it | Bangla | PASS | Faithful. No added facts. |
| Common mistakes | Layman | PASS | Faithful. "Kubernetes itself does not come with a load balancer" drops "directly", but the meaning stays close. Left out: "indefinitely" (replaced by "for as long as no matching volume exists"). |
| Common mistakes | Bangla | PASS | Faithful. No added facts. |
| What a tester can check | Layman | PASS | The callout is identical to the Technical panel. |
| What a tester can check | Bangla | PASS | Translation of the same seven items. It adds no fact. |

Open FAILs after round 6: 2

Changed after this round: How it works and Try it, Layman: "Pods use storage by mounting the claim as a volume" became "Pods use storage by using the claim as a volume". The comments of the checker on the same panels were taken too: "Kubernetes itself does not come with a load balancer" became "Kubernetes does not directly offer a load balancing component" (also in Common mistakes), "the `search` line" became "the `search` option", and "deletes resources by type and name" became "deletes resources by resources and names".

## Round 7 (2026-11-18)

# Voices fact check: devops / kubernetes-networking-storage (round 7)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | "can make and remove Pods at any time" is stronger than the Technical "dynamically". Other sentences keep the meaning and cites. Left out: "(a method for)", "usually" kept; the node and "at its core" detail is kept. Fix: "make and remove Pods on the fly". |
| What it is | Bangla | FAIL | "যেকোনো সময় Pod তৈরি করতে ও মুছে ফেলতে পারে" has the same "at any time" problem against "dynamically". Other sentences match the Technical panel. |
| How it works | Layman | PASS | All facts, numbers, and cites match the Technical panel. Left out: "Kubernetes 1.37" kept; leaves out "(depending on the mode)" nuance only lightly. The diagram is identical. |
| How it works | Bangla | PASS | Facts and cites match. Limits like "by default", "typically", "may" are kept. The diagram is identical. |
| Try it | Layman | PASS | Same commands, same cites, same facts. Leaves out exact flag wording, for example "the length of time". Run record is unchanged. |
| Try it | Bangla | PASS | Read in full. Meaning matches the Technical panel. Code blocks are the same. Details left out: exact flag definition words. |
| How a tester uses it | Layman | PASS | Same facts and limits. Left out: "namespace-qualified" wording and "in the external infrastructure". |
| How a tester uses it | Bangla | PASS | Same facts and cites. Details left out: "associated storage asset" is kept. |
| Common mistakes | Layman | PASS | Same six items and cites. Left out: "selects for" is rephrased as "matches". |
| Common mistakes | Bangla | PASS | Same six items and cites. Meaning is not changed. |
| What a tester can check | Layman | PASS | The list is identical to the Technical panel. |
| What a tester can check | Bangla | PASS | Each of the seven items matches its Technical item. |

Open FAILs after round 7: 2

Changed after this round: What it is, Layman: "it can make and remove Pods at any time" became "it can make and remove Pods on the fly", and in Bangla "যেকোনো সময়" became "dynamically (গতিশীলভাবে)". The Layman and Bangla panels also got the diagram sentence and the sentence about the image tag of the fact fix of this round.

## Round 8 (2026-11-18)

# Voices fact check: devops / kubernetes-networking-storage (round 8)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. Left out: "dynamically", "cluster-wide", "possibly" (volume), "provisioned" wording, "abstraction" detail. Added "they do not last" only restates "ephemeral". |
| What it is | Bangla | PASS | Read and compared sentence by sentence. Same facts as the Technical panel. Left out: nothing beyond wording. |
| How it works | Layman | FAIL | "the Pod's `/etc/resolv.conf`, which the kubelet writes for each Pod": the Technical panel and S2 say kubelet "configures" the file, not "writes" it. Fix: "which the kubelet configures for each Pod". Left out: "continuously" (scan), "typically" (Pods), "indefinitely" (replaced by "for as long as"), "any necessary" (updates), "if possible" kept. |
| How it works | Bangla | PASS | Same facts as the Technical panel. Left out: nothing that changes meaning. The two limits "default" and "may wait up to" are kept. |
| Try it | Layman | PASS | Same facts and cites as the Technical panel. Left out: "the length of time" detail, "verbose output" (now "long, detailed description"), "specific condition" (now "a condition"), "`kubectl port-forward`'s 'Kubernetes' in service wording". The record sentences match the Technical panel. |
| Try it | Bangla | PASS | Same facts, code blocks, and cites as the Technical panel. Left out: nothing that changes meaning. |
| How a tester uses it | Layman | PASS | Same facts as the Technical panel. Left out: "limited to" (now "only looks in"), the plugin limit is absent in both panels (see FAIL 107 in the first table), "external infrastructure" (now "the real storage behind the volume"), "Debug Services asks, among other questions" (now "among other things"). |
| How a tester uses it | Bangla | PASS | Same facts as the Technical panel. Left out: "among other questions" kept, "separate" terminal wording. The unqualified Delete claim matches the Technical panel (see FAIL 107). |
| Common mistakes | Layman | PASS | Same facts as the Technical panel. Left out: "indefinitely", "selects for" (now "really matches"), "directly" (kept), "integrate" (now "connect"). |
| Common mistakes | Bangla | PASS | Same facts as the Technical panel. Left out: nothing that changes meaning. |
| What a tester can check | Layman | PASS | The callout is the same text as the Technical panel. Left out: nothing. |
| What a tester can check | Bangla | PASS | Read and compared: same seven pieces of advice and the same title. Left out: nothing. |

Open FAILs after round 8: 1

Changed after this round: How it works, Layman: "which the kubelet writes for each Pod" became "which the kubelet configures for each Pod", as in the Technical panel. The Layman and Bangla sentences about the reclaim policy `Delete` got the same limit as the Technical sentence.

## Round 9 (2026-11-18)

# Voices fact check: devops / kubernetes-networking-storage (round 9)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | All facts and cites match the Technical panel. Left out: "dynamically", "usually" is kept, "consistent" becomes "stays the same", "possibly" becomes "maybe". |
| What it is | Bangla | PASS | Read in full, and the meaning matches the Technical panel on every sentence. Left out: nothing of note. |
| How it works | Layman | PASS | Same facts and cites as the Technical panel. "Stays unbound for as long as no matching volume exists" is a looser form of "remain unbound indefinitely". It adds no fact. Left out: "continuously", "calls appropriate APIs" is shortened, the word "indefinitely", and "mapping" in "one-to-one mapping". The diagram is identical. |
| How it works | Bangla | PASS | Meaning matches the Technical panel on every sentence. The diagram is identical. Left out: nothing of note. |
| Try it | Layman | PASS | Each sentence restates the Technical one, and the code blocks are identical. "The type is `ClusterIP` unless you say otherwise" restates "default type". Left out: "length of time" becomes "how long", and the S11 line that its example uses `hostnames`. |
| Try it | Bangla | PASS | Meaning matches the Technical panel. Code blocks and output are identical. Left out: nothing of note. |
| How a tester uses it | Layman | PASS | Each sentence matches the Technical panel, and the cites are the same. Left out: "of any individual Pod" is shortened to "any single Pod"; "separate terminal" becomes "its own terminal". |
| How a tester uses it | Bangla | PASS | Meaning matches the Technical panel. Left out: nothing of note. |
| Common mistakes | Layman | PASS | Each bullet matches the Technical panel. "A claim stays unbound for as long as no matching volume exists" is a looser form of "indefinitely". It adds no fact. Left out: "indefinitely". |
| Common mistakes | Bangla | PASS | Meaning matches the Technical panel. Left out: nothing of note. |
| What a tester can check | Layman | PASS | Callout text is identical to the Technical panel. |
| What a tester can check | Bangla | PASS | The seven advice bullets match the Technical panel in meaning. Left out: nothing. |

Open FAILs after round 9: 0

Open FAILs: 0
