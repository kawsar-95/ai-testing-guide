# Voices fact check: AI/ML Testing, Tokens, Probabilities, and Temperature

Page: `content/ai-ml-testing/llm-tokens-temperature.mdx`. Checker: an agent that did not write the voices. Date: 2026-11-02. Each Layman and Bangla panel is checked against the Technical panel of the same section.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS | FAIL, fixed | Rewritten with the Technical fixes (estimate, 30%, tutorial label, measure your own text). Bangla "ধরে পড়া হয়", "দুটা", "লিখার", "না পুরো শব্দ, না একটা অক্ষর" fixed to natural forms. |
| How it works | FAIL, fixed | FAIL, fixed | All voices said "three steps" with four listed; now "four". Bangla "খেলার আগে" (before the game) now "বাছাইয়ের আগে"; "কেন থামলা" (dialect/wrong) now "কেন থামল"; "আরেকটা সেটিং" for two settings now "আরও দুটো সেটিং". Cites now 1, 2, 3 as in Technical. |
| In practice | PASS | FAIL, fixed | Same code with the `PROMPT` and `LONG_QUESTION` fixes. Bangla "কেন থামলা" fixed. Numbers (0.0, 0.5, 1.0, 5 runs, 60, 100) match. "often 1 / usually 5" removed in all 3. |
| Common mistakes | FAIL, fixed | FAIL, fixed | The Layman panel was written in Bangla; rewritten in plain English. Bangla used the Arabic-Indic digit "٥"; now "৫". Mistake 6 "কমায়, করে না" was missing a word; now advice to check. "200,000 / prose more" removed in all 3 (Technical FAIL). |
| What a tester can check | PASS | FAIL, fixed | "at the end" now "start or the end" in all 3. Bangla "কেন থামলা" fixed. |
| Key words | n/a | n/a | No voices (rule). |

## Bangla language

| Check | Verdict |
|---|---|
| Addresses the reader with আপনি (গুনুন, মাপুন, রাখুন, করবেন না) | PASS |
| Code, API names, and terms stay in English (`max_tokens`, `stop_reason`, token, embedding, context window, endpoint, Claude 4.7) | PASS |
| Grammar and natural wording | FAIL, fixed (see rows above) |
| Numbers match Technical (30 percent, 4 steps, 5 runs, 60, ten times) | PASS |

Open FAILs: 0
