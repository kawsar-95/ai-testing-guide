"use client";

import { T } from "@/components/i18n/T";
import { SHELL_BN } from "@/lib/bn/shell";
import { OPEN_NAV_EVENT, contentsButton } from "@/lib/ui";

/** The button above a page title that opens the drawer with the pages of the current module. It hides when the left list shows. */
export function ContentsButton() {
  return (
    <button
      type="button"
      aria-haspopup="dialog"
      onClick={() => window.dispatchEvent(new Event(OPEN_NAV_EVENT))}
      className="btn btn-ghost btn-sm -ml-3.5 mb-4 chapter:hidden"
    >
      <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4" fill="none">
        <path d="M7 5.5h10M7 10h10M7 14.5h10M3 5.5h.01M3 10h.01M3 14.5h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
      <T en={contentsButton} bn={SHELL_BN.contentsButton} />
    </button>
  );
}
