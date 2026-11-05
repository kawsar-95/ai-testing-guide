# Fact check: devops / aws-data-serverless

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep and Glob only; no web access) that did not write the page. It was given only the page and the visible text of the sources that the page cites, fetched on 2026-11-05 with a plain GET: S1 https://docs.aws.amazon.com/lambda/latest/dg/welcome.html; S2 https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html; S3 https://docs.aws.amazon.com/athena/latest/ug/what-is.html; S4 https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html. It had to quote a source file for every PASS, and a script then looked each quoted phrase up in the source text (a PASS whose quote is not in the sources does not count). The facts of the Technical panel were checked again in every round; the Layman and Bangla panels were rewritten after round 3 (see the voices report). The author's own script check is `python3 scripts/devops_claimcheck.py`. No person has read this page: the English and the Bangla were judged by an agent only. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

## Fact check: devops / aws-data-serverless (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "RDS, DynamoDB, Neptune, Athena, Lambda, Step Functions, and Fargate. A short explanation with its sources comes first." | none | FAIL | The lede names seven services but cites nothing. The four sources cover only Lambda, DynamoDB, Athena and Step Functions. A grep of `pages/*.txt` finds no "RDS" and no "Neptune". "Fargate" appears once, in S4, only as a list entry: "Amazon ECS/Fargate". No source describes it. Fix: name only the four covered services, or add sources for RDS, Neptune and Fargate. The second sentence describes the page itself (N/A). |
| 1 | AWS Lambda is a serverless compute service: you can run code without provisioning or managing servers | 1 | PASS | S1: "AWS Lambda is a serverless compute service. With Lambda, you can run code without provisioning or managing servers." The words are split across lines 3-4 of the file. |
| 2 | Amazon DynamoDB is a serverless, fully managed, distributed NoSQL database | 2 | PASS | S2: "Amazon DynamoDB is a serverless, fully managed, distributed NoSQL database with single-digit millisecond performance at any scale." |
| 3 | Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon S3 using standard SQL | 3 | PASS | S3: "Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon Simple Storage Service (Amazon S3) using standard SQL." |
| 4 | With AWS Step Functions, you can create workflows, also called state machines, to build distributed applications, automate processes, orchestrate microservices, and create data and machine learning pipelines | 4 | PASS | S4: "With AWS Step Functions, you can create workflows, also called State machines, to build distributed applications, automate processes, orchestrate microservices, and create data and machine learning pipelines." |

Open FAILs after round 1: 1

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

## Fact check: devops / aws-data-serverless (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "AWS Lambda, DynamoDB, Athena, and Step Functions. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | It lists the topic names and describes the page itself. It states no fact about a tool. |
| 1 | AWS Lambda is a serverless compute service: you can run code without provisioning or managing servers | S1 | PASS | "AWS Lambda is a serverless compute service. With Lambda, you can run code without provisioning or managing servers." The words are split across lines 3-4 of S1.txt. |
| 2 | Amazon DynamoDB is a serverless, fully managed, distributed NoSQL database | S2 | PASS | "Amazon DynamoDB is a serverless, fully managed, distributed NoSQL database with single-digit millisecond performance at any scale." |
| 3 | Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon S3 using standard SQL | S3 | PASS | "Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon Simple Storage Service (Amazon S3) using standard SQL." The words are split across lines 3-4 of S3.txt. |
| 4 | With AWS Step Functions, you can create workflows, also called state machines, to build distributed applications, automate processes, orchestrate microservices, and create data and machine learning pipelines | S4 | PASS | "With AWS Step Functions, you can create workflows, also called State machines, to build distributed applications, automate processes, orchestrate microservices, and create data and machine learning pipelines." The words are split across lines 3-4 of S4.txt. |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

## Fact check: devops / aws-data-serverless (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "AWS Lambda, DynamoDB, Athena, and Step Functions. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | It describes the page itself. It is not a fact about a tool, product, command, or number. |
| 1 | AWS Lambda is a serverless compute service: you can run code without provisioning or managing servers | S1 | PASS | "AWS Lambda is a serverless compute service. With Lambda, you can run code without provisioning or managing servers." |
| 2 | Amazon DynamoDB is a serverless, fully managed, distributed NoSQL database | S2 | PASS | "Amazon DynamoDB is a serverless, fully managed, distributed NoSQL database with single-digit millisecond performance at any scale." |
| 3 | Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon S3 using standard SQL | S3 | PASS | "Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon Simple Storage Service (Amazon S3) using standard SQL." |
| 4 | With AWS Step Functions, you can create workflows, also called state machines, to build distributed applications, automate processes, orchestrate microservices, and create data and machine learning pipelines | S4 | PASS | "With AWS Step Functions, you can create workflows, also called State machines, to build distributed applications, automate processes, orchestrate microservices, and create data and machine learning pipelines." |

Open FAILs after round 4: 0

Changed after this round: Layman and Bangla: "you create workflows" went back to "you can create workflows" (the limit "can" of the Technical sentence).

## Round 5 (2026-11-05)

## Fact check: devops / aws-data-serverless (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "AWS Lambda, DynamoDB, Athena, and Step Functions. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The line names the topics and describes the page itself. It states no fact about a tool. |
| 1 | AWS Lambda is a serverless compute service: you can run code without provisioning or managing servers | S1 | PASS | S1: "AWS Lambda is a serverless compute service. With Lambda, you can run code without provisioning or managing servers." |
| 2 | Amazon DynamoDB is a serverless, fully managed, distributed NoSQL database | S2 | PASS | S2: "DynamoDB is a serverless, fully managed, distributed NoSQL database with single-digit millisecond performance at any scale." |
| 3 | Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon S3 using standard SQL | S3 | PASS | S3: "Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon Simple Storage Service (Amazon S3) using standard SQL." |
| 4 | With AWS Step Functions, you can create workflows, also called state machines, to build distributed applications, automate processes, orchestrate microservices, and create data and machine learning pipelines | S4 | PASS | S4: "With AWS Step Functions, you can create workflows, also called State machines, to build distributed applications, automate processes, orchestrate microservices, and create data and machine learning pipelines." |

Open FAILs after round 5: 0

Open FAILs: 0
