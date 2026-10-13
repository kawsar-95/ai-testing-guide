import type { StorageLike } from "@/lib/prep/store";

/** `window.localStorage`, or `null` if access to it throws (for example in private mode). */
export function getBrowserStorage(): StorageLike | null {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

type Subscribable = {
  subscribe(listener: () => void): () => void;
  refresh(): void;
};

/**
 * Make the `subscribe` function for `useSyncExternalStore`. Call it once at module level,
 * so the function keeps one identity. `getStore` returns the lazy store.
 * A `storage` event of `localStorage` for `key` (or a clear) makes the store read storage again.
 */
export function createSubscribe(
  getStore: () => Subscribable,
  key: string,
): (listener: () => void) => () => void {
  return (listener) => {
    const store = getStore();
    const unsubscribe = store.subscribe(listener);
    const onStorage = (event: StorageEvent) => {
      if (event.storageArea !== window.localStorage) return;
      if (event.key === null || event.key === key) store.refresh();
    };
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener("storage", onStorage);
      unsubscribe();
    };
  };
}
