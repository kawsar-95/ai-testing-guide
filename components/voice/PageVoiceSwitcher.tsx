"use client";

import { useEffect, useRef, useState } from "react";
import { PAGE_VOICE_ATTR, PAGE_VOICE_STORAGE_KEY, resolvePageVoice, voiceOrder } from "@/lib/voice";
import type { Voice } from "@/lib/voice";
import { useVoiceDefault } from "./useVoiceDefault";
import { VoiceSwitcher } from "./VoiceSwitcher";

const article = () => document.querySelector("article[data-content]");

/**
 * One voice switcher for a whole page (Linux stages). The CSS hides the
 * section switchers there and shows the panel of data-voice-page on the
 * article. choice is null (follow the site default) or the saved or clicked
 * voice. If the site default changes, choice goes back to null.
 */
export function PageVoiceSwitcher() {
  const def = useVoiceDefault();
  const [choice, setChoice] = useState<Voice | null>(null);

  // Same pattern as Voices.tsx: the change from null at hydration is not a reader action.
  const [seenDef, setSeenDef] = useState(def);
  if (def !== seenDef) {
    setSeenDef(def);
    if (seenDef !== null) {
      setChoice(null);
      try {
        localStorage.removeItem(PAGE_VOICE_STORAGE_KEY);
      } catch {
        // Storage is blocked: the choice still resets for this page.
      }
    }
  }

  useEffect(() => {
    try {
      const stored = localStorage.getItem(PAGE_VOICE_STORAGE_KEY);
      // A bad value gives the fallback, which is never equal to it.
      if (stored !== null && resolvePageVoice(stored, "technical") === stored) {
        setChoice(stored as Voice);
        // Set it now, so the reveal check below sees the right panels.
        article()?.setAttribute(PAGE_VOICE_ATTR, stored);
      }
    } catch {
      // Storage is blocked: follow the site default.
    }
  }, []);

  const pending = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = article();
    if (!el) return;
    if (choice === null) el.removeAttribute(PAGE_VOICE_ATTR);
    else el.setAttribute(PAGE_VOICE_ATTR, choice);
    // Scroll after the attribute shows the panel of a revealed target.
    pending.current?.scrollIntoView();
    pending.current = null;
  }, [choice]);

  // A hash or an in-page link into a panel that the choice hides: switch to that panel.
  useEffect(() => {
    const reveal = (hash: string) => {
      let el: HTMLElement | null = null;
      try {
        el = hash.length > 1 ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
      } catch {
        return;
      }
      const panel = el?.closest("[data-panel]");
      const voice = panel?.getAttribute("data-panel") as Voice | undefined;
      if (!el || !voice || el.getClientRects().length > 0) return;
      pending.current = el;
      setChoice(voice);
    };
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
    };
  }, []);

  if (def === null) return null;

  function pick(voice: Voice) {
    setChoice(voice);
    try {
      localStorage.setItem(PAGE_VOICE_STORAGE_KEY, voice);
    } catch {
      // Storage is blocked: the voice still changes for this page.
    }
  }

  return <VoiceSwitcher value={choice ?? def} order={voiceOrder(def)} onChange={pick} />;
}
