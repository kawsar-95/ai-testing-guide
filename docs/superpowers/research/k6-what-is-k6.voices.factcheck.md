# Voices fact check: k6 / what-is-k6 (round 1)

Each Layman and Bangla panel was compared with the Technical panel of the same block.

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What k6 is | Layman | PASS | Same facts and cites. "operations engineers" and "testers" restate SREs and QA engineers. Sentences 25 words or less. |
| What k6 is | Bangla | PASS | Same facts, cites 1, 2. Names (k6, Go, JavaScript, AGPL-3.0, QuickPizza) stay in English. আপনি used. |
| JavaScript, but not Node.js | Layman | PASS | Same 3 effects, cite 4. |
| JavaScript, but not Node.js | Bangla | PASS | os, fs, `./helpers.js`, `k6/http` in English. আপনি used. |
| Why teams choose k6 | Layman | PASS | 10 rows match. Command identical. |
| Why teams choose k6 | Bangla | PASS | 10 rows match; metric/product names in English. |
| What k6 can test | Layman | PASS (round 2) | Browser sentence now matches Technical. |
| What k6 can test | Bangla | PASS | Same facts and cites 1, 2, 3, 8. |

Note: the uncited "Grafana Labs builds it" and the Go claims in Layman and Bangla copy the Technical text, so they follow the Technical FAILs 4, 6, 9 of `k6-what-is-k6.factcheck.md`. Fix them in all three panels.

## Round 2

- What k6 is, Layman and Bangla: the "performance of Go with the scripting familiarity of JavaScript" sentence matches Technical and S2. "Grafana Labs builds it" is gone; "The docs call it Grafana k6" matches Technical. PASS.
- Table row 2: Layman "speed of Go" (synonym, same meaning), Bangla "Go-এর performance". PASS.
- Non-blocking note: Layman opens with "a free tool"; Technical says "open-source". Not a FAIL, but "open source" alone is safer.

## Round 3 (final-review fixes)

Commit f1ff844 changed one Layman sentence in "What k6 is": "a free tool ... It is open source" became "an open-source tool that tests how an app behaves under load <Cite n={1} />". Technical says "an open-source tool for performance testing <Cite n={1} />". Same fact, same cite, no new claim; "free" is gone. Sentence is under 25 words. PASS. Bangla and the other panels are unchanged.

Open FAILs at the end of the rounds above: 0

## Lighter সহজ English panels (2026-11-10)

The `সহজ English` (Layman) panel of 1 section was rewritten to lower the reading load: `What k6 can test and how you extend it`. The cognitive-load audit of 2026-11-10 found it as dense in technical terms as the Technical text, or denser, so a reader who switched voice to escape the load met the same terms. The new text keeps to the facts of the Technical text, says a term in plain words or leaves it out when a beginner does not need it, and uses short sentences and lists.

Writer: a `claude -p` session (Claude Sonnet, no tools). Checker: a fresh `claude -p` session (Claude Sonnet, no tools) that did not write the panels, given only the Technical text and the new panel of each section. The Technical text and the Bangla panels did not change. No person has read the new panels yet.

### FAILs

None.

### Table

| Section | Layman | Notes |
|---|---|---|
| What k6 can test and how you extend it | PASS | Protocols, browser API, 4 extension types, xk6 and k6 Studio all match the Technical text. Cites 3, 1, 8, 3 and 2 are on the same claims as in the Technical text. |

Open FAILs: 0
