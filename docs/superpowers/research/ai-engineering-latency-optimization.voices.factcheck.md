# Voices fact-check: content/ai-engineering/latency-optimization.mdx

Checked 2026-10-28 by an agent that did not write the voices. Each `<Layman>` and `<Bangla>` panel is compared with the `<Technical>` panel of the same block.

| Section | Voice | Verdict | Notes |
|---|---|---|---|
| In plain words | Layman | PASS | Same facts (definition, 3 factors, 2 measures, prompt-first advice). Cites 1 only. |
| In plain words | Bangla | PASS | Same facts. "Baseline latency", "TTFT" kept in English. Uses আপনি. Cites 1 only. |
| How it works | Layman | PASS | Same 5 tools and numbers (1–5 %, 5 minutes, 512 tokens, 50 %, 1 h, 24 h). It points to the Technical code example and adds no fact. Cites 1–6, all cited in Technical. |
| How it works | Bangla | PASS | Same facts. `max_tokens`, `"stream": true`, `cache_control`, `tools`/`system`/`messages`, `AsyncAnthropic`, Message Batches API kept in English. Uses আপনি imperatives. Cites 1–6. |
| A real-life example | Layman | PASS | Same 3 changes and the batch move. Cites 2–5. |
| A real-life example | Bangla | PASS | Same facts. `cache_control`, "speculative execution" in English. Cites 2–5. |
| Common mistakes | Layman | PASS | Same 6 mistakes; the `max_tokens` warning is kept. Cites 1, 2, 4, 5. |
| Common mistakes | Bangla | PASS | Same 6 mistakes; field names in English. Cites 1, 2, 4, 5. |
| What a tester can check | Layman | PASS | Same 5 checks; keeps "the tutorial's own advice". No cites. |
| What a tester can check | Bangla | PASS | Same 5 checks; keeps the tutorial-advice line; `cache_read_input_tokens` in English. No cites. |

## Fixes

| Section | Fix |
|---|---|
| How it works | The Technical FAIL (row 24 of the Technical report, "It does not lower latency") was also in Layman and Bangla. All 3 now say only the cited fact: batches suit tasks that do not need an immediate response, with `<Cite n={4} />`. |

## Re-check

| Section | Voice | Verdict | Notes |
|---|---|---|---|
| How it works | Layman | PASS | "It suits tasks that do not need an immediate response" matches Technical. |
| How it works | Bangla | PASS | "এটা এমন কাজের জন্য, যেখানে সাথে সাথে উত্তর লাগে না" matches Technical. n=4 is cited in Technical. |

Open FAILs: 0
