import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  MOTION_ATTR,
  MOTION_DURATION,
  MOTION_EASE,
  MOTION_INIT_SCRIPT,
  MOTION_STAGGER_MAX,
  MOTION_STAGGER_MS,
  REVEAL_READY_ATTR,
  staggerDelay,
} from "../lib/motion.ts";

const CSS = readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
const source = (path: string) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

/**
 * The same curve written in two places: lib/motion.ts (for the client) and
 * app/globals.css (for the stylesheet). They differ only in spacing, so the
 * test compares them with every space taken out.
 */
function curve(value: string): string {
  return value.replace(/\s+/g, "");
}

// The reference site (https://designed-to-scale.vercel.app/) is the source of
// the vocabulary: one decelerating curve, one overshoot curve, one symmetric
// curve, and motion that never runs longer than 450 ms.

test("the three curves are the ones of the reference site", () => {
  assert.equal(MOTION_EASE.out, "cubic-bezier(.2,.7,.2,1)");
  assert.equal(MOTION_EASE.spring, "cubic-bezier(.34,1.56,.64,1)");
  assert.equal(MOTION_EASE.inout, "cubic-bezier(.65,0,.35,1)");
});

test("the durations are short: the longest one is 450 ms", () => {
  assert.equal(MOTION_DURATION.fast, 150);
  assert.equal(MOTION_DURATION.base, 220);
  assert.equal(MOTION_DURATION.slow, 340);
  assert.equal(MOTION_DURATION.slower, 450);
  assert.ok(MOTION_DURATION.slower <= 450);
});

test("the stagger delay grows with the index and stops at the cap", () => {
  assert.equal(staggerDelay(0), 0);
  assert.equal(staggerDelay(1), MOTION_STAGGER_MS);
  assert.equal(staggerDelay(3), 3 * MOTION_STAGGER_MS);
  // A long list does not leave its tail waiting for seconds.
  assert.equal(staggerDelay(MOTION_STAGGER_MAX), MOTION_STAGGER_MAX * MOTION_STAGGER_MS);
  assert.equal(staggerDelay(99), MOTION_STAGGER_MAX * MOTION_STAGGER_MS);
  // A negative index is treated as the first one.
  assert.equal(staggerDelay(-5), 0);
});

test("the init script sets data-motion before the first paint", () => {
  assert.ok(MOTION_INIT_SCRIPT.includes(MOTION_ATTR));
  assert.ok(MOTION_INIT_SCRIPT.includes("prefers-reduced-motion: reduce"));
  // It listens for a change of the reader's setting, not only the first load.
  assert.ok(MOTION_INIT_SCRIPT.includes('addEventListener("change"'));
});

test("the init script survives a browser without matchMedia", () => {
  // The script wraps everything in a try/catch, so a throw leaves the page
  // still rather than breaking the head.
  assert.match(MOTION_INIT_SCRIPT, /try\{/);
  assert.match(MOTION_INIT_SCRIPT, /catch\(e\)\{/);
});

test("the CSS has the motion tokens, and they match lib/motion.ts", () => {
  const css = curve(CSS);
  for (const value of Object.values(MOTION_EASE)) {
    assert.ok(css.includes(curve(value)), `${value} is missing from app/globals.css`);
  }
  for (const [name, ms] of Object.entries(MOTION_DURATION)) {
    const token = `--motion-dur-${name}`;
    assert.ok(CSS.includes(`${token}: ${ms}ms`), `${token} is missing from app/globals.css`);
  }
  assert.ok(CSS.includes(`--motion-stagger: ${MOTION_STAGGER_MS}ms`));
});

test("every motion rule respects prefers-reduced-motion", () => {
  // The reveal block, the page transition, the details, the shimmer, the
  // micro-interactions and the progress bar all sit inside a
  // prefers-reduced-motion: no-preference block, so a reader who asked for
  // less motion gets a still page.
  const blocks = CSS.match(/@media \(prefers-reduced-motion: no-preference\)\s*\{/g) ?? [];
  assert.ok(blocks.length >= 4, `only ${blocks.length} no-preference blocks`);
  assert.ok(CSS.includes("@media (prefers-reduced-motion: reduce)"));
});

test("the reveal hides an element only after the observer has booted", () => {
  // The rule needs both the motion attribute and data-reveal-ready. Without
  // the second one the page is painted complete, so the first paint and the
  // largest contentful paint are never blank.
  assert.ok(CSS.includes(`html[data-motion="on"][data-reveal-ready] [data-reveal]`));
  assert.ok(CSS.includes(REVEAL_READY_ATTR));
});

test("no animation moves a width, a height, a margin or a padding", () => {
  // Only transform and opacity move, so an animation never shifts the layout
  // of the page around it.
  const animated = CSS.match(/@keyframes\s+[\w-]+\s*\{[^}]*\}/g) ?? [];
  const layout = ["width", "height", "margin", "padding", "top", "left", "right", "bottom"];
  for (const block of animated) {
    for (const property of layout) {
      assert.ok(
        !new RegExp(`(^|[;{\\s])${property}\\s*:`).test(block),
        `${property} animates in ${block.slice(0, 60)}`,
      );
    }
  }
});

test("the observer is one observer for the whole page", () => {
  const observer = source("components/motion/MotionObserver.tsx");
  const observers = observer.match(/new IntersectionObserver\(/g) ?? [];
  assert.equal(observers.length, 1, "the site must use one IntersectionObserver");
  // It writes to the DOM, so a scroll costs no React reconciliation.
  assert.ok(observer.includes('setAttribute("data-revealed"'));
  // An element that has been revealed is never seen again.
  assert.ok(observer.includes("observer.unobserve(target)"));
});

test("the observer reveals what is on screen before it hides anything", () => {
  const observer = source("components/motion/MotionObserver.tsx");
  const settle = observer.indexOf("settleVisible()");
  const ready = observer.indexOf(`setAttribute(REVEAL_READY_ATTR`);
  assert.ok(settle !== -1 && ready !== -1);
  assert.ok(settle < ready, "the visible elements must settle before the CSS may hide the rest");
});

test("the observer follows the reader who scrolls to the end of a page", () => {
  // A reader who jumps to the bottom passes over the content in between. The
  // observer settles whatever is above the fold as well, so nothing stays
  // hidden for good.
  const observer = source("components/motion/MotionObserver.tsx");
  assert.ok(observer.includes('addEventListener("scroll"'));
  assert.ok(observer.includes("box.bottom < 0"));
});

test("the observer settles content that a panel hides and shows again", () => {
  // One section at a time, the voice switcher and a <details> box each hide
  // content, and each one must settle it when the reader brings it back.
  const observer = source("components/motion/MotionObserver.tsx");
  for (const attribute of ["data-sec-hidden", "data-voice", "open"]) {
    assert.ok(observer.includes(`"${attribute}"`), `${attribute} is not watched`);
  }
});

test("the page transition does not animate the first page of a visit", () => {
  const transition = source("components/motion/PageTransition.tsx");
  assert.ok(transition.includes("first.current"));
  assert.ok(transition.includes("first.current = false"));
  // It plays again on every later navigation.
  assert.ok(transition.includes("data-page-enter"));
});

test("the reveal helper adds no markup of its own", () => {
  const reveal = source("components/motion/reveal.ts");
  // It returns attributes and a style, so the element the caller renders
  // stays the element: no grid or flex layout changes.
  assert.ok(reveal.includes('"data-reveal"'));
  assert.ok(reveal.includes('"--i"'));
  assert.ok(!reveal.includes("createElement"));
  assert.ok(!reveal.includes("<div"));
});

test("every module page carries the reveal", () => {
  // The home page, the contents page, the dashboard, the interview page and
  // the two module homes all settle their content.
  for (const page of [
    "components/pages/HomePage.tsx",
    "components/pages/ContentsPage.tsx",
    "components/pages/DashboardPage.tsx",
    "components/pages/InterviewPage.tsx",
    "components/pages/LinuxHome.tsx",
    "components/pages/FundamentalsHome.tsx",
    "components/modules/FlatModuleHome.tsx",
  ]) {
    assert.ok(source(page).includes("reveal("), `${page} has no reveal`);
  }
});

test("the MDX content of every page settles its section headings", () => {
  // The `##` heading of a section is registered for the MDX components, so
  // all 320 content pages settle their sections without a change to a
  // single MDX file.
  const mdx = source("mdx-components.tsx");
  assert.ok(mdx.includes("h2: Heading2"));
  assert.ok(mdx.includes("data-reveal"));
});

test("the shell settles its own parts", () => {
  // The header, the footer and the sources of a page.
  assert.ok(source("components/layout/SiteFooter.tsx").includes("data-reveal"));
  assert.ok(source("components/content/Sources.tsx").includes("reveal("));
});

test("the drawer and the search dialog arrive with a spring", () => {
  assert.ok(CSS.includes(".dialog-in"));
  assert.ok(CSS.includes(".backdrop-in"));
  assert.ok(CSS.includes(".drawer-stagger"));
  // The drawer plays its animation every time it opens.
  assert.ok(source("components/layout/MobileNav.tsx").includes('data-open={open ? "true" : "false"}'));
});

test("the progress bar grows without a layout", () => {
  // The fill is a rect that scales from the left: no width animates.
  assert.ok(CSS.includes(".progress-fill"));
  assert.ok(CSS.includes("transform: scaleX(var(--fill, 0))"));
  const bar = source("components/prep/ProgressBar.tsx");
  assert.ok(bar.includes("progress-fill"));
  assert.ok(bar.includes("--fill"));
});

test("a button tells the reader that the click landed", () => {
  assert.ok(CSS.includes(".btn:active"));
  // And a reader who asked for less motion gets no press at all.
  assert.match(CSS, /\.btn,\s*\.btn:hover,\s*\.btn:active\s*\{\s*transform: none;/);
});

test("the nav underline grows instead of blinking", () => {
  assert.ok(CSS.includes(".nav-underline"));
  assert.ok(CSS.includes("transform: scaleX(0)"));
});

test("the active row of a sidebar settles its colour", () => {
  assert.ok(CSS.includes(".rail-active"));
  for (const list of [
    "components/layout/SidebarList.tsx",
    "components/linux/LinuxSidebarList.tsx",
    "components/fundamentals/FundamentalsSidebarList.tsx",
    "components/modules/FlatSidebarList.tsx",
    "components/navigation/SectionNav.tsx",
  ]) {
    assert.ok(source(list).includes("rail-active"), `${list} has no rail-active`);
  }
});

test("print shows every reveal block: nothing stays transparent on paper", () => {
  // Print never scrolls, so the observer never reveals the blocks below the first screen.
  const print = CSS.slice(CSS.lastIndexOf("@media print"));
  assert.match(print, /\[data-reveal\][^{]*\{[^}]*opacity:\s*1\s*!important/);
  assert.match(print, /transform:\s*none\s*!important/);
});
