# Voice fact-check: Single Sign-On (round 2, Bangla term style, 2026-10-22)

Page: `content/course/sso.mdx`. I did not write this page or its voices.

Method: I read each `<Layman>` and `<Bangla>` panel next to the `<Technical>` panel of the same `##` section. A FAIL is a fact, number, name, example, hedge, or cite that Technical does not give; a wrong or unfinished Bangla sentence; a style break (তুমি, a common concept word left in English, an acronym or product name in Bangla letters); or a Layman sentence over 25 words. An omission is not a FAIL. A script checked: (1) each Technical body is identical to the Technical body of the same section in `git show HEAD:content/course/sso.mdx` (all sections: identical); (2) the cite numbers of each voice panel are a subset of the Technical cites of the same block (all: equal sets); (3) no heading, no TODO, no তুমি in a voice panel; (4) the Latin words in each Bangla panel are only acronyms, protocol, product and OS names, code, or key terms in parentheses at first use. "Key words" has no voices and is unchanged.

| # | Section | Voice | Check | Verdict | Note |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | SSO, federation, 3 parties, SP/OP names, SAML Assertion vs ID Token [1][2][3] | PASS | Same facts and cites. "NIST says subscriber" is omitted (not a FAIL). |
| 2 | In plain words | Bangla | Same claims | PASS | Meaning right. "লগইন ফ্যাক্টর", "অ্যাসারশন", "আইডেন্টিটি প্রোভাইডার" with the English term at first use. SSO, IdP, RP, SAML, OIDC, ID Token stay English. |
| 3 | When you need it | Layman | Federation preferred across domains; also inside one domain; SAML cross-domain use case "arguably" most important; trust agreement [1][2] | PASS | Hedges ("generally", "arguably", "can also") kept. Longest sentence 23 words. |
| 4 | When you need it | Bangla | Same claims | PASS | "সাধারণত", "সম্ভবত", "কাজে লাগতে পারে" keep the hedges. |
| 5 | How it works | Layman | SAML 5 steps, assertion parts, OIDC code flow, back channel, JWT claims, 6 checks, audience, validity window, `sub`, separate sessions [1][2][3] | PASS | The link to the OAuth page is omitted (not a FAIL). Steps and claims match. |
| 6 | How it works | Bangla | Same claims | PASS | All 5 steps and the 5 claims (`iss`, `sub`, `aud`, `exp`, `iat`) match. "POST", JWT, `sub` in English. |
| 7 | Logout | Layman | IdP logout does not necessarily end app sessions; end-session events; Single Logout; no guarantee; OIDC Core has no logout flow [1][2][3] | PASS | Same facts. |
| 8 | Logout | Bangla | Same claims | PASS | "যে শেষ হবেই, তা নয়" keeps "do not necessarily". |
| 9 | A real-life example | Layman | Test tool, bug tracker, IdP session, logout may leave the tracker usable | PASS | "The tutorial's own" kept. |
| 10 | A real-life example | Bangla | Same | PASS | |
| 11 | Common mistakes | Layman | 4 mistakes [1][2][3] | PASS | Same cites per bullet. |
| 12 | Common mistakes | Bangla | Same | PASS | |
| 13 | What a tester can check | Layman | 7 test ideas, "tutorial's own advice", no cites | PASS | No cite added. |
| 14 | What a tester can check | Bangla | Same, with "আপনি" and imperative forms | PASS | No তুমি. |

Notes: no heading in any voice panel, no TODO, Technical unchanged.

Found FAILs: 0. Fixed: 0.

Open FAILs: 0
