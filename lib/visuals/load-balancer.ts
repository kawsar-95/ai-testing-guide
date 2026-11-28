/**
 * Pure rules of the load-balancer visual: one request arrives each tick, three servers of
 * different speed, and two algorithms the page names (Round Robin, Least Connections).
 * Sample numbers only: nothing here is a measurement of a real system.
 */

export type Algorithm = "round-robin" | "least-connections";

/** Ticks one request needs on each server. App Server 1 is the fastest, App Server 3 the slowest. */
export const SERVICE_TICKS = [2, 4, 8] as const;
export const SERVER_COUNT = SERVICE_TICKS.length;
/** One request arrives at the balancer in every tick. */
export const TOTAL_REQUESTS = 24;

export type Sim = {
  algorithm: Algorithm;
  tick: number;
  /** Requests sent to each server so far. */
  sent: number[];
  /** Requests finished by each server so far. */
  done: number[];
  /** Active connections on each server: the queue length. */
  queue: number[];
};

/** Pick a server for request number `n` (0-based), given the active connections. Ties go to the lowest server. */
export function pick(algorithm: Algorithm, n: number, queue: readonly number[]): number {
  if (algorithm === "round-robin") return n % queue.length;
  let best = 0;
  for (let i = 1; i < queue.length; i++) if (queue[i] < queue[best]) best = i;
  return best;
}

/** Run `ticks` ticks (0 to TOTAL_REQUESTS). In each tick one request arrives, then every server works one tick. */
export function simulate(algorithm: Algorithm, ticks: number): Sim {
  const t = Math.max(0, Math.min(TOTAL_REQUESTS, ticks));
  const queue = SERVICE_TICKS.map(() => 0);
  const sent = SERVICE_TICKS.map(() => 0);
  const done = SERVICE_TICKS.map(() => 0);
  const left = SERVICE_TICKS.map(() => 0); // ticks left on the request at the head of each queue
  for (let n = 0; n < t; n++) {
    const s = pick(algorithm, n, queue);
    queue[s] += 1;
    sent[s] += 1;
    if (queue[s] === 1) left[s] = SERVICE_TICKS[s];
    for (let i = 0; i < queue.length; i++) {
      if (queue[i] === 0) continue;
      left[i] -= 1;
      if (left[i] === 0) {
        queue[i] -= 1;
        done[i] += 1;
        if (queue[i] > 0) left[i] = SERVICE_TICKS[i];
      }
    }
  }
  return { algorithm, tick: t, sent, done, queue };
}

export function longestQueue(sim: Sim): number {
  return Math.max(...sim.queue);
}

/** How far into the run each step is. */
export const STEP_TICKS = [0, 6, 24, 24, 24, 24] as const;
/** The algorithm each step shows by itself; steps with `null` let the learner choose. */
export const STEP_ALGORITHM: readonly (Algorithm | null)[] = [null, "round-robin", "round-robin", "least-connections", null, null];
