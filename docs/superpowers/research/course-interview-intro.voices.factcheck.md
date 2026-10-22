# Voice fact-check: System Design Interviews (round 1, 2026-10-22)

Page: `content/course/interview-intro.mdx`. I did not write the Layman and Bangla panels.

Method: I read the 7 `<Voices>` blocks. For each sentence in a `<Layman>` or `<Bangla>` panel, I found the `<Technical>` sentence of the same `##` section that it restates. A fact, number, name, example, or cite that Technical does not give is a FAIL. A dropped hedge, a wrong meaning, or a term that is translated in a confusing way is a FAIL. An omission is not a FAIL. A script checked that each `<Cite n>` in Layman and Bangla is also cited in Technical of the same block, that no panel has a Markdown heading, and that no `TODO` placeholder is left. The "Key words" section has no voices.

Checks of the file:

- No TODO placeholder is left. PASS.
- No heading in a Layman or Bangla panel. PASS.
- Cites: every `n` in Layman and Bangla is cited in Technical of the same block. PASS (7 blocks).
- Technical unchanged: `git diff -U0 content/course/interview-intro.mdx | grep '^-' | grep -v '^---'` shows no removed line. PASS.
- Numbers checked in both voices: 90 min, 20 min, 8 min, 4 interviews of 55 min, 2x and 10x growth, 10 million users, 10 requests, 86,400 s, 1,200 requests a second, 50,000 students, 30 s, 1,700 saves a second. All match Technical.
- The "(tutorial's own)" labels and the Amazon and Google attributions are kept in both voices. The warning that the workbook describes Google's practice, not its interviews, is kept.

| # | Section | Voice | What I checked against Technical | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | Plan a whole system; Amazon SDE II components list [1]; at least one systems design question; interviewer asks, you ask [1]; objectives; breadth plus one area [1] | PASS | Same claims. |
| 2 | In plain words | Bangla | Same claims | PASS | Meaning is right. |
| 3 | When you need it | Layman | Own advice; Amazon process (accessed date) [1]; "can change"; 3 table rows as a list | PASS | The table becomes a list. All values match. |
| 4 | When you need it | Bangla | Same claims | FAIL, fixed | "তা এই (accessed 2026-10-22)" is a broken sentence. It does not say that the process is given below. |
| 5 | How it works | Layman | 5 steps (tutorial's own order) and the 5 step paragraphs with cites [1] [2] | PASS | The text block becomes a numbered list with the same content. The NALSD two phases, "move back and forth" [2], the CAP link, and the Sharding link are kept. |
| 6 | How it works | Bangla | Same claims | PASS | Terms stay in English. The hedges are kept: "may", "probably", "suggests". |
| 7 | In an interview | Layman | 3 bullets; [1] on bullets 1 and 2; arithmetic is the tutorial's own | PASS | Same numbers. |
| 8 | In an interview | Bangla | Same bullets | PASS | Same numbers. |
| 9 | A real-life example | Layman | Own example; questions; 50,000 students; 30 s; about 1,700 saves a second; 4 boxes; deep dive on answer-save; compare click vs batch; SLA link | PASS | Same claims. |
| 10 | A real-life example | Bangla | Same claims | PASS | Same numbers. |
| 11 | Common mistakes | Layman | 5 bullets with cites [1] [1] [1] [1] [2]; "tutorial's own reading" | PASS | Same text as Technical. |
| 12 | Common mistakes | Bangla | Same bullets | FAIL, fixed | "শুধু সুখের পথ" is a word-for-word translation of "happy path". It is a testing term and the reader can not guess it. |
| 13 | What a tester can check | Layman | 5 questions with expected results; "tutorial's own advice, not a claim of the sources" | PASS | Same text as Technical. |
| 14 | What a tester can check | Bangla | Same questions | PASS | Same meaning. |

## Re-check

| # | Fix | Result |
|---|---|---|
| 4 | The Bangla now says "Amazon তার page-এ (accessed 2026-10-22) যে SDE II process বর্ণনা করেছে, তা নিচে দেওয়া হলো" | PASS. Complete sentence. Same cite [1]. |
| 12 | The Bangla bullet now starts "**শুধু happy path।**" | PASS. The term stays in English. |

Open FAILs: 0
