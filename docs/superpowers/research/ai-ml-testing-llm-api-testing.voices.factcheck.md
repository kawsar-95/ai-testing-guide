# Voices fact check: AI/ML Testing, Testing LLM APIs

Page: `content/ai-ml-testing/llm-api-testing.mdx`. Checker: an agent that did not write the voices. Date: 2026-11-02. Each Layman and Bangla panel is checked against the Technical panel of the same section, after the Technical fixes.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | FAIL, fixed | FAIL, fixed | Layman was a copy of the Bangla text; rewritten in plain English (no 529, retry rules labeled as the tutorial's advice, TTFT labeled as the tutorial's view). Bangla: "লাগবার" stray word removed; 529 row and the TTFT cite fixed as in Technical. |
| How it works | FAIL, fixed | FAIL, fixed | Layman rewritten. Bangla: "ব্যবহারকারী error দেখে না একটা spinner চলতে থাকে" said the opposite of Technical; now "spinner-এর বদলে একটা error দেখেন". Token and provider sentences fixed as in Technical. |
| In practice | FAIL, fixed | FAIL, fixed | Layman rewritten (4xx, retry on the third try, "three times"). Bangla: "অবাকঞ্জক আঁকড়ে ধরে" was garbled; now "চমকটা ধরে". Code blocks copied from Technical. |
| Common mistakes | FAIL, fixed | FAIL, fixed | Layman rewritten. Bangla Mistake 4 had the reversed logic; fixed. "product team অবাক করে" now "product team-কে অবাক করে". |
| What a tester can check | PASS | FAIL, fixed | Layman is the Technical text. Bangla said "গত বছর" (last year); Technical says last quarter. Fixed. "বিনা খরচ করে ... 429 চাওয়া" reworded. |
| Key words | n/a | n/a | No voices (rule). |

## Bangla language

| Check | Verdict |
|---|---|
| Addresses the reader with আপনি | PASS |
| Code, status codes, and API names stay in English (`stream`, `usage`, `system`, `developer`, 429, TTFT) | PASS |
| Grammar and natural wording | FAIL, fixed (listed above) |
| Numbers match Technical (400, 401, 429, 500, 2 s, 15 s, 95th percentile, 0.05) | PASS |

Open FAILs: 0
