"use client";

import { ARCHITECTURE_UI } from "@/lib/architecture/ui";
import { useArchitectureProgress } from "./useArchitectureProgress";

/** A tick next to a done topic on the module home page. Nothing for a topic that is not done. */
export function TopicDoneMark({ id }: { id: string }) {
  const { done } = useArchitectureProgress();
  if (!done.includes(id)) return null;
  return (
    <span className="ml-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
      <span aria-hidden="true">✓ </span>
      {ARCHITECTURE_UI.sidebarDone}
    </span>
  );
}
