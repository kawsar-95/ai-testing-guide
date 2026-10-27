# Voices fact-check: content/k6/scenarios-and-executors.mdx

Checked 2026-10-27 by an agent that did not write the voices. Each `<Layman>` and `<Bangla>` panel was compared with the `<Technical>` panel of the same block (6 sections with voices; Key words has none).

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| Why one script needs many scenarios | PASS | PASS | Same facts, same cite 1. Bangla keeps `startTime`, `scenarios`, `options`, VU, iteration in Latin. |
| A traffic-mix example | PASS | PASS | Same split, numbers (100,000; 30,000-40,000; 50/20/10/10/10), cites 5, 10, 1. Placeholder host kept. The table is turned into a sentence list with no change of meaning. |
| Common scenario options | PASS | PASS | All defaults restated (`"0s"`, `"30s"`, `"default"`). QuickPizza, 10 s `startTime`, `env`, `tags` match. The last paragraph repeats Technical's claims about the summary block and tag filtering (FAIL #15 and #16 of the Technical report); if the Technical text changes, change both panels the same way. |
| The executors | PASS | PASS | Six executors, models, shortcuts, `externally-controlled` removal, SharedArray note all match. No example or cite added. |
| Open and closed models | PASS | PASS | 6 s, 10 and 60 iterations, 11 VUs, coordinated omission match. Bangla keeps `constant-vus`, `constant-arrival-rate` in Latin. |
| An arrival-rate example | PASS | PASS | Options, defaults, 100 ms, `sleep()`, `maxVUs` point match. The `maxVUs` too-low claim repeats Technical (FAIL #43 of the Technical report); change both panels together. |

Other checks:

- No new fact, number, name, example, or cite in any Layman or Bangla panel (every `<Cite n>` used is also used in the Technical panel of the block).
- Bangla: no command, flag, option, metric, or product name in Bangla letters. All use Latin (`executor`, `iteration`, `VU`, `SharedArray`, `k6`, `Grafana Cloud k6`). Reader addressed with আপনি; no তুমি.
- Layman: no sentence over 25 words (script check after removing cites and code).
- Meaning changes: none found.


## Round 2

Changed text re-compared: the "Every executor accepts `gracefulStop`" line, the summary/tags sentences, and the `dropped_iterations` / `maxVUs` sentences in Layman and Bangla match the new Technical text and cite the same n (1, 12, 13, 4). Cite 13 is used in Technical. No new fact; Bangla keeps `dropped_iterations`, `maxVUs`, `gracefulStop` in Latin. PASS.

Open FAILs: 0
