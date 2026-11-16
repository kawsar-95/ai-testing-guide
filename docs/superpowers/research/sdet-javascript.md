# Research notes: SDET Roadmap, JavaScript for Testers

Page: `content/sdet/javascript.mdx`. Accessed 2026-11-15.

## Sources

| ID | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | JavaScript | MDN Web Docs (Mozilla) | https://developer.mozilla.org/en-US/docs/Web/JavaScript | 2026-11-15 |
| S2 | Introduction to Node.js | Node.js (OpenJS Foundation) | https://nodejs.org/en/learn/getting-started/introduction-to-nodejs | 2026-11-15 |
| S3 | Grammar and types | MDN Web Docs (Mozilla) | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types | 2026-11-15 |
| S4 | const | MDN Web Docs (Mozilla) | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const | 2026-11-15 |
| S5 | Functions | MDN Web Docs (Mozilla) | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions | 2026-11-15 |
| S6 | Indexed collections | MDN Web Docs (Mozilla) | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections | 2026-11-15 |
| S7 | JSON.parse() | MDN Web Docs (Mozilla) | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse | 2026-11-15 |
| S8 | async function | MDN Web Docs (Mozilla) | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function | 2026-11-15 |
| S9 | await | MDN Web Docs (Mozilla) | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await | 2026-11-15 |
| S10 | try...catch | MDN Web Docs (Mozilla) | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch | 2026-11-15 |
| S11 | Strict equality (===) | MDN Web Docs (Mozilla) | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality | 2026-11-15 |
| S12 | Modules: ECMAScript modules | Node.js (OpenJS Foundation) | https://nodejs.org/api/esm.html | 2026-11-15 |
| S13 | Global objects | Node.js (OpenJS Foundation) | https://nodejs.org/api/globals.html | 2026-11-15 |
| S14 | JSON.stringify() | MDN Web Docs (Mozilla) | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify | 2026-11-15 |
| S15 | Write scripts to test API response data in Postman | Postman | https://learning.postman.com/docs/tests-and-scripts/write-scripts/test-scripts/ | 2026-11-15 |
| S16 | Installation | Playwright (Microsoft) | https://playwright.dev/docs/intro | 2026-11-15 |

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | JavaScript is a lightweight interpreted or JIT-compiled language with first-class functions. | S1 | "JavaScript ( JS ) is a lightweight interpreted (or just-in-time compiled ) programming language with first-class functions" |
| C2 | Known for web pages; also used outside the browser, such as Node.js. | S1 | "While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js" |
| C3 | Node.js is an open-source, cross-platform JavaScript runtime. | S2 | "Node.js is an open-source and cross-platform JavaScript runtime environment." |
| C4 | Node.js runs V8 outside the browser. | S2 | "Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser." |
| C5 | Node.js has asynchronous I/O in its standard library. | S2 | "provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking" |
| C6 | `let` declares a block-scoped variable. | S3 | "let Declares a block-scoped variable, optionally initializing it to a value." |
| C7 | `const`: block-scoped, cannot be re-assigned, must be initialized. | S3 | "const Declares a block-scoped variable that cannot be re-assigned, which must be initialized at declaration." |
| C8 | Eight data types, seven of them primitives. | S3 | "The latest ECMAScript standard defines eight data types: Seven data types that are primitives" |
| C9 | `const` makes the reference immutable, not the value. | S4 | "The const declaration creates an immutable reference to a value. It does not mean the value it holds is immutable" |
| C29 | The properties of an object in a `const` can still be added, updated, or removed. | S4 | "if a constant is an object, its properties can be added, updated, or removed" |
| C10 | Arrow functions have a shorter syntax. | S5 | "has a shorter syntax compared to function expressions" |
| C11 | `map()` returns a new array of the callback results. | S6 | "The map() method returns a new array of the return value from executing callback on every array item." |
| C12 | `filter()` returns a new array of the items that pass. | S6 | "The filter() method returns a new array containing the items for which callback returned true ." |
| C13 | `find()` returns the first matching item. | S6 | "The find() method returns the first item for which callback returned true ." |
| C14 | `JSON.parse()` turns a JSON string into a value. | S7 | "The JSON.parse() static method parses a JSON string, constructing the JavaScript value or object described by the string." |
| C15 | `JSON.parse()` throws a `SyntaxError` on invalid JSON. | S7 | "SyntaxError Thrown if the string to parse is not valid JSON." |
| C16 | An async function always returns a promise. | S8 | "Async functions always return a promise." |
| C30 | `await` waits for the promise and returns the fulfilled value. | S9 | "it waits for the Promise to be fulfilled and returns the fulfilled value" |
| C17 | `await` suspends until the promise is fulfilled or rejected. | S8 | "Await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected." |
| C18 | `await` works only in an async function or at the top level of a module. | S9 | "It can only be used inside an async function or at the top level of a module ." |
| C19 | `try` runs first; on an exception, `catch` runs. | S10 | "The code in the try block is executed first, and if it throws an exception, the code in the catch block will be executed." |
| C20 | `finally` always runs. | S10 | "The code in the finally block will always be executed before control flow exits the entire construct." |
| C21 | `===` treats operands of different types as different. | S11 | "the strict equality operator always considers operands of different types to be different" |
| C22 | `"1" === 1` is false. | S11 | "console.log("1" === 1); // Expected output: false" |
| C23 | A `.mjs` file is an ES module in Node.js. | S12 | "Authors can tell Node.js to interpret JavaScript as an ES module via the .mjs file extension" |
| C24 | Modules use `import` and `export`. | S12 | "Modules are defined using a variety of import and export statements." |
| C25 | Node.js has a browser-compatible `fetch()`. | S13 | "A browser-compatible implementation of the fetch() function." |
| C26 | `JSON.stringify()` turns a value into a JSON string. | S14 | "The JSON.stringify() static method converts a JavaScript value to a JSON string" |
| C27 | Postman tests are written in JavaScript. | S15 | "You can write tests for your Postman API requests in JavaScript in the Post-response tab." |
| C28 | Playwright tests are TypeScript or JavaScript. | S16 | "TypeScript or JavaScript (default: TypeScript)" |

## Run check

The script of "Try it" (`users.mjs`) ran on 2026-11-15 with Node.js 26.8.1 against `https://postman-echo.com`: it printed `[ 'Asha' ]`, `Rafi`, `true`, and `sdet`, exit code 0. The behaviours in "Common mistakes" were run the same day: an async function returns a Promise, `"1" == 1` is true and `"1" === 1` is false, a change through a second `const` name changes the same object, and `JSON.parse("{bad json}")` throws a `SyntaxError`.
