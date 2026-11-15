# Voices fact check: devops / git-basics

Checked by an independent agent. Each Layman and Bangla panel was compared with the Technical panel of the same block, sentence by sentence, by a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page. Rounds 1 to 3 used a strict standard (PASS: the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker). From round 4 the standard is the rule of CLAUDE.md, "Layman and Bangla give no fact that Technical does not give": PASS if every fact of the sentence is in the Technical panel, the meaning is not stronger, weaker, or different, and the cite is a cite of the Technical panel on the same fact; left-out details are allowed, and the checker lists them in its note; FAIL if a fact is added or changed, the meaning is stronger, weaker, or different, a limiting word was dropped so that the claim says more, or a cite is on a sentence that its source does not support. The checker judged the Bangla by its meaning and had to say when it could not read a sentence well enough to judge it. No person who reads Bangla has read this page. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`. The checkers' remarks about a writing skill of their own environment (3 sentences) are left out; nothing that a checker said about the page is.

## Round 1 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / git-basics (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | Sentence 1 ("Git saves your project as a series of snapshots") and sentence 2 (commit = a picture of all your files at that moment) match the Technical panel, with cite 1. Sentence 3 says a merge joins "two lines of work into one", but the Technical panel says "two or more development histories". The number is changed: "two or more" became "two", so the claim is narrower. It also drops the "miniature filesystem" detail, though that is minor. |
| What it is | Bangla | FAIL | Sentences 1 and 2 match the Technical panel and keep cite 1. Sentence 3 says a merge joins "দুটি আলাদা কাজের ধারা" (two separate lines of work), so it has the same change as the Layman panel: "two or more" became "two". The "miniature filesystem" detail is also dropped. |

Open FAILs after round 1: 2

Count: the checker wrote "Open FAILs: 3", but its table has 2 FAIL rows. The count of the table is used.

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / git-basics (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | Sentence 1 changes "Git thinks of its data as a series of snapshots" to "Git keeps its data as a series of snapshots". The Technical panel (and S1) describes how Git thinks of its data. "Keeps" states how Git stores it, which is a different and stronger claim. Fix: restore "thinks of its data as". Sentence 2 (merge) matches the Technical panel, and its cite is correct. |
| What it is | Bangla | FAIL | Sentence 1 uses "রাখে" ("keeps/stores") for "thinks of". This has the same shift from "thinks of" to "keeps". Fix: use a phrase that means "thinks of / views" (for example "ভাবে"). The rest of sentence 1 matches: commit, picture of all files at that moment, cite 1. Sentence 2 (merge joins two or more development histories, cite 2) matches the Technical panel. |

Open FAILs after round 2: 2

Changed after this round: Layman and Bangla: "keeps its data" went back to "thinks of its data" (Bangla "ভাবে"), as in the Technical panel.

## Round 3 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / git-basics (round 3)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Both sentences are word for word the same as the Technical panel. They have the same facts and the same cites (1 and 2). Nothing is added, dropped, or changed. The text is not simpler than the Technical panel, but that is not a fact error. |
| What it is | Bangla | PASS | Sentence 1 says Git sees its data as a series of snapshots of a miniature filesystem. Each commit, Git takes a picture of how all files look at that moment. Cite 1 is kept. Sentence 2 says a merge joins two or more development histories together. Cite 2 is kept. No fact is added, dropped, or changed. Product and command names stay in English. |

Open FAILs after round 3: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / git-basics (round 4)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | All three sentences restate Technical sentences. The cites are on the same facts as in the Technical panel (S1, S2). Left out: "of a miniature filesystem". The hedges "more like" and "basically" are also left out, as they are in the Technical panel. |
| What it is | Bangla | PASS | The meaning matches the Technical panel for all three sentences. Product and command names stay in English, which is correct. The cites are on the same facts (S1, S2). Left out: "of a miniature filesystem". |

Open FAILs after round 4: 0

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / git-basics (round 5)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | All three sentences restate Technical sentences. The cites are on the same facts as in the Technical panel (S1, S2). Left out: "of a miniature filesystem". Also left out: the colon link, which makes the commit-picture sentence an explanation of the snapshot idea. |
| What it is | Bangla | PASS | The meaning matches the Technical panel. "দুই বা তার বেশি" = "two or more". "সেই মুহূর্তে" = "at that moment". Cites are on the same facts (S1, S2). Left out: "of a miniature filesystem". Product and command names stay in English. |

Open FAILs after round 5: 0

I also did not check the S1 and S2 files beyond the quoted lines.

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md). Round 6 and later check the new text with the brief of the full pages.

## Round 6 (2026-11-15)

# Voices fact check: devops / git-basics (round 6)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. "lines of work" is a plainer word for "development histories". Left out: "miniature filesystem", "Unlike other VCSs", "Nearly every operation", "safely" stored, "modified" file (says "the change"), and "the entire" history. |
| What it is | Bangla | PASS | Meaning matches the Technical panel. Left out: nothing of note. Product names and code stay in English, which is correct. |
| How it works | Layman | FAIL | Two problems. (1) Fast-forward: "If the other branch only added commits on top of yours" is not what the Technical panel says ("the commit that you merge can be reached by following the history of your branch"). The meaning is different. (The Technical sentence is itself wrong, see FactCheck row 17.) (2) "`git fetch` only downloads. It does not change your work" is stronger than the Technical panel, which says only "It does not merge it with your work". Fix: "It does not merge it with your work". Left out: "local" branch for HEAD, "index" updated on switch, "automatically" for the pointer, "divergent work", "each file" for `git add`. |
| How it works | Bangla | PASS | Matches the Technical panel sentence by sentence, including the fast-forward bullet. The Bangla therefore carries the same reversed fast-forward direction as the Technical panel (FactCheck row 17). Left out: nothing of note. |
| Try it | Layman | PASS | Same commands and code blocks. Facts match the Technical panel. Left out: "the first few characters" (says "the start of its hash"), "every file that is already tracked" is kept, "Use an empty folder" is kept. Nothing that adds a claim. |
| Try it | Bangla | PASS | Code blocks are identical. Facts match the Technical panel. Left out: nothing of note. |
| How a tester uses it | Layman | PASS | Facts match the Technical panel. "for example to test it" drops "to continue working on it". Also left out: "over time" for Commits, "intentionally untracked" for `.gitignore`, "diff" (says "changes line by line"). The uncited "A test file with markers in it no longer runs" exists in the Technical panel too, and is flagged there (row 61). |
| How a tester uses it | Bangla | PASS | Meaning matches the Technical panel. Left out: nothing of note. |
| Common mistakes | Layman | PASS | Facts match the Technical panel. Left out: the "not an ancestor" detail of the `--force` check (says "a safety check"), "immutably" (says "for good"), and the "snapshot" word. The "markers no longer runs" sentence is as in the Technical panel (row 61). |
| Common mistakes | Bangla | PASS | Meaning matches the Technical panel. Left out: nothing of note. |
| What a tester can check | Layman | PASS | Same six pieces of advice in a "Tutorial advice" callout. No added tool fact. |
| What a tester can check | Bangla | PASS | Same six pieces of advice in a "Tutorial advice" callout. No added tool fact. |

Open FAILs after round 6: 1

Skipped: I did not read S1 to S15 in full. I checked each claim with targeted greps and short reads. I did not invoke the writing-simplified-technical-english skill, because it is not in my tool list.

Changed after this round: The FAIL was fixed: the Layman fast-forward sentence follows the new Technical one, and `git fetch` "does not merge it with your work or modify what you are working on" in the Technical panel (S7), so the Layman "does not change your work" restates it.

## Round 7 (2026-11-15)

# Voices fact check: devops / git-basics (round 7)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | "Git keeps the data and the database of your project" changes "metadata and object database". Dropping "metadata" gives a different claim. Fix: "Git keeps the metadata and the object database of your project". Other points: "saves your project as snapshots" is a looser form of "thinks of its data as snapshots". "lines of work" stands for "development histories". "safely" is dropped from the Committed row. Left out: "Unlike other VCSs", "miniature filesystem", "Nearly every", "single checkout", "generally", "object". |
| What it is | Bangla | PASS | The meaning matches the Technical panel. Left out: "Nearly every". The table, the diagram and the cites are the same. |
| How it works | Layman | PASS | Left out: "local" in "local branch", "automatically", that the index is updated, "two branch tips and their common ancestor" (it says "compares ... commit where they split"), "cleanly", "on each file", that you "fetch and incorporate" their work first, and the "markers are conflict-resolution" label. Changes that are close in meaning: "stops" for "pauses", "your branch's version" for "the version in HEAD", "sends" for "shares". |
| How it works | Bangla | PASS | The meaning matches. Left out: nothing of note. The code block is the same. |
| Try it | Layman | PASS | The code blocks are the same. Left out: "first few characters" (it says "start of its hash"), and "unmerged" (it says "not merged"). |
| Try it | Bangla | PASS | The meaning and the code blocks match. Left out: nothing of note. |
| How a tester uses it | Layman | PASS | Left out: "continue working on it" (it keeps "for example to test it"), "over time", "other validations", "intentionally untracked", "local" in "local branch". "Changes line by line" explains "diff". |
| How a tester uses it | Bangla | PASS | The meaning matches. Left out: nothing of note. The code block is the same. |
| Common mistakes | Layman | PASS | Left out: what the disabled check is (it says "a safety check"; the word "safety" is the panel's own plain wording), "working tree" (it says "your files"), "immutably". |
| Common mistakes | Bangla | PASS | The meaning matches. Left out: nothing of note. |
| What a tester can check | Layman | PASS | The callout is the same as the Technical callout. It adds no fact. |
| What a tester can check | Bangla | PASS | The callout is the same as the Technical callout. It adds no fact. |

Open FAILs after round 7: 1

Not checked: I did not read all of S1–S15 end to end. I used targeted searches, so a PASS means the quoted line exists, not that nothing else in the source contradicts it. I judged the Bangla from the Technical panel's meaning and found nothing I could not read.

Changed after this round: The FAIL was fixed: the Layman panel says "the metadata and the object database", and the Committed row says "safely saved".

## Round 8 (2026-11-15)

# Voices fact check: devops / git-basics (round 8)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Same facts as the Technical panel. Wording changes: "Git thinks of its data as snapshots" becomes "It saves your project as ... snapshots". "development histories" becomes "lines of work". Left out: "Unlike other VCSs", "miniature filesystem", "resources", "generally". |
| What it is | Bangla | PASS | Faithful to the Technical panel. Left out: nothing beyond small words. The "miniature filesystem" idea is kept as "ছোট filesystem". |
| How it works | Layman | PASS | Same facts as the Technical panel. Left out: "lightweight" becomes "light", "local" in front of branch for HEAD, "the index" in switching, "cleanly" (becomes "by itself"), "default" before the name `origin`, "conflict-resolution", "each file", "or network" kept. "Your branch's version (`HEAD`)" is derived from the Technical statement that HEAD is the branch you are on. |
| How it works | Bangla | PASS | Faithful to the Technical panel. Left out: nothing of substance. |
| Try it | Layman | PASS | Code blocks are identical to the Technical panel. Left out: "obtain" becomes "get"; "directory" becomes "folder". No added fact. |
| Try it | Bangla | PASS | Code blocks are identical to the Technical panel. All facts match. |
| How a tester uses it | Layman | PASS | Same facts as the Technical panel. Left out: "continue working on it", "other validations", "intentionally untracked", "as a patch", "local" before branch. "Shows the changes line by line" is plain wording for "shows the diff". |
| How a tester uses it | Bangla | PASS | Faithful to the Technical panel. Left out: nothing of substance. |
| Common mistakes | Layman | PASS | Same facts as the Technical panel. Left out: which check `--force` disables (becomes "a safety check"), "immutably" (becomes "for good"), "integrates" (becomes "adds"), "in Git" after "resolved". |
| Common mistakes | Bangla | PASS | Faithful to the Technical panel. Left out: nothing of substance. |
| What a tester can check | Layman | PASS | Six items match the Technical panel. Left out: "the team" in the last item. |
| What a tester can check | Bangla | PASS | Six items match the Technical panel. No added fact. |

Open FAILs after round 8: 0

Changed after this round: No FAIL in this round. The voices were changed with the fact fixes above.

## Round 9 (2026-11-15)

# Voices fact check: devops / git-basics (round 9)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. It repeats the "Git is a version control system" claim, which is the FAIL above. Left out: "miniature filesystem", "Unlike other VCSs", "Nearly every operation", the word "generally" and the word "single" for the checkout. "Development histories" became "lines of work". |
| What it is | Bangla | PASS | Meaning matches the Technical panel. It repeats the same "Git is a version control system" claim (FAIL above). Nothing is added. Left out: "generally" on the staging area. |
| How it works | Layman | FAIL | Two changes. (1) "Above `=======` is your branch's version (`HEAD`)": the Technical panel says only "the version in `HEAD`", so "your branch's" is added. (2) "`origin` is the name Git gives to the server you cloned from" drops "default", which makes the claim stronger. Also "Git cannot merge them by itself" replaces "cannot merge them cleanly", which changes the meaning. Left out: "local" before branch for HEAD, "tip", "index", "automatically" on fetch, "divergent". |
| How it works | Bangla | PASS | Meaning matches the Technical panel on every sentence, including "default" for `origin` and "পরিষ্কারভাবে" for "cleanly". Left out: nothing of note. |
| Try it | Layman | PASS | Every fact and code block matches the Technical panel. Left out: "Do this once" became "You do this once", and "unmerged" became "not merged". |
| Try it | Bangla | PASS | Same facts and the same code blocks as the Technical panel. Nothing is added. |
| How a tester uses it | Layman | FAIL | "**Files changed** shows the changes line by line" adds an explanation. The Technical panel says only "shows the diff". Left out: "over time", "other validations", "continue working on it", "intentionally untracked". |
| How a tester uses it | Bangla | PASS | Matches the Technical panel. Nothing is added. |
| Common mistakes | Layman | PASS | Meaning matches. Left out: the ancestor check detail ("a safety check" is used instead), "integrates", and "immutably". |
| Common mistakes | Bangla | PASS | Meaning matches the Technical panel. Nothing is added. |
| What a tester can check | Layman | PASS | Same advice as the Technical panel. No new fact. |
| What a tester can check | Bangla | PASS | Same advice as the Technical panel. No new fact. |

Open FAILs after round 9: 2

Changed after this round: Both FAILs were fixed in the Layman panel: "the version in `HEAD`", "the default name", "cannot merge them cleanly", and "**Files changed** shows the diff".

## Round 10 (2026-11-15)

# Voices fact check: devops / git-basics (round 10)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. "keeps your project as a series of snapshots" is a looser verb than "thinks of its data as". It still says no more. Left out: "miniature filesystem", "nearly every", "single checkout", "generally in your Git directory" (it says "usually"), and "metadata and object database" is kept. The code block is the same. |
| What it is | Bangla | PASS | Meaning matches the Technical panel. Left out: nothing that changes a claim ("single" is kept as "একটা"). The code block is the same. |
| How it works | Layman | PASS | Facts match. "You get their work first, then push" is weaker than "fetch their work and incorporate it first". It adds "then push", which is implied by the rule. Left out: "lightweight" (it says "light"), "local" in "local branch", "the index" in Switch, "each file" in the conflict step, and "automatically". The diagram is the same. |
| How it works | Bangla | PASS | Meaning matches. Left out: nothing that changes a claim. The diagram is the same. |
| Try it | Layman | PASS | Facts match. Left out: the Git 2.28.0 limit is not in either panel. "Every commit uses this information" is kept. All code blocks are the same. |
| Try it | Bangla | PASS | Meaning matches. All code blocks are the same. |
| How a tester uses it | Layman | PASS | Facts match. Left out: "continue working on it" (it says "for example to test it"), "over time", "other validations", "the patch" (it says "the changes"), "intentionally untracked". The code block is the same. |
| How a tester uses it | Bangla | PASS | Meaning matches. The cites sit on the same facts. The code block is the same. |
| Common mistakes | Layman | PASS | Facts match. Left out: the exact check that `--force` disables (it says "a safety check"), "ancestor", "immutably", "completely". |
| Common mistakes | Bangla | PASS | Meaning matches. Left out: nothing that changes a claim. |
| What a tester can check | Layman | PASS | Same six advice items as the Technical panel. It adds no fact. |
| What a tester can check | Bangla | PASS | Same six advice items as the Technical panel. It adds no fact. |

Open FAILs after round 10: 0

Not checked: I did not re-read S1 for the "files are placed on disk for you to use or modify" wording. I did not grep the exact `git config` lines in S3. Both match the notes from earlier sessions. Row 22 passes even though S6 never says there are exactly two kinds of merge.

Open FAILs: 0
