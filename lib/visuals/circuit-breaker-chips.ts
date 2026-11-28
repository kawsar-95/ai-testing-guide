import type { Chip } from "./chips.ts";
import { CONFIG, sceneFor, type BreakerState } from "./circuit-breaker.ts";

const STATE_NAME: Record<BreakerState, string> = { closed: "Closed", open: "Open", "half-open": "Half-Open" };

/** The live numbers of each step, from the same scene that the stage draws. `live` is `broken` (boolean, default true). */
export function circuitBreakerChips(step: number, live: unknown): readonly Chip[] {
  const broken = typeof live === "boolean" ? live : true;
  const scene = sceneFor(step, broken);
  return [
    { label: { en: "Failures in a row", bn: "পরপর ফেইলিউর" }, value: `${scene.failRun} / ${CONFIG.threshold}` },
    { label: { en: "State", bn: "স্টেট" }, value: STATE_NAME[scene.state] },
    { label: { en: "Calls reaching the service", bn: "সার্ভিসে পৌঁছানো কল" }, value: String(scene.reached) },
    { label: { en: "Failed at once", bn: "সঙ্গে সঙ্গে ব্যর্থ" }, value: String(scene.rejected) },
  ];
}
