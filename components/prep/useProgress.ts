"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";
import { createProgressStore } from "@/lib/prep/store";
import { STORAGE_KEY } from "@/lib/prep/progress";
import { createSubscribe, getBrowserStorage } from "./browser-store";

type ProgressStore = ReturnType<typeof createProgressStore>;

const EMPTY: readonly string[] = [];

let store: ProgressStore | null = null;

/** One lazy store for the page. */
function getStore(): ProgressStore {
  if (!store) store = createProgressStore(getBrowserStorage());
  return store;
}

const subscribe = createSubscribe(getStore, STORAGE_KEY);
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
