# Research notes: course / ip (IP Addresses)

All sources are IETF RFCs, fetched as text from rfc-editor.org on 2026-10-22.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | RFC 791, Internet Protocol (IPv4) | https://www.rfc-editor.org/rfc/rfc791 | 2026-10-22 |
| S2 | RFC 8200, Internet Protocol, Version 6 (IPv6) Specification | https://www.rfc-editor.org/rfc/rfc8200 | 2026-10-22 |
| S3 | RFC 1918, Address Allocation for Private Internets | https://www.rfc-editor.org/rfc/rfc1918 | 2026-10-22 |
| S4 | RFC 4291, IP Version 6 Addressing Architecture | https://www.rfc-editor.org/rfc/rfc4291 | 2026-10-22 |

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | An IPv4 address is 32 bits (four octets) | S1, section 2.3 | "Addresses are fixed length of four octets (32 bits)." |
| C2 | The IPv4 header has a source and a destination address | S1, section 3.1 | "Source Address: 32 bits" / "Destination Address: 32 bits" |
| C3 | One host can have several addresses and several interfaces | S1, section 2.3 | "a single physical host must be able to act as if it were several distinct hosts to the extent of using several distinct internet addresses. Some hosts will also have several physical interfaces (multi-homing)." |
| C4 | IPv4 TTL: a datagram is destroyed when the TTL is zero | S1, section 3.1 | "If this field contains the value zero, then the datagram must be destroyed." |
| C5 | IPv6 address is 128 bits | S2, section 1 | "IPv6 increases the IP address size from 32 bits to 128 bits" |
| C6 | IPv6 Hop Limit: each forwarding node decrements it; the packet is discarded at zero | S2, section 3 | "Decremented by 1 by each node that forwards the packet. When forwarding, the packet is discarded if Hop Limit was zero when received or is decremented to zero." |
| C7 | The IPv4 TTL field is renamed Hop Limit in IPv6 | S2, section 8.2 | "the IPv4 'Time-to-Live' field was renamed 'Hop Limit' in IPv6" |
| C8 | In IPv6, only the source node fragments a packet, not routers | S2, section 4.5 | "unlike IPv4, fragmentation in IPv6 is performed only by source nodes, not by routers along a packet's delivery path" |
| C9 | Private blocks 10/8, 172.16/12, 192.168/16 | S3, section 3 | "10.0.0.0 - 10.255.255.255 (10/8 prefix) / 172.16.0.0 - 172.31.255.255 (172.16/12 prefix) / 192.168.0.0 - 192.168.255.255 (192.168/16 prefix)" |
| C10 | Private addresses can be used without asking IANA; they are unique only inside one enterprise (or cooperating enterprises) | S3, section 3 | "can do so without any coordination with IANA or an Internet registry ... Addresses within this private address space will only be unique within the enterprise" |
| C11 | A host that needs access outside needs a globally unique address | S3, section 2 | "hosts in the last category require IP addresses that are globally unambiguous." |
| C12 | IPv6 has unicast, anycast, multicast address types | S4, section 2 | "There are three types of addresses: Unicast ... Anycast ... Multicast" |
| C13 | IPv6 has no broadcast address; multicast does that job | S4, section 2 | "There are no broadcast addresses in IPv6, their function being superseded by multicast addresses." |
| C14 | IPv6 text form: eight groups of 1 to 4 hex digits; leading zeros can be dropped | S4, section 2.2 | "x:x:x:x:x:x:x:x, where the 'x's are one to four hexadecimal digits of the eight 16-bit pieces ... it is not necessary to write the leading zeros in an individual field" |
| C15 | `::` compresses one or more groups of zeros and can appear only once | S4, section 2.2 | "The use of '::' indicates one or more groups of 16 bits of zeros. The '::' can only appear once in an address." |
| C16 | IPv6 loopback is `::1`; a packet to it never leaves the node | S4, sections 2.4, 2.5.3 | "The unicast address 0:0:0:0:0:0:0:1 is called the loopback address. ... must never be sent outside of a single node" |
| C17 | `::` is the unspecified address: "no address", used as source before a host knows its address | S4, section 2.5.2 | "It indicates the absence of an address. One example of its use is in the Source Address field of any IPv6 packets sent by an initializing host before it has learned its own address." |
| C18 | Link-local `FE80::/10`: for one link only; routers do not forward it | S4, sections 2.4, 2.5.6 | "Link-Local unicast 1111111010 FE80::/10" / "Routers must not forward any packets with Link-Local source or destination addresses to other links." |
| C19 | IPv4 addresses are written as dotted decimal numbers (RFC 1918 uses this form for its ranges; the page also says it is the tutorial's own explanation) | S3, section 3 | "10.0.0.0 - 10.255.255.255 (10/8 prefix)" |
| C20 | A host that does not need access to the Internet at large can use a private address | S3, section 2 | "Category 1: hosts that do not require access to hosts in other enterprises or the Internet at large; hosts within this category may use IP addresses that are unambiguous within an enterprise, but may be ambiguous between enterprises." |

Not used: the IPv4 classes of S1 (class A, B, C). They are historical, and RFC 1918 itself says the old class terms are "pre-CIDR". The page does not teach them.
