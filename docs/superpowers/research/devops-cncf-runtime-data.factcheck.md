# Fact check: devops / cncf-runtime-data

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep and Glob only; no web access) that did not write the page. It was given only the page and the visible text of the sources that the page cites, fetched on 2026-11-05 with a plain GET: S1 https://www.cncf.io/about/who-we-are/; S2 https://www.cncf.io/projects/; S3 https://containerd.io/; S4 https://rook.io/. It had to quote a source file for every PASS, and a script then looked each quoted phrase up in the source text (a PASS whose quote is not in the sources does not count). The facts of the Technical panel were checked again in every round; the Layman and Bangla panels were rewritten after round 3 (see the voices report). The author's own script check is `python3 scripts/devops_claimcheck.py`. No person has read this page: the English and the Bangla were judged by an agent only. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

## Fact check: devops / cncf-runtime-data (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Open-source projects that run containers, schedule work, and store data in a cloud-native system." | none | FAIL | The lede has no cite. No source says the projects "schedule work". The word "schedul" appears in S2 only as the category label "Scheduling & Orchestration". Fix: add cites, or limit the lede to what the sources say. S3 says "container runtime". S4 says "Open-Source, Cloud-Native Storage for Kubernetes". |
| 1 | The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure. | 1 | PASS | S1: "The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure." |
| 2 | Its graduated and incubating projects are considered stable and are used successfully in production environments. | 2 | PASS | S2: "Graduated and incubating projects are considered stable and are used successfully in production environments." |
| 3 | containerd is an industry-standard container runtime with an emphasis on simplicity, robustness and portability. | 3 | PASS | S3: "An industry-standard container runtime with an emphasis on simplicity, robustness and portability" |
| 4 | Rook turns distributed storage systems into self-managing, self-scaling, self-healing storage services. | 4 | PASS | S4: "Rook turns distributed storage systems into self-managing, self-scaling, self-healing storage services." |

Open FAILs after round 1: 1

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

## Fact check: devops / cncf-runtime-data (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "The CNCF, containerd, and Rook. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The sentence describes the page itself. It is not a fact about a tool, product, command, or number. |
| 1 | The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure | S1 | PASS | S1: "The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure." |
| 2 | Its graduated and incubating projects are considered stable and are used successfully in production environments | S2 | PASS | S2: "Graduated and incubating projects are considered stable and are used successfully in production environments." |
| 3 | containerd is an industry-standard container runtime with an emphasis on simplicity, robustness and portability | S3 | PASS | S3: "An industry-standard container runtime with an emphasis on simplicity, robustness and portability" |
| 4 | Rook turns distributed storage systems into self-managing, self-scaling, self-healing storage services | S4 | PASS | S4: "Rook turns distributed storage systems into self-managing, self-scaling, self-healing storage services." |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

## Fact check: devops / cncf-runtime-data (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "The CNCF, containerd, and Rook. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The line names the topics and describes the page itself. It gives no fact about a tool, product, command or number. |
| 1 | The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure | S1 | PASS | pages/S1.txt: "The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure." |
| 2 | Its graduated and incubating projects are considered stable and are used successfully in production environments | S2 | PASS | pages/S2.txt: "Graduated and incubating projects are considered stable and are used successfully in production environments." |
| 3 | containerd is an industry-standard container runtime with an emphasis on simplicity, robustness and portability | S3 | PASS | pages/S3.txt: "containerd – An industry-standard container runtime with an emphasis on simplicity, robustness and portability" |
| 4 | Rook turns distributed storage systems into self-managing, self-scaling, self-healing storage services | S4 | PASS | pages/S4.txt: "Rook turns distributed storage systems into self-managing, self-scaling, self-healing storage services." |

Open FAILs after round 4: 0

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

## Fact check: devops / cncf-runtime-data (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0a | Lede: "The CNCF, containerd, and Rook. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | This text describes the page itself. It gives no fact about a tool, product, command, or number. The nav description line ("The CNCF, containerd, and Rook.") is also N/A. |
| 1 | The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure | 1 | PASS | S1: "The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure." |
| 2 | Its graduated and incubating projects are considered stable and are used successfully in production environments | 2 | PASS | S2: "Graduated and incubating projects are considered stable and are used successfully in production environments." |
| 3 | containerd is an industry-standard container runtime with an emphasis on simplicity, robustness and portability | 3 | PASS | S3: "An industry-standard container runtime with an emphasis on simplicity, robustness and portability" |
| 4 | Rook turns distributed storage systems into self-managing, self-scaling, self-healing storage services | 4 | PASS | S4: "Rook turns distributed storage systems into self-managing, self-scaling, self-healing storage services." |

Open FAILs after round 5: 0

Open FAILs: 0
