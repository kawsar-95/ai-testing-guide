"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";
import { DEFAULT_PREFS, PREFS_KEY, createPrefsStore } from "@/lib/prep/prefs";
import type { Prefs } from "@/lib/prep/prefs";
import { createSubscribe, getBrowserStorage } from "./browser-store";

type PrefsStore = ReturnType<typeof createPrefsStore>;

let store: PrefsStore | null = null;

/** One lazy store for the page. */
function getStore(): PrefsStore {
  if (!store) store = createPrefsStore(getBrowserStorage());
  return store;
}

const subscribe = createSubscribe(getStore, PREFS_KEY);
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
