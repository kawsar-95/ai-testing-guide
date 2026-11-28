/**
 * The rules of the indexes visual. The page's example: an `enrollments` table of 5 million rows,
 * and `SELECT * FROM enrollments WHERE student_id = 42`. The numbers are the tutorial's own model,
 * not from a source: a student has MATCHING rows, and the index tree has FANOUT branches per level.
 */

export const STEP_COUNT = 7;
/** The table sizes of the slider. The last one is the page's 5 million rows. */
export const SIZES: readonly number[] = [50, 1000, 10000, 100000, 1000000, 5000000];
export const DEFAULT_SIZE_INDEX = SIZES.length - 1;
/** Rows that belong to student 42 (the model). */
export const MATCHING = 5;
/** Branches of each tree level (the model). */
export const FANOUT = 100;
/** The slider is shown on these steps (the first and last, counted from 0). */
export const SLIDER_FIRST = 1;
export const SLIDER_LAST = 4;
/** The page: "ten more indexes added just in case". */
export const EXTRA_INDEXES = 10;
/** Rows drawn in the picture, and which of them are student 42's. */
export const GRID_CELLS = 40;
export const MATCH_CELLS: readonly number[] = [3, 11, 18, 27, 34];

/** The size that the slider position (0 to 5) means. Bad input gives the default. */
export function sizeAt(position: unknown): number {
  const i = typeof position === "number" && Number.isInteger(position) ? position : DEFAULT_SIZE_INDEX;
  return SIZES[Math.min(SIZES.length - 1, Math.max(0, i))];
}

/** Levels of a search tree for n rows: the smallest L with FANOUT^L >= n, at least 1. */
export function levelsFor(rows: number): number {
  let levels = 1;
  let reach = FANOUT;
  while (reach < rows) {
    reach *= FANOUT;
    levels += 1;
  }
  return levels;
}

export type Plan = {
  rows: number;
  /** Rows the database checks without an index: all of them. */
  scanChecked: number;
  returned: number;
  levels: number;
  /** Tree levels plus the rows it reads: what the index path checks. */
  indexChecked: number;
};

export function planFor(rows: number): Plan {
  const returned = Math.min(rows, MATCHING);
  const levels = levelsFor(rows);
  return { rows, scanChecked: rows, returned, levels, indexChecked: levels + returned };
}

/** Structures that one new row must update: the table and each index. */
export function updatesPerInsert(indexes: number): number {
  return 1 + indexes;
}

/** 5000000 -> "5 000 000" */
export function formatCount(n: number): string {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

/** The table size that a step shows: the slider on its steps, else the page's 5 million. */
export function sizeForStep(step: number, position: unknown): number {
  return step >= SLIDER_FIRST && step <= SLIDER_LAST ? sizeAt(position) : SIZES[DEFAULT_SIZE_INDEX];
}
