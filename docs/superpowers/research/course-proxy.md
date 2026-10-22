# Research notes: course / proxy (Forward and Reverse Proxies)

Fetched with curl on 2026-10-22 into `/tmp/claude-1000/course-src-proxy/` (not committed). Text is treated as data.

## Sources

| Id | Source | URL |
|---|---|---|
| S1 | RFC 9110, HTTP Semantics (IETF), sections 3.7, 7.6.3, 15.6.3, 15.6.5 | https://www.rfc-editor.org/rfc/rfc9110.html |
| S2 | Proxy server, MDN Glossary | https://developer.mozilla.org/en-US/docs/Glossary/Proxy_server |
| S3 | Forwarded header, MDN | https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Forwarded |
| S4 | X-Forwarded-For header, MDN | https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For |
| S5 | NGINX Reverse Proxy, NGINX Documentation | https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/ |

All accessed 2026-10-22.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | A proxy is chosen by the client, usually through local configuration, to receive requests and satisfy them. | S1 | "A "proxy" is a message-forwarding agent that is chosen by the client, usually via local configuration rules, to receive requests for some type(s) of absolute URI and attempt to satisfy those requests" |
| C2 | Organizations use proxies for security services, annotation services, or shared caching. | S1 | "Proxies are often used to group an organization's HTTP requests through a common intermediary for the sake of security services, annotation services, or shared caching." |
| C3 | A gateway (also called a reverse proxy) acts as an origin server for the outbound connection and forwards requests inbound to other servers. | S1 | "A "gateway" (a.k.a. "reverse proxy") is an intermediary that acts as an origin server for the outbound connection but translates received requests and forwards them inbound to another server or servers." |
| C4 | Gateways are used to hide legacy or untrusted services, for accelerator caching, and for load balancing across machines. | S1 | "Gateways are often used to encapsulate legacy or untrusted information services, to improve server performance through "accelerator" caching, and to enable partitioning or load balancing of HTTP services across multiple machines." |
| C5 | A tunnel is a blind relay that does not change the messages; for example it carries TLS through a firewall proxy. | S1 | "A "tunnel" acts as a blind relay between two connections without changing the messages." / "such as when Transport Layer Security (TLS, [TLS13]) is used to establish confidential communication through a shared firewall proxy" |
| C6 | A proxy intercepts requests and serves back responses; it may forward them or not (a cache), and may change them (for example headers). | S2 | "A proxy intercepts requests and serves back responses; it may forward the requests, or not (for example in the case of a cache), and it may modify it (for example changing its headers, at the boundary between two networks)." |
| C7 | A forward proxy handles requests from and to anywhere on the Internet; a reverse proxy takes requests from the Internet and forwards them to servers in an internal network. | S2 | "A forward proxy that handles requests from and to anywhere on the Internet. A reverse proxy taking requests from the Internet and forwarding them to servers in an internal network." |
| C8 | A proxy can be on the user's computer or anywhere between it and the destination server. | S2 | "A proxy can be on the user's local computer, or anywhere between the user's computer and a destination server on the Internet." |
| C9 | Status 502 means the server, as a gateway or proxy, got an invalid response from an inbound server. | S1 | "The 502 (Bad Gateway) status code indicates that the server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed" |
| C10 | Status 504 means the gateway or proxy got no timely response from an upstream server. | S1 | "The 504 (Gateway Timeout) status code indicates that the server, while acting as a gateway or proxy, did not receive a timely response from an upstream server" |
| C11 | The Via header shows the proxies a message passed; it can help track forwards and avoid request loops. | S1 | "The "Via" header field indicates the presence of intermediate protocols and recipients between the user agent and the server" / "Via can be used for tracking message forwards, avoiding request loops" |
| C12 | When a request passes through proxies, the server sees only the last proxy's IP address. | S4 | "If a client connection passes through any forward or reverse proxies, the server only sees the final proxy's IP address, which is often of little use." |
| C13 | X-Forwarded-For is a de-facto standard header that carries the client's original IP address. | S4 | "a de-facto standard header for identifying the originating IP address of a client connecting to a web server through a proxy server" |
| C14 | In X-Forwarded-For, the leftmost address is the client and the rightmost is the most recent proxy (if all are well behaved). | S4 | "the rightmost IP address is the IP address of the most recent proxy and the leftmost IP address is the address of the originating client (assuming well-behaved client and proxies)" |
| C15 | Several X-Forwarded-For headers must be read as one list. | S4 | "There may be multiple X-Forwarded-For headers present in a request. The IP addresses in these headers must be treated as a single list" |
| C16 | Only addresses added by a trusted proxy may be used for security (rate limiting, IP access control); other parts may be spoofed. | S4 | "Any security-related use of X-Forwarded-For (such as for rate limiting or IP-based access control) must only use IP addresses added by a trusted proxy." / "any part of the header not added by a trusted proxy may be spoofed" |
| C17 | If the server can be reached directly from the internet, no part of the list is trustworthy for security. | S4 | "If the server can be directly connected to from the internet — even if it is also behind a trusted reverse proxy — no part of the X-Forwarded-For IP list can be considered trustworthy or safe for security-related uses." |
| C18 | The header exposes the client IP by design, so it is privacy-sensitive. | S4 | "This header exposes privacy-sensitive information by design, such as the IP address of the client." |
| C19 | Forwarded is the standardized version; its directives are by, for, host, proto. | S3 / S4 | S4: "A standardized version of this header is the HTTP Forwarded header, although it's much less frequently used." S3: "Forwarded: by=<identifier>;for=<identifier>;host=<host>;proto=<http|https>" |
| C20 | `host` in Forwarded is the Host header as the proxy received it; `proto` is the protocol the client used (http or https). | S3 | "host ... The Host request header field as received by the proxy." / "proto ... Indicates which protocol was used to make the request (typically "http" or "https")." |
| C21 | NGINX proxying: sends the request to the proxied server, fetches the response, sends it back to the client. | S5 | "When NGINX proxies a request, it: Sends the request to a specified proxy server Fetches the response Sends the response back to the client." |
| C22 | Proxying is typically used to spread load, show content from different sites, or pass requests to application servers. | S5 | "Proxying is typically used to distribute the load among several servers, seamlessly show content from different websites, or pass requests for processing to application servers over protocols other than HTTP." |
| C23 | NGINX uses the `proxy_pass` directive inside a `location`. | S5 | "To pass a request to an HTTP proxied server, the proxy_pass directive is specified inside a location." |
| C24 | By default NGINX changes the Host and Connection headers of proxied requests; `proxy_set_header` changes this. | S5 | "By default, NGINX modifies two header fields in proxied requests, "Host" and "Connection"" / "To change these settings ... use the proxy_set_header directive." |
| C25 | By default NGINX buffers the response from the proxied server until it has all of it. | S5 | "By default NGINX buffers responses from proxied servers. A response is stored in the internal buffers and is not sent to the client until the whole response is received." |
