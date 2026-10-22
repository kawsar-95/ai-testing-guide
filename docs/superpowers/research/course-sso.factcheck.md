# Fact-check: Single Sign-On (`content/course/sso.mdx`)

Reviewer did not write the page. Sources fetched on 2026-10-22 into `/tmp/claude-1000/fc4-sso/` (NIST SP 800-63C-4 HTML, OASIS SAML 2.0 Technical Overview HTML, OIDC Core 1.0 errata set 2 HTML). Quotes are from the fetched text, not from the research notes.

Source 1 = NIST SP 800-63C-4 (published 26 Aug 2025). Source 2 = OASIS SAML V2.0 Technical Overview, Committee Draft 02, 25 March 2008. Source 3 = OpenID Connect Core 1.0 incorporating errata set 2 (15 Dec 2023).

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | SSO is what the user sees: one login, many apps | 1 | PASS | "The federation process allows the subscriber to obtain services from multiple RPs without the need to hold or maintain separate authenticators at each RP. This process is sometimes known as single sign-on." |
| 2 | NIST defines federation as authenticating a user to an app without the app checking the user's login factors itself | 1 | PASS | "Federation is the process of authenticating a subscriber to a relying party (RP) without the RP directly verifying the subscriber's authenticators." |
| 3 | NIST says federation is "sometimes known as" SSO | 1 | PASS | "This process is sometimes known as single sign-on." |
| 4 | The user is called subscriber by NIST and logs in | 1 | PASS | Same intro: "authenticating a subscriber to a relying party". |
| 5 | The IdP checks the login and sends a statement (the assertion) about the user | 1 | PASS | "The IdP sends an assertion triggered by an authentication event of the subscriber to the RP. An assertion is a verifiable statement about the subscriber account to the RP." Note: NIST also allows an IdP that is a wallet and does not verify authenticators ("works in one of two modes"); the page describes the general-purpose IdP. Not a FAIL. |
| 6 | The RP is the app; it verifies the assertion, starts its own session, lets the user in | 1 | PASS | "The RP verifies the assertion provided by the IdP, creates an authenticated session with the subscriber, and grants the subscriber access to the RP's functions." |
| 7 | The user needs no separate login method for each app | 1 | PASS | "without the need to hold or maintain separate authenticators at each RP" |
| 8 | SAML calls the app a service provider (SP) | 2 | PASS | "SAML defines the roles called identity provider (IdP) and service provider (SP)." |
| 9 | OIDC calls the IdP an OpenID Provider (OP) | 3 | PASS | "OpenID Provider (OP) OAuth 2.0 Authorization Server that is capable of Authenticating the End-User and providing Claims to a Relying Party" |
| 10 | The assertion is a SAML Assertion in SAML and an ID Token in OIDC | 1 | PASS | "Examples of assertions used in federation protocols include the ID Token in OpenID Connect [OIDC] and the Security Assertion Markup Language [SAML] Assertion format." |
| 11 | Federation is generally preferred when app and account are not run in one security domain, because the app need not issue another login method | 1 | PASS | "generally the preferred approach to authentication when the RP and the subscriber account are not administered together under a common security domain, as it eliminates the need for the RP to issue an additional authenticator" |
| 12 | It can also help inside one domain, for central account management | 1 | PASS | "federation can be still applied within a single security domain for a variety of benefits, including centralized account management and technical integration." |
| 13 | SAML: cross-domain web sign-on is arguably the most important use case | 2 | PASS | "Multi-domain web single sign-on is arguably the most important use case for which SAML is applied." Hedge "arguably" kept. |
| 14 | The parties first agree on a trust agreement (roles, terms of their work) | 1 | FAIL (fixed, see Re-check: PASS) | Roles and terms are in the source ("trust agreements define which parties are fulfilling which roles, the terms under which the parties operate"). But "first" is stronger than NIST. At FAL1 "the trust agreement MAY be established by the subscriber during the federation transaction", and for general-purpose IdPs it is established "either: as the result of an agreement by the federated parties prior to the federation transaction or as the result of decision or action by the subscriber during the federation transaction". Fix: drop "first", or say "usually before the first login" and note the subscriber-driven case. |
| 15 | SAML SP-initiated flow is the more common one | 2 | PASS | "a more common scenario starts with a user visiting an SP site ... this scenario is referred to as SP-initiated web SSO." |
| 16 | Step 1: no session; app saves the address of the page | 2 | PASS | "The user does not have a valid logon session ... The SP saves the requested resource URL in local state information" |
| 17 | Step 2: app sends the browser to the IdP with an authentication request | 2 | PASS | "The SP sends an HTTP redirect response to the browser ... together with an `<AuthnRequest>` message" |
| 18 | Step 3: IdP asks for credentials if no suitable login | 2 | PASS | "determines whether the user has an existing logon security context ... that meets the default or requested ... authentication policy requirements. If not, the IdP interacts with the browser to challenge the user to provide valid credentials." |
| 19 | Step 4: IdP builds a signed assertion; browser posts it to the app | 2 | PASS | "Since a POST binding is going to be used, the assertion is digitally signed and then placed within a SAML `<Response>` message ... The browser ... issues an HTTP POST request to send the form to the SP's Assertion Consumer Service." |
| 20 | Step 5: app validates signature, creates local session, sends user to saved page | 2 | PASS | "The digital signature on the SAML assertion must first be validated ... to create a local logon security context ... retrieves the local state ... sends an HTTP redirect response ... to access the originally requested resource" |
| 21 | An assertion has a subject, conditions that limit its use, and statements | 2 | FAIL (fixed, see Re-check: PASS) | Source hedges the subject: "usually contains a subject of the assertion (if not present, the identity determined through other means)". Page says "has a subject" with no hedge. Conditions and statements are supported ("conditions used to validate the assertion, and assertion statements"). Fix: "usually has a subject". |
| 22 | One statement kind says how and when the user logged in | 2 | PASS | "Authentication statements ... describe the particular means used to authenticate the user and the specific time at which the authentication took place." |
| 23 | Another statement kind carries details such as a group | 2 | PASS | Attribute statements "contain specific identifying attributes about the subject"; the overview's example assertion says the subject "is a member of the 'engineering' group". |
| 24 | OIDC is an identity layer on top of OAuth 2.0 | 3 | PASS | "OpenID Connect 1.0 is a simple identity layer on top of the OAuth 2.0 protocol." |
| 25 | Code flow: OP logs user in, sends back a code; app swaps code for an ID Token | 3 | PASS | Section 3.1 Authorization Code Flow; Token Endpoint returns the ID Token ("Successful Token Response ... ID Token value associated with the authenticated session"). |
| 26 | In the code flow the assertion travels on the back channel (direct link app to provider) | 1 | PASS | "In the authorization code flow ... the assertion (i.e., the ID Token) is presented in the back channel in exchange for the assertion reference (i.e., the authorization code)." Back channel: "a direct connection between the RP and IdP that does not involve the subscriber directly". |
| 27 | The ID Token is a JWT | 3 | PASS | "ID Token JSON Web Token (JWT) ... that contains Claims about the Authentication event." |
| 28 | Claims: iss (issuer), sub (user), aud (audience), exp (end time), iat (issue time) | 3 | PASS | "iss REQUIRED. Issuer Identifier", "sub REQUIRED. Subject Identifier", "aud REQUIRED. Audience(s)", "exp REQUIRED. Expiration time", "iat REQUIRED. Time at which the JWT was issued." |
| 29 | NIST lists the checks: signature, issuer, time window, audience, nonce when sent, replay | 1 | PASS | "The RP SHALL validate the assertion by checking that all of the following are true: Signature validation ... Issuer verification ... Time validation ... Audience restriction ... Nonce: Ensure that the cryptographic nonce included in the RP's request (if applicable) ... Transaction terms ... Assertion identifier: Ensure that the assertion has not been replayed". The page does not claim the list is complete (it leaves out "transaction terms") and does not weaken the SHALL. |
| 30 | OIDC asks for the same kind of checks | 3 | PASS | 3.1.3.7: iss must match, aud must contain client_id, signature validated, "current time MUST be before the time represented by the exp Claim", nonce "MUST be present and its value checked", "SHOULD check the nonce value for replay attacks." |
| 31 | The audience check stops an assertion made for one app from working at another | 1 | PASS | "All RPs SHALL check that the audience of an assertion contains an identifier for their RP to prevent the assertion injection and replay of an assertion generated for one RP at another RP." |
| 32 | A short validity window lowers the risk of theft or replay | 1 | PASS | "Long-lived assertions have a greater risk of being stolen or replayed; a short assertion validity time window mitigates this risk." |
| 33 | `sub` is unique only inside one issuer | 3 | PASS | "A locally unique and never reassigned identifier within the Issuer for the End-User". NIST agrees: RP "SHALL NOT treat subject identifiers as inherently globally unique across IdPs." |
| 34 | IdP and app keep their own sessions; the assertion's validity time is not the session length | 1, 3 | PASS | NIST: "the RP manages its sessions separately from any sessions at the IdP ... The validity time window of an assertion ... does not indicate the lifetime of the authenticated session at the IdP or RP." OIDC exp: "...time is unrelated the lifetime of the authenticated session between the RP and the OP." |
| 35 | When the IdP ends its session, app sessions do not necessarily end | 1 | PASS | "The IdP terminating the subscriber's session at the IdP will not necessarily terminate any sessions that subscriber might have at downstream RPs." |
| 36 | IdP and app may send each other end-session events if the protocol supports it | 1 | PASS | "The RP and IdP MAY communicate end-session events to each other if supported by the federation protocol or through shared signaling". Strength kept as "may". |
| 37 | The app may end its own session at any time | 1 | PASS | "The authenticated session MAY be ended by the RP at any time." |
| 38 | SAML Single Logout aims to end all active sessions of a user at nearly the same time | 2 | PASS | "Single Logout Protocol: Defines a mechanism to allow near-simultaneous logout of active sessions associated with a principal." |
| 39 | In the example, app ends its local session, asks IdP to log user out; IdP ends its session, sends logout requests to other apps | 2 | PASS | "The SP sp1.example.com destroys the local authentication session state ... then sends the identity provider a SAML `<LogoutRequest>` ... The identity provider ... destroys any local session information ... sends a `<LogoutRequest>` message to those providers." |
| 40 | The overview warns the result cannot be guaranteed, because the browser can interrupt the visits | 2 | PASS | "user interaction with the browser might interrupt the process of visiting each participant and thus, the result of the logout process cannot be guaranteed." (Said of the front-channel bindings; page wording is close enough.) |
| 41 | OIDC Core has no logout flow; it lists separate specifications for logout | 3 | PASS | I searched the whole text of OIDC Core for "logout". It appears only in section 15 "Related Specifications": "These related OPTIONAL specifications MAY be used in combination with this specification to provide additional functionality: ... RP-Initiated Logout 1.0 ... Session Management 1.0 ... Front-Channel Logout 1.0 ... Back-Channel Logout 1.0." The page does not say Core has a logout flow. |
| 42 | Common mistake: logout at one app is not logout everywhere (sessions separate; single logout not guaranteed) | 1, 2 | PASS | Same quotes as rows 34, 35, 40. |
| 43 | NIST forbids using the assertion expiry as the session length | 1 | PASS | "Assertion validity time windows SHALL NOT be used to limit the session at the RP." |
| 44 | Not checking audience: app may accept an assertion made for another app | 1 | PASS | Row 31 (inference from the same SHALL). |
| 45 | Key word Federation | 1 | PASS | Row 2. |
| 46 | Key word IdP (OIDC says OpenID Provider) | 1, 3 | PASS | Rows 5, 9. |
| 47 | Key word RP (SAML says SP) | 1, 2 | PASS | "The RP processes assertions from the IdP and provides the service that the subscriber is trying to access." Row 8. |
| 48 | Key word Assertion | 1 | PASS | "A verifiable statement about the subscriber account to the RP" and "information about an authentication event". |
| 49 | Key word ID Token: OIDC assertion, a JWT with claims about the login | 3 | PASS | Row 27. |
| 50 | Key word Audience | 1, 3 | PASS | NIST "Audience identifier: An identifier for the party intended to consume the assertion"; OIDC "Audience(s) that this ID Token is intended for." |
| 51 | Key word Nonce: ties a request to its ID Token, helps against replay | 3 | PASS | "String value used to associate a Client session with an ID Token, and to mitigate replay attacks." |
| 52 | Key word Trust agreement: conditions under which parties may take part | 1 | PASS | "This policy is governed by a set of terms that establish the permission to connect." |
| 53 | Key word Back channel: direct link, no browser in the middle | 1 | PASS | "Through a direct connection between the RP and IdP that does not involve the subscriber directly." |
| 54 | Key word Single logout: the SAML way to end all sessions of a user at once | 2 | FAIL (fixed, see Re-check: PASS) | Source says "near-simultaneous" and "near real-time", and "the result of the logout process cannot be guaranteed". "At once" drops the hedge and conflicts with the page's own Logout section. Fix: "to end the sessions of a user at nearly the same time". |

Text marked as the tutorial's own and checked: the lede, the "A real-life example" section (marked "This example is the tutorial's own"), and the tip callout (marked "the tutorial's own advice, not a claim of a source"). None states a fact as if a source said it. The callout has no `<Cite>`.

Topic-specific checks:
- NIST normative strength: SHALL NOT (row 43) is rendered "forbids"; MAY (rows 36, 37) is rendered "may"; "generally the preferred" (row 11) keeps its hedge; the check list (row 29) is not weakened. Federation terms (IdP, RP, assertion, subscriber, trust agreement, back channel) match NIST. One normative-strength issue: row 14 ("first").
- SAML: the page never calls the overview or SAML 2.0 final. The source title in `page.sources` says "Committee Draft 02", and the text calls it "the overview". PASS.
- Logout: the page does not say OIDC Core has a logout flow (row 41).
- Link `/course/oauth-oidc/` is to a page registered later in this delivery. Not checked, not a FAIL.
- Security: no attack steps. The page lists checks and test ideas only.

## Structure check

| Check | Result |
|---|---|
| Every `page.sources` entry is https and cited | PASS: 3 sources, all https; cited 25x, 10x, and 13x |
| Every `<Cite n>` has a source | PASS: only n = 1, 2, 3 |
| No run of 8+ words copied from a source | PASS: a script compared every 8-word run of the page (headings, lists, table cells, callout; Cite tags removed) with the full text of all three sources. 0 matches. |
| Section order | PASS: In plain words, When you need it, (How it works, Logout), A real-life example, Common mistakes, What a tester can check, Key words (last). Optional sections sit between "When you need it" and "A real-life example". |
| Tip callout has no `<Cite>`; no `<Voices>` | PASS |
| `#` title equals "Single Sign-On" | PASS |
| No blog, forum, Wikipedia, AI summary, or systemdesignbangla.com | PASS: NIST, OASIS, OpenID Foundation |
| Prose 700-1100 words | PASS: about 1070 words (headings, lists, and callout counted; export block, table, Cite tags, and code excluded). A coarse count that also counts list markers gives 1098. Close to the upper limit. |
| Security page: no step-by-step attack instructions | PASS |


## Re-check

Changed lines: 33, 45, and 102 of `content/course/sso.mdx`.

| # | New text | Cite | Verdict | Reason |
|---|---|---|---|---|
| 14 | "The parties work under a trust agreement: it says who plays which role, and sets the terms of their work" (line 33) | 1 | PASS | "first" is gone. NIST: "trust agreements define which parties are fulfilling which roles, the terms under which the parties operate with each other" and "All federation transactions SHALL be governed by the terms of one or more trust agreements". No timing claim is left. |
| 21 | "An assertion usually has a subject, conditions that limit its use, and statements." (line 45) | 2 | PASS | Matches "usually contains a subject of the assertion". The line still ends with `<Cite n={2} />`. |
| 54 | "The SAML way to end all sessions of a user at nearly the same time, with no guarantee" (line 102) | 2 | PASS | Matches "near-simultaneous logout" and "the result of the logout process cannot be guaranteed". Cite n=2 is present. |

Copy check on the changed lines (and on the whole page again): 0 runs of 8 or more words copied from any of the 3 sources. Sources are still all cited (1, 2, 3). Section order, title, and the tip callout are unchanged. Word count: about 1073 (1101 with a coarse count that also counts list and heading markers; the careful count is the one that applies). Within 700-1100.

Open FAILs: 0
