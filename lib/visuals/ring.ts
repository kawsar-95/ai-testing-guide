/**
 * The data behind the consistent-hashing visual (components/visuals/ConsistentHashingStage.tsx).
 *
 * A fixed set of sample keys sits on a ring (0 to 360 degrees). A server owns a key if it is the
 * first server point that the key meets going clockwise. The scenes are plain data, so the
 * numbers on the chips come from a real run of the rule and `node --test` can check them
 * (tests/visuals.test.ts).
 */

export type Key = {
  /** The hash of the key as an integer. The modulo rule uses it. */
  hash: number;
  /** Where the hash sits on the ring, in degrees from 0 (inclusive) to 360 (exclusive). */
  angle: number;
};

export type Server = {
  name: string;
  /** The places of this server on the ring. One place, or several when it has virtual nodes. */
  angles: readonly number[];
};

export const KEY_COUNT = 30;

/** A small deterministic generator (mulberry32), so the sample is the same on every visit. */
function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const KEYS: readonly Key[] = (() => {
  const next = mulberry32(2024);
  return Array.from({ length: KEY_COUNT }, () => {
    const r = next();
    return { hash: Math.floor(r * 4294967296), angle: r * 360 };
  });
})();

const A = 20;
const B = 140;
const C = 250;
const D = 80;

export const SERVERS_3: readonly Server[] = [
  { name: "A", angles: [A] },
  { name: "B", angles: [B] },
  { name: "C", angles: [C] },
];
export const SERVERS_4: readonly Server[] = [...SERVERS_3, { name: "D", angles: [D] }];
export const SERVERS_WITHOUT_B: readonly Server[] = SERVERS_4.filter((s) => s.name !== "B");
/** Every server takes three places: its first place and two more. */
export const SERVERS_VIRTUAL: readonly Server[] = [
  { name: "A", angles: [A, 200, 320] },
  { name: "B", angles: [B, 40, 290] },
  { name: "C", angles: [C, 100, 350] },
  { name: "D", angles: [D, 170, 225] },
];

/** The owner of a key: the first server point at or after the key angle, going clockwise. */
export function ownerOf(angle: number, servers: readonly Server[]): string | null {
  const points = servers.flatMap((s) => s.angles.map((a) => ({ name: s.name, angle: a })));
  if (points.length === 0) return null;
  points.sort((p, q) => p.angle - q.angle);
  const hit = points.find((p) => p.angle >= angle);
  return (hit ?? points[0]).name;
}

export function ownersRing(servers: readonly Server[]): (string | null)[] {
  return KEYS.map((key) => ownerOf(key.angle, servers));
}

/** The plain rule: hash modulo the number of servers. */
export function ownersModulo(servers: readonly Server[]): (string | null)[] {
  if (servers.length === 0) return KEYS.map(() => null);
  return KEYS.map((key) => servers[key.hash % servers.length].name);
}

/** The flag of each key whose owner changed. */
export function movedFlags(before: readonly (string | null)[], after: readonly (string | null)[]): boolean[] {
  return after.map((owner, i) => before[i] !== null && owner !== before[i]);
}

export function countTrue(flags: readonly boolean[]): number {
  return flags.filter(Boolean).length;
}

/** The number of keys of each server (a server with no key has 0). */
export function loads(owners: readonly (string | null)[], servers: readonly Server[]): Record<string, number> {
  const out: Record<string, number> = Object.fromEntries(servers.map((s) => [s.name, 0]));
  for (const owner of owners) if (owner !== null) out[owner] += 1;
  return out;
}

export type Scene = {
  servers: readonly Server[];
  owners: (string | null)[];
  /** The keys that changed owner in this step. All false if the step moves nothing. */
  moved: boolean[];
  /** The number of keys that moved with each rule, if the step compares them. */
  movedRing: number;
  movedModulo: number;
  /** In the compare step: the rule that colors the keys, chosen by the reader. */
  rule: "ring" | "modulo";
};

const NONE = KEYS.map(() => false);

/** The scene of a step (0-based). `rule` only matters in the compare step (index 4). */
export function sceneFor(step: number, rule: "ring" | "modulo" = "ring"): Scene {
  const base3 = ownersRing(SERVERS_3);
  const base4 = ownersRing(SERVERS_4);
  const ring34 = movedFlags(base3, base4);
  const mod34 = movedFlags(ownersModulo(SERVERS_3), ownersModulo(SERVERS_4));
  const movedRing = countTrue(ring34);
  const movedModulo = countTrue(mod34);
  switch (step) {
    case 0:
      return { servers: [], owners: KEYS.map(() => null), moved: NONE, movedRing: 0, movedModulo: 0, rule };
    case 1:
      return { servers: SERVERS_3, owners: KEYS.map(() => null), moved: NONE, movedRing: 0, movedModulo: 0, rule };
    case 2:
      return { servers: SERVERS_3, owners: base3, moved: NONE, movedRing: 0, movedModulo: 0, rule };
    case 3:
      return { servers: SERVERS_4, owners: base4, moved: ring34, movedRing, movedModulo: 0, rule };
    case 4:
      return rule === "ring"
        ? { servers: SERVERS_4, owners: base4, moved: ring34, movedRing, movedModulo, rule }
        : { servers: SERVERS_4, owners: ownersModulo(SERVERS_4), moved: mod34, movedRing, movedModulo, rule };
    case 5: {
      const after = ownersRing(SERVERS_WITHOUT_B);
      return {
        servers: SERVERS_WITHOUT_B,
        owners: after,
        moved: movedFlags(base4, after),
        movedRing: countTrue(movedFlags(base4, after)),
        movedModulo: 0,
        rule,
      };
    }
    default: {
      const after = ownersRing(SERVERS_VIRTUAL);
      return { servers: SERVERS_VIRTUAL, owners: after, moved: NONE, movedRing: 0, movedModulo: 0, rule };
    }
  }
}

/** The largest and the smallest number of keys on one server. */
export function loadSpread(owners: readonly (string | null)[], servers: readonly Server[]): { max: number; min: number } {
  const counts = Object.values(loads(owners, servers));
  return { max: Math.max(0, ...counts), min: counts.length ? Math.min(...counts) : 0 };
}
