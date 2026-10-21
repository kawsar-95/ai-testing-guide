"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";
import { createProgressStore } from "@/lib/prep/store";
import { createSubscribe, getBrowserStorage } from "./browser-store";

type ProgressStore = ReturnType<typeof createProgressStore>;

const EMPTY: readonly string[] = [];

type UseProgress = () => {
  done: readonly string[];
  toggle(id: string): void;
  markDone(id: string): void;
  clear(): void;
};

type Source = {
  subscribe(listener: () => void): () => void;
  getSnapshot(): readonly string[];
  toggle(id: string): void;
  markDone(id: string): void;
  clear(): void;
};

/** The one hook body. Every progress hook calls the same hooks in the same order. */
function hookOf(source: Source): UseProgress {
  const getServerSnapshot = () => EMPTY;
  return function useProgress() {
    const done = useSyncExternalStore(source.subscribe, source.getSnapshot, getServerSnapshot);
    const toggle = useCallback((id: string) => source.toggle(id), []);
    const markDone = useCallback((id: string) => source.markDone(id), []);
    const clear = useCallback(() => source.clear(), []);
    return useMemo(() => ({ done, toggle, markDone, clear }), [done, toggle, markDone, clear]);
  };
}

/**
 * Make a progress hook for one localStorage key.
 * Each call has its own lazy store, so two keys do not change each other.
 */
export function createUseProgress(key: string): UseProgress {
  let store: ProgressStore | null = null;

  /** One lazy store for the page. */
  function getStore(): ProgressStore {
    if (!store) store = createProgressStore(getBrowserStorage(), key);
    return store;
  }

  return hookOf({
    subscribe: createSubscribe(getStore, key),
    getSnapshot: () => getStore().getSnapshot(),
    toggle: (id) => getStore().toggle(id),
    markDone: (id) => getStore().markDone(id),
    clear: () => getStore().clear(),
  });
}

/**
 * A progress hook with no store: it subscribes to nothing and its list is
 * always empty. It calls the same hooks as a hook of createUseProgress, so a
 * component can switch between the two without a remount.
 */
export const useNoProgress: UseProgress = hookOf({
  subscribe: () => () => {},
  getSnapshot: () => EMPTY,
  toggle: () => {},
  markDone: () => {},
  clear: () => {},
});
