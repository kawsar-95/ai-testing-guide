/** One text version of a section, or all of them. */
export type Voice = "technical" | "layman" | "bangla" | "all";

/** A voice that has its own panel in a section. */
export type PanelVoice = "technical" | "layman" | "bangla";

/** The site-wide default voice. The reader sets it with the header button. */
export type VoiceDefault = "technical" | "bangla";

/** The localStorage key that holds the default voice. */
export const VOICE_STORAGE_KEY = "voice";

/** The attribute on <html> that holds the default voice. */
export const VOICE_DEFAULT_ATTR = "data-voice-default";

/** The text of each button of the voice switch. */
export const VOICE_LABELS: Record<Voice, string> = {
  technical: "Technical",
  layman: "সহজ English",
  bangla: "বাংলা",
  all: "সবগুলো",
};

/** The title of the box of each extra panel. */
export const PANEL_TITLES: Record<"layman" | "bangla", string> = {
  layman: "সহজ English",
  bangla: "বাংলা ব্যাখ্যা",
};

/** The text of the header button. It names the voice that the click selects. */
export const VOICE_TOGGLE_TEXT: Record<VoiceDefault, string> = {
  technical: "বাংলা",
  bangla: "English",
};

/** Only the saved value "bangla" selects Bangla. Any other value gives Technical. */
export function resolveVoiceDefault(stored: string | null): VoiceDefault {
  return stored === "bangla" ? "bangla" : "technical";
}

/** The buttons of the voice switch, in order. The default voice is first. */
export function voiceOrder(def: VoiceDefault): Voice[] {
  return def === "bangla" ? ["bangla", "technical", "layman", "all"] : ["technical", "layman", "bangla", "all"];
}

/** A panel shows if the voice is its own voice or "all". */
export function isPanelVisible(panel: PanelVoice, voice: Voice): boolean {
  return voice === "all" || voice === panel;
}

/**
 * Runs in <head> before the first paint and sets data-voice-default on
 * <html>. It must give the same result as resolveVoiceDefault
 * (tests/voice.test.ts checks this). If storage is blocked, the server
 * default (technical) stays.
 */
export const VOICE_INIT_SCRIPT = `(function(){try{var s=localStorage.getItem(${JSON.stringify(
  VOICE_STORAGE_KEY,
)});document.documentElement.setAttribute(${JSON.stringify(
  VOICE_DEFAULT_ATTR,
)},s==="bangla"?"bangla":"technical")}catch(e){}})()`;
