"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { MOTION_ATTR } from "@/lib/motion";

/**
 * The page transition.
 *
 * The reader follows a link and the new page arrives a few pixels up, while
 * the old page fades out. It is a CSS animation on the content column, so it
 * costs no JavaScript per frame and never disturbs the fixed header, the
 * drawer or the reading progress bar.
 *
 * The animation is keyed on the path: the effect removes the attribute, the
 * browser forgets the old state, and the attribute comes back. That is what
 * makes the animation play again on every navigation instead of once.
 *
 * The effect is a layout effect, so it runs after the new page is in the DOM
 * but before the browser paints it. The reader sees the animation, never the
 * new page painted plain and then painted again.
 *
 * The very first page of a visit is not animated. A reader who opens a link
 * from somewhere else should see the page at once, and the largest
 * contentful paint should not wait for an animation.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const first = useRef(true);
  const content = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }

    const element = content.current;
    const html = document.documentElement;
    if (!element || html.getAttribute(MOTION_ATTR) !== "on") return;

    element.removeAttribute("data-page-enter");
    // The browser must forget the previous state before the attribute comes
    // back, or the animation does not play again.
    void element.offsetWidth;
    element.setAttribute("data-page-enter", "");

    const done = window.setTimeout(() => {
      element.removeAttribute("data-page-enter");
    }, 600);
    return () => window.clearTimeout(done);
  }, [pathname]);

  return (
    <div ref={content} className="page-enter-root">
      {children}
    </div>
  );
}
