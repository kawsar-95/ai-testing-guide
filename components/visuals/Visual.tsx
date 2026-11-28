"use client";

import type { ReactNode } from "react";
import { visualDef } from "@/lib/visuals/defs";
import { AvailabilityStage, availabilityChips } from "./AvailabilityStage";
import { CapTheoremStage, capTheoremChips } from "./CapTheoremStage";
import { CachingStage, cachingChips } from "./CachingStage";
import { CircuitBreakerStage, circuitBreakerChips } from "./CircuitBreakerStage";
import { ConsistentHashingStage, consistentHashingChips } from "./ConsistentHashingStage";
import { DnsStage, dnsChips } from "./DnsStage";
import { IdempotencyStage, idempotencyChips } from "./IdempotencyStage";
import { K6ThresholdsStage, k6ThresholdsChips } from "./K6ThresholdsStage";
import { LoadBalancerStage, loadBalancerChips } from "./LoadBalancerStage";
import { RateLimitingStage, rateLimitingChips } from "./RateLimitingStage";
import { ShardingStage, shardingChips } from "./ShardingStage";
import { StepVisual } from "./StepVisual";
import type { Chip, StageProps } from "./StepVisual";

type Picture = {
  chips: (step: number) => readonly Chip[];
  stage: (props: StageProps) => ReactNode;
};

/** The picture of each visual, by the id of its definition in lib/visuals/defs.ts. */
const PICTURES: Readonly<Record<string, Picture>> = {
  "availability": { chips: availabilityChips, stage: (props) => <AvailabilityStage {...props} /> },
  "cap-theorem": { chips: capTheoremChips, stage: (props) => <CapTheoremStage {...props} /> },
  "caching": { chips: cachingChips, stage: (props) => <CachingStage {...props} /> },
  "circuit-breaker": { chips: circuitBreakerChips, stage: (props) => <CircuitBreakerStage {...props} /> },
  "consistent-hashing": { chips: consistentHashingChips, stage: (props) => <ConsistentHashingStage {...props} /> },
  "dns": { chips: dnsChips, stage: (props) => <DnsStage {...props} /> },
  "idempotency": { chips: idempotencyChips, stage: (props) => <IdempotencyStage {...props} /> },
  "k6-thresholds": { chips: k6ThresholdsChips, stage: (props) => <K6ThresholdsStage {...props} /> },
  "load-balancer": { chips: loadBalancerChips, stage: (props) => <LoadBalancerStage {...props} /> },
  "rate-limiting": { chips: rateLimitingChips, stage: (props) => <RateLimitingStage {...props} /> },
  "sharding": { chips: shardingChips, stage: (props) => <ShardingStage {...props} /> },
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
