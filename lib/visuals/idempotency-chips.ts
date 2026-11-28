import type { Chip } from "./chips.ts";
import { chargeCount, sceneFor } from "./idempotency.ts";

/** The live numbers of a step, for the chosen case. `live` is the idempotency key toggle (boolean, default off). */
export function idempotencyChips(step: number, live: unknown): readonly Chip[] {
  const useKey = typeof live === "boolean" ? live : false;
  const scene = sceneFor(step, useKey);
  return [
    { label: { en: "Requests sent", bn: "পাঠানো request" }, value: String(scene.sent) },
    { label: { en: "Charges in the database", bn: "ডাটাবেসে চার্জ" }, value: String(chargeCount(scene)) },
  ];
}
