# Voices fact check: k6 thresholds

Each Layman and Bangla panel was compared with the Technical panel of the same block (6 blocks, 12 panels).

| Block | Layman | Bangla | Notes |
| --- | --- | --- | --- |
| What a threshold is | PASS | PASS | Same facts, cites 1 and 2 |
| The owner's example | PASS | PASS | Cites 1 and 3 as in Technical. The stage sentence repeats the copy problem of Technical row 9; it is fixed with the Technical text |
| Syntax by metric type | PASS | PASS | Table identical; Callout facts present |
| Fail a test with checks | PASS | PASS | Bangla now says "fail হওয়া check". Fixed in round 2: now "fail হওয়া check" |
| Tags and groups | PASS | PASS | Same keys, same cites |
| Abort on fail | PASS | PASS | Same table, 60 s note, 5 s and 30 s values |

Checks done:
- No fact, number, name, example, or cite that Technical lacks.
- Bangla keeps commands, flags, metric names, and product names in English letters.
- Bangla uses আপনি; no তুমি.
- No Layman sentence over 25 words (scripted check).
- `node --test tests/voice-source.test.ts tests/k6.test.ts`: pass 29, fail 0.

Round 2: changed text (CI sentence, stage sentence, Bangla checks sentence) re-read; panels match Technical.


## Round 2: example-project callout (2026-10-27)

Source: owner repository kawsar-95/k6-performance-testing, commit 51e4b9e (clone read only, nothing run). Facts about the owner project have no Cite.

| Check | Verdict | Note |
|---|---|---|
| Layman: same facts; "3 thresholds" is the count of the 3 listed in Technical (p(95), failure rate, check rate); sentences 25 words or fewer | PASS | longest 18 words |
| Bangla: same facts, `api`, `p(95)`, `http_req_duration{api:deposit}`, threshold, tag stay English | PASS | matches Technical |

Open FAILs at the end of the rounds above: 0

## Lighter সহজ English panels (2026-11-10)

The `সহজ English` (Layman) panel of 1 section was rewritten to lower the reading load: `Threshold syntax by metric type`. The cognitive-load audit of 2026-11-10 found it as dense in technical terms as the Technical text, or denser, so a reader who switched voice to escape the load met the same terms. The new text keeps to the facts of the Technical text, says a term in plain words or leaves it out when a beginner does not need it, and uses short sentences and lists.

Writer: a `claude -p` session (Claude Sonnet, no tools). Checker: a fresh `claude -p` session (Claude Sonnet, no tools) that did not write the panels, given only the Technical text and the new panel of each section. The Technical text and the Bangla panels did not change. No person has read the new panels yet.

### FAILs

None.

### Table

| Section | Layman | Notes |
|---|---|---|
| Threshold syntax by metric type | PASS | Every fact, number, name and cite matches the Technical text. Only the callout wording and the code block are left out, which is allowed. |

Open FAILs at the end of the rounds above: 0

## Second pass on the dense সহজ English panels (2026-11-11)

The `সহজ English` panel of `Threshold syntax by metric type` still had as many terms per 100 words as the Technical text after the first pass. They were rewritten again: longer is allowed, each kept term gets a short explanation from the Technical text, and the terms are spread over more sentences. Writer and checker: separate fresh `claude -p` sessions (Claude Sonnet, no tools). No person has read the new panels.

### FAILs

None.

### Table

| Section | Layman | Notes |
|---|---|---|
| Threshold syntax by metric type | PASS | Facts, table, examples and cites all match the Technical text. The glosses of "threshold" and "custom metrics" are supported by it. |

Open FAILs: 0
