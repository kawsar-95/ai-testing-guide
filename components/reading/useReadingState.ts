"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";
import { createSubscribe, getBrowserStorage } from "@/components/prep/browser-store";
import { createUseProgress } from "@/components/prep/useProgress";
import { createStorageStore } from "@/lib/prep/store";
import { BOOKMARKS_KEY, LAST_PAGE_KEY, PAGE_READ_KEY } from "@/lib/reading-state";

/** The routes that the reader marked as read. */
export const usePageRead = createUseProgress(PAGE_READ_KEY);

/** The routes that the reader bookmarked. */
export const useBookmarks = createUseProgress(BOOKMARKS_KEY);

type LastPageStore = ReturnType<typeof createStorageStore<string | null>>;
let lastPageStore: LastPageStore | null = null;

/** One lazy store for `last-page`. An empty string means no page. */
function getLastPageStore(): LastPageStore {
  if (!lastPageStore) {
    lastPageStore = createStorageStore<string | null>(getBrowserStorage(), {
      key: LAST_PAGE_KEY,
      parse: (raw) => (raw ? raw : null),
      serialize: (value) => value ?? "",
      equals: (a, b) => a === b,
    });
  }
  return lastPageStore;
}

const subscribeLastPage = createSubscribe(getLastPageStore, LAST_PAGE_KEY);
const getLastPage = () => getLastPageStore().getSnapshot();
const getServerLastPage = () => null;

/** The last content page that the reader opened, for "Continue reading". */
export function useLastPage(): { last: string | null; setLast(route: string): void; clear(): void } {
  const last = useSyncExternalStore(subscribeLastPage, getLastPage, getServerLastPage);
  const setLast = useCallback((route: string) => getLastPageStore().write(route), []);
  const clear = useCallback(() => getLastPageStore().write(null), []);
  return useMemo(() => ({ last, setLast, clear }), [last, setLast, clear]);
}
