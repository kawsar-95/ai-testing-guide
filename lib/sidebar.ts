/** The two sidebars of a content page that the reader can close (components/content/ChapterLayout.tsx). */
export type SidebarSide = "left" | "right";

export const SIDEBAR_SIDES: readonly SidebarSide[] = ["left", "right"];

export type SidebarState = "open" | "closed";

/** The start of the localStorage key of a sidebar: `sidebar-left`, `sidebar-right`. */
const STORAGE_PREFIX = "sidebar-";

/** The start of the attribute on <html> that holds the state of a sidebar: `data-sidebar-left`. */
const ATTR_PREFIX = "data-sidebar-";

export function sidebarStorageKey(side: SidebarSide): string {
  return STORAGE_PREFIX + side;
}

/** An open sidebar has no attribute. A closed one has the value "closed". */
export function sidebarAttr(side: SidebarSide): string {
  return ATTR_PREFIX + side;
}

/** Only the saved value "closed" closes a sidebar. Any other value, or none, leaves it open. */
export function resolveSidebar(stored: string | null): SidebarState {
  return stored === "closed" ? "closed" : "open";
}

export function nextSidebar(state: SidebarState): SidebarState {
  return state === "closed" ? "open" : "closed";
}

/**
 * Runs in <head> before the first paint. For each sidebar that the reader
 * closed, it sets data-sidebar-<side>="closed" on <html>, so the page paints
 * with that sidebar already closed. It must give the same result as
 * resolveSidebar (tests/sidebar.test.ts checks this). If storage is blocked,
 * both sidebars stay open.
 */
export const SIDEBAR_INIT_SCRIPT = `(function(){try{var d=document.documentElement;${JSON.stringify(
  SIDEBAR_SIDES,
)}.forEach(function(s){if(localStorage.getItem(${JSON.stringify(
  STORAGE_PREFIX,
)}+s)==="closed")d.setAttribute(${JSON.stringify(ATTR_PREFIX)}+s,"closed")})}catch(e){}})()`;
