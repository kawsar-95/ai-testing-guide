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

Open FAILs: 0
