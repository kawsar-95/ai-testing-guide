"use client";

import Link from "next/link";
import { LINUX_UI } from "@/lib/linux/ui";
import { LINUX_UI_BN } from "@/lib/bn/linux";
import { T } from "@/components/i18n/T";
import { STAGES, nextTopic } from "@/lib/linux/stages";
import { useLinuxProgress } from "./useLinuxProgress";

/** A button to the first topic that is not done. The server HTML shows the start state. */
export function ContinueButton() {
  const { done } = useLinuxProgress();
  const next = nextTopic(done);
  if (!next) {
    return (
      <p className="text-[15px] text-text-dim">
        <T en={LINUX_UI.continueDone} bn={LINUX_UI_BN.continueDone} />
      </p>
    );
  }
  const start = next.topic.id === STAGES[0].topics[0].id;
  return (
    <Link href={next.href} className="btn btn-primary">
      {start ? (
        <T en={LINUX_UI.continueStart} bn={LINUX_UI_BN.continueStart} />
      ) : (
        <T en={LINUX_UI.continueNext(next.topic.title)} bn={LINUX_UI_BN.continueNext(next.topic.title)} />
      )}
    </Link>
  );
}
