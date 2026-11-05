# Voices fact check: devops / aws-data-serverless

Checked by an independent agent. Each Layman and Bangla panel was compared with the Technical panel of the same block, sentence by sentence, by a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page. Rounds 1 to 3 used a strict standard (PASS: the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker). From round 4 the standard is the rule of CLAUDE.md, "Layman and Bangla give no fact that Technical does not give": PASS if every fact of the sentence is in the Technical panel, the meaning is not stronger, weaker, or different, and the cite is a cite of the Technical panel on the same fact; left-out details are allowed, and the checker lists them in its note; FAIL if a fact is added or changed, the meaning is stronger, weaker, or different, a limiting word was dropped so that the claim says more, or a cite is on a sentence that its source does not support. The checker judged the Bangla by its meaning and had to say when it could not read a sentence well enough to judge it. No person who reads Bangla has read this page. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / aws-data-serverless (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | Facts were dropped or changed against the Technical panel. (a) DynamoDB loses "serverless" and "distributed": it says only "a managed NoSQL database". (b) Athena loses "interactive" and "directly". It also says "files in S3", but the Technical panel and S3 say "data". (c) Step Functions loses "state machines" and every use case: distributed applications, process automation, microservices orchestration, and data and ML pipelines. It also says "connects steps", which the Technical panel does not say. (d) Lambda's "provisioning" is dropped. The cites are in the right places. |
| What it is | Bangla | FAIL | The Bangla matches the Layman panel and has the same gaps. (a) DynamoDB is "managed NoSQL ডেটাবেস", with no serverless and no distributed. (b) Athena is "S3-এর ফাইলে SQL চালানো", which says "files" and drops "interactive" and "analyze". (c) Step Functions is "বিভিন্ন ধাপ জুড়ে একটা workflow বানায়", which drops state machines and all the use cases. (d) Lambda drops "provisioning". I could read all the sentences well enough to judge them. The cites are in the right places. |

Open FAILs after round 1: 2

Skipped: I did not check the Technical panel for claims that are missing from it. I only checked what it states. Risk: the lede is the only fact line with no cite, and I judged the Layman and Bangla panels strictly against the Technical panel. A looser reading of "simplified" would pass them.

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / aws-data-serverless (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | The four sentences and the cites 1-4 are word for word the same as the Technical panel. No fact is added, dropped, or changed. |
| What it is | Bangla | PASS | All four sentences match the Technical panel in meaning, and each has the same cite (1, 2, 3, 4). Lambda: run code without provisioning or managing servers. DynamoDB: serverless, fully managed, distributed NoSQL database. Athena: interactive query service that analyzes data directly in Amazon S3 using standard SQL. Step Functions: workflows, also called state machines, for distributed applications, process automation, microservice orchestration, and data and machine learning pipelines. Product names and terms stay in English. No fact is added, dropped, or changed. |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / aws-data-serverless (round 4)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | "With AWS Step Functions, you create workflows" drops the limit "can" from the Technical sentence "you can create workflows". The plain sentence now says you do create workflows, which is stronger than the source. Fix: "you can create workflows". The other three blocks are faithful, and each cite is on the same fact as the Technical panel. "setting up" for "provisioning" and "it is easy to do" for "makes it easy" are acceptable rewordings. Details left out: "single-digit millisecond" is not in the Technical panel, so nothing is missing there. The only change in wording is that "Amazon S3" is not expanded, and the Technical panel does not expand it either. |
| What it is | Bangla | FAIL | "AWS Step Functions দিয়ে আপনি workflow বানান" has the same problem. It drops "can" and says "you make workflows", not "you can make workflows". Fix: "workflow বানাতে পারেন". The Lambda, DynamoDB and Athena sentences match the Technical panel in meaning. Cites are correct. I can read the Bangla well enough to judge it. Nothing in the Technical panel is left out apart from the wording of the rewording noted for Layman. |

Open FAILs after round 4: 2

Skipped: I did not check the sources beyond the four cited sentences. Risk: the "can" verdicts are a strict reading of the repo rule. A reviewer may accept them as harmless.

Changed after this round: Layman and Bangla: "you create workflows" went back to "you can create workflows" (the limit "can" of the Technical sentence).

## Round 5 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / aws-data-serverless (round 5)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Each of the four sentence groups restates one Technical sentence, and each cite sits on the same fact. "Setting up" stands for "provisioning". "It is easy to do" stands for "makes it easy to analyze". Both keep the Technical meaning. Left out: the word "provisioning". The word "makes" in "makes it easy". The word "directly" is kept. Nothing was added. |
| What it is | Bangla | PASS | I can read the Bangla well enough to judge it. It restates the same four Technical facts with correct cites. "পরিচালনা না করেই" matches "or managing", "সরাসরি" matches "directly", and "আর এটা সহজ" matches "makes it easy". Left out: the DynamoDB sentence says "NoSQL database" first and then lists the three traits, as the Layman panel does. The wording "makes it easy" is simplified to "এটা সহজ". Nothing was added, and no limit was dropped. |

Open FAILs after round 5: 0

I did not check the cited AWS pages beyond the quoted lines. I only searched the four source files, as you asked.

Open FAILs: 0
