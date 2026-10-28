# Voices fact-check: content/ai-engineering/guardrails-and-safety.mdx

Checked 2026-10-28 by an agent that did not write the voices. Each `<Layman>` and `<Bangla>` panel is compared with the `<Technical>` panel of the same block, after the Technical fixes of the fact-check report.

## Checks

| # | Section | Panel | Check | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | Same facts, no new fact, cites only n=1 | PASS | Definition, visibility, two kinds, jailbreak, OWASP doubt, guardrails: all in Technical. |
| 2 | In plain words | Bangla | Same facts, cites only n=1, English names, আপনি | PASS | Same facts; "Prompt injection", "Direct injection", "OWASP" stay in English. No direct address in this panel. |
| 3 | How it works | Layman | "A small, fast model" | FAIL | "fast" was not supported (fact-check rows 6, 7). |
| 4 | How it works | Bangla | "ছোট, দ্রুত মডেল" | FAIL | Same as row 3. |
| 5 | How it works | Layman | Code summary: `claude-haiku-5-5` and `is_harmful` with no cite | FAIL | The model id fact had no cite; after the Technical fix it can cite n=5 and n=4. |
| 6 | How it works | Bangla | Code summary with no cite | FAIL | Same as row 5. |
| 7 | How it works | Layman, Bangla | Outside-content rules, after-model layers, cites n=1, 2, 3 only | PASS | All in Technical with the same cites. Warnings (least privilege, human approval) kept. |
| 8 | How it works | Bangla | English names, আপনি | PASS | `tool_result`, JSON, `stop_reason`, Claude Haiku 5.5 in English; imperatives in আপনি form (পাঠান, রাখুন, দিন). |
| 9 | A real-life example | Layman | "Hidden prompts in a resume" | FAIL | Mirrors fact-check row 22. |
| 10 | A real-life example | Bangla | "রেজিউমেতে লুকানো প্রম্পট" | FAIL | Same as row 9. |
| 11 | A real-life example | Layman, Bangla | The 4 layers, cites n=1, 2 | PASS | Same as Technical. |
| 12 | Common mistakes | Layman, Bangla | Same 5 mistakes, cites n=1, 2 | PASS | No new fact; Base64, RAG, `tool_result`, `user` in English. |
| 13 | What a tester can check | Layman, Bangla | Same 5 ideas, marked as the tutorial's own advice, no cites | PASS | Bangla keeps HTML, SQL, Base64, escape in English. |

## Fixes

| Row | Fix |
|---|---|
| 3, 4 | "small, fast model" became "small model" (Layman); "ছোট, দ্রুত মডেল" became "ছোট মডেল" (Bangla). |
| 5, 6 | Layman: "It asks `claude-haiku-5-5`, the API ID of Claude Haiku 5.5 <Cite n={5} />, for one field, `is_harmful`, with the value true or false <Cite n={4} />." Bangla: the same facts and cites. Technical now cites n=4 and n=5 in that block. |
| 9, 10 | Layman: "OWASP describes a similar attack. Malicious prompts split across a resume ...". Bangla: "OWASP এর মতো একটা আক্রমণের বর্ণনা দেয়। রেজিউমেতে ভাগ করে রাখা ক্ষতিকর প্রম্পট ...". |

## Re-check

| Row | Verdict | Reason |
|---|---|---|
| 3, 4 | PASS | Matches Technical "A small model" and "a lightweight model". |
| 5, 6 | PASS | Same facts as the Technical sentence before the code; n=4 and n=5 are cited in that Technical block. `tests/voice-source.test.ts` passes. |
| 9, 10 | PASS | Matches the fixed Technical sentence. |

Open FAILs: 0
