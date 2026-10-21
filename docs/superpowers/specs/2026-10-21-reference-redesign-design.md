# Reference Redesign: Design

Date: 2026-10-21. Status: approved by the owner.

## 1. Goal

The site gets the look and the layout of https://www.systemdesignbangla.com/: a warm light theme, a teal accent with an amber second accent, a fixed top nav, no sidebar, a landing-style home page, and a contents page.

The reference is a style reference only. We do not copy its CSS files, its cover card, its author block, or its text. The content, the routes of the 86 current pages, the voices, the PWA, and the Fundamentals version switch do not change in behavior.

## 2. Decisions

| Question | Decision |
|---|---|
| Scope | Full layout: new tokens, header, home page, and no sidebar |
| Navigation | All three: top nav dropdowns, a drawer on every width, and a new `/contents/` page |
| Default theme | Follow the OS. A saved choice wins. This is the current `resolveTheme` logic, so it does not change. |
| Fonts | Crimson Pro (headings), Inter (body), Noto Sans Bengali (Bangla), JetBrains Mono (code and labels) |
| Approach | Re-theme in place (approach A): change the tokens, restyle the components, reuse `NavList` |

## 3. Tokens

`app/globals.css` keeps the current token names, so the Tailwind classes (`bg-bg-raised`, `text-text-dim`, …) keep working. The values change.

| Token | Light | Dark |
|---|---|---|
| `--bg` | `#faf7f2` | `#0e1115` |
| `--bg-raised` | `#ffffff` | `#161b22` |
| `--bg-raised-2` | `#f3ede2` | `#1c2128` |
| `--border` | `#e6dfd0` | `#2a3038` |
| `--border-strong` | `#d6cdb9` | `#3a424d` |
| `--text` | `#1a1d1f` | `#e6e6e6` |
| `--text-dim` | `#4a5158` | `#b8bfc7` |
| `--text-faint` | measured, 4.5:1 or more on `--bg` | measured, 4.5:1 or more on `--bg` |
| `--accent` | `#0f766e` | `#2dd4bf` |
| `--accent-2` (new) | `#b45309` | `#f59e0b` |
| `--good`, `--warn`, `--danger` | `#15803d`, `#b45309`, `#b91c1c` | measured on dark `--bg` |

New tokens: `--accent-soft`, `--shadow-sm`, `--shadow-md`, `--shadow-lg`, and the radii 6 px, 10 px, and 16 px. `@theme inline` maps the new ones to Tailwind (`text-accent-2`, `shadow-md`, …).

The reference `--ink-mute` (`#8a8f95`) has about 3.2:1 contrast on `#faf7f2`. It fails the 4.5:1 rule of this site, so `--text-faint` gets a darker value. Every text token and the voice tokens are measured again in both themes. The values that pass go into the table in `CLAUDE.md`.

Code blocks stay dark in both themes.

## 4. Fonts

`app/layout.tsx` loads Crimson Pro (weights 400, 600, 700, italic 400) through `next/font/google` in place of Fraunces. The variable is `--font-crimson`. `--font-display` uses it first. Inter, Noto Sans Bengali (`preload: false`), and JetBrains Mono stay.

## 5. Header and navigation

### 5.1 Header

- Fixed at the top, 64 px high, `--bg` at 92 % with a 12 px blur on its own layer (as now, so the drawer is not trapped). A 1 px bottom border.
- Left: the brand mark (the current `BrandMark` drawing) in a 34 px teal square with an 8 px radius, then `SITE_NAME`.
- Center-right, at 880 px and wider: Tutorial, Linux, Fundamentals, System Design, Architecture, Contents. The current item has a 2 px teal underline at the bottom edge of the header.
- Right: the search trigger, `VoiceToggle`, `InstallButton`, `ThemeToggle`. The icon buttons are 36 px squares with a 1 px border and an 8 px radius.
- Below 880 px: the nav items hide, and the menu button opens the drawer with the full `NavList`.

### 5.2 Dropdowns

Each module item (Tutorial, Linux, Fundamentals, System Design, Architecture) is a button with `aria-expanded` that opens a panel under it. The panel lists the pages of that module from its data file (`lib/nav.ts`, `lib/linux/stages.ts`, …) and a link to the module home. Escape closes it and moves the focus to the button. A click outside closes it. Contents is a plain link.

### 5.3 Drawer

The current `MobileNav` drawer becomes available at all widths. On a content page, a "Contents" button above the page title opens it. `NavList` already shows the list of the current module from the path, so the drawer content does not change. The desktop `Sidebar` component and its grid column are removed.

### 5.4 `/contents/` page

A new route at `app/(site)/contents/page.tsx`, like the reference `toc.html`:

- A title block and a stats row: the number of parts, modules, and pages.
- One section for each tutorial group and one for each module, with its pages as a numbered list in a card.
- Linux, Fundamentals, and Architecture show the reader's progress with the existing progress hooks. The server HTML shows 0, so the page renders without storage.

The site then has 87 routes. These change with it: `lib/sitemap.ts`, the precache list in `lib/pwa.ts`, `scripts/route-map.json` (or its own map), `tests/sitemap.test.ts`, and the route counts in `CLAUDE.md`. The search index does not get the page, because the page has no text of its own.

## 6. Content pages

- No sidebar. The main column is centered with a 1200 px container and a 720 px reading width.
- "On this page" (`SectionNav`) stays on the right at wide screens.
- The "Contents" button (5.3) sits above `PageHeader`.
- Prev/next, the reading progress bar, and back-to-top stay.

## 7. Home page

`components/pages/HomePage.tsx` is rebuilt. The sections, in order:

1. **Hero.** A background with a 64 px line grid (35 % opacity, faded by a radial mask) and two soft glows (teal top-left, amber right). A 2-line title in Crimson Pro, 40 px to 72 px. The second line is dim and has one teal italic word with a soft underline. A subtitle (19 px, max 540 px). Two buttons: "Start reading" (primary, to the first START HERE page) and "See all parts" (outline, to `/contents/`). A stats row of 4 items with a 2 px teal left border. The counts come from the data files, not from fixed text.
2. **Why this guide.** 6 cards (auto-fit, min 280 px): an icon, a title, and 1 or 2 sentences. The text is the tutorial's own text in `lib/home.ts`.
3. **Course structure.** Numbered cards: 01 to 06 for the tutorial groups, then the 4 modules. Each card shows a large number, the title, the tagline, and the page count. Each links to the first page or the module home.
4. **Footer.** 3 link columns (Tutorial, Modules, Project) and the copyright line with `OWNER`.

No cover card, no author photo, no ads.

## 8. Components

| Component | Change |
|---|---|
| Buttons | 10 px radius, 12 px by 22 px padding, weight 600. Primary: teal fill. Outline: 1 px border. Ghost: no border. |
| `InfoCard`, `CardGrid` items | `--bg-raised`, 1 px border, 16 px radius, `--shadow-sm`, `--shadow-md` on hover |
| `Callout` | A tinted background as in the reference (note, tip, warning, danger), with the current 3 px left border and icon. Text contrast is measured. |
| Tables | Raised box with a 10 px radius |
| Module home pages | Same card and hero style as the home page, without the grid background |
| Voices panels | The current tokens. Contrast is measured again. |

## 9. Not in scope

- New content or text changes on content pages.
- A dashboard, an interview page, quizzes, or an author page.
- A change to the theme logic, the voice logic, or the version switch.

## 10. Testing

| Check | Expectation |
|---|---|
| `npm test` | Passes. New tests: `/contents/` is in the sitemap and the precache list, and the route count is 87. `tests/theme.test.ts` passes without change. |
| `npm run build` | Passes. |
| `check_routes.py`, `check_links.py`, `check_outline.py`, `check_sources.py` | Pass. `check_sources.py out` still prints `OK 81 pages checked, 0 skipped`. |
| Contrast | Every text token has 4.5:1 or more on its background in both themes. |
| Layout | No horizontal scroll at 375 px. The dropdowns and the drawer work with the keyboard. |
| Visual | The home page, `/contents/`, one tutorial page, and one module page are checked in the browser in both themes. |
