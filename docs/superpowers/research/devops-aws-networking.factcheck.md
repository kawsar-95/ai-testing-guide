# Fact check: devops / aws-networking

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep and Glob only; no web access) that did not write the page. It was given only the page and the visible text of the sources that the page cites, fetched on 2026-11-05 with a plain GET: S1 https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html; S2 https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html; S3 https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html; S4 https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html. It had to quote a source file for every PASS, and a script then looked each quoted phrase up in the source text (a PASS whose quote is not in the sources does not count). The facts of the Technical panel were checked again in every round; the Layman and Bangla panels were rewritten after round 3 (see the voices report). The author's own script check is `python3 scripts/devops_claimcheck.py`. No person has read this page: the English and the Bangla were judged by an agent only. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

## Fact check: devops / aws-networking (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "VPC, subnets, security groups, load balancers, Route 53, and CloudFront. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | This text describes the page itself. It is not a fact about a tool, product, command, or number. |
| 1 | With Amazon VPC, you can launch AWS resources in a logically isolated virtual network that you have defined. | S1 | PASS | "With Amazon Virtual Private Cloud (Amazon VPC), you can launch AWS resources in a logically isolated virtual network that you've defined." |
| 2 | Elastic Load Balancing automatically distributes your incoming traffic across multiple targets. | S2 | PASS | "Elastic Load Balancing automatically distributes your incoming traffic across multiple targets, such as" |
| 3 | Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service. | S3 | PASS | "Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service." |
| 4 | Amazon CloudFront is a web service that speeds up distribution of your static and dynamic web content to your users. | S4 | PASS | "Amazon CloudFront is a web service that speeds up distribution of your static and dynamic web content, such as .html, .css, .js, and image files, to your users." |

Open FAILs after round 1: 0

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

## Fact check: devops / aws-networking (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "VPC, Elastic Load Balancing, Route 53, and CloudFront. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | It lists the topic and describes the page itself. It states no fact about a tool. |
| 1 | With Amazon VPC, you can launch AWS resources in a logically isolated virtual network that you have defined. | S1 | PASS | "With Amazon Virtual Private Cloud (Amazon VPC), you can launch AWS resources in a logically isolated virtual network that you've defined." (the line breaks after "virtual") |
| 2 | Elastic Load Balancing automatically distributes your incoming traffic across multiple targets. | S2 | PASS | "Elastic Load Balancing automatically distributes your incoming traffic across multiple targets, such as" |
| 3 | Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service. | S3 | PASS | "Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service." |
| 4 | Amazon CloudFront is a web service that speeds up distribution of your static and dynamic web content to your users. | S4 | PASS | "Amazon CloudFront is a web service that speeds up distribution of your static and dynamic web content, such as .html, .css, .js, and image files, to your users." |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

## Fact check: devops / aws-networking (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "VPC, Elastic Load Balancing, Route 53, and CloudFront. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The line names the page topics and describes the page itself. |
| 1 | With Amazon VPC, you can launch AWS resources in a logically isolated virtual network that you have defined | S1 | PASS | "With Amazon Virtual Private Cloud (Amazon VPC), you can launch AWS resources in a logically isolated virtual network that you've defined." |
| 2 | Elastic Load Balancing automatically distributes your incoming traffic across multiple targets | S2 | PASS | "Elastic Load Balancing automatically distributes your incoming traffic across multiple targets, such as..." |
| 3 | Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service | S3 | PASS | "Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service." |
| 4 | Amazon CloudFront is a web service that speeds up distribution of your static and dynamic web content to your users | S4 | PASS | "Amazon CloudFront is a web service that speeds up distribution of your static and dynamic web content, such as .html, .css, .js, and image files, to your users." |

Open FAILs after round 4: 0

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

## Fact check: devops / aws-networking (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "VPC, Elastic Load Balancing, Route 53, and CloudFront. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The line names the topics and describes the page itself. It states no fact about a tool, command, or number. |
| 1 | With Amazon VPC, you can launch AWS resources in a logically isolated virtual network that you have defined. | S1 | PASS | "With Amazon Virtual Private Cloud (Amazon VPC), you can launch AWS resources in a logically isolated virtual network that you've defined." |
| 2 | Elastic Load Balancing automatically distributes your incoming traffic across multiple targets. | S2 | PASS | "Elastic Load Balancing automatically distributes your incoming traffic across multiple targets, such as EC2 instances, containers, and IP addresses" |
| 3 | Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service. | S3 | PASS | "Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service." |
| 4 | Amazon CloudFront is a web service that speeds up distribution of your static and dynamic web content to your users. | S4 | PASS | "Amazon CloudFront is a web service that speeds up distribution of your static and dynamic web content, such as .html, .css, .js, and image files, to your users." |

Open FAILs after round 5: 0

Open FAILs: 0
