# The animation system

Every module of the site moves the same way. This file is the contract: the
vocabulary, the rules, the checklist of each module, and the criteria that
each one is accepted by.

The visual reference is the owner's reference site,
[designed-to-scale.vercel.app](https://designed-to-scale.vercel.app/). Its
vocabulary was read out of its stylesheet, not guessed: one decelerating
curve, one overshoot curve, one symmetric curve, four durations, and entrances
that fade in while they rise a few pixels.

## The vocabulary

| Token | Value | Used for |
|---|---|---|
| `--motion-ease-out` | `cubic-bezier(.2, .7, .2, 1)` | Almost everything: an entrance, a hover, a drawer. |
| `--motion-ease-spring` | `cubic-bezier(.34, 1.56, .64, 1)` | The moments that pop: the search dialog, the back-to-top button. |
| `--motion-ease-inout` | `cubic-bezier(.65, 0, .35, 1)` | A move that goes both ways, and the shimmer. |
| `--motion-dur-fast` | 150 ms | A colour, a border, a small state change. |
| `--motion-dur-base` | 220 ms | The default: an entrance, a hover. |
| `--motion-dur-slow` | 340 ms | A larger move: a panel, a card that lifts. |
| `--motion-dur-slower` | 450 ms | The longest one: a page, a bar that grows. |
| `--motion-stagger` | 60 ms | The pause between two items of a group. |
| `--motion-rise` | 10 px | How far an element travels when it enters. |

The same values live in `lib/motion.ts` for the client code. `tests/motion.test.ts`
keeps the two copies in step.

## The rules

These are the rules that make the motion consistent. They are enforced by
`tests/motion.test.ts`.

1. **Only `transform` and `opacity` move.** No width, height, margin or
   padding is ever animated. A layout never shifts because of an animation,
   and the reader never loses their place.
2. **Every rule sits inside `@media (prefers-reduced-motion: no-preference)`.**
   A reader who asked for less motion gets the same page, still and complete.
   The `MOTION_INIT_SCRIPT` in `lib/motion.ts` sets `data-motion="off"` on
   `<html>` for them, and the CSS needs both that attribute and
   `data-reveal-ready` before it hides anything at all.
3. **The first paint is never blank.** The observer settles the elements that
   are already on screen *before* the stylesheet is allowed to hide the ones
   that are still waiting. The largest contentful paint is never hidden.
4. **One observer for the whole page.** `components/motion/MotionObserver.tsx`
   holds a single `IntersectionObserver` and writes `data-revealed` straight
   to the DOM. React never re-renders, so a scroll costs no reconciliation.
5. **A revealed element is never seen again.** It is unobserved as soon as it
   settles.
6. **The reveal adds no markup.** `components/motion/reveal.ts` returns
   attributes and a style for the element the caller already renders. No
   element is wrapped, so no grid or flex layout changes.
7. **A stagger stops.** The index of an item is capped, so a list of forty
   rows does not leave its tail waiting for seconds.
8. **The first page of a visit is not animated.** A reader who opens a link
   from somewhere else sees the page at once.

## How an element settles

```tsx
import { reveal } from "@/components/motion/reveal";

// One element.
<div {...reveal("up")} />

// One element of a group: each takes its turn.
<li {...reveal("up", index)} />

// A grid whose items take their turn, with no style on any item.
<div data-stagger>
  <article data-reveal="scale">…</article>
</div>
```

The variants are `up` (the default), `fade`, `scale`, `pop`, `left` and
`right`. `fade` moves nothing at all: a table row must not get a transform,
because a transform on a `<tr>` breaks the table layout in some browsers.

## The module-by-module checklist

Every row is a promise. A tick means the module does that thing today.

### The shell (every page)

- [x] The page transition: the new page arrives 10 px up and the old one
      fades out (`components/motion/PageTransition.tsx`).
- [x] The header, the footer and the content of the page settle as they
      reach the viewport.
- [x] The top nav underline grows from the left instead of blinking.
- [x] The active row of a sidebar settles its colour and its accent rule.
- [x] The drawer arrives, and its links take their turn.
- [x] The search dialog arrives with a spring, and its backdrop fades.
- [x] The back-to-top button arrives from below.
- [x] Every button presses: it goes down a pixel and comes back.

### Home (`/`)

- [x] The hero settles in reading order: eyebrow, title, lede, buttons.
- [x] The "why this guide" items stagger in.
- [x] The two course lists stagger in, and each row lifts on hover.
- [x] The four numbers of the stats row settle one after the other.

### Contents (`/contents/`)

- [x] Every row of the index settles, in one run for the groups and the
      modules.
- [x] Each row lifts on hover, and its marker turns as it opens.
- [x] The body of an opened row fades in.

### Dashboard (`/dashboard/`)

- [x] The header, the "pages read" block and the "continue reading" card
      settle in turn.
- [x] Each progress bar grows from the left when the page opens, and follows
      its value when the reader marks a page as read.
- [x] The module rows, the bookmarks and the pages read settle in turn and
      lift on hover.

### Interview (`/interview/`)

- [x] The three cards settle in turn and lift on hover.

### Tutorial pages (34 parts, 7 groups)

- [x] Each `##` section heading settles as the reader reaches it.
- [x] A callout, a card grid, an info card, a code block and a table settle
      as they reach the viewport.
- [x] The rows of a table fade in one after the other.
- [x] The sources settle, and each row fades in.
- [x] The previous/next cards lift on hover.
- [x] A `<details>` box fades its body in as it opens.

### Linux (home and 12 stage pages)

- [x] The header and the twelve stage blocks of the home settle in turn.
- [x] The command chips of a stage fade in one after the other.
- [x] Each card of a command sheet settles, scaled a little, and the sheet
      staggers its cards.
- [x] The active row of the stage list settles its colour.

### Fundamentals (home and 11 chapters)

- [x] The header and the eleven chapter blocks of the home settle in turn.
- [x] Each `##` section heading of a chapter settles as the reader reaches
      it.
- [x] The active row of the chapter list settles its colour.

### The flat modules (14 modules)

Architecture, System Design, Course, k6, AI Engineering, AI Harnesses,
AI Skills, AI Concepts, Agent Memory, How AI Agents Work, AI/ML Testing,
DevOps & Cloud, Security Testing and SDET Roadmap.

- [x] The header of the module home settles.
- [x] Each row of the item list settles in turn, and lifts on hover.
- [x] Each part heading settles.
- [x] Each `##` section heading of a topic page settles as the reader
      reaches it.
- [x] A callout, a card grid, an info card, a code block and a table of a
      topic page settle as they reach the viewport.
- [x] The active row of the item list settles its colour.

### The reels of a topic page

- [x] The posters settle in turn, and the play button scales on hover.

### The voices of a section

- [x] A panel the reader selects fades in (the rule that was already there).
- [x] The panel that a switch brings back settles what it shows.

## The acceptance criteria for each module

A module is accepted when every one of these is true. They are checked by
`tests/motion.test.ts`, by the browser, and by the eye.

### 1. The shell

- [ ] A reader follows a link: the new page arrives 10 px up and fades in.
      The first page of a visit does not animate.
- [ ] The header, the footer and the sources settle as they reach the
      viewport.
- [ ] The drawer opens with a fade and its links take their turn.
- [ ] The search dialog opens with a spring and closes without a flash.
- [ ] A button presses and comes back.
- [ ] No animation moves anything but `transform` and `opacity`.

### 2. Home

- [ ] The hero settles in reading order, with no flicker.
- [ ] The "why" items and the course rows stagger.
- [ ] Nothing is invisible in the viewport at any moment.

### 3. Contents

- [ ] Every row of the index settles, in order, as it is scrolled to.
- [ ] A row lifts on hover and its marker turns as it opens.
- [ ] An opened row shows its pages, faded in.

### 4. Dashboard

- [ ] Each bar grows from the left when the page opens.
- [ ] The bar of a module follows the value when the reader marks a page as
      read.
- [ ] The rows settle in turn and lift on hover.
- [ ] The numbers are the same before and after the animation.

### 5. Interview

- [ ] The three cards settle in turn and lift on hover.
- [ ] The card is still readable while it moves.

### 6. Tutorial pages

- [ ] Each `##` heading settles as the reader reaches it.
- [ ] The heading keeps its anchor: the link of "On this page" still jumps
      to it, and the URL still shows it.
- [ ] "One section at a time" still hides the other sections, and the
      section that comes back settles.
- [ ] A table fades its rows in, and a row never breaks the table layout.
- [ ] The text of a page is fully readable with JavaScript turned off.

### 7. Linux

- [ ] The twelve stage blocks of the home settle in turn.
- [ ] The cards of a command sheet settle, and the sheet staggers them.
- [ ] A command chip still jumps to its card, and the card that it points at
      is marked.
- [ ] The active stage in the list settles its colour.

### 8. Fundamentals

- [ ] The eleven chapter blocks of the home settle in turn.
- [ ] The version switch still swaps the text, and the text that comes back
      settles.
- [ ] The active chapter in the list settles its colour.

### 9. The flat modules

- [ ] The rows of the item list settle in turn.
- [ ] Each part heading settles.
- [ ] Each `##` heading of a topic page settles as the reader reaches it.
- [ ] A topic page keeps its anchor, its prev/next links, its sources and
      its reels.
- [ ] The active item in the list settles its colour.

### 10. The reels

- [ ] The posters settle in turn.
- [ ] A poster still plays when it is pressed, and only one plays at a time.

### 11. The voices

- [ ] A panel the reader selects fades in.
- [ ] The switcher still moves with the arrow keys, and only the selected
      button is in the tab order.

### 12. Every module together

- [ ] A reader who asks for reduced motion gets a still page: the same
      content, the same links, nothing that moves and nothing that fades.
- [ ] With JavaScript turned off, every page is complete and readable.
- [ ] The largest contentful paint is never hidden: the page is painted
      complete before anything is allowed to hide.
- [ ] A reader who jumps to the end of a page does not leave content hidden
      above them.
- [ ] A reader who switches the voice, opens a `<details>` box or moves to
      the next section sees the content that comes back.
- [ ] Nothing animates a width, a height, a margin or a padding, so no
      animation shifts the layout.
- [ ] One observer serves the whole page, and a scroll costs no React
      re-render.

## How to add motion to something new

1. Reach for `reveal()` from `components/motion/reveal.ts` and nothing else.
   It adds attributes, not markup.
2. For a group, put `data-stagger` on the container and `data-reveal` on the
   items. The CSS gives each item its turn.
3. For a state change (a drawer, a dialog, a toggle), write a CSS rule in
   the motion layer of `app/globals.css`, inside a
   `@media (prefers-reduced-motion: no-preference)` block, and move only
   `transform` and `opacity`.
4. Add a line to `tests/motion.test.ts` if the rule is one the site must
   never lose.

Never add a duration or a curve of your own. The four durations and the
three curves are the whole vocabulary.
