# Voice fact-check: VMs and Containers (round 1, 2026-10-22)

Page: `content/course/vm-containers.mdx`. I did not write the Layman and Bangla panels.

Method: I read each `<Voices>` block. For each claim in a `<Layman>` or `<Bangla>` panel, I found the `<Technical>` sentence of the same `##` section that it restates. A claim that is not in the Technical panel, or that changes a number, a name, a condition, a hedge, or a scope, is a FAIL. An omission is not a FAIL. For each `<Cite n>` in a voice panel, I checked that the Technical panel of the same section cites the same `n`. I did not re-check the sources: the Technical claims are not part of this report. I read the Bangla text for meaning and natural use: polite (আপনি), technical terms in English, hyphen between an English word and a Bangla suffix. The "Key words" section has no voices.

Mechanical checks (script and `git diff`):

| Check | Result |
|---|---|
| No `TODO-LAYMAN` or `TODO-BANGLA` left | PASS |
| No heading in `<Layman>` or `<Bangla>` | PASS |
| Each `<Cite n>` of a voice panel is cited by `<Technical>` of the same block | PASS |
| `<Technical>` text unchanged: `git diff -U0 content/course/vm-containers.mdx \| grep '^-' \| grep -v '^---'` shows no removed line | PASS |
| `node --test tests/voice-source.test.ts tests/course.test.ts` | PASS (29 tests) |

Notes:

- Section 4 (Trade-offs) Layman and Bangla replace the table with a list. All 7 rows are kept, including the tutorial's own "Which to pick" row. Every cell matches. PASS.
- The Layman text keeps the NIST words "inter-object attack surface". The term is dense. It is a quote of the source, and Key words does not define it. I did not mark this as a FAIL.

| # | Section | Voice | What I compared | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | VMs and containers share a machine [1]; hypervisor; guest OS; shared kernel; Docker definition [2]; OS family [1] | PASS | Same facts and cites. |
| 2 | In plain words | Bangla | Same | PASS | Terms stay in English. |
| 3 | How it works | Layman | 3 isolation tools; image [3]; immutable [1]; stateless [3]; registry [4]; Pods and nodes [3] | PASS | Same facts and cites. |
| 4 | How it works | Bangla | Same | PASS | "দৃশ্য" = view is acceptable. |
| 5 | When you need it | Layman | Docker overhead and traits [2]; Kubernetes [3]; VM benefits [1]; different OS family [1] | PASS | The hedge "should behave the same" is kept. |
| 6 | When you need it | Bangla | Same | PASS | "হওয়ার কথা" = should. |
| 7 | Trade-offs | Layman | 7 rows; the NIST hedge; VMs and containers together [1] [2] | PASS | Cites match. The own-judgment row is marked. |
| 8 | Trade-offs | Bangla | Same | FAIL | In "Change process", "তাদের পুরো জীবনকাল" can read as "the teams' whole life". Technical means the life of the VMs. In "Note the hedge", "সতর্কতা" (warning) is a weak word for a "hedge" (a two-sided statement). |
| 9 | A real-life example | Layman | Web app and payment sandbox; CI deletes the containers; Windows client in a VM | PASS | Same example. |
| 10 | A real-life example | Bangla | Same | PASS | Same example. |
| 11 | Common mistakes | Layman | 5 mistakes; cites 1, 1, 1, 4, 3 | PASS | Same. |
| 12 | Common mistakes | Bangla | Same | PASS | Same. |
| 13 | What a tester can check | Layman | "Tutorial's own" and 6 ideas | PASS | Same 6 ideas. |
| 14 | What a tester can check | Bangla | Same | PASS | Same 6 ideas. "পরীক্ষার যোগ্য ঝুঁকি" = a risk to check. |

## Fixes

- Row 8, "Change process": Bangla now says "Team-গুলো এগুলোকে সেট আপ করে, বদলায় এবং এগুলোর পুরো জীবনকাল জুড়ে upgrade করে".
- Row 8, "hedge": Bangla now says "NIST-এর বক্তব্যের দুই দিকই লক্ষ্য করুন।"
- The space before "গুলো" became a hyphen in the rest of the page (language style).

## Re-check

| Row | Voice | Result |
|---|---|---|
| 8 | Bangla | PASS. The VM life is clear now. The hedge sentence is neutral and keeps the two-sided meaning of the next sentence. |

`node --test tests/voice-source.test.ts tests/course.test.ts` passes after the fixes.

Open FAILs: 0
