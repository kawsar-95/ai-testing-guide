/** Data and rules of the CDN visual. The distances are example numbers, not measurements. */

export type Mode = "hit" | "miss";

/** One way, from the user to the origin server. */
export const ORIGIN_KM = 8000;
/** One way, from the user to the nearest edge server. */
export const EDGE_KM = 200;
/** Round trip time grows with distance: 1 ms for every 100 km of one-way distance. */
export const KM_PER_MS = 100;
export const STEP_COUNT = 6;
export const LAST_STEP = 5;
export const DEFAULT_MODE: Mode = "hit";

export type Scene = {
  /** Who answers the user. */
  answeredBy: "origin" | "edge";
  /** Is the edge on the stage? */
  edgeShown: boolean;
  /** Does the edge hold a copy of the file at the end of the step? */
  edgeHasCopy: boolean;
  /** One way distance of the request, in km. */
  km: number;
  /** Time for the whole round trip, in ms. */
  ms: number;
  /** Requests that reach the origin in this step. */
  originRequests: number;
};

/** Round trip time in ms for a one-way distance in km. */
export function roundTripMs(km: number): number {
  return (2 * km) / KM_PER_MS;
}

/** The scene of a step. `mode` only matters on the last step (the toggle). */
export function sceneFor(step: number, mode: Mode = DEFAULT_MODE): Scene {
  const origin = (edgeShown: boolean): Scene => ({
    answeredBy: "origin",
    edgeShown,
    edgeHasCopy: edgeShown && step >= 2,
    km: ORIGIN_KM,
    ms: roundTripMs(ORIGIN_KM),
    originRequests: 1,
  });
  const edge: Scene = {
    answeredBy: "edge",
    edgeShown: true,
    edgeHasCopy: true,
    km: EDGE_KM,
    ms: roundTripMs(EDGE_KM),
    originRequests: 0,
  };
  if (step <= 0) return origin(false);
  if (step === 1) return { ...origin(true), edgeHasCopy: false, originRequests: 0 };
  if (step === 2) return origin(true);
  if (step === 3 || step === 4) return edge;
  return mode === "miss" ? { ...origin(true), edgeHasCopy: true } : edge;
}

/** How many times faster the edge is than the origin. */
export function speedup(): number {
  return roundTripMs(ORIGIN_KM) / roundTripMs(EDGE_KM);
}
