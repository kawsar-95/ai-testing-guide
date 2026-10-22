# Voice fact-check: TCP and UDP (round 1, 2026-10-22)

Page: `content/course/tcp-udp.mdx`. I did not write the Layman and Bangla panels.

Method: I read each `<Voices>` block. For each claim in a `<Layman>` or `<Bangla>` panel, I found the `<Technical>` sentence of the same `##` section that it restates. A claim that is not in the Technical panel, or that changes a number, a name, a condition, a hedge, or a scope, is a FAIL. An omission is not a FAIL. For each `<Cite n>` in a voice panel, I checked that the Technical panel of the same section cites the same `n`. I did not re-check the sources: the Technical claims are not part of this report. I read the Bangla text for meaning and natural use: polite (আপনি), technical terms in English, hyphen between an English word and a Bangla suffix. The "Key words" section has no voices.

Mechanical checks (script and `git diff`):

| Check | Result |
|---|---|
| No `TODO-LAYMAN` or `TODO-BANGLA` left | PASS |
| No heading in `<Layman>` or `<Bangla>` | PASS |
| Each `<Cite n>` of a voice panel is cited by `<Technical>` of the same block | PASS |
| `<Technical>` text unchanged: `git diff -U0 content/course/tcp-udp.mdx \| grep '^-' \| grep -v '^---'` shows no removed line | PASS |
| `node --test tests/voice-source.test.ts tests/course.test.ts` | PASS (29 tests) |

Notes:

- Section 2 Layman and Bangla replace the text diagram with a numbered list of the 3 handshake steps. The list matches the diagram (SYN with X; SYN+ACK with Y and "got X"; ACK "got Y"). No new fact. PASS.
- Section 5 (Trade-offs) Layman and Bangla replace the table with a list. All 4 rows and the note about the tutorial's own cells are kept. PASS.

| # | Section | Voice | What I compared | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | IP, TCP and UDP roles; TCP reliability [1]; UDP minimum mechanism [2]; ports 16 bits [1]; UDP header fields [2] | PASS | Same facts and cites. |
| 2 | In plain words | Bangla | Same | PASS | Terms stay in English. Natural. |
| 3 | How it works | Layman | Handshake; window; congestion; FIN; TIME-WAIT; RST; UDP length 8 octets, source port, zero checksum | PASS | All cites (1 and 2) match Technical. |
| 4 | How it works | Bangla | Same | PASS | "বিভ্রান্তি" = confusion. The "নিজের FIN ... তখনই" condition is kept. |
| 5 | When you need it | Layman | Pick TCP when every byte must arrive in order; pick UDP for speed, and the application "can live with a gap or can repair it" | FAIL | Technical says the application "can" live with a gap. Layman says it "must". The modal changes from a condition to a rule. |
| 6 | When you need it | Bangla | Same | FAIL | "ফাঁক মেনে নিতে হবে" has the same "must". |
| 7 | A real-life example | Layman | Quiz answer over TCP; video call over UDP; "tutorial's own text" | PASS | Same example and the same hedge ("usually"). |
| 8 | A real-life example | Bangla | Same | PASS | "সাধারণত" = usually. |
| 9 | Trade-offs | Layman | 4 rows; cites 1 and 2; own-summary note | PASS | Cites match the Technical table cells. |
| 10 | Trade-offs | Bangla | Same | PASS | Natural. |
| 11 | Common mistakes | Layman | 4 mistakes; cite 2; port advice is the tutorial's own | PASS | Same claims. |
| 12 | Common mistakes | Bangla | Same | PASS | Same claims. |
| 13 | What a tester can check | Layman | "Tutorial's own" and 5 test ideas | PASS | Same 5 ideas. No cites. |
| 14 | What a tester can check | Bangla | Same | PASS | Same 5 ideas. |

## Fixes

- Row 5: Layman now says "The application also needs to be able to live with a gap, or to repair it by itself."
- Row 6: Bangla now says "এর সঙ্গে application-কে ফাঁক মেনে নিতে পারতে হবে, অথবা নিজে সেটি মেরামত করতে পারতে হবে।"

## Re-check

| Row | Voice | Result |
|---|---|---|
| 5 | Layman | PASS. The "can" condition is back. |
| 6 | Bangla | PASS. "পারতে হবে" = "must be able to". |

`node --test tests/voice-source.test.ts tests/course.test.ts` passes after the fixes.

Open FAILs: 0
