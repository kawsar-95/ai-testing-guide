"use client";

import { useVoiceDefault } from "@/components/voice/useVoiceDefault";

/** The Bangla text if the site default voice is Bangla, else the English text. For attributes. */
export function useBn(en: string, bn: string): string {
  return useVoiceDefault() === "bangla" ? bn : en;
}
