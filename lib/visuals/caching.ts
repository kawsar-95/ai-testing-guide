/**
 * The data behind the caching visual (components/visuals/CachingStage.tsx).
 *
 * Cache-aside read path: the app asks Redis first. A hit costs one cache read. A miss costs the
 * cache check plus a database read. The times are example numbers for the picture, not
 * measurements. The numbers on the chips come from running these rules (tests/visual-caching.test.ts).
 */

/** Example time of one read from the cache, in ms. */
export const CACHE_MS = 1;
/** Example time of one read from the database, in ms. */
export const DB_MS = 20;
/** A miss checks the cache first, then reads the database. */
export const MISS_MS = CACHE_MS + DB_MS;
/** The number of sample reads that the picture counts. */
export const READS = 100;
export const DEFAULT_HIT_PERCENT = 90;
/** The step where the reader moves the slider. */
export const SLIDER_STEP = 4;

export type Edge = "appRedis" | "appDb";

export type Scene = {
  /** The edges that carry a request in this step. */
  active: readonly Edge[];
  /** Does Redis hold a copy of the data? */
  cached: boolean;
};

/** Average read time in ms for a hit rate in percent (0 to 100). */
export function averageMs(hitPercent: number): number {
  const h = Math.min(100, Math.max(0, hitPercent)) / 100;
  return h * CACHE_MS + (1 - h) * MISS_MS;
}

/** How many of READS sample reads reach the database. */
export function dbReads(hitPercent: number): number {
  return Math.round(READS * (1 - Math.min(100, Math.max(0, hitPercent)) / 100));
}

/** The hit rate of a step. Only the slider step and the cold-cache step have one. */
export function hitPercentFor(step: number, slider: number): number {
  if (step === SLIDER_STEP) return slider;
  if (step === 6) return 0;
  if (step === 1) return 100;
  if (step === 2 || step === 3) return 0;
  return slider;
}

export function sceneFor(step: number): Scene {
  switch (step) {
    case 0:
      return { active: ["appRedis"], cached: false };
    case 1:
      return { active: ["appRedis"], cached: true };
    case 2:
      return { active: ["appRedis", "appDb"], cached: false };
    case 3:
      return { active: ["appRedis", "appDb"], cached: true };
    case 4:
      return { active: ["appRedis", "appDb"], cached: true };
    case 5:
      return { active: ["appRedis", "appDb"], cached: false };
    default:
      return { active: ["appRedis", "appDb"], cached: false };
  }
}
