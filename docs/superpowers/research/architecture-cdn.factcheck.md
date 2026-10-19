# Fact-check: CDN for Static Content (round 1, 2026-10-20)

I did not write this page. I read `content/architecture/cdn.mdx` and `architecture-cdn.md`, fetched each of the 6 sources again with `curl` on 2026-10-20, and checked each cited sentence against the source text (not only against the quotes in the notes). Every quote below is in the fresh fetch. All 6 sources are AWS or MDN pages, so no source is a blog, a forum, or an AI summary. Each source has 1 or more cites, and each cite number has a source. I found 5 FAILs and fixed them in the MDX. The notes have 3 new claim rows (25 to 27).

| # | Location (heading) | Claim (short) | Cite | Verdict | Evidence (quote) / Fix |
|---|---|---|---|---|---|
| 1 | In plain words | CDN = network of connected servers that makes pages load faster | 1 | PASS | "a network of interconnected servers that speeds up webpage loading for data-heavy applications" |
| 2 | In plain words | Main job is to reduce latency (delay) | 1 | PASS | "The primary purpose of a content delivery network (CDN) is to reduce latency, or reduce the delay in communication" |
| 3 | In plain words | POPs in many places; a POP is a group of edge servers | 1 | FAIL, fixed | "a point of presence (POP) or a group of CDN edge servers at multiple geographical locations". The page said "in many cities"; the source says "locations". Fix: "in many places". |
| 4 | In plain words | Origin = your own server, or object storage such as Amazon S3 | 5 | FAIL, fixed | Was an uncited definition. Fix: added an S3 example and cite 5: "URLs that access content directly on the origin server (for example, Amazon S3 or a private HTTP server)" |
| 5 | In plain words | First request goes to the origin; a copy goes to the nearest POP | 1 | PASS | "The request reaches your web application server or origin server... it also sends a copy of the response to the CDN POP geographically closest to that visitor." |
| 6 | In plain words | Next user in that area gets the file from the CDN | 1 | PASS | "any other visitor in that location... the caching server, not the origin server, sends the response" |
| 7 | In plain words | Static content does not change from user to user | 1 | PASS | "Static content is website data that does not change from user to user" |
| 8 | In plain words | Dynamic content (login status, chat) differs per user | 1 | PASS | "weather reports, login status, and chat messages vary among website users" |
| 9 | In plain words | Origin gets less traffic, less bandwidth | 1 | PASS | "They decrease web traffic to the web server, reduce bandwidth consumption" |
| 10 | In plain words | Other servers take the place of offline ones | 1 | PASS | "other operational servers can replace them to ensure uninterrupted service" |
| 11 | In plain words | Cache-Control controls browsers and shared caches such as CDNs | 2 | PASS | "control caching in browsers and shared caches (e.g., Proxies, CDNs)" |
| 12 | In plain words | `max-age=N` keeps a copy fresh for N seconds | 2 | PASS | "the response remains fresh until N seconds after the response is generated" |
| 13 | In plain words | Freshness is decided by age; age is like TTL | 3 | FAIL, fixed | MDN compares age, not max-age, with TTL: "The criterion for determining when a response is fresh and when it is stale is age... This is similar to the TTL in other caching mechanisms." Fix: the page now says that HTTP decides freshness by age, and that age is like the TTL. |
| 14 | Common mistakes | Shared cache keeps one copy for many users | 2 | PASS | "It stores a single response and reuses it with multiple users" |
| 15 | Common mistakes | Without `private`, personal data can leak | 2 | PASS | "If you forget to add private to a response with personalized content... can cause personal information to leak." |
| 16 | Common mistakes | `no-store`: no cache stores the response | 2 | PASS | "any caches of any kind (private or shared) should not store this response" |
| 17 | Common mistakes | CloudFront serves private content with signed URLs or cookies | 5 | PASS | "access your private content by using special CloudFront signed URLs or signed cookies" |
| 18 | Common mistakes | AWS recommends no direct origin access, to stop bypass | 5 | PASS | "Requiring CloudFront URLs isn't necessary, but we recommend it to prevent users from bypassing the restrictions" |
| 19 | Common mistakes | Old copy stays at the edge until it expires | 4 | FAIL, fixed | Was uncited. Fix: added cite 4: "If you need to remove a file from CloudFront edge caches before it expires" |
| 20 | Common mistakes | After invalidation, next request fetches latest from origin | 4 | PASS | "The next time a viewer requests the file, CloudFront returns to the origin to fetch the latest version of the file." |
| 21 | Common mistakes | User can still see the old file from a browser or proxy cache | 4 | PASS | "cached either locally or behind a corporate caching proxy. If you invalidate the file, the user might continue to see the old version" |
| 22 | Common mistakes | JS and CSS out of sync breaks the display | 3 | PASS | "if the versions of JavaScript and CSS resources that a client uses are out of sync, the display will break" |
| 23 | Common mistakes | Version or hash in the name = cache-busting pattern | 2 | PASS | "include version/hashes in their URLs, while never modifying the resources... That's called the cache-busting pattern." |
| 24 | Common mistakes | AWS recommends versioned file names for frequent updates | 4 | PASS | "If you want to update your files frequently, we recommend that you primarily use file versioning" |
| 25 | Common mistakes | CloudFront can switch to a second origin | 6 | PASS | "CloudFront automatically switches to the secondary origin" |
| 26 | Common mistakes | `stale-if-error` on 500, 502, 503, 504 | 2 | PASS | "can reuse a stale response when an upstream server generates an error... 500, 502, 503, or 504" |
| 27 | Key words | Signed URL meaning | — | FAIL, fixed | "lets one user open a private file" is not in the source; anyone with the link can use it. Fix: "A special link with a signature that gives access to a private file" (agrees with row 17). |
| 28 | Key words | Other meanings | — | PASS | Definitions only; they agree with rows 1 to 26. |
| 29 | When you need it, A real-life example, What a tester can check | LMS example, lists, tips | — | PASS | Tutorial's own words. The tip callout title is "Tutorial advice" and its first line says so. |

## Fixes

1. "in many cities" changed to "in many places" (row 3).
2. Origin definition: added "such as Amazon S3" and cite 5 (row 4).
3. TTL sentence: compares HTTP age (not `max-age`) with TTL, as MDN does (row 13).
4. Added cite 4 to "the old copy can stay at the edge until it expires" (row 19).
5. Key word "Signed URL" reworded (row 27).

Open FAILs: 0
