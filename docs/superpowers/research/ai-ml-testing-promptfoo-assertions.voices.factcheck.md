# Voices fact check: AI/ML Testing, Advanced Assertions and LLM-as-Judge

Page: `content/ai-ml-testing/promptfoo-assertions.mdx`. Checker: an agent that did not write the voices. Date: 2026-11-02. Each Layman and Bangla panel is checked against the Technical panel of the same section.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | FAIL, fixed | FAIL, fixed | Layman was Bangla. Both had the wrong "reference assertions" group and `answer-relevancy`. Bangla had "আবং" (typo) and the broken sentence "একই শব্দ চাইনি অবশ্যই মাপার জন্য". Rewritten in both. |
| How it works | FAIL, fixed | FAIL, fixed | Layman was Bangla. Both follow the new Technical text: `rubricPrompt` and `provider`, the 5% fact (cite 3), drift fixes as tutorial advice. Bangla "দলগুলো প্রত্যাশার চেয়ে বেশি গুরুত্বপূর্ণ মনে করে" changed the meaning of "matters more than teams expect"; removed. |
| In practice | FAIL, fixed | FAIL, fixed | Layman was Bangla. Both now have the `threshold` (cite 2) and `return` (cite 1) facts, and the "three rules" sentence. Bangla "judge নিজেকে টেস্ট করুন" (test yourself) fixed to "judge-কেই টেস্ট করুন". |
| Common mistakes | FAIL, fixed | FAIL, fixed | Layman was Bangla. Bangla "ভুল ৶" (wrong digit) is now "ভুল ৬"; "আলগোভাবে" is now "আলগাভাবে". Mistakes 1, 3, 6 follow Technical. |
| What a tester can check | PASS | FAIL, fixed | Bangla line about "এটা কি ভালো?" was ungrammatical; rewritten. "বেশিরভাগ" now "অর্ধেকের বেশি" to match "more than half". |
| Key words | n/a | n/a | No voices (rule). |

## Bangla language

| Check | Verdict |
|---|---|
| Addresses the reader with আপনি | PASS |
| Tool names, code, and acronyms stay in English (`llm-rubric`, `similar`, `rubricPrompt`, `provider`, `threshold`, JavaScript) | PASS |
| Grammar and natural wording | FAIL, fixed (see rows above) |
| Numbers match Technical (5%, 0.8, 120 words, 3 sentences, ten and ten cases, three judge models) | PASS |

Open FAILs: 0
