# Voices fact-check: Observability for AI Agents (2026-10-28)

Page: `content/ai-concepts/observability.mdx`. I did not write this page or its voices.

Method: I read the 5 `<Voices>` blocks (the "Key words" section has no voices). For each `<Layman>` and `<Bangla>` panel I compared every sentence with the `<Technical>` panel of the same block. FAIL rules: a fact, number, name, or cite that Technical does not give; a dropped hedge; a wrong statement; a wrong or unnatural Bangla sentence; the reader not addressed with আপনি; a product name, code, or technical term put into Bangla letters. An omission is not a FAIL.

General checks:

- `node --test tests/voice-source.test.ts tests/ai-concepts.test.ts`: PASS (27 tests).
- Numbers and names match in all voices: four signals, steps 1–4, five steps under the run, 30 seconds, `error.type=timeout`, USD, `CLAUDE_CODE_ENABLE_TELEMETRY=1`, `CLAUDE_CODE_ENHANCED_TELEMETRY_BETA=1`, `OTEL_TRACES_EXPORTER`, `claude_code.token.usage`, `claude_code.cost.usage`, `cost_usd`, `prompt.id`, `claude_code.interaction`, `OTEL_LOG_USER_PROMPTS`, `OTEL_LOG_TOOL_DETAILS`, `user.email`, `gen_ai.evaluation.result`, `invoke_agent`, `execute_tool`, `chat`.
- Names and terms stay in English in Bangla: OpenTelemetry, Claude Code, Anthropic, trace, span, metric, log, telemetry, token, backend, eval, OAuth, CI, locator. PASS.
- Bangla addresses the reader with আপনি forms (দেখুন, খুলুন, চালান, দিন, করুন, রাখুন). PASS.

| # | Section | Voice | What the panel says (checked against Technical) | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | Observability, telemetry [1]; signals [2]; trace, span, metric, log; agent run; transcript [10]; Development [3], breaking changes [8] | FAIL → fixed | Repeated the Technical errors "the open standard for telemetry" and "three main kinds of data". Fixed with Technical: "OpenTelemetry supports four kinds of data (signals): traces, metrics, logs, and baggage [2]. This page uses the first three:". Re-check: PASS. |
| 2 | In plain words | Bangla | Same | FAIL → fixed | Same errors ("ওপেন স্ট্যান্ডার্ড", "তিনটা প্রধান সিগন্যাল"). Fixed: "OpenTelemetry চারটা সিগন্যাল (signal) সাপোর্ট করে: trace, metric, log, আর baggage [2]। এই পেজে প্রথম তিনটা নিয়ে কথা হবে:". Re-check: PASS. |
| 3 | How it works | Layman | Operation names [5], span names [4][5], tree in words, tokens and `error.type` [4], tool name [5], three metrics [6], evaluation event [7], backend, no cost metric [6], Claude Code facts [9] | PASS | Same facts and cites. "Steps 1 and 3 are model calls. Steps 2 and 4 are tool calls." restates the Technical tree. "beta and off by default" kept. |
| 4 | How it works | Bangla | Same | PASS | Natural Bangla. "আনুমানিক হিসাব" keeps the "estimated" hedge. |
| 5 | Trade-offs | Layman | Sensitive content [5], personal data [4], opt-in [5], tool args opt-in [5], external storage [5], Claude Code defaults [9], which vs why | PASS | "put only a link to it" restates "record only a reference". "will likely contain" keeps "likely". |
| 6 | Trade-offs | Bangla | Same | PASS | "(PII)" is the source term for "personal data", not a new fact. "সম্ভবত" keeps the hedge. |
| 7 | A real-life example | Layman | Says "invented example"; trace in words; three facts; `error.type` cite; two actions [10] | FAIL → fixed | `error.type` on the tool span cited [4]; Technical changed to [5] (the tool span is defined in source 5). Fixed to [5]. Re-check: PASS. |
| 8 | A real-life example | Bangla | Says "বানানো উদাহরণ"; same steps | FAIL → fixed | Same cite. Fixed to [5]. Re-check: PASS. |
| 9 | Common mistakes | Layman | Same six mistakes and cites | PASS | "Automatic tools" restates "automatic instrumentation". |
| 10 | Common mistakes | Bangla | Same six mistakes | PASS | Natural Bangla. |
| 11 | What a tester can check | Layman | Same seven checks; says it is the tutorial's own advice; no cites | PASS | Same checks. |
| 12 | What a tester can check | Bangla | Same seven checks; no cites | PASS | Natural Bangla, আপনি forms. |

Panels checked: 10. FAILs found: 4 (2 from the "three main signals" error, 2 from the tool-span cite). Fixed: 4.

Open FAILs: 0
