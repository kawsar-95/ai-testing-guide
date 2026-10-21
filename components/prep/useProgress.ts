"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";
import { createProgressStore } from "@/lib/prep/store";
import { createSubscribe, getBrowserStorage } from "./browser-store";

type ProgressStore = ReturnType<typeof createProgressStore>;

const EMPTY: readonly string[] = [];

/**
 * Make a progress hook for one localStorage key.
 * Each call has its own lazy store, so two keys do not change each other.
 */
export function createUseProgress(key: string): () => {
  done: readonly string[];
  toggle(id: string): void;
  markDone(id: string): void;
  clear(): void;
} {
  let store: ProgressStore | null = null;

  /** One lazy store for the page. */
  function getStore(): ProgressStore {
    if (!store) store = createProgressStore(getBrowserStorage(), key);
    return store;
  }

  const subscribe = createSubscribe(getStore, key);
  const getSnapshot = () => getStore().getSnapshot();
  const getServerSnapshot = () => EMPTY;

  return function useProgress() {
    const done = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    const toggle = useCallback((id: string) => getStore().toggle(id), []);
    const markDone = useCallback((id: string) => getStore().markDone(id), []);
    const clear = useCallback(() => getStore().clear(), []);
    return useMemo(() => ({ done, toggle, markDone, clear }), [done, toggle, markDone, clear]);
  };
}
