/** The pure logic of the progress state: which items a reader marked as done. */

/** The localStorage key of the done ids. */
export const STORAGE_KEY = "prep-progress";

/** Read the stored text. A JSON array of strings, without duplicates. Anything else gives `[]`. */
export function parseProgress(raw: string | null): string[] {
  if (!raw) return [];
  let value: unknown;
  try {
    value = JSON.parse(raw);
  } catch {
    return [];
  }
  if (!Array.isArray(value)) return [];
  const ids: string[] = [];
  for (const entry of value) {
    if (typeof entry === "string" && !ids.includes(entry)) ids.push(entry);
  }
  return ids;
}

export function serializeProgress(ids: readonly string[]): string {
  return JSON.stringify(ids);
}

/** Add `id` if it is not done, else remove it. Returns a new array. */
export function toggleDone(done: readonly string[], id: string): string[] {
  return done.includes(id) ? done.filter((entry) => entry !== id) : [...done, id];
}

/** Count the `ids` that are in `done`, each once. A stored id that is not in `ids` does not count. */
export function countDone(ids: readonly string[], done: readonly string[]): number {
  const doneSet = new Set(done);
  return [...new Set(ids)].filter((id) => doneSet.has(id)).length;
}

/** An integer from 0 to 100. It is 0 when `total` is 0. It rounds down, so 100 means all done. */
export function percent(done: number, total: number): number {
  if (total <= 0) return 0;
  return Math.min(100, Math.max(0, Math.floor((done / total) * 100)));
}
