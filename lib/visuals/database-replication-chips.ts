import type { Chip } from "./chips.ts";
import { DEFAULT_TARGET, LAG_S, REPLICAS, sceneFor } from "./database-replication.ts";
import type { Target } from "./database-replication.ts";

/** Steps that have the toggle (read from the primary or a replica). */
const TOGGLE_STEPS = [3, 4];

/** The live numbers of each step. `live` is the toggle: "primary" or "replica". */
export function databaseReplicationChips(step: number, live: unknown): readonly Chip[] {
  const choice: Target = live === "primary" || live === "replica" ? live : DEFAULT_TARGET;
  const target = TOGGLE_STEPS.includes(step) ? choice : DEFAULT_TARGET;
  const scene = sceneFor(step, target);
  const total = 1 + REPLICAS;
  const copies: Chip = { label: { en: "Servers with the payment", bn: "payment আছে যে server-এ" }, value: `${scene.copies} / ${total}` };
  const time: Chip = { label: { en: "Time after the write", bn: "write-এর পরে সময়" }, value: `${scene.t} s` };
  const lag: Chip = { label: { en: "Replication lag", bn: "replication lag" }, value: `${LAG_S} s` };
  if (step === 0) return [{ label: { en: "Primary + replicas", bn: "primary + replica" }, value: `1 + ${REPLICAS}` }, copies];
  if (step === 1) return [copies, time];
  if (step === 2) return [copies, time, lag];
  if (step === 5) {
    return [
      { label: { en: "Stale payment reads", bn: "stale payment read" }, value: `${scene.read?.stale ? 1 : 0} / 1` },
      { label: { en: "Reads on the primary", bn: "primary-তে read" }, value: `${scene.readsOnPrimary} / 2` },
      { label: { en: "Reads on replicas", bn: "replica-তে read" }, value: `${scene.readsOnReplicas} / 2` },
    ];
  }
  return [
    { label: { en: "Stale read", bn: "stale read" }, value: `${scene.read?.stale ? 1 : 0} / 1` },
    copies,
    time,
  ];
}
