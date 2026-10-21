"use client";

import { useEffect, useState } from "react";
import type { BeforeInstallPromptEvent } from "@/lib/pwa-install";
import { installApp } from "@/lib/ui";

/**
 * The "Install" button in the header. It shows only when the browser can
 * install the site as an app (Chromium browsers). Other browsers use their
 * own menu, for example Safari's "Add to Home Screen".
 *
 * The browser can fire the event before hydration. Then the head script
 * INSTALL_CAPTURE_SCRIPT (lib/pwa-install.ts) keeps it on
 * window.__installPrompt, and this button reads it on mount.
 */
export function InstallButton() {
  const [installEvent, setInstallEvent] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const onPrompt = (event: Event) => {
      event.preventDefault();
      // The head script also keeps this event. Clear its copy, so that a
      // remount does not show a used event.
      window.__installPrompt = undefined;
      setInstallEvent(event as BeforeInstallPromptEvent);
    };
    const onInstalled = () => {
      window.__installPrompt = undefined;
      setInstallEvent(null);
    };
    const early = window.__installPrompt;
    if (early) {
      window.__installPrompt = undefined;
      setInstallEvent(early);
    }
    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  if (!installEvent) return null;

  const install = async () => {
    try {
      await installEvent.prompt();
      await installEvent.userChoice;
    } catch {
      // prompt() rejects if the event was already used. Do nothing more.
    }
    // The browser lets each event prompt one time only.
    setInstallEvent(null);
  };

  return (
    <button
      type="button"
      onClick={install}
      aria-label={installApp}
      title={installApp}
      className="grid size-9 shrink-0 place-items-center rounded-lg border border-border bg-bg-raised text-text-dim transition-colors hover:border-border-strong hover:bg-bg-raised-2 hover:text-text"
    >
      <svg viewBox="0 0 20 20" className="size-[18px]" fill="none" aria-hidden="true">
        <path
          d="M10 3v9M6.5 8.5 10 12l3.5-3.5M4 14.5v1.2c0 .7.6 1.3 1.3 1.3h9.4c.7 0 1.3-.6 1.3-1.3v-1.2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
