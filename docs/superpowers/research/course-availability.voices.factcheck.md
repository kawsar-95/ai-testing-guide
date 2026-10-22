# Voice fact-check: Availability (round 1, 2026-10-22)

Page: `content/course/availability.mdx`. I did not write the Layman and Bangla panels.

Method: I read each `<Voices>` block. For each claim in a `<Layman>` or `<Bangla>` panel, I found the `<Technical>` sentence of the same `##` section that it restates. A claim that is not in the Technical panel, or that changes a number, a condition, a name, a hedge, or a scope, is a FAIL. An omission is not a FAIL. For each `<Cite n>`, I checked that the Technical panel of the same section cites it. I did not re-check the sources: the Technical claims are in the report of the page. I read the Bangla for meaning and natural use (polite আপনি, technical terms in English). A Layman sentence is a FAIL if it is longer than 25 words. I measured the length with a script (cites and markup removed): no Layman sentence passes 25 words.

Checks:

- No TODO placeholder is left (`grep TODO`: 0).
- No heading in a Layman or Bangla panel (`npm test`, `tests/voice-source.test.ts`).
- The Technical text is unchanged: `git diff -U0 content/course/availability.mdx | grep '^-' | grep -v '^---'` shows no removed non-blank line.
- The "Key words" section has no voices.

Notes:

- Section 1, Layman: the text block with the 3 targets is a bullet list with the same numbers (525.6, 52.56, 5.256 minutes). I checked the arithmetic: 525,600 x 0.001 = 525.6; x 0.0001 = 52.56; x 0.00001 = 5.256. PASS.
- Section 4, Layman and Bangla: the number of the Technical tiers (10%, 30%, 100%; 99.99%, 99.0%, 95.0%; instance-level 99.5%) are the same in both voices.

| # | Section | Voice | Claim (English gloss for Bangla) | Technical sentence (quoted) | Verdict | Language |
|---|---|---|---|---|---|---|
| 1 | In plain words | Layman | Availability, nines, tenfold [1]; time-based 52.56 min [1]; request-based and its limits [1]; the arithmetic is the tutorial's own; SLI, SLO, SLA [2]; quick test [2] | The section | PASS | - |
| 2 | In plain words | Bangla | Same claims and cites [1][2] | Same | PASS | OK |
| 3 | When you need it | Layman | Target is a business decision [2]; do not aim for 100% [1]; cost can be 100 times more [1]; target is a floor and a ceiling [1] | "Do not aim for 100%. It is probably never the right target" | PASS | - |
| 4 | When you need it | Bangla | Same claims | Same | FAIL | "100% লক্ষ্য করবেন না" means "do not notice 100%" ("লক্ষ্য করা" = to notice). The Technical meaning is "do not aim for 100%". The meaning is wrong. |
| 5 | A real-life example | Layman | SLO 99.9% of quiz submissions; error budget 0.1% [1]; ship while budget remains [1]; EC2 99.99% region promise, "Monthly Uptime Percentage", "commercially reasonable efforts" (tutorial's own reading), single instance 99.5%, unavailable definition [3]; credit tiers 10%, 30%, 100%; instance table differs; claim, logs, only remedy, exclusions [3] | The section | PASS | - |
| 6 | A real-life example | Bangla | Same claims, same numbers and cites [1][3] | Same | PASS | OK |
| 7 | Common mistakes | Layman | 4 mistakes, cites [2][2][3]; dependency arithmetic 99.9% x 99.9% = 0.998001 (tutorial's own) | The 4 bullets | PASS | - |
| 8 | Common mistakes | Bangla | Same 4 mistakes | Same | FAIL | "বীরোচিত পরিশ্রম" for "heroic effort" is a word-for-word copy that reads as "heroic labour". "নকল করা" means "forged" and not "copied". The sentence is confusing. |
| 9 | What a tester can check | Layman | Own advice, 5 ideas, no cites | The Tutorial advice callout | PASS | - |
| 10 | What a tester can check | Bangla | Same 5 ideas | Same | PASS | OK |

Fixes applied (Bangla only):

- Row 4: "100% লক্ষ্য করবেন না।" is now "100%-কে target হিসেবে ঠিক করবেন না।"
- Row 8: "বর্তমান performance থেকে নকল করা target আপনাকে বীরোচিত পরিশ্রমে আটকে দিতে পারে" is now "বর্তমান performance থেকে হুবহু নেওয়া target আপনাকে প্রাণপণ চেষ্টায় (heroic effort) আটকে দিতে পারে".

## Re-check

| Row | Result |
|---|---|
| 4 | The new text means "do not set 100% as the target". It matches the Technical text. PASS. |
| 8 | The new text means "a target taken exactly from the present performance can lock you into an all-out effort". It matches the Technical meaning, and the English term is kept in brackets. PASS. |

Open FAILs: 0
