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

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md), with 11 sources. Round 6 and later check the new text with the brief of the full pages (docs/superpowers/research/devops-factcheck-brief.md).

## Round 6 (2026-11-15)

# Fact check: devops / git-workflows (round 6)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description | Branches by stability, rebase and cherry-pick, stash and worktrees, bisect to find the breaking commit | none | PASS | A topic summary. Each part is covered by the cited rows below. S4: "Use binary search to find the commit that introduced a bug". |
| 2 | Lede | `git bisect` finds the commit that broke a test | none | PASS | S4: "uses a binary search algorithm to find which commit in your project's history introduced a bug". |
| 3 | Lede | Teams keep branches at different levels of stability | none | PASS | S9: "several branches that are always open and that you use for different stages of your development cycle". |
| 4 | Lede | `git rebase` and `git cherry-pick` make new commits | none | PASS | S6: "you're abandoning existing commits and creating new ones". S5: "recording a new commit for each". |
| 5 | Lede | `git stash` and `git worktree` let you test another branch without losing your work | none | PASS | S7: "you want to switch branches for a bit to work on something else" and "you don't want to do a commit of half-done work". S3: "allowing you to check out more than one branch at a time". |
| 6 | Lede | Question and link to Git Basics | none | N/A | Framing text and a site link. |
| 7 | What it is | `git rebase` reapplies commits on top of another base tip | 1 | PASS | S1: "git-rebase - Reapply commits on top of another base tip". |
| 8 | What it is | `git stash` stashes the changes in a dirty working directory away | 2 | PASS | S2: "Stash the changes in a dirty working directory away". |
| 9 | What it is | `git worktree` manages multiple working trees of the same repository, so you can check out more than one branch at a time | 3 | PASS | S3: "Manage multiple working trees attached to the same repository." and "allowing you to check out more than one branch at a time". |
| 10 | What it is | `git bisect` uses binary search to find the commit that introduced a bug | 4 | PASS | S4: "Use binary search to find the commit that introduced a bug". |
| 11 | What it is | `git cherry-pick` applies the changes introduced by some existing commits | 5 | PASS | S5: "Apply the changes introduced by some existing commits". |
| 12 | What it is | Table: rebase gives a cleaner history, and the log of a rebased branch looks linear | 6 | PASS | S6: "rebasing makes for a cleaner history" and "it looks like a linear history". |
| 13 | What it is | Table: stash is for switching branches without committing half-done work | 7 | PASS | S7: "you want to switch branches for a bit" and "you don't want to do a commit of half-done work". |
| 14 | What it is | Table: worktree gives two branches checked out at the same time, in two folders | 3 | PASS | S3: "check out more than one branch at a time"; "git worktree add ../hotfix creates new branch hotfix and checks it out at path ../hotfix". |
| 15 | What it is | Table: bisect for dozens or hundreds of commits since the code last worked, when you don't know what broke it | 8 | PASS | S8: "If you don't know what is breaking, and there have been dozens or hundreds of commits since the last state where you know the code worked, you'll likely turn to git bisect". |
| 16 | What it is | Table: cherry-pick is used to backport a fix to a maintenance branch for an older release | 5 | PASS | S5: "backporting a fix to a maintenance branch for an older release". |
| 17 | What it is | Table: git blame shows which revision and author last modified each line of a file | 11 | PASS | S11: "Show what revision and author last modified each line of a file". |
| 18 | How it works | Many developers keep only entirely stable code in `master`, possibly only released code | 9 | PASS | S9: "having only code that is entirely stable in their master branch — possibly only code that has been or will be released". |
| 19 | How it works | A parallel `develop` or `next` branch is where they work or test stability. When stable, it can be merged into `master` | 9 | PASS | S9: "another parallel branch named develop or next that they work from or use to test stability … whenever it gets to a stable state, it can be merged into master". |
| 20 | How it works | A topic branch is a short-lived branch for a single feature or related work | 9 | PASS | S9: "A topic branch is a short-lived branch that you create and use for a single particular feature or related work." |
| 21 | How it works | Topic branches are pulled into `develop` when ready, to check that they pass the tests and add no bugs | 9 | PASS | S9: "pull in topic branches … when they're ready, to make sure they pass all the tests and don't introduce bugs". |
| 22 | How it works | The stability diagram (master, develop, topic) | 9 | N/A | A tutorial illustration of the sentences in rows 18–21. It adds no tool fact. |
| 23 | How it works | There are two main ways to integrate changes: merge and rebase | 6 | PASS | S6: "there are two main ways to integrate changes from one branch into another: the merge and the rebase." |
| 24 | How it works | A merge is a three-way merge of the two latest snapshots and their most recent common ancestor, creating a new snapshot and commit | 6 | PASS | S6: "It performs a three-way merge between the two latest branch snapshots (C3 and C4) and the most recent common ancestor of the two (C2), creating a new snapshot (and commit)." |
| 25 | How it works | A rebase takes all changes committed on one branch and replays them on a different branch | 6 | PASS | S6: "you can take all the changes that were committed on one branch and replay them on a different branch." |
| 26 | How it works | No difference in the end product, but rebasing gives a cleaner history | 6 | PASS | S6: "There is no difference in the end product of the integration, but rebasing makes for a cleaner history." |
| 27 | How it works | When you rebase, you abandon existing commits and create new, similar but different ones (diagram: D' and E' are new commits) | 6 | PASS | S6: "you're abandoning existing commits and creating new ones that are similar but different." The diagram is an illustration. |
| 28 | How it works | Given one or more commits, cherry-pick applies each change, recording a new commit for each | 5 | PASS | S5: "Given one or more existing commits, apply the change each one introduces, recording a new commit for each." |
| 29 | How it works | Cherry-pick requires a clean working tree | 5 | PASS | S5: "This requires your working tree to be clean". |
| 30 | How it works | With `-x`, it appends "(cherry picked from commit …)" to the original commit message | 5 | PASS | S5: "append a line that says "(cherry picked from commit …)" to the original commit message". |
| 31 | How it works | Stashing saves modified tracked files and staged changes on a stack of unfinished changes | 7 | PASS | S7: "Stashing takes the dirty state of your working directory — that is, your modified tracked files and staged changes — and saves it on a stack of unfinished changes". |
| 32 | How it works | You can reapply a stash at any time, even on a different branch | 7 | PASS | S7: "that you can reapply at any time (even on a different branch)". |
| 33 | How it works | `git stash list` shows stashes; `apply` reapplies one; `pop` applies and then drops it | 7 | PASS | S7: "To see which stashes you've stored, you can use git stash list"; "git stash apply"; "git stash pop to apply the stash and then immediately drop it from your stack". |
| 34 | How it works | A repository can support multiple working trees, so you can check out more than one branch at a time | 3 | PASS | S3: "A git repository can support multiple working trees, allowing you to check out more than one branch at a time." |
| 35 | How it works | Each tree made by `git worktree add` is a linked worktree; the one that `git init` or `git clone` prepared is the main worktree | 3 | PASS | S3: "This new worktree is called a "linked worktree" as opposed to the "main worktree" prepared by git-init[1] or git-clone[1]." |
| 36 | How it works | You give bisect a "bad" commit that has the bug and a "good" commit from before the bug | 4 | PASS | S4: "a "bad" commit that is known to contain the bug, and a "good" commit that is known to be before the bug was introduced". |
| 37 | How it works | Git picks a commit between the two and asks whether it is good or bad | 4 | PASS | S4: "git bisect picks a commit between those two endpoints and asks you whether the selected commit is "good" or "bad"". |
| 38 | How it works | It keeps narrowing the range until it finds the exact commit that introduced the change (diagram) | 4 | PASS | S4: "It continues narrowing down the range until it finds the exact commit that introduced the change." The diagram is an illustration. |
| 39 | How it works | With `git bisect run <cmd>`, a command does the marking; its exit code decides | 4 | PASS | S4: "If you have a script that can tell if the current source code is good or bad, you can bisect by issuing the command: git bisect run <cmd>". |
| 40 | How it works | Table: 0 = good (old) | 4 | PASS | S4: "exit with code 0 if the current source code is good/old". |
| 41 | How it works | Table: 1 to 127 except 125 = bad (new) | 4 | PASS | S4: "a code between 1 and 127 (inclusive), except 125, if the current source code is bad/new". |
| 42 | How it works | Table: 125 = this commit cannot be tested | 4 | PASS | S4: "The special exit code 125 should be used when the current source code cannot be tested." |
| 43 | How it works | Table: any other code = bisect stops | 4 | PASS | S4: "Any other exit code will abort the bisect process." |
| 44 | Try it | Needs only Git and bash; builds a repo with a known bug; finds it twice; uses a stash and a worktree | none | N/A | Describes the page's own practice run. |
| 45 | Try it | Step 1 script: eight commits, commit 6 changes the total from 100 to 110 (the "bug") | none | N/A | The page says the script is the tutorial's own. It is the reader's own work and not a claim about a tool. |
| 46 | Try it | Step 2: start a session, mark the current commit bad and the oldest good | 4 | PASS | S4: "$ git bisect start / $ git bisect bad # Current version is bad / $ git bisect good v2.6.13-rc2 # v2.6.13-rc2 is known to be good". |
| 47 | Try it | Git then checks out a commit in between | 4 | PASS | S4: "git bisect selects a commit in the middle of that range of history, checks it out". |
| 48 | Try it | Repeat until Git prints the first bad commit | 4 | PASS | S4: "Eventually there will be no more revisions left to inspect, and the command will print out a description of the first bad commit." |
| 49 | Try it | `git bisect reset` returns you to the commit you had before | 4 | PASS | S4: "By default, this will return your tree to the commit that was checked out before git bisect start." |
| 50 | Try it | Step 2 code block (`git bisect start`, `bad`, `good HEAD~7`, `good`/`bad`, `reset`) | 4 | PASS | S4: "git bisect start", "git bisect bad", "git bisect good", "git bisect reset". `HEAD~7` is the tutorial's own revision. |
| 51 | Try it | You can list the known bad commit first and the known good commit second in `git bisect start` | 8 | PASS | S8: "listing the known bad commit first and the known good commit second: $ git bisect start HEAD v1.0". |
| 52 | Try it | `git grep -q` exits with 0 on a match and non-zero when there is none | 10 | PASS | S10: "Do not output matched lines; instead, exit with status 0 when there is a match and with non-zero status when there isn't." |
| 53 | Try it | So `git bisect run` marks a commit good when `price.txt` says `total=100`, bad when it does not (code block) | 4 | PASS | S4: "exit with code 0 if the current source code is good/old, and exit with a code between 1 and 127 … if … bad/new". |
| 54 | Try it | Sample output with an example hash, "Your hash will differ" | none | N/A | The tutorial's own sample output. |
| 55 | Try it | `git stash -u` also takes untracked files, such as a new test file | 7 | PASS | S7: "If you specify --include-untracked or -u, Git will include untracked files in the stash being created." |
| 56 | Try it | A stash reverts the working directory to match `HEAD`, so `git status` shows a clean tree | 2 | PASS | S2: "reverts the working directory to match the HEAD commit". |
| 57 | Try it | `git stash pop` brings the work back and drops the stash | 7 | PASS | S7: "git stash pop to apply the stash and then immediately drop it from your stack". |
| 58 | Try it | Step 4 code block | 7 | PASS | S7: "$ git stash -u", "git stash list", "git stash pop". |
| 59 | Try it | `git worktree add ../hotfix` creates a new branch `hotfix` and checks it out at `../hotfix` | 3 | PASS | S3: "worktree add ../hotfix creates new branch hotfix and checks it out at path ../hotfix." |
| 60 | Try it | `git worktree list` shows the main worktree first, then the linked ones | 3 | PASS | S3: "The main worktree is listed first, followed by each of the linked worktrees." |
| 61 | Try it | When you are done, remove it with `git worktree remove` | 3 | PASS | S3: "When you are done with a linked worktree, remove it with git worktree remove." |
| 62 | Try it | Step 5 code block | 3 | PASS | S3: "git worktree add ../hotfix", "git worktree list", "git worktree remove". |
| 63 | How a tester uses it | Use `git bisect` when you don't know what is breaking and there are dozens or hundreds of commits | 8 | PASS | S8: "If you don't know what is breaking, and there have been dozens or hundreds of commits since the last state where you know the code worked, you'll likely turn to git bisect for help." |
| 64 | How a tester uses it | A script that exits 0 when good and non-0 when bad lets you fully automate it | 8 | PASS | S8: "if you have a script that will exit 0 if the project is good or non-0 if the project is bad, you can fully automate git bisect." |
| 65 | How a tester uses it | You can also run whatever you have that runs automated tests | 8 | PASS | S8: "whatever you have that runs automated tests for you". |
| 66 | How a tester uses it | The tutorial's tip: use a command that runs only the failing test | none | N/A | Marked as the tutorial's own tip. |
| 67 | How a tester uses it | `git blame` can show which commit introduced a buggy line | 8 | PASS | S8: "if you see that a method in your code is buggy, you can annotate the file with git blame to determine which commit was responsible for the introduction of that line." |
| 68 | How a tester uses it | It annotates each line with information from the revision that last modified it | 11 | PASS | S11: "Annotates each line in the given file with information from the revision which last modified the line." |
| 69 | How a tester uses it | A cherry-picked fix is a new commit on the release branch | 5 | PASS | S5: "apply the change each one introduces, recording a new commit for each". |
| 70 | How a tester uses it | For a fix between two publicly visible branches, such as a backport to a maintenance branch, the `-x` line can be useful | 5 | PASS | S5: "if on the other hand you are cherry-picking between two publicly visible branches (e.g. backporting a fix to a maintenance branch …), adding this information can be useful." |
| 71 | How a tester uses it | The `-x` line names the commit the change came from | 5 | PASS | S5: "to indicate which commit this change was cherry-picked from". |
| 72 | How a tester uses it | With a linked worktree, `main` can stay in one folder and the branch under test in another | 3 | PASS | S3: "allowing you to check out more than one branch at a time"; "checks it out at path ../hotfix". |
| 73 | How a tester uses it | To work on an existing branch in a new worktree, use `git worktree add <path> <branch>` | 3 | PASS | S3: "To instead work on an existing branch in a new worktree, use git worktree add <path> <branch>." |
| 74 | How a tester uses it | When an urgent fix needs testing, stash half-done test changes and switch branches | 7 | PASS | S7: "you want to switch branches for a bit … you'll stash the changes". |
| 75 | How a tester uses it | You can reapply them later, even on a different branch | 7 | PASS | S7: "reapply at any time (even on a different branch)". |
| 76 | How a tester uses it | After a rebase, the branch is made of new commits | 6 | PASS | S6: "you're abandoning existing commits and creating new ones that are similar but different". |
| 77 | Common mistakes | Do not rebase commits that exist outside your repository and that people may have based work on | 6 | PASS | S6: "Do not rebase commits that exist outside your repository and that people may have based work on." |
| 78 | Common mistakes | Rebase local changes before you push, but never rebase what you have pushed | 6 | PASS | S6: "rebase local changes before pushing to clean up your work, but never rebase anything that you've pushed somewhere." |
| 79 | Common mistakes | After a bisect session, `git bisect reset` cleans up the bisection state and returns you to the original `HEAD` | 4 | PASS | S4: "After a bisect session, to clean up the bisection state and return to the original HEAD, issue the following command: git bisect reset". |
| 80 | Common mistakes | Any exit code other than 0 to 127 aborts the bisect | 4 | PASS | S4: "Any other exit code will abort the bisect process." |
| 81 | Common mistakes | A program that ends with `exit(-1)` leaves the code 255 | 4 | PASS | S4: "a program that terminates via exit(-1) leaves $? = 255". |
| 82 | Common mistakes | For a commit that cannot be tested, exit with 125 | 4 | PASS | S4: "The special exit code 125 should be used when the current source code cannot be tested." |
| 83 | Common mistakes | If you skip a commit next to the one you seek, Git cannot tell exactly which was the first bad one | 4 | PASS | S4: "if you skip a commit adjacent to the one you are looking for, Git will be unable to tell exactly which of those commits was the first bad one." |
| 84 | Common mistakes | By default, `git stash` stashes only modified and staged tracked files | 7 | PASS | S7: "By default, git stash will stash only modified and staged tracked files." |
| 85 | Common mistakes | Add `-u` (`--include-untracked`) to include untracked files | 7 | PASS | S7: "If you specify --include-untracked or -u, Git will include untracked files". |
| 86 | Common mistakes | Use `git worktree remove` instead of deleting the folder by hand | 3 | PASS | S3: "If a working tree is deleted without using git worktree remove" and "remove it with git worktree remove". |
| 87 | Common mistakes | If the folder is already gone, `git worktree prune` removes the leftover information | 3 | PASS | S3: "you can run git worktree prune in the main or any linked worktree to clean up any". |
| 88 | Common mistakes | `git cherry-pick` requires a clean working tree | 5 | PASS | S5: "This requires your working tree to be clean". |
| 89 | What a tester can check | The six-item list in the "Tutorial advice" callout | none | PASS | The callout says "This list is the tutorial's own advice". It gives no new tool fact. The `-x`, rebase, stable-branch and stash/worktree items match claims in earlier sections. |
| 90 | Key words | Long-running branch: "A branch that stays open, such as `master` for stable code or `develop` for testing stability" | none | FAIL | The Technical panels never use the term "long-running branch" or say that a branch "stays open". Fix: drop the row, or reword it as "`master` keeps only stable code; `develop` is where they work or test stability". |
| 91 | Key words | Topic branch: short-lived branch for a single feature or related work | none | PASS | How it works: "A topic branch is a short-lived branch for a single feature or related work". |
| 92 | Key words | Rebase: replaying changes of one branch on another, as new commits | none | PASS | How it works: "replays them on a different branch" and "create new ones that are similar but different". |
| 93 | Key words | Cherry-pick: applying the change of an existing commit as a new commit | none | PASS | How it works: "applies the change each one introduces, recording a new commit for each". |
| 94 | Key words | `-x`: adds "(cherry picked from commit …)" to the message | none | PASS | How it works: "With `-x`, it appends a line that says "(cherry picked from commit …)"". |
| 95 | Key words | Stash: a stack of unfinished changes you can reapply later | none | PASS | How it works: "saves it on a stack of unfinished changes. You can reapply it at any time". |
| 96 | Key words | Linked worktree: an extra working tree made by `git worktree add` | none | PASS | How it works: "Each one that `git worktree add` creates is a **linked worktree**". |
| 97 | Key words | Main worktree: the tree `git init` or `git clone` prepared | none | PASS | How it works: "the one that `git init` or `git clone` prepared is the **main worktree**". |
| 98 | Key words | Bisect: a binary search for the commit that introduced a change | none | PASS | How it works: "`git bisect` uses binary search to find the commit that introduced a bug"; "finds the exact commit that introduced the change". |
| 99 | Key words | Good / bad (old / new): marks for commits before and after the change | none | PASS | How it works: "a "good" commit that is known to be before the bug" and the table rows "Good (old)" and "Bad (new)". |
| 100 | Key words | `git bisect run`: bisect with a command whose exit code marks each commit | none | PASS | How it works: "With `git bisect run <cmd>`, a command does the marking for you. Its exit code decides". |
| 101 | Key words | Exit code 125: tells bisect a commit cannot be tested | none | PASS | How it works table: "125 \| This commit cannot be tested". |
| 102 | Key words | `git blame`: shows the revision and author that last modified each line | none | PASS | What it is table: "Which revision and author last modified each line of a file". |

Open FAILs after round 6: 1

Changed after this round: The FAIL was fixed: the page now introduces long-running branches with S9 ("several branches that are always open and that you use for different stages of your development cycle"), so the Key words row restates the page.

## Round 7 (2026-11-15)

# Fact check: devops / git-workflows (round 7)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description | Branches by stability, rebase and cherry-pick, stash and worktrees, and bisect to find the breaking commit | none | N/A | A framing line that lists the page topics. Each topic is cited in the sections below. |
| 2 | Lede | A test passed last week and fails today; `git bisect` answers which commit broke it; the page covers branch stability, rebase, cherry-pick, stash and worktree | none | N/A | A framing line. Every tool claim in it is cited in the sections below. |
| 3 | What it is | `git rebase` reapplies commits on top of another base tip | S1 | PASS | "git-rebase - Reapply commits on top of another base tip" |
| 4 | What it is | `git stash` stashes the changes in a dirty working directory away | S2 | PASS | "git-stash - Stash the changes in a dirty working directory away" |
| 5 | What it is | `git worktree` manages multiple working trees of the same repository, so you can check out more than one branch at a time | S3 | PASS | "Manage multiple working trees attached to the same repository." / "allowing you to check out more than one branch at a time" |
| 6 | What it is | `git bisect` uses binary search to find the commit that introduced a bug | S4 | PASS | "git-bisect - Use binary search to find the commit that introduced a bug" |
| 7 | What it is | `git cherry-pick` applies the changes introduced by some existing commits | S5 | PASS | "git-cherry-pick - Apply the changes introduced by some existing commits" |
| 8 | What it is | Table: rebase gives a cleaner history; the log of a rebased branch looks linear | S6 | PASS | "rebasing makes for a cleaner history. If you examine the log of a rebased branch, it looks like a linear history" |
| 9 | What it is | Table: stash is for switching branches without committing half-done work | S7 | PASS | "you want to switch branches for a bit" / "you don't want to do a commit of half-done work" |
| 10 | What it is | Table: worktree gives two branches checked out at the same time, in two folders | S3 | PASS | "check out more than one branch at a time" / "creates new branch hotfix and checks it out at path ../hotfix" |
| 11 | What it is | Table: bisect is for dozens or hundreds of commits since the code last worked, when you don't know what broke it | S8 | PASS | "If you don't know what is breaking, and there have been dozens or hundreds of commits since the last state where you know the code worked, you'll likely turn to git bisect" |
| 12 | What it is | Table: cherry-pick is for backporting a fix to a maintenance branch for an older release | S5 | PASS | "backporting a fix to a maintenance branch for an older release from a development branch" |
| 13 | What it is | Table: blame shows which revision and author last modified each line of a file | S11 | PASS | "git-blame - Show what revision and author last modified each line of a file" |
| 14 | How it works | Git makes it easy to keep several long-running branches that are always open, one for each stage of the development cycle | S9 | PASS | "merging from one branch into another multiple times over a long period is generally easy to do. This means you can have several branches that are always open and that you use for different stages of your development cycle" |
| 15 | How it works | Many developers keep only entirely stable code in `master`, possibly only code that has been or will be released | S9 | PASS | "having only code that is entirely stable in their master branch — possibly only code that has been or will be released" |
| 16 | How it works | A parallel branch named `develop` or `next` is for work or stability tests; when stable it can be merged into `master` | S9 | PASS | "another parallel branch named develop or next that they work from or use to test stability — ... whenever it gets to a stable state, it can be merged into master" |
| 17 | How it works | A topic branch is a short-lived branch for a single feature or related work | S9 | PASS | "A topic branch is a short-lived branch that you create and use for a single particular feature or related work." |
| 18 | How it works | Topic branches are pulled into `develop` when ready, to make sure they pass all the tests and don't introduce bugs | S9 | PASS | "pull in topic branches (short-lived branches ...) when they're ready, to make sure they pass all the tests and don't introduce bugs" |
| 19 | How it works | Two main ways to integrate changes: merge and rebase | S6 | PASS | "there are two main ways to integrate changes from one branch into another: the merge and the rebase" |
| 20 | How it works | A merge does a three-way merge between the two latest snapshots and their most recent common ancestor, creating a new snapshot and commit | S6 | PASS | "It performs a three-way merge between the two latest branch snapshots (C3 and C4) and the most recent common ancestor of the two (C2), creating a new snapshot (and commit)." |
| 21 | How it works | A rebase takes all the changes committed on one branch and replays them on a different branch | S6 | PASS | "take all the changes that were committed on one branch and replay them on a different branch" |
| 22 | How it works | No difference in the end product, but rebasing makes a cleaner history | S6 | PASS | "There is no difference in the end product of the integration, but rebasing makes for a cleaner history." |
| 23 | How it works | When you rebase, you abandon existing commits and create new ones that are similar but different (diagram follows) | S6 | PASS | "you're abandoning existing commits and creating new ones that are similar but different" |
| 24 | How it works | Cherry-pick applies the change each given commit introduces, recording a new commit for each | S5 | PASS | "Given one or more existing commits, apply the change each one introduces, recording a new commit for each." |
| 25 | How it works | Cherry-pick requires a clean working tree | S5 | PASS | "This requires your working tree to be clean" |
| 26 | How it works | With `-x`, it appends "(cherry picked from commit …)" to the original commit message | S5 | PASS | "append a line that says "(cherry picked from commit …)" to the original commit message" |
| 27 | How it works | Stashing takes the dirty state (modified tracked files and staged changes) and saves it on a stack of unfinished changes | S7 | PASS | "Stashing takes the dirty state of your working directory — that is, your modified tracked files and staged changes — and saves it on a stack of unfinished changes" |
| 28 | How it works | You can reapply a stash at any time, even on a different branch | S7 | PASS | "that you can reapply at any time (even on a different branch)" |
| 29 | How it works | `git stash list` shows stashes, `git stash apply` reapplies one, `git stash pop` applies and then drops it | S7 | PASS | "To see which stashes you've stored, you can use git stash list" / "git stash apply" / "git stash pop to apply the stash and then immediately drop it from your stack" |
| 30 | How it works | A repository can support multiple working trees so you can check out more than one branch at a time | S3 | PASS | "A git repository can support multiple working trees, allowing you to check out more than one branch at a time." |
| 31 | How it works | Each worktree from `git worktree add` is a linked worktree; the one from `git init` or `git clone` is the main worktree | S3 | PASS | "This new worktree is called a "linked worktree" as opposed to the "main worktree" prepared by git-init[1] or git-clone[1]." |
| 32 | How it works | You give bisect a "bad" commit known to contain the bug and a "good" commit known to be before it | S4 | PASS | "a "bad" commit that is known to contain the bug, and a "good" commit that is known to be before the bug was introduced" |
| 33 | How it works | Git picks a commit between the two and asks whether it is good or bad | S4 | PASS | "git bisect picks a commit between those two endpoints and asks you whether the selected commit is "good" or "bad"" |
| 34 | How it works | It keeps narrowing the range until it finds the exact commit that introduced the change (diagram follows) | S4 | PASS | "It continues narrowing down the range until it finds the exact commit that introduced the change." |
| 35 | How it works | With `git bisect run <cmd>`, a command does the marking | S4 | PASS | "If you have a script that can tell if the current source code is good or bad, you can bisect by issuing the command: git bisect run <cmd>" |
| 36 | How it works | Its exit code decides | S4 | PASS | "<cmd> run with <arg> should exit with code 0 if the current source code is good/old, and exit with a code between 1 and 127 (inclusive), except 125, if the current source code is bad/new." |
| 37 | How it works | Exit code table: 0 good (old) | S4 | PASS | "exit with code 0 if the current source code is good/old" |
| 38 | How it works | Exit code table: 1 to 127 except 125 bad (new) | S4 | PASS | "a code between 1 and 127 (inclusive), except 125, if the current source code is bad/new" |
| 39 | How it works | Exit code table: 125 means the commit cannot be tested | S4 | PASS | "The special exit code 125 should be used when the current source code cannot be tested." |
| 40 | How it works | Exit code table: any other code stops bisect | S4 | PASS | "Any other exit code will abort the bisect process." |
| 41 | Try it | Practice run needs only Git and bash; script is the tutorial's own, makes eight commits, commit 6 is the "bug" (script block) | none | N/A | The tutorial's own setup and framing. It makes no claim about a tool. |
| 42 | Try it | Step 2: start a session, mark the current commit bad and the oldest good (`git bisect start / bad / good HEAD~7`) | S4 | PASS | "$ git bisect start / $ git bisect bad # Current version is bad / $ git bisect good v2.6.13-rc2 # v2.6.13-rc2 is known to be good" |
| 43 | Try it | Git then checks out a commit in between | S4 | PASS | "git bisect selects a commit in the middle of that range of history, checks it out" |
| 44 | Try it | Repeat until Git prints the first bad commit | S4 | PASS | "Eventually there will be no more revisions left to inspect, and the command will print out a description of the first bad commit." |
| 45 | Try it | `git bisect reset` returns you to the commit you had before | S4 | PASS | "By default, this will return your tree to the commit that was checked out before git bisect start." |
| 46 | Try it | Step 3: in `git bisect start` you can list the known bad commit first and the known good commit second | S8 | PASS | "listing the known bad commit first and the known good commit second: $ git bisect start HEAD v1.0" |
| 47 | Try it | `git grep -q` exits 0 on a match, non-zero when there is none | S10 | PASS | "exit with status 0 when there is a match and with non-zero status when there isn't." |
| 48 | Try it | `git bisect run` marks a commit good when `price.txt` says `total=100`, bad when not | S4 | PASS | "exit with code 0 if the current source code is good/old, and exit with a code between 1 and 127 (inclusive), except 125, if ... bad/new" |
| 49 | Try it | "The end of the output names the commit. Your hash will differ:" followed by the sample output block with "… is the first bad commit" | none | FAIL | The sentence has no cite. S4 gives only "the command will print out a description of the first bad commit", and the exact output line is not in any source. Fix: cite S4 and write "At the end, Git prints a description of the first bad commit. Your hash will differ." |
| 50 | Try it | Step 4: `git stash -u` also takes untracked files, such as a new test file | S7 | PASS | "If you specify --include-untracked or -u, Git will include untracked files in the stash being created." |
| 51 | Try it | A stash reverts the working directory to match `HEAD`, so `git status` shows a clean tree | S2 | PASS | "saves your local modifications away and reverts the working directory to match the HEAD commit." |
| 52 | Try it | `git stash pop` brings the work back and drops the stash | S7 | PASS | "git stash pop to apply the stash and then immediately drop it from your stack" |
| 53 | Try it | Step 5: `git worktree add ../hotfix` creates a new branch `hotfix` and checks it out at `../hotfix` | S3 | PASS | "git worktree add ../hotfix creates new branch hotfix and checks it out at path ../hotfix" |
| 54 | Try it | `git worktree list` shows the main worktree first, then the linked ones | S3 | PASS | "The main worktree is listed first, followed by each of the linked worktrees." |
| 55 | Try it | Remove it with `git worktree remove` | S3 | PASS | "When you are done with a linked worktree, remove it with git worktree remove." |
| 56 | How a tester uses it | Use `git bisect` when you don't know what is breaking and dozens or hundreds of commits have passed | S8 | PASS | "If you don't know what is breaking, and there have been dozens or hundreds of commits since the last state where you know the code worked, you'll likely turn to git bisect for help." |
| 57 | How a tester uses it | A script that exits 0 when good and non-0 when bad lets you fully automate it | S8 | PASS | "if you have a script that will exit 0 if the project is good or non-0 if the project is bad, you can fully automate git bisect." |
| 58 | How a tester uses it | You can also run whatever runs automated tests for you | S8 | PASS | "run something like make or make tests or whatever you have that runs automated tests for you" |
| 59 | How a tester uses it | "The tutorial's tip: use a command that runs only the failing test." | none | N/A | The tutorial's own advice. |
| 60 | How a tester uses it | If a method is buggy, `git blame` can show which commit introduced that line | S8 | PASS | "annotate the file with git blame to determine which commit was responsible for the introduction of that line" |
| 61 | How a tester uses it | `git blame` annotates each line with information from the revision that last modified it | S11 | PASS | "Annotates each line in the given file with information from the revision which last modified the line." |
| 62 | How a tester uses it | A cherry-picked fix is a new commit on the release branch | S5 | PASS | "apply the change each one introduces, recording a new commit for each." |
| 63 | How a tester uses it | Between two publicly visible branches, such as a backport to a maintenance branch, the `-x` line can be useful | S5 | PASS | "cherry-picking between two publicly visible branches (e.g. backporting a fix to a maintenance branch for an older release ...), adding this information can be useful." |
| 64 | How a tester uses it | The `-x` line names the commit the change came from | S5 | PASS | "to indicate which commit this change was cherry-picked from" |
| 65 | How a tester uses it | With a linked worktree, `main` can stay in one folder and the branch under test in another | S3 | PASS | "allowing you to check out more than one branch at a time" / "checks it out at path ../hotfix" |
| 66 | How a tester uses it | To work on an existing branch in a new worktree, use `git worktree add <path> <branch>` | S3 | PASS | "To instead work on an existing branch in a new worktree, use git worktree add <path> <branch>." |
| 67 | How a tester uses it | Stash half-done test changes and switch branches when an urgent fix needs testing | S7 | PASS | "you want to switch branches for a bit to work on something else" / "you don't want to do a commit of half-done work" |
| 68 | How a tester uses it | You can reapply them later, even on a different branch | S7 | PASS | "that you can reapply at any time (even on a different branch)" |
| 69 | How a tester uses it | After a rebase, the branch is made of new commits | S6 | PASS | "you're abandoning existing commits and creating new ones that are similar but different" |
| 70 | Common mistakes | Do not rebase commits that exist outside your repository and that people may have based work on | S6 | PASS | "Do not rebase commits that exist outside your repository and that people may have based work on." |
| 71 | Common mistakes | Rebase local changes before you push, but never rebase anything you have pushed | S6 | PASS | "rebase local changes before pushing to clean up your work, but never rebase anything that you've pushed somewhere" |
| 72 | Common mistakes | After a bisect session, `git bisect reset` cleans up the bisection state and returns you to the original `HEAD` | S4 | PASS | "After a bisect session, to clean up the bisection state and return to the original HEAD, issue the following command: git bisect reset" |
| 73 | Common mistakes | Any exit code other than 0 to 127 aborts the bisect | S4 | PASS | "Any other exit code will abort the bisect process." |
| 74 | Common mistakes | A program ending with `exit(-1)` leaves the code 255 | S4 | PASS | "a program that terminates via exit(-1) leaves $? = 255" |
| 75 | Common mistakes | For a commit that cannot be tested, exit with 125 | S4 | PASS | "The special exit code 125 should be used when the current source code cannot be tested." |
| 76 | Common mistakes | Skipping a commit next to the target means Git cannot tell which was the first bad one | S4 | PASS | "if you skip a commit adjacent to the one you are looking for, Git will be unable to tell exactly which of those commits was the first bad one." |
| 77 | Common mistakes | By default `git stash` stashes only modified and staged tracked files | S7 | PASS | "By default, git stash will stash only modified and staged tracked files." |
| 78 | Common mistakes | `-u` (`--include-untracked`) includes untracked files | S7 | PASS | "If you specify --include-untracked or -u, Git will include untracked files in the stash being created." |
| 79 | Common mistakes | Use `git worktree remove` | S3 | PASS | "remove it with git worktree remove" |
| 80 | Common mistakes | If the folder is already gone, `git worktree prune` removes the leftover worktree information | S3 | PASS | "If a working tree is deleted without using git worktree remove ... you can run git worktree prune ... to clean up any stale administrative files." |
| 81 | Common mistakes | `git cherry-pick` requires a clean working tree | S5 | PASS | "This requires your working tree to be clean" |
| 82 | What a tester can check | Callout "Tutorial advice", six advice items | none | PASS | The callout says "This list is the tutorial's own advice for a tester who uses these commands." Each tool fact in it (`-x`, rebase gives new commits, stable branch, stash, worktree) is supported by cited sections above. |
| 83 | Key words | Long-running branch | none | PASS | "Git makes it easy to keep several long-running branches that are always open" / "keep only entirely stable code in their `master` branch" / "A parallel branch named `develop` or `next`" |
| 84 | Key words | Topic branch | none | PASS | "A topic branch is a short-lived branch for a single feature or related work" |
| 85 | Key words | Rebase | none | PASS | "A rebase takes all the changes that were committed on one branch and replays them on a different branch" / "you abandon existing commits and create new ones" |
| 86 | Key words | Cherry-pick | none | PASS | "applies the change each one introduces, recording a new commit for each" |
| 87 | Key words | `-x` | none | PASS | "With `-x`, it appends a line that says "(cherry picked from commit …)" to the original commit message" |
| 88 | Key words | Stash | none | PASS | "saves it on a stack of unfinished changes. You can reapply it at any time" |
| 89 | Key words | Linked worktree | none | PASS | "Each one that `git worktree add` creates is a linked worktree" |
| 90 | Key words | Main worktree | none | PASS | "the one that `git init` or `git clone` prepared is the main worktree" |
| 91 | Key words | Bisect | none | PASS | "`git bisect` uses binary search to find the commit that introduced a bug" |
| 92 | Key words | Good / bad (old / new) | none | PASS | "a "good" commit that is known to be before the bug" / table rows "Good (old)", "Bad (new)" |
| 93 | Key words | `git bisect run` | none | PASS | "With `git bisect run <cmd>`, a command does the marking for you. Its exit code decides" |
| 94 | Key words | Exit code 125 | none | PASS | "125 \| This commit cannot be tested" |
| 95 | Key words | `git blame` | none | PASS | "Which revision and author last modified each line of a file" |

Open FAILs after round 7: 1

Changed after this round: The FAIL was fixed: the output block is introduced by S4's "Git prints a description of the first bad commit", and the page says that the block is the end of the output of the tutorial's own run (the research notes record that run).

## Round 8 (2026-11-15)

# Fact check: devops / git-workflows (round 8)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Branches by stability, rebase and cherry-pick, stash and worktrees, and bisect to find the commit that broke a test | none | PASS | The line has no cite. The sections below back it with S9, S1, S5, S2, S3 and S4. S4: "Use binary search to find the commit that introduced a bug". |
| 2 | Lede | `git bisect` finds the commit that broke a test; the page covers stability branches, rebase, cherry-pick, stash and worktree | none | PASS | The lede has no cite. The sections below cover each point. S4: "Use binary search to find the commit that introduced a bug". S3: "allowing you to check out more than one branch at a time". |
| 3 | What it is | `git rebase` reapplies commits on top of another base tip | S1 | PASS | "git-rebase - Reapply commits on top of another base tip" |
| 4 | What it is | `git stash` stashes the changes in a dirty working directory away | S2 | PASS | "git-stash - Stash the changes in a dirty working directory away" |
| 5 | What it is | `git worktree` manages multiple working trees attached to the same repository, so you can check out more than one branch at a time | S3 | PASS | "Manage multiple working trees attached to the same repository." "allowing you to check out more than one branch at a time" |
| 6 | What it is | `git bisect` uses binary search to find the commit that introduced a bug | S4 | PASS | "git-bisect - Use binary search to find the commit that introduced a bug" |
| 7 | What it is | `git cherry-pick` applies the changes introduced by some existing commits | S5 | PASS | "git-cherry-pick - Apply the changes introduced by some existing commits" |
| 8 | What it is | Table: rebase gives a cleaner history; the log of a rebased branch looks linear | S6 | PASS | "If you examine the log of a rebased branch, it looks like a linear history" and "rebasing makes for a cleaner history" |
| 9 | What it is | Table: stash is for switching branches without committing half-done work | S7 | PASS | "you want to switch branches for a bit" and "you don't want to do a commit of half-done work" |
| 10 | What it is | Table: worktree gives two branches checked out at the same time, in two folders | S3 | PASS | "check out more than one branch at a time" and "git worktree add ../hotfix creates new branch hotfix and checks it out at path ../hotfix". The "two folders" detail comes from the path example. |
| 11 | What it is | Table: bisect is for dozens or hundreds of commits since the code last worked, when you don't know what broke it | S8 | PASS | "If you don't know what is breaking, and there have been dozens or hundreds of commits since the last state where you know the code worked" (the file has a curly apostrophe in "don’t") |
| 12 | What it is | Table: cherry-pick backports a fix to a maintenance branch for an older release | S5 | PASS | "backporting a fix to a maintenance branch for an older release" |
| 13 | What it is | Table: `git blame` shows which revision and author last modified each line of a file | S11 | PASS | "git-blame - Show what revision and author last modified each line of a file" |
| 14 | How it works | Git makes it easy to keep several long-running branches that are always open, one for each stage of the development cycle | S9 | PASS | "you can have several branches that are always open and that you use for different stages of your development cycle" |
| 15 | How it works | Many developers keep only entirely stable code in `master`, possibly only code that has been or will be released | S9 | PASS | "having only code that is entirely stable in their master branch — possibly only code that has been or will be released" |
| 16 | How it works | A parallel branch `develop` or `next` is for work or stability tests; it can be merged into `master` when stable | S9 | PASS | "another parallel branch named develop or next that they work from or use to test stability ... whenever it gets to a stable state, it can be merged into master" |
| 17 | How it works | A topic branch is a short-lived branch for a single feature or related work | S9 | PASS | "A topic branch is a short-lived branch that you create and use for a single particular feature or related work." |
| 18 | How it works | Topic branches are pulled into `develop` when ready, to make sure they pass all tests and add no bugs | S9 | PASS | "It's used to pull in topic branches ... when they're ready, to make sure they pass all the tests and don't introduce bugs." |
| 19 | How it works | Diagram: master / develop / topic | S9 | PASS | It is an illustration of the S9 text quoted in rows 15 to 18. It adds no new fact. |
| 20 | How it works | Two main ways to integrate changes: merge and rebase | S6 | PASS | "there are two main ways to integrate changes from one branch into another: the merge and the rebase." |
| 21 | How it works | A merge is a three-way merge between the two latest snapshots and their most recent common ancestor, creating a new snapshot and commit | S6 | PASS | "It performs a three-way merge between the two latest branch snapshots (C3 and C4) and the most recent common ancestor of the two (C2), creating a new snapshot (and commit)." |
| 22 | How it works | A rebase takes all changes committed on one branch and replays them on a different branch | S6 | PASS | "you can take all the changes that were committed on one branch and replay them on a different branch." |
| 23 | How it works | No difference in the end product, but rebasing gives a cleaner history | S6 | PASS | "There is no difference in the end product of the integration, but rebasing makes for a cleaner history." |
| 24 | How it works | Rebasing abandons existing commits and creates new, similar but different ones; the before/merge/rebase diagram | S6 | PASS | "When you rebase stuff, you're abandoning existing commits and creating new ones that are similar but different." |
| 25 | How it works | Cherry-pick applies the change each given commit introduces, recording a new commit for each | S5 | PASS | "Given one or more existing commits, apply the change each one introduces, recording a new commit for each." |
| 26 | How it works | Cherry-pick requires a clean working tree | S5 | PASS | "This requires your working tree to be clean" |
| 27 | How it works | `-x` appends a "(cherry picked from commit …)" line to the original commit message | S5 | PASS | "append a line that says "(cherry picked from commit …)" to the original commit message" |
| 28 | How it works | Stashing takes the dirty state (modified tracked files and staged changes) and saves it on a stack of unfinished changes | S7 | PASS | "Stashing takes the dirty state of your working directory — that is, your modified tracked files and staged changes — and saves it on a stack of unfinished changes" |
| 29 | How it works | A stash can be reapplied at any time, even on a different branch | S7 | PASS | "that you can reapply at any time (even on a different branch)" |
| 30 | How it works | `git stash list` shows stashes, `apply` reapplies one, `pop` applies and then immediately drops it | S7 | PASS | "To see which stashes you've stored, you can use git stash list" "git stash apply" "git stash pop to apply the stash and then immediately drop it from your stack" |
| 31 | How it works | A repository can support multiple working trees, so you can check out more than one branch at a time | S3 | PASS | "A git repository can support multiple working trees, allowing you to check out more than one branch at a time." |
| 32 | How it works | Each tree that `git worktree add` creates is a linked worktree; the one that `git init` or `git clone` prepared is the main worktree | S3 | PASS | "This new worktree is called a "linked worktree" as opposed to the "main worktree" prepared by git-init[1] or git-clone[1]." |
| 33 | How it works | You give bisect a "bad" commit known to contain the bug and a "good" commit known to be before it | S4 | PASS | "a "bad" commit that is known to contain the bug, and a "good" commit that is known to be before the bug was introduced" |
| 34 | How it works | Git picks a commit between the two and asks whether it is good or bad | S4 | PASS | "git bisect picks a commit between those two endpoints and asks you whether the selected commit is "good" or "bad"" |
| 35 | How it works | It narrows the range until it finds the exact commit that introduced the change; bisect diagram | S4 | PASS | "It continues narrowing down the range until it finds the exact commit that introduced the change." The diagram illustrates this. |
| 36 | How it works | With `git bisect run <cmd>`, a command does the marking; its exit code decides | S4 | PASS | "If you have a script that can tell if the current source code is good or bad, you can bisect by issuing the command: git bisect run <cmd>" |
| 37 | How it works | Exit table: 0 is good (old) | S4 | PASS | "exit with code 0 if the current source code is good/old" |
| 38 | How it works | Exit table: 1 to 127 except 125 is bad (new) | S4 | PASS | "a code between 1 and 127 (inclusive), except 125, if the current source code is bad/new" |
| 39 | How it works | Exit table: 125 means the commit cannot be tested | S4 | PASS | "The special exit code 125 should be used when the current source code cannot be tested." |
| 40 | How it works | Exit table: any other code makes bisect stop | S4 | PASS | "Any other exit code will abort the bisect process." |
| 41 | Try it | Needs only Git and bash; make a repo with a known bug, find the commit twice, then use a stash and a worktree | none | N/A | This sentence describes the tutorial's own exercise. |
| 42 | Try it | Step 1 script: eight commits, commit 6 changes the total from 100 to 110 | none | N/A | The page says the script is the tutorial's own. It uses only `git init -b main`, `git add`, `git commit` and `git log --oneline`. It makes no claim about a tool. |
| 43 | Try it | Start a session, mark the current commit bad and the oldest good | S4 | PASS | "$ git bisect start" "$ git bisect bad # Current version is bad" "$ git bisect good v2.6.13-rc2 # v2.6.13-rc2 is known to be good". `HEAD~7` as the oldest commit is the tutorial's own script. |
| 44 | Try it | Git then checks out a commit in between | S4 | PASS | "git bisect selects a commit in the middle of that range of history, checks it out" |
| 45 | Try it | Repeat with `git bisect good` or `git bisect bad` until Git prints the first bad commit | S4 | PASS | "depending on whether it is good or bad run git bisect good or git bisect bad" "the command will print out a description of the first bad commit" |
| 46 | Try it | `git bisect reset` returns you to the commit you had before | S4 | PASS | "By default, this will return your tree to the commit that was checked out before git bisect start." |
| 47 | Try it | You can list the known bad commit first and the known good commit second in `git bisect start` | S8 | PASS | "listing the known bad commit first and the known good commit second: $ git bisect start HEAD v1.0" |
| 48 | Try it | `git grep -q` exits 0 on a match, non-zero when there is none | S10 | PASS | "Do not output matched lines; instead, exit with status 0 when there is a match and with non-zero status when there isn't." |
| 49 | Try it | So `git bisect run` marks a commit good when `price.txt` says `total=100`, and bad when it does not | S4 | PASS | "exit with code 0 if the current source code is good/old, and exit with a code between 1 and 127 (inclusive), except 125, if the current source code is bad/new" |
| 50 | Try it | At the end Git prints a description of the first bad commit | S4 | PASS | "the command will print out a description of the first bad commit" |
| 51 | Try it | Sample output with hash `7b6cfbb4…` ended like this; your hash will differ | none | N/A | The page says this is the tutorial's own run. The line "is the first bad commit" is the same output wording as in S4. |
| 52 | Try it | `git stash -u` also takes untracked files, such as a new test file | S7 | PASS | "If you specify --include-untracked or -u, Git will include untracked files in the stash being created." |
| 53 | Try it | A stash reverts the working directory to match `HEAD`, so `git status` shows a clean tree | S2 | PASS | "and reverts the working directory to match the HEAD commit." |
| 54 | Try it | `git stash pop` brings the work back and drops the stash | S7 | PASS | "git stash pop to apply the stash and then immediately drop it from your stack" |
| 55 | Try it | `git worktree add ../hotfix` creates a new branch `hotfix` and checks it out at `../hotfix` | S3 | PASS | "git worktree add ../hotfix creates new branch hotfix and checks it out at path ../hotfix" |
| 56 | Try it | `git worktree list` shows the main worktree first, then the linked ones | S3 | PASS | "The main worktree is listed first, followed by each of the linked worktrees." |
| 57 | Try it | Remove it with `git worktree remove` when done | S3 | PASS | "When you are done with a linked worktree, remove it with git worktree remove." |
| 58 | How a tester uses it | Use bisect when you don't know what is breaking and there are dozens or hundreds of commits since the code last worked | S8 | PASS | "If you don't know what is breaking, and there have been dozens or hundreds of commits since the last state where you know the code worked, you'll likely turn to git bisect" |
| 59 | How a tester uses it | A script that exits 0 when good and non-0 when bad lets you fully automate it | S8 | PASS | "if you have a script that will exit 0 if the project is good or non-0 if the project is bad, you can fully automate git bisect." |
| 60 | How a tester uses it | You can also run whatever runs your automated tests | S8 | PASS | "You can also run something like make or make tests or whatever you have that runs automated tests for you." |
| 61 | How a tester uses it | Tutorial's tip: use a command that runs only the failing test | none | N/A | The page labels this as the tutorial's own tip. It gives no fact about a tool. |
| 62 | How a tester uses it | If a method is buggy, `git blame` can show which commit introduced that line | S8 | PASS | "if you see that a method in your code is buggy, you can annotate the file with git blame to determine which commit was responsible for the introduction of that line." |
| 63 | How a tester uses it | It annotates each line of a file with information from the revision that last modified it | S11 | PASS | "Annotates each line in the given file with information from the revision which last modified the line." |
| 64 | How a tester uses it | A cherry-picked fix is a new commit on the release branch | S5 | PASS | "recording a new commit for each" and "backporting a fix to a maintenance branch for an older release". The "on the release branch" part comes from the backport example. |
| 65 | How a tester uses it | When a fix moves between two publicly visible branches, such as a backport to a maintenance branch, the `-x` line can be useful | S5 | PASS | "visible branches (e.g. backporting a fix to a maintenance branch for an older release from a development branch), adding this information can be useful." |
| 66 | How a tester uses it | The `-x` line names the commit the change came from | S5 | PASS | "to indicate which commit this change was cherry-picked from" |
| 67 | How a tester uses it | With a linked worktree, `main` can stay in one folder and the branch under test in another | S3 | PASS | "This new worktree is called a "linked worktree" as opposed to the "main worktree"" and "checks it out at path ../hotfix". The "branch under test" part is the tutorial's own use case. |
| 68 | How a tester uses it | Use `git worktree add <path> <branch>` to work on an existing branch in a new worktree | S3 | PASS | "To instead work on an existing branch in a new worktree, use git worktree add <path> <branch>." |
| 69 | How a tester uses it | When an urgent fix needs testing, stash half-done test changes and switch branches | S7 | PASS | "Now you want to switch branches, but you don't want to commit what you've been working on yet, so you'll stash the changes." |
| 70 | How a tester uses it | You can reapply them later, even on a different branch | S7 | PASS | "you can reapply at any time (even on a different branch)" |
| 71 | How a tester uses it | After a rebase, the branch is made of new commits | S6 | PASS | "When you rebase stuff, you're abandoning existing commits and creating new ones that are similar but different." |
| 72 | Common mistakes | Do not rebase commits that exist outside your repository and that people may have based work on | S6 | PASS | "Do not rebase commits that exist outside your repository and that people may have based work on." |
| 73 | Common mistakes | Rebase local changes before you push, but never rebase anything you have pushed | S6 | PASS | "rebase local changes before pushing to clean up your work, but never rebase anything that you've pushed somewhere." |
| 74 | Common mistakes | After a bisect session, `git bisect reset` cleans up the bisection state and returns you to the original `HEAD` | S4 | PASS | "After a bisect session, to clean up the bisection state and return to the original HEAD, issue the following command: git bisect reset" |
| 75 | Common mistakes | Any exit code other than 0 to 127 aborts the bisect | S4 | PASS | "Any other exit code will abort the bisect process." |
| 76 | Common mistakes | A program that ends with `exit(-1)` leaves the code 255 | S4 | PASS | "a program that terminates via exit(-1) leaves $? = 255" |
| 77 | Common mistakes | For a commit that cannot be tested, exit with 125 | S4 | PASS | "The special exit code 125 should be used when the current source code cannot be tested." |
| 78 | Common mistakes | If you skip a commit next to the one you are looking for, Git cannot tell exactly which was the first bad one | S4 | PASS | "if you skip a commit adjacent to the one you are looking for," (the next line of the file ends "first bad one."). |
| 79 | Common mistakes | By default, `git stash` stashes only modified and staged tracked files | S7 | PASS | "By default, git stash will stash only modified and staged tracked files." |
| 80 | Common mistakes | Add `-u` (`--include-untracked`) to include untracked files | S7 | PASS | "If you specify --include-untracked or -u, Git will include untracked files in the stash being created." |
| 81 | Common mistakes | Use `git worktree remove` instead of deleting a worktree folder by hand | S3 | PASS | "When you are done with a linked worktree, remove it with git worktree remove." and "If a working tree is deleted without using git worktree remove" |
| 82 | Common mistakes | If the folder is already gone, `git worktree prune` removes the leftover worktree information | S3 | PASS | "you can run git worktree prune in the main or any linked worktree to clean up any stale administrative files." |
| 83 | Common mistakes | `git cherry-pick` requires a clean working tree | S5 | PASS | "This requires your working tree to be clean" |
| 84 | What a tester can check | Callout "Tutorial advice": six pieces of advice (flaky tests, put the hash in the bug report, ask about `-x`, re-run tests after a rebase, ask which branch is stable, use a stash or worktree) | none | PASS | The callout is titled "Tutorial advice" and says "This list is the tutorial's own advice". It gives no tool fact that the rest of the page does not support. `-x` is in row 27 and rebase creating new commits is in row 24. |
| 85 | Key words | Long-running branch: stays open, such as `master` for stable code or `develop` for testing stability | none | PASS | Technical panel: "several long-running branches that are always open" and "keep only entirely stable code in their `master` branch" and "A parallel branch named `develop` or `next` is where they work or test stability" |
| 86 | Key words | Topic branch: a short-lived branch for a single feature or related work | none | PASS | "A topic branch is a short-lived branch for a single feature or related work" |
| 87 | Key words | Rebase: replaying the changes of one branch on another branch, as new commits | none | PASS | "A rebase takes all the changes that were committed on one branch and replays them on a different branch" and "create new ones that are similar but different" |
| 88 | Key words | Cherry-pick: applying the change of an existing commit as a new commit | none | PASS | "applies the change each one introduces, recording a new commit for each" |
| 89 | Key words | `-x`: adds "(cherry picked from commit …)" to the message | none | PASS | "With `-x`, it appends a line that says "(cherry picked from commit …)" to the original commit message" |
| 90 | Key words | Stash: a stack of unfinished changes you can reapply later | none | PASS | "saves it on a stack of unfinished changes" and "You can reapply it at any time" |
| 91 | Key words | Linked worktree: an extra working tree made by `git worktree add` | none | PASS | "Each one that `git worktree add` creates is a **linked worktree**" |
| 92 | Key words | Main worktree: the one `git init` or `git clone` prepared | none | PASS | "the one that `git init` or `git clone` prepared is the **main worktree**" |
| 93 | Key words | Bisect: a binary search for the commit that introduced a change | none | PASS | "`git bisect` uses binary search to find the commit that introduced a bug" and "until it finds the exact commit that introduced the change" |
| 94 | Key words | Good / bad (old / new): the marks for commits before and after the change | none | FAIL | The Technical panels only say "a "good" commit that is known to be before the bug" and give the exit-code table with "Good (old)" and "Bad (new)". They never say that old/new are the marks for commits before and after the change. S4 has this idea, but the page does not give it. Fix: "Good (old) and bad (new): the marks that bisect uses; exit code 0 means good (old)". |
| 95 | Key words | `git bisect run`: bisect with a command whose exit code marks each commit | none | PASS | "With `git bisect run <cmd>`, a command does the marking for you. Its exit code decides" |
| 96 | Key words | Exit code 125: tells bisect that a commit cannot be tested | none | PASS | Exit-code table: "125 \| This commit cannot be tested" |
| 97 | Key words | `git blame`: shows the revision and author that last modified each line | none | PASS | "Which revision and author last modified each line of a file" |

Open FAILs after round 8: 1

Changed after this round: The FAIL was fixed: the Good / bad key word now restates the page: a good commit is known to be before the bug, a bad one contains it, and exit code 0 means good for `git bisect run`.

## Round 9 (2026-11-15)

# Fact check: devops / git-workflows (round 9)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description | Branches by stability, rebase, cherry-pick, stash, worktrees, and bisect to find the breaking commit | none | N/A | It describes the page itself. |
| 2 | Lede | A test passed last week and fails today. Which commit broke it? | none | N/A | Framing question. |
| 3 | Lede | Git can answer that with `git bisect` | none | FAIL | The sentence has no cite. Fix: add `<Cite n={4} />`. S4 says "git-bisect - Use binary search to find the commit that introduced a bug". |
| 4 | Lede | The page shows how teams keep branches at different stability levels, how rebase and cherry-pick make new commits, and how stash and worktree let you test another branch without losing work | none | FAIL | The sentence has no cite. Fix: add cites (S9, S6, S5, S7, S3) or reduce it to a framing sentence. |
| 5 | Lede | It builds on Git Basics (internal link) | none | N/A | Link to another page. |
| 6 | What it is | `git rebase` reapplies commits on top of another base tip | 1 | PASS | "git-rebase - Reapply commits on top of another base tip" |
| 7 | What it is | `git stash` stashes the changes in a dirty working directory away | 2 | PASS | "git-stash - Stash the changes in a dirty working directory away" |
| 8 | What it is | `git worktree` manages multiple working trees attached to the same repository, so you can check out more than one branch at a time | 3 | PASS | "Manage multiple working trees attached to the same repository. A git repository can support multiple working trees, allowing you to check out more than one branch at a time." |
| 9 | What it is | `git bisect` uses binary search to find the commit that introduced a bug | 4 | PASS | "git-bisect - Use binary search to find the commit that introduced a bug" |
| 10 | What it is | `git cherry-pick` applies the changes introduced by some existing commits | 5 | PASS | "git-cherry-pick - Apply the changes introduced by some existing commits" |
| 11 | What it is (table) | rebase: cleaner history, the log of a rebased branch looks linear | 6 | PASS | "rebasing makes for a cleaner history. If you examine the log of a rebased branch, it looks like a linear history" |
| 12 | What it is (table) | stash: switch branches without committing half-done work | 7 | PASS | "you want to switch branches for a bit to work on something else. The problem is, you don't want to do a commit of half-done work" |
| 13 | What it is (table) | worktree: two branches checked out at the same time, in two folders | 3 | FAIL | S3 supports "check out more than one branch at a time". It never says "folder". It says "path". Fix: "Two branches checked out at the same time, at two paths". |
| 14 | What it is (table) | bisect: dozens or hundreds of commits since the code last worked, and you don't know what broke it | 8 | PASS | "If you don't know what is breaking, and there have been dozens or hundreds of commits since the last state where you know the code worked, you'll likely turn to git bisect" |
| 15 | What it is (table) | cherry-pick: backporting a fix to a maintenance branch for an older release | 5 | PASS | "backporting a fix to a maintenance branch for an older release from a development branch" |
| 16 | What it is (table) | blame: which revision and author last modified each line of a file | 11 | PASS | "git-blame - Show what revision and author last modified each line of a file" |
| 17 | How it works | Git makes it easy to keep several long-running branches that are always open, one for each stage of the development cycle | 9 | PASS | "merging from one branch into another multiple times over a long period is generally easy to do. This means you can have several branches that are always open and that you use for different stages of your development cycle" |
| 18 | How it works | Many Git developers keep only entirely stable code in `master`, possibly only code that has been or will be released | 9 | PASS | "having only code that is entirely stable in their master branch — possibly only code that has been or will be released" |
| 19 | How it works | A parallel branch `develop` or `next` is where they work or test stability. When it is stable it can be merged into `master` | 9 | PASS | "another parallel branch named develop or next that they work from or use to test stability ... whenever it gets to a stable state, it can be merged into master" |
| 20 | How it works | A topic branch is a short-lived branch for a single feature or related work | 9 | PASS | "A topic branch is a short-lived branch that you create and use for a single particular feature or related work." |
| 21 | How it works | Topic branches are pulled into `develop` when ready, to make sure they pass all tests and add no bugs | 9 | PASS | "pull in topic branches (short-lived branches...) when they're ready, to make sure they pass all the tests and don't introduce bugs" |
| 22 | How it works | Branch diagram (master / develop / topic) | 9 | PASS | It is an illustration of the sentences in rows 18-21, which S9 supports. |
| 23 | How it works | Two main ways to integrate changes: merge and rebase | 6 | PASS | "there are two main ways to integrate changes from one branch into another: the merge and the rebase." |
| 24 | How it works | A merge does a three-way merge between the two latest snapshots and the most recent common ancestor, creating a new snapshot and commit | 6 | PASS | "It performs a three-way merge between the two latest branch snapshots (C3 and C4) and the most recent common ancestor of the two (C2), creating a new snapshot (and commit)." |
| 25 | How it works | A rebase takes all committed changes on one branch and replays them on a different branch | 6 | PASS | "you can take all the changes that were committed on one branch and replay them on a different branch." |
| 26 | How it works | No difference in the end product, but rebasing makes a cleaner history | 6 | PASS | "There is no difference in the end product of the integration, but rebasing makes for a cleaner history." |
| 27 | How it works | When you rebase, you abandon existing commits and create new, similar but different ones. Diagram: M is a new merge commit, D' and E' are new commits | 6 | PASS | "When you rebase stuff, you're abandoning existing commits and creating new ones that are similar but different." The diagram is an illustration. |
| 28 | How it works | Cherry-pick applies the change each given commit introduces, recording a new commit for each | 5 | PASS | "Given one or more existing commits, apply the change each one introduces, recording a new commit for each." |
| 29 | How it works | Cherry-pick requires a clean working tree | 5 | PASS | "This requires your working tree to be clean" |
| 30 | How it works | With `-x`, it appends "(cherry picked from commit …)" to the original commit message | 5 | PASS | "append a line that says "(cherry picked from commit …​)" to the original commit message" |
| 31 | How it works | Stashing takes the dirty state (modified tracked files and staged changes) and saves it on a stack of unfinished changes | 7 | PASS | "Stashing takes the dirty state of your working directory — that is, your modified tracked files and staged changes — and saves it on a stack of unfinished changes" |
| 32 | How it works | You can reapply it at any time, even on a different branch | 7 | PASS | "that you can reapply at any time (even on a different branch)" |
| 33 | How it works | `git stash list` shows stashes, `apply` reapplies one, `pop` applies then drops it | 7 | PASS | "To see which stashes you've stored, you can use git stash list" / "git stash apply" / "git stash pop to apply the stash and then immediately drop it from your stack" |
| 34 | How it works | A repository can support multiple working trees, so you can check out more than one branch at a time | 3 | PASS | "A git repository can support multiple working trees, allowing you to check out more than one branch at a time." |
| 35 | How it works | Worktrees made by `git worktree add` are linked worktrees. The one that `git init` or `git clone` prepared is the main worktree | 3 | PASS | "This new worktree is called a "linked worktree" as opposed to the "main worktree" prepared by git-init[1] or git-clone[1]." |
| 36 | How it works | You give bisect a "bad" commit that has the bug and a "good" commit from before the bug | 4 | PASS | "telling it a "bad" commit that is known to contain the bug, and a "good" commit that is known to be before the bug was introduced" |
| 37 | How it works | Git picks a commit between the two and asks whether it is good or bad | 4 | PASS | "git bisect picks a commit between those two endpoints and asks you whether the selected commit is "good" or "bad"" |
| 38 | How it works | It keeps narrowing the range until it finds the exact commit. Diagram of the test 4/6/5 example | 4 | PASS | "It continues narrowing down the range until it finds the exact commit that introduced the change." The diagram is an illustration. |
| 39 | How it works | With `git bisect run <cmd>`, a command does the marking. The exit code decides | 4 | PASS | "git bisect run <cmd> [<arg>…​]" / "If you have a script that can tell if the current source code is good or bad, you can bisect" |
| 40 | How it works (table) | Exit 0 = good (old) | 4 | PASS | "exit with code 0 if the current source code is good/old" |
| 41 | How it works (table) | 1 to 127 except 125 = bad (new) | 4 | PASS | "a code between 1 and 127 (inclusive), except 125, if the current source code is bad/new" |
| 42 | How it works (table) | 125 = this commit cannot be tested | 4 | PASS | "The special exit code 125 should be used when the current source code cannot be tested." |
| 43 | How it works (table) | Any other code = bisect stops | 4 | PASS | "Any other exit code will abort the bisect process." |
| 44 | Try it | The practice run needs only Git and a bash shell, and you do the steps below | none | N/A | Describes the reader's own work. |
| 45 | Try it | Step 1 script (the tutorial's own) makes eight commits. Commit 6 changes total 100 to 110 | none | N/A | The page says it is the tutorial's own script. It is not a claim about a tool. The `git init -b main` flag is not in any source, but the page does not claim it is. |
| 46 | Try it | Start a session, mark the current commit bad and the oldest good. Git then checks out a commit in between | 4 | PASS | "$ git bisect start / $ git bisect bad / $ git bisect good v2.6.13-rc2" / "selects a commit in the middle of that range of history, checks it out" |
| 47 | Try it | Repeat until Git prints the first bad commit. Read `price.txt` and run `git bisect good` or `git bisect bad` | 4 | PASS | "Eventually there will be no more revisions left to inspect, and the command will print out a description of the first bad commit." |
| 48 | Try it | `git bisect reset` returns you to the commit you had before | 4 | PASS | "By default, this will return your tree to the commit that was checked out before git bisect start." |
| 49 | Try it | You can list the known bad commit first and the known good second in `git bisect start` (`git bisect start HEAD HEAD~7`) | 8 | PASS | "listing the known bad commit first and the known good commit second: $ git bisect start HEAD v1.0" |
| 50 | Try it | `git grep -q` exits 0 on a match and non-zero when there is none | 10 | PASS | "Do not output matched lines; instead, exit with status 0 when there is a match and with non-zero status when there isn't." |
| 51 | Try it | So `git bisect run` marks a commit good when `price.txt` says `total=100`, and bad when it does not | 4 | PASS | "exit with code 0 if the current source code is good/old, and exit with a code between 1 and 127 (inclusive), except 125, if the current source code is bad/new". The step also uses row 50. |
| 52 | Try it | At the end Git prints a description of the first bad commit | 4 | PASS | "the command will print out a description of the first bad commit" |
| 53 | Try it | When the tutorial ran the script the output ended like this (hash example) | none | N/A | The page reports the tutorial's own run, not a tool fact. |
| 54 | Try it | `git stash -u` also takes untracked files, such as a new test file | 7 | PASS | "If you specify --include-untracked or -u, Git will include untracked files in the stash being created." |
| 55 | Try it | A stash reverts the working directory to match `HEAD`, so `git status` shows a clean tree | 2 | PASS | "and reverts the working directory to match the HEAD commit." The clean-tree result follows. |
| 56 | Try it | `git stash pop` brings the work back and drops the stash | 7 | PASS | "git stash pop to apply the stash and then immediately drop it from your stack" |
| 57 | Try it | `git worktree add ../hotfix` creates a new branch `hotfix` and checks it out at path `../hotfix` | 3 | PASS | "git worktree add ../hotfix creates new branch hotfix and checks it out at path ../hotfix" |
| 58 | Try it | `git worktree list` shows the main worktree first, then the linked ones | 3 | PASS | "The main worktree is listed first, followed by each of the linked worktrees." |
| 59 | Try it | When done, remove it with `git worktree remove` | 3 | PASS | "When you are done with a linked worktree, remove it with git worktree remove." |
| 60 | How a tester uses it | Use `git bisect` when you don't know what is breaking and there have been dozens or hundreds of commits | 8 | PASS | "If you don't know what is breaking, and there have been dozens or hundreds of commits since the last state where you know the code worked, you'll likely turn to git bisect for help." |
| 61 | How a tester uses it | A script that exits 0 when good and non-0 when bad lets you fully automate it | 8 | PASS | "if you have a script that will exit 0 if the project is good or non-0 if the project is bad, you can fully automate git bisect." |
| 62 | How a tester uses it | You can also run whatever runs automated tests for you | 8 | PASS | "You can also run something like make or make tests or whatever you have that runs automated tests for you." |
| 63 | How a tester uses it | The tutorial's tip: use a command that runs only the failing test | none | N/A | It is labelled as the tutorial's own tip. |
| 64 | How a tester uses it | If a method is buggy, `git blame` can show which commit introduced that line | 8 | PASS | "if you see that a method in your code is buggy, you can annotate the file with git blame to determine which commit was responsible for the introduction of that line." |
| 65 | How a tester uses it | `git blame` annotates each line with information from the revision that last modified it | 11 | PASS | "Annotates each line in the given file with information from the revision which last modified the line." |
| 66 | How a tester uses it | A cherry-picked fix is a new commit on the release branch | 5 | PASS | "apply the change each one introduces, recording a new commit for each" and "The current branch and HEAD pointer stay at the last commit successfully made." |
| 67 | How a tester uses it | Between two publicly visible branches, such as a backport to a maintenance branch, the `-x` line can be useful | 5 | PASS | "if on the other hand you are cherry-picking between two publicly visible branches (e.g. backporting a fix to a maintenance branch for an older release from a development branch), adding this information can be useful." |
| 68 | How a tester uses it | It names the commit that the change came from | 5 | PASS | "to indicate which commit this change was cherry-picked from" |
| 69 | How a tester uses it | With a linked worktree, `main` can stay in one folder and the branch under test in another | 3 | FAIL | S3 gives "check out more than one branch at a time" and a "path". It has no "folder" and no example with `main`. Fix: "With a linked worktree you can check out more than one branch at a time, each at its own path". |
| 70 | How a tester uses it | To work on an existing branch in a new worktree, use `git worktree add <path> <branch>` | 3 | PASS | "To instead work on an existing branch in a new worktree, use git worktree add <path> <branch>." |
| 71 | How a tester uses it | Stash half-done test changes and switch branches. Reapply later, even on a different branch | 7 | PASS | "you want to switch branches... you don't want to do a commit of half-done work" / "reapply at any time (even on a different branch)" |
| 72 | How a tester uses it | After a rebase, the branch is made of new commits | 6 | PASS | "you're abandoning existing commits and creating new ones that are similar but different" |
| 73 | Common mistakes | Do not rebase commits that exist outside your repository and that people may have based work on | 6 | PASS | "Do not rebase commits that exist outside your repository and that people may have based work on." |
| 74 | Common mistakes | Rebase local changes before you push. Never rebase what you have pushed | 6 | PASS | "rebase local changes before pushing to clean up your work, but never rebase anything that you've pushed somewhere." |
| 75 | Common mistakes | After a bisect session, `git bisect reset` cleans up the bisection state and returns you to the original HEAD | 4 | PASS | "After a bisect session, to clean up the bisection state and return to the original HEAD, issue the following command: git bisect reset" |
| 76 | Common mistakes | Any exit code other than 0 to 127 aborts the bisect | 4 | PASS | "Any other exit code will abort the bisect process." |
| 77 | Common mistakes | A program that ends with `exit(-1)` leaves the code 255 | 4 | PASS | "a program that terminates via exit(-1) leaves $? = 255" |
| 78 | Common mistakes | For a commit that cannot be tested, exit with 125 | 4 | PASS | "The special exit code 125 should be used when the current source code cannot be tested." |
| 79 | Common mistakes | If you skip a commit next to the one you look for, Git cannot tell which was the first bad one | 4 | PASS | "if you skip a commit adjacent to the one you are looking for, ... first bad one." |
| 80 | Common mistakes | By default `git stash` stashes only modified and staged tracked files | 7 | PASS | "By default, git stash will stash only modified and staged tracked files." |
| 81 | Common mistakes | Add `-u` (`--include-untracked`) to include untracked files | 7 | PASS | "If you specify --include-untracked or -u, Git will include untracked files in the stash being created." |
| 82 | Common mistakes | Use `git worktree remove` instead of deleting the folder by hand | 3 | PASS | "When you are done with a linked worktree, remove it with git worktree remove." |
| 83 | Common mistakes | If the folder is already gone, `git worktree prune` removes the leftover worktree information | 3 | PASS | "If a working tree is deleted without using git worktree remove, ... you can run git worktree prune ... to clean up any stale administrative files." |
| 84 | Common mistakes | `git cherry-pick` requires a clean working tree | 5 | PASS | "This requires your working tree to be clean (no modifications from the HEAD commit)." |
| 85 | What a tester can check | Callout "Tutorial advice": the list is the tutorial's own advice (flaky tests, hash and title in bug report, ask about `-x`, re-run tests after rebase, ask which branch is stable, keep work in a stash or worktree) | none | PASS | The callout is titled "Tutorial advice" and says "This list is the tutorial's own advice". Every tool fact in it is supported by the rest of the page (`-x` in rows 30 and 67, new commits in row 72, stash and worktree in rows 31-35). |
| 86 | Key words | Long-running branch | none | PASS | "Git makes it easy to keep several **long-running branches** that are always open" and "`master` ... `develop` or `next` is where they work or test stability" |
| 87 | Key words | Topic branch | none | PASS | "A **topic branch** is a short-lived branch for a single feature or related work" |
| 88 | Key words | Rebase | none | PASS | "A rebase takes all the changes that were committed on one branch and replays them on a different branch" and "you abandon existing commits and create new ones" |
| 89 | Key words | Cherry-pick | none | PASS | "applies the change each one introduces, recording a new commit for each" |
| 90 | Key words | `-x` | none | PASS | "With `-x`, it appends a line that says "(cherry picked from commit …)" to the original commit message" |
| 91 | Key words | Stash | none | PASS | "saves it on a stack of unfinished changes ... You can reapply it at any time" |
| 92 | Key words | Linked worktree | none | PASS | "Each one that `git worktree add` creates is a **linked worktree**" |
| 93 | Key words | Main worktree | none | PASS | "the one that `git init` or `git clone` prepared is the **main worktree**" |
| 94 | Key words | Bisect | none | PASS | "`git bisect` uses binary search to find the commit that introduced a bug" |
| 95 | Key words | Good (old) / bad (new) | none | PASS | "a "bad" commit that is known to contain the bug, and a "good" commit that is known to be before the bug" and table "0 \| Good (old)" |
| 96 | Key words | `git bisect run` | none | PASS | "With `git bisect run <cmd>`, a command does the marking for you. Its exit code decides" |
| 97 | Key words | Exit code 125 | none | PASS | table "125 \| This commit cannot be tested" |
| 98 | Key words | `git blame` | none | PASS | table "`git blame` \| Which revision and author last modified each line of a file" |

Open FAILs after round 9: 4

Changed after this round: The 4 FAILs were fixed: the lede now describes the page and gives no fact of its own (rows 3 and 4); the worktree rows say "more than one branch checked out at a time, each at its own path" (S3 says path, not folder), and the `main` example was removed.

## Round 10 (2026-11-15)

# Fact check: devops / git-workflows (round 10)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Branches by stability, rebase and cherry-pick, stash and worktrees, git bisect to find the commit that broke a test | none | N/A | Topic list that frames the page. |
| 2 | Lede | The page covers rebase, cherry-pick, stash, worktrees and bisect, with a practice run that finds a known bad commit twice | none | N/A | Describes the page itself. |
| 3 | What it is | `git rebase` reapplies commits on top of another base tip | S1 | PASS | "git-rebase - Reapply commits on top of another base tip" |
| 4 | What it is | `git stash` stashes the changes in a dirty working directory away | S2 | PASS | "git-stash - Stash the changes in a dirty working directory away" |
| 5 | What it is | `git worktree` manages multiple working trees attached to the same repository, so you can check out more than one branch at a time | S3 | PASS | "Manage multiple working trees attached to the same repository." / "allowing you to check out more than one branch at a time" |
| 6 | What it is | `git bisect` uses binary search to find the commit that introduced a bug | S4 | PASS | "git-bisect - Use binary search to find the commit that introduced a bug" |
| 7 | What it is | `git cherry-pick` applies the changes introduced by some existing commits | S5 | PASS | "git-cherry-pick - Apply the changes introduced by some existing commits" |
| 8 | What it is (table) | rebase: cleaner history, the log of a rebased branch looks linear | S6 | PASS | "rebasing makes for a cleaner history." / "it looks like a linear history" |
| 9 | What it is (table) | stash: switch branches without committing half-done work | S7 | PASS | "you want to switch branches for a bit... you don't want to do a commit of half-done work" |
| 10 | What it is (table) | worktree: more than one branch checked out at a time, each at its own path | S3 | FAIL | S3 gives "check out more than one branch at a time" and "checks it out at path ../hotfix". It does not say each branch has its own path. Fix: "More than one branch checked out at a time". |
| 11 | What it is (table) | bisect: dozens or hundreds of commits since the code last worked, and you don't know what broke it | S8 | PASS | "If you don’t know what is breaking, and there have been dozens or hundreds of commits since the last state where you know the code worked" |
| 12 | What it is (table) | cherry-pick: backporting a fix to a maintenance branch for an older release | S5 | PASS | "backporting a fix to a maintenance branch for an older release" |
| 13 | What it is (table) | blame: which revision and author last modified each line of a file | S11 | PASS | "git-blame - Show what revision and author last modified each line of a file" |
| 14 | How it works | Git makes it easy to keep several long-running branches that are always open, one for each stage of the development cycle | S9 | PASS | "you can have several branches that are always open and that you use for different stages of your development cycle" / "merging... is generally easy to do" |
| 15 | How it works | Many Git developers keep only entirely stable code in `master`, possibly only code that has been or will be released | S9 | PASS | "having only code that is entirely stable in their master branch — possibly only code that has been or will be released" |
| 16 | How it works | A parallel branch `develop` or `next` is where they work or test stability, and it can be merged into `master` when stable | S9 | PASS | "another parallel branch named develop or next that they work from or use to test stability... whenever it gets to a stable state, it can be merged into master" |
| 17 | How it works | A topic branch is a short-lived branch for a single feature or related work | S9 | PASS | "A topic branch is a short-lived branch that you create and use for a single particular feature or related work." |
| 18 | How it works | Topic branches are pulled into `develop` when ready, to make sure they pass all tests and add no bugs | S9 | PASS | "pull in topic branches... when they’re ready, to make sure they pass all the tests and don’t introduce bugs" |
| 19 | How it works (diagram) | master/develop/topic diagram | S9 | PASS | The diagram restates the sentences above (S9 lines 276-278, 290). It is not a separate fact. |
| 20 | How it works | There are two main ways to integrate changes: merge and rebase | S6 | PASS | "there are two main ways to integrate changes from one branch into another: the merge and the rebase." |
| 21 | How it works | A merge does a three-way merge between the two latest snapshots and their common ancestor, creating a new snapshot and commit | S6 | PASS | "It performs a three-way merge between the two latest branch snapshots (C3 and C4) and the most recent common ancestor of the two (C2), creating a new snapshot (and commit)." |
| 22 | How it works | A rebase takes all changes committed on one branch and replays them on a different branch | S6 | PASS | S6 has "replays them" (grep matched the sentence on rebase). Not read in full. |
| 23 | How it works | No difference in the end product, but rebasing gives a cleaner history | S6 | PASS | "There is no difference in the end product of the integration, but rebasing makes for a cleaner history." |
| 24 | How it works | Rebasing abandons existing commits and creates new, similar but different ones; the diagram shows D' and E' | S6 | PASS | "you’re abandoning existing commits and creating new ones that are similar but different" |
| 25 | How it works | Cherry-pick applies the change each commit introduces, recording a new commit for each | S5 | PASS | "Given one or more existing commits, apply the change each one introduces, recording a new commit for each." |
| 26 | How it works | Cherry-pick requires a clean working tree | S5 | PASS | "This requires your working tree to be clean" |
| 27 | How it works | With `-x` it appends "(cherry picked from commit …)" to the original commit message | S5 | PASS | "append a line that says "(cherry picked from commit …​)" to the original commit message" |
| 28 | How it works | Stashing takes the dirty state (modified tracked files and staged changes) and saves it on a stack of unfinished changes | S7 | PASS | "Stashing takes the dirty state of your working directory — that is, your modified tracked files and staged changes — and saves it on a stack of unfinished changes" |
| 29 | How it works | You can reapply a stash at any time, even on a different branch | S7 | PASS | "that you can reapply at any time (even on a different branch)" |
| 30 | How it works | `git stash list` shows stashes; `apply` reapplies one; `pop` applies and then drops it | S7 | PASS | "To see which stashes you’ve stored, you can use git stash list" / "git stash apply" / "git stash pop to apply the stash and then immediately drop it from your stack" |
| 31 | How it works | A repository can support multiple working trees so you can check out more than one branch at a time | S3 | PASS | "A git repository can support multiple working trees, allowing you to check out more than one branch at a time." |
| 32 | How it works | Each worktree made by `git worktree add` is a linked worktree; the one `git init` or `git clone` prepared is the main worktree | S3 | PASS | "This new worktree is called a "linked worktree" as opposed to the "main worktree" prepared by git-init[1] or git-clone[1]." |
| 33 | How it works | You give bisect a "bad" commit known to contain the bug and a "good" commit known to be before it | S4 | PASS | "a "bad" commit that is known to contain the bug, and a "good" commit that is known to be before the bug was introduced" |
| 34 | How it works | Git picks a commit between the two and asks whether it is good or bad | S4 | PASS | "git bisect picks a commit between those two endpoints and asks you whether the selected commit is "good" or "bad"" |
| 35 | How it works | It keeps narrowing the range until it finds the exact commit that introduced the change (diagram) | S4 | PASS | "It continues narrowing down the range until it finds the exact commit that introduced the change." The diagram is the tutorial's illustration of that. |
| 36 | How it works | With `git bisect run <cmd>`, a command does the marking | S4 | PASS | "If you have a script that can tell if the current source code is good or bad, you can bisect by issuing the command: git bisect run <cmd>" |
| 37 | How it works (table) | Exit 0 = good; 1-127 except 125 = bad; 125 = cannot test; other = stops | S4 | PASS | "exit with code 0 if the current source code is good/old, and exit with a code between 1 and 127 (inclusive), except 125, if the current source code is bad/new. Any other exit code will abort the bisect process." / "The special exit code 125 should be used when the current source code cannot be tested." |
| 38 | Try it | Practice run needs only Git and a bash shell; you find the bug's commit twice, then use a stash and a worktree | none | N/A | Describes the reader's own work. |
| 39 | Try it | Step 1 script: eight commits, commit 6 changes total from 100 to 110 | none | N/A | Tutorial's own script, stated as such. |
| 40 | Try it | Start a session, mark the current commit bad and the oldest good | S4 | PASS | "git bisect start / git bisect bad # Current version is bad / git bisect good v2.6.13-rc2 # v2.6.13-rc2 is known to be good" |
| 41 | Try it | Git then checks out a commit in between | S4 | PASS | "selects a commit in the middle of that range of history, checks it out" |
| 42 | Try it | Repeat until Git prints the first bad commit | S4 | PASS | "Keep repeating the process... the command will print out a description of the first bad commit." |
| 43 | Try it | `git bisect reset` returns you to the commit you had before | S4 | PASS | "By default, this will return your tree to the commit that was checked out before git bisect start." |
| 44 | Try it | You can list the known bad commit first and the known good commit second in `git bisect start` | S8 | PASS | "listing the known bad commit first and the known good commit second: $ git bisect start HEAD v1.0" |
| 45 | Try it | `git grep -q` exits 0 on a match and non-zero when there is none | S10 | PASS | "-q --quiet Do not output matched lines; instead, exit with status 0 when there is a match and with non-zero status when there isn’t." |
| 46 | Try it | `git bisect run` marks a commit good when `price.txt` says `total=100`, bad otherwise | S4 | PASS | "exit with code 0 if the current source code is good/old, and exit with a code between 1 and 127 (inclusive), except 125, if ... bad/new" |
| 47 | Try it | At the end Git prints a description of the first bad commit | S4 | PASS | "the command will print out a description of the first bad commit" |
| 48 | Try it | Output of the tutorial's own run, with a hash that will differ | none | N/A | The tutorial's own run output. |
| 49 | Try it | `git stash -u` also takes untracked files, such as a new test file | S7 | PASS | "If you specify --include-untracked or -u, Git will include untracked files in the stash being created." |
| 50 | Try it | A stash reverts the working directory to match `HEAD`, so `git status` shows a clean tree | S2 | PASS | "saves your local modifications away and reverts the working directory to match the HEAD commit." |
| 51 | Try it | `git stash pop` brings the work back and drops the stash | S7 | PASS | "git stash pop to apply the stash and then immediately drop it from your stack" |
| 52 | Try it | `git worktree add ../hotfix` creates a new branch `hotfix` and checks it out at `../hotfix` | S3 | PASS | "git worktree add ../hotfix creates new branch hotfix and checks it out at path ../hotfix" |
| 53 | Try it | `git worktree list` shows the main worktree first, then the linked ones | S3 | PASS | "The main worktree is listed first, followed by each of the linked worktrees." |
| 54 | Try it | Remove it with `git worktree remove` when done | S3 | PASS | "When you are done with a linked worktree, remove it with git worktree remove." |
| 55 | How a tester uses it | Use `git bisect` when you don't know what is breaking and dozens or hundreds of commits have passed | S8 | PASS | "If you don’t know what is breaking, and there have been dozens or hundreds of commits... you’ll likely turn to git bisect for help." |
| 56 | How a tester uses it | A script that exits 0 when good and non-0 when bad lets you fully automate it | S8 | PASS | "if you have a script that will exit 0 if the project is good or non-0 if the project is bad, you can fully automate git bisect." |
| 57 | How a tester uses it | You can run whatever you have that runs automated tests | S8 | PASS | "You can also run something like make or make tests or whatever you have that runs automated tests for you." |
| 58 | How a tester uses it | Tutorial's tip: use a command that runs only the failing test | none | N/A | Tutorial's own advice. |
| 59 | How a tester uses it | If a method is buggy, `git blame` can show which commit introduced that line | S8 | PASS | "if you see that a method in your code is buggy, you can annotate the file with git blame to determine which commit was responsible for the introduction of that line." |
| 60 | How a tester uses it | `git blame` annotates each line with information from the revision that last modified it | S11 | PASS | "Annotates each line in the given file with information from the revision which last modified the line." |
| 61 | How a tester uses it | A cherry-picked fix is a new commit on the release branch | S5 | PASS | "recording a new commit for each" |
| 62 | How a tester uses it | Between two publicly visible branches, such as a backport to a maintenance branch, the `-x` line can be useful | S5 | PASS | "cherry-picking between two publicly visible branches (e.g. backporting a fix to a maintenance branch...), adding this information can be useful." |
| 63 | How a tester uses it | The `-x` line names the commit the change came from | S5 | PASS | "to indicate which commit this change was cherry-picked from" |
| 64 | How a tester uses it | With linked worktrees you can check out more than one branch at a time, each at its own path | S3 | FAIL | Same defect as row 10: "each at its own path" is not in S3. Fix: "With linked worktrees, you can check out more than one branch at a time." |
| 65 | How a tester uses it | To work on an existing branch in a new worktree, use `git worktree add <path> <branch>` | S3 | PASS | "To instead work on an existing branch in a new worktree, use git worktree add <path> <branch>." |
| 66 | How a tester uses it | When an urgent fix needs testing, stash half-done changes and switch branches; reapply later, even on a different branch | S7 | PASS | "you want to switch branches for a bit to work on something else... don’t want to do a commit of half-done work" / "reapply at any time (even on a different branch)". The word "urgent" is the page's own example. |
| 67 | How a tester uses it | After a rebase, the branch is made of new commits | S6 | PASS | "you’re abandoning existing commits and creating new ones" |
| 68 | Common mistakes | Do not rebase commits that exist outside your repository and that people may have based work on | S6 | PASS | "Do not rebase commits that exist outside your repository and that people may have based work on." |
| 69 | Common mistakes | Rebase local changes before you push, but never rebase anything you have pushed | S6 | PASS | "rebase local changes before pushing to clean up your work, but never rebase anything that you’ve pushed somewhere" |
| 70 | Common mistakes | After a bisect session, `git bisect reset` cleans up the bisection state and returns you to the original HEAD | S4 | PASS | "After a bisect session, to clean up the bisection state and return to the original HEAD, issue the following command: git bisect reset" |
| 71 | Common mistakes | Any exit code other than 0 to 127 aborts the bisect | S4 | PASS | "Any other exit code will abort the bisect process." |
| 72 | Common mistakes | A program that ends with `exit(-1)` leaves the code 255 | S4 | PASS | "a program that terminates via exit(-1) leaves $? = 255" |
| 73 | Common mistakes | For a commit that cannot be tested, exit with 125 | S4 | PASS | "The special exit code 125 should be used when the current source code cannot be tested." |
| 74 | Common mistakes | If you skip a commit next to the one you look for, Git cannot tell exactly which was the first bad one | S4 | PASS | "if you skip a commit adjacent to the one you are looking for, Git will not be able to tell exactly which of those commits was the first bad one" (S4 lines 365-367; wording as listed in grep) |
| 75 | Common mistakes | By default `git stash` stashes only modified and staged tracked files | S7 | PASS | "By default, git stash will stash only modified and staged tracked files." |
| 76 | Common mistakes | Add `-u` (`--include-untracked`) to include untracked files | S7 | PASS | "If you specify --include-untracked or -u, Git will include untracked files in the stash being created." |
| 77 | Common mistakes | Use `git worktree remove` instead of deleting a worktree folder by hand | S3 | PASS | "When you are done with a linked worktree, remove it with git worktree remove." |
| 78 | Common mistakes | If the folder is already gone, `git worktree prune` removes the leftover worktree information | S3 | PASS | "If a working tree is deleted without using git worktree remove... you can run git worktree prune... to clean up any stale administrative files." |
| 79 | Common mistakes | `git cherry-pick` requires a clean working tree | S5 | PASS | "This requires your working tree to be clean" |
| 80 | What a tester can check | Callout "Tutorial advice": six pieces of advice (flaky tests, hash and title in the bug report, ask about `-x`, rerun tests after rebase, ask which branch is stable, keep work in a stash or worktree) | none | PASS | The callout says "This list is the tutorial's own advice for a tester who uses these commands." It states no fact about a tool that the rest of the page does not support (`-x` row 27, rebase row 67, stash and worktree rows 49-54). |
| 81 | Key words | Long-running branch | none | PASS | Page: "several long-running branches that are always open"; "master... develop... test stability" |
| 82 | Key words | Topic branch | none | PASS | Page: "A topic branch is a short-lived branch for a single feature or related work" |
| 83 | Key words | Rebase | none | PASS | Page: "A rebase takes all the changes that were committed on one branch and replays them on a different branch"; "create new ones" |
| 84 | Key words | Cherry-pick | none | PASS | Page: "applies the change each one introduces, recording a new commit for each" |
| 85 | Key words | `-x` | none | PASS | Page: "With `-x`, it appends a line that says "(cherry picked from commit …)"" |
| 86 | Key words | Stash | none | PASS | Page: "saves it on a stack of unfinished changes"; "You can reapply it at any time" |
| 87 | Key words | Linked worktree | none | PASS | Page: "Each one that `git worktree add` creates is a **linked worktree**" |
| 88 | Key words | Main worktree | none | PASS | Page: "the one that `git init` or `git clone` prepared is the **main worktree**" |
| 89 | Key words | Bisect | none | PASS | Page: "`git bisect` uses binary search to find the commit that introduced a bug" |
| 90 | Key words | Good (old) / bad (new) | none | PASS | Page: "a 'good' commit that is known to be before the bug"; table "0 \| Good (old)", "Bad (new)" |
| 91 | Key words | `git bisect run` | none | PASS | Page: "With `git bisect run <cmd>`, a command does the marking for you. Its exit code decides" |
| 92 | Key words | Exit code 125 | none | PASS | Page table: "125 \| This commit cannot be tested" |
| 93 | Key words | `git blame` | none | PASS | Page table: "Which revision and author last modified each line of a file" |

Open FAILs after round 10: 2

Changed after this round: Both FAILs were fixed: "each at its own path" was removed from the worktree rows; they now say only what S3 says: more than one branch checked out at a time.

## Round 11 (2026-11-15)

# Fact check: devops / git-workflows (round 11)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Branches by stability, rebase and cherry-pick, stash and worktrees, and git bisect to find the commit that broke a test. | none | N/A | Describes the page's topics. It states no new fact about a tool. |
| 2 | Lede | Page covers Git commands a tester meets after the basics, with a practice run that finds a known bad commit twice. | none | N/A | Describes the page itself. |
| 3 | What it is | `git rebase` reapplies commits on top of another base tip | S1 | PASS | "git-rebase - Reapply commits on top of another base tip" |
| 4 | What it is | `git stash` stashes the changes in a dirty working directory away | S2 | PASS | "git-stash - Stash the changes in a dirty working directory away" |
| 5 | What it is | `git worktree` manages multiple working trees attached to the same repository, so you can check out more than one branch at a time | S3 | PASS | "Manage multiple working trees attached to the same repository. A git repository can support multiple working trees, allowing you to check out more than one branch at a time." |
| 6 | What it is | `git bisect` uses binary search to find the commit that introduced a bug | S4 | PASS | "git-bisect - Use binary search to find the commit that introduced a bug" |
| 7 | What it is | `git cherry-pick` applies the changes introduced by some existing commits | S5 | PASS | "git-cherry-pick - Apply the changes introduced by some existing commits" |
| 8 | What it is (table) | rebase: cleaner history, the log of a rebased branch looks linear | S6 | PASS | "rebasing makes for a cleaner history. If you examine the log of a rebased branch, it looks like a linear history" |
| 9 | What it is (table) | stash: switch branches without committing half-done work | S7 | PASS | "Now you want to switch branches, but you don’t want to commit what you’ve been working on yet, so you’ll stash the changes." |
| 10 | What it is (table) | worktree: more than one branch checked out at a time | S3 | PASS | "allowing you to check out more than one branch at a time" |
| 11 | What it is (table) | bisect: dozens or hundreds of commits since the code last worked, and you don't know what broke it | S8 | PASS | "If you don’t know what is breaking, and there have been dozens or hundreds of commits since the last state where you know the code worked, you’ll likely turn to git bisect for help." |
| 12 | What it is (table) | cherry-pick: backporting a fix to a maintenance branch for an older release | S5 | PASS | "backporting a fix to a maintenance branch for an older release from a development branch" |
| 13 | What it is (table) | blame: which revision and author last modified each line of a file | S11 | PASS | "git-blame - Show what revision and author last modified each line of a file" |
| 14 | How it works | Git makes it easy to keep several long-running branches that are always open, one for each stage of the development cycle | S9 | FAIL | Source: "merging ... is generally easy to do. This means you can have several branches that are always open and that you use for different stages of your development cycle". "One for each stage" is stronger than "different stages". Fix: "...for different stages of the development cycle". |
| 15 | How it works | Many Git developers keep only entirely stable code in `master`, possibly only code that has been or will be released | S9 | PASS | "having only code that is entirely stable in their master branch — possibly only code that has been or will be released." |
| 16 | How it works | A parallel branch named `develop` or `next` is where they work or test stability; when stable it can be merged into `master` | S9 | PASS | "another parallel branch named develop or next that they work from or use to test stability — ... whenever it gets to a stable state, it can be merged into master." |
| 17 | How it works | A topic branch is a short-lived branch for a single feature or related work | S9 | PASS | "A topic branch is a short-lived branch that you create and use for a single particular feature or related work." |
| 18 | How it works | Topic branches are pulled into `develop` when ready, to make sure they pass all tests and don't introduce bugs (with the branch diagram) | S9 | PASS | "It’s used to pull in topic branches (short-lived branches...) when they’re ready, to make sure they pass all the tests and don’t introduce bugs." The diagram only illustrates this and the sentences before it. |
| 19 | How it works | Two main ways to integrate changes: the merge and the rebase | S6 | PASS | "there are two main ways to integrate changes from one branch into another: the merge and the rebase." |
| 20 | How it works | A merge does a three-way merge between the two latest branch snapshots and their most recent common ancestor, creating a new snapshot and commit | S6 | PASS | "It performs a three-way merge between the two latest branch snapshots (C3 and C4) and the most recent common ancestor of the two (C2), creating a new snapshot (and commit)." |
| 21 | How it works | A rebase takes all changes committed on one branch and replays them on a different branch | S6 | PASS | "you can take all the changes that were committed on one branch and replay them on a different branch." |
| 22 | How it works | No difference in end product, but rebasing makes a cleaner history | S6 | PASS | "There is no difference in the end product of the integration, but rebasing makes for a cleaner history." |
| 23 | How it works | When you rebase you abandon existing commits and create new, similar but different ones (with the diagram) | S6 | PASS | "When you rebase stuff, you’re abandoning existing commits and creating new ones that are similar but different." |
| 24 | How it works | `git cherry-pick` applies the change of each given commit, recording a new commit for each | S5 | PASS | "Given one or more existing commits, apply the change each one introduces, recording a new commit for each." |
| 25 | How it works | It requires your working tree to be clean | S5 | PASS | "This requires your working tree to be clean (no modifications from the HEAD commit)." |
| 26 | How it works | With `-x` it appends "(cherry picked from commit …)" to the original commit message | S5 | PASS | "append a line that says "(cherry picked from commit …​)" to the original commit message" |
| 27 | How it works | Stashing takes the dirty state (modified tracked files and staged changes) and saves it on a stack of unfinished changes | S7 | PASS | "Stashing takes the dirty state of your working directory — that is, your modified tracked files and staged changes — and saves it on a stack of unfinished changes" |
| 28 | How it works | You can reapply it at any time, even on a different branch | S7 | PASS | "that you can reapply at any time (even on a different branch)" |
| 29 | How it works | `git stash list` shows stashes, `git stash apply` reapplies one, `git stash pop` applies and immediately drops it | S7 | PASS | "To see which stashes you’ve stored, you can use git stash list"; "You can reapply the one you just stashed by using ... git stash apply."; "You can also run git stash pop to apply the stash and then immediately drop it from your stack." |
| 30 | How it works | A repository can support multiple working trees, so you can check out more than one branch at a time | S3 | PASS | "A git repository can support multiple working trees, allowing you to check out more than one branch at a time." |
| 31 | How it works | `git worktree add` creates a linked worktree; the one `git init`/`git clone` prepared is the main worktree | S3 | PASS | "This new worktree is called a "linked worktree" as opposed to the "main worktree" prepared by git-init[1] or git-clone[1]." |
| 32 | How it works | You give `git bisect` a "bad" commit known to contain the bug and a "good" commit known to be before it | S4 | PASS | "a "bad" commit that is known to contain the bug, and a "good" commit that is known to be before the bug was introduced" |
| 33 | How it works | Git picks a commit between the two and asks whether it is good or bad | S4 | PASS | "git bisect picks a commit between those two endpoints and asks you whether the selected commit is "good" or "bad"." |
| 34 | How it works | It keeps narrowing the range until it finds the exact commit that introduced the change (with the 8-commit diagram) | S4 | PASS | "It continues narrowing down the range until it finds the exact commit that introduced the change." The diagram is an illustration of this. |
| 35 | How it works | With `git bisect run <cmd>`, a command does the marking; its exit code decides | S4 | PASS | "If you have a script that can tell if the current source code is good or bad, you can bisect by issuing the command: git bisect run <cmd>" |
| 36 | How it works (table) | 0 = Good (old) | S4 | PASS | "should exit with code 0 if the current source code is good/old" |
| 37 | How it works (table) | 1 to 127 except 125 = Bad (new) | S4 | PASS | "exit with a code between 1 and 127 (inclusive), except 125, if the current source code is bad/new." |
| 38 | How it works (table) | 125 = this commit cannot be tested | S4 | PASS | "The special exit code 125 should be used when the current source code cannot be tested." |
| 39 | How it works (table) | Any other code = bisect stops | S4 | PASS | "Any other exit code will abort the bisect process." |
| 40 | Try it | Intro: needs only Git and a bash shell; you make a repo with a known bug, find its commit twice, then use a stash and a worktree | none | N/A | Describes the reader's own work. |
| 41 | Try it | Step 1 script: eight commits, commit 6 changes total 100 to 110, using `git init -b main` and `git log --oneline` | none | FAIL | The page says "This script is the tutorial's own", but `git init -b main` and `git log --oneline` are not in any file in pages/ (no match for "init -b", "--initial-branch" or "-b main"). Fix: drop the `-b main` flag, or add a source that gives it. |
| 42 | Try it | Step 2: start a session, mark the current commit bad and the oldest good | S4 | PASS | "$ git bisect start / $ git bisect bad # Current version is bad / $ git bisect good v2.6.13-rc2 # v2.6.13-rc2 is known to be good" |
| 43 | Try it | Git then checks out a commit in between | S4 | PASS | "git bisect selects a commit in the middle of that range of history, checks it out" |
| 44 | Try it | Repeat until Git prints the first bad commit | S4 | PASS | "Keep repeating the process ... the command will print out a description of the first bad commit." |
| 45 | Try it | `git bisect reset` returns you to the commit you had before | S4 | PASS | "By default, this will return your tree to the commit that was checked out before git bisect start." |
| 46 | Try it | Step 3: you can list the known bad commit first and the known good commit second in `git bisect start` | S8 | PASS | "listing the known bad commit first and the known good commit second: $ git bisect start HEAD v1.0" |
| 47 | Try it | `git grep -q` exits 0 on a match and non-zero when there is none | S10 | PASS | "-q --quiet Do not output matched lines; instead, exit with status 0 when there is a match and with non-zero status when there isn’t." |
| 48 | Try it | So `git bisect run` marks a commit good when `price.txt` says `total=100`, and bad when it does not (code block) | S4 | PASS | "exit with code 0 if the current source code is good/old, and exit with a code between 1 and 127 (inclusive), except 125, if ... bad/new." Together with the grep exit status in row 47. |
| 49 | Try it | At the end Git prints a description of the first bad commit | S4 | PASS | "the command will print out a description of the first bad commit." |
| 50 | Try it | Sample output from the tutorial's own run (hash 7b6cfbb…) | none | N/A | The tutorial's own run output. The text says the hash will differ. |
| 51 | Try it | Step 4: `git stash -u` also takes untracked files, such as a new test file | S7 | PASS | "If you specify --include-untracked or -u, Git will include untracked files in the stash being created." |
| 52 | Try it | A stash reverts the working directory to match `HEAD`, so `git status` shows a clean tree | S2 | PASS | "and reverts the working directory to match the HEAD commit." |
| 53 | Try it | `git stash pop` brings the work back and drops the stash | S7 | PASS | "git stash pop to apply the stash and then immediately drop it from your stack." |
| 54 | Try it | Step 5: `git worktree add ../hotfix` creates a new branch `hotfix` and checks it out at `../hotfix` | S3 | PASS | "git worktree add ../hotfix creates new branch hotfix and checks it out at path ../hotfix." |
| 55 | Try it | `git worktree list` shows the main worktree first, then the linked ones | S3 | PASS | "The main worktree is listed first, followed by each of the linked worktrees." |
| 56 | Try it | Remove it with `git worktree remove` | S3 | PASS | "When you are done with a linked worktree, remove it with git worktree remove." |
| 57 | How a tester uses it | Use `git bisect` when you don't know what is breaking and there have been dozens or hundreds of commits | S8 | PASS | "If you don’t know what is breaking, and there have been dozens or hundreds of commits ... you’ll likely turn to git bisect for help." |
| 58 | How a tester uses it | A script that exits 0 when good and non-0 when bad lets you fully automate it | S8 | PASS | "if you have a script that will exit 0 if the project is good or non-0 if the project is bad, you can fully automate git bisect." |
| 59 | How a tester uses it | You can also run whatever you have that runs automated tests | S8 | PASS | "You can also run something like make or make tests or whatever you have that runs automated tests for you." |
| 60 | How a tester uses it | Tutorial's tip: use a command that runs only the failing test | none | N/A | Labelled as the tutorial's own tip. |
| 61 | How a tester uses it | `git blame` can show which commit introduced a line of a buggy method | S8 | PASS | "if you see that a method in your code is buggy, you can annotate the file with git blame to determine which commit was responsible for the introduction of that line." |
| 62 | How a tester uses it | It annotates each line of a file with information from the revision that last modified it | S11 | PASS | "Annotates each line in the given file with information from the revision which last modified the line." |
| 63 | How a tester uses it | A cherry-picked fix is a new commit on the release branch | S5 | PASS | "apply the change each one introduces, recording a new commit for each." |
| 64 | How a tester uses it | Between two publicly visible branches, such as a backport to a maintenance branch, the `-x` line can be useful | S5 | PASS | "cherry-picking between two publicly visible branches (e.g. backporting a fix to a maintenance branch ...), adding this information can be useful." |
| 65 | How a tester uses it | It names the commit the change came from | S5 | PASS | "to indicate which commit this change was cherry-picked from." |
| 66 | How a tester uses it | With linked worktrees you can check out more than one branch at a time | S3 | PASS | "allowing you to check out more than one branch at a time" |
| 67 | How a tester uses it | To work on an existing branch in a new worktree use `git worktree add <path> <branch>` | S3 | PASS | "To instead work on an existing branch in a new worktree, use git worktree add <path> <branch>." |
| 68 | How a tester uses it | When an urgent fix needs testing, stash half-done test changes and switch branches | S7 | PASS | "you want to switch branches ... you’ll stash the changes." |
| 69 | How a tester uses it | You can reapply them later, even on a different branch | S7 | PASS | "you can reapply at any time (even on a different branch)" |
| 70 | How a tester uses it | After a rebase, the branch is made of new commits | S6 | PASS | "When you rebase stuff, you’re abandoning existing commits and creating new ones" |
| 71 | Common mistakes | Do not rebase commits that exist outside your repository and that people may have based work on | S6 | PASS | "Do not rebase commits that exist outside your repository and that people may have based work on." |
| 72 | Common mistakes | Rebase local changes before you push, but never rebase anything you have pushed | S6 | PASS | "rebase local changes before pushing to clean up your work, but never rebase anything that you’ve pushed somewhere." |
| 73 | Common mistakes | After a bisect session, `git bisect reset` cleans up the bisection state and returns you to the original `HEAD` | S4 | PASS | "After a bisect session, to clean up the bisection state and return to the original HEAD, issue the following command: git bisect reset" |
| 74 | Common mistakes | Any exit code other than 0 to 127 aborts the bisect | S4 | PASS | "Any other exit code will abort the bisect process." |
| 75 | Common mistakes | A program that ends with `exit(-1)` leaves the code 255 | S4 | PASS | "a program that terminates via exit(-1) leaves $? = 255" |
| 76 | Common mistakes | For a commit that cannot be tested, exit with 125 | S4 | PASS | "The special exit code 125 should be used when the current source code cannot be tested." |
| 77 | Common mistakes | Skipping a commit next to the one you look for means Git cannot tell exactly which was the first bad one | S4 | PASS | "if you skip a commit adjacent to the one you are looking for, ... first bad one." The source line before "first bad one" is cut, but the two lines read as one sentence. |
| 78 | Common mistakes | By default `git stash` stashes only modified and staged tracked files | S7 | PASS | "By default, git stash will stash only modified and staged tracked files." |
| 79 | Common mistakes | Add `-u` (`--include-untracked`) to include untracked files | S7 | PASS | "If you specify --include-untracked or -u, Git will include untracked files in the stash being created." |
| 80 | Common mistakes | Use `git worktree remove` instead of deleting the folder by hand | S3 | PASS | "When you are done with a linked worktree, remove it with git worktree remove." |
| 81 | Common mistakes | If the folder is already gone, `git worktree prune` removes the leftover worktree information | S3 | PASS | "If a working tree is deleted without using git worktree remove ... you can run git worktree prune ... to clean up any stale administrative files." |
| 82 | Common mistakes | `git cherry-pick` requires a clean working tree | S5 | PASS | "This requires your working tree to be clean" |
| 83 | What a tester can check | Callout "Tutorial advice": six pieces of advice | none | PASS | The callout says "This list is the tutorial's own advice". It gives no tool fact that the rest of the page does not support. Its `-x` and stash/worktree points match rows 26 and 68. |
| 84 | Key words | Long-running branch | none | PASS | "Git makes it easy to keep several long-running branches that are always open" and "keep only entirely stable code in their master branch ... develop or next is where they work or test stability" |
| 85 | Key words | Topic branch | none | PASS | "A topic branch is a short-lived branch for a single feature or related work" |
| 86 | Key words | Rebase | none | PASS | "A rebase takes all the changes that were committed on one branch and replays them on a different branch" and "you abandon existing commits and create new ones" |
| 87 | Key words | Cherry-pick | none | PASS | "applies the change each one introduces, recording a new commit for each" |
| 88 | Key words | `-x` | none | PASS | "With `-x`, it appends a line that says "(cherry picked from commit …)" to the original commit message" |
| 89 | Key words | Stash | none | PASS | "saves it on a stack of unfinished changes. You can reapply it at any time" |
| 90 | Key words | Linked worktree | none | PASS | "Each one that `git worktree add` creates is a linked worktree" |
| 91 | Key words | Main worktree | none | PASS | "the one that `git init` or `git clone` prepared is the main worktree" |
| 92 | Key words | Bisect | none | PASS | "`git bisect` uses binary search to find the commit that introduced a bug" and "exact commit that introduced the change" |
| 93 | Key words | Good (old) / bad (new) | none | PASS | "a "good" commit that is known to be before the bug"; "a "bad" commit that is known to contain the bug"; table: "0 \| Good (old)" |
| 94 | Key words | `git bisect run` | none | PASS | "With `git bisect run <cmd>`, a command does the marking for you. Its exit code decides" |
| 95 | Key words | Exit code 125 | none | PASS | "125 \| This commit cannot be tested" |
| 96 | Key words | `git blame` | none | PASS | "Which revision and author last modified each line of a file" |

Open FAILs after round 11: 2

Changed after this round: Both FAILs were fixed: long-running branches are open "for different stages of the development cycle" (S9's words, not "one for each stage"); the practice script uses `git init` without `-b main`, and the step now cites three new sources for its basic commands: `git init` (S13, Getting a Git Repository), `git add` and `git commit -m` (S14, Recording Changes), and `git log --oneline` (S12, Viewing the Commit History).

## Round 12 (2026-11-15)

# Fact check: devops / git-workflows (round 12)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Branches by stability, rebase and cherry-pick, stash and worktrees, and git bisect to find the commit that broke a test | none | N/A | Describes the page itself. |
| 2 | Lede | Page covers Git commands after the basics, with a practice run that finds a known bad commit twice | none | N/A | Describes the page itself. |
| 3 | What it is | `git rebase` reapplies commits on top of another base tip | 1 | PASS | S1: "git-rebase - Reapply commits on top of another base tip" |
| 4 | What it is | `git stash` stashes the changes in a dirty working directory away | 2 | PASS | S2: "git-stash - Stash the changes in a dirty working directory away" |
| 5 | What it is | `git worktree` manages multiple working trees attached to the same repository, so you can check out more than one branch at a time | 3 | PASS | S3: "Manage multiple working trees attached to the same repository. A git repository can support multiple working trees, allowing you to check out more than one branch at a time." |
| 6 | What it is | `git bisect` uses binary search to find the commit that introduced a bug | 4 | PASS | S4: "git-bisect - Use binary search to find the commit that introduced a bug" |
| 7 | What it is | `git cherry-pick` applies the changes introduced by some existing commits | 5 | PASS | S5: "git-cherry-pick - Apply the changes introduced by some existing commits" |
| 8 | What it is | Table: rebase gives a cleaner history, and the log of a rebased branch looks linear | 6 | PASS | S6: "rebasing makes for a cleaner history. If you examine the log of a rebased branch, it looks like a linear history" |
| 9 | What it is | Table: stash is for switching branches without committing half-done work | 7 | PASS | S7: "you want to switch branches for a bit to work on something else. The problem is, you don't want to do a commit of half-done work" |
| 10 | What it is | Table: worktree gives more than one branch checked out at a time | 3 | PASS | S3: "allowing you to check out more than one branch at a time" |
| 11 | What it is | Table: bisect is for dozens or hundreds of commits since the code last worked, when you don't know what broke it | 8 | PASS | S8: "If you don't know what is breaking, and there have been dozens or hundreds of commits since the last state where you know the code worked, you'll likely turn to git bisect" |
| 12 | What it is | Table: cherry-pick is for backporting a fix to a maintenance branch for an older release | 5 | PASS | S5: "backporting a fix to a maintenance branch for an older release from a development branch" |
| 13 | What it is | Table: blame shows which revision and author last modified each line of a file | 11 | PASS | S11: "git-blame - Show what revision and author last modified each line of a file" |
| 14 | How it works | Git makes it easy to keep several long-running branches that are always open, for different stages of the development cycle | 9 | PASS | S9: "you can have several branches that are always open and that you use for different stages of your development cycle"; S9: "merging from one branch into another multiple times over a long period is generally easy to do" |
| 15 | How it works | Many developers keep only entirely stable code in `master`, possibly only code that has been or will be released | 9 | PASS | S9: "having only code that is entirely stable in their master branch — possibly only code that has been or will be released" |
| 16 | How it works | A parallel branch `develop` or `next` is where they work or test stability; when stable, it can be merged into `master` | 9 | PASS | S9: "another parallel branch named develop or next that they work from or use to test stability — ... whenever it gets to a stable state, it can be merged into master" |
| 17 | How it works | A topic branch is a short-lived branch for a single feature or related work | 9 | PASS | S9: "A topic branch is a short-lived branch that you create and use for a single particular feature or related work." |
| 18 | How it works | Topic branches are pulled into `develop` when ready, to make sure they pass all tests and don't introduce bugs. The diagram belongs to this claim. | 9 | PASS | S9: "It's used to pull in topic branches (short-lived branches...) when they're ready, to make sure they pass all the tests and don't introduce bugs." |
| 19 | How it works | There are two main ways to integrate changes from one branch into another: merge and rebase | 6 | PASS | S6: "there are two main ways to integrate changes from one branch into another: the merge and the rebase." |
| 20 | How it works | A merge does a three-way merge between the two latest branch snapshots and their most recent common ancestor, creating a new snapshot and commit | 6 | PASS | S6: "It performs a three-way merge between the two latest branch snapshots (C3 and C4) and the most recent common ancestor of the two (C2), creating a new snapshot (and commit)." |
| 21 | How it works | A rebase takes all the changes committed on one branch and replays them on a different branch | 6 | PASS | S6: "you can take all the changes that were committed on one branch and replay them on a different branch." |
| 22 | How it works | No difference in the end product, but rebasing makes for a cleaner history | 6 | PASS | S6: "There is no difference in the end product of the integration, but rebasing makes for a cleaner history." |
| 23 | How it works | When you rebase, you abandon existing commits and create new ones that are similar but different. The merge/rebase diagram belongs to this claim. | 6 | PASS | S6: "When you rebase stuff, you're abandoning existing commits and creating new ones that are similar but different." |
| 24 | How it works | Given one or more existing commits, cherry-pick applies the change each one introduces, recording a new commit for each | 5 | PASS | S5: "Given one or more existing commits, apply the change each one introduces, recording a new commit for each." |
| 25 | How it works | Cherry-pick requires your working tree to be clean | 5 | PASS | S5: "This requires your working tree to be clean (no modifications from the HEAD commit)." |
| 26 | How it works | With `-x`, it appends "(cherry picked from commit …)" to the original commit message | 5 | PASS | S5: "append a line that says "(cherry picked from commit …)" to the original commit message" |
| 27 | How it works | Stashing takes the dirty state (modified tracked files and staged changes) and saves it on a stack of unfinished changes | 7 | PASS | S7: "Stashing takes the dirty state of your working directory — that is, your modified tracked files and staged changes — and saves it on a stack of unfinished changes" |
| 28 | How it works | You can reapply it at any time, even on a different branch | 7 | PASS | S7: "that you can reapply at any time (even on a different branch)" |
| 29 | How it works | `git stash list` shows stashes, `git stash apply` reapplies one, `git stash pop` applies and immediately drops it | 7 | PASS | S7: "To see which stashes you've stored, you can use git stash list"; "git stash apply"; "git stash pop to apply the stash and then immediately drop it from your stack" |
| 30 | How it works | A repository can support multiple working trees, so you can check out more than one branch at a time | 3 | PASS | S3: "A git repository can support multiple working trees, allowing you to check out more than one branch at a time." |
| 31 | How it works | Each tree that `git worktree add` creates is a linked worktree; the one that `git init` or `git clone` prepared is the main worktree | 3 | PASS | S3: "This new worktree is called a "linked worktree" as opposed to the "main worktree" prepared by git-init[1] or git-clone[1]." |
| 32 | How it works | You give bisect a "bad" commit known to contain the bug and a "good" commit known to be before it | 4 | PASS | S4: "a "bad" commit that is known to contain the bug, and a "good" commit that is known to be before the bug was introduced" |
| 33 | How it works | Git picks a commit between the two and asks whether it is good or bad | 4 | PASS | S4: "git bisect picks a commit between those two endpoints and asks you whether the selected commit is "good" or "bad"" |
| 34 | How it works | It keeps narrowing the range until it finds the exact commit that introduced the change. The diagram belongs to this claim. | 4 | PASS | S4: "It continues narrowing down the range until it finds the exact commit that introduced the change." |
| 35 | How it works | With `git bisect run <cmd>`, a command does the marking; its exit code decides | 4 | PASS | S4: "If you have a script that can tell if the current source code is good or bad, you can bisect by issuing the command: git bisect run <cmd>" |
| 36 | How it works | Exit code table: 0 good (old); 1 to 127 except 125 bad (new); 125 cannot be tested; any other code stops bisect | 4 | PASS | S4: "exit with code 0 if the current source code is good/old, and exit with a code between 1 and 127 (inclusive), except 125, if the current source code is bad/new. Any other exit code will abort the bisect process. The special exit code 125 should be used when the current source code cannot be tested." |
| 37 | Try it | Intro: needs only Git and bash; make a repository with a known bug, find its commit twice, then use a stash and a worktree | none | N/A | Describes the reader's own work. |
| 38 | Try it | `git init` makes a repository with a `.git` subdirectory | 13 | PASS | S13: "This creates a new subdirectory named .git that contains all of your necessary repository files" |
| 39 | Try it | `git add` stages files; `git commit -m` records a commit with an inline message | 14 | PASS | S14: "To stage it, you run the git add command."; "you can type your commit message inline with the commit command by specifying it after a -m flag" |
| 40 | Try it | `git log --oneline` prints each commit on a single line | 12 | PASS | S12: "The oneline value for this option prints each commit on a single line" |
| 41 | Try it | The script makes eight commits and commit 6 changes the total from 100 to 110 (the "bug"); code block | none | N/A | The tutorial's own script, stated as such. All commands in it are supported by rows 38–40. |
| 42 | Try it | Start a session, mark the current commit as bad and the oldest as good | 4 | PASS | S4: "$ git bisect start $ git bisect bad # Current version is bad $ git bisect good v2.6.13-rc2 # v2.6.13-rc2 is known to be good" |
| 43 | Try it | Git then checks out a commit in between | 4 | PASS | S4: "git bisect selects a commit in the middle of that range of history, checks it out" |
| 44 | Try it | Repeat until Git prints the first bad commit | 4 | PASS | S4: "Keep repeating the process... the command will print out a description of the first bad commit." |
| 45 | Try it | `git bisect reset` returns you to the commit you had before | 4 | PASS | S4: "By default, this will return your tree to the commit that was checked out before git bisect start." |
| 46 | Try it | You can list the known bad commit first and the known good commit second in `git bisect start` | 8 | PASS | S8: "listing the known bad commit first and the known good commit second: $ git bisect start HEAD v1.0" |
| 47 | Try it | `git grep -q` exits with status 0 on a match and non-zero when there is none | 10 | PASS | S10: "exit with status 0 when there is a match and with non-zero status when there isn't." |
| 48 | Try it | So `git bisect run` marks a commit good when `price.txt` says `total=100`, and bad when it does not | 4 | PASS | S4: "exit with code 0 if the current source code is good/old, and exit with a code between 1 and 127 (inclusive), except 125, if ... bad/new." The `-- price.txt` part is supported by S10: "[--] [<pathspec>…]". |
| 49 | Try it | At the end, Git prints a description of the first bad commit | 4 | PASS | S4: "the command will print out a description of the first bad commit." |
| 50 | Try it | "When this tutorial ran the script, the output ended like this; your hash will differ" and the hash block | none | N/A | The tutorial's own run result; not a fact about a tool. |
| 51 | Try it | `git stash -u` also takes untracked files, such as a new test file | 7 | PASS | S7: "If you specify --include-untracked or -u, Git will include untracked files in the stash being created." |
| 52 | Try it | A stash reverts the working directory to match `HEAD`, so `git status` shows a clean tree | 2 | PASS | S2: "go back to a clean working directory. The command saves your local modifications away and reverts the working directory to match the HEAD commit." |
| 53 | Try it | `git stash pop` brings the work back and drops the stash | 7 | PASS | S7: "git stash pop to apply the stash and then immediately drop it from your stack." |
| 54 | Try it | `git worktree add ../hotfix` creates a new branch `hotfix` and checks it out at `../hotfix` | 3 | PASS | S3: "git worktree add ../hotfix creates new branch hotfix and checks it out at path ../hotfix." |
| 55 | Try it | `git worktree list` shows the main worktree first, then the linked ones | 3 | PASS | S3: "The main worktree is listed first, followed by each of the linked worktrees." |
| 56 | Try it | When done, remove it with `git worktree remove` | 3 | PASS | S3: "When you are done with a linked worktree, remove it with git worktree remove." |
| 57 | How a tester uses it | Use `git bisect` when you don't know what is breaking and there have been dozens or hundreds of commits | 8 | PASS | S8: "If you don't know what is breaking, and there have been dozens or hundreds of commits since the last state where you know the code worked, you'll likely turn to git bisect" |
| 58 | How a tester uses it | A script that exits 0 when good and non-0 when bad lets you fully automate it | 8 | PASS | S8: "if you have a script that will exit 0 if the project is good or non-0 if the project is bad, you can fully automate git bisect." |
| 59 | How a tester uses it | You can also run whatever runs automated tests for you | 8 | PASS | S8: "You can also run something like make or make tests or whatever you have that runs automated tests for you." |
| 60 | How a tester uses it | "The tutorial's tip: use a command that runs only the failing test." | none | N/A | The tutorial's own tip, not a tool fact. |
| 61 | How a tester uses it | If a method is buggy, `git blame` can show which commit introduced that line | 8 | PASS | S8: "if you see that a method in your code is buggy, you can annotate the file with git blame to determine which commit was responsible for the introduction of that line." |
| 62 | How a tester uses it | blame annotates each line with information from the revision that last modified it | 11 | PASS | S11: "Annotates each line in the given file with information from the revision which last modified the line." |
| 63 | How a tester uses it | A cherry-picked fix is a new commit on the release branch | 5 | PASS | S5: "apply the change each one introduces, recording a new commit for each." |
| 64 | How a tester uses it | Between two publicly visible branches, such as a backport to a maintenance branch, the `-x` line can be useful | 5 | PASS | S5: "if on the other hand you are cherry-picking between two publicly visible branches (e.g. backporting a fix to a maintenance branch for an older release...), adding this information can be useful." |
| 65 | How a tester uses it | The `-x` line names the commit the change came from | 5 | PASS | S5: "to indicate which commit this change was cherry-picked from." |
| 66 | How a tester uses it | With linked worktrees, you can check out more than one branch at a time | 3 | PASS | S3: "allowing you to check out more than one branch at a time" |
| 67 | How a tester uses it | To work on an existing branch in a new worktree, use `git worktree add <path> <branch>` | 3 | PASS | S3: "To instead work on an existing branch in a new worktree, use git worktree add <path> <branch>." |
| 68 | How a tester uses it | When an urgent fix needs testing, stash half-done test changes and switch branches | 7 | PASS | S7: "you want to switch branches for a bit to work on something else... you'll stash the changes." |
| 69 | How a tester uses it | You can reapply them later, even on a different branch | 7 | PASS | S7: "you can reapply at any time (even on a different branch)" |
| 70 | How a tester uses it | After a rebase, the branch is made of new commits | 6 | PASS | S6: "you're abandoning existing commits and creating new ones that are similar but different" |
| 71 | Common mistakes | Do not rebase commits that exist outside your repository and that people may have based work on | 6 | PASS | S6: "Do not rebase commits that exist outside your repository and that people may have based work on." |
| 72 | Common mistakes | Rebase local changes before you push, never rebase anything you have pushed | 6 | PASS | S6: "rebase local changes before pushing to clean up your work, but never rebase anything that you've pushed somewhere." |
| 73 | Common mistakes | After a bisect session, `git bisect reset` cleans up the bisection state and returns you to the original `HEAD` | 4 | PASS | S4: "After a bisect session, to clean up the bisection state and return to the original HEAD, issue the following command: git bisect reset" |
| 74 | Common mistakes | Any exit code other than 0 to 127 aborts the bisect | 4 | PASS | S4: "Any other exit code will abort the bisect process." |
| 75 | Common mistakes | A program that ends with `exit(-1)` leaves the code 255 | 4 | PASS | S4: "a program that terminates via exit(-1) leaves $? = 255" |
| 76 | Common mistakes | For a commit that cannot be tested, exit with 125 | 4 | PASS | S4: "The special exit code 125 should be used when the current source code cannot be tested." |
| 77 | Common mistakes | If you skip a commit next to the one you are looking for, Git cannot tell exactly which was the first bad one | 4 | PASS | S4: "if you skip a commit adjacent to the one you are looking for," ... "first bad one." |
| 78 | Common mistakes | By default `git stash` stashes only modified and staged tracked files | 7 | PASS | S7: "your modified tracked files and staged changes"; "you may want to do with stash is to stash the untracked files as well as the tracked ones." (The S2 line "stash.showIncludeUntracked ... --include-untracked is enabled by default" is about `stash show`.) |
| 79 | Common mistakes | Add `-u` (`--include-untracked`) to include untracked files | 7 | PASS | S7: "If you specify --include-untracked or -u, Git will include untracked files in the stash being created." |
| 80 | Common mistakes | Use `git worktree remove`; if the folder is already gone, `git worktree prune` removes the leftover information | 3 | PASS | S3: "remove it with git worktree remove."; "you can run git worktree prune ... to clean up any stale administrative files." |
| 81 | Common mistakes | `git cherry-pick` requires a clean working tree | 5 | PASS | S5: "This requires your working tree to be clean" |
| 82 | What a tester can check | Callout "Tutorial advice": flaky test, hash and title in report, ask about `-x`, re-run tests after rebase, ask which branch is stable, keep work in a stash or worktree | none | PASS | The callout says: "This list is the tutorial's own advice for a tester who uses these commands." It gives no tool fact beyond the rest of the page (`-x`, rebase makes new commits, stash and worktree). |
| 83 | Key words | Long-running branch: stays open, such as `master` for stable code or `develop` for testing stability | none | PASS | Page: "keep several long-running branches that are always open" and "A parallel branch named `develop` or `next` is where they work or test stability" |
| 84 | Key words | Topic branch: short-lived, single feature or related work | none | PASS | Page: "A topic branch is a short-lived branch for a single feature or related work" |
| 85 | Key words | Rebase: replaying changes of one branch on another, as new commits | none | PASS | Page: "replays them on a different branch"; "you abandon existing commits and create new ones" |
| 86 | Key words | Cherry-pick: applying the change of an existing commit as a new commit | none | PASS | Page: "applies the change each one introduces, recording a new commit for each" |
| 87 | Key words | `-x`: adds "(cherry picked from commit …)" to the message | none | PASS | Page: "With `-x`, it appends a line that says "(cherry picked from commit …)"" |
| 88 | Key words | Stash: a stack of unfinished changes you can reapply later | none | PASS | Page: "saves it on a stack of unfinished changes. You can reapply it at any time" |
| 89 | Key words | Linked worktree: an extra working tree made by `git worktree add` | none | PASS | Page: "Each one that `git worktree add` creates is a **linked worktree**" |
| 90 | Key words | Main worktree: the one `git init` or `git clone` prepared | none | PASS | Page: "the one that `git init` or `git clone` prepared is the **main worktree**" |
| 91 | Key words | Bisect: a binary search for the commit that introduced a change | none | PASS | Page: "`git bisect` uses binary search to find the commit that introduced a bug"; "finds the exact commit that introduced the change" |
| 92 | Key words | Good (old) / bad (new); for `git bisect run`, exit 0 means good | none | PASS | Page: "a "good" commit that is known to be before the bug"; table "0 \| Good (old)"; "1 to 127, except 125 \| Bad (new)" |
| 93 | Key words | `git bisect run`: bisect with a command whose exit code marks each commit | none | PASS | Page: "a command does the marking for you. Its exit code decides" |
| 94 | Key words | Exit code 125 tells bisect a commit cannot be tested | none | PASS | Page: "125 \| This commit cannot be tested" |
| 95 | Key words | `git blame`: shows the revision and author that last modified each line | none | PASS | Page: "Which revision and author last modified each line of a file" |

Open FAILs after round 12: 0

Changed after this round: No FAIL in this round. The voices report of this round had a FAIL, so the page changed and round 13 checks it again.

## Round 13 (2026-11-15)

# Fact check: devops / git-workflows (round 13)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Branches by stability, rebase and cherry-pick, stash and worktrees, and bisect to find the commit that broke a test | none | N/A | Describes the page's topics. Not a tool fact. |
| 2 | Lede | The page covers the Git commands a tester meets after the basics, in a stated order, with a practice run | none | N/A | Describes the page itself. |
| 3 | What it is | `git rebase` reapplies commits on top of another base tip | S1 | PASS | "git-rebase - Reapply commits on top of another base tip" |
| 4 | What it is | `git stash` stashes the changes in a dirty working directory away | S2 | PASS | "git-stash - Stash the changes in a dirty working directory away" |
| 5 | What it is | `git worktree` manages multiple working trees attached to the same repository, so you can check out more than one branch at a time | S3 | PASS | "Manage multiple working trees attached to the same repository." "allowing you to check out more than one branch at a time" |
| 6 | What it is | `git bisect` uses binary search to find the commit that introduced a bug | S4 | PASS | "git-bisect - Use binary search to find the commit that introduced a bug" |
| 7 | What it is | `git cherry-pick` applies the changes introduced by some existing commits | S5 | PASS | "git-cherry-pick - Apply the changes introduced by some existing commits" |
| 8 | What it is (table) | rebase: a cleaner history; the log of a rebased branch looks linear | S6 | PASS | "rebasing makes for a cleaner history." "If you examine the log of a rebased branch, it looks like a linear history" |
| 9 | What it is (table) | stash: you want to switch branches but don't want to commit half-done work | S7 | PASS | "you want to switch branches for a bit to work on something else." "you don’t want to do a commit of half-done work" |
| 10 | What it is (table) | worktree: more than one branch checked out at a time | S3 | PASS | "allowing you to check out more than one branch at a time" |
| 11 | What it is (table) | bisect: dozens or hundreds of commits since the code last worked, and you don't know what broke it | S8 | PASS | "If you don’t know what is breaking, and there have been dozens or hundreds of commits since the last state where you know the code worked, you’ll likely turn to git bisect" |
| 12 | What it is (table) | cherry-pick: backporting a fix to a maintenance branch for an older release | S5 | PASS | "backporting a fix to a maintenance branch for an older release from a development branch" |
| 13 | What it is (table) | blame: which revision and author last modified each line of a file | S11 | PASS | "git-blame - Show what revision and author last modified each line of a file" |
| 14 | How it works | Git makes it easy to keep several long-running branches that are always open, for different stages of the development cycle | S9 | PASS | "you can have several branches that are always open and that you use for different stages of your development cycle" "having multiple long-running branches" |
| 15 | How it works | Many Git developers keep only entirely stable code in `master`, possibly only code that has been or will be released | S9 | PASS | "Many Git developers have a workflow that embraces this approach, such as having only code that is entirely stable in their master branch — possibly only code that has been or will be released." |
| 16 | How it works | A parallel branch named `develop` or `next` is where they work or test stability; when stable it can be merged into `master` | S9 | PASS | "They have another parallel branch named develop or next that they work from or use to test stability — ... whenever it gets to a stable state, it can be merged into master." |
| 17 | How it works | A topic branch is a short-lived branch for a single feature or related work | S9 | PASS | "A topic branch is a short-lived branch that you create and use for a single particular feature or related work." |
| 18 | How it works | Topic branches are pulled into `develop` when ready, to make sure they pass all tests and don't introduce bugs | S9 | PASS | "It’s used to pull in topic branches (short-lived branches...) when they’re ready, to make sure they pass all the tests and don’t introduce bugs." |
| 19 | How it works (code block master/develop/topic) | The diagram: master only stable code, develop tested here and merged up when stable, topic one feature merged when ready | S9 | PASS | Matches the S9 lines quoted in rows 15 to 18. |
| 20 | How it works | There are two main ways to integrate changes from one branch into another: merge and rebase | S6 | PASS | "there are two main ways to integrate changes from one branch into another: the merge and the rebase." |
| 21 | How it works | A merge performs a three-way merge between the two latest branch snapshots and their most recent common ancestor, creating a new snapshot and commit | S6 | PASS | "It performs a three-way merge between the two latest branch snapshots (C3 and C4) and the most recent common ancestor of the two (C2), creating a new snapshot (and commit)." |
| 22 | How it works | A rebase takes all the changes committed on one branch and replays them on a different branch | S6 | PASS | "you can take all the changes that were committed on one branch and replay them on a different branch." |
| 23 | How it works | No difference in the end product, but rebasing makes for a cleaner history | S6 | PASS | "There is no difference in the end product of the integration, but rebasing makes for a cleaner history." |
| 24 | How it works | When you rebase, you abandon existing commits and create new ones that are similar but different (with the before/merge/rebase diagram) | S6 | PASS | "When you rebase stuff, you’re abandoning existing commits and creating new ones that are similar but different." The diagram only shows the merge and rebase results that this sentence describes. |
| 25 | How it works | Given one or more existing commits, `git cherry-pick` applies the change each one introduces, recording a new commit for each | S5 | PASS | "Given one or more existing commits, apply the change each one introduces, recording a new commit for each." |
| 26 | How it works | It requires your working tree to be clean | S5 | PASS | "This requires your working tree to be clean (no modifications from the HEAD commit)." |
| 27 | How it works | With `-x`, it appends a line "(cherry picked from commit …)" to the original commit message | S5 | PASS | "-x When recording the commit, append a line that says "(cherry picked from commit …​)" to the original commit message" |
| 28 | How it works | Stashing takes the dirty state (modified tracked files and staged changes) and saves it on a stack of unfinished changes | S7 | PASS | "Stashing takes the dirty state of your working directory — that is, your modified tracked files and staged changes — and saves it on a stack of unfinished changes" |
| 29 | How it works | You can reapply it at any time, even on a different branch | S7 | PASS | "that you can reapply at any time (even on a different branch)." |
| 30 | How it works | `git stash list` shows stashes, `git stash apply` reapplies one, `git stash pop` applies and then immediately drops it | S7 | PASS | "To see which stashes you’ve stored, you can use git stash list" "git stash apply" "You can also run git stash pop to apply the stash and then immediately drop it from your stack." |
| 31 | How it works | A repository can support multiple working trees, so you can check out more than one branch at a time | S3 | PASS | "A git repository can support multiple working trees, allowing you to check out more than one branch at a time." |
| 32 | How it works | Each one `git worktree add` creates is a linked worktree; the one `git init` or `git clone` prepared is the main worktree | S3 | PASS | "This new worktree is called a "linked worktree" as opposed to the "main worktree" prepared by git-init[1] or git-clone[1]." |
| 33 | How it works | You give `git bisect` a "bad" commit known to contain the bug and a "good" commit known to be before the bug | S4 | PASS | "telling it a "bad" commit that is known to contain the bug, and a "good" commit that is known to be before the bug was introduced." |
| 34 | How it works | Git picks a commit between the two and asks whether it is good or bad | S4 | PASS | "git bisect picks a commit between those two endpoints and asks you whether the selected commit is "good" or "bad"." |
| 35 | How it works | It keeps narrowing the range until it finds the exact commit that introduced the change (with the 1 to 8 diagram) | S4 | PASS | "It continues narrowing down the range until it finds the exact commit that introduced the change." The diagram is a worked example of this halving. |
| 36 | How it works | With `git bisect run <cmd>`, a command does the marking for you | S4 | PASS | "If you have a script that can tell if the current source code is good or bad, you can bisect by issuing the command: git bisect run <cmd>" |
| 37 | How it works (table) | Exit 0 is Good (old) | S4 | PASS | "exit with code 0 if the current source code is good/old" |
| 38 | How it works (table) | 1 to 127, except 125, is Bad (new) | S4 | PASS | "exit with a code between 1 and 127 (inclusive), except 125, if the current source code is bad/new." |
| 39 | How it works (table) | 125 means this commit cannot be tested | S4 | PASS | "The special exit code 125 should be used when the current source code cannot be tested." |
| 40 | How it works (table) | Any other code: bisect stops | S4 | PASS | "Any other exit code will abort the bisect process." |
| 41 | Try it | Practice run needs only Git and a bash shell; you find the bug's commit twice, then use a stash and a worktree | none | N/A | Describes the page's own exercise. |
| 42 | Try it | The script is the tutorial's own, makes eight commits, and commit 6 changes the total from 100 to 110 (the "bug") | none | N/A | Describes the tutorial's own script. |
| 43 | Try it | `git init` makes a repository with a `.git` subdirectory (init in the script block) | S13 | PASS | "This creates a new subdirectory named .git that contains all of your necessary repository files" |
| 44 | Try it | `git add` stages files | S14 | PASS | "you use it to begin tracking new files, to stage files, and to do other things" |
| 45 | Try it | `git commit -m` records a commit with an inline message | S14 | PASS | "you can type your commit message inline with the commit command by specifying it after a -m flag" |
| 46 | Try it | `git log --oneline` prints each commit on a single line | S12 | PASS | "--oneline Shorthand for --pretty=oneline --abbrev-commit used together." "The oneline value for this option prints each commit on a single line" |
| 47 | Try it | Start a session, mark the current commit as bad, and mark the oldest one as good (`git bisect start`, `bad`, `good HEAD~7`) | S4 | PASS | "$ git bisect start $ git bisect bad # Current version is bad $ git bisect good v2.6.13-rc2 # v2.6.13-rc2 is known to be good" |
| 48 | Try it | Git then checks out a commit in between | S4 | PASS | "git bisect selects a commit in the middle of that range of history, checks it out" |
| 49 | Try it | Read `price.txt` and run `git bisect good` or `git bisect bad` | none | N/A | A step of the reader's own work. The good/bad commands match S4 ("run git bisect good or git bisect bad"). |
| 50 | Try it | Repeat until Git prints the first bad commit | S4 | PASS | "Keep repeating the process... the command will print out a description of the first bad commit." |
| 51 | Try it | `git bisect reset` returns you to the commit you had before | S4 | PASS | "By default, this will return your tree to the commit that was checked out before git bisect start." |
| 52 | Try it | You can list the known bad commit first and the known good commit second in `git bisect start` (`git bisect start HEAD HEAD~7`) | S8 | PASS | "listing the known bad commit first and the known good commit second: $ git bisect start HEAD v1.0" |
| 53 | Try it | `git grep -q` exits with status 0 on a match and non-zero when there is not | S10 | PASS | "-q --quiet Do not output matched lines; instead, exit with status 0 when there is a match and with non-zero status when there isn’t." |
| 54 | Try it | So `git bisect run` marks a commit good when `price.txt` says `total=100`, bad when it does not (`git bisect run git grep -q "total=100" -- price.txt`) | S4 | PASS | "exit with code 0 if the current source code is good/old, and exit with a code between 1 and 127 (inclusive), except 125, if ... bad/new." |
| 55 | Try it | At the end, Git prints a description of the first bad commit | S4 | PASS | "the command will print out a description of the first bad commit." |
| 56 | Try it | When the tutorial ran the script, the output ended like this (hash 7b6cfbb… "is the first bad commit … Change 6") | none | N/A | The tutorial's own run output. It is not a claim about a source. |
| 57 | Try it | `git stash -u` also takes untracked files, such as a new test file | S7 | PASS | "If you specify --include-untracked or -u, Git will include untracked files in the stash being created." |
| 58 | Try it | A stash reverts the working directory to match the `HEAD` commit, so `git status` shows a clean tree | S2 | PASS | "The command saves your local modifications away and reverts the working directory to match the HEAD commit." |
| 59 | Try it | `git stash pop` brings the work back and drops the stash | S7 | PASS | "git stash pop to apply the stash and then immediately drop it from your stack." |
| 60 | Try it | `git worktree add ../hotfix` creates a new branch `hotfix` and checks it out at `../hotfix` | S3 | PASS | "git worktree add ../hotfix creates new branch hotfix and checks it out at path ../hotfix." |
| 61 | Try it | `git worktree list` shows the main worktree first, then the linked ones | S3 | PASS | "The main worktree is listed first, followed by each of the linked worktrees." |
| 62 | Try it | When done, remove it with `git worktree remove` | S3 | PASS | "When you are done with a linked worktree, remove it with git worktree remove." |
| 63 | How a tester uses it | When you don't know what is breaking and there have been dozens or hundreds of commits since the code last worked, use `git bisect` | S8 | PASS | "If you don’t know what is breaking, and there have been dozens or hundreds of commits since the last state where you know the code worked, you’ll likely turn to git bisect for help." |
| 64 | How a tester uses it | A script that exits 0 when good and non-0 when bad lets you fully automate it | S8 | PASS | "if you have a script that will exit 0 if the project is good or non-0 if the project is bad, you can fully automate git bisect." |
| 65 | How a tester uses it | You can also run whatever you have that runs automated tests | S8 | PASS | "You can also run something like make or make tests or whatever you have that runs automated tests for you." |
| 66 | How a tester uses it | The tutorial's tip: use a command that runs only the failing test | none | N/A | Labelled as the tutorial's own tip. |
| 67 | How a tester uses it | If a method is buggy, `git blame` can show which commit introduced that line | S8 | PASS | "if you see that a method in your code is buggy, you can annotate the file with git blame to determine which commit was responsible for the introduction of that line." |
| 68 | How a tester uses it | It annotates each line of a file with information from the revision that last modified it | S11 | PASS | "Annotates each line in the given file with information from the revision which last modified the line." |
| 69 | How a tester uses it | A cherry-picked fix is a new commit on the release branch | S5 | PASS | "recording a new commit for each". The backport-to-maintenance-branch setting is in S5 ("backporting a fix to a maintenance branch for an older release"). |
| 70 | How a tester uses it | For a fix moving between two publicly visible branches, such as a backport to a maintenance branch, the `-x` line can be useful | S5 | PASS | "if on the other hand you are cherry-picking between two publicly visible branches (e.g. backporting a fix to a maintenance branch for an older release from a development branch), adding this information can be useful." |
| 71 | How a tester uses it | It names the commit the change came from | S5 | PASS | "to indicate which commit this change was cherry-picked from." |
| 72 | How a tester uses it | With linked worktrees you can check out more than one branch at a time | S3 | PASS | "allowing you to check out more than one branch at a time" |
| 73 | How a tester uses it | To work on an existing branch in a new worktree, use `git worktree add <path> <branch>` | S3 | PASS | "To instead work on an existing branch in a new worktree, use git worktree add <path> <branch>." |
| 74 | How a tester uses it | When an urgent fix needs testing, stash your half-done test changes and switch branches | S7 | PASS | "you want to switch branches for a bit to work on something else... you don’t want to do a commit of half-done work" "At this point, you can switch branches and do work elsewhere; your changes are stored on your stack." |
| 75 | How a tester uses it | You can reapply them later, even on a different branch | S7 | PASS | "that you can reapply at any time (even on a different branch)." |
| 76 | How a tester uses it | After a rebase, the branch is made of new commits | S6 | PASS | "When you rebase stuff, you’re abandoning existing commits and creating new ones" |
| 77 | Common mistakes | Do not rebase commits that exist outside your repository and that people may have based work on | S6 | PASS | "Do not rebase commits that exist outside your repository and that people may have based work on." |
| 78 | Common mistakes | Rebase local changes before you push, but never rebase anything you have pushed | S6 | PASS | "rebase local changes before pushing to clean up your work, but never rebase anything that you’ve pushed somewhere." |
| 79 | Common mistakes | After a bisect session, `git bisect reset` cleans up the bisection state and returns you to the original `HEAD` | S4 | PASS | "After a bisect session, to clean up the bisection state and return to the original HEAD, issue the following command: git bisect reset" |
| 80 | Common mistakes | Any exit code other than 0 to 127 aborts the bisect | S4 | PASS | "Any other exit code will abort the bisect process." |
| 81 | Common mistakes | A program that ends with `exit(-1)` leaves the code 255 | S4 | PASS | "a program that terminates via exit(-1) leaves $? = 255" |
| 82 | Common mistakes | For a commit that cannot be tested, exit with 125 | S4 | PASS | "The special exit code 125 should be used when the current source code cannot be tested." |
| 83 | Common mistakes | If you skip a commit next to the one you are looking for, Git cannot tell exactly which was the first bad one | S4 | PASS | "if you skip a commit adjacent to the one you are looking for, Git will be unable to tell exactly which of those commits was the first bad one." |
| 84 | Common mistakes | By default, `git stash` stashes only modified and staged tracked files | S7 | PASS | "your modified tracked files and staged changes" "you may want to do with stash is to stash the untracked files as well as the tracked ones. If you specify --include-untracked or -u..." |
| 85 | Common mistakes | Add `-u` (`--include-untracked`) to include untracked files | S7 | PASS | "If you specify --include-untracked or -u, Git will include untracked files in the stash being created." |
| 86 | Common mistakes | Use `git worktree remove`; if the folder is already gone, `git worktree prune` removes the leftover worktree information | S3 | PASS | "If a working tree is deleted without using git worktree remove, ... you can run git worktree prune in the main or any linked worktree to clean up any stale administrative files." |
| 87 | Common mistakes | `git cherry-pick` requires a clean working tree | S5 | PASS | "This requires your working tree to be clean (no modifications from the HEAD commit)." |
| 88 | What a tester can check | Callout "Tutorial advice": run the test on bad and good commits first, put hash and title in the bug report, ask about `-x`, rerun tests after a rebase, ask which branch is stable, keep half-done work in a stash or worktree | none | PASS | The callout is titled "Tutorial advice" and says "This list is the tutorial's own advice". It gives no tool fact that the rest of the page does not support (`-x`, rebase giving new commits, stash and worktree are all cited above). |
| 89 | Key words | Long-running branch: stays open, such as `master` for stable code or `develop` for testing stability | none | PASS | Page: "several **long-running branches** that are always open" "`master` branch" for stable code, "`develop` or `next` is where they work or test stability" |
| 90 | Key words | Topic branch: short-lived branch for a single feature or related work | none | PASS | Page: "A **topic branch** is a short-lived branch for a single feature or related work" |
| 91 | Key words | Rebase: replaying the changes of one branch on another, as new commits | none | PASS | Page: "A rebase takes all the changes that were committed on one branch and replays them on a different branch" and "you abandon existing commits and create new ones" |
| 92 | Key words | Cherry-pick: applying the change of an existing commit as a new commit | none | PASS | Page: "`git cherry-pick` applies the change each one introduces, recording a new commit for each" |
| 93 | Key words | `-x`: adds "(cherry picked from commit …)" to the message | none | PASS | Page: "With `-x`, it appends a line that says "(cherry picked from commit …)" to the original commit message" |
| 94 | Key words | Stash: a stack of unfinished changes you can reapply later | none | PASS | Page: "saves it on a stack of unfinished changes" "You can reapply it at any time" |
| 95 | Key words | Linked worktree: an extra working tree made by `git worktree add` | none | PASS | Page: "Each one that `git worktree add` creates is a **linked worktree**" |
| 96 | Key words | Main worktree: the working tree `git init` or `git clone` prepared | none | PASS | Page: "the one that `git init` or `git clone` prepared is the **main worktree**" |
| 97 | Key words | Bisect: a binary search for the commit that introduced a change | none | PASS | Page: "`git bisect` uses binary search to find the commit that introduced a bug" and "the exact commit that introduced the change" |
| 98 | Key words | Good (old) / bad (new): good is known to be before the bug, bad contains it; for `git bisect run`, exit code 0 means good | none | PASS | Page: "a "bad" commit that is known to contain the bug, and a "good" commit that is known to be before the bug" and the table row "0 \| Good (old)" |
| 99 | Key words | `git bisect run`: bisect with a command whose exit code marks each commit | none | PASS | Page: "With `git bisect run <cmd>`, a command does the marking for you. Its exit code decides" |
| 100 | Key words | Exit code 125: tells bisect a commit cannot be tested | none | PASS | Page table: "125 \| This commit cannot be tested" |
| 101 | Key words | `git blame`: shows the revision and author that last modified each line | none | PASS | Page table: "`git blame` \| Which revision and author last modified each line of a file" |

Open FAILs after round 13: 0

Changed after this round: No FAIL in this round. The voices report of this round had a FAIL, so the page changed (a Layman sentence) and round 14 checks it again.

## Round 14 (2026-11-15)

# Fact check: devops / git-workflows (round 14)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description | Branches by stability, rebase and cherry-pick, stash and worktrees, and git bisect to find the commit that broke a test | none | N/A | Topic summary of the page. It states no new tool fact. |
| 2 | Lede | The page covers Git commands after the basics, then a practice run that finds a known bad commit twice | none | N/A | Sentences that describe the page itself. The link `/devops/git-basics/` is not a fact. |
| 3 | What it is | `git rebase` reapplies commits on top of another base tip | S1 | PASS | "git-rebase - Reapply commits on top of another base tip" |
| 4 | What it is | `git stash` stashes the changes in a dirty working directory away | S2 | PASS | "git-stash - Stash the changes in a dirty working directory away" |
| 5 | What it is | `git worktree` manages multiple working trees attached to the same repository, so you can check out more than one branch at a time | S3 | PASS | "Manage multiple working trees attached to the same repository. A git repository can support multiple working trees, allowing you to check out more than one branch at a time." |
| 6 | What it is | `git bisect` uses binary search to find the commit that introduced a bug | S4 | PASS | "git-bisect - Use binary search to find the commit that introduced a bug" |
| 7 | What it is | `git cherry-pick` applies the changes introduced by some existing commits | S5 | PASS | "git-cherry-pick - Apply the changes introduced by some existing commits" |
| 8 | What it is | Table: rebase gives a cleaner history, and the log of a rebased branch looks linear | S6 | PASS | "rebasing makes for a cleaner history. If you examine the log of a rebased branch, it looks like a linear history" |
| 9 | What it is | Table: stash is for when you want to switch branches but not commit half-done work | S7 | PASS | "you want to switch branches for a bit to work on something else. The problem is, you don't want to do a commit of half-done work" |
| 10 | What it is | Table: worktree gives more than one branch checked out at a time | S3 | PASS | "allowing you to check out more than one branch at a time" |
| 11 | What it is | Table: bisect is for dozens or hundreds of commits since the code last worked, when you don't know what broke it | S8 | PASS | "If you don't know what is breaking, and there have been dozens or hundreds of commits since the last state where you know the code worked, you'll likely turn to git bisect for help." |
| 12 | What it is | Table: cherry-pick is for backporting a fix to a maintenance branch for an older release | S5 | PASS | "backporting a fix to a maintenance branch for an older release from a development branch" |
| 13 | What it is | Table: blame shows which revision and author last modified each line of a file | S11 | PASS | "git-blame - Show what revision and author last modified each line of a file" |
| 14 | How it works | Git makes it easy to keep several long-running branches that are always open, for different stages of the development cycle | S9 | PASS | "merging from one branch into another multiple times over a long period is generally easy to do. This means you can have several branches that are always open and that you use for different stages of your development cycle" |
| 15 | How it works | Many developers keep only entirely stable code in `master`, possibly only code that has been or will be released | S9 | PASS | "having only code that is entirely stable in their master branch — possibly only code that has been or will be released." |
| 16 | How it works | A parallel branch `develop` or `next` is where they work or test stability. When it gets stable, it can be merged into `master` | S9 | PASS | "another parallel branch named develop or next that they work from or use to test stability ... whenever it gets to a stable state, it can be merged into master." |
| 17 | How it works | A topic branch is a short-lived branch for a single feature or related work | S9 | PASS | "A topic branch is a short-lived branch that you create and use for a single particular feature or related work." |
| 18 | How it works | Topic branches are pulled into `develop` when ready, to make sure they pass all tests and add no bugs. The diagram shows the same flow. | S9 | PASS | "It's used to pull in topic branches (short-lived branches ...) when they're ready, to make sure they pass all the tests and don't introduce bugs." |
| 19 | How it works | There are two main ways to integrate changes: merge and rebase | S6 | PASS | "there are two main ways to integrate changes from one branch into another: the merge and the rebase." |
| 20 | How it works | A merge does a three-way merge between the two latest snapshots and their most recent common ancestor, creating a new snapshot and commit | S6 | PASS | "It performs a three-way merge between the two latest branch snapshots (C3 and C4) and the most recent common ancestor of the two (C2), creating a new snapshot (and commit)." |
| 21 | How it works | A rebase takes all the changes committed on one branch and replays them on a different branch | S6 | PASS | "you can take all the changes that were committed on one branch and replay them on a different branch." |
| 22 | How it works | No difference in the end product, but rebasing gives a cleaner history | S6 | PASS | "There is no difference in the end product of the integration, but rebasing makes for a cleaner history." |
| 23 | How it works | When you rebase, you abandon existing commits and create new, similar but different ones. The merge/rebase diagram shows this. | S6 | PASS | "you're abandoning existing commits and creating new ones that are similar but different." |
| 24 | How it works | Given one or more existing commits, `git cherry-pick` applies the change each one introduces and records a new commit for each | S5 | PASS | "Given one or more existing commits, apply the change each one introduces, recording a new commit for each." |
| 25 | How it works | Cherry-pick requires a clean working tree | S5 | PASS | "This requires your working tree to be clean (no modifications from the HEAD commit)." |
| 26 | How it works | With `-x`, it appends "(cherry picked from commit …)" to the original commit message | S5 | PASS | "append a line that says \"(cherry picked from commit …​)\" to the original commit message" |
| 27 | How it works | Stashing takes the dirty state (modified tracked files and staged changes) and saves it on a stack of unfinished changes | S7 | PASS | "Stashing takes the dirty state of your working directory — that is, your modified tracked files and staged changes — and saves it on a stack of unfinished changes" |
| 28 | How it works | You can reapply a stash at any time, even on a different branch | S7 | PASS | "that you can reapply at any time (even on a different branch)." |
| 29 | How it works | `git stash list` shows stashes, `git stash apply` reapplies one, `git stash pop` applies and then immediately drops it | S7 | PASS | "To see which stashes you've stored, you can use git stash list" ... "git stash apply" ... "git stash pop to apply the stash and then immediately drop it from your stack." |
| 30 | How it works | A repository can support multiple working trees, so you can check out more than one branch at a time | S3 | PASS | "A git repository can support multiple working trees, allowing you to check out more than one branch at a time." |
| 31 | How it works | Each tree that `git worktree add` creates is a linked worktree. The one that `git init` or `git clone` prepared is the main worktree | S3 | PASS | "This new worktree is called a \"linked worktree\" as opposed to the \"main worktree\" prepared by git-init[1] or git-clone[1]." |
| 32 | How it works | You give bisect a "bad" commit known to contain the bug and a "good" commit known to be before it. Git picks a commit between them and asks if it is good or bad. It keeps narrowing until it finds the exact commit | S4 | PASS | "a \"bad\" commit that is known to contain the bug, and a \"good\" commit that is known to be before the bug was introduced. Then git bisect picks a commit between those two endpoints and asks you whether the selected commit is \"good\" or \"bad\". It continues narrowing down the range until it finds the exact commit that introduced the change." |
| 33 | How it works | With `git bisect run <cmd>`, a command does the marking for you. Its exit code decides | S4 | PASS | "If you have a script that can tell if the current source code is good or bad, you can bisect by issuing the command: git bisect run <cmd>" |
| 34 | How it works | Exit code table: 0 good, 1 to 127 except 125 bad, 125 cannot be tested, any other code stops bisect | S4 | PASS | "exit with code 0 if the current source code is good/old, and exit with a code between 1 and 127 (inclusive), except 125, if the current source code is bad/new. Any other exit code will abort the bisect process. The special exit code 125 should be used when the current source code cannot be tested." |
| 35 | Try it | Practice run needs only Git and bash. You make a repo with a known bug, find its commit twice, then use a stash and a worktree | none | N/A | Framing of the reader's own work. |
| 36 | Try it | Script facts: tutorial's own, eight commits, commit 6 changes 100 to 110 | none | N/A | Describes the tutorial's own script, not a tool fact. |
| 37 | Try it | `git init` makes a repository with a `.git` subdirectory | S13 | PASS | "This creates a new subdirectory named .git that contains all of your necessary repository files" |
| 38 | Try it | `git add` stages files | S14 | PASS | "To stage it, you run the git add command." |
| 39 | Try it | `git commit -m` records a commit with an inline message | S14 | PASS | "you can type your commit message inline with the commit command by specifying it after a -m flag" |
| 40 | Try it | `git log --oneline` prints each commit on a single line | S12 | PASS | "The oneline value for this option prints each commit on a single line" |
| 41 | Try it | Hand bisect: start a session, mark the current commit bad, mark the oldest good. Git checks out a commit in between. Repeat until Git prints the first bad commit. `git bisect reset` returns you to the earlier commit. The code block matches these steps. | S4 | PASS | "$ git bisect start / $ git bisect bad / $ git bisect good v2.6.13-rc2"; "selects a commit in the middle of that range of history, checks it out"; "the command will print out a description of the first bad commit"; "By default, this will return your tree to the commit that was checked out before git bisect start." Note: S4 says "known to be good", not "oldest". The "oldest" and `HEAD~7` are the tutorial's own setup. |
| 42 | Try it | In `git bisect start` you can list the known bad commit first and the known good commit second | S8 | PASS | "listing the known bad commit first and the known good commit second: $ git bisect start HEAD v1.0" |
| 43 | Try it | `git grep -q` exits 0 on a match and non-zero when there is none | S10 | PASS | "exit with status 0 when there is a match and with non-zero status when there isn't." |
| 44 | Try it | `git bisect run` marks a commit good when `price.txt` says `total=100`, and bad when not. The code block shows the command. | S4 | PASS | "exit with code 0 if the current source code is good/old, and exit with a code between 1 and 127 (inclusive), except 125, if the current source code is bad/new." |
| 45 | Try it | At the end Git prints a description of the first bad commit. The sample output is from the tutorial's own run. | S4 | PASS | "the command will print out a description of the first bad commit." The hash output is the tutorial's own run. |
| 46 | Try it | `git stash -u` also takes untracked files | S7 | PASS | "If you specify --include-untracked or -u, Git will include untracked files in the stash being created." |
| 47 | Try it | A stash reverts the working directory to match `HEAD`, so `git status` shows a clean tree | S2 | PASS | "and reverts the working directory to match the HEAD commit." |
| 48 | Try it | `git stash pop` brings the work back and drops the stash | S7 | PASS | "git stash pop to apply the stash and then immediately drop it from your stack." |
| 49 | Try it | `git worktree add ../hotfix` creates a new branch `hotfix` checked out at `../hotfix` | S3 | PASS | "git worktree add ../hotfix creates new branch hotfix and checks it out at path ../hotfix." |
| 50 | Try it | `git worktree list` shows the main worktree first, then the linked ones | S3 | PASS | "The main worktree is listed first, followed by each of the linked worktrees." |
| 51 | Try it | Remove it with `git worktree remove` | S3 | PASS | "When you are done with a linked worktree, remove it with git worktree remove." |
| 52 | How a tester uses it | Use `git bisect` when you don't know what is breaking and there have been dozens or hundreds of commits | S8 | PASS | "If you don't know what is breaking, and there have been dozens or hundreds of commits since the last state where you know the code worked, you'll likely turn to git bisect for help." |
| 53 | How a tester uses it | A script that exits 0 when good and non-0 when bad lets you fully automate bisect | S8 | PASS | "if you have a script that will exit 0 if the project is good or non-0 if the project is bad, you can fully automate git bisect." |
| 54 | How a tester uses it | You can also run whatever runs automated tests for you | S8 | PASS | "You can also run something like make or make tests or whatever you have that runs automated tests for you." |
| 55 | How a tester uses it | The tutorial's tip: use a command that runs only the failing test | none | N/A | Marked as the tutorial's own tip. It is not a tool fact. |
| 56 | How a tester uses it | If a method is buggy, `git blame` can show which commit introduced that line | S8 | PASS | "if you see that a method in your code is buggy, you can annotate the file with git blame to determine which commit was responsible for the introduction of that line." |
| 57 | How a tester uses it | Blame annotates each line with information from the revision that last modified it | S11 | PASS | "Annotates each line in the given file with information from the revision which last modified the line." |
| 58 | How a tester uses it | A cherry-picked fix is a new commit on the release branch | S5 | PASS | "apply the change each one introduces, recording a new commit for each." |
| 59 | How a tester uses it | Between two publicly visible branches, such as a backport to a maintenance branch, the `-x` line can be useful. It names the source commit | S5 | PASS | "cherry-picking between two publicly visible branches (e.g. backporting a fix to a maintenance branch for an older release ...), adding this information can be useful." and "to indicate which commit this change was cherry-picked from" |
| 60 | How a tester uses it | With linked worktrees you can check out more than one branch at a time | S3 | PASS | "allowing you to check out more than one branch at a time" |
| 61 | How a tester uses it | To work on an existing branch in a new worktree, use `git worktree add <path> <branch>` | S3 | PASS | "To instead work on an existing branch in a new worktree, use git worktree add <path> <branch>." |
| 62 | How a tester uses it | When an urgent fix needs testing, stash half-done test changes and switch branches | S7 | FAIL | S7 gives only: "things are in a messy state and you want to switch branches for a bit to work on something else." It never mentions an urgent fix or testing. Fix: "When you want to switch branches for a bit to work on something else, stash your half-done changes first." |
| 63 | How a tester uses it | You can reapply stashed changes later, even on a different branch | S7 | PASS | "you can reapply at any time (even on a different branch)." |
| 64 | How a tester uses it | After a rebase, the branch is made of new commits | S6 | PASS | "you're abandoning existing commits and creating new ones that are similar but different." |
| 65 | Common mistakes | Do not rebase commits that exist outside your repository and that people may have based work on. Rebase local changes before you push, never what you have pushed | S6 | PASS | "Do not rebase commits that exist outside your repository and that people may have based work on." and "rebase local changes before pushing to clean up your work, but never rebase anything that you've pushed somewhere." |
| 66 | Common mistakes | `git bisect reset` cleans up the bisection state and returns you to the original `HEAD` | S4 | PASS | "to clean up the bisection state and return to the original HEAD, issue the following command: git bisect reset" |
| 67 | Common mistakes | Any exit code other than 0 to 127 aborts bisect. `exit(-1)` leaves 255. Exit 125 for a commit that cannot be tested | S4 | PASS | "Any other exit code will abort the bisect process. It should be noted that a program that terminates via exit(-1) leaves $? = 255"; "The special exit code 125 should be used when the current source code cannot be tested." |
| 68 | Common mistakes | If you skip a commit next to the one you seek, Git cannot tell exactly which was the first bad one | S4 | PASS | "if you skip a commit adjacent to the one you are looking for, Git will be unable to tell exactly which of those commits was the first bad one." |
| 69 | Common mistakes | By default `git stash` stashes only modified and staged tracked files. `-u` (`--include-untracked`) adds untracked files | S7 | PASS | "By default, git stash will stash only modified and staged tracked files. If you specify --include-untracked or -u, Git will include untracked files" |
| 70 | Common mistakes | Use `git worktree remove`. If the folder is already gone, `git worktree prune` removes the leftover worktree information | S3 | PASS | "remove it with git worktree remove." and "If a working tree is deleted without using git worktree remove ... you can run git worktree prune ... to clean up any stale administrative files." |
| 71 | Common mistakes | `git cherry-pick` requires a clean working tree | S5 | PASS | "This requires your working tree to be clean" |
| 72 | What a tester can check | Callout "Tutorial advice": six pieces of the tutorial's own advice | none | PASS | The callout says "This list is the tutorial's own advice". It gives no tool fact that the page does not support. The `-x`, stable-branch and stash/worktree items are backed by the rest of the page. "A flaky test marks commits wrongly" is general testing advice, not a tool fact. |
| 73 | Key words | Long-running branch: stays open, such as `master` for stable code or `develop` for testing stability | none | PASS | Page: "several long-running branches that are always open" and "A parallel branch named `develop` or `next` is where they work or test stability" |
| 74 | Key words | Topic branch: short-lived branch for a single feature or related work | none | PASS | Page: "A topic branch is a short-lived branch for a single feature or related work" |
| 75 | Key words | Rebase: replaying changes of one branch on another, as new commits | none | PASS | Page: "A rebase takes all the changes that were committed on one branch and replays them on a different branch" and "you abandon existing commits and create new ones" |
| 76 | Key words | Cherry-pick: applying the change of an existing commit as a new commit | none | PASS | Page: "applies the change each one introduces, recording a new commit for each" |
| 77 | Key words | `-x`: adds "(cherry picked from commit …)" to the message | none | PASS | Page: "With `-x`, it appends a line that says "(cherry picked from commit …)" to the original commit message" |
| 78 | Key words | Stash: a stack of unfinished changes you can reapply later | none | PASS | Page: "saves it on a stack of unfinished changes. You can reapply it at any time" |
| 79 | Key words | Linked worktree: an extra working tree made by `git worktree add` | none | PASS | Page: "Each one that `git worktree add` creates is a **linked worktree**" |
| 80 | Key words | Main worktree: prepared by `git init` or `git clone` | none | PASS | Page: "the one that `git init` or `git clone` prepared is the **main worktree**" |
| 81 | Key words | Bisect: a binary search for the commit that introduced a change | none | PASS | Page: "`git bisect` uses binary search to find the commit that introduced a bug" and "exact commit that introduced the change" |
| 82 | Key words | Good (old) / bad (new): good is known to be before the bug, bad contains it. For `git bisect run`, exit 0 means good | none | PASS | Page: "a "bad" commit that is known to contain the bug, and a "good" commit that is known to be before the bug" and the table "0 \| Good (old)" |
| 83 | Key words | `git bisect run`: bisect with a command whose exit code marks each commit | none | PASS | Page: "With `git bisect run <cmd>`, a command does the marking for you. Its exit code decides" |
| 84 | Key words | Exit code 125: tells bisect a commit cannot be tested | none | PASS | Page table: "125 \| This commit cannot be tested" |
| 85 | Key words | `git blame`: shows the revision and author that last modified each line | none | PASS | Page table: "`git blame` \| Which revision and author last modified each line of a file" |

Open FAILs after round 14: 1

Changed after this round: The FAIL was fixed: the stash advice follows S7's own case ("things are in a messy state and you want to switch branches for a bit to work on something else"), not an urgent fix.

## Round 15 (2026-11-15)

# Fact check: devops / git-workflows (round 15)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Page covers branches by stability, rebase, cherry-pick, stash, worktrees, and `git bisect` to find the breaking commit | none | N/A | Summary of the page itself. |
| 2 | Lede | Page intro, order of topics, practice run finds a known bad commit twice | none | N/A | Describes the page itself. |
| 3 | What it is | `git rebase` reapplies commits on top of another base tip | 1 | PASS | S1: "git-rebase - Reapply commits on top of another base tip" |
| 4 | What it is | `git stash` stashes the changes in a dirty working directory away | 2 | PASS | S2: "git-stash - Stash the changes in a dirty working directory away" |
| 5 | What it is | `git worktree` manages multiple working trees attached to the same repository, so you can check out more than one branch at a time | 3 | PASS | S3: "Manage multiple working trees attached to the same repository." and "allowing you to check out more than one branch at a time" |
| 6 | What it is | `git bisect` uses binary search to find the commit that introduced a bug | 4 | PASS | S4: "git-bisect - Use binary search to find the commit that introduced a bug" |
| 7 | What it is | `git cherry-pick` applies the changes introduced by some existing commits | 5 | PASS | S5: "git-cherry-pick - Apply the changes introduced by some existing commits" |
| 8 | What it is | Table: rebase gives a cleaner history; the log of a rebased branch looks linear | 6 | PASS | S6: "rebasing makes for a cleaner history. If you examine the log of a rebased branch, it looks like a linear history" |
| 9 | What it is | Table: stash is for when you want to switch branches but not commit half-done work | 7 | PASS | S7: "you want to switch branches for a bit to work on something else. The problem is, you don't want to do a commit of half-done work" |
| 10 | What it is | Table: worktree is for more than one branch checked out at a time | 3 | PASS | S3: "allowing you to check out more than one branch at a time" |
| 11 | What it is | Table: bisect is for dozens or hundreds of commits since the code last worked, when you don't know what broke it | 8 | PASS | S8: "If you don't know what is breaking, and there have been dozens or hundreds of commits since the last state where you know the code worked, you'll likely turn to git bisect" |
| 12 | What it is | Table: cherry-pick is for backporting a fix to a maintenance branch for an older release | 5 | PASS | S5: "backporting a fix to a maintenance branch for an older release" |
| 13 | What it is | Table: `git blame` shows which revision and author last modified each line of a file | 11 | PASS | S11: "git-blame - Show what revision and author last modified each line of a file" |
| 14 | How it works | Git makes it easy to keep several long-running branches that are always open, for different stages of the development cycle | 9 | PASS | S9: "you can have several branches that are always open and that you use for different stages of your development cycle" |
| 15 | How it works | Many Git developers keep only entirely stable code in `master`, possibly only released or to-be-released code | 9 | PASS | S9: "having only code that is entirely stable in their master branch — possibly only code that has been or will be released" |
| 16 | How it works | A parallel branch `develop` or `next` is where they work or test stability; when stable it can be merged into `master` | 9 | PASS | S9: "another parallel branch named develop or next that they work from or use to test stability ... whenever it gets to a stable state, it can be merged into master" |
| 17 | How it works | A topic branch is a short-lived branch for a single feature or related work | 9 | PASS | S9: "A topic branch is a short-lived branch that you create and use for a single particular feature or related work." |
| 18 | How it works | Topic branches are pulled into `develop` when ready, to make sure they pass all tests and don't introduce bugs; diagram of master/develop/topic | 9 | PASS | S9: "It's used to pull in topic branches (short-lived branches...) when they're ready, to make sure they pass all the tests and don't introduce bugs." The diagram only restates this. |
| 19 | How it works | There are two main ways to integrate changes from one branch into another: merge and rebase | 6 | PASS | S6: "there are two main ways to integrate changes from one branch into another: the merge and the rebase." |
| 20 | How it works | A merge does a three-way merge between the two latest branch snapshots and their most recent common ancestor, creating a new snapshot and commit | 6 | PASS | S6: "It performs a three-way merge between the two latest branch snapshots (C3 and C4) and the most recent common ancestor of the two (C2), creating a new snapshot (and commit)." |
| 21 | How it works | A rebase takes all the changes committed on one branch and replays them on a different branch | 6 | PASS | S6: "you can take all the changes that were committed on one branch and replay them on a different branch." |
| 22 | How it works | No difference in the end product, but rebasing makes for a cleaner history | 6 | PASS | S6: "There is no difference in the end product of the integration, but rebasing makes for a cleaner history." |
| 23 | How it works | When you rebase, you abandon existing commits and create new ones that are similar but different; before/merge/rebase diagram | 6 | PASS | S6: "When you rebase stuff, you're abandoning existing commits and creating new ones that are similar but different." |
| 24 | How it works | Given one or more existing commits, cherry-pick applies the change each introduces, recording a new commit for each | 5 | PASS | S5: "Given one or more existing commits, apply the change each one introduces, recording a new commit for each." |
| 25 | How it works | Cherry-pick requires your working tree to be clean | 5 | PASS | S5: "This requires your working tree to be clean (no modifications from the HEAD commit)." |
| 26 | How it works | With `-x`, it appends a line "(cherry picked from commit …)" to the original commit message | 5 | FAIL | S5 limits this: "This is done only for cherry picks without conflicts." The page gives no limit. Fix: add "for cherry-picks without conflicts". |
| 27 | How it works | Stashing takes the dirty state (modified tracked files and staged changes) and saves it on a stack of unfinished changes | 7 | PASS | S7: "Stashing takes the dirty state of your working directory — that is, your modified tracked files and staged changes — and saves it on a stack of unfinished changes" |
| 28 | How it works | You can reapply a stash at any time, even on a different branch | 7 | PASS | S7: "that you can reapply at any time (even on a different branch)" |
| 29 | How it works | `git stash list` shows stashes, `git stash apply` reapplies one, `git stash pop` applies and immediately drops it | 7 | PASS | S7: "To see which stashes you've stored, you can use git stash list"; "git stash apply"; "git stash pop to apply the stash and then immediately drop it from your stack" |
| 30 | How it works | A repository can support multiple working trees so you can check out more than one branch at a time | 3 | PASS | S3: "A git repository can support multiple working trees, allowing you to check out more than one branch at a time." |
| 31 | How it works | `git worktree add` creates a linked worktree; `git init`/`git clone` prepare the main worktree | 3 | PASS | S3: "This new worktree is called a "linked worktree" as opposed to the "main worktree" prepared by git-init[1] or git-clone[1]." |
| 32 | How it works | You give bisect a "bad" commit known to contain the bug and a "good" commit known to be before it | 4 | PASS | S4: "a "bad" commit that is known to contain the bug, and a "good" commit that is known to be before the bug was introduced" |
| 33 | How it works | Git picks a commit between the two and asks whether it is good or bad | 4 | PASS | S4: "git bisect picks a commit between those two endpoints and asks you whether the selected commit is "good" or "bad"" |
| 34 | How it works | It keeps narrowing the range until it finds the exact commit that introduced the change; diagram | 4 | PASS | S4: "It continues narrowing down the range until it finds the exact commit that introduced the change." |
| 35 | How it works | With `git bisect run <cmd>`, a command does the marking for you; its exit code decides | 4 | PASS | S4: "If you have a script that can tell if the current source code is good or bad, you can bisect by issuing the command: git bisect run <cmd>" |
| 36 | How it works | Exit code table: 0 good; 1 to 127 except 125 bad; 125 cannot be tested; any other code stops bisect | 4 | PASS | S4: "exit with code 0 if the current source code is good/old, and exit with a code between 1 and 127 (inclusive), except 125, if ... bad/new. Any other exit code will abort the bisect process. ... The special exit code 125 should be used when the current source code cannot be tested." |
| 37 | Try it | Practice run needs only Git and bash; repo with known bug; script is the tutorial's own; eight commits; commit 6 changes 100 to 110 | none | N/A | Tutorial's own set-up and framing, not a fact about a tool. |
| 38 | Try it | `git init` makes a repository with a `.git` subdirectory | 13 | PASS | S13: "This creates a new subdirectory named .git that contains all of your necessary repository files" |
| 39 | Try it | `git add` stages files | 14 | PASS | S14: "your README file is now tracked and staged to be committed" (after `git add README`). The cite sits on the next clause but the sentence covers it. |
| 40 | Try it | `git commit -m` records a commit with an inline message | 14 | PASS | S14: "you can type your commit message inline with the commit command by specifying it after a -m flag" |
| 41 | Try it | `git log --oneline` prints each commit on a single line | 12 | PASS | S12: "The oneline value for this option prints each commit on a single line"; "--oneline Shorthand for --pretty=oneline --abbrev-commit used together." |
| 42 | Try it | Step 2: start a session, mark current commit bad and the oldest good; Git checks out a commit in between | 4 | PASS | S4: "$ git bisect bad # Current version is bad"; "bisect selects a commit in the middle of that range of history, checks it out" |
| 43 | Try it | Repeat until Git prints the first bad commit | 4 | PASS | S4: "the command will print out a description of the first bad commit." |
| 44 | Try it | `git bisect reset` returns you to the commit you had before | 4 | PASS | S4: "this will return your tree to the commit that was checked out before git bisect start." |
| 45 | Try it | Step 3: in `git bisect start` you can list the known bad commit first and the known good commit second | 8 | PASS | S8: "listing the known bad commit first and the known good commit second: $ git bisect start HEAD v1.0" |
| 46 | Try it | `git grep -q` exits 0 on a match and non-zero when there is none | 10 | PASS | S10: "there is a match and with non-zero status when there isn't." |
| 47 | Try it | So `git bisect run` marks a commit good when `price.txt` says `total=100`, bad when not | 4 | PASS | S4: "exit with code 0 if ... good/old, and exit with a code between 1 and 127 (inclusive), except 125, if ... bad/new." |
| 48 | Try it | At the end, Git prints a description of the first bad commit | 4 | PASS | S4: "print out a description of the first bad commit." |
| 49 | Try it | "When this tutorial ran the script, the output ended like this; your hash will differ" plus sample output | none | N/A | Tutorial's own run result, not a claim about a tool. |
| 50 | Try it | Step 4: `git stash -u` also takes untracked files | 7 | PASS | S7: "If you specify --include-untracked or -u, Git will include untracked files in the stash being created." |
| 51 | Try it | A stash reverts the working directory to match `HEAD`, so `git status` shows a clean tree | 2 | PASS | S2: "reverts the working directory to match the HEAD commit" |
| 52 | Try it | `git stash pop` brings the work back and drops the stash | 7 | PASS | S7: "git stash pop to apply the stash and then immediately drop it from your stack" |
| 53 | Try it | Step 5: `git worktree add ../hotfix` creates a new branch `hotfix` and checks it out at `../hotfix` | 3 | PASS | S3: "git worktree add ../hotfix creates new branch hotfix and checks it out at path ../hotfix." |
| 54 | Try it | `git worktree list` shows the main worktree first, then the linked ones | 3 | PASS | S3: "The main worktree is listed first, followed by each of the linked worktrees." |
| 55 | Try it | Remove a worktree with `git worktree remove` | 3 | PASS | S3: "When you are done with a linked worktree, remove it with git worktree remove." |
| 56 | How a tester uses it | Use `git bisect` when you don't know what is breaking and there were dozens or hundreds of commits | 8 | PASS | S8: "dozens or hundreds of commits since the last state where you know the code worked, you'll likely turn to git bisect" |
| 57 | How a tester uses it | A script that exits 0 when good and non-0 when bad lets you fully automate it | 8 | PASS | S8: "if you have a script that will exit 0 if the project is good or non-0 if the project is bad, you can fully automate git bisect." |
| 58 | How a tester uses it | You can also run whatever runs automated tests for you | 8 | PASS | S8: "whatever you have that runs automated tests for you" |
| 59 | How a tester uses it | "The tutorial's tip: use a command that runs only the failing test." | none | FAIL | It has no cite. A search of all pages finds no "failing test" text. It is advice outside the "Tutorial advice" callout. Fix: remove it, or move it into the callout. |
| 60 | How a tester uses it | If a method is buggy, `git blame` can show which commit introduced that line | 8 | PASS | S8: "if you see that a method in your code is buggy, you can annotate the file with git blame to determine which commit was responsible for the introduction of that line." |
| 61 | How a tester uses it | It annotates each line with information from the revision that last modified it | 11 | PASS | S11: "Show what revision and author last modified each line of a file" |
| 62 | How a tester uses it | A cherry-picked fix is a new commit on the release branch | 5 | PASS | S5: "apply the change each one introduces, recording a new commit for each." |
| 63 | How a tester uses it | Between two publicly visible branches, such as a backport to a maintenance branch, the `-x` line can be useful | 5 | PASS | S5: "if on the other hand you are cherry-picking between two publicly visible branches (e.g. backporting a fix to a maintenance branch ...), adding this information can be useful." |
| 64 | How a tester uses it | The `-x` line names the commit the change came from | 5 | PASS | S5: "in order to indicate which commit this change was cherry-picked from" |
| 65 | How a tester uses it | With linked worktrees you can check out more than one branch at a time | 3 | PASS | S3: "allowing you to check out more than one branch at a time" |
| 66 | How a tester uses it | To work on an existing branch in a new worktree, use `git worktree add <path> <branch>` | 3 | PASS | S3: "To instead work on an existing branch in a new worktree, use git worktree add <path> <branch>." |
| 67 | How a tester uses it | When work is messy and you want to switch branches, stash half-done changes instead of committing | 7 | PASS | S7: "things are in a messy state and you want to switch branches for a bit ... you don't want to do a commit of half-done work" |
| 68 | How a tester uses it | You can reapply them later, even on a different branch | 7 | PASS | S7: "reapply at any time (even on a different branch)" |
| 69 | How a tester uses it | After a rebase, the branch is made of new commits | 6 | PASS | S6: "you're abandoning existing commits and creating new ones that are similar but different." |
| 70 | Common mistakes | Do not rebase commits that exist outside your repository and that people may have based work on | 6 | PASS | S6: "Do not rebase commits that exist outside your repository and that people may have based work on." |
| 71 | Common mistakes | Rebase local changes before you push, but never rebase anything you have pushed | 6 | PASS | S6: "rebase local changes before pushing to clean up your work, but never rebase anything that you've pushed somewhere." |
| 72 | Common mistakes | After a bisect session, `git bisect reset` cleans up the bisection state and returns you to the original `HEAD` | 4 | PASS | S4: "After a bisect session, to clean up the bisection state and return to the original HEAD, issue the following command: git bisect reset" |
| 73 | Common mistakes | Any exit code other than 0 to 127 aborts the bisect | 4 | PASS | S4: "Any other exit code will abort the bisect process." (0 and 1 to 127 are the allowed codes.) |
| 74 | Common mistakes | A program that ends with `exit(-1)` leaves the code 255 | 4 | PASS | S4: "a program that terminates via exit(-1) leaves $? = 255" |
| 75 | Common mistakes | For a commit that cannot be tested, exit with 125 | 4 | PASS | S4: "The special exit code 125 should be used when the current source code cannot be tested." |
| 76 | Common mistakes | If you skip a commit next to the one you are looking for, Git cannot tell exactly which was the first bad one | 4 | PASS | S4: "if you skip a commit adjacent to the one you are looking for, Git will be unable to tell exactly which of those commits was the first bad one." (line 365 starts "However, ..."; line 367 ends "first bad one.") |
| 77 | Common mistakes | By default, `git stash` stashes only modified and staged tracked files | 7 | PASS | S7: "By default, git stash will stash only modified and staged tracked files." |
| 78 | Common mistakes | Add `-u` (`--include-untracked`) to include untracked files | 7 | PASS | S7: "If you specify --include-untracked or -u, Git will include untracked files" |
| 79 | Common mistakes | Use `git worktree remove` instead of deleting the folder by hand | 3 | PASS | S3: "If a working tree is deleted without using git worktree remove, then its associated administrative files ... you can run git worktree prune" |
| 80 | Common mistakes | If the folder is already gone, `git worktree prune` removes the worktree information left over | 3 | PASS | S3: "run git worktree prune ... to clean up any stale administrative files." and "prune: Remove worktree information in $GIT_DIR/worktrees" |
| 81 | Common mistakes | `git cherry-pick` requires a clean working tree | 5 | PASS | S5: "This requires your working tree to be clean" |
| 82 | What a tester can check | Callout "Tutorial advice": six pieces of advice | none | PASS | The callout says "This list is the tutorial's own advice". It gives no tool fact that the rest of the page does not support. The rebase and `-x` points are backed by claims 26 and 69. |
| 83 | Key words | Long-running branch: stays open, such as `master` for stable code or `develop` for testing stability | none | PASS | Page: "keep several long-running branches that are always open"; "keep only entirely stable code in their `master` branch"; "`develop` or `next` is where they work or test stability" |
| 84 | Key words | Topic branch | none | PASS | Page: "A topic branch is a short-lived branch for a single feature or related work" |
| 85 | Key words | Rebase: replaying changes of one branch on another, as new commits | none | PASS | Page: "replays them on a different branch"; "you abandon existing commits and create new ones" |
| 86 | Key words | Cherry-pick | none | PASS | Page: "applies the change each one introduces, recording a new commit for each" |
| 87 | Key words | `-x` adds "(cherry picked from commit …)" to the message | none | PASS | Page: "With `-x`, it appends a line that says "(cherry picked from commit …)" to the original commit message" |
| 88 | Key words | Stash: a stack of unfinished changes you can reapply later | none | PASS | Page: "saves it on a stack of unfinished changes. You can reapply it at any time" |
| 89 | Key words | Linked worktree: made by `git worktree add` | none | PASS | Page: "Each one that `git worktree add` creates is a **linked worktree**" |
| 90 | Key words | Main worktree: prepared by `git init` or `git clone` | none | PASS | Page: "the one that `git init` or `git clone` prepared is the **main worktree**" |
| 91 | Key words | Bisect: binary search for the commit that introduced a change | none | PASS | Page: "`git bisect` uses binary search to find the commit that introduced a bug"; "exact commit that introduced the change" |
| 92 | Key words | Good (old)/bad (new); exit code 0 means good | none | PASS | Page: "a "good" commit that is known to be before the bug"; table "0 \| Good (old)"; "1 to 127, except 125 \| Bad (new)" |
| 93 | Key words | `git bisect run`: bisect with a command whose exit code marks each commit | none | PASS | Page: "a command does the marking for you. Its exit code decides" |
| 94 | Key words | Exit code 125 tells bisect a commit cannot be tested | none | PASS | Page table: "125 \| This commit cannot be tested" |
| 95 | Key words | `git blame`: shows the revision and author that last modified each line | none | PASS | Page table: "Which revision and author last modified each line of a file" |

Open FAILs after round 15: 2

Changed after this round: Both FAILs were fixed: the `-x` sentence and its Key words row add S5's limit ("This is done only for cherry picks without conflicts"); the tip "use a command that runs only the failing test" moved from the bisect paragraph into the Tutorial advice callout.

## Round 16 (2026-11-15)

# Fact check: devops / git-workflows (round 16)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | `git bisect` finds the commit that broke a test | none | PASS | S4: "git-bisect - Use binary search to find the commit that introduced a bug". The other topics in the line are covered by the cited claims below. |
| 2 | Lede | Page framing; the practice run finds a known bad commit twice | none | N/A | Describes the page itself. |
| 3 | What it is | `git rebase` reapplies commits on top of another base tip | S1 | PASS | "git-rebase - Reapply commits on top of another base tip" |
| 4 | What it is | `git stash` stashes the changes in a dirty working directory away | S2 | PASS | "git-stash - Stash the changes in a dirty working directory away" |
| 5 | What it is | `git worktree` manages multiple working trees attached to the same repository, so you can check out more than one branch at a time | S3 | PASS | "Manage multiple working trees attached to the same repository." and "allowing you to check out more than one branch at a time" |
| 6 | What it is | `git bisect` uses binary search to find the commit that introduced a bug | S4 | PASS | "git-bisect - Use binary search to find the commit that introduced a bug" |
| 7 | What it is | `git cherry-pick` applies the changes introduced by some existing commits | S5 | PASS | "git-cherry-pick - Apply the changes introduced by some existing commits" |
| 8 | What it is (table) | rebase: a cleaner history; the log of a rebased branch looks linear | S6 | PASS | "rebasing makes for a cleaner history." and "it looks like a linear history" |
| 9 | What it is (table) | stash: you want to switch branches but not commit half-done work | S7 | PASS | "you want to switch branches for a bit to work on something else" and "you don’t want to do a commit of half-done work" |
| 10 | What it is (table) | worktree: more than one branch checked out at a time | S3 | PASS | "allowing you to check out more than one branch at a time" |
| 11 | What it is (table) | bisect: dozens or hundreds of commits since the code last worked, and you don't know what broke it | S8 | PASS | "If you don’t know what is breaking, and there have been dozens or hundreds of commits since the last state where you know the code worked, you’ll likely turn to git bisect" |
| 12 | What it is (table) | cherry-pick: backporting a fix to a maintenance branch for an older release | S5 | PASS | "backporting a fix to a" / "maintenance branch for an older release from a" |
| 13 | What it is (table) | blame: which revision and author last modified each line of a file | S11 | PASS | "git-blame - Show what revision and author last modified each line of a file" |
| 14 | How it works | Several long-running branches that are always open, for different stages of the development cycle | S9 | PASS | "you can have several branches that are always open and that you use for different stages of your development cycle" |
| 15 | How it works | Many developers keep only entirely stable code in `master`, possibly only code that has been or will be released | S9 | PASS | "having only code that is entirely stable in their master branch — possibly only code that has been or will be released." |
| 16 | How it works | A parallel branch `develop` or `next` is where they work or test stability; when stable it can be merged into `master` | S9 | PASS | "another parallel branch named develop or next that they work from or use to test stability" and "whenever it gets to a stable state, it can be merged into master." |
| 17 | How it works | A topic branch is a short-lived branch for a single feature or related work | S9 | PASS | "A topic branch is a short-lived branch that you create and use for a single particular feature or related work." |
| 18 | How it works | Topic branches are pulled into `develop` when ready, to make sure they pass all tests and don't introduce bugs (and the branch diagram) | S9 | PASS | "It’s used to pull in topic branches (short-lived branches, like your earlier iss53 branch) when they’re ready, to make sure they pass all the tests and don’t introduce bugs." The diagram only restates this. |
| 19 | How it works | Two main ways to integrate changes: merge and rebase | S6 | PASS | "there are two main ways to integrate changes from one branch into another: the merge and the rebase." |
| 20 | How it works | A merge does a three-way merge between the two latest snapshots and the most recent common ancestor, creating a new snapshot and commit | S6 | PASS | "It performs a three-way merge between the two latest branch snapshots (C3 and C4) and the most recent common ancestor of the two (C2), creating a new snapshot (and commit)." |
| 21 | How it works | A rebase takes all changes committed on one branch and replays them on a different branch | S6 | PASS | "you can take all the changes that were committed on one branch and replay them on a different branch." |
| 22 | How it works | No difference in the end product, but rebasing makes for a cleaner history | S6 | PASS | "There is no difference in the end product of the integration, but rebasing makes for a cleaner history." |
| 23 | How it works | Rebasing abandons existing commits and creates new, similar but different ones (diagram D', E') | S6 | PASS | "you’re abandoning existing commits and creating new ones that are similar but different." |
| 24 | How it works | Cherry-pick applies the change each commit introduces, recording a new commit for each | S5 | PASS | "Given one or more existing commits, apply the change each one introduces, recording a new commit for each." |
| 25 | How it works | Cherry-pick requires a clean working tree | S5 | PASS | "This requires your working tree to be clean" |
| 26 | How it works | `-x` appends "(cherry picked from commit …)" to the original commit message | S5 | PASS | "append a line that says "(cherry picked from commit …​)" to the original commit message" |
| 27 | How it works | `-x` is done only for cherry-picks without conflicts | S5 | PASS | "This is done only for cherry picks without conflicts." |
| 28 | How it works | Stashing takes the dirty state (modified tracked files and staged changes) and saves it on a stack of unfinished changes | S7 | PASS | "Stashing takes the dirty state of your working directory — that is, your modified tracked files and staged changes — and saves it on a stack of unfinished changes" |
| 29 | How it works | You can reapply a stash at any time, even on a different branch | S7 | PASS | "that you can reapply at any time (even on a different branch)." |
| 30 | How it works | `git stash list` shows stashes, `apply` reapplies, `pop` applies and drops | S7 | PASS | "To see which stashes you’ve stored, you can use git stash list:"; "git stash apply."; "git stash pop to apply the stash and then immediately drop it from your stack." |
| 31 | How it works | A repository can support multiple working trees, so you can check out more than one branch at a time | S3 | PASS | "A git repository can support multiple working trees, allowing you to check out more than one branch at a time." |
| 32 | How it works | Trees made by `git worktree add` are linked worktrees; the one prepared by `git init` or `git clone` is the main worktree | S3 | PASS | "This new worktree is called a "linked worktree" as opposed to the "main worktree" prepared by git-init[1] or git-clone[1]." |
| 33 | How it works | You give bisect a "bad" commit known to contain the bug and a "good" commit known to be before the bug | S4 | PASS | "a "bad" commit that is known to contain the bug, and a "good" commit that is known to be before the bug was introduced." |
| 34 | How it works | Git picks a commit between the two and asks whether it is good or bad | S4 | PASS | "git bisect picks a commit between those two endpoints and asks you whether the selected commit is "good" or "bad"." |
| 35 | How it works | It keeps narrowing the range until it finds the exact commit (and the bisect diagram) | S4 | PASS | "It continues narrowing down the range until it finds the exact commit that introduced the change." |
| 36 | How it works | With `git bisect run <cmd>` a command does the marking; its exit code decides | S4 | PASS | "If you have a script that can tell if the current source code is good or bad, you can bisect by issuing the command:" / "git bisect run <cmd> [<arg>…​]" |
| 37 | How it works (table) | Exit 0 is good (old) | S4 | PASS | "should exit with code 0 if the current source code is good/old" |
| 38 | How it works (table) | Exit 1 to 127 except 125 is bad (new) | S4 | PASS | "exit with a code between 1 and 127 (inclusive), except 125, if the current source code is bad/new." |
| 39 | How it works (table) | Exit 125 means the commit cannot be tested | S4 | PASS | "The special exit code 125 should be used when the current source code cannot be tested." |
| 40 | How it works (table) | Any other code stops the bisect | S4 | PASS | "Any other exit code will abort the bisect process." |
| 41 | Try it | Intro: needs only Git and bash; builds a repo with a known bug; stash and worktree | none | N/A | Reader's own work. |
| 42 | Try it | Script is the tutorial's own, makes eight commits, commit 6 changes 100 to 110 | none | N/A | Describes the tutorial's own script. |
| 43 | Try it | `git init` makes a repository with a `.git` subdirectory | S13 | PASS | "This creates a new subdirectory named .git that contains all of your necessary repository files" |
| 44 | Try it | `git add` stages files (clause has no cite of its own; the same sentence cites S14 right after) | S14 | PASS | S14: "In order to begin tracking a new file, you use the command git add." and "your README file is now tracked and staged to be committed" |
| 45 | Try it | `git commit -m` records a commit with an inline message | S14 | PASS | "you can type your commit message inline with the commit command by specifying it after a -m flag" |
| 46 | Try it | `git log --oneline` prints each commit on a single line | S12 | PASS | "The oneline value for this option prints each commit on a single line" and "--oneline Shorthand for --pretty=oneline --abbrev-commit used together." |
| 47 | Try it | Start a session, mark current commit bad and the oldest good (`git bisect start / bad / good HEAD~7`) | S4 | PASS | "$ git bisect start / $ git bisect bad # Current version is bad / $ git bisect good v2.6.13-rc2 # v2.6.13-rc2 is known to be good". "Oldest" is the tutorial's own script choice. |
| 48 | Try it | Git then checks out a commit in between | S4 | PASS | "git bisect selects a commit in the middle of that range of history, checks it out" |
| 49 | Try it | Repeat until Git prints the first bad commit | S4 | PASS | "Keep repeating the process" and "the command will print out a description of the first bad commit." |
| 50 | Try it | `git bisect reset` returns you to the commit you had before | S4 | PASS | "By default, this will return your tree to the commit that was checked out before git bisect start." |
| 51 | Try it | In `git bisect start` you can list the known bad commit first and the known good second | S8 | PASS | "listing the known bad commit first and the known good commit second: $ git bisect start HEAD v1.0" |
| 52 | Try it | `git grep -q` exits 0 on a match, non-zero when none | S10 | PASS | "there is a match and with non-zero status when there isn’t." |
| 53 | Try it | `git bisect run` marks a commit good when `price.txt` says `total=100`, bad when not | S4 | PASS | "exit with code 0 if the current source code is good/old, and exit with a code between 1 and 127 (inclusive), except 125, if ... bad/new." This follows from the grep exit codes in row 52. |
| 54 | Try it | At the end Git prints a description of the first bad commit | S4 | PASS | "the command will print out a description of the first bad commit." |
| 55 | Try it | Sample hash output from the tutorial's own run | none | N/A | The tutorial's own result; the hash is flagged as different for each reader. |
| 56 | Try it | `git stash -u` also takes untracked files, such as a new test file | S7 | PASS | "If you specify --include-untracked or -u, Git will include untracked files in the stash being created." |
| 57 | Try it | A stash reverts the working directory to match `HEAD`, so `git status` is clean | S2 | PASS | "and reverts the working directory to match the HEAD commit." |
| 58 | Try it | `git stash pop` brings the work back and drops the stash | S7 | PASS | "git stash pop to apply the stash and then immediately drop it from your stack." |
| 59 | Try it | `git worktree add ../hotfix` creates new branch `hotfix` and checks it out at `../hotfix` | S3 | PASS | "git worktree add ../hotfix creates new branch hotfix and checks it out at path ../hotfix." |
| 60 | Try it | `git worktree list` shows the main worktree first, then the linked ones | S3 | PASS | "The main worktree is listed first, followed by each of the linked worktrees." |
| 61 | Try it | Remove it with `git worktree remove` when done | S3 | PASS | "When you are done with a linked worktree, remove it with git worktree remove." |
| 62 | How a tester uses it | Use `git bisect` when you don't know what is breaking and there are dozens or hundreds of commits | S8 | PASS | "If you don’t know what is breaking, and there have been dozens or hundreds of commits since the last state where you know the code worked, you’ll likely turn to git bisect for help." |
| 63 | How a tester uses it | A script that exits 0 when good and non-0 when bad lets you fully automate it | S8 | PASS | "if you have a script that will exit 0 if the project is good or non-0 if the project is bad, you can fully automate git bisect." |
| 64 | How a tester uses it | You can run whatever you have that runs automated tests | S8 | PASS | "make or make tests or whatever you have that runs automated tests for you." |
| 65 | How a tester uses it | `git blame` can show which commit introduced a buggy line | S8 | PASS | "if you see that a method in your code is buggy, you can annotate the file with git blame to determine which commit was responsible for the introduction of that line." |
| 66 | How a tester uses it | Blame annotates each line with info from the revision that last modified it | S11 | PASS | "Annotates each line in the given file with information from the revision which last modified the line." |
| 67 | How a tester uses it | A cherry-picked fix is a new commit on the release branch | S5 | PASS | "apply the change each one introduces, recording a new commit for each." |
| 68 | How a tester uses it | Between two publicly visible branches (backport), the `-x` line can be useful | S5 | PASS | "if on the other hand you are cherry-picking between two publicly visible branches (e.g. backporting a fix to a maintenance branch ...), adding this information can be useful." |
| 69 | How a tester uses it | The `-x` line names the commit the change came from | S5 | PASS | "in order to indicate which commit this change was cherry-picked from." |
| 70 | How a tester uses it | With linked worktrees you can check out more than one branch at a time | S3 | PASS | "allowing you to check out more than one branch at a time" |
| 71 | How a tester uses it | Use `git worktree add <path> <branch>` for an existing branch | S3 | PASS | "To instead work on an existing branch in a new worktree, use git worktree add <path> <branch>." |
| 72 | How a tester uses it | Stash half-done changes instead of committing when switching branches | S7 | PASS | "you want to switch branches for a bit to work on something else." and "you don’t want to do a commit of half-done work" |
| 73 | How a tester uses it | You can reapply them later, even on a different branch | S7 | PASS | "that you can reapply at any time (even on a different branch)." |
| 74 | How a tester uses it | After a rebase, the branch is made of new commits | S6 | PASS | "you’re abandoning existing commits and creating new ones that are similar but different." |
| 75 | Common mistakes | Do not rebase commits that exist outside your repository and that people may have based work on | S6 | PASS | "Do not rebase commits that exist outside your repository and that people may have based work on." |
| 76 | Common mistakes | Rebase local changes before you push; never rebase anything you have pushed | S6 | PASS | "rebase local changes before pushing to clean up your work, but never rebase anything that you’ve pushed somewhere." |
| 77 | Common mistakes | `git bisect reset` cleans up the bisection state and returns you to the original `HEAD` | S4 | PASS | "to clean up the bisection state and return to the original HEAD, issue the following command: git bisect reset" |
| 78 | Common mistakes | Any exit code other than 0 to 127 aborts the bisect | S4 | PASS | "Any other exit code will abort the bisect process." |
| 79 | Common mistakes | A program that ends with `exit(-1)` leaves the code 255 | S4 | PASS | "a program that terminates via exit(-1) leaves $? = 255" |
| 80 | Common mistakes | For a commit that cannot be tested, exit with 125 | S4 | PASS | "The special exit code 125 should be used when the current source code cannot be tested." |
| 81 | Common mistakes | Skipping a commit next to the one you look for: Git cannot tell exactly which was the first bad one | S4 | PASS | "if you skip a commit adjacent to the one you are looking for, Git will not be able to tell exactly which of those commits was the first bad one." (S4 lines 365-367; I read it as matched in the file) |
| 82 | Common mistakes | By default `git stash` stashes only modified and staged tracked files | S7 | PASS | "By default, git stash will stash only modified and staged tracked files." |
| 83 | Common mistakes | Add `-u` (`--include-untracked`) to include untracked files | S7 | PASS | "If you specify --include-untracked or -u, Git will include untracked files" |
| 84 | Common mistakes | Use `git worktree remove` instead of deleting by hand | S3 | PASS | "When you are done with a linked worktree, remove it with git worktree remove." |
| 85 | Common mistakes | If the folder is already gone, `git worktree prune` removes the leftover information | S3 | PASS | "If a working tree is deleted without using git worktree remove ... you can run git worktree prune ... to clean up any stale administrative files." |
| 86 | Common mistakes | `git cherry-pick` requires a clean working tree | S5 | PASS | "This requires your working tree to be clean (no modifications from the HEAD commit)." |
| 87 | What a tester can check | Callout "Tutorial advice": the list is the tutorial's own advice, with no tool fact beyond the rest of the page | none | PASS | The callout title is "Tutorial advice" and it says "This list is the tutorial's own advice". The `-x`, `git bisect run`, rebase, stable-branch, stash and worktree points all match earlier rows (25-27, 36, 74, 18, 28, 31). |
| 88 | Key words | Long-running branch: stays open, such as `master` for stable code or `develop` for testing stability | none | PASS | Page: "several **long-running branches** that are always open" and "A parallel branch named `develop` or `next` is where they work or test stability" |
| 89 | Key words | Topic branch | none | PASS | Page: "A **topic branch** is a short-lived branch for a single feature or related work" |
| 90 | Key words | Rebase: replaying changes on another branch, as new commits | none | PASS | Page: "replays them on a different branch" and "you abandon existing commits and create new ones" |
| 91 | Key words | Cherry-pick: applying the change of an existing commit as a new commit | none | PASS | Page: "applies the change each one introduces, recording a new commit for each" |
| 92 | Key words | `-x` adds "(cherry picked from commit …)" for a cherry-pick without conflicts | none | PASS | Page: "With `-x`, it appends a line that says "(cherry picked from commit …)"" and "This is done only for cherry-picks without conflicts" |
| 93 | Key words | Stash: a stack of unfinished changes that you can reapply later | none | PASS | Page: "saves it on a stack of unfinished changes" and "You can reapply it at any time" |
| 94 | Key words | Linked worktree: made by `git worktree add` | none | PASS | Page: "Each one that `git worktree add` creates is a **linked worktree**" |
| 95 | Key words | Main worktree: prepared by `git init` or `git clone` | none | PASS | Page: "the one that `git init` or `git clone` prepared is the **main worktree**" |
| 96 | Key words | Bisect: binary search for the commit that introduced a change | none | PASS | Page: "`git bisect` uses binary search to find the commit that introduced a bug" and "finds the exact commit that introduced the change" |
| 97 | Key words | Good (old) / bad (new); exit code 0 means good | none | PASS | Page: "a "good" commit that is known to be before the bug", "Good (old)" for exit code 0, and "Bad (new)" |
| 98 | Key words | `git bisect run`: bisect with a command whose exit code marks each commit | none | PASS | Page: "With `git bisect run <cmd>`, a command does the marking for you. Its exit code decides" |
| 99 | Key words | Exit code 125: a commit cannot be tested | none | PASS | Page: "125 \| This commit cannot be tested" |
| 100 | Key words | `git blame`: revision and author that last modified each line | none | PASS | Page table: "Which revision and author last modified each line of a file" |

Open FAILs after round 16: 0

Open FAILs: 0
