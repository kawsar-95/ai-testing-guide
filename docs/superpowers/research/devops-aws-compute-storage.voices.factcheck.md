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

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md). Round 6 and later check the new text with the brief of the full pages.

## Round 6 (2026-11-18)

# Voices fact check: devops / aws-compute-storage (round 6)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. "gives you computing capacity ... on demand, and you can scale it" restates "on-demand, scalable". Nothing is left out. |
| What it is | Bangla | PASS | Meaning matches the Technical panel. Product names stay in English. Nothing is left out. |
| How it works | Layman | PASS | Near-identical to the Technical panel. Wording changes only: "cost money" for "incur charges", "kept" for "preserved", "goes through" for "transitions through". Nothing is left out. |
| How it works | Bangla | FAIL | One sentence changes meaning. "একটা object-এর প্রতিটা version যতবার রাখা ও স্থানান্তরিত হয়, প্রতিবারের জন্য স্বাভাবিক S3 হার প্রযোজ্য" says rates apply each time a version is stored or transferred. The Technical panel says "Normal S3 rates apply for every version of an object that is stored and transferred". Fix: "প্রতিটা version যা রাখা ও স্থানান্তরিত হয়, তার জন্য স্বাভাবিক S3 হার প্রযোজ্য". The rest of the panel is faithful, and its code and table match. Left out: nothing else. |
| Try it | Layman | PASS | Same text as the Technical panel, and the code blocks are identical. Nothing is left out. |
| Try it | Bangla | PASS | The facts, cites and code blocks match the Technical panel. Left out: nothing. |
| How a tester uses it | Layman | PASS | Same text as the Technical panel. Nothing is left out. |
| How a tester uses it | Bangla | PASS | Faithful to the Technical panel. Left out: nothing. |
| Common mistakes | Layman | FAIL | The private-key bullet adds "So there is no way to recover a private key if you lose it". The Technical panel of this section says only "EC2 doesn't keep a copy of your private key" and "Anyone who possesses it can connect...". Fix: remove the added sentence, or add it to the Technical panel (S8 supports it). The other bullets match. Left out: nothing. |
| Common mistakes | Bangla | FAIL | The same added fact: "তাই private key হারালে তা ফিরে পাওয়ার কোনো উপায় নেই" is not in this section's Technical panel. Fix: same as Layman. The other bullets match. Left out: nothing. |
| What a tester can check | Layman | PASS | Same callout, "Tutorial advice". No tool fact is added. |
| What a tester can check | Bangla | PASS | A faithful translation of the callout, "Tutorial advice". No tool fact is added. |

Open FAILs after round 6: 3

Changed after this round: How it works, Bangla: the rates sentence now says "প্রতিটা version, যা রাখা ও স্থানান্তরিত হয়, তার জন্য স্বাভাবিক S3 হার প্রযোজ্য", as the Technical panel. Common mistakes, Technical, Layman, and Bangla: the private-key bullet now says that EC2 doesn't keep a copy of your private key, so there is no way to recover a private key if you lose it, with the cite of S8, in all three panels.

## Round 7 (2026-11-18)

# Voices fact check: devops / aws-compute-storage (round 7)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact and cite matches the Technical panel. Left out: nothing of substance. The text only rewords ("gives you computing capacity … on demand, and you can scale it"; "decides the hardware"). |
| What it is | Bangla | PASS | Meaning matches the Technical panel. Left out: nothing of substance. "by default" is kept for S3 private. |
| How it works | Layman | PASS | Facts, numbers, table, and cites match the Technical panel. Only small rewording ("cost money" for "incur charges", "kept" for "preserved"). Left out: nothing. |
| How it works | Bangla | PASS | I could read all sentences. Facts, numbers, limits ("by default", "in general", "any time"), table, and cites match the Technical panel. Left out: nothing of substance. |
| Try it | Layman | PASS | The panel is a word-for-word copy of the Technical panel. It adds no fact, and the code blocks are identical. It is no plainer than the Technical panel. Left out: nothing. |
| Try it | Bangla | PASS | Facts, numbers, and cites match the Technical panel. Code blocks are identical to the Technical panel. Left out: nothing of substance. |
| How a tester uses it | Layman | PASS | The panel is a word-for-word copy of the Technical panel. Nothing is added and nothing is left out. |
| How a tester uses it | Bangla | PASS | Meaning matches the Technical panel. "always" (restore the previous version, effective permissions) is kept, and the cites match. Left out: nothing of substance. |
| Common mistakes | Layman | PASS | The panel is a near copy of the Technical panel. It splits one sentence into two (private key). It adds nothing and leaves nothing out. |
| Common mistakes | Bangla | PASS | Meaning matches the Technical panel, including the "multipart" gap that the Technical panel also has (row 223). "by default" is kept. Left out: nothing of substance. |
| What a tester can check | Layman | PASS | The callout is a word-for-word copy of the Technical panel. |
| What a tester can check | Bangla | PASS | Each of the 13 items and the intro line match the Technical callout in meaning. Product names and commands stay in English. Left out: nothing. |

Open FAILs after round 7: 0

Changed after this round: No FAIL in this round. The Layman and Bangla panels got the same edits as the Technical panel.

## Round 8 (2026-11-18)

# Voices fact check: devops / aws-compute-storage (round 8)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Facts and cites match the Technical panel. Rewordings only: "scalable" becomes "you can scale it", "determines" becomes "decides". Leaves out nothing. |
| What it is | Bangla | PASS | Facts and cites match the Technical panel. Leaves out nothing. |
| How it works | Layman | PASS | Same text as the Technical panel, with plain rewordings ("incur charges" becomes "cost money", "preserved" becomes "kept"). The table is the same. Leaves out nothing. |
| How it works | Bangla | PASS | Every number, state, name, and "by default" limit is kept. In "any data on its instance store volumes", "any" becomes "সব" (all), which is the same meaning. The "In general" limit on presigned URL expiry is kept. Leaves out nothing important. |
| Try it | Layman | PASS | Same as the Technical panel, including the run record, the code blocks, and the cites. Leaves out nothing. |
| Try it | Bangla | PASS | Facts, numbers, and code blocks match the Technical panel (the code blocks are the same). The run record stays labelled as the tutorial's run. Leaves out nothing. |
| How a tester uses it | Layman | PASS | Same as the Technical panel, with the same cites. Leaves out nothing. |
| How a tester uses it | Bangla | PASS | Matches the Technical panel. "AWS বলে" attributions, "you can always restore", "first" for NTP, and the 30-day example are kept. Leaves out nothing. |
| Common mistakes | Layman | PASS | Same as the Technical panel. Only "EC2 doesn't keep a copy... So there is no way" is split into two sentences. Leaves out nothing. |
| Common mistakes | Bangla | PASS | Matches the Technical panel, including the limits "by default", "for general purpose buckets", and "might be acceptable". Leaves out nothing. |
| What a tester can check | Layman | PASS | Callout is the same as the Technical panel. Leaves out nothing. |
| What a tester can check | Bangla | PASS | All 13 tips are kept with the same meaning. Leaves out nothing. |

Open FAILs after round 8: 0

Changed after this round: No FAIL in this round. The Layman and Bangla panels got the same edits as the Technical panel.

## Round 9 (2026-11-18)

# Voices fact check: devops / aws-compute-storage (round 9)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Same facts, shorter wording. "scalable" becomes "you can scale it". Left out: the "By default" limit stays in. Nothing meaningful is left out. |
| What it is | Bangla | PASS | Same facts. Product names stay in English. Left out: the security group wording is plain, with no dropped limit. |
| How it works | Layman | PASS | Near copy of the Technical panel. The only changes are "goes through" for "transitions", "cost money" for "incur charges", and "keep" for "preserve". The two-minute warning is reordered but says the same. Nothing is left out. |
| How it works | Bangla | PASS | Every sentence checked against the Technical panel: states, billing, reboot/stop/hibernate/terminate, DeleteOnTermination, table, buying options, Spot, AMI, key pair, user data, IMDS, EBS, snapshots, S3 classes, versioning, lifecycle, BPA, presigned URLs, consistency. Cites match. Limits are kept ("by default", "শুধু", "সাধারণভাবে"). Left out: nothing material. |
| Try it | Layman | FAIL | The Layman panel copies the bucket-name sentence with <Cite n={10} />. S10 says "By default... each bucket name must be unique across all AWS accounts... within a partition" and also describes an account regional namespace. The sentence drops "By default", so the claim is stronger than the source. The Technical panel has the same fault. Fix: add "By default". Left out: nothing else. |
| Try it | Bangla | FAIL | The Bangla panel gives the same bucket-name sentence ("প্রতিটা general purpose bucket-এর নাম ... অনন্য হতে হবে") with <Cite n={10} /> and no "by default". The source limits it with "By default", so the claim is stronger. Fix: add "by default". The code blocks match the Technical panel. The rest is faithful. Left out: nothing else. |
| How a tester uses it | Layman | PASS | Identical to the Technical panel. Nothing is left out. |
| How a tester uses it | Bangla | PASS | Faithful. "সবসময়", "শুধু" and the "30 দিন" example are kept. Left out: nothing material. |
| Common mistakes | Layman | PASS | Same facts. The only change is that one sentence is split in two ("EC2 doesn't keep... So there is no way..."). Nothing is left out. |
| Common mistakes | Bangla | PASS | Faithful. "by default" and the scope of each claim are kept. Left out: nothing material. |
| What a tester can check | Layman | PASS | Identical to the Technical panel. Nothing is left out. |
| What a tester can check | Bangla | PASS | Faithful to the Technical panel, including the callout title and every bullet. Nothing is left out. |

Open FAILs after round 9: 2

Changed after this round: Try it, Layman and Bangla: the bucket-name sentence has "By default" and the sentence on the account regional namespace, as the Technical panel. How it works, Bangla: the Block Public Access sentence has the clause "যাতে আপনি এই resource-গুলোতে public access সীমিত করতে পারেন", as the Technical panel. Step 3, Bangla: the sentence on `aws ec2 run-instances` has its cite.

## Round 10 (2026-11-18)

# Voices fact check: devops / aws-compute-storage (round 10)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. Cites are on the same facts. "gives you computing capacity ... on demand, and you can scale it" restates "on-demand, scalable computing capacity". "decides the hardware that your instance gets" restates "determines". Left out: nothing. |
| What it is | Bangla | PASS | Meaning matches the Technical panel sentence by sentence. Product names stay in English. Left out: nothing. |
| How it works | Layman | PASS | Near copy of the Technical panel. "cost money" restates "incur charges". "kept" restates "preserve". Two sentences were split with the same cite: Spot notice and "So there is no way to recover". The table is the same. Left out: nothing. |
| How it works | Bangla | PASS | Numbers, limits, and defaults are kept: 1 minute, 16 KB, 1 second to 6 hours, 99.999%, 99.8% to 99.9%, 15 minutes, 1 minute to 12 hours, 7 days. "by default" and "in general" are kept where the Technical panel has them. The table cells match the Technical panel. Left out: nothing. |
| Try it | Layman | PASS | Identical to the Technical panel. The code blocks are the same. Left out: nothing. |
| Try it | Bangla | PASS | Same facts as the Technical panel. The code blocks, commands, and outputs are identical. "Free Tier eligible" and "Cost for this tutorial" are kept in English. Left out: nothing. |
| How a tester uses it | Layman | PASS | Identical to the Technical panel. Left out: nothing. |
| How a tester uses it | Bangla | PASS | Same facts as the Technical panel. "always" (restore previous version; Get*Acl) and "even if idle" are kept. Left out: nothing. |
| Common mistakes | Layman | PASS | Same as the Technical panel; one sentence is split in two with the same cite. Left out: nothing. |
| Common mistakes | Bangla | PASS | Same facts as the Technical panel. Limits such as "by default", "only", "never", and "might" are kept. Left out: nothing. |
| What a tester can check | Layman | PASS | The callout is identical to the Technical panel's callout. Left out: nothing. |
| What a tester can check | Bangla | PASS | All 13 advice items are translated with the same meaning. No fact or advice is added. Left out: nothing. |

Open FAILs after round 10: 0

Open FAILs: 0
