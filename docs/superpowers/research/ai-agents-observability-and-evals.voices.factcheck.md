# Voices fact check: How AI Agents Work, Observability and Evals

Page: `content/ai-agents/observability-and-evals.mdx`. Checker: an agent that did not write the voices. Date: 2026-10-28. Each Layman and Bangla panel is checked against the Technical panel of the same section.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS | PASS | Same facts (trace, span, task, trial, grader, transcript, outcome). Cites 3 and 5 are in Technical. |
| How it works | PASS | PASS | Same span types, token counts, `error.type`, metrics, OpenAI defaults, Claude Code signals, beta tracing, grader types, pass@k / pass^k. Layman and Bangla drop the full attribute names of the tokens and the time-to-first-token metric name; no fact lost that matters. Cites 1–5 all in Technical. |
| A real-life example | FAIL, fixed | FAIL, fixed | After the Technical fix to the trace span names (cite 6), Layman and Bangla said only "the span names follow the OpenTelemetry rules" with cite 1. Fixed: both now cite 1 and 6 and say that a model call span has the operation (`chat`) and the model name. Numbers match (about 10 s, almost 8 s, 20–50, 30 tasks, 5 trials, 4 tasks). |
| Common mistakes | FAIL, fixed | FAIL, fixed | Same "because" wording as Technical about opt-in content. Fixed in both to "the rules warn that it likely has private user data". Other items match. |
| What a tester can check | PASS | PASS | Tutorial advice; no cites in any voice. Same 7 items. |
| Key words | n/a | n/a | No voices (rule). |

## Bangla language

| Check | Verdict |
|---|---|
| Addresses the reader with আপনি (আপনার দুটোই দরকার, চালান, দেখুন, ব্যবহার করুন) | PASS |
| Product names, code, and terms stay in English (OpenTelemetry, span, trace, grader, `duration_ms`, `cost_usd`, pass@k, CI) | PASS |
| Grammar and natural wording, also in the fixed sentences | PASS |
| Numbers match Technical | PASS |

Open FAILs: 0
