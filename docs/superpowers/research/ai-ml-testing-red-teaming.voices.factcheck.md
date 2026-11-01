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

Open FAILs: 0
