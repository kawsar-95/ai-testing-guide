# Fact check: devops / aws-identity-security

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep and Glob only; no web access) that did not write the page. It was given only the page and the visible text of the sources that the page cites, fetched on 2026-11-05 with a plain GET: S1 https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html; S2 https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html; S3 https://docs.aws.amazon.com/kms/latest/developerguide/overview.html; S4 https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html. It had to quote a source file for every PASS, and a script then looked each quoted phrase up in the source text (a PASS whose quote is not in the sources does not count). The facts of the Technical panel were checked again in every round; the Layman and Bangla panels were rewritten after round 3 (see the voices report). The author's own script check is `python3 scripts/devops_claimcheck.py`. No person has read this page: the English and the Bangla were judged by an agent only. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

## Fact check: devops / aws-identity-security (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "IAM users, roles, and policies, MFA, KMS, and Secrets Manager. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | It is a topic list and a description of the page itself. It states no fact about a tool, product, command or number. |
| 1 | AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources | S1 | PASS | S1: "AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources." |
| 2 | An IAM role is an IAM identity that you can create in your account that has specific permissions | S2 | PASS | S2: "An IAM role is an IAM identity that you can create in your account" and, in the terms list, "An IAM identity that you can create in your account that has specific permissions." |
| 3 | AWS Key Management Service (AWS KMS) is an AWS managed service that makes it easy for you to create and control the keys used to encrypt and sign your data | S3 | PASS | S3: "AWS Key Management Service (AWS KMS) is an AWS managed service that makes it easy for you to create and control the keys used to encrypt and sign your data." |
| 4 | AWS Secrets Manager helps you manage, retrieve, and rotate database credentials, application credentials, OAuth tokens, API keys, and other secrets throughout their lifecycles | S4 | PASS | S4: "helps you manage, retrieve, and rotate database credentials, application credentials, OAuth tokens, API keys, and other secrets throughout their lifecycles." |

Open FAILs after round 1: 0

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

## Fact check: devops / aws-identity-security (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "IAM and IAM roles, KMS, and Secrets Manager. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The lede names the topics and describes the page itself. It states no fact about a tool, product, command, or number. |
| 1 | AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources | S1 | PASS | "AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources" (the line breaks after "AWS" in the file). |
| 2 | An IAM role is an IAM identity that you can create in your account that has specific permissions | S2 | PASS | "An IAM identity that you can create in your account that has specific permissions." (S2 line 103). The intro says "An IAM role is an IAM identity that you can create in your account". |
| 3 | AWS Key Management Service (AWS KMS) is an AWS managed service that makes it easy for you to create and control the keys used to encrypt and sign your data | S3 | PASS | "AWS Key Management Service (AWS KMS) is an AWS managed service that makes it easy for you to create and control the keys used to encrypt and sign your data." (the line breaks after "create and"). |
| 4 | AWS Secrets Manager helps you manage, retrieve, and rotate database credentials, application credentials, OAuth tokens, API keys, and other secrets throughout their lifecycles | S4 | PASS | "AWS Secrets Manager helps you manage, retrieve, and rotate database credentials, application credentials, OAuth tokens, API keys, and other secrets throughout their lifecycles." |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

## Fact check: devops / aws-identity-security (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "IAM and IAM roles, KMS, and Secrets Manager. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The lede lists the topics and describes the page itself. It states no fact about a tool, product, command, or number. |
| 1 | AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources | S1 | PASS | "AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources." (S1.txt lines 3-4; the sentence breaks across lines) |
| 2 | An IAM role is an IAM identity that you can create in your account that has specific permissions | S2 | PASS | "An IAM identity that you can create in your account that has specific permissions." (S2.txt line 103) |
| 3 | AWS Key Management Service (AWS KMS) is an AWS managed service that makes it easy for you to create and control the keys used to encrypt and sign your data | S3 | PASS | "AWS Key Management Service (AWS KMS) is an AWS managed service that makes it easy for you to create and control the keys used to encrypt and sign your data." (S3.txt lines 3-4) |
| 4 | AWS Secrets Manager helps you manage, retrieve, and rotate database credentials, application credentials, OAuth tokens, API keys, and other secrets throughout their lifecycles | S4 | PASS | "helps you manage, retrieve, and rotate database credentials, application credentials, OAuth tokens, API keys, and other secrets throughout their lifecycles." (S4.txt line 3) |

Open FAILs after round 4: 0

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

## Fact check: devops / aws-identity-security (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "IAM and IAM roles, KMS, and Secrets Manager. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The line names the topics and describes the page itself. It states no fact about a tool, product, command or number. |
| 1 | AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources | S1 | PASS | S1: "AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources." |
| 2 | An IAM role is an IAM identity that you can create in your account that has specific permissions | S2 | PASS | S2: "An IAM role is an IAM identity that you can create in your account that has specific permissions." |
| 3 | AWS Key Management Service (AWS KMS) is an AWS managed service that makes it easy for you to create and control the keys used to encrypt and sign your data | S3 | PASS | S3: "AWS Key Management Service (AWS KMS) is an AWS managed service that makes it easy for you to create and control the keys used to encrypt and sign your data." |
| 4 | AWS Secrets Manager helps you manage, retrieve, and rotate database credentials, application credentials, OAuth tokens, API keys, and other secrets throughout their lifecycles | S4 | PASS | S4: "Secrets Manager helps you manage, retrieve, and rotate database credentials, application credentials, OAuth tokens, API keys, and other secrets throughout their lifecycles." |

Open FAILs after round 5: 0

Open FAILs: 0
