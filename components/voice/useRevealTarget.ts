"use client";

import { useEffect, useRef } from "react";
import type { Voice } from "@/lib/voice";

/** The element that a hash or an in-page href points to, or null. A bad hash gives null. */
function targetOf(hash: string): HTMLElement | null {
  if (!hash.startsWith("#") || hash.length < 2) return null;
  try {
    return document.getElementById(decodeURIComponent(hash.slice(1)));
  } catch {
    return null;
  }
}

/**
 * If the URL hash, or a click on an in-page # link, points to an element in
 * a hidden voice panel inside the root, call select(voice of that panel).
 * After the render with the key that select caused, the page scrolls to the
 * element.
 *
 * - A target that is visible, or in a visible panel (for example a closed
 *   <details>), changes nothing.
 * - getRoot and select are read once, on mount: they must stay valid (a ref
 *   read and a state setter).
 * - Call the hook after the effect that applies the voice to the DOM, so
 *   that the mount check sees the right panels.
 * - ready is false while the voice is not known (hydration). The scroll waits.
 */
export function useRevealTarget(
  getRoot: () => Element | null,
  select: (voice: Voice) => void,
  key: unknown,
  ready = true,
): void {
  const pending = useRef<HTMLElement | null>(null);
  const frame = useRef(0);

  useEffect(() => {
    const reveal = (hash: string) => {
      const root = getRoot();
      const el = targetOf(hash);
      if (!root || !el || !root.contains(el) || el.getClientRects().length > 0) return;
      // Act only if the panel of the target is hidden.
      const panel = el.closest("[data-panel]");
      if (!panel || !root.contains(panel) || panel.getClientRects().length > 0) return;
      pending.current = el;
      select(panel.getAttribute("data-panel") as Voice);
    };

    // A click covers a second click on the current hash. The hash does not
    // change, so no hashchange event fires. The capture phase runs before
    // the browser follows the link. A click with a modifier key opens a new
    // tab or window, so this tab stays as it is.
    const onClick = (event: MouseEvent) => {
      if (event.button !== 0 || !(event.target instanceof Element)) return;
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest('a[href^="#"]');
      if (link) reveal(link.getAttribute("href") ?? "");
    };
    const onHashChange = () => reveal(window.location.hash);

    reveal(window.location.hash);
    document.addEventListener("click", onClick, true);
    window.addEventListener("hashchange", onHashChange);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("hashchange", onHashChange);
      cancelAnimationFrame(frame.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- see "read once" above
  }, []);

  // Scroll to a revealed target after the render that shows its panel.
  useEffect(() => {
    const el = pending.current;
    if (!el || !ready) return;
    pending.current = null;
    if (el.getClientRects().length === 0) return;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => el.scrollIntoView());
  }, [key, ready]);
}
