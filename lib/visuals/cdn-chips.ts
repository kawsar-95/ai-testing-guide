import type { Chip } from "./chips.ts";
import { DEFAULT_MODE, LAST_STEP, sceneFor } from "./cdn.ts";
import type { Mode } from "./cdn.ts";

/**
 * The live numbers of each step, from the same scene that the stage draws.
 * `live` is the toggle of the last step ("hit" or "miss"). Other steps ignore it.
 */
export function cdnChips(step: number, live: unknown): readonly Chip[] {
  const mode: Mode = live === "miss" || live === "hit" ? live : DEFAULT_MODE;
  const scene = sceneFor(step, step === LAST_STEP ? mode : DEFAULT_MODE);
  return [
    { label: { en: "Distance", bn: "দূরত্ব" }, value: `${scene.km} km` },
    { label: { en: "Time", bn: "সময়" }, value: `${scene.ms} ms` },
    { label: { en: "Origin requests", bn: "origin-এ request" }, value: String(scene.originRequests) },
  ];
}
