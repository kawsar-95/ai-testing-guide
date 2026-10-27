# Fact-check: content/k6/choosing-a-tool.mdx

Round 2 (2026-10-27): LoadRunner and Grinder facts and their 2 sources were removed; the page now has 13 sources. The Cite numbers in the Cite column below are the round 2 numbers (round 1 numbers 10-15 are now 8-13). Every `<Cite n>` of the page was re-checked against the new `page.sources` list: 1 JMeter site, 2 JMeter README, 3 k6 README, 4 k6 docs, 5 Locust, 6 Artillery docs, 7 Artillery README, 8 wrk, 9 Gatling, 10 BlazeMeter, 11 NeoLoad, 12 StormForge, 13 Stack Overflow. All map to the right claim.

Checked 2026-10-27 by an agent that did not write the page. Sources fetched fresh with curl into /tmp/claude-1000/k6-check-choosing-a-tool/. Sources 8 (OpenText LoadRunner) and 9 (The Grinder) refuse automated fetches (HTTP 444 and 403); alternate official pages (sourceforge.net, GitHub grinder/grinder, opentext.com other pages) also failed or do not exist. Those rows are FAIL "source not verifiable". The page has no k6 script, so `k6 inspect` does not apply.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | JMeter: 100 % pure Java application for load tests | 1 | PASS | "a 100% pure Java application designed to load test functional behavior and measure performance" |
| 2 | JMeter tests HTTP, HTTPS, SOAP/REST, FTP, JDBC, LDAP, JMS, mail | 1 | PASS | Site list: "HTTP, HTTPS ... SOAP / REST Webservices, FTP, Database via JDBC, LDAP, ... JMS, Mail - SMTP(S), POP3(S) and IMAP(S)" |
| 3 | JMeter is open source, Apache license | 2 | PASS | GitHub repo license: "Apache License 2.0" |
| 4 | JMeter needs Java 17 | 2 | PASS | "A fully compliant Java 17 Runtime Environment is required for Apache JMeter to execute." |
| 5 | k6 open source under AGPL-3.0 | 3 | PASS | "distributed under the AGPL-3.0 license" |
| 6 | k6 has an embedded JavaScript engine; tests in JavaScript | 3 | PASS | "An embedded JavaScript engine." |
| 7 | Locust open source, MIT | 5 | PASS | "Open source licensed under the MIT license" |
| 8 | Locust tests are regular Python code | 5 | PASS | "define your tests in regular Python code" |
| 9 | Locust runs on many machines | 5 | PASS | "run load tests distributed over multiple machines" |
| 10 | Artillery tests in YAML, TypeScript, or JavaScript | 6 | PASS | Page index: "YAML, TypeScript, or JavaScript" |
| 11 | Artillery: most code under MPL 2.0 | 7 | PASS | "Most of the code in this repository is licensed under the terms of the MPL 2.0 license." |
| 12 | Some Azure modules need a commercial license for production | 7 | PASS | "Azure-specific modules are licensed under ... BSL"; "commercial and/or production usage requires a commercial license" |
| 13 | LoadRunner is now called OpenText Professional Performance Engineering | 8 | PASS (round 2) | Claim removed from the page. The table row now says only to check the vendor's site (no fact). |
| 14 | LoadRunner supports 180+ protocols | 8 | PASS (round 2) | Claim removed from the page. The table row now says only to check the vendor's site (no fact). |
| 15 | LoadRunner page lists license bundles and a trial | 8 | PASS (round 2) | Claim removed from the page. The table row now says only to check the vendor's site (no fact). |
| 16 | Grinder: Java load testing framework, many load injector machines | 9 | PASS (round 2) | Claim removed from the page. The table row now says only to check the vendor's site (no fact). |
| 17 | Grinder default script language Jython; BSD-style license | 9 | PASS (round 2) | Claim removed from the page. The table row now says only to check the vendor's site (no fact). |
| 18 | wrk: HTTP benchmarking tool, significant load on one multi-core CPU | 8 | PASS | "capable of generating significant load when run on a single multi-core CPU" |
| 19 | wrk: optional LuaJIT script builds requests and reports | 8 | PASS | "An optional LuaJIT script can perform HTTP request generation, response processing, and custom reporting." |
| 20 | Gatling open source under Apache 2.0 | 9 | PASS | "Gatling Community Edition, licensed under Apache 2.0" |
| 21 | Gatling tests in Java, JavaScript, TypeScript, Kotlin, Scala | 9 | PASS | "Write tests in Java, JavaScript, TypeScript, Kotlin or Scala." |
| 22 | BlazeMeter works with JMeter, Selenium, Playwright | 10 | PASS | "supports over 20 open-source frameworks like JMeter, Selenium, and Playwright" |
| 23 | BlazeMeter prices are on a separate pricing page | 10 | PASS | The site nav has a "Pricing" link (weak but accurate). |
| 24 | NeoLoad is a Tricentis product with pass/fail gates for Jenkins, Azure DevOps, GitLab | 11 | PASS | "automated SLO-based pass/fail gates ... across Jenkins, Azure DevOps, GitLab, and more" |
| 25 | Tricentis offers a demo or trial | 11 | PASS | "Get a demo or trial"; "Try it free" |
| 26 | StormForge docs describe Kubernetes rightsizing powered by machine learning | 12 | PASS | "Kubernetes rightsizing powered by machine learning" |
| 27 | Tools differ in language, cost, learning effort; some need Java, some a plugin | none | PASS | The page labels it "the tutorial's own view from its first notes, not a rule". |
| 28 | Step 1 is the owner's view that removes LoadRunner, BlazeMeter, NeoLoad, StormForge; the page tells the reader to check each vendor's site for prices | none | PASS (round 2) | No cites now, in all 3 panels, and it is worded "In the owner's view". |
| 29 | Step 2: Stack Overflow 2024, 62.3 % of all respondents did extensive development work in JavaScript | 13 | PASS | "All Respondents ... JS 62.3%" under "done extensive development work in over the past year". Not stated as a share of code. |
| 30 | Step 3: Gatling repo now lists JavaScript and TypeScript (notes out of date) | 9 | PASS | See row 21. |
| 31 | Step 4: Artillery docs say YAML, TypeScript, or JavaScript | 6 | PASS | See row 10. |
| 32 | k6 docs call k6 open-source, developer-friendly, extensible | 4 | PASS | "Grafana k6 is an open-source, developer-friendly, and extensible performance testing tool" |
| 33 | Owner callout: JDK, JAVA_HOME, JMeter install, .jmx file; k6 built-in InfluxDB output | none | PASS | Marked "not a fact from a source" (owner's experience). `k6 run --out influxdb=...` is accepted by k6 v2.3.0. |
| 34 | Key words: k6 uses JavaScript, AGPL-3.0; Locust Python, MIT; Gatling Apache 2.0 | 3, 5, 9 | PASS | See rows 5-8, 20. |
| 35 | Key words: k6 README names developer experience as the key design goal | 3 | PASS | "The key design goal is to provide the best developer experience." |

## Other checks

- Page shape: `## The tools at a glance`, `## Choosing by elimination`, `## Key words` last. PASS.
- Owner numbers: 62.3 % is cited to the survey and stated as a share of respondents. PASS.
- Out-of-date notes (Gatling JS/TS, Artillery JS/TS) are flagged. PASS.
- Privacy: no personal name, email, path. PASS.
- Copy check (`linux_overlap.py`, 15 files read): no run of 8 or more words. PASS.
- Images: none. PASS.

Round 1 FAILs: 6 (rows 13-17, 28). All fixed in round 2. Copy check re-run: no run of 8 or more words.

## Round 3 (final-review fixes)

Checked the diff of commit f1ff844 for this page (steps 3 and 4 of "Choosing by elimination", all 3 panels).

| # | Claim | Cite | Verdict | Note |
|---|---|---|---|---|
| 36 | Step 3 rule: keep the tools that support JavaScript | none | PASS | The owner's method rule, not a fact. The section intro says "The steps below are the tutorial's own method", and step 4 ends "This is the tutorial's own method". |
| 37 | The Gatling repo lists JavaScript and TypeScript (so a current step 3 keeps it) | 9 | PASS | "Write tests in Java, JavaScript, TypeScript, Kotlin or Scala." Source 9 is still Gatling README. |
| 38 | Step 4: the notes leave k6 and Artillery; the notes do not compare Gatling; a current run compares k6, Artillery, and Gatling by the same test | none | PASS | Statement about the owner's notes and the owner's test, no new fact. The reader is sent to the Gatling docs for the answer; the page gives no Gatling fact there. |
| 39 | Artillery docs say YAML, TypeScript, or JavaScript | 6 | PASS | Unchanged (row 10). |

Copy check re-run: no run of 8 or more words. All `<Cite n>` still map to the 13 sources (counts unchanged). No new heading, no new number.

Round 3 FAILs: 0.

Open FAILs: 0
