# Voices fact check: AI/ML Testing, Production Observability and Alerting

Page: `content/ai-ml-testing/production-observability.mdx`. Date: 2026-11-02. Each Layman and Bangla panel checked against the corrected Technical panel.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS, after fix | PASS, after fix | Phoenix cite and "fourth alert" wording fixed. |
| How it works | PASS, after fix | PASS, after fix | Canary cite removed. |
| In practice | PASS, after fix | PASS, after fix | Imports and sampling code corrected. |
| Common mistakes | PASS, after fix | PASS, after fix | Unsupported cites removed. |
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
| In plain words | PASS | Three layers, four day-one alerts, silent update and canary all match. All four cites match the Technical text. |
| How it works | PASS | Code block identical. Stratified sampling, the three alert parts and the canary match the Technical text. |
| In practice | PASS | All code blocks identical, including the thresholds, windows, owners and canary margins. Added sentences only introduce the code. |
| Common mistakes | PASS | All six mistakes match. The `{{cite:langsmith-trace}}` cite is on the same claim as in the Technical text. |

Open FAILs: 0
