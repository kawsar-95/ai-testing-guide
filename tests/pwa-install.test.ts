import { test } from "node:test";
import assert from "node:assert/strict";
import vm from "node:vm";
import { INSTALL_CAPTURE_SCRIPT } from "../lib/pwa-install.ts";

/** Runs the inline head script against a fake window and returns it with its listeners. */
function runCaptureScript() {
  const listeners: Record<string, ((event: unknown) => void)[]> = {};
  const window: Record<string, unknown> = {
    addEventListener(type: string, listener: (event: unknown) => void) {
      (listeners[type] ??= []).push(listener);
    },
  };
  vm.runInNewContext(INSTALL_CAPTURE_SCRIPT, { window });
  return { window, listeners };
}

test("INSTALL_CAPTURE_SCRIPT keeps an early beforeinstallprompt event for InstallButton", () => {
  const { window, listeners } = runCaptureScript();
  assert.equal(listeners.beforeinstallprompt?.length, 1);
  let prevented = false;
  const event = { preventDefault: () => (prevented = true) };
  listeners.beforeinstallprompt[0](event);
  assert.equal(prevented, true);
  assert.equal(window.__installPrompt, event);
});

test("INSTALL_CAPTURE_SCRIPT stores nothing before the event", () => {
  const { window } = runCaptureScript();
  assert.equal(window.__installPrompt, undefined);
});
