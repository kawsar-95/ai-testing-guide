# Voices fact check: k6 api-flows

Each Layman and Bangla panel was compared with the Technical panel of the same block. Checked by an agent that did not write the voices.

| Section | Layman | Bangla |
|---|---|---|
| The login flow in plain words | PASS (text diagram left out, no new fact) | PASS |
| Send a POST body: JSON or form | PASS (same table, same cites) | PASS (header, flag and method names stay in English) |
| Log in, then call the next API | PASS (same script) | PASS (same script, command unchanged) |
| Check the response before you use it | PASS | PASS |
| Log in once in setup() | PASS (same limits and cites) | PASS |
| Log in once for each VU | PASS (table identical in meaning) | PASS |
| Do not print the token | PASS | PASS |

Checks: no fact, number, name, example, or cite outside Technical. Cites used in Layman and Bangla are all cited in Technical of the same block. No Layman sentence over 25 words (script check). Bangla keeps commands, flags, paths, and product names in English; all uses আপনি, none তুমি. No heading in Layman or Bangla. `node --test tests/voice-source.test.ts tests/k6.test.ts` was not needed for this check.

Open FAILs: 0
