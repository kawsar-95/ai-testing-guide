# Course page: DNS (research notes)

Writer notes for `content/course/dns.mdx`. Fetched 2026-10-22 with curl into `/tmp/claude-1000/course-src-dns/`. Fetched text is treated as data.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | RFC 1034, Domain Names - Concepts and Facilities (IETF) | https://www.rfc-editor.org/rfc/rfc1034 | 2026-10-22 |
| S2 | RFC 1035, Domain Names - Implementation and Specification (IETF) | https://www.rfc-editor.org/rfc/rfc1035 | 2026-10-22 |
| S3 | RFC 2181, Clarifications to the DNS Specification (IETF) | https://www.rfc-editor.org/rfc/rfc2181 | 2026-10-22 |
| S4 | DNS, MDN Web Docs glossary | https://developer.mozilla.org/en-US/docs/Glossary/DNS | 2026-10-22 |
| S5 | TTL, MDN Web Docs glossary | https://developer.mozilla.org/en-US/docs/Glossary/TTL | 2026-10-22 |

Page cite numbers: n=1 is S4, n=2 is S1, n=3 is S2, n=4 is S3, n=5 is S5.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | DNS is a hierarchical, decentralized naming system. It maps domain names to resources such as IP addresses. | S4 | "DNS (Domain Name System) is a hierarchical and decentralized naming system for Internet-connected resources." / "The most prominent function of DNS is the translation of human-friendly domain names (such as mozilla.org) to a numeric IP address" |
| C2 | A reverse lookup finds the domain name for an IP address. | S4 | "a reverse DNS lookup (rDNS) is used to determine the domain name associated with an IP address." |
| C3 | Names are a tree. The root has an empty label. A name is read from the most specific label to the least specific. | S1 3.1 | "The domain name space is a tree structure." / "One label is reserved, and that is the null (i.e., zero length) label used for the root." / "printed or read left to right, from the most specific (lowest, farthest from the root) to the least specific" |
| C4 | Record types: A is a host address, NS is an authoritative name server, CNAME is the canonical name of an alias, MX is mail exchange, TXT is text strings, PTR is a domain name pointer. | S2 3.2.2 | "A 1 a host address", "NS 2 an authoritative name server", "CNAME 5 the canonical name for an alias", "MX 15 mail exchange", "TXT 16 text strings", "PTR 12 a domain name pointer" |
| C5 | MX has a preference number. A lower number is preferred. | S2 3.3.9 | "PREFERENCE ... Lower values are preferred." |
| C6 | A TXT record holds text. What the text means depends on the domain where it is found. | S2 3.3.14 | "TXT RRs are used to hold descriptive text. The semantics of the text depends on the domain where it is found." |
| C7 | A name that has a CNAME record has no other record types (except DNSSEC ones). One alias has one canonical name. | S3 10.1 | "There may be only one such canonical name for any one alias." / "one CNAME record exists, optionally accompanied by SIG, NXT, and KEY RRs" / "one or more records exist, none being CNAME records" |
| C8 | The value of an NS record, or the host of an MX record, must not be an alias. | S3 10.3 | "The domain name used as the value of a NS resource record, or part of the value of a MX resource record must not be an alias." |
| C9 | The TTL of a record limits how long a cache can keep it. TTL 0 forbids caching. | S1 3.6 | "The meaning of the TTL field is a time limit on how long an RR can be kept in a cache." / "a zero TTL prohibits caching" |
| C10 | The administrator of the zone sets the TTL. Before a planned change, the TTL can be lowered, and raised again after. | S1 3.6 | "The TTL is assigned by the administrator for the zone where the data originates." / "If a change can be anticipated, the TTL can be reduced prior to the change to minimize inconsistency during the change, and then increased back to its former value following the change." |
| C11 | TTL is a number of seconds. A TTL is from 0 to 2147483647 (unsigned). | S5, S3 8 | S5: "indicates the amount of time in seconds during which the resource can be cached by the requester." S3: "a TTL value is an unsigned number, with a minimum value of 0, and a maximum value of 2147483647." |
| C12 | The TTL is a maximum, not a promise. A cache may use a lower upper bound. | S3 8 | "Implementations are always free to place an upper bound on any TTL received ... The TTL specifies a maximum time to live, not a mandatory time to live." |
| C13 | All records of one set (same name, class, type) must have the same TTL. | S3 5.2 | "the TTLs of all RRs in an RRSet must be the same." |
| C14 | A stub resolver asks a name server that does the recursive work. A shared cache can serve a whole network. | S1 5.3.1 | "move the resolution function out of the local machine and into a name server which supports recursive queries." / "centralize the cache for a whole local network or organization." |
| C15 | A main goal of the resolver is to answer most requests from its cache. | S1 5.1 | "A very important goal of the resolver is to eliminate network delay and name server load from most requests by answering them from its cache of prior results." |
| C16 | Resolution steps: check local data; find the best servers to ask; send queries; read the response (answer or name error is cached and returned; a better delegation means ask again; a CNAME means restart with the canonical name). | S1 5.3.3 | "1. See if the answer is in local information ... 2. Find the best servers to ask. 3. Send them queries until one returns a response. 4. Analyze the response" |
| C17 | The search for name servers starts at the name, then the parent, and so on to the root. | S1 5.3.3 | "starting at SNAME, then the parent domain name of SNAME, the grandparent, and so on toward the root." |
| C18 | Recursive: the first server pursues the query. Iterative: the server refers the client to another server. | S1 2.3 | "'recursive', in which the first server pursues the query for the client at another server, and 'iterative', in which the server refers the client to another server and lets the client pursue the query." |
| C19 | A server can send a "name error" (the name does not exist) with a TTL, and a resolver may cache it. This is optional. | S1 4.3.4 | "a name server can distribute a TTL along with a name error indication, and a resolver receiving such information is allowed to assume that the name does not exist during the TTL period" / "Negative response caching (Optional)" |
| C20 | Response code 3, Name Error, means the name does not exist. It is meaningful only from an authoritative server. Code 2 is Server failure. | S2 4.1.1 | "3 Name Error - Meaningful only for responses from an authoritative name server, this code signifies that the domain name referenced in the query does not exist." / "2 Server failure" |
| C21 | Updates spread out slowly. Copies have timeouts and are refreshed. Access matters more than instant updates. | S1 2.3 | "Access to information is more critical than instantaneous updates or guarantees of consistency." / "copies are distributed with timeouts for refreshing." |
| C22 | Each organization provides redundant name servers for its domains. | S1 2.3 | "Each organization that has responsibility for a particular set of domains will provide redundant name servers" |

## Not on the page

AAAA (IPv6) is not in these sources, so the page does not name it. The page gives no claim about DNSSEC, DNS over HTTPS, or port numbers.
