# Voices fact check: AI/ML Testing, Structured Outputs and Validation

Page: `content/ai-ml-testing/structured-outputs.mdx`. Checker: an agent that did not write the voices. Date: 2026-11-02. Each Layman and Bangla panel is checked against the Technical panel of the same section, after the Technical fixes.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | FAIL, fixed | FAIL, fixed | The Layman panel was a copy of the Bangla panel, not plain English; rewritten in English. Both now follow the Technical fixes (JSON mode cite, reference warning, scoped hallucinated field). Bangla "যে ধরা ধরে ফেলে" was garbled; now "যে ব্যর্থতায় দলগুলো সবচেয়ে বেশি আটকায়". |
| How it works | FAIL, fixed | FAIL, fixed | The Layman panel was in Bangla; rewritten in English. Both said the API reference describes token-level constraint and that a broken JSON is always a plumbing bug, and both called the arguments a JSON object; all fixed as in Technical. Bangla "বিভ্রান্ত ত্রুটি" now "বিভ্রান্তিকর error". `stop_reason`/`finish_reason` values match. |
| In practice | FAIL, fixed | FAIL, fixed | The Layman panel was in Bangla; rewritten in English. Bangla: "আলাদা function-এ" now "আলাদা ধাপে" (Technical fix); "অর্থের দিক ভুল" now "অর্থের দিক থেকে ভুল"; "নিশ্চিন্তে ... বানিয়ে দেয়" now "বানিয়ে দিতে পারে" (Technical fix). Code blocks match Technical. |
| Common mistakes | FAIL, fixed | FAIL, fixed | The Layman panel was in Bangla; rewritten in English. Bangla heading "ভুל ৫" had a Hebrew letter (ל); fixed. Mistake 6 softened to "can" in both, as in Technical. |
| What a tester can check | PASS | FAIL, fixed | Tutorial advice; no cites. Bangla: the null-field bullet was unclear; now "model কোনো field-এর মান না জানলে সেটা null রাখে কি না". "জোরে ব্যর্থ" now "স্পষ্টভাবে ব্যর্থ". "ব্যবহারকারী useful বার্তা দেখাবে" (user shows) now "ব্যবহারকারী কাজে লাগার মতো বার্তা দেখবেন". |
| Key words | n/a | n/a | No voices (rule). |

## Bangla language

| Check | Verdict |
|---|---|
| Addresses the reader with আপনি (assert করুন, রাখুন, সন্দেহ করুন) | PASS |
| Tool names, code, and acronyms stay in English (JSON mode, JSON Schema, OpenAI, Claude Messages API, `stop_reason`, `max_tokens`, `finish_reason`, `length`, tool use, arguments, `additionalProperties: false`) | PASS |
| Grammar and natural wording | FAIL, fixed (see the notes above) |
| No fact that Technical does not give | PASS |

Open FAILs: 0
