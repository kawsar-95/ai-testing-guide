import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { DEF } from "../lib/visuals/def-tcp-udp.ts";
import { tcpUdpChips } from "../lib/visuals/tcp-udp-chips.ts";
import { DEFAULT_LOSS, HANDSHAKE, PACKETS, STEP_COUNT, lostCount, lostPackets, runTcp, runUdp, tcpFatesAt, udpFatesAt } from "../lib/visuals/tcp-udp.ts";

test("the aha: at 20% loss TCP sends 2 again and gets all 10, UDP gets 8 and keeps 2 gaps", () => {
  const tcp = runTcp(20);
  const udp = runUdp(20);
  assert.equal(tcp.resent, 2);
  assert.equal(tcp.delivered, PACKETS);
  assert.equal(tcp.fates.includes("lost"), false);
  assert.equal(udp.delivered, 8);
  assert.equal(udp.gaps, 2);
});

test("with no loss both get everything; TCP always gets everything", () => {
  assert.equal(runUdp(0).delivered, PACKETS);
  assert.equal(runTcp(0).resent, 0);
  for (const loss of [0, 10, 20, 30, 40, 50]) {
    assert.equal(runTcp(loss).delivered, PACKETS);
    assert.equal(runUdp(loss).delivered, PACKETS - lostCount(loss));
  }
});

test("the lost packets are the same for TCP and UDP and grow with the slider", () => {
  assert.deepEqual(lostPackets(0), []);
  assert.equal(lostPackets(50).length, 5);
  assert.ok(lostPackets(20).every((p) => lostPackets(30).includes(p)));
  assert.deepEqual(lostPackets(20), lostPackets(20));
});

test("the handshake is three messages", () => {
  assert.deepEqual([...HANDSHAKE], ["SYN", "SYN+ACK", "ACK"]);
});

test("the scenes follow the story", () => {
  assert.ok(tcpFatesAt(1, DEFAULT_LOSS).every((f) => f === "none"));
  assert.ok(tcpFatesAt(2, DEFAULT_LOSS).every((f) => f === "arrived"));
  assert.equal(tcpFatesAt(3, 20).filter((f) => f === "lost").length, 2);
  assert.equal(tcpFatesAt(4, 20).filter((f) => f === "resent").length, 2);
  assert.ok(udpFatesAt(4, 20).every((f) => f === "none"));
  assert.equal(udpFatesAt(5, 20).filter((f) => f === "lost").length, 2);
});

test("the definition has 5 to 8 steps that match the scenes", () => {
  assert.equal(DEF.id, "tcp-udp");
  assert.ok(DEF.steps.length >= 5 && DEF.steps.length <= 8);
  assert.equal(DEF.steps.length, STEP_COUNT);
  for (const s of DEF.steps) assert.ok(s.body.en.split(/\s+/).length <= 40);
});

test("the chips function returns chips for every step", () => {
  for (let step = 0; step < STEP_COUNT; step += 1) {
    const chips = tcpUdpChips(step, undefined);
    assert.ok(chips.length >= 1);
    for (const chip of chips) assert.ok(chip.label.en.length > 0 && chip.label.bn.length > 0 && chip.value.length > 0);
  }
});

test("the chips follow the slider on the live steps", () => {
  const value = (step: number, live: unknown, label: string) => tcpUdpChips(step, live).find((c) => c.label.en === label)?.value;
  assert.equal(value(6, undefined, "UDP got"), "8 / 10");
  assert.equal(value(6, 50, "UDP got"), "5 / 10");
  assert.equal(value(6, 50, "TCP got"), "10 / 10");
  assert.equal(value(6, 0, "UDP gaps"), "0");
  assert.equal(value(4, 30, "Sent again"), "3");
  assert.equal(value(3, 40, "Lost"), "4 / 10");
});

test("the early steps ignore the slider, like the stage", () => {
  assert.deepEqual(tcpUdpChips(2, 50), tcpUdpChips(2, undefined));
});

test("the page shows the visual after PageMeta and before the first section", () => {
  const source = readFileSync(new URL("../content/course/tcp-udp.mdx", import.meta.url), "utf8");
  const meta = source.indexOf("<PageMeta />");
  const visual = source.indexOf('<Visual name="tcp-udp" />');
  assert.ok(meta > 0 && visual > meta && visual < source.indexOf("\n## "));
});
