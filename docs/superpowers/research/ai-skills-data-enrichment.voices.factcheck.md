# Voices fact check: AI Skills, Data Enrichment at Scale

Each Layman and Bangla panel was compared with the Technical panel of the same block (6 blocks, 12 panels). Checked on 2026-10-28 by an agent that did not write the page.

| Block | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS | PASS | Same definition, same Clay, Firecrawl, Apify, Faker facts, cites 1, 3, 2, 6. Layman "one after another, in a set order" restates "in a set order". |
| How it works | PASS | FAIL | Layman and Bangla turn the text diagram into prose with the same steps; "seed 42" is only an example value. Same cites 7, 4, 5, 3, 2. Batch limits (100,000, 256 MB, 24 hours) and `custom_id`, `output_config.format` kept. FAIL (Bangla): "Apify Store-এ Apify-এর তৈরি পাবলিক Actor আছে" means "public Actors made by Apify". Technical says "Apify has ready-made public Actors in Apify Store"; S2 says public Actors are available to everyone in the Store, not that Apify made them. Changed fact. |
| How a tester uses it | FAIL | FAIL | Same 4 uses and the tip text, cites 6, 4, 5, 3, 2, 1. The tip is a plain paragraph, still marked as the tutorial's own advice, no cite. FAIL (both): Technical has "The [k6 module](/k6/) shows how to use a data file in a test." Layman and Bangla drop this sentence and the link. Lost content. |
| Tools to try | PASS | PASS | Same 5 tools and facts, cites 1, 2, 3, 7, 4. "run it on your own servers" = self-hosted. |
| Common mistakes | PASS | PASS | Same 5 mistakes and fixes, cites 6, 7, 5, 4. |
| How to start | PASS | PASS | Same 5 steps, same numbers (100, 10), cites 7, 5, 4. |

## FAILs and fixes

1. How it works, Bangla. Text: "Apify Store-এ Apify-এর তৈরি পাবলিক Actor আছে <Cite n={2} />।" Fix: "Apify Store-এ রেডিমেড পাবলিক Actor আছে <Cite n={2} />।"
2. How a tester uses it, Layman and Bangla. The k6 link sentence is missing. Fix: after "Give the file to your load script." add "The [k6 module](/k6/) shows how to use a data file in a test." In Bangla, after "ফাইলটা আপনার load script-কে দিন।" add "একটা টেস্টে ডেটা ফাইল কীভাবে ব্যবহার করবেন, তা [k6 module](/k6/)-এ দেখুন।"

## Checks done

- Each Layman and Bangla panel gives no fact that Technical of the same block does not give.
- Each fact of Technical is in Layman and Bangla, except FAIL 2.
- Each `<Cite n>` in Layman and Bangla uses only an `n` that Technical of the same block cites.
- Tool names, acronyms, and code stay in English in Bangla: Clay, Apify, Actor, Firecrawl, Faker, Markdown, JSON, Message Batches API, `custom_id`, `output_config.format`, `variant_reason`, MB.
- Numbers are the same in all voices: 100,000, 256 MB, 24 hours, 100 rows, 10 rows.
- Bangla addresses the reader with আপনি. A search for তুমি, তোমার, তুই, তোর found nothing.
- The "Tutorial advice" text is in all 3 voices and has no cite.


## Round 2 (2026-10-28)

The writer changed the 2 FAIL sentences. Re-checked against Technical of the same block and S2 (fetched 2026-10-28).

| FAIL | Current text | Verdict | Notes |
|---|---|---|---|
| 1 (How it works, Bangla) | "Apify Store-এ রেডিমেড পাবলিক Actor আছে <Cite n={2} />।" | Fixed (PASS) | Same as Technical "Apify has ready-made public Actors in Apify Store". S2: "Public Actors are available to everyone in Apify Store." Cite 2 is cited by Technical of the block. |
| 2 (How a tester uses it, Layman) | "The [k6 module](/k6/) shows how to use a data file in a test." | Fixed (PASS) | Same sentence as Technical. `/k6/` is in `scripts/k6-route-map.json`. |
| 2 (How a tester uses it, Bangla) | "একটা টেস্টে ডেটা ফাইল কীভাবে ব্যবহার করবেন, তা [k6 module](/k6/)-এ দেখুন।" | Fixed (PASS) | Same meaning as Technical, same link `/k6/`, addresses the reader with আপনি (ব্যবহার করবেন, দেখুন). "k6 module", Apify, Actor, Apify Store stay in English. |

Round 2 checks: no other sentence changed in the 2 blocks; no new cite; a search for তুমি, তোমার, তুই, তোর found nothing.

Open FAILs: 0
