# Voices fact-check: k6 reading-results

Each Layman and Bangla panel was compared with the Technical panel of the same block (6 blocks; Key words has no voices).

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| The end-of-test summary | PASS | PASS | Same modes, cites, and output block. Layman drops "aggregated" and the `--no-summary` history order only. No new fact. |
| The built-in metrics | PASS | PASS | Same tables and cites. Layman and Bangla shorten two descriptions (`checks`, `dropped_iterations`) but add no fact. |
| An example run | PASS | PASS | Same numbers, same cite, same arithmetic. |
| Average, median, and percentiles | PASS | PASS | Same example (92 x 65 ms, 8 x 3 s, 299.8 ms), same cites. |
| Which metrics to read first | PASS | PASS | Same list and cites. |
| A checklist to read a result | PASS | PASS | Same 7 items and cite. |

Other checks:
- No Layman sentence over 25 words (script check).
- No `তুমি` in the file; Bangla uses আপনি forms.
- Bangla keeps commands, flags, metric names, and product names in English letters.
- No Cite `n` appears in a Layman or Bangla panel that Technical of the same block does not cite.
- Round 2: the changed text of claims 16 and 25 matches Technical in Layman and Bangla (PASS).
- Note: the two Technical FAILs (claims 16 and 25 in the main report) are copied into the voices unchanged, so fixing them in Technical means the same edit in Layman and Bangla.


Open FAILs at the end of the rounds above: 0

## Lighter সহজ English panels (2026-11-10)

The `সহজ English` (Layman) panels of 2 sections were rewritten to lower the reading load: `The built-in metrics`, `Which metrics to read first`. The cognitive-load audit of 2026-11-10 found them as dense in technical terms as the Technical text, or denser, so a reader who switched voice to escape the load met the same terms. The new text keeps to the facts of the Technical text, says a term in plain words or leaves it out when a beginner does not need it, and uses short sentences and lists.

Writer: a `claude -p` session (Claude Sonnet, no tools). Checker: a fresh `claude -p` session (Claude Sonnet, no tools) that did not write the panels, given only the Technical text and the new panel of each section. The Technical text and the Bangla panels did not change. No person has read the new panels yet.

### FAILs

None.

### Table

| Section | Layman | Notes |
|---|---|---|
| The built-in metrics | PASS | Types, tables, the `http_req_duration` note and cites all match the Technical text. Only details were left out (setup and teardown time, the `checks` summary names, `setResponseCallback`). |
| Which metrics to read first | PASS | Matches the Technical text. The owner's-view caveat is kept, and the cites are the same. |

Open FAILs: 0
