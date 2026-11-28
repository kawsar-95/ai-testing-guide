import type { Chip } from "./chips.ts";
import { FIRST_LIVE_STEP, SERVER_COUNT, clampLoad, sceneFor } from "./horizontal-scaling.ts";

/**
 * The live numbers of each step, from the same scene that the stage draws.
 * `live` is the demand that the slider sets (a number). Only the steps with the slider use it.
 */
export function horizontalScalingChips(step: number, live: unknown): readonly Chip[] {
  const load = step >= FIRST_LIVE_STEP ? clampLoad(live) : undefined;
  const scene = sceneFor(step, load);
  const demand: Chip = { label: { en: "Demand (req/s)", bn: "Demand (req/s)" }, value: String(scene.demand) };
  const capacity: Chip = { label: { en: "Capacity (req/s)", bn: "Capacity (req/s)" }, value: String(scene.capacity) };
  const servers: Chip = { label: { en: "Servers up", bn: "চালু server" }, value: `${scene.serversUp} / ${scene.servers.length}` };
  const served: Chip = { label: { en: "Served", bn: "Served" }, value: `${Math.round(scene.served)} / ${scene.demand}` };
  const dropped: Chip = { label: { en: "Dropped (req/s)", bn: "Dropped (req/s)" }, value: String(Math.round(scene.dropped)) };
  if (step === 0) return [demand, capacity, dropped];
  if (step === 1) {
    return [servers, capacity, { label: { en: "Each gets (req/s)", bn: "প্রতিটি পায় (req/s)" }, value: String(Math.round(scene.demand / scene.serversUp)) }];
  }
  if (step === 4) {
    return [served, { label: { en: "Database limit (req/s)", bn: "Database limit (req/s)" }, value: String(scene.dbLimit ?? SERVER_COUNT) }, dropped];
  }
  return [demand, capacity, servers, dropped];
}
