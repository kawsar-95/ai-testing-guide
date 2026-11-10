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

Open FAILs at the end of the rounds above: 0

## Lighter সহজ English panels (2026-11-10)

The `সহজ English` (Layman) panel of 1 section was rewritten to lower the reading load: `A real-life example`. The cognitive-load audit of 2026-11-10 found it as dense in technical terms as the Technical text, or denser, so a reader who switched voice to escape the load met the same terms. The new text keeps to the facts of the Technical text, says a term in plain words or leaves it out when a beginner does not need it, and uses short sentences and lists.

Writer: a `claude -p` session (Claude Sonnet, no tools). Checker: a fresh `claude -p` session (Claude Sonnet, no tools) that did not write the panels, given only the Technical text and the new panel of each section. The Technical text and the Bangla panels did not change. No person has read the new panels yet.

### FAILs

None.

### Table

| Section | Layman | Notes |
|---|---|---|
| A real-life example | PASS | Facts, code names and cites 1, 2 and 4 all match the Technical text. Nothing is added and no meaning changes. |

Open FAILs at the end of the rounds above: 0

## Second pass on the dense সহজ English panels (2026-11-11)

The `সহজ English` panel of `A real-life example` still had as many terms per 100 words as the Technical text after the first pass. They were rewritten again: longer is allowed, each kept term gets a short explanation from the Technical text, and the terms are spread over more sentences. Writer and checker: separate fresh `claude -p` sessions (Claude Sonnet, no tools). No person has read the new panels.

### FAILs

None.

### Table

| Section | Layman | Notes |
|---|---|---|
| A real-life example | PASS | Facts, names, code identifiers and cites (1, 2, 4) match the Technical text. The added glosses (JSON Schema, `final_output`) are plain rewording. |

Open FAILs: 0
