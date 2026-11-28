/**
 * Data and rules of the horizontal-scaling visual. Pure code, no React.
 * The numbers are a sample, not a real system: each app server can serve 100 requests a second,
 * and the slow database in the last step can serve 100 a second.
 */

export const CAPACITY_PER_SERVER = 100;
export const SERVER_COUNT = 3;
export const DB_LIMIT = 100;
export const MIN_LOAD = 60;
export const MAX_LOAD = 420;
export const LOAD_STEP = 60;
export const DEFAULT_LOAD = 180;
export const STEP_COUNT = 5;
/** The step where the slider starts. */
export const FIRST_LIVE_STEP = 2;
/** The server that stops (App Server 2, as on the page). */
export const FAILED_SERVER = 1;

export type ServerState = {
  /** 0-based. The page calls the first one App Server 1. */
  index: number;
  up: boolean;
  /** Requests a second that the load balancer sends to this server. */
  load: number;
  /** Requests a second that it answers. */
  served: number;
  overloaded: boolean;
};

export type Scene = {
  demand: number;
  servers: readonly ServerState[];
  serversUp: number;
  hasBalancer: boolean;
  /** Sum of the capacity of the servers that are up. */
  capacity: number;
  /** Null when the database is not the limit. */
  dbLimit: number | null;
  served: number;
  dropped: number;
};

/** The load, kept on the slider steps and inside the range. */
export function clampLoad(load: unknown): number {
  if (typeof load !== "number" || !Number.isFinite(load)) return DEFAULT_LOAD;
  const snapped = Math.round(load / LOAD_STEP) * LOAD_STEP;
  return Math.min(MAX_LOAD, Math.max(MIN_LOAD, snapped));
}

/** Share `demand` between `up` servers. Servers that are down get nothing. */
export function shareLoad(demand: number, upFlags: readonly boolean[]): number[] {
  const up = upFlags.filter(Boolean).length;
  return upFlags.map((isUp) => (isUp && up > 0 ? demand / up : 0));
}

/** The scene of one step. Only the steps from FIRST_LIVE_STEP on use the slider value. */
export function sceneFor(step: number, load: number = DEFAULT_LOAD): Scene {
  const demand = step >= FIRST_LIVE_STEP ? clampLoad(load) : DEFAULT_LOAD;
  const count = step === 0 ? 1 : SERVER_COUNT;
  const upFlags = Array.from({ length: count }, (_, i) => !(step === 3 && i === FAILED_SERVER));
  const loads = shareLoad(demand, upFlags);
  const dbLimit = step === 4 ? DB_LIMIT : null;
  const servers: ServerState[] = upFlags.map((up, index) => ({
    index,
    up,
    load: loads[index],
    served: Math.min(loads[index], CAPACITY_PER_SERVER),
    overloaded: up && loads[index] > CAPACITY_PER_SERVER,
  }));
  const serversUp = upFlags.filter(Boolean).length;
  const capacity = serversUp * CAPACITY_PER_SERVER;
  const appServed = servers.reduce((sum, s) => sum + s.served, 0);
  const served = dbLimit === null ? appServed : Math.min(appServed, dbLimit);
  return {
    demand,
    servers,
    serversUp,
    hasBalancer: step >= 1,
    capacity,
    dbLimit,
    served,
    dropped: demand - served,
  };
}

/** The most demand that `up` servers can serve with nothing dropped. */
export function capacityOf(up: number): number {
  return up * CAPACITY_PER_SERVER;
}
