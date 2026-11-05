# Fact check: devops / git-basics

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep and Glob only; no web access) that did not write the page. It was given only the page and the visible text of the sources that the page cites, fetched on 2026-11-05 with a plain GET: S1 https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F; S2 https://git-scm.com/docs/git-merge. It had to quote a source file for every PASS, and a script then looked each quoted phrase up in the source text (a PASS whose quote is not in the sources does not count). The facts of the Technical panel were checked again in every round; the Layman and Bangla panels were rewritten after round 3 (see the voices report). The author's own script check is `python3 scripts/devops_claimcheck.py`. No person has read this page: the English and the Bangla were judged by an agent only. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

## Fact check: devops / git-basics (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Set up a repository, then branch, merge, and share changes through remotes." | none | FAIL | This is a fact claim about Git. It has no cite, and neither S1 nor S2 supports it. A search of both files for "branch, merge", "remotes" and "share changes" found nothing. Fix: add a cite to a source that covers it, or cut the line down to what S1 and S2 say (snapshots, merge). |
| 1 | Git thinks of its data as a series of snapshots of a miniature filesystem: each time you commit, Git takes a picture of what all your files look like at that moment | 1 | PASS | S1: "Git thinks of its data more like a series of snapshots of a miniature filesystem." and "every time you commit, or save the state of your project, Git basically takes a picture of what all your files look like at that moment" |
| 2 | A merge joins two or more development histories together | 2 | PASS | S2: "git-merge - Join two or more development histories together" |

Open FAILs after round 1: 1

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

## Fact check: devops / git-basics (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "How Git stores snapshots, and what a merge does. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The lede describes the page itself. It states no fact about a tool, command, or number. |
| 1 | Git thinks of its data as a series of snapshots of a miniature filesystem: each time you commit, Git takes a picture of what all your files look like at that moment | S1 | PASS | pages/S1.txt: "Git thinks of its data more like a series of snapshots of a miniature filesystem." and "every time you commit, or save the state of your project, Git basically takes a picture of what all your files look like at that moment and stores a reference to that snapshot." The page drops "more like" and "basically". This is a small softening but the meaning holds. |
| 2 | A merge joins two or more development histories together | S2 | PASS | pages/S2.txt: "git-merge - Join two or more development histories together" |

Open FAILs after round 2: 0

Changed after this round: Layman and Bangla: "keeps its data" went back to "thinks of its data" (Bangla "ভাবে"), as in the Technical panel.

## Round 3 (2026-11-05)

## Fact check: devops / git-basics (round 3)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "How Git stores snapshots, and what a merge does. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | This text describes the page itself. It is not a fact about a tool, command, or number. |
| 1 | Git thinks of its data as a series of snapshots of a miniature filesystem | S1 | PASS | S1: "Instead, Git thinks of its data more like a series of snapshots of a miniature filesystem." |
| 2 | Each time you commit, Git takes a picture of what all your files look like at that moment | S1 | PASS | S1: "With Git, every time you commit, or save the state of your project, Git basically takes a picture of what all your files look like at that moment and stores a reference to that snapshot." |
| 3 | A merge joins two or more development histories together | S2 | PASS | S2: "git-merge - Join two or more development histories together" |

Open FAILs after round 3: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

## Fact check: devops / git-basics (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "How Git stores snapshots, and what a merge does. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The lede describes the page itself. It gives no fact about a tool, command, or number. |
| 1 | Git thinks of its data as a series of snapshots of a miniature filesystem: each time you commit, Git takes a picture of what all your files look like at that moment | S1 | PASS | pages/S1.txt line 793: "Git thinks of its data more like a series of snapshots of a miniature filesystem." Line 794: "every time you commit, or save the state of your project, Git basically takes a picture of what all your files look like at that moment". The page leaves out the hedges "more like" and "basically". The meaning is the same. |
| 2 | A merge joins two or more development histories together | S2 | PASS | pages/S2.txt line 2651: "git-merge - Join two or more development histories together" |

Open FAILs after round 4: 0

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

## Fact check: devops / git-basics (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "How Git stores snapshots, and what a merge does. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The line describes the page itself. It is not a fact about a tool, product, command, or number. |
| 1 | Git thinks of its data as a series of snapshots of a miniature filesystem: each time you commit, Git takes a picture of what all your files look like at that moment | S1 | PASS | "Instead, Git thinks of its data more like a series of snapshots of a miniature filesystem." and "With Git, every time you commit, or save the state of your project, Git basically takes a picture of what all your files look like at that moment and stores a reference to that snapshot." |
| 2 | A merge joins two or more development histories together | S2 | PASS | "git-merge - Join two or more development histories together" |

Open FAILs after round 5: 0

Open FAILs: 0
