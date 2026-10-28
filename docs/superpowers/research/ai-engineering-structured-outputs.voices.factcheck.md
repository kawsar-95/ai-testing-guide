# Voices fact-check: AI Engineering, Structured Outputs

Page: `content/ai-engineering/structured-outputs.mdx`. Checked 2026-10-28 by an agent that did not write the voices. Each `<Layman>` and `<Bangla>` panel was compared with the `<Technical>` panel of the same block.

| # | Section | Voice | Check | Verdict | Note |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | Same facts (broken JSON, missing field, wrong type; schema limits output; two Claude features; OpenAI JSON mode vs Structured Outputs; shape is not truth). Cites 1 and 3 only. | PASS | No new fact. |
| 2 | In plain words | Bangla | Same facts and cites. `output_config.format`, `strict: true`, JSON mode, Structured Outputs, API in English. Uses আপনি. | PASS | |
| 3 | How it works | Layman | Three steps, `required` and `additionalProperties`, Claude rule, unsupported features, 400 error, SDK transformation, grammar cache 24 h, extra system prompt. Points to the Technical code. Cites 1 and 2 only. | PASS | The recursive-schema example of the table is not repeated. That is a loss of an example, not of a fact or warning. |
| 4 | How it works | Bangla | Same facts as Layman. `minimum`, `maxLength`, `required`, `additionalProperties: false`, SDK in English. Uses আপনি. | PASS | |
| 5 | A real-life example | Layman | Triage helper, `max_tokens` cut-off, enum case, case-insensitive compare, OWASP encoding. Cites 1 and 4 only. | PASS | |
| 6 | A real-life example | Bangla | Same facts and cites. `stop_reason`, `enum`, OWASP in English. | PASS | |
| 7 | Common mistakes | Layman | Five mistakes, same facts, refusal 200 and billed warning kept, injection warning kept. Cites 1, 3, 4 only. | PASS | |
| 8 | Common mistakes | Bangla | Same facts and warnings. XSS, SQL injection, `stop_reason` in English. | PASS | |
| 9 | What a tester can check | Layman | Same five tutorial tips, marked as the tutorial's own advice. No cites. | PASS | |
| 10 | What a tester can check | Bangla | Same five tips, marked as the tutorial's own advice. `max_tokens`, `<script>`, SQL in English. Uses আপনি (imperative forms). | PASS | |

## Re-check

The Technical code change (row 13 of the technical report) is in a code block that the Layman and Bangla panels do not repeat. No voice text changed. All rows above stay PASS.

Open FAILs: 0
