# Fact check: devops / terraform-iac

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep and Glob only; no web access) that did not write the page. It was given only the page and the visible text of the sources that the page cites, fetched on 2026-11-05 with a plain GET: S1 https://developer.hashicorp.com/terraform/intro; S2 https://developer.hashicorp.com/packer/docs/intro; S3 https://docs.crossplane.io/latest/. It had to quote a source file for every PASS, and a script then looked each quoted phrase up in the source text (a PASS whose quote is not in the sources does not count). The facts of the Technical panel were checked again in every round; the Layman and Bangla panels were rewritten after round 3 (see the voices report). The author's own script check is `python3 scripts/devops_claimcheck.py`. No person has read this page: the English and the Bangla were judged by an agent only. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

## Fact check: devops / terraform-iac (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Terraform, Crossplane, Pulumi, Packer, and Terragrunt. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | It lists topic names and describes the page itself. It states no fact about a tool, command or number. |
| 1 | Terraform is an infrastructure as code tool that lets you build, change, and version cloud and on-prem resources safely and efficiently | S1 | PASS | "Terraform is an infrastructure as code tool that lets you build, change, and version cloud and on-prem resources safely and efficiently." |
| 2 | Packer is a community tool for creating identical machine images for multiple platforms from a single source configuration | S2 | PASS | "Packer is a community tool for creating identical machine images for multiple platforms from a single source configuration." |
| 3 | Crossplane is a control plane framework for platform engineering | S3 | PASS | "Crossplane is a control plane framework for platform engineering." |

Open FAILs after round 1: 0

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

## Fact check: devops / terraform-iac (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Terraform, Packer, and Crossplane. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The sentence describes the page itself. It states no fact about a tool, product, command, or number. |
| 1 | Terraform is an infrastructure as code tool that lets you build, change, and version cloud and on-prem resources safely and efficiently | S1 | PASS | pages/S1.txt: "Terraform is an infrastructure as code tool that lets you build, change, and version cloud and on-prem resources safely and efficiently." |
| 2 | Packer is a community tool for creating identical machine images for multiple platforms from a single source configuration | S2 | PASS | pages/S2.txt: "Packer is a community tool for creating identical machine images for multiple platforms from a single source configuration." The sentence runs across a line break. |
| 3 | Crossplane is a control plane framework for platform engineering | S3 | PASS | pages/S3.txt: "Crossplane is a control plane framework for platform engineering." The sentence runs across a line break. |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

## Fact check: devops / terraform-iac (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Terraform, Packer, and Crossplane. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | This sentence describes the page itself. It gives no fact about a tool. |
| 1 | Terraform is an infrastructure as code tool that lets you build, change, and version cloud and on-prem resources safely and efficiently | S1 | PASS | "Terraform is an infrastructure as code tool that lets you build, change, and version cloud and on-prem resources safely and efficiently." |
| 2 | Packer is a community tool for creating identical machine images for multiple platforms from a single source configuration | S2 | PASS | "Packer is a community tool for creating identical machine images for multiple platforms from a single source configuration." |
| 3 | Crossplane is a control plane framework for platform engineering | S3 | PASS | "Crossplane is a control plane framework for platform engineering." |

Open FAILs after round 4: 0

Changed after this round: Layman and Bangla: Crossplane is again "a control plane framework" (the plain text had split it into "a framework" and "a control plane").

## Round 5 (2026-11-05)

## Fact check: devops / terraform-iac (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Terraform, Packer, and Crossplane. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The line describes the page itself. It names the three tools but gives no fact about them. |
| 1 | Terraform is an infrastructure as code tool that lets you build, change, and version cloud and on-prem resources safely and efficiently | S1 | PASS | S1: "Terraform is an infrastructure as code tool that lets you build, change, and version cloud and on-prem resources safely and efficiently." |
| 2 | Packer is a community tool for creating identical machine images for multiple platforms from a single source configuration | S2 | PASS | S2: "Packer is a community tool for creating identical machine images for multiple platforms from a single source configuration." |
| 3 | Crossplane is a control plane framework for platform engineering | S3 | PASS | S3: "Crossplane is a control plane framework for platform engineering." |

Open FAILs after round 5: 0

Open FAILs: 0
