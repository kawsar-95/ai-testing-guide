# Voice fact-check: SSL, TLS, and mTLS (round 2, 2026-10-22)

Page: `content/course/ssl-tls-mtls.mdx`. I did not write the Layman or Bangla panels.

Method: I compared each `<Layman>` and `<Bangla>` panel with the `<Technical>` panel of the same block, claim by claim. A fact, number, name, example, or cite that Technical does not give is a FAIL. A dropped hedge that changes the meaning is a FAIL. A wrong or misleading Bangla meaning, an unfinished or ungrammatical Bangla sentence, a mistranslated term, or a break of the Course Bangla style is a FAIL. The style is: আপনি (never তুমি), common concept words in Bangla letters, and acronyms, product names, commands, and identifiers in English. A Layman sentence of more than 25 words (words counted with a script, cites removed) is a FAIL. An omission that loses no fact is not a FAIL. For each `<Cite n>` in a voice panel I checked that Technical of the same block cites it (script: no extra cite in any block). The Technical claims are checked in the Technical fact-check report, not here.

Other checks:

- No TODO placeholder, no heading in Layman or Bangla, no `তুমি` form (scripts).
- Technical unchanged: each `<Technical>` body equals the one in `git show HEAD:content/course/ssl-tls-mtls.mdx` (compared after removing the Voices wrap of both; 0 differing lines).
- `node --test tests/voice-source.test.ts tests/course.test.ts`: 29 pass, 0 fail.
- "Key words" has no voices.

Notes: Sections 1 and 3 Layman turn tables into lists. The text is the same. Layman and Bangla of section 6 drop the callout box and keep its sentence "the tutorial's own advice, not a claim of the sources". Dates checked: SSL 3.0 in 1996, TLS 1.0 in 1999, TLS 1.3 in August 2018, as in Technical. The "tutorial's own remark" notes are kept in all panels.

| # | Section | Voice | What I compared | Round 1 | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | TLS, HTTPS, 3 properties, "Why people still say SSL" | PASS | Same facts and cites (5, 1, 2). |
| 2 | In plain words | Bangla | same | FAIL | "একটি ইমপ্লিমেন্টেশন এগুলো নেগোশিয়েট করবে না" says "will not negotiate". Technical says "must not negotiate" (a requirement of RFC 8446). The strength of the rule changes. |
| 3 | When you need it | Layman | HTTPS for sites, other links, mTLS | PASS | Same. |
| 4 | When you need it | Bangla | same | PASS | "বিশেষায়িত অ্যাপ্লিকেশনে" matches "specialized applications". |
| 5 | How it works | Layman | handshake, server cert, client cert, RFC 8705, versions | FAIL | 2 sentences are too long: "MDN lists what the two sides agree on: ..." (28 words) and "RFC 8996 gives a reason for TLS 1.0 and 1.1: ..." (27 words). The facts match Technical. |
| 6 | How it works | Bangla | same | PASS | All facts, RFC numbers, `client_id`, `invalid_client`, `invalid_token`, HTTP 401 match. Style OK. |
| 7 | A real-life example | Layman | payments API, orders and ledger | PASS | Same. |
| 8 | A real-life example | Bangla | same | PASS | Same. |
| 9 | Common mistakes | Layman | 4 mistakes | PASS | Same facts and cites (1, 1, 3, 5, 4). |
| 10 | Common mistakes | Bangla | same | PASS | Same. |
| 11 | What a tester can check | Layman | 7 tips | PASS | Same. |
| 12 | What a tester can check | Bangla | same | FAIL | The last tip writes the quoted word "secure" in English. The same page writes the same word as "নিরাপদ" in row 10. A common concept word is left in English with no reason. |

Findings in round 1: 4 FAIL (row 2, row 5 twice, row 12).

## Re-check

| # | Fix | Result |
|---|---|---|
| 2 | Bangla now reads "একটি ইমপ্লিমেন্টেশন এগুলো নেগোশিয়েট (negotiate) করতে পারবে না" ("cannot negotiate", a prohibition). | PASS |
| 5 | Layman: "MDN lists what the two sides agree on. These are the TLS version, the cipher suite (the set of algorithms), and the secret key. As an option, they also agree on mutual authentication <Cite n={5} />." and "RFC 8996 gives a reason for TLS 1.0 and 1.1. Their integrity and signatures depend on SHA-1. The only upgrade path is a newer version <Cite n={3} />." Longest Layman sentence is now under 25 words. Same facts and cites. | PASS |
| 12 | Bangla now reads "কোনো ফিচারকে "নিরাপদ" বলবেন না". | PASS |

Open FAILs: 0
