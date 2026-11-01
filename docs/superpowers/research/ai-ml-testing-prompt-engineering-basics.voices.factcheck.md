# Voices fact check: AI/ML Testing, Prompt Engineering Fundamentals

Page: `content/ai-ml-testing/prompt-engineering-basics.mdx`. Checker: an agent that did not write the voices. Date: 2026-11-02. Each Layman and Bangla panel is checked against the Technical panel of the same section, after the Technical fixes.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | FAIL, fixed | FAIL, fixed | Both repeated the unsourced claims (format list from Anthropic, "hallucinates more" in a weaker language). Rewritten with the Technical fixes. Layman names the same 5 techniques as the overview. Bangla "অনুপ্রেরণার অনুচ্ছেদ" ("paragraph of inspiration") was wrong for "paragraph of instructions"; now "নির্দেশনার একটা পুরো অনুচ্ছেদ". |
| How it works | FAIL, fixed | FAIL, fixed | Both carried the wrong cites (source 1 on the format paragraph, old source 4). Rewritten with the Technical fixes. Bangla "প্রত্যাশ করে" is not a word; now "অনুমান করে". |
| In practice | FAIL, fixed | FAIL, fixed | The Layman panel was in Bangla, not plain English; rewritten in English. Bangla "কাছে আসা আর বন্ধ করা যায় না এমন বাগ" was a garbled rendering of "a bug to be filed and closed"; now "এমন বাগ নয় যেটা ফাইল করে বন্ধ করে দেওয়া যায়". Code blocks match Technical. |
| Common mistakes | FAIL, fixed | FAIL, fixed | The Layman panel was in Bangla; rewritten in English. Both now follow the Technical fixes (Mistakes 2, 3, 4, 6). |
| What a tester can check | FAIL, fixed | FAIL, fixed | Last tip changed in all 3 voices (see Technical row 18). Bangla "জানি-জানি কঠিন কেস" was unclear; now "ইচ্ছে করে রাখা একটা কঠিন কেস". Tutorial advice; no cites in any voice. |
| Key words | n/a | n/a | No voices (rule). |

## Bangla language

| Check | Verdict |
|---|---|
| Addresses the reader with আপনি (চান, যাচাই করুন, লিখুন, রাখুন) | PASS |
| Tool names, code, and acronyms stay in English (prompt, model, Chain-of-thought, Few-shot, self-consistency, JSON, XML, eval set, dataset, pull request) | PASS |
| Grammar and natural wording | FAIL, fixed (see the notes above) |
| No fact that Technical does not give; numbers match (4 parts, 3 sentences, 2 languages) | PASS |

Open FAILs: 0
