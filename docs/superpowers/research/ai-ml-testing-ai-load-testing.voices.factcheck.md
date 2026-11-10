# Voices fact check: AI/ML Testing, Load and Performance Testing for AI Systems

Page: `content/ai-ml-testing/ai-load-testing.mdx`. Date: 2026-11-02. Each Layman and Bangla panel checked against the corrected Technical panel.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS, after fix | PASS, after fix | Rate-limit cite repointed. |
| How it works | PASS, after fix | PASS, after fix | Task-mix arithmetic corrected; token-count comment. |
| In practice | PASS, after fix | PASS, after fix | No change. |
| Common mistakes | PASS, after fix | PASS, after fix | Mistake 1 corrected. |
| What a tester can check | PASS | PASS | Same content, cites, and code as Technical. |
| Key words | n/a | n/a | No voices (rule). |

## Bangla language

| Check | Verdict |
|---|---|
| আপনি-register verbs on instructions | PASS |
| Tool names, code, acronyms stay in English | PASS |
| Grammar and natural wording in changed sentences | PASS |
| Numbers match Technical | PASS |

Open FAILs at the end of the rounds above: 0

## The new সহজ English panels (2026-11-10)

The `<Layman>` (সহজ English) panels of 4 sections were in Bangla, not plain English: `In plain words`, `How it works`, `In practice`, `Common mistakes`. The rounds above checked the facts of these panels, not their language. The site now tests that rule: `voiceErrors` in `lib/voice-source.ts` fails a `<Layman>` panel when more than 2 % of the letters that a reader reads are Bangla (code, tags, and URLs do not count), and a `<Bangla>` panel when fewer than 20 % are.

The panels were written again in plain English from the Technical text of the same section, with every code block of that text copied, by a `claude -p` session (Claude Sonnet, no tools). Checker: a fresh `claude -p` session (Claude Sonnet, no tools) that did not write them, given only the Technical text and the new panel of each section. The Technical text and the Bangla panels did not change. No person has read the new panels yet.

### FAILs

None.

### Table

| Section | Layman | Notes |
|---|---|---|
| In plain words | PASS | Facts, the `max_tokens` advice, the rate-limit point and the cite all match the Technical text. |
| How it works | PASS | Prose, cites and all three code blocks match the Technical text. |
| In practice | PASS | The budgets, the tests and the `output_tokens > 50` reason match. The code blocks are the same. |
| Common mistakes | PASS | All six mistakes and both cites (`anthropic-temp`, `locust`) match. |

Open FAILs: 0
