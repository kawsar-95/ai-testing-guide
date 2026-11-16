# Fact check: sdet / api-testing-postman

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep, and Glob only; no web access) that did not write the page. It got only the page, the visible text of the sources that the page cites (fetched with a plain GET, as `scripts/sdet_claimcheck.py` reads them), and the brief in `sdet-factcheck-brief.md`. After a round with FAILs, the author fixed the page and its research note, and the next round checked the whole page again.

## Round 1 (2026-11-15)

### Fact check: sdet / api-testing-postman (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: parts of an HTTP request and response, then Postman steps | none | N/A | Describes the page itself. |
| 2 | Intro: "Before you automate an API test, send the request by hand..." | none | N/A | Advice. |
| 3 | Intro: "This page explains the parts of an HTTP request and response, then uses Postman..." | none | N/A | Describes the page itself. |
| 4 | Most web APIs speak HTTP; it is client-server; the client, usually a web browser, starts each request | S1 | PASS | "it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser." and "The browser is always the entity initiating the request." |
| 5 | HTTP is stateless: two requests on the same connection have no link | S1 | PASS | "HTTP is stateless: there is no link between two requests being successively carried out on the same connection." |
| 6 | A request names a method, which says what the request is for | S2 | PASS | "HTTP defines a set of request methods to indicate the purpose of the request" |
| 7 | The server answers with a status code in one of five classes | S3 | PASS | "Responses are grouped in five classes:" |
| 8 | "On this page, API testing means sending these requests yourself and checking the responses..." | none | N/A | Defines a term for the page. |
| 9 | Postman is an API client; you enter the URL, select the method, add authorization, parameters, body data, headers | S5 | PASS | "Enter the request URL and select the request method." and "Specify values such as authorization, parameters and body data, and headers." (The words "API client" are in the omitted long line 1, which I could not read.) |
| 10 | `pm.test` defines a test with a name; `pm.expect` makes an assertion | S7 | PASS | "Define tests using the pm.test function. Provide a name and function..." and "Use Chai.js BDD syntax and pm.expect in your assertions" |
| 11 | Links to Fundamentals and Playwright pages | none | N/A | Pointers to other pages. |
| 12 | The method says what the request is for | S2 | PASS | "to indicate the purpose of the request" |
| 13 | GET requests a representation of a resource | S2 | PASS | "The GET method requests a representation of the specified resource." |
| 14 | GET should only retrieve data, and it has no request content | S2 | FAIL | Source: "Requests using GET should only retrieve data and should not contain a request content." The source says "should not contain", not "has no". Fix: "it should not contain request content". |
| 15 | POST submits an entity, often with a change of state on the server | S2 | PASS | "The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server." |
| 16 | PUT replaces all current representations with the request content | S2 | PASS | "The PUT method replaces all current representations of the target resource with the request content." |
| 17 | PATCH applies partial modifications | S2 | PASS | "The PATCH method applies partial modifications to a resource." |
| 18 | DELETE deletes the resource | S2 | PASS | "The DELETE method deletes the specified resource." |
| 19 | A method is idempotent if one request has the same intended effect as several identical requests | S4 | PASS | "An HTTP method is idempotent if the intended effect on the server of making a single request is the same as the effect of making several identical requests." |
| 20 | Safe methods, PUT, DELETE are idempotent; POST and PATCH are not guaranteed to be | S4 | PASS | "All safe methods are idempotent, as well as PUT and DELETE. The POST and PATCH methods are not guaranteed to be idempotent." |
| 21 | A client can safely retry a request that uses an idempotent method | S4 | PASS | "A client can safely retry a request that uses an idempotent method" |
| 22 | Five classes with ranges 100–199 … 500–599 | S3 | PASS | "Informational responses ( 100 – 199 )", "Successful responses ( 200 – 299 )", "Redirection messages ( 300 – 399 )", "Client error responses ( 400 – 499 )", "Server error responses ( 500 – 599 )" |
| 23 | 201 Created: made a new resource; typical after POST | S3 | PASS | "The request succeeded, and a new resource was created as a result. This is typically the response sent after POST requests, or some PUT requests." |
| 24 | 401: in meaning unauthenticated; client must authenticate itself | S3 | PASS | "semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response." |
| 25 | 403: server knows who the client is, but the client has no access rights | S3 | PASS | "The client does not have access rights to the content" and "the client's identity is known to the server." |
| 26 | 404: the server cannot find the resource | S3 | PASS | "The server cannot find the requested resource." |
| 27 | 500: the server met a situation it does not know how to handle | S3 | PASS | "The server has encountered a situation it does not know how to handle." |
| 28 | Query parameters come after `?`, key-value pairs joined by `&`, e.g. `?id=1&type=new` | S6 | PASS | "Query parameters are appended to the end of the request URL, following ? and listed in key-value pairs, separated by & as follows: ?id=1&type=new" |
| 29 | A path parameter is a placeholder after `:`, e.g. `/customer/:id` | S6 | PASS | "Path parameters ... are referenced using placeholders preceded by : as in the following example: /customer/:id" |
| 30 | A body can be form data, URL-encoded, raw, or binary | S6 | PASS | "various formats, including form data, URL-encoded, raw, and binary." |
| 31 | Try it 1: open a new request, enter the URL, select GET, click Send | S13 | PASS | "Open a new request in Postman and enter https://postman-echo.com/get in the URL box." and "Select the GET method, then click Send." (`?course=sdet` is the page's own example.) |
| 32 | The Echo service returns JSON with the details of the request | S13 | PASS | "The Echo service returns a JSON response that includes all details from the request you sent" |
| 33 | You can add tests to a request, a collection, or a folder | S7 | PASS | "You can add tests to requests, collections, and folders in a collection." |
| 34 | `pm.response.to.have.status(200)` checks the status code; `pm.response.json()` parses the JSON body | S8 | PASS | "pm . response . to . have . status ( 200 )" under "Test for a status code", and "To parse JSON data, use the following syntax: const responseJson = pm . response . json ()" |
| 35 | Tests run after the response arrives; output appears in the Test Results tab | S7 | PASS | "Tests run after the request runs and a response is received from the API. The output appears in the response's Test Results tab." |
| 36 | Step 3: store the URL in a `base_url` variable, write `{{base_url}}/get?...` | S9 | PASS | "you can store it in a base_url variable. Then, use {{base_url}} to reference the variable in your requests." |
| 37 | When the URL changes, you change the variable once | S9 | PASS | "If the URL changes, you can change the variable value and it'll be reflected throughout your collection" |
| 38 | Collection Runner sends the requests in the order you choose and logs test results of each request | S10 | PASS | "Send some or all of the API requests in a Postman Collection using the Collection Runner, in the order you choose. The Collection Runner logs the test results for each request" |
| 39 | It can also read iteration data from a data file | S10 | PASS | "Datafiles — Upload or select an existing data file for the collection run." (listed under "Iteration data") |
| 40 | Newman is Postman's command-line collection runner | S11 | PASS | "Newman is Postman's command-line collection runner." |
| 41 | It needs Node.js 16 or later | S11 | PASS | "Newman requires Node.js v16 or later." |
| 42 | Newman will not receive updates or fixes; Postman asks you to plan the move to the Postman CLI | S11 | PASS | "Newman won't receive updates or fixes. Plan to replace Newman in your scripts and CI pipelines with the Postman CLI." |
| 43 | The Postman CLI runs a collection with `postman collection run` | S12 | PASS | "You can run your collections with HTTP requests using the postman collection run command." |
| 44 | Other Try it lines (save the request in a collection, export as JSON, run the commands, send again and read results) | none | N/A | Instructions for the reader, not facts. |
| 45 | Postman's own examples check the status code, the response time, and the fields of the JSON body | S8 | PASS | "Your tests can check various aspects of a request response, including the body, status codes, headers, cookies, response times, and more." and "Check for particular values in the response body:" |
| 46 | A response time check reads `pm.expect(pm.response.responseTime).to.be.below(200)` | S8 | PASS | "pm . expect ( pm . response . responseTime ) . to . be . below ( 200 )" |
| 47 | 401 means the client must authenticate; 403 means the server knows the client but it has no access rights | S3 | PASS | "the client must authenticate itself to get the requested response." and "The client does not have access rights to the content" ... "the client's identity is known to the server." |
| 48 | "Test both: a request with no token, and a request by a user who may not do the action." | none | N/A | Advice. |
| 49 | POST is not guaranteed to be idempotent | S4 | PASS | "The POST and PATCH methods are not guaranteed to be idempotent." |
| 50 | "Send the same POST again and check what the API does with the repeat." | none | N/A | Advice. |
| 51 | An environment groups one set of values, e.g. one for production and another for testing | S9 | PASS | "Use environments to group sets of variables together ... if you use one set of config details for your production server and another for testing." |
| 52 | "The same requests then run against each stage." | none | FAIL | A claim about Postman with no cite. S9 does say "Environment variables enable you to scope your work to different environments". Fix: add a S9 cite and use that wording. |
| 53 | Newman by default exits 0 when the run completes without errors; with `--bail` it stops and exits 1 when a test fails, so CI can fail the build | S11 | PASS | "By default, Newman exits with a status code of 0 if the run completes without errors. Use the --bail option to stop the run and exit with a status code of 1 when a test fails, so your continuous integration (CI) tool can fail the build." |
| 54 | A data file gives the Collection Runner its iteration data, so one request runs with many inputs | S10 | FAIL | S10 gives the first half: "Datafiles — Upload or select an existing data file for the collection run" under "Iteration data". For the second half it says only "run collections multiple times with different data sets", which is about the collection, not one request. Fix: "so the collection can run several times with different data". |
| 55 | A create often answers `201 Created`, typical after a POST | S3 | PASS | "This is typically the response sent after POST requests" |
| 56 | "Check the exact code that the API promises." | none | N/A | Advice. |
| 57 | One of 401 and 403 means not authenticated; the other means no access rights | S3 | PASS | "semantically this response means "unauthenticated"" and "The client does not have access rights to the content" |
| 58 | A GET should only retrieve data | S2 | PASS | "Requests using GET should only retrieve data" |
| 59 | "If it changes data, report it." | none | N/A | Advice. |
| 60 | A client can safely retry an idempotent request, but POST is not guaranteed to be idempotent | S4 | PASS | "A client can safely retry a request that uses an idempotent method" and "The POST and PATCH methods are not guaranteed to be idempotent." |
| 61 | Store the URL in a variable, so a change is made once | S9 | PASS | "you can store it in a base_url variable ... If the URL changes, you can change the variable value and it'll be reflected throughout your collection" |
| 62 | Newman will not receive updates or fixes | S11 | PASS | "Newman won't receive updates or fixes." |
| 63 | "Start with the Postman CLI" | S12 | FAIL | S12 says how to run a collection ("run your collections ... using the postman collection run command"). It does not say to start new pipelines with it. The advice comes from S11: "Plan to replace Newman in your scripts and CI pipelines with the Postman CLI." Fix: cite S11 and use that wording. |
| 64 | "What a tester can check" callout | none | N/A | The page says it is the tutorial's own advice. |
| K1 | HTTP: a client-server protocol of the web; the client starts each request | Key words | PASS | Technical, What it is: "HTTP is a client-server protocol: the client, usually a web browser, starts each request" |
| K2 | Method: what a request is for: GET, POST, PUT, PATCH, DELETE | Key words | PASS | Technical, How it works: "The method says what the request is for" plus the table of the five methods. |
| K3 | Status code: the result of a request, in one of five classes from 100 to 599 | Key words | PASS | Technical, How it works: "There are five classes: informational (100–199) ... and server error (500–599)" |
| K4 | Idempotent: one request has the same intended effect as several identical ones | Key words | PASS | Technical, How it works: "A method is idempotent if one request has the same intended effect on the server as several identical requests" |
| K5 | Query parameter: a key-value pair after `?` in the URL | Key words | PASS | Technical: "Query parameters come after `?`, as key-value pairs joined by `&`" |
| K6 | Path parameter: a placeholder in the path, such as `:id` | Key words | PASS | Technical: "A path parameter is a placeholder after `:`, for example `/customer/:id`" |
| K7 | Post-response script: JavaScript that runs after the response arrives, with `pm.test` and `pm.expect` | Key words | PASS | Technical, What it is: "`pm.test` defines a test ... `pm.expect` makes an assertion". Try it: "Add this as the post-response script of the request" and "Tests run after the response arrives" |
| K8 | Variable: a stored value, such as `{{base_url}}`, used across requests | Key words | PASS | Technical, Try it: "Store `https://postman-echo.com` in a `base_url` variable, and write the URL as `{{base_url}}/get?course=sdet`" |
| K9 | Environment: one set of variable values, e.g. for a test server | Key words | PASS | Technical, How a tester uses it: "An environment groups one set of values, for example one for the production server and another for testing" |
| K10 | Collection Runner: runs the requests of a collection in order and logs test results | Key words | PASS | Technical, Try it: "The Collection Runner sends the requests of a collection in the order you choose and logs the test results of each request" |
| K11 | Newman: Postman's command-line collection runner; it gets no more updates or fixes | Key words | PASS | Technical, Try it: "Newman is Postman's command-line collection runner" and "Newman will not receive updates or fixes" |
| K12 | Postman CLI: the command-line tool that Postman asks you to move to: `postman collection run` | Key words | PASS | Technical, Try it: "Postman asks you to plan the move to the Postman CLI. The Postman CLI runs a collection with `postman collection run`." |

Open FAILs: 4

FAILs in round 1: 4.

## Round 2 (2026-11-16)

### Fact check: sdet / api-testing-postman (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: parts of an HTTP request and response, then Postman steps | none | N/A | Describes the page itself. |
| 2 | Intro: send the request by hand first; the page explains the parts and uses Postman | none | N/A | Advice and a description of the page. |
| 3 | Most web APIs speak HTTP | S1 | FAIL | S1 never says that most web APIs use HTTP. It only says "It is the foundation of any data exchange on the Web". Fix: "HTTP is the foundation of data exchange on the Web." |
| 4 | HTTP is a client-server protocol; the client, usually a web browser, starts each request | S1 | PASS | "it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser." |
| 5 | HTTP is stateless: two requests on the same connection have no link | S1 | PASS | "HTTP is stateless: there is no link between two requests being successively carried out on the same connection." |
| 6 | A request names a method that says what the request is for | S2 | PASS | "HTTP defines a set of request methods to indicate the purpose of the request" |
| 7 | The server answers with a status code in one of five classes | S3 | PASS | "Responses are grouped in five classes:" |
| 8 | "On this page, API testing means sending these requests yourself…" | none | N/A | The page's own definition. |
| 9 | Postman is an API client; you enter the URL, select the method, add authorization, parameters, body data, headers | S5 | PASS | "enter a URL and select a method"; "Specify values such as authorization, parameters and body data, and headers." The page title is "Send a request with the Postman API client". |
| 10 | pm.test defines a test with a name; pm.expect makes an assertion | S7 | PASS | "Define tests using the pm.test function. Provide a name and function…"; "Use Chai.js BDD syntax and pm.expect in your assertions" |
| 11 | Fundamentals and Playwright pointer sentences | none | N/A | Links to other pages of this site. |
| 12 | The method says what the request is for | S2 | PASS | "to indicate the purpose of the request" |
| 13 | GET requests a representation of a resource; it should only retrieve data and should not contain request content | S2 | PASS | "The GET method requests a representation of the specified resource."; "Requests using GET should only retrieve data and should not contain a request content." |
| 14 | POST submits an entity to a resource, often with a change of state on the server | S2 | PASS | "The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server." |
| 15 | PUT replaces all current representations of the resource with the request content | S2 | PASS | "The PUT method replaces all current representations of the target resource with the request content." |
| 16 | PATCH applies partial modifications to a resource | S2 | PASS | "The PATCH method applies partial modifications to a resource." |
| 17 | DELETE deletes the resource | S2 | PASS | "The DELETE method deletes the specified resource." |
| 18 | A method is idempotent if one request has the same intended effect as several identical ones | S4 | PASS | "idempotent if the intended effect on the server of making a single request is the same as the effect of making several identical requests." |
| 19 | Safe methods, PUT and DELETE are idempotent; POST and PATCH are not guaranteed to be | S4 | PASS | "All safe methods are idempotent, as well as PUT and DELETE. The POST and PATCH methods are not guaranteed to be idempotent." |
| 20 | A client can safely retry a request that uses an idempotent method | S4 | PASS | "A client can safely retry a request that uses an idempotent method" |
| 21 | Five classes: 100–199, 200–299, 300–399, 400–499, 500–599 | S3 | PASS | "Informational responses (100 – 199) … Successful responses (200 – 299) … Redirection messages (300 – 399) … Client error responses (400 – 499) … Server error responses (500 – 599)" |
| 22 | 201 Created: the request made a new resource; typical after a POST | S3 | PASS | "a new resource was created as a result. This is typically the response sent after POST requests, or some PUT requests." |
| 23 | 401 Unauthorized: in meaning, unauthenticated; the client must authenticate itself | S3 | PASS | "semantically this response means \"unauthenticated\". That is, the client must authenticate itself to get the requested response." |
| 24 | 403 Forbidden: the server knows who the client is, but the client has no access rights | S3 | PASS | "The client does not have access rights to the content … the client's identity is known to the server." |
| 25 | 404 Not Found: the server cannot find the resource | S3 | PASS | "The server cannot find the requested resource." |
| 26 | 500: the server met a situation it does not know how to handle | S3 | PASS | "The server has encountered a situation it does not know how to handle." |
| 27 | Query parameters come after ?, as key-value pairs joined by &, e.g. ?id=1&type=new | S6 | PASS | "following ? and listed in key-value pairs, separated by & as follows: ?id=1&type=new" |
| 28 | A path parameter is a placeholder after :, e.g. /customer/:id | S6 | PASS | "referenced using placeholders preceded by : as in the following example: /customer/:id" |
| 29 | A body can be form data, URL-encoded, raw, or binary | S6 | PASS | "form data, URL-encoded, raw, binary, or GraphQL" (the page lists four of the five types) |
| 30 | Try 1: open a new request, enter the URL, select GET, click Send | S13 | PASS | "Open a new request in Postman and enter https://postman-echo.com/get in the URL box. Select the GET method, then click Send." The ?course=sdet part is the page's own example. |
| 31 | The Echo service returns JSON with the details of the request sent | S13 | PASS | "The Echo API will return a JSON object that has details from the request." |
| 32 | You can add tests to a request, a collection, or a folder | S7 | PASS | "open the request, collection, or folder and enter your code in the Scripts > Post-response tab" |
| 33 | pm.response.to.have.status(200) checks the status code; pm.response.json() parses the JSON body | S8 | PASS | "Test for a status code"; "pm.response.to.have.status(200)"; "you will first need to parse the data into a JavaScript object"; "To parse JSON data, use the following syntax" (the code uses pm.response.json()) |
| 34 | Tests run after the response arrives; output appears in the Test Results tab | S7 | PASS | "Tests run after the request runs and a response is received from the API. The output appears in the response's Test Results tab." |
| 35 | Store the URL in a base_url variable and write {{base_url}}/get?... | S9 | PASS | "you can store it in a base_url variable. Then, use {{base_url}} to reference the variable in your requests." |
| 36 | When the URL changes, you change the variable once | S9 | PASS | "If the URL changes, you can change the variable value and it'll be reflected throughout your collection" |
| 37 | The Collection Runner sends the requests in the order you choose and logs the test results of each request | S10 | PASS | "in the order you choose. The Collection Runner logs the test results for each request" |
| 38 | It can also read iteration data from a data file | S10 | PASS | "Iteration data — … Datafiles — Upload or select an existing data file for the collection run." |
| 39 | Newman is Postman's command-line collection runner | S11 | PASS | "Newman is Postman's command-line collection runner." |
| 40 | Newman needs Node.js 16 or later | S11 | PASS | "Newman requires Node.js v16 or later." |
| 41 | Newman will not receive updates or fixes; Postman asks you to plan the move to the Postman CLI | S11 | PASS | "Newman won't receive updates or fixes. Plan to replace Newman in your scripts and CI pipelines with the Postman CLI." |
| 42 | The Postman CLI runs a collection with postman collection run | S12 | PASS | "You can run your collections with HTTP requests using the postman collection run command." |
| 43 | Tester: Postman's examples check status code, response time, and JSON body fields | S8 | PASS | "Your tests can check various aspects of a request response, including the body, status codes, headers, cookies, response times, and more."; the Person example checks responseJson.name and responseJson.age. |
| 44 | A response time check reads pm.expect(pm.response.responseTime).to.be.below(200) | S8 | PASS | "pm.expect(pm.response.responseTime).to.be.below(200)" (S8 prints it with spaces between the tokens). |
| 45 | 401 means the client must authenticate; 403 means the server knows the client but it has no access rights | S3 | PASS | "the client must authenticate itself"; "The client does not have access rights … the client's identity is known to the server." |
| 46 | "Test both: a request with no token, and a request by a user…" | none | N/A | Advice. |
| 47 | POST is not guaranteed to be idempotent | S4 | PASS | "The POST and PATCH methods are not guaranteed to be idempotent." |
| 48 | "Send the same POST again and check…" | none | N/A | Advice. |
| 49 | An environment groups one set of values, e.g. one for production and another for testing | S9 | PASS | "Use environments to group sets of variables together … one set of config details for your production server and another for testing." |
| 50 | Environment variables scope the work to an environment (local development, testing, production); one environment is active at a time | S9 | PASS | "Environment variables enable you to scope your work to different environments, such as local development versus testing or production environments. One environment can be active at a time." |
| 51 | By default Newman exits with code 0 when the run has no errors; with --bail it stops and exits with code 1 when a test fails, so the CI tool can fail the build | S11 | PASS | "By default, Newman exits with a status code of 0 if the run completes without errors. Use the --bail option to stop the run and exit with a status code of 1 when a test fails, so your continuous integration (CI) tool can fail the build." |
| 52 | A data file gives the Collection Runner iteration data, so the collection runs several times with a different data set each time | S10 | PASS | "Datafiles — Upload or select an existing data file for the collection run."; "You can also run collections multiple times with different data sets" |
| 53 | Mistakes: a create often answers 201, the typical response after a POST | S3 | PASS | "This is typically the response sent after POST requests" |
| 54 | "Check the exact code that the API promises." | none | N/A | Advice. |
| 55 | Mistakes: 401 means the client is not authenticated; 403 means no access rights | S3 | PASS | "semantically this response means \"unauthenticated\""; "The client does not have access rights to the content" |
| 56 | Mistakes: a GET should only retrieve data | S2 | PASS | "Requests using GET should only retrieve data" |
| 57 | "If it changes data, report it." | none | N/A | Advice. |
| 58 | Mistakes: a client can safely retry an idempotent request, but POST is not guaranteed to be idempotent | S4 | PASS | "A client can safely retry a request that uses an idempotent method"; "The POST and PATCH methods are not guaranteed to be idempotent." |
| 59 | Mistakes: store the URL in a variable so a change is made once | S9 | PASS | "If the URL changes, you can change the variable value and it'll be reflected throughout your collection" |
| 60 | Mistakes: Newman gets no updates or fixes; plan to replace it with the Postman CLI in scripts and CI pipelines | S11 | PASS | "Newman won't receive updates or fixes. Plan to replace Newman in your scripts and CI pipelines with the Postman CLI." |
| 61 | "What a tester can check" callout | none | N/A | The callout says it is the tutorial's own advice. |
| K1 | HTTP: a client-server protocol of the web; the client starts each request | Technical, What it is | PASS | "HTTP is a client-server protocol: the client, usually a web browser, starts each request" |
| K2 | Method: GET, POST, PUT, PATCH, DELETE | Technical, How it works | PASS | The method table lists `GET`, `POST`, `PUT`, `PATCH` and `DELETE`, after "The method says what the request is for". |
| K3 | Status code: the result of a request, in one of five classes from 100 to 599 | Technical, How it works | PASS | "There are five classes: informational (100–199) … server error (500–599)" |
| K4 | Idempotent: one request has the same intended effect as several identical ones | Technical, How it works | PASS | "one request has the same intended effect on the server as several identical requests" |
| K5 | Query parameter: a key-value pair after ? in the URL | Technical, How it works | PASS | "Query parameters come after `?`, as key-value pairs joined by `&`" |
| K6 | Path parameter: a placeholder in the path, such as :id | Technical, How it works | PASS | "A path parameter is a placeholder after `:`, for example `/customer/:id`" |
| K7 | Post-response script: JavaScript that runs after the response arrives, with pm.test and pm.expect | Technical, Try it and What it is | PASS | "Add this as the post-response script of the request"; "Tests run after the response arrives"; "`pm.test` defines a test with a name, and `pm.expect` makes an assertion" |
| K8 | Variable: a stored value, such as {{base_url}}, used across requests | Technical, Try it | PASS | "Store `https://postman-echo.com` in a `base_url` variable, and write the URL as `{{base_url}}/get?course=sdet`" |
| K9 | Environment: one set of variable values, e.g. for a test server | Technical, How a tester uses it | PASS | "An environment groups one set of values, for example one for the production server and another for testing" |
| K10 | Collection Runner: runs the requests in order and logs the test results | Technical, Try it | PASS | "sends the requests of a collection in the order you choose and logs the test results of each request" |
| K11 | Newman: Postman's command-line collection runner; it gets no more updates or fixes | Technical, Try it | PASS | "Newman is Postman's command-line collection runner"; "Newman will not receive updates or fixes" |
| K12 | Postman CLI: the tool Postman asks you to move to; postman collection run | Technical, Try it | PASS | "Postman asks you to plan the move to the Postman CLI"; "The Postman CLI runs a collection with `postman collection run`" |

Open FAILs: 1

FAILs in round 2: 1.

## Round 3 (2026-11-16)

### Fact check: sdet / api-testing-postman (round 3)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0a | Lede: parts of an HTTP request and response, then Postman topics | none | N/A | Describes the page itself. |
| 0b | Intro: send the request by hand first. This page explains HTTP parts, then uses Postman. | none | N/A | Advice and a description of the page. |
| 1.1 | HTTP is the foundation of any data exchange on the Web | S1 | PASS | "It is the foundation of any data exchange on the Web and it is a client-server protocol" |
| 1.2 | It is a client-server protocol; the client, usually a web browser, starts each request | S1 | PASS | "requests are initiated by the recipient, usually the Web browser." |
| 1.3 | HTTP is stateless: two requests on the same connection have no link | S1 | PASS | "HTTP is stateless: there is no link between two requests being successively carried out on the same connection." |
| 1.4 | A request names a method, which says what the request is for | S2 | PASS | "HTTP defines a set of request methods to indicate the purpose of the request" |
| 1.5 | The server answers with a status code in one of five classes | S3 | PASS | "Responses are grouped in five classes:" |
| 1.6 | "On this page, API testing means..." | none | N/A | Defines a term for this page. It is not a fact about a tool. |
| 1.7 | Postman is an API client. You enter the URL, select the method, and add authorization, parameters, body data, and headers. | S5 | PASS | "Enter the request URL and select the request method." and "Specify values such as authorization, parameters and body data, and headers." The "API client" wording appears only in S5 line 1, which is a long omitted line. |
| 1.8 | You test the response with JavaScript: pm.test defines a test with a name, and pm.expect makes an assertion | S7 | PASS | "Define tests using the pm.test function. Provide a name and function..." and "Use Chai.js BDD syntax and pm.expect in your assertions" |
| 1.9 | Links to Fundamentals and API Automation with Playwright | none | N/A | Pointer to other pages. |
| 2.1 | The method says what the request is for | S2 | PASS | "to indicate the purpose of the request" |
| 2.2 | GET requests a representation of a resource. It should only retrieve data and should not contain request content. | S2 | PASS | "The GET method requests a representation of the specified resource. Requests using GET should only retrieve data and should not contain a request content." |
| 2.3 | POST submits an entity to a resource, often with a change of state on the server | S2 | PASS | "The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server." |
| 2.4 | PUT replaces all current representations of the resource with the request content | S2 | PASS | "The PUT method replaces all current representations of the target resource with the request content." |
| 2.5 | PATCH applies partial modifications to a resource | S2 | PASS | "The PATCH method applies partial modifications to a resource." |
| 2.6 | DELETE deletes the resource | S2 | PASS | "The DELETE method deletes the specified resource." |
| 2.7 | A method is idempotent if one request has the same intended effect on the server as several identical requests. Safe methods, PUT, and DELETE are idempotent. POST and PATCH are not guaranteed to be. | S4 | PASS | "An HTTP method is idempotent if the intended effect on the server of making a single request is the same as the effect of making several identical requests." and "All safe methods are idempotent, as well as PUT and DELETE. The POST and PATCH methods are not guaranteed to be idempotent." |
| 2.8 | A client can safely retry a request that uses an idempotent method | S4 | PASS | "A client can safely retry a request that uses an idempotent method" |
| 2.9 | Five classes: informational 100–199, successful 200–299, redirection 300–399, client error 400–499, server error 500–599 | S3 | PASS | "Informational responses (100 – 199) / Successful responses (200 – 299) / Redirection messages (300 – 399) / Client error responses (400 – 499) / Server error responses (500 – 599)" |
| 2.10 | "Five codes come up often" | none | N/A | Framing sentence for the list. It names no tool fact. |
| 2.11 | 201 Created: the request made a new resource; typical after a POST | S3 | PASS | "a new resource was created as a result. This is typically the response sent after POST requests, or some PUT requests." |
| 2.12 | 401 Unauthorized: in meaning, unauthenticated. The client must authenticate itself. | S3 | PASS | "semantically this response means \"unauthenticated\"." and "the client must authenticate itself to get the requested response." |
| 2.13 | 403 Forbidden: the server knows who the client is, but the client has no access rights | S3 | PASS | "The client does not have access rights to the content" and "the client's identity is known to the server." |
| 2.14 | 404 Not Found: the server cannot find the resource | S3 | PASS | "The server cannot find the requested resource." |
| 2.15 | 500 Internal Server Error: the server met a situation it does not know how to handle | S3 | PASS | "The server has encountered a situation it does not know how to handle." |
| 2.16 | Query parameters come after ?, as key-value pairs joined by &, e.g. ?id=1&type=new | S6 | PASS | "Query parameters are appended to the end of the request URL, following ? and listed in key-value pairs, separated by & as follows: ?id=1&type=new" |
| 2.17 | A path parameter is a placeholder after :, e.g. /customer/:id | S6 | PASS | "Path parameters ... are referenced using placeholders preceded by : as in the following example: /customer/:id" |
| 2.18 | A body can be form data, URL-encoded, raw, or binary | S6 | PASS | "including form data, URL-encoded, raw, and binary." |
| 3.1 | Open a new request, enter the URL, select GET, click Send | S13 | PASS | "Select the GET method, then click Send." S5: "set the URL to the Postman Echo https://postman-echo.com/get endpoint, select the GET method, then click Send." |
| 3.2 | The Echo service returns JSON with the details of the request you sent | S13 | PASS | "The Echo service returns a JSON response that includes all details from the request you sent" |
| 3.3 | You can add tests to a request, a collection, or a folder | S7 | PASS | "You can add tests to requests, collections, and folders in a collection." |
| 3.4 | pm.response.to.have.status(200) checks the status code, and pm.response.json() parses the JSON body | S8 | PASS | S8 has a "Test for a status code" example that uses "have . status". Its type-check example runs "const jsonData = pm . response . json ()" and then tests fields of jsonData. S8 never says the word "parses". |
| 3.5 | Tests run after the response arrives; output appears in the Test Results tab | S7 | PASS | "Tests run after the request runs and a response is received from the API. The output appears in the response's Test Results tab." |
| 3.6 | Store https://postman-echo.com in a base_url variable and write the URL as {{base_url}}/get?course=sdet | S9 | PASS | "you can store it in a base_url variable. Then, use {{base_url}} to reference the variable in your requests." and "If the variable value is https://postman-echo.com and the request uses the {{base_url}}/get URL" |
| 3.7 | When the URL changes, you change the variable once | S9 | PASS | "If the URL changes, you can change the variable value and it'll be reflected throughout your collection" |
| 3.8 | The Collection Runner sends the requests of a collection in the order you choose and logs the test results of each request | S10 | PASS | "using the Collection Runner, in the order you choose. The Collection Runner logs the test results for each request" |
| 3.9 | It can also read iteration data from a data file | S10 | PASS | "Datafiles — Upload or select an existing data file for the collection run." under "Iteration data — Select one of the following options to provide iteration data" |
| 3.10 | Newman is Postman's command-line collection runner | S11 | PASS | "Newman is Postman's command-line collection runner." |
| 3.11 | It needs Node.js 16 or later | S11 | PASS | "Newman requires Node.js v16 or later." |
| 3.12 | Newman will not receive updates or fixes, and Postman asks you to plan the move to the Postman CLI | S11 | PASS | "Newman won't receive updates or fixes. Plan to replace Newman in your scripts and CI pipelines with the Postman CLI." |
| 3.13 | The Postman CLI runs a collection with postman collection run | S12 | PASS | "You can run your collections with HTTP requests using the postman collection run command." |
| 4.1 | Postman's examples check the status code, the response time, and the fields of the JSON body | S8 | PASS | "Your tests can check various aspects of a request response, including the body, status codes, headers, cookies, response times" and examples such as "pm . expect ( jsonData . name ) . to . be . a ( \"string\" )" |
| 4.2 | A response time check reads pm.expect(pm.response.responseTime).to.be.below(200) | S8 | PASS | "pm . expect ( pm . response . responseTime ) . to . be . below ( 200 )" under "Test response times" |
| 4.3 | 401 means the client must authenticate. 403 means the server knows the client, but the client has no access rights. | S3 | PASS | "the client must authenticate itself" and "The client does not have access rights ... the client's identity is known to the server." |
| 4.4 | "Test both: a request with no token..." | none | N/A | Advice. |
| 4.5 | POST is not guaranteed to be idempotent | S4 | PASS | "The POST and PATCH methods are not guaranteed to be idempotent." |
| 4.6 | "Send the same POST again and check..." | none | N/A | Advice. |
| 4.7 | An environment groups one set of values, e.g. one for production and one for testing | S9 | PASS | "Use environments to group sets of variables together ... one set of config details for your production server and another for testing." |
| 4.8 | Environment variables scope the work to one environment (local development, testing, production); one environment is active at a time | S9 | PASS | "Environment variables enable you to scope your work to different environments, such as local development versus testing or production environments. One environment can be active at a time." |
| 4.9 | By default, Newman exits with code 0 when the run completes without errors. With --bail, it stops and exits with code 1 when a test fails, so the CI tool can fail the build. | S11 | PASS | "By default, Newman exits with a status code of 0 if the run completes without errors. Use the --bail option to stop the run and exit with a status code of 1 when a test fails, so your continuous integration (CI) tool can fail the build." |
| 4.10 | A data file gives the Collection Runner its iteration data, so the collection runs several times with a different data set each time | S10 | PASS | "Iterations — The number of times to run the collection. You can also run collections multiple times with different data sets" and "Datafiles — Upload or select an existing data file for the collection run." |
| 5.1 | A create often answers 201 Created, the typical response after a POST | S3 | PASS | "This is typically the response sent after POST requests" |
| 5.2 | "Check the exact code that the API promises" | none | N/A | Advice. |
| 5.3 | One means the client is not authenticated; the other means it has no access rights | S3 | PASS | "semantically this response means \"unauthenticated\"" and "The client does not have access rights to the content" |
| 5.4 | A GET should only retrieve data | S2 | PASS | "Requests using GET should only retrieve data" |
| 5.5 | "If it changes data, report it" | none | N/A | Advice. |
| 5.6 | A client can safely retry an idempotent request, but POST is not guaranteed to be idempotent | S4 | PASS | "A client can safely retry a request that uses an idempotent method" and "The POST and PATCH methods are not guaranteed to be idempotent." |
| 5.7 | Store the URL in a variable, so a change is made once | S9 | PASS | "If the URL changes, you can change the variable value and it'll be reflected throughout your collection" |
| 5.8 | Newman will not receive updates or fixes; Postman asks you to plan to replace it with the Postman CLI in scripts and CI pipelines | S11 | PASS | "Newman won't receive updates or fixes. Plan to replace Newman in your scripts and CI pipelines with the Postman CLI." |
| 6.1 | "What a tester can check" callout (tutorial advice, no cites) | none | N/A | The callout says it is the tutorial's own advice. |
| K1 | HTTP: a client-server protocol of the web; the client starts each request | Key words | PASS | Technical, What it is: "It is a client-server protocol: the client, usually a web browser, starts each request" |
| K2 | Method: what a request is for: GET, POST, PUT, PATCH, DELETE | Key words | PASS | Technical, How it works: "The method says what the request is for", followed by the table of those five methods. |
| K3 | Status code: the result of a request, in one of five classes from 100 to 599 | Key words | PASS | Technical, How it works: "There are five classes: informational (100–199) ... server error (500–599)" |
| K4 | Idempotent: one request has the same intended effect as several identical ones | Key words | PASS | Technical, How it works: "A method is idempotent if one request has the same intended effect on the server as several identical requests" |
| K5 | Query parameter: a key-value pair after ? in the URL | Key words | PASS | Technical, How it works: "Query parameters come after ?, as key-value pairs joined by &" |
| K6 | Path parameter: a placeholder in the path, such as :id | Key words | PASS | Technical, How it works: "A path parameter is a placeholder after :, for example /customer/:id" |
| K7 | Post-response script: JavaScript that runs after the response arrives, with pm.test and pm.expect | Key words | PASS | Technical, Try it: "Add this as the post-response script of the request" and "Tests run after the response arrives". What it is: "pm.test defines a test with a name, and pm.expect makes an assertion". |
| K8 | Variable: a stored value, such as {{base_url}}, used across requests | Key words | PASS | Technical, Try it: "Store https://postman-echo.com in a base_url variable, and write the URL as {{base_url}}/get?course=sdet" |
| K9 | Environment: one set of variable values, for example for a test server | Key words | PASS | Technical, How a tester uses it: "An environment groups one set of values, for example one for the production server and another for testing" |
| K10 | Collection Runner: runs the requests of a collection in order and logs the test results | Key words | PASS | Technical, Try it: "The Collection Runner sends the requests of a collection in the order you choose and logs the test results of each request" |
| K11 | Newman: Postman's command-line collection runner; it gets no more updates or fixes | Key words | PASS | Technical, Try it: "Newman is Postman's command-line collection runner" and "Newman will not receive updates or fixes" |
| K12 | Postman CLI: the command-line tool Postman asks you to move to: postman collection run | Key words | PASS | Technical, Try it: "Postman asks you to plan the move to the Postman CLI. The Postman CLI runs a collection with `postman collection run`" |

Open FAILs: 0

FAILs in round 3: 0.

Open FAILs: 0
