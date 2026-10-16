"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";
import { createProgressStore } from "@/lib/prep/store";
import { STORAGE_KEY } from "@/lib/prep/progress";
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
    return useMemo(() => ({ done, toggle, markDone }), [done, toggle, markDone]);
  };
}

/** The progress hook of the Interview Prep module. */
export const useProgress = createUseProgress(STORAGE_KEY);
