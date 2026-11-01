# Voices fact check: AI/ML Testing, AI and ML for Testers

Page: `content/ai-ml-testing/ai-ml-for-testers.mdx`. Checker: an agent that did not write the voices. Date: 2026-11-02. Each Layman and Bangla panel is checked against the Technical panel of the same section.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS | FAIL, fixed | Same three kinds, same chain, same non-determinism point. Bangla "আরেকটা সৌভাগ্য উত্তরকে" was ungrammatical; now "ভাগ্যক্রমে মিলে যাওয়া একটা run-কে". The "tutorial's own" label added to all 3. |
| How it works | PASS | FAIL, fixed | After the Technical fix (cite 1 now supports "format changes move the score, over-reading"), both voices got the same text. Bangla "টানে যায়" and "বানে" were wrong verbs; now "সরে যায়", "তৈরি হয়". "সেরা ঝুঁকি" (best risks) now "শীর্ষ ঝুঁকি". A period after the cite now "।". Cites 1, 2, 3 are in Technical. |
| In practice | PASS | PASS | Same code. After the temperature-0 fix, both voices say "do not assume identical; check it". 80 words, four checks, five layers match. |
| Common mistakes | PASS | FAIL, fixed | Bangla "পরবার" now "পরেরবার"; "টেস্ট ... বাদ পড়ে" now "টেস্টে ... বাদ পড়ে". 30 days matches. |
| What a tester can check | PASS | PASS | Tutorial advice, no cites. Same 5 items. |
| Key words | n/a | n/a | No voices (rule). |

## Bangla language

| Check | Verdict |
|---|---|
| Addresses the reader with আপনি (পাঠান, রাখুন, দেখুন, করুন) | PASS |
| Tool names, code, acronyms stay in English (model, prompt, guardrail, OWASP, NIST, API, temperature, schema) | PASS |
| Grammar and natural wording | FAIL, fixed (see rows above) |
| Numbers match Technical (3 kinds, 5 runs, 80 words, 4 checks, 30 days) | PASS |

Open FAILs: 0
