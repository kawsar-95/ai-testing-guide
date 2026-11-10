# Voices fact check: AI/ML Testing, AI Quality Metrics and Reporting

Page: `content/ai-ml-testing/ai-quality-metrics.mdx`. Date: 2026-11-02.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS, after fix | PASS, after fix | The DeepEval/Ragas naming correction (Answer Relevancy vs. Response Relevancy) was applied to all three panels; confirmed by grep: "Response Relevancy" appears 3 times in the built page (once per panel). |
| How it works | PASS | PASS | Same pipeline diagram and cost formula, identical across panels; untouched since no issue was found here. |
| In practice | PASS | PASS | Same `summarise_run`/`call_cost`/`executive_summary` code, identical across panels. |
| Common mistakes | PASS | PASS | Same five mistakes, same cites, consistent. |
| What a tester can check | PASS | PASS | Same five tutorial-advice bullets. |
| Key words | n/a | n/a | No voices (rule). |

## Bangla language

| Check | Verdict |
|---|---|
| আপনি-register verbs (ব্যবহার করুন, বসান, review করুন) | PASS |
| Tool/metric names stay in English (DeepEval, Ragas, Faithfulness, Answer Relevancy, Response Relevancy) | PASS |
| Grammar and natural wording in the rewritten sentence | PASS |
| Numbers match Technical (six metrics on the dashboard, five mistakes, five tutorial bullets) | PASS |

Open FAILs at the end of the rounds above: 0

## The new সহজ English panels (2026-11-10)

The `<Layman>` (সহজ English) panels of 4 sections were in Bangla, not plain English: `In plain words`, `How it works`, `In practice`, `Common mistakes`. The rounds above checked the facts of these panels, not their language. The site now tests that rule: `voiceErrors` in `lib/voice-source.ts` fails a `<Layman>` panel when more than 2 % of the letters that a reader reads are Bangla (code, tags, and URLs do not count), and a `<Bangla>` panel when fewer than 20 % are.

The panels were written again in plain English from the Technical text of the same section, with every code block of that text copied, by a `claude -p` session (Claude Sonnet, no tools). Checker: a fresh `claude -p` session (Claude Sonnet, no tools) that did not write them, given only the Technical text and the new panel of each section. The Technical text and the Bangla panels did not change. No person has read the new panels yet.

### FAILs

None.

### Table

| Section | Layman | Notes |
|---|---|---|
| In plain words | PASS | Facts, cites and the metrics code block match the Technical text. |
| How it works | PASS | The pipeline, the cost formula and the cite match. "Always store" is only a rewording of the Technical text. |
| In practice | PASS | All three code blocks are identical. The cite, the pricing caveat and the tutorial advice match. |
| Common mistakes | PASS | All five mistakes and their cites match. |

Open FAILs: 0
