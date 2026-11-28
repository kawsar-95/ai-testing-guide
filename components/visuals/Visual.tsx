"use client";

import type { ReactNode } from "react";
import { visualDef } from "@/lib/visuals/defs";
import { AvailabilityStage } from "./AvailabilityStage";
import { availabilityChips } from "@/lib/visuals/availability-chips";
import { CapTheoremStage } from "./CapTheoremStage";
import { capTheoremChips } from "@/lib/visuals/cap-theorem-chips";
import { CachingStage } from "./CachingStage";
import { cachingChips } from "@/lib/visuals/caching-chips";
import { CircuitBreakerStage } from "./CircuitBreakerStage";
import { circuitBreakerChips } from "@/lib/visuals/circuit-breaker-chips";
import { ConsistentHashingStage } from "./ConsistentHashingStage";
import { consistentHashingChips } from "@/lib/visuals/consistent-hashing-chips";
import { DnsStage } from "./DnsStage";
import { dnsChips } from "@/lib/visuals/dns-chips";
import { IdempotencyStage } from "./IdempotencyStage";
import { idempotencyChips } from "@/lib/visuals/idempotency-chips";
import { K6ThresholdsStage } from "./K6ThresholdsStage";
import { k6ThresholdsChips } from "@/lib/visuals/k6-thresholds-chips";
import { LoadBalancerStage } from "./LoadBalancerStage";
import { loadBalancerChips } from "@/lib/visuals/load-balancer-chips";
import { RateLimitingStage } from "./RateLimitingStage";
import { rateLimitingChips } from "@/lib/visuals/rate-limiting-chips";
import { ShardingStage } from "./ShardingStage";
import { shardingChips } from "@/lib/visuals/sharding-chips";
import { StepVisual } from "./StepVisual";
import type { Chip, StageProps } from "./StepVisual";

type Picture = {
  chips: (step: number, live: unknown) => readonly Chip[];
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
