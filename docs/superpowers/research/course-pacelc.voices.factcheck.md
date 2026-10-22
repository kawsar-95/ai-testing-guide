# Voice fact-check: The PACELC Theorem (round 1, 2026-10-22)

Page: `content/course/pacelc.mdx`. I did not write the Layman and Bangla panels.

Method: I read the 7 `<Voices>` blocks. For each block and voice, I compared the panel with the `<Technical>` panel of the same `##` section. A fact, number, name, example or cite that Technical does not give is a FAIL. A dropped hedge, a wrong meaning, a confusing translation, and a long or not plain Layman sentence are also FAILs. An omission is not a FAIL. I did not re-check the sources. The Technical claims are for the fact-check of the page.

Mechanical checks (script and `git diff`):

- No `TODO` placeholder is left.
- No heading in a Layman or Bangla panel.
- Each `<Cite n>` in Layman and Bangla is cited by Technical of the same block (7 of 7 blocks). The page has one source, so every cite is `n={1}`.
- `git diff -U0 content/course/pacelc.mdx | grep '^-' | grep -v '^---'` prints nothing. Technical is unchanged.
- No Layman sentence is longer than 28 words (the one long hit of the script was a list intro, not a sentence).

Notes:

- Sections 3 and 5: Layman and Bangla replace the tables with lists. The same rows, the same cites, and the same systems. Section 5 changes "This table" to "This list". PASS.
- Section 5: the hedges are kept: "as first built", "some became adjustable later", "the paper's 2012 view, not a statement about any product today", "four times higher or more", "neither CAP nor PACELC explains every trade-off".
- Section 7: no callout in Layman and Bangla. They keep the line "the tutorial's own advice". PASS.

| # | Section | Voice | Claim | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | PACELC rewrites CAP as one question with two parts (P: A or C; E: L or C); CAP limits only some failures; second trade-off is always present [1] | PASS | Same text as Technical, with one sentence split in two. |
| 2 | In plain words | Bangla | Same | PASS | The 5 letters stay in English. "নইলে" = Else. |
| 3 | When you need it | Layman | Read about or test on a distributed database; a partition is somewhat rare, often rarer than other serious failures [1]; PACELC also describes normal running | PASS | The hedges "somewhat" and "often" are kept. |
| 4 | When you need it | Bangla | Same | PASS | "কিছুটা বিরল" and "প্রায়ই" keep the hedges. |
| 5 | How it works | Layman | Chain of the paper: copies, when a write is done [1]; synchronous and asynchronous costs [1]; quorum rule with R + W and N [1]; wide area network cannot avoid it; availability and latency are nearly the same [1] | PASS | Same claims. The two table rows are 2 bullets with the same text. |
| 6 | How it works | Bangla | Same | PASS | "N টি replica", "W টি node", "R টি node" match. "পুরোনো data" = old data. |
| 7 | A real-life example | Layman | Stock in two data centers (Asia, Europe); EC, EL, and partition (PC, PA) cases; "tutorial's own, a simplification" | PASS | Same example. |
| 8 | A real-life example | Bangla | Same | FAIL (first check) | "system বিক্রি নিশ্চিত করার জন্য Asia-র অপেক্ষা করে" is not correct Bangla. "Asia-র অপেক্ষা করে" can read as "Asia's wait". Technical: "waits for Asia to confirm the sale". |
| 9 | Trade-offs | Layman | 4 labels with their systems [1]; "2012 view" hedge; PC does not mean fully consistent; PA/EL can be tuned; Cassandra study (4 times or more); neither CAP nor PACELC explains everything [1] | PASS | Same systems and labels as the table. The wording "The paper puts X here" is a plain form of the column "Systems the paper puts here". |
| 10 | Trade-offs | Bangla | Same | PASS | System names and labels stay in English. "চার গুণ বা তার বেশি" = four times or more. |
| 11 | Common mistakes | Layman | 3 mistakes [1] | PASS | Same claims. |
| 12 | Common mistakes | Bangla | Same | PASS | Meaning is right. |
| 13 | What a tester can check | Layman | 5 test ideas, "tutorial's own, not from the paper" | PASS | Same 5 ideas. |
| 14 | What a tester can check | Bangla | Same | PASS | "দুবার হওয়া update" = doubled updates. |

## Re-check

I fixed 1 FAIL. I edited only the Bangla panel.

| # | Fix | Re-check |
|---|---|---|
| 8 | Bangla: "system অপেক্ষা করে, যতক্ষণ না Asia বিক্রি নিশ্চিত করে।" | PASS. The meaning is "the system waits until Asia confirms the sale". |

After the edit: no heading in Layman or Bangla, no `TODO`, and every `<Cite n>` still matches Technical. Technical is unchanged (the `git diff` check prints nothing).

FAILs found: 1. Fixed: 1.

Open FAILs: 0
