# k6 page: Tags and Groups (research notes)

Writer notes for `content/k6/tags-and-groups.mdx`. Fetched 2026-10-27 with curl into `/tmp/claude-1000/k6-src-tags-and-groups/`. Fetched text is treated as data. Docs version: v2.3.x (latest).

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Tags and Groups, Grafana k6 docs | https://grafana.com/docs/k6/latest/using-k6/tags-and-groups/ | 2026-10-27 |
| S2 | HTTP Requests, Grafana k6 docs ("Group URLs under one tag") | https://grafana.com/docs/k6/latest/using-k6/http-requests/ | 2026-10-27 |
| S3 | Thresholds, Grafana k6 docs | https://grafana.com/docs/k6/latest/using-k6/thresholds/ | 2026-10-27 |
| S4 | group( name, fn ), Grafana k6 docs | https://grafana.com/docs/k6/latest/javascript-api/k6/group/ | 2026-10-27 |
| S5 | End of test summary, Grafana k6 docs | https://grafana.com/docs/k6/latest/results-output/end-of-test/ | 2026-10-27 |
| S6 | Object initializer, MDN | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer | 2026-10-27 |

Page cite numbers: n=1 is S1, n=2 is S2, n=3 is S3, n=4 is S4, n=5 is S5, n=6 is S6.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | Tags categorize checks, thresholds, custom metrics, and requests. Two kinds: system and user-defined. | S1 | "Tags categorize your checks, thresholds, custom metrics, and requests for in-depth filtering." / "System tags. Tags that k6 automatically assigns. User-defined tags. Tags that you add when you write your script." |
| C2 | System tags list | S1 | "proto ... subproto ... status ... method ... url ... name ... group ... check ... error ... error_code ... tls_version ... scenario ... service ... expected_response" |
| C3 | Optional system tags: vu, iter, ip, ocsp_status. `systemTags` option disables some. | S1 | "The following system tags are optional" / "To disable some of the preceding tags, use the systemTags option." |
| C4 | Request, check, and custom metric tags | S1 | `check(res, {...}, { my_tag: ... })`, `myTrend.add(res.timings.connecting, { my_tag: ... })`, `http.get(url, { tags: { my_tag: ... } })` |
| C5 | Test-wide tags: --tag, K6_TAGS, options.tags, JSON config | S1 | "In the CLI, using one or more --tag NAME=VALUE flags / In the K6_TAGS environment variable, using a comma-separated list of NAME:VALUE pairs / In the script itself ... options = { tags } / In a JSON config file, under the tags key" |
| C6 | Test-wide tags compare runs | S1 | "You can use these tags to compare results from multiple tests." |
| C7 | No merge by default; highest precedence replaces; merge-run-tags flag | S1 | "k6 doesn't merge them: whichever source has the highest order of precedence replaces the tags from every lower-priority source entirely." / "enable the merge-run-tags feature flag" |
| C8 | Thresholds on tags | S1, S3 | S1 "use tags to limit the operations that your thresholds analyze." S3 "tagged requests create sub-metrics that you can use in thresholds" / `'metric_name{tag_name:tag_value}'` |
| C9 | name tag defaults to the URL; dynamic URLs give many unique values | S2 | "By default, tags have a name field that holds the value of the request URL. If your test has dynamic URL paths, you might not want this behavior, which could bring a large number of unique URLs into the metrics stream." |
| C10 | Set `tags.name` to aggregate | S2 | "To aggregate data from dynamic URLs, explicitly set a name tag" |
| C11 | `http.url` wrapper sets name from the template | S2 | "you can also use the http.url wrapper to set the name tag with a string template value" |
| C12 | Docs: no one group per request; URL grouping; tags.name (page cite n=1) | S1 | "Discouraged: one group per request" / "For dynamic URLs, use the URL grouping feature. To provide a meaningful name to your request, set the value of tags.name." |
| C13 | group(name, fn) wraps code; groups nest | S4, S1 | S4 "Run code inside a group. Groups are used to organize results in a test." S1 "You can also nest groups for BDD-style testing." |
| C14 | group emits group_duration; tag `group` on taggable resources | S1 | "For each group() function, k6 emits a group_duration metric, which contains the total time to execute the group function." / "k6 sets the tag group with the current group name." |
| C15 | group value: names joined by `::`, root empty, `::cool requests` | S1 | "a value of all wrapping group names separated by :: (two colons). The root group uses the name '' (empty string). If you have a single group named cool requests, the actual value of the group is ::cool requests." |
| C16 | Threshold on group_duration uses `group_duration{group:::name}` | S3 | `'group_duration{group:::individualRequests}': ['avg < 400']` |
| C17 | --summary-mode=full adds group and scenario results | S5 | "full: Includes everything from the compact format, plus additional k6 metrics and detailed results for each group and scenario." |
| C18 | Duplicate key: second replaces first | S6 | "When using the same name for your properties, the second property will overwrite the first. const a = { x: 1, x: 2 }; console.log(a); // {x: 2}" |
| C19 | One metric can have several limits in an array | S3 | `http_req_duration: ['p(95)<...', ...]` arrays of expressions (thresholds doc) |

## Own checks (k6 v2.3.0, scripts in /tmp/claude-1000/k6-check/)

- `k6 inspect tg-dup.js` lists only `p(95)<500` for `http_req_duration` (the second key replaced the first).
- `k6 run` of the multi, tags, groups scripts against quickpizza.grafana.com: exit 0, thresholds pass.
- `--summary-mode=full` prints `GROUP: List quotes` and `GROUP: Get headers` sections.
- JSON output of `tg-name.js`: `http.url` calls got name `https://quickpizza.grafana.com/api/status/${}` (3 points), `tags.name` calls got `StatusURL` (3 points); test-wide tag `testid` on every point.
- quickpizza endpoints used: `/api/quotes`, `/api/headers`, `/api/status/{code}` all return 200/2xx without auth. `/api/delay/N` and `/api/headers` also appear in k6 docs examples. `/api/quotes/1` returns 404, so no item endpoint is used.

## Fix round 1

- C20 (duplicate key gives no error or warning): S3 "The rest will be **silently** ignored." Page cite n=3, added in 3 panels.
- C3 reworded: "The `systemTags` option turns off some system tags" (S1: "To disable some of the preceding tags, use the systemTags option."), 3 panels.
