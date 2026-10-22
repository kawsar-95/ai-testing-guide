# Fact-check: Geohashing and Quadtrees (`content/course/geohashing.mdx`)

Reviewer did not write the page. Sources fetched 2026-10-22 into `/tmp/claude-1000/fc4-geohashing/` and stripped to text. S1 (n=1) Elastic geohash grid aggregation, S2 (n=2) Redis GEOADD, S3 (n=3) Bing Maps Tile System. Also fetched the Redis GEOSEARCH page: it has no "1+8" text, so the 1+8 claim rests on GEOADD only, which the page cites correctly.

## Recomputed values (own script, Python, checked by hand)

- 52.374081 N, 4.912350 E (the first point of the S1 example, "NEMO Science Museum", confirmed in S1): geohash length 3 = `u17`, length 5 = `u173z`, length 8 = `u173zy3j` (length 12 = `u173zy3j4h3d`). All match the page.
- Same point, quadkey level 3 = `120`, level 5 = `12020`, level 8 = `12020211`. All match the page. (Level 6 = `120202`, as in the notes.) Each key starts with the key of the level before.
- S3 example: tile (3, 5) at level 3 gives `213`. Correct.
- 52.5 N, 5.624 E gives `u17`; 52.5 N, 5.626 E gives `u1k` at length 3. At length 2 both give `u1`, so they share exactly 2 characters. The S1 box of `u17` ends at 5.625 E, so the points are on both sides of the edge. Correct.
- Distance: 0.002 degree of longitude x 111,320 m x cos(52.5 deg) = 135.5 m. "About 135 m" is correct.
- `u17` box: 53.4375 - 52.03125 = 1.40625 and 5.625 - 4.21875 = 1.40625. "About 1.4 degrees high and wide" is correct.
- The page marks the example table, the box arithmetic, and the 135 m distance as the tutorial's own. Marked correctly.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Elasticsearch labels each grid cell with a geohash, precision chosen by the user | 1 | PASS | "Each cell is labeled using a geohash which is of user-definable precision." |
| 2 | Precision is the code length; long code = small cell, short code = large cell | 1 | PASS | "High precision geohashes have a long string length and represent cells that cover only a small area." |
| 3 | Elasticsearch accepts precision 1 to 12 | 1 | PASS | "can have a choice of precision between 1 and 12." |
| 4 | Bing cuts its map into tiles; a quadkey names one tile at one level | 3 | PASS | "Each quadkey uniquely identifies a single tile at a particular level of detail" |
| 5 | Redis geohash interleaves latitude and longitude bits; quadkey interleaves tile X and Y (comparison marked own) | 2, 3 | PASS | "Latitude and Longitude bits are interleaved"; "the bits of the Y and X coordinates are interleaved". The comparison is marked "the tutorial's own". |
| 6 | Redis keeps points in a geospatial index and can search a box or a radius | 2 | PASS | "This format allows for bounding box and radius querying"; "The Geo index structure is just a sorted set." |
| 7 | Elasticsearch counts points in map cells "for a zoomed-out view" with the geohash grid aggregation | 1 | FAIL, fixed: PASS (see Re-check) | S1 says the aggregation groups points into grid buckets (PASS), but nowhere says low precision is for a zoomed-out view. It says only that detailed buckets are "typically for displaying a 'zoomed in' map". "Zoomed-out" is an inference stated as sourced. Mark it as the tutorial's own or drop it. |
| 8 | Bing pre-renders the map at many levels of detail and cuts each into tiles | 3 | PASS | "we chose to pre-render the map at many different levels of detail, and to cut each map into tiles for quick retrieval and display." |
| 9 | GEOADD stores items in a sorted set filled with a technique called Geohash; 52-bit integer; score holds it without loss | 2 | PASS | "Latitude and Longitude bits are interleaved to form a unique 52-bit integer. We know that a sorted set double score can represent a 52-bit integer without losing precision." |
| 10 | Redis refuses latitude outside -85.05112878..85.05112878 and longitude outside -180..180 | 2 | PASS | "Valid latitudes are from -85.05112878 to 85.05112878 degrees." / "The command will report an error when the user attempts to index coordinates outside the specified ranges." |
| 11 | Redis checks the 1+8 areas needed to cover the whole shape, then drops elements outside it | 2 | PASS | "checking the 1+8 areas needed to cover the whole shape and discarding elements outside it." Stated as Redis behavior. Matches GEOADD. |
| 12 | "one cell is not enough, because a search shape can reach over the edge of a cell" (edge problem) | none | PASS | Marked "The tutorial's own reading", no cite. No source states it; the marking is correct. |
| 13 | A geohash of length 12 gives cells under one square metre | 1 | PASS | "The highest-precision geohash of length 12 produces cells that cover less than a square metre of land". Number matches S1. The sentence does not name Elasticsearch; the next sentence does. Advice: write "In Elasticsearch, length 12 ...". |
| 14 | Elasticsearch warns high precision can cost much RAM and give large results; filter to a small area first | 1 | PASS | "high-precision requests can be very costly in terms of RAM and result sizes"; "a filter like geo_bounding_box should be applied to narrow the subject area" |
| 15 | At each level the Bing map width and height grow by a factor of 2 | 3 | PASS | "At each successive level of detail, the map width and height grow by a factor of 2" |
| 16 | Tiles are 256 by 256 pixels; map is 2^level tiles wide and high | 3 | PASS | "cut into tiles of 256 x 256 pixels each."; "map width = map height = 2 level tiles" |
| 17 | "each tile splits into 4 tiles at the next level" | none | PASS | Marked as the tutorial's own arithmetic. Correct (2^N by 2^N). |
| 18 | Quadkey: interleave Y and X bits, read as base-4, write as string; (3, 5) at level 3 = "213" | 3 | PASS | "the bits of the Y and X coordinates are interleaved, and the result is interpreted as a base-4 number ... converted into a string."; `quadkey = 100111 2 = 213 4 = "213"` |
| 19 | Quadkey length equals the level | 3 | PASS | "the length of a quadkey (the number of digits) equals the level of detail" |
| 20 | A quadkey starts with its parent's quadkey; tile 2 is parent of 20 to 23 | 3 | PASS (content) | "the quadkey of any tile starts with the quadkey of its parent tile"; "tile 2 is the parent of tiles 20 through 23". Copy problem: see structure check. |
| 21 | Near tiles usually have near keys | 3 | PASS | "usually have quadkeys that are relatively close together" |
| 22 | "Neighbor tiles often sit on the same disk blocks, which saves disk reads" | 3 | FAIL, fixed: PASS (see Re-check) | S3 gives a goal, not a fact: "neighboring tiles are usually requested in groups, and it's desirable to keep those tiles on the same disk blocks, in order to minimize the number of disk reads." The page states the result as a fact and drops "desirable". |
| 23 | A quadkey can be a key in a common B-tree index | 3 | PASS | "it can be used as an key in common database B-tree indexes." |
| 24 | Table: geohash names a grid cell; longer = smaller cell; built from interleaved lat/lon bits | 1, 2 | PASS | Same quotes as claims 1, 2, 9. |
| 25 | Table: quadkey names a tile at one level; longer = deeper level, smaller tile; built from interleaved X/Y bits | 3 | PASS | Same quotes as claims 4, 18, 19. |
| 26 | Example: u17 box is 52.03125 to 53.4375 N, 4.21875 to 5.625 E | 1 | PASS | "// bbox will contain [ 52.03125, 4.21875, 53.4375, 5.625 ] // [ minlat, minlon, maxlat, maxlon]" |
| 27 | Example geohashes and quadkeys (table), "each longer code starts with the shorter" | none | PASS | Own, marked own, recomputed correct. |
| 28 | Cafes: u17 vs u1k at length 3, share 2 characters, ~135 m apart, one-cell search would miss one | none | PASS | Own, marked own, recomputed correct. |
| 29 | "This is why Redis checks the 1+8 areas" (after the cafe example) | 2 | FAIL, fixed: PASS (see Re-check) | S2 gives what Redis checks, not why. The cite makes the cause look sourced. The earlier "tutorial's own reading" sentence is not repeated here. Also, the example uses 3-character Elasticsearch cells while Redis uses a 52-bit score, so the link is looser than the text says. Mark the sentence as the tutorial's own reading and drop the cite from the "why". |
| 30 | Mistake: a high precision "can give a huge number of buckets, with a high cost in RAM and result size" | 1 | FAIL, fixed: PASS (see Re-check) | This is Elasticsearch aggregation behavior ("potentially millions of buckets will be created and returned") but the bullet does not name Elasticsearch, so it reads as a general fact about geohashes. Name the product. |
| 31 | Redis assumes a spherical Earth; worst-case error up to 0.5%; consider other systems when errors matter | 2 | PASS | "in the worst case, the error may be up to 0.5%, so you may want to consider other systems for error-critical applications." Named as Redis. |
| 32 | Redis cannot index areas very near the poles | 2 | PASS | "areas very near to the poles are not indexable." |
| 33 | Bing map stops at about 85.05 degrees of latitude | 3 | PASS | "the maximum latitude shown is approximately 85.05 degrees." Named as Bing. |
| 34 | Bing Maps for Enterprise is deprecated, retired for free accounts; Enterprise accounts can use it until 30 June 2028 | 3 | PASS | "deprecated and has been retired for all free (Basic) account customers. Enterprise account customers can continue to use Bing Maps for Enterprise services until June 30th, 2028." Date matches. |
| 35 | Key words: Geohash, Precision (ES 1 to 12), Interleave, Geospatial index (Redis sorted set), Tile (256 by 256), Level of detail, Quadkey, Parent tile, Bounding box | 1, 2, 3 | PASS | Each matches the quotes above. Bounding box: S1 `top_left`/`bottom_right` corners and `geo_bounding_box` "to narrow the subject area". |

35 claims. Tip callout: the page says "These test ideas are the tutorial's own advice", no `<Cite>`. Not checked as facts.

## Structure check

| Check | Result |
|---|---|
| Sources: 3 entries, all https, all cited (1, 2, 3) | PASS |
| Every `<Cite n>` has a source (n = 1..3) | PASS |
| No source is a blog, forum, Wikipedia, AI summary, or systemdesignbangla.com (Elastic docs, Redis docs, Microsoft Learn) | PASS |
| Copy of 8 or more words from a source | FAIL, fixed: PASS (see Re-check). Was: "Tile 2 is the parent of tiles 20 to 23" (How it works, list item 2) copies the 8-word run "tile 2 is the parent of tiles 20" from S3. Reword, for example "Tile 2 holds the tiles 20 to 23." Next longest runs are 7 words ("map is cut into tiles of 256", "Bing Maps for Enterprise is deprecated and"), which pass. |
| Section order: In plain words, When you need it, How it works (optional), A real-life example, Common mistakes, What a tester can check, Key words; Key words last | PASS |
| `#` title "Geohashing and Quadtrees" equals the expected title | PASS |
| Tip callout has no `<Cite>`; no `<Voices>` | PASS |
| Prose word count (no export block, tables, code, Cite tags; headings and callout included) | 1060 words, inside 700 to 1100. Little room: any fix must not add more than about 40 words. |
| Security page rule | Not a security page |

## Notes for the writer (not extra FAILs)

- Claim 13: name Elasticsearch in the length-12 sentence.
- `lib/course/topics.ts` and `scripts/course-route-map.json` have no `geohashing` entry yet (the controller adds them).

## Re-check (after the writer fixed the 5 FAILs)

Changed lines re-read in the MDX and re-checked against the fetched sources.

| Row | New text | Verdict | Reason |
|---|---|---|---|
| 7 | "You must count points in map cells. Elasticsearch does this with its geohash grid aggregation [1]" | PASS | "zoomed-out" removed. S1: "groups geo_point and geo_shape values into buckets that represent a grid." |
| 22 | "The source says this matters because neighbor tiles are usually asked for together, so it is good to keep them on the same disk blocks [3]" | PASS | S3: "neighboring tiles are usually requested in groups, and it's desirable to keep those tiles on the same disk blocks". Goal, not fact, now. |
| 29 | "Redis checks 1+8 areas to cover a search shape [2]. The tutorial's own reading: this is how it avoids such a miss." | PASS | The cite covers only the what ("checking the 1+8 areas needed to cover the whole shape"). The why is marked as the tutorial's own. |
| 30 | "Elasticsearch warns that a high precision can be costly in RAM and result size, and that a large area can give millions of buckets [1]" | PASS | Product named. S1: "very costly in terms of RAM and result sizes"; "potentially millions of buckets will be created and returned". Hedged. |
| Copy | "The first digits of a quadkey are the whole key of its parent tile. For example, the tiles with keys 20, 21, 22, and 23 all have tile 2 as their parent." | PASS | New text still says what S3 says (the quadkey starts with its parent's quadkey; tile 2 is the parent of 20 to 23). Re-ran the copy check on the whole page: the longest run is 7 words ("map is cut into tiles of 256", "Bing Maps for Enterprise is deprecated and"). No run of 8. |

New text has no other factual problem. Other claims are unchanged. Prose word count after the fixes: 1100 (limit 1100, so there is no room left for more text).

Open FAILs: 0
