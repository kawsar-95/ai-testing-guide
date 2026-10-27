"use client";

import { useEffect, useState } from "react";
import { PAGE_VOICE_ATTR, PAGE_VOICE_STORAGE_KEY, isVoice, voiceOrder } from "@/lib/voice";
import type { Voice } from "@/lib/voice";
import { useRevealTarget } from "./useRevealTarget";
import { useVoiceDefault } from "./useVoiceDefault";
import { VoiceSwitcher } from "./VoiceSwitcher";

const article = () => document.querySelector("article[data-content]");

/** The saved page voice, or null. The server and blocked storage give null. */
function savedVoice(): Voice | null {
  try {
    const stored = localStorage.getItem(PAGE_VOICE_STORAGE_KEY);
    return isVoice(stored) ? stored : null;
  } catch {
    return null;
  }
}

/**
 * One voice switcher for a whole page (Linux stages). The CSS hides the
 * section switchers there and shows the panel of data-voice-page on the
 * article. choice is null (follow the site default) or the saved or clicked
 * voice. If the site default changes, choice goes back to null.
 */
export function PageVoiceSwitcher() {
  const def = useVoiceDefault();
  // Read the saved voice in the first state, so the effect below applies it
  // before the reveal check of useRevealTarget runs. This component renders
  // null until def is known, so no markup depends on it.
  const [choice, setChoice] = useState<Voice | null>(savedVoice);

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
    const el = article();
    if (!el) return;
    if (choice === null) el.removeAttribute(PAGE_VOICE_ATTR);
    else el.setAttribute(PAGE_VOICE_ATTR, choice);
  }, [choice]);

  useRevealTarget(article, setChoice, choice);

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
