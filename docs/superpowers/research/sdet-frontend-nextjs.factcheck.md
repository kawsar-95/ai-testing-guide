# Fact check: sdet / frontend-nextjs

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep, and Glob only; no web access) that did not write the page. It got only the page, the visible text of the sources that the page cites (fetched with a plain GET, as `scripts/sdet_claimcheck.py` reads them), and the brief in `sdet-factcheck-brief.md`. After a round with FAILs, the author fixed the page and its research note, and the next round checked the whole page again.

## Round 1 (2026-11-15)

### Fact check: sdet / frontend-nextjs (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: components, props, state, effects, routing, Server and Client Components in a Next.js app, and how a tester tests them with Playwright | none | N/A | Describes the page itself. |
| 2 | Intro: if you know how a React component gets its data, keeps its state, and becomes clickable, you know where its bugs hide | none | N/A | Advice, not a fact about a tool. |
| 3 | Intro: this page builds a tiny shop in Next.js and tests it with Playwright | none | N/A | Describes the page itself. |
| 4 | What it is: React lets you combine markup, CSS, and JavaScript into components: reusable UI elements | S5 | PASS | "React lets you combine your markup, CSS, and JavaScript into custom “components”, reusable UI elements for your app." |
| 5 | A component is a JavaScript function, and its name must start with a capital letter | S5 | PASS | "React components are regular JavaScript functions, but their names must start with a capital letter" |
| 6 | Props are the information that you pass to a JSX tag | S6 | PASS | "Props are the information that you pass to a JSX tag." |
| 7 | Next.js is a React framework with file-system based routing: folders and files define routes | S2 | FAIL | S2 says "Next.js uses file-system based routing, meaning you can use folders and files to define routes." It never calls Next.js "a React framework". Fix: drop "a React framework", or cite a source that says it. |
| 8 | A page is the UI of one route | S2 | PASS | "A page is UI that is rendered on a specific route." |
| 9 | A layout is UI that several pages share, and it keeps its state on navigation | S2 | PASS | "A layout is UI that is shared between multiple pages. On navigation, layouts preserve state, remain interactive, and do not rerender." |
| 10 | You start a new app with `npx create-next-app@latest my-app --yes` | none (the cite is on the next sentence) | FAIL | No cite on this sentence. S1 shows only "pnpm create next-app@latest my-app --yes". The `npx` form is not in the text. Fix: use the command as S1 shows it, and cite S1. |
| 11 | The `--yes` flag takes the defaults, which include TypeScript and the App Router | S1 | PASS | "--yes skips prompts using saved preferences or defaults. The default setup enables TypeScript, Tailwind CSS, ESLint, App Router, and Turbopack" |
| 12 | Next.js needs Node.js 20.9 or later | S1 | PASS | "Minimum Node.js version: 20.9" |
| 13 | The language underneath is on JavaScript for Testers and TypeScript for Testers; the test tool is on UI Automation with Playwright | none | N/A | Links to other pages of the site. |
| 14 | How it works: by default, layouts and pages are Server Components; they render on the server and the result streams to the client | S3 | PASS | "By default, layouts and pages are Server Components, which lets you fetch data and render parts of your UI on the server, optionally cache the result, and stream it to the client." |
| 15 | Server Components can use API keys, tokens, and other secrets without exposing them to the client | S3 | PASS | "Use API keys, tokens, and other secrets without exposing them to the client." |
| 16 | The `"use client"` directive at the top of a file makes a Client Component | S3 | PASS | "You can create a Client Component by adding the "use client" directive at the top of the file, above your imports." |
| 17 | You need a Client Component for state, event handlers such as `onClick`, effects, and browser-only APIs | S3 | PASS | "Use Client Components when you need: State and event handlers. E.g. onClick, onChange. Lifecycle logic. E.g. useEffect. Browser-only APIs." |
| 18 | Everything that such a file imports goes into the client bundle too | S3 | PASS | "all of its imports and the components it directly renders are included in the client bundle" |
| 19 | The first HTML is static; JavaScript then hydrates the Client Components to make them interactive | S3 | PASS | "JavaScript is used to hydrate Client Components and make the application interactive." and "to make the static HTML interactive" |
| 20 | Hydration attaches the event handlers to the HTML | S3 | PASS | "Hydration is React's process for attaching event handlers to the DOM, to make the static HTML interactive." |
| 21 | `useState` gives a state variable that keeps its value between renders, and a setter that updates it and renders the component again | S7 | PASS | "A state variable to retain the data between renders. A state setter function to update the variable and trigger React to render the component again." |
| 22 | Hooks such as `useState` can only be called at the top level of a component | S7 | PASS | "Calling Hooks, including useState, is only valid at the top level of a component or another Hook." |
| 23 | Event handlers are functions that run in response to clicks, hovers, focus, and other interactions | S11 | PASS | "Event handlers are your own functions that will be triggered in response to interactions like clicking, hovering, focusing form inputs, and so on." |
| 24 | Effects run code after rendering, to sync the component with a system outside React | S8 | PASS | "Effects let you run some code after rendering so that you can synchronize your component with some system outside of React." |
| 25 | Keys tell React which array item each component belongs to | S9 | PASS | "Keys tell React which array item each component corresponds to" |
| 26 | A folder name in square brackets, such as `[id]`, is a dynamic segment | S2 | PASS | "Wrapping a folder name in square brackets (e.g. [slug]) creates a dynamic route segment" |
| 27 | The `<Link>` component links pages, and Next.js prefetches a linked route when the link enters the viewport | S4 | PASS | "Next.js automatically prefetches routes linked with the <Link> component when they enter the user's viewport." |
| 28 | Try it: create an app with `npx create-next-app@latest my-app --yes` | S1 | FAIL | S1 shows "pnpm create next-app@latest my-app --yes". The `npx` form is not in the text. Fix: show the command as S1 shows it. |
| 29 | `app/counter.tsx` needs `"use client"` because it has state and a click handler | S3 | PASS | "Use Client Components when you need: State and event handlers. E.g. onClick, onChange." |
| 30 | The product list gives each item a `key` | S9 | PASS | "Keys tell React which array item each component corresponds to" |
| 31 | The product list uses a `<Link>` | S4 | PASS | "prefetches routes linked with the <Link> component" |
| 32 | Add the dynamic route `app/products/[id]/page.tsx` | S2 | PASS | "create a new [slug] folder inside blog and add a page file"; "Wrapping a folder name in square brackets (e.g. [slug]) creates a dynamic route segment" |
| 33 | An unknown id calls `notFound()` | none | N/A | Reports what the page's own example code does. |
| 34 | Next.js recommends testing against the production build: run `npm run build` and `npm run start`, then `npx playwright test` | S10 | PASS | "We recommend running your tests against your production code" and "Run npm run build and npm run start, then run npx playwright test in another terminal window" |
| 35 | With `baseURL` set to the address of `npm run start`, all three tests pass | none | N/A | Reports what the page's own example code returns. |
| 36 | How a tester uses it: Next.js recommends running the tests against production code, because it behaves more like the real app | S10 | PASS | "We recommend running your tests against your production code to more closely resemble how your application will behave." |
| 37 | A Server Component has no state and no event handlers; those need a Client Component | S3 | PASS | "Use Client Components when you need: State and event handlers." |
| 38 | When a button does nothing, look for the component that should own its handler | none | N/A | Advice. |
| 39 | The first HTML is static until JavaScript hydrates it | S3 | PASS | "HTML is used to immediately show a fast non-interactive preview of the route" and "JavaScript is used to hydrate Client Components and make the application interactive." |
| 40 | A test that clicks very early can hit a button that has no handler yet | S3 (cite is on the previous sentence) | FAIL | A fact about behaviour, with no cite of its own. S3 says the HTML is a "non-interactive preview" until hydration. It says nothing about early clicks in tests. Fix: say only that the HTML is non-interactive until hydration, with the S3 cite. |
| 41 | Assert on the result of the click, as the cart test does | none | N/A | Advice. |
| 42 | A list item without a key makes React log `Each child in a list should have a unique "key" prop.` | S9 | PASS | "Warning: Each child in a list should have a unique “key” prop." |
| 43 | Collect browser console errors in the tests of the development build | none | N/A | Advice. |
| 44 | Server Components can use API keys and tokens without exposing them to the client | S3 | PASS | "Use API keys, tokens, and other secrets without exposing them to the client." |
| 45 | Search the page source and the JavaScript that the browser loads for keys and tokens | none | N/A | Advice. |
| 46 | A dynamic segment matches any value | S2 | FAIL | S2 says only "creates a dynamic route segment which is used to generate multiple pages from data". It does not say a segment "matches any value". Fix: "A dynamic segment is used to generate multiple pages from data." |
| 47 | The third test expects `404` | none | N/A | Reports what the page's own example code does. |
| 48 | Common mistakes: state and event handlers need a Client Component, marked with `"use client"` | S3 | PASS | "Use Client Components when you need: State and event handlers." and "adding the "use client" directive at the top of the file" |
| 49 | Everything that the file imports goes into the client bundle, so the browser downloads more JavaScript than it needs | S3 | PASS | "all of its imports and the components it directly renders are included in the client bundle" and "To reduce the size of your client JavaScript bundles, add 'use client' at the top of the files that define your interactive components instead of marking large parts of your UI as Client Components." |
| 50 | Hooks can only be called at the top level of a component or of another Hook | S7 | PASS | "only valid at the top level of a component or another Hook" |
| 51 | Using the index as a key often leads to subtle and confusing bugs, when items move, are inserted, or are deleted | S9 | PASS | "if an item is inserted, deleted, or if the array gets reordered. Index as a key often leads to subtle and confusing bugs." |
| 52 | If you can calculate something during render, you do not need an Effect | S12 | PASS | "If you can calculate something during render, you don’t need an Effect." |
| 53 | The tests should run against the production build | S10 | PASS | "We recommend running your tests against your production code" |
| 54 | What a tester can check: the callout list | none | N/A | Callout that says it is the tutorial's own advice. |
| K1 | Component: a function that returns UI; its name starts with a capital letter | Key words | FAIL | The Technical panel says "A component is a JavaScript function, and its name must start with a capital letter". No Technical panel says the function "returns UI". Fix: "A JavaScript function; its name must start with a capital letter." |
| K2 | Props: the information that you pass to a component | Key words | PASS | "Props are the information that you pass to a JSX tag" |
| K3 | State: a component's memory; `useState` keeps it and re-renders on change | Key words | PASS | "`useState` gives a state variable that keeps its value between renders, and a setter that updates it and renders the component again" |
| K4 | Hook: a function whose name starts with `use`, called at the top level of a component | Key words | FAIL | The Technical panel says only "Hooks such as `useState` can only be called at the top level of a component". No Technical panel says that a Hook's name starts with `use`. Fix: add that fact, with S7, to a Technical panel, or drop it from the row. |
| K5 | Effect: code that runs after rendering, to sync with something outside React | Key words | PASS | "Effects run code after rendering, to sync the component with a system outside React" |
| K6 | Key: a value that tells React which list item is which | Key words | PASS | "Keys tell React which array item each component belongs to" |
| K7 | Server Component: the default in Next.js; renders on the server and can use secrets safely | Key words | PASS | "By default, layouts and pages are Server Components: they render on the server" and "They can use API keys, tokens, and other secrets without exposing them to the client" |
| K8 | Client Component: a component in a `"use client"` file; it can have state and event handlers | Key words | PASS | "The `"use client"` directive at the top of a file makes a Client Component. You need one for state, event handlers such as `onClick`" |
| K9 | Hydration: attaching event handlers to the server HTML, to make it interactive | Key words | PASS | "hydration attaches the event handlers to the HTML" |
| K10 | Dynamic segment: a route folder in square brackets, such as `[id]` | Key words | PASS | "A folder name in square brackets, such as `[id]`, is a dynamic segment" |
| K11 | Prefetching: loading a linked route in the background before the user clicks | Key words | FAIL | The Technical panel says only "Next.js prefetches a linked route when the link enters the viewport". It does not say "in the background" or "before the user clicks". Fix: "Next.js prefetches a linked route when the link enters the viewport." |

Open FAILs: 8

FAILs in round 1: 8.

## Round 2 (2026-11-16)

### Fact check: sdet / frontend-nextjs (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| L | Lede: components, props, state, effects, routing, Server and Client Components, tested with Playwright | none | N/A | Describes the page. |
| I1 | Intro: if you know how a component gets data, keeps state and becomes clickable, you know where its bugs hide | none | N/A | Advice, not a fact about a tool. |
| I2 | Intro: the page builds a tiny shop in Next.js and tests it with Playwright | none | N/A | Describes the page. |
| 1.1 | React combines markup, CSS and JavaScript into components: reusable UI elements | S5 | PASS | S5: "React lets you combine your markup, CSS, and JavaScript into custom “components”,  reusable UI elements for your app." |
| 1.2 | A component is a JavaScript function; its name must start with a capital letter | S5 | PASS | S5: "React components are regular JavaScript functions, but  their names must start with a capital letter  or they won’t work!" |
| 1.3 | Props are the information that you pass to a JSX tag | S6 | PASS | S6: "Props are the information that you pass to a JSX tag." |
| 1.4 | Next.js uses file-system based routing: folders and files define routes | S2 | PASS | S2: "Next.js uses  file-system based routing , meaning you can use folders and files to define routes." |
| 1.5 | A page is the UI of one route | S2 | PASS | S2: "A  page  is UI that is rendered on a specific route." |
| 1.6 | A layout is UI that several pages share, and it keeps its state on navigation | S2 | PASS | S2: "A layout is UI that is  shared  between multiple pages. On navigation, layouts preserve state, remain interactive, and do not rerender." |
| 1.7 | Start an app with `npx create-next-app@latest [project-name] [options]` | S13 | PASS | S13: "npx create-next-app@latest [project-name] [options]" |
| 1.8 | `--yes` takes the defaults, which include TypeScript and the App Router | S1 | PASS | S1: "--yes  skips prompts using saved preferences or defaults. The default setup enables TypeScript, Tailwind CSS, ESLint, App Router, and Turbopack" |
| 1.9 | Next.js needs Node.js 20.9 or later | S1 | PASS | S1: "Minimum Node.js version:  20.9" |
| 1.10 | Links to the JavaScript, TypeScript and Playwright pages | none | N/A | Internal navigation, not a fact about a tool. |
| 2.1 | By default, layouts and pages are Server Components: they render on the server and the result streams to the client | S3 | PASS | S3: "By default, layouts and pages are  Server Components , which lets you fetch data and render parts of your UI on the server, optionally cache the result, and stream it to the client." |
| 2.2 | Server Components can use API keys, tokens and other secrets without exposing them to the client | S3 | PASS | S3: "Use API keys, tokens, and other secrets without exposing them to the client." |
| 2.3 | The `"use client"` directive at the top of a file makes a Client Component | S3 | PASS | S3: "You can create a Client Component by adding the   "use client"   directive at the top of the file, above your imports." |
| 2.4 | You need a Client Component for state, event handlers such as `onClick`, effects and browser-only APIs | S3 | PASS | S3: "State  and  event handlers . E.g.  onClick ,  onChange . / Lifecycle logic . E.g.  useEffect . / Browser-only APIs." |
| 2.5 | Everything that such a file imports goes into the client bundle too | S3 | PASS | S3: "all of its imports and the components it directly renders are included in the client bundle" |
| 2.6 | The first HTML is static; JavaScript hydrates Client Components to make them interactive | S3 | PASS | S3: "JavaScript  is used to hydrate Client Components and make the application interactive." and "to make the static HTML interactive" |
| 2.7 | Hydration attaches the event handlers to the HTML | S3 | PASS | S3: "Hydration is React's process for attaching  event handlers  to the DOM, to make the static HTML interactive." |
| 2.8 | `useState` gives a state variable that keeps its value between renders, and a setter that updates it and renders again | S7 | PASS | S7: "A  state variable  to retain the data between renders. / A  state setter function  to update the variable and trigger React to render the component again." |
| 2.9 | Hooks (functions whose names start with `use`) can only be called at the top level of a component | S7 | PASS | S7: "Hooks—functions starting with  use —can only be called at the top level of your components or  your own Hooks." |
| 2.10 | Event handlers are functions that run in response to clicks, hovers, focus and other interactions | S11 | PASS | S11: "Event handlers are your own functions that will be triggered in response to interactions like clicking, hovering, focusing form inputs, and so on." |
| 2.11 | Effects run code after rendering, to sync the component with a system outside React | S8 | PASS | S8: "run some code after rendering so that you can synchronize your component with some system outside of React." |
| 2.12 | Keys tell React which array item each component belongs to | S9 | PASS | S9: "Keys tell React which array item each component corresponds to" |
| 2.13 | A folder name in square brackets, such as `[id]`, is a dynamic segment | S2 | PASS | S2: "Wrapping a folder name in square brackets (e.g.  [slug] ) creates a  dynamic route segment" |
| 2.14 | The `<Link>` component links pages, and Next.js prefetches a linked route when the link enters the viewport | S4 | PASS | S4: "Next.js automatically prefetches routes linked with the   <Link>  component  when they enter the user's viewport." |
| 3.1 | Create the app with `npx create-next-app@latest my-app --yes --no-cache-components` | S13 | PASS | S13: "npx create-next-app@latest [project-name] [options]" and "`--no-*` ... Negate default options." |
| 3.2 | `--yes` takes the defaults | S1 | PASS | S1: "--yes  skips prompts using saved preferences or defaults." |
| 3.3 | `--no-*` turns a default off; Cache Components is on by default for the App Router | S13 | PASS | S13: "`--no-*` ... Negate default options" and "`--cache-components` ... Initialize with Cache Components enabled (default for App Router)" |
| 3.4 | With it on, `npm run build` stops at the product page with the quoted error | none | N/A | Reports what the page's own example code prints when it is run. |
| 3.5 | Counter is a Client Component and needs `"use client"` because it has state and a click handler | S3 | PASS | S3: "Use  Client Components  when you need: State  and  event handlers . E.g.  onClick" |
| 3.6 | `app/page.tsx` lists the products, each with a `key` | S9 | PASS | S9: "Keys tell React which array item each component corresponds to". The "Server Component" wording describes the file the reader writes, so it is N/A. |
| 3.7 | Each product has a `<Link>` | S4 | PASS | S4: "Next.js automatically prefetches routes linked with the   <Link>  component" |
| 3.8 | Add the dynamic route `app/products/[id]/page.tsx` | S2 | PASS | S2: "create a new  [slug]  folder inside  blog  and add a  page  file" and "wrap the segment (folder) name in square brackets" |
| 3.9 | An unknown id calls `notFound()` | none | N/A | Describes the page's own example code. |
| 3.10 | Next.js recommends testing against the production build: run `npm run build` and `npm run start`, then `npx playwright test` | S10 | PASS | S10: "We recommend running your tests against your production code" and "Run  npm run build  and  npm run start , then run  npx playwright test  in another terminal window" |
| 3.11 | With `baseURL` set to the `npm run start` address, all three tests pass | none | N/A | Reports what the example code returns when it is run. |
| 4.1 | Next.js recommends running tests against production code because it behaves more like the real app | S10 | PASS | S10: "We recommend running your tests against your production code to more closely resemble how your application will behave." |
| 4.2 | A Server Component has no state and no event handlers; those need a Client Component | S3 | PASS | S3: "Use  Client Components  when you need: State  and  event handlers ." |
| 4.3 | When a button does nothing, look for the component that should own its handler | none | N/A | Advice. |
| 4.4 | The first HTML is static until JavaScript hydrates it | S3 | PASS | S3: "JavaScript  is used to hydrate Client Components and make the application interactive." and "to make the static HTML interactive" |
| 4.5 | Until then, the HTML is a fast, non-interactive preview | S3 | PASS | S3: "HTML  is used to immediately show a fast non-interactive preview of the route to the user." |
| 4.6 | Assert on the result of a click | none | N/A | Advice. |
| 4.7 | A list item without a key makes React log `Each child in a list should have a unique "key" prop.` | S9 | PASS | S9: "Warning: Each child in a list should have a unique “key” prop." |
| 4.8 | Collect browser console errors in the tests of the development build | none | N/A | Advice. S9 does not say the warning is development-only, and the page does not claim it. |
| 4.9 | Server Components can use API keys and tokens without exposing them to the client | S3 | PASS | S3: "Use API keys, tokens, and other secrets without exposing them to the client." |
| 4.10 | Search the page source and the loaded JavaScript for keys and tokens | none | N/A | Advice. |
| 4.11 | A dynamic segment generates many pages from data | S2 | PASS | S2: "creates a  dynamic route segment  which is used to generate multiple pages from data." |
| 4.12 | Also test an id that does not exist; the third test expects `404` | none | N/A | Advice, and a report of the example code. |
| 5.1 | State and event handlers need a Client Component, marked with `"use client"` | S3 | PASS | S3: "Use  Client Components  when you need: State  and  event handlers" and "adding the   "use client"   directive" |
| 5.2 | Everything that the file imports goes into the client bundle, so the browser downloads more JavaScript than it needs | S3 | PASS | S3: "all of its imports ... are included in the client bundle" and "To reduce the size of your client JavaScript bundles, add  'use client'  ... instead of marking large parts of your UI as Client Components." |
| 5.3 | Hooks can only be called at the top level of a component or of another Hook | S7 | PASS | S7: "can only be called at the top level of your components or  your own Hooks.   You can’t call Hooks inside conditions, loops" |
| 5.4 | Using the index as a key often leads to subtle and confusing bugs when items move, are inserted or are deleted | S9 | PASS | S9: "if an item is inserted, deleted, or if the array gets reordered. Index as a key often leads to subtle and confusing bugs." |
| 5.5 | If you can calculate something during render, you do not need an Effect | S12 | PASS | S12: "If you can calculate something during render, you don’t need an Effect." |
| 5.6 | Tests should run against the production build | S10 | PASS | S10: "We recommend running your tests against your production code" |
| 6 | "What a tester can check" callout | none | N/A | The callout says it is the tutorial's own advice, with no cites. |
| K1 | Component: a JavaScript function whose name must start with a capital letter | none | PASS | What it is: "A component is a JavaScript function, and its name must start with a capital letter" |
| K2 | Props: the information that you pass to a component | none | PASS | What it is: "Props are the information that you pass to a JSX tag" |
| K3 | State: a component's memory; `useState` keeps it and re-renders on change | none | PASS | How it works: "`useState` gives a state variable that keeps its value between renders, and a setter that updates it and renders the component again" |
| K4 | Hook: a function whose name starts with `use`, called at the top level of a component | none | PASS | How it works: "Hooks, the functions whose names start with `use`, such as `useState`, can only be called at the top level of a component" |
| K5 | Effect: code that runs after rendering, to sync with something outside React | none | PASS | How it works: "Effects run code after rendering, to sync the component with a system outside React" |
| K6 | Key: a value that tells React which list item is which | none | PASS | How it works: "Keys tell React which array item each component belongs to" |
| K7 | Server Component: the default in Next.js; renders on the server and can use secrets safely | none | PASS | How it works: "By default, layouts and pages are Server Components: they render on the server ... They can use API keys, tokens, and other secrets without exposing them to the client" |
| K8 | Client Component: a component in a `"use client"` file; it can have state and event handlers | none | PASS | How it works: "The `"use client"` directive at the top of a file makes a Client Component. You need one for state, event handlers such as `onClick`" |
| K9 | Hydration: attaching event handlers to the server HTML, to make it interactive | none | PASS | How it works: "hydration attaches the event handlers to the HTML" |
| K10 | Dynamic segment: a route folder in square brackets, such as `[id]` | none | PASS | How it works: "A folder name in square brackets, such as `[id]`, is a dynamic segment" |
| K11 | Prefetching: Next.js loads a linked route early, when the link enters the viewport | none | PASS | How it works: "Next.js prefetches a linked route when the link enters the viewport" |

Open FAILs: 0

FAILs in round 2: 0.

## Round 3 (2026-11-16)

### Fact check: sdet / frontend-nextjs (round 3)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: components, props, state, effects, routing, Server and Client Components, tested with Playwright | none | N/A | Describes the page itself. |
| 2 | Intro: knowing how a component gets data, keeps state and becomes clickable shows where bugs hide; the page builds a tiny shop and tests it | none | N/A | Describes the page and gives advice. |
| 3 | React lets you combine markup, CSS, and JavaScript into components: reusable UI elements | S5 | PASS | "React lets you combine your markup, CSS, and JavaScript into custom “components”, reusable UI elements for your app." |
| 4 | A component is a JavaScript function, and its name must start with a capital letter | S5 | PASS | "React components are regular JavaScript functions, but their names must start with a capital letter" |
| 5 | Props are the information that you pass to a JSX tag | S6 | PASS | "Props are the information that you pass to a JSX tag." |
| 6 | Next.js uses file-system based routing: folders and files define the routes | S2 | PASS | "Next.js uses file-system based routing, meaning you can use folders and files to define routes." |
| 7 | A page is the UI of one route | S2 | PASS | "A page is UI that is rendered on a specific route." |
| 8 | A layout is UI that several pages share, and it keeps its state on navigation | S2 | PASS | "A layout is UI that is shared between multiple pages. On navigation, layouts preserve state" |
| 9 | You start a new app with `npx create-next-app@latest [project-name] [options]` | S13 | PASS | "npx create-next-app@latest [project-name] [options]" |
| 10 | `--yes` takes the defaults, which include TypeScript and the App Router | S1 | PASS | "--yes skips prompts using saved preferences or defaults. The default setup enables TypeScript, Tailwind CSS, ESLint, App Router, and Turbopack" |
| 11 | Next.js needs Node.js 20.9 or later | S1 | PASS | "Minimum Node.js version: 20.9" |
| 12 | By default, layouts and pages are Server Components: they render on the server, and the result streams to the client | S3 | PASS | "By default, layouts and pages are Server Components, which lets you fetch data and render parts of your UI on the server, optionally cache the result, and stream it to the client." |
| 13 | Server Components can use API keys, tokens, and other secrets without exposing them to the client | S3 | PASS | "Use API keys, tokens, and other secrets without exposing them to the client." |
| 14 | The `"use client"` directive at the top of a file makes a Client Component | S3 | PASS | "You can create a Client Component by adding the "use client" directive at the top of the file, above your imports." |
| 15 | You need a Client Component for state, event handlers such as `onClick`, effects, and browser-only APIs | S3 | PASS | "State and event handlers. E.g. onClick, onChange. Lifecycle logic. E.g. useEffect. Browser-only APIs." |
| 16 | Everything that such a file imports goes into the client bundle too | S3 | PASS | "all of its imports and the components it directly renders are included in the client bundle" |
| 17 | The first HTML is static; JavaScript then hydrates the Client Components to make them interactive | S3 | PASS | "JavaScript is used to hydrate Client Components and make the application interactive." and "make the static HTML interactive" |
| 18 | Hydration attaches the event handlers to the HTML | S3 | PASS | "Hydration is React's process for attaching event handlers to the DOM, to make the static HTML interactive." |
| 19 | `useState` gives a state variable that keeps its value between renders, and a setter that updates it and renders the component again | S7 | PASS | "A state variable to retain the data between renders. A state setter function to update the variable and trigger React to render the component again." |
| 20 | Hooks, the functions whose names start with `use`, can only be called at the top level of a component | S7 | PASS | "Hooks—functions starting with use—can only be called at the top level of your components or your own Hooks." |
| 21 | Event handlers are functions that run in response to clicks, hovers, focus, and other interactions | S11 | PASS | "Event handlers are your own functions that will be triggered in response to interactions like clicking, hovering, focusing form inputs, and so on." |
| 22 | Effects run code after rendering, to sync the component with a system outside React | S8 | PASS | "Effects let you run some code after rendering so that you can synchronize your component with some system outside of React" |
| 23 | Keys tell React which array item each component belongs to | S9 | PASS | "Keys tell React which array item each component corresponds to" |
| 24 | A folder name in square brackets, such as `[id]`, is a dynamic segment | S2 | PASS | "Wrapping a folder name in square brackets (e.g. [slug]) creates a dynamic route segment" |
| 25 | The `<Link>` component links pages, and Next.js prefetches a linked route when the link enters the viewport | S4 | PASS | "Next.js automatically prefetches routes linked with the <Link> component when they enter the user's viewport." |
| 26 | Create the app with `npx create-next-app@latest my-app --yes --no-cache-components` | S13 | PASS | "npx create-next-app@latest [project-name] [options]" and "`--no-*` \| Negate default options." |
| 27 | `--yes` takes the defaults | S1 | PASS | "--yes skips prompts using saved preferences or defaults." |
| 28 | `--no-*` turns a default off, here Cache Components, which is on by default for the App Router | S13 | PASS | "`--no-*` \| Negate default options" and "`--cache-components` \| Initialize with Cache Components enabled (default for App Router)" |
| 29 | With it on, `npm run build` stops at the product page with the quoted error message | none | N/A | Reports what the page's own example prints when run. |
| 30 | `app/counter.tsx` needs `"use client"` because it has state and a click handler | S3 | PASS | "Use Client Components when you need: State and event handlers. E.g. onClick" |
| 31 | `app/page.tsx` lists the products, each with a `key` | S9 | PASS | "Keys tell React which array item each component corresponds to" |
| 32 | `app/page.tsx` uses a `<Link>` | S4 | PASS | "Next.js automatically prefetches routes linked with the <Link> component" |
| 33 | Add the dynamic route `app/products/[id]/page.tsx` | S2 | PASS | "in the app/blog/[slug]/page.tsx route, the [slug] is the dynamic segment." |
| 34 | An unknown id calls `notFound()` | none | N/A | Describes the page's own example code. |
| 35 | Next.js recommends testing against the production build: run `npm run build` and `npm run start`, then `npx playwright test` | S10 | PASS | "We recommend running your tests against your production code" and "Run npm run build and npm run start, then run npx playwright test in another terminal window" |
| 36 | With `baseURL` set to the address of `npm run start`, all three tests pass | none | N/A | Reports what the page's own example code returns when run. |
| 37 | Test the production build: Next.js recommends it, because it behaves more like the real app | S10 | PASS | "We recommend running your tests against your production code to more closely resemble how your application will behave." |
| 38 | A Server Component has no state and no event handlers; those need a Client Component | S3 | FAIL | S3 only says to "Use Client Components when you need: State and event handlers." It never says a Server Component has no state or handlers. Fix: "State and event handlers need a Client Component." |
| 39 | When a button does nothing, look for the component that should own its handler | none | N/A | Advice. |
| 40 | The first HTML is static until JavaScript hydrates it | S3 | PASS | "JavaScript is used to hydrate Client Components and make the application interactive." and "make the static HTML interactive" |
| 41 | Until then, the HTML is a fast, non-interactive preview | S3 | PASS | "HTML is used to immediately show a fast non-interactive preview of the route to the user." |
| 42 | Assert on the result of a click, as the cart test does, not only on the click | none | N/A | Advice about the page's own test. |
| 43 | A list item without a key makes React log `Each child in a list should have a unique "key" prop.` | S9 | PASS | "Warning: Each child in a list should have a unique “key” prop." |
| 44 | Collect browser console errors in the tests of the development build | none | N/A | Advice. |
| 45 | Server Components can use API keys and tokens without exposing them to the client | S3 | PASS | "Use API keys, tokens, and other secrets without exposing them to the client." |
| 46 | Search the page source and the JavaScript that the browser loads for keys and tokens | none | N/A | Advice. |
| 47 | A dynamic segment generates many pages from data | S2 | PASS | "creates a dynamic route segment which is used to generate multiple pages from data." |
| 48 | The third test expects `404`; so also test an id that does not exist | none | N/A | Describes the page's own test and gives advice. |
| 49 | State and event handlers need a Client Component, marked with `"use client"` | S3 | PASS | "Use Client Components when you need: State and event handlers." and "You can create a Client Component by adding the "use client" directive" |
| 50 | `"use client"` on a large file: everything the file imports goes into the client bundle, so the browser downloads more JavaScript than it needs | S3 | PASS | "all of its imports ... are included in the client bundle" and "To reduce the size of your client JavaScript bundles, add 'use client' at the top of the files that define your interactive components instead of marking large parts of your UI as Client Components." |
| 51 | Hooks can only be called at the top level of a component or of another Hook | S7 | PASS | "can only be called at the top level of your components or your own Hooks. You can’t call Hooks inside conditions, loops, or other nested functions." |
| 52 | Using the index as a key often leads to subtle and confusing bugs, when items move, are inserted, or are deleted | S9 | PASS | "the order in which you render items will change over time if an item is inserted, deleted, or if the array gets reordered. Index as a key often leads to subtle and confusing bugs." |
| 53 | If you can calculate something during render, you do not need an Effect | S12 | PASS | "If you can calculate something during render, you don’t need an Effect." |
| 54 | The tests should run against the production build | S10 | PASS | "We recommend running your tests against your production code" |
| K1 | Component: a JavaScript function whose name must start with a capital letter | Key words | PASS | Technical, What it is: "A component is a JavaScript function, and its name must start with a capital letter" |
| K2 | Props: the information that you pass to a component | Key words | PASS | Technical, What it is: "Props are the information that you pass to a JSX tag" |
| K3 | State: a component's memory; `useState` keeps it and re-renders on change | Key words | PASS | Technical, How it works: "`useState` gives a state variable that keeps its value between renders, and a setter that updates it and renders the component again" |
| K4 | Hook: a function whose name starts with `use`, called at the top level of a component | Key words | PASS | Technical, How it works: "Hooks, the functions whose names start with `use`, such as `useState`, can only be called at the top level of a component" |
| K5 | Effect: code that runs after rendering, to sync with something outside React | Key words | PASS | Technical, How it works: "Effects run code after rendering, to sync the component with a system outside React" |
| K6 | Key: a value that tells React which list item is which | Key words | PASS | Technical, How it works: "Keys tell React which array item each component belongs to" |
| K7 | Server Component: the default in Next.js; renders on the server and can use secrets safely | Key words | PASS | Technical, How it works: "By default, layouts and pages are Server Components: they render on the server" and "They can use API keys, tokens, and other secrets without exposing them to the client" |
| K8 | Client Component: a component in a `"use client"` file; it can have state and event handlers | Key words | PASS | Technical, How it works: "The `"use client"` directive at the top of a file makes a Client Component. You need one for state, event handlers such as `onClick`" |
| K9 | Hydration: attaching event handlers to the server HTML, to make it interactive | Key words | PASS | Technical, How it works: "hydration attaches the event handlers to the HTML" |
| K10 | Dynamic segment: a route folder in square brackets, such as `[id]` | Key words | PASS | Technical, How it works: "A folder name in square brackets, such as `[id]`, is a dynamic segment" |
| K11 | Prefetching: Next.js loads a linked route early, when the link enters the viewport | Key words | PASS | Technical, How it works: "Next.js prefetches a linked route when the link enters the viewport" |

Open FAILs: 1

FAILs in round 3: 1.

## Round 4 (2026-11-16)

### Fact check: sdet / frontend-nextjs (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0a | Lede: components, props, state, effects, routing, Server and Client Components in Next.js, tested with Playwright | none | N/A | Describes the page itself. |
| 0b | Intro: knowing how a component gets data, keeps state and becomes clickable shows where its bugs hide; the page builds a tiny shop and tests it with Playwright | none | N/A | Describes the page and gives advice. |
| 1.1 | React lets you combine markup, CSS, and JavaScript into components: reusable UI elements | S5 | PASS | "React lets you combine your markup, CSS, and JavaScript into custom “components”,  reusable UI elements for your app." |
| 1.2 | A component is a JavaScript function, and its name must start with a capital letter | S5 | PASS | "React components are regular JavaScript functions, but  their names must start with a capital letter" |
| 1.3 | Props are the information that you pass to a JSX tag | S6 | PASS | "Props are the information that you pass to a JSX tag." |
| 1.4 | Next.js uses file-system based routing: folders and files define the routes | S2 | PASS | "Next.js uses  file-system based routing , meaning you can use folders and files to define routes." |
| 1.5 | A page is the UI of one route | S2 | PASS | "A  page  is UI that is rendered on a specific route." |
| 1.6 | A layout is UI that several pages share, and it keeps its state on navigation | S2 | PASS | "A layout is UI that is  shared  between multiple pages. On navigation, layouts preserve state" |
| 1.7 | You start a new app with `npx create-next-app@latest [project-name] [options]` | S13 | PASS | "npx create-next-app@latest [project-name] [options]" |
| 1.8 | The `--yes` flag takes the defaults, which include TypeScript and the App Router | S1 | PASS | "--yes  skips prompts using saved preferences or defaults. The default setup enables TypeScript, Tailwind CSS, ESLint, App Router, and Turbopack" |
| 1.9 | Next.js needs Node.js 20.9 or later | S1 | PASS | "Minimum Node.js version:  20.9" |
| 2.1 | By default, layouts and pages are Server Components: they render on the server, and the result streams to the client | S3 | PASS | "By default, layouts and pages are  Server Components , which lets you fetch data and render parts of your UI on the server, optionally cache the result, and stream it to the client." |
| 2.2 | Server Components can use API keys, tokens, and other secrets without exposing them to the client | S3 | PASS | "Use API keys, tokens, and other secrets without exposing them to the client." |
| 2.3 | The `"use client"` directive at the top of a file makes a Client Component | S3 | PASS | "You can create a Client Component by adding the   "use client"   directive at the top of the file" |
| 2.4 | You need a Client Component for state, event handlers such as `onClick`, effects, and browser-only APIs | S3 | PASS | "State  and  event handlers . E.g.  onClick ,  onChange . / Lifecycle logic . E.g.  useEffect . / Browser-only APIs." |
| 2.5 | Everything that such a file imports goes into the client bundle too | S3 | PASS | "all of its imports and the components it directly renders are included in the client bundle" |
| 2.6 | The first HTML is static. JavaScript then hydrates the Client Components to make them interactive | S3 | PASS | "JavaScript  is used to hydrate Client Components and make the application interactive." and "to make the static HTML interactive" |
| 2.7 | Hydration attaches the event handlers to the HTML | S3 | PASS | "Hydration is React's process for attaching  event handlers  to the DOM, to make the static HTML interactive." |
| 2.8 | `useState` gives a state variable that keeps its value between renders, and a setter that updates it and renders the component again | S7 | PASS | "A  state variable  to retain the data between renders." and "A  state setter function  to update the variable and trigger React to render the component again." |
| 2.9 | Hooks, the functions whose names start with `use`, such as `useState`, can only be called at the top level of a component | S7 | PASS | "Hooks—functions starting with  use —can only be called at the top level of your components or  your own Hooks." |
| 2.10 | Event handlers are functions that run in response to clicks, hovers, focus, and other interactions | S11 | PASS | "Event handlers are your own functions that will be triggered in response to interactions like clicking, hovering, focusing form inputs, and so on." |
| 2.11 | Effects run code after rendering, to sync the component with a system outside React | S8 | PASS | "Effects  let you run some code after rendering so that you can synchronize your component with some system outside of React." |
| 2.12 | Keys tell React which array item each component belongs to | S9 | PASS | "Keys tell React which array item each component corresponds to" |
| 2.13 | A folder name in square brackets, such as `[id]`, is a dynamic segment | S2 | PASS | "Wrapping a folder name in square brackets (e.g.  [slug] ) creates a  dynamic route segment" |
| 2.14 | The `<Link>` component links pages, and Next.js prefetches a linked route when the link enters the viewport | S4 | PASS | "Next.js automatically prefetches routes linked with the   <Link>  component  when they enter the user's viewport." |
| 3.1 | Create the app with `npx create-next-app@latest my-app --yes --no-cache-components` | S13 | PASS | "npx create-next-app@latest [project-name] [options]"; "`--no-*` … Negate default options"; "`--cache-components` … (default for App Router)" |
| 3.2 | `--yes` takes the defaults | S1 | PASS | "--yes  skips prompts using saved preferences or defaults." |
| 3.3 | `--no-*` turns a default off, here Cache Components, which is on by default for the App Router | S13 | PASS | "`--no-*` … Negate default options. E.g. `--no-ts`"; "Initialize with Cache Components enabled (default for App Router)" |
| 3.4 | With it on, `npm run build` stops at the product page with the `Route "/products/[id]": …` error | none | N/A | Only reports what the page's own example prints. |
| 3.5 | Add a Client Component `app/counter.tsx`; it needs `"use client"` because it has state and a click handler | S3 | PASS | "State  and  event handlers . E.g.  onClick" and "adding the   "use client"   directive" |
| 3.6 | `app/page.tsx` is a Server Component that lists the products, each with a `key` | S9 | PASS | "Keys tell React which array item each component corresponds to" |
| 3.7 | Each product has a `<Link>` | S4 | PASS | "Next.js automatically prefetches routes linked with the   <Link>  component" |
| 3.8 | Add the dynamic route `app/products/[id]/page.tsx` | S2 | PASS | "Wrapping a folder name in square brackets (e.g.  [slug] ) creates a  dynamic route segment"; "app/blog/[slug]/page.tsx" |
| 3.9 | An unknown id calls `notFound()` | none | N/A | Describes the page's own example code. |
| 3.10 | Next.js recommends testing against the production build: run `npm run build` and `npm run start`, then `npx playwright test` | S10 | PASS | "We recommend running your tests against your production code" / "Run  npm run build  and  npm run start , then run  npx playwright test" |
| 3.11 | With `baseURL` set to the address of `npm run start`, all three tests pass | none | N/A | Only reports what the page's own example does when run. |
| 4.1 | Next.js recommends running tests against production code, because it behaves more like the real app | S10 | PASS | "We recommend running your tests against your production code to more closely resemble how your application will behave." |
| 4.2 | State and event handlers need a Client Component | S3 | PASS | "Use  Client Components  when you need: State  and  event handlers ." |
| 4.3 | When a button does nothing, look for the component that should own its handler | none | N/A | Advice. |
| 4.4 | The first HTML is static until JavaScript hydrates it | S3 | PASS | "JavaScript  is used to hydrate Client Components and make the application interactive." / "the static HTML interactive" |
| 4.5 | Until then, the HTML is a fast, non-interactive preview | S3 | PASS | "HTML  is used to immediately show a fast non-interactive preview of the route to the user." |
| 4.6 | Assert on the result of a click, not only on the click | none | N/A | Advice. |
| 4.7 | A list item without a key makes React log `Each child in a list should have a unique "key" prop.` | S9 | PASS | "Warning: Each child in a list should have a unique “key” prop." |
| 4.8 | Collect browser console errors in the tests of the development build | none | N/A | Advice. |
| 4.9 | Server Components can use API keys and tokens without exposing them to the client | S3 | PASS | "Use API keys, tokens, and other secrets without exposing them to the client." |
| 4.10 | Search the page source and the loaded JavaScript for keys and tokens | none | N/A | Advice. |
| 4.11 | A dynamic segment generates many pages from data | S2 | PASS | "creates a  dynamic route segment  which is used to generate multiple pages from data." |
| 4.12 | The third test expects `404` | none | N/A | Reports the page's own example code. |
| 5.1 | State and event handlers need a Client Component, marked with `"use client"` | S3 | PASS | "State  and  event handlers" and "creat[e] a Client Component by adding the   "use client"   directive" |
| 5.2 | Everything the file imports goes into the client bundle, so the browser downloads more JavaScript than it needs | S3 | PASS | "all of its imports and the components it directly renders are included in the client bundle"; "To reduce the size of your client JavaScript bundles, add  'use client'  at the top of the files that define your interactive components instead of marking large parts of your UI as Client Components." |
| 5.3 | Hooks can only be called at the top level of a component or of another Hook | S7 | PASS | "Calling Hooks, including  useState , is only valid at the top level of a component or another Hook." |
| 5.4 | Using the index as a key often leads to subtle and confusing bugs, when items move, are inserted, or are deleted | S9 | PASS | "if an item is inserted, deleted, or if the array gets reordered. Index as a key often leads to subtle and confusing bugs." |
| 5.5 | If you can calculate something during render, you do not need an Effect | S12 | PASS | "If you can calculate something during render, you don’t need an Effect." |
| 5.6 | The tests should run against the production build | S10 | PASS | "We recommend running your tests against your production code" |
| 6.1 | Callout "What a tester can check" (tutorial's own advice, no cites) | none | N/A | Advice, and it says it is advice. |
| K1 | Component: a JavaScript function whose name must start with a capital letter | none | PASS | What it is: "A component is a JavaScript function, and its name must start with a capital letter" |
| K2 | Props: the information that you pass to a component | none | FAIL | Technical panels say "Props are the information that you pass to a JSX tag", not "to a component". Fix: write "to a JSX tag". |
| K3 | State: a component's memory; `useState` keeps it and re-renders on change | none | PASS | How it works: "`useState` gives a state variable that keeps its value between renders, and a setter that updates it and renders the component again" |
| K4 | Hook: a function whose name starts with `use`, called at the top level of a component | none | PASS | How it works: "Hooks, the functions whose names start with `use`, such as `useState`, can only be called at the top level of a component" |
| K5 | Effect: code that runs after rendering, to sync with something outside React | none | PASS | How it works: "Effects run code after rendering, to sync the component with a system outside React" |
| K6 | Key: a value that tells React which list item is which | none | PASS | How it works: "Keys tell React which array item each component belongs to" |
| K7 | Server Component: the default in Next.js; renders on the server and can use secrets safely | none | PASS | How it works: "By default, layouts and pages are Server Components: they render on the server" and "They can use API keys, tokens, and other secrets without exposing them to the client" |
| K8 | Client Component: a component in a `"use client"` file; it can have state and event handlers | none | PASS | How it works: "The `"use client"` directive at the top of a file makes a Client Component. You need one for state, event handlers" |
| K9 | Hydration: attaching event handlers to the server HTML, to make it interactive | none | PASS | How it works: "hydration attaches the event handlers to the HTML" and "JavaScript then hydrates the Client Components to make them interactive" |
| K10 | Dynamic segment: a route folder in square brackets, such as `[id]` | none | PASS | How it works: "A folder name in square brackets, such as `[id]`, is a dynamic segment" |
| K11 | Prefetching: Next.js loads a linked route early, when the link enters the viewport | none | PASS | How it works: "Next.js prefetches a linked route when the link enters the viewport" |

Open FAILs: 1

FAILs in round 4: 1.

## Round 5 (2026-11-16)

### Fact check: sdet / frontend-nextjs (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: components, props, state, effects, routing, Server and Client Components in Next.js, tested with Playwright | none | N/A | Describes the page itself. |
| 2 | Intro: if you know how a component gets data, keeps state and becomes clickable, you know where bugs hide. The page builds a tiny shop and tests it with Playwright. | none | N/A | Advice and a description of the page. |
| 3 | What it is: React lets you combine markup, CSS and JavaScript into components, which are reusable UI elements | S5 | PASS | "React lets you combine your markup, CSS, and JavaScript into custom “components”, reusable UI elements for your app." |
| 4 | A component is a JavaScript function and its name must start with a capital letter | S5 | PASS | "React components are regular JavaScript functions, but their names must start with a capital letter" |
| 5 | Props are the information that you pass to a JSX tag | S6 | PASS | "Props are the information that you pass to a JSX tag." |
| 6 | Next.js uses file-system based routing: folders and files define the routes | S2 | PASS | "Next.js uses file-system based routing, meaning you can use folders and files to define routes." |
| 7 | A page is the UI of one route | S2 | PASS | "A page is UI that is rendered on a specific route." |
| 8 | A layout is UI that several pages share and it keeps its state on navigation | S2 | PASS | "A layout is UI that is shared between multiple pages. On navigation, layouts preserve state" |
| 9 | You start a new app with `npx create-next-app@latest [project-name] [options]` | S13 | PASS | "npx create-next-app@latest [project-name] [options]" |
| 10 | `--yes` takes the defaults, which include TypeScript and the App Router | S1 | PASS | "--yes skips prompts using saved preferences or defaults. The default setup enables TypeScript, Tailwind CSS, ESLint, App Router, and Turbopack" |
| 11 | Next.js needs Node.js 20.9 or later | S1 | PASS | "Minimum Node.js version: 20.9" |
| 12 | How it works: by default layouts and pages are Server Components. They render on the server and the result streams to the client. | S3 | PASS | "By default, layouts and pages are Server Components, which lets you fetch data and render parts of your UI on the server, optionally cache the result, and stream it to the client." |
| 13 | Server Components can use API keys, tokens and other secrets without exposing them to the client | S3 | PASS | "Use API keys, tokens, and other secrets without exposing them to the client." |
| 14 | The `"use client"` directive at the top of a file makes a Client Component | S3 | PASS | "You can create a Client Component by adding the "use client" directive at the top of the file, above your imports." |
| 15 | You need a Client Component for state, event handlers such as `onClick`, effects and browser-only APIs | S3 | PASS | "State and event handlers. E.g. onClick, onChange." / "Lifecycle logic. E.g. useEffect." / "Browser-only APIs." |
| 16 | Everything that such a file imports goes into the client bundle too | S3 | PASS | "all of its imports and the components it directly renders are included in the client bundle" |
| 17 | The first HTML is static. JavaScript hydrates the Client Components to make them interactive. | S3 | PASS | "HTML is used to immediately show a fast non-interactive preview" / "JavaScript is used to hydrate Client Components and make the application interactive." / "to make the static HTML interactive" |
| 18 | Hydration attaches the event handlers to the HTML | S3 | PASS | "Hydration is React's process for attaching event handlers to the DOM, to make the static HTML interactive." |
| 19 | `useState` gives a state variable that keeps its value between renders, and a setter that updates it and renders the component again | S7 | PASS | "A state variable to retain the data between renders. A state setter function to update the variable and trigger React to render the component again." |
| 20 | Hooks, functions whose names start with `use`, can only be called at the top level of a component | S7 | PASS | "Hooks—functions starting with use—can only be called at the top level of your components or your own Hooks." |
| 21 | Event handlers are functions that run in response to clicks, hovers, focus and other interactions | S11 | PASS | "Event handlers are your own functions that will be triggered in response to interactions like clicking, hovering, focusing form inputs, and so on." |
| 22 | Effects run code after rendering, to sync the component with a system outside React | S8 | PASS | "Effects let you run some code after rendering" / "Effects let you synchronize a component with some external system" |
| 23 | Keys tell React which array item each component belongs to | S9 | PASS | "Keys tell React which array item each component corresponds to" |
| 24 | A folder name in square brackets, such as `[id]`, is a dynamic segment | S2 | PASS | "Wrapping a folder name in square brackets (e.g. [slug]) creates a dynamic route segment" |
| 25 | The `<Link>` component links pages, and Next.js prefetches a linked route when the link enters the viewport | S4 | PASS | "Next.js automatically prefetches routes linked with the <Link> component when they enter the user's viewport." Note: "links pages" is not worded this way in S4. S4 covers Link-based navigation. |
| 26 | Try it: create the app with `npx create-next-app@latest my-app --yes --no-cache-components` | S13 | PASS | "npx create-next-app@latest [project-name] [options]"; "--no-* Negate default options."; "--cache-components ... (default for App Router)" |
| 27 | `--yes` takes the defaults | S1 | PASS | "--yes skips prompts using saved preferences or defaults." |
| 28 | `--no-*` turns a default off, here Cache Components, which is on by default for the App Router | S13 | PASS | "--no-* Negate default options." / "--cache-components Initialize with Cache Components enabled (default for App Router)" |
| 29 | With Cache Components on, `npm run build` stops at the product page with the quoted error | none | N/A | Reports what the page's own example code prints when run. |
| 30 | `app/counter.tsx` needs `"use client"` because it has state and a click handler | S3 | PASS | "Use Client Components when you need: State and event handlers. E.g. onClick, onChange." |
| 31 | `app/page.tsx` is a Server Component that lists the products, each with a `key` | S9 | PASS | "Keys tell React which array item each component corresponds to" |
| 32 | Each product has a `<Link>` | S4 | PASS | "Next.js automatically prefetches routes linked with the <Link> component" |
| 33 | Add the dynamic route `app/products/[id]/page.tsx` | S2 | PASS | "To create a dynamic segment, wrap the segment (folder) name in square brackets: [segmentName]." |
| 34 | An unknown id calls `notFound()` | none | N/A | Describes the page's own example code. |
| 35 | Next.js recommends testing against the production build: run `npm run build` and `npm run start`, then `npx playwright test` | S10 | PASS | "We recommend running your tests against your production code..." / "Run npm run build and npm run start, then run npx playwright test in another terminal window" |
| 36 | With `baseURL` set to the address of `npm run start`, all three tests pass | none | N/A | Reports what the page's own example code returns. |
| 37 | How a tester uses it: Next.js recommends running tests against production code because it behaves more like the real app | S10 | PASS | "We recommend running your tests against your production code to more closely resemble how your application will behave." |
| 38 | State and event handlers need a Client Component | S3 | PASS | "Use Client Components when you need: State and event handlers." |
| 39 | When a button does nothing, look for the component that should own its handler | none | N/A | Advice. |
| 40 | The first HTML is static until JavaScript hydrates it | S3 | PASS | "to make the static HTML interactive"; "JavaScript is used to hydrate Client Components" |
| 41 | Until then the HTML is a fast, non-interactive preview | S3 | PASS | "HTML is used to immediately show a fast non-interactive preview of the route to the user." |
| 42 | Assert on the result of a click, as the cart test does | none | N/A | Advice. |
| 43 | A list item without a key makes React log `Each child in a list should have a unique "key" prop.` | S9 | PASS | "Warning: Each child in a list should have a unique “key” prop." |
| 44 | Collect browser console errors in the tests of the development build | none | N/A | Advice. |
| 45 | Server Components can use API keys and tokens without exposing them to the client | S3 | PASS | "Use API keys, tokens, and other secrets without exposing them to the client." |
| 46 | Search the page source and the JavaScript the browser loads for keys and tokens | none | N/A | Advice. |
| 47 | A dynamic segment generates many pages from data | S2 | PASS | "creates a dynamic route segment which is used to generate multiple pages from data." |
| 48 | Also test an id that does not exist. The third test expects `404`. | none | N/A | Advice, and a description of the page's own test. |
| 49 | Common mistakes: state and event handlers need a Client Component, marked with `"use client"` | S3 | PASS | "State and event handlers. E.g. onClick, onChange." / "adding the "use client" directive at the top of the file" |
| 50 | Everything the file imports goes into the client bundle, so the browser downloads more JavaScript than it needs | S3 | PASS | "all of its imports and the components it directly renders are included in the client bundle"; "To reduce the size of your client JavaScript bundles, add 'use client' ... instead of marking large parts of your UI as Client Components." |
| 51 | Hooks can only be called at the top level of a component or of another Hook | S7 | PASS | "Calling Hooks, including useState, is only valid at the top level of a component or another Hook." |
| 52 | Using the index as a key often leads to subtle and confusing bugs when items move, are inserted or are deleted | S9 | PASS | "Index as a key often leads to subtle and confusing bugs." / "if your array items can move (e.g. due to sorting), get inserted, or get deleted" |
| 53 | If you can calculate something during render, you do not need an Effect | S12 | PASS | "If you can calculate something during render, you don’t need an Effect." |
| 54 | The tests should run against the production build | S10 | PASS | "We recommend running your tests against your production code". Note: "should" is a little stronger than "recommend". |
| 55 | What a tester can check: the callout is the tutorial's own advice | none | N/A | Advice that says it is advice. |
| K1 | Component: a JavaScript function whose name must start with a capital letter | Key words | PASS | What it is: "A component is a JavaScript function, and its name must start with a capital letter" |
| K2 | Props: the information that you pass to a JSX tag | Key words | PASS | What it is: "Props are the information that you pass to a JSX tag" |
| K3 | State: a component's memory; `useState` keeps it and re-renders on change | Key words | PASS | How it works: "`useState` gives a state variable that keeps its value between renders, and a setter that updates it and renders the component again" |
| K4 | Hook: a function whose name starts with `use`, called at the top level of a component | Key words | PASS | How it works: "Hooks, the functions whose names start with `use`, such as `useState`, can only be called at the top level of a component" |
| K5 | Effect: code that runs after rendering, to sync with something outside React | Key words | PASS | How it works: "Effects run code after rendering, to sync the component with a system outside React" |
| K6 | Key: a value that tells React which list item is which | Key words | PASS | How it works: "Keys tell React which array item each component belongs to" |
| K7 | Server Component: the default in Next.js; renders on the server and can use secrets safely | Key words | PASS | How it works: "By default, layouts and pages are Server Components: they render on the server" / "They can use API keys, tokens, and other secrets without exposing them to the client" |
| K8 | Client Component: a component in a `"use client"` file; it can have state and event handlers | Key words | PASS | How it works: "The `"use client"` directive at the top of a file makes a Client Component. You need one for state, event handlers" |
| K9 | Hydration: attaching event handlers to the server HTML, to make it interactive | Key words | PASS | How it works: "hydration attaches the event handlers to the HTML" |
| K10 | Dynamic segment: a route folder in square brackets, such as `[id]` | Key words | PASS | How it works: "A folder name in square brackets, such as `[id]`, is a dynamic segment" |
| K11 | Prefetching: Next.js loads a linked route early, when the link enters the viewport | Key words | PASS | How it works: "Next.js prefetches a linked route when the link enters the viewport" |

Open FAILs: 0

FAILs in round 5: 0.

Open FAILs: 0
