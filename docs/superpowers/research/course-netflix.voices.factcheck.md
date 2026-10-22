# Voice fact-check: Netflix (round 1, 2026-10-22)

Page: `content/course/netflix.mdx`. I did not write the Layman and Bangla panels.

Method: I read the 6 `<Voices>` blocks. For each `<Layman>` and `<Bangla>` panel, I compared each claim with the `<Technical>` panel of the same `##` section. A fact, number, name, example, or cite that Technical does not give is a FAIL. A dropped hedge that changes the meaning is a FAIL. A wrong or confusing Bangla meaning is a FAIL. A Layman sentence of more than 25 words is a FAIL. An omission is not a FAIL. Every `<Cite n>` in a voice panel is a number that Technical of the same section cites. I did not re-check the sources: the Technical claims are not changed.

Mechanical checks:

- No `TODO` placeholder is left.
- No Markdown heading in any `<Layman>` or `<Bangla>` panel.
- `git diff -U0 content/course/netflix.mdx | grep '^-' | grep -v '^---'` shows no removed non-blank line. The Technical text is unchanged.
- No Layman sentence is over 25 words (script check; the longest is 23).
- The hedges "At the time of access", "the tutorial's own inference/reading", "not a statement of the docs", and "The Netflix document does not name the stream format" are kept in both voices.
- The numbers match Technical: 2011, more than a thousand ISPs, 1.5.18, 9AM to 3PM (Bangla: সকাল ৯টা থেকে বিকাল ৩টা), 2016, 2019, and 2026.

| # | Section | Voice | Result | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | PASS | The AWS and Open Connect split, the OCA description, "OCAs do not keep member data", 2011, and the two reasons match Technical. |
| 2 | In plain words | Bangla | PASS | Same. "চাহিদার আগেই content পাঠিয়ে রাখে" = "pushes content ahead of demand". |
| 3 | When you need it | Layman | PASS | Same two places, the free-of-charge sentence, "more than a thousand ISPs", and the tutorial's own lesson. |
| 4 | When you need it | Bangla | PASS | Same. "অনুমানযোগ্য" = predictable. "embedded OCA সবসময় উত্তর নয়" = "is not always the answer". |
| 5 | How it works | Layman | PASS | The 5 steps (a list, with the "tutorial's own summary" line), steering, fill, adaptive bitrate (DASH, HLS, RFC does not define the choice), Hystrix (maintenance mode, 1.5.18, resilience4j), and Chaos Monkey (Spinnaker, weighted coin flip, 9AM to 3PM) all match Technical. |
| 6 | How it works | Bangla | FAIL | "এই তালিকা Netflix-এর বর্ণনার tutorial-এর নিজস্ব সারসংক্ষেপ" is a garbled chain of possessives. The reader can mistake who wrote the summary. The rest of the block is correct. |
| 7 | A real-life example | Layman | PASS | Same story. Technical sentences are split in two. No new fact. |
| 8 | A real-life example | Bangla | PASS | Same story. "নিচের একটি quality level" = "a lower quality level". |
| 9 | Common mistakes | Layman | PASS | The 4 points and the hedges match. |
| 10 | Common mistakes | Bangla | FAIL | "এই বিষয়গুলো source-গুলোর tutorial-এর নিজস্ব পাঠ" has the same garbled chain of possessives. The 4 points are correct, with the hedges kept. |
| 11 | What a tester can check | Layman | PASS | The 5 test ideas and the "Expected" results match. No cite. |
| 12 | What a tester can check | Bangla | PASS | Same. "বড়জোর অল্প একটু বিরতি" = "at most a short pause". |

Round 1: 2 FAILs (rows 6 and 10).

## Re-check

| Row | Fix | Result |
|---|---|---|
| 6 | The sentence now reads "এই তালিকা Netflix-এর বর্ণনার একটি সারসংক্ষেপ, যা tutorial নিজে লিখেছে।" It says clearly that the tutorial wrote the summary. | PASS |
| 10 | The sentence now reads "এই বিষয়গুলো source-গুলোর ব্যাখ্যা, যা tutorial নিজে করেছে।" It says clearly that the reading is the tutorial's own. | PASS |

`node --test tests/voice-source.test.ts tests/course.test.ts` passes.

Open FAILs: 0
