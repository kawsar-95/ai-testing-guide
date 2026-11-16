# Fact check: sdet / playwright-api

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep, and Glob only; no web access) that did not write the page. It got only the page, the visible text of the sources that the page cites (fetched with a plain GET, as `scripts/sdet_claimcheck.py` reads them), and the brief in `sdet-factcheck-brief.md`. After a round with FAILs, the author fixed the page and its research note, and the next round checked the whole page again.

## Round 1 (2026-11-15)

### Fact check: sdet / playwright-api (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: API tests in Playwright Test with no browser page; request fixture, status and JSON body checks, test data setup, log in once | none | N/A | Describes the page itself. |
| 2 | Intro: the page shows how Playwright Test calls an API with no browser page, and how one login serves a suite | none | N/A | Describes the page itself. |
| 3 | Playwright can access the REST API of your application | S1 | PASS | "Playwright can be used to get access to the  REST  API of your application." |
| 4 | A test sends requests to the server directly from Node.js, without loading a page | S1 | PASS | "send requests to the server directly from Node.js without loading a page and running js code in it" |
| 5 | The docs name three uses: test your server API; prepare server-side state before a test visits the web app; check server-side results after actions in the browser | S1 | PASS | "Test your server API. / Prepare server side state before visiting the web application in a test. / Validate server side post-conditions after running some actions in the browser." The source calls them "A few examples". |
| 6 | APIRequestContext can trigger API endpoints, configure microservices, and prepare the environment of an end-to-end test | S2 | PASS | "You can use it to trigger API endpoints, configure micro-services, prepare environment or the service to your e2e test." |
| 7 | In Playwright Test, the built-in `request` fixture gives each test its own isolated `APIRequestContext` | S6 | FAIL | S6 says only "Test fixtures are isolated between tests." It never mentions the `request` fixture or `APIRequestContext`. S1 says "Playwright Test comes with the built-in  request  fixture". Fix: cite S1 for the built-in `request` fixture, and drop "its own isolated `APIRequestContext`" or state only that fixtures are isolated between tests (S6). |
| 8 | A test asks for `request`, the way a UI test asks for `page` | S6 | FAIL | S6 has "The  { page }  argument tells Playwright Test to set up the  page  fixture" but nothing about `request`. Fix: cite S1 for the `request` fixture, or drop the `request` half. |
| 9 | The fixture respects the config options `baseURL` and `extraHTTPHeaders` | S1 | PASS | "built-in  request  fixture that respects configuration options like  baseURL  or  extraHTTPHeaders  we specified" |
| 10 | `params` adds query parameters to the URL | S2 | PASS | "Request parameters can be configured with  params  option, they will be serialized into the URL search parameters" |
| 11 | `data` sets the body: an object is serialized to JSON, and `content-type` becomes `application/json` unless you set it | S2 | PASS | "If the data parameter is an object, it will be serialized to json string and  content-type  header will be set to  application/json  if not explicitly set." |
| 12 | `status()` is the status code | S3 | PASS | "Contains the status code of the response (e.g., 200 for a success)." |
| 13 | `ok()` is `true` when the status is in the range 200–299 | S3 | PASS | "Contains a boolean stating whether the response was successful (status in the range 200-299) or not." |
| 14 | `json()` returns the body as JSON and throws if the body is not valid JSON; `text()` returns it as text | S3 | PASS | "Returns the JSON representation of response body." / "This method will throw if the response body is not parsable via  JSON.parse ." / "Returns the text representation of response body." |
| 15 | `await expect(response).toBeOK()` checks that the status is in the range 200..299 | S4 | PASS | "Ensures the response status code is within  200..299  range." |
| 16 | By default the call returns a response for every status code; with `failOnStatusCode` it throws on codes other than 2xx and 3xx | S2 | PASS | "Whether to throw on response codes other than 2xx and 3xx. By default response object is returned for all status codes." |
| 17 | The test calls the Postman Echo service | S8 | N/A | Reports what the page's own example does. |
| 18 | Postman Echo returns a JSON response with the details of the request you sent | S8 | PASS | "The Echo service returns a JSON response that includes all details from the request you sent" |
| 19 | Postman Echo needs no authentication | S8 | PASS | "it provides a quick way to send a request without worrying about authentication or request configuration" |
| 20 | `test.use()` in the test file sets `baseURL` for its tests | S1 | PASS | "we'll also set the  baseURL  to simplify the tests. You can either put them in the configuration file, or in the test file with  test.use() ." |
| 21 | A request then needs only the path | S7 | FAIL | S7 says "Base URL used for all pages in the context. Allows navigating by using just the path, for example  page.goto('/settings') ." That is about page navigation, not API requests. Fix: cite S1 only for the `baseURL` setup, or say `baseURL` allows navigating with just the path (pages). |
| 22 | Run: no browser window opens, the `request` fixture is not a page | S1 | PASS | "send requests to the server directly from Node.js without loading a page" |
| 23 | Create test data before the tests and delete it afterwards with the `beforeAll` and `afterAll` hooks | S1 | PASS | "You probably want to create a new one before running tests and delete it afterwards. Use  beforeAll  and  afterAll  hooks for that." |
| 24 | Mix API and UI: prepare server state with an API call before a UI test; or act in the browser, then check the server-side result with an API call | S1 | PASS | "prepare server state before running a test or to check some postconditions on the server after performing some actions in the browser. All of that could be achieved via  APIRequestContext  methods." |
| 25 | If the app can log in through an API faster than through the UI, send the login request with `APIRequestContext` and save the authenticated state | S5 | PASS | "Your web application supports authenticating via API that is easier/faster than interacting with the app UI." / "We will send the API request with  APIRequestContext  and then save authenticated state as usual." |
| 26 | A setup project logs in once, and each test starts already logged in | S5 | PASS | "Authenticate once in the  setup project , save the authentication state, and then reuse it to bootstrap each test already authenticated." |
| 27 | Storage state works in both a `BrowserContext` and an `APIRequestContext` | S1 | PASS | "Storage state is interchangeable between  BrowserContext  and  APIRequestContext ." |
| 28 | You can parameterize a test at the test level, for example with a loop over cases | S9 | PASS | "You can either parameterize tests on a test level or on a project level." The loop is the page's own example code. |
| 29 | The Playwright docs read the API token from `process.env.API_TOKEN` and send it in `extraHTTPHeaders` | S1 | PASS | "Assuming personal access token available in the environment." / "'Authorization'  :     `  token   ${  process  .  env  .  API_TOKEN  }  `" |
| 30 | By default, a request returns a response for every status code | S2 | PASS | "By default response object is returned for all status codes." |
| 31 | Assert the status, or set `failOnStatusCode` | S2 | PASS | "Whether to throw on response codes other than 2xx and 3xx." The "assert the status" part is advice. |
| 32 | `json()` throws if the body cannot be parsed | S3 | PASS | "This method will throw if the response body is not parsable via  JSON.parse ." |
| 33 | For an error page, read `text()` first | S3 | N/A | Advice. S3 only says "Returns the text representation of response body." |
| 34 | The documented usage is `await expect(response).toBeOK()`, and it returns a Promise | S4 | PASS | "await     expect  (  response  )  .  toBeOK  (  )" / "Promise < void >" |
| 35 | Fixtures are isolated between tests | S6 | PASS | "Test fixtures are isolated between tests." |
| 36 | Make each test create the data it needs, in the test or in a hook | S1 | PASS | "You probably want to create a new one before running tests and delete it afterwards. Use  beforeAll  and  afterAll  hooks for that." |
| 37 | The saved state file can hold cookies that let someone act as your test account; the docs strongly advise against committing it | S5 | PASS | "The browser state file may contain sensitive cookies and headers that could be used to impersonate you or your test account. We strongly discourage checking them into private or public repositories." |
| K1 | `APIRequestContext`: the Playwright class that sends HTTP requests to an API, with no page | none | PASS | Technical, What it is: "A test sends requests to the server directly from Node.js, without loading a page ... The class behind it is `APIRequestContext`." |
| K2 | `request` fixture: the isolated `APIRequestContext` that Playwright Test gives each test | none | PASS | Technical, What it is: "the built-in `request` fixture gives each test its own isolated `APIRequestContext`" (the cite for this claim fails, see row 7). |
| K3 | `APIResponse`: `status()`, `ok()`, `json()`, and `text()` | none | PASS | Technical, How it works: "`status()` is the status code. `ok()` is `true` ... `json()` returns the body as JSON ...; `text()` returns it as text" |
| K4 | `toBeOK()`: status in the range 200..299 | none | PASS | Technical, How it works: "checks that the status is in the range 200..299" |
| K5 | `baseURL`: the start of every URL, so a request needs only the path | none | PASS | Technical, Try it: "`test.use()` in the test file sets `baseURL` for its tests. A request then needs only the path." (the cite for the second sentence fails, see row 21). |
| K6 | `extraHTTPHeaders`: headers the fixture adds to every request, such as a token | none | FAIL | No Technical panel says the headers are added to every request. The panels say only: "The fixture respects the config options `baseURL` and `extraHTTPHeaders`" and "send it in `extraHTTPHeaders`". Fix: "A config option that the `request` fixture respects; the docs send the API token in it." |
| K7 | `failOnStatusCode`: makes a request throw on codes other than 2xx and 3xx | none | PASS | Technical, How it works: "With the `failOnStatusCode` option, it throws on codes other than 2xx and 3xx" |
| K8 | Storage state: saved cookies and storage of a logged-in session, usable by browser and API contexts | none | PASS | Technical, How a tester uses it: "Storage state works in both a `BrowserContext` and an `APIRequestContext`." Also: "save the authenticated state" and "The saved state file can hold cookies". |
| K9 | Setup project: a project that runs first, for example to log in once for all tests | none | FAIL | No Technical panel says it runs first. They say only: "A setup project logs in once, and each test starts already logged in". Fix: "A project that logs in once, so that each test starts already logged in." |
| K10 | Parameterized test: one test that runs once for each case in a list | none | PASS | Technical, How a tester uses it: "Run one test with many data sets. You can parameterize a test at the test level, for example with a loop over cases" |

Open FAILs: 5

FAILs in round 1: 5.

## Round 2 (2026-11-16)

### Fact check: sdet / playwright-api (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: API tests in Playwright Test with no browser page: send requests, check status and JSON body, set up data, log in once | none | N/A | Describes the page itself. |
| 2 | Intro: the page shows how Playwright Test calls an API with no browser page | none | N/A | Describes the page itself. |
| 3 | Playwright can access the REST API of your application | S1 | PASS | "Playwright can be used to get access to the  REST  API of your application." |
| 4 | A test sends requests to the server directly from Node.js, without loading a page | S1 | PASS | "send requests to the server directly from Node.js without loading a page" |
| 5 | The docs name three uses: test your server API; prepare server-side state before a test visits the web app; check server-side results after actions in the browser | S1 | PASS | "Test your server API." / "Prepare server side state before visiting the web application in a test." / "Validate server side post-conditions after running some actions in the browser." |
| 6 | `APIRequestContext` can trigger API endpoints, configure microservices, and prepare the environment of an end-to-end test | S2 | PASS | "You can use it to trigger API endpoints, configure micro-services, prepare environment or the service to your e2e test." |
| 7 | Playwright Test comes with a built-in `request` fixture, ready to send requests | S1 | PASS | "Playwright Test comes with the built-in  request  fixture ... and is ready to send some requests." |
| 8 | Test fixtures are isolated between tests | S6 | PASS | "Test fixtures are isolated between tests." |
| 9 | A test names the fixtures it needs in its arguments, as `{ page }` does for the page fixture | S6 | PASS | "The  { page }  argument tells Playwright Test to set up the  page  fixture and provide it to your test function." |
| 10 | The API tests take `{ request }` | S1 | PASS | S1 example code: "async     (  {   request   }  )" |
| 11 | The fixture respects the config options `baseURL` and `extraHTTPHeaders` | S1 | PASS | "request  fixture that respects configuration options like  baseURL  or  extraHTTPHeaders" |
| 12 | `extraHTTPHeaders` holds additional HTTP headers to be sent with every request | S7 | PASS | "An object containing additional HTTP headers to be sent with every request." |
| 13 | `params` adds query parameters to the URL | S2 | PASS | "Query parameters to be sent with the URL." |
| 14 | `data` sets the body: an object is serialized to JSON, and `content-type` becomes `application/json` unless you set it | S2 | PASS | "If the data parameter is an object, it will be serialized to json string and  content-type  header will be set to  application/json  if not explicitly set." |
| 15 | `status()` is the status code | S3 | PASS | "Contains the status code of the response (e.g., 200 for a success)." |
| 16 | `ok()` is `true` when the status is in the range 200–299 | S3 | PASS | "Contains a boolean stating whether the response was successful (status in the range 200-299) or not." |
| 17 | `json()` returns the body as JSON and throws if the body is not valid JSON; `text()` returns it as text | S3 | PASS | "Returns the JSON representation of response body." / "This method will throw if the response body is not parsable via  JSON.parse ." / "Returns the text representation of response body." |
| 18 | `await expect(response).toBeOK()` checks that the status is in the range 200..299 | S4 | PASS | "Ensures the response status code is within  200..299  range." |
| 19 | By default the call returns a response for every status code; `failOnStatusCode` makes it throw on codes other than 2xx and 3xx | S2 | PASS | "Whether to throw on response codes other than 2xx and 3xx. By default response object is returned for all status codes." |
| 20 | The test calls the Postman Echo service | S8 | PASS | "You can use the Postman Echo service to test requests in Postman." |
| 21 | It returns a JSON response with the details of the request you sent | S8 | PASS | "The Echo service returns a JSON response that includes all details from the request you sent" |
| 22 | It needs no authentication | S8 | PASS | "it provides a quick way to send a request without worrying about authentication or request configuration." |
| 23 | `test.use()` in the test file sets `baseURL` for its tests, to simplify them | S1 | PASS | "we'll also set the  baseURL  to simplify the tests. You can either put them in the configuration file, or in the test file with  test.use() ." |
| 24 | Run step: No browser window opens: the `request` fixture is not a page | S1 | FAIL | S1 only says "send requests to the server directly from Node.js without loading a page". It does not say that no browser window opens or that the fixture "is not a page". Fix: "A test sends requests without loading a page." |
| 25 | Create what the tests need before they run, and delete it afterwards, with the `beforeAll` and `afterAll` hooks | S1 | PASS | "You probably want to create a new one before running tests and delete it afterwards. Use  beforeAll  and  afterAll  hooks for that." |
| 26 | Mix API and UI: prepare server state with an API call before a UI test; or act in the browser, then check the server-side result with an API call | S1 | PASS | "Prepare server side state before visiting the web application in a test." / "Validate server side post-conditions after running some actions in the browser." |
| 27 | If the app can log in through an API faster than through the UI, send the login request with `APIRequestContext` and save the authenticated state | S5 | PASS | "authenticating via API that is easier/faster than interacting with the app UI." / "We will send the API request with  APIRequestContext  and then save authenticated state as usual." |
| 28 | A setup project logs in once, and each test starts already logged in | S5 | PASS | "Authenticate once in the  setup project , save the authentication state, and then reuse it to bootstrap each test already authenticated." |
| 29 | Storage state works in both a `BrowserContext` and an `APIRequestContext` | S1 | PASS | "Storage state is interchangeable between  BrowserContext  and  APIRequestContext ." |
| 30 | You can parameterize a test at the test level | S9 | PASS | "You can either parameterize tests on a test level or on a project level." |
| 31 | The Playwright docs read the API token from `process.env.API_TOKEN` and send it in `extraHTTPHeaders` | S1 | PASS | "Assuming personal access token available in the environment." / "'Authorization'  :     `  token   ${  process  .  env  .  API_TOKEN  }  `" (in the config, next to "Add authorization token to all requests") |
| 32 | By default, a request returns a response for every status code | S2 | PASS | "By default response object is returned for all status codes." |
| 33 | Assert the status, or set `failOnStatusCode` | S2 | PASS | "Whether to throw on response codes other than 2xx and 3xx." |
| 34 | `json()` throws if the body cannot be parsed | S3 | PASS | "This method will throw if the response body is not parsable via  JSON.parse ." |
| 35 | For an error page, read `text()` first | S3 | N/A | Advice. The source only says "Returns the text representation of response body." |
| 36 | The documented usage is `await expect(response).toBeOK()`, and it returns a Promise | S4 | PASS | "await     expect  (  response  )  .  toBeOK  (  )" / "Promise < void >" |
| 37 | Fixtures are isolated between tests | S6 | PASS | "Test fixtures are isolated between tests." |
| 38 | Make each test create the data it needs, in the test or in a hook | S1 | PASS | "Now we can add a few tests that will create new issues in the repository." / "create a new one before running tests and delete it afterwards. Use  beforeAll  and  afterAll  hooks for that." |
| 39 | The saved state file can hold cookies that let someone act as your test account; the docs strongly advise against committing it | S5 | PASS | "The browser state file may contain sensitive cookies and headers that could be used to impersonate you or your test account. We strongly discourage checking them into private or public repositories." |
| K1 | `APIRequestContext`: the class that sends HTTP requests to an API, with no page | none | PASS | Technical, What it is: "The class behind it is `APIRequestContext`." and "sends requests to the server directly from Node.js, without loading a page" |
| K2 | `request` fixture: built-in, sends API requests, respects `baseURL` and `extraHTTPHeaders` | none | PASS | Technical, What it is: "a built-in `request` fixture, ready to send requests". Technical, How it works: "The fixture respects the config options `baseURL` and `extraHTTPHeaders`" |
| K3 | `APIResponse`: `status()`, `ok()`, `json()`, `text()` | none | PASS | Technical, How it works: "`status()` is the status code. `ok()` is `true` ... `json()` returns the body as JSON ... `text()` returns it as text" |
| K4 | `toBeOK()`: the status is in the range 200..299 | none | PASS | Technical, How it works: "checks that the status is in the range 200..299" |
| K5 | `baseURL`: requests then give only the path | none | PASS | Technical, Try it: "sets `baseURL` for its tests, to simplify them: each request below gives only the path, such as `/post`." |
| K6 | `extraHTTPHeaders`: additional headers sent with every request, such as a token | none | PASS | Technical, How it works: "additional HTTP headers to be sent with every request". Technical, How a tester uses it: "send it in `extraHTTPHeaders`" |
| K7 | `failOnStatusCode`: makes a request throw on codes other than 2xx and 3xx | none | PASS | Technical, How it works: "With the `failOnStatusCode` option, it throws on codes other than 2xx and 3xx" |
| K8 | Storage state: the saved cookies and storage of a logged-in session, usable by browser and API contexts | none | FAIL | No Technical panel says that storage state is "cookies and storage". Technical panels say only "Storage state works in both a `BrowserContext` and an `APIRequestContext`" and "The saved state file can hold cookies". Fix: "The saved authenticated state; it works in both a BrowserContext and an APIRequestContext." |
| K9 | Setup project: logs in once, so each test starts already logged in | none | PASS | Technical, How a tester uses it: "A setup project logs in once, and each test starts already logged in" |
| K10 | Parameterized test: one test that runs once for each case in a list | none | FAIL | Technical panels say only "You can parameterize a test at the test level, for example with a loop over cases". They do not say it runs once for each case. Fix: "A test parameterized at the test level, for example with a loop over cases." |

Open FAILs: 3

FAILs in round 2: 3.

## Round 3 (2026-11-16)

### Fact check: sdet / playwright-api (round 3)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: API tests in Playwright Test, no browser page, request fixture, status and JSON body, test data, log in once | none | N/A | Describes the page itself. |
| 2 | Intro: the page shows how Playwright Test calls an API with no browser page in between | none | N/A | Describes the page itself. |
| 3 | What it is: Playwright can access the REST API of your application | S1 | PASS | "Playwright can be used to get access to the  REST  API of your application." |
| 4 | A test sends requests to the server directly from Node.js, without loading a page | S1 | PASS | "send requests to the server directly from Node.js without loading a page and running js code in it" |
| 5 | The docs name three uses: test your server API; prepare server-side state before a test visits the web app; check server-side results after actions in the browser | S1 | PASS | "Test your server API. / Prepare server side state before visiting the web application in a test. / Validate server side post-conditions after running some actions in the browser." |
| 6 | `APIRequestContext` can trigger API endpoints, configure microservices, and prepare the environment of an end-to-end test | S2 | PASS | "You can use it to trigger API endpoints, configure micro-services, prepare environment or the service to your e2e test." |
| 7 | Playwright Test comes with a built-in `request` fixture, ready to send requests | S1 | PASS | "Playwright Test comes with the built-in  request  fixture that ... is ready to send some requests." |
| 8 | Test fixtures are isolated between tests | S6 | PASS | "Test fixtures are isolated between tests." |
| 9 | How it works: a test names the fixtures it needs in its arguments, as `{ page }` does for the page fixture | S6 | PASS | "The  { page }  argument tells Playwright Test to set up the  page  fixture and provide it to your test function." |
| 10 | API tests take `{ request }` | S1 | PASS | "Playwright Test comes with the built-in  request  fixture ..." I did not find the `({ request })` argument form in the lines I searched. The built-in fixture quote supports the claim. |
| 11 | The fixture respects the config options `baseURL` and `extraHTTPHeaders` | S1 | PASS | "built-in  request  fixture that respects configuration options like  baseURL  or  extraHTTPHeaders" |
| 12 | `extraHTTPHeaders` holds additional HTTP headers to be sent with every request | S7 | PASS | "An object containing additional HTTP headers to be sent with every request." |
| 13 | `params` adds query parameters to the URL | S2 | PASS | "Request parameters can be configured with  params  option, they will be serialized into the URL search parameters" |
| 14 | `data` sets the body: an object is serialized to JSON, and `content-type` becomes `application/json` unless you set it | S2 | PASS | "If the data parameter is an object, it will be serialized to json string and  content-type  header will be set to  application/json  if not explicitly set." |
| 15 | `status()` is the status code | S3 | PASS | "Contains the status code of the response" |
| 16 | `ok()` is `true` when the status is in the range 200–299 | S3 | PASS | "whether the response was successful (status in the range 200-299)" |
| 17 | `json()` returns the body as JSON and throws if the body is not valid JSON; `text()` returns it as text | S3 | PASS | "Returns the JSON" / "This method will throw if the response body is not parsable via  JSON.parse ." / "Returns the text" |
| 18 | `await expect(response).toBeOK()` checks that the status is in the range 200..299 | S4 | PASS | "Ensures the response status code is within  200..299  range." |
| 19 | By default, the call returns a response for every status code | S2 | PASS | "By default response object is returned for all status codes." |
| 20 | With `failOnStatusCode`, it throws on codes other than 2xx and 3xx | S2 | PASS | "Whether to throw on response codes other than 2xx and 3xx." |
| 21 | Try it: the Postman Echo service returns a JSON response with the details of the request you sent | S8 | PASS | "The Echo service returns a JSON response that includes all details from the request you sent" |
| 22 | The Echo service needs no authentication | S8 | PASS | "a quick way to send a request without worrying about authentication or request configuration" |
| 23 | `test.use()` in the test file sets `baseURL` for its tests, to simplify them | S1 | PASS | "we'll also set the  baseURL  to simplify the tests. You can either put them in the configuration file, or in the test file with  test.use() ." |
| 24 | The tests send their requests without loading a page | S1 | PASS | "send requests to the server directly from Node.js without loading a page" |
| 25 | Step 4: break one test on purpose and read the failure | none | N/A | Instruction for the reader, not a fact about a tool. |
| 26 | How a tester uses it: create test data before the tests and delete it afterwards, with the `beforeAll` and `afterAll` hooks | S1 | PASS | "You probably want to create a new one before running tests and delete it afterwards. Use  beforeAll  and  afterAll  hooks for that." |
| 27 | Prepare the server state with an API call before a UI test visits the app, or act in the browser and then check the server-side result with an API call | S1 | PASS | "Prepare server side state before visiting the web application in a test." / "Validate server side post-conditions after running some actions in the browser." |
| 28 | If the app can log in through an API faster than through the UI, send the login request with `APIRequestContext` and save the authenticated state | S5 | PASS | "Your web application supports authenticating via API that is easier/faster than interacting with the app UI." / "We will send the API request with  APIRequestContext  and then save authenticated state as usual." |
| 29 | A setup project logs in once, and each test starts already logged in | S5 | PASS | "Authenticate once in the  setup project , save the authentication state, and then reuse it to bootstrap each test already authenticated." |
| 30 | Storage state works in both a `BrowserContext` and an `APIRequestContext` | S1 | PASS | "Storage state is interchangeable between  BrowserContext  and  APIRequestContext ." |
| 31 | You can parameterize a test at the test level | S9 | PASS | "You can either parameterize tests on a test level or on a project level." |
| 32 | The docs read the API token from `process.env.API_TOKEN` and send it in `extraHTTPHeaders` | S1 | PASS | "Assuming personal access token available in the environment. 'Authorization' : `token ${process.env.API_TOKEN}`", inside the config that holds `extraHTTPHeaders`. |
| 33 | Common mistakes: by default, a request returns a response for every status code | S2 | PASS | "By default response object is returned for all status codes." |
| 34 | Assert the status, or set `failOnStatusCode` | S2 | PASS | "Whether to throw on response codes other than 2xx and 3xx." The source supports the option. The "assert the status" part is advice. |
| 35 | `json()` throws if the body cannot be parsed | S3 | PASS | "This method will throw if the response body is not parsable via  JSON.parse ." |
| 36 | For an error page, read `text()` first | S3 | FAIL | S3 only says "Returns the text". It says nothing about error pages or reading `text()` first. Fix: "`text()` returns the body as text." |
| 37 | The documented usage is `await expect(response).toBeOK()`, and it returns a Promise | S4 | PASS | "await     expect  (  response  )  .  toBeOK  (  )" / "Promise < void >" |
| 38 | Fixtures are isolated between tests | S6 | PASS | "Test fixtures are isolated between tests." |
| 39 | Make each test create the data it needs, in the test or in a hook | S1 | PASS | "You probably want to create a new one before running tests and delete it afterwards. Use  beforeAll  and  afterAll  hooks for that." |
| 40 | The saved state file can hold cookies that let someone act as your test account | S5 | PASS | "may contain sensitive cookies and headers that could be used to impersonate you or your test account" |
| 41 | The Playwright docs strongly advise against committing it | S5 | PASS | "We strongly discourage checking them into private or public repositories." |
| 42 | What a tester can check: callout, the tutorial's own advice | none | N/A | The callout says it is advice and has no cites. |
| K1 | `APIRequestContext`: the Playwright class that sends HTTP requests to an API, with no page | n/a | PASS | Technical, What it is: "A test sends requests to the server directly from Node.js, without loading a page ... The class behind it is `APIRequestContext`." |
| K2 | `request` fixture: built-in; sends API requests; respects `baseURL` and `extraHTTPHeaders` | n/a | PASS | Technical, What it is: "Playwright Test comes with a built-in `request` fixture, ready to send requests". Technical, How it works: "The fixture respects the config options `baseURL` and `extraHTTPHeaders`". |
| K3 | `APIResponse`: `status()`, `ok()`, `json()`, `text()` | n/a | PASS | Technical, How it works: "**The response.** `status()` is the status code. `ok()` is `true` ... `json()` returns the body as JSON ... `text()` returns it as text". |
| K4 | `toBeOK()`: the status is in the range 200..299 | n/a | PASS | Technical, How it works: "checks that the status is in the range 200..299". |
| K5 | `baseURL`: the request fixture respects it; requests then give only the path | n/a | PASS | Technical, Try it: "sets `baseURL` for its tests ... each request below gives only the path, such as `/post`." |
| K6 | `extraHTTPHeaders`: additional HTTP headers sent with every request, such as a token | n/a | PASS | Technical, How it works: "additional HTTP headers to be sent with every request". Technical, How a tester uses it: "send it in `extraHTTPHeaders`". |
| K7 | `failOnStatusCode`: makes a request throw on codes other than 2xx and 3xx | n/a | PASS | Technical, How it works: "With the `failOnStatusCode` option, it throws on codes other than 2xx and 3xx". |
| K8 | Storage state: the saved authenticated state; works in `BrowserContext` and `APIRequestContext` | n/a | PASS | Technical, How a tester uses it: "save the authenticated state ... Storage state works in both a `BrowserContext` and an `APIRequestContext`". |
| K9 | Setup project: logs in once, so each test starts already logged in | n/a | PASS | Technical, How a tester uses it: "A setup project logs in once, and each test starts already logged in". |
| K10 | Parameterized test: parameterized at the test level, for example with a loop over cases | n/a | PASS | Technical, How a tester uses it: "You can parameterize a test at the test level, for example with a loop over cases". |

Open FAILs: 1

FAILs in round 3: 1.

## Round 4 (2026-11-16)

### Fact check: sdet / playwright-api (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: API tests in Playwright Test with no browser page; send requests with the request fixture, check status and JSON body, set up test data, log in once | none | N/A | Describes the page itself. |
| 2 | Intro: the page shows how Playwright Test calls an API with no browser page in between, and what it covers | none | N/A | Describes the page itself. |
| 3 | What it is: Playwright can access the REST API of your application | S1 | PASS | "Playwright can be used to get access to the  REST  API of your application." |
| 4 | What it is: A test sends requests to the server directly from Node.js, without loading a page | S1 | PASS | "send requests to the server directly from Node.js without loading a page and running js code in it" |
| 5 | What it is: The Playwright docs name three uses: test your server API; prepare server-side state before a test visits the web app; check server-side results after actions in the browser | S1 | PASS | "Test your server API. / Prepare server side state before visiting the web application in a test. / Validate server side post-conditions after running some actions in the browser." |
| 6 | What it is: The class behind it is `APIRequestContext`. It can trigger API endpoints, configure microservices, and prepare the environment of an end-to-end test | S2 | PASS | "You can use it to trigger API endpoints, configure micro-services, prepare environment or the service to your e2e test." |
| 7 | What it is: Playwright Test comes with a built-in `request` fixture, ready to send requests | S1 | PASS | "Playwright Test comes with the built-in  request  fixture that respects configuration options like  baseURL  or  extraHTTPHeaders  we specified and is ready to send some requests." |
| 8 | What it is: test fixtures are isolated between tests | S6 | PASS | "Test fixtures are isolated between tests." |
| 9 | How it works: A test names the fixtures it needs in its arguments, as `{ page }` does for the page fixture | S6 | PASS | "The  { page }  argument tells Playwright Test to set up the  page  fixture and provide it to your test function." and "Just mention a fixture in your test function argument" |
| 10 | How it works: the API tests take `{ request }` | S1 | PASS | S1 has 3 matches for the pattern `{ request }`, in its API test examples. |
| 11 | How it works: The fixture respects the config options `baseURL` and `extraHTTPHeaders` | S1 | PASS | "built-in  request  fixture that respects configuration options like  baseURL  or  extraHTTPHeaders" |
| 12 | How it works: `extraHTTPHeaders` holds additional HTTP headers to be sent with every request | S7 | PASS | "An object containing additional HTTP headers to be sent with every request." |
| 13 | How it works: `params` adds query parameters to the URL | S2 | PASS | "Request parameters can be configured with  params  option, they will be serialized into the URL search parameters" |
| 14 | How it works: `data` sets the body; an object is serialized to JSON, and `content-type` becomes `application/json` unless you set it | S2 | PASS | "If the data parameter is an object, it will be serialized to json string and  content-type  header will be set to  application/json  if not explicitly set." |
| 15 | How it works: `status()` is the status code | S3 | PASS | "Contains the status code of the response (e.g., 200 for a success)." |
| 16 | How it works: `ok()` is `true` when the status is in the range 200–299 | S3 | PASS | "whether the response was successful (status in the range 200-299)" |
| 17 | How it works: `json()` returns the body as JSON and throws if the body is not valid JSON; `text()` returns it as text | S3 | PASS | "Returns the JSON representation of response body. / This method will throw if the response body is not parsable via  JSON.parse ." and "Returns the text representation of response body." |
| 18 | How it works: `await expect(response).toBeOK()` checks that the status is in the range 200..299 | S4 | PASS | "Ensures the response status code is within  200..299  range." |
| 19 | How it works: By default the call returns a response for every status code; with `failOnStatusCode` it throws on codes other than 2xx and 3xx | S2 | PASS | "Whether to throw on response codes other than 2xx and 3xx. By default response object is returned for all status codes." |
| 20 | How it works: ASCII diagram (test, request.post, APIResponse, toBeOK) | none | N/A | Only repeats the facts above. It shows what the page's own example does. |
| 21 | Try it: The test calls the Postman Echo service | S8 | PASS | "You can use the Postman Echo service to test requests in Postman." |
| 22 | Try it: It returns a JSON response with the details of the request that you sent | S8 | PASS | "The Echo service returns a JSON response that includes all details from the request you sent" |
| 23 | Try it: it needs no authentication | S8 | PASS | "it provides a quick way to send a request without worrying about authentication or request configuration" |
| 24 | Try it: `test.use()` in the test file sets `baseURL` for its tests, to simplify them | S1 | PASS | "we'll also set the  baseURL  to simplify the tests. You can either put them in the configuration file, or in the test file with  test.use() ." |
| 25 | Try it: The tests send their requests without loading a page | S1 | PASS | "send requests to the server directly from Node.js without loading a page" |
| 26 | Try it: Use a Playwright project; each request gives only the path; save as tests/echo.spec.ts; run command; break one on purpose and read the failure | none | N/A | Instructions, and what the page's own example does. They are not facts about a tool. |
| 27 | How a tester uses it: Create what the tests need before they run and delete it afterwards, with the `beforeAll` and `afterAll` hooks | S1 | PASS | "You probably want to create a new one before running tests and delete it afterwards. Use  beforeAll  and  afterAll  hooks for that." |
| 28 | How a tester uses it: Prepare the server state with an API call before a UI test visits the app, or act in the browser and then check the server-side result with an API call | S1 | PASS | "It may be helpful if you need to prepare server state before running a test or to check some postconditions on the server after performing some actions in the browser. All of that could be achieved via  APIRequestContext  methods." |
| 29 | How a tester uses it: If the app can log in through an API faster than through the UI, send the login request with `APIRequestContext` and save the authenticated state | S5 | PASS | "Your web application supports authenticating via API that is easier/faster than interacting with the app UI. / We will send the API request with  APIRequestContext  and then save authenticated state as usual." |
| 30 | How a tester uses it: A setup project logs in once, and each test starts already logged in | S5 | PASS | "Authenticate once in the  setup project , save the authentication state, and then reuse it to bootstrap each test already authenticated." |
| 31 | How a tester uses it: Storage state works in both a `BrowserContext` and an `APIRequestContext` | S1 | PASS | "Storage state is interchangeable between  BrowserContext  and  APIRequestContext ." |
| 32 | How a tester uses it: You can parameterize a test at the test level, for example with a loop over cases | S9 | PASS | "You can either parameterize tests on a test level or on a project level." The S9 example uses `[ ... ].forEach(({ name, expected }) => { test(...` |
| 33 | How a tester uses it: The Playwright docs read the API token from an environment variable, `process.env.API_TOKEN`, and send it in `extraHTTPHeaders` | S1 | PASS | "// Add authorization token to all requests. // Assuming personal access token available in the environment. 'Authorization' : `token ${process.env.API_TOKEN}`" The config sets `extraHTTPHeaders`. |
| 34 | Common mistakes: By default a request returns a response for every status code | S2 | PASS | "By default response object is returned for all status codes." |
| 35 | Common mistakes: Assert the status, or set `failOnStatusCode` | S2 | PASS | "Whether to throw on response codes other than 2xx and 3xx." |
| 36 | Common mistakes: `json()` throws if the body cannot be parsed | S3 | PASS | "This method will throw if the response body is not parsable via  JSON.parse ." |
| 37 | Common mistakes: `text()` returns the body as text | S3 | PASS | "Returns the text representation of response body." |
| 38 | Common mistakes: The documented usage is `await expect(response).toBeOK()`, and it returns a Promise | S4 | PASS | "await expect(response).toBeOK();" and "Promise < void >" |
| 39 | Common mistakes: Fixtures are isolated between tests | S6 | PASS | "Test fixtures are isolated between tests." |
| 40 | Common mistakes: Make each test create the data it needs, in the test or in a hook | S1 | FAIL | S1 only says "create a new one before running tests and delete it afterwards. Use  beforeAll  and  afterAll  hooks for that." It does not say to create data "in the test". Fix: "Make each test create the data it needs, in a hook such as `beforeAll`", or give the cite no part of the advice. |
| 41 | Common mistakes: The saved state file can hold cookies that let someone act as your test account; the docs strongly advise against committing it | S5 | PASS | "The browser state file may contain sensitive cookies and headers that could be used to impersonate you or your test account. We strongly discourage checking them into private or public repositories." |
| 42 | What a tester can check: callout of the tutorial's own advice | none | N/A | A callout that says it is the tutorial's own advice, with no cites. |
| K1 | `APIRequestContext`: the Playwright class that sends HTTP requests to an API, with no page | none | PASS | What it is: "The class behind it is `APIRequestContext`. It can trigger API endpoints..." and "sends requests to the server directly from Node.js, without loading a page" |
| K2 | `request` fixture: the built-in fixture that sends API requests; respects `baseURL` and `extraHTTPHeaders` | none | PASS | "Playwright Test comes with a built-in `request` fixture, ready to send requests" and "The fixture respects the config options `baseURL` and `extraHTTPHeaders`" |
| K3 | `APIResponse`: the response of a request: `status()`, `ok()`, `json()`, `text()` | none | PASS | "**The response.** `status()` is the status code. `ok()` is `true`... `json()` returns the body as JSON... `text()` returns it as text" |
| K4 | `toBeOK()`: the assertion that the status is in the range 200..299 | none | PASS | "`await expect(response).toBeOK()` checks that the status is in the range 200..299" |
| K5 | `baseURL`: the base URL that the `request` fixture respects; requests then give only the path | none | PASS | "The fixture respects the config options `baseURL`..." and "each request below gives only the path, such as `/post`" |
| K6 | `extraHTTPHeaders`: additional HTTP headers to be sent with every request, such as a token | none | PASS | "`extraHTTPHeaders` holds additional HTTP headers to be sent with every request" and "read the API token from an environment variable... and send it in `extraHTTPHeaders`" |
| K7 | `failOnStatusCode`: the option that makes a request throw on codes other than 2xx and 3xx | none | PASS | "With the `failOnStatusCode` option, it throws on codes other than 2xx and 3xx" |
| K8 | Storage state: the saved authenticated state; works in both a `BrowserContext` and an `APIRequestContext` | none | PASS | "Storage state works in both a `BrowserContext` and an `APIRequestContext`" and "save the authenticated state" |
| K9 | Setup project: a project that logs in once, so each test starts already logged in | none | PASS | "A setup project logs in once, and each test starts already logged in" |
| K10 | Parameterized test: a test parameterized at the test level, for example with a loop over cases | none | PASS | "You can parameterize a test at the test level, for example with a loop over cases" |

Open FAILs: 1

FAILs in round 4: 1.

## Round 5 (2026-11-16)

### Fact check: sdet / playwright-api (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: API tests in Playwright Test with no browser page: send requests, check status and JSON body, set up test data, log in once | none | N/A | Describes the page itself. |
| 2 | Intro: this page shows how Playwright Test calls an API with no browser page in between | none | N/A | Describes the page itself. |
| 3 | What it is: Playwright can access the REST API of your application | S1 | PASS | "Playwright can be used to get access to the  REST  API of your application." |
| 4 | A test sends requests to the server directly from Node.js, without loading a page | S1 | PASS | "send requests to the server directly from Node.js without loading a page and running js code in it" |
| 5 | The docs name three uses: test your server API; prepare server-side state before a test visits the web app; check server-side results after browser actions | S1 | PASS | "Test your server API." / "Prepare server side state before visiting the web application in a test." / "Validate server side post-conditions after running some actions in the browser." |
| 6 | The class behind it is `APIRequestContext`. It can trigger API endpoints, configure microservices, and prepare the environment of an end-to-end test | S2 | PASS | "You can use it to trigger API endpoints, configure micro-services, prepare environment or the service to your e2e test." |
| 7 | Playwright Test comes with a built-in `request` fixture, ready to send requests | S1 | PASS | "Playwright Test comes with the built-in  request  fixture that ... is ready to send some requests." |
| 8 | Test fixtures are isolated between tests | S6 | PASS | "Test fixtures are isolated between tests." |
| 9 | "New to HTTP methods and status codes? Start with API Testing with Postman" | none | N/A | Advice and a link to another page. |
| 10 | How it works: a test names the fixtures it needs in its arguments, as `{ page }` does for the page fixture | S6 | PASS | "The  { page }  argument tells Playwright Test to set up the  page  fixture and provide it to your test function." |
| 11 | API tests take `{ request }` | S1 | PASS | `{ request }` appears 3 times in S1 (the example tests). The prose says "built-in  request  fixture". |
| 12 | The fixture respects the config options `baseURL` and `extraHTTPHeaders` | S1 | PASS | "request  fixture that respects configuration options like  baseURL  or  extraHTTPHeaders" |
| 13 | `extraHTTPHeaders` holds additional HTTP headers to be sent with every request | S7 | PASS | "An object containing additional HTTP headers to be sent with every request." |
| 14 | `params` adds query parameters to the URL | S2 | PASS | "Request parameters can be configured with  params  option, they will be serialized into the URL search parameters" |
| 15 | `data` sets the body: an object is serialized to JSON, and `content-type` becomes `application/json` unless you set it | S2 | PASS | "If the data parameter is an object, it will be serialized to json string and  content-type  header will be set to  application/json  if not explicitly set." |
| 16 | `status()` is the status code | S3 | PASS | "Contains the status code of the response (e.g., 200 for a success)." |
| 17 | `ok()` is `true` when the status is in the range 200–299 | S3 | PASS | "Contains a boolean stating whether the response was successful (status in the range 200-299) or not." |
| 18 | `json()` returns the body as JSON and throws if the body is not valid JSON; `text()` returns it as text | S3 | PASS | "Returns the JSON representation of response body." / "This method will throw if the response body is not parsable via  JSON.parse ." / "Returns the text representation of response body." |
| 19 | `await expect(response).toBeOK()` checks the status is in the range 200..299 | S4 | PASS | "Ensures the response status code is within  200..299  range." |
| 20 | By default the call returns a response for every status code; with `failOnStatusCode` it throws on codes other than 2xx and 3xx | S2 | PASS | "Whether to throw on response codes other than 2xx and 3xx. By default response object is returned for all status codes." |
| 21 | Try it: the test calls the Postman Echo service | S8 | PASS | "You can use the Postman Echo service to test requests in Postman." |
| 22 | It returns a JSON response with the details of the request you sent | S8 | PASS | "The Echo service returns a JSON response that includes all details from the request you sent" |
| 23 | It needs no authentication | S8 | PASS | "it provides a quick way to send a request without worrying about authentication or request configuration." This is a close paraphrase. The source also says the Echo API has authentication endpoints. |
| 24 | `test.use()` in the test file sets `baseURL` for its tests, to simplify them | S1 | PASS | "we'll also set the  baseURL  to simplify the tests. You can either put them in the configuration file, or in the test file with  test.use() ." |
| 25 | Each request below gives only the path | none | N/A | Describes the page's own example code. |
| 26 | The tests send their requests without loading a page | S1 | PASS | "send requests to the server directly from Node.js without loading a page" |
| 27 | Steps 2, 3 (command) and 4 (break a test on purpose) | none | N/A | Instructions and the page's own code. |
| 28 | How a tester uses it: create the data before the tests and delete it afterwards, with `beforeAll` and `afterAll` | S1 | PASS | "You probably want to create a new one before running tests and delete it afterwards. Use  beforeAll  and  afterAll  hooks for that." |
| 29 | Prepare server state with an API call before a UI test; or act in the browser, then check the server-side result with an API call | S1 | PASS | "prepare server state before running a test or to check some postconditions on the server after performing some actions in the browser. All of that could be achieved via  APIRequestContext  methods." |
| 30 | If the app can log in through an API faster than through the UI, send the login request with `APIRequestContext` and save the authenticated state | S5 | PASS | "Your web application supports authenticating via API that is easier/faster than interacting with the app UI." / "We will send the API request with  APIRequestContext  and then save authenticated state as usual." |
| 31 | A setup project logs in once, and each test starts already logged in | S5 | PASS | "Authenticate once in the  setup project , save the authentication state, and then reuse it to bootstrap each test already authenticated." |
| 32 | Storage state works in both a `BrowserContext` and an `APIRequestContext` | S1 | PASS | "Storage state is interchangeable between  BrowserContext  and  APIRequestContext ." |
| 33 | You can parameterize a test at the test level, for example with a loop over cases | S9 | PASS | "You can either parameterize tests on a test level or on a project level." S9 also has a `for (const record of records)` loop that creates tests. |
| 34 | The docs read the API token from `process.env.API_TOKEN` and send it in `extraHTTPHeaders` | S1 | PASS | "`'Authorization': `token ${process.env.API_TOKEN}``" is inside the config, next to "extraHTTPHeaders" (S1 line 21: "personal access token available in the environment"). |
| 35 | Common mistakes: by default a request returns a response for every status code. Assert the status, or set `failOnStatusCode` | S2 | PASS | "By default response object is returned for all status codes." and "Whether to throw on response codes other than 2xx and 3xx." "Assert the status" is advice. |
| 36 | `json()` throws if the body cannot be parsed; `text()` returns the body as text | S3 | PASS | "This method will throw if the response body is not parsable via  JSON.parse ." / "Returns the text representation of response body." |
| 37 | The documented usage is `await expect(response).toBeOK()`, and it returns a Promise | S4 | PASS | "await     expect  (  response  )  .  toBeOK  (  )" and "Promise < void >" |
| 38 | Fixtures are isolated between tests; create the data in `beforeAll` and delete it in `afterAll` | S6, S1 | PASS | S6: "Test fixtures are isolated between tests." S1: "Use  beforeAll  and  afterAll  hooks for that." |
| 39 | The saved state file can hold cookies that let someone act as your test account; the docs strongly advise against committing it | S5 | PASS | "The browser state file may contain sensitive cookies and headers that could be used to impersonate you or your test account. We strongly discourage checking them into private or public repositories." |
| 40 | What a tester can check: callout, tutorial's own advice | none | N/A | The callout says it is advice and gives no cites. |
| K1 | `APIRequestContext`: the class that sends HTTP requests to an API, with no page | Technical | PASS | "The class behind it is `APIRequestContext`." and "A test sends requests to the server directly from Node.js, without loading a page". |
| K2 | `request` fixture: built-in, sends API requests; respects `baseURL` and `extraHTTPHeaders` | Technical | PASS | "Playwright Test comes with a built-in `request` fixture, ready to send requests" and "The fixture respects the config options `baseURL` and `extraHTTPHeaders`". |
| K3 | `APIResponse`: `status()`, `ok()`, `json()`, `text()` | Technical | PASS | "**The response.** `status()` is the status code. `ok()` is `true`... `json()` returns the body as JSON... `text()` returns it as text". |
| K4 | `toBeOK()`: the status is in the range 200..299 | Technical | PASS | "`await expect(response).toBeOK()` checks that the status is in the range 200..299". |
| K5 | `baseURL`: the base URL that the fixture respects; requests then give only the path | Technical | PASS | "`test.use()` ... sets `baseURL` for its tests... each request below gives only the path, such as `/post`." |
| K6 | `extraHTTPHeaders`: additional HTTP headers sent with every request, such as a token | Technical | PASS | "`extraHTTPHeaders` holds additional HTTP headers to be sent with every request" and "read the API token from ... `process.env.API_TOKEN`, and send it in `extraHTTPHeaders`". |
| K7 | `failOnStatusCode`: the option that makes a request throw on codes other than 2xx and 3xx | Technical | PASS | "With the `failOnStatusCode` option, it throws on codes other than 2xx and 3xx". |
| K8 | Storage state: the saved authenticated state; works in both `BrowserContext` and `APIRequestContext` | Technical | PASS | "save the authenticated state. ... Storage state works in both a `BrowserContext` and an `APIRequestContext`." |
| K9 | Setup project: logs in once, so each test starts already logged in | Technical | PASS | "A setup project logs in once, and each test starts already logged in". |
| K10 | Parameterized test: parameterized at the test level, for example with a loop over cases | Technical | PASS | "You can parameterize a test at the test level, for example with a loop over cases". |

Open FAILs: 0

FAILs in round 5: 0.

Open FAILs: 0
