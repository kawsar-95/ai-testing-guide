# Voice fact-check: Geohashing and Quadtrees (round 1, 2026-10-22)

Page: `content/course/geohashing.mdx`. I did not write the Layman or Bangla panels.

Method: I compared each `<Layman>` and `<Bangla>` panel with the `<Technical>` panel of the same `##` section (6 blocks; `## Key words` has no voices). A fact, number, name, example, hedge, or `<Cite n>` that Technical does not give is a FAIL. A wrong or unfinished Bangla sentence is a FAIL. A Bangla panel that breaks the course term style is a FAIL (তুমি, a common concept word left in English without a reason, or an acronym, product name, or command in Bangla letters). A Layman sentence over 25 words is a FAIL. An omission is not a FAIL. I read the Bangla text for meaning, grammar, and the আপনি form.

Mechanical checks (script): each `<Technical>` panel is identical to the `<Technical>` panel of the same section in `git show HEAD:content/course/geohashing.mdx`, and the text outside the `<Voices>` blocks is identical to HEAD. Each Layman and Bangla panel cites only `n` values that Technical of the same block cites, and has the same number of `<Cite>` tags as Technical. No heading in a Layman or Bangla panel. No TODO. No তুমি. A scan of the Bangla panels for acronyms and product names written in Bangla letters found none. The Layman panels are identical to HEAD before my edits (only the Bangla panels were rewritten).

Notes:

- Block 3: the Layman panel turns the comparison table into a list. Same 3 rows, same cites. PASS.
- Block 4: the Layman panel turns the example table into a list. Same 3 rows and the same values (`u17`, `u173z`, `u173zy3j`, `120`, `12020`, `12020211`). PASS.
- I checked the numbers that Technical gives: the quadkey of tile (3, 5) on level 3 is "213" (Y bits 101, X bits 011, interleaved 10 01 11 = 2 1 3). The box of `u17` is 1.40625 degrees high and wide. Layman and Bangla copy these correctly.
- Block 3: "Geohash নামের একটি কৌশল" keeps the technique name as Technical does. PASS.
- Block 6: no callout in Layman or Bangla. They restate the "tutorial's own advice" line and the 6 ideas with no cites. PASS.

| # | Section | Voice | Verdict | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | PASS | Same facts, numbers, hedges, and cites as Technical. |
| 2 | In plain words | Bangla | PASS | Same facts, numbers, hedges, and cites as Technical. Natural Bangla, আপনি form, term style kept. |
| 3 | When you need it | Layman | PASS | Same facts, numbers, hedges, and cites as Technical. |
| 4 | When you need it | Bangla | PASS | Same facts, numbers, hedges, and cites as Technical. Natural Bangla, আপনি form, term style kept. |
| 5 | How it works | Layman | PASS | Same facts, numbers, hedges, and cites as Technical. |
| 6 | How it works | Bangla | FAIL -> fixed | Three English fragments in Bangla sentences: "52-bit ইন্টিজার", "256 by 256 পিক্সেল", "base-4 সংখ্যা". Changed to "52-বিটের ইন্টিজার", "256 বাই 256 পিক্সেল", "বেস-4 (base-4) সংখ্যা". The numbers and facts are unchanged. |
| 7 | A real-life example | Layman | PASS | Same facts, numbers, hedges, and cites as Technical. |
| 8 | A real-life example | Bangla | PASS | Same facts, numbers, hedges, and cites as Technical. Natural Bangla, আপনি form, term style kept. |
| 9 | Common mistakes | Layman | PASS | Same facts, numbers, hedges, and cites as Technical. |
| 10 | Common mistakes | Bangla | FAIL -> fixed | Four issues. (1) "লক্ষ লক্ষ বাকেট" for "millions of buckets" understates the number (lakhs can mean hundreds of thousands). Changed to "কয়েক মিলিয়ন বাকেট". (2) "deprecated" left in English. Changed to "ডিপ্রিকেটেড (deprecated)". (3) "30 June 2028" had an English month name. Changed to "30 জুন 2028". (4) "Enterprise অ্যাকাউন্ট" changed to "এন্টারপ্রাইজ অ্যাকাউন্ট". The product name "Bing Maps for Enterprise" stays in English. |
| 11 | What a tester can check | Layman | PASS | Same facts, numbers, hedges, and cites as Technical. |
| 12 | What a tester can check | Bangla | PASS | Same facts, numbers, hedges, and cites as Technical. Natural Bangla, আপনি form, term style kept. |

## Re-check (after fixes)

Re-read blocks 3 and 5 (Bangla) after the edits. The numbers (52, 256, 4, 0.5%, 30 জুন 2028) and the cites are unchanged. The new words are glossed or in Bangla letters.

FAIL rows found: 2. Fixed: 2.

Open FAILs: 0
