import type { Chip } from "./chips.ts";
import { DEFAULT_LOSS, FIRST_LIVE_STEP, HANDSHAKE, MAX_LOSS, MIN_LOSS, PACKETS, clampLoss, lostCount, runTcp, runUdp } from "./tcp-udp.ts";

/**
 * The live numbers of each step. `live` is the packet loss percent that the slider sets (a number).
 * Steps before the slider appears use the default loss, like the stage.
 */
export function tcpUdpChips(step: number, live: unknown): readonly Chip[] {
  const slider = typeof live === "number" && Number.isFinite(live) ? clampLoss(Math.min(MAX_LOSS, Math.max(MIN_LOSS, live))) : DEFAULT_LOSS;
  const loss = step >= FIRST_LIVE_STEP ? slider : DEFAULT_LOSS;
  const tcp = runTcp(loss);
  const udp = runUdp(loss);
  const sent: Chip = { label: { en: "Packets sent", bn: "পাঠানো packet" }, value: String(PACKETS) };
  const lossChip: Chip = { label: { en: "Packet loss", bn: "packet loss" }, value: `${loss}%` };
  if (step === 0) return [sent];
  if (step === 1) return [{ label: { en: "Messages", bn: "মেসেজ" }, value: `${HANDSHAKE.length}` }, sent];
  if (step === 2) return [{ label: { en: "TCP got", bn: "TCP পেল" }, value: `${PACKETS} / ${PACKETS}` }, sent];
  if (step === 3) return [lossChip, { label: { en: "Lost", bn: "হারাল" }, value: `${lostCount(loss)} / ${PACKETS}` }];
  if (step === 4) {
    return [lossChip, { label: { en: "Sent again", bn: "আবার পাঠানো" }, value: String(tcp.resent) }, { label: { en: "TCP got", bn: "TCP পেল" }, value: `${tcp.delivered} / ${PACKETS}` }];
  }
  if (step === 5) return [lossChip, { label: { en: "UDP got", bn: "UDP পেল" }, value: `${udp.delivered} / ${PACKETS}` }];
  return [
    lossChip,
    { label: { en: "TCP got", bn: "TCP পেল" }, value: `${tcp.delivered} / ${PACKETS}` },
    { label: { en: "UDP got", bn: "UDP পেল" }, value: `${udp.delivered} / ${PACKETS}` },
    { label: { en: "UDP gaps", bn: "UDP ফাঁক" }, value: String(udp.gaps) },
  ];
}
