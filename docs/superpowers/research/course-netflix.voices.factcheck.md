# Voice fact-check: Netflix (round 2, 2026-10-22)

Page: `content/course/netflix.mdx`. I did not write this page or its voices.

Method: I read the 6 `<Voices>` blocks. For each `<Layman>` and `<Bangla>` panel I compared every claim, number, hedge and cite with `<Technical>` of the same `##` section. Checks run on every block: the `<Technical>` body matches the same section of `git show HEAD:content/course/netflix.mdx` (no change); every `<Cite n>` in a voice panel is also cited in `<Technical>` of the same block; no heading and no TODO in `<Layman>` or `<Bangla>`; no তুমি form; no Layman sentence over 25 words (script); Bangla style (আপনি, concept words in Bangla letters, acronyms, products, commands and code in English). The `## Key words` section has no voices. `<Layman>` panels are unchanged from the committed version. An omission is not a FAIL.

| # | Section | Voice | Verdict | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | PASS | Same facts, numbers, hedges, and cites as Technical; plain short sentences. |
| 2 | In plain words | Bangla | PASS | AWS and Open Connect split, the OCA description, no member data on OCAs, the 2011 start and the two reasons, and the efficiency claim all match, with cite 1 and the same hedge ("Netflix says"). Product names stay in English. |
| 3 | When you need it | Layman | PASS | Same facts, numbers, hedges, and cites as Technical; plain short sentences. |
| 4 | When you need it | Bangla | PASS | Two OCA place types, free servers to qualifying ISPs, "more than a thousand ISPs" with cite 2, the embedded-OCA hedge, and the tutorial-own lesson match. The block says at the start that the site statements are the vendor's. |
| 5 | How it works | Layman | PASS | Same facts, numbers, hedges, and cites as Technical; plain short sentences. |
| 6 | How it works | Bangla | PASS | The five steps (marked as the tutorial's summary), steering by availability, health and distance, off-peak fill, adaptive bitrate (chunks, DASH and HLS, no stream format named, RFC does not define choice), Hystrix (maintenance mode, 1.5.18, resilience4j) and Chaos Monkey (Spinnaker, weekday weighted coin flip, 9AM to 3PM) all match with the same cites 1, 4 to 8. `অ্যাক্সেসের সময়ে` is a literal rendering of "at the time of access"; it has the same meaning as Technical, so it is not a FAIL. |
| 7 | A real-life example | Layman | PASS | Same facts, numbers, hedges, and cites as Technical; plain short sentences. |
| 8 | A real-life example | Bangla | FAIL (style) | Dhaka viewer flow matches Technical. FAIL (style): `embedded OCA` is bare English at its first use in this block, with no Bangla-letter word and no parentheses. |
| 9 | Common mistakes | Layman | PASS | Same facts, numbers, hedges, and cites as Technical; plain short sentences. |
| 10 | Common mistakes | Bangla | FAIL (style) | Four mistakes, the copyright years 2016, 2019, 2026, the inference label and the reading label match, with cites 1, 2, 6, 8. FAIL (style): `embedded OCA` is bare English at its first use in this block. |
| 11 | What a tester can check | Layman | PASS | Same facts, numbers, hedges, and cites as Technical; plain short sentences. |
| 12 | What a tester can check | Bangla | PASS | Five test ideas match, the advice label and "any streaming service" are kept. No cites, as in Technical. |

## Re-check

Fixed rows 8 and 10. Both now write `ISP-র ভেতরে বসানো OCA (embedded OCA)` at the first use. The facts, cites, and hedges did not change. I re-read both panels and they match Technical. `node --test tests/voice-source.test.ts tests/course.test.ts` passes.

FAILs found: 2. Fixed: 2.

Open FAILs: 0
