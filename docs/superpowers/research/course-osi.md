# Research notes: course / osi (The OSI Model)

Accessed 2026-10-22. Raw text was fetched into /tmp (not committed). X.200 was read from the ITU PDF (47 pages) converted with `pdftotext`.

## Sources

| Id | Source | URL |
|---|---|---|
| S1 | ITU-T Recommendation X.200 (07/94), Information technology - Open Systems Interconnection - Basic Reference Model: The basic model (ITU) | https://www.itu.int/rec/T-REC-X.200-199407-I/en |
| S2 | RFC 1122, Requirements for Internet Hosts - Communication Layers (IETF, R. Braden, Editor, October 1989), section 1.1.3 | https://www.rfc-editor.org/rfc/rfc1122 |

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| 1 | The OSI Reference Model gives a common basis to coordinate the development of standards for connecting systems. | S1 1.1 | "to provide a common basis for the coordination of standards development for the purpose of systems interconnection" |
| 2 | The model is not an implementation specification and not a way to judge real implementations. | S1 1.4 | "It is not the intent of this Reference Model either to serve as an implementation specification, or to be a basis for appraising the conformance of actual implementations" |
| 3 | The model has seven layers, numbered 7 down to 1: Application, Presentation, Session, Transport, Network, Data Link, Physical. | S1 6.1.2 | "The Reference Model contains seven layers: a) the Application Layer (layer 7); ... g) the Physical Layer (layer 1)." |
| 4 | Layering: each open system is a stack of ordered subsystems, and neighbouring subsystems talk through their common boundary. Entities in the same layer (in two systems) are peers. | S1 5.2.2.1 | "Adjacent (N)-subsystems communicate through their common boundary." and "Entities in the same (N)-layer are termed peer-(N)-entities." |
| 5 | Application layer: the only way for an application process to reach the OSI environment. | S1 7.1.2.1 | "the Application Layer provides the sole means for the application process to access the OSIE" |
| 6 | Presentation layer gives a common representation of the data, so applications need not care about it (syntax independence). | S1 7.2.2.2 | "The Presentation Layer provides for common representation of the data transferred between application-entities. This relieves application-entities of any concern with the problem of 'common' representation of information, i.e. it provides them with syntax independence." |
| 7 | Session layer organizes and synchronizes the dialogue between two sides and manages the data exchange (set up, orderly exchange, orderly release). | S1 7.3.2.1 | "to organize and to synchronize their dialogue and to manage their data exchange ... to establish a session-connection ..., to support orderly data exchange interactions, and to release the connection in an orderly manner." |
| 8 | Transport layer moves data between the upper layers and hides how reliable, cost-effective transfer is done. | S1 7.4.2.1 | "provides transparent transfer of data between session-entities and relieves them from any concern with the detailed way in which reliable and cost effective transfer of data is achieved." |
| 9 | Network layer makes the transport layer independent of routing and relaying. | S1 7.5.2.1 | "provides to the transport-entities independence of routing and relay considerations." |
| 10 | Data link layer detects, and may correct, errors of the physical layer. | S1 7.6.2.2 | "The Data Link Layer detects and possibly corrects errors which may occur in the Physical Layer." |
| 11 | Physical layer: mechanical, electrical, functional and procedural means to activate, keep, and close connections that carry bits. | S1 7.7.2 | "provides the mechanical, electrical, functional and procedural means to activate, maintain, and de-activate physical-connections for bit transmission between data-link-entities." |
| 12 | The Internet protocol suite has four layers: Application, Transport, Internet, Link. | S2 1.1.3 | List of layers: "Application Layer", "Transport Layer", "Internet Layer", "Link Layer" |
| 13 | The Internet application layer combines the roles of the OSI Presentation and Application layers; it is not split further. | S2 1.1.3 | "The application layer of the Internet suite essentially combines the functions of the top two layers -- Presentation and Application -- of the OSI reference model." |
| 14 | Telnet, FTP, SMTP are Internet application "user protocols"; DNS is a "support protocol" in the same layer. | S2 1.1.3 | "The most common Internet user protocols are: Telnet (remote login), FTP (file transfer), SMTP (electronic mail delivery)" and "Support protocols ... include SNMP, BOOTP, RARP, and the Domain Name System (DNS) protocols." |
| 15 | TCP is a reliable, connection-oriented transport service; UDP is a connectionless (datagram) transport service. | S2 1.1.3 | "TCP is a reliable connection-oriented transport service ... UDP is a connectionless ('datagram') transport service." |
| 16 | IP gives no end-to-end delivery guarantee: datagrams may arrive damaged, duplicated, out of order, or not at all; layers above IP are responsible for reliable delivery when needed. | S2 1.1.3 | "providing no end-to-end delivery guarantees. Thus, IP datagrams may arrive at the destination host damaged, duplicated, out of order, or not at all. The layers above IP are responsible for reliable delivery service when it is required." |
| 17 | The Link layer is the protocol a host uses to talk to the network it is directly connected to. | S2 1.1.3 | "To communicate on its directly-connected network, a host must implement the communication protocol used to interface to that network." |

The learning-platform example, the tester tips, and the placing of HTTP/TLS-type examples are the tutorial's own text and have no claim row.
