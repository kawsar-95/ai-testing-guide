# Voice fact-check: custom-metrics (2026-10-27)

Page: `content/k6/custom-metrics.mdx`. I did not write this page or its voices.

Method: 5 `<Voices>` blocks (Key words has none). Each `<Layman>` and `<Bangla>` panel was compared with the `<Technical>` panel of the same block. FAIL rules: a fact, number, name, example or cite that Technical does not give; a meaning change; a Bangla command, flag, metric or product name in Bangla letters; তুমি; a Layman sentence over 25 words.

Automated checks (script and `node --test tests/voice-source.test.ts tests/k6.test.ts`):

- Every `<Cite n>` in Layman and Bangla is cited in Technical of the same block: PASS.
- No heading, no TODO, no তুমি in any panel: PASS.
- Layman: longest sentence is under 25 words (including table cells): PASS.
- Code blocks and the output block are the same in all three panels: PASS.
- Metric, type, method and module names (`Counter`, `Gauge`, `Rate`, `Trend`, `add`, `isTime`, `k6/metrics`, `p(95)`, `bad_status_count{page:home}`) stay Latin in Bangla: PASS.

Notes:

- Block 1 (round 2): Layman has the new cite 7 only on `http_req_duration` (Technical cites 7 there). Layman drops the `group_duration` and `iteration_duration` sentence: an omission. Bangla gives the same facts and cites as Technical (cite 8 on `group_duration`, cite 7 on `iteration_duration`, the tutorial-view sentence). PASS.
- Block 2: Bangla "০.০০ থেকে ১.০০" matches 0.00 to 1.00. The table rows match.
- Block 3: Bangla "২টা VU", "৫ s" match 2 VUs, 5 s.
- Block 4: Bangla "১ s", "১%" match. The `min`/`max` advice and the init context reason match.
- Block 5: Bangla says "granular data point" where Technical says "raw data points". Same meaning (the source term). Bangla and Layman add no fact. "The numbers change on each run" is in all three.
- Bangla uses mixed English words (metric, request, threshold, init context), as in the Course style and the thresholds page. আপনি form is used.

Open FAILs: 0
