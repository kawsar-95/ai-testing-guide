/** Data and rules of the idempotency visual: a payment API that gets the same request twice. Pure and deterministic. */

export type Request = { key: string | null; amount: number };
export type Charge = { amount: number; duplicate: boolean };
export type Outcome = "charged" | "replayed" | "rejected";
export type Server = {
  charges: readonly Charge[];
  /** The first request saved for each idempotency key. */
  saved: Readonly<Record<string, number>>;
};

export const KEY = "K1";
export const AMOUNT = 50;
export const OTHER_AMOUNT = 80;
export const LAST_STEP = 4;

export const EMPTY_SERVER: Server = { charges: [], saved: {} };

/**
 * The rule of the server. Without a key it cannot tell a retry from a new payment, so it charges.
 * With a key it charges once, then returns the saved answer for the same key and data,
 * and rejects the same key with other data.
 */
export function handle(server: Server, req: Request): { server: Server; outcome: Outcome } {
  if (req.key !== null) {
    const first = server.saved[req.key];
    if (first !== undefined) {
      return { server, outcome: first === req.amount ? "replayed" : "rejected" };
    }
  }
  const saved = req.key === null ? server.saved : { ...server.saved, [req.key]: req.amount };
  const charges = [...server.charges, { amount: req.amount, duplicate: server.charges.length > 0 }];
  return { server: { charges, saved }, outcome: "charged" };
}

export type Message = {
  from: "client" | "api" | "db";
  to: "client" | "api" | "db";
  label: string;
  kind: "plain" | "lost" | "good" | "bad";
};

export type Scene = {
  server: Server;
  messages: readonly Message[];
  sent: number;
  /** The server has the retry and shows its answer. */
  outcome: Outcome | null;
};

/** The scene of a step. Steps 0..3 are the retry after a timeout; step 4 reuses the key with other data (always with the key). */
export function sceneFor(step: number, useKey: boolean): Scene {
  const key = useKey || step === LAST_STEP ? KEY : null;
  const tag = key === null ? "" : ` · ${key}`;
  const messages: Message[] = [];
  let server = EMPTY_SERVER;
  let sent = 0;
  let outcome: Outcome | null = null;

  if (step === LAST_STEP) {
    // The first payment is already done: the server saved it before this step.
    server = handle(server, { key, amount: AMOUNT }).server;
    const second = handle(server, { key, amount: OTHER_AMOUNT });
    messages.push({ from: "client", to: "api", label: `pay ${OTHER_AMOUNT}${tag}`, kind: "plain" });
    messages.push({ from: "api", to: "client", label: "error", kind: "bad" });
    return { server: second.server, messages, sent: 2, outcome: second.outcome };
  }

  messages.push({ from: "client", to: "api", label: `pay ${AMOUNT}${tag}`, kind: "plain" });
  sent = 1;
  if (step >= 1) {
    const first = handle(server, { key, amount: AMOUNT });
    server = first.server;
    messages.push({ from: "api", to: "db", label: "charge", kind: "plain" });
    messages.push({ from: "api", to: "client", label: "reply lost", kind: "lost" });
  }
  if (step >= 2) {
    messages.push({ from: "client", to: "api", label: `retry ${AMOUNT}${tag}`, kind: "plain" });
    sent = 2;
  }
  if (step >= 3) {
    const second = handle(server, { key, amount: AMOUNT });
    server = second.server;
    outcome = second.outcome;
    if (second.outcome === "charged") {
      messages.push({ from: "api", to: "db", label: "charge", kind: "bad" });
      messages.push({ from: "api", to: "client", label: "ok", kind: "plain" });
    } else {
      messages.push({ from: "api", to: "client", label: "saved reply", kind: "good" });
    }
  }
  return { server, messages, sent, outcome };
}

export function chargeCount(scene: Scene): number {
  return scene.server.charges.length;
}
