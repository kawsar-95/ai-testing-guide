# Voice fact-check: SSL, TLS, and mTLS (round 1, 2026-10-22)

Page: `content/course/ssl-tls-mtls.mdx`. I did not write the Layman and Bangla panels.

Method: I read each `<Voices>` block. For each claim in a `<Layman>` or `<Bangla>` panel, I found the `<Technical>` sentence of the same `##` section that it restates. A fact, number, name, example, or cite that Technical does not give, a dropped hedge that changes the meaning, or a wrong Bangla meaning is a FAIL. An omission is not a FAIL. I checked each `<Cite n>` against the cites of the same Technical panel. I did not re-check the sources: the Technical claims have their own report. I read the Bangla for meaning and natural use. The "Key words" section has no voices.

Page checks:

- No `TODO-LAYMAN` or `TODO-BANGLA` is left: PASS.
- No Markdown heading (`#` to `######`) in a Layman or Bangla panel (bold labels only): PASS.
- Technical text unchanged: `git diff -U0 content/course/ssl-tls-mtls.mdx | grep '^-' | grep -v '^---'` shows no removed line: PASS.
- Every `<Cite n>` in a Layman or Bangla panel is cited by Technical of the same block: PASS.
- Layman has no sentence over 27 words: PASS.

Notes: In "How it works" and "In plain words", the Technical tables are lists. Bangla keeps TLS, SSL, CA, handshake, cipher suite, message names (`Certificate`, `CertificateVerify`, `CertificateRequest`), `client_id`, `invalid_client`, `invalid_token`, and the RFC numbers in English. The Layman text keeps some protocol words from the RFC. It is as plain as the finished Architecture example, because it restates Technical in short sentences.

| # | Section | Voice | Verdict | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | PASS | Three properties, "attacker with complete control", SSL 3.0 (1996), TLS 1.0 (1999), RFC 7568, RFC 8446, and the "tutorial's own remark" match. Cites 5, 1, 2, 1. |
| 2 | In plain words | Bangla | PASS | Same. The three properties and the SSL history are correct. |
| 3 | When you need it | Layman | PASS | MDN advice, "independent of the application protocol", and mTLS match. The "tutorial's own" remark is kept. |
| 4 | When you need it | Bangla | PASS | Same. |
| 5 | How it works | Layman | PASS | Handshake, record protocol, server and client certificate, RFC 8705 (two methods, `invalid_client`, 401 and `invalid_token`), the 4 version rows, and the SHA-1 reason match. Cites match (1, 5, 4, 2, 3). "August 2018" matches. |
| 6 | How it works | Bangla | PASS | Same facts and cites. "obsolete করেছে", "deprecated", "ব্যবহার করা যাবে না" (must not be used) keep the strength of the RFC words. |
| 7 | A real-life example | Layman | PASS | Payments API, "orders" and "ledger", and "fails in the handshake" match. |
| 8 | A real-life example | Bangla | PASS | Same. |
| 9 | Common mistakes | Layman | PASS | Four bullets match. "The rest of this point is the tutorial's own advice" is kept. |
| 10 | Common mistakes | Bangla | PASS | Same. |
| 11 | What a tester can check | Layman | PASS | Seven tips match. |
| 12 | What a tester can check | Bangla | PASS | Seven tips match. |

FAILs found: 0. Fixed: 0.

Open FAILs: 0
