# Fact-check: SSL, TLS, and mTLS (`content/course/ssl-tls-mtls.mdx`)

Reviewer did not write the page. Sources fetched on 2026-10-22 into `/tmp/claude-1000/fc4-ssl-tls-mtls/` (RFC text from rfc-editor.org, MDN HTML as text). Quotes below come from my own reading of those files, not from the research notes.

## Claims

| # | Claim (short) | Cite n | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | TLS lets a client and a server talk over an untrusted network; with HTTP it gives HTTPS | 5 | PASS | "a protocol which enables a client to communicate securely with a server across an untrusted network ... the resulting protocol is called HTTPS" |
| 2 | Main goal of TLS is a secure channel between two peers; needs only a reliable, in-order stream | 1 | PASS | RFC 8446 s1: "the only requirement from the underlying transport is a reliable, in-order data stream" (primary goal: secure channel between two communicating peers) |
| 3 | Channel gives authentication, confidentiality, integrity | 1 | PASS | RFC 8446 s1: "the secure channel should provide the following properties" (Authentication, Confidentiality, Integrity) |
| 4 | Server always authenticated; client optionally | 1 | PASS | "The server side of the channel is always authenticated; the client side is optionally authenticated." |
| 5 | Data after setup visible only to the endpoints; TLS does not hide the length of the data | 1 | PASS (fact) | "Data sent over the channel after establishment is only visible to the endpoints. TLS does not hide the length of the data it transmits" (copy problem: see structure check) |
| 6 | Attacker cannot change data without detection | 1 | PASS | "cannot be modified by attackers without detection" |
| 7 | Properties should hold even if the attacker controls the network | 1 | PASS | "These properties should be true even in the face of an attacker who has complete control of the network" |
| 8 | SSL 3.0 came out in 1996; TLS 1.0 replaced it in 1999 | 2 | PASS | RFC 7568 s1: "Since it was released in 1996, the SSLv3 protocol ... Despite being replaced by TLS 1.0 [RFC2246] in 1999" |
| 9 | RFC 7568: SSL 3.0 must not be used | 2 | PASS | "SSLv3 MUST NOT be used. Negotiation of SSLv3 from any version of TLS MUST NOT be permitted." |
| 10 | RFC 8446 says the same for SSL 3.0 and SSL 2.0: must not negotiate | 1 | PASS | RFC 8446 App. D.5: "SSL 3.0 ... MUST NOT be negotiated for any reason." / "SSL 2.0 ... MUST NOT be negotiated for any reason." |
| 11 | "SSL" is the older protocol family (SSL 2.0, 3.0) | 2, 1 | PASS | RFC 7568 s1: "The predecessor of SSLv3, SSL version 2 ..." Page body does not cite it, but the claim is supported by the cites in the same paragraph. |
| 12 | "So the safe protocol today is TLS" | none | PASS (note) | Own conclusion. Loose, because TLS 1.0 and 1.1 are not safe either, but the version table right below says so. Suggest "a current version of TLS". |
| 13 | "SSL certificate" habit is the tutorial's own remark | none | PASS | Marked as own text; no fact is stated as sourced. |
| 14 | MDN advises HTTPS for all pages and subresources | 5 | PASS | "All websites should serve all their pages and subresources over HTTPS" |
| 15 | TLS is application-protocol independent; higher protocols run on top | 1 | PASS | "TLS is application protocol independent; higher-level protocols can layer on top of TLS transparently." |
| 16 | mTLS is the case where the client also proves who it is | none | PASS (note) | No cite. Fits MDN: "Client authentication, in which the client proves who they are to the server". Suggest adding Cite 5. |
| 17 | MDN: client authentication is rare on the web outside specialized apps | 5 | PASS (fact) | "is rare on the web outside some specialized applications" (copy problem: see structure check) |
| 18 | Internal-service mTLS remark is the tutorial's own | none | PASS | Marked as own. |
| 19 | TLS starts with a handshake (authenticates, agrees on parameters, sets keys) then a record protocol that protects traffic | 1 | PASS | RFC 8446 s1: "A handshake protocol ... that authenticates the communicating parties, negotiates cryptographic modes and parameters, and establishes shared keying material." / "A record protocol ... uses the parameters established by the handshake protocol to protect traffic" |
| 20 | MDN: sides agree on TLS version, cipher suite, secret key, optional mutual authentication | 5 | PASS | "Client and server agree on which version of TLS to use." / "agree on the cipher suite" / "Optionally, client and server authenticate each other." / "agree on a secret key" |
| 21 | After the handshake HTTP headers and bodies are encrypted | 5 | PASS | "use the secret key to encrypt and decrypt any messages, including HTTP headers as well as bodies" |
| 22 | A site needs a digital certificate with a signed copy of the public key; ties the keys to the domain name | 5 | PASS | "your website must have a digital certificate, which contains a digitally signed copy of the public key ... This binds the website's keys to their domain name" |
| 23 | A CA issues the certificate; Let's Encrypt is an example | 5 | PASS | "Let's Encrypt is a widely used nonprofit Certification Authority which issues free TLS certificates." |
| 24 | Server sends Certificate and CertificateVerify; CertificateVerify signs the whole handshake with the matching private key | 1 | PASS | "CertificateVerify: A signature over the entire handshake using the private key corresponding to the public key in the Certificate message." |
| 25 | Server sends CertificateRequest if it wants a client certificate; leaves it out if not | 1 | PASS | "This message is omitted if client authentication is not desired." |
| 26 | Client then sends its own Certificate and CertificateVerify | 1 | PASS (note) | RFC 8446 s4.4.2 lets a client without a suitable certificate send an empty certificate list. The page describes the normal mTLS case, so I accept it. A hedge ("a client that has a certificate") would be safer. |
| 27 | TLS leaves to the higher protocol how to interpret the certificates | 1 | PASS | "how to interpret the authentication certificates exchanged are left to the judgment of the designers and implementors of protocols that run on top of TLS" |
| 28 | RFC 8705 shows one design for OAuth 2.0; the authorization server decides by policy whether a client must use mTLS | 4 | PASS | "The requirement of mutual TLS for client authentication is determined by the authorization server, based on policy or configuration for the given client" |
| 29 | Client sends `client_id`; server checks the certificate against what it expects; missing or wrong certificate gives `invalid_client` | 4 | PASS | "If no certificate is presented, or that which is presented doesn't match that which is expected for the given \"client_id\", the authorization server returns ... the \"invalid_client\" error code" |
| 30 | RFC 8705 has two methods (PKI, self-signed) | 4 | PASS | "two distinct methods of using mutual-TLS X.509 client certificates as client credentials" |
| 31 | PKI method: validates the chain, matches one subject name; revocation checking is a deployment decision | 4 | PASS | "It relies on a validated certificate chain [RFC5280] and a single subject distinguished name (DN) or a single subject alternative name (SAN)" / "is a deployment decision at the discretion of the authorization server" |
| 32 | Self-signed method: client registers certificates; no chain validation; accepts a matching registered certificate | 4 | PASS | "the client's certificate chain is not validated by the server in this case. The client is successfully authenticated if the certificate that it presented during the handshake matches one of the certificates configured or registered" |
| 33 | RFC 8705 can bind an access token to the client certificate; resource server must check the match; mismatch gives HTTP 401 and `invalid_token` | 4 | PASS | "the authorization server is able to bind the issued access token to the client certificate" / "MUST verify that the certificate matches ... rejected with an error ... HTTP 401 status code and the \"invalid_token\" error code" |
| 34 | Table: SSL 3.0 must not be used; must not be negotiated from any TLS version | 2 | PASS | RFC 7568 s3 (quote in row 9) |
| 35 | Table: TLS 1.0 and 1.1 are deprecated | 3 | PASS | RFC 8996 abstract: "This document formally deprecates Transport Layer Security (TLS) versions 1.0 (RFC 2246) and 1.1 (RFC 4346)." |
| 36 | Table: TLS 1.0 and 1.1 lack current algorithms | 3 | PASS | "These versions lack support for current and recommended cryptographic algorithms and mechanisms" |
| 37 | Table: TLS 1.0 and 1.1 must not be used | 3 | PASS | s4: "TLS 1.0 MUST NOT be used." / s5: "TLS 1.1 MUST NOT be used." |
| 38 | Table: TLS 1.2 obsoleted by TLS 1.3 | 1, 5 | PASS | RFC 8446 s1: "This document supersedes and obsoletes previous versions of TLS, including version 1.2" |
| 39 | Table: MDN says some sites still use TLS 1.2 | 5 | PASS | "TLS 1.2 is still used by some websites" |
| 40 | Table: TLS 1.3 is the current version (August 2018) and most widely used | 1, 5 | PASS | RFC 8446 header "August 2018"; MDN: "The current version of TLS is 1.3 (RFC 8446), and this is the most widely-used version." |
| 41 | RFC 8996: integrity and signatures of TLS 1.0/1.1 depend on SHA-1; only upgrade path is a newer version | 3 | PASS | "The integrity of both TLS 1.0 and TLS 1.1 depends on a running SHA-1 hash" / "the authentication of the handshake depends on signatures made using a SHA-1 hash" / "making the only upgrade path the use of a newer protocol version" |
| 42 | RFC 8996: removing old versions reduces attack surface and chance of misconfiguration | 3 | PASS | "Removing support for older versions from implementations reduces the attack surface, reduces opportunity for misconfiguration" |
| 43 | Example (orders/ledger): marked as the tutorial's own | none | PASS | Marked "This example is the tutorial's own." States no source fact. |
| 44 | Mistake: TLS protects data in transit between two endpoints | 1 | PASS | See rows 3 and 5. |
| 45 | Mistake: TLS does not cover how the application treats the data, or what a valid certificate means for the application | 1 | FAIL | RFC 8446 supports only the second half ("how to interpret the authentication certificates exchanged are left to ... protocols that run on top"). It says nothing about how an application treats data. The sentence is then called the tutorial's own advice, but it carries a cite, so it reads as sourced. Drop the cite from the first half, or move that half into the own-advice sentence. |
| 46 | Mistake: RFC 8996 says TLS 1.0 and 1.1 must not be used | 3 | PASS | Rows 37. |
| 47 | Mistake: mixed content gives the script no protection; browsers upgrade or block | 5 | PASS | "the subresources don't get the protection that HTTPS offers" / "they either upgrade the load request to use HTTPS, or block the request entirely" |
| 48 | Mistake: in RFC 8705 the server accepts a self-signed certificate only when it matches a registered one | 4 | PASS | Row 32. The page says its scope is RFC 8705 and says it does not cover browsers. |
| 49 | Key words: TLS, SSL, HTTPS, handshake, cipher suite, digital certificate, CA, CertificateRequest, certificate-bound token | 1, 2, 4, 5 | PASS | Each matches the rows above. |
| 50 | Key words: mTLS = client also sends a certificate and proves it holds the private key, cited to RFC 8446 and RFC 8705 | 1, 4 | FAIL | Content follows RFC 8446 (Certificate plus CertificateVerify), but cite 4 is wrong for a general definition. RFC 8705 defines mutual TLS only for OAuth 2.0 client authentication and certificate-bound tokens ("this document standardizes enhanced security options for OAuth 2.0 utilizing client-certificate-based mutual TLS"). RFC 8446 does not use "mTLS" as a defined term. Cite 1 only, and let the tutorial say the name is its own short form; or add "in OAuth 2.0 (RFC 8705)" and keep cite 4 for that scope. |

Topic checks:
- SSL 3.0 is cited to RFC 7568 (rows 9, 34) and RFC 8446 (row 10). TLS 1.0/1.1 are cited to RFC 8996 only. TLS 1.3 facts are cited to RFC 8446 (with MDN for "most widely used"). All version rows match their RFC.
- RFC 8705 scope is stated correctly in the body ("one such design for OAuth 2.0"). Only the Key words row (50) states it as a general definition.
- Security page: no attack steps. The page names no attack technique and gives no tool commands. The tester checks only ask for refusals of old versions and missing or wrong certificates.

## Structure check

| Check | Result |
|---|---|
| Sources are https, 5 of 5 cited at least once, every `<Cite n>` (1 to 5) has a source | PASS |
| Sections in order: In plain words, When you need it, (How it works, optional), A real-life example, Common mistakes, What a tester can check, Key words (last) | PASS |
| Tip callout has no `<Cite>`; no `<Voices>` | PASS |
| `#` title is "SSL, TLS, and mTLS" | PASS |
| No blog, forum, Wikipedia, AI summary, or systemdesignbangla.com source (IETF RFCs and MDN) | PASS |
| Prose word count (no export block, tables, code, Cite tags; includes the tip callout) | about 1050 to 1080 words: PASS (700 to 1100) |
| Security page: no step-by-step attack instructions | PASS |
| Copy check: no run of 8 or more words copied (8-word window against all 5 sources, tables included) | FAIL: 2 runs |

Copy runs found:
1. Table, Confidentiality row: "TLS does not hide the length of the data." copies "TLS does not hide the length of the data it transmits" from RFC 8446 (9 words). Reword, for example "TLS does not conceal how much data is sent."
2. "When you need it": "MDN says this is rare on the web outside some specialized applications." copies MDN "is rare on the web outside some specialized applications" (9 words). Reword, for example "MDN says client authentication is uncommon on public websites, apart from a few special uses."

Failing rows: 45, 50, plus the 2 copy runs. Total 4.

## Re-check (after the writer fixed 4 FAILs)

| # | Changed text | Cite n | Verdict | Quote or reason |
|---|---|---|---|---|
| 45 | "The RFC leaves it to the protocol above TLS to decide how to read the certificates that were exchanged" then "The rest of this point is the tutorial's own advice" | 1 | PASS | RFC 8446 s1: "how to interpret the authentication certificates exchanged are left to the judgment of the designers and implementors of protocols that run on top of TLS". The data-treatment half is now marked as own advice and has no cite. |
| 50 | mTLS: "the client also authenticates with a certificate, in addition to the server" | 1 | PASS | RFC 8446 s1: "The server side of the channel is always authenticated; the client side is optionally authenticated." and "CertificateRequest: if certificate-based client authentication is desired". RFC 8446 does not use the name "mTLS", but the row now states only the mechanism and cites the RFC for that. |
| 50b | "RFC 8705 uses it for OAuth 2.0 client authentication" | 4 | PASS | RFC 8705 title and s2: "Mutual TLS for OAuth Client Authentication". Scope is now stated correctly (it also covers certificate-bound tokens, which the body already says). |
| 5 | Confidentiality cell: "The size of the data is not hidden." | 1 | PASS (note) | RFC 8446: "TLS does not hide the length of the data it transmits, though endpoints are able to pad TLS records". The padding hedge is dropped, but the claim is still true of TLS as such. Adding "unless the endpoints pad it" would be exact. |
| 17 | "MDN says that on the web it appears mostly in specialized applications" | 5 | PASS | MDN: "is rare on the web outside some specialized applications" |

Copy check on the whole page again (8-word window, 5 sources, tables included): 0 runs. Prose word count: about 1090 (includes the tip callout; limit 1100). All other rows are unchanged and keep their verdicts.

Re-check 2: line 28 "The size of the data is not hidden, unless the endpoints pad it." PASS. RFC 8446 s1: "TLS does not hide the length of the data it transmits, though endpoints are able to pad TLS records in order to obscure lengths". No copied run of 8 or more words.

Open FAILs: 0
