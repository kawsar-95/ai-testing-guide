# Fact-check: content/course/dns.mdx

Checked 2026-10-22 by an agent that did not write the page. Sources fetched fresh (RFC 1034, 1035, 2181 as text; MDN DNS and TTL glossary pages). The quotes of the research notes were not trusted.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | DNS is a hierarchical and decentralized naming system | 1 | PASS (but see copy check C1) | MDN: "DNS (Domain Name System) is a hierarchical and decentralized naming system for Internet-connected resources." |
| 2 | Best-known job: turn a name into a numeric IP address; this is a DNS lookup | 1 | PASS | MDN: "The most prominent function of DNS is the translation of human-friendly domain names (such as mozilla.org) to a numeric IP address (such as 192.0.2.172); this process ... is known as a DNS lookup." |
| 3 | A reverse lookup finds the name for an IP address | 1 | PASS | MDN: "a reverse DNS lookup (rDNS) is used to determine the domain name associated with an IP address." |
| 4 | Names form a tree; the root has an empty label | 2 | PASS | RFC 1034 3.1: "One label is reserved, and that is the null (i.e., zero length) label used for the root." |
| 5 | A name reads from most specific (left) to least specific (right) | 2 | PASS | RFC 1034 3.1: "printed or read left to right, from the most specific ... to the least specific". |
| 6 | Each organization looks after its own part and runs more than one name server | 2 | PASS | RFC 1034 2.x: "Each organization that has responsibility for a particular set of domains will provide redundant name servers"; 4.x: "we require every zone to be available on at least two servers". |
| 7 | Stub resolver asks a recursive name server; the server keeps a shared cache | 2 | PASS | RFC 1034 5.3.1: "move the resolution function out of the local machine and into a name server which supports recursive queries ... or can centralize the cache for a whole local network". The words "often from your network or provider" are not in the source (the tutorial's own detail, harmless). |
| 8 | Recursive query: first server chases the answer | 2 | PASS | RFC 1034 2.x: "recursive, in which the first server pursues the query for the client at another server". |
| 9 | Iterative query: a server only points to the next server | 2 | PASS | RFC 1034: "iterative, in which the server refers the client to another server and lets the client pursue the query". |
| 10 | Resolver step 1: check local data such as the cache; if there, return it | 2 | PASS | RFC 1034 5.3.3: "See if the answer is in local information, and if so return it to the client." |
| 11 | Step 2: find best servers; start at the full name, go up to parent, to the root | 2 | PASS | RFC 1034 5.3.3: "starting at SNAME, then the parent domain name of SNAME, the grandparent, and so on toward the root." |
| 12 | Step 3: send queries until one answers | 2 | PASS | RFC 1034 5.3.3: "Send them queries until one returns a response." |
| 13 | Step 4: answer or name error is cached and returned | 2 | PASS | RFC 1034 5.3.3 4a: "if the response answers the question or contains a name error, cache the data as well as returning it back to the client." |
| 14 | Step 4: a better delegation means ask them | 2 | PASS | RFC 1034 5.3.3 4b: "if the response contains a better delegation to other servers, cache the delegation information, and go to step 2." |
| 15 | Step 4: an alias means restart with the real name | 2 | PASS | RFC 1034 5.3.3 4c: "change the SNAME to the canonical name in the CNAME RR and go to step 1." |
| 16 | The resolver answers most requests from its cache, so network and servers have less work | 2 | PASS | RFC 1034 5.1: "A very important goal of the resolver is to eliminate network delay and name server load from most requests by answering them from its cache of prior results." (the RFC states a goal; the page states it as fact; acceptable) |
| 17 | A DNS answer is made of resource records | 3 | PASS | RFC 1035 3.2.1: "All RRs have the same top level format" (NAME, TYPE, CLASS, TTL, RDLENGTH, RDATA). |
| 18 | A = a host address | 3 | PASS | RFC 1035 3.2.2: "A 1 a host address". |
| 19 | NS = an authoritative name server for the zone | 3 | PASS | RFC 1035 3.2.2: "NS 2 an authoritative name server"; 3.3.11: "The NS RR states that the named host should be expected to have a zone starting at owner name". |
| 20 | CNAME = canonical (real) name for an alias | 3 | PASS | RFC 1035 3.3.1: "specifies the canonical or primary name for the owner. The owner name is an alias." |
| 21 | MX = host that takes mail for the name | 3 | PASS | RFC 1035 3.3.9: "a host willing to act as a mail exchange for the owner name." |
| 22 | TXT = text strings | 3 | PASS | RFC 1035 3.2.2: "TXT 16 text strings". |
| 23 | PTR = domain name pointer, used for reverse lookups | 3 | PASS | RFC 1035 3.2.2: "PTR 12 a domain name pointer"; 3.3.12: "These RRs are used in special domains to point to some other location ... See the description of the IN-ADDR.ARPA domain" (3.5: "Internet address to host mapping"). |
| 24 | MX has a preference number; lower is preferred | 3 | PASS | RFC 1035 3.3.9: "Lower values are preferred." |
| 25 | TXT meaning depends on the domain where it is found | 3 | PASS (but see copy check C2) | RFC 1035 3.3.14: "The semantics of the text depends on the domain where it is found." |
| 26 | A name with a CNAME has no other record types, except some DNSSEC records | 4 | PASS | RFC 2181 10.1: "may, if DNSSEC is in use, have SIG, NXT, and KEY RRs, but may have no other data." |
| 27 | The value of an NS record and the host of an MX record must not be an alias | 4 | PASS | RFC 2181 10.3: "The domain name used as the value of a NS resource record, or part of the value of a MX resource record must not be an alias." |
| 28 | TTL is a time limit on how long a cache may keep a record | 2 | PASS | RFC 1034 3.6: "The meaning of the TTL field is a time limit on how long an RR can be kept in a cache." |
| 29 | TTL is a number of seconds | 5 | PASS | MDN TTL: "indicates the amount of time in seconds during which the resource can be cached by the requester." |
| 30 | TTL range is 0 to 2147483647 | 4 | PASS | RFC 2181 8: "minimum value of 0, and a maximum value of 2147483647." |
| 31 | A TTL of 0 forbids caching | 2 | PASS | RFC 1034 3.6: "a zero TTL prohibits caching". |
| 32 | TTL is a maximum, not a promise; a cache may use a lower limit | 4 | PASS | RFC 2181 8: "Implementations are always free to place an upper bound on any TTL received ... The TTL specifies a maximum time to live, not a mandatory time to live." |
| 33 | Before a planned change, lower the TTL; raise it again after | 2 | PASS | RFC 1034 3.6: "If a change can be anticipated, the TTL can be reduced prior to the change ... and then increased back to its former value following the change." |
| 34 | Response code 3 is "Name Error"; only an authoritative server gives it | 3 | PASS | RFC 1035 4.1.1: "3 Name Error - Meaningful only for responses from an authoritative name server, this code signifies that the domain name referenced in the query does not exist." |
| 35 | A resolver may cache a name-error answer for a TTL | 2 | PASS | RFC 1034 4.3.4: "a name server can distribute a TTL along with a name error indication, and a resolver receiving such information is allowed to assume that the name does not exist during the TTL period". |
| 36 | Example: resolvers keep the old answer until the TTL ends, so some users reach the old server | 2 | PASS | Follows from claim 28 (RFC 1034 3.6: TTL is reduced "to minimize inconsistency during the change"). The "hours" and "one day" are the example's own numbers (86400 s is a legal TTL). |
| 37 | (First check) "DNS favors access over instant updates" | 2 | FAIL, fixed (see Re-check) | RFC 1034 does not say this. The nearest text is "the source of the data should control the tradeoff" (between cost of acquiring data, speed of updates, accuracy of caches) and "the realities of Internet performance suggest that these times should be on the order of days for the typical host". Remove the sentence, or state it as the tutorial's own view without a cite, or quote the real RFC statement. |
| 38 | A careful team lowers the TTL "days before" the move and raises it after | 2 | PASS | RFC 1034 3.6 says "prior to the change" and "following the change". "Days" is an example detail that matches the 1-day TTL of the example. |
| 39 | Mistake: a changed record reaches users only after old copies expire | 2 | PASS | Follows from claims 28 and 33. |
| 40 | Mistake: a CNAME next to other records is not allowed | 4 | PASS | RFC 2181 10.1: exactly one of: one CNAME (with DNSSEC RRs), or "one or more records exist, none being CNAME records". |
| 41 | Mistake: an MX or NS record at an alias "must not be done" | 4 | PASS | RFC 2181 10.3 (see claim 27). |
| 42 | Key word: DNS maps domain names to IP addresses | 1 | PASS | See claim 2. |
| 43 | Key word: resolver finds the answer for a name and keeps a cache | 2 | PASS | RFC 1034 2.x: "RESOLVERS are programs that extract information from name servers in response to client requests"; 5.3.2 lists a CACHE structure. |
| 44 | Key word: resource record has a type, a TTL, and a value | 3 | PASS | RFC 1035 3.2.1: fields TYPE, CLASS, TTL, RDLENGTH, RDATA. |

Examples: `203.0.113.10` and `203.0.113.20` are in 203.0.113.0/24 (TEST-NET-3, documentation range). `learn.example.com` uses the reserved `example.com`. PASS.

Uncited text that states no source fact: the lede (a contact-list analogy), "When you need it" (use cases; the MX use matches claim 21), the "Testing on a cached answer" bullet, and the Key words rows. The tip callout says "These test ideas are the tutorial's own advice." and states no fact as if a source said it. PASS.

## Other checks

| Check | Result |
|---|---|
| Every `page.sources` URL is https | PASS (5 of 5) |
| Every source is cited at least once | PASS (1: claims 1-3; 2: many; 3: claims 17-25; 4: claims 26, 27, 30, 32, 40; 5: claim 29) |
| Every `<Cite n>` has a source | PASS (n = 1 to 5 only) |
| No blog, forum, AI summary, or systemdesignbangla.com | PASS (MDN and IETF only) |
| Section order: In plain words, When you need it, A real-life example, Common mistakes, What a tester can check, Key words (last) | PASS (How it works and Record types and TTL come between When you need it and A real-life example; Key words is last) |
| No run of 8 or more words copied from a source | FAIL, 2 runs (below) |

Copy check (a script compared word runs of the page text with the 5 fetched sources):

- C1 FAIL, fixed (see Re-check): "(the Domain Name System) is a hierarchical and decentralized naming system", 10 words, same as the MDN DNS page. Rephrase it.
- C2 FAIL, fixed (see Re-check): "depends on the domain where it is found", 8 words, same as RFC 1035 3.3.14. Rephrase it.

## Re-check (after the writer's fixes)

| # | Changed text | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 37 | "The design of DNS (RFC 1034, section 2.3) says that access to information is more critical than instant updates, and that updates spread out slowly" | 2 | PASS | RFC 1034 2.3 (Assumptions about usage): "Access to information is more critical than instantaneous updates or guarantees of consistency. Hence the update process allows updates to percolate out through the users of the domain system rather than guaranteeing that all copies are simultaneously updated." Section number 2.3 is correct (line "2.3. Assumptions about usage"). |
| 1 | "a naming system with a tree shape and no single owner" | 1 | PASS | MDN: "a hierarchical and decentralized naming system" (hierarchical = tree shape; decentralized = no single owner). A paraphrase, not a copy. |
| 25 | "What a TXT text means is set by the domain that holds it" | 3 | PASS | RFC 1035 3.3.14: "The semantics of the text depends on the domain where it is found." Same meaning, new wording. |

Copy check again (script, all page text vs the 5 sources): the longest run is 7 words ("access to information is more critical than"). No run of 8 or more words. PASS. C1 and C2 are closed.

Open FAILs: 0
