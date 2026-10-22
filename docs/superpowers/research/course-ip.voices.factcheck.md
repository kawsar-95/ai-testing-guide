# Voice fact-check: IP Addresses (round 1, 2026-10-22)

Page: `content/course/ip.mdx`. I did not write the Layman and Bangla panels.

Method: I read the 6 `<Voices>` blocks. For each sentence in a `<Layman>` or `<Bangla>` panel, I found the `<Technical>` sentence of the same `##` section that it restates. A fact, number, name, example, or cite that Technical does not give is a FAIL. A dropped hedge, a wrong meaning, or a term that is translated in a confusing way is a FAIL. An omission is not a FAIL. A script checked that each `<Cite n>` in Layman and Bangla is also cited in Technical of the same block, that no panel has a Markdown heading, and that no `TODO` placeholder is left. The "Key words" section has no voices.

Checks of the file:

- No TODO placeholder is left. PASS.
- No heading in a Layman or Bangla panel. PASS.
- Cites: every `n` in Layman and Bangla is cited in Technical of the same block. PASS (6 blocks).
- Technical unchanged: `git diff -U0 content/course/ip.mdx | grep '^-' | grep -v '^---'` shows no removed line. PASS.
- Values checked in both voices: 32 bits, four octets, 128 bits, eight groups of one to four hex digits, the 3 private ranges, `2001:db8:0:0:8:800:200c:417a` and its short form, `10.0.2.30`, `::1`, `2001::db8::1`, "only once".
- The text diagram of Technical (`10.0.1.15`, 3 routers, `203.0.113.20`, TTL 63, 62, 61) is a prose sentence in Layman and Bangla. They keep the addresses and the 3 routers, drop the TTL values, and keep "the numbers are only examples" and "the sender sets the TTL". An omission, not a FAIL.

| # | Section | Voice | What I checked against Technical | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | IP address; header with source and destination [1]; IPv4 32 bits [1]; dotted form and RFC 1918 [3]; IPv6 128 bits [2]; hex groups [4]; leading zeros and `::` once [4]; several addresses [1] | PASS | Same claims, same cites. |
| 2 | In plain words | Bangla | Same claims | PASS | "শুরুর শূন্য বাদ দেওয়া যায়" = drop leading zeros. |
| 3 | When you need it | Layman | Machine finds machine; 3 examples; name turned into address | PASS | Same claims. |
| 4 | When you need it | Bangla | Same claims | PASS | Same claims. |
| 5 | How it works | Layman | 2 jobs of an address; TTL and Hop Limit [1] [2]; renamed field [2]; example path; sender sets TTL [1]; unicast, multicast, anycast, no broadcast [4] | PASS | Same claims. The example matches the diagram (3 routers, same addresses). |
| 6 | How it works | Bangla | Same claims | PASS | Terms stay in English. "সবচেয়ে কাছে" = nearest. |
| 7 | A real-life example | Layman | `10.0.2.30`; 3 private ranges [3]; no need to ask; unique only inside one organization [3]; public vs private host [3] | PASS | Same ranges. "Three ranges" counts the 3 ranges of Technical. |
| 8 | A real-life example | Bangla | Same claims | PASS | Same ranges. |
| 9 | Common mistakes | Layman | 6 bullets with cites [2] [4] [4] [3] [4] | PASS | Same claims. |
| 10 | Common mistakes | Bangla | Same claims | PASS | "অনুমোদিত" = allowed. The example `2001::db8::1` is kept. |
| 11 | What a tester can check | Layman | 5 ideas, "tutorial's own advice, not from the sources" | PASS | Same ideas. No cite added. |
| 12 | What a tester can check | Bangla | Same ideas | PASS | Same ideas. |

No FAIL found. No edit made.

Open FAILs: 0
