# Research notes: SDET Roadmap, Security Testing with Burp Suite

Page: `content/sdet/security-testing.mdx`. Accessed 2026-11-15.

## Sources

| ID | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | OWASP Top 10:2025 | OWASP Foundation | https://owasp.org/Top10/2025/ | 2026-11-15 |
| S2 | A01:2025 Broken Access Control | OWASP Foundation | https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/ | 2026-11-15 |
| S3 | A05:2025 Injection | OWASP Foundation | https://owasp.org/Top10/2025/A05_2025-Injection/ | 2026-11-15 |
| S4 | A07:2025 Authentication Failures | OWASP Foundation | https://owasp.org/Top10/2025/A07_2025-Authentication_Failures/ | 2026-11-15 |
| S5 | Burp Proxy | PortSwigger | https://portswigger.net/burp/documentation/desktop/tools/proxy | 2026-11-15 |
| S6 | Intercepting HTTP traffic with Burp Proxy | PortSwigger | https://portswigger.net/burp/documentation/desktop/getting-started/intercepting-http-traffic | 2026-11-15 |
| S7 | Burp Repeater | PortSwigger | https://portswigger.net/burp/documentation/desktop/tools/repeater | 2026-11-15 |
| S8 | Reissuing requests with Burp Repeater | PortSwigger | https://portswigger.net/burp/documentation/desktop/getting-started/reissuing-http-requests | 2026-11-15 |
| S9 | Burp Intruder | PortSwigger | https://portswigger.net/burp/documentation/desktop/tools/intruder | 2026-11-15 |
| S10 | OWASP Juice Shop | OWASP Foundation | https://owasp.org/www-project-juice-shop/ | 2026-11-15 |
| S11 | OWASP Juice Shop README | OWASP Juice Shop (GitHub) | https://raw.githubusercontent.com/juice-shop/juice-shop/master/README.md | 2026-11-15 |
| S12 | Web Security Academy | PortSwigger | https://portswigger.net/web-security | 2026-11-15 |
| S13 | SQL injection | PortSwigger Web Security Academy | https://portswigger.net/web-security/sql-injection | 2026-11-15 |
| S14 | Insecure direct object references (IDOR) | PortSwigger Web Security Academy | https://portswigger.net/web-security/access-control/idor | 2026-11-15 |
| S15 | OWASP Web Security Testing Guide | OWASP Foundation | https://owasp.org/www-project-web-security-testing-guide/ | 2026-11-15 |
| S16 | SQL Injection Prevention Cheat Sheet | OWASP Cheat Sheet Series | https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html | 2026-11-15 |

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | The OWASP Top 10 is an awareness document of the most critical web risks. | S1 | "The OWASP Top 10 is a standard awareness document for developers and web application security. It represents a broad consensus about the most critical security risks to web applications." |
| C2 | The 2025 list starts with Broken Access Control. | S1 | "A01:2025 - Broken Access Control A02:2025 - Security Misconfiguration A03:2025 - Software Supply Chain Failures" |
| C3 | Injection is A05 and Authentication Failures is A07. | S1 | "A05:2025 - Injection A06:2025 - Insecure Design A07:2025 - Authentication Failures" |
| C4 | Access control keeps users inside their permissions. | S2 | "Access control enforces policy such that users cannot act outside of their intended permissions." |
| C5 | Seeing or editing another account by its identifier is a failure (IDOR). | S2 | "Permitting viewing or editing someone else's account by providing its unique identifier (insecure direct object references)" |
| C6 | Deny by default. | S2 | "Except for public resources, deny by default." |
| C7 | Enforce record ownership. | S2 | "Model access controls should enforce record ownership rather than allowing users to create, read, update, or delete any record." |
| C8 | Injection: input that an interpreter runs as commands. | S3 | "An injection vulnerability is an application flaw that allows untrusted user input to be sent to an interpreter (e.g. a browser, database, the command line) and causes the interpreter to execute parts of that input as commands." |
| C9 | Unvalidated user data makes an app vulnerable. | S3 | "User-supplied data is not validated, filtered, or sanitized by the application." |
| C10 | Automated attacks such as credential stuffing. | S4 | "Permits automated attacks such as credential stuffing, where the attacker has a breached list of valid usernames and passwords." |
| C11 | Burp Proxy sits between the browser and the app. | S5 | "Burp Proxy operates as a web proxy server between the browser and target applications. It enables you to intercept, inspect, and modify traffic that passes in both directions." |
| C12 | Burp's tutorial uses a deliberately vulnerable website. | S6 | "In this tutorial, you'll use a live, deliberately vulnerable website to learn how to intercept requests with Burp Proxy." |
| C13 | Intercept on, then Open Browser. | S6 | "Go to the Proxy > Intercept tab. Set the intercept toggle to Intercept on . Click Open Browser ." |
| C14 | Burp's browser is preconfigured. | S6 | "This launches Burp's browser, which is preconfigured to work with Burp right out of the box." |
| C15 | An intercepted request is held to study or modify. | S6 | "The request is held here so that you can study it, and even modify it, before forwarding it to the target server." |
| C16 | Repeater modifies and resends a message. | S7 | "Burp Repeater is a tool that enables you to modify and send an interesting HTTP or WebSocket message over and over." |
| C17 | Repeater for input-based vulnerabilities. | S7 | "Send a request with varying parameter values to test for input-based vulnerabilities." |
| C18 | Send to Repeater from a request. | S8 | "select Send to Repeater ." |
| C19 | Send, then read the response. | S8 | "Click Send and view the response from the server." |
| C20 | Intruder automates customized attacks with payload positions. | S9 | "Burp Intruder is a tool for automating customized attacks against web applications. It enables you to configure attacks that send the same HTTP request over and over again, inserting different payloads into predefined positions each time." |
| C21 | Juice Shop is an insecure app for security training. | S10 | "Probably the most modern and sophisticated insecure web application for security trainings, awareness demos and CTFs." |
| C22 | Run Juice Shop with Docker. | S11 | "docker run --rm -p 127.0.0.1:3000:3000 bkimminich/juice-shop" |
| C23 | The Web Security Academy is free online training. | S12 | "The Web Security Academy is a free online training center for web application security." |
| C24 | It has free interactive labs. | S12 | "Learn anywhere, anytime, with free interactive labs and progress-tracking." |
| C25 | SQL injection lets an attacker interfere with database queries. | S13 | "SQL injection (SQLi) is a web security vulnerability that allows an attacker to interfere with the queries that an application makes to its database." |
| C26 | `--` comments out the rest of the query. | S13 | "Crucially, note that -- is a comment indicator in SQL. This means that the rest of the query is interpreted as a comment, effectively removing it." |
| C27 | Test with `OR 1=1` and `OR 1=2`. | S13 | "Boolean conditions such as OR 1=1 and OR 1=2 , and look for differences in the application's responses." |
| C28 | IDOR definition. | S14 | "Insecure direct object references (IDOR) are a type of access control vulnerability that arises when an application uses user-supplied input to access objects directly." |
| C29 | The WSTG is a testing resource. | S15 | "The Web Security Testing Guide (WSTG) Project produces the premier cybersecurity testing resource for web application developers and security professionals." |
| C30 | Fix: parameterized queries. | S16 | "use parameterized queries for dynamic data values" |
| C31 | Access checks can be bypassed by changing the URL or with a tool that modifies API requests. | S2 | "Bypassing access control checks by modifying the URL (parameter tampering or force browsing), internal application state, or the HTML page, or by using an attack tool that modifies API requests." |
| C32 | Repeater takes requests from the Proxy HTTP history. | S8 | "In this example, we'll send a request from the HTTP history in Burp Proxy." |
| C33 | `--` removes the password check from the WHERE clause. | S13 | "the SQL comment sequence -- to remove the password check from the WHERE clause of the query" |
| C34 | Juice Shop runs at http://localhost:3000. | S11 | "Browse to <http://localhost:3000>" |
| C35 | The fix: define the SQL structure apart from its data values and bind them with parameterized queries. | S16 | "define the SQL structure separately from its data values, then bind those values through the database API: use parameterized queries for dynamic data values" |
| C36 | HTTP history in Burp Proxy lists the traffic that passed through it. | S6 | "In Burp, go to the Proxy > HTTP history tab. Here, you can see the history of all HTTP traffic that has passed through Burp Proxy" |

## Run check

Run on 2026-11-15 against a local OWASP Juice Shop container (`bkimminich/juice-shop`, application version `20.4.0-SNAPSHOT`), published on `127.0.0.1:3555` instead of `3000` so that it would not clash with a running dev server. The HTTP requests of "Try it" were sent with `curl`; the Burp Suite steps follow the PortSwigger documentation and were not run here, because Burp is a desktop GUI.

- `POST /rest/user/login` with a wrong email and password: `401`.
- The same request with the email `' OR 1=1--` and any password: `200`, with a token whose payload names `admin@juice-sh.op` (basket id 1).
- A new user registered through `POST /api/Users` (`201`), logged in (own basket id 6). `GET /rest/basket/6` with that user's token: `200`. `GET /rest/basket/1` with the same token: `200`, a basket of `UserId` 1 with 3 products. `GET /rest/basket/1` with no token: `401`.
