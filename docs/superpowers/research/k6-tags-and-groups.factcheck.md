# Fact-check: content/k6/tags-and-groups.mdx

Checked 2026-10-27 by an agent that did not write the page. The 6 sources of `page.sources` were fetched fresh with curl (text in /tmp/claude-1000/k6-check-tags-and-groups/). The quotes of the research notes were not trusted. k6 v2.3.0.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | One `http_req_duration` line mixes both requests; it cannot tell which endpoint is slow | own run | PASS | Own run of script 1 (`k6 run`): one `http_req_duration` line, no split. The owner's output block shows the same. |
| 2 | Owner output 1 is one run on the old host, numbers are not a k6 fact | owner | PASS | Text labels it: other host `jsonplaceholder.typicode.com`, one run, one machine. Shell prompt line is removed. |
| 3 | A second property with the same name replaces the first one in a JS object | 6 | PASS | MDN: "When using the same name for your properties, the second property will overwrite the first." |
| 4 | k6 sees only one threshold; `k6 inspect` lists only `p(95)<500` | own run | PASS | Reproduced: `k6 inspect` on the duplicate-key script lists only `"p(95)<500"` for `http_req_duration`. |
| 5 | "This is not an error, and k6 gives no warning" (duplicate key) | none | PASS (round 2) | A fact with no cite. S3 supports it: "The rest will be silently ignored." (Thresholds, "don't use the same metric more than once"). Own run: no warning on stderr. Add `<Cite n={3} />`. | Round 2: fixed; `<Cite n={3} />` is now after "no warning" in all 3 panels.
| 6 | To give one metric more than one limit, put all expressions in one array | 3 | PASS | S3: "If you want to set multiple thresholds for a metric, specify them with an array for the same key." Example `['p(99)<300', 'p(70)<250', ...]`. |
| 7 | A tag is a key-value pair; tags label requests, checks, thresholds, custom metrics, to filter results | 1 | PASS | S1: "You can tag the following entities: requests checks thresholds custom metrics"; "Tags categorize your checks, thresholds, custom metrics, and requests for in-depth filtering." |
| 8 | Two kinds: system and user-defined | 1 | PASS | S1: "System tags. Tags that k6 automatically assigns. User-defined tags. Tags that you add when you write your script." |
| 9 | System tags `proto`, `status`, `method`, `url`, `name`, `group`, `check`, `error`, `scenario`, `expected_response` | 1 | PASS | All are in the S1 system tag table. |
| 10 | Optional system tags `vu`, `iter`, `ip`, `ocsp_status` | 1 | PASS | S1: "The following system tags are optional. Enable them as needed" with `vu`, `iter`, `ip`, `ocsp_status`. |
| 11 | The `systemTags` option turns system tags on or off | 1 | PASS (round 2) | S1 says only "To disable some of the preceding tags, use the systemTags option." It does not say the option turns tags on. Own run (JSON output, `systemTags: ['status','vu','iter']`): `vu` and `iter` appeared in `metadata`, not in `tags`. Reword to "turns off some system tags", or drop "on". | Round 2: fixed; now "turns off some system tags" in all 3 panels, which S1 supports.
| 12 | `tags` field of the request parameters adds a tag to a request | 1 | PASS | S1 code: `http.get(url, { tags: { my_tag: ... } })`. |
| 13 | Threshold key names a metric and a tag in braces; k6 makes one sub-metric for each tagged value | 3 | PASS | S3: "tagged requests create sub-metrics that you can use in thresholds" with `'metric_name{tag_name:tag_value}'`. |
| 14 | A threshold on a sub-metric limits only requests with that tag | 1 | PASS | S1: "use tags to limit the operations that your thresholds analyze." Own run: `http_req_duration{endpoint:quotes}` line shows only that endpoint. |
| 15 | `check()` third argument takes tags; custom metric `add()` takes tags as second argument | 1 | PASS | S1 code: `check(res, {...}, { my_tag: ... })`, `myTrend.add(res.timings.connecting, { my_tag: ... })`. |
| 16 | Owner output 2: old host, one run, numbers are examples; `{ expected_response:true }` is a system tag | owner, 1 | PASS | Labeled as old host `jsonplaceholder.typicode.com`, one run. Endpoint names `getItem`/`listData` come from the old script and the text calls it old. `expected_response` is in the S1 list. |
| 17 | Test-wide tags go on every metric; set with `--tag NAME=VALUE`, `K6_TAGS=name:value,other:value`, `options.tags`, JSON config | 1 | PASS | S1: "set test-wide tags across all metrics"; "In the CLI, using one or more --tag NAME=VALUE flags / In the K6_TAGS environment variable ... NAME:VALUE pairs / In the script itself / In a JSON config file". Own run: `testid` tag on every point. |
| 18 | Test-wide tags help compare runs | 1 | PASS | S1: "You can use these tags to compare results from multiple tests." |
| 19 | By default k6 does not merge tags from several sources; the highest precedence source replaces the rest | 1 | PASS | S1: "k6 doesn't merge them: whichever source has the highest order of precedence replaces the tags from every lower-priority source entirely." |
| 20 | The `merge-run-tags` feature flag changes this | 1 | PASS | S1: "To merge tags across sources instead of replacing them, enable the merge-run-tags feature flag." |
| 21 | `name` tag holds the request URL by default | 2 | PASS | S2: "By default, tags have a name field that holds the value of the request URL." |
| 22 | Dynamic URL gives many unique values in the metrics stream | 2 | PASS | S2: "could bring a large number of unique URLs into the metrics stream." |
| 23 | Set the `name` tag to collect requests under one name | 2 | PASS | S2: "To aggregate data from dynamic URLs, explicitly set a name tag". |
| 24 | `http.url` template tag sets `name` to the template with the value left out; called URL grouping | 2 | PASS | S2: "use the http.url wrapper to set the name tag with a string template value". Own run: name `https://quickpizza.grafana.com/api/status/${}`. S1 names the "URL grouping feature". |
| 25 | Own run: `http.url` calls got `.../api/status/${}`, `tags.name` calls got `StatusURL`, 3 data points each | own run | PASS | Reproduced with `-o json`: `${}` x3 and `StatusURL` x3 on `http_req_duration`. |
| 26 | Threshold `http_req_duration{name:StatusURL}` is possible | 3 | PASS | Same sub-metric form as claim 13. |
| 27 | Docs say: not one group per request; use URL grouping for dynamic URLs; set `tags.name` for a clear name | 1 | PASS | S1: "Discouraged: one group per request"; "For dynamic URLs, use the URL grouping feature. To provide a meaningful name to your request, set the value of tags.name." |
| 28 | `group(name, fn)` wraps a part of the script | 4 | PASS | S4: "Run code inside a group. Groups are used to organize results in a test." Parameters `name`, `fn`. |
| 29 | Groups can be nested | 1 | PASS | S1: "You can also nest groups for BDD-style testing." |
| 30 | k6 emits `group_duration` per `group()` call: total time to run the function | 1 | PASS | S1: "k6 emits a group_duration metric, which contains the total time to execute the group function." |
| 31 | Checks, requests, custom metrics inside a group get the `group` tag with the group name | 1 | PASS | S1: "k6 sets the tag group with the current group name." |
| 32 | `group` value is wrapping group names separated by `::`; root has empty name; `::List quotes` | 1 | PASS | S1: "separated by :: (two colons)"; "The root group uses the name '' (empty string)"; "::cool requests". |
| 33 | Key `group_duration{group:::List quotes}` has three colons: 1 separator + `::` prefix | 3 | PASS | S3 uses `'group_duration{group:::individualRequests}'`. The split of the colons follows from claim 32. Own run: `k6 inspect` and `k6 run` accept the key and show `group_duration{group:::List quotes}`. |
| 34 | Default summary has no section for each group; `--summary-mode=full` adds group and scenario results | 5 | PASS | S5: "compact (default)"; "full: Includes everything from the compact format, plus additional k6 metrics and detailed results for each group and scenario." Own run: `GROUP: List quotes` and `GROUP: Get headers` appear with full mode. |
| 35 | Owner output 3: old host, one run, default summary, emoji from the owner's script | owner | PASS | Labeled in the text. The owner's output block is a default summary with no GROUP section, as the text says. |
| 36 | A group is for a user step, a tag for a request | tutorial | PASS | Marked as the tutorial's own view in the tip. Not a source fact. |
| 37 | Key words table (tag, system tag, user tag, test-wide tag, sub-metric, `name`, URL grouping, group, `group_duration`) | 1-4 | PASS | Each term repeats a cited claim above. Key words is last. |

## Scripts (`k6 inspect`)

| Script | Result |
|---|---|
| 1 Calling more than one URL | exit 0 |
| 2 Duplicate key | exit 0, one `p(95)<500` |
| 3 Tags | exit 0 |
| 4 `export const options = { tags }` | Fragment, not a full script (no `default` function): exit 255 "no exported functions". Not a FAIL. |
| 5 `http.url` and `tags.name` | exit 0 |
| 6 Groups | exit 0 |

Scripts 1, 3, 5, 6 also ran with `k6 run` against quickpizza.grafana.com: all checks and thresholds pass. No missing import, no removed option or executor. The duplicate key in script 2 is the intended mistake and the page labels it.

## Other checks

- Page shape and spec 5/6: `## Key words` is last; each other `##` has `<Voices>`; no image is used; the demo host is quickpizza.grafana.com. The old host appears only in labeled owner output.
- Privacy: no local path or prompt line in the page (grep for `D:\`, `PS `, `/home`: none).
- Owner numbers (769.76 ms, 72 requests): stated only as one old-host run, not as a k6 fact.
- Copy check (`linux_overlap.py`): 1 run, "grafana com docs k6 latest javascript-api k6 group". It is the S4 source URL in `page.sources`, not prose. PASS.
- `node --test tests/voice-source.test.ts tests/k6.test.ts`: pass.

Open FAILs: 0
