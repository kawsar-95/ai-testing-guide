"use client";

import { PREP_UI } from "@/lib/prep/ui";
import { Segmented } from "./Segmented";
import { usePrefs } from "./usePrefs";

const OPTIONS = [
  { value: "table", label: PREP_UI.viewTable },
  { value: "cards", label: PREP_UI.viewCards },
] as const;

/** Table or cards. Below `md` both are cards, so the toggle shows from `md` up. */
export function ViewToggle() {
  const { prefs, setPref } = usePrefs();
  return (
    <Segmented
      label={PREP_UI.viewGroupLabel}
      options={OPTIONS}
      value={prefs.view}
      onChange={(value) => setPref("view", value)}
      className="max-md:hidden"
    />
  );
}
