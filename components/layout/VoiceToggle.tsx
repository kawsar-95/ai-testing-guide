"use client";

import { useLayoutEffect } from "react";
import { setVoiceDefault, useVoiceDefault } from "@/components/voice/useVoiceDefault";
import { VOICE_DEFAULT_ATTR, VOICE_STORAGE_KEY, VOICE_TOGGLE_TEXT, resolveVoiceDefault } from "@/lib/voice";
import { useBn } from "@/components/i18n/useBn";
import { SHELL_BN } from "@/lib/bn/shell";
import { voiceToBangla, voiceToTechnical } from "@/lib/ui";

function readStored(): string | null {
  try {
    return localStorage.getItem(VOICE_STORAGE_KEY);
  } catch {
    return null;
  }
}

/**
 * The default-voice switch in the header. The inline script from
 * lib/voice.ts sets data-voice-default before the first paint. This button
 * changes it and saves the choice. Both spans are always in the HTML. CSS
 * shows one of them from data-voice-default, so the text is right before
 * hydration too.
 *
 * The button has no aria-pressed: its word names the voice that a click
 * selects, not the current state. Its name starts with that word (WCAG
 * 2.5.3 Label in Name).
 */
export function VoiceToggle() {
  const def = useVoiceDefault();

  // In development, React's Strict Mode remount clears data-voice-default on
  // <html>. Set it again from storage before paint. This effect does not
  // write storage. In production it changes nothing.
  useLayoutEffect(() => {
    document.documentElement.setAttribute(VOICE_DEFAULT_ATTR, resolveVoiceDefault(readStored()));
  }, []);

  const label = useBn(
    def === "bangla" ? voiceToTechnical : voiceToBangla,
    def === "bangla" ? SHELL_BN.voiceToTechnical : SHELL_BN.voiceToBangla,
  );

  return (
    <button
      type="button"
      onClick={() => setVoiceDefault(def === "bangla" ? "technical" : "bangla")}
      aria-label={label}
      title={label}
      className="grid h-9 shrink-0 place-items-center rounded-lg border border-border bg-bg-raised px-2.5 text-[13px] font-medium text-text-dim transition-colors hover:border-border-strong hover:bg-bg-raised-2 hover:text-text"
    >
      <span lang="bn" className="voice-toggle-to-bangla">
        {VOICE_TOGGLE_TEXT.technical}
      </span>
      <span className="voice-toggle-to-technical">{VOICE_TOGGLE_TEXT.bangla}</span>
    </button>
  );
}
