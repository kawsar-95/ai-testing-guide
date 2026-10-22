# Voice fact-check: OAuth 2.0 and OpenID Connect (round 2, 2026-10-22)

Page: `content/course/oauth-oidc.mdx`. I did not write the Layman and Bangla panels.

Method: I read the 8 `<Voices>` blocks. For each block and voice, I compared the panel with the `<Technical>` panel of the same `##` section. A fact, number, name, example or cite that Technical does not give is a FAIL. A dropped hedge that changes the meaning, a wrong or misleading statement, a wrong or unfinished Bangla sentence, a mistranslated term, a break of the Bangla style (আপনি, concept words in Bangla letters, acronyms and names in English, digits as in Technical), and a long or not plain Layman sentence are also FAILs. An omission is not a FAIL. I did not re-check the sources. The Technical claims are checked in `course-oauth-oidc.factcheck.md`. The "Key words" section has no voices.

Mechanical checks (script and `git diff`):

- No `TODO` placeholder is left.
- No heading in a Layman or Bangla panel.
- Each `<Cite n>` of a Layman and of a Bangla panel is cited by Technical of the same block, and the cites match one to one (8 of 8 blocks).
- Each `<Technical>` body is equal to the `<Technical>` body of the same section in `git show HEAD:content/course/oauth-oidc.mdx`, and all text outside the `<Voices>` blocks is equal to HEAD. Technical is unchanged.
- Only Bangla panels differ from HEAD. Layman panels are the same as HEAD.
- Layman: no sentence over 25 words.
- Bangla: no `তুমি`. Digits are ASCII, as in Technical (checked again after the fixes). Latin words that remain are acronyms, protocol, product, command and identifier names, or the English key term in parentheses at first use.

Notes:

- Block 4 Layman turns the five required claims of the ID token (`iss`, `sub`, `aud`, `exp`, `iat`) into a bullet list. The facts are the same.
- The Layman panels keep each Technical claim and add no fact. No Layman sentence is over 25 words.
- In section 4, Bangla keeps the five required claims `iss`, `sub`, `aud`, `exp`, `iat` in one sentence, as Technical does. This is long but not a FAIL, because it is a list of terms.

| # | Section | Voice | Round 1 | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | PASS | Restates authorization (what an app may do), the access token with scope, lifetime and attributes [1], OIDC as a thin identity layer [4], and the two token questions. Sentences are short. |
| 2 | In plain words | Bangla | PASS | Same claims and cites [1][4]. Parenthetical key terms (authorization, authentication, access token) are useful here, because the page is about telling them apart. Natural Bangla, আপনি used. |
| 3 | When you need it | Layman | PASS | Both bullets restate Technical, cites [1][4], `openid` scope. |
| 4 | When you need it | Bangla | PASS | Both bullets are the same as Technical. The words অনুমোদন (approve) and অ্যাপ কখনো পাসওয়ার্ড দেখে না match "never sees the password". |
| 5 | The roles | Layman | PASS | Four roles as a list instead of a table, same text. OP and RP kept [4]. |
| 6 | The roles | Bangla | PASS | Four roles with the English term in parentheses (table terms). Same meaning. OP and RP stay English as names. |
| 7 | How it works | Layman | PASS | The code, request, PKCE and OIDC parts restate Technical. The text diagram is not repeated (omission, not a FAIL). The claims are listed as bullets. "10 minutes at most is recommended" is kept. |
| 8 | How it works | Bangla | FAIL | Two defects. (a) "কোড অল্প সময়ের মধ্যে মেয়াদ শেষ হতে হবে" is not grammatical: the subject is the code, but the thing that ends is its expiry (it should be কোডের মেয়াদ). (b) The number is written "১০" in Bangla digits. The style keeps the digits of Technical (10). |
| 9 | What the best practice says | Layman | PASS | Six bullets restate Technical. All must, should, may and "recommended" hedges are kept. Cite [3]. |
| 10 | What the best practice says | Bangla | FAIL | (a) "কনফিডেনশিয়াল ক্লায়েন্টের জন্য এটি পরামর্শ করা হয়েছে": "পরামর্শ করা" means to consult, not "it is recommended". It should be পরামর্শ দেওয়া হয়েছে. (b) "ঠিক স্ট্রিং মিলিয়ে" for "exact string matching" can read as "the correct string". The term is হুবহু. The other bullets PASS. |
| 11 | A real-life example | Layman | PASS | Same example (test-reporting app, `openid` and `reports:read`, code, PKCE verifier, two tokens). No new fact. |
| 12 | A real-life example | Bangla | PASS | Same example and same sequence. "টিউটোরিয়ালের নিজের" keeps the "tutorial's own" label. |
| 13 | Common mistakes | Layman | PASS | Four bullets restate Technical. "(tutorial advice)" is kept. Cites [4][1][3][4] match. |
| 14 | Common mistakes | Bangla | FAIL | "OAuth 2.0 কে অথেনটিকেট করল সে সম্পর্কে ..." is misleading. "কে" (who) after "OAuth 2.0" reads as the object marker "OAuth 2.0-কে", so it can mean "somebody authenticated OAuth 2.0". The sentence must say that OAuth 2.0 gives no standard information about who authenticated. The other bullets PASS. |
| 15 | What a tester can check | Layman | PASS | Same eight checks. The "tutorial's own advice, not a claim of a source" and the "only on systems that you may test" notes are kept. |
| 16 | What a tester can check | Bangla | FAIL | Two sentences have a wrong grammatical subject. "API-র প্রত্যাখ্যান করা উচিত" and "ক্লায়েন্টের প্রতিটি প্রত্যাখ্যান করা উচিত" do not say clearly who refuses what: the second has no object (each token). They read as "the API's refusing should be". The other bullets PASS. |

## Re-check

I fixed each FAIL by editing the Bangla panel only, and read the fixed rows again.

| Block | Section | Voice | Result | After the fix |
|---|---|---|---|---|
| 4 | How it works | Bangla | PASS | "কোডের মেয়াদ অল্প সময়ের মধ্যে শেষ হতে হবে। স্পেসিফিকেশন সর্বোচ্চ 10 মিনিটের পরামর্শ দেয়।" Grammar and digits are right. |
| 5 | What the best practice says | Bangla | PASS | "এর পরামর্শ দেওয়া হয়েছে" and "হুবহু স্ট্রিং মিলিয়ে তুলনা করতে হবে". |
| 7 | Common mistakes | Bangla | PASS | "কে অথেনটিকেট করেছে, সে সম্পর্কে OAuth 2.0 কোনো স্ট্যান্ডার্ড তথ্য দেয় না". The meaning is clear. |
| 8 | What a tester can check | Bangla | PASS | "API-র উচিত রিকুয়েস্ট প্রত্যাখ্যান করা" and "ক্লায়েন্টের উচিত প্রতিটি টোকেন প্রত্যাখ্যান করা". |

After the fixes I ran the mechanical checks again (Technical equals HEAD, cites, headings, digits) and `node --test tests/voice-source.test.ts tests/course.test.ts` (29 tests, 0 fail).

Round 1 FAILs: 4. Fixed: 4.

Open FAILs: 0
