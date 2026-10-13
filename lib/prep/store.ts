/** Small external stores for `useSyncExternalStore`. Plain TypeScript: no React and no `window`. */
import { STORAGE_KEY, parseProgress, serializeProgress, toggleDone } from "./progress.ts";

/** The part of `localStorage` that the stores use. */
export type StorageLike = {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
};

type StoreOptions<T> = {
  key: string;
  parse: (raw: string | null) => T;
  serialize: (value: T) => string;
  equals: (a: T, b: T) => boolean;
};

/**
 * A store that keeps its value in memory and mirrors it to `storage`.
 * If `storage` is `null`, or a call to it throws, the value stays in memory for the session.
 * `getSnapshot` returns the same object until the content changes.
 */
export function createStorageStore<T>(storage: StorageLike | null, options: StoreOptions<T>) {
  const { key, parse, serialize, equals } = options;
  const listeners = new Set<() => void>();
  /** True after a write failed: storage is then older than memory, so `refresh` must not use it. */
  let writeFailed = false;

  function read(): { ok: true; value: T } | { ok: false } {
    if (!storage) return { ok: false };
    try {
      return { ok: true, value: parse(storage.getItem(key)) };
    } catch {
      return { ok: false };
    }
  }

  const first = read();
  let snapshot: T = first.ok ? first.value : parse(null);

  function notify() {
    for (const listener of [...listeners]) listener();
  }

  function replace(next: T) {
    if (equals(snapshot, next)) return false;
    snapshot = next;
    notify();
    return true;
  }

  return {
    subscribe(listener: () => void): () => void {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    getSnapshot(): T {
      return snapshot;
    },
    /** Read storage again. The hook calls it on the `storage` event. */
    refresh(): void {
      if (writeFailed) return;
      const result = read();
      if (result.ok) replace(result.value);
    },
    /** Set a new value in memory, then try to save it. */
    write(next: T): void {
      if (equals(snapshot, next)) return;
      snapshot = next;
      if (storage) {
        try {
          storage.setItem(key, serialize(next));
          writeFailed = false;
        } catch {
          writeFailed = true;
        }
      }
      notify();
    },
  };
}

const sameIds = (a: readonly string[], b: readonly string[]) =>
  a.length === b.length && a.every((id, i) => id === b[i]);

export function createProgressStore(storage: StorageLike | null) {
  const store = createStorageStore<readonly string[]>(storage, {
    key: STORAGE_KEY,
    parse: parseProgress,
    serialize: serializeProgress,
    equals: sameIds,
  });
  return {
    subscribe: store.subscribe,
    getSnapshot: store.getSnapshot,
    refresh: store.refresh,
    toggle(id: string): void {
      store.write(toggleDone(store.getSnapshot(), id));
    },
    markDone(id: string): void {
      if (!store.getSnapshot().includes(id)) store.write([...store.getSnapshot(), id]);
    },
  };
}
