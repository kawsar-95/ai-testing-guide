export type Version = "notes" | "istqb";

/** The localStorage key that holds the reader's choice. */
export const VERSION_STORAGE_KEY = "fundamentals-version";

/** The attribute on <html> that the CSS reads to show one version of the text. */
export const VERSION_ATTRIBUTE = "data-fundamentals-version";

/** The event that the switch fires on `window` when the reader changes the version. */
export const VERSION_EVENT = "fundamentals-version-change";

export const DEFAULT_VERSION: Version = "istqb";

/** A saved choice wins. Anything else gives the default. */
export function resolveVersion(stored: string | null): Version {
  return stored === "notes" || stored === "istqb" ? stored : DEFAULT_VERSION;
}

/**
 * Runs in <head> before the first paint and sets the version attribute on
 * <html>. It must give the same result as resolveVersion
 * (tests/fundamentals-version.test.ts checks this). If storage is blocked, it
 * sets no attribute.
 */
export const VERSION_INIT_SCRIPT = `(function(){try{var s=localStorage.getItem(${JSON.stringify(
  VERSION_STORAGE_KEY,
)});document.documentElement.setAttribute(${JSON.stringify(
  VERSION_ATTRIBUTE,
)},s==="notes"||s==="istqb"?s:${JSON.stringify(DEFAULT_VERSION)})}catch(e){}})()`;
