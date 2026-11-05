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

Open FAILs: 0
