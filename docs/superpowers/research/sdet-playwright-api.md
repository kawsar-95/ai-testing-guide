# Research notes: SDET Roadmap, API Automation with Playwright

Page: `content/sdet/playwright-api.mdx`. Accessed 2026-11-15.

## Sources

| ID | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | API testing | Playwright (Microsoft) | https://playwright.dev/docs/api-testing | 2026-11-15 |
| S2 | APIRequestContext | Playwright (Microsoft) | https://playwright.dev/docs/api/class-apirequestcontext | 2026-11-15 |
| S3 | APIResponse | Playwright (Microsoft) | https://playwright.dev/docs/api/class-apiresponse | 2026-11-15 |
| S4 | APIResponseAssertions | Playwright (Microsoft) | https://playwright.dev/docs/api/class-apiresponseassertions | 2026-11-15 |
| S5 | Authentication | Playwright (Microsoft) | https://playwright.dev/docs/auth | 2026-11-15 |
| S6 | Fixtures | Playwright (Microsoft) | https://playwright.dev/docs/test-fixtures | 2026-11-15 |
| S7 | Configuration (use) | Playwright (Microsoft) | https://playwright.dev/docs/test-use-options | 2026-11-15 |
| S8 | Test requests in Postman using the Echo API | Postman | https://learning.postman.com/docs/developer/echo-api/ | 2026-11-15 |
| S9 | Parameterize tests | Playwright (Microsoft) | https://playwright.dev/docs/test-parameterize | 2026-11-15 |

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | Playwright can access the REST API of an app. | S1 | "Playwright can be used to get access to the REST API of your application." |
| C2 | Requests go to the server from Node.js, with no page. | S1 | "send requests to the server directly from Node.js without loading a page" |
| C3 | Use: test the server API. | S1 | "Test your server API." |
| C4 | Use: prepare server-side state. | S1 | "Prepare server side state before visiting the web application in a test." |
| C5 | Use: validate post-conditions. | S1 | "Validate server side post-conditions after running some actions in the browser." |
| C6 | `APIRequestContext`: trigger endpoints, configure microservices, prepare the environment. | S2 | "You can use it to trigger API endpoints, configure micro-services, prepare environment or the service to your e2e test." |
| C7 | The `request` fixture is an isolated `APIRequestContext` for each test. | S6 | "Isolated APIRequestContext instance for this test run." |
| C8 | The `request` fixture respects `baseURL` and `extraHTTPHeaders`. | S1 | "Playwright Test comes with the built-in request fixture that respects configuration options like baseURL or extraHTTPHeaders" |
| C9 | `params` are query parameters. | S2 | "Query parameters to be sent with the URL." |
| C10 | `data`: an object is serialized to JSON, with an `application/json` content type. | S2 | "If the data parameter is an object, it will be serialized to json string and content-type header will be set to application/json if not explicitly set." |
| C11 | `ok()` is true for 200–299. | S3 | "Contains a boolean stating whether the response was successful (status in the range 200-299) or not." |
| C12 | `status()` is the status code. | S3 | "Contains the status code of the response (e.g., 200 for a success)." |
| C13 | `json()` returns the body as JSON and throws if it cannot be parsed. | S3 | "This method will throw if the response body is not parsable via JSON.parse" |
| C14 | `text()` returns the body as text. | S3 | "Returns the text representation of response body." |
| C15 | `toBeOK()` checks 200..299. | S4 | "Ensures the response status code is within 200..299 range." |
| C16 | `toBeOK()` returns a Promise. | S4 | "await expect ( response ) . toBeOK ( ) ; Returns Promise < void >" |
| C17 | A response is returned for every status code by default; `failOnStatusCode` throws on codes other than 2xx and 3xx. | S2 | "Whether to throw on response codes other than 2xx and 3xx. By default response object is returned for all status codes." |
| C18 | `baseURL` can be set in the config or with `test.use()`. | S1 | "You can either put them in the configuration file, or in the test file with test.use()" |
| C19 | `extraHTTPHeaders`: additional HTTP headers sent with every request. | S7 | "An object containing additional HTTP headers to be sent with every request." |
| C20 | The Echo service returns the details of the request as JSON. | S8 | "The Echo service returns a JSON response that includes all details from the request you sent, including any data items you included." |
| C21 | The Echo service needs no authentication. | S8 | "it provides a quick way to send a request without worrying about authentication or request configuration" |
| C22 | Echo URL. | S8 | "https://postman-echo.com/get" |
| C23 | Create data before the tests and delete it after, with `beforeAll` and `afterAll`. | S1 | "You probably want to create a new one before running tests and delete it afterwards. Use beforeAll and afterAll hooks for that." |
| C24 | Storage state works in both kinds of context; log in by API, then reuse the cookies. | S1 | "Storage state is interchangeable between BrowserContext and APIRequestContext . You can use it to log in via API calls and then create a new context with cookies already there." |
| C25 | Log in through an API in a setup project and save the state. | S5 | "We will send the API request with APIRequestContext and then save authenticated state as usual." |
| C26 | When the API login is easier or faster than the UI. | S5 | "Your web application supports authenticating via API that is easier/faster than interacting with the app UI." |
| C27 | Authenticate once in a setup project and reuse the state. | S5 | "Authenticate once in the setup project , save the authentication state, and then reuse it to bootstrap each test already authenticated." |
| C28 | The state file holds sensitive cookies; do not commit it. | S5 | "We strongly discourage checking them into private or public repositories." |
| C29 | Parameterize tests at the test level. | S9 | "You can either parameterize tests on a test level or on a project level." |
| C30 | The docs read the token from an environment variable. | S1 | "Assuming personal access token available in the environment." |
| C31 | Fixtures are isolated between tests. | S6 | "Test fixtures are isolated between tests." |
| C32 | Fixtures give each test what it needs. | S6 | "Test fixtures are used to establish the environment for each test, giving the test everything it needs and nothing else." |
| C33 | `request.newContext()` is behind the fixture. | S1 | "Behind the scenes, request fixture will actually call apiRequest.newContext() ." |
| C34 | `baseURL` is set to simplify the tests, in the config or with `test.use()`. | S1 | "we'll also set the baseURL to simplify the tests. You can either put them in the configuration file, or in the test file with test.use()" |
| C35 | Playwright Test comes with the built-in `request` fixture. | S1 | "Playwright Test comes with the built-in request fixture that respects configuration options like baseURL or extraHTTPHeaders we specified and is ready to send some requests." |

## Run check

The tests of the page ran on 2026-11-15 with `@playwright/test` 1.65.0 against https://postman-echo.com: the two tests of "Try it" (GET with query parameters, POST with a JSON body), the two data-driven cases, and the 404 case. 5 passed. That the echo returns the query value `17` as the string `'17'`, and that `/status/404` answers 404, come from that run, not from a source.
