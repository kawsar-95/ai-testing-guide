"use client";

import { visualDef } from "@/lib/visuals/defs";
import { ConsistentHashingStage, consistentHashingChips } from "./ConsistentHashingStage";
import { StepVisual } from "./StepVisual";
import type { Chip, StageProps } from "./StepVisual";
import type { ReactNode } from "react";

type Picture = {
  chips: (step: number) => readonly Chip[];
  stage: (props: StageProps) => ReactNode;
};

/** The picture of each visual, by the id of its definition in lib/visuals/defs.ts. */
const PICTURES: Readonly<Record<string, Picture>> = {
  "consistent-hashing": {
    chips: consistentHashingChips,
    stage: (props) => <ConsistentHashingStage {...props} />,
  },
};

/**
 * An animated lesson for a page: `<Visual name="consistent-hashing" />` in the MDX. Put it
 * after <PageMeta /> and before the first ## heading, never inside a <Voices> block.
 */
export function Visual({ name }: { name: string }) {
  const picture = PICTURES[name];
  if (!picture) throw new Error(`No visual with name "${name}"`);
  return <StepVisual def={visualDef(name)} chips={picture.chips} stage={picture.stage} />;
}
