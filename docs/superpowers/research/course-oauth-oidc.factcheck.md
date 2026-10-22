# Fact-check: course/oauth-oidc

Page: `content/course/oauth-oidc.mdx`. Title: "OAuth 2.0 and OpenID Connect" (matches).
Sources opened by the reviewer: RFC 6749 (S1), RFC 7636 (S2), RFC 9700 (S3), OpenID Connect Core 1.0 (S4), as plain text in `/tmp/claude-1000/fc4-oauth-oidc/`.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | OAuth 2.0 lets a third-party app get limited access to a protected HTTP resource | 1 | PASS | "enables a third-party application to obtain limited access to an HTTP service" (S1 abstract); S4: "limited access to HTTP resources" |
| 2 | The app does not use the user's password; it gets an access token | 1 | PASS | "Instead of using the resource owner's credentials to access protected resources, the client obtains an access token" |
| 3 | An access token is a string for a specific scope, lifetime, other access attributes | 1 | PASS | "a string denoting a specific scope, lifetime, and other access attributes" |
| 4 | OIDC is a thin identity layer on OAuth 2.0; client checks user identity based on the authentication an authorization server did | 4 | PASS | "a simple identity layer on top of the OAuth 2.0 protocol. It enables Clients to verify the identity of the End-User based on the authentication performed by an Authorization Server". "thin" is a paraphrase of "simple". |
| 5 | The layer exists because OAuth 2.0 defines no standard way to give identity information | 4 | PASS | "do not define standard methods to provide identity information" (S4 intro). The causal "exists because" is the page's reading; the spec gives it as background. |
| 6 | Summary: access token = what may the app do; ID token = who signed in and when | none | PASS (note) | Unmarked summary of claims 3 and 25. "when" is carried by `iat` and the optional `auth_time`. Acceptable as a recap of cited text above it. |
| 7 | User approves at the authorization server; app never sees the password | 1 | PASS | "without sharing her username and password with the printing service" |
| 8 | OIDC is asked for with the `openid` scope | 4 | PASS | "OpenID Connect requests MUST contain the openid scope value." |
| 9 | OAuth defines four roles | 1 | PASS | "OAuth defines four roles" |
| 10 | Resource owner: can grant access; often the user | 1 | PASS | "An entity capable of granting access to a protected resource. When the resource owner is a person, it is referred to as an end-user." |
| 11 | Resource server hosts protected resources, accepts access tokens | 1 | PASS | "The server hosting the protected resources, capable of accepting and responding to protected resource requests using access tokens." |
| 12 | Client: makes requests for the owner with approval; may run on server, desktop, other device | 1 | PASS | "An application making protected resource requests on behalf of the resource owner and with its authorization ... server, a desktop, or other devices" |
| 13 | Authorization server issues access tokens after it authenticates the owner and gets authorization | 1 | PASS | "issuing access tokens to the client after successfully authenticating the resource owner and obtaining authorization" |
| 14 | In OIDC the authorization server is an OP and the client is an RP | 4 | PASS | "OAuth 2.0 Authentication Servers implementing OpenID Connect are also referred to as OpenID Providers (OPs). OAuth 2.0 Clients using OpenID Connect are also referred to as Relying Parties (RPs)." |
| 15 | Code flow: client sends user to the AS via the browser; server sends user back with a code | 1 | PASS | S1 4.1: client directs the owner to the authorization endpoint; server redirects the user-agent back with the code. |
| 16 | PKCE adds a secret only the real client knows | 2 | PASS | "the attacker would not know this one-time key" |
| 17 | Request has `response_type=code`, `client_id`, often `redirect_uri` and `scope`; `state` recommended | 1 | PASS | `redirect_uri` "OPTIONAL", `scope` "OPTIONAL", `state` "RECOMMENDED" |
| 18 | Server may ignore part of the scope; then must tell the client the granted scope | 1 | PASS | "MAY fully or partially ignore the scope ... MUST include the "scope" response parameter" |
| 19 | The code must expire shortly; at most 10 minutes recommended | 1 | PASS | "MUST expire shortly ... A maximum authorization code lifetime of 10 minutes is RECOMMENDED." |
| 20 | A code used twice: server must refuse, and should revoke tokens when possible | 1 | PASS | "MUST deny the request and SHOULD revoke (when possible) all tokens previously issued based on that authorization code" |
| 21 | `state` comes back unchanged; client can block CSRF | 1 | PASS | "The exact value received from the client." "SHOULD be used for preventing cross-site request forgery" |
| 22 | Public clients (for example phone apps) can lose a code to a malicious app on the same device | 2 | PASS | "public clients are susceptible to the authorization code interception attack" ... "a malicious app to register itself as a handler for the custom scheme" |
| 23 | Client makes a new `code_verifier` per request; sends `code_challenge` in the authorization request and the verifier in the token request; server transforms and compares; denies if different | 2 | PASS | "A unique code verifier is created for every authorization request, and its transformed value, called code challenge, is sent to the authorization server" ... "If the values are not equal, an error response indicating "invalid_grant" ... MUST be returned." |
| 24 | S256 = SHA-256 hash, base64url | 2 | PASS | "code_challenge = BASE64URL-ENCODE(SHA256(ASCII(code_verifier)))" |
| 25 | A thief who has only the code cannot redeem it | 2 | PASS | "the attacker would not know this one-time key, since it is sent over TLS" |
| 26 | With OIDC the request includes `openid` | 4 | PASS | See row 8. |
| 27 | The response also has an ID token: a JWT with claims about the sign-in | 4 | PASS | "The ID Token is a security token that contains Claims about the Authentication of an End-User ... represented as a JSON Web Token (JWT)" |
| 28 | Required claims: `iss`, `sub`, `aud`, `exp`, `iat` | 4 | PASS | Each is marked "REQUIRED." in S4 section 2 |
| 29 | `sub` is unique at the issuer and never reassigned | 4 | PASS | "A locally unique and never reassigned identifier within the Issuer for the End-User" |
| 30 | `aud` must contain the client's `client_id` | 4 | PASS | "It MUST contain the OAuth 2.0 client_id of the Relying Party as an audience value." |
| 31 | `nonce` claim must equal the value the client sent | 4 | PASS (note) | "Clients MUST verify that the nonce Claim Value is equal to the value of the nonce parameter sent in the Authentication Request." The spec applies this only if a nonce was sent; the page wording ("that the client sent") implies it. |
| 32 | Client must check issuer, audience, expiry, nonce, signature | 4 | PASS (note) | S4 3.1.3.7 has MUST for iss, aud, exp, signature, and for nonce "If a nonce value was sent". Same implied condition as row 31. |
| 33 | The spec lets TLS to the token endpoint stand in for the signature check | 4 | PASS | "the TLS server validation MAY be used to validate the issuer in place of checking the token signature" |
| 34 | RFC 9700 updates the advice of RFC 6749 because use and technology changed | 3 | PASS | "It updates and extends the threat model and security advice given in RFCs 6749 ..." "Technology has changed." |
| 35 | Public clients must use PKCE; recommended for confidential clients | 3 | PASS | "Public clients MUST use PKCE" and "For confidential clients, the use of PKCE is RECOMMENDED". Strength kept (MUST / RECOMMENDED). |
| 36 | Clients should use S256: it does not show the verifier in the request | 3 | PASS | "clients SHOULD use PKCE code challenge methods that do not expose the PKCE verifier in the authorization request ... Currently, S256 is the only such method." |
| 37 | Clients must prevent CSRF; may rely on PKCE if the server supports it; else one-time `state` | 3 | PASS | "Clients MUST prevent Cross-Site Request Forgery (CSRF). ... Clients that have ensured that the authorization server supports ... PKCE MAY rely on the CSRF protection provided by PKCE ... Otherwise, one-time use CSRF tokens carried in the state parameter ... MUST be used" (the OIDC `nonce` option is left out, not wrong) |
| 38 | Server must compare redirect URIs by exact string matching | 3 | FAIL (fixed, see Re-check) | Stated without the exception. Source: "authorization servers MUST utilize exact string matching except for port numbers in localhost redirection URIs of native apps". Also applies to "pre-registered URIs". Fix: add the localhost-port exception. |
| 39 | Clients should not use the implicit grant, which puts the access token in the authorization response; spec calls it open to leakage and replay; should use the code response type | 3 | FAIL (fixed, see Re-check) | Hedge dropped. Source: "clients SHOULD NOT use the implicit grant ... unless access token injection in the authorization response is prevented and the aforementioned token leakage vectors are mitigated." "vulnerable to access token leakage and access token replay" and "SHOULD instead use the response type code" are correct. Fix: add the "unless" condition. |
| 40 | The password grant must not be used because it shows the user's credentials to the client | 3 | PASS | "MUST NOT be used. This grant type insecurely exposes the credentials of the resource owner to the client." |
| 41 | Example text is the tutorial's own (marked) | none | PASS | The section says "This example is the tutorial's own." It states no source fact. |
| 42 | Mistake: OAuth alone gives no standard information on who authenticated | 4 | PASS | "do not define standard methods to provide identity information. Notably, without profiling OAuth 2.0, it is incapable of providing information about the authentication of an End-User." |
| 43 | Mistake: ID token made for the client, `aud` contains client id; access token is for the resource server; "tutorial's own advice" marked | 4, 1 | PASS | Rows 30 and 3 and 11. The advice sentence is marked as the tutorial's own. |
| 44 | Mistake: skipping PKCE or `state`, using implicit or password grant, loose redirect matching "all go against" the best practice | 3 | FAIL (fixed, see Re-check) | Overgeneral. S3 allows a client to skip PKCE for CSRF if it has `state` (and a confidential OIDC client may use `nonce` instead of PKCE for code injection), and it allows skipping `state` when PKCE is used. Implicit is SHOULD NOT with an "unless". Fix: say "Skipping both PKCE and `state`" or limit it to the public-client case and add the implicit "unless". |
| 45 | Mistake: the client must check the ID token | 4 | PASS | "Clients MUST validate the ID Token in the Token Response" |
| 46 | Key words: Authorization is what OAuth 2.0 covers; Authentication is added by OIDC on top | 1, 4 | PASS | "OpenID Connect implements authentication as an extension to the OAuth 2.0 authorization process." |
| 47 | Key words: access token usually opaque to the client | 1 | PASS | "The string is usually opaque to the client." |
| 48 | Key words: scope is a list of strings defined by the server | 1 | PASS | "list of space-delimited, case-sensitive strings. The strings are defined by the authorization server." |
| 49 | Key words: authorization code is short-lived and single-use | 1 | PASS | Rows 19 and 20. |
| 50 | Key words: PKCE, `code_verifier`, `code_challenge` definitions | 2 | PASS | Rows 16 and 23. |
| 51 | Key words: `state` used against CSRF | 1 | PASS | Row 21. |
| 52 | Key words: ID token is a JWT with claims about the sign-in; RP is the client of an OP; `nonce` links a client session to an ID token | 4 | PASS | "String value used to associate a Client session with an ID Token" |
| 53 | Key words: implicit grant gives the access token in the authorization response; the best practice says not to use it | 3 | FAIL (fixed, see Re-check) | "says not to use it" is stronger than "SHOULD NOT ... unless ...". Fix: "says clients should not use it" (and keep the condition or drop the absolute). |

## Separation of OAuth and OIDC

No sentence says OAuth 2.0 itself authenticates the user. The only authentication mention in the OAuth sections is the RFC 6749 role text ("after successfully authenticating the resource owner"), which is a fact of S1. No OIDC feature (ID token, `openid` scope, `nonce`, RP/OP) is attributed to RFC 6749. Role and grant names match RFC 6749 (resource owner, resource server, client, authorization server; authorization code, implicit, resource owner password credentials).

## Structure check

- Sources: 4 entries, all `https://`, all cited (1, 2, 3, 4). Every `<Cite n>` has a source (1 to 4).
- Copy check: normalised 8-word runs of the page (table cells included, code fences excluded) against the four sources. No match. PASS.
- Sections in order: In plain words, When you need it, (The roles, How it works, What the best practice says), A real-life example, Common mistakes, What a tester can check, Key words (last). Extra `##` sections are allowed by the spec. PASS.
- Tip callout has no `<Cite>` and is marked as the tutorial's own advice. No `<Voices>`. PASS.
- `#` title is "OAuth 2.0 and OpenID Connect". PASS.
- Sources: RFCs and the OpenID Foundation spec. No blog, forum, Wikipedia, AI summary, or systemdesignbangla.com. PASS.
- Prose word count: about 1090 (excluding the export block, tables, code, and Cite tags; the lede and the tip callout are counted). Inside 700 to 1100, but only about 10 words of room. Any fix that adds words must cut words elsewhere.
- Security page: the tester tips are checks on a system the reader owns, with a scope note. No step-by-step attack instructions. PASS.

## Re-check (after the writer's fixes)

| # | New text | Verdict | Reason |
|---|---|---|---|
| 38 | "The server must compare redirect URIs by exact string matching. Only the port of a native app's localhost URI may differ." | PASS | S3: "MUST utilize exact string matching except for port numbers in localhost redirection URIs of native apps" |
| 39 | Implicit: "should not use ... It makes an exception when injection is prevented and the leak paths are closed. Use the code response type instead." | PASS | S3: "SHOULD NOT use the implicit grant ... unless access token injection ... is prevented and the aforementioned token leakage vectors are mitigated"; "SHOULD instead use the response type code". The closing "Use ... instead" is an imperative of a SHOULD, but it follows "should not", so strength is kept. |
| 44 | "Public clients without PKCE, no CSRF defense, loose redirect URI matching, and the password grant break its must rules. The implicit grant goes against its advice." | PASS | S3 has MUST for public-client PKCE, MUST for CSRF prevention, MUST for exact redirect match, MUST NOT for the password grant; implicit is SHOULD NOT. |
| 53 | "The best practice recommends against it" | PASS | Matches SHOULD NOT. |
| 37 (changed) | CSRF bullet adds "or on the OpenID Connect `nonce`" | PASS | S3: "In OpenID Connect flows, the nonce parameter provides CSRF protection." |

Other changed text, checked:
- "RFC 9700 updates the advice of RFC 6749": PASS ("updates and extends the threat model and security advice given in RFCs 6749"). The dropped "because" clause leaves no unsupported claim.
- "(10 minutes at most is recommended)", "Then it must report the granted scope", "Add OpenID Connect.": PASS (rows 18, 19, 42).
- "Use each for its own job (tutorial advice)": the marker is present. PASS.
- Example: still marked "This example is the tutorial's own" and states no source fact. PASS.
- Tester callout: still marked as the tutorial's own advice, no `<Cite>`. The trims removed the expected result from "Wrong verifier", "Scope", and "User says no" (for example, "the server should refuse"). It is still understandable and states no fact, so not a FAIL. The writer may restore a few words if room allows.
- Copy check on the whole page, 8-word runs against the four sources: 0 hits.
- Prose word count: about 1085 (limit 1100). PASS.

Open FAILs: 0
