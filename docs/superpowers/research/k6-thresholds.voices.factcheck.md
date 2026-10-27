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

Open FAILs: 0
