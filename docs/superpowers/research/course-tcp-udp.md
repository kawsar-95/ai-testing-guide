# Course page: TCP and UDP (research notes)

Page: `content/course/tcp-udp.mdx`. Written 2026-10-22. Source text fetched with curl; quotes are from the fetched files.

## Sources

| Id | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | RFC 9293: Transmission Control Protocol (TCP) | IETF | https://www.rfc-editor.org/rfc/rfc9293.html | 2026-10-22 |
| S2 | RFC 768: User Datagram Protocol | IETF | https://www.rfc-editor.org/rfc/rfc768.html | 2026-10-22 |

On the page, S1 is source 1 and S2 is source 2.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| 1 | TCP gives a reliable, in-order byte-stream service to applications. | S1 section 2.2 | "TCP provides a reliable, in-order, byte-stream service to applications." |
| 2 | TCP reliability means finding lost packets (sequence numbers) and errors (checksums), and fixing them by retransmission. | S1 section 2.2 | "TCP reliability consists of detecting packet losses (via sequence numbers) and errors (via per-segment checksums), as well as correction via retransmission." |
| 3 | Each TCP segment is sent as an IP datagram. | S1 section 2.2 | "with each TCP segment sent as an Internet Protocol (IP) datagram." |
| 4 | TCP connection set-up is the three-way handshake; the four steps SYN, ACK, SYN, ACK become three messages because the middle two combine. | S1 section 3.4.1 | "Because steps 2 and 3 can be combined in a single message this is called the three-way (or three message) handshake (3WHS)." |
| 5 | Each side picks its own starting sequence number and the other side confirms it. | S1 section 3.4.1 | "1) A --> B SYN my sequence number is X ... 4) A --> B ACK your sequence number is Y" |
| 6 | The main reason for the handshake is to stop old duplicate connection requests from causing confusion. | S1 section 3.5 | "The principal reason for the three-way handshake is to prevent old duplicate connection initiations from causing confusion." |
| 7 | The receiver's window tells the sender which sequence numbers the receiver can accept now; it relates to free buffer space. | S1 section 3.8.6 | "The window sent in each segment indicates the range of sequence numbers the sender of the window (the data receiver) is currently prepared to accept. There is an assumption that this is related to the data buffer space currently available for this connection." |
| 8 | A TCP endpoint must use slow start, congestion avoidance, and exponential backoff of the retransmission timeout, to avoid congestion collapse. | S1 section 3.8.2 (3.8.2 is "TCP Congestion Control") | "A TCP endpoint MUST implement the basic congestion control algorithms slow start, congestion avoidance, and exponential backoff of RTO to avoid creating congestion collapse conditions (MUST-19)." |
| 9 | The retransmission timeout is not fixed; it is computed dynamically. | S1 section 3.8.1 | "the retransmission timeout (RTO) must be dynamically determined." |
| 10 | A side closes with a FIN segment; the peer ACKs it but sends its own FIN only when its user has also closed. | S1 section 3.6 | "a TCP endpoint receiving a FIN will ACK but not send its own FIN until its user has CLOSED the connection also." |
| 11 | After closing, TCP waits in TIME-WAIT, so that delayed segments of the old connection do not hit a new one. | S1 section 3.3.2 | "TIME-WAIT - represents waiting for enough time to pass to be sure the remote TCP peer received the acknowledgment of its connection termination request and to avoid new connections being impacted by delayed segments from previous connections." |
| 12 | A reset (RST) aborts a connection that is in a synchronized state (for example ESTABLISHED), and informs the user. | S1 section 3.5 | "If the TCP peer is in one of the synchronized states (ESTABLISHED, FIN-WAIT-1, ...), it aborts the connection and informs its user." |
| 13 | TCP source and destination port fields are 16 bits. | S1 section 3.1 | "Source Port: 16 bits ... Destination Port: 16 bits" |
| 14 | UDP uses a minimum of protocol mechanism. | S2 introduction | "a procedure for application programs to send messages to other programs with a minimum of protocol mechanism." |
| 15 | UDP does not guarantee delivery or duplicate protection. | S2 introduction | "delivery and duplicate protection are not guaranteed." |
| 16 | Applications that need ordered reliable delivery of streams should use TCP. | S2 introduction | "Applications requiring ordered reliable delivery of streams of data should use the Transmission Control Protocol (TCP)" |
| 17 | The UDP header has source port, destination port, length, and checksum; the length counts header and data, minimum 8. | S2 Format, Fields | "Length is the length in octets of this user datagram including this header and the data. (This means the minimum value of the length is eight.)" |
| 18 | The UDP source port is optional; if unused it is zero. | S2 Fields | "Source Port is an optional field ... If not used, a value of zero is inserted." |
| 19 | An all-zero UDP checksum means the sender made no checksum. | S2 Fields | "An all zero transmitted checksum value means that the transmitter generated no checksum" |
| 20 | RFC 768 names the name server and trivial file transfer as the major uses of UDP. | S2 Protocol Application | "The major uses of this protocol is the Internet Name Server [3], and the Trivial File Transfer [4]." |
| 21 | UDP is IP protocol number 17. | S2 Protocol Number | "This is protocol 17 (21 octal) when used in the Internet Protocol." |

## Tutorial's own text (no cite)

- The chat, video call, and learning-platform examples.
- The words "late data is useless" for live media, and the trade-off table in the page.
- The tester advice section.
