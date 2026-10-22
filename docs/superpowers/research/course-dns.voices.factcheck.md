# Voice fact-check: DNS (round 1, 2026-10-22)

Page: `content/course/dns.mdx`. I did not write the Layman and Bangla panels.

Method: I read the 8 `<Voices>` blocks (the `## Key words` section has no voices). For each block, I compared `<Layman>` and `<Bangla>` with the `<Technical>` panel of the same block. A fact, number, name, example, or cite that Technical does not give is a FAIL. So is a dropped hedge or a changed condition, a wrong or confusing Bangla meaning, and a Layman sentence that is long or not plain. An omission is not a FAIL. I checked each `<Cite n>` against the cites of the Technical panel of the same block. I did not re-check the sources.

Structure checks:

- No `TODO-LAYMAN` or `TODO-BANGLA` is left.
- No Markdown heading in any Layman or Bangla panel.
- Technical text is unchanged: `git diff -U0 content/course/dns.mdx | grep '^-' | grep -v '^---'` shows no removed line.
- Cites: each Layman and Bangla cite is in the Technical panel of its block (1, 2, 3, 4, 5 as in Technical).

Notes:

- In "In plain words", Layman and Bangla say "`learn` is one host name. `example` is the zone of the company. `com` is the top level." This restates the text diagram of Technical in the same block. It is not a new fact. PASS.
- In "How it works", Layman and Bangla restate the text diagram as a sentence order (browser, stub resolver, recursive server, root, "com", "example.com", `203.0.113.10`, cached for the TTL). It matches the diagram. PASS.
- In "Record types and TTL", the table is a bullet list with the same 6 types. PASS.

| # | Section | Voice | Verdict | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | PASS | Same definition, lookup, reverse lookup, tree, root, empty label, and name order. |
| 2 | In plain words | Bangla | PASS | Same. |
| 3 | When you need it | Layman | PASS | Same 4 cases. |
| 4 | When you need it | Bangla | PASS | Same 4 cases. |
| 5 | How it works | Layman | PASS | Stub resolver, recursive and iterative, the 4 steps, and the cache sentence match. |
| 6 | How it works | Bangla | PASS | Same. "ভালো server" for "better servers" is acceptable. |
| 7 | Record types and TTL | Layman | PASS | 6 record types, MX preference, CNAME rule, NS and MX alias rule, TTL range 0 to 2147483647, TTL 0, "Name Error" match. |
| 8 | Record types and TTL | Bangla | FAIL (fixed) | The sentence "tester-রা সবচেয়ে বেশি ..." starts with a lowercase Latin word after a full stop. Fixed to "Tester-রা". The facts are PASS. |
| 9 | A real-life example | Layman | PASS | Same addresses, TTL 86400 seconds, RFC 1034 section 2.3. |
| 10 | A real-life example | Bangla | FAIL (fixed) | "একজন সতর্ক দল ... সে TTL আবার বাড়ায়": "একজন" and "সে" are for one person. The subject is a team. Fixed to "একটা সতর্ক দল ... তারা". |
| 11 | Common mistakes | Layman | PASS | 4 bullets match. |
| 12 | Common mistakes | Bangla | PASS | 4 bullets match. |
| 13 | What a tester can check | Layman | PASS | 5 ideas match. |
| 14 | What a tester can check | Bangla | PASS | 5 ideas match. |

Language: polite (আপনি), commands and terms stay in English (`dig`, `nslookup`, CNAME, TTL, resolver).

## Re-check

| Row | Result |
|---|---|
| 8 | "Tester-রা সবচেয়ে বেশি এই type-গুলোর মুখোমুখি হয়" now starts with a capital. PASS |
| 10 | "একটা সতর্ক দল সরানোর কয়েক দিন আগে TTL কমায়। সরানোর পর তারা TTL আবার বাড়ায়" is correct for a team and matches Technical. PASS |

Open FAILs: 0
