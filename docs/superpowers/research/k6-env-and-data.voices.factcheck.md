# Voices fact-check: k6 env-and-data

Checked 2026-10-27 by an agent that did not write the page. Each `<Layman>` and `<Bangla>` panel was compared with the `<Technical>` panel of the same block.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| Why pass values from outside the script | PASS | PASS | Same two benefits, same "tutorial's own view" label, same cite 6. No new fact |
| Pass values with __ENV and -e | PASS | PASS | Same script, command, `freeze-env` fact, cites 1 and 2. Bangla keeps `__ENV`, `-e`, `--env`, `K6_ITERATIONS`, `options` in English |
| System environment variables | PASS | PASS | Same defaults (`true` for `k6 run`, `false` otherwise), same three commands, same reason, same cites. Bangla keeps flag names in English |
| Keep secrets out of the logs | PASS | PASS | Same sources (`file`, `mock`, `url`), same script, same output block and cite 6 |
| Read data from a CSV file | PASS | PASS | Same facts and cites 3, 4, 5, 7. Same `.map()`/`.filter()` caution |
| Parse a CSV file with Papa Parse | PASS | PASS | Same facts and cite 5 (claim 30 of the fact-check is a Technical problem; the panels agree with it) |
| Use unique data for each VU and iteration | PASS (see below) | PASS | Same numbers, same cites 5, 7, 8. Bangla keeps `exec.vu.idInTest`, `__VU`, `__ITER` in English |

Checks done:

- No fact, number, name, example, or cite in a Layman or Bangla panel that Technical does not give. PASS.
- Every `<Cite n>` in Layman and Bangla is cited in Technical of the same block. PASS.
- Bangla uses আপনি; no তুমি or তোমার (0 matches). PASS.
- Bangla command, flag, metric, and product names stay in English (`--include-system-env-vars`, `--secret-source`, `SharedArray`, `k6/secrets`, Papa Parse, `jslib.k6.io`). PASS.
- Layman sentence length: one sentence is over 25 words (31 by space count, with the four code samples counted as words): "The tutorial's own check on k6 v2.3.0 with 2 VUs and 4 iterations printed `VU 1 ITER 0`, `VU 1 ITER 1`, `VU 1 ITER 2`, and `VU 2 ITER 0`." Last paragraph of the Layman panel of the last section. FAIL: split it into two sentences.
- Round 2: PASS (round 2). The sentence is split (13 and about 17 counted words). The new sentence "The split of iterations between VUs can differ from run to run." is in Technical, Layman, and Bangla alike. Cite 9 and the K6_VUS 5/20 change are in all three panels. No Layman sentence over 25 words (script check).

Open FAILs: 0
