# Research notes: SDET Roadmap, Backend with Node.js and Express

Page: `content/sdet/backend-node-express.mdx`. Accessed 2026-11-15.

## Sources

| ID | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | Hello world example | Express (OpenJS Foundation) | https://expressjs.com/en/starter/hello-world.html | 2026-11-15 |
| S2 | Installing | Express (OpenJS Foundation) | https://expressjs.com/en/starter/installing.html | 2026-11-15 |
| S3 | Routing | Express (OpenJS Foundation) | https://expressjs.com/en/guide/routing.html | 2026-11-15 |
| S4 | Using middleware | Express (OpenJS Foundation) | https://expressjs.com/en/guide/using-middleware.html | 2026-11-15 |
| S5 | Express Object (5.x API) | Express (OpenJS Foundation) | https://expressjs.com/en/5x/api/express/ | 2026-11-15 |
| S6 | Request Object (5.x API) | Express (OpenJS Foundation) | https://expressjs.com/en/5x/api/request/ | 2026-11-15 |
| S7 | Response (5.x API) | Express (OpenJS Foundation) | https://expressjs.com/en/5x/api/response/ | 2026-11-15 |
| S8 | Error Handling | Express (OpenJS Foundation) | https://expressjs.com/en/guide/error-handling.html | 2026-11-15 |
| S9 | Production Best Practices: Security | Express (OpenJS Foundation) | https://expressjs.com/en/advanced/best-practice-security.html | 2026-11-15 |
| S10 | Authorization header | MDN Web Docs (Mozilla) | https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Authorization | 2026-11-15 |
| S11 | REST | MDN Web Docs (Mozilla), Glossary | https://developer.mozilla.org/en-US/docs/Glossary/REST | 2026-11-15 |
| S12 | HTTP response status codes | MDN Web Docs (Mozilla) | https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status | 2026-11-15 |
| S13 | Net | Node.js (OpenJS Foundation) | https://nodejs.org/api/net.html | 2026-11-15 |
| S14 | Test runner | Node.js (OpenJS Foundation) | https://nodejs.org/api/test.html | 2026-11-15 |

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | The hello-world app listens on port 3000; other paths get 404. | S1 | "This app starts a server and listens on port 3000 for connections." |
| C2 | Every other path gets 404 Not Found. | S1 | "For every other path, it will respond with a 404 Not Found ." |
| C3 | Express needs Node.js 18 or higher. | S2 | "Before you begin, make sure you have Node.js 18 or higher installed." |
| C4 | Install with npm. | S2 | "npm install express" |
| C5 | Routing: how endpoints respond to client requests. | S3 | "Routing refers to how an application's endpoints (URIs) respond to client requests." |
| C6 | Route methods match HTTP methods. | S3 | "You define routing using methods of the Express app object that correspond to HTTP methods" |
| C7 | Route parameters are captured into `req.params`. | S3 | "Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object" |
| C8 | Express is a series of middleware calls. | S4 | "an Express application is essentially a series of middleware function calls executed during the request-response cycle" |
| C9 | Middleware gets `req`, `res`, and `next`. | S4 | "Middleware functions are functions that have access to: The request object ( req ) The response object ( res ) The next middleware function in the application's request-response cycle, commonly named next" |
| C10 | Middleware must end the cycle or call `next()`. | S4 | "If a middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging." |
| C11 | `express.json()` parses JSON request bodies. | S5 | "It parses incoming requests with JSON payloads and is based on body-parser ." |
| C12 | It only looks at a matching Content-Type. | S5 | "Returns middleware that only parses JSON and only looks at requests where the Content-Type header matches the type option." |
| C13 | `req.body` holds the body; undefined without a body parser. | S6 | "Contains key-value pairs of data submitted in the request body. By default, it is undefined , and is populated when you use body-parsing middleware such as express.json() or express.urlencoded() ." |
| C14 | `req.body` is untrusted and must be validated. | S6 | "As req.body 's shape is based on user-controlled input, all properties and values in this object are untrusted and should be validated before trusting." |
| C15 | `req.get()` reads a request header. | S6 | "Returns the specified HTTP request header field (case-insensitive match)." |
| C16 | `res.status()` sets the status. | S7 | "Sets the HTTP status for the response." |
| C17 | `res.json()` sends JSON. | S7 | "Sends a JSON response. This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using JSON.stringify() ." |
| C18 | Express has a default error handler. | S8 | "Express comes with a default error handler so you don't need to write your own to get started." |
| C19 | Synchronous errors are caught. | S8 | "If synchronous code throws an error, then Express will catch and process it." |
| C20 | Async handlers' errors reach Express. | S8 | "Route handlers and middleware that return a Promise call next(value) automatically when they reject or throw an error, and async functions always return a Promise, so their errors reach Express with no extra work." |
| C21 | An error handler has four arguments. | S8 | "except error-handling functions have four arguments instead of three: (err, req, res, next) ." |
| C22 | The built-in handler sends the stack trace, but not in production. | S8 | "it will be handled by the built-in error handler; the error will be written to the client with the stack trace. The stack trace is not included in the production environment." |
| C23 | Production mode is `NODE_ENV=production`. | S8 | "Set the environment variable NODE_ENV to production , to run the app in production mode." |
| C24 | Helmet sets security headers. | S9 | "Helmet is a middleware function that sets security-related HTTP response headers." |
| C25 | Protect login endpoints against brute force. | S9 | "Make sure login endpoints are protected to make private data more secure." |
| C26 | The Authorization header carries credentials. | S10 | "The HTTP Authorization request header can be used to provide credentials that authenticate a user agent with a server, allowing access to protected resources." |
| C27 | REST is a set of architecture constraints. | S11 | "REST (Representational State Transfer) refers to a group of software architecture design constraints that bring about efficient, reliable and scalable distributed systems." |
| C28 | 201 Created. | S12 | "The request succeeded, and a new resource was created as a result." |
| C29 | 400 Bad Request. | S12 | "The server cannot or will not process the request due to something that is perceived to be a client error" |
| C30 | 401 means unauthenticated. | S12 | "That is, the client must authenticate itself to get the requested response." |
| C31 | Port 0 gives a free port, read with `server.address().port`. | S13 | "If port is omitted or is 0, the operating system will assign an arbitrary unused port, which can be retrieved by using server.address().port after the 'listening' event has been emitted." |
| C32 | `before` runs before a suite. | S14 | "This function creates a hook that runs before executing a suite." |
| C33 | `after` runs after a suite. | S14 | "This function creates a hook that runs after executing a suite." |
| C34 | A route path with a request method defines an endpoint. | S3 | "Route paths, in combination with a request method, define the endpoints at which requests can be made." |
| C35 | Beginners can take a REST API to mean an HTTP service called with standard web tools. | S11 | "Beginners can assume a REST API means an HTTP service that can be called using standard web libraries and tools." |
| C36 | `npm init` prompts; RETURN accepts the default for most of the questions. | S2 | "For now, you can simply hit RETURN to accept the defaults for most of them" |
| C37 | Promise-returning handlers call next(value); async errors reach Express with no extra work. | S8 | "Route handlers and middleware that return a Promise call next(value) automatically when they reject or throw an error, and async functions always return a Promise, so their errors reach Express with no extra work." |

## Run check

Run on 2026-11-15 with Node.js 26.8.1 and Express 5.3.0.

- `node --test page.test.mjs` (the test file of "Try it"): 4 tests, 4 passed. A longer version with 6 tests (also a `GET` read-back and a 404) passed too.
- The setup of "Try it" was run again, as the page now says it, in a new folder with npm 11.19.0: `npm init` with RETURN for every question (it wrote `"type": "commonjs"`), then `npm install express` (5.3.0). The three files were copied out of the Technical panel. `node --test` found `app.test.mjs`: 4 tests, 4 passed. `node server.mjs` answered `GET /health` with `{"status":"ok"}`. The `.mjs` names make the files ES modules, so the page needs no `"type": "module"`.
- `PORT=3456 node server.mjs`, then `curl`: `GET /health` gave `200` and `{"status":"ok"}`; the login gave `{"token":"token-asha"}`; `POST /orders` without a token gave `401`, and with `Authorization: Bearer token-asha` gave `201` and `{"id":1,"total":500}`.
- With the app's error handler removed, a broken JSON body got `400` with an HTML page that contained the stack trace (it named `body-parser`). With `NODE_ENV=production`, the same request got `400` without the stack trace.
- A body sent as `text/plain` was not parsed: `req.body` stayed `undefined`, and the login answered `401`.
