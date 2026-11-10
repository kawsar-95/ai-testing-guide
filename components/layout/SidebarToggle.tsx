"use client";

import { useBn } from "@/components/i18n/useBn";
import { SHELL_BN } from "@/lib/bn/shell";
import { nextSidebar } from "@/lib/sidebar";
import type { SidebarSide } from "@/lib/sidebar";
import { sidebarLeftHide, sidebarLeftShow, sidebarRightHide, sidebarRightShow } from "@/lib/ui";
import { setSidebar, useSidebar } from "./useSidebar";

/** The name of the button for each sidebar and state: the English text and its Bangla twin. */
const NAME = {
  left: {
    hide: [sidebarLeftHide, SHELL_BN.sidebarLeftHide],
    show: [sidebarLeftShow, SHELL_BN.sidebarLeftShow],
  },
  right: {
    hide: [sidebarRightHide, SHELL_BN.sidebarRightHide],
    show: [sidebarRightShow, SHELL_BN.sidebarRightShow],
  },
} as const;

/**
 * The button that closes and opens one sidebar of a content page: the page
 * list on the left, "On this page" on the right. A closed sidebar shrinks to a
 * rail that holds only this button, so the same button opens it again.
 *
 * The icon is a window with the sidebar's divider on its own side. Its
 * chevron points at the sidebar while the sidebar is open (a click closes it)
 * and away from it while the sidebar is closed. CSS picks the chevron from
 * data-sidebar-<side> on <html> (globals.css), so the icon is right before
 * hydration too. The label names what a click does, like the theme and voice
 * buttons, so the button has no aria-expanded.
 */
export function SidebarToggle({ side }: { side: SidebarSide }) {
  const state = useSidebar(side);
  const closed = state === "closed";
  const [en, bn] = NAME[side][closed ? "show" : "hide"];
  const label = useBn(en, bn);

  // Where the divider and the two chevrons sit in a 24 x 24 box.
  const divider = side === "left" ? "M9 3v18" : "M15 3v18";
  const hide = side === "left" ? "M16 9l-3 3 3 3" : "M8 9l3 3-3 3";
  const show = side === "left" ? "M13 9l3 3-3 3" : "M11 9l-3 3 3 3";

  return (
    <button
      type="button"
      data-sidebar-toggle={side}
      onClick={() => setSidebar(side, nextSidebar(state))}
      aria-label={label}
      title={label}
      className="grid size-9 shrink-0 place-items-center rounded-lg text-text-dim transition-colors hover:bg-bg-raised-2 hover:text-text motion-reduce:transition-none pointer-coarse:size-11"
    >
      <svg
        viewBox="0 0 24 24"
        className="size-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d={divider} />
        <path className="sb-chevron-hide" d={hide} />
        <path className="sb-chevron-show" d={show} />
      </svg>
    </button>
  );
}
