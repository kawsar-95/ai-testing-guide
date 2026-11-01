# Voices fact check: AI/ML Testing, LangGraph Agent Testing

Page: `content/ai-ml-testing/langgraph-agent-testing.mdx`. Checker: an agent that did not write the voices. Date: 2026-11-02. Each Layman and Bangla panel is checked against the Technical panel of the same section, after the Technical fixes.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | FAIL, fixed | FAIL, fixed | Layman was a copy of the Bangla text; rewritten in plain English. Bangla: "নয় বার নয়, দুইবার থেমেেছিল" was garbled (typo and meaning); now "নয়বার নয়, দুইবার খোঁজার পরেই থেমেছিল". LangGraph and LangSmith sentences fixed as in Technical. |
| How it works | FAIL, fixed | FAIL, fixed | Layman rewritten. Bangla: routing sentence fixed as in Technical; "model call-ওর" now "model call-এরও"; the reasoning-loop claim fixed. Code blocks copied from the fixed Technical code. |
| In practice | FAIL, fixed | FAIL, fixed | Layman rewritten (15% of 240, 3 tool calls, 5 model calls match). Bangla: "টেড়্টটা" typo, "চালান" (invoice) now "বিল". |
| Common mistakes | FAIL, fixed | FAIL, fixed | Layman rewritten. Bangla Mistake 1 was garbled ("ভুল কারণে বা ঠিক কারণে ঠিক"); now matches Technical. Mistake 4 grammar fixed. Mistake 5 cite removed as in Technical. |
| What a tester can check | PASS | FAIL, fixed | Layman is the Technical text. Bangla: last tip was garbled ("অনুমান না করে বলে পারে না"); now "অনুমান না করে বলে যে খুঁজে পায়নি". Loop tip fixed as in Technical. |
| Key words | n/a | n/a | No voices (rule). |

## Bangla language

| Check | Verdict |
|---|---|
| Addresses the reader with আপনি | PASS |
| Tool names, code, and terms stay in English (LangGraph, LangSmith, node, edge, `route_after_tools`, recursion limit, trace id) | PASS |
| Grammar and natural wording | FAIL, fixed (listed above) |
| Numbers match Technical (2 searches, 9, 3 tool calls, 5 model calls) | PASS |

Open FAILs: 0
