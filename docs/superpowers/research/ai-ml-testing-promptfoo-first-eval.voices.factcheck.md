# Voices fact check: AI/ML Testing, Your First Eval with Promptfoo

Page: `content/ai-ml-testing/promptfoo-first-eval.mdx`. Checker: an agent that did not write the voices. Date: 2026-11-02. Each Layman and Bangla panel is checked against the Technical panel of the same section.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | FAIL, fixed | FAIL, fixed | Layman was a copy of the Bangla text, not plain English. Rewritten in plain English. Both voices had the "quickest way" and "without spending a token" claims; both follow the new Technical text now. |
| How it works | FAIL, fixed | FAIL, fixed | Layman was Bangla. Rewritten. Both voices now give the two groups, the `not-` prefix (Bangla), the matrix view, and cite 1 and 3 only where Technical cites them. |
| In practice | FAIL, fixed | FAIL, fixed | Layman was Bangla. `compare` command and install line removed in all voices. Same 4 code blocks as Technical. |
| Common mistakes | FAIL, fixed | FAIL, fixed | Layman was Bangla (with English labels). Rewritten. Mistake 2, 3, and 6 follow the Technical fixes in both voices. |
| What a tester can check | PASS | PASS | Tutorial advice; no cites. Layman repeats the Technical list in plain English. |
| Key words | n/a | n/a | No voices (rule). |

## Bangla language

| Check | Verdict |
|---|---|
| Addresses the reader with আপনি (ব্যবহার করুন, আপনি … পারেন) | PASS |
| Tool names, code, and acronyms stay in English (Promptfoo, `vars`, `assert`, `llm-rubric`, `--filter-providers`, YAML, CI) | PASS |
| Grammar and natural wording | PASS |
| Numbers match Technical (30 day, 60 words, four and two cases) | PASS |

Open FAILs: 0
