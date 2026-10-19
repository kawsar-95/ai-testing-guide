"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { voiceOrder } from "@/lib/voice";
import type { PanelVoice, Voice } from "@/lib/voice";
import { useVoiceDefault } from "./useVoiceDefault";
import { VoiceSwitcher } from "./VoiceSwitcher";

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
 * The body of one ## section in three voices: <Technical>, <Layman>, and
 * <Bangla>. The switcher selects the voice of this section only.
 *
 * - local is null (follow the site default) or the voice that the reader
 *   clicked. If the site default changes, local goes back to null.
 * - data-voice-user is set only if local is not null. The CSS fades a panel
 *   in only then, so the site default does not fade at hydration.
 * - Before hydration, def is null. Then the wrapper has no data-voice, and
 *   the CSS shows the panel of data-voice-default on <html>.
 * - If a hash or an in-page link points into a hidden panel, the section
 *   shows that panel and the page scrolls to the target.
 */
export function Voices({ children }: { children?: ReactNode }) {
  const def = useVoiceDefault();
  const [local, setLocal] = useState<Voice | null>(null);

  // Reset local when the default changes from one value to another. The
  // change from null at hydration is not a reader action, so local stays.
  const [seenDef, setSeenDef] = useState(def);
  if (def !== seenDef) {
    setSeenDef(def);
    if (seenDef !== null) setLocal(null);
  }

  const effective: Voice = local ?? def ?? "technical";
  const wrapper = useRef<HTMLDivElement>(null);
  const pending = useRef<HTMLElement | null>(null);
  const frame = useRef(0);

  useEffect(() => {
    const reveal = (hash: string) => {
      const root = wrapper.current;
      const el = targetOf(hash);
      if (!root || !el || !root.contains(el) || el.getClientRects().length > 0) return;
      // Act only if the panel of the target is hidden. A target in a closed
      // <details> of a visible panel stays as it is.
      const panel = el.closest("[data-panel]");
      if (!panel || !root.contains(panel) || panel.getClientRects().length > 0) return;
      pending.current = el;
      setLocal(panel.getAttribute("data-panel") as PanelVoice);
    };

    // A click covers a second click on the current hash. The hash does not
    // change, so no hashchange event fires. The capture phase runs before
    // the browser follows the link.
    const onClick = (event: MouseEvent) => {
      if (event.button !== 0 || !(event.target instanceof Element)) return;
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
  }, []);

  // Scroll to a revealed target after the render that shows its panel.
  // While def is null, the wrapper has no data-voice yet, so wait.
  useEffect(() => {
    const el = pending.current;
    if (!el || def === null) return;
    pending.current = null;
    if (el.getClientRects().length === 0) return;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => el.scrollIntoView());
  }, [local, def]);

  return (
    <div
      ref={wrapper}
      className="voices"
      data-voice={def === null ? undefined : effective}
      data-voice-user={local === null ? undefined : ""}
    >
      <VoiceSwitcher value={effective} order={voiceOrder(def ?? "technical")} onChange={setLocal} />
      {children}
    </div>
  );
}
