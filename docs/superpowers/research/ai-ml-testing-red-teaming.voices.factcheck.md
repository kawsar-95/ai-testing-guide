# Voices fact check: AI/ML Testing, Red Teaming with Promptfoo and Giskard

Page: `content/ai-ml-testing/red-teaming.mdx`. Date: 2026-11-02. Each Layman and Bangla panel checked against the corrected Technical panel.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS, after fix | PASS, after fix | The hallucination/vulnerability-category correction and the `vulnerability_scan`/`quality_scan` split were applied identically to all three panels (confirmed by re-grepping for the old "injection, hallucination, harmful content, discrimination" phrase: zero remaining occurrences in the generated page). |
| How it works | PASS, after fix | PASS, after fix | The severity-to-pass/fail-verdict rewrite and the `quality_scan` mention landed in Technical and were mirrored into Layman/Bangla with the same Bangla gloss ("pass বা fail verdict judge-এর যুক্তিসহ", "automatic severity score নয়"). Code blocks (YAML config) are identical across panels and unchanged, since they were already accurate. |
| In practice | PASS, after fix | PASS, after fix | The new Giskard `vulnerability_scan` code block and the new `test_no_new_failing_scenario` function are plain code, shared byte-for-byte across all three panels (confirmed: the replace_all patch touched all three in one pass). Surrounding prose ("Run Giskard's `vulnerability_scan` against the same target...") translated consistently. |
| Common mistakes | PASS, after fix | PASS, after fix | Mistake 5 changed from "no severity baseline" to "no failure baseline" in Technical, Layman ("failure baseline নেই"), and Bangla ("failure baseline নেই") with matching explanations. |
| What a tester can check | PASS, after fix | PASS, after fix | The "severity baseline file" bullet became "baseline file of known-failing scenarios" in all three panels; verified no leftover duplicate line from the edit (checked after a stray duplicated "every run." line from an earlier patch was caught and removed). |
| Key words | n/a | n/a | No voices (rule). Table itself updated: "Severity baseline" to "Failure baseline", "vulnerability types" to "threat types" in the Threat taxonomy row. |

## Bangla language

| Check | Verdict |
|---|---|
| আপনি-register verbs on instructions (চালান, মিশান, রাখুন, লিখুন) | PASS |
| Tool/API names, code identifiers stay in English (`vulnerability_scan`, `quality_scan`, `giskard.scan`, OWASP ids, Promptfoo plugin names) | PASS |
| Grammar and natural wording in the rewritten sentences | PASS |
| Numbers match Technical (OWASP ids in the mapping table, six mistakes, five tutorial-advice bullets) | PASS |

Open FAILs at the end of the rounds above: 0

## The new সহজ English panels (2026-11-10)

The `<Layman>` (সহজ English) panels of 4 sections were in Bangla, not plain English: `In plain words`, `How it works`, `In practice`, `Common mistakes`. The rounds above checked the facts of these panels, not their language. The site now tests that rule: `voiceErrors` in `lib/voice-source.ts` fails a `<Layman>` panel when more than 2 % of the letters that a reader reads are Bangla (code, tags, and URLs do not count), and a `<Bangla>` panel when fewer than 20 % are.

The panels were written again in plain English from the Technical text of the same section, with every code block of that text copied, by a `claude -p` session (Claude Sonnet, no tools). Checker: a fresh `claude -p` session (Claude Sonnet, no tools) that did not write them, given only the Technical text and the new panel of each section. The Technical text and the Bangla panels did not change. No person has read the new panels yet.

### FAILs

None.

### Table

| Section | Layman | Notes |
|---|---|---|
| In plain words | PASS | Matches the Technical text. Cites, command, and the three jailbreak families are all kept. |
| How it works | PASS | The three steps, the YAML, the OWASP table, and the severity-is-human point all match. |
| In practice | PASS | The code blocks are identical, and the baseline warning is kept. |
| Common mistakes | PASS | All six mistakes match. The cite keys sit on the same claims as in the Technical text. |

Open FAILs: 0
