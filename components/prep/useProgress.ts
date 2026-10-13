"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";
import { createProgressStore } from "@/lib/prep/store";
import { STORAGE_KEY } from "@/lib/prep/progress";
import type { StorageLike } from "@/lib/prep/store";

type ProgressStore = ReturnType<typeof createProgressStore>;

const EMPTY: readonly string[] = [];

let store: ProgressStore | null = null;

/** One lazy store for the page. `window.localStorage` can throw (private mode), then the store keeps memory only. */
function getStore(): ProgressStore {
  if (!store) {
    let storage: StorageLike | null = null;
    try {
      storage = window.localStorage;
    } catch {
      storage = null;
    }
    store = createProgressStore(storage);
  }
  return store;
}

function subscribe(listener: () => void): () => void {
  const current = getStore();
  const unsubscribe = current.subscribe(listener);
  const onStorage = (event: StorageEvent) => {
    if (event.key === null || event.key === STORAGE_KEY) current.refresh();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener("storage", onStorage);
    unsubscribe();
  };
}

const getSnapshot = () => getStore().getSnapshot();
const getServerSnapshot = () => EMPTY;

export function useProgress(): {
  done: readonly string[];
  toggle(id: string): void;
  markDone(id: string): void;
} {
  const done = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const toggle = useCallback((id: string) => getStore().toggle(id), []);
  const markDone = useCallback((id: string) => getStore().markDone(id), []);
  return useMemo(() => ({ done, toggle, markDone }), [done, toggle, markDone]);
}
