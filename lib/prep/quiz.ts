/** The pure logic of the quiz. */
import type { McqItem } from "./types.ts";

export function isCorrect(item: McqItem, choice: number): boolean {
  return choice === item.answer;
}

/** The index of the item whose id equals `hash` without `#`. Else 0. */
export function startIndex(items: readonly { id: string }[], hash: string): number {
  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  if (!id) return 0;
  const index = items.findIndex((item) => item.id === id);
  return index === -1 ? 0 : index;
}

/** The next index, only for a correct answer with auto-advance on and a next question. Else `null`. */
export function advanceTarget(
  index: number,
  total: number,
  correct: boolean,
  autoAdvance: boolean,
): number | null {
  return autoAdvance && correct && index + 1 < total ? index + 1 : null;
}
