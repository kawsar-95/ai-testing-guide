# Voices fact check: How AI Agents Work, Guardrails

Page: `content/ai-agents/guardrails.mdx`. Checker: an agent that did not write the voices. Date: 2026-10-28. Each Layman and Bangla panel is checked against the Technical panel of the same section.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS | PASS | Same definition, same 3 OWASP root causes, same 6 controls (the table is a list in both). "websites" for "network hosts" is a plain-word match. Cite 8 is in Technical. |
| How it works | FAIL, fixed | FAIL, fixed | Both copied the Technical mode error ("default mode"). Fixed together with Technical: "Manual mode (the `default` mode)", plus the 2 exceptions (inside the working folders; built-in read-only commands). Other facts and numbers match (twice, 2–3 times, `max_retries`, the 2 exception names). Cites 1–7 are in Technical. |
| A real-life example | FAIL, fixed | FAIL, fixed | Both said the proxy blocks any host that is not on the list. Fixed together with Technical: the team runs in `dontAsk` mode, so the sandbox refuses the connection. Both say the example is invented. They drop the text diagram (no fact lost). |
| Common mistakes | PASS | PASS | Same 8 items. Cites 1, 2, 3, 5, 8 in Technical. |
| What a tester can check | PASS | PASS | Tutorial advice, no cites in any voice. Same 8 items. |
| Key words | n/a | n/a | No voices (rule). |

## Bangla language

| Check | Verdict |
|---|---|
| Addresses the reader with আপনি (আপনি ... নিয়ম লিখতে পারেন, রাখুন, দিন, দেখুন) | PASS |
| Product names, code, and terms stay in English (Claude Code, OpenAI Agents SDK, OWASP, Excessive Agency, `needs_approval`, `canUseTool`, `dontAsk`, `max_turns`, `is_error`, tripwire, sandbox, proxy) | PASS |
| Grammar and natural wording | PASS. The new sentences ("Manual mode-এ (`default` mode) Bash command আগে জিজ্ঞেস করে, শুধু কিছু built-in read-only command ছাড়া।", "CI-তে prompt-এর উত্তর দেওয়ার কেউ নেই, তাই টিম agent-কে `dontAsk` mode-এ চালায়।") read naturally. |
| Numbers match Technical (3 causes, 6 controls, twice, 2–3 times, 60 seconds, 8 tester checks) | PASS |

## Fixes

1. "How it works", Layman and Bangla: mode name and the two permission exceptions, as in Technical.
2. "A real-life example", Layman and Bangla: the host refusal is tied to `dontAsk` mode, as in Technical.

Open FAILs: 0
