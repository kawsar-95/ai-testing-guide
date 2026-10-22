# Voice fact-check: System Design Interviews (round 2, 2026-10-22)

Page: `content/course/interview-intro.mdx`. I did not write the voices. This report replaces the old one. The Bangla panels were rewritten in the course term style.

Method: I read the 7 `<Voices>` blocks. For each `<Layman>` and `<Bangla>` panel, I compared every claim, number, name, example, and `<Cite n>` with the `<Technical>` panel of the same block. I checked the Bangla for meaning, grammar, address form (আপনি), concept words in Bangla letters, and acronym, product, and code names in English. I counted the words of each Layman sentence (limit 25). I did not re-check the sources: the Technical claims are in `course-interview-intro.factcheck.md`. The "Key words" section has no voices.

Structure checks:

- `<Technical>` unchanged: each non-blank line of the 7 `<Technical>` bodies is also in `git show HEAD:content/course/interview-intro.mdx`. No line changed.
- No TODO placeholder. No heading in a Layman or Bangla panel. No `তুমি` form.
- Cites: every `<Cite n>` in a Layman or Bangla panel is also cited by the Technical panel of the same block (n is 1 or 2).
- Hedges and scope kept: "the tutorial's own" labels, "Amazon can change its process", "The workbook describes Google's design practice, not its interviews", and "check the page again before you rely on this".
- The Technical table and code block become a list in Layman and Bangla. The rows and steps are the same.

| # | Section | Voice | Verdict | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | FAIL (fixed) | One sentence had 28 words ("The page says that software systems often need components, ... APIs or processes"). Limit is 25. |
| 2 | In plain words | Bangla | PASS | Same facts, cites, and the 6 objectives. "interview loop" in parentheses at first use. |
| 3 | When you need it | Layman | PASS | Same advice, same figures (90 min, 20 min, 8 min, 4 x 55 min), cite 1. |
| 4 | When you need it | Bangla | PASS | Same figures. The hedge "Amazon তার প্রসেস বদলাতে পারে" is kept. |
| 5 | How it works | Layman | FAIL (fixed) | One sentence had 30 words ("Its sample questions include who the system is for, ..."). Limit is 25. |
| 6 | How it works | Bangla | FAIL (fixed) | "ডেটা ফ্লোর ওপর" reads as "data floor" (ফ্লোর = floor), not "data flow". |
| 7 | In an interview | Layman | PASS | Same 3 points, same arithmetic (100 million, 86,400 s, about 1,200 a second). |
| 8 | In an interview | Bangla | PASS | Same numbers and "this arithmetic is the tutorial's own". |
| 9 | A real-life example | Layman | PASS | Same example (50,000 students, every 30 s, about 1,700 saves a second). Same links. |
| 10 | A real-life example | Bangla | PASS | Same numbers. Link text stays as in Technical. |
| 11 | Common mistakes | Layman | PASS | 5 bullets, same cites (1, 1, 1, 1, 2). |
| 12 | Common mistakes | Bangla | FAIL (fixed) | Bullet 5 said "NALSD chapter বলে": "chapter" is a common word left in English. Now "NALSD অধ্যায় বলে" (see Re-check). The rest is the same: "happy path" has the English term at first use. |
| 13 | What a tester can check | Layman | PASS | 5 questions with expected results, same. No cites. |
| 14 | What a tester can check | Bangla | PASS | 5 questions, same. Notes that it is the tutorial's own advice. |

Note: the Bangla for "Google says that in practice it moves back and forth" and "should turn a whiteboard drawing into ... estimates" use "আগে-পিছে যায়" and "বদলাতে হবে". These are acceptable renderings, so I did not fail them.

## Re-check

| # | Fix | Result |
|---|---|---|
| 1 | Layman split into 2 sentences: "The page lists what software systems often need. These are components, ... and APIs or processes". The longest is now 21 words. | PASS. Same facts, cite 1 kept. |
| 5 | Layman split: "... who the system is for and which features the customer expects. They also include which qualities the customer assumes but does not say, such as speed and security". The longest is now 18 words. | PASS. Same facts, cite 1 kept. |
| 6 | Bangla: "ডেটা ফ্লো-র ওপর". | PASS. The meaning is "data flow". |
| 12 | Bangla: "NALSD অধ্যায় বলে". | PASS. The meaning is "chapter". |

A script check of the Layman panels now shows 24 words as the longest sentence. `<Technical>` is still unchanged. I ran `node --test tests/voice-source.test.ts tests/course.test.ts`: 29 pass, 0 fail.

Found: 4 FAILs (rows 1, 5, 6, 12). Fixed: 4.

Open FAILs: 0
