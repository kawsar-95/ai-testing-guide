# Research notes: SDET Roadmap, API Testing with Postman

Page: `content/sdet/api-testing-postman.mdx`. Accessed 2026-11-15.

## Sources

| ID | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | Overview of HTTP | MDN Web Docs (Mozilla) | https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview | 2026-11-15 |
| S2 | HTTP request methods | MDN Web Docs (Mozilla) | https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods | 2026-11-15 |
| S3 | HTTP response status codes | MDN Web Docs (Mozilla) | https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status | 2026-11-15 |
| S4 | Idempotent | MDN Web Docs (Mozilla), Glossary | https://developer.mozilla.org/en-US/docs/Glossary/Idempotent | 2026-11-15 |
| S5 | Send a request with the Postman API client | Postman | https://learning.postman.com/docs/sending-requests/create-requests/request-basics/ | 2026-11-15 |
| S6 | Send parameters and body data with API requests in Postman | Postman | https://learning.postman.com/docs/sending-requests/create-requests/parameters/ | 2026-11-15 |
| S7 | Write scripts to test API response data in Postman | Postman | https://learning.postman.com/docs/tests-and-scripts/write-scripts/test-scripts/ | 2026-11-15 |
| S8 | Postman test script examples | Postman | https://learning.postman.com/docs/tests-and-scripts/write-scripts/test-examples/ | 2026-11-15 |
| S9 | Store and reuse values using variables | Postman | https://learning.postman.com/docs/sending-requests/variables/variables/ | 2026-11-15 |
| S10 | Test your API using the Collection Runner | Postman | https://learning.postman.com/docs/collections/running-collections/intro-to-collection-runs/ | 2026-11-15 |
| S11 | Newman CLI Overview | Postman | https://learning.postman.com/docs/collections/using-newman-cli/command-line-integration-with-newman/ | 2026-11-15 |
| S12 | Postman CLI collection commands | Postman | https://learning.postman.com/docs/postman-cli/postman-cli-collections/ | 2026-11-15 |
| S13 | Test requests in Postman using the Echo API | Postman | https://learning.postman.com/docs/developer/echo-api/ | 2026-11-15 |

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | HTTP is a client-server protocol; the client starts requests. | S1 | "it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser" |
| C2 | HTTP is stateless. | S1 | "HTTP is stateless: there is no link between two requests being successively carried out on the same connection." |
| C3 | A method indicates the purpose of the request. | S2 | "HTTP defines a set of request methods to indicate the purpose of the request and what is expected if the request is successful." |
| C4 | GET should only retrieve data and should not contain request content. | S2 | "The GET method requests a representation of the specified resource. Requests using GET should only retrieve data and should not contain a request content ." |
| C5 | POST submits an entity, often changing state. | S2 | "The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server." |
| C6 | PUT replaces the resource. | S2 | "The PUT method replaces all current representations of the target resource with the request content ." |
| C7 | PATCH applies partial modifications. | S2 | "The PATCH method applies partial modifications to a resource." |
| C8 | DELETE deletes the resource. | S2 | "The DELETE method deletes the specified resource." |
| C9 | Idempotent: the intended effect of one request is the same as the effect of several. | S4 | "An HTTP method is idempotent if the intended effect on the server of making a single request is the same as the effect of making several identical requests." |
| C10 | Safe methods, PUT, and DELETE are idempotent; POST and PATCH are not guaranteed. | S4 | "All safe methods are idempotent, as well as PUT and DELETE . The POST and PATCH methods are not guaranteed to be idempotent." |
| C11 | A client can safely retry an idempotent request. | S4 | "A client can safely retry a request that uses an idempotent method" |
| C12 | Five classes of status codes. | S3 | "Responses are grouped in five classes: Informational responses ( 100 – 199 ) Successful responses ( 200 – 299 ) Redirection messages ( 300 – 399 ) Client error responses ( 400 – 499 ) Server error responses ( 500 – 599 )" |
| C13 | 201 Created: a new resource, typically after POST. | S3 | "The request succeeded, and a new resource was created as a result. This is typically the response sent after POST requests, or some PUT requests." |
| C14 | 401: in meaning, unauthenticated; the client must authenticate. | S3 | "That is, the client must authenticate itself to get the requested response." |
| C15 | 403: no access rights; the identity is known. | S3 | "Unlike 401 Unauthorized , the client's identity is known to the server." |
| C16 | 404: the server cannot find the resource. | S3 | "The server cannot find the requested resource." |
| C17 | 500: a situation the server does not know how to handle. | S3 | "The server has encountered a situation it does not know how to handle." |
| C18 | Enter the URL, select the method, add parameters, body, and headers. | S5 | "Enter the request URL and select the request method . Specify values such as authorization, parameters and body data, and headers." |
| C19 | Query parameters after `?`, key-value pairs joined by `&`. | S6 | "Query parameters are appended to the end of the request URL, following ? and listed in key-value pairs, separated by & as follows: ?id=1&type=new" |
| C20 | Path parameters: placeholders after `:`. | S6 | "Path parameters form part of the request URL, and are referenced using placeholders preceded by : as in the following example: /customer/:id" |
| C21 | Body formats. | S6 | "You can also add body data to a request in various formats, including form data, URL-encoded, raw, and binary." |
| C22 | `pm.test`: a name and a function. | S7 | "Define tests using the pm.test function. Provide a name and function that returns a boolean ( true or false ) value to indicate if the test passed or failed." |
| C23 | `pm.expect` with Chai.js BDD syntax. | S7 | "Use Chai.js BDD syntax and pm.expect in your assertions to test the response detail." |
| C24 | Tests run after the response; output in the Test Results tab. | S7 | "Tests run after the request runs and a response is received from the API. The output appears in the response's Test Results tab." |
| C25 | `pm.response.to.have.status(200)`. | S8 | "pm . response . to . have . status ( 200 )" |
| C26 | `pm.response.json()` parses the body. | S8 | "const responseJson = pm . response . json ()" |
| C27 | Response time check. | S8 | "pm . expect ( pm . response . responseTime ) . to . be . below ( 200 )" |
| C28 | A `base_url` variable referenced as `{{base_url}}`. | S9 | "you can store it in a base_url variable. Then, use {{base_url}} to reference the variable in your requests." |
| C29 | Change the variable once; it is used everywhere. | S9 | "If the URL changes, you can change the variable value and it'll be reflected throughout your collection" |
| C30 | Environments: one set of values per server. | S9 | "if you use one set of config details for your production server and another for testing" |
| C42 | Environment variables scope the work to one environment; one environment is active at a time. | S9 | "Environment variables enable you to scope your work to different environments, such as local development versus testing or production environments. One environment can be active at a time." |
| C31 | Collection Runner: requests in the order you choose; logs results. | S10 | "Send some or all of the API requests in a Postman Collection using the Collection Runner, in the order you choose. The Collection Runner logs the test results for each request" |
| C32 | Iteration data from a data file. | S10 | "Upload or select an existing data file for the collection run." |
| C43 | A collection can run several times with different data sets. | S10 | "You can also run collections multiple times with different data sets" |
| C33 | Newman is Postman's command-line collection runner. | S11 | "Newman is Postman's command-line collection runner." |
| C34 | Newman needs Node.js 16 or later; install command. | S11 | "Newman requires Node.js v16 or later. To install Newman globally, run the following command: npm install -g newman" |
| C35 | Run an exported collection. | S11 | "newman run my-collection.json -e my-environment.json" |
| C36 | Exit code 0; `--bail` exits with 1 when a test fails. | S11 | "By default, Newman exits with a status code of 0 if the run completes without errors. Use the --bail option to stop the run and exit with a status code of 1 when a test fails" |
| C37 | Newman gets no updates; move to the Postman CLI. | S11 | "Newman won't receive updates or fixes. Plan to replace Newman in your scripts and CI pipelines with the Postman CLI." |
| C38 | `postman collection run`. | S12 | "You can run your collections with HTTP requests using the postman collection run command." |
| C39 | The Echo service returns the request details as JSON. | S13 | "The Echo service returns a JSON response that includes all details from the request you sent" |
| C40 | Echo URL and steps. | S13 | "Open a new request in Postman and enter https://postman-echo.com/get in the URL box. Select the GET method, then click Send ." |
| C41 | Tests can be added to requests, collections, and folders. | S7 | "You can add tests to requests , collections , and folders in a collection." |
| C44 | HTTP is the foundation of any data exchange on the Web. | S1 | "It is the foundation of any data exchange on the Web" |

## Run check

The two test scripts of "Try it" ran on 2026-11-15 in a v2.1 collection with `newman` 6 against `https://postman-echo.com/get?course=sdet`, with the URL written as `{{base_url}}/get?course=sdet`: 2 assertions, 0 failed, exit code 0.
