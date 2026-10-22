# Voice fact-check: Single Sign-On (round 1, 2026-10-22)

Page: `content/course/sso.mdx`. I did not write the Layman and Bangla panels.

Method: I read each `<Voices>` block. For each claim in a `<Layman>` or `<Bangla>` panel, I found the `<Technical>` sentence of the same `##` section that it restates. A claim that is not in the Technical panel, or that changes a number, a name, a condition, a hedge, or a scope, is a FAIL. An omission is not a FAIL. For each `<Cite n>` in a voice panel, I checked that the Technical panel of the same section cites the same `n`. I did not re-check the sources: the Technical claims are not part of this report. I read the Bangla text for meaning and natural use: polite (আপনি), technical terms in English, hyphen between an English word and a Bangla suffix. The "Key words" section has no voices.

Mechanical checks (script and `git diff`):

| Check | Result |
|---|---|
| No `TODO-LAYMAN` or `TODO-BANGLA` left | PASS |
| No heading in `<Layman>` or `<Bangla>` | PASS |
| Each `<Cite n>` of a voice panel is cited by `<Technical>` of the same block | PASS |
| `<Technical>` text unchanged: `git diff -U0 content/course/sso.mdx \| grep '^-' \| grep -v '^---'` shows no removed line | PASS |
| `node --test tests/voice-source.test.ts tests/course.test.ts` | PASS (29 tests) |

Notes:

- Both voices follow Technical closely and split long sentences. No Layman sentence is over 25 words. I did not mark this as a FAIL.
- Section 1 Layman and Bangla drop "NIST defines federation as" and "NIST says subscriber". These are omissions. The cite stays on the NIST sentence. PASS.
- Section 3 Layman and Bangla drop the link to the OAuth page. This is an omission. PASS.

| # | Section | Voice | What I compared | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | SSO = one login for many apps; federation; app does not check login factors; the 3 parties; SP and OP names; SAML Assertion and ID Token | PASS | Same facts and the same cites 1, 2, 3 as Technical. |
| 2 | In plain words | Bangla | Same list | PASS | Same facts. "বিবৃতি" = statement, "assertion" stays in English. Natural. |
| 3 | When you need it | Layman | Federation preferred across domains [1]; helps in one domain [1]; SAML web sign-on "arguably" most important [2]; trust agreement [1] | PASS | The hedges "generally" and "arguably" are kept. |
| 4 | When you need it | Bangla | Same | PASS | "সাধারণত" = generally, "সম্ভবত" = arguably. Hedges kept. |
| 5 | How it works | Layman | SAML flow (5 steps), assertion parts, OIDC, back channel, JWT claims, the checks, separate sessions | FAIL | "The IdP sends a POST back" is wrong. Technical step 4 says the browser posts the assertion to the app. |
| 6 | How it works | Bangla | Same | FAIL | "IdP একটি POST ফেরত পাঠায়" has the same wrong actor. |
| 7 | Logout | Layman | IdP logout does not necessarily end app sessions [1]; Single Logout [2]; no guarantee [2]; OIDC Core has no logout flow [3] | PASS | "do not necessarily end" is kept. |
| 8 | Logout | Bangla | Same | FAIL | "app-এর session অবশ্যই শেষ হয় না" reads as "does certainly not end". Technical says "do not necessarily end". The hedge changes meaning. |
| 9 | A real-life example | Layman | Test tool, IdP, bug tracker, no password prompt, logout may leave the tracker usable | PASS | Same example, same hedge ("may"). |
| 10 | A real-life example | Bangla | Same | PASS | "হয়তো" = may. |
| 11 | Common mistakes | Layman | 4 mistakes with cites 1, 2, 1, 3 | PASS | Same cites and claims. |
| 12 | Common mistakes | Bangla | Same | PASS | Same claims. Note: "Session গুলো" had a space. Fixed to "Session-গুলো" (hyphen convention). |
| 13 | What a tester can check | Layman | "Tutorial's own advice" and 7 test ideas | PASS | Same 7 ideas. No cites, as in Technical. |
| 14 | What a tester can check | Bangla | Same | PASS | Same 7 ideas. Natural, polite. |

## Fixes

- Row 5: Layman now says "Later the browser posts the assertion back to the app".
- Row 6: Bangla now says "পরে browser assertion-টি app-এ POST করে".
- Row 8: Bangla now says "app-এর session যে শেষ হবেই, তা নয়".
- Row 12: the space before "গুলো" became a hyphen.

## Re-check

| Row | Voice | Result |
|---|---|---|
| 5 | Layman | PASS. The new sentence matches step 4 of Technical. The cite 2 is kept. |
| 6 | Bangla | PASS. Same meaning as row 5. |
| 8 | Bangla | PASS. "শেষ হবেই, তা নয়" = "not necessarily". |
| 12 | Bangla | PASS. |

`node --test tests/voice-source.test.ts tests/course.test.ts` passes after the fixes.

Open FAILs: 0
