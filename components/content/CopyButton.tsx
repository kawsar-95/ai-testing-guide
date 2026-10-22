"use client";

import { useEffect, useRef, useState } from "react";
import { T } from "@/components/i18n/T";
import { useBn } from "@/components/i18n/useBn";
import { SHELL_BN } from "@/lib/bn/shell";
import { copyWords } from "@/lib/ui";

const DEFAULT_CLASS =
  "rounded-md border border-border-strong px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-text-dim transition-colors hover:border-accent hover:text-accent";

/**
 * Copies text to the clipboard. `getText` runs at click time. If the
 * Clipboard API is not available (for example on plain http), the button
 * selects the text of `fallbackTarget` so the reader can copy it by hand.
 */
export function CopyButton({
  getText,
  label,
  labelBn = label,
  words = copyWords,
  wordsBn = SHELL_BN.copyWords,
  fallbackTarget,
  className = DEFAULT_CLASS,
}: {
  getText: () => string;
  /** The accessible name of the button, for example "Copy code". */
  label: string;
  /** The Bangla accessible name. */
  labelBn?: string;
  /** The visible words for each state. */
  words?: { idle: string; copied: string; selected: string };
  /** The Bangla words for each state. */
  wordsBn?: { idle: string; copied: string; selected: string };
  fallbackTarget: () => HTMLElement | null;
  className?: string;
}) {
  const [status, setStatus] = useState<"idle" | "copied" | "selected">("idle");
  const accessibleName = useBn(label, labelBn);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const show = (next: "copied" | "selected") => {
    setStatus(next);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("idle"), 2000);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(getText());
      show("copied");
    } catch {
      const el = fallbackTarget();
      const selection = window.getSelection();
      if (!el || !selection) return;
      const range = document.createRange();
      range.selectNodeContents(el);
      selection.removeAllRanges();
      selection.addRange(range);
      show("selected");
    }
  };

  // The live region is outside the button: a screen reader reads the
  // aria-label of a button, not its content, so it would not announce a
  // change inside the button.
  return (
    <>
      <button type="button" onClick={copy} aria-label={accessibleName} className={className}>
        <T en={words[status]} bn={wordsBn[status]} />
      </button>
      <span className="sr-only" aria-live="polite">
        {status === "idle" ? "" : <T en={words[status]} bn={wordsBn[status]} />}
      </span>
    </>
  );
}
