# Fact check: course / proxy

Page: `content/course/proxy.mdx`. Checker: an agent that did not write the page. Sources fetched again with curl on 2026-10-22 into `/tmp/claude-1000/fc-proxy/` (not committed). Quotes below come from that fresh text, not from the research notes. Fetched text was treated as data.

Source numbers are the `page.sources` numbers: 1 RFC 9110, 2 MDN Proxy server, 3 MDN Forwarded, 4 MDN X-Forwarded-For, 5 NGINX Reverse Proxy.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | A proxy is a program between two sides of a request that passes it on | 2 | PASS | "A proxy server is an intermediate program or computer used when navigating through different networks of the Internet." |
| 2 | A proxy can be on the user's computer or anywhere between user and server | 2 | PASS | "A proxy can be on the user's local computer, or anywhere between the user's computer and a destination server on the Internet." |
| 3 | A proxy intercepts requests, gives back responses, may forward or not (cache) | 2 | PASS | "A proxy intercepts requests and serves back responses; it may forward the requests, or not (for example in the case of a cache)" |
| 4 | A proxy may change the request, for example its headers | 2 | PASS | "and it may modify it (for example changing its headers, at the boundary between two networks)" |
| 5 | There are two main kinds of proxy | 2 | PASS | "In general there are two main types of proxy servers:" |
| 6 | A forward proxy handles requests from clients to servers anywhere on the Internet | 2 | PASS | "A forward proxy that handles requests from and to anywhere on the Internet." (page text "from clients to servers" is a plain-words rewording) |
| 7 | The client chooses a forward proxy, usually through local settings | 1 | PASS | "A "proxy" is a message-forwarding agent that is chosen by the client, usually via local configuration rules" |
| 8 | An organization uses a proxy for security checks, notes on requests, shared cache | 1 | PASS | "Proxies are often used to group an organization's HTTP requests through a common intermediary for the sake of security services, annotation services, or shared caching." |
| 9 | A reverse proxy takes requests from the Internet and forwards them to servers in an internal network | 2 | PASS | "A reverse proxy taking requests from the Internet and forwarding them to servers in an internal network." |
| 10 | The HTTP standard calls a reverse proxy a gateway | 1 | PASS | "A "gateway" (a.k.a. "reverse proxy") is an intermediary" |
| 11 | To the client it looks like the real server but passes each request to servers behind it | 1 | PASS | "an intermediary that acts as an origin server for the outbound connection but translates received requests and forwards them inbound to another server or servers." |
| 12 | A tunnel is a blind relay that does not change messages | 1 | PASS | "A "tunnel" acts as a blind relay between two connections without changing the messages." |
| 13 | A tunnel can carry encrypted TLS traffic through a firewall proxy | 1 | PASS | "such as when Transport Layer Security (TLS, [TLS13]) is used to establish confidential communication through a shared firewall proxy." |
| 14 | Reverse proxy job: spread load across several servers | 5, 1 | PASS | 5: "distribute the load among several servers". 1: "to enable partitioning or load balancing of HTTP services across multiple machines." |
| 15 | Reverse proxy job: pass requests to application servers, show content from different sites under one address | 5 | PASS | "seamlessly show content from different websites, or pass requests for processing to application servers over protocols other than HTTP." ("under one address" is a fair plain-words reading of "seamlessly show".) |
| 16 | Reverse proxy job: hide old or untrusted services | 1 | PASS | "Gateways are often used to encapsulate legacy or untrusted information services" ("safe front door" is a figure of speech) |
| 17 | Reverse proxy job: cache answers so app servers do less work | 1 | PASS | "to improve server performance through "accelerator" caching" |
| 18 | A company can send all staff web traffic through one checkpoint (forward proxy) | 1 | PASS | "group an organization's HTTP requests through a common intermediary for the sake of security services" |
| 19 | NGINX sends the request to the proxied server, fetches the response, sends it back | 5 | PASS | "When NGINX proxies a request, it: Sends the request to a specified proxy server Fetches the response Sends the response back to the client." |
| 20 | `proxy_pass` inside `location` names the server that gets the request | 5 | PASS | "To pass a request to an HTTP proxied server, the proxy_pass directive is specified inside a location." Example: `location /some/path/ { proxy_pass http://www.example.com/link/; }` |
| 21 | By default NGINX changes two headers, `Host` and `Connection` | 5 | PASS | "By default, NGINX modifies two header fields in proxied requests, “Host” and “Connection”" |
| 22 | `proxy_set_header` changes this | 5 | PASS | "To change these settings, as well as modify other header fields, use the proxy_set_header directive." |
| 23 | NGINX buffers the response and sends it only after it has all of it | 5 | PASS | "By default NGINX buffers responses from proxied servers. A response is stored in the internal buffers and is not sent to the client until the whole response is received." |
| 24 | The server behind the proxy sees only the address of the last proxy | 4 | PASS | "If a client connection passes through any forward or reverse proxies, the server only sees the final proxy's IP address" |
| 25 | The proxy adds the client address in a header to fix this | 4 | PASS | "To provide a more useful client IP address to the server, the X-Forwarded-For request header is used." |
| 26 | `X-Forwarded-For` is a de-facto standard, not a formal one | 4 | PASS | "is a de-facto standard header for identifying the originating IP address of a client"; "Not part of any current specification." |
| 27 | The standard version is `Forwarded` with parts `by`, `for`, `host`, `proto` | 3 | PASS | 3: "Forwarded: by=<identifier>;for=<identifier>;host=<host>;proto=<http\|https>". The word "standardized" is in source 4: "A standardized version of this header is the HTTP Forwarded header". Source 3 lists it under Specifications as "Forwarded HTTP Extension". |
| 28 | `Forwarded` keeps the original `Host` header and the protocol the client used | 3 | PASS | "host ... The Host request header field as received by the proxy." "proto ... Indicates which protocol was used to make the request (typically "http" or "https")." |
| 29 | In `X-Forwarded-For` the leftmost address is the client, the rightmost the most recent proxy (if all behave) | 4 | PASS | "the rightmost IP address is the IP address of the most recent proxy and the leftmost IP address is the address of the originating client (assuming well-behaved client and proxies)" |
| 30 | `Via` shows which proxies a message passed | 1 | PASS | "The "Via" header field indicates the presence of intermediate protocols and recipients between the user agent and the server" |
| 31 | `Via` helps avoid request loops | 1 | PASS | "Via can be used for tracking message forwards, avoiding request loops" |
| 32 | 504 Gateway Timeout: proxy got no timely answer from the server behind it | 1 | PASS | "The 504 (Gateway Timeout) status code indicates that the server, while acting as a gateway or proxy, did not receive a timely response from an upstream server" |
| 33 | 502 Bad Gateway: proxy got an invalid response | 1 | PASS | "The 502 (Bad Gateway) status code indicates that the server, while acting as a gateway or proxy, received an invalid response from an inbound server" |
| 34 | Do not trust `X-Forwarded-For` for security; only addresses added by a trusted proxy are safe for rate limiting or IP access control | 4 | PASS | "Any security-related use of X-Forwarded-For (such as for rate limiting or IP-based access control) must only use IP addresses added by a trusted proxy." |
| 35 | Other parts of the header may be spoofed | 4 | PASS | "any part of the header not added by a trusted proxy may be spoofed or may have an unexpected format or contents." ("Anyone can send this header" is the page's plain reading: a request header that the client can set. It is not a quote of the source. Minor, not a FAIL.) |
| 36 | If the server can be reached directly, no part of the list is trustworthy, even behind a trusted reverse proxy | 4 | PASS | "If the server can be directly connected to from the internet — even if it is also behind a trusted reverse proxy — no part of the X-Forwarded-For IP list can be considered trustworthy or safe for security-related uses." |
| 37 | Using only one of several `X-Forwarded-For` headers is not enough | 4 | PASS | "It is insufficient to use only one of multiple X-Forwarded-For headers." |
| 38 | The header exposes the client IP by design, so it is privacy-sensitive | 4 | PASS | "This header exposes privacy-sensitive information by design, such as the IP address of the client." |
| 39 | Key words: Upstream = the server behind the proxy | none (table) | PASS | RFC 9110 3.7 gives "upstream" as a direction ("all messages flow from upstream to downstream"). Section 15.6.5 uses "upstream server" for the server a gateway needs to reach. The gloss matches that use. It has no cite, but the Key words table has no cites on other rows either. |
| 40 | Key words: Reverse proxy also called a gateway; Gateway is the HTTP standard name; Tunnel; Forwarded; Via; 502/504 | none (table) | PASS | Same facts as claims 10, 12, 27, 30, 32, 33. |

Claims checked: 40.

## Tutorial's own text

| Text | Marked? | Result |
|---|---|---|
| The tip callout "What a tester can check" (6 test ideas) | Yes: "These test ideas are the tutorial's own advice. They are not from a source." Title is "Tutorial advice". | PASS. It has no cites. It gives no source fact as if a source said it. "A 502 or 504 usually means the proxy is fine" is advice. |
| The hotel desk analogy (intro) | Not marked, but it is an analogy and states no fact about a standard. | Note only. |
| The text diagrams and the `X-Forwarded-For: 203.0.113.195, 198.51.100.17` example | Illustrative. The addresses are from the documentation ranges and are not copied from a source. | Note only. |
| The real-life example (two app servers, hang, broken answer) | It is a story. Its 502 and 504 meanings are cited (claims 32, 33). | PASS |

## Config snippets

The page has no NGINX config block. It only names `proxy_pass`, `location`, and `proxy_set_header`. Names and contexts match the NGINX page (claims 20 to 22).

## Other checks

| Check | Result |
|---|---|
| Every `page.sources` entry is https | PASS (5 of 5) |
| Every source is cited at least once | PASS (1 to 5 all cited) |
| Every `<Cite n>` has a source | PASS (n used: 1, 2, 3, 4, 5) |
| No run of 8 or more words copied from a source | PASS. A script compared the page text (after `<PageMeta />`, with markup removed) with the 5 fetched sources. It found 0 shared runs of 8 words. |
| Section order | PASS. Order is In plain words, When you need it, How it works, A real-life example, Common mistakes, What a tester can check, Key words. The 6 required sections are in the required order and Key words is last. One extra section, "How it works", sits between "When you need it" and "A real-life example". |
| No source is a blog, forum, AI summary, or systemdesignbangla.com | PASS. Sources are IETF, MDN, and NGINX documentation. |

Open FAILs: 0
