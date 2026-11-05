# Fact check: devops / docker-images-compose

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep and Glob only; no web access) that did not write the page. It was given only the page and the visible text of the sources that the page cites, fetched on 2026-11-05 with a plain GET: S1 https://docs.docker.com/reference/dockerfile/; S2 https://docs.docker.com/compose/; S3 https://docs.docker.com/build/bake/. It had to quote a source file for every PASS, and a script then looked each quoted phrase up in the source text (a PASS whose quote is not in the sources does not count). The facts of the Technical panel were checked again in every round; the Layman and Bangla panels were rewritten after round 3 (see the voices report). The author's own script check is `python3 scripts/devops_claimcheck.py`. No person has read this page: the English and the Bangla were judged by an agent only. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

## Fact check: devops / docker-images-compose (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: "Build an image with a Dockerfile, and run several containers together with Compose." | none | N/A | This line describes the page. It gives no tool fact that needs a cite. The Dockerfile and Compose facts it contains are cited below (rows 2 and 3). |
| 2 | A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image | S1 | PASS | S1: "A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image." |
| 3 | Docker Compose is a tool for defining and running multi-container applications | S2 | PASS | S2: "Docker Compose is a tool for defining and running multi-container applications." |
| 4 | Bake is a feature of Docker Buildx that lets you define your build configuration using a declarative file | S3 | PASS | S3: "Bake is a feature of Docker Buildx that lets you define your build configuration using a declarative file, as opposed to specifying a complex CLI expression." |

Open FAILs after round 1: 0

Changed after this round: The description of the page (the lede) was cut to what the page explains. The Layman and Bangla panels were not changed: this checker passed them, and the checker of round 2 failed the same text.

## Round 2 (2026-11-05)

## Fact check: devops / docker-images-compose (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Dockerfile, Docker Compose, and Bake. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | It describes the page itself. It states no fact about a tool, product, command, or number. |
| 1 | A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image | S1 | PASS | "A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image." (S1 line 277-278, the line break falls after "a") |
| 2 | Docker Compose is a tool for defining and running multi-container applications | S2 | PASS | "Docker Compose is a tool for defining and running multi-container applications." (S2 line 276) |
| 3 | Bake is a feature of Docker Buildx that lets you define your build configuration using a declarative file | S3 | PASS | "Bake is a feature of Docker Buildx that lets you define your build configuration using a declarative file, as opposed to specifying a complex CLI expression." (S3 lines 276-277) |

Open FAILs after round 2: 0

Changed after this round: Layman and Bangla restate the three Technical sentences without dropping "all the commands a user could call on the command line", "defining", "a feature of Docker Buildx", and "declarative". The round 1 checker passed the earlier voices and the round 2 checker did not; both verdicts are kept here.

## Round 3 (2026-11-05)

## Fact check: devops / docker-images-compose (round 3)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Dockerfile, Docker Compose, and Bake. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | This sentence describes the page itself. It is not a fact about a tool, product, command or number. |
| 1 | A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image | S1 | PASS | S1: "A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image." The source wraps this sentence across lines 277-278. |
| 2 | Docker Compose is a tool for defining and running multi-container applications | S2 | PASS | S2: "Docker Compose is a tool for defining and running multi-container applications." |
| 3 | Bake is a feature of Docker Buildx that lets you define your build configuration using a declarative file | S3 | PASS | S3: "Bake is a feature of Docker Buildx that lets you define your build configuration using a declarative file, as opposed to specifying a complex CLI expression." The source wraps this sentence across lines 276-277. |

Open FAILs after round 3: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

## Fact check: devops / docker-images-compose (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Dockerfile, Docker Compose, and Bake. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The sentence describes the page itself. It gives no fact about a tool. |
| 1 | A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image | S1 | PASS | S1: "A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image." |
| 2 | Docker Compose is a tool for defining and running multi-container applications | S2 | PASS | S2: "Docker Compose is a tool for defining and running multi-container applications." |
| 3 | Bake is a feature of Docker Buildx that lets you define your build configuration using a declarative file | S3 | PASS | S3: "Bake is a feature of Docker Buildx that lets you define your build configuration using a declarative file, as opposed to specifying a complex CLI expression." |

Open FAILs after round 4: 0

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

## Fact check: devops / docker-images-compose (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Dockerfile, Docker Compose, and Bake. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | It describes the page itself. It gives no fact about a tool, product, command, or number. |
| 1 | A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image | S1 | PASS | "A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image." (S1 lines 277-278, with a line break after "a") |
| 2 | Docker Compose is a tool for defining and running multi-container applications | S2 | PASS | "Docker Compose is a tool for defining and running multi-container applications." |
| 3 | Bake is a feature of Docker Buildx that lets you define your build configuration using a declarative file | S3 | PASS | "Bake is a feature of Docker Buildx that lets you define your build configuration using a declarative file, as opposed to specifying a complex CLI expression." |

Open FAILs after round 5: 0

Open FAILs: 0
