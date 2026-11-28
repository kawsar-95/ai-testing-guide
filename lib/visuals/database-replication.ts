/** Data and rules of the database-replication visual. Pure code, no React. */

export type Target = "primary" | "replica";
export type Status = "paid" | "unpaid";

/** Replicas that follow the primary. */
export const REPLICAS = 2;
/** Seconds that a change needs to reach a replica (the replication lag of this example). */
export const LAG_S = 3;
/** Second at which the dashboard reads, right after the payment at second 0. */
export const READ_AT_S = 1;
/** Second at which the replicas have caught up. */
export const CAUGHT_UP_S = LAG_S;
export const STEP_COUNT = 6;
export const DEFAULT_TARGET: Target = "replica";

/** Does the primary have the payment `t` seconds after it was written? */
export function primaryHas(t: number, wrote: boolean): boolean {
  return wrote && t >= 0;
}

/** Does a replica have the payment `t` seconds after the write? It does once the lag has passed. */
export function replicaHas(t: number, wrote: boolean): boolean {
  return wrote && t >= LAG_S;
}

/** What a read returns from the chosen server at second `t`. */
export function readStatus(target: Target, t: number, wrote: boolean): Status {
  const has = target === "primary" ? primaryHas(t, wrote) : replicaHas(t, wrote);
  return has ? "paid" : "unpaid";
}

/** A read is stale when it returns less than the primary has. */
export function isStale(target: Target, t: number, wrote: boolean): boolean {
  return readStatus(target, t, wrote) !== readStatus("primary", t, wrote);
}

/** Servers (primary and replicas) that hold the payment. */
export function copiesWithPayment(t: number, wrote: boolean): number {
  return (primaryHas(t, wrote) ? 1 : 0) + (replicaHas(t, wrote) ? REPLICAS : 0);
}

export type Scene = {
  t: number;
  wrote: boolean;
  primaryPaid: boolean;
  replicasPaid: boolean;
  /** The change is on its way from the primary to the replicas. */
  inFlight: boolean;
  copies: number;
  /** The read of the payment status, or null when the step has none. */
  read: { from: Target; status: Status; stale: boolean } | null;
  /** Step 5: the course list is read from a replica at the same time. */
  splitting: boolean;
  /** Reads that the primary and the replicas answer in this step. */
  readsOnPrimary: number;
  readsOnReplicas: number;
};

/** The picture of each step. `target` is the toggle, used by the steps that have a read to choose. */
export function sceneFor(step: number, target: Target = DEFAULT_TARGET): Scene {
  const s = Math.min(Math.max(step, 0), STEP_COUNT - 1);
  const wrote = s >= 1;
  const t = s <= 1 ? 0 : s === 4 ? CAUGHT_UP_S : READ_AT_S;
  const from: Target = s === 5 ? "primary" : target;
  const hasRead = s === 3 || s === 4 || s === 5;
  const read = hasRead ? { from, status: readStatus(from, t, wrote), stale: isStale(from, t, wrote) } : null;
  const splitting = s === 5;
  return {
    t,
    wrote,
    primaryPaid: primaryHas(t, wrote),
    replicasPaid: replicaHas(t, wrote),
    inFlight: wrote && !replicaHas(t, wrote),
    copies: copiesWithPayment(t, wrote),
    read,
    splitting,
    readsOnPrimary: !hasRead ? 0 : splitting ? 1 : from === "primary" ? 1 : 0,
    readsOnReplicas: !hasRead ? 0 : splitting ? 1 : from === "replica" ? 1 : 0,
  };
}
