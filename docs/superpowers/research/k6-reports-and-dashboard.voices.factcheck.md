# Voices fact-check: k6 reports-and-dashboard

Each Layman and Bangla panel compared with the Technical panel of the same block. Layman sentences were counted by script (none over 25 words). Bangla checked for `তুমি` forms and for command, flag, metric, and product names in Bangla letters.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| Pick the right output | PASS | PASS | Same 4 ways, same cites, no new fact |
| Write your own summary with handleSummary | PASS | PASS | Same facts, numbers (`0.0.2`, v1.5.0, 2 options), keys, cites |
| Use the built-in web dashboard | PASS | PASS | Variable table is restated in prose with the same defaults |
| Save the dashboard as an HTML report | PASS | PASS | Same 3x rule, same observed results |
| Save raw results to a file | PASS | PASS | Same facts and cites |
| The older summary export | PASS | PASS | Same removals and cites |
| Duration and iterations together | PASS | PASS (round 2) | Round 2: now "চালান" and "থামুন" (আপনি form). Was: "১০০টা VU-র মধ্যে ভাগ করে ১০০টা iteration চালাও ... থামো" uses the তুমি imperative (`চালাও`, `থামো`). The address form must be আপনি (`চালান`, `থামুন`), or use a neutral form ("চলে", "থামে"). |

Other checks: no added fact, number, name, or cite; no meaning change; Layman text has no sentence over 25 words; commands, flags, env vars, and metric names stay in English in all Bangla panels.


## Round 2: example-project callout (2026-10-27)

Source: owner repository kawsar-95/k6-performance-testing, commit 51e4b9e (clone read only, nothing run). Facts about the owner project have no Cite.

| Check | Verdict | Note |
|---|---|---|
| Layman: same facts as Technical, no new fact, sentences 25 words or fewer | PASS | longest 22 words. Round 3: Layman now says tables go to `.md` and the summary data to `.json`, as Technical does. Longest sentence still 22 words. |
| Bangla: same facts; `handleSummary()`, `.md`, `.json`, `setup_data`, API, token, HTML reporter stay English | PASS | matches Technical (tables to `.md`, summary data to `.json`; `.md`, `.json`, `setup_data` stay English). |

Round 3 re-check (2026-10-27): all 3 panels (lines 108, 133, 158 of the MDX) match Technical and lines 255 and 257 of dmoney-transactions.k6.js.

## Round 4 (final-review fixes)

Changed panels: `handleSummary` section, Layman and Bangla (commit f1ff844). Both give the same facts as the Technical panel: v2.3.0 not yet default, the 5 keys, "observed result, not from a source". No new fact, number, or cite; no তুমি form; names stay in English; no Layman sentence over 25 words. PASS. Note: the `setup_data` claim itself is a FAIL in the Technical text (factcheck row 48); when the writer fixes it, the 2 panels must change with it.

## Round 5 (commit ed1c428)

Layman and Bangla panels of the `handleSummary` section re-read against the Technical panel: same 4 keys, same `setup()` and `setup_data` statement, same "observed results" label, no new fact or cite, no তুমি form, names in English, no Layman sentence over 25 words. PASS.

Open FAILs at the end of the rounds above: 0

## Lighter সহজ English panels (2026-11-10)

The `সহজ English` (Layman) panels of 2 sections were rewritten to lower the reading load: `Write your own summary with handleSummary`, `Save raw results to a file`. The cognitive-load audit of 2026-11-10 found them as dense in technical terms as the Technical text, or denser, so a reader who switched voice to escape the load met the same terms. The new text keeps to the facts of the Technical text, says a term in plain words or leaves it out when a beginner does not need it, and uses short sentences and lists.

Writer: a `claude -p` session (Claude Sonnet, no tools). Checker: a fresh `claude -p` session (Claude Sonnet, no tools) that did not write the panels, given only the Technical text and the new panel of each section. The Technical text and the Bangla panels did not change. No person has read the new panels yet.

### FAILs

None.

### Table

| Section | Layman | Notes |
|---|---|---|
| Write your own summary with handleSummary | PASS | Facts, numbers, flags, version claims and cites all match the Technical text. |
| Save raw results to a file | PASS | Matches the Technical text. "Compressed" is a fair gloss of gzip. Cites 4 and 5 are used as in the Technical text. |

Open FAILs at the end of the rounds above: 0

## Second pass on the dense সহজ English panels (2026-11-11)

The `সহজ English` panels of `Write your own summary with handleSummary`, `Save raw results to a file` still had as many terms per 100 words as the Technical text after the first pass. They were rewritten again: longer is allowed, each kept term gets a short explanation from the Technical text, and the terms are spread over more sentences. Writer and checker: separate fresh `claude -p` sessions (Claude Sonnet, no tools). No person has read the new panels.

### FAILs

None.

### Table

| Section | Layman | Notes |
|---|---|---|
| Write your own summary with handleSummary | PASS | Content, cites, flags, versions and names match the Technical text. The glosses (map, ArrayBuffer, threshold, VU) are short and allowed. |
| Save raw results to a file | PASS | Content and cites 4 and 5 match the Technical text. "Compressed" is a fair gloss of gzip. |

Open FAILs: 0
