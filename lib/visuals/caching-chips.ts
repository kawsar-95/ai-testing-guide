import type { Chip } from "./chips.ts";
import { CACHE_MS, DB_MS, DEFAULT_HIT_PERCENT, MISS_MS, READS, SLIDER_STEP, averageMs, dbReads, hitPercentFor } from "./caching.ts";

export const fmt = (ms: number) => `${Number.isInteger(ms) ? ms : ms.toFixed(1)} ms`;

/** The live numbers of each step. `live` is the slider hit rate in percent (the stage reports it with onLive). */
export function cachingChips(step: number, live: unknown): readonly Chip[] {
  const slider = typeof live === "number" && Number.isFinite(live) ? live : DEFAULT_HIT_PERCENT;
  if (step === 0) return [{ label: { en: "Database read", bn: "Database read" }, value: fmt(DB_MS) }, { label: { en: "Cache read", bn: "Cache read" }, value: fmt(CACHE_MS) }];
  if (step === 1) return [{ label: { en: "Read time", bn: "Read time" }, value: fmt(CACHE_MS) }, { label: { en: "Database reads", bn: "Database read" }, value: `0 / 1` }];
  if (step === 2) return [{ label: { en: "Read time", bn: "Read time" }, value: fmt(MISS_MS) }, { label: { en: "Database reads", bn: "Database read" }, value: `1 / 1` }];
  if (step === 3) return [{ label: { en: "This read", bn: "এই read" }, value: fmt(MISS_MS) }, { label: { en: "Next read", bn: "পরের read" }, value: fmt(CACHE_MS) }];
  if (step === 5) return [{ label: { en: "Old copy", bn: "পুরোনো copy" }, value: "0 / 1" }, { label: { en: "Next read", bn: "পরের read" }, value: fmt(MISS_MS) }];
  const h = hitPercentFor(step === SLIDER_STEP ? SLIDER_STEP : 6, slider);
  return [
    { label: { en: "Hit rate", bn: "Hit rate" }, value: `${h} %` },
    { label: { en: "Average read", bn: "গড় read" }, value: fmt(averageMs(h)) },
    { label: { en: "Database reads", bn: "Database read" }, value: `${dbReads(h)} / ${READS}` },
  ];
}
