# Voice fact-check: CI/CD for AI

Page: `content/ai-engineering/ci-cd-for-ai.mdx`. Checked 2026-10-28 by an agent that did not write the page or its voices.

Method: I read the 5 `<Voices>` blocks (the "Key words" section has no voices). For each `<Layman>` and `<Bangla>` panel I compared every sentence with the `<Technical>` panel of the same block. FAIL rules: a fact, number, name, example, or cite that Technical does not give; a lost warning or hedge; a wrong or misleading statement; a Bangla panel that puts code or product names in Bangla letters or does not use আপনি. An omission is not a FAIL.

Checks over all blocks:

- Every `<Cite n>` in Layman and Bangla is cited in Technical of the same block: PASS.
- No heading in any Layman or Bangla panel: PASS.
- Code, product, and command names stay in English in Bangla (`GitHub Actions`, `secrets`, `GITHUB_TOKEN`, `::add-mask::`, `prompts/`, `evals/`, pass@k, pass^k, Markdown, Claude): PASS.
- Bangla addresses the reader with আপনি (for example "আপনি একটা ইনপুট দেন", "ঠিক করুন", "টেস্ট করুন"): PASS.
- Layman and Bangla do not copy the code blocks. They describe the script and the workflow in words, and the descriptions agree with the code.

| # | Section | Voice | What the panel says | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | Eval definition [2]; prompt, workflow, model; success criteria then evals [1]; latency, tokens, cost, errors [2] | PASS | Same facts and cites. |
| 2 | In plain words | Bangla | Same | PASS | Same facts and cites. |
| 3 | How it works | Layman | 3 grading methods [1]; 3 design rules [1]; the small eval, threshold is the team's [1]; path filter [5]; secret, fork, `GITHUB_TOKEN` [4]; pinned snapshot, alias before 4.6, own view [3]; pass@k, pass^k, 75% and 42% [2] | FAIL then fixed | The grader list followed the Technical table, which had the wrong order (see the Technical report, claim 5). Fixed with Technical: code, human, LLM-based. The rest matches. |
| 4 | How it works | Bangla | Same | FAIL then fixed | Same order problem. Fixed. "পিন করা snapshot" and "সঠিক ID" keep the meaning. |
| 5 | A real-life example | Layman | Generator, shorter prompt, mocked unit tests, job runs for `prompts/` [5], 200 stories, 96% to 71%, PR blocked, new model ID, regression suite [2] | PASS | Same facts, numbers, and cites. |
| 6 | A real-life example | Bangla | Same | PASS | Same facts, numbers, and cites. |
| 7 | Common mistakes | Layman | 6 mistakes, own view marked, cites 2, 1, 1, 4, 5 | PASS | "not hidden" keeps the meaning of "not redacted". The merge warning stays. |
| 8 | Common mistakes | Bangla | Same | FAIL then fixed | "লগে প্রিন্ট হওয়া কী।" reads as "What got printed in the log?", because কী also means "what". Technical says "A key printed in a log". Changed to "API key". |
| 9 | What a tester can check | Layman | 6 test ideas, marked as the tutorial's own advice | PASS | Same. |
| 10 | What a tester can check | Bangla | Same | FAIL then fixed | "কী-এর যেকোনো অংশ" has the same ambiguity. Changed to "API key-এর যেকোনো অংশ". |

FAILs found: 4 (rows 3, 4, 8, 10).

## Re-check

| # | Section | Voice | Verdict | Reason |
|---|---|---|---|---|
| 3 | How it works | Layman | PASS | Order: code-based, human, LLM-based, as in Technical and S1. |
| 4 | How it works | Bangla | PASS | Order: কোড-ভিত্তিক, মানুষের, LLM-ভিত্তিক. |
| 8 | Common mistakes | Bangla | PASS | "লগে প্রিন্ট হওয়া API key।" |
| 10 | What a tester can check | Bangla | PASS | "API key-এর যেকোনো অংশ খুঁজুন।" |
| - | New Technical sentences (cites 6 and 7) | Layman, Bangla | PASS | Layman and Bangla do not repeat them (an omission, not a FAIL) and use no cite 6 or 7. |

Open FAILs: 0
