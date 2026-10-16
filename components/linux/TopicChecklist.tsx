"use client";

import Link from "next/link";
import type { LinuxStage } from "@/lib/linux/stages";
import { LINUX_UI } from "@/lib/linux/ui";
import { useLinuxProgress } from "./useLinuxProgress";

/** The topics of one stage. Each row has a checkbox and a link to the heading of the topic. */
export function TopicChecklist({ stage }: { stage: LinuxStage }) {
  const { done, toggle } = useLinuxProgress();
  return (
    <ul className="m-0 grid list-none gap-1 p-0 sm:grid-cols-2">
      {stage.topics.map((topic) => (
        <li key={topic.id} id={topic.id} className="flex items-center gap-3 py-1.5">
          <input
            type="checkbox"
            checked={done.includes(topic.id)}
            onChange={() => toggle(topic.id)}
            aria-label={LINUX_UI.checklistLabel(topic.title)}
            className="size-4 shrink-0 cursor-pointer accent-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          />
          <Link
            href={`${stage.href}#${topic.anchor}`}
            className="text-[15px] leading-snug text-text no-underline hover:text-accent hover:underline"
          >
            {topic.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
