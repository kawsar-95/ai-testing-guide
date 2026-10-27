# Research notes: k6 `api-flows` (POST Requests and API Flows)

Date: 2026-10-27. Raw text is in `/tmp/claude-1000/k6-src-api-flows/` (outside the repo). Docs version: `latest` (k6 v2.x).

## Sources

| Id | Cite | Source | URL |
|---|---|---|---|
| S1 | 1 | `k6/http` `post( url, [body], [params] )` | https://grafana.com/docs/k6/latest/javascript-api/k6-http/post |
| S2 | 2 | `Params` (headers, tags, timeout) | https://grafana.com/docs/k6/latest/javascript-api/k6-http/params/ |
| S3 | 3 | `Response` (`status`, `json()`) | https://grafana.com/docs/k6/latest/javascript-api/k6-http/response/ |
| S4 | 4 | Test lifecycle | https://grafana.com/docs/k6/latest/using-k6/test-lifecycle/ |
| S5 | 5 | API CRUD operations (QuickPizza register, login, bearer token) | https://grafana.com/docs/k6/latest/examples/api-crud-operations/ |
| S6 | 6 | Correlation and dynamic data | https://grafana.com/docs/k6/latest/examples/correlation-and-dynamic-data/ |
| S7 | 7 | Checks | https://grafana.com/docs/k6/latest/using-k6/checks/ |

## Claims

| # | Claim | Cite | Quote |
|---|---|---|---|
| 1 | `http.post(url, body, params)`: body can be a string, object, or ArrayBuffer | 1 | "Request body; objects will be x-www-form-urlencoded." |
| 2 | A JSON string body needs a `Content-Type: application/json` header | 1 | `http.post(url, JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })` |
| 3 | An object body is sent as form data with `Content-Type: application/x-www-form-urlencoded` | 1 | "Using an object as body, the headers will automatically include 'Content-Type: application/x-www-form-urlencoded'." |
| 4 | `Params.headers` adds custom headers | 2 | "Object with key-value pairs representing custom HTTP headers the user would like to add to the request." |
| 5 | `Response.status` is the HTTP status code | 3 | "HTTP status code returned by the server." |
| 6 | `Response.json([selector])` parses the body as JSON, caches it, and takes an optional selector | 3 | "Parses the response body data as JSON and returns a JS object or array. This call caches the deserialized JSON data ... An optional selector can be specified" |
| 7 | Correlation: take a value from one response and reuse it | 6 | "extracting one or more values from the response of one request and then reusing them in subsequent requests. Often, this could be getting a token" |
| 8 | A failed check does not stop the test | 7 | "failed checks do not cause the test to abort or finish with a failed status" |
| 9 | `check()` returns a boolean (used by the docs example in an `if`) | 5 | `if (check(res, { 'Rating created correctly': (r) => r.status === 201 })) {` |
| 10 | Docs example: `setup()` makes a user, logs in, returns the token; VU code receives it | 5 | "In the setup() stage we create a user for QuickPizza. We then retrieve and return a bearer token to authenticate the next CRUD requests." |
| 11 | `setup` runs once per test, after init, before the VU stage; full k6 API, HTTP allowed | 4 | "k6 calls setup and teardown only once per test." / "You can call the full k6 API in the setup and teardown stages, unlike the init stage." |
| 12 | Init code cannot make HTTP requests; init runs once per VU | 4 | "One limitation of init code is that it cannot make HTTP requests." / "init context runs once per VU." |
| 13 | `setup()` must finish within `setupTimeout` (default 60 s) | 4 | "must complete within the configured setupTimeout (default: 60 seconds)" |
| 14 | Setup data: JSON only, no functions; large data uses more memory; each VU gets a copy; cannot pass mutated data from `default` to `teardown` | 4 | "You can pass only data (i.e. JSON) between setup and the other stages. You cannot pass functions." / "each stage and each VU has access to a fresh copy" |
| 15 | If `setup()` throws, `teardown()` is not called | 4 | "If the Setup function ends abnormally (e.g throws an error), the teardown() function isn't called." |
| 16 | VU code runs over and over; at the end of `default`, cookies are cleared | 4 | "Once the VU reaches the end of the function, it loops back to the start" / "Cookies are cleared" |

## Tutorial's own view (no cite)

- Do not print tokens with `console.log` (they appear in terminal and CI logs, and one line for each iteration is noise at load).
- Per-VU token in an init-scope variable: tutorial pattern, built on claim 12; run against QuickPizza (2 VUs, 6 iterations: 6 GETs plus 4 login calls, 10 requests).

## Scripts (in `/tmp/claude-1000/k6-check/`)

`flow-basic.js`, `flow-setup.js`, `flow-per-vu.js`: `k6 inspect` exit 0. The last two were run with `k6 run` against QuickPizza: all checks passed.
