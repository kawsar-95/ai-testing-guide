"use client";

import { useSyncExternalStore } from "react";
import { FUNDAMENTALS_UI } from "@/lib/fundamentals/ui";
import {
  DEFAULT_VERSION,
  VERSION_ATTRIBUTE,
  VERSION_EVENT,
  VERSION_STORAGE_KEY,
  resolveVersion,
} from "@/lib/fundamentals/version";
import type { Version } from "@/lib/fundamentals/version";

const OPTIONS: readonly { value: Version; label: string }[] = [
  { value: "notes", label: FUNDAMENTALS_UI.versionNotes },
  { value: "istqb", label: FUNDAMENTALS_UI.versionIstqb },
];

function subscribe(listener: () => void): () => void {
  // A change in another tab arrives as a `storage` event. Show it here too.
  const onStorage = (event: StorageEvent) => {
    if (event.key !== VERSION_STORAGE_KEY) return;
    document.documentElement.setAttribute(VERSION_ATTRIBUTE, resolveVersion(event.newValue));
    listener();
  };
  window.addEventListener(VERSION_EVENT, listener);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(VERSION_EVENT, listener);
    window.removeEventListener("storage", onStorage);
  };
}

/** The init script in <head> sets the attribute before the first paint. */
function getSnapshot(): Version {
  return resolveVersion(document.documentElement.getAttribute(VERSION_ATTRIBUTE));
}

function getServerSnapshot(): Version {
  return DEFAULT_VERSION;
}

/** Shows the version at once. The save can fail (blocked storage): the choice then lasts until the page reloads. */
function setVersion(version: Version) {
  document.documentElement.setAttribute(VERSION_ATTRIBUTE, version);
  try {
    localStorage.setItem(VERSION_STORAGE_KEY, version);
  } catch {
    // Storage is blocked. The attribute alone keeps the choice on this page.
  }
  window.dispatchEvent(new Event(VERSION_EVENT));
}

/** Two buttons that select the version of the text: the owner's notes or the ISTQB text. */
export function VersionSwitch() {
  const current = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return (
    <div
      role="group"
      aria-label={FUNDAMENTALS_UI.versionSwitchLabel}
      className="inline-flex rounded-md border border-border bg-bg-raised p-0.5"
    >
      {OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-pressed={current === option.value}
          onClick={() => setVersion(option.value)}
          className={
            "rounded px-3 py-1.5 font-mono text-[12px] uppercase tracking-[0.12em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent " +
            (current === option.value
              ? "bg-bg-raised-2 text-text shadow-[inset_0_-2px_0_var(--accent)]"
              : "text-text-dim hover:text-accent")
          }
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
