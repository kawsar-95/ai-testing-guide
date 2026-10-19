import type { ReactNode } from "react";
import { PANEL_TITLES } from "@/lib/voice";

// The three panels of a <Voices> section. The CSS in app/globals.css shows
// one panel or all of them. It reads data-voice on the .voices wrapper, or
// data-voice-default on <html> before hydration.

/** The Technical text. It has no box and no title. */
export function Technical({ children }: { children?: ReactNode }) {
  return <div data-panel="technical">{children}</div>;
}

/** The plain-English text, in a tinted box with a title. */
export function Layman({ children }: { children?: ReactNode }) {
  return (
    <div data-panel="layman" className="voice-box">
      <p className="voice-box-title">{PANEL_TITLES.layman}</p>
      {children}
    </div>
  );
}

/** The Bangla text, in a tinted box with a title. */
export function Bangla({ children }: { children?: ReactNode }) {
  return (
    <div data-panel="bangla" lang="bn" className="voice-box">
      <p className="voice-box-title">{PANEL_TITLES.bangla}</p>
      {children}
    </div>
  );
}
