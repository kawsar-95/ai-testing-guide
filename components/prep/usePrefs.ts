"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";
import { DEFAULT_PREFS, PREFS_KEY, createPrefsStore } from "@/lib/prep/prefs";
import type { Prefs } from "@/lib/prep/prefs";
import type { StorageLike } from "@/lib/prep/store";

type PrefsStore = ReturnType<typeof createPrefsStore>;

let store: PrefsStore | null = null;

/** One lazy store for the page. `window.localStorage` can throw (private mode), then the store keeps memory only. */
function getStore(): PrefsStore {
  if (!store) {
    let storage: StorageLike | null = null;
    try {
      storage = window.localStorage;
    } catch {
      storage = null;
    }
    store = createPrefsStore(storage);
  }
  return store;
}

function subscribe(listener: () => void): () => void {
  const current = getStore();
  const unsubscribe = current.subscribe(listener);
  const onStorage = (event: StorageEvent) => {
    if (event.key === null || event.key === PREFS_KEY) current.refresh();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener("storage", onStorage);
    unsubscribe();
  };
}

const getSnapshot = () => getStore().getSnapshot();
const getServerSnapshot = () => DEFAULT_PREFS;

export function usePrefs(): {
  prefs: Prefs;
  setPref<K extends keyof Prefs>(key: K, value: Prefs[K]): void;
} {
  const prefs = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const setPref = useCallback(
    <K extends keyof Prefs>(key: K, value: Prefs[K]) => getStore().set(key, value),
    [],
  );
  return useMemo(() => ({ prefs, setPref }), [prefs, setPref]);
}
