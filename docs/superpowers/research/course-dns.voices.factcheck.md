# Voice fact-check: DNS (round 2, Bangla term style, 2026-10-22)

Page: `content/course/dns.mdx`. I did not write this page or its voices. This report replaces the earlier one.

Method: I read the 7 `<Voices>` blocks (the "Key words" section has no voices). For each `<Layman>` and `<Bangla>` panel I compared every sentence with the `<Technical>` panel of the same block. FAIL rules: a fact, number, name, example or cite that Technical does not give; a dropped hedge; a wrong or misleading statement; a wrong, ungrammatical or unfinished Bangla sentence; a Bangla panel that breaks the course term style; a Layman sentence over 25 words. An omission is not a FAIL.

Automated checks (script, all blocks):

- Each `<Technical>` body equals the `<Technical>` body of the same section in `git show HEAD:content/course/dns.mdx` (non-blank lines): PASS for 7 of 7.
- Every `<Cite n>` in Layman and Bangla is cited in Technical of the same block: PASS.
- No heading in any Layman or Bangla panel, no TODO, no তুমি: PASS.
- No Layman sentence over 25 words: PASS.
- No acronym, protocol, record type, or command in Bangla letters (DNS, IP, TTL, A, NS, CNAME, MX, TXT, PTR, DNSSEC, RFC, `dig`, `nslookup` stay Latin): PASS.

Notes:

- The two `text` diagrams of Technical are not copied. Layman and Bangla restate them in words: "In learn.example.com, learn is one host name ... com is the top level", and "The order is this. The browser asks the stub resolver ...". Both agree with the diagrams, and the address `203.0.113.10` is the one in the diagram. PASS.
- The record-type table becomes a list with the same six types and the same descriptions.
- Numbers match: TTL range 0 to 2147483647 [4], TTL 86400 seconds (one day), addresses `203.0.113.10` and `203.0.113.20`, response code 3, four steps.
- The page keeps "stub resolver", "recursive name server", "recursive", "iterative", "resource record", "canonical" as English role or type names in the Bangla text, as the Key words table does, and uses Bangla letters for the common words (রিজলভার, ক্যাশ, কুয়েরি, নেম সার্ভার, হোস্ট নেম).

| # | Section | Voice | What the panel says (checked against Technical) | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | DNS is a naming system with a tree shape and no single owner; name to IP, lookup, reverse lookup [1]; tree, root, empty label, read left to right [2]; example host, zone, top level; organizations run more than one name server [2] | PASS | Same facts and cites. |
| 2 | In plain words | Bangla | Same facts in Bangla | FAIL | "প্রতিটা অর্গানাইজেশন ট্রি-র নিজের অংশ দেখে": "দেখে" means "sees", not "looks after". Technical says "looks after its own part". Misleading word; it should be "দেখাশোনা করে". |
| 3 | When you need it | Layman | Four examples of hidden DNS use | PASS | Same. |
| 4 | When you need it | Bangla | Same four examples | PASS | Meaning matches. |
| 5 | How it works | Layman | Stub resolver, recursive name server, shared cache; recursive and iterative; four steps; order of the lookup; most requests from the cache [2] | PASS | Same facts and cites. The "order" paragraph restates the Technical diagram. |
| 6 | How it works | Bangla | Same | PASS | "উত্তরের পেছনে ছোটে" for "chases the answer" and "পরের সার্ভারটা দেখিয়ে দেয়" for "points to the next server" keep the meaning. |
| 7 | Record types and TTL | Layman | Six record types [3]; MX preference, TXT, CNAME rule, NS and MX not an alias [3][4]; TTL meaning, seconds, 0 to 2147483647, 0 forbids caching, maximum not a promise [2][4][5]; lower the TTL before a change [2]; "Name Error", code 3, authoritative only [3]; cached too [2] | PASS | All numbers and cites match. |
| 8 | Record types and TTL | Bangla | Same | PASS | "কম সংখ্যা বেশি পছন্দের" = "a lower number is preferred". Hedge "প্রতিশ্রুতি নয়" kept. |
| 9 | A real-life example | Layman | Old and new address, TTL 86400, some students see the old server, RFC 1034 section 2.3, lower the TTL days before [2] | PASS | Same numbers and cite. |
| 10 | A real-life example | Bangla | Same | PASS | "কয়েক ঘণ্টা পর্যন্ত" = "for hours"; "কিছুই ভাঙেনি" = "nothing is broken". |
| 11 | Common mistakes | Layman | Four mistakes [2][4][4] | PASS | Same. |
| 12 | Common mistakes | Bangla | Same | PASS | Meaning matches. |
| 13 | What a tester can check | Layman | "Tutorial's own advice" line and five ideas | PASS | Same ideas, no cites. |
| 14 | What a tester can check | Bangla | Same | PASS | আপনি form (imperative with -ুন) used; "অস্তিত্বহীন হোস্ট নেম" = "a host name that does not exist". |

## Re-check

I fixed the 1 FAIL row by editing only the Bangla panel:

- Row 2: now "প্রতিটা অর্গানাইজেশন ট্রি-র নিজের অংশ দেখাশোনা করে।". It means "looks after", the same as Technical. PASS.

After the edit I ran the script again: Technical still equals HEAD in 7 of 7 sections, the cites are unchanged, no new heading, no TODO.

FAILs found: 1. Fixed: 1.

Open FAILs: 0
