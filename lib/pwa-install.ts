// The early capture of the install event. It has no server-only imports.

/** Chromium's install event. It is not in the TypeScript DOM types. */
export interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

declare global {
  interface Window {
    /** The install event that came before InstallButton hydrated. */
    __installPrompt?: BeforeInstallPromptEvent;
  }
}

/**
 * Runs in <head>. The browser can fire beforeinstallprompt before React
 * hydrates, and then InstallButton has no listener yet. This script stops
 * the mini-infobar and keeps the event on window.__installPrompt.
 * InstallButton reads it on mount (tests/pwa-install.test.ts checks it).
 */
export const INSTALL_CAPTURE_SCRIPT = `window.addEventListener("beforeinstallprompt",function(e){e.preventDefault();window.__installPrompt=e})`;
