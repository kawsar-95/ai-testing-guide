---
version: alpha
name: Agentic QA
description: A calm editorial reading surface - warm paper by day, blue-black by night, with a teal accent that marks anything interactive.
colors:
  primary: "#2dd4bf"
  accent-secondary: "#f59e0b"
  accent-soft: "#134e4a"
  bg: "#0e1115"
  bg-raised: "#161b22"
  bg-raised-2: "#1c2128"
  border: "#2a3038"
  border-strong: "#3a424d"
  text: "#e6e6e6"
  text-dim: "#b8bfc7"
  text-faint: "#8b939e"
  state-good: "#4ade80"
  state-warn: "#fbbf24"
  state-danger: "#f87171"
  code-bg: "#22272e"
typography:
  display:
    fontFamily: "Crimson Pro, Noto Sans Bengali, ui-serif, Georgia, serif"
    fontSize: "2.75rem"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  h2:
    fontFamily: "Crimson Pro, Noto Sans Bengali, ui-serif, Georgia, serif"
    fontSize: "1.75rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  h3:
    fontFamily: "Inter, Noto Sans Bengali, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, Noto Sans Bengali, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.625
  body-sm:
    fontFamily: "Inter, Noto Sans Bengali, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  eyebrow:
    fontFamily: "Inter, Noto Sans Bengali, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0em"
  code:
    fontFamily: "JetBrains Mono, Noto Sans Bengali, ui-monospace, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "4px"
  md: "10px"
  lg: "12px"
  pill: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.bg}"
    rounded: "{rounded.md}"
    padding: "12px 22px"
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.bg}"
  button-outline:
    backgroundColor: "{colors.bg-raised}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "12px 22px"
  button-outline-hover:
    backgroundColor: "{colors.bg-raised}"
    textColor: "{colors.primary}"
  button-ghost:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text-dim}"
    rounded: "{rounded.md}"
    padding: "12px 22px"
  code-block:
    backgroundColor: "{colors.code-bg}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "16px 18px"
  table-cell:
    backgroundColor: "{colors.bg-raised}"
    textColor: "{colors.text}"
    padding: "10px 14px"
  table-header:
    backgroundColor: "{colors.bg-raised-2}"
    textColor: "{colors.text}"
    padding: "10px 14px"
  callout-note:
    backgroundColor: "{colors.bg-raised}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
  callout-tip:
    backgroundColor: "{colors.bg-raised}"
    textColor: "{colors.state-good}"
    rounded: "{rounded.md}"
  callout-warning:
    backgroundColor: "{colors.bg-raised}"
    textColor: "{colors.state-warn}"
    rounded: "{rounded.md}"
  callout-danger:
    backgroundColor: "{colors.bg-raised}"
    textColor: "{colors.state-danger}"
    rounded: "{rounded.md}"
  link:
    textColor: "{colors.primary}"
  accent-mark:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
  eyebrow-label:
    textColor: "{colors.text-faint}"
    typography: "{typography.eyebrow}"
  stat-value:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.accent-secondary}"
    typography: "{typography.display}"
  info-card-good:
    backgroundColor: "{colors.bg-raised}"
    textColor: "{colors.state-good}"
    rounded: "{rounded.md}"
  info-card-bad:
    backgroundColor: "{colors.bg-raised}"
    textColor: "{colors.state-danger}"
    rounded: "{rounded.md}"
---

## Overview

A static educational site that teaches QA engineers and SDETs to test AI
systems. It is a **Read** surface: the reader is here to understand something,
so structure for comprehension first and let the reading experience earn its
keep second.

The mood is an editorial one - a printed manual that happens to run in a
browser. Warm paper in the day, blue-black at night, a single teal accent that
means "this is interactive", and one amber accent that marks a number or a
label that carries weight. Nothing glows, nothing gradients, nothing moves
unless it helps comprehension.

Two themes ship from one set of tokens. `lib/theme.ts` writes `data-theme` on
`<html>` before the first paint, so there is no flash. The dark theme is the
server default because it is the one that reads well in a dim room at 1am.

**The tokens below are the dark theme's values, because dark is the server
default and the source of truth.** The light theme redefines the same token
names in `app/globals.css` under `:root[data-theme="light"]`. The two themes
are the same design in two inks; they are never two designs.

## Colors

Every color is a CSS custom property on `:root` in `app/globals.css`.
`@theme inline` maps them to Tailwind names (`bg-bg-raised`, `text-text-dim`,
`text-accent`, `bg-accent-soft`, `shadow-md`). **Never hard-code a hex in a
component.** Use the Tailwind token, and add a token first if none fits.

| Token | Dark (normative) | Light | Use |
|---|---|---|---|
| `--bg` | `#0e1115` | `#faf7f2` | Page ground. Warm paper in light, blue-black in dark. |
| `--bg-raised` | `#161b22` | `#ffffff` | Cards, code backgrounds, raised surfaces. |
| `--bg-raised-2` | `#1c2128` | `#f3ede2` | One step further up: table headers, nested panels. |
| `--border` | `#2a3038` | `#e6dfd0` | Hairlines. The default separator. |
| `--border-strong` | `#3a424d` | `#d6cdb9` | Focus rings, selected edges, emphasis borders. |
| `--text` | `#e6e6e6` | `#1a1d1f` | Body copy. |
| `--text-dim` | `#b8bfc7` | `#4a5158` | Secondary copy, captions, meta lines. |
| `--text-faint` | `#8b939e` | `#5f656b` | Tertiary: eyebrow labels, hints, placeholders. |
| `--accent` | `#2dd4bf` | `#0f766e` | The teal. Links, primary actions, active state. |
| `--accent-2` | `#f59e0b` | `#a14a07` | The amber. Numbers that carry weight, the hero's second glow. |
| `--accent-soft` | `#134e4a` | `#ccfbf1` | Tinted accent ground for badges and chips. |
| `--good` / `--warn` / `--danger` | `#4ade80` / `#fbbf24` / `#f87171` | `#166534` / `#a14a07` / `#b91c1c` | State only. Never decorative. |
| `--code-bg` | `#22272e` | `#22272e` | Code blocks. Dark in both themes. |
| `--voice-layman` / `--voice-bangla` | `#b9a3f0` / `#4ade80` | `#6a4bc0` / `#166534` | The extra reading panels and their switcher. |

The teal is the only color that marks an action. If something is clickable, it
is teal. Amber never means "click me"; it means "this number matters".

Every text color clears 4.5:1 against `--bg`, `--bg-raised`, and
`--bg-raised-2`. `tests/contrast.test.ts` enforces this. Do not introduce a
text color that has not been through that test.

Code blocks are the one element that does not theme: they stay `#22272e` in
both themes, with the `github-dark-dimmed` Shiki palette inlined.

## Typography

Three Latin faces plus one Bengali face, loaded through `next/font` in
`app/layout.tsx` and exposed as `--font-crimson`, `--font-inter`,
`--font-mono-jb`, `--font-noto-bengali`. Noto Sans Bengali comes **last** in
every stack so it only draws Bengali glyphs. It is `preload: false`; the
browser fetches it the first time Bengali text appears.

| Role | Face | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Page title (`.mdx h1`) | Crimson Pro | `clamp(2rem, 5.5vw, 2.75rem)` | 500 | 1.08 | `-0.025em` |
| Section (`.mdx h2`) | Crimson Pro | `clamp(1.4rem, 3.2vw, 1.75rem)` | 500 | 1.2 | `-0.015em` |
| Subsection (`.mdx h3`) | Inter | `1.1875rem` | 500 | 1.25 | `-0.01em` |
| Body | Inter | `1.0625rem` | 400 | 1.625 | 0 |
| Small / table body | Inter | `0.875rem` | 400 | 1.5 | 0 |
| Eyebrow / label | Inter | `0.8rem` | 600 | 1 | 0 |
| Code | JetBrains Mono | `13px` | 400 | 1.6 | 0 |

Crimson Pro is the serif and it carries the editorial voice: titles only.
Inter carries everything functional. JetBrains Mono carries code, the language
label, and nothing else.

Weights stay in the 400-600 range for body and display type. There is no 800.
Bold text means emphasis; it does not mean "the designer's choice". The
home hero's large statistic is the one deliberate exception - it is bold on
purpose.

The eyebrow label (`0.8rem`, weight 600, uppercase) is the one micro-label in
the system, used for the `PART 05 · CONFIGURE` style line above a page title
and for the section labels on the home and contents pages.

## Layout

The reading column is centered. Content sits in a comfortable measure - the
`.mdx` body runs to roughly 65-75 characters per line at `1.0625rem` with a
`1.625` line height.

Breakpoints live in `@theme inline` as `--breakpoint-*`, not as raw Tailwind
defaults:

| Token | Width | What changes |
|---|---|---|
| `--breakpoint-toc` | `80rem` | The "On this page" list appears beside the article. |
| `--breakpoint-chapter` | `51.25rem` | The chapter list appears in the left rail. |
| `--breakpoint-nav` | `75rem` | The top nav shows its full links. |
| `--breakpoint-wide` | `90rem` | The search trigger shows its label again. |

Below `51.25rem` the rails collapse into the drawer and the content goes
single column. On a phone (`max-width: 639px`) every MDX table becomes one
card per row, with the column name from `data-label` above each value.

Vertical rhythm comes from a small set of gaps: `8px` between tight items,
`16px` inside a component, `24px` between blocks, `32px` between sections.
Code blocks get `16px 0 22px` of margin so they breathe.

## Elevation & Depth

Depth is shadow, not border weight. Three levels, all in `--raise-*`:

| Token | Value | Use |
|---|---|---|
| `--raise-sm` | `0 1px 2px rgb(0 0 0 / 0.4)` | Tables, small cards, `.btn-primary`. Barely there. |
| `--raise-md` | `0 4px 12px rgb(0 0 0 / 0.3)` | Popovers, the search palette, `.btn-primary` hover. |
| `--raise-lg` | `0 12px 40px rgb(0 0 0 / 0.5)` | Modals, the command palette overlay. |

Light theme uses the same three levels with a much lower alpha, because a warm
paper ground shows shadow less harshly than a blue-black one.

Never stack a shadow on a heavy border. Pick one.

## Shapes

| Radius | Value | Use |
|---|---|---|
| `4px` | Inline code, tags, tiny chips. |
| `10px` | Cards, code blocks, tables, every `.btn`. The default. |
| `12px` | Larger panels, the home hero cards. |
| `9999px` | Pills and round icon badges. |

The default radius for a component is `10px`. When in doubt, use `10px`.

## Components

**`.btn`** is the button base: `inline-flex`, `gap 0.5rem`, `padding 0.75rem
1.375rem`, `10px` radius, `15px` weight 600, and a `translateY(-1px)` hover.
`.btn-sm` is `0.5rem 0.875rem` at `14px`. Under
`prefers-reduced-motion: reduce` the transform and transition are removed.

| Variant | Ground | Label | Hover |
|---|---|---|---|
| `.btn-primary` | `--accent` | `--bg` | Same colors, `--raise-md` instead of `--raise-sm`. |
| `.btn-outline` | `--bg-raised`, `--border-strong` edge | `--text` | Edge and label turn `--accent`. |
| `.btn-ghost` | none | `--text-dim` | Ground `--bg-raised-2`, label `--text`. |

**Icon buttons** in the header are `size-9` (`36px`) squares with
`rounded-lg`, a `--border` edge, and a `--text-dim` glyph that turns
`--text` on hover. The brand mark is the exception: `bg-accent` with a
`text-bg` glyph.

**Code block.** Fixed dark ground `#22272e` in both themes, `10px` radius,
`16px 18px` padding, JetBrains Mono at `13px`. The copy button and the
uppercase language label sit in the top-right corner, 6px from the top and
10px from the right. The copy button is invisible until hover or keyboard
focus, and always visible on touch (`@media (hover: none)`).

**Table.** Wrapped in a `.mdx-table` box with a `--border` edge, `--bg-raised`
ground, and `--raise-sm`. Header cells sit on `--bg-raised-2`, are `0.75rem`,
weight 600, uppercase, and carry `0.04em` tracking.

**Callout.** `--bg-raised` ground, `--border` edge, `10px` radius. The four
types are `note`, `tip`, `warning`, and `danger`. Each sets a 3px left border
and a 10% tint of its own color over `--bg-raised`, and the icon takes that
color too: `--accent` for `note`, `--good` for `tip`, `--warn` for `warning`,
`--danger` for `danger`.

**Links.** `--accent`, no underline at rest, underline on hover. The accent
color is the link color - there is no separate "link" token.

**Brand mark.** The site mark is a loop arrow (the agent loop) around a check
mark, drawn in `components/layout/BrandMark.tsx` and reused by `app/icon.svg`
and the PWA icons. The loop takes `--accent` and the check takes `--good`. In
the header and footer it sits on a teal tile, so it renders in `mono` mode and
takes the current text color instead. It is decorative and carries
`aria-hidden="true"`.

**Accent mark.** A `bg-accent-soft` square with a `text-accent` glyph. This
is the one place a tinted badge appears, and it replaces the emoji-icon-tile
pattern that a generic build would reach for.

## Do's and Don'ts

**Do**

- Reach for the token, not the hex. `text-text-dim`, never `#b8bfc7`.
- Keep the teal for things a reader can act on.
- Use Crimson Pro for titles, Inter for everything else, JetBrains Mono for code.
- Keep the three elevation levels and pick one depth per component.
- Give every interactive element a visible focus ring: the global
  `:focus-visible` rule draws a 2px `--accent` outline with a 2px offset, so
  never remove it and never set `outline: none` without a replacement.
- Run `npm test` before you finish. `tests/contrast.test.ts` will catch a bad
  text color.

**Don't**

- Don't introduce a purple-to-blue gradient headline. The accent is a single
  flat teal.
- Don't put an emoji in a tile above a feature heading. Use an inline SVG or
  the `bg-accent-soft` accent mark.
- Don't add a fifth elevation level or a radius that is not `4`, `10`, `12`,
  or `9999px`.
- Don't disable browser zoom. `user-scalable=no` and `maximum-scale=1` are
  forbidden.
- Don't give a button a hit target smaller than `24x24px`, and never smaller
  than `44x44px` on a touch screen.
- Don't make an index a grid of boxes. Use a ruled list: a hairline for each row. A box is for content (code, a table, a callout, a voice panel, a reel poster, a command card).
- Don't list the same module, page, or number twice on one surface. The footer does not repeat the module list of the home page and Contents, and a progress row does not show a bar, a fraction, and a percent.
- Don't add a spinner to an action that is not actually pending. This is a
  static export; there is no server round-trip to wait for.
- Don't use `style={{...}}` in content, and don't add Bootstrap, Font Awesome,
  or an icon package.
