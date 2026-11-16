# Fact check: sdet / security-testing

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep, and Glob only; no web access) that did not write the page. It got only the page, the visible text of the sources that the page cites (fetched with a plain GET, as `scripts/sdet_claimcheck.py` reads them), and the brief in `sdet-factcheck-brief.md`. After a round with FAILs, the author fixed the page and its research note, and the next round checked the whole page again.

## Round 1 (2026-11-15)

### Fact check: sdet / security-testing (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: OWASP Top 10, then Burp Proxy, Repeater, Intruder, used on Juice Shop to find an SQL injection and a broken access control | none | N/A | Describes the page itself. |
| 2 | Intro: a functional test asks "does it work?"; a security test asks what happens when someone uses it in a way it was never meant to be used; the page starts from the OWASP Top 10 and then uses Burp Suite on a practice app to find two flaws | none | N/A | Describes the page and gives a general framing. It names no tool fact or number beyond what the page does. |
| 3 | S1 The OWASP Top 10 is a standard awareness document about the most critical security risks to web applications | S1 | PASS | "The OWASP Top 10 is a standard awareness document for developers and web application security. It represents a broad consensus about the most critical security risks to web applications." |
| 4 | S1 In the 2025 list, Broken Access Control is first | S1 | PASS | "A01:2025 - Broken Access Control" |
| 5 | S1 Injection is fifth and Authentication Failures is seventh | S1 | PASS | "A05:2025 - Injection" ... "A07:2025 - Authentication Failures" |
| 6 | S5 Burp Suite is a toolkit for testing web apps by hand. Its Proxy sits between the browser and the target app, where you can intercept, inspect, and modify the traffic in both directions | S5 | FAIL | The Proxy part is supported: "Burp Proxy operates as a web proxy server between the browser and target applications. It enables you to intercept, inspect, and modify traffic that passes in both directions." S5 does not say that Burp Suite is "a toolkit for testing web apps by hand". Fix: drop that clause, or cite a source that says it. |
| 7 | S7 Repeater sends a request again and again with your changes | S7 | PASS | "Burp Repeater is a tool that enables you to modify and send an interesting HTTP or WebSocket message over and over." |
| 8 | S9 Intruder sends the same request many times, with a different payload in chosen positions each time | S9 | PASS | "...send the same HTTP request over and over again, inserting different payloads into predefined positions each time." |
| 9 | S10 OWASP Juice Shop is an insecure web application for security training | S10 | PASS | "OWASP Juice Shop - Insecure Web Application for Security Training" |
| 10 | S12 The Web Security Academy is free online training, with interactive labs | S12 | PASS | "Free, online web security training from the creators of Burp Suite" ... "free interactive labs and progress-tracking." |
| 11 | S2 Access control should keep users from acting outside their intended permissions | S2 | PASS | "Access control enforces policy such that users cannot act outside of their intended permissions." |
| 12 | S2 One common failure is viewing or editing someone else's account by giving its unique identifier, called an IDOR | S2 | PASS | "Permitting viewing or editing someone else's account by providing its unique identifier (insecure direct object references)" |
| 13 | S14 An IDOR arises when an app uses user-supplied input to access objects directly | S14 | PASS | "...a type of access control vulnerability that arises when an application uses user-supplied input to access objects directly." |
| 14 | S3 An injection flaw sends untrusted input to an interpreter, such as a database, which runs part of the input as commands | S3 | PASS | "...allows untrusted user input to be sent to an interpreter (e.g. a browser, database, the command line) and causes the interpreter to execute parts of that input as commands." |
| 15 | S13 SQL injection lets an attacker interfere with the queries that an app makes to its database | S13 | PASS | "...allows an attacker to interfere with the queries that an application makes to its database." |
| 16 | S13 In SQL, `--` starts a comment, so the rest of the query is ignored | S13 | PASS | "note that -- is a comment indicator in SQL. This means that the rest of the query is interpreted as a comment, effectively removing it." |
| 17 | S4 An app is weak if it permits automated attacks such as credential stuffing, which tries a breached list of real usernames and passwords | S4 | PASS | "There may be authentication weaknesses if the application:" ... "Permits automated attacks such as credential stuffing, where the attacker has a breached list of valid usernames and passwords." |
| 18 | S6 In Burp, go to Proxy > Intercept, set the toggle to Intercept on, and click Open Browser | S6 | PASS | "go to Proxy > Intercept and click Open Browser" ... "Set the intercept toggle to Intercept on." |
| 19 | S6 That browser is preconfigured to work with Burp | S6 | PASS | "This launches Burp's browser, which is preconfigured to work with Burp right out of the box." |
| 20 | S6 Each request is held so that you can study it and even change it before you forward it | S6 | PASS | "The request is held here so that you can study it, and even modify it, before forwarding it to the target server." |
| 21 | S8 Right-click a request and select Send to Repeater | S8 | PASS | "Right-click on any of the GET /product?productId=[...] requests and select Send to Repeater." |
| 22 | S8 Change it, click Send, and read the response | S8 | PASS | "Click Send and view the response from the server." |
| 23 | S7 Repeater is made for sending a request with varying parameter values to test for input-based flaws | S7 | PASS | "Send a request with varying parameter values to test for input-based vulnerabilities." |
| 24 | S11 Docker command `docker run --rm -p 127.0.0.1:3000:3000 bkimminich/juice-shop` | S11 | PASS | "Run `docker run --rm -p 127.0.0.1:3000:3000 bkimminich/juice-shop`" |
| 25 | S6 Open `http://localhost:3000` in Burp's browser | S6 | PASS | S6 supports Burp's browser: "This launches Burp's browser, which is preconfigured to work with Burp". The URL is part of the page's own instruction. |
| 26 | S6 With Intercept on, Burp holds the request | S6 | PASS | "The request is held here so that you can study it, and even modify it, before forwarding it to the target server." |
| 27 | `POST /rest/user/login` with a JSON body of `email` and `password`; forward it; the app answers `401` | none | N/A | Reports what the page's own example run returns. |
| 28 | S8 Send the login request to Repeater | S8 | PASS | "select Send to Repeater" |
| 29 | S8 Change the email to `' OR 1=1--`, keep any password, click Send | S8 | PASS | "Click Send and view the response from the server." |
| 30 | The answer is `200` with a login token: you are logged in as the first user, the admin | none | N/A | Reports what the page's own example run returns. |
| 31 | S13 `OR 1=1` is always true, and `--` turns the password check into a comment | S13 | PASS | "-- is a comment indicator in SQL"; "using the SQL comment sequence -- to remove the password check from the WHERE clause of the query." |
| 32 | S8 In the HTTP history of Burp Proxy, find `GET /rest/basket/<id>`; send it to Repeater, change the id to `1`, click Send | S8 | PASS | "we'll send a request from the HTTP history in Burp Proxy." The `/rest/basket/<id>` path is from the page's own example. |
| 33 | The answer is `200` with another user's basket: an IDOR | S14 | PASS | The `200` and basket are the page's own example output. The IDOR label is supported: "an attacker can simply modify the customer_number value, bypassing access controls to view the records of other customers. This is an example of an IDOR vulnerability". |
| 34 | The same login request works from a terminal (curl) | none | N/A | Reports what the page's own example code does. |
| 35 | S12 The Web Security Academy has free interactive labs | S12 | PASS | "free interactive labs and progress-tracking." |
| 36 | S2 Access control should enforce record ownership | S2 | PASS | "Model access controls should enforce record ownership rather than allowing users to create, read, update, or delete any record." |
| 37 | S2 Everything except public resources should be denied by default | S2 | PASS | "Except for public resources, deny by default." |
| 38 | S3 An app is open to injection when user data is not validated, filtered, or sanitized | S3 | PASS | "User-supplied data is not validated, filtered, or sanitized by the application." |
| 39 | S13 Try the boolean conditions `OR 1=1` and `OR 1=2`, and compare the responses | S13 | PASS | "Boolean conditions such as OR 1=1 and OR 1=2, and look for differences in the application's responses." |
| 40 | S9 When one request should be tried with many values, such as a list of ids, Intruder sends it once for each payload | S9 | FAIL | S9 says only: "send the same HTTP request over and over again, inserting different payloads into predefined positions each time." It does not mention a list of ids or one send per payload. Fix: "Intruder sends the same request over and over, with different payloads in predefined positions each time." |
| 41 | S16 For SQL injection, the fix is a parameterized query | S16 | PASS | "the recommended safe implementation would use parameterized queries" |
| 42 | S2 For an IDOR, the server must check that the record belongs to the user | S2 | PASS | "Model access controls should enforce record ownership rather than allowing users to create, read, update, or delete any record." |
| 43 | S15 The OWASP Web Security Testing Guide is a full testing resource for web applications | S15 | FAIL | S15 says: "produces the premier cybersecurity testing resource for web application developers and security professionals." It does not say "full". Fix: say "the premier cybersecurity testing resource for web application developers and security professionals". |
| 44 | Use the guide to plan what the security tests should cover | none | N/A | Advice. |
| 45 | S10 Practise on targets such as Juice Shop | S10 | PASS | "...insecure web application for security trainings, awareness demos and CTFs." |
| 46 | S12 Practise on the Web Security Academy labs | S12 | PASS | "free interactive labs" |
| 47 | S6 Practise on the deliberately vulnerable site of Burp's own tutorial | S6 | PASS | "you'll use a live, deliberately vulnerable website to learn how to intercept requests with Burp Proxy." |
| 48 | The browser shows only the buttons that you may use, but the server receives whatever the request says | S2 (at the end of the next sentence) | FAIL | No S2 text says this. The nearest S2 text is about "modifying the URL", "the HTML page", and "an attack tool that modifies API requests". Fix: drop the sentence, or write only what S2 says. |
| 49 | S2 Access control checks can be bypassed by modifying the URL or by an attack tool that modifies API requests | S2 | PASS | "Bypassing access control checks by modifying the URL (parameter tampering or force browsing), internal application state, or the HTML page, or by using an attack tool that modifies API requests." |
| 50 | S14 An IDOR shows only when one user asks for another user's object | S14 | FAIL | S14 gives no "only when" condition. It says IDOR "arises when an application uses user-supplied input to access objects directly" and shows an attacker who modifies a value to view other customers' records. Fix: "An IDOR arises when an app uses user-supplied input to access objects directly." |
| 51 | Every access test needs two accounts | none | N/A | Advice. |
| 52 | S4 Also test whether the login permits automated attacks such as credential stuffing | S4 | PASS | "Permits automated attacks such as credential stuffing, where the attacker has a breached list of valid usernames and passwords." |
| 53 | S3 The flaw is user input that reaches the database as a command | S3 | PASS | "...allows untrusted user input to be sent to an interpreter (e.g. a browser, database, the command line) and causes the interpreter to execute parts of that input as commands." |
| 54 | The payload `' OR 1=1--` is only the proof | none | N/A | Advice or opinion. |
| 55 | "What a tester can check" callout | none | N/A | Tutorial advice that says it is advice. |
| K1 | OWASP Top 10: an awareness document of the most critical security risks to web applications | Key words | PASS | Technical, What it is: "a standard awareness document about the most critical security risks to web applications" |
| K2 | Broken access control: a user can act outside the permissions they should have | Key words | PASS | Technical, How it works: "Access control should keep users from acting outside their intended permissions" |
| K3 | IDOR: user input picks an object, and nothing checks the owner | Key words | PASS | Technical: "An IDOR arises when an app uses user-supplied input to access objects directly." and "the server must check that the record belongs to the user" |
| K4 | Injection: untrusted input that an interpreter, such as a database, runs as a command | Key words | PASS | Technical: "sends untrusted input to an interpreter, such as a database, which then runs part of the input as commands" |
| K5 | SQL injection: injection into the SQL queries of an app | Key words | PASS | Technical: "SQL injection lets an attacker interfere with the queries that an app makes to its database" |
| K6 | Credential stuffing: an automated attack with a breached list of real usernames and passwords | Key words | PASS | Technical: "automated attacks such as credential stuffing, which tries a breached list of real usernames and passwords" |
| K7 | Burp Proxy: sits between the browser and the app, to intercept and change the traffic | Key words | PASS | Technical: "Its Proxy sits between the browser and the target app, where you can intercept, inspect, and modify the traffic in both directions" |
| K8 | Burp Repeater: changes a request and sends it again, as often as you like | Key words | PASS | Technical: "Repeater sends a request again and again with your changes" |
| K9 | Burp Intruder: sends one request many times, with a different payload each time | Key words | PASS | Technical: "Intruder sends the same request many times, with a different payload in chosen positions each time" |
| K10 | Payload: the test value put into a request, such as `' OR 1=1--` | Key words | PASS | Technical, Try it: "Change the email to `' OR 1=1--`" and "The payload is only the proof." |
| K11 | Parameterized query: a query whose values are sent apart from the SQL; the fix for SQL injection | Key words | FAIL | Technical gives only "For SQL injection, the fix is a parameterized query". No Technical panel says that the values are sent apart from the SQL. Fix: "A parameterized query: the fix for SQL injection." |
| K12 | OWASP Juice Shop: an insecure web app made for security training | Key words | PASS | Technical: "OWASP Juice Shop is an insecure web application for security training" |

Open FAILs: 6

FAILs in round 1: 6.

## Round 2 (2026-11-16)

### Fact check: sdet / security-testing (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: the page uses the OWASP Top 10, Burp Proxy, Repeater and Intruder on Juice Shop to find an SQL injection and a broken access control | none | N/A | It describes the page itself. |
| 2 | Intro: a functional test asks "does it work?", a security test asks what happens when someone misuses the app. The page uses Burp on a practice app to find two flaws | none | N/A | It describes the page and gives no tool fact. |
| 3 | S1 (What it is): the OWASP Top 10 is a standard awareness document about the most critical security risks to web applications | S1 | PASS | "standard awareness document for developers and web application security... most critical security risks to web applications" |
| 4 | S1: in the 2025 list Broken Access Control is first | S1 | PASS | "A01:2025 - Broken Access Control" |
| 5 | S1: Injection is fifth and Authentication Failures is seventh | S1 | PASS | "A05:2025 - Injection"; "A07:2025 - Authentication Failures" |
| 6 | S1: the Proxy sits between the browser and the target app and can intercept, inspect and modify traffic in both directions | S5 | PASS | "web proxy server between the browser and target applications... intercept, inspect, and modify traffic that passes in both directions" |
| 7 | S1: Repeater sends a request again and again with your changes | S7 | PASS | "modify and send an interesting HTTP or WebSocket message over and over" |
| 8 | S1: Intruder sends the same request many times with a different payload in chosen positions | S9 | PASS | "send the same HTTP request over and over again, inserting different payloads into predefined positions each time" |
| 9 | S1: Juice Shop is an insecure web application for security training | S10 | PASS | "insecure web application" ... "training" (S10 line 1) |
| 10 | S1: the Web Security Academy is free online training with interactive labs | S12 | PASS | "Free, online web security training"; "free interactive labs" |
| 11 | S1: the Security Testing module covers the whole subject, from a safe lab to a practice penetration test | none | N/A | It describes the site's own module, not a tool fact. |
| 12 | S1 callout "Only test what you may test" | none | N/A | It is the tutorial's own advice. |
| 13 | S2 (How it works): access control should keep users from acting outside their intended permissions | S2 | PASS | "users cannot act outside of their intended permissions" |
| 14 | S2: a common failure is viewing or editing someone else's account by giving its unique identifier, called IDOR | S2 | PASS | "Permitting viewing or editing someone else's account by providing its unique identifier (insecure direct object references)" |
| 15 | S2: an IDOR arises when an app uses user-supplied input to access objects directly | S14 | PASS | "arises when an application uses user-supplied input to access objects directly" |
| 16 | S2: an injection flaw sends untrusted input to an interpreter, such as a database, which runs part of it as commands | S3 | PASS | "untrusted user input to be sent to an interpreter (e.g. a browser, database, the command line)... execute parts of that input as commands" |
| 17 | S2: SQL injection lets an attacker interfere with the queries an app makes to its database | S13 | PASS | "interfere with the queries that an application makes to its database" |
| 18 | S2: in SQL, `--` starts a comment, so the rest of the query is ignored | S13 | PASS | "-- is a comment indicator in SQL. This means that the rest of the query is interpreted as a comment" |
| 19 | S2: an app is weak if it permits automated attacks such as credential stuffing, which uses a breached list of real usernames and passwords | S4 | PASS | "Permits automated attacks such as credential stuffing, where the attacker has a breached list of valid usernames and passwords" |
| 20 | S2: in Burp go to Proxy > Intercept, set Intercept on, click Open Browser | S6 | PASS | "Go to the Proxy > Intercept tab"; "Intercept on"; "Click Open Browser" |
| 21 | S2: that browser is preconfigured to work with Burp | S6 | PASS | "preconfigured to work with Burp right out of the box" |
| 22 | S2: each request is held so you can study it and change it before you forward it | S6 | PASS | "held here so that you can study it, and even modify it, before forwarding it" |
| 23 | S2: right-click a request and select Send to Repeater | S8 | PASS | "Right-click on any of the GET /product... requests and select Send to Repeater" |
| 24 | S2: change it, click Send, and read the response | S8 | PASS | "Click Send and view the response from the server" |
| 25 | S2: Repeater is made for sending a request with varying parameter values to test for input-based flaws | S7 | PASS | "Send a request with varying parameter values to test for input-based vulnerabilities" |
| 26 | S3 (Try it): run `docker run --rm -p 127.0.0.1:3000:3000 bkimminich/juice-shop` | S11 | PASS | "Run `docker run --rm -p 127.0.0.1:3000:3000 bkimminich/juice-shop`" |
| 27 | S3: open `http://localhost:3000` in Burp's browser | S6 | FAIL | S6 only says to visit a site in Burp's browser ("try to visit https://portswigger.net"). It does not give the localhost:3000 URL. Fix: cite S11 for the URL, or say "open the app in Burp's browser". |
| 28 | S3: with Intercept on, Burp holds the login request | S6 | PASS | "The request is held here" |
| 29 | S3: the login is `POST /rest/user/login` with a JSON body of email and password, and the app answers 401 | none | N/A | It reports what the page's own run returned. |
| 30 | S3: send the login request to Repeater | S8 | PASS | "send a request from the HTTP history in Burp Proxy... Send to Repeater" |
| 31 | S3: change the email to `' OR 1=1--`, keep any password, click Send | S8 | PASS | "Click Send and view the response from the server" |
| 32 | S3: the answer is 200 with a token, logged in as the admin | none | N/A | It reports what the page's own run returned. |
| 33 | S3: `OR 1=1` is always true, and `--` turns the password check into a comment | S13 | FAIL | S13 supports the `--` part: "SQL comment sequence -- to remove the password check from the WHERE clause". It never says `OR 1=1` is "always true". Fix: drop "always true", or say "Boolean conditions such as OR 1=1". |
| 34 | S3: find `GET /rest/basket/<id>` in the HTTP history of Burp Proxy | S8 | PASS | "send a request from the HTTP history in Burp Proxy" |
| 35 | S3: changing the id to 1 returns another user's basket: an IDOR | S14 | PASS | "modify the customer_number value, bypassing access controls to view the records of other customers. This is an example of an IDOR" (the 200 result is the page's own run) |
| 36 | S3: the curl command works from a terminal | none | N/A | It reports the page's own example code. |
| 37 | S3: the Web Security Academy has free interactive labs | S12 | PASS | "free interactive labs" |
| 38 | S4 (How a tester uses it): access control should enforce record ownership | S2 | PASS | "enforce record ownership" |
| 39 | S4: everything except public resources should be denied by default | S2 | PASS | "Except for public resources, deny by default." |
| 40 | S4: an app is open to injection when user data is not validated, filtered or sanitized | S3 | PASS | "User-supplied data is not validated, filtered, or sanitized by the application." |
| 41 | S4: try the boolean conditions `OR 1=1` and `OR 1=2` and compare the responses | S13 | PASS | "Boolean conditions such as OR 1=1 and OR 1=2, and look for differences in the application's responses" |
| 42 | S4: Intruder sends the same request over and over with a different payload in predefined positions | S9 | PASS | "same HTTP request over and over again, inserting different payloads into predefined positions each time" |
| 43 | S4: use Intruder when one request must be tried with many values, such as a list of ids | none | FAIL | No cite, and it does not say it is advice. S9 gives only "automating customized attacks". Fix: cite S9 for the mechanism and label the use case as tutorial advice. |
| 44 | S4: for SQL injection, the fix is a parameterized query | S16 | PASS | "Parameterized queries are the recommended solution" |
| 45 | S4: for an IDOR, the server must check that the record belongs to the user | S2 | PASS | "enforce record ownership" |
| 46 | S4: the WSTG project produces a cybersecurity testing resource for web application developers and security professionals | S15 | PASS | "produces the premier cybersecurity testing resource for web application developers and security professionals" |
| 47 | S4: use the WSTG to plan what the security tests should cover | none | FAIL | No cite, and it is not marked as advice. S15 does not say this. Fix: mark it as tutorial advice, or cite what S15 says about the guide's scope. |
| 48 | S5 (Common mistakes): practise on targets made for it, such as Juice Shop | S10 | PASS | "insecure web application"... "training" |
| 49 | S5: Web Security Academy labs | S12 | PASS | "free interactive labs" |
| 50 | S5: the deliberately vulnerable site of Burp's own tutorial | S6 | PASS | "a live, deliberately vulnerable website" |
| 51 | S5: access control checks can be bypassed by modifying the URL or by an attack tool that modifies API requests | S2 | PASS | "Bypassing access control checks by modifying the URL... or by using an attack tool that modifies API requests." |
| 52 | S5: "Test the request, not only the screen." | none | N/A | Advice. |
| 53 | S5: an IDOR arises when an app uses user-supplied input to access objects directly | S14 | PASS | "arises when an application uses user-supplied input to access objects directly" |
| 54 | S5: test with two accounts | none | N/A | Advice. |
| 55 | S5: also test whether the login permits automated attacks such as credential stuffing | S4 | PASS | "Permits automated attacks such as credential stuffing" |
| 56 | S5: the flaw is user input that reaches the database as a command | S3 | PASS | "causes the interpreter to execute parts of that input as commands" |
| 57 | S6 (What a tester can check): callout of checks | none | N/A | It is marked as the tutorial's own advice. |
| K1 | OWASP Top 10: an awareness document of the most critical security risks to web applications | Key words | PASS | Section 1: "a standard awareness document about the most critical security risks to web applications" |
| K2 | Broken access control: a user can act outside the permissions they should have | Key words | PASS | Section 2: "keep users from acting outside their intended permissions" |
| K3 | IDOR: user input picks an object, and nothing checks the owner | Key words | FAIL | The Technical panels say "uses user-supplied input to access objects directly". They never say "nothing checks the owner" as part of the definition. Fix: use the section 2 wording. |
| K4 | Injection: untrusted input that an interpreter, such as a database, runs as a command | Key words | PASS | Section 2: "sends untrusted input to an interpreter, such as a database, which then runs part of the input as commands" |
| K5 | SQL injection: injection into the SQL queries of an app | Key words | PASS | Section 2: "interfere with the queries that an app makes to its database" |
| K6 | Credential stuffing: an automated attack with a breached list of real usernames and passwords | Key words | PASS | Section 2: "credential stuffing, which tries a breached list of real usernames and passwords" |
| K7 | Burp Proxy: sits between the browser and the app, to intercept and change traffic | Key words | PASS | Section 1: "sits between the browser and the target app, where you can intercept, inspect, and modify the traffic" |
| K8 | Burp Repeater: changes a request and sends it again, as often as you like | Key words | PASS | Section 1: "sends a request again and again with your changes" |
| K9 | Burp Intruder: sends one request many times, with a different payload each time | Key words | PASS | Section 1: "sends the same request many times, with a different payload in chosen positions each time" |
| K10 | Payload: the test value put into a request, such as `' OR 1=1--` | Key words | FAIL | No Technical panel defines "payload". They only use the word ("a different payload", "The payload is only the proof"). Fix: remove the row, or add a cited definition. |
| K11 | Parameterized query: the fix for SQL injection | Key words | PASS | Section 4: "For SQL injection, the fix is a parameterized query" |
| K12 | OWASP Juice Shop: an insecure web app made for security training | Key words | PASS | Section 1: "an insecure web application for security training" |

Open FAILs: 6

FAILs in round 2: 6.

## Round 3 (2026-11-16)

Stopped: a safety classifier stopped the checker before it wrote its tables, so this round gave no verdicts.

## Round 4 (2026-11-16)

Stopped: a safety classifier stopped the checker before it wrote its tables, so this round gave no verdicts.

## Round 5 (2026-11-16)

### Fact check: sdet / security-testing (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | OWASP Top 10 is a standard awareness document about the most critical security risks to web applications | S1 | PASS | "a standard awareness document... most critical security risks to web applications" |
| 2 | In 2025 list, Broken Access Control is first | S1 | PASS | "A01:2025 - Broken Access Control" |
| 3 | Injection is fifth, Authentication Failures is seventh | S1 | PASS | "A05:2025 - Injection" / "A07:2025 - Authentication Failures" |
| 4 | Burp Proxy sits between browser and app, intercept/inspect/modify traffic both directions | S5 | PASS | "operates as a web proxy server between the browser and target applications. It enables you to intercept, inspect, and modify traffic that passes in both directions" |
| 5 | Repeater sends a request again and again with your changes | S7 | PASS | "enables you to modify and send an interesting HTTP or WebSocket message over and over" |
| 6 | Intruder sends the same request many times, with a different payload in chosen positions each time | S9 | PASS | "send the same HTTP request over and over again, inserting different payloads into predefined positions each time" |
| 7 | OWASP Juice Shop is an insecure web application for security training | S10 | PASS | "insecure web application for security trainings" |
| 8 | Web Security Academy is free online training, with interactive labs | S12 | PASS | "Free, online web security training" / "free interactive labs" |
| 9 | Access control should keep users from acting outside their intended permissions | S2 | PASS | "users cannot act outside of their intended permissions" |
| 10 | Viewing/editing someone else's account by its unique identifier is called IDOR | S2 | PASS | "Permitting viewing or editing someone else's account by providing its unique identifier (insecure direct object references)" |
| 11 | IDOR arises when an app uses user-supplied input to access objects directly | S14 | PASS | "arises when an application uses user-supplied input to access objects directly" |
| 12 | Injection flaw sends untrusted input to an interpreter such as a database, which runs part of input as commands | S3 | PASS | "allows untrusted user input to be sent to an interpreter (e.g. a browser, database, the command line) and causes the interpreter to execute parts of that input as commands" |
| 13 | SQL injection lets an attacker interfere with queries an app makes to its database | S13 | PASS | "allows an attacker to interfere with the queries that an application makes to its database" |
| 14 | In SQL, `--` starts a comment so the rest of the query is ignored | S13 | PASS | "`--` is a comment indicator in SQL. This means that the rest of the query is interpreted as a comment" |
| 15 | App is weak if it permits automated attacks such as credential stuffing, trying breached valid usernames/passwords | S4 | PASS | "Permits automated attacks such as credential stuffing, where the attacker has a breached list of valid usernames and passwords" |
| 16 | In Burp, go to Proxy > Intercept, set toggle to Intercept on, click Open Browser | S6 | PASS | "Set the intercept toggle to Intercept on" / "Click Open Browser" |
| 17 | That browser is preconfigured to work with Burp | S6 | PASS | "preconfigured to work with Burp right out of the box" |
| 18 | Each request is held so you can study it and even change it before forwarding | S6 | PASS | "The request is held here so that you can study it, and even modify it, before forwarding it" |
| 19 | Right-click a request and select Send to Repeater | S8 | PASS | "Right-click on any of the GET /product?productId=[...] requests and select Send to Repeater" |
| 20 | Change it, click Send, and read the response | S8 | PASS | "Click Send and view the response from the server" |
| 21 | Repeater is made for sending a request with varying parameter values to test for input-based flaws | S7 | PASS | "Send a request with varying parameter values to test for input-based vulnerabilities" |
| 22 | Start the practice app with docker run command | S11 | PASS | "Run `docker run --rm -p 127.0.0.1:3000:3000 bkimminich/juice-shop`" |
| 23 | Open http://localhost:3000 | S11 | PASS | "Browse to <http://localhost:3000>" |
| 24 | ...in Burp's browser | S6 | PASS | "Burp Proxy works with Burp's browser to access the target application" |
| 25 | With Intercept on, Burp holds the login request | S6 | PASS | "The request is held here so that you can study it" |
| 26 | Send login request to Repeater | S8 | PASS | "Send to Repeater" (see claim 19) |
| 27 | PAYLOAD-A email, keep any password, click Send | S8 | PASS | "Click Send" (see claim 20) |
| 28 | The `--` starts an SQL comment, which removes the password check from the WHERE clause | S13 | PASS | "using the SQL comment sequence `--` to remove the password check from the WHERE clause of the query" |
| 29 | Find GET /rest/basket/<id> in HTTP history of Burp Proxy | S8 | FAIL | S8 (Repeater doc) does not describe HTTP history; HTTP history is covered in S6, not S8. Fix: cite S6 for HTTP history, S8 only for Send to Repeater. |
| 30 | Send it to Repeater, change id to 1, click Send → IDOR | S14 | PASS | "an attacker can simply modify the customer_number value, bypassing access controls to view the records of other customers. This is an example of an IDOR vulnerability" |
| 31 | For more practice, Web Security Academy has free interactive labs | S12 | PASS | "free interactive labs" |
| 32 | Access control should enforce record ownership | S2 | PASS | "Model access controls should enforce record ownership rather than allowing users to create, read, update, or delete any record" |
| 33 | Everything except public resources should be denied by default | S2 | PASS | "Except for public resources, deny by default" |
| 34 | App is open to injection when user data is not validated, filtered, or sanitized | S3 | PASS | "User-supplied data is not validated, filtered, or sanitized by the application" |
| 35 | Try boolean conditions COND-TRUE and COND-FALSE, compare responses | S13 | PASS | "Boolean conditions such as OR 1=1 and OR 1=2, and look for differences in the application's responses" |
| 36 | Intruder sends same request over and over, different payload in predefined positions each time | S9 | PASS | (same as claim 6) |
| 37 | SQLi fix: define SQL structure apart from data values and bind values with parameterized queries | S16 | PASS | "define the SQL structure separately from its data values, then bind those values through the database API... use parameterized queries" |
| 38 | For IDOR, access control should enforce record belongs to user | S2 | PASS | "enforce record ownership" (same source as claim 32) |
| 39 | OWASP WSTG produces a cybersecurity testing resource for web app developers and security professionals | S15 | PASS | "produces the premier cybersecurity testing resource for web application developers and security professionals" |
| 40 | Practise on Juice Shop, Web Security Academy labs, or Burp's own deliberately vulnerable tutorial site | S10, S12, S6 | PASS | "a live, deliberately vulnerable website to learn how to intercept requests with Burp Proxy" (S6) + prior Juice Shop/WSA cites |
| 41 | Access control checks can be bypassed by modifying the URL or by an attack tool that modifies API requests | S2 | PASS | "Bypassing access control checks by modifying the URL... or by using an attack tool that modifies API requests" |
| 42 | An IDOR arises when an app uses user-supplied input to access objects directly | S14 | PASS | (same as claim 11) |
| 43 | Test whether login permits automated attacks such as credential stuffing | S4 | PASS | (same as claim 15) |
| 44 | The flaw is user input that reaches the database as a command | S3 | PASS | (same as claim 12, "execute parts of that input as commands") |
| K1 | OWASP Top 10: awareness document of most critical security risks to web applications | — | PASS | Technical panel of "What it is": "a standard awareness document about the most critical security risks to web applications" |
| K2 | Broken access control: user can act outside permissions they should have | — | PASS | "Access control should keep users from acting outside their intended permissions" (How it works) |
| K3 | IDOR: app uses user-supplied input to access objects directly | — | PASS | "An IDOR arises when an app uses user-supplied input to access objects directly" |
| K4 | Injection: untrusted input that an interpreter runs as a command | — | PASS | "An injection flaw sends untrusted input to an interpreter... which then runs part of the input as commands" |
| K5 | SQL injection: injection into SQL queries of an app | — | PASS | "SQL injection lets an attacker interfere with the queries that an app makes to its database" |
| K6 | Credential stuffing: automated attack with breached list of real usernames/passwords | — | PASS | "credential stuffing, which tries a breached list of real usernames and passwords" |
| K7 | Burp Proxy: sits between browser and app, intercept and change traffic | — | PASS | "the Proxy sits between the browser and the target app, where you can intercept, inspect, and modify the traffic in both directions" |
| K8 | Burp Repeater: changes a request and sends it again, as often as you like | — | PASS | "Repeater sends a request again and again with your changes" |
| K9 | Burp Intruder: sends one request many times, different payload each time | — | PASS | "Intruder sends the same request many times, with a different payload in chosen positions each time" |
| K10 | Parameterized query: SQL defined apart from data values, bound through API, fix for SQLi | — | PASS | "the fix is to define the SQL structure apart from its data values and bind the values with parameterized queries" |
| K11 | OWASP Juice Shop: insecure web app made for security training | — | PASS | "OWASP Juice Shop is an insecure web application for security training" |

Open FAILs: 1

FAILs in round 5: 1.

## Round 6 (2026-11-16)

### Fact check: sdet / security-testing (round 6)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: roadmap of OWASP Top 10 → Burp Proxy/Repeater/Intruder on Juice Shop to find SQLi and broken access control | none | N/A | Describes the page itself |
| 2 | Intro: "A functional test asks... never meant to be used?" | none | N/A | Rhetorical framing, not a tool/product/number fact |
| 3 | Intro: page starts from OWASP Top 10, uses Burp Suite on a practice app to find two flaws | none | N/A | Describes the page itself |
| 4 | Callout "Only test what you may test" | none | N/A | Labelled as the tutorial's own advice |
| 5 | OWASP Top 10 is a standard awareness document about the most critical security risks to web applications | S1 | PASS | "a standard awareness document ... represents a broad consensus about the most critical security risks to web applications" |
| 6 | In the 2025 list, Broken Access Control is first | S1 | PASS | "A01:2025 - Broken Access Control" |
| 7 | Injection is fifth, and Authentication Failures is seventh | S1 | PASS | "A05:2025 - Injection" ... "A07:2025 - Authentication Failures" |
| 8 | Burp Proxy sits between browser and target app, intercept/inspect/modify traffic both directions | S5 | PASS | "operates as a web proxy server between the browser and target applications. It enables you to intercept, inspect, and modify traffic that passes in both directions" |
| 9 | Repeater sends a request again and again with your changes | S7 | PASS | "a tool that enables you to modify and send an interesting HTTP or WebSocket message over and over" |
| 10 | Intruder sends the same request many times, with a different payload in chosen positions each time | S9 | PASS | "send the same HTTP request over and over again, inserting different payloads into predefined positions each time" |
| 11 | OWASP Juice Shop is an insecure web application for security training | S10 | PASS | "Insecure Web Application for Security Training" |
| 12 | Web Security Academy is free online training, with interactive labs | S12 | PASS | "a free online training center ... It also includes interactive labs" |
| 13 | "This page is one step of the roadmap. The Security Testing module covers..." | none | N/A | Describes the page itself |
| 14 | Access control should keep users from acting outside their intended permissions | S2 | PASS | "Access control enforces policy such that users cannot act outside of their intended permissions" |
| 15 | Common failure: viewing/editing someone else's account via unique identifier = IDOR | S2 | PASS | "Permitting viewing or editing someone else's account by providing its unique identifier (insecure direct object references)" |
| 16 | An IDOR arises when an app uses user-supplied input to access objects directly | S14 | PASS | "arises when an application uses user-supplied input to access objects directly" |
| 17 | An injection flaw sends untrusted input to an interpreter (e.g. database), which runs part of the input as commands | S3 | PASS | "allows untrusted user input to be sent to an interpreter (e.g. a browser, database ...) and causes the interpreter to execute parts of that input as commands" |
| 18 | SQL injection lets an attacker interfere with the queries an app makes to its database | S13 | PASS | "allows an attacker to interfere with the queries that an application makes to its database" |
| 19 | In SQL, `--` starts a comment, so the rest of the query is ignored | S13 | PASS | "`--` is a comment indicator in SQL. This means that the rest of the query is interpreted as a comment, effectively removing it" |
| 20 | An app is weak if it permits automated attacks such as credential stuffing, trying a breached list of real usernames/passwords | S4 | PASS | "Permits automated attacks such as credential stuffing, where the attacker has a breached list of valid usernames and passwords" |
| 21 | In Burp, go to Proxy > Intercept, set toggle to Intercept on, click Open Browser | S6 | PASS | "Go to the Proxy > Intercept tab" ... "Set the intercept toggle to Intercept on" ... "Click Open Browser" |
| 22 | That browser is preconfigured to work with Burp | S6 | PASS | "launches Burp's browser, which is preconfigured to work with Burp right out of the box" |
| 23 | Each request is held, so you can study/change it before forwarding | S6 | PASS | "The request is held here so that you can study it, and even modify it, before forwarding it" |
| 24 | Right-click a request and select Send to Repeater | S8 | PASS | "Right-click on any of the GET /product?productId=[...] requests and select Send to Repeater" |
| 25 | Change it, click Send, and read the response | S8 | PASS | "By resending the same request with different input each time..." / "Click Send and view the response from the server" |
| 26 | Repeater is made for sending a request with varying parameter values, to test for input-based flaws | S7 | PASS | "Send a request with varying parameter values to test for input-based vulnerabilities" |
| 27 | Start app: docker run command, open localhost:3000, in Burp's browser | S11, S11, S6 | PASS | "Run `docker run --rm -p 127.0.0.1:3000:3000 bkimminich/juice-shop`" / "Browse to <http://localhost:3000>" / Burp's browser accesses target app |
| 28 | Catch login request: Burp holds the request; endpoint/body/401 result | S6 (hold part) | PASS/N/A | "The request is held" PASS; endpoint/JSON body/401 is the page's own example result, N/A |
| 29 | Send login request to Repeater, change email, click Send | S8 | PASS | Same Repeater mechanics as row 24-25 |
| 30 | Result: 200, logged in as admin | none | N/A | Reports what the page's own example returns |
| 31 | `--` starts an SQL comment, removes password check from the WHERE clause | S13 | PASS | "using the SQL comment sequence `--` to remove the password check from the WHERE clause of the query" |
| 32 | In HTTP history of Burp Proxy, find GET /rest/basket/<id> | S6 | PASS | "go to the Proxy > HTTP history tab. Here, you can see the history of all HTTP traffic" |
| 33 | Send it to Repeater, change id, click Send | S8 | PASS | Repeater mechanics, as above |
| 34 | Result: 200 with another user's basket: an IDOR | S14 | PASS | Matches IDOR definition already cited |
| 35 | Same login request works from a terminal (curl example) | none | N/A | Reports the page's own example |
| 36 | Web Security Academy has free interactive labs | S12 | PASS | "free interactive labs" |
| 37 | Change every id: send request with another user's record id (tester action) | none | N/A | Tester's own method, no cite attached to this clause |
| 38 | Access control should enforce record ownership | S2 | PASS | "Model access controls should enforce record ownership rather than allowing users to create, read, update, or delete any record" |
| 39 | Everything except public resources should be denied by default | S2 | PASS | "Except for public resources, deny by default" |
| 40 | An app is open to injection when user data is not validated, filtered, or sanitized | S3 | PASS | "User-supplied data is not validated, filtered, or sanitized by the application" |
| 41 | Try boolean conditions `<COND-TRUE>`/`<COND-FALSE>`, compare responses | S13 | PASS | "Boolean conditions such as OR 1=1 and OR 1=2, and look for differences in the application's responses" |
| 42 | Intruder sends the same request over and over, different payload in predefined positions each time | S9 | PASS | "send the same HTTP request over and over again, inserting different payloads into predefined positions each time" |
| 43 | SQLi fix: define SQL structure apart from data values, bind values with parameterized queries | S16 | PASS | "define the SQL structure separately from its data values, then bind those values through the database API" / "use parameterized queries for dynamic data values" |
| 44 | IDOR fix: access control should enforce record belongs to the user | S2 | PASS | "Model access controls should enforce record ownership" |
| 45 | OWASP WSTG project produces a cybersecurity testing resource for web application developers and security professionals | S15 | PASS | "produces the premier cybersecurity testing resource for web application developers and security professionals" |
| 46 | Practise on targets made for it: Juice Shop, Web Security Academy labs, Burp's deliberately vulnerable tutorial site | S10, S12, S6 | PASS | Juice Shop training; "free interactive labs"; "a live, deliberately vulnerable website" |
| 47 | Access control checks bypassed by modifying the URL or an attack tool that modifies API requests | S2 | PASS | "Bypassing access control checks by modifying the URL ... or by using an attack tool that modifies API requests" |
| 48 | Test the request, not only the screen | none | N/A | Tester's own advice |
| 49 | An IDOR arises when an app uses user-supplied input to access objects directly (repeat) | S14 | PASS | Same quote as row 16 |
| 50 | Test with two accounts (advice) | none | N/A | Tester's own advice |
| 51 | Also test whether login permits automated attacks such as credential stuffing | S4 | PASS | Same quote as row 20 |
| 52 | Payload is only proof; flaw is user input that reaches the database as a command | S3 | PASS | Paraphrase of injection definition already cited |
| 53 | "What a tester can check" callout, all 6 bullets | none | N/A | Labelled as tutorial's own advice |
| K1 | OWASP Top 10: awareness document of most critical security risks | — | PASS | Technical: "a standard awareness document about the most critical security risks to web applications" |
| K2 | Broken access control: a user can act outside permissions | — | PASS | Technical: "Access control should keep users from acting outside their intended permissions" |
| K3 | IDOR definition | — | PASS | Technical: "An IDOR arises when an app uses user-supplied input to access objects directly" |
| K4 | Injection definition | — | PASS | Technical: "An injection flaw sends untrusted input to an interpreter, such as a database, which then runs part of the input as commands" |
| K5 | SQL injection: injection into SQL queries | — | PASS | Technical: "SQL injection lets an attacker interfere with the queries that an app makes to its database" |
| K6 | Credential stuffing definition | — | PASS | Technical: "credential stuffing, which tries a breached list of real usernames and passwords" |
| K7 | Burp Proxy definition | — | PASS | Technical: "the Proxy sits between the browser and the target app ... intercept, inspect, and modify the traffic" |
| K8 | Burp Repeater definition | — | PASS | Technical: "Repeater sends a request again and again with your changes" |
| K9 | Burp Intruder definition | — | PASS | Technical: "Intruder sends the same request many times, with a different payload in chosen positions each time" |
| K10 | Parameterized query: SQL defined apart from data values, bound through the database API; fix for SQLi | — | FAIL | No Technical panel says "bound through the database API" — the Technical panel only says "bind the values with parameterized queries"; drop the added "database API" detail or cite it directly from S16 in a Technical panel |
| K11 | OWASP Juice Shop: insecure web app for security training | — | PASS | Technical: "OWASP Juice Shop is an insecure web application for security training" |

Open FAILs: 1

FAILs in round 6: 1.

## Round 7 (2026-11-16)

### Fact check: sdet / security-testing (round 7)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede describes the page's own content (Top 10, Burp tools, Juice Shop, SQLi, broken access control) | — | N/A | Describes the page itself |
| 2 | "A functional test asks... A security test asks..." (intro framing) | — | N/A | Not a fact about a tool/product/command/number; scene-setting |
| 3 | "This page starts from the OWASP Top 10, then uses Burp Suite... to find two real flaws" | — | N/A | Describes the page itself |
| 4 | OWASP Top 10 is a standard awareness document about the most critical security risks to web applications | 1 | PASS | "a standard awareness document for developers and web application security... broad consensus about the most critical security risks to web applications" |
| 5 | In the 2025 list, Broken Access Control is first | 1 | PASS | "A01:2025 - Broken Access Control" |
| 6 | Injection is fifth, and Authentication Failures is seventh | 1 | PASS | "A05:2025 - Injection" ... "A07:2025 - Authentication Failures" |
| 7 | Burp Proxy sits between the browser and target app, lets you intercept, inspect, and modify traffic in both directions | 5 | PASS | "operates as a web proxy server between the browser and target applications. It enables you to intercept, inspect, and modify traffic that passes in both directions" |
| 8 | Repeater sends a request again and again with your changes | 7 | PASS | "enables you to modify and send an interesting HTTP or WebSocket message over and over" |
| 9 | Intruder sends the same request many times, with a different payload in chosen positions each time | 9 | PASS | "send the same HTTP request over and over again, inserting different payloads into predefined positions each time" |
| 10 | OWASP Juice Shop is an insecure web application for security training | 10 | PASS | "insecure web application for security trainings" |
| 11 | Web Security Academy is free online training, with interactive labs | 12 | PASS | "Free, online web security training" ... "free interactive labs" |
| 12 | Access control should keep users from acting outside their intended permissions | 2 | PASS | "Access control enforces policy such that users cannot act outside of their intended permissions" |
| 13 | Viewing/editing someone else's account by giving its unique identifier is called an IDOR | 2 | PASS | "Permitting viewing or editing someone else's account by providing its unique identifier (insecure direct object references)" |
| 14 | An IDOR arises when an app uses user-supplied input to access objects directly | 14 | PASS | "arises when an application uses user-supplied input to access objects directly" |
| 15 | An injection flaw sends untrusted input to an interpreter (e.g. a database), which runs part of the input as commands | 3 | PASS | "allows untrusted user input to be sent to an interpreter (e.g. a browser, database...) and causes the interpreter to execute parts of that input as commands" |
| 16 | SQL injection lets an attacker interfere with the queries an app makes to its database | 13 | PASS | "allows an attacker to interfere with the queries that an application makes to its database" |
| 17 | In SQL, `--` starts a comment, so the rest of the query is ignored | 13 | PASS | "`--` is a comment indicator in SQL... the rest of the query is interpreted as a comment, effectively removing it" |
| 18 | An app is weak if it permits automated attacks such as credential stuffing, which tries a breached list of real usernames and passwords | 4 | PASS | "Permits automated attacks such as credential stuffing, where the attacker has a breached list of valid usernames and passwords" |
| 19 | In Burp, go to Proxy > Intercept, set toggle to Intercept on, click Open Browser | 6 | PASS | "Go to the Proxy > Intercept tab" ... "Set the intercept toggle to Intercept on" ... "Click Open Browser" |
| 20 | That browser is preconfigured to work with Burp | 6 | PASS | "preconfigured to work with Burp right out of the box" |
| 21 | Each request is held, so you can study it and even change it before you forward it | 6 | PASS | "The request is held here so that you can study it, and even modify it, before forwarding it" |
| 22 | Right-click a request and select Send to Repeater | 8 | PASS | "Right-click on any of the... requests and select Send to Repeater" |
| 23 | Change it, click Send, and read the response | 8 | PASS | "Click Send and view the response from the server" |
| 24 | Repeater is made for sending a request with varying parameter values, to test for input-based flaws | 7 | PASS | "Send a request with varying parameter values to test for input-based vulnerabilities" |
| 25 | `docker run --rm -p 127.0.0.1:3000:3000 bkimminich/juice-shop` | 11 | PASS | "Run `docker run --rm -p 127.0.0.1:3000:3000 bkimminich/juice-shop`" |
| 26 | Open `http://localhost:3000` | 11 | PASS | "Browse to http://localhost:3000" |
| 27 | Open it in Burp's browser | 6 | PASS | "Burp Proxy works with Burp's browser to access the target application" |
| 28 | With Intercept on, log in with any email/password; Burp holds the request | 6 | PASS | "The request is held here so that you can study it" |
| 29 | `POST /rest/user/login` with JSON body of email/password; Forward it; app answers 401 | — | N/A | Reports what the writer's own worked example returns when run |
| 30 | Send the login request to Repeater | 8 | PASS | "select Send to Repeater" |
| 31 | Change the email to `<PAYLOAD-A>`, keep any password, click Send | 8 | PASS | "Click Send and view the response" |
| 32 | The answer is 200 with a login token: logged in as first user, the admin | — | N/A | Reports what the writer's own worked example returns when run |
| 33 | The `--` starts an SQL comment, which removes the password check from the WHERE clause | 13 | PASS | "using the SQL comment sequence `--` to remove the password check from the WHERE clause of the query" |
| 34 | Find `GET /rest/basket/<id>` in the HTTP history of Burp Proxy | 6 | PASS | "go to the Proxy > HTTP history tab. Here, you can see the history of all HTTP traffic that has passed through Burp Proxy" |
| 35 | Send it to Repeater, change id to 1, click Send | 8 | PASS | "select Send to Repeater" / "Click Send" |
| 36 | The answer is 200 with the basket of another user: an IDOR | 14 | N/A | Reports what the writer's own worked example returns when run (IDOR label already established at claim 14) |
| 37 | "Without Burp" — same login request works from a terminal (curl example) | — | N/A | Describes the page's own example code |
| 38 | Web Security Academy has free interactive labs | 12 | PASS | "free interactive labs" |
| 39 | Access control should enforce record ownership | 2 | PASS | "Model access controls should enforce record ownership rather than allowing users to create, read, update, or delete any record" |
| 40 | Everything except public resources should be denied by default | 2 | PASS | "Except for public resources, deny by default" |
| 41 | An app is open to injection when user data is not validated, filtered, or sanitized | 3 | PASS | "User-supplied data is not validated, filtered, or sanitized by the application" |
| 42 | Try the boolean conditions `<COND-TRUE>` and `<COND-FALSE>`, compare responses | 13 | PASS | "Boolean conditions such as OR 1=1 and OR 1=2, and look for differences in the application's responses" |
| 43 | Intruder sends same request over and over, different payload in predefined positions each time | 9 | PASS | "send the same HTTP request over and over again, inserting different payloads into predefined positions each time" |
| 44 | SQLi fix: define SQL structure apart from data values, bind values with parameterized queries | 16 | PASS | "define the SQL structure separately from its data values, then bind those values through the database API" / "use parameterized queries for dynamic data values" |
| 45 | For an IDOR, access control should enforce that the record belongs to the user | 2 | PASS | "enforce record ownership" |
| 46 | OWASP Web Security Testing Guide produces a cybersecurity testing resource for web app developers and security professionals | 15 | PASS | "produces the premier cybersecurity testing resource for web application developers and security professionals" |
| 47 | Practise on Juice Shop, Web Security Academy labs, or deliberately vulnerable site of Burp's own tutorial | 10, 12, 6 | PASS | Juice Shop: "insecure web application for security trainings"; WSA: "free interactive labs"; Burp tutorial: "a live, deliberately vulnerable website" |
| 48 | Access control checks can be bypassed by modifying the URL or by an attack tool that modifies API requests | 2 | PASS | "Bypassing access control checks by modifying the URL... or by using an attack tool that modifies API requests" |
| 49 | "Test the request, not only the screen." | — | N/A | Generic tester advice, not a tool/product/command/number fact |
| 50 | An IDOR arises when an app uses user-supplied input to access objects directly | 14 | PASS | "arises when an application uses user-supplied input to access objects directly" |
| 51 | "Test it with two accounts: ask as one user for an object of the other." | — | N/A | Generic tester advice |
| 52 | Also test whether the login permits automated attacks such as credential stuffing | 4 | PASS | "Permits automated attacks such as credential stuffing" |
| 53 | "The payload is only the proof." | — | N/A | Generic statement, not a tool/product/command/number fact |
| 54 | The flaw is user input that reaches the database as a command | 3 | PASS | "allows untrusted user input to be sent to an interpreter (e.g.... database)... causes the interpreter to execute parts of that input as commands" |
| K1 | OWASP Top 10: "An awareness document of the most critical security risks to web applications." | — | PASS | "The OWASP Top 10 is a standard awareness document about the most critical security risks to web applications" |
| K2 | Broken access control: "A user can act outside the permissions they should have." | — | PASS | "Access control should keep users from acting outside their intended permissions" |
| K3 | IDOR: "the app uses user-supplied input to access objects directly." | — | PASS | "An IDOR arises when an app uses user-supplied input to access objects directly" |
| K4 | Injection: "Untrusted input that an interpreter, such as a database, runs as a command." | — | PASS | "An injection flaw sends untrusted input to an interpreter, such as a database, which then runs part of the input as commands" |
| K5 | SQL injection: "Injection into the SQL queries of an app." | — | PASS | "SQL injection lets an attacker interfere with the queries that an app makes to its database" |
| K6 | Credential stuffing: "An automated attack with a breached list of real usernames and passwords." | — | PASS | "credential stuffing, which tries a breached list of real usernames and passwords" |
| K7 | Burp Proxy: "Sits between the browser and the app, to intercept and change the traffic." | — | PASS | "the Proxy sits between the browser and the target app, where you can intercept, inspect, and modify the traffic" |
| K8 | Burp Repeater: "Changes a request and sends it again, as often as you like." | — | PASS | "Repeater sends a request again and again with your changes" |
| K9 | Burp Intruder: "Sends one request many times, with a different payload each time." | — | PASS | "Intruder sends the same request many times, with a different payload in chosen positions each time" |
| K10 | Parameterized query: "A query whose SQL structure is defined apart from its data values, which are bound in separately; the fix for SQL injection." | — | PASS | "the fix is to define the SQL structure apart from its data values and bind the values with parameterized queries" |
| K11 | OWASP Juice Shop: "An insecure web app made for security training." | — | PASS | "OWASP Juice Shop is an insecure web application for security training" |

Open FAILs: 0

FAILs in round 7: 0.

Open FAILs: 0
