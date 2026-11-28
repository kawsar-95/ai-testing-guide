/**
 * The rules behind the CAP visual (components/visuals/CapTheoremStage.tsx).
 *
 * Two nodes, A (group 1) and B (group 2), keep a copy of one value. A client writes on A and
 * reads on B. When the link is up, a write reaches B. When the link is cut, all messages between
 * the groups are lost, so B keeps its old copy. A read on B must then be refused (consistency
 * kept, availability lost) or answered with the old copy (availability kept, consistency lost).
 * The numbers are the results of these rules (tests/visual-cap-theorem.test.ts).
 */

export type Choice = "C" | "A";

export type Cluster = {
  linkUp: boolean;
  /** The value that node A holds. */
  a: number;
  /** The value that node B holds. */
  b: number;
};

export type Read = {
  /** True when the read got a response. */
  served: boolean;
  /** The value in the response, or null when the read was refused. */
  value: number | null;
};

/** The value both nodes hold at the start. */
export const START_VALUE = 1;
/** The value written while the link is up. */
export const HEALTHY_WRITE = 2;
/** The value written on A during the partition. */
export const PARTITION_WRITE = 3;

export function start(): Cluster {
  return { linkUp: true, a: START_VALUE, b: START_VALUE };
}

export function cutLink(c: Cluster): Cluster {
  return { ...c, linkUp: false };
}

export function restoreLink(c: Cluster): Cluster {
  // Both sides end up with the latest write, which is A's value in this scene.
  return { linkUp: true, a: c.a, b: c.a };
}

/** A write on node A. It reaches B only when the link is up. */
export function writeOnA(c: Cluster, value: number): Cluster {
  return { ...c, a: value, b: c.linkUp ? value : c.b };
}

/** A read on node B. During a partition, the choice decides. */
export function readOnB(c: Cluster, choice: Choice): Read {
  if (c.linkUp) return { served: true, value: c.b };
  return choice === "C" ? { served: false, value: null } : { served: true, value: c.b };
}

/** A served read is stale when it returns something other than the latest write (A's value). */
export function isStale(c: Cluster, read: Read): boolean {
  return read.served && read.value !== c.a;
}

export type Scene = {
  cluster: Cluster;
  /** The read on B, from step 0 (healthy) and from step 3 on. Null when there is no read yet. */
  read: Read | null;
  /** True when the write of this step is shown moving. */
  writing: boolean;
};

/** The cluster at each step (0 to 4) and the read on B, for the given choice. */
export function sceneFor(step: number, choice: Choice = "C"): Scene {
  let c = start();
  c = writeOnA(c, HEALTHY_WRITE); // step 0: healthy, the write reaches B
  if (step === 0) return { cluster: c, read: readOnB(c, choice), writing: true };
  c = cutLink(c); // step 1
  if (step === 1) return { cluster: c, read: null, writing: false };
  c = writeOnA(c, PARTITION_WRITE); // step 2
  if (step === 2) return { cluster: c, read: null, writing: true };
  if (step === 3) return { cluster: c, read: readOnB(c, choice), writing: false };
  c = restoreLink(c); // step 4
  return { cluster: c, read: readOnB(c, choice), writing: false };
}
