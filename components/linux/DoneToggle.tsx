"use client";

import { LINUX_UI } from "@/lib/linux/ui";
import { LINUX_UI_BN } from "@/lib/bn/linux";
import { useBn } from "@/components/i18n/useBn";
import { useLinuxProgress } from "./useLinuxProgress";

/**
 * The checkbox of one card: "I can use this without notes". It saves the topic
 * id in `linux-progress`, the same store as the stage and the module progress.
 * The server HTML has it unchecked. The card styles itself from `:checked`
 * (`has-checked:` on the card), so the card can stay a server component.
 */
export function DoneToggle({ id, title }: { id: string; title: string }) {
  const { done, toggle } = useLinuxProgress();
  const label = useBn(LINUX_UI.checklistLabel(title), LINUX_UI_BN.checklistLabel(title));
  return (
    <label className="-m-1 grid size-9 shrink-0 cursor-pointer place-items-center pointer-coarse:size-11">
      <input
        type="checkbox"
        checked={done.includes(id)}
        onChange={() => toggle(id)}
        aria-label={label}
        className="size-[18px] cursor-pointer accent-accent"
      />
    </label>
  );
}
