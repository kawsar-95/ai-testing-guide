"use client";

import type { ReactNode } from "react";
import { visualDef } from "@/lib/visuals/defs";
import { AcidBaseStage } from "./AcidBaseStage";
import { acidBaseChips } from "@/lib/visuals/acid-base-chips";
import { AvailabilityStage } from "./AvailabilityStage";
import { availabilityChips } from "@/lib/visuals/availability-chips";
import { CachingStage } from "./CachingStage";
import { cachingChips } from "@/lib/visuals/caching-chips";
import { CapTheoremStage } from "./CapTheoremStage";
import { capTheoremChips } from "@/lib/visuals/cap-theorem-chips";
import { CdnStage } from "./CdnStage";
import { cdnChips } from "@/lib/visuals/cdn-chips";
import { CircuitBreakerStage } from "./CircuitBreakerStage";
import { circuitBreakerChips } from "@/lib/visuals/circuit-breaker-chips";
import { ConsistentHashingStage } from "./ConsistentHashingStage";
import { consistentHashingChips } from "@/lib/visuals/consistent-hashing-chips";
import { DatabaseReplicationStage } from "./DatabaseReplicationStage";
import { databaseReplicationChips } from "@/lib/visuals/database-replication-chips";
import { DnsStage } from "./DnsStage";
import { dnsChips } from "@/lib/visuals/dns-chips";
import { HorizontalScalingStage } from "./HorizontalScalingStage";
import { horizontalScalingChips } from "@/lib/visuals/horizontal-scaling-chips";
import { IdempotencyStage } from "./IdempotencyStage";
import { idempotencyChips } from "@/lib/visuals/idempotency-chips";
import { IndexesStage } from "./IndexesStage";
import { indexesChips } from "@/lib/visuals/indexes-chips";
import { K6ThresholdsStage } from "./K6ThresholdsStage";
import { k6ThresholdsChips } from "@/lib/visuals/k6-thresholds-chips";
import { LoadBalancerStage } from "./LoadBalancerStage";
import { loadBalancerChips } from "@/lib/visuals/load-balancer-chips";
import { MessageQueueStage } from "./MessageQueueStage";
import { messageQueueChips } from "@/lib/visuals/message-queue-chips";
import { OauthOidcStage } from "./OauthOidcStage";
import { oauthOidcChips } from "@/lib/visuals/oauth-oidc-chips";
import { PubSubStage } from "./PubSubStage";
import { pubSubChips } from "@/lib/visuals/pub-sub-chips";
import { RateLimitingStage } from "./RateLimitingStage";
import { rateLimitingChips } from "@/lib/visuals/rate-limiting-chips";
import { ShardingStage } from "./ShardingStage";
import { shardingChips } from "@/lib/visuals/sharding-chips";
import { SlaSloSliStage } from "./SlaSloSliStage";
import { slaSloSliChips } from "@/lib/visuals/sla-slo-sli-chips";
import { TcpUdpStage } from "./TcpUdpStage";
import { tcpUdpChips } from "@/lib/visuals/tcp-udp-chips";
import { StepVisual } from "./StepVisual";
import type { Chip, StageProps } from "./StepVisual";

type Picture = {
  chips: (step: number, live: unknown) => readonly Chip[];
  stage: (props: StageProps) => ReactNode;
};

/** The picture of each visual, by the id of its definition in lib/visuals/defs.ts. */
const PICTURES: Readonly<Record<string, Picture>> = {
  "acid-base": { chips: acidBaseChips, stage: (props) => <AcidBaseStage {...props} /> },
  "availability": { chips: availabilityChips, stage: (props) => <AvailabilityStage {...props} /> },
  "caching": { chips: cachingChips, stage: (props) => <CachingStage {...props} /> },
  "cap-theorem": { chips: capTheoremChips, stage: (props) => <CapTheoremStage {...props} /> },
  "cdn": { chips: cdnChips, stage: (props) => <CdnStage {...props} /> },
  "circuit-breaker": { chips: circuitBreakerChips, stage: (props) => <CircuitBreakerStage {...props} /> },
  "consistent-hashing": { chips: consistentHashingChips, stage: (props) => <ConsistentHashingStage {...props} /> },
  "database-replication": { chips: databaseReplicationChips, stage: (props) => <DatabaseReplicationStage {...props} /> },
  "dns": { chips: dnsChips, stage: (props) => <DnsStage {...props} /> },
  "horizontal-scaling": { chips: horizontalScalingChips, stage: (props) => <HorizontalScalingStage {...props} /> },
  "idempotency": { chips: idempotencyChips, stage: (props) => <IdempotencyStage {...props} /> },
  "indexes": { chips: indexesChips, stage: (props) => <IndexesStage {...props} /> },
  "k6-thresholds": { chips: k6ThresholdsChips, stage: (props) => <K6ThresholdsStage {...props} /> },
  "load-balancer": { chips: loadBalancerChips, stage: (props) => <LoadBalancerStage {...props} /> },
  "message-queue": { chips: messageQueueChips, stage: (props) => <MessageQueueStage {...props} /> },
  "oauth-oidc": { chips: oauthOidcChips, stage: (props) => <OauthOidcStage {...props} /> },
  "pub-sub": { chips: pubSubChips, stage: (props) => <PubSubStage {...props} /> },
  "rate-limiting": { chips: rateLimitingChips, stage: (props) => <RateLimitingStage {...props} /> },
  "sharding": { chips: shardingChips, stage: (props) => <ShardingStage {...props} /> },
  "sla-slo-sli": { chips: slaSloSliChips, stage: (props) => <SlaSloSliStage {...props} /> },
  "tcp-udp": { chips: tcpUdpChips, stage: (props) => <TcpUdpStage {...props} /> },
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
