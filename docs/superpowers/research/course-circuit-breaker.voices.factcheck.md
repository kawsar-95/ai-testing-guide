# Voice fact-check: Circuit Breaker (round 1, 2026-10-22)

Page: `content/course/circuit-breaker.mdx`. I did not write the Layman and Bangla panels.

Method: I read each `<Voices>` block. For each claim in a `<Layman>` or `<Bangla>` panel, I found the `<Technical>` sentence of the same `##` section that it restates. A claim that is not in the Technical panel, or that changes a number, a condition, a name, a hedge, or a scope, is a FAIL. An omission is not a FAIL. For each `<Cite n>`, I checked that the Technical panel of the same section cites it. I did not re-check the sources: the Technical claims are in the report of the page. I read the Bangla for meaning and natural use (polite আপনি, technical terms in English). A Layman sentence is a FAIL if it is longer than 25 words. I measured the length with a script (cites and markup removed): no Layman sentence passes 25 words.

Checks:

- No TODO placeholder is left (`grep TODO`: 0).
- No heading in a Layman or Bangla panel (`npm test`, `tests/voice-source.test.ts`).
- The Technical text is unchanged: `git diff -U0 content/course/circuit-breaker.mdx | grep '^-' | grep -v '^---'` shows no removed non-blank line.
- The "Key words" section has no voices.

Notes:

- Section 3 ("How it works"): the Technical text has a text drawing of the three states. Layman and Bangla give its four transitions as a list: Closed to Open (failures pass the threshold in the time period), Open to Half-Open (timer ends), Half-Open to Closed (enough trial calls succeed), Half-Open to Open (a trial call fails, timer restarts). These match the drawing and the table. Both voices keep "the tutorial's own picture of the Azure description". PASS.
- Section 4: the Technical text says the source gives no default numbers. Both voices keep this hedge.

| # | Section | Voice | Claim (English gloss for Bangla) | Technical sentence (quoted) | Verdict | Language |
|---|---|---|---|---|---|---|
| 1 | In plain words | Layman | Blocks access after a threshold, avoids retries, gives room to recover [1]; AWS: detects recovery, like electrical breakers, sits between caller and callee [2]; transient and long faults [1]; time-out alone does not solve it [1]; retries add load [2] | The section | PASS | - |
| 2 | In plain words | Bangla | Same claims and cites [1][2] | Same | PASS | OK |
| 3 | When you need it | Layman | 3 Azure cases [1]; AWS signs [2] | The section | PASS | - |
| 4 | When you need it | Bangla | Same | Same | PASS | OK |
| 5 | How it works | Layman | Proxy, three states [1]; transitions; Closed, Open, Half-Open rows [1]; Half-Open avoids a flood [1]; AWS does not name the state [2] | The section | PASS | - |
| 6 | How it works | Bangla | Same | Same | PASS | OK |
| 7 | Thresholds and time-outs | Layman | Failure threshold, success count, time-out [1]; no default numbers [1]; Open period too long, Half-Open too fast [1]; default value, manual open or close [1][2]; AWS expiration time [2] | The section | PASS | - |
| 8 | Thresholds and time-outs | Bangla | Same claims and cites | Same | FAIL | "সে বলে, setting-গুলো সুরক্ষিত operation-এর সম্ভাব্য recovery-র সঙ্গে মেলাতে" has no final verb. The sentence is not complete. The Technical text says "It says to match the settings". |
| 9 | Circuit breaker and retry | Layman | Different goals [1]; backoff for transient errors [2]; retry through a breaker [1]; AWS sample and expiry time [2] | The section | PASS | - |
| 10 | Circuit breaker and retry | Bangla | Same | Same | PASS | OK |
| 11 | When not to use it | Layman | 6 cases of Azure [1] | The 6 bullets | PASS | - |
| 12 | When not to use it | Bangla | Same 6 cases | Same | PASS | OK |
| 13 | A real-life example | Layman | Own example: order service, payment service, threshold, error at once, message "Payments are busy. Try again soon.", trial calls close the breaker | The section | PASS | - |
| 14 | A real-life example | Bangla | Same | Same | PASS | OK |
| 15 | Common mistakes | Layman | 4 mistakes, cite [1] | The 4 bullets | PASS | - |
| 16 | Common mistakes | Bangla | Same 4 mistakes | Same | PASS | OK |
| 17 | What a tester can check | Layman | Own advice, 5 ideas, no cites | The Tutorial advice callout | PASS | - |
| 18 | What a tester can check | Bangla | Same 5 ideas | Same | PASS | OK |

Fix applied (Bangla, row 8): "...সম্ভাব্য recovery-র সঙ্গে মেলাতে <Cite n={1} />" is now "...সম্ভাব্য recovery-র সঙ্গে মেলাতে হবে <Cite n={1} />".

## Re-check

| Row | Result |
|---|---|
| 8 | The sentence is complete now and has the Technical meaning ("match the settings to the likely recovery"). The cite [1] is in the Technical text. PASS. |

Open FAILs: 0
