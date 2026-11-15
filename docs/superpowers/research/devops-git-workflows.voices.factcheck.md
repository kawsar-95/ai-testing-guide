# Voices fact check: devops / git-workflows

Checked by an independent agent. Each Layman and Bangla panel was compared with the Technical panel of the same block, sentence by sentence, by a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page. Rounds 1 to 3 used a strict standard (PASS: the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker). From round 4 the standard is the rule of CLAUDE.md, "Layman and Bangla give no fact that Technical does not give": PASS if every fact of the sentence is in the Technical panel, the meaning is not stronger, weaker, or different, and the cite is a cite of the Technical panel on the same fact; left-out details are allowed, and the checker lists them in its note; FAIL if a fact is added or changed, the meaning is stronger, weaker, or different, a limiting word was dropped so that the claim says more, or a cite is on a sentence that its source does not support. The checker judged the Bangla by its meaning and had to say when it could not read a sentence well enough to judge it. No person who reads Bangla has read this page. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`. The checkers' remarks about a writing skill of their own environment (1 sentences) are left out; nothing that a checker said about the page is.

## Round 1 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / git-workflows (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | Two facts are changed and one is dropped. (1) Cherry-pick: the Technical panel and S5 say "some existing commits" (plural). Layman says "the change of one commit", which changes the meaning. (2) Bisect: Layman drops "binary search", which the Technical panel states. (3) Worktree: Layman drops "attached to the same repository" and the multiple-working-trees fact. The other sentences are acceptable paraphrases: rebase, stash, and "broke something" for "introduced a bug". |
| What it is | Bangla | FAIL | I can read the Bangla well enough to judge it. It has the same problems as the Layman panel. (1) cherry-pick says "একটা commit-এর পরিবর্তন" (the change of one commit), but the source says "some existing commits". (2) bisect drops the binary search. (3) worktree drops the same-repository and multiple-working-trees facts. The rebase, stash, and cite placements match the Technical panel. |

Open FAILs after round 1: 2

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / git-workflows (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Each of the five command sentences keeps the same fact and the same cite (1 to 5) as the Technical panel. Nothing is added or dropped. "takes commits and reapplies them" and "puts away the changes" are close rewordings of "reapplies commits" and "stashes … away". They do not change the meaning. The opening sentence is the same. |
| What it is | Bangla | PASS | The Bangla matches the Technical panel sentence by sentence, and each sentence keeps its cite. Rebase: "কিছু commit অন্য একটা base tip-এর ওপরে আবার প্রয়োগ করে" matches "reapplies commits on top of another base tip". Stash: "dirty working directory-র পরিবর্তনগুলো সরিয়ে রাখে" matches "stashes the changes … away". Worktree: "একাধিক working tree পরিচালনা করে … একসাথে একাধিক branch check out করতে পারেন" matches "manages multiple working trees … check out more than one branch at a time". Bisect: "binary search ব্যবহার করে সেই commit খুঁজে বের করে, যা একটা bug ঢুকিয়েছে" matches "uses binary search to find the commit that introduced a bug". Cherry-pick: "কিছু existing commit-এর আনা পরিবর্তনগুলো প্রয়োগ করে" matches "applies the changes introduced by some existing commits". Product and command names stay in English, which is correct. |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / git-workflows (round 4)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every sentence restates a Technical sentence, and each cite is on the same fact. "applies commits again" = "reapplies commits". "puts away" = "stashes away". "several" = "multiple". The worktree sentence is split in two, and the cite sits at the end of the group. Left out: "attached to", and "so" (the cause link between multiple trees and checking out more than one branch). |
| What it is | Bangla | FAIL | The rebase sentence says "কিছু commit" ("some commits"). The Technical panel says "reapplies commits" with no "some". This narrows the scope, so the sentence says something different. Fix: drop "কিছু" (write "commit ... আবার বসায়"). The other sentences match the Technical panel. The cherry-pick "কিছু" matches "some existing commits". "পরিচালনা করে" = manages. The worktree sentence is split in two, and the cite is at the end of the group. Left out: "attached to" (the worktree sentence says "একই repository-র", which is acceptable), and the "so" link. I could read all the Bangla well enough to judge it. |

Open FAILs after round 4: 1

My tools were Read, Grep and Glob only, so this reply is not checked against that style.

Changed after this round: Bangla: "কিছু" (some) was taken out of the rebase sentence; the Technical sentence says "commits".

## Round 5 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / git-workflows (round 5)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Each sentence restates one Technical sentence, and each cite is on the same fact. "Applies commits again" matches "reapplies". "Puts away the changes" matches "stashes ... away". "Several working trees" matches "multiple working trees". The two worktree sentences are one group, and the cite is at the end. Details left out: none of substance. The panel does not say that the worktrees are "attached to" the repository. It says "of the same repository". |
| What it is | Bangla | PASS | I can read the Bangla well enough to judge it. Each sentence matches the Technical meaning. "আবার বসায়" means reapply. "সরিয়ে রাখে" means stash away. "একাধিক working tree পরিচালনা করে" means manage multiple working trees. "একসাথে একাধিক branch check out করতে পারেন" means check out more than one branch at a time. "কিছু existing commit" keeps the limit "some". Details left out: "attached to" the repository, which the panel renders as "একই repository-র". The cites are on the same facts as in the Technical panel. |

Open FAILs after round 5: 0

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md). Round 6 and later check the new text with the brief of the full pages.

## Round 6 (2026-11-15)

# Voices fact check: devops / git-workflows (round 6)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact matches the Technical panel and the cites are on the same facts. Left out: "dirty" is kept, but "dozens or hundreds" becomes "Many". "Backporting to a maintenance branch" becomes "Copying a fix to the branch of an older release". "Revision and author" becomes "who … and in which commit". |
| What it is | Bangla | PASS | Meaning matches the Technical panel. Left out: "dozens or hundreds" is kept as "কয়েক ডজন বা কয়েকশো". Nothing is added. |
| How it works | Layman | PASS | Facts match. Left out: the term "three-way merge" (written as "compares … with the commit where the branches split", plain wording for the common ancestor). "Parallel" is dropped from "parallel branch". "Local" is dropped before "changes". "Abandon" becomes "drop". |
| How it works | Bangla | PASS | Facts match, and the code blocks are the same. Note: "topic branch তৈরি হলে" is read as "when ready". It could also be read as "when made", which would be weaker. This is a risk of wording only. Left out: nothing of weight. |
| Try it | Layman | PASS | Facts match, and the code blocks are the same. Left out: "tutorial's tip" is not in this section. "Checks out" is written as "opens". The wording "find the bug's commit two ways" matches "twice". |
| Try it | Bangla | PASS | Facts match, and the code blocks are the same. Nothing is added. |
| How a tester uses it | Layman | PASS | Facts match. Left out: "maintenance branch" is dropped ("for example to the branch of an older release"). "Fully automate" becomes "can run on its own". "Revision" becomes "commit". |
| How a tester uses it | Bangla | PASS | Facts match and the cites are on the same facts. Left out: nothing of weight. |
| Common mistakes | Layman | FAIL | (1) The skip bullet says "Git cannot tell which of them was the first bad one". It drops "exactly", which the Technical panel and S4 have ("unable to tell exactly which"). This makes the claim stronger. (2) The last bullet's title is "Cherry-picking with unsaved changes". The Technical panel says "dirty tree". "Unsaved" is a different meaning, because the changes are saved on disk but not committed. Fix: "Cherry-pick with uncommitted changes", and "cannot tell exactly which". |
| Common mistakes | Bangla | PASS | Facts match. "ঠিক বলতে পারে না" keeps the "exactly" limit. "By default" is kept as "default-এ". |
| What a tester can check | Layman | PASS | The same tutorial advice as the Technical panel, in plainer words. It adds no tool fact. |
| What a tester can check | Bangla | PASS | The same tutorial advice, and the Bangla reads the same as the Technical panel. It adds no tool fact. |

Open FAILs after round 6: 1

Not checked: I did not invoke the writing-simplified-technical-english skill, because it is not available in this session. Also, the lede, description and Key words rows pass because the body sections give the facts, and not because each has its own cite.

Changed after this round: The FAIL was fixed in the Layman panel: "cannot tell exactly which" and "Cherry-picking with uncommitted changes".

## Round 7 (2026-11-15)

# Voices fact check: devops / git-workflows (round 7)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. Left out: "maintenance branch" (the cherry-pick row says only "the branch of an older release"), "revision and author" (blame row says "who ... and in which commit"), "dozens or hundreds" (says "Many commits"). |
| What it is | Bangla | PASS | The meaning matches the Technical panel and the cites are the same. Left out: nothing beyond small wording. |
| How it works | Layman | PASS | Every fact is in the Technical panel. Left out: "three-way" and "most recent common ancestor" (the merge is described as comparing the two newest snapshots with "the commit where the branches split"), "possibly" and "has been" (says "maybe only code that is or will be released"), "development cycle" (says "stage of the work"), the exact merge detail. Code blocks match. |
| How it works | Bangla | PASS | Every fact is in the Technical panel. Code blocks and the exit code table match. "তৈরি হলে" for "when they are ready" is read as "ready". Left out: nothing important. |
| Try it | Layman | PASS | Every fact is in the Technical panel. Code blocks are the same. Left out: "two ways" for "twice" is the same meaning. The "end of the output names the commit" sentence carries the same gap as Technical row 49, so no new fact is added. |
| Try it | Bangla | PASS | The meaning matches the Technical panel and the code blocks are the same. Left out: nothing beyond wording. The output sentence carries the same gap as Technical row 49. |
| How a tester uses it | Layman | PASS | Every fact is in the Technical panel. Left out: "dozens or hundreds", "maintenance branch", "fully" automate (says "can run on its own"). |
| How a tester uses it | Bangla | PASS | The meaning matches the Technical panel. Left out: nothing important. |
| Common mistakes | Layman | PASS | Every fact is in the Technical panel. Left out: "original" in "original HEAD" (says "where you started"), "bisection state", "modified" (says "changed"). "Cherry-picking with uncommitted changes" restates "dirty tree". |
| Common mistakes | Bangla | PASS | The meaning matches the Technical panel. Left out: nothing important. |
| What a tester can check | Layman | PASS | The callout says it is the tutorial's own advice. Items match the Technical panel ("follow" for "trace"). |
| What a tester can check | Bangla | PASS | The callout says it is the tutorial's own advice. Items match the Technical panel. |

Open FAILs after round 7: 0

Changed after this round: No FAIL in this round. The voices were changed with the fact fix above.

## Round 8 (2026-11-15)

# Voices fact check: devops / git-workflows (round 8)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact and cite matches the Technical panel. Left out: the "maintenance branch" detail for cherry-pick (it says "branch of an older release"), the word "backporting", and "attached to". |
| What it is | Bangla | PASS | Every fact and cite matches the Technical panel. Left out: "maintenance branch" is kept in the table only. "attached to the same repository" is simplified to "একই repository-র". |
| How it works | Layman | PASS | Every fact and cite matches. Left out: "three-way merge" (it says "compares the two newest snapshots with the commit where the branches split"), "possibly" (it says "maybe"), "parallel" for the develop branch, "immediately" for pop, and the word "known" for the bad and good commits. The diagrams and exit-code table are identical to the Technical panel. |
| How it works | Bangla | PASS | Every fact and cite matches. Left out: nothing that changes the meaning. "ready" is written as "তৈরি হলে" and means "when it is ready". "Possibly" is kept as "হয়তো". The diagrams and the table are identical to the Technical panel. |
| Try it | Layman | PASS | Every fact and cite matches. Left out: "needs only" is written as "need only"; "checks out" is written as "opens"; "drops the stash" is written as "removes the stash". The code blocks and the sample output are identical to the Technical panel. |
| Try it | Bangla | PASS | Every fact and cite matches. Left out: nothing that changes the meaning. The code blocks and the sample output are identical to the Technical panel. |
| How a tester uses it | Layman | PASS | Every fact and cite matches. Left out: "fully" in "fully automate" (it says "can run on its own"), "publicly visible" (it says "public"), "maintenance branch" (it says "branch of an older release"), and "information from the revision". |
| How a tester uses it | Bangla | PASS | Every fact and cite matches. Left out: nothing that changes the meaning. "Fully automate" is kept as "পুরো কাজটা automate করা যায়". |
| Common mistakes | Layman | PASS | Every fact and cite matches. Left out: the heading "dirty tree" is changed to "uncommitted changes", and "requires" is written as "needs". Neither changes the meaning. "Bisect state" and "original HEAD" are simplified to "where you started". |
| Common mistakes | Bangla | PASS | Every fact and cite matches. Left out: nothing that changes the meaning. "By default" is kept as "default-এ". |
| What a tester can check | Layman | PASS | The callout has the same six pieces of advice as the Technical panel, with the same title and the same intro. "Trace" is written as "follow". |
| What a tester can check | Bangla | PASS | The callout has the same six pieces of advice as the Technical panel, with the same title and the same intro. |

Open FAILs after round 8: 0

Not checked: the Bangla wording was judged by its meaning only, and none of the Bangla sentences were unclear to me. I did not check the shell scripts by running them.

Changed after this round: No FAIL in this round.

## Round 9 (2026-11-15)

# Voices fact check: devops / git-workflows (round 9)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Same facts and cites. Left out: "base tip" detail kept, but "dirty" meaning not explained; "maintenance branch" (the table says "the branch of an older release"); "revision and author" (the table says "who ... and in which commit"); "linear" (the table says "one straight line"); the numbers "dozens or hundreds" (the table says "Many"). |
| What it is | Bangla | PASS | Meaning matches the Technical panel. Cites are on the same facts. The table keeps "কয়েক ডজন বা কয়েকশো" and "maintenance branch". Nothing is added. |
| How it works | Layman | PASS | Facts match. Left out: "three-way merge", "most recent common ancestor" (the panel says "commit where the branches split"), "possibly" (the panel says "maybe"), "development cycle" (the panel says "work"), "binary search" not used in this section. The `git bisect run` table and the code blocks are the same as in the Technical panel. |
| How it works | Bangla | PASS | Meaning matches. Cites are right. Code blocks and table are the same as in the Technical panel. Nothing is added. "তৈরি হলে" is read as "when ready". |
| Try it | Layman | PASS | Facts match. "two ways" restates "twice" (the manual and `run` methods). Left out: "known" before bad and good commit; "also". "opens" stands for "checks out". Code blocks are the same as in the Technical panel. |
| Try it | Bangla | PASS | Meaning matches. Cites are on the same facts. Code blocks are the same as in the Technical panel. Nothing is added. |
| How a tester uses it | Layman | PASS | Facts match. "bisect can run on its own" restates "fully automate". "marks each line ... with the commit" restates "annotates ... with information from the revision". Left out: "maintenance branch", "dozens or hundreds" (the panel says "many"), "publicly visible". |
| How a tester uses it | Bangla | PASS | Meaning matches. Cites are right. Nothing is added. |
| Common mistakes | Layman | PASS | Facts match. Left out: "bisection state" (the panel says "cleans up"), "original HEAD", "stale" detail, "requires" (the panel says "needs"). "Uncommitted changes" restates "dirty tree". |
| Common mistakes | Bangla | PASS | Meaning matches. Cites are right. "বাতিল করে দেয়" matches "aborts". Nothing is added. |
| What a tester can check | Layman | PASS | The callout says it is the tutorial's own advice. It has the same six items. "follow" restates "trace". No new fact. |
| What a tester can check | Bangla | PASS | The callout says it is the tutorial's own advice. It has the same six items. No new fact. |

Open FAILs after round 9: 0

Not checked: I did not verify that every code block is character-for-character the same across panels. I compared them by reading, and they looked the same. The two FAILs in rows 13 and 69 are a strict reading of "folder" against S3's "path". The Layman and Bangla panels repeat those two claims.

Changed after this round: No FAIL in this round. The voices were changed with the fact fixes above.

## Round 10 (2026-11-15)

# Voices fact check: devops / git-workflows (round 10)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | The worktree row says "each in its own place on disk" and cites S3. S3 does not support it (see FACTCHECK row 10). Other rows match the Technical panel. Left out: "dozens or hundreds" (bisect row), "backporting" and "maintenance branch" (cherry-pick row), "author" (blame row, now "who"). |
| What it is | Bangla | FAIL | The worktree row says "প্রতিটা নিজের path-এ" and cites S3. S3 does not support it (see FACTCHECK row 10). I could read the rest, and it matches the Technical panel. Left out: "ডজন বা কয়েকশো" is kept, nothing else notable. |
| How it works | Layman | PASS | Every fact is in the Technical panel. Left out: "development cycle" (now "stage of the work"), "three-way", "most recent common ancestor" (now "the commit where the branches split"), "possibly", "reapply" detail, and the `-x` position "original". |
| How it works | Bangla | PASS | Meaning matches the Technical panel. "তৈরি হলে" for "when ready" and "শেষে" for the appended line are close enough. Left out: nothing beyond small wording. |
| Try it | Layman | PASS | Same facts as the Technical panel, and the code blocks are identical. "Two ways" restates "twice" for the by-hand and by-command runs. Left out: "checks out" (now "opens"), "path" (now "folder"). |
| Try it | Bangla | PASS | Same facts and identical code blocks. Left out: nothing notable. |
| How a tester uses it | Layman | FAIL | "each in its own place on disk" in the worktree paragraph cites S3, which does not support it (see FACTCHECK row 64). Also: "git blame shows" drops the Technical "can show" (still true). Left out: "dozens or hundreds", "fully automate" (now "run on its own"), "maintenance branch". |
| How a tester uses it | Bangla | FAIL | "প্রতিটা নিজের path-এ" in the worktree paragraph cites S3, which does not support it (see FACTCHECK row 64). The rest matches the Technical panel. |
| Common mistakes | Layman | PASS | Every fact is in the Technical panel. Left out: "original HEAD" (now "where you started"), "worktree information". |
| Common mistakes | Bangla | PASS | Same facts as the Technical panel. Left out: nothing notable. |
| What a tester can check | Layman | PASS | Same six items as the Technical callout. "Ask if" and "follow them" restate "ask whether" and "trace them". |
| What a tester can check | Bangla | PASS | Same six items and the same framing sentence as the Technical callout. |

Open FAILs after round 10: 4

Skipped: I did not read S6 in full for the "replays" sentence (row 22), and for row 74 I used the line numbers from the grep output. The Bangla panels were judged by meaning only. Risk: the worktree "own path" claim appears in four places (Technical and the voices), so fix them together.

Changed after this round: The 4 FAILs were the same phrase in the Layman and Bangla panels; it was removed from all panels.

## Round 11 (2026-11-15)

# Voices fact check: devops / git-workflows (round 11)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. Left out: "dozens or hundreds" (now "Many"), "maintenance branch" and "backporting" (now "Copying a fix to the branch of an older release"), the word "revision", and the word "author" (now "Who"). |
| What it is | Bangla | PASS | Same facts and cites as the Technical panel. Nothing is added. Left out: nothing of substance. |
| How it works | Layman | PASS | No added facts. Left out: "possibly" (now "maybe"), and "has been or will be released" (now "is or will be released"). "Common ancestor" is now "the commit where the branches split". The `-x` line is not named as appended to the "original" message. The code blocks match the Technical panel. The one-for-each-stage wording (flagged in the factcheck, row 14) is the same as in the Technical panel, so it adds nothing new. |
| How it works | Bangla | PASS | Same facts as the Technical panel. Code blocks are the same. "topic branch তৈরি হলে" ("when it is made/ready") stands for "when they are ready". "তৈরি" can mean either, so a reader may take it as "when created". The meaning is acceptable but not exact. Left out: "three-way" is kept; "original" in the `-x` sentence is dropped. |
| Try it | Layman | PASS | Same steps, commands and code blocks as the Technical panel. "Opens a commit" stands for "checks out". "Folder" stands for "path". The tutorial's output note is kept. Left out: "Read `price.txt`" is kept; "HEAD~7" has no explanation in either panel. |
| Try it | Bangla | PASS | Same facts, cites and code blocks as the Technical panel. Nothing is added. Left out: nothing of substance. |
| How a tester uses it | Layman | PASS | No added facts. "Bisect can run on its own" stands for "fully automate". "Marks each line with the commit that last changed it" is slightly narrower than "information from the revision that last modified it". Left out: "dozens or hundreds" (now "many"), and "maintenance branch" (now "the branch of an older release"). |
| How a tester uses it | Bangla | PASS | Same facts as the Technical panel. Nothing is added. Left out: "maintenance" is kept; nothing of substance is dropped. |
| Common mistakes | Layman | PASS | No added facts. "Aborts" is now "stops". "Leaves 255" is now "gives 255". The heading "Cherry-picking into a dirty tree" is now "with uncommitted changes". The meaning is the same. Left out: "original `HEAD`" (now "where you started"), and the "bisection state" wording. |
| Common mistakes | Bangla | PASS | Same facts as the Technical panel. "Aborts" is now "বাতিল করে". Left out: nothing of substance. |
| What a tester can check | Layman | PASS | The callout repeats the same six pieces of advice. It adds no tool fact. "Trace" is now "follow". |
| What a tester can check | Bangla | PASS | The callout repeats the same six pieces of advice. It adds no tool fact. |

Open FAILs after round 11: 0

Changed after this round: No FAIL in this round. The voices were changed with the fact fixes above.

## Round 12 (2026-11-15)

# Voices fact check: devops / git-workflows (round 12)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. Left out: "dozens or hundreds" (now "Many"), "maintenance branch", "binary search" in the stash/rebase rows. "Backporting" became "Copying". "Author" became "Who". |
| What it is | Bangla | PASS | Meaning matches the Technical panel. Left out: "maintenance branch". "Dozens or hundreds" is kept. |
| How it works | Layman | PASS | Left out: "known" before "contain the bug" and "good", "possibly", "three-way merge", "most recent common ancestor" (now "the commit where the branches split"), "original" before "commit message". "has been or will be released" became "is or will be released". |
| How it works | Bangla | FAIL | "topic branch তৈরি হলে `develop`-এ আনা হয়" says the topic branch is pulled in when it is "made" or created. The Technical panel says "when they are ready". "তৈরি" can mean "ready" or "created", so the meaning is ambiguous or different. Fix: "প্রস্তুত হলে". The rest matches. |
| Try it | Layman | PASS | Code blocks are identical to the Technical panel. Left out: "oldest" in the diagram steps is kept. "checks out" became "opens" and "has a match" became "finds the text". |
| Try it | Bangla | PASS | Code blocks are identical to the Technical panel. All facts and cites match. Left out: nothing of substance. |
| How a tester uses it | Layman | PASS | Left out: "dozens or hundreds", "fully" (automate), "backport", "maintenance branch", and the "can" in "can show" (blame). "Information from the revision" became "the commit". |
| How a tester uses it | Bangla | PASS | Meaning matches the Technical panel. Left out: nothing of substance. |
| Common mistakes | Layman | PASS | Left out: "exist" in "commits that exist outside your repository", and the "original HEAD" wording. The "dirty tree" heading became "uncommitted changes", which fits "clean working tree (no modifications from the HEAD commit)". |
| Common mistakes | Bangla | PASS | Meaning matches the Technical panel. "Abort" became "বাতিল করে দেয়". Left out: nothing of substance. |
| What a tester can check | Layman | PASS | The advice list matches the Technical callout, with the same title and lead-in. It adds no fact. |
| What a tester can check | Bangla | PASS | The advice list matches the Technical callout, with the same title and lead-in. It adds no fact. |

Open FAILs after round 12: 1

Not checked: I did not check the Bangla grammar beyond meaning. I read the git commands in the `git-workflows` page but did not run them.

Changed after this round: The FAIL was fixed: the Bangla panel says "প্রস্তুত হলে" (when ready), not "তৈরি হলে", which can also mean "when made".

## Round 13 (2026-11-15)

# Voices fact check: devops / git-workflows (round 13)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel, and the cites are the same. Left out: "attached to the same repository" is shortened to "of the same repository". "maintenance branch" is dropped from the cherry-pick row, which now says "Copying a fix to the branch of an older release". "revision and author" becomes "who ... and in which commit". |
| What it is | Bangla | PASS | Meaning matches the Technical panel. Left out: "base tip" and "dirty working directory" stay in English, and "maintenance branch" is shown in the cherry-pick row as "maintenance branch". Nothing is added. |
| How it works | Layman | FAIL | The merge sentence says "A merge compares the two newest snapshots with the commit where the branches split." The Technical panel says a merge "performs a three-way merge between" them. "Compares" is a different meaning, because a merge combines them. The cite (S6) is correct, so the fix is "A merge combines the two newest snapshots, using the commit where the branches split, into a new snapshot and commit". Smaller drift: "code that is or will be released" against the Technical "has been or will be released". The word "three-way" is also left out. |
| How it works | Bangla | PASS | Meaning matches the Technical panel, including the three-way merge, the 125 row and the exit-code table. Left out: nothing of note. The diagrams are the same as in the Technical panel. |
| Try it | Layman | PASS | Same facts, cites and code blocks as the Technical panel. "checks out" becomes "opens", and "reverts" becomes "puts back". Left out: the word "needs" ("You need only Git"), and "describes" is shortened. |
| Try it | Bangla | PASS | Same facts, cites and code blocks as the Technical panel. Left out: nothing of note. |
| How a tester uses it | Layman | PASS | Same facts as the Technical panel. "git blame shows which commit added that line" drops "can" and says "added" for "introduced", but it is still true. "Information from the revision" becomes "the commit". Left out: "fully automate" is shown as "can run on its own", and "publicly visible" is shown as "public". |
| How a tester uses it | Bangla | PASS | Meaning matches the Technical panel. Left out: nothing of note. |
| Common mistakes | Layman | PASS | Same facts and cites as the Technical panel. "local changes" becomes "your own changes". The heading "Cherry-picking into a dirty tree" becomes "with uncommitted changes". Left out: "returns you to the original HEAD" is shown as "takes you back to where you started". |
| Common mistakes | Bangla | PASS | Meaning matches the Technical panel. Left out: nothing of note. |
| What a tester can check | Layman | PASS | Same advice as the Technical callout, with the same title and no new tool fact. |
| What a tester can check | Bangla | PASS | Same advice as the Technical callout. I can read the Bangla well enough to judge it, and it adds nothing. |

Open FAILs after round 13: 1

Changed after this round: The FAIL was fixed in the Layman panel: a merge "does a three-way merge: it combines the two newest snapshots, using the commit where the branches split, into a new snapshot and a new commit", and stable code is code that "has been or will be released".

## Round 14 (2026-11-15)

# Voices fact check: devops / git-workflows (round 14)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Facts and cites match the Technical panel. Left out: "dozens or hundreds" (now "Many commits"); "maintenance branch" (cherry-pick row now says "the branch of an older release"); "revision and author" is now "Who ... and in which commit". |
| What it is | Bangla | PASS | Read and judged by meaning. Facts and cites match the Technical panel. Nothing material is left out. The bisect row keeps "dozens or hundreds". |
| How it works | Layman | PASS | Facts and cites match. Left out: "development cycle" (now "the work"); the word "parallel" (now "A second branch"); the names "C3/C4". Stated simply: "commit where the branches split" for "most recent common ancestor"; "drop" for "abandon". |
| How it works | Bangla | PASS | Read and judged by meaning. All facts match the Technical panel. Nothing is added. The word "শেষে" for "appends" is implied by "appends". |
| Try it | Layman | PASS | Code blocks are identical to the Technical panel. Facts and cites match. Left out: "inline" for `-m` is kept; "checks out" is now "opens" (Git "opens a commit in between", "opens it in the folder"), which is vaguer. "path" is now "folder". |
| Try it | Bangla | PASS | Read and judged by meaning. Code blocks are identical. Left out: "inline" in the `-m` description; the details that the script is the tutorial's own and the hash will differ are kept. Nothing is added. |
| How a tester uses it | Layman | FAIL | The "Pause your own work" sentence repeats the unsupported "urgent fix needs testing" with cite S7. S7 does not give that scenario (see factcheck row 62). Also, "`git blame` shows which commit added that line" drops the Technical "can show", a small limit. Left out: "dozens or hundreds"; "maintenance branch". |
| How a tester uses it | Bangla | FAIL | Read and judged by meaning. The same inherited problem: "জরুরি একটা fix test করতে হলে ... stash করে" carries cite S7, which does not support "urgent fix". The other sentences match the Technical panel. The blame sentence keeps "দেখাতে পারে" (can). |
| Common mistakes | Layman | PASS | Facts, limits ("By default", "may") and cites match. Left out: "bisection state" (now "cleans up"); the heading "Cherry-picking into a dirty tree" is now "with uncommitted changes", a plain restatement of the same rule. |
| Common mistakes | Bangla | PASS | Read and judged by meaning. Facts, limits and cites match. Nothing is added. |
| What a tester can check | Layman | PASS | Callout items are the same as the Technical panel. Wording only: "follow" for "trace"; "has only stable code" for "holds only stable code". |
| What a tester can check | Bangla | PASS | Read and judged by meaning. Callout items are the same as the Technical panel. Nothing is added. |

Open FAILs after round 14: 2

Skipped: I did not invoke the writing-style skill. Skill-tool access was not available to me in this session. Risk: the S4 "oldest" wording is a judgment call that I marked PASS (row 41).

Changed after this round: Both FAILs were fixed with the fact fix above, in all three panels; the Layman blame sentence keeps "can show".

## Round 15 (2026-11-15)

# Voices fact check: devops / git-workflows (round 15)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | The Layman panel restates Technical correctly. It leaves out "dirty" for stash, "dozens or hundreds" (it says "many"), "maintenance branch" and "backporting" (it says "branch of an older release"). It also shortens "revision and author" to "who ... in which commit". Cites match Technical. |
| What it is | Bangla | PASS | The meaning follows Technical. Every fact is present and cites match. It leaves out nothing important. |
| How it works | Layman | PASS | The meaning follows Technical. It leaves out "parallel", "development cycle", "one or more existing commits", "original" in the `-x` sentence, and "no difference in the end product" (it says "the same"). It turns "most recent common ancestor" into "the commit where the branches split". The `-x` sentence has the same missing conflict limit as Technical (see claim 26). Code blocks match Technical. |
| How it works | Bangla | PASS | The Bangla matches Technical, and the code blocks are identical. The `-x` sentence has the same missing conflict limit as Technical. I could read the Bangla well enough to judge it. |
| Try it | Layman | PASS | The panel adds no facts. It leaves out "This practice run needs" (it says "You need only"), "checks out" (it says "opens"), "path" (it says "folder"), and the `.git` wording stays. Code blocks are identical to Technical. Cites are the same. |
| Try it | Bangla | PASS | The panel follows Technical. Code blocks are identical. Cites match. It leaves out "inline" in the `-m` clause (it says "message-সহ"). |
| How a tester uses it | Layman | PASS | The panel adds no facts. It repeats the uncited "tutorial's tip" sentence from Technical, which is flagged in claim 59, so it adds nothing new. It leaves out "dozens or hundreds", "fully", "maintenance branch", "backport", and "revision ... information". |
| How a tester uses it | Bangla | PASS | The panel follows Technical. It repeats the uncited tip sentence, the same as Technical. It leaves out nothing important. |
| Common mistakes | Layman | PASS | The panel follows Technical. It says "your own changes" for "local changes". It leaves out "bisection state" (it says "cleans up"). It leaves out "original `HEAD`" (it says "where you started"). Its last heading says "uncommitted changes" for "dirty tree". |
| Common mistakes | Bangla | PASS | The panel follows Technical. Cites match. It leaves out nothing important. |
| What a tester can check | Layman | PASS | The six pieces of advice match Technical. It says "follow" for "trace". No facts are added. |
| What a tester can check | Bangla | PASS | The six pieces of advice match Technical, and the callout says it is the tutorial's own advice. No facts are added. |

Open FAILs after round 15: 0

Not checked: I did not re-check the Bangla grammar line by line, only the meaning. The `.git` and `git add` cite on claim 39 sits on the next clause; I counted it as covered.

Changed after this round: No FAIL in this round. The voices were changed with the fact fixes above.

## Round 16 (2026-11-15)

# Voices fact check: devops / git-workflows (round 16)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | All facts and cites match the Technical panel. Left out: "dozens or hundreds" (now "Many commits"); "maintenance" (cherry-pick row); "author" (blame row now says "Who"). Table wording is plainer ("Copying a fix" for "Backporting"), with the same meaning. |
| What it is | Bangla | PASS | Meaning matches the Technical panel. Cites are the same. Left out: nothing beyond wording. Bangla is read as stating the same facts. |
| How it works | Layman | PASS | Same facts, cites and diagrams. Left out: "parallel" (now "second branch"); "development cycle" (now "the work"); "most recent common ancestor" (now "the commit where the branches split"); "original" before commit message; "(old)/(new)" labels are kept. Code blocks and tables are identical. |
| How it works | Bangla | PASS | Same facts as the Technical panel. Left out: no fact dropped. "সবচেয়ে কাছের common ancestor" is the same meaning as "most recent". Code blocks and tables are identical. |
| Try it | Layman | PASS | Same facts, steps, code blocks and cites. Left out: "practice run" wording in the intro; "check out" becomes "opens"; "path" becomes "folder"; "match" becomes "finds the text". None of these changes the meaning. |
| Try it | Bangla | PASS | Same facts, steps, code blocks and cites. Left out: the intro word "practice run" is shortened; "inline" before "message" is dropped. No limit was lost. |
| How a tester uses it | Layman | PASS | Same facts and cites. Left out: "dozens or hundreds" (now "many"); "fully automate" (now "run on its own"); "maintenance branch" (now "branch of an older release"); "introduced" (now "added"). None of these changes the meaning. |
| How a tester uses it | Bangla | PASS | Same facts and cites. Left out: nothing beyond wording. "fully automate" is "পুরো কাজটা automate". |
| Common mistakes | Layman | PASS | Same facts and cites. Left out: "local" (now "your own"); "original" before `HEAD` (now "where you started"); "aborts" (now "stops"). Heading "Cherry-picking with uncommitted changes" restates "dirty tree"; the body still says "clean working tree". |
| Common mistakes | Bangla | PASS | Same facts and cites. Left out: nothing beyond wording. "অপরিষ্কার tree" matches "dirty tree"; "বাতিল করে" matches "aborts". |
| What a tester can check | Layman | PASS | The seven advice points match the Technical panel, with the same callout title and intro. There are no cites, as in the Technical panel. Left out: "trace" becomes "follow". |
| What a tester can check | Bangla | PASS | The seven advice points match the Technical panel, with the same callout title and intro. There are no cites, as in the Technical panel. Left out: no detail. |

Open FAILs after round 16: 0

Open FAILs: 0
