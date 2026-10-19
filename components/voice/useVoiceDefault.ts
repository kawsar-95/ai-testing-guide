"use client";

import { useSyncExternalStore } from "react";
import { VOICE_DEFAULT_ATTR, VOICE_STORAGE_KEY, resolveVoiceDefault } from "@/lib/voice";
import type { VoiceDefault } from "@/lib/voice";

function apply(voice: VoiceDefault) {
  document.documentElement.setAttribute(VOICE_DEFAULT_ATTR, voice);
}

/**
 * data-voice-default on <html> is the source of truth. The observer reports
 * each change of the attribute. The storage listener copies a change that
 * another tab makes into the attribute.
 */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: [VOICE_DEFAULT_ATTR] });
  const onStorage = (event: StorageEvent) => {
    if (event.key === VOICE_STORAGE_KEY) apply(resolveVoiceDefault(event.newValue));
  };
  window.addEventListener("storage", onStorage);
  return () => {
    observer.disconnect();
    window.removeEventListener("storage", onStorage);
  };
}

function read(): VoiceDefault {
  return resolveVoiceDefault(document.documentElement.getAttribute(VOICE_DEFAULT_ATTR));
}

/** The default voice of the site. It is null on the server and during hydration. */
export function useVoiceDefault(): VoiceDefault | null {
  return useSyncExternalStore(subscribe, read, () => null);
}

/** Sets the default voice for this page, then saves it for the next visit. */
export function setVoiceDefault(next: VoiceDefault): void {
  apply(next);
  try {
    localStorage.setItem(VOICE_STORAGE_KEY, next);
  } catch {
    // Storage is blocked: the voice still changes for this page.
  }
}
