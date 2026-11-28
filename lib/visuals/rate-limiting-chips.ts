import type { Chip } from "./chips.ts";
import { BURST, DEFAULT_LIMIT, MAX_LIMIT, MIN_LIMIT, WINDOW_S, refillSeconds, retryAfterSeconds, runBurst, sceneFor } from "./rate-limiting.ts";

const LAST_STEP = 6;

/**
 * The live numbers of each step, from the same scene that the stage draws.
 * `live` is the limit that the slider sets (a number). Only the last step uses it, like the stage.
 */
export function rateLimitingChips(step: number, live: unknown): readonly Chip[] {
  const slider = typeof live === "number" && Number.isFinite(live) ? Math.min(MAX_LIMIT, Math.max(MIN_LIMIT, live)) : DEFAULT_LIMIT;
  const limit = step === LAST_STEP ? slider : DEFAULT_LIMIT;
  const scene = sceneFor(step, limit);
  const run = runBurst(limit);
  const tokens: Chip = { label: { en: "Tokens", bn: "টোকেন" }, value: `${scene.tokens} / ${scene.limit}` };
  if (step === 0) return [tokens, { label: { en: "Window", bn: "window" }, value: `${WINDOW_S / 60} min` }];
  if (step === 1) return [tokens, { label: { en: "Burst", bn: "burst" }, value: String(BURST) }];
  if (step === 2) return [tokens, { label: { en: "Passed", bn: "pass" }, value: `${run.passed} / ${BURST}` }];
  if (step === 3) {
    return [tokens, { label: { en: "429 answers", bn: "429 উত্তর" }, value: `${run.rejected} / ${BURST}` }, { label: { en: "Retry-After", bn: "Retry-After" }, value: `${retryAfterSeconds(limit)} s` }];
  }
  if (step === 4 || step === 5) return [tokens, { label: { en: "Waited", bn: "অপেক্ষা" }, value: `${scene.waited} s` }];
  return [
    { label: { en: "Passed", bn: "pass" }, value: `${run.passed} / ${BURST}` },
    { label: { en: "429 answers", bn: "429 উত্তর" }, value: `${run.rejected} / ${BURST}` },
    { label: { en: "One token every", bn: "একটি টোকেন ফেরে প্রতি" }, value: `${refillSeconds(limit)} s` },
  ];
}
