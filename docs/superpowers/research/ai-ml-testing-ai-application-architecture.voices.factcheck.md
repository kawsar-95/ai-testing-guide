# Voices fact check: AI/ML Testing, AI Application Architectures

Page: `content/ai-ml-testing/ai-application-architecture.mdx`. Checker: an agent that did not write the voices. Date: 2026-11-02. Each Layman and Bangla panel is checked against the Technical panel of the same section.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS | FAIL, fixed | Rewritten with the Technical fixes (tutorial labels, RAG paper wording, prompt guide cite). Bangla "User সেটা দেখে" now "দেখেন" (respect form); "weight বদলে" now "বদলায়"; "যা মিস করে" now "যা সে ধরতে পারে না". Cites 1, 2 match Technical. |
| How it works | PASS | PASS | Same diagram. After the Technical fixes (two parts of RAG, "in the tutorial's experience", Lost in the Middle cite, OWASP over-blocking fix), both voices got the same text. Cites 1, 3, 4 in all 3. |
| In practice | FAIL, fixed | FAIL, fixed | All 3 ended with ":" and no content; now a full stop. Bangla "যাতে পরের জানে" (missing noun) now "যাতে পরের জন বুঝতে পারেন". 400 pages, 8 months match. |
| Common mistakes | FAIL, fixed | FAIL, fixed | The Layman panel was in Bangla; rewritten in plain English. Bangla Mistake 5 "সব ইনপুট ফেরত দেয়" meant "returns every input"; now "প্রত্যাখ্যান করে". "expensive and slow" removed in all 3 (Technical FAIL). Cites 1, 3 in all 3. |
| What a tester can check | PASS | PASS | Tutorial advice, no cites. Same 6 items. |
| Key words | n/a | n/a | No voices (rule). |

## Bangla language

| Check | Verdict |
|---|---|
| Addresses the reader with আপনি (আঁকুন, লিখুন, রাখুন, বোঝেন) | PASS |
| Tool names, code, acronyms stay in English (RAG, retriever, prompt, guardrail, OWASP, prompt injection, schema, JSON, file names) | PASS |
| Grammar and natural wording | FAIL, fixed (see rows above) |
| Numbers match Technical (5 parts, 6 layers, 400 pages, 8 months) | PASS |

Open FAILs: 0
