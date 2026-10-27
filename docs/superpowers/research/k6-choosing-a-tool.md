# Research notes: k6 / choosing-a-tool

Sources S1-S13 are the 13 entries of `page.sources` (cite n = S n). Fetched 2026-10-27.

| S | Source | Used for |
|---|---|---|
| 1 | jmeter.apache.org | "100% pure Java application designed to load test"; HTTP, SOAP/REST, FTP, JDBC, LDAP, JMS, mail |
| 2 | github.com/apache/jmeter README | Apache license badge; "A fully compliant Java 17 Runtime Environment is required" |
| 3 | github.com/grafana/k6 README | "An embedded JavaScript engine"; "AGPL-3.0 license"; "best developer experience" |
| 4 | grafana.com/docs/k6/latest | "open-source, developer-friendly, and extensible performance testing tool" |
| 5 | docs.locust.io what-is-locust | "regular Python code"; "MIT license"; distributed over multiple machines |
| 6 | artillery.io test-script reference | "Artillery scripts can be written using YAML, TypeScript or JavaScript" |
| 7 | github.com/artilleryio/artillery README | MPL 2.0 for most code; Azure modules under BSL need a commercial license for production |
| 8 | github.com/wg/wrk README | HTTP benchmarking tool; one multi-core CPU; optional LuaJIT script |
| 9 | github.com/gatling/gatling README | "Write tests in Java, JavaScript, TypeScript, Kotlin or Scala"; Community Edition Apache 2.0 |
| 10 | blazemeter.com | works with "JMeter, Selenium, and Playwright"; prices on a separate pricing page |
| 11 | tricentis.com NeoLoad | SLO pass/fail gates in CI/CD across Jenkins, Azure DevOps, GitLab; "Get a demo or trial" |
| 12 | docs.stormforge.io | "Kubernetes rightsizing powered by machine learning" |
| 13 | survey.stackoverflow.co/2024/technology | JavaScript 62.3% of all respondents (64.6% professional); measures "extensive development work over the past year" |

## Cite map
- Table: JMeter [1][2]; k6 [3]; Locust [5]; Artillery [6][7]; wrk [8]; Gatling [9]; BlazeMeter [10]; NeoLoad [11]; StormForge [12].
- LoadRunner and Grinder: no fact on the page, only "check the site". Their sources (OpenText, Grinder project) are not in `page.sources`, because the sites block automated reads.
- Step 1 (not free or open source): the owner's view, no cite. Step 2: [13]. Step 3: [9]. Step 4: [6]. Closing paragraph: [4].
- Key words: k6 [3], Locust [5], Gatling [9].

## Dropped claims (not sourced or not readable)
JMeter "Groovy"; LoadRunner "C, Java", rename, protocol count, license bundles, trial; Grinder "Jython", Java, BSD license; wrk "lacks complex scenarios"; BlazeMeter "built on JMeter", "free version", language "Groovy"; NeoLoad "Java, JS", "commercial/No"; StormForge "YAML, Python", "free tier"; k6 "Prometheus"; "62.3% of code" (the survey measures respondents, not code). Statista not used.

## Owner view (no cite)
Step 1 (remove tools that are not free), the elimination steps, and the k6 experience, in a Callout. Steps 3-4 are flagged out of date: Gatling now has JS/TS; Artillery accepts JS/TS.
