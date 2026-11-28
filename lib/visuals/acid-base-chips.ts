import type { Chip } from "./chips.ts";
import { sceneFor, toMode } from "./acid-base.ts";

/** The live numbers of each step: what another session sees, in the mode that the toggle sets. */
export function acidBaseChips(step: number, live: unknown): readonly Chip[] {
  const scene = sceneFor(step, toMode(live));
  return [
    { label: { en: "Ana", bn: "Ana" }, value: String(scene.ana) },
    { label: { en: "Ben", bn: "Ben" }, value: String(scene.ben) },
    { label: { en: "Total", bn: "মোট" }, value: String(scene.total) },
    { label: { en: "Updates saved", bn: "সেভ হওয়া আপডেট" }, value: `${scene.saved} / 2` },
  ];
}
