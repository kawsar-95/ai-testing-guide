# Course page: Long Polling, WebSockets, and SSE (research notes)

Writer notes for `content/course/long-polling-ws-sse.mdx`. Fetched 2026-10-22 with curl into `/tmp/claude-1000/course3-src-long-polling-ws-sse/`. Fetched text is treated as data. HTML pages were reduced to text with a tag-stripping script.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | RFC 6202, "Known Issues and Best Practices for the Use of Long Polling and Streaming in Bidirectional HTTP", IETF, April 2011 (Informational) | https://www.rfc-editor.org/rfc/rfc6202 | 2026-10-22 |
| S2 | RFC 6455, "The WebSocket Protocol", IETF, December 2011 (Standards Track) | https://www.rfc-editor.org/rfc/rfc6455 | 2026-10-22 |
| S3 | HTML Living Standard, section 9.2 "Server-sent events", WHATWG | https://html.spec.whatwg.org/multipage/server-sent-events.html | 2026-10-22 |
| S4 | "WebSocket API (WebSockets)", MDN Web Docs | https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API | 2026-10-22 |
| S5 | "Using server-sent events", MDN Web Docs | https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events | 2026-10-22 |

Page cite numbers: n=1 is S1, n=2 is S2, n=3 is S3, n=4 is S4, n=5 is S5.

Notes: RFC 6202 cites the older W3C SSE draft and predates HTTP/2; the page says it dates from 2011. MDN S5 cites Stack Overflow for the per-domain detail of the connection limit; the page uses only the MDN text. RFC 6455 gives no resume or replay mechanism for missed messages (absence), so the page says only that the sources describe none and that this is the tutorial's note.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | In standard HTTP a server cannot open a connection to the client or send an unrequested response. | S1 1 | "a server cannot initiate a connection with a client nor send an unrequested HTTP response to a client" |
| C2 | Repeated polling can use much bandwidth when no data is available, and data waits until the next poll. | S1 1 | "continual polling can consume significant bandwidth by forcing a request/response round trip when no data is available" / "data is queued until the server receives the next poll request from the client" |
| C3 | Long polling: the server answers a request only when an event, status, or timeout occurs. | S1 2.1 | "responding to a request only when a particular event, status, or timeout has occurred" |
| C4 | After a long poll response the client typically sends a new request at once, or after a pause. | S1 2.1 | "The client typically sends a new long poll request, either immediately upon receiving a response or after a pause" |
| C5 | Each long poll request and response is a complete HTTP message with a full set of headers. | S1 2.2 | "every long poll request and long poll response is a complete HTTP message and thus contains a full set of HTTP headers" |
| C6 | For long polling and a client that sends data, the client uses distinct HTTP calls (upstream notifications as distinct HTTP calls). | S2 1.1 | "polling the server for updates while sending upstream notifications as distinct HTTP calls [RFC6202]" |
| C7 | A WebSocket handshake is an HTTP Upgrade request (`Upgrade: websocket`). | S2 1.3 | "the WebSocket client's handshake is an HTTP Upgrade request" |
| C8 | The server answers with status 101 Switching Protocols. | S2 1.2, 1.3 | "HTTP/1.1 101 Switching Protocols" / "Any status code other than 101 indicates that the WebSocket handshake has not completed" |
| C9 | After the handshake, each side can send data at will, independently, on the same two-way channel. | S2 1.2 | "This is a two-way communication channel where each side can, independently from the other, send data at will." |
| C10 | A message is composed of one or more frames. Frame types: text (UTF-8), binary, and control frames (for example to close the connection). | S2 1.2 | "a message is composed of one or more frames" / "types for textual data (which is interpreted as UTF-8 [RFC3629] text), binary data ... and control frames" |
| C11 | Close, Ping, and Pong are control frames; a Ping may serve as a keepalive. | S2 5.5, 5.5.2 | "A Ping frame may serve either as a keepalive or as a means to verify that the remote endpoint is still responsive." |
| C12 | WebSocket implementations MUST support TLS and SHOULD employ it; confidentiality and integrity come from `wss` URIs. | S2 10.6 | "Connection confidentiality and integrity is provided by running the WebSocket Protocol over TLS (wss URIs). WebSocket implementations MUST support TLS and SHOULD employ it" |
| C13 | MDN: the WebSocket interface has no backpressure; if messages arrive faster than the app can process them it will fill memory, become unresponsive at 100% CPU, or both. | S4 | "it doesn't support backpressure. As a result, when messages arrive faster than the application can process them it will either fill up the device's memory by buffering those messages, become unresponsive due to 100% CPU usage, or both." |
| C14 | After abnormal closures, clients SHOULD use backoff when reconnecting. The first attempt is delayed by a random time (0 to 5 seconds is a reasonable initial delay). Later attempts wait longer, for example truncated binary exponential backoff. | S2 7.2.3 | "clients SHOULD use some form of backoff when trying to reconnect after abnormal closures" / "a value chosen randomly between 0 and 5 seconds is a reasonable initial delay" / "using a method such as truncated binary exponential backoff" |
| C15 | If every client reconnects at once and persistently after a nontransient problem, the server may experience what amounts to a denial-of-service attack. | S2 7.2.3 | "the server may experience what amounts to a denial-of-service attack by a large number of clients trying to reconnect" |
| C16 | SSE: the page creates an EventSource with a URL; the server answers with MIME type `text/event-stream`. | S5 "Receiving events", "Sending events" | "create a new EventSource object with the URL of a script that generates the events" / "needs to respond using the MIME type text/event-stream" |
| C17 | The event stream is always decoded as UTF-8. | S3 9.2.1 | "Event streams are always decoded as UTF-8." |
| C18 | Each notification is a block of text lines ended by a pair of newlines (a blank line). | S5 | "Each notification is sent as a block of text terminated by a pair of newlines." |
| C19 | Fields of an event stream: event, data, id, retry. | S3 9.2.5 | "If the field name is "event" ... "data" ... "id" ... "retry"" |
| C20 | SSE is a one-way connection; the client cannot send events to the server. | S5 intro | "This is a one-way connection, so you can't send events from a client to a server." |
| C21 | By default, if the connection closes, the browser restarts it. `close()` ends it. | S5 "Closing event streams" | "By default, if the connection between the client and server closes, the connection is restarted. The connection is terminated with the .close() method." |
| C22 | The browser waits the reconnection time before it reconnects; the initial value is implementation-defined, probably a few seconds. | S3 9.2.2, 9.2.3 | "This must initially be an implementation-defined value, probably in the region of a few seconds." / "Wait a delay equal to the reconnection time of the event source." |
| C23 | The `retry` field sets the reconnection time, as an integer number of milliseconds. | S5 fields; S3 9.2.5 | "The reconnection time ... This must be an integer, specifying the reconnection time in milliseconds." |
| C24 | The `id` field sets the last event ID; on reconnection the browser sends it in the `Last-Event-ID` request header. | S3 9.2.3, 9.2.4; S5 | "Set (`Last-Event-ID`, lastEventIDValue) in request's header list." / "The `Last-Event-ID` HTTP request header reports an EventSource object's last event ID string to the server when the user agent is to reestablish the connection." |
| C25 | A client can be told to stop reconnecting with HTTP 204 No Content. | S3 9.2.1 | "a client can be told to stop reconnecting using the HTTP 204 No Content response code" |
| C26 | If the response status is not 200 or the Content-Type is not `text/event-stream`, the connection fails; after failure the user agent does not reconnect. | S3 9.2.2, 9.2.3 | "if res's status is not 200, or if res's `Content-Type` is not `text/event-stream`, then fail the connection" / "Once the user agent has failed the connection, it does not attempt to reconnect." |
| C27 | Legacy proxies may drop HTTP connections after a short timeout; a comment line (starting with a colon) about every 15 seconds protects against this. | S3 9.2.7 | "Legacy proxy servers are known to, in certain cases, drop HTTP connections after a short timeout." / "authors can include a comment line ... every 15 seconds or so" |
| C28 | RFC 6202 does not encourage or discourage the mechanisms; it identifies technical issues and suggests best practices. HTTP was not designed for bidirectional communication. | S1 1 | "the HTTP protocol was not designed for bidirectional communication" / "This document neither encourages nor discourages the use of these mechanisms" |
| C29 | Long polling latency: the average is close to one network transit; the maximum is over three transits (response, next request, response). | S1 2.2 | "the average latency of long polling is close to one network transit, the maximal latency is over three network transits" |
| C30 | Long polling resources: each client holds a TCP connection and an HTTP request; the HTTP request resources can be significant, and the number of outstanding requests can be limited on some gateways, proxies, and servers. | S1 2.2 | "for each client both a TCP/IP connection and an HTTP request are held open" / "scaling the total number of requests outstanding can be limited on some gateways, proxies, and servers" |
| C31 | Timeouts: a value that is too high can bring 408 Request Timeout from the server or 504 Gateway Timeout from a proxy; 30 seconds is generally a safer value. | S1 5.5 | "(e.g., the client might receive a 408 Request Timeout answer from the server or a 504 Gateway Timeout answer from a proxy)" / "generally 30 seconds is a safer value" |
| C32 | Caching is intentionally suppressed in a long poll request or response, `Cache-Control: no-cache`. | S1 5.6 | "caching is always intentionally suppressed in a long poll request or response, i.e., the "Cache-Control" header is set to "no-cache"" |
| C33 | SSE data is pushed with an HTTP streaming mechanism. | S1 4.3 | "The data is encoded as "text/event-stream" content and pushed using an HTTP streaming mechanism" |
| C34 | Streaming: an intermediary may buffer the entire response before it forwards any data; streaming will not work through such intermediaries. | S1 3.2 | "it is legal for the intermediary to buffer the entire response before sending any data to the client ... HTTP streaming will not work with such intermediaries" |
| C35 | Streaming framing: HTTP chunks cannot be used as message delimiters because proxies might re-chunk. | S1 3.2 | "it is not possible to use the HTTP chunks as application message delimiters, since intermediate proxies might "re-chunk" the message stream" |
| C36 | Security: the many open connections of long polling and streaming could more easily lead to denial-of-service attacks. | S1 6 | "the number of open connections that needs to be maintained by a server in HTTP long polling and HTTP streaming could more easily lead to denial-of-service (DoS) attacks" |
| C37 | Most proxies work well with long polling because a complete response is sent on an event or a timeout. | S1 5.3 | "Most proxies work well with HTTP long polling because a complete HTTP response will be sent either on an event or timeout." |
| C38 | The WebSocket handshake is designed to work with HTTP proxies and intermediaries. | S2 1.1 | "it is designed to work over HTTP ports 80 and 443 as well as to support HTTP proxies and intermediaries" |
| C39 | SSE connection limit: when not over HTTP/2, the limit is very low (6) per browser and domain. Over HTTP/2 the maximum number of simultaneous streams is negotiated, default 100. | S5 warning | "When not used over HTTP/2, SSE suffers from a limitation to the maximum number of open connections ... (6)." / "(defaults to 100)" |
| C40 | The browser's connection limits matter for long polling (older HTTP text: 2; recent browsers 6 or 8). | S1 5.1 | "recent browsers have increased this limit to 6 or 8 connections" |
| C41 | Long polling starts as an HTTP request, so the table says "An HTTP request". | S1 2.1 | "The client makes an initial request and then waits for a response." |
| C42 | WebSocket frames carry text or binary (table). | S2 1.2 | as C10 |
| C43 | Key words: HTTP streaming keeps a request open and never ends the response, sending data in pieces. | S1 3.1 | "The HTTP streaming mechanism keeps a request open indefinitely." |
| C44 | Key words: Frame is the unit of a message. | S2 1.2 | as C10 |
| C45 | Key words: Backpressure ("regulating the speed of reading or writing"): MDN says streams handle it automatically; the WebSocket interface has none. | S4 | "socket connections can take advantage of stream backpressure automatically, regulating the speed of reading or writing to avoid bottlenecks" |

Tutorial's own text (no cite, marked on the page): the lede, "When you need it", the real-life example, the "Fits best" row of the table, the note that the app must design a way to get messages missed while offline, the note that what the server sends after `Last-Event-ID` is up to the server, the tester advice, and the reading that the sources describe no figure for WebSocket connections per browser.

## Not on the page

The page names no product (Socket.IO, SignalR, etc.). It gives no benchmark number. It does not claim that WebSocket has no automatic reconnect in browsers, because the fetched sources do not say so.
