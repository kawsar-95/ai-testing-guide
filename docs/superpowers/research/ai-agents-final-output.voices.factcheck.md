# Voices fact check: How AI Agents Work, Final Output

Page: `content/ai-agents/final-output.mdx`. Checker: an agent that did not write the voices. Date: 2026-10-28. Each Layman and Bangla panel is checked against the Technical panel of the same section.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | FAIL, fixed | FAIL, fixed | Same 3 endings, same cites (1–3, 5–7). The sentence "the final message must show this clearly" changed with the Technical fix; both now say the `subtype` tells which case it is. |
| How it works | FAIL, fixed | FAIL, fixed | Same 5 subtypes (as a list, not a table), same `stop_reason` values, structured output, `final_output`, handoff, and interrupt facts. The retry sentence changed with the Technical fix in both. Cites 1–7 all in Technical. |
| A real-life example | FAIL, fixed | FAIL, fixed | Run 3 matched the old Technical text (`success` with `refusal`). Rewritten in both after the Technical fix: run 3 has `stop_reason` `refusal`, and the team checks it as well as the subtype. Same 3 fields, same 3 runs. |
| Common mistakes | PASS | PASS | Same 6 items and cites (1, 2, 4, 6, 8). "can run harmful code" restates "remote code execution". |
| What a tester can check | PASS | PASS | Tutorial advice; no cites in any voice. Same 7 items. |
| Key words | n/a | n/a | No voices (rule). |

## Bangla language

| Check | Verdict |
|---|---|
| Addresses the reader with আপনি (আপনি ... দেন, দেখুন, ব্যবহার করুন, filter করুন) | PASS |
| Product names, code, and terms stay in English (Claude Agent SDK, `ResultMessage`, `subtype`, `stop_reason`, `final_output`, handoff, checkpointer, XSS, SQL injection) | PASS |
| Grammar and natural wording, also in the fixed sentences | PASS |
| Numbers match Technical (3 endings, 5 subtypes, 3 fields, 3 runs) | PASS |

Open FAILs: 0
