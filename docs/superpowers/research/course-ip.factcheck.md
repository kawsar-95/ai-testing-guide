# Fact-check: course / ip (IP Addresses)

Page: `content/course/ip.mdx`. Checker: an agent that did not write the page. Date: 2026-10-22.
Sources were fetched fresh as text from rfc-editor.org (rfc791, rfc8200, rfc1918, rfc4291). Quotes below come from that fetched text, not from the research notes.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | The IP puts a source and a destination address in the header of each packet | 1 | PASS | RFC 791 header: "Source Address:  32 bits" and "Destination Address:  32 bits" |
| 2 | IPv4 uses 32 bits (four octets) per address | 1 | PASS | "Addresses are fixed length of four octets (32 bits)." (s2.3) |
| 3 | IPv4 is usually written as decimal numbers with dots (`192.168.1.10`); RFC 1918 writes its ranges in this form | 3 | PASS (re-check) | Page now says "In this tutorial's own words" for the notation, so it is marked as the tutorial's. Cite 3 only covers the form of the ranges: "10.0.0.0        -   10.255.255.255  (10/8 prefix)" (RFC 1918 s3). |
| 4 | IPv6 uses 128 bits | 2 | PASS | "IPv6 increases the IP address size from 32 bits to 128 bits" (RFC 8200 s1) |
| 5 | IPv6 is written as eight groups of one to four hex digits with colons | 4 | PASS | "x:x:x:x:x:x:x:x, where the 'x's are one to four hexadecimal digits of the eight 16-bit pieces of the address" |
| 6 | Example `2001:db8:0:0:8:800:200c:417a` | 4 | PASS | "2001:DB8:0:0:8:800:200C:417A" (RFC 4291 s2.2, example 1) |
| 7 | Leading zeros in a group can be dropped | 4 | PASS | "it is not necessary to write the leading zeros in an individual field" |
| 8 | `::` stands for one or more groups of zeros, only once per address | 4 | PASS | "The use of "::" indicates one or more groups of 16 bits of zeros. The "::" can only appear once in an address." |
| 9 | `2001:db8:0:0:8:800:200c:417a` can become `2001:db8::8:800:200c:417a` | 4 | PASS | RFC 4291 lists "2001:DB8:0:0:8:800:200C:417A ... may be represented as 2001:DB8::8:800:200C:417A" |
| 10 | A host can use several addresses and can have several network interfaces | 1 | PASS | "a single physical host to act as several distinct internet hosts ... allows several internet addresses to correspond to one interface. It must also be allowed for a host to have several physical interfaces" |
| 11 | In IPv4 a packet is destroyed when the TTL reaches zero | 1 | PASS | "If this field contains the value zero, then the datagram must be destroyed." |
| 12 | Each router that forwards a packet lowers the TTL counter | 1 | PASS | "every module that processes a datagram must decrease the TTL by at least one" (RFC 791 says "module", not router; acceptable) |
| 13 | IPv6: field is Hop Limit, each forwarding node lowers it by one, packet discarded at zero | 2 | PASS | "Decremented by 1 by each node that forwards the packet. When forwarding, the packet is discarded if Hop Limit was zero when received or is decremented to zero." |
| 14 | IPv6 renamed the field because it does not need to count time | 2 | PASS | "Unlike IPv4, IPv6 nodes are not required to enforce maximum packet lifetime. That is the reason the IPv4 "Time-to-Live" field was renamed "Hop Limit" in IPv6." |
| 15 | The sender sets the TTL | 1 | PASS | "The time to live is set by the sender to the maximum time the datagram is allowed to be in the internet system." (RFC 791, Time to Live discussion, s3.2) |
| 16 | The TTL diagram numbers are examples | none | PASS | Marked on the page as examples. The tutorial's own illustration. The decrement by one per hop agrees with claim 12. |
| 17 | IPv6 unicast address names one interface | 4 | PASS | "Unicast:   An identifier for a single interface." |
| 18 | Multicast names a group of interfaces | 4 | PASS | "Multicast: An identifier for a set of interfaces" |
| 19 | Anycast names a group, a packet goes to only the nearest one | 4 | PASS | "Anycast:   An identifier for a set of interfaces ... delivered to one of the interfaces identified by that address (the "nearest" one" |
| 20 | IPv6 has no broadcast address, multicast does that job | 4 | PASS | "There are no broadcast addresses in IPv6, their function being superseded by multicast addresses." |
| 21 | Three private ranges: 10.0.0.0-10.255.255.255, 172.16.0.0-172.31.255.255, 192.168.0.0-192.168.255.255 | 3 | PASS | "IANA has reserved the following three blocks of the IP address space for private internets: 10.0.0.0 - 10.255.255.255 (10/8 prefix) 172.16.0.0 - 172.31.255.255 (172.16/12 prefix) 192.168.0.0 - 192.168.255.255 (192.168/16 prefix)" |
| 22 | An organization can use these ranges without asking anybody | 3 | PASS | "can do so without any coordination with IANA or an Internet registry" |
| 23 | A private address must be unique only inside one organization; many companies can use the same one | 3 | PASS | "The address space can thus be used by many enterprises. Addresses within this private address space will only be unique within the enterprise" |
| 24 | A host that does not need access to the Internet at large can use a private address | 3 | PASS (re-check) | "Category 1: hosts that do not require access to hosts in other enterprises or the Internet at large; hosts within this category may use IP addresses that are unambiguous within an enterprise, but may be ambiguous between enterprises." (RFC 1918 s2) |
| 25 | A host that must talk to the outside needs a globally unique address | 3 | PASS | "hosts that need network layer access outside the enterprise ... require IP addresses that are globally unambiguous." (s2, category 3) |
| 26 | A pattern for four dotted numbers fails on IPv6, which has colons and up to 128 bits | 2 | PASS | 128 bits: see claim 4. Colons: see claim 5 (RFC 4291). The "test fails" part is the tutorial's inference, and the cite is to RFC 8200 for the size only. |
| 27 | `2001:db8::1` and `2001:db8:0:0:0:0:0:1` are the same address | 4 | PASS | RFC 4291 s2.2 shows the "::" form as a representation of the full zero groups. The advice "compare after converting to one form" is the tutorial's advice, not in RFC 4291. |
| 28 | `::` twice is not valid, so `2001::db8::1` is invalid | 4 | PASS | "The "::" can only appear once in an address." |
| 29 | A private range is unique only inside one organization, so a public service cannot use it to find your machine | 3 | PASS | "will only be unique within the enterprise"; "Public hosts do not have connectivity to private hosts of other enterprises." The "cannot find your machine" step is a fair reading. |
| 30 | IPv6 loopback `::1` is for a node that talks to itself; a packet to it never leaves the node | 4 | PASS | "It may be used by a node to send an IPv6 packet to itself." / "An IPv6 packet with a destination address of loopback must never be sent outside of a single node" |
| 31 | Key words: IPv4 is the 32-bit version | 1 | PASS | See claim 2. |
| 32 | Key words: IPv6 is the 128-bit version | 2 | PASS | See claim 4. |
| 33 | Key words: TTL / Hop Limit, each router lowers it, packet dropped at zero | 1, 2 | PASS | See claims 11, 12, 13. |
| 34 | Key words: link-local, from `FE80::/10`, valid on one link only, routers do not forward its packets | 4 | PASS | "Link-Local unicast   1111111010           FE80::/10"; "Link-Local addresses are for use on a single link."; "Routers must not forward any packets with Link-Local source or destination addresses to other links." |
| 35 | Key words: unicast, anycast, multicast meanings | 4 | PASS | See claims 17, 18, 19. |

Not checked, because they are not source facts: the envelope analogy, "People usually type a name, and the system turns the name into an address", and the callout "What a tester can check" (marked "This advice is the tutorial's own. It does not come from the sources."). The first bullet of Common mistakes ("Treating an address as a name") is uncited advice with no mark that it is the tutorial's own. It is advice, so it is not a FAIL, but a one-line mark would be safer. The definition "An IP address is a number that names a device" (page and Key words) is uncited general wording and is not a claim about what a standard says.

## Other checks

| Check | Result |
|---|---|
| Every `page.sources` entry is https | PASS (4 of 4) |
| Every source is cited at least once | PASS (1: many, 2: claims 4, 13, 14, 26, 32; 3: claims 21-25, 29; 4: many) |
| Every `<Cite n>` has a source | PASS (n = 1 to 4 only) |
| No run of 8 or more words copied from a source | PASS. A script over all four RFCs found only the example address `2001:db8:0:0:8:800:200c:417a` (an example value, not prose). |
| Section order: In plain words, When you need it, A real-life example, Common mistakes, What a tester can check, Key words | PASS. The page has an extra `## How it works` between When you need it and A real-life example. The required order holds and Key words is last. |
| No source is a blog, forum, AI summary, or systemdesignbangla.com | PASS. All four are IETF RFCs. |

## Re-check (after the writer's fix)

Claims 3 and 24 and the changed lines (IPv4 bullet, first paragraph after the real-life example) were checked again against fresh RFC text. Both now PASS. The 8-word copy check over the whole page found no run copied from RFC 791, 8200, 1918, or 4291 (only the example address in RFC 4291 matched, as before).

Open FAILs: 0
