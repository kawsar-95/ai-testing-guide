# Reference Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give the site the look and layout of systemdesignbangla.com: new tokens and fonts, a top nav with dropdowns, no sidebar, a drawer on every width, a landing-style home page, and a `/contents/` page.

**Architecture:** Re-theme in place. The token names in `app/globals.css` stay, so every Tailwind class keeps working. `NavList` stays the one list of pages, used by the drawer. New data helpers in `lib/` (stats, header nav, home copy) are plain `.ts` with relative imports, so `node --test` can test them.

**Tech Stack:** Next.js 16 App Router, React 19, Tailwind CSS 4, `next/font/google`, `node --test`.

**Spec:** `docs/superpowers/specs/2026-10-21-reference-redesign-design.md`

## Global Constraints

- Every text token has 4.5:1 contrast or more on `--bg`, `--bg-raised`, and `--bg-raised-2`, in both themes.
- Token names do not change. New tokens: `--accent-2`, `--accent-soft`, `--shadow-sm`, `--shadow-md`, `--shadow-lg`.
- Fonts: Crimson Pro (`--font-crimson`), Inter, Noto Sans Bengali (`preload: false`), JetBrains Mono.
- The theme logic (`lib/theme.ts`), the voice logic, and the version switch do not change.
- Do not copy the reference CSS files, its cover card, its author block, or its text.
- No inline `style={{...}}` in content. Code blocks stay dark.
- No horizontal page scroll at 375 px.
- `lib/*.ts` files that tests import use relative `.ts` imports.
- Commit messages end with `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.

## Review Focus

1. A reader at 880 px to 1023 px width: the old `lg` breakpoint is 1024 px, the new nav breakpoint is 880 px. The menu button and the nav items must never both hide. Task 4 tests the breakpoint class names.
2. A keyboard reader in a dropdown: Escape closes it and moves the focus to its button; Tab out of the panel closes it. Task 4 tests `nextOpenState`.
3. A reader with blocked `localStorage` on `/contents/`: the progress cards render with 0 and do not throw. Task 2 uses the existing hooks, which already catch errors; the visual check in Task 7 covers it.
4. The Pages build with `PAGES_BASE_PATH=/ai-testing-guide`: the new links (`/contents/`, the hero buttons, the footer) must go through `next/link`. Task 7 runs `check_links.py` on a base-path build.
5. A dark theme reader: the hero glows and the grid must not lower the contrast of the hero text. Task 3 keeps the glow layer under the text at 12 % alpha or less.

---

### Task 1: Tokens, fonts, and the contrast test

**Files:**
- Create: `lib/contrast.ts`
- Create: `tests/contrast.test.ts`
- Modify: `app/globals.css` (token blocks and `@theme inline`)
- Modify: `app/layout.tsx:3-20` (Fraunces to Crimson Pro)
- Modify: `lib/pwa.ts:17` (`BACKGROUND`)

**Interfaces:**
- Produces: `contrastRatio(a: string, b: string): number` (hex `#rrggbb`, WCAG 2 formula). `parseTokens(css: string, theme: "light" | "dark"): Record<string, string>` (token name without `--` to its value, from the token block of that theme).
- Produces: Tailwind colors `accent-2`, `accent-soft`; shadows `shadow-sm`, `shadow-md`, `shadow-lg` (through `--shadow-*` in `@theme inline`).

- [ ] **Step 1: Write the failing test** `tests/contrast.test.ts`

```ts
test("contrastRatio gives the WCAG values", () => {
  assert.equal(Math.round(contrastRatio("#000000", "#ffffff") * 10) / 10, 21);
  assert.equal(contrastRatio("#777777", "#777777"), 1);
});

for (const theme of ["light", "dark"] as const) {
  test(`every text token has 4.5:1 on every background (${theme})`, () => {
    const tokens = parseTokens(readFileSync("app/globals.css", "utf8"), theme);
    for (const fg of ["text", "text-dim", "text-faint", "accent", "accent-2", "good", "warn", "danger", "voice-layman", "voice-bangla"])
      for (const bg of ["bg", "bg-raised", "bg-raised-2"])
        assert.ok(contrastRatio(tokens[fg], tokens[bg]) >= 4.5, `${theme} ${fg} on ${bg}`);
  });
}
```
- [ ] **Step 2: Run** `node --test tests/contrast.test.ts`. Expected: FAIL, module not found.

- [ ] **Step 3: Implement `lib/contrast.ts`.** Then run the test against the current tokens. It shows which current pairs fail. Record them, they are the baseline.

- [ ] **Step 4: Set the new tokens** from spec section 3. Values not fixed by the spec (`--text-faint`, dark `--good/--warn/--danger`, `--voice-*`, `--accent-soft`, `--code-bg`) are chosen so that the test passes. Start points: light `--text-faint` `#5f656b`; dark `--good` `#4ade80`, `--warn` `#fbbf24`, `--danger` `#f87171`. Light `--accent-2` `#b45309` on `#f3ede2` is about 4.6:1; if it fails, use `#a14a07`. Shadows: light `0 1px 2px rgb(20 20 20 / .04), 0 1px 3px rgb(20 20 20 / .06)` (sm), `0 4px 12px rgb(20 20 20 / .06), 0 8px 24px rgb(20 20 20 / .06)` (md), `0 12px 40px rgb(20 20 20 / .10)` (lg); dark `0 1px 2px rgb(0 0 0 / .4)`, `0 4px 12px rgb(0 0 0 / .3)`, `0 12px 40px rgb(0 0 0 / .5)`.

- [ ] **Step 5: Swap the font.** In `app/layout.tsx` replace `Fraunces` with `Crimson_Pro` (`weight: ["400","600","700"]`, `style: ["normal","italic"]`, `variable: "--font-crimson"`). Replace every `--font-fraunces` in `app/globals.css` with `--font-crimson`. Set `BACKGROUND` in `lib/pwa.ts` to `#0e1115` and update its comment.

- [ ] **Step 6: Run** `npm test`. Expected: all pass, including `tests/theme.test.ts` unchanged.

- [ ] **Step 7: Commit** `feat: new color tokens, Crimson Pro, and a contrast test`.

### Task 2: The `/contents/` route and site stats

**Files:**
- Create: `lib/contents.ts`, `lib/stats.ts`, `tests/contents.test.ts`
- Create: `app/(site)/contents/page.tsx`, `components/pages/ContentsPage.tsx`
- Create: `scripts/contents-route-map.json` (`{"/contents/": "/contents/"}`)
- Modify: `lib/sitemap.ts`, `lib/pwa.ts` (`precacheUrls`), `tests/sitemap.test.ts:43` (86 to 87)
- Modify: `scripts/check_routes.py:14-20` (add the new map), `scripts/test_checks.py` if it asserts the map list

**Interfaces:**
- Produces: `CONTENTS_HOME = "/contents/"` and `CONTENTS_ROUTES: readonly string[] = [CONTENTS_HOME]` in `lib/contents.ts`.
- Produces: `siteStats(): { parts: number; modules: number; pages: number; voices: number }` in `lib/stats.ts`. `parts` = `PAGES.length` (23). `modules` = 4 (Linux, Fundamentals, System Design, Architecture). `pages` = `sitemapPaths().length` (87). `voices` = 3.
- Produces: `MODULES: readonly { id: "linux" | "fundamentals" | "system-design" | "architecture"; title: string; href: string; tagline: string; pages: readonly { href: string; title: string }[] }[]` in `lib/stats.ts`. Titles and links come from `LINUX_UI`, `FUNDAMENTALS_UI`, `SYSTEM_DESIGN_UI`, `ARCHITECTURE_UI`, and the data files. Task 3 and Task 4 use it.

- [ ] **Step 1: Write the failing tests** `tests/contents.test.ts`

```ts
test("the sitemap and the precache have /contents/", () => {
  assert.ok(sitemapPaths().includes("/contents/"));
  assert.ok(precacheUrls("").includes("/contents/"));
});
test("siteStats counts from the data", () => {
  assert.deepEqual(siteStats(), { parts: 23, modules: 4, pages: 87, voices: 3 });
});
test("MODULES lists every module page once", () => {
  assert.deepEqual(MODULES.map((m) => m.id), ["linux", "fundamentals", "system-design", "architecture"]);
  assert.deepEqual(MODULES.map((m) => m.pages.length), [12, 11, 15, 20]);
});
test("the contents route map is the identity map of CONTENTS_ROUTES", () => { /* read scripts/contents-route-map.json */ });
```

Change `tests/sitemap.test.ts` to expect 87.

- [ ] **Step 2: Run** `npm test`. Expected: FAIL on the new tests and on 87.
- [ ] **Step 3: Implement** `lib/contents.ts`, `lib/stats.ts`, the sitemap and precache entries (after `"/"`), the route map, and the `check_routes.py` list.
- [ ] **Step 4: Build the page.** `app/(site)/contents/page.tsx` exports `metadata = { title: "Contents", description: … }` and renders `ContentsPage`. `ContentsPage`: a title block ("All parts and modules"), the stats row (same component as the home hero, see Task 3: `StatsRow` in `components/pages/StatsRow.tsx`, create it here), one card per tutorial group (`GROUPS`) with a numbered list of its pages, and one card per entry of `MODULES`. The Linux, Fundamentals, and Architecture cards show `LinuxProgressSummary ids={ALL_TOPIC_IDS}`, `FundamentalsProgressSummary ids={ALL_FUNDAMENTALS_TOPIC_IDS}`, and `ArchitectureProgressSummary ids={[...LESSON_IDS, ...PRACTICE_IDS]}`. Check each summary's prop names before use.
- [ ] **Step 5: Run** `npm test`, `npm run build`, `python3 scripts/check_routes.py out`. Expected: pass, no MISSING line.
- [ ] **Step 6: Commit** `feat: add the contents page and site stats`.

### Task 3: Home page and footer

**Files:**
- Modify: `components/pages/HomePage.tsx` (rewrite)
- Modify: `lib/home.ts` (add `WHY_ITEMS`, `COURSE_CARDS`), `tests/home.test.ts`
- Create: `components/layout/SiteFooter.tsx`
- Modify: `components/layout/SiteShell.tsx` (use `SiteFooter`)
- Modify: `app/globals.css` (`.btn`, `.btn-primary`, `.btn-outline`, `.hero-grid-bg` in `@layer components`)

**Interfaces:**
- Consumes: `siteStats`, `MODULES` (Task 2), `StatsRow` (Task 2), `START_STEPS`.
- Produces: `WHY_ITEMS: readonly { icon: string; title: string; text: string }[]` (6 items, tutorial's own text; `icon` is one emoji). `COURSE_CARDS: readonly { n: string; title: string; tagline: string; count: number; href: string }[]`: the 6 groups (`n` "01" to "06", `href` the first page, `count` its pages) then the 4 modules (`n` "07" to "10", `href` the module home, `count` `pages.length`).
- Produces: the classes `.btn`, `.btn-primary`, `.btn-outline`, `.btn-ghost`. Task 5 uses them.

- [ ] **Step 1: Write the failing tests** in `tests/home.test.ts`: `WHY_ITEMS.length === 6` and each field is non-empty; `COURSE_CARDS.map(c => c.n)` is `"01"` … `"10"`; `COURSE_CARDS.slice(0, 6).map(c => c.count)` is `[3, 4, 2, 5, 3, 6]`; every `href` is in `sitemapPaths()`.
- [ ] **Step 2: Run** `npm test`. Expected: FAIL.
- [ ] **Step 3: Implement** `WHY_ITEMS` and `COURSE_CARDS`. The 6 why topics: hands-on with real commands; every claim has a source; three voices including Bangla; one real QA case study; works offline as an app; dark and light themes.
- [ ] **Step 4: Rewrite `HomePage`** per spec section 7. Hero: `relative overflow-hidden` section, an `aria-hidden` background div with class `hero-grid-bg` (two radial gradients at 12 % and 10 % alpha with `color-mix`, plus a `::before` 64 px line grid at 35 % opacity with a radial mask). Title line 1 "Software Testing", line 2 "with *Claude AI*" (dim, the italic word in `text-accent` with a soft underline from a `::after` at 22 % alpha). Keep `AiLogos`. Buttons: `Link` with `btn btn-primary` to `START_STEPS[0].href` ("Start reading"), `Link` with `btn btn-outline` to `CONTENTS_HOME` ("See all parts"). Then `StatsRow`. Then a "START HERE" row of the 3 `START_STEPS` as small cards. Then the why grid (`grid-cols-[repeat(auto-fit,minmax(280px,1fr))]`), then the course grid. Cards: `rounded-2xl border border-border bg-bg-raised shadow-sm hover:shadow-md`.
- [ ] **Step 5: Write `SiteFooter`**: 3 columns (Tutorial: the 6 group first pages; Modules: the 4 `MODULES`; Project: Contents, GitHub repo of `OWNER`, Search hint), then the line `{footerSummary} · © 2026 {OWNER.name}`. Use `next/link` for internal links.
- [ ] **Step 6: Run** `npm test`, `npm run build`. Expected: pass. Check `/` in the browser in both themes at 375 px and 1280 px.
- [ ] **Step 7: Commit** `feat: landing-style home page and footer`.

### Task 4: Header, dropdowns, drawer on every width, no sidebar

**Files:**
- Create: `lib/header-nav.ts`, `tests/header-nav.test.ts`
- Create: `components/layout/NavDropdown.tsx`, `components/layout/ContentsButton.tsx`
- Modify: `components/layout/SiteHeader.tsx` (rewrite), `components/layout/MobileNav.tsx`, `components/layout/SiteShell.tsx`
- Delete: `components/layout/Sidebar.tsx`
- Modify: the 5 content page files: `app/(site)/[group]/[page]/page.tsx`, `app/(site)/linux/[stage]/page.tsx`, `app/(site)/fundamentals/[chapter]/page.tsx`, `app/(site)/system-design/[topic]/page.tsx`, `app/(site)/architecture/[topic]/page.tsx` (add `ContentsButton` as the first child of the `min-w-0` column)
- Modify: `lib/ui.ts` (new strings)

**Interfaces:**
- Consumes: `MODULES`, `CONTENTS_HOME` (Task 2).
- Produces: `HEADER_NAV: readonly { id: "tutorial" | "linux" | "fundamentals" | "system-design" | "architecture" | "contents"; label: string; href: string; pages?: readonly { href: string; title: string }[] }[]`. Tutorial `pages` = `PAGES`; `contents` has no `pages`.
- Produces: `activeNavId(path: string): HeaderNavId`: `/contents/` gives `contents`; a module prefix gives that module; anything else gives `tutorial`.
- Produces: `nextOpenState(open: string | null, event: { type: "toggle" | "escape" | "outside" | "blur-out"; id?: string }): string | null`.
- Produces: `OPEN_NAV_EVENT = "nav-drawer-open"` (exported from `lib/ui.ts`). `ContentsButton` dispatches it on `window`; `MobileNav` listens and opens.
- Produces: strings in `lib/ui.ts`: `contentsButton = "Contents"`, `navMain = "Main"`, `navPagesOf = (label: string) => \`${label} pages\``.

- [ ] **Step 1: Write the failing tests** `tests/header-nav.test.ts`: the ids in order `tutorial, linux, fundamentals, system-design, architecture, contents`; tutorial `pages.length === 23`; `activeNavId("/linux/stage-01/") === "linux"`, `activeNavId("/contents/") === "contents"`, `activeNavId("/extend/hooks/") === "tutorial"`, `activeNavId("/") === "tutorial"`; `nextOpenState(null, {type:"toggle", id:"linux"}) === "linux"`, `nextOpenState("linux", {type:"toggle", id:"linux"}) === null`, `nextOpenState("linux", {type:"toggle", id:"fundamentals"}) === "fundamentals"`, `nextOpenState("linux", {type:"escape"}) === null`, `nextOpenState("linux", {type:"outside"}) === null`, `nextOpenState("linux", {type:"blur-out"}) === null`. A breakpoint test reads `SiteHeader.tsx` and `MobileNav.tsx` as text: the nav uses `min-[880px]:flex` and the menu button uses `min-[880px]:hidden` (Review Focus 1).
- [ ] **Step 2: Run** `npm test`. Expected: FAIL.
- [ ] **Step 3: Implement** `lib/header-nav.ts`.
- [ ] **Step 4: `NavDropdown`** (client): one item of `HEADER_NAV` with `pages`. A `button` with `aria-expanded` and `aria-controls`; the panel is a `ul` of `Link`s plus a first link to the module home. It uses `nextOpenState` through a prop pair `open` and `onChange` from the header, so one dropdown is open at most. Escape moves focus to the button. A `pointerdown` outside and a `focusout` to outside close it. A route change closes it. The panel: `absolute top-full mt-2 max-h-[70vh] overflow-y-auto rounded-xl border border-border bg-bg-raised shadow-lg w-72`.
- [ ] **Step 5: Rewrite `SiteHeader`** per spec 5.1: `fixed inset-x-0 top-0 z-40 h-16`, the blur on its own layer at `bg-bg/92`, the brand mark in a 34 px `bg-accent` square with radius 8 px (the `BrandMark` stroke in white), the nav `hidden min-[880px]:flex`, the active item underline `after:absolute after:-bottom-[21px] after:h-0.5 after:bg-accent`. Because the header is fixed, `SiteShell` adds `pt-16` to its wrapper. Update the `scroll-margin-top` / sticky offsets that use 3.5 rem (`grep -rn "3.5rem\|top-14\|h-14" app components`) to 4 rem.
- [ ] **Step 6: Change `MobileNav`**: the menu button is `min-[880px]:hidden`, the drawer root has no `lg:hidden`, remove the `matchMedia` close, and add a `window` listener for `OPEN_NAV_EVENT` that opens the drawer. Update its doc comment.
- [ ] **Step 7: `ContentsButton`** (client): a `btn btn-ghost` with a list icon and `contentsButton`, `aria-haspopup="dialog"`. Add it to the 5 page files. Remove the sidebar column from `SiteShell` and delete `Sidebar.tsx`. Keep `SidebarList` and `withTrailingSlash`, the drawer uses them.
- [ ] **Step 8: Run** `npm test`, `npm run build`, `python3 scripts/check_links.py out`, `python3 scripts/check_outline.py out`. Expected: pass. In the browser: open each dropdown with the keyboard, check Escape, check the drawer at 1280 px from a content page, check 375 px and 900 px.
- [ ] **Step 9: Commit** `feat: top nav with dropdowns, drawer on every width, no sidebar`.

### Task 5: Component restyle

**Files:**
- Modify: `components/mdx/Callout.tsx`, `components/mdx/InfoCard.tsx`, `components/mdx/CardGrid.tsx`, `app/globals.css` (`.mdx-table`, `.mdx a`, `details`)
- Modify: `components/pages/LinuxHome.tsx`, `FundamentalsHome.tsx`, `SystemDesignHome.tsx`, `ArchitectureHome.tsx`, `components/content/PrevNext.tsx`, `components/layout/ThemeToggle.tsx`, `VoiceToggle.tsx`, `InstallButton.tsx`, `components/navigation/SearchPalette.tsx` (the trigger only)

**Interfaces:**
- Consumes: `.btn*` classes and `shadow-*` (Tasks 1, 3).

- [ ] **Step 1: Callout**: background `color-mix(in srgb, <type color> 10%, var(--bg-raised))` through a class per type in `globals.css`, keep the 3 px left border and the icon, radius 10 px. The text stays `--text`, so the contrast test covers it.
- [ ] **Step 2: InfoCard, CardGrid items, tables**: `rounded-2xl border border-border bg-bg-raised shadow-sm`, hover `shadow-md` on linked cards only. Tables: radius 10 px.
- [ ] **Step 3: Header icon buttons**: `size-9 rounded-lg border border-border hover:bg-bg-raised-2`.
- [ ] **Step 4: Module homes**: the title block uses the home hero type scale without the grid background; lists use the card style; links to the first page use `btn btn-primary`. PrevNext uses the card style.
- [ ] **Step 5: Run** `npm test`, `npm run build`, `python3 scripts/check_sources.py out`. Expected: pass, `OK 81 pages checked, 0 skipped`. Check one page with every Callout type in both themes.
- [ ] **Step 6: Commit** `feat: restyle cards, callouts, tables, and module homes`.

### Task 6: Docs

**Files:**
- Modify: `CLAUDE.md` (Structure table: new files, `Sidebar` removed; route count 86 to 87 and the route table with `/contents/`; Design section: new tokens, fonts, header height; PWA: 87 routes; Checks: `contents-route-map.json` in `check_routes.py`)
- Modify: `lib/pwa.ts` comments that say 86

- [ ] **Step 1: Update the docs.** `grep -rn "86" CLAUDE.md lib` and fix each route count.
- [ ] **Step 2: Commit** `docs: describe the redesign in CLAUDE.md`.

### Task 7: Full verification

- [ ] **Step 1: Run** `npm test`, `python3 -m unittest scripts/test_checks.py`, `python3 -m unittest scripts/test_linux_scripts.py`. Expected: all pass.
- [ ] **Step 2: Run** `npm run build`, then `check_routes.py out`, `check_links.py out`, `check_outline.py out`, `check_sources.py out`. Expected: no errors; `OK 81 pages checked, 0 skipped`.
- [ ] **Step 3: Base-path build** (Review Focus 4): `PAGES_BASE_PATH=/ai-testing-guide npm run build`, copy `out/` to `<scratch>/ai-testing-guide/`, serve it, and open `/ai-testing-guide/`, `/ai-testing-guide/contents/`, one tutorial page. All links and the drawer work.
- [ ] **Step 4: Browser check** at 375 px, 900 px, and 1280 px in both themes: `/`, `/contents/`, `/extend/hooks/`, `/linux/`, `/fundamentals/<first chapter>/`. No horizontal scroll. With `localStorage` blocked, `/contents/` renders.
- [ ] **Step 5:** Fix and commit any finding.
