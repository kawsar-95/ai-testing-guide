"use client";

import type { Prefs } from "@/lib/prep/prefs";
import { PREP_UI } from "@/lib/prep/ui";
import { Segmented } from "./Segmented";
import { usePrefs } from "./usePrefs";

const OPTIONS: readonly { value: Prefs["level"]; label: string }[] = [
  { value: "all", label: PREP_UI.levelAll },
  { value: "easy", label: PREP_UI.levelLabels.easy },
  { value: "medium", label: PREP_UI.levelLabels.medium },
  { value: "hard", label: PREP_UI.levelLabels.hard },
];

/** All, Easy, Medium, or Hard. Only an area with levels shows it. */
export function LevelFilter() {
  const { prefs, setPref } = usePrefs();
  return (
    <Segmented
      label={PREP_UI.levelGroupLabel}
      options={OPTIONS}
      value={prefs.level}
      onChange={(value) => setPref("level", value)}
    />
  );
}
