import type { Chip } from "./chips.ts";
import { sceneFor, type Choice } from "./cap.ts";

const DEFAULT_CHOICE: Choice = "C";

/** The live numbers of each step, from the same scene that the stage draws. `live` is the chosen "C" or "A". */
export function capTheoremChips(step: number, live: unknown): readonly Chip[] {
  const choice: Choice = live === "A" || live === "C" ? live : DEFAULT_CHOICE;
  const scene = sceneFor(step, choice);
  const { a, b } = scene.cluster;
  const copies: Chip[] = [
    { label: { en: "Value on A", bn: "A-র মান" }, value: String(a) },
    { label: { en: "Value on B", bn: "B-র মান" }, value: String(b) },
  ];
  if (step === 0 || step === 4) {
    const read = scene.read;
    return [...copies, { label: { en: "Read on B", bn: "B-তে রিড" }, value: read?.served ? String(read.value) : "–" }];
  }
  if (step === 3) {
    const read = scene.read;
    return [
      ...copies,
      { label: { en: "Read served (1 = yes)", bn: "রিড উত্তর পেল (১ = হ্যাঁ)" }, value: read?.served ? "1" : "0" },
      { label: { en: "Value returned", bn: "ফেরত মান" }, value: read?.served ? String(read.value) : "–" },
    ];
  }
  return copies;
}
