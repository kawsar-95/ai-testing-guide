# Voice fact-check: Production Monitoring (2026-10-28)

Page: `content/ai-engineering/production-monitoring.mdx`. I did not write this page or its voices.

Method: I read the 5 `<Voices>` blocks (the "Key words" section has no voices). For each `<Layman>` and `<Bangla>` panel I compared every sentence with the `<Technical>` panel of the same block. FAIL rules: a fact, number, name, example, or cite that Technical does not give; a lost warning or hedge (including a "tutorial's own view" mark); a wrong statement; a Bangla panel that puts code, product names, or common technical terms in Bangla letters, or that does not use আপনি. An omission that loses no warning is not a FAIL.

Automated checks (script, all blocks, after the fixes):

- Every `<Cite n>` in Layman and Bangla is cited in Technical of the same block: PASS (blocks 1–4 have the same cite sets in all 3 panels; block 5 has none).
- No heading in a Layman or Bangla panel, no তুমি or তোমার: PASS.
- `node --test tests/voice-source.test.ts`: PASS.

## Blocks

| Block | Layman | Bangla | Notes |
|---|---|---|---|
| 1 In plain words | PASS | PASS | The 2 layers, the 4 signals, NIST Measure 2.4, the Anthropic note, and the eval/monitoring contrast match Technical. |
| 2 How it works | PASS | PASS | The signal table becomes a list with the same 4 signals and the same AI-app examples (chat turns, 429 and 5xx, a queue). Endpoint, `1m`/`1h`/`1d`, the 4 token kinds, the 3 filters, and the workspace-key warning match. The curl example is described in words ("daily use of one week, grouped by model"), which matches the code. Drift, quality, and incidents match. |
| 3 A real-life example | PASS | PASS | The 4 dashboard numbers (2.1 s, 0.3 %, +40 %, 3x) match the `text` block. The steps (group by model and day, new card product, 30 card questions, blameless postmortem) match. |
| 4 Common mistakes | PASS | PASS | The 6 mistakes and both "tutorial's own view" marks are kept. |
| 5 What a tester can check | PASS | PASS | The 6 ideas match, and both panels say they are the tutorial's own advice. |

Bangla style: Latin script stays for latency, traffic, errors, saturation, drift, baseline, threshold, queue, Usage API, Admin API key, workspace, `1m`/`1h`/`1d`, eval, regression suite, postmortem, blameless, staging, thumbs-down, Model Monitoring, Gemini Enterprise Agent Platform. The reader is addressed with আপনি (মাপুন, করুন, দেখুন, জিজ্ঞেস করুন). PASS.

FAILs found in the voices before the Technical fixes: 0. The voices mirrored the Technical text, so they carried the same 7 Technical defects that touch the text (see `ai-engineering-production-monitoring.factcheck.md`, claims 1, 6, 15, 19, 20, 28, 30). Those are counted in the Technical report.

## Re-check after the Technical fixes

| Fix | Layman | Bangla |
|---|---|---|
| 2 layers marked as the tutorial's split | PASS: "This tutorial splits the production monitoring of an AI app into 2 layers." | PASS: "এই টিউটোরিয়াল ... 2টা স্তরে ভাগ করে" |
| `<Cite n={6} />` on what monitoring shows | PASS | PASS |
| Admin API credential, such as an Admin API key | PASS | PASS: "একটা Admin API credential লাগে, যেমন Admin API key" |
| Model Monitoring name and tabular scope; LLM use as the tutorial's own view | PASS: the own-view mark covers the LLM sentence and the weekly sample. | PASS: "টিউটোরিয়ালের নিজের মত: সোর্সটা tabular মডেল নিয়ে, তবে ..." |
| Bank example: drift as the tutorial's own view | PASS | PASS: "টিউটোরিয়ালের নিজের মতে ..." |
| 200 with the wrong content is an error `[1]` | PASS | PASS: "ভুল কনটেন্টসহ একটা 200 রেসপন্সও একটা এরর" |

No panel adds a fact that its Technical panel does not give. The cite sets are unchanged between panels.

Open FAILs: 0
