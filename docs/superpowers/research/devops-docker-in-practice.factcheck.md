# Fact check: devops / docker-in-practice

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep and Glob only; no web access) that did not write the page. It was given only the page and the visible text of the sources that the page cites, fetched on 2026-11-05 with a plain GET: S1 https://docs.docker.com/engine/storage/volumes/; S2 https://docs.docker.com/engine/storage/bind-mounts/. It had to quote a source file for every PASS, and a script then looked each quoted phrase up in the source text (a PASS whose quote is not in the sources does not count). The facts of the Technical panel were checked again in every round; the Layman and Bangla panels were rewritten after round 3 (see the voices report). The author's own script check is `python3 scripts/devops_claimcheck.py`. No person has read this page: the English and the Bangla were judged by an agent only. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

## Fact check: devops / docker-in-practice (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Storage, Podman, exit codes, image size, and common interview questions. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The lede describes the page itself and states no fact about a tool, product, command or number. |
| 1 | Volumes are persistent data stores for containers, created and managed by Docker. | 1 | PASS | S1: "Volumes are persistent data stores for containers, created and managed by Docker." |
| 2 | When you use a bind mount, a file or directory on the host machine is mounted from the host into a container. | 2 | PASS | S2: "When you use a bind mount, a file or directory on the host machine is mounted from the host into a container." |

Open FAILs after round 1: 0

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

## Fact check: devops / docker-in-practice (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Docker volumes and bind mounts. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The lede describes the page itself. It states no fact about a tool, product, command or number. |
| 1 | Volumes are persistent data stores for containers, created and managed by Docker | S1 | PASS | "Volumes are persistent data stores for containers, created and managed by Docker." (S1.txt line 276, wrapped across lines 276-277) |
| 2 | When you use a bind mount, a file or directory on the host machine is mounted from the host into a container | S2 | PASS | "When you use a bind mount, a file or directory on the host machine is mounted from the host into a container." (S2.txt lines 276-277) |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

## Fact check: devops / docker-in-practice (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: "Docker volumes and bind mounts. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The lede describes the page itself. It gives no fact about a tool, product, command, or number. |
| 2 | Volumes are persistent data stores for containers, created and managed by Docker | S1 | PASS | pages/S1.txt: "Volumes are persistent data stores for containers, created and managed by Docker." |
| 3 | When you use a bind mount, a file or directory on the host machine is mounted from the host into a container | S2 | PASS | pages/S2.txt: "When you use a bind mount, a file or directory on the host machine is mounted from the host into a container." |

Open FAILs after round 4: 0

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

## Fact check: devops / docker-in-practice (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Docker volumes and bind mounts. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The sentence describes the page itself. It is not a fact about a tool, product, command, or number. |
| 1 | Volumes are persistent data stores for containers, created and managed by Docker | S1 | PASS | S1.txt:276: "Volumes are persistent data stores for containers, created and managed by Docker." |
| 2 | When you use a bind mount, a file or directory on the host machine is mounted from the host into a container | S2 | PASS | S2.txt:276: "When you use a bind mount, a file or directory on the host machine is mounted from the host into a container." |

Open FAILs after round 5: 0

Open FAILs: 0
