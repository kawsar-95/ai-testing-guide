# Voices fact check: devops / aws-compute-storage

Checked by an independent agent. Each Layman and Bangla panel was compared with the Technical panel of the same block, sentence by sentence, by a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page. Rounds 1 to 3 used a strict standard (PASS: the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker). From round 4 the standard is the rule of CLAUDE.md, "Layman and Bangla give no fact that Technical does not give": PASS if every fact of the sentence is in the Technical panel, the meaning is not stronger, weaker, or different, and the cite is a cite of the Technical panel on the same fact; left-out details are allowed, and the checker lists them in its note; FAIL if a fact is added or changed, the meaning is stronger, weaker, or different, a limiting word was dropped so that the claim says more, or a cite is on a sentence that its source does not support. The checker judged the Bangla by its meaning and had to say when it could not read a sentence well enough to judge it. No person who reads Bangla has read this page. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`. The checkers' remarks about a writing skill of their own environment (2 sentences) are left out; nothing that a checker said about the page is.

## Round 1 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / aws-compute-storage (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | (1) EC2: the Technical panel says "on-demand, scalable computing capacity". The Layman panel says "virtual servers on demand". It drops "scalable" and "computing capacity" and adds "virtual servers", which is a different fact from the one in the Technical sentence. (2) S3: the Layman panel says "files", but the Technical panel says "data". It also drops "object storage service". (3) EBS: the Layman panel says "a disk that you attach to a server". It drops "durable" and "block-level", and it changes "instances" to "a server". The cites are on the right sources, but the facts are not the same as in the Technical panel. |
| What it is | Bangla | FAIL | I can read the Bangla well enough to judge it. It repeats the Layman sentences, so it has the same problems. It says "চাহিদা অনুযায়ী ভার্চুয়াল সার্ভার" (virtual servers on demand) with no "scalable". It says "ফাইলকে object হিসেবে bucket-এ রাখে" (files) with no "data" or "object storage service". It says "একটা ডিস্ক" (a disk) with no "durable" or "block-level". If the Technical panel is fixed, this panel needs the same fix. |

Open FAILs after round 1: 2

I also did not check the exact words "Services (AWS) Cloud" in S1, because the grep line was cut.

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains. The Technical sentence on S3 now gives the wording of S2 in full: "stores data as objects, hierarchical data, or tabular data within buckets".

## Round 2 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / aws-compute-storage (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | It has the same three facts with the same cites 1, 2, 3. Nothing is added or dropped. It writes "AWS Cloud" in place of "Amazon Web Services (AWS) Cloud", which is the same fact. |
| What it is | Bangla | PASS | It has the same three facts with the same cites 1, 2, 3. The meaning matches: on-demand, scalable computing capacity in AWS Cloud; S3 as an object storage service that holds objects, hierarchical data, or tabular data in buckets; EBS as a durable, block-level storage device you can attach to your instances. Product names and terms stay in English. |

Open FAILs after round 2: 0

Not checked: The task also limited me to the folder files.

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / aws-compute-storage (round 4)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | All three facts are in the Technical panel, with the same meaning and the same cites (1, 2, 3). EC2: "gives you computing capacity in the AWS Cloud. You get it on demand, and it is scalable" matches "on-demand, scalable computing capacity". S3: "a storage service for objects. It keeps data in buckets, as objects, hierarchical data, or tabular data" matches the Technical sentence. EBS: "storage device. It is durable, and it works at block level. You can attach it to your instances" matches the Technical sentence. Left out: the full name "Amazon Elastic Compute Cloud", the full name "Amazon Web Services", and the word "within" for buckets. "Object storage service" becomes "storage service for objects", which has the same meaning. |
| What it is | Bangla | PASS | I can read this Bangla well enough to judge it. It has the same three facts as the Technical panel, with the same cites. EC2 gives computing capacity in the AWS Cloud, "চাহিদা অনুযায়ী পাওয়া যায় এবং scalable" means on demand and scalable. S3 is a storage service for objects and keeps data in buckets as objects, hierarchical data, or tabular data. An EBS volume is a durable, block-level storage device that "আপনি ... attach করতে পারেন" (you can attach) to your instances. Left out: the full names "Amazon Elastic Compute Cloud" and "Amazon Web Services". The "can" limit is kept. No added fact. |

Open FAILs after round 4: 0

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / aws-compute-storage (round 5)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel, and each cite sits on the same fact as in the Technical panel. Left out: the full name "Amazon Elastic Compute Cloud"; the name "Amazon Web Services" (only "AWS Cloud" is used); the word "within" is changed to "in buckets", which keeps the same meaning. The Technical sentence "stores data as objects, hierarchical data, or tabular data" is split into two short sentences: "storage service for objects" and "keeps data in buckets, as objects, hierarchical data, or tabular data". Both are in the Technical panel. "Object storage service" becomes "storage service for objects", with the same meaning. The cite for S2 is at the end of the group. |
| What it is | Bangla | PASS | I can read the Bangla well enough to judge it. The meaning matches the Technical panel: EC2 gives computing capacity in the AWS Cloud, on demand and scalable; S3 is a storage service for objects that keeps data in buckets as objects, hierarchical data, or tabular data; an EBS volume is a durable, block-level storage device that you can attach to your instances. Left out: the full name "Amazon Elastic Compute Cloud"; the name "Amazon Web Services" (only "AWS Cloud" is used). "On-demand" is written as "চাহিদা অনুযায়ী" ("as needed"), which has the same meaning. Cites are on the same facts as in the Technical panel. |

Open FAILs after round 5: 0

Not checked: the fact check used only the lead sentence of each source, not the rest of S1, S2, or S3.

Open FAILs: 0
