# Voices fact check: AI/ML Testing, Chatbot UI Testing with Playwright

Page: `content/ai-ml-testing/chatbot-ui-testing.mdx`. Checker: an agent that did not write the voices. Date: 2026-11-02. Each Layman and Bangla panel is checked against the Technical panel of the same section, after the Technical fixes.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | FAIL, fixed | FAIL, fixed | Layman was a copy of the Bangla text; rewritten in plain English. Bangla: "ব্যবহারকারী অসুস্থ" (the user is sick) was wrong for "impatient"; now "অধৈর্য হয়ে আবার click করলে". "সবচেয়ে সাধারণ কারণ" now "একটা সাধারণ কারণ". The Playwright sentences fixed as in Technical. |
| How it works | FAIL, fixed | FAIL, fixed | Layman rewritten. Bangla: the actionability sentence fixed as in Technical; "অটা-ব্রেকযুক্ত URL" was garbled, and the screenshot sentence had broken grammar; both rewritten. |
| In practice | FAIL, fixed | PASS | Layman rewritten (30 s, 200 characters, 390/768/1280 px match). Bangla prose matches; code blocks copied from the fixed Technical code. |
| Common mistakes | FAIL, fixed | FAIL, fixed | Layman rewritten. Bangla Mistake 6 got the same added sentence as Technical. |
| What a tester can check | PASS | FAIL, fixed | Layman is the Technical text. Bangla: "length অক্সেই" was garbled; now "দৈর্ঘ্যের পুরো পরিসর". "ফোন ভাঙা overflow" reworded. Numbers 0, 1, 1,000, 50,000 match. |
| Key words | n/a | n/a | No voices (rule). |

## Bangla language

| Check | Verdict |
|---|---|
| Addresses the reader with আপনি | PASS |
| Code, API names, and terms stay in English (Playwright, locator, `data-testid`, `role="log"`, MCP server) | PASS |
| Grammar and natural wording | FAIL, fixed (listed above) |
| Numbers match Technical | PASS |

Open FAILs: 0
