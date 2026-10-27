"use client";

import { useRef, useState } from "react";
import type { ReactNode } from "react";
import { voiceOrder } from "@/lib/voice";
import type { Voice } from "@/lib/voice";
import { useVoiceDefault } from "./useVoiceDefault";
import { useRevealTarget } from "./useRevealTarget";
import { VoiceSwitcher } from "./VoiceSwitcher";

/**
 * The body of one ## section in three voices: <Technical>, <Layman>, and
 * <Bangla>. The switcher selects the voice of this section only.
 *
 * - local is null (follow the site default) or the voice that the reader
 *   clicked. If the site default changes, local goes back to null.
 * - data-voice-user is set only if local is not null. The CSS fades a panel
 *   in only then, so the site default does not fade at hydration.
 * - Before hydration, def is null. Then the wrapper has no data-voice, and
 *   the CSS shows the panel of data-voice-default on <html>.
 * - If a hash or an in-page link points into a hidden panel, the section
 *   shows that panel and the page scrolls to the target.
 */
export function Voices({ children }: { children?: ReactNode }) {
  const def = useVoiceDefault();
  const [local, setLocal] = useState<Voice | null>(null);

  // Reset local when the default changes from one value to another. The
  // change from null at hydration is not a reader action, so local stays.
  const [seenDef, setSeenDef] = useState(def);
  if (def !== seenDef) {
    setSeenDef(def);
    if (seenDef !== null) setLocal(null);
  }

  const effective: Voice = local ?? def ?? "technical";
  const wrapper = useRef<HTMLDivElement>(null);
  useRevealTarget(() => wrapper.current, setLocal, local, def !== null);

  return (
    <div
      ref={wrapper}
      className="voices"
      data-voice={def === null ? undefined : effective}
      data-voice-user={local === null ? undefined : ""}
    >
      <VoiceSwitcher value={effective} order={voiceOrder(def ?? "technical")} onChange={setLocal} />
      {children}
    </div>
  );
}
