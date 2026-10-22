# Voice fact-check: OAuth 2.0 and OpenID Connect (round 1, 2026-10-22)

Page: `content/course/oauth-oidc.mdx`. I did not write the Layman and Bangla panels.

Method: I read the 7 `<Voices>` blocks. For each block and voice, I compared the panel with the `<Technical>` panel of the same `##` section. A fact, number, name, example or cite that Technical does not give is a FAIL. A dropped hedge, a wrong meaning, a confusing translation, and a long or not plain Layman sentence are also FAILs. An omission is not a FAIL. I did not re-check the sources. The Technical claims are for the fact-check of the page.

Mechanical checks (script and `git diff`):

- No `TODO` placeholder is left.
- No heading in a Layman or Bangla panel.
- Each `<Cite n>` in Layman and Bangla is cited by Technical of the same block (7 of 7 blocks).
- `git diff -U0 content/course/oauth-oidc.mdx | grep '^-' | grep -v '^---'` prints nothing. Technical is unchanged.

Notes:

- Section 3 (roles): Layman and Bangla use a bullet list for the table. The same 4 roles and the same text. PASS.
- Section 4 (how it works): Layman and Bangla omit the text diagram. This is an omission, not a FAIL. Bangla keeps the bold labels (`The request.`, `The code.`, `PKCE.`, `With OpenID Connect.`) in English, as Technical does.
- Section 7: Layman and Bangla have no callout. They keep the line "the tutorial's own advice". PASS.

| # | Section | Voice | Claim | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | OAuth is authorization; limited access to a protected HTTP resource; access token is a string for scope, lifetime, attributes [1]; OIDC is authentication, a thin identity layer, because OAuth has no standard identity info [4]; access token vs ID token | PASS | Each sentence restates one Technical sentence. |
| 2 | In plain words | Bangla | Same claims | PASS | Terms stay in English. "পাতলা" for "thin" is natural enough. |
| 3 | When you need it | Layman | Limited access to data in another service (user approves, app never sees password) [1]; log in with an identity provider, `openid` scope [4] | PASS | Same claims. |
| 4 | When you need it | Bangla | Same | PASS | Meaning is right. |
| 5 | The roles | Layman | 4 roles with their jobs [1]; OP and RP in OIDC [4] | PASS | Same jobs as the table rows. |
| 6 | The roles | Bangla | Same | PASS | Meaning is right. |
| 7 | How it works | Layman | Code flow and PKCE overview [1][2]; request parts and `state`, granted scope [1]; code expiry (10 min at most, recommended), refuse a second use, revoke tokens when possible, `state` returns unchanged [1]; PKCE steps and S256 [2]; OIDC `openid` scope, ID token JWT, required claims, `nonce`, checks, TLS may stand in for signature check [4] | FAIL (first check) | The sentence "Required claims include `iss` ... `iat` ..." has 36 words and 5 items in one sentence. This is not plain. All facts are correct. |
| 8 | How it works | Bangla | Same claims | FAIL (first check) | The phrase "TLS-কে signature যাচাইয়ের বদলে ধরার অনুমতি দেয়" is unclear. "ধরার" does not say "accept as a substitute". Technical: "lets TLS ... stand in for the signature check". All other claims are correct ("সর্বোচ্চ ১০ মিনিট recommend করে" matches "10 minutes at most is recommended"). |
| 9 | What the best practice says | Layman | RFC 9700 rules: PKCE, S256, CSRF, exact redirect URI match, implicit grant, password grant [3] | PASS | "must", "should", "may" are kept. The exception for the implicit grant is kept. |
| 10 | What the best practice says | Bangla | Same | PASS | "করতেই হবে" = must, "উচিত" = should, "পারে" = may. |
| 11 | A real-life example | Layman | Test-reporting app, scopes `openid` and `reports:read`, code, PKCE verifier, two tokens; ID token shows who signed in, access token goes to the reports API | PASS | Same example, marked "the tutorial's own". |
| 12 | A real-life example | Bangla | Same | PASS | Meaning is right. |
| 13 | Common mistakes | Layman | 4 mistakes [4][1][3][4] | PASS | Same claims and cites. "(tutorial advice)" is kept. |
| 14 | Common mistakes | Bangla | Same | PASS | Meaning is right. "must নিয়ম" keeps the English "must" on purpose. |
| 15 | What a tester can check | Layman | 8 test ideas, "tutorial's own advice" | PASS | Same 8 ideas. The "only on systems that you may test" line is kept. |
| 16 | What a tester can check | Bangla | Same 8 ideas | FAIL (first check) | Two bullets have a grammar slip in the "should" form. "client প্রতিটি reject করা উচিত" has no "-এর", so the subject is wrong. "API refuse করা উচিত" has the same slip. The meaning is still clear, but the sentence is not correct Bangla. |

## Re-check

I fixed 4 FAILs. I edited only Layman and Bangla panels.

| # | Fix | Re-check |
|---|---|---|
| 7 | Layman: the long sentence is now "Required claims include:" and a 5-item bullet list (`iss`, `sub`, `aud`, `exp`, `iat`). The text of each item is the Technical text. | PASS. Same 5 claims. No new fact. No cite added or lost. |
| 8 | Bangla: "বদলে ধরার অনুমতি" is now "বিকল্প হিসেবে মেনে নেওয়ার অনুমতি". | PASS. The meaning is "allows TLS to be accepted as a substitute for the signature check". |
| 16a | Bangla: "client-এর প্রতিটি reject করা উচিত।" | PASS. Matches "The client should reject each one." |
| 16b | Bangla: "API-র refuse করা উচিত।" | PASS. Matches "The API should refuse." |

After the edits: no heading in Layman or Bangla, no `TODO`, and every `<Cite n>` still matches Technical. Technical is unchanged (the `git diff` check prints nothing).

FAILs found: 4. Fixed: 4.

Open FAILs: 0
