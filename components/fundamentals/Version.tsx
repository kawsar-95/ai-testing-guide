import type { ReactNode } from "react";
import type { Version as VersionName } from "@/lib/fundamentals/version";

/**
 * One version of the text of a topic. The CSS in app/globals.css hides the
 * block when its version is not the one on <html data-fundamentals-version>.
 * Do not put a heading inside a block (tests/fundamentals-structure.test.ts).
 */
export function Version({ of, children }: { of: VersionName; children: ReactNode }) {
  return <div data-version={of}>{children}</div>;
}
