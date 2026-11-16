# Fact check: sdet / backend-node-express

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep, and Glob only; no web access) that did not write the page. It got only the page, the visible text of the sources that the page cites (fetched with a plain GET, as `scripts/sdet_claimcheck.py` reads them), and the brief in `sdet-factcheck-brief.md`. After a round with FAILs, the author fixed the page and its research note, and the next round checked the whole page again.

## Round 1 (2026-11-15)

### Fact check: sdet / backend-node-express (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: a small REST API in Express with the tests a tester writes | none | N/A | Describes the page itself. |
| 2 | Intro: the API is code on a server; this page builds a small REST API and tests it | none | N/A | Describes the page; no tool fact. |
| 3 | Express is a routing and middleware web framework for Node.js | S4 | PASS | "Express is a routing and middleware web framework with minimal functionality of its own" |
| 4 | An Express app is a series of middleware calls during the request-response cycle | S4 | PASS | "an Express application is essentially a series of middleware function calls executed during the request-response cycle" |
| 5 | Express needs Node.js 18 or higher; install with `npm install express` | S2 | PASS | "make sure you have Node.js 18 or higher installed"; "npm install express" |
| 6 | Routing is how the endpoints of an app respond to client requests | S3 | PASS | "refers to how an application’s endpoints (URIs) respond to client requests" |
| 7 | Routes are defined with app methods that match HTTP methods, such as `app.get()` and `app.post()` | S3 | PASS | "You define routing using methods of the Express ... object that correspond to HTTP methods; for example, ... to handle GET requests and ... to handle POST requests" |
| 8 | REST is a set of architecture constraints for distributed systems | S11 | PASS | "a group of software architecture design constraints that bring about efficient, reliable and scalable distributed systems" |
| 9 | A REST API in Express is a set of routes that read and change resources and answer with JSON and status codes | none | FAIL | Fact about a tool with no cite. Fix: cite S11, or cut it to what S11 says ("an HTTP service that can be called using standard web libraries and tools"). |
| 10 | Link: the Postman page explains HTTP methods and status codes; this page is the server side | none | N/A | Describes the page and a link. |
| 11 | A middleware function gets `req`, `res`, and `next`, the next middleware function | S4 | PASS | "The request object"; "The response object"; "The next middleware function in the application’s request-response cycle, commonly named" |
| 12 | It must end the cycle or call `next()`; otherwise the request is left hanging | S4 | PASS | "it must call ... to pass control to the next middleware function. Otherwise, the request will be left hanging." |
| 13 | `express.json()` parses requests with JSON payloads | S5 | PASS | "It parses incoming requests with JSON payloads" |
| 14 | It looks only at requests whose `Content-Type` header matches | S5 | PASS | "only looks at requests where the ... header matches the ... option" |
| 15 | Parsed body is in `req.body`, which is `undefined` when no body parser ran | S6 | PASS | "By default, it is ... undefined , and is populated when you use body-parsing middleware" |
| 16 | Every property and value of `req.body` comes from the user and must be validated | S6 | PASS | "is based on user-controlled input, all properties and values in this object are untrusted and should be validated before trusting" |
| 17 | A route parameter such as `:id` captures part of the URL into `req.params` | S3 | PASS | "Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the" ... "object" |
| 18 | A path that no route matches gets `404 Not Found` | S1 | PASS | "For every other path, it will respond with a 404 Not Found" |
| 19 | `res.status()` sets the HTTP status | S7 | PASS | "Sets the HTTP status for the response." |
| 20 | `res.json()` sends a value as a JSON response | S7 | PASS | "Sends a JSON response." |
| 21 | The `Authorization` header carries the credentials that give access to protected resources | S10 | PASS | "can be used to provide credentials that authenticate a user agent with a server, allowing access to protected resources" |
| 22 | `req.get()` reads a request header | S6 | PASS | "Returns the specified HTTP request header field (case-insensitive match)." |
| 23 | Express catches an error that synchronous code throws | S8 | PASS | "If synchronous code throws an error, then Express will catch and process it." |
| 24 | In Express 5, async handlers need no extra work: their errors reach Express | S8 | FAIL | S8 says "async functions always return a Promise, so their errors reach Express with no extra work", but it never names Express 5. Fix: drop "In Express 5". |
| 25 | An error handler is middleware with four arguments `(err, req, res, next)` | S8 | PASS | "error-handling functions have four arguments instead of three" |
| 26 | Try it: run `npm init -y` and `npm pkg set type=module`, and install with `npm install express` | S2 | FAIL | S2 gives "npm init" (it prompts for answers) and "npm install express". It has no `-y` and no `npm pkg set type=module`. Fix: cite only the init and install steps, or cite another source for the rest. |
| 27 | Users are a fixed list; a real API stores hashed passwords in a database and issues real tokens; run `node server.mjs` | none | N/A | Describes the page's own example and gives advice; not a fact about a tool. |
| 28 | The `before` hook runs before the tests, and `after` runs after them | S14 | PASS | "This function creates a hook that runs before executing a suite."; "This function creates a hook that runs after executing a suite." |
| 29 | Port `0` makes the OS pick a free port, which `server.address().port` returns | S13 | PASS | "If port is omitted or is 0, the operating system will assign an arbitrary"; "Returns the bound address, the address family name, and port of the server as reported by the operating system" |
| 30 | So the test never clashes with a server that is already running | none | FAIL | No cite. S13 says only "Grab an arbitrary unused port", not "never". Fix: "so the test gets a port that is not in use". |
| 31 | All four tests pass | none | N/A | Reports what the example code does. |
| 32 | `201` is for a created resource | S12 | PASS | "The request succeeded, and a new resource was created as a result." |
| 33 | `400` is for a client error | S12 | PASS | "something that is perceived to be a client error" |
| 34 | `401` when the client must authenticate | S12 | PASS | "the client must authenticate itself to get the requested response" |
| 35 | "The tests above check each of them" | none | N/A | Reports what the page's example code does. |
| 36 | `req.body` is user-controlled input | S6 | PASS | "As req.body ’s shape is based on user-controlled input" |
| 37 | Send a missing field, a wrong type, a negative number, broken JSON; the tests send `-5` and broken JSON | none | N/A | Advice, and what the example code does. |
| 38 | The built-in error handler writes the stack trace to the client, except in production | S8 | PASS | "the error will be written to the client with the stack trace. The stack trace is not included in the production environment." |
| 39 | Send a broken body to staging; the answer should not name files or libraries | none | N/A | Advice. |
| 40 | Helmet is middleware that sets security-related response headers | S9 | PASS | "Helmet is a middleware function that sets security-related HTTP response headers." |
| 41 | Login endpoints should be protected against brute-force attempts | S9 | PASS | Under the heading "Prevent brute-force attacks against authorization": "Make sure login endpoints are protected to make private data more secure." |
| 42 | Ask whether both are in place; test with many wrong passwords | none | N/A | Advice. |
| 43 | Start the app on port `0` | S13 | PASS | "If port is omitted or is 0, the operating system will assign an arbitrary" |
| 44 | ...in a `before` hook | S14 | PASS | "This function creates a hook that runs before executing a suite." |
| 45 | The same checks can move to the Playwright page | none | N/A | Link and advice. |
| 46 | Mistakes: if a middleware does not end the cycle and does not call `next()`, the request is left hanging | S4 | PASS | "Otherwise, the request will be left hanging." |
| 47 | A test sees a timeout, not an error | none | FAIL | Behaviour claim with no cite, and the example code does not show it. Fix: cut it, or cite a source that says it. |
| 48 | Without `express.json()`, `req.body` is `undefined` | S6 | PASS | "By default, it is ... undefined , and is populated when you use body-parsing middleware" |
| 49 | The same happens with the wrong `Content-Type`, because the parser looks only at matching requests | S5 | PASS | "or undefined if there was no body to parse, the Content-Type was not matched, or an error occurred."; "only looks at requests where" |
| 50 | Properties and values of `req.body` are untrusted until validated | S6 | PASS | "all properties and values in this object are untrusted and should be validated before trusting" |
| 51 | A total of `'500'` or `-5` must get `400`, not an order | none | N/A | Reports the page's own example code. |
| 52 | Without `NODE_ENV=production`, the built-in error handler sends the stack trace to the client | S8 | PASS | "The stack trace is not included in the production environment."; "Set the environment variable NODE_ENV to production , to run the app in production mode." |
| 53 | A fixed port can clash with a server that already runs | none | FAIL | No cite, and S13 does not say it. Fix: cut it, or say only what S13 says about port 0. |
| 54 | Port `0` lets the OS choose a free port | S13 | PASS | "the operating system will assign an arbitrary" ... "unused port" ("Grab an arbitrary unused port.") |
| 55 | "What a tester can check" callout (6 bullets) | none | N/A | Tutorial advice, labelled as such. |
| K1 | Express: a routing and middleware web framework for Node.js | – | PASS | Technical "What it is": "**Express** is a routing and middleware web framework for Node.js." |
| K2 | Route: the code that answers one method and path, such as `POST /orders` | – | FAIL | No Technical panel says "one method and path" or gives `POST /orders`. "What it is" says only "Routing is how the endpoints of an app respond to client requests". |
| K3 | Route parameter: a named part of the path, read from `req.params` | – | PASS | "A route parameter, such as `:id` in `/orders/:id`, captures a part of the URL into `req.params`" |
| K4 | Middleware: a function with `req`, `res`, `next` in the request-response cycle | – | PASS | "A middleware function gets the request (`req`), the response (`res`), and `next`"; "series of middleware calls that run during the request-response cycle" |
| K5 | `express.json()` parses JSON bodies into `req.body` | – | PASS | "`express.json()` parses requests with JSON payloads ... The parsed body is in `req.body`" |
| K6 | `res.status()` / `res.json()` | – | PASS | "`res.status()` sets the HTTP status, and `res.json()` sends a value as a JSON response" |
| K7 | `Authorization` header carries credentials for protected resources | – | PASS | "The `Authorization` request header carries the credentials that give access to protected resources" |
| K8 | Error handler: middleware with four arguments | – | PASS | "An error handler is middleware with four arguments: `(err, req, res, next)`" |
| K9 | `NODE_ENV=production`: the built-in error handler hides the stack trace | – | PASS | "The built-in error handler writes the stack trace to the client, except in the production environment."; "Without `NODE_ENV=production`, the built-in error handler sends the stack trace to the client" |
| K10 | REST: architecture constraints; a REST API answers with JSON and status codes | – | PASS | "**REST** is a set of architecture constraints for distributed systems. A REST API in Express is a set of routes that ... answer with JSON and status codes." |
| K11 | Port `0`: lets the OS pick a free port | – | PASS | "Port `0` makes the operating system pick a free port" |

Open FAILs: 7

FAILs in round 1: 7.

## Round 2 (2026-11-16)

### Fact check: sdet / backend-node-express (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| L | Lede: a small REST API in Express with routes, middleware, JSON bodies, a login check, error handling and tests | none | N/A | Describes the page itself. |
| I | Intro: the API a tester calls is code on a server; this page builds a small REST API in Express and tests it | none | N/A | Describes the page itself. |
| 1.1 | Express is a routing and middleware web framework for Node.js | 4 | FAIL | S4 says "Express is a routing and middleware web framework with minimal functionality of its own". It does not say "for Node.js". Fix: drop "for Node.js" here, or cite S2, which says "make sure you have Node.js 18 or higher installed". |
| 1.2 | An Express app is a series of middleware calls that run during the request-response cycle | 4 | PASS | "an Express application is essentially a series of middleware function calls executed during the request-response cycle." |
| 1.3 | Express needs Node.js 18 or higher; install it with `npm install express` | 2 | PASS | "Before you begin, make sure you have Node.js 18 or higher installed." and "npm install express" |
| 1.4 | Routing is how the endpoints of an app respond to client requests | 3 | PASS | "Routing refers to how an application's endpoints (URIs) respond to client requests." |
| 1.5 | You define routes with app methods that match HTTP methods, such as `app.get()` and `app.post()` | 3 | PASS | "You define routing using methods of the Express app object that correspond to HTTP methods;" and "for example, app.get() to handle GET requests and app.post to handle POST requests." |
| 1.6 | A route path plus a request method defines an endpoint where requests can be made | 3 | PASS | "Route paths, in combination with a request method, define the endpoints at which requests can be made." |
| 1.7 | REST is a set of architecture constraints for distributed systems | 11 | PASS | "REST (Representational State Transfer) refers to a group of software architecture design constraints that bring about efficient, reliable and scalable distributed systems." |
| 1.8 | Beginners can take a REST API to mean an HTTP service that standard web libraries and tools can call | 11 | PASS | "Beginners can assume a REST API means an HTTP service that can be called using standard web libraries and tools." |
| 1.9 | The Postman page explains HTTP methods and status codes; this page is the server side | none | N/A | Describes the page and its link to another page. |
| 2.1 | A middleware function gets `req`, `res` and `next`, the next middleware function | 4 | PASS | "The next middleware function in the application's request-response cycle, commonly named next" |
| 2.2 | It must end the cycle or call `next()`, otherwise the request is left hanging | 4 | PASS | "If a middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging." |
| 2.3 | `express.json()` parses requests with JSON payloads | 5 | PASS | "It parses incoming requests with JSON payloads" |
| 2.4 | It looks only at requests whose `Content-Type` header matches | 5 | PASS | "Returns middleware that only parses JSON and only looks at requests where the Content-Type header matches the type option." |
| 2.5 | The parsed body is in `req.body`, which is `undefined` when no body parser ran | 6 | PASS | "By default, it is undefined, and is populated when you use body-parsing middleware such as express.json()" |
| 2.6 | Every property and value of `req.body` comes from the user and must be validated before you trust it | 6 | PASS | "As req.body 's shape is based on user-controlled input, all properties and values in this object are untrusted and should be validated before trusting." |
| 2.7 | A route parameter such as `:id` in `/orders/:id` captures a part of the URL into `req.params` | 3 | PASS | "Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object" |
| 2.8 | A path that no route matches gets `404 Not Found` | 1 | PASS | "For every other path, it will respond with a 404 Not Found." The sentence is about the hello-world app. The page generalises it only slightly. |
| 2.9 | `res.status()` sets the HTTP status | 7 | PASS | "Sets the HTTP status for the response." |
| 2.10 | `res.json()` sends a value as a JSON response | 7 | PASS | "Sends a JSON response. This method sends a response (with the correct content-type) that is the parameter converted to a" |
| 2.11 | The `Authorization` request header carries the credentials that give access to protected resources | 10 | PASS | "The HTTP Authorization request header can be used to provide credentials that authenticate a user agent with a server, allowing access to protected resources." |
| 2.12 | `req.get()` reads a request header | 6 | PASS | "Returns the specified HTTP request header field (case-insensitive match)." |
| 2.13 | Express catches an error that synchronous code throws | 8 | PASS | "If synchronous code throws an error, then Express will catch and process it." |
| 2.14 | Promise-returning handlers call `next(value)` on reject or throw; async functions always return a promise, so their errors reach Express with no extra work | 8 | PASS | "Route handlers and middleware that return a Promise call next(value) automatically when they reject or throw an error, and async functions always return a Promise, so their errors reach Express with no extra work." |
| 2.15 | An error handler is middleware with four arguments `(err, req, res, next)` | 8 | PASS | "Define error-handling middleware functions in the same way as other middleware functions, except error-handling functions have four arguments instead of three: (err, req, res, next)." |
| 3.1 | Run `npm init` and press RETURN to accept the defaults | 2 | FAIL | S2 says "you can simply hit RETURN to accept the defaults for most of them, with the following exception:". The exception is the entry-point name. The page drops "for most of them". Fix: "press RETURN to accept the defaults for most of the questions". |
| 3.2 | Install Express with `npm install express` | 2 | PASS | "npm install express" |
| 3.3 | The users are a fixed list; a real API stores hashed passwords in a database and issues real tokens | none | N/A | Describes a limit of the page's own example code. It names no tool, product or number. |
| 3.4 | The `before` hook runs before the tests, and `after` runs after them | 14 | PASS | "This function creates a hook that runs before executing a suite." and "This function creates a hook that runs after executing a suite." |
| 3.5 | Port `0` makes the OS assign an unused port, which `server.address().port` returns | 13 | PASS | "If port is omitted or is 0, the operating system will assign an arbitrary unused port, which can be retrieved by using server.address().port" |
| 3.6 | All four tests pass | none | N/A | Reports what the page's own code does. |
| 4.1 | `201` for a created resource | 12 | PASS | "The request succeeded, and a new resource was created as a result." |
| 4.2 | `400` for a client error | 12 | PASS | "something that is perceived to be a client error" |
| 4.3 | `401` when the client must authenticate | 12 | PASS | "the client must authenticate itself to get the requested response." |
| 4.4 | "A good API answers each case with its own code"; "The tests above check each of them" | none | N/A | Advice, plus a report of the page's own tests. |
| 4.5 | `req.body` is user-controlled input | 6 | PASS | "req.body 's shape is based on user-controlled input" |
| 4.6 | Send a missing field, a string, a negative number and broken JSON; the tests send `-5` and broken JSON | none | N/A | Advice, plus a report of the page's own tests. |
| 4.7 | The built-in error handler writes the stack trace to the client, except in production | 8 | PASS | "the error will be written to the client with the stack trace. The stack trace is not included in the production environment." |
| 4.8 | Send a broken body to staging and read the answer; it should not name files or libraries | none | N/A | Advice. |
| 4.9 | Helmet is middleware that sets security-related response headers | 9 | PASS | "Helmet is a middleware function that sets security-related HTTP response headers." |
| 4.10 | Login endpoints should be protected against brute-force attempts | 9 | PASS | "Prevent brute-force attacks against authorization" and "Make sure login endpoints are protected to make private data more secure." |
| 4.11 | "Ask whether both are in place, and test the second with many wrong passwords" | none | N/A | Advice. |
| 4.12 | Start the app on port `0` in a `before` hook | 13, 14 | PASS | S13: "If port is omitted or is 0, the operating system will assign an arbitrary unused port". S14: "creates a hook that runs before executing a suite". |
| 4.13 | The same checks can move to the Playwright page | none | N/A | Link to another page. |
| 5.1 | A middleware that neither ends the cycle nor calls `next()` leaves the request hanging | 4 | PASS | "it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging." |
| 5.2 | Without `express.json()`, `req.body` is `undefined` | 6 | PASS | "By default, it is undefined, and is populated when you use body-parsing middleware" |
| 5.3 | A wrong `Content-Type` gives the same result, because the parser looks only at matching requests | 5 | PASS | "or undefined if there was no body to parse, the Content-Type was not matched, or an error occurred." and "only looks at requests where the Content-Type header matches" |
| 5.4 | The properties and values of `req.body` are untrusted until validated | 6 | PASS | "are untrusted and should be validated before trusting." |
| 5.5 | A total of `'500'` or `-5` must get `400`, not an order | none | N/A | Advice about the page's own example. |
| 5.6 | Without `NODE_ENV=production`, the built-in error handler sends the stack trace to the client | 8 | PASS | "Set the environment variable NODE_ENV to production, to run the app in production mode." and "The stack trace is not included in the production environment." |
| 5.7 | A fixed-port test may hit a port already in use; port `0` lets the OS assign an unused one | 13 | PASS | "the operating system will assign an arbitrary unused port". The first half is a reason, not a source claim. |
| 6 | "What a tester can check" callout | none | N/A | A tutorial-advice callout with no cites. |
| K1 | Express: a routing and middleware web framework for Node.js | Technical panels | PASS | What it is: "Express is a routing and middleware web framework for Node.js." The row repeats the Technical panel. Its S4 support is the FAIL in row 1.1. |
| K2 | Route: a request method and a route path define one endpoint, such as `POST /orders` | Technical panels | PASS | What it is: "A route path, together with a request method, defines an endpoint where requests can be made". The `POST /orders` example comes from the page's code. |
| K3 | Route parameter: a named part of the path, such as `:id`, read from `req.params` | Technical panels | PASS | How it works: "A route parameter, such as `:id` in `/orders/:id`, captures a part of the URL into `req.params`." |
| K4 | Middleware: a function with `req`, `res`, `next` that runs during the request-response cycle | Technical panels | PASS | How it works: "A middleware function gets the request (`req`), the response (`res`), and `next`". What it is: "run during the request-response cycle". |
| K5 | `express.json()`: parses JSON bodies into `req.body` | Technical panels | PASS | How it works: "`express.json()` parses requests with JSON payloads... The parsed body is in `req.body`". |
| K6 | `res.status()` / `res.json()`: set the status code / send a JSON answer | Technical panels | PASS | How it works: "`res.status()` sets the HTTP status, and `res.json()` sends a value as a JSON response". |
| K7 | `Authorization` header: carries the credentials for protected resources | Technical panels | PASS | How it works: "The `Authorization` request header carries the credentials that give access to protected resources". |
| K8 | Error handler: middleware with four arguments `(err, req, res, next)` | Technical panels | PASS | How it works: "An error handler is middleware with four arguments: `(err, req, res, next)`". |
| K9 | `NODE_ENV=production`: production mode; the built-in error handler then hides the stack trace | Technical panels | PASS | Common mistakes: "Without `NODE_ENV=production`, the built-in error handler sends the stack trace to the client". How a tester uses it: "except in the production environment". |
| K10 | REST: a set of architecture constraints; a REST API answers with JSON and status codes | Technical panels | FAIL | The first half is in the Technical panel. "a REST API answers with JSON and status codes" is in no Technical panel. S11 says only "an HTTP service that can be called using standard web libraries and tools". Fix: drop the second half, or use the Technical panel's "HTTP service that standard web libraries and tools can call". |
| K11 | Port `0`: lets the OS pick a free port | Technical panels | PASS | Common mistakes: "Port `0` lets the operating system assign an unused one". |

Open FAILs: 3

FAILs in round 2: 3.

## Round 3 (2026-11-16)

### Fact check: sdet / backend-node-express (round 3)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0a | Lede: a small REST API in Express with routes, middleware, JSON bodies, a login check, error handling, and tests | none | N/A | Describes the page itself. |
| 0b | Intro: the API a tester sends requests to is code on a server; this page builds a small REST API in Express and tests it like an SDET | none | N/A | Describes the page and gives advice. It states no fact about a tool. |
| 1.1 | Express is a routing and middleware web framework | S4 | PASS | "Express is a routing and middleware web framework with minimal functionality of its own" |
| 1.2 | An Express application is a series of middleware calls that run during the request-response cycle | S4 | PASS | "an Express application is essentially a series of middleware function calls executed during the request-response cycle" |
| 1.3 | Express needs Node.js 18 or higher, and you install it with `npm install express` | S2 | PASS | "make sure you have Node.js 18 or higher installed" and "npm install express" (the file spaces the words: "npm     install     express") |
| 1.4 | Routing is how the endpoints of an app respond to client requests | S3 | PASS | "Routing refers to how an application's endpoints (URIs) respond to client requests." |
| 1.5 | You define routes with app methods that match the HTTP methods, such as `app.get()` and `app.post()` | S3 | PASS | "You define routing using methods of the Express app object that correspond to HTTP methods; for example, app.get() to handle GET requests and app.post to handle POST requests." |
| 1.6 | A route path with a request method defines an endpoint where requests can be made | S3 | PASS | "Route paths, in combination with a request method, define the endpoints at which requests can be made." |
| 1.7 | REST is a set of architecture constraints for distributed systems | S11 | PASS | "REST ... refers to a group of software architecture design constraints that bring about efficient, reliable and scalable distributed systems." |
| 1.8 | Beginners can take a REST API to mean an HTTP service that standard web libraries and tools can call | S11 | PASS | "Beginners can assume a REST API means an HTTP service that can be called using standard web libraries and tools." |
| 1.9 | The Postman page explains HTTP methods and status codes; this page is the server side | none | N/A | Describes the page and links to another page. |
| 2.1 | A middleware function gets `req`, `res`, and `next`, the next middleware function | S4 | PASS | "The request object (req) / The response object (res) / The next middleware function in the application's request-response cycle, commonly named next" |
| 2.2 | It must end the cycle or call `next()`; otherwise the request is left hanging | S4 | PASS | "If a middleware function does not end the request-response cycle, it must call next() ... Otherwise, the request will be left hanging." |
| 2.3 | `express.json()` parses requests with JSON payloads | S5 | PASS | "It parses incoming requests with JSON payloads" |
| 2.4 | It looks only at requests whose `Content-Type` header matches | S5 | PASS | "only looks at requests where the Content-Type header matches the type option" |
| 2.5 | The parsed body is in `req.body`, which is `undefined` when no body parser ran | S6 | PASS | "By default, it is undefined, and is populated when you use body-parsing middleware" |
| 2.6 | Every property and value of `req.body` comes from the user and must be validated before you trust it | S6 | PASS | "req.body's shape is based on user-controlled input, all properties and values in this object are untrusted and should be validated before trusting." |
| 2.7 | A route parameter such as `:id` in `/orders/:id` captures a part of the URL into `req.params` | S3 | PASS | "Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object" |
| 2.8 | A path that no route matches gets `404 Not Found` | S1 | FAIL | S1 says this only about its own Hello World app: "The app responds with "Hello World!" for requests to the root URL ( / ) or route. For every other path, it will respond with a 404 Not Found." S1 does not give the general rule. Fix: "In the Hello World app, every path other than `/` gets `404 Not Found`." |
| 2.9 | `res.status()` sets the HTTP status | S7 | PASS | "Sets the HTTP status for the response." |
| 2.10 | `res.json()` sends a value as a JSON response | S7 | PASS | "Sends a JSON response. ... The value to send as JSON." |
| 2.11 | The `Authorization` request header carries the credentials that give access to protected resources | S10 | PASS | "The HTTP Authorization request header can be used to provide credentials that authenticate a user agent with a server, allowing access to protected resources." |
| 2.12 | `req.get()` reads a request header | S6 | PASS | "Returns the specified HTTP request header field (case-insensitive match)." |
| 2.13 | Express catches an error that synchronous code throws | S8 | PASS | "If synchronous code throws an error, then Express will catch and process it." |
| 2.14 | Handlers that return a promise call `next(value)` when they reject or throw, and async functions always return a promise, so their errors reach Express with no extra work | S8 | PASS | "Route handlers and middleware that return a Promise call next(value) automatically when they reject or throw an error, and async functions always return a Promise, so their errors reach Express with no extra work." |
| 2.15 | An error handler is middleware with four arguments `(err, req, res, next)` | S8 | PASS | "error-handling functions have four arguments instead of three: (err, req, res, next)." |
| 3.1 | `npm init` asks a few questions, and RETURN accepts the default for most of them | S2 | PASS | "This command prompts you for a number of things ... you can simply hit RETURN to accept the defaults for most of them" |
| 3.2 | "the defaults work for this page" | none | FAIL | This is a claim about `npm init` defaults with no cite. S2 names an exception: "with the following exception: entry point: (index.js)". Fix: drop the claim, or cite S2 and say that the entry point is the one question where S2 says to choose a name. |
| 3.3 | Install Express with `npm install express` | S2 | PASS | "Now, install Express in the myapp directory ... npm install express" |
| 3.4 | The users are a fixed list; a real API stores hashed passwords in a database and issues real tokens | none | N/A | Advice about the page's own example code. |
| 3.5 | The `before` hook runs before the tests, and `after` runs after them | S14 | PASS | "This function creates a hook that runs before executing a suite." and "This function creates a hook that runs after executing a suite." |
| 3.6 | Port `0` makes the OS assign an unused port, which `server.address().port` returns | S13 | PASS | "If port is omitted or is 0, the operating system will assign an arbitrary unused port, which can be retrieved by using server.address().port" |
| 3.7 | "All four tests pass." | none | N/A | Reports what the example code prints when run. |
| 4.1 | `201` is for a created resource | S12 | PASS | "201 Created ... The request succeeded, and a new resource was created as a result." |
| 4.2 | `400` is for a client error | S12 | PASS | "400 Bad Request ... due to something that is perceived to be a client error" |
| 4.3 | `401` is used when the client must authenticate | S12 | PASS | "That is, the client must authenticate itself to get the requested response." |
| 4.4 | `req.body` is user-controlled input | S6 | PASS | "req.body's shape is based on user-controlled input" |
| 4.5 | The built-in error handler writes the stack trace to the client, except in the production environment | S8 | PASS | "the error will be written to the client with the stack trace. The stack trace is not included in the production environment." |
| 4.6 | Helmet is middleware that sets security-related response headers | S9 | PASS | "Helmet is a middleware function that sets security-related HTTP response headers." |
| 4.7 | Login endpoints should be protected against brute-force attempts | S9 | PASS | "Prevent brute-force attacks against authorization. Make sure login endpoints are protected" |
| 4.8 | Start the app on port `0` | S13 | PASS | "If port is omitted or is 0, the operating system will assign an arbitrary unused port" |
| 4.9 | ...in a `before` hook | S14 | PASS | "This function creates a hook that runs before executing a suite." |
| 4.10 | "Send a missing field...", "Ask whether both are in place...", and the other test advice in this section | none | N/A | Advice that says it is advice. |
| 5.1 | If a middleware does not end the cycle and does not call `next()`, the request is left hanging | S4 | PASS | "Otherwise, the request will be left hanging." |
| 5.2 | Without `express.json()`, `req.body` is `undefined` | S6 | PASS | "By default, it is undefined, and is populated when you use body-parsing middleware" |
| 5.3 | The same happens when the client sends the wrong `Content-Type`, because the parser looks only at matching requests | S5 | PASS | "or undefined if there was no body to parse, the Content-Type was not matched, or an error occurred" and "only looks at requests where the Content-Type header matches" |
| 5.4 | The properties and values of `req.body` are untrusted until validated | S6 | PASS | "all properties and values in this object are untrusted and should be validated before trusting" |
| 5.5 | A total of `'500'` or `-5` must get `400`, not an order | none | N/A | Advice about the page's own example API. |
| 5.6 | Without `NODE_ENV=production`, the built-in error handler sends the stack trace to the client | S8 | PASS | "the error will be written to the client with the stack trace. The stack trace is not included in the production environment." and "Set the environment variable NODE_ENV to production, to run the app in production mode." |
| 5.7 | A fixed-port test: the port may already be in use | none | N/A | A general remark, not a fact about a named tool. |
| 5.8 | Port `0` lets the OS assign an unused port | S13 | PASS | "the operating system will assign an arbitrary unused port" |
| 6.1 | Callout "Tutorial advice" | none | N/A | The callout says it is the tutorial's own advice. |
| K1 | Express: a routing and middleware web framework; needs Node.js 18 or higher | Technical s1 | PASS | "**Express** is a routing and middleware web framework" and "Express needs Node.js 18 or higher" |
| K2 | Route: a request method and a route path define one endpoint, such as `POST /orders` | Technical s1 | PASS | "A route path, together with a request method, defines an endpoint where requests can be made" |
| K3 | Route parameter: a named part of the path, such as `:id`, read from `req.params` | Technical s2 | PASS | "A route parameter, such as `:id` in `/orders/:id`, captures a part of the URL into `req.params`" |
| K4 | Middleware: a function with `req`, `res`, and `next` that runs during the request-response cycle | Technical s1, s2 | PASS | "A middleware function gets the request (`req`), the response (`res`), and `next`" and "a series of middleware calls that run during the request-response cycle" |
| K5 | `express.json()`: the middleware that parses JSON bodies into `req.body` | Technical s2 | PASS | "`express.json()` parses requests with JSON payloads ... The parsed body is in `req.body`" |
| K6 | `res.status()` / `res.json()`: set the status code / send a JSON answer | Technical s2 | PASS | "`res.status()` sets the HTTP status, and `res.json()` sends a value as a JSON response" |
| K7 | `Authorization` header: carries the credentials for protected resources | Technical s2 | PASS | "The `Authorization` request header carries the credentials that give access to protected resources" |
| K8 | Error handler: middleware with four arguments | Technical s2 | PASS | "An error handler is middleware with four arguments: `(err, req, res, next)`" |
| K9 | `NODE_ENV=production`: production mode; the built-in error handler then hides the stack trace | Technical s4, s5 | PASS | "The built-in error handler writes the stack trace to the client, except in the production environment" and "Without `NODE_ENV=production`, the built-in error handler sends the stack trace to the client" |
| K10 | REST: a set of architecture constraints; for a beginner, an HTTP service that standard web tools can call | Technical s1 | PASS | "REST is a set of architecture constraints for distributed systems. Beginners can take a REST API to mean an HTTP service that standard web libraries and tools can call" |
| K11 | Port `0`: lets the OS pick a free port | Technical s3, s5 | PASS | "Port `0` makes the operating system assign an unused port" |

Open FAILs: 2

FAILs in round 3: 2.

## Round 4 (2026-11-16)

### Fact check: sdet / backend-node-express (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: a small REST API in Express with routes, middleware, JSON bodies, a login check, error handling, and tests | none | N/A | It describes the page itself. |
| 2 | Intro: the API a tester sends requests to is code on a server. This page builds a small REST API in Express and tests it. | none | N/A | It describes the page and gives no tool fact. |
| 3 | Express is a routing and middleware web framework | S4 | PASS | "Express is a routing and middleware web framework with minimal functionality of its own" |
| 4 | An Express app is a series of middleware calls that run during the request-response cycle | S4 | PASS | "an Express application is essentially a series of middleware function calls executed during the request-response cycle" |
| 5 | Express needs Node.js 18 or higher, and you install it with `npm install express` | S2 | PASS | "make sure you have Node.js 18 or higher installed"; "install express" (line 11) |
| 6 | Routing is how the endpoints of an app respond to client requests | S3 | PASS | "Routing refers to how an application's endpoints (URIs) respond to client requests." |
| 7 | You define routes with app methods that match HTTP methods, such as `app.get()` and `app.post()` | S3 | PASS | "methods of the Express app object that correspond to HTTP methods; for example, app.get() to handle GET requests and app.post to handle POST requests" |
| 8 | A route path with a request method defines an endpoint where requests can be made | S3 | PASS | "Route paths, in combination with a request method, define the endpoints at which requests can be made." |
| 9 | REST is a set of architecture constraints for distributed systems | S11 | PASS | "REST ... refers to a group of software architecture design constraints that bring about efficient, reliable and scalable distributed systems." |
| 10 | Beginners can take a REST API to mean an HTTP service that standard web libraries and tools can call | S11 | PASS | "Beginners can assume a REST API means an HTTP service that can be called using standard web libraries and tools." |
| 11 | The Postman page explains HTTP methods and status codes; this page is the server side | none | N/A | It is a cross-reference sentence about the site. |
| 12 | A middleware function gets `req`, `res`, and `next`, the next middleware function | S4 | PASS | "The request object ( req ) / The response object ( res ) / The next middleware function ... commonly named next" |
| 13 | It must end the cycle or call `next()`; otherwise the request is left hanging | S4 | PASS | "If a middleware function does not end the request-response cycle, it must call next() ... Otherwise, the request will be left hanging." |
| 14 | `express.json()` parses requests with JSON payloads | S5 | PASS | "It parses incoming requests with JSON payloads" |
| 15 | It looks only at requests whose `Content-Type` header matches | S5 | PASS | "only parses JSON and only looks at requests where the Content-Type header matches the type option" |
| 16 | The parsed body is in `req.body`, which is `undefined` when no body parser ran | S6 | PASS | "By default, it is undefined, and is populated when you use body-parsing middleware such as express.json()" |
| 17 | Every property and value of `req.body` comes from the user and must be validated before you trust it | S6 | PASS | "all properties and values in this object are untrusted and should be validated before trusting" |
| 18 | A route parameter such as `:id` in `/orders/:id` captures part of the URL into `req.params` | S3 | PASS | "Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object" |
| 19 | The Express Hello World app answers every path other than `/` with `404 Not Found` | S1 | PASS | "For every other path, it will respond with a 404 Not Found." |
| 20 | The API of this page did the same for an unknown path in the lab | none | N/A | It only reports what the page's own example does. |
| 21 | `res.status()` sets the HTTP status | S7 | PASS | "Sets the HTTP status for the response." |
| 22 | `res.json()` sends a value as a JSON response | S7 | PASS | "Sends a JSON response." and "The value to send as JSON." |
| 23 | The `Authorization` request header carries the credentials that give access to protected resources | S10 | PASS | "The HTTP Authorization request header can be used to provide credentials that authenticate a user agent with a server, allowing access to protected resources." |
| 24 | `req.get()` reads a request header | S6 | PASS | "Returns the specified HTTP request header field (case-insensitive match)." |
| 25 | Express catches an error that synchronous code throws | S8 | PASS | "If synchronous code throws an error, then Express will catch and process it." |
| 26 | Promise-returning handlers call `next(value)` on reject or throw; async functions always return a promise, so their errors reach Express with no extra work | S8 | PASS | "Route handlers and middleware that return a Promise call next(value) automatically when they reject or throw an error, and async functions always return a Promise, so their errors reach Express with no extra work." |
| 27 | An error handler is middleware with four arguments `(err, req, res, next)` | S8 | PASS | "error-handling functions have four arguments instead of three: (err, req, res, next)" |
| 28 | `npm init`: RETURN accepts the defaults for most questions; at the entry point, type a file name or press RETURN to keep `index.js` | S2 | PASS | "you can simply hit RETURN to accept the defaults for most of them, with the following exception: entry point: (index.js) Enter app.js, or whatever you want the name of the main file to be. If you want it to be index.js, hit RETURN" |
| 29 | Install Express with `npm install express` | S2 | PASS | "Now, install Express in the myapp directory and save it in the dependencies list." and "install express" (line 11) |
| 30 | The users are a fixed list to keep the example short. A real API stores hashed passwords in a database and issues real tokens. | none | N/A | It explains the page's own example code. It is not a fact about a tool, product, command, or number. |
| 31 | The `before` hook runs before the tests, and `after` runs after them | S14 | PASS | "This function creates a hook that runs before executing a suite."; "This function creates a hook that runs after executing a suite." |
| 32 | Port `0` makes the OS assign an unused port, which `server.address().port` returns | S13 | PASS | "If port is omitted or is 0, the operating system will assign an arbitrary unused port, which can be retrieved by using server.address().port" |
| 33 | All four tests pass | none | N/A | It reports what the page's own example code returns. |
| 34 | `201` for a created resource | S12 | PASS | "201 Created ... The request succeeded, and a new resource was created as a result." |
| 35 | `400` for a client error | S12 | PASS | "400 Bad Request ... due to something that is perceived to be a client error" |
| 36 | `401` when the client must authenticate | S12 | PASS | "the client must authenticate itself to get the requested response." |
| 37 | "A good API answers each case with its own code"; "The tests above check each of them" | none | N/A | It is advice and a report about the page's own tests. |
| 38 | `req.body` is user-controlled input | S6 | PASS | "As req.body's shape is based on user-controlled input" |
| 39 | Attack the body: send a missing field, a wrong type, a negative number, broken JSON. The tests send `-5` and broken JSON. | none | N/A | It is advice plus a report on the page's own tests. |
| 40 | The built-in error handler writes the stack trace to the client, except in production | S8 | PASS | "the error will be written to the client with the stack trace. The stack trace is not included in the production environment." |
| 41 | Send a broken body to a staging server; the answer should not name files or libraries | none | N/A | It is advice. |
| 42 | Helmet is middleware that sets security-related response headers | S9 | PASS | "Helmet is a middleware function that sets security-related HTTP response headers." |
| 43 | Login endpoints should be protected against brute-force attempts | S9 | PASS | "Prevent brute-force attacks against authorization: Make sure login endpoints are protected" |
| 44 | Ask whether both are in place; test the second with many wrong passwords | none | N/A | It is advice. |
| 45 | Start the app on port `0` in a `before` hook and send real HTTP requests | S13, S14 | PASS | S13: "If port is omitted or is 0, the operating system will assign an arbitrary unused port". S14: "creates a hook that runs before executing a suite" |
| 46 | The same checks can move to the Playwright page | none | N/A | It is a cross-reference to another page. |
| 47 | A middleware that does not end the cycle and does not call `next()` leaves the request hanging | S4 | PASS | "If a middleware function does not end the request-response cycle, it must call next() ... Otherwise, the request will be left hanging." |
| 48 | Without `express.json()`, `req.body` is `undefined` | S6 | PASS | "By default, it is undefined, and is populated when you use body-parsing middleware" |
| 49 | The same happens with a wrong `Content-Type`, because the parser looks only at matching requests | S5 | PASS | "or undefined if there was no body to parse, the Content-Type was not matched, or an error occurred"; "only looks at requests where the Content-Type header matches" |
| 50 | The properties and values of `req.body` are untrusted until validated | S6 | PASS | "are untrusted and should be validated before trusting" |
| 51 | A total of `'500'` or `-5` must get `400`, not an order | none | N/A | It is a rule for the page's own example API. |
| 52 | Without `NODE_ENV=production`, the built-in error handler sends the stack trace to the client | S8 | PASS | "The stack trace is not included in the production environment. Set the environment variable NODE_ENV to production, to run the app in production mode." |
| 53 | A test on a fixed port may hit a port already in use | none | N/A | It is general advice and states no tool fact. |
| 54 | Port `0` lets the OS assign an unused port | S13 | PASS | "the operating system will assign an arbitrary unused port" |
| 55 | "What a tester can check" callout (six questions) | none | N/A | It is the tutorial's own advice, and the callout says so. |
| K1 | Express: a routing and middleware web framework; needs Node.js 18 or higher | – | PASS | What it is: "Express is a routing and middleware web framework ... Express needs Node.js 18 or higher" |
| K2 | Route: a request method and a route path define one endpoint, such as `POST /orders` | – | PASS | What it is: "A route path, together with a request method, defines an endpoint where requests can be made" |
| K3 | Route parameter: a named part of the path such as `:id`, read from `req.params` | – | PASS | How it works: "A route parameter, such as `:id` in `/orders/:id`, captures a part of the URL into `req.params`" |
| K4 | Middleware: a function with `req`, `res`, `next` that runs during the request-response cycle | – | PASS | How it works: "A middleware function gets the request (`req`), the response (`res`), and `next`"; What it is: "middleware calls that run during the request-response cycle" |
| K5 | `express.json()` parses JSON bodies into `req.body` | – | PASS | How it works: "`express.json()` parses requests with JSON payloads ... The parsed body is in `req.body`" |
| K6 | `res.status()` / `res.json()` set the status code / send a JSON answer | – | PASS | How it works: "`res.status()` sets the HTTP status, and `res.json()` sends a value as a JSON response" |
| K7 | `Authorization` header carries the credentials for protected resources | – | PASS | How it works: "The `Authorization` request header carries the credentials that give access to protected resources" |
| K8 | Error handler: middleware with four arguments | – | PASS | How it works: "An error handler is middleware with four arguments: `(err, req, res, next)`" |
| K9 | `NODE_ENV=production`: production mode; the built-in error handler hides the stack trace | – | PASS | Common mistakes: "Without `NODE_ENV=production`, the built-in error handler sends the stack trace to the client"; How a tester uses it: "except in the production environment" |
| K10 | REST: architecture constraints for distributed systems; for a beginner, an HTTP service that standard web tools can call | – | PASS | What it is: "REST is a set of architecture constraints for distributed systems. Beginners can take a REST API to mean an HTTP service that standard web libraries and tools can call" |
| K11 | Port `0` lets the OS pick a free port | – | PASS | Try it: "Port `0` makes the operating system assign an unused port" |

Open FAILs: 0

FAILs in round 4: 0.

Open FAILs: 0
