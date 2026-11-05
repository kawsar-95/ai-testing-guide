# Voices fact check: devops / kubernetes-basics

Checked by an independent agent. Each Layman and Bangla panel was compared with the Technical panel of the same block, sentence by sentence, by a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page. Rounds 1 to 3 used a strict standard (PASS: the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker). From round 4 the standard is the rule of CLAUDE.md, "Layman and Bangla give no fact that Technical does not give": PASS if every fact of the sentence is in the Technical panel, the meaning is not stronger, weaker, or different, and the cite is a cite of the Technical panel on the same fact; left-out details are allowed, and the checker lists them in its note; FAIL if a fact is added or changed, the meaning is stronger, weaker, or different, a limiting word was dropped so that the claim says more, or a cite is on a sentence that its source does not support. The checker judged the Bangla by its meaning and had to say when it could not read a sentence well enough to judge it. No person who reads Bangla has read this page. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / kubernetes-basics (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | Sentence 1: "smallest unit that Kubernetes runs" drops "deployable" and "that you can create and manage". Sentence 2: "a set number of copies of a Pod" adds a fixed number and a single Pod. S2 says only "a stable set of replica Pods". It also drops "at any given time". Sentence 3: "updates the Pods and ReplicaSets for you" turns "provides declarative updates" into an action done for the user. The word "declarative" is lost, and the meaning changes. |
| What it is | Bangla | FAIL | Sentence 1: "সবচেয়ে ছোট চালানোর একক" means "smallest unit of running". It drops "deployable" and "create and manage". Sentence 2: "একটা Pod-এর নির্দিষ্ট সংখ্যক কপি সবসময় চালু রাখে" means "always keeps a fixed number of copies of one Pod running". It adds a fixed number and a single Pod, and "সবসময়" (always) is stronger than "stable set ... at any given time". Sentence 3: "আপনার হয়ে ... আপডেট করে" means "updates for you". "Declarative" is dropped, and the meaning changes. |

Open FAILs after round 1: 2

Skipped: I did not check the YAML and local-cluster topics in the lede, because no source is cited for them. Risk: the lede promises content that the cited sources do not cover.

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / kubernetes-basics (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | All three claims match the Technical panel, with the same cites (1, 2, 3). Only change: "maintain" became "keep" in the ReplicaSet sentence. The meaning is the same. No fact was added or dropped. |
| What it is | Bangla | PASS | All three sentences carry the same facts and cites. 1: Pod is the smallest deployable unit of computing that you can create and manage in Kubernetes. 2: A ReplicaSet's purpose is to keep a stable set of replica Pods running at any time. 3: A Deployment gives declarative updates for Pods and ReplicaSets. Product names stay in English. |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / kubernetes-basics (round 4)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every sentence restates a Technical sentence. The cites are on the same facts as in the Technical panel. "Keep ... running" stands for "maintain ... running". "Gives" stands for "provides". Left out: nothing of substance. The Technical sentence "that you can create and manage" is split into a second sentence: "You can create and manage Pods". The limit "at any given time" is kept. |
| What it is | Bangla | PASS | I can read the Bangla well enough to judge it. The meaning matches the Technical panel in all three groups. "যেকোনো সময়ে" keeps "at any given time". "তৈরি ও পরিচালনা করতে পারেন" keeps "can create and manage". "declarative update দেয়" matches "provides declarative updates". Left out: nothing of substance. Product and command names stay in English, which is correct. |

Open FAILs after round 4: 0

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / kubernetes-basics (round 5)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | All three Technical facts are restated with the same meaning. "Keep" stands for "maintain". "Gives" stands for "provides". Each cite sits on the same fact as in the Technical panel. The Pod sentence is split in two and the cite sits at the end of the pair. Left out: the plural "Pods" becomes the singular "A Pod". Nothing else is left out, and no limit is dropped. "At any given time" is kept. |
| What it is | Bangla | PASS | I can read this Bangla well enough to judge it. Each sentence matches the Technical panel in meaning. It says Pod is the smallest deployable unit of computing in Kubernetes. It says you can create and manage Pods. It says a ReplicaSet keeps a stable set of replica Pods running at any time. It says a Deployment gives declarative updates for Pods and ReplicaSets. The cites are on the same facts. Left out: the plural "Pods" becomes the singular "Pod". Nothing else is left out, and no limit is dropped. |

Open FAILs after round 5: 0

Open FAILs: 0
