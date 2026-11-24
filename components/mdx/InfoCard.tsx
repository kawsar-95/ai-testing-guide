import type { ReactNode } from "react";
import { T } from "@/components/i18n/T";
import { SHELL_BN } from "@/lib/bn/shell";
import { doLabel, dontLabel } from "@/lib/ui";
import { reveal } from "@/components/motion/reveal";

const TONE = {
  good: { border: "border-t-2 border-t-good", mark: "✓", color: "text-good", label: doLabel, bn: SHELL_BN.doLabel },
  bad: { border: "border-t-2 border-t-danger", mark: "✗", color: "text-danger", label: dontLabel, bn: SHELL_BN.dontLabel },
} as const;

export function InfoCard({
  title,
  subtitle,
  tone,
  children,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  tone?: "good" | "bad";
  children: ReactNode;
}) {
  const marker = tone ? TONE[tone] : null;
  return (
    <section
      className={`card-hover rounded-xl border border-border bg-bg-raised p-5 shadow-sm ${marker?.border ?? ""}`}
      {...reveal("scale")}
    >
      <p className="mb-2 text-base font-medium text-text">
        {marker ? (
          <>
            <span aria-hidden="true" className={`mr-2 font-medium ${marker.color}`}>
              {marker.mark}
            </span>
            <span className="sr-only">
              <T en={marker.label} bn={marker.bn} />:{" "}
            </span>
          </>
        ) : null}
        {title}
      </p>
      {subtitle ? <p className="-mt-1 mb-2 text-sm text-text-dim">{subtitle}</p> : null}
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">{children}</div>
    </section>
  );
}
