# Voice fact-check: SLA, SLO, and SLI (round 1, 2026-10-22)

Page: `content/course/sla-slo-sli.mdx`. I did not write the Layman and Bangla panels.

Method: I read each `<Voices>` block. For each claim in a `<Layman>` or `<Bangla>` panel, I found the `<Technical>` sentence of the same `##` section that it restates. A fact, number, name, example, or cite that Technical does not give, a dropped hedge that changes the meaning, or a wrong Bangla meaning is a FAIL. An omission is not a FAIL. I checked each `<Cite n>` against the cites of the same Technical panel. I did not re-check the sources: the Technical claims have their own report. I read the Bangla for meaning and natural use. The "Key words" section has no voices.

Page checks:

- No `TODO-LAYMAN` or `TODO-BANGLA` is left: PASS.
- No Markdown heading (`#` to `######`) in a Layman or Bangla panel (bold labels only): PASS.
- Technical text unchanged: `git diff -U0 content/course/sla-slo-sli.mdx | grep '^-' | grep -v '^---'` shows no removed line: PASS.
- Every `<Cite n>` in a Layman or Bangla panel is cited by Technical of the same block: PASS.
- Layman has no sentence over 27 words: PASS.

Notes: Layman restates Technical in the same order with shorter sentences, and turns the two tables into lists. A table or callout in Technical becomes a list or plain text in the voices. The Layman text is the same level of plain as the finished Architecture example. Bangla keeps the terms (SLI, SLO, SLA, percentile, error budget, rolling window) in English.

| # | Section | Voice | Verdict | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | PASS | Three terms, the quick test, and availability match Technical. "carefully defined" is dropped (omission). |
| 2 | In plain words | Bangla | PASS | Same claims and cites. "SLA violation" and "SLO" kept in English. |
| 3 | When you need it | Layman | PASS | Over- and under-reliance, the decision loop, and "even without an SLA" match. Cites 1 and 2 as in Technical. |
| 4 | When you need it | Bangla | FAIL | "কখন বা কাজ করা দরকার" drops "whether" from "whether or when to act". The meaning changes. |
| 5 | How it works | Layman | PASS | All numbers match: 50 ms, 5%, 20 times, 90% under 100 ms, 99% under 400 ms, 99.9%, 3 million, 3,000, 1,500, five or fewer. The table is a list with the same 4 rows. |
| 6 | How it works | Bangla | PASS | Same numbers and cites. "Median = 50th percentile", "100% minus the SLO", and the policy actions are correct. |
| 7 | Why an SLO should not be 100% | Layman | PASS | Four reasons, Chubby, and the tighter internal SLO match. The last sentence is split in two with the same meaning. |
| 8 | Why an SLO should not be 100% | Bangla | PASS | Same reasons and cites. "অবাস্তব এবং অবাঞ্ছিত" = unrealistic and undesirable. |
| 9 | A real-life example | Layman | PASS | 99.5%, 99%, 2 million, 0.5%, 10,000, 4,000, 40% match. "the tutorial's own" kept. |
| 10 | A real-life example | Bangla | PASS | Same numbers. |
| 11 | Common mistakes | Layman | PASS | Five bullets match, with the same cites (1, 1, 2, 1 and 2, 1). |
| 12 | Common mistakes | Bangla | PASS | Same five bullets. The hedge "the workbook allows it as a first step if you keep refining" is kept. |
| 13 | What a tester can check | Layman | PASS | Three tips match. The "tutorial's own advice, not a claim of the sources" line is kept. |
| 14 | What a tester can check | Bangla | PASS | Three tips match. |

## Re-check

| # | Fix (Bangla panel only) | Result |
|---|---|---|
| 4 | The text is now "SLO না থাকলে কাজ করা দরকার কি না, বা কখন দরকার, তা জানা যেত না". It says "whether" and "when". | PASS |

FAILs found: 1. Fixed: 1.

Open FAILs: 0
