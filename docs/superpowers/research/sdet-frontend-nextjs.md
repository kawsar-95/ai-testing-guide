# Research notes: SDET Roadmap, Frontend with React and Next.js

Page: `content/sdet/frontend-nextjs.mdx`. Accessed 2026-11-15.

## Sources

| ID | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | Installation | Next.js (Vercel) | https://nextjs.org/docs/app/getting-started/installation | 2026-11-15 |
| S2 | Layouts and Pages | Next.js (Vercel) | https://nextjs.org/docs/app/getting-started/layouts-and-pages | 2026-11-15 |
| S3 | Server and Client Components | Next.js (Vercel) | https://nextjs.org/docs/app/getting-started/server-and-client-components | 2026-11-15 |
| S4 | Linking and Navigating | Next.js (Vercel) | https://nextjs.org/docs/app/getting-started/linking-and-navigating | 2026-11-15 |
| S5 | Your First Component | React | https://react.dev/learn/your-first-component | 2026-11-15 |
| S6 | Passing Props to a Component | React | https://react.dev/learn/passing-props-to-a-component | 2026-11-15 |
| S7 | State: A Component's Memory | React | https://react.dev/learn/state-a-components-memory | 2026-11-15 |
| S8 | Synchronizing with Effects | React | https://react.dev/learn/synchronizing-with-effects | 2026-11-15 |
| S9 | Rendering Lists | React | https://react.dev/learn/rendering-lists | 2026-11-15 |
| S10 | How to set up Playwright with Next.js | Next.js (Vercel) | https://nextjs.org/docs/app/guides/testing/playwright | 2026-11-15 |
| S11 | Responding to Events | React | https://react.dev/learn/responding-to-events | 2026-11-15 |
| S12 | You Might Not Need an Effect | React | https://react.dev/learn/you-might-not-need-an-effect | 2026-11-15 |
| S13 | create-next-app (Markdown view) | Next.js (Vercel) | https://nextjs.org/docs/app/api-reference/cli/create-next-app.md | 2026-11-16 |

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | Minimum Node.js version. | S1 | "Minimum Node.js version: 20.9" |
| C2 | `--yes` takes the defaults: TypeScript, Tailwind CSS, ESLint, App Router, Turbopack. | S1 | "--yes skips prompts using saved preferences or defaults. The default setup enables TypeScript, Tailwind CSS, ESLint, App Router, and Turbopack" |
| C3 | File-system routing. | S2 | "Next.js uses file-system based routing , meaning you can use folders and files to define routes." |
| C4 | A page is UI on a route. | S2 | "A page is UI that is rendered on a specific route." |
| C5 | A layout is shared UI that keeps state on navigation. | S2 | "A layout is UI that is shared between multiple pages. On navigation, layouts preserve state, remain interactive, and do not rerender." |
| C6 | A dynamic segment is a folder name in square brackets. | S2 | "To create a dynamic segment, wrap the segment (folder) name in square brackets: [segmentName] ." |
| C7 | Layouts and pages are Server Components by default. | S3 | "By default, layouts and pages are Server Components , which lets you fetch data and render parts of your UI on the server, optionally cache the result, and stream it to the client." |
| C8 | `"use client"` makes a Client Component. | S3 | "You can create a Client Component by adding the "use client" directive at the top of the file, above your imports." |
| C9 | Client Components for state, event handlers, effects, browser APIs. | S3 | "Use Client Components when you need: State and event handlers . E.g. onClick , onChange . Lifecycle logic . E.g. useEffect . Browser-only APIs." |
| C10 | Server Components keep secrets off the client. | S3 | "Use API keys, tokens, and other secrets without exposing them to the client." |
| C11 | A `"use client"` file pulls its imports into the client bundle. | S3 | "all of its imports and the components it directly renders are included in the client bundle" |
| C12 | JavaScript hydrates Client Components. | S3 | "JavaScript is used to hydrate Client Components and make the application interactive." |
| C13 | Hydration attaches event handlers to the static HTML. | S3 | "Hydration is React's process for attaching event handlers to the DOM, to make the static HTML interactive." |
| C14 | Prefetching loads a route in the background. | S4 | "Prefetching is the process of loading a route in the background before the user navigates to it." |
| C15 | `<Link>` routes are prefetched when they enter the viewport. | S4 | "Next.js automatically prefetches routes linked with the <Link> component when they enter the user's viewport." |
| C16 | Components are reusable UI elements. | S5 | "React lets you combine your markup, CSS, and JavaScript into custom "components", reusable UI elements for your app." |
| C17 | Component names start with a capital letter. | S5 | "React components are regular JavaScript functions, but their names must start with a capital letter or they won't work!" |
| C18 | Props are what you pass to a JSX tag. | S6 | "Props are the information that you pass to a JSX tag." |
| C19 | `useState` keeps data and triggers a re-render. | S7 | "The useState Hook provides those two things: A state variable to retain the data between renders. A state setter function to update the variable and trigger React to render the component again." |
| C20 | Hooks only at the top level. | S7 | "Hooks—functions starting with use —can only be called at the top level of your components or your own Hooks." |
| C21 | Effects sync with systems outside React. | S8 | "Effects let you run some code after rendering so that you can synchronize your component with some system outside of React." |
| C22 | Keys match array items to components. | S9 | "Keys tell React which array item each component corresponds to, so that it can match them up later." |
| C23 | A missing key gives a console warning. | S9 | "Console Warning: Each child in a list should have a unique "key" prop." |
| C24 | Index as key leads to bugs. | S9 | "Index as a key often leads to subtle and confusing bugs." |
| C25 | Playwright automates Chromium, Firefox, and WebKit. | S10 | "Playwright is a testing framework that lets you automate Chromium, Firefox, and WebKit with a single API." |
| C26 | Test against production code. | S10 | "We recommend running your tests against your production code to more closely resemble how your application will behave." |
| C27 | `npm run build`, `npm run start`, then `npx playwright test`. | S10 | "Run npm run build and npm run start , then run npx playwright test in another terminal window to run the Playwright tests." |
| C28 | Event handlers respond to interactions. | S11 | "Event handlers are your own functions that will be triggered in response to interactions like clicking, hovering, focusing form inputs, and so on." |
| C29 | No Effect when you can calculate during render. | S12 | "If you can calculate something during render, you don't need an Effect." |
| C30 | Basic usage of the CLI with npx. | S13 | "npx create-next-app@latest [project-name] [options]" |
| C31 | `--no-*` turns a default option off. | S13 | "Negate default options. E.g. `--no-ts`" |
| C32 | Cache Components is on by default for the App Router. | S13 | "Initialize with Cache Components enabled (default for App Router)" |
| C33 | Before hydration, the HTML is a fast, non-interactive preview. | S3 | "is used to immediately show a fast non-interactive preview of the route to the user" |
| C34 | A dynamic segment generates many pages from data. | S2 | "creates a dynamic route segment which is used to generate multiple pages from data" |

## Run check

Run on 2026-11-15 with Next.js 16.4.3, React 19.3.0, TypeScript 5.9.3, Node.js 26.8.1, and Playwright 1.65.0. The files of "Try it" (`app/products.ts`, `app/counter.tsx`, `app/page.tsx`, `app/products/[id]/page.tsx`) were added to an app with a minimal root layout.

- `next build` compiled, passed TypeScript, and listed `/` as static and `/products/[id]` as dynamic.
- `npx playwright test` against `next start` (through `webServer`): 3 tests, 3 passed: the cart counts two clicks, the `Blue mug` link opens `/products/2`, and `/products/999` answers `404`.
- With the `key` removed from the `<li>`, `next dev` logged `Each child in a list should have a unique "key" prop.` on the server, and the browser console of a Playwright page showed the same message as an `error`.

## Re-run with create-next-app 16.4.6

The reader's path was run again on 2026-11-15, from `npx create-next-app@latest`, which installed Next.js 16.4.6.

- With `--yes` alone, the CLI wrote `cacheComponents: true` and `partialPrefetching: true` into `next.config.ts`. The files of "Try it" then failed `npm run build` with `Route "/products/[id]": Next.js encountered uncached or runtime data during prerendering.`
- With `--yes --no-cache-components`, `next.config.ts` had neither option. `npm run build` passed (`/` static, `/products/[id]` dynamic). Against `npm run start`, with no request before it, `npx playwright test` (Playwright 1.65.0) passed 3 of 3, and `curl` of an unknown id answered `404` on its first request.
- `nextjs.org` shows the CLI command in package-manager tabs, and the HTML text holds only the first tab (pnpm). S13 is the Markdown view of the same page (the page's "View Markdown" link), which holds the `npx` tab too.
