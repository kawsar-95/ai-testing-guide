# Voices fact check: AI/ML Testing, Guardrails, Output Validation, and Bias Testing

Page: `content/ai-ml-testing/guardrails-bias.mdx`. Date: 2026-11-02. Each Layman and Bangla panel checked against the corrected Technical panel.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS | PASS | Same Guardrails AI / NeMo / DeepEval / OWASP framing, same four cites, in all three panels. |
| How it works | PASS, after fix | PASS, after fix | The five-rail-types correction ("NeMo's rails sit at different points in the flow; the three a tester interacts with most are input, dialog, and output, and NeMo also has retrieval and execution rails...") was mirrored into Layman and Bangla with the matching Bangla clause ("retrieval আর execution rails-ও আছে"). The three-row text diagram is unchanged and still accurate. |
| In practice | PASS | PASS | Same Guardrails AI validator code, NeMo Colang rail, and bias/data-leakage test code, identical across all three panels; no changes needed here (the issues found were in prose and in the red-teaming page's code, not this page's code). |
| Common mistakes | PASS | PASS | Same six mistakes, same cites, consistent across panels. |
| What a tester can check | PASS | PASS | Five tutorial-advice bullets, identical, no cites (correct). |
| Key words | n/a | n/a | No voices (rule). |

## Bangla language

| Check | Verdict |
|---|---|
| আপনি-register verbs on instructions (রাখুন, চালান, বানান) | PASS |
| Tool/API names, code identifiers stay in English (Guardrails AI, NeMo Guardrails, DeepEval, `BiasMetric`, `num_reasks`, rail names) | PASS |
| Grammar and natural wording in the rewritten NeMo sentence | PASS |
| Numbers match Technical (five rail types now named instead of implying three, six mistakes, five tutorial bullets) | PASS |

Open FAILs at the end of the rounds above: 0

## The new সহজ English panels (2026-11-10)

The `<Layman>` (সহজ English) panels of 4 sections were in Bangla, not plain English: `In plain words`, `How it works`, `In practice`, `Common mistakes`. The rounds above checked the facts of these panels, not their language. The site now tests that rule: `voiceErrors` in `lib/voice-source.ts` fails a `<Layman>` panel when more than 2 % of the letters that a reader reads are Bangla (code, tags, and URLs do not count), and a `<Bangla>` panel when fewer than 20 % are.

The panels were written again in plain English from the Technical text of the same section, with every code block of that text copied, by a `claude -p` session (Claude Sonnet, no tools). Checker: a fresh `claude -p` session (Claude Sonnet, no tools) that did not write them, given only the Technical text and the new panel of each section. The Technical text and the Bangla panels did not change. No person has read the new panels yet.

### FAILs

None.

### Table

| Section | Layman | Notes |
|---|---|---|
| In plain words | PASS | Matches the Technical text, and the cites are used on the same claims. |
| How it works | PASS | Only reworded. Both code blocks are identical to the Technical text and the cites are unchanged. |
| In practice | PASS | All code blocks are identical to the Technical text, and the prose only restates what they show. |
| Common mistakes | PASS | All six mistakes keep their meaning and conditions, and the cites are unchanged. |

Open FAILs: 0
