"use client";

import { useSyncExternalStore } from "react";
// A relative import, so that `node --test` can load this file (tests/sidebar.test.ts).
import { SIDEBAR_SIDES, resolveSidebar, sidebarAttr, sidebarStorageKey } from "../../lib/sidebar.ts";
import type { SidebarSide, SidebarState } from "../../lib/sidebar.ts";

function apply(side: SidebarSide, state: SidebarState) {
  const html = document.documentElement;
  if (state === "closed") html.setAttribute(sidebarAttr(side), "closed");
  else html.removeAttribute(sidebarAttr(side));
}

/**
 * data-sidebar-<side> on <html> is the source of truth. The observer reports
 * each change of an attribute. The storage listener copies a change that
 * another tab makes into the attribute.
 */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: SIDEBAR_SIDES.map(sidebarAttr) });
  const onStorage = (event: StorageEvent) => {
    for (const side of SIDEBAR_SIDES) {
      // A null key means that the whole storage was cleared.
      if (event.key === null) apply(side, "open");
      else if (event.key === sidebarStorageKey(side)) apply(side, resolveSidebar(event.newValue));
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    observer.disconnect();
    window.removeEventListener("storage", onStorage);
  };
}

function read(side: SidebarSide): SidebarState {
  return resolveSidebar(document.documentElement.getAttribute(sidebarAttr(side)));
}

/**
 * The state of one sidebar. It is "open" on the server and during hydration,
 * which is what the static HTML shows. The inline script from lib/sidebar.ts
 * has set the attribute before that, and the CSS already draws the right
 * state, so only the label of the toggle follows this value.
 */
export function useSidebar(side: SidebarSide): SidebarState {
  return useSyncExternalStore(
    subscribe,
    () => read(side),
    (): SidebarState => "open",
  );
}

/** Opens or closes a sidebar on this page, then saves the choice for the next visit. */
export function setSidebar(side: SidebarSide, state: SidebarState): void {
  apply(side, state);
  try {
    localStorage.setItem(sidebarStorageKey(side), state);
  } catch {
    // Storage is blocked: the sidebar still changes for this page.
  }
}
