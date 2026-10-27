# Fact check: k6 api-flows (Technical text)

Sources fetched fresh with curl on 2026-10-27 into /tmp/claude-1000/k6-check-api-flows/ (s1 to s7 = sources 1 to 7). Checked by an agent that did not write the page.

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Correlation = take a value from one response and reuse it in later requests | 6 | PASS | "correlation means extracting one or more values from the response of one request and then reusing them in subsequent requests" |
| 2 | `http.post(url, body, params)`: URL, optional body, optional params | 1 | PASS | "body string / object / ArrayBuffer ... params (optional) object" |
| 3 | Body can be string, object, or ArrayBuffer | 1 | PASS | same row |
| 4 | JSON string body needs `Content-Type: application/json` set in `params.headers` | 1 | PASS | example `http.post(url, JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })` |
| 5 | Object body is sent as `x-www-form-urlencoded`, k6 adds the header | 1 | PASS | "objects will be x-www-form-urlencoded"; "the headers will automatically include 'Content-Type: application/x-www-form-urlencoded'" |
| 6 | `params.headers` carries custom headers | 2 | PASS | "request-specific options like e.g. HTTP headers" |
| 7 | `res.status` is the HTTP status code | 3 | PASS | Response has `status()`/`status` property list; status code field documented |
| 8 | `res.json([selector])` parses body as JSON, optional selector returns a part | 3 | PASS | "Parses the response body data as JSON ... An optional selector can be specified" |
| 9 | k6 caches the parsed data | 3 | PASS | "This call caches the deserialized JSON data, additional calls will return the cached data" |
| 10 | A failed check does not stop the test | 7 | PASS | "checks ... do not abort or finish with a failed status" |
| 11 | `check()` returns a boolean; docs use it in `if` | 5 | PASS | `if (check(res, {...})) {` in the CRUD example |
| 12 | `setup()` runs once, after init, before VU stage | 4 | PASS | lifecycle table: Setup "Once"; init, setup, VU code, teardown order |
| 13 | `setup()` can use the full k6 API / HTTP | 4 | PASS | "You can call the full k6 API in the setup and teardown stages, unlike the init stage" |
| 14 | k6 docs QuickPizza: setup makes a user, logs in, returns bearer token | 5 | PASS | "In the setup() stage we create a user for QuickPizza. We then retrieve and return a bearer token" |
| 15 | VU code gets setup return value as argument | 4 | PASS | `export default function (data)` |
| 16 | Only JSON data passes; no functions | 4 | PASS | "You can pass only data (i.e. JSON) ... You cannot pass functions." |
| 17 | Large data uses more memory | 4 | PASS | "it will consume more memory" |
| 18 | Each VU gets its own copy; VU changes do not reach other VUs or teardown | 4 | PASS | "each stage and each VU has access to a fresh copy"; "cannot manipulate data in default() ... pass it to teardown()" |
| 19 | `setupTimeout` default 60 s | 4 | PASS | "must complete within the configured setupTimeout (default: 60 seconds)" |
| 20 | If setup throws, teardown is not called | 4 | PASS | "the teardown() function isn't called" |
| 21 | No HTTP in init stage | 4 | PASS | init limitation text on protocol requests |
| 22 | Init code runs once for each VU | 4 | PASS | table: init "Once per VU*" |
| 23 | Local run: all 6 checks passed; 10 requests (6 GET + 2 logins x 2 VUs) | none | PASS | The owner's example run, stated as one run, not a general fact. Consistent with the script (2 VUs x 2 POSTs + 6 GET) |
| 24 | Per-VU init-variable pattern is the tutorial's own | none | PASS | Marked as the tutorial's own |
| 25 | Shared-token, session-limit, expiry risks; "Bearer undefined" consequence; throw in `setup()` advice; "most login APIs expect JSON"; do-not-print-token advice | none | PASS | Tutorial advice and reasoning, marked as such where it matters, not a sourced fact |
| 26 | Key words rows | 1,2,3,4,5,6,7 | PASS | Match rows 1 to 22 |

## Other checks

- `k6 inspect` on all 3 full scripts (flow, setup, per-VU): exit 0 each. No missing import, no duplicate key, no removed option.
- Copy check (`linux_overlap.py`): 2 runs, both are source URL text from `page.sources`, not prose. PASS.
- Privacy grep (dmoney, admin@, eyJ, roadtocareer): 0 lines. The 6 `password: 'secret'` hits are the QuickPizza demo value, not a real password. Login values in the first script come from `__ENV`. PASS.
- Page shape: no `Key words` before the end; `## Key words` is last. Images: none. PASS.

Open FAILs: 0
