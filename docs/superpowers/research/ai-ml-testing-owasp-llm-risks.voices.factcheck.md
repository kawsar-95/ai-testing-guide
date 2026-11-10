# Voices fact check: AI/ML Testing, OWASP Top 10 for LLMs

Page: `content/ai-ml-testing/owasp-llm-risks.mdx`. Checker: an agent that did not write the voices. Date: 2026-11-02. Each Layman and Bangla panel is checked against the (now-corrected) Technical panel of the same section.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS | PASS | Same ten-item code block, same direct/indirect distinction, same NIST four functions. Bangla keeps "OWASP", "NIST", "LLM01"-"LLM10", "govern/map/measure/manage" in English as required. |
| How it works | PASS, after fix | PASS, after fix | Same risk-to-layer table in all three. After the Technical fix (the added system-prompt-leakage sentence, cited to source 1), both Layman and Bangla got the matching sentence: "একটা system prompt কোনো গোপন বিষয় নয়" ("a system prompt is not a secret"), with "credential, connection string" kept in English as a tool/technical term. Cites 1, 2, 3 all present in Technical and mirrored in the other two panels' cite markers. |
| In practice | PASS | PASS | Same three Python code blocks and the same "map every finding to its OWASP id" closing line, translated consistently. No cites in this section (correct; the page-shape rule excludes `<Cite>` from "In practice"). |
| Common mistakes | PASS | PASS | Same six mistakes, same two cites (1 and 2) in the same places across all three panels. |
| What a tester can check | PASS | PASS | Tutorial-advice callout, identical five bullet points, no cites (correct; labeled "does not come from the sources" in all three). |
| Key words | n/a | n/a | No voices (rule). |

## Bangla language

| Check | Verdict |
|---|---|
| Addresses the reader with আপনি-register verbs where the text gives an instruction (পাঠান, দেখুন, বসান, চেষ্টা করুন, রাখুন) | PASS |
| Tool names, code, and acronyms stay in English (OWASP, NIST, LLM01-LLM10, DAN, Promptfoo-style code identifiers, "credential, connection string") | PASS |
| Grammar and natural wording | PASS |
| Numbers match Technical (ten risks, three test types named, six mistakes, five tutorial-advice bullets) | PASS |

Open FAILs at the end of the rounds above: 0

## The new সহজ English panels (2026-11-10)

The `<Layman>` (সহজ English) panels of 4 sections were in Bangla, not plain English: `In plain words`, `How it works`, `In practice`, `Common mistakes`. The rounds above checked the facts of these panels, not their language. The site now tests that rule: `voiceErrors` in `lib/voice-source.ts` fails a `<Layman>` panel when more than 2 % of the letters that a reader reads are Bangla (code, tags, and URLs do not count), and a `<Bangla>` panel when fewer than 20 % are.

The panels were written again in plain English from the Technical text of the same section, with every code block of that text copied, by a `claude -p` session (Claude Sonnet, no tools). Checker: a fresh `claude -p` session (Claude Sonnet, no tools) that did not write them, given only the Technical text and the new panel of each section. The Technical text and the Bangla panels did not change. No person has read the new panels yet.

### FAILs

None.

### Table

| Section | Layman | Notes |
|---|---|---|
| In plain words | PASS | The risk list, the direct and indirect injection definitions, the NIST framing and the cites all match the Technical text. |
| How it works | PASS | The layer table, the tests, the warnings about the system prompt and the cites all match the Technical text. |
| In practice | PASS | The code blocks are identical, and the added sentences only describe what the code shows. |
| Common mistakes | PASS | All six mistakes keep their meaning, and the cites are unchanged. |

Open FAILs: 0
