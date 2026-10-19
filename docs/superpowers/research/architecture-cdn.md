# CDN for Static Content (Architecture 09) — research notes (2026-10-20)

Base text: the owner's notes, section "CDN for Static Content Delivery" (`architecture-owner-notes.md`). The owner's ideas, lists, and LMS example are kept. They get no cite.

Fetch note: each source was fetched with `curl -sL` on 2026-10-20 and stripped to plain text in the scratch directory. The quotes below are copied from that text. The Cloudflare Learning Center returned a bot check ("Just a moment..."), so the page uses AWS and MDN for the CDN definition. The raw text was not committed.

## Sources

S1. What is a CDN (Content Delivery Network)? — Amazon Web Services — https://aws.amazon.com/what-is/cdn/ — accessed 2026-10-20. Page cite `[1]`.
S2. Cache-Control header — MDN Web Docs — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cache-Control — accessed 2026-10-20. Page cite `[2]`.
S3. HTTP caching — MDN Web Docs — https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching — accessed 2026-10-20. Page cite `[3]`.
S4. Invalidate files to remove content — Amazon CloudFront Developer Guide — https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html — accessed 2026-10-20. Page cite `[4]`.
S5. Serve private content with signed URLs and signed cookies — Amazon CloudFront Developer Guide — https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html — accessed 2026-10-20. Page cite `[5]`.
S6. Optimize high availability with CloudFront origin failover — Amazon CloudFront Developer Guide — https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/high_availability_origin_failover.html — accessed 2026-10-20. Page cite `[6]`.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | A CDN is a network of connected servers that speeds up page loading | S1 | "A content delivery network (CDN) is a network of interconnected servers that speeds up webpage loading for data-heavy applications." |
| 2 | The main purpose of a CDN is to reduce latency (delay) | S1 | "The primary purpose of a content delivery network (CDN) is to reduce latency, or reduce the delay in communication created by a network's design." |
| 3 | A CDN has points of presence (POPs), groups of edge servers in many places | S1 | "Content delivery networks (CDNs) work by establishing a point of presence (POP) or a group of CDN edge servers at multiple geographical locations." |
| 4 | The first request goes to the origin server; a copy goes to the nearest POP | S1 | "The request reaches your web application server or origin server. The origin server sends the response to the remote visitor. At the same time, it also sends a copy of the response to the CDN POP geographically closest to that visitor." |
| 5 | Later requests from that location are served by the caching server, not the origin | S1 | "The next time this visitor, or any other visitor in that location, makes the same request, the caching server, not the origin server, sends the response." |
| 6 | Static content does not change from user to user (header images, logos, fonts) | S1 | "Static content is website data that does not change from user to user. Website header images, logos, and font styles remain the same across all users" |
| 7 | Dynamic content (news feeds, login status, chat messages) varies among users | S1 | "Dynamic content such as social media news feeds, weather reports, login status, and chat messages vary among website users." |
| 8 | CDN servers decrease traffic to the web server and reduce bandwidth use | S1 | "They decrease web traffic to the web server, reduce bandwidth consumption, and improve the user experience of your applications." |
| 9 | If CDN servers go offline, other servers replace them | S1 | "if one or more CDN servers go offline, other operational servers can replace them to ensure uninterrupted service." |
| 10 | Cache-Control controls caching in browsers and shared caches such as CDNs | S2 | "The HTTP Cache-Control header holds directives (instructions) in both requests and responses that control caching in browsers and shared caches (e.g., Proxies, CDNs)." |
| 11 | A shared cache stores one response and reuses it for many users; avoid personal content there | S2 | "It stores a single response and reuses it with multiple users — so developers should avoid storing personalized contents to be cached in the shared cache." |
| 12 | `max-age=N` keeps a response fresh for N seconds | S2 | "The max-age=N response directive indicates that the response remains fresh until N seconds after the response is generated." |
| 13 | Without `private`, personal content can leak to other users from a shared cache | S2 | "If you forget to add private to a response with personalized content, then that response can be stored in a shared cache and end up being reused for multiple users, which can cause personal information to leak." |
| 14 | `no-store` tells all caches not to store the response | S2 | "The no-store response directive indicates that any caches of any kind (private or shared) should not store this response." |
| 15 | Cache busting: put a version or hash in the URL and never change the file at that URL | S2 | "A modern best practice for static resources is to include version/hashes in their URLs, while never modifying the resources — but instead, when necessary, updating the resources with newer versions that have new version-numbers/hashes, so that their URLs are different. That's called the cache-busting pattern." |
| 16 | `stale-if-error` lets a cache reuse a stale response on a 500, 502, 503, or 504 error | S2 | "The stale-if-error response directive indicates that the cache can reuse a stale response when an upstream server generates an error, or when the error is generated locally. Here, an error is considered any response with a status code of 500, 502, 503, or 504." |
| 17 | If the JS and CSS versions a client uses are out of sync, the display breaks | S3 | "if the versions of JavaScript and CSS resources that a client uses are out of sync, the display will break." |
| 18 | Age in HTTP is like TTL in other caches | S3 | "In HTTP, age is the time elapsed since the response was generated. This is similar to the TTL in other caching mechanisms." |
| 19 | After an invalidation, CloudFront fetches the latest file from the origin on the next request | S4 | "Invalidate the file from edge caches. The next time a viewer requests the file, CloudFront returns to the origin to fetch the latest version of the file." |
| 20 | For frequent updates, AWS recommends versioned file names over invalidation | S4 | "If you want to update your files frequently, we recommend that you primarily use file versioning" |
| 21 | After an invalidation, a user can still see the old version from browser or proxy caches | S4 | "If you invalidate the file, the user might continue to see the old version until it expires from those caches." |
| 22 | Private content can be served with signed URLs or signed cookies | S5 | "Require that your users access your private content by using special CloudFront signed URLs or signed cookies." |
| 23 | Users should use CloudFront URLs, not direct origin URLs, so they cannot bypass the restrictions | S5 | "we recommend it to prevent users from bypassing the restrictions that you specify in signed URLs or signed cookies." |
| 24 | Origin failover switches to a secondary origin when the primary fails | S6 | "If the primary origin is unavailable, or returns specific HTTP response status codes that indicate a failure, CloudFront automatically switches to the secondary origin." |
| 25 | (fact-check) The origin can be your own server or object storage such as Amazon S3 | S5 | "URLs that access content directly on the origin server (for example, Amazon S3 or a private HTTP server)" |
| 26 | (fact-check) A file stays in the edge cache until it expires, unless removed | S4 | "If you need to remove a file from CloudFront edge caches before it expires, you can do one of the following" |
| 27 | (fact-check) Freshness is decided by age; age is like TTL (replaces the max-age = TTL wording of claim 18) | S3 | "The criterion for determining when a response is fresh and when it is stale is age." |

## Owner claims kept without a cite

- The LMS example (course thumbnails, recorded videos, certificate PDFs, JS bundles from object storage plus CDN). Tutorial example.
- "When you need it" list. Tutorial advice.
- The tester checks. Tutorial advice.
