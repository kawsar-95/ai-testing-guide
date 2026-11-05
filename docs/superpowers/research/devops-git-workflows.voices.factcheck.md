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

Open FAILs: 0
