import type { CSSProperties } from "react";

/**
 * The variants of the reveal. Each one moves the axes it needs and nothing
 * else, so an entrance never shifts the layout around it.
 */
export type RevealVariant = "up" | "fade" | "scale" | "pop" | "left" | "right";

/** The style of one item of a staggered group: its index in the group. */
export type StaggerStyle = CSSProperties & { "--i": number };

/**
 * The index of an item in a staggered group, capped so a long list does not
 * leave its last row waiting. The CSS turns the number into a delay.
 */
export function stagger(index: number): StaggerStyle {
  return { "--i": Math.min(Math.max(index, 0), 8) } as StaggerStyle;
}

/**
 * The attributes of one element that should settle when it reaches the
 * viewport.
 *
 * The observer in components/motion/MotionObserver.tsx watches for the
 * `data-reveal` attribute and writes `data-revealed` on the element. The CSS
 * in app/globals.css does the rest, and it does nothing at all when the
 * reader has asked for reduced motion.
 *
 * The attributes go straight on the element the caller already renders, so
 * nothing is wrapped and no grid or flex layout changes.
 */
export function reveal(variant: RevealVariant = "up", index?: number): {
  "data-reveal": RevealVariant;
  style?: StaggerStyle;
} {
  return index === undefined
    ? { "data-reveal": variant }
    : { "data-reveal": variant, style: stagger(index) };
}
