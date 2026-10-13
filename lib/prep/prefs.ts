/** The reader preferences: the view, auto-advance, and the level filter. */
import type { StorageLike } from "./store.ts";
import { createStorageStore } from "./store.ts";
import type { Level } from "./types.ts";

/** The localStorage key of the preferences. */
export const PREFS_KEY = "prep-prefs";

export type Prefs = {
  view: "table" | "cards";
  autoAdvance: boolean;
  level: "all" | Level;
};

export const DEFAULT_PREFS: Prefs = { view: "table", autoAdvance: false, level: "all" };

/** Read the stored text. Each bad field falls back to its default on its own. */
export function parsePrefs(raw: string | null): Prefs {
  if (!raw) return DEFAULT_PREFS;
  let value: unknown;
  try {
    value = JSON.parse(raw);
  } catch {
    return DEFAULT_PREFS;
  }
  if (typeof value !== "object" || value === null || Array.isArray(value)) return DEFAULT_PREFS;
  const record = value as Record<string, unknown>;
  return {
    view: record.view === "table" || record.view === "cards" ? record.view : DEFAULT_PREFS.view,
    autoAdvance: typeof record.autoAdvance === "boolean" ? record.autoAdvance : DEFAULT_PREFS.autoAdvance,
    level:
      record.level === "all" || record.level === "easy" || record.level === "medium" || record.level === "hard"
        ? record.level
        : DEFAULT_PREFS.level,
  };
}

export function serializePrefs(prefs: Prefs): string {
  return JSON.stringify(prefs);
}

/** `"all"` keeps every item. A level keeps only the items with that level, so an item without a level is dropped. */
export function filterByLevel<T extends { level?: Level }>(items: readonly T[], level: "all" | Level): T[] {
  return level === "all" ? [...items] : items.filter((item) => item.level === level);
}

/** True when at least one item has a level. Only then does the level filter apply. */
export function hasLevels(items: readonly { level?: Level }[]): boolean {
  return items.some((item) => item.level !== undefined);
}

/**
 * The filter of an area. An area without levels shows every item, whatever the stored level is,
 * because the level is one global preference and such an area has no control to reset it.
 */
export function applyLevelFilter<T extends { level?: Level }>(items: readonly T[], level: "all" | Level): T[] {
  return hasLevels(items) ? filterByLevel(items, level) : [...items];
}

/**
 * The level to use for a link `#<id>`. It is `"all"` when the hash names an item that `level` hides.
 * Else it is `level`. An empty or unknown hash keeps `level`.
 */
export function levelForHash(
  items: readonly { id: string; level?: Level }[],
  level: "all" | Level,
  hash: string,
): "all" | Level {
  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  if (!id || level === "all") return level;
  const item = items.find((entry) => entry.id === id);
  if (!item) return level;
  return applyLevelFilter(items, level).includes(item) ? level : "all";
}

const samePrefs = (a: Prefs, b: Prefs) =>
  a.view === b.view && a.autoAdvance === b.autoAdvance && a.level === b.level;

export function createPrefsStore(storage: StorageLike | null) {
  const store = createStorageStore<Prefs>(storage, {
    key: PREFS_KEY,
    parse: parsePrefs,
    serialize: serializePrefs,
    equals: samePrefs,
  });
  return {
    subscribe: store.subscribe,
    getSnapshot: store.getSnapshot,
    refresh: store.refresh,
    set<K extends keyof Prefs>(key: K, value: Prefs[K]): void {
      store.write({ ...store.getSnapshot(), [key]: value });
    },
  };
}
