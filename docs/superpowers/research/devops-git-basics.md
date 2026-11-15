# Research notes: Git Basics

Page: `content/devops/git-basics.mdx`. Module: DevOps & Cloud. Date: 2026-11-15.

The page is a full lesson for a tester (`docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md`): snapshots and the three states, branches, merges and conflicts, remotes, a practice run with a merge conflict on purpose, how a tester tests a pull request, and common mistakes. The reels after the text are another creator's videos and are not sources. Each fact in the text comes from the sources below. The first version of the page (2026-11-05) had the two sentences about snapshots and merges; they are still in `## What it is`.

The practice run uses only commands that the sources show: `git config --global user.name` and `user.email` (S3), `git init -b main`, `git remote add origin REMOTE-URL`, `git remote -v`, and `git push -u origin main` (S15), `git status`, `git add`, `git commit -m`, and `git commit -a` (S4), `git switch` and `git switch -c` (S9), `git merge` (S6), and `git log --oneline` and `--graph` (S8). The checklist lines and the branch name `fix-checklist` are the tutorial's own example. The conflict markers follow the example of S6, with the tutorial's file in place of `index.html`.

## Sources

| ID | Title | URL |
|---|---|---|
| S1 | What is Git? (Pro Git book) | https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F |
| S2 | git-merge (Git documentation) | https://git-scm.com/docs/git-merge |
| S3 | First-Time Git Setup (Pro Git book) | https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup |
| S4 | Recording Changes to the Repository (Pro Git book) | https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository |
| S5 | Branches in a Nutshell (Pro Git book) | https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell |
| S6 | Basic Branching and Merging (Pro Git book) | https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging |
| S7 | Working with Remotes (Pro Git book) | https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes |
| S8 | Viewing the Commit History (Pro Git book) | https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History |
| S9 | git-switch (Git documentation) | https://git-scm.com/docs/git-switch |
| S10 | git-pull (Git documentation) | https://git-scm.com/docs/git-pull |
| S11 | git-push (Git documentation) | https://git-scm.com/docs/git-push |
| S12 | gitignore (Git documentation) | https://git-scm.com/docs/gitignore |
| S13 | Pull requests (GitHub Docs) | https://docs.github.com/en/pull-requests/reference/pull-requests |
| S14 | Checking out pull requests locally (GitHub Docs) | https://docs.github.com/en/pull-requests/how-tos/review-pull-requests/checking-out-pull-requests-locally |
| S15 | Adding locally hosted code to GitHub (GitHub Docs) | https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github |
| S16 | Getting a Git Repository (Pro Git book) | https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository |

S13 and S14 were first fetched at their old addresses (`.../proposing-changes-to-your-work-with-pull-requests/about-pull-requests` and `.../reviewing-changes-in-pull-requests/checking-out-pull-requests-locally`), which now redirect; the page cites the new addresses.

## Claims

| Claim | Source | Quote |
|---|---|---|
| The major difference between Git and any other version control system (VCS) is the way Git thinks about its data. | S1 | "The major difference between Git and any other VCS" |
| The major difference between Git and any other version control system (VCS) is the way Git thinks about its data. | S1 | "is the way Git thinks about its data" |
| Git thinks of its data as a series of snapshots of a miniature filesystem: each time you commit, Git takes a picture of what all your files look like at that moment. | S1 | "Git thinks of its data more like a series of snapshots of a miniature filesystem" |
| Git thinks of its data as a series of snapshots of a miniature filesystem: each time you commit, Git takes a picture of what all your files look like at that moment. | S1 | "Git basically takes a picture of what all your files look like at that moment" |
| A merge joins two or more development histories together. | S2 | "Join two or more development histories together" |
| Most operations need only local files and resources. | S1 | "Most operations in Git need only local files and resources to operate" |
| The entire history of the project is on your local disk. | S1 | "you have the entire history of the project right there on your local disk" |
| Git refers to each stored item by its checksum. | S1 | "Everything in Git is checksummed before it is stored and is then referred to by that checksum" |
| The checksum is a SHA-1 hash: a 40-character string of hexadecimal characters. | S1 | "The mechanism that Git uses for this checksumming is called a SHA-1 hash" |
| The checksum is a SHA-1 hash: a 40-character string of hexadecimal characters. | S1 | "This is a 40-character string composed of hexadecimal characters" |
| A file is modified, staged, or committed. | S1 | "Git has three main states that your files can reside in: modified, staged, and committed" |
| Modified: you changed the file but have not committed it yet. | S1 | "Modified means that you have changed the file but have not committed it to your database yet" |
| Staged: you marked the modified file to go into your next commit. | S1 | "Staged means that you have marked a modified file in its current version to go into your next commit snapshot" |
| Committed: the data is safely stored in your local database. | S1 | "Committed means that the data is safely stored in your local database" |
| The three sections of a Git project: the working tree, the staging area (the index), and the Git directory. | S1 | "the three main sections of a Git project: the working tree, the staging area, and the Git directory" |
| The three sections of a Git project: the working tree, the staging area (the index), and the Git directory. | S1 | "Its technical name in Git parlance is the" |
| The working tree is a single checkout of one version of the project; its files are placed on disk for you to use or modify. | S1 | "The working tree is a single checkout of one version of the project" |
| The working tree is a single checkout of one version of the project; its files are placed on disk for you to use or modify. | S1 | "placed on disk for you to use or modify" |
| The staging area is a file, generally in your Git directory, that stores information about what will go into your next commit. | S1 | "The staging area is a file, generally contained in your Git directory, that stores information about what will go into your next commit" |
| The Git directory is where Git stores the metadata and object database of your project; it is what is copied when you clone a repository. | S1 | "The Git directory is where Git stores the metadata and object database for your project" |
| The Git directory is where Git stores the metadata and object database of your project; it is what is copied when you clone a repository. | S1 | "it is what is copied when you clone a repository from another computer" |
| `git add` stages files. | S4 | "you use it to begin tracking new files, to stage files" |
| A commit takes the files as they are in the staging area, and stores that snapshot permanently in the Git directory. | S1 | "You do a commit, which takes the files as they are in the staging area and stores that snapshot permanently to your Git directory" |
| In a repository that `git init` made, the Git directory is a subdirectory named `.git`. | S16 | "This creates a new subdirectory named .git that contains all of your necessary repository files" |
| You obtain a Git repository in one of two ways: turn a local directory into one, or clone an existing one. | S16 | "You typically obtain a Git repository in one of two ways" |
| You obtain a Git repository in one of two ways: turn a local directory into one, or clone an existing one. | S16 | "You can take a local directory that is currently not under version control, and turn it into a Git repository" |
| You obtain a Git repository in one of two ways: turn a local directory into one, or clone an existing one. | S16 | "You can clone an existing Git repository from elsewhere" |
| A pull request is a proposal to merge code changes into a project, so that people can discuss and review the changes before they are merged. | S13 | "Pull requests are proposals to merge code changes into a project" |
| A pull request is a proposal to merge code changes into a project, so that people can discuss and review the changes before they are merged. | S13 | "letting you discuss and review changes before merging them" |
| A branch in Git is a lightweight movable pointer to a commit. | S5 | "A branch in Git is simply a lightweight movable pointer to one of these commits" |
| The default branch name in Git is `master`. | S5 | "The default branch name in Git is master" |
| Every time you commit, the branch pointer moves forward automatically. | S5 | "Every time you commit, the master branch pointer moves forward automatically" |
| A special pointer called `HEAD` points to the local branch you are currently on. | S5 | "It keeps a special pointer called HEAD" |
| A special pointer called `HEAD` points to the local branch you are currently on. | S5 | "this is a pointer to the local branch you're currently on" |
| `git switch` switches to a branch: the working tree and the index are updated to match it, and new commits are added to its tip. | S9 | "Switch to a specified branch. The working tree and the index are updated to match the branch. All new commits will be added to the tip of this branch." |
| `git switch -c <new-branch>` creates a new branch, then switches to it. | S9 | "Create a new branch named <new-branch> starting at <start-point> before switching to the branch" |
| Fast-forward: the commit that you merge is directly ahead of the commit you are on; no divergent work; Git moves the pointer forward. | S6 | "directly ahead of the commit C2 you're on, Git simply moves the pointer forward" |
| Fast-forward: the commit that you merge is directly ahead of the commit you are on; no divergent work; Git moves the pointer forward. | S6 | "Git simplifies things by moving the pointer forward because there is no divergent work to merge together" |
| Three-way merge: the two branch tips and their common ancestor. | S6 | "using the two snapshots pointed to by the branch tips and the common ancestor of the two" |
| It creates a new merge commit, which has more than one parent. | S6 | "This is referred to as a merge commit, and is special in that it has more than one parent" |
| If you changed the same part of the same file differently in the two branches, Git cannot merge them cleanly. | S6 | "If you changed the same part of the same file differently in the two branches you're merging, Git won't be able to merge them cleanly" |
| It pauses the merge and adds conflict-resolution markers to the file. | S6 | "It has paused the process while you resolve the conflict" |
| It pauses the merge and adds conflict-resolution markers to the file. | S6 | "Git adds standard conflict-resolution markers to the files that have conflicts" |
| Above `=======` is the version in `HEAD`; below it is the version of the other branch. | S6 | "is the top part of that block (everything above the =======)" |
| Above `=======` is the version in `HEAD`; below it is the version of the other branch. | S6 | "looks like everything in the bottom part" |
| You resolve it, run `git add` on each file to mark it as resolved, then run `git commit`. | S6 | "run git add on each file to mark it as resolved" |
| You resolve it, run `git add` on each file to mark it as resolved, then run `git commit`. | S6 | "you can type git commit to finalize the merge commit" |
| A remote repository is a version of your project hosted on the Internet or a network. | S7 | "Remote repositories are versions of your project that are hosted on the Internet or network somewhere" |
| `origin` is the default name that Git gives to the server you cloned from. | S7 | "that is the default name Git gives to the server you cloned from" |
| `git fetch` only downloads the data; it does not merge it with your work. | S7 | "the git fetch command only downloads the data to your local repository" |
| `git fetch` only downloads the data; it does not merge it with your work. | S7 | "doesn't automatically merge it with any of your work or modify what you're currently working on" |
| `git pull` runs `git fetch`, then integrates the remote branch into your current branch. | S10 | "First, git pull runs git fetch with the same arguments" |
| `git pull` runs `git fetch`, then integrates the remote branch into your current branch. | S10 | "Then it integrates that branch into the current branch" |
| The local repository is where `git fetch` downloads the data. | S7 | "the git fetch command only downloads the data to your local repository" |
| `git push <remote> <branch>` shares your work. | S7 | "The command for this is simple: git push <remote> <branch>" |
| If someone pushed before you, your push is rejected: you fetch their work and incorporate it first. | S7 | "your push will rightly be rejected" |
| If someone pushed before you, your push is rejected: you fetch their work and incorporate it first. | S7 | "You'll have to fetch their work first and incorporate it into yours before you'll be allowed to push" |
| Tell Git your name and email once; every commit uses this information. | S3 | "The first thing you should do when you install Git is to set your user name and email address" |
| Tell Git your name and email once; every commit uses this information. | S3 | "every Git commit uses this information" |
| Tell Git your name and email once; every commit uses this information. | S3 | "git config --global user.name" |
| `git init -b main` starts a repository whose first branch is `main`. | S15 | "you can set the name of the default branch using -b" |
| `git init -b main` starts a repository whose first branch is `main`. | S15 | "git init -b main" |
| Check the state, stage the file, and commit it. | S4 | "The main tool you use to determine which files are in which state is the git status command" |
| Check the state, stage the file, and commit it. | S4 | "In order to begin tracking a new file, you use the command git add" |
| Check the state, stage the file, and commit it. | S4 | "you can type your commit message inline with the commit command by specifying it after a -m flag" |
| `git log --oneline` shows each commit on one line, with the first few characters of its hash. | S8 | "Shorthand for --pretty=oneline --abbrev-commit used together" |
| `git log --oneline` shows each commit on one line, with the first few characters of its hash. | S8 | "Show only the first few characters of the SHA-1 checksum instead of all 40" |
| `git log --oneline` shows each commit on one line, with the first few characters of its hash. | S8 | "prints each commit on a single line" |
| `git commit -a` stages every file that is already tracked, then commits. | S4 | "Adding the -a option to the git commit command makes Git automatically stage every file that is already tracked before doing the commit" |
| Git stops with "Automatic merge failed; fix conflicts and then commit the result", and `git status` lists the unmerged file. | S6 | "Automatic merge failed; fix conflicts and then commit the result" |
| Git stops with "Automatic merge failed; fix conflicts and then commit the result", and `git status` lists the unmerged file. | S6 | "If you want to see which files are unmerged at any point after a merge conflict, you can run git status" |
| Remove the conflict marker lines; in a resolved file they are completely removed. | S6 | "lines have been completely removed" |
| Staging the file marks it as resolved in Git. | S6 | "Staging the file marks it as resolved in Git" |
| `--graph` draws the branch and merge history. | S8 | "Display an ASCII graph of the branch and merge history beside the log output" |
| Create an empty repository on GitHub, with no README, license, or gitignore file, to avoid errors. | S15 | "To avoid errors, do not initialize the new repository with README, license, or gitignore files" |
| Add the remote, check it, and push. | S15 | "git remote add origin REMOTE-URL" |
| Add the remote, check it, and push. | S15 | "To verify that you set the remote URL correctly, run the following command" |
| Add the remote, check it, and push. | S15 | "git push -u origin main" |
| Anyone can work with an open pull request to continue working on it or to test it. | S14 | "Anyone can work with a previously opened pull request to continue working on it, test it, or open a new pull request with additional changes" |
| Find its ID number, the digits after its title. | S14 | "This is the sequence of digits right after the pull request's title" |
| Fetch it into a new local branch, switch to it, and run your tests. | S14 | "git fetch origin pull/ID/head:BRANCH_NAME" |
| Fetch it into a new local branch, switch to it, and run your tests. | S14 | "You can run local tests or merge other branches into the branch" |
| Commits shows how the branch changed over time. | S13 | "The Commits tab shows how the pull request branch changed over time" |
| Checks shows the automated tests, builds, and other validations. | S13 | "The Checks tab shows automated tests, builds, and other validations" |
| Files changed shows the diff. | S13 | "The Files changed tab shows the diff that reviewers use to understand the proposed changes" |
| `git log` lists each commit with its SHA-1 checksum. | S8 | "this command lists each commit with its SHA-1 checksum" |
| `git log -p` shows the patch of each commit. | S8 | "which shows the difference (the patch output) introduced in each commit" |
| `git log --stat` lists the changed files and the number of added and removed lines. | S8 | "the --stat option prints below each commit entry a list of modified files, how many files were changed, and how many lines in those files were added and removed" |
| `git diff` shows what you changed but did not stage yet. | S4 | "To see what you've changed but not yet staged, type git diff with no other arguments" |
| `git diff --staged` shows what goes into your next commit. | S4 | "If you want to see what you've staged that will go into your next commit, you can use git diff --staged" |
| A `.gitignore` file lists patterns of intentionally untracked files that Git should ignore. | S12 | "A gitignore file specifies intentionally untracked files that Git should ignore" |
| They are usually generated files, such as log files or files that your build produces. | S4 | "These are generally automatically generated files such as log files or files produced by your build system" |
| Files that Git already tracks are not affected by `.gitignore`. | S12 | "Files already tracked by Git are not affected" |
| Run `git rm --cached` on the file to stop tracking it, then add it to `.gitignore`. | S12 | "To stop tracking a file that is currently tracked, use git rm --cached to remove the file from the index" |
| `git push --force` disables the check, and it can cause the remote repository to lose commits. | S11 | "Usually, git push will refuse to update a branch that is not an ancestor of the commit being pushed. This flag disables that check" |
| `git push --force` disables the check, and it can cause the remote repository to lose commits. | S11 | "It can cause the remote repository to lose commits; use it with care" |
| A commit records the snapshot in your staging area, not every change in your working tree. | S4 | "Remember that the commit records the snapshot you set up in your staging area" |
| Every commit uses the name and email, and they are immutably baked into the commits that you create. | S3 | "it's immutably baked into the commits you start creating" |
