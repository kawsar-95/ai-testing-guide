# Voice fact-check: IP Addresses (round 2, 2026-10-22)

Page: `content/course/ip.mdx`. I did not write the voices. This report replaces the old one. The Bangla panels were rewritten in the course term style.

Method: I read the 6 `<Voices>` blocks. For each `<Layman>` and `<Bangla>` panel, I compared every claim, number, name, example, and `<Cite n>` with the `<Technical>` panel of the same block. I checked the Bangla for meaning, grammar, address form (আপনি), concept words in Bangla letters, and acronym, protocol, and code names in English. I counted the words of each Layman sentence (limit 25). I did not re-check the sources: the Technical claims are in `course-ip.factcheck.md`. The "Key words" section has no voices.

Structure checks:

- `<Technical>` unchanged: each non-blank line of the 6 `<Technical>` bodies is also in `git show HEAD:content/course/ip.mdx`. No line changed.
- No TODO placeholder. No heading in a Layman or Bangla panel. No `তুমি` form.
- Cites: every `<Cite n>` in a Layman or Bangla panel is also cited by the Technical panel of the same block (n is 1 to 4).
- Addresses, bit counts, and ranges are copied exactly: `192.168.1.10`, 32 bits, 128 bits, `2001:db8::8:800:200c:417a`, `10.0.2.30`, and the 3 private ranges.
- The Technical diagram becomes a one-sentence example (`10.0.1.15` to `203.0.113.20`, 3 routers). The numbers TTL 63, 62, 61 are not repeated, and the text says that they are only examples.

| # | Section | Voice | Verdict | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | PASS | Same facts, same cites (1, 2, 3, 4). Sentences are short. |
| 2 | In plain words | Bangla | PASS | "IP অ্যাড্রেস (IP address)" at first use. "octet" in parentheses at first use. IPv4, IPv6, RFC 1918 stay in English. |
| 3 | When you need it | Layman | PASS | Same three examples. No cite, same as Technical. |
| 4 | When you need it | Bangla | PASS | Same examples. "API-কে কল করা টেস্ট রানার" is correct. |
| 5 | How it works | Layman | PASS | Same TTL and Hop Limit facts, same 3 kinds of IPv6 address, no broadcast. |
| 6 | How it works | Bangla | PASS | Same facts. Terms such as Time to Live, Hop Limit, Unicast, Anycast stay in English as page terms. "TTL ঠিক করে সেন্ডার (sender)" is correct. |
| 7 | A real-life example | Layman | PASS | Same example and cites (3). |
| 8 | A real-life example | Bangla | PASS | Same ranges. "ইউনিক" and "গ্লোবালি ইউনিক" are clear. |
| 9 | Common mistakes | Layman | PASS | 6 bullets, same facts. `2001::db8::1` is not valid, same as Technical. |
| 10 | Common mistakes | Bangla | PASS | 6 bullets, same. `::1` stays in code. The negative advice "তুলনা করবেন না" is correct. |
| 11 | What a tester can check | Layman | PASS | 5 ideas, same. It says the advice is the tutorial's own. |
| 12 | What a tester can check | Bangla | PASS | 5 ideas, same. "255-এর বেশি একটি সংখ্যা" matches "a number above 255". |

Longest Layman sentence: 23 words. All Bangla sentences are short and finished.

Found: 0 FAILs. Fixed: 0. No edit was needed.

Open FAILs: 0
