/**
 * The motion tokens of the site: the easings, the durations, the stagger step,
 * and the distance an element travels when it enters.
 *
 * The vocabulary comes from the owner's reference site
 * (https://designed-to-scale.vercel.app/): one decelerating curve for almost
 * everything, one overshoot curve for the moments that pop, and one symmetric
 * curve for the two-sided moves. The durations are short on purpose: the
 * reference never runs longer than 450 ms.
 *
 * These are plain values, so `node --test` can load this file (tests/motion.test.ts).
 */

/** The three curves of the site. */
export const MOTION_EASE = {
  /** The default: a decelerating curve. Almost every entrance and hover uses it. */
  out: "cubic-bezier(.2,.7,.2,1)",
  /** The overshoot: a curve that goes a little past the end and comes back. */
  spring: "cubic-bezier(.34,1.56,.64,1)",
  /** The symmetric one: for a move that goes both ways, like a drawer. */
  inout: "cubic-bezier(.65,0,.35,1)",
} as const;

/** The durations of the site, in milliseconds. */
export const MOTION_DURATION = {
  /** A colour, a border, a small state change. */
  fast: 150,
  /** The default: an entrance, a hover, a drawer. */
  base: 220,
  /** A larger move: a panel, a card that lifts. */
  slow: 340,
  /** The longest one: a page, a chart that grows. */
  slower: 450,
} as const;

/** The pause between two items of a staggered group, in milliseconds. */
export const MOTION_STAGGER_MS = 60;

/** The largest step of a stagger, so a long list does not wait for its tail. */
export const MOTION_STAGGER_MAX = 8;

/** How far an element travels when it enters, in pixels. */
export const MOTION_RISE_PX = 10;

/** The attribute on <html> that says whether the reader wants motion. */
export const MOTION_ATTR = "data-motion";

/** The attribute on <html> that says the observer has booted. */
export const REVEAL_READY_ATTR = "data-reveal-ready";

/**
 * The delay of the item at `index` of a staggered group. The delay grows with
 * the index and stops at MOTION_STAGGER_MAX, so a list of 40 items does not
 * leave its last row waiting for six seconds.
 */
export function staggerDelay(index: number, step: number = MOTION_STAGGER_MS): number {
  const capped = Math.min(Math.max(index, 0), MOTION_STAGGER_MAX);
  return capped * step;
}

/**
 * Runs in <head> before the first paint and sets data-motion on <html>.
 *
 * "on" means the reader wants motion. "off" means the reader asked for
 * reduced motion, or the browser has no CSS animation support at all: the CSS
 * reads this attribute, so the page is still and complete either way.
 */
export const MOTION_INIT_SCRIPT = `(function(){try{var d=document.documentElement;var m=window.matchMedia("(prefers-reduced-motion: reduce)");function apply(){d.setAttribute(${JSON.stringify(
  MOTION_ATTR,
)},m.matches?"off":"on")}apply();if(m.addEventListener)m.addEventListener("change",apply)}catch(e){d.setAttribute(${JSON.stringify(
  MOTION_ATTR,
)},"off")}})()`;
