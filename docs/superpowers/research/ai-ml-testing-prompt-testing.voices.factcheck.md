# Voices fact check: AI/ML Testing, Prompt Testing

Page: `content/ai-ml-testing/prompt-testing.mdx`. Checker: an agent that did not write the voices. Date: 2026-11-02. Each Layman and Bangla panel is checked against the Technical panel of the same section, after the Technical fixes.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | FAIL, fixed | FAIL, fixed | Both repeated the wrong claim about Anthropic's guide and the old cite. Last 2 paragraphs rewritten in both with the Technical fix. Bangla: "একই শৃঙ্খল, শুধু একটা পার্থক্যে" ("same chain") was wrong for "discipline"; now "মতোই কাজ, শুধু একটা পার্থক্য আছে". "বিসর্যপূর্ণ চিহ্ন" is not a word; now "যতিচিহ্ন". "হয় ... প্রশ্ন করতে হবে নিরাপদ অনুমান" missed "নয়তো"; fixed. 5,000 words matches. |
| How it works | FAIL, fixed | FAIL, fixed | Both said OWASP distinguishes direct and indirect forms; fixed as in Technical. "sign language" removed from the taxonomy block. Bangla: "ওভরল্যাপ" typo, "নির্দেশনা ভুলে দিতে" (unclear), "কোনো পদক্ষেপ নয়" (wrong sense of "not actionable"); all fixed. 50 pages, 30 and 60 days, 2023 and 2025 match. |
| In practice | FAIL, fixed | FAIL, fixed | The Layman panel was in Bangla; rewritten in plain English. Bangla "বাঁচা নথি" is wrong for "living document"; now "জীবন্ত নথি". Code blocks match Technical. |
| Common mistakes | FAIL, fixed | FAIL, fixed | The Layman panel was in Bangla; rewritten in English with the same 6 mistakes. Bangla Mistake 3 "বাগটা কারো কাছে যাবে না" did not say "cannot be routed"; now "বোঝা যায় না বাগটা কার কাছে পাঠাতে হবে". |
| What a tester can check | PASS | FAIL, fixed | Tutorial advice; no cites. Bangla: "ঢাকুন" (cover with a lid) now "কভার করুন"; "পরের জন্য" now "পরের মানুষের"; last bullet was garbled; now "সেটা খরচ বাঁচানোর একটা সুযোগ, যা জানা দরকার". |
| Key words | n/a | n/a | No voices (rule). |

## Bangla language

| Check | Verdict |
|---|---|
| Addresses the reader with আপনি (বেছে নিন, লিখুন, রাখুন, যোগ করুন) | PASS |
| Tool names, code, and acronyms stay in English (prompt, model, OWASP, LLM01, red teaming, regression suite, pull request, `layer`, repo) | PASS |
| Grammar and natural wording | FAIL, fixed (see the notes above) |
| No fact that Technical does not give | PASS |

Open FAILs: 0
