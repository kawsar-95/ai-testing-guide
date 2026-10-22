# Fact check: content/course/tcp-udp.mdx

Checker: an agent that did not write the page. Date: 2026-10-22.
Sources read from the full text of the RFCs (`rfc9293.txt`, `rfc768.txt`, fetched from rfc-editor.org). The quotes below are from that text, not from the research notes. Both `.html` source URLs of the page return HTTP 200.

S1 = RFC 9293 (cite 1). S2 = RFC 768 (cite 2).

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | TCP gives a reliable, in-order byte stream to applications | 1 | PASS | S1 2.2: "TCP provides a reliable, in-order, byte-stream service to applications." |
| 2 | TCP detects loss with sequence numbers, damage with checksums, repairs by sending again | 1 | PASS | S1 2.2: "TCP reliability consists of detecting packet losses (via sequence numbers) and errors (via per-segment checksums), as well as correction via retransmission." |
| 3 | Each TCP segment travels inside an IP datagram | 1 | PASS | S1 2.2: "with each TCP segment sent as an Internet Protocol (IP) datagram." |
| 4 | UDP is a way to send messages with a minimum of protocol mechanism | 2 | PASS | S2: "send messages to other programs with a minimum of protocol mechanism." |
| 5 | UDP: delivery and duplicate protection are not guaranteed | 2 | PASS | S2: "delivery and duplicate protection are not guaranteed." |
| 6 | The UDP standard says to use TCP for ordered, reliable stream delivery | 2 | PASS | S2: "Applications requiring ordered reliable delivery of streams of data should use the Transmission Control Protocol (TCP)." |
| 7 | TCP source and destination ports are each 16 bits | 1 | PASS | S1 3.1: "Source Port:  16 bits" and "Destination Port:  16 bits". |
| 8 | UDP header has source port, destination port, length, checksum | 2 | PASS | S2 header diagram: "Source Port", "Destination Port", "Length", "Checksum". |
| 9 | IP moves packets between computers; TCP and UDP sit on top of IP and get data to the right program (ports) | none | PASS (note) | No cite on this background sentence. Supported by S2: "assumes that the Internet Protocol (IP) [1] is used as the underlying protocol" and S1 2.2 (segment sent as IP datagram). Ports pick the program: claim 7 and 8. Consider one `<Cite n={2} />` here. |
| 10 | Each side picks a starting sequence number; the other side confirms it | 1 | PASS | S1 3.5: "The synchronization requires each side to send its own initial sequence number and to receive a confirmation of it in acknowledgment from the remote TCP peer." |
| 11 | Four steps become three messages: the middle two combine | 1 | PASS | S1 3.5: "Because steps 2 and 3 can be combined in a single message this is called the three-way (or three message) handshake (3WHS)." |
| 12 | Main reason for the handshake: stop old duplicate connection requests causing confusion | 1 | PASS | S1 3.5: "The principal reason for the three-way handshake is to prevent old duplicate connection initiations from causing confusion." |
| 13 | Window: the range of sequence numbers the receiver can accept now | 1 | PASS | S1 3.8.6: "The window sent in each segment indicates the range of sequence numbers the sender of the window (the data receiver) is currently prepared to accept." |
| 14 | The window is related to free buffer space | 1 | PASS | S1 3.8.6: "There is an assumption that this is related to the data buffer space currently available for this connection." |
| 15 | A TCP endpoint must use slow start, congestion avoidance, exponential backoff of RTO, to avoid overloading the network | 1 | PASS (re-checked) | The page now says: "must also slow down when the network is crowded: it starts slowly, grows its speed with care, and waits longer after each repeated timeout. The goal is to avoid a congestion collapse". This is a plain-words paraphrase of S1 3.8.2: "A TCP endpoint MUST implement the basic congestion control algorithms slow start, congestion avoidance, and exponential backoff of RTO to avoid creating congestion collapse conditions (MUST-19)." |
| 16 | The timeout is not fixed; it is computed while the connection runs | 1 | PASS | S1 3.8.1: "the retransmission timeout (RTO) must be dynamically determined. The RTO MUST be computed according to the algorithm in [10]". |
| 17 | Close: one side sends FIN; the other acknowledges, sends its own FIN only when its user has closed too | 1 | PASS | S1 3.6: "a TCP endpoint receiving a FIN will ACK but not send its own FIN until its user has CLOSED the connection also." |
| 18 | The closing side waits in TIME-WAIT: peer got the ACK; delayed old segments stay away from a new connection | 1 | PASS | S1 3.3.2: "TIME-WAIT - represents waiting for enough time to pass to be sure the remote TCP peer received the acknowledgment of its connection termination request and to avoid new connections being impacted by delayed segments from previous connections." S1 3.6: "When a connection is closed actively, it MUST linger in the TIME-WAIT state". |
| 19 | RST aborts an open connection and informs the user | 1 | PASS | S1 3.5: "If the TCP peer is in one of the synchronized states (ESTABLISHED, ... TIME-WAIT), it aborts the connection and informs its user." |
| 20 | UDP has no handshake and no window | none | PASS (note) | S2 defines no connection set-up and no window; it has only "a minimum of protocol mechanism". This is a statement of absence, with no cite. It is safe, but a cite to S2 after the sentence is optional. |
| 21 | UDP length field; minimum 8 octets (the header alone) | 2 | PASS | S2: "Length is the length in octets of this user datagram including this header and the data. (This means the minimum value of the length is eight.)" The header is four 16-bit fields = 8 octets. |
| 22 | UDP source port is optional; zero if not used | 2 | PASS | S2: "Source Port is an optional field ... If not used, a value of zero is inserted." |
| 23 | An all-zero UDP checksum means the sender computed none | 2 | PASS | S2: "An all zero transmitted checksum value means that the transmitter generated no checksum". |
| 24 | The early UDP standard names the name server and trivial file transfer as major uses | 2 | PASS | S2: "The major uses of this protocol is the Internet Name Server [3], and the Trivial File Transfer [4]." |
| 25 | UDP is IP protocol number 17 | 2 | PASS | S2: "This is protocol 17 (21 octal) when used in the Internet Protocol." |
| 26 | Table: TCP delivery "Reliable, in order"; UDP "Not guaranteed" | 1, 2 | PASS | Claims 1 and 5. |
| 27 | Table: UDP overhead "Very little" | 2 | PASS | S2 "minimum of protocol mechanism". The page marks the TCP Overhead cell as the tutorial's own. |
| 28 | Table: Connection row, TCP "Handshake first", UDP "None" | none | PASS (note) | Supported by claims 10 and 20. The cells have no cite, and the note under the table does not list this row as the tutorial's own. Low risk. |
| 29 | "The missing promises are the design" (UDP) | 2 | PASS | S2: "The protocol is transaction oriented, and delivery and duplicate protection are not guaranteed." The word "design" is the page's reading of this. |
| 30 | "TCP only delivers bytes to the other program" | none | PASS (note) | Consistent with S1 2.2 "byte-stream service to applications". Not a cited claim. The rest of the bullet (the program can still fail) is common sense and not a statement about a standard. |
| 31 | "A closed port or a firewall rule can stop a connection even when the server runs" | none | PASS (re-checked) | The bullet now ends: "This is the tutorial's own advice, not a statement of the RFCs." It has no cite, and it does not say a source states it. S1 does not cover it, so the mark is the right fix. |
| 32 | Key words table meanings (TCP, UDP, segment, datagram, 16-bit port, flags, window, retransmission, TIME-WAIT) | none | PASS (note) | Each agrees with claims 1 to 18 and S1 3.1 (flag bits "PSH, RST, SYN, and FIN"). The table has no cites, as is usual for a glossary. |
| 33 | Real-life example (quiz over TCP, video over UDP) | none | PASS | The text says: "This example is the tutorial's own text." The text does not say a source states it. |
| 34 | No run of 8 or more words copied from a source | n/a | PASS (re-checked) | The overlap script was run again on the whole page. Longest runs: "a reliable, in-order byte stream" (6, S1), "with a minimum of protocol mechanism" (6, S2), "delivery and duplicate protection are not guaranteed" (7, S2). The 8-word run of line 40 is gone. |

## Structure and sources

| Check | Result |
|---|---|
| Section order: In plain words, When you need it, A real-life example, Common mistakes, What a tester can check, Key words | PASS. The order is right and Key words is last. The page also has "How it works" (after In plain words) and "Trade-offs" (after A real-life example). These extra sections do not break the order of the six. |
| `page.sources` entries use https | PASS (2 of 2). Both URLs return 200. |
| Each source is cited at least once | PASS. Source 1: many cites. Source 2: many cites. |
| Each `<Cite n>` has a source | PASS. The cites use only n=1 and n=2. |
| No blog, forum, AI summary, or systemdesignbangla.com | PASS. Both sources are IETF RFCs. |
| Tip callout marked as the tutorial's own | PASS. "This advice is the tutorial's own. It is not from a standard." |
| Note under the Trade-offs table | PASS, with the small gap of claim 28. |
| `When you need it`, first paragraph ("Pick TCP when ... Pick UDP when ...") | Note, no FAIL. It is guidance, not a fact about a standard. It is not marked as the tutorial's own. Optional: add the mark. |

## Re-check (2026-10-22)

The writer fixed claims 31 and 34. Claim 15 was re-read because its text changed. All three rows now PASS. The overlap script found no run of 8 words or more. The other rows and the structure checks did not change.

Open FAILs: 0
