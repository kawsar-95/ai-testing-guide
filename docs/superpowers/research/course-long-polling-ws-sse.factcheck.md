# Fact-check: course/long-polling-ws-sse

Page: `content/course/long-polling-ws-sse.mdx`. Title given by the controller: "Long Polling, WebSockets, and SSE". Reviewer did not write the page.

Sources opened for this check (fetched fresh, text saved in `/tmp/claude-1000/fc3-long-polling-ws-sse/`): S1 RFC 6202, S2 RFC 6455, S3 WHATWG HTML section 9.2, S4 MDN WebSocket API, S5 MDN Using server-sent events.

## Claims

| # | claim (short) | cite | verdict | quote or reason |
|---|---|---|---|---|
| 1 | In plain HTTP the server cannot open a connection to the client or send an unrequested response | 1 | PASS | "a server cannot initiate a connection with a client nor send an unrequested HTTP response to a client" (1) |
| 2 | Polling wastes bandwidth when nothing is new; data waits until the next poll | 1 | PASS | "continual polling can consume significant bandwidth by forcing a request/response round trip when no data is available ... data is queued until the server receives the next poll request" |
| 3 | Long polling: server holds the request, answers on an event, status change or timeout | 1 | PASS | "responding to a request only when a particular event, status, or timeout has occurred" (2.1) |
| 4 | Client usually sends a new request at once or after a short pause | 1 | PASS | "The client typically sends a new long poll request, either immediately upon receiving a response or after a pause" (2.1) |
| 5 | Client-to-server data in long polling uses ordinary HTTP requests | 2 | PASS | "sending upstream notifications as distinct HTTP calls [RFC6202]" (RFC 6455, 1.1) |
| 6 | Each long poll request and response is a complete HTTP message with its own headers | 1 | PASS | "every long poll request and long poll response is a complete HTTP message and thus contains a full set of HTTP headers" |
| 7 | WebSocket starts as an HTTP request with `Upgrade: websocket` | 2 | PASS | "the WebSocket client's handshake is an HTTP Upgrade request: ... Upgrade: websocket" (1.3) |
| 8 | If the server agrees it answers `101 Switching Protocols` | 2 | PASS | "The first line is an HTTP Status-Line, with the status code 101"; "Any status code other than 101 indicates that the WebSocket handshake has not completed" (1.3) |
| 9 | After that both sides can send at any time on the same connection | 2 | PASS | "a two-way communication channel where each side can, independently from the other, send data at will"; "a single TCP connection for traffic in both directions" (1.1, 1.2) |
| 10 | A message is made of one or more frames | 2 | PASS | "On the wire, a message is composed of one or more frames" (1.2) |
| 11 | A frame can hold text (UTF-8), binary data, or a control signal such as Close, Ping, Pong | 2 | PASS | "textual data (which is interpreted as UTF-8 text), binary data ... and control frames"; "include 0x8 (Close), 0x9 (Ping), and 0xA (Pong)" (1.2, 5.5) |
| 12 | A Ping can serve as a keepalive | 2 | PASS | "A Ping frame may serve either as a keepalive or as a means to verify that the remote endpoint is still responsive" (5.5.2) |
| 13 | Implementations must support TLS (`wss`) and should use it | 2 | PASS | "WebSocket implementations MUST support TLS and SHOULD employ it when communicating with their peers" (10.6) |
| 14 | `WebSocket` interface has no backpressure; memory may fill, CPU may reach 100%, or both | 4 | PASS | "it doesn't support backpressure. As a result, when messages arrive faster than the application can process them it will either fill up the device's memory ... become unresponsive due to 100% CPU usage, or both" |
| 15 | After abnormal closure a client should wait before reconnecting | 2 | PASS | "clients SHOULD use some form of backoff when trying to reconnect after abnormal closures" (7.2.3) |
| 16 | First attempt after a random delay; 0 to 5 seconds is a reasonable start | 2 | PASS | "The first reconnect attempt SHOULD be delayed by a random amount of time ... a value chosen randomly between 0 and 5 seconds is a reasonable initial delay" |
| 17 | Later attempts wait longer, for example truncated binary exponential backoff | 2 | PASS | "subsequent reconnect attempts SHOULD be delayed by increasingly longer amounts of time, using a method such as truncated binary exponential backoff" |
| 18 | Many clients reconnecting at once may act like a denial-of-service attack | 2 | PASS | "the server may experience what amounts to a denial-of-service attack by a large number of clients trying to reconnect" (the RFC adds "immediately and persistently" after a nontransient problem; the page's "at once" is close enough) |
| 19 | Sources describe no built-in way to get messages sent while offline (marked tutorial's own note) | none | PASS | Marked "This is the tutorial's own note". No source claim is made. |
| 20 | SSE: `EventSource` is created with a URL | 5 | PASS | "create a new EventSource object with the URL of a script that generates the events" |
| 21 | Server answers with MIME type `text/event-stream` | 5 | PASS | "needs to respond using the MIME type text/event-stream" |
| 22 | Stream is UTF-8 text | 3 | PASS | "Event streams are always decoded as UTF-8. There is no way to specify another character encoding." |
| 23 | Each message is lines such as `data: hello`; a blank line ends the block | 5 | PASS | "Each notification is sent as a block of text terminated by a pair of newlines" |
| 24 | Fields are `event`, `data`, `id`, `retry` | 3 | PASS | Field-name steps: "event", "data", "id", "retry"; "Otherwise The field is ignored." (9.2.5) |
| 25 | SSE is one-way; the client cannot send events to the server | 5 | PASS | "This is a one-way connection, so you can't send events from a client to a server." |
| 26 | By default the browser restarts the connection when it closes | 5 | PASS | "By default, if the connection between the client and server closes, the connection is restarted." |
| 27 | Browser waits for the reconnection time before retrying | 3 | PASS | "Wait a delay equal to the reconnection time of the event source." (9.2.3) |
| 28 | First reconnection time depends on the browser; probably a few seconds | 3 | PASS | "initially be an implementation-defined value, probably in the region of a few seconds" |
| 29 | `retry` sets the reconnection time in milliseconds | 5 | PASS | "This must be an integer, specifying the reconnection time in milliseconds." |
| 30 | `id` sets the last event ID; on reconnection the browser sends it in `Last-Event-ID` | 3 | PASS | "set the last event ID buffer to the field value"; "Set (`Last-Event-ID`, lastEventIDValue) in request's header list" (only when the ID is not empty; the page omits this detail, no hedge is lost that matters) |
| 31 | What the server then sends is up to the server (marked tutorial's own note) | none | PASS | Marked "This is the tutorial's own note". |
| 32 | Server can stop reconnection with `204 No Content` | 3 | PASS | "a client can be told to stop reconnecting using the HTTP 204 No Content response code" |
| 33 | Client can stop reconnection with `close()` | 5 | PASS | "The connection is terminated with the .close() method." |
| 34 | If status is not 200 or content type is not `text/event-stream`, the connection fails and there is no reconnect | 3 | PASS | "if res's status is not 200, or if res's Content-Type is not text/event-stream, then fail the connection"; "Once the user agent has failed the connection, it does not attempt to reconnect." |
| 35 | RFC 6202: HTTP not designed for two-way communication; neither encourages nor discourages; lists issues | 1 | PASS | "the HTTP protocol was not designed for bidirectional communication. This document neither encourages nor discourages the use of these mechanisms" |
| 36 | RFC dates from 2011 | 1 | PASS | RFC header: "April 2011". The advice "check newer browser details" is the tutorial's own. |
| 37 | Long polling header overhead: for small messages headers can be a large part of the data | 1 | PASS | "For small, infrequent messages, the headers can represent a large percentage of the data transmitted" |
| 38 | Latency: average close to one network transit; worst case over three | 1 | PASS | "the average latency of long polling is close to one network transit, the maximal latency is over three network transits" |
| 39 | Held resources: each client holds a TCP connection and an HTTP request; some gateways, proxies, servers limited | 1 | PASS | "for each client both a TCP/IP connection and an HTTP request are held open"; "scaling the total number of requests outstanding can be limited on some gateways, proxies, and servers" |
| 40 | Timeouts: high timeout cuts the work; too high can bring 408 or 504; 30 s generally safer | 1 | PASS | "the long poll request timeout ought to be set to a high value"; "the client might receive a 408 Request Timeout ... or a 504 Gateway Timeout"; "generally 30 seconds is a safer value" |
| 41 | Caching: a long poll should suppress caching with `Cache-Control: no-cache` | 1 | PASS | "caching is always intentionally suppressed in a long poll request or response, i.e., the "Cache-Control" header is set to "no-cache"" |
| 42 | SSE sends its events with HTTP streaming | 1 | PASS | "pushed using an HTTP streaming mechanism" (4.3) |
| 43 | Streaming: a proxy may buffer the whole response; streaming does not work through such a proxy | 1 | PASS | "it is legal for the intermediary to buffer the entire response ... HTTP streaming will not work with such intermediaries" |
| 44 | Framing: HTTP chunks cannot mark the end of a message because a proxy might merge them | 1 | PASS | "it is not possible to use the HTTP chunks as application message delimiters, since intermediate proxies might "re-chunk" the message stream (for example, by combining different chunks into a longer one)" |
| 45 | Security: many open connections can make DoS easier | 1 | PASS | "could more easily lead to denial-of-service (DoS) attacks" |
| 46 | Trade-offs: Direction cells (LP, WS, SSE) | 1, 2, 2, 5 | PASS | Same sources as rows 5, 9, 25 |
| 47 | Trade-offs: How it starts cells | 1, 2, 5 | PASS | Rows 3, 7, 8, 21 |
| 48 | Trade-offs: Message format cells | 1, 2, 3 | PASS | Rows 6, 11, 22 |
| 49 | Trade-offs: Reconnection cells (client sends next poll; WS client's job with backoff; SSE browser reconnects, `retry` and `Last-Event-ID`) | 1, 2, 3 | PASS | Rows 4, 15-17, 26-30 |
| 50 | Trade-offs: Long polling connection limit: browser limit applies | 1 | PASS | "recent browsers have increased this limit to 6 or 8 connections" (5.1) |
| 51 | Trade-offs: WebSocket connection limit: "The sources on this page give no figure" | none | PASS (after re-check) | The cell has no cite and no "tutorial's own" mark. The table note says "All other cells follow the sources", but a statement about what the sources do not say cannot follow a source. Mark it as the tutorial's own note (as in row 19) or remove the cell text. |
| 52 | Trade-offs: SSE connection limit: about 6 per browser and domain without HTTP/2; with HTTP/2 negotiated, default 100 | 5 | PASS | "the limit is per browser and is set to a very low number (6)"; "This limit is per browser + domain"; "the maximum number of simultaneous HTTP streams is negotiated between the server and the client (defaults to 100)" |
| 53 | Trade-offs: Proxies, long polling: most work well | 1 | PASS | "Most proxies work well with HTTP long polling" (5.3) |
| 54 | Trade-offs: Proxies, WebSocket: handshake made to work with HTTP proxies | 2 | PASS | "designed to work over HTTP ports 80 and 443 as well as to support HTTP proxies and intermediaries" |
| 55 | Trade-offs: Proxies, SSE: old proxies drop quiet connections; comment line about every 15 s helps | 3 | PASS | "Legacy proxy servers are known to, in certain cases, drop HTTP connections after a short timeout ... include a comment line ... every 15 seconds or so" (9.2.7) |
| 56 | Trade-offs: "Fits best (tutorial's view)" row | none | PASS | Row label marks it as the tutorial's own, and the table note says so. |
| 57 | Common mistakes: WebSocket can close abnormally, so plan reconnect | 2 | PASS | "Abnormal closures may be caused by any number of reasons" (7.2.3) |
| 58 | Common mistakes: SSE is one-way | 5 | PASS | Row 25 |
| 59 | Common mistakes: poll timeout too high gives 408 or 504 | 1 | PASS | Row 40 |
| 60 | Key words: long polling, HTTP streaming definitions | 1 | PASS | "The server keeps a request open indefinitely ... never terminates the request" (1); "sends several pieces of information in the same response" (3.1) |
| 61 | Key words: WebSocket, Frame, Ping and Pong | 2 | PASS | Rows 7, 10-12 |
| 62 | Key words: SSE read through `EventSource`; `retry`; `Last-Event-ID` | 5, 3 | PASS | Rows 20, 25, 29, 30; "The `Last-Event-ID` HTTP request header reports an EventSource object's last event ID string to the server when the user agent is to reestablish the connection" (9.2.4) |
| 63 | Key words: Backpressure is a way to slow the sender when the receiver is too slow; `WebSocket` has none | 4 | PASS | MDN: "WebSocketStream ... take advantage of stream backpressure automatically, regulating the speed of reading or writing"; "doesn't support backpressure" |
| 64 | "When you need it" and "A real-life example" are the tutorial's own | none | PASS | Both are marked "tutorial's own". No source facts are stated as source claims. |
| 65 | Tip callout is the tutorial's own advice and has no `<Cite>` | none | PASS | Callout says "These test ideas are the tutorial's own advice, not a claim of the sources." No Cite inside. |

65 claims checked.

## Structure check

| Check | Result |
|---|---|
| Every `page.sources` entry is https and cited | PASS: sources 1-5, all https, each cited at least once |
| Every `<Cite n>` has a source | PASS: n is 1 to 5 only |
| No run of 8 or more words copied from a source | PASS: a script compared 8-word runs of the page text with the text of all 5 sources. 0 matches in each. |
| Required sections in order, Key words last | PASS: In plain words, (How it works), When you need it, (Issues that RFC 6202 lists), (Trade-offs), A real-life example, Common mistakes, What a tester can check, Key words. The extra sections do not break the order. |
| Tip callout has no `<Cite>`; no `<Voices>` | PASS |
| `#` title equals "Long Polling, WebSockets, and SSE" | PASS |
| No blog, forum, Wikipedia, AI summary, or systemdesignbangla.com as a source | PASS: IETF, WHATWG, MDN |
| Prose 700-1100 words | PASS: about 1059 words (body prose without headings, tables, code, and Cite tags). About 1093 with headings. The page is near the upper limit. |
| Trade-offs cells without a cite are marked as the tutorial's own | PASS after re-check (one cell, row 51, was unmarked and is now marked) |

## Result

Original run: 1 FAIL, row 51 (the WebSocket "Connection limit" cell had no cite and no tutorial's-own mark). See Re-check.

## Re-check

Row 51 re-checked after the writer's change. Line 80 of the page now reads: "(tutorial's view) The sources on this page give no figure". The cell is marked as the tutorial's own, and the table note says cells with "(tutorial's view)" are the tutorial's own judgment. It states no fact as a source claim. The copy check on the changed line finds no 8-word run from a source. No other line changed in the Trade-offs table. Verdict: PASS.

Open FAILs: 0
