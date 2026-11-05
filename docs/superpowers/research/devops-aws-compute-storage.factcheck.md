# Fact check: devops / aws-compute-storage

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep and Glob only; no web access) that did not write the page. It was given only the page and the visible text of the sources that the page cites, fetched on 2026-11-05 with a plain GET: S1 https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html; S2 https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html; S3 https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes.html. It had to quote a source file for every PASS, and a script then looked each quoted phrase up in the source text (a PASS whose quote is not in the sources does not count). The facts of the Technical panel were checked again in every round; the Layman and Bangla panels were rewritten after round 3 (see the voices report). The author's own script check is `python3 scripts/devops_claimcheck.py`. No person has read this page: the English and the Bangla were judged by an agent only. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

## Fact check: devops / aws-compute-storage (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: "EC2 instances, EBS volumes, and S3. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | This text describes the page. It is not a fact about a tool, product, command, or number. |
| 2 | Amazon Elastic Compute Cloud (Amazon EC2) provides on-demand, scalable computing capacity in the Amazon Web Services (AWS) Cloud | S1 | PASS | "Amazon Elastic Compute Cloud (Amazon EC2) provides on-demand, scalable computing capacity in the Amazon Web" (S1 line 3; the line is cut after "Web", so the words "Services (AWS) Cloud" are not in my grep output). |
| 3 | Amazon S3 is an object storage service that stores data as objects within buckets | S2 | FAIL | S2 says: "Amazon S3 is an object storage service that stores data as objects, hierarchical data, or tabular data within buckets." The page drops "hierarchical data, or tabular data" and so implies that objects are the only data type. Fix: "Amazon S3 is an object storage service that stores data as objects, hierarchical data, or tabular data within buckets." |
| 4 | An Amazon EBS volume is a durable, block-level storage device that you can attach to your instances | S3 | PASS | "An Amazon EBS volume is a durable, block-level storage device that you can attach to your instances." |

Open FAILs after round 1: 1

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains. The Technical sentence on S3 now gives the wording of S2 in full: "stores data as objects, hierarchical data, or tabular data within buckets".

## Round 2 (2026-11-05)

## Fact check: devops / aws-compute-storage (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "EC2, S3, and EBS. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | Sentence that describes the page itself. It is not a fact about a tool, product, command, or number. |
| 1 | Amazon EC2 provides on-demand, scalable computing capacity in the AWS Cloud | S1 | PASS | S1: "Amazon Elastic Compute Cloud (Amazon EC2) provides on-demand, scalable computing capacity in the Amazon Web" + "Services (AWS) Cloud" |
| 2 | Amazon S3 is an object storage service that stores data as objects, hierarchical data, or tabular data within buckets | S2 | PASS | S2: "Amazon S3 is an object storage service that stores data as objects, hierarchical data, or tabular data within buckets." |
| 3 | An Amazon EBS volume is a durable, block-level storage device that you can attach to your instances | S3 | PASS | S3: "An Amazon EBS volume is a durable, block-level storage device that you can attach to your" + "instances." |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

## Fact check: devops / aws-compute-storage (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "EC2, S3, and EBS. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | This sentence describes the page itself. It is not a fact about a tool, product, command, or number. |
| 1 | Amazon EC2 provides on-demand, scalable computing capacity in the AWS Cloud | S1 | PASS | S1: "Amazon Elastic Compute Cloud (Amazon EC2) provides on-demand, scalable computing capacity in the Amazon Web Services (AWS) Cloud." |
| 2 | Amazon S3 is an object storage service that stores data as objects, hierarchical data, or tabular data within buckets | S2 | PASS | S2: "Amazon S3 is an object storage service that stores data as objects, hierarchical data, or tabular data within buckets." |
| 3 | An Amazon EBS volume is a durable, block-level storage device that you can attach to your instances | S3 | PASS | S3: "An Amazon EBS volume is a durable, block-level storage device that you can attach to your" (the sentence continues on the next line: "instances"). |

Open FAILs after round 4: 0

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

## Fact check: devops / aws-compute-storage (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "EC2, S3, and EBS. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | This sentence describes the page itself. It is not a fact about a tool, product, command, or number. |
| 1 | Amazon EC2 provides on-demand, scalable computing capacity in the AWS Cloud | S1 | PASS | S1.txt: "Amazon Elastic Compute Cloud (Amazon EC2) provides on-demand, scalable computing capacity in the Amazon Web ... Services (AWS) Cloud." |
| 2 | Amazon S3 is an object storage service that stores data as objects, hierarchical data, or tabular data within buckets | S2 | PASS | S2.txt: "Amazon S3 is an object storage service that stores data as objects, hierarchical data, or tabular data within buckets." |
| 3 | An Amazon EBS volume is a durable, block-level storage device that you can attach to your instances | S3 | PASS | S3.txt: "An Amazon EBS volume is a durable, block-level storage device that you can attach to your instances." (the line breaks between "your" and "instances") |

Open FAILs after round 5: 0

Open FAILs: 0
