# Research notes: Git Workflows

Page: `content/devops/git-workflows.mdx`. Module: DevOps & Cloud. Date: 2026-11-15.

The page is a full lesson for a tester (`docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md`): branches at levels of stability, merge and rebase, cherry-pick, stash, worktrees, and `git bisect`, with a practice run that finds a known bad commit twice. The reels after the text are another creator's videos and are not sources. Each fact in the text comes from the sources below. The first version of the page (2026-11-05) had the five sentences that open `## What it is`; they are still there.

The practice script in `## Try it` is the tutorial's own, and the page says so. It was run on 2026-11-15 with Git in a scratch folder (with `git init -b main`; the page uses plain `git init`, which changes only the name of the first branch): `git bisect run git grep -q "total=100" -- price.txt` tested commits 4 (good), 6 (bad), and 5 (good), and printed `<hash> is the first bad commit` for "Change 6". The text diagram of `## How it works` shows that order. `git stash -u`, `git status` (clean), `git stash pop`, `git worktree add ../hotfix`, `git worktree list`, and `git worktree remove ../hotfix` were run in the same way. The output block on the page is a cut of that real output; the hash differs on every run, and the page says so.

## Sources

| ID | Title | URL |
|---|---|---|
| S1 | git-rebase (Git documentation) | https://git-scm.com/docs/git-rebase |
| S2 | git-stash (Git documentation) | https://git-scm.com/docs/git-stash |
| S3 | git-worktree (Git documentation) | https://git-scm.com/docs/git-worktree |
| S4 | git-bisect (Git documentation) | https://git-scm.com/docs/git-bisect |
| S5 | git-cherry-pick (Git documentation) | https://git-scm.com/docs/git-cherry-pick |
| S6 | Rebasing (Pro Git book) | https://git-scm.com/book/en/v2/Git-Branching-Rebasing |
| S7 | Stashing and Cleaning (Pro Git book) | https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning |
| S8 | Debugging with Git (Pro Git book) | https://git-scm.com/book/en/v2/Git-Tools-Debugging-with-Git |
| S9 | Branching Workflows (Pro Git book) | https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows |
| S10 | git-grep (Git documentation) | https://git-scm.com/docs/git-grep |
| S11 | git-blame (Git documentation) | https://git-scm.com/docs/git-blame |
| S12 | Viewing the Commit History (Pro Git book) | https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History |
| S13 | Getting a Git Repository (Pro Git book) | https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository |
| S14 | Recording Changes to the Repository (Pro Git book) | https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository |

## Claims

| Claim | Source | Quote |
|---|---|---|
| `git rebase` reapplies commits on top of another base tip. | S1 | "Reapply commits on top of another base tip" |
| `git stash` stashes the changes in a dirty working directory away. | S2 | "Stash the changes in a dirty working directory away" |
| `git worktree` manages multiple working trees attached to the same repository, so you can check out more than one branch at a time. | S3 | "Manage multiple working trees attached to the same repository" |
| `git worktree` manages multiple working trees attached to the same repository, so you can check out more than one branch at a time. | S3 | "check out more than one branch at a time" |
| `git bisect` uses binary search to find the commit that introduced a bug. | S4 | "Use binary search to find the commit that introduced a bug" |
| `git cherry-pick` applies the changes introduced by some existing commits. | S5 | "Apply the changes introduced by some existing commits" |
| Rebase: a cleaner history; the log of a rebased branch looks linear. | S6 | "rebasing makes for a cleaner history" |
| Rebase: a cleaner history; the log of a rebased branch looks linear. | S6 | "If you examine the log of a rebased branch, it looks like a linear history" |
| Stash: you want to switch branches, but you don't want to commit half-done work. | S7 | "you want to switch branches for a bit to work on something else" |
| Stash: you want to switch branches, but you don't want to commit half-done work. | S7 | "you don't want to do a commit of half-done work" |
| Bisect: dozens or hundreds of commits since the code last worked, and you don't know what broke it. | S8 | "If you don't know what is breaking, and there have been dozens or hundreds of commits since the last state where you know the code worked" |
| Cherry-pick: backporting a fix to a maintenance branch for an older release. | S5 | "backporting a fix to a maintenance branch for an older release from a development branch" |
| `git blame` shows which revision and author last modified each line of a file. | S11 | "Show what revision and author last modified each line of a file" |
| Git makes it easy to keep several long-running branches that are always open, for different stages of the development cycle. | S9 | "merging from one branch into another multiple times over a long period is generally easy to do" |
| Git makes it easy to keep several long-running branches that are always open, for different stages of the development cycle. | S9 | "you can have several branches that are always open and that you use for different stages of your development cycle" |
| Many Git developers keep only entirely stable code in master, possibly only code that has been or will be released. | S9 | "having only code that is entirely stable in their master branch" |
| Many Git developers keep only entirely stable code in master, possibly only code that has been or will be released. | S9 | "possibly only code that has been or will be released" |
| A parallel branch named develop or next is where they work or test stability; when it gets to a stable state, it can be merged into master. | S9 | "They have another parallel branch named develop or next that they work from or use to test stability" |
| A parallel branch named develop or next is where they work or test stability; when it gets to a stable state, it can be merged into master. | S9 | "whenever it gets to a stable state, it can be merged into master" |
| A topic branch is a short-lived branch for a single feature or related work. | S9 | "A topic branch is a short-lived branch that you create and use for a single particular feature or related work" |
| Topic branches are pulled into develop when ready, to make sure that they pass all the tests and don't introduce bugs. | S9 | "to pull in topic branches (short-lived branches, like your earlier iss53 branch) when they're ready, to make sure they pass all the tests and don't introduce bugs" |
| There are two main ways to integrate changes from one branch into another: the merge and the rebase. | S6 | "In Git, there are two main ways to integrate changes from one branch into another: the merge and the rebase" |
| A merge performs a three-way merge between the two latest branch snapshots and their most recent common ancestor, creating a new snapshot and commit. | S6 | "It performs a three-way merge between the two latest branch snapshots (C3 and C4) and the most recent common ancestor of the two (C2), creating a new snapshot (and commit)" |
| A rebase takes all the changes committed on one branch and replays them on a different branch. | S6 | "you can take all the changes that were committed on one branch and replay them on a different branch" |
| There is no difference in the end product, but rebasing makes for a cleaner history. | S6 | "There is no difference in the end product of the integration, but rebasing makes for a cleaner history" |
| When you rebase, you abandon existing commits and create new ones that are similar but different. | S6 | "When you rebase stuff, you're abandoning existing commits and creating new ones that are similar but different" |
| Cherry-pick applies the change each commit introduces, recording a new commit for each. | S5 | "Given one or more existing commits, apply the change each one introduces, recording a new commit for each" |
| Cherry-pick requires a clean working tree. | S5 | "This requires your working tree to be clean" |
| With `-x`, cherry-pick appends a line that says (cherry picked from commit …) to the original commit message. | S5 | "When recording the commit, append a line that says" |
| With `-x`, cherry-pick appends a line that says (cherry picked from commit …) to the original commit message. | S5 | "to the original commit message in order to indicate which commit this change was cherry-picked from" |
| Stashing takes the modified tracked files and staged changes and saves them on a stack of unfinished changes, which you can reapply at any time, even on a different branch. | S7 | "your modified tracked files and staged changes" |
| Stashing takes the modified tracked files and staged changes and saves them on a stack of unfinished changes, which you can reapply at any time, even on a different branch. | S7 | "saves it on a stack of unfinished changes that you can reapply at any time (even on a different branch)" |
| `git stash list` shows the stashes; `git stash apply` reapplies one. | S7 | "To see which stashes you've stored, you can use git stash list" |
| `git stash list` shows the stashes; `git stash apply` reapplies one. | S7 | "You can reapply the one you just stashed by using the command shown in the help output of the original stash command: git stash apply" |
| `git stash pop` applies a stash and then immediately drops it from the stack. | S7 | "You can also run git stash pop to apply the stash and then immediately drop it from your stack" |
| A repository can support multiple working trees, so you can check out more than one branch at a time. | S3 | "A git repository can support multiple working trees, allowing you to check out more than one branch at a time" |
| `git worktree add` makes a linked worktree; the one that git init or git clone prepared is the main worktree. | S3 | "This new worktree is called a" |
| `git worktree add` makes a linked worktree; the one that git init or git clone prepared is the main worktree. | S3 | "as opposed to the" |
| `git worktree add` makes a linked worktree; the one that git init or git clone prepared is the main worktree. | S3 | "A repository has one main worktree (if it's not a bare repository) and zero or more linked worktrees" |
| You give bisect a bad commit known to contain the bug, and a good commit known to be before the bug. | S4 | "You use it by first telling it a" |
| You give bisect a bad commit known to contain the bug, and a good commit known to be before the bug. | S4 | "commit that is known to be before the bug was introduced" |
| Git picks a commit between the two and asks whether it is good or bad. | S4 | "picks a commit between those two endpoints and asks you whether the selected commit is" |
| It keeps narrowing the range until it finds the exact commit that introduced the change. | S4 | "It continues narrowing down the range until it finds the exact commit that introduced the change" |
| With `git bisect run <cmd>`, a command does the marking; its exit code decides. | S4 | "If you have a script that can tell if the current source code is good or bad, you can bisect by issuing the command" |
| Exit code 0: good (old); 1 to 127 except 125: bad (new). | S4 | "should exit with code 0 if the current source code is good/old, and exit with a code between 1 and 127 (inclusive), except 125, if the current source code is bad/new" |
| Exit code 125: this commit cannot be tested. | S4 | "The special exit code 125 should be used when the current source code cannot be tested" |
| Any other exit code stops the bisect. | S4 | "Any other exit code will abort the bisect process" |
| Start a session, mark the current commit as bad and an old one as good. | S4 | "$ git bisect start $ git bisect bad # Current version is bad $ git bisect good v2.6.13-rc2" |
| Repeat until Git prints the first bad commit. | S4 | "Eventually there will be no more revisions left to inspect, and the command will print out a description of the first bad commit" |
| `git bisect reset` returns you to the commit that you had before. | S4 | "By default, this will return your tree to the commit that was checked out before git bisect start" |
| You can list the known bad commit first and the known good commit second in `git bisect start`. | S8 | "listing the known bad commit first and the known good commit second" |
| `git grep -q` exits with status 0 when there is a match, and with a non-zero status when there is not. | S10 | "exit with status 0 when there is a match and with non-zero status when there isn't" |
| `git stash -u` also takes untracked files. | S7 | "If you specify --include-untracked or -u, Git will include untracked files in the stash being created" |
| A stash reverts the working directory to match the HEAD commit, so git status shows a clean tree. | S2 | "reverts the working directory to match the HEAD commit" |
| `git worktree add ../hotfix` creates a new branch hotfix and checks it out at the path ../hotfix. | S3 | "For instance, git worktree add ../hotfix creates new branch hotfix and checks it out at path ../hotfix" |
| `git worktree list` shows the main worktree first, then the linked ones. | S3 | "The main worktree is listed first, followed by each of the linked worktrees" |
| When you are done, remove it with `git worktree remove`. | S3 | "When you are done with a linked worktree, remove it with git worktree remove" |
| When you don't know what is breaking, after dozens or hundreds of commits, use git bisect. | S8 | "you'll likely turn to git bisect for help" |
| A script that exits 0 when good and non-0 when bad fully automates bisect. | S8 | "if you have a script that will exit 0 if the project is good or non-0 if the project is bad, you can fully automate git bisect" |
| You can also run whatever you have that runs automated tests for you. | S8 | "whatever you have that runs automated tests for you" |
| If a method in your code is buggy, git blame can show which commit introduced that line. | S8 | "if you see that a method in your code is buggy, you can annotate the file with git blame to determine which commit was responsible for the introduction of that line" |
| git blame annotates each line with information from the revision that last modified it. | S11 | "Annotates each line in the given file with information from the revision which last modified the line" |
| The -x line can be useful when cherry-picking between two publicly visible branches, such as a backport to a maintenance branch. | S5 | "If on the other hand you are cherry-picking between two publicly visible branches" |
| To work on an existing branch in a new worktree, use git worktree add path branch. | S3 | "To instead work on an existing branch in a new worktree, use git worktree add <path> <branch>" |
| Do not rebase commits that exist outside your repository and that people may have based work on. | S6 | "Do not rebase commits that exist outside your repository and that people may have based work on" |
| Rebase local changes before you push, but never rebase anything that you have pushed somewhere. | S6 | "rebase local changes before pushing to clean up your work, but never rebase anything that you've pushed somewhere" |
| After a bisect session, git bisect reset cleans up the bisection state and returns you to the original HEAD. | S4 | "After a bisect session, to clean up the bisection state and return to the original HEAD, issue the following command" |
| A program that ends with exit(-1) leaves the code 255. | S4 | "It should be noted that a program that terminates via" |
| A program that ends with exit(-1) leaves the code 255. | S4 | "leaves $? = 255, (see the" |
| If you skip a commit next to the one that you are looking for, Git cannot tell exactly which was the first bad one. | S4 | "if you skip a commit adjacent to the one you are looking for, Git will be unable to tell exactly which of those commits was the first bad one" |
| By default, git stash stashes only modified and staged tracked files. | S7 | "By default, git stash will stash only modified and staged tracked files" |
| If the folder is already gone, git worktree prune removes the worktree information that is left. | S3 | "Remove worktree information in $GIT_DIR/worktrees for worktrees whose working trees are missing" |
| If the folder is already gone, git worktree prune removes the worktree information that is left. | S3 | "Useful after manually removing a working tree that is no longer needed" |
| `git init` makes a repository with a .git subdirectory. | S13 | "This creates a new subdirectory named .git that contains all of your necessary repository files" |
| `git add` stages files. | S14 | "you use it to begin tracking new files, to stage files" |
| `git commit -m` records a commit with an inline message. | S14 | "you can type your commit message inline with the commit command by specifying it after a -m flag" |
| `git log --oneline` prints each commit on a single line. | S12 | "prints each commit on a single line" |
| The -x line is added only for cherry-picks without conflicts. | S5 | "This is done only for cherry picks without conflicts" |
