# Fact check: devops / git-workflows

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep and Glob only; no web access) that did not write the page. It was given only the page and the visible text of the sources that the page cites, fetched on 2026-11-05 with a plain GET: S1 https://git-scm.com/docs/git-rebase; S2 https://git-scm.com/docs/git-stash; S3 https://git-scm.com/docs/git-worktree; S4 https://git-scm.com/docs/git-bisect; S5 https://git-scm.com/docs/git-cherry-pick. It had to quote a source file for every PASS, and a script then looked each quoted phrase up in the source text (a PASS whose quote is not in the sources does not count). The facts of the Technical panel were checked again in every round; the Layman and Bangla panels were rewritten after round 3 (see the voices report). The author's own script check is `python3 scripts/devops_claimcheck.py`. No person has read this page: the English and the Bangla were judged by an agent only. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

## Fact check: devops / git-workflows (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Rebase, stash, cherry-pick, worktrees, and finding the commit that broke the build." (page description and lede line) | none | N/A | This line describes the page. It is not a fact about a tool, product, command, or number. |
| 1 | Git has a command for each of these jobs. | none | N/A | Framing sentence. It has no cite and no checkable fact. |
| 2 | `git rebase` reapplies commits on top of another base tip | 1 | PASS | S1 line 3042: "git-rebase - Reapply commits on top of another base tip" |
| 3 | `git stash` stashes the changes in a dirty working directory away | 2 | PASS | S2 line 2074: "git-stash - Stash the changes in a dirty working directory away" |
| 4 | `git worktree` manages multiple working trees attached to the same repository | 3 | PASS | S3 line 2292: "Manage multiple working trees attached to the same repository." |
| 5 | ...so you can check out more than one branch at a time | 3 | PASS | S3 lines 2295-2296: "A git repository can support multiple working trees, allowing you to check out more than one branch at a time." |
| 6 | `git bisect` uses binary search to find the commit that introduced a bug | 4 | PASS | S4 line 1915: "git-bisect - Use binary search to find the commit that introduced a bug" |
| 7 | `git cherry-pick` applies the changes introduced by some existing commits | 5 | PASS | S5 line 1815: "git-cherry-pick - Apply the changes introduced by some existing commits" |

Open FAILs after round 1: 0

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

## Fact check: devops / git-workflows (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Rebase, stash, worktrees, bisect, and cherry-pick. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | This line describes the page itself. It is not a fact about a tool, command, or number. |
| 1 | `git rebase` reapplies commits on top of another base tip | S1 | PASS | "git-rebase - Reapply commits on top of another base tip" (pages/S1.txt line 3042) |
| 2 | `git stash` stashes the changes in a dirty working directory away | S2 | PASS | "git-stash - Stash the changes in a dirty working directory away" (pages/S2.txt line 2074) |
| 3 | `git worktree` manages multiple working trees attached to the same repository | S3 | PASS | "Manage multiple working trees attached to the same repository." (pages/S3.txt line 2292) |
| 4 | …so you can check out more than one branch at a time | S3 | PASS | "A git repository can support multiple working trees, allowing you to check out more than one branch at a time." (pages/S3.txt lines 2295-2296) |
| 5 | `git bisect` uses binary search to find the commit that introduced a bug | S4 | PASS | "git-bisect - Use binary search to find the commit that introduced a bug" (pages/S4.txt line 1915) |
| 6 | `git cherry-pick` applies the changes introduced by some existing commits | S5 | PASS | "git-cherry-pick - Apply the changes introduced by some existing commits" (pages/S5.txt line 1815) |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

## Fact check: devops / git-workflows (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Rebase, stash, worktrees, bisect, and cherry-pick. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The lede describes the page itself. It states no fact about a tool. |
| 1 | Technical: "Git has a command for each of these jobs." | none | N/A | This is an intro sentence. It has no cite and gives no specific fact about a command. |
| 2 | `git rebase` reapplies commits on top of another base tip | S1 | PASS | "git-rebase - Reapply commits on top of another base tip" |
| 3 | `git stash` stashes the changes in a dirty working directory away | S2 | PASS | "git-stash - Stash the changes in a dirty working directory away" |
| 4 | `git worktree` manages multiple working trees attached to the same repository, so you can check out more than one branch at a time | S3 | PASS | "Manage multiple working trees attached to the same repository." and "A git repository can support multiple working trees, allowing you to check out more than one branch at a time." |
| 5 | `git bisect` uses binary search to find the commit that introduced a bug | S4 | PASS | "git-bisect - Use binary search to find the commit that introduced a bug" |
| 6 | `git cherry-pick` applies the changes introduced by some existing commits | S5 | PASS | "git-cherry-pick - Apply the changes introduced by some existing commits" |

Open FAILs after round 4: 0

Changed after this round: Bangla: "কিছু" (some) was taken out of the rebase sentence; the Technical sentence says "commits".

## Round 5 (2026-11-05)

## Fact check: devops / git-workflows (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Rebase, stash, worktrees, bisect, and cherry-pick. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The lede describes the page itself. It gives no fact about a tool. |
| 1 | Git has a command for each of these jobs. | none | N/A | This is a framing sentence. The facts that follow carry the cites. |
| 2 | `git rebase` reapplies commits on top of another base tip | S1 | PASS | "git-rebase - Reapply commits on top of another base tip" |
| 3 | `git stash` stashes the changes in a dirty working directory away | S2 | PASS | "git-stash - Stash the changes in a dirty working directory away" |
| 4 | `git worktree` manages multiple working trees attached to the same repository, so you can check out more than one branch at a time | S3 | PASS | "Manage multiple working trees attached to the same repository." and "A git repository can support multiple working trees, allowing you to check out more than one branch at a time." |
| 5 | `git bisect` uses binary search to find the commit that introduced a bug | S4 | PASS | "git-bisect - Use binary search to find the commit that introduced a bug" |
| 6 | `git cherry-pick` applies the changes introduced by some existing commits | S5 | PASS | "git-cherry-pick - Apply the changes introduced by some existing commits" |

Open FAILs after round 5: 0

Open FAILs: 0
