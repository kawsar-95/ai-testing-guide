# Fact-check: course / osi (The OSI Model)

Checked 2026-10-22 by an agent that did not write the page. Sources were fetched fresh: X.200 from the ITU PDF (47 pages, `pdftotext`) and RFC 1122 as text from rfc-editor.org. Quotes below come from that text, not from the research notes.

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | OSI means Open Systems Interconnection; the model gives a common base to plan standards for connecting systems | 1 | PASS | "This reference model provides a common basis for the coordination of standards development for the purpose of systems interconnection" (Summary; the name is in the title of X.200) |
| 2 | It is not a recipe for building software and not a test to judge real products | 1 | PASS | "It is not the intent of this Reference Model either to serve as an implementation specification, or to be a basis for appraising the conformance of actual implementations" (1.4) |
| 3 | Seven layers, numbered 7 (top) to 1 (bottom) | 1 | PASS | "6.1.2 The Reference Model contains seven layers: a) the Application Layer (layer 7); ... g) the Physical Layer (layer 1)." |
| 4 | Each system is a stack of layers; a layer talks to its neighbours through a shared boundary | 1 | PASS | "each open system is viewed as logically composed of an ordered set of (N)-subsystems ... Adjacent (N)-subsystems communicate through their common boundary." (5.2.2.1) |
| 5 | The same layer on two computers is a pair of peers | 1 | PASS | "Entities in the same (N)-layer are termed peer-(N)-entities." (5.2.2.1) |
| 6 | Application: the only way for a program to reach the OSI world | 1 | PASS | "the Application Layer provides the sole means for the application process to access the OSIE" (7.1.2.1) |
| 7 | Presentation: common form of the data, so programs do not worry about it | 1 | PASS | "provides for common representation of the data transferred between application-entities. This relieves application-entities of any concern with the problem of 'common' representation" (7.2.2.2) |
| 8 | Session: organizes and synchronizes the dialogue; opens and closes it in an orderly way | 1 | PASS | "to organize and to synchronize their dialogue and to manage their data exchange ... to establish a session-connection ... and to release the connection in an orderly manner." (7.3.2.1) |
| 9 | Transport: moves data and hides the work of making transfer reliable | 1 | PASS | "provides transparent transfer of data between session-entities and relieves them from any concern with the detailed way in which reliable and cost effective transfer of data is achieved." (7.4.2.1) |
| 10 | Network: frees the layer above from routing and relaying | 1 | PASS | "provides to the transport-entities independence of routing and relay considerations." (7.5.2.1) |
| 11 | Data Link: finds, and may fix, errors from the physical layer | 1 | PASS | "The Data Link Layer detects and possibly corrects errors which may occur in the Physical Layer." (7.6.2.2) |
| 12 | Physical: mechanical, electrical, functional, procedural means to carry bits | 1 | PASS (content) | "The Physical Layer provides the mechanical, electrical, functional and procedural means to activate, maintain, and de-activate physical-connections for bit transmission" (7.7.2). The wording is copied, see the copy check. |
| 13 | The Internet model has four layers: Application, Transport, Internet, Link | 2 | PASS | RFC 1122 1.1.3 lists "Application Layer", "Transport Layer", "Internet Layer", "Link Layer" under "The protocol layers used in the Internet architecture are as follows". |
| 14 | The Internet application layer joins the OSI Presentation and Application layers | 2 | PASS | "The application layer of the Internet suite essentially combines the functions of the top two layers -- Presentation and Application -- of the OSI reference model." |
| 15 | Table: Transport=Transport, Network=Internet, Data Link + Physical=Link (and Application+Presentation=Application) | 2 (one fact) | PASS after re-check (was FAIL) | Only the Application row is in the RFC. The RFC does not map OSI Network to Internet, nor OSI Data Link + Physical to Link. The page marks only the Session row as the tutorial's own, and the note says the RFC "only says" the top-two fact, so the other rows read as sourced. Mark the whole table as the tutorial's own simplification, or cite and quote support. |
| 16 | Session row of the table is the tutorial's own simplification | 2 | PASS | Marked on the page, and the RFC says only the top-two fact. |
| 17 | Learning-platform walk is the tutorial's own example | none | PASS | Marked: "This walk is the tutorial's own example". It states no source fact. |
| 18 | Common mistakes: the Internet has four layers; OSI is a reference, not a build plan | 2, 1 | PASS | Same quotes as rows 2 and 13. |
| 19 | Telnet, FTP, SMTP are application protocols, and so is DNS (as a support protocol) | 2 | PASS | "The most common Internet user protocols are: Telnet (remote login) FTP (file transfer) SMTP (electronic mail delivery)" and "Support protocols ... include SNMP, BOOTP, RARP, and the Domain Name System (DNS) protocols." |
| 20 | "A protocol does not always sit in one neat box: the RFC notes that some Internet application protocols have some internal sub-layering" | 2 | PASS after re-check (was FAIL) | Not in the source. The RFC only says "some of the Internet application layer protocols do contain some internal sub-layering". "Many" and "mix jobs" are not stated, and the page does not mark them as its own. |
| 21 | IP gives no promise of delivery: data may arrive damaged, twice, out of order, or not at all | 2 | PASS (content) | "providing no end-to-end delivery guarantees. Thus, IP datagrams may arrive at the destination host damaged, duplicated, out of order, or not at all." The wording of "out of order, or not at all" is copied, see the copy check. |
| 22 | The layers above IP must give reliability when it is needed | 2 | PASS (content) | "The layers above IP are responsible for reliable delivery service when it is required." |
| 23 | TCP is reliable and connection-oriented; UDP is connectionless | 2 | PASS | "TCP is a reliable connection-oriented transport service ... UDP is a connectionless ('datagram') transport service." |
| 24 | Key word Layer: one level; it has its own purpose and talks to the layers next to it (also lede: "each layer has its own purpose") | 1 | PASS after re-check (was FAIL) | The "one job" part is not in X.200. A layer has a purpose and several functions (for example, section 7.5 lists several for the Network layer). The same "one job" claim is in the lede and the plain-words diagram, without a cite or a mark. Neighbour talk is fine (row 4). |
| 25 | Key word Peer: the same layer on the other computer | 1 | PASS | Same quote as row 5. |
| 26 | Key word OSI: seven-layer reference model | 1 | PASS | Rows 1 and 3. |
| 27 | Key word Internet model: four layers | 2 | PASS | Row 13. |
| 28 | Key word Transport layer: moves data between two programs; TCP and UDP work here | 2 | PASS | "The transport layer provides end-to-end communication services for applications. There are two primary transport layer protocols at present: ... TCP ... UDP" |
| 29 | Key word Link layer: talks to the directly-connected network | 2 | PASS | "To communicate on its directly-connected network, a host must implement the communication protocol used to interface to that network. We call this a link layer or media-access layer protocol." |
| 30 | Plain-words diagram: Data Link = "one hop between directly connected systems" | none | PASS after re-check (was FAIL) | X.200 does not limit the Data Link layer to a local network. It covers data-link-connections among network-entities, which includes point-to-point links of any length. Overstated, and not marked as a simplification. Use "one hop between directly connected systems". |
| 31 | Plain-words diagram: other layer one-liners (Application, Presentation, Session, Transport, Network, Physical) | none | PASS | They match rows 6 to 12 in meaning. |
| 32 | "When you need it": a wrong price is a high-layer problem; a page that never loads may be a low-layer problem; layers give a shared language | none | PASS (note) | Advice and heuristics, hedged ("may"), with no cite. The section is not marked as the tutorial's own. It states no standard, so it is not counted as a fail. Optional: add "This is the tutorial's own advice." |

## Other checks

| Check | Result |
|---|---|
| Every `page.sources` entry is https and is cited | PASS. Source 1 and source 2 are https and cited many times. |
| Every `<Cite n>` has a source | PASS. Only n=1 and n=2 are used. |
| No run of 8 or more words copied from a source | PASS after re-check (was FAIL). A script comparing the page with both sources found two runs (besides the X.200 title, which is a source title). (a) X.200: "the mechanical, electrical, functional, and procedural means to" (8 words, Physical bullet). (b) RFC 1122: "out of order, or not at all. The layers above IP" (10 words, the IP mistake). Reword both. |
| Sections in order, Key words last | PASS. In plain words, How it works (extra), When you need it, A real-life example, Common mistakes, What a tester can check, Key words. |
| No blog, forum, AI summary, or systemdesignbangla.com source | PASS. ITU and IETF only. |
| Tip callout says it is the tutorial's own | PASS. |

## Re-check (after the writer fixed the 6 FAILs)

Re-read the whole page and re-ran the 8-word copy check on the full page against both sources.

| Row | Result | Basis |
|---|---|---|
| 15 | PASS | The page now says "This table is the tutorial's own simplification, and the rows have no source", and cites RFC 1122 only for the top-two fact, which is verbatim in the RFC ("essentially combines the functions of the top two layers -- Presentation and Application"). |
| 20 | PASS | RFC: "some of the Internet application layer protocols do contain some internal sub-layering". The page says "some ... some internal sub-layering" with the cite. Note: the lead-in "A protocol does not always sit in one neat box" is the page's own light inference, and it is hedged by "the RFC notes". |
| 24 | PASS | "its own purpose" fits X.200 (each layer section has a "Purpose" clause). The "one job" wording is gone from the lede, the diagram, the key word, and the parcel analogy ("its own task"). |
| 30 | PASS | X.200 7.6.2.1: data-link-connections "among network-entities ... built upon one or several physical-connections". "Directly connected systems" is a plain-words gloss, not a quote, and no longer claims a local network. |
| Physical bullet | PASS | "covers the mechanical, electrical, functional, and procedural side of sending bits" matches X.200 7.7.2 in meaning. The longest shared run is now 4 words (a list of 4 adjectives). |
| IP bullet | PASS | "IP makes no promise to deliver. A datagram may be damaged, copied, reordered, or lost" and "The protocols above IP must add reliability when it is needed" match RFC 1122 ("no end-to-end delivery guarantees ... damaged, duplicated, out of order, or not at all ... The layers above IP are responsible for reliable delivery service when it is required"). |
| Copy check | PASS | RFC 1122: 0 runs of 8 words. X.200: 3 runs, all from the title of X.200 in `page.sources`, which is a source title and allowed. |

All other rows are unchanged and still PASS. Sections, sources (both https, both cited), and cite numbers are unchanged.

Open FAILs: 0
