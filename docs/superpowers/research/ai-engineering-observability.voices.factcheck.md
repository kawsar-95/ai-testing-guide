# Voice fact-check: Observability (2026-10-28)

Page: `content/ai-engineering/observability.mdx`. I did not write this page or its voices.

Method: I read the 5 `<Voices>` blocks (the "Key words" section has no voices). For each `<Layman>` and `<Bangla>` panel I compared every sentence with the `<Technical>` panel of the same block. FAIL rules: a fact, number, name, or cite that Technical does not give; a lost warning or hedge; a wrong statement; a Bangla panel that puts code or product names in Bangla letters or addresses the reader with তুমি. An omission is not a FAIL.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS | PASS | Same facts (trace, span, span fields, semconv, Development status). Cites 1, 2, 3, 8 are all in Technical. "OpenTelemetry", "semantic conventions", "GenAI" stay in English in Bangla. |
| How it works | PASS | PASS | Same span name, same 7 attributes (the `gen_ai.usage.input_tokens` row was changed in all 3 panels in the same fix: "including cached tokens"), same `usage` sum, `request-id`, `execute_tool`, retries, opt-in content with the sensitive-data warning, both metrics, `start_as_current_span` and `set_attribute`. The code is described, not repeated; the description adds no fact. Cites 2–7 only. All attribute names stay in code font and English. |
| A real-life example | PASS | PASS | Same numbers (40 s, 35 s, 90,000, one week, doubled), same two fixes. Cites 1, 2, 3. |
| Common mistakes | PASS | PASS | Same 5 mistakes; the personal-data warning is kept. "Makes you turn it on yourself" / "আপনাকে নিজে চালু করতে বলে" is the same fact as "opt-in". Cites 1, 2, 3, 5, 6. |
| What a tester can check | PASS | PASS | Same 5 checks; both panels keep "the tutorial's own advice". No cites, as in Technical. |

Automated checks:

- Every `<Cite n>` in Layman and Bangla is cited in Technical of the same block: PASS.
- `tests/voice-source.test.ts`: no error names this page.
- No তুমি or তোমার: PASS. Bangla uses আপনি ("আপনি বুঝতে পারেন", "আপনাকে নিজে চালু করতে হয়").
- Code, attribute, product, and API names (`gen_ai.*`, `usage`, `request-id`, `execute_tool`, OpenTelemetry, Claude Messages API, Python, API key) stay in English in Bangla: PASS.

FAILs found: 0.

Open FAILs: 0
