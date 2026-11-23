"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { MOTION_ATTR, REVEAL_READY_ATTR } from "@/lib/motion";

/**
 * The one observer of the site.
 *
 * Every element that carries `data-reveal` starts a few pixels down and
 * transparent, and settles when it reaches the viewport. This component is
 * what sets `data-revealed` on it.
 *
 * Three rules keep it cheap:
 * - One IntersectionObserver for the whole page, not one per element.
 * - The observer writes the attribute straight to the DOM. React never
 *   re-renders, so a scroll costs no reconciliation.
 * - An element that has been revealed is unobserved and never seen again.
 *
 * The order of the two steps matters. The elements that are already in the
 * viewport are marked as revealed first, and only then may the CSS hide the
 * elements that are still waiting. An element above the fold therefore
 * never hides, not even for a frame, and the largest contentful paint is
 * never hidden.
 *
 * The observer is the only JavaScript in the reveal: the CSS does the rest,
 * and it does nothing at all when the reader has asked for reduced motion.
 */
export function MotionObserver() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const html = document.documentElement;

    // The reader asked for reduced motion, or the browser has no animation
    // support: the page is complete and still.
    if (html.getAttribute(MOTION_ATTR) !== "on") {
      html.removeAttribute(REVEAL_READY_ATTR);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const target = entry.target as HTMLElement;
          target.setAttribute("data-revealed", "");
          observer.unobserve(target);
        }
      },
      // The bottom margin is a little shorter than the viewport, so an
      // element has settled by the time the reader reads it. The top margin
      // is a whole viewport: an element the reader has already scrolled past
      // is above the viewport, and without this margin a jump to the bottom
      // of the page would leave the content it passed over hidden for good.
      { rootMargin: "120% 0px -12% 0px", threshold: 0.01 },
    );

    // The elements that are already on screen settle at once. They are
    // marked before the CSS is allowed to hide anything, so they never
    // blink.
    const settleVisible = () => {
      const height = window.innerHeight;
      for (const element of document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])")) {
        const box = element.getBoundingClientRect();
        if (box.top < height && box.bottom > 0) element.setAttribute("data-revealed", "");
      }
    };

    // A panel that was hidden has no box, so it must be measured again after
    // the browser has laid it out. The frame waits for that.
    const settleNextFrame = () => {
      window.requestAnimationFrame(() => {
        settleVisible();
        scan();
      });
    };

    settleVisible();

    // Only now, with the visible elements settled, may the CSS hide the
    // elements that are still waiting for the reader to scroll to them.
    // Before this the page is painted complete, so the first paint is never
    // blank and the largest contentful paint is never hidden.
    html.setAttribute(REVEAL_READY_ATTR, "");

    const scan = () => {
      const elements = document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])");
      for (const element of elements) observer.observe(element);
    };

    scan();

    // A client component can add elements after the page opened.
    const mutations = new MutationObserver(() => {
      settleVisible();
      scan();
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    // A page can hide its content in three ways, and each one must settle
    // the content it hides when the reader brings it back:
    // - One section at a time (components/content/SectionFocus.tsx) sets
    //   data-sec-hidden on the sections it hides.
    // - The voice switcher (components/voice/Voices.tsx) sets data-voice on
    //   the wrapper, and the CSS shows one panel of it.
    // - A <details> box hides its body until it is opened.
    // The attribute that changes is watched, and the content that becomes
    // visible settles at once.
    const visibility = new MutationObserver(() => {
      settleNextFrame();
    });
    visibility.observe(document.body, {
      attributes: true,
      subtree: true,
      attributeFilter: ["data-sec-hidden", "data-voice", "open"],
    });

    // A reader who jumps to the bottom of a page, with the End key or a
    // long scroll, passes over the content in between. The observer may not
    // see those elements at all, so a scroll check settles whatever is now
    // above the fold as well.
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const height = window.innerHeight;
        for (const element of document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])")) {
          const box = element.getBoundingClientRect();
          // Above the fold means the reader has passed it.
          if (box.bottom < 0) element.setAttribute("data-revealed", "");
          else if (box.top < height && box.bottom > 0) element.setAttribute("data-revealed", "");
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // The reader turns reduced motion on in the system settings.
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotionChange = () => {
      if (query.matches) {
        observer.disconnect();
        mutations.disconnect();
        html.removeAttribute(REVEAL_READY_ATTR);
        for (const element of document.querySelectorAll<HTMLElement>("[data-reveal]")) {
          element.setAttribute("data-revealed", "");
        }
      } else {
        html.setAttribute(MOTION_ATTR, "on");
      }
    };

    query.addEventListener("change", onMotionChange);

    return () => {
      query.removeEventListener("change", onMotionChange);
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      observer.disconnect();
      mutations.disconnect();
      visibility.disconnect();
    };
  }, [pathname]);

  return null;
}
