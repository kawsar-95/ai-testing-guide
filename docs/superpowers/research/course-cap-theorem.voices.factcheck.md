# Voice fact-check: The CAP Theorem (round 1, 2026-10-22)

Page: `content/course/cap-theorem.mdx`. I did not write the Layman and Bangla panels.

Method: I read each `<Voices>` block. For each claim in a `<Layman>` or `<Bangla>` panel, I found the `<Technical>` sentence of the same `##` section that it restates. A claim that is not in the Technical panel, or that changes a number, a condition, a name, a hedge, or a scope, is a FAIL. An omission is not a FAIL. For each `<Cite n>`, I checked that the Technical panel of the same section cites it. I did not re-check the sources: the Technical claims are in the report of the page. I read the Bangla for meaning and natural use (polite আপনি, technical terms in English). A Layman sentence is a FAIL if it is longer than 25 words. I measured the length with a script (cites and markup removed): no Layman sentence passes 25 words.

Checks:

- No TODO placeholder is left (`grep TODO`: 0).
- No heading in a Layman or Bangla panel (`npm test`, `tests/voice-source.test.ts`).
- The Technical text is unchanged: `git diff -U0 content/course/cap-theorem.mdx | grep '^-' | grep -v '^---'` shows no removed non-blank line.
- The "Key words" section has no voices.

Notes:

- Section 1, Layman and Bangla: the Technical table is a bullet list. The text of each row is the same.
- Section 3: the three pairs (C and P, C and A, A and P) keep the same examples (locking or quorum database, LAN, web cache) and the same cite [1].
- Section 2 ("When you need it"): the Technical text starts with "This advice is the tutorial's own". Both voices keep it, with no cite. PASS.

| # | Section | Voice | Claim (English gloss for Bangla) | Technical sentence (quoted) | Verdict | Language |
|---|---|---|---|---|---|---|
| 1 | In plain words | Layman | CAP: a system with data on more than one server cannot give all three; Brewer conjecture at PODC 2000 [1]; proved for a precise model [1]; the 3 definitions (atomic, response with no time limit, any number of lost messages) [1] | The section | PASS | - |
| 2 | In plain words | Bangla | Same claims and cite [1] | Same | PASS | OK |
| 3 | When you need it | Layman | Own advice: use CAP for copies on several servers when the network can fail; testers meet it in replication, failover, broken links | The section | PASS | - |
| 4 | When you need it | Bangla | Same | Same | PASS | OK |
| 5 | Why you must choose during a partition | Layman | The 2-group proof [1]; Brewer: two nodes, one side acts as down [2]; wide-area systems cannot give up P [2]; any two of three can work with 3 examples [1] | The section | PASS | - |
| 6 | Why you must choose during a partition | Bangla | Same claims and cites [1][2] | Same | PASS | OK |
| 7 | Why "2 of 3" misleads | Layman | "2 of 3" was misleading [2]; CAP rules out only a narrow case, partitions are rare [2]; the 3 reasons [2] | The section | PASS | - |
| 8 | Why "2 of 3" misleads | Bangla | Same | Same | PASS | OK |
| 9 | Trade-offs | Layman | Choose C: requests wait or fail; retry forever is a choice for C [2]; choose A: restore consistency, list invariants [2]; 3 steps and the order example [2]; time-out forces the decision [2] | The section | PASS | - |
| 10 | Trade-offs | Bangla | Same claims and cites [2] | Same | PASS | OK |
| 11 | A real-life example | Layman | Own example: city A and city B, old answer means A kept and C lost, "try again later" means C kept and A lost; both valid; old answer for a few minutes is fine, a payment taken twice is not | The section | PASS | - |
| 12 | A real-life example | Bangla | Same | Same | PASS | OK |
| 13 | Common mistakes | Layman | 3 mistakes, cites [2][1][2][2] | The 3 bullets | PASS | - |
| 14 | Common mistakes | Bangla | Same 3 mistakes; "strict subset" is "কঠোর subset" | Same | PASS | OK |
| 15 | What a tester can check | Layman | Own advice, 3 ideas, no cites | The Tutorial advice callout | PASS | - |
| 16 | What a tester can check | Bangla | Same 3 ideas | Same | PASS | OK |

I found no FAIL in this page.

Open FAILs: 0
