/** The rules of the ACID transfer: Ana sends 40 credits to Ben, and the server may fail halfway. */

export type Mode = "transaction" | "plain";
export type Phase = "running" | "crashed" | "committed";

export const ANA_START = 100;
export const BEN_START = 20;
export const AMOUNT = 40;
export const UPDATES = 2;
export const STEP_COUNT = 6;
export const DEFAULT_MODE: Mode = "transaction";

export type Scene = {
  /** Updates the server has run so far (0, 1 or 2). */
  applied: number;
  phase: Phase;
  /** True once the database has cancelled the open transaction. */
  cancelled: boolean;
  /** Ana and Ben as another session sees them. */
  ana: number;
  ben: number;
  total: number;
  /** Updates that stay saved for other sessions. */
  saved: number;
};

/** Read the control value safely. */
export function toMode(live: unknown): Mode {
  return live === "plain" || live === "transaction" ? live : DEFAULT_MODE;
}

type Raw = { applied: number; phase: Phase; settled: boolean };

/** What happens at each step, before the mode is applied. */
const RAW: readonly Raw[] = [
  { applied: 0, phase: "running", settled: false },
  { applied: 0, phase: "running", settled: false },
  { applied: 1, phase: "running", settled: false },
  { applied: 1, phase: "crashed", settled: false },
  { applied: 1, phase: "crashed", settled: true },
  { applied: 2, phase: "committed", settled: true },
];

/** Run the transfer: a state of the world after `applied` updates, in a given mode. */
export function transfer(mode: Mode, applied: number, phase: Phase, settled: boolean): Scene {
  const rawAna = ANA_START - (applied >= 1 ? AMOUNT : 0);
  const rawBen = BEN_START + (applied >= 2 ? AMOUNT : 0);
  const hidden = mode === "transaction" && phase !== "committed";
  const ana = hidden ? ANA_START : rawAna;
  const ben = hidden ? BEN_START : rawBen;
  return {
    applied,
    phase,
    cancelled: mode === "transaction" && phase === "crashed" && settled,
    ana,
    ben,
    total: ana + ben,
    saved: hidden ? 0 : applied,
  };
}

export function sceneFor(step: number, mode: Mode = DEFAULT_MODE): Scene {
  const raw = RAW[Math.min(RAW.length - 1, Math.max(0, Math.trunc(step)))];
  return transfer(mode, raw.applied, raw.phase, raw.settled);
}
