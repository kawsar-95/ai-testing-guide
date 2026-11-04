import type { LinuxStageSlug } from "../stages.ts";
import type { StageSheet } from "../sheet.ts";
import { BOOT_SERVICES } from "./boot-services.ts";
import { CONTAINERS } from "./containers.ts";
import { DISKS_FILESYSTEMS } from "./disks-filesystems.ts";
import { FILES } from "./files.ts";
import { NETWORKING } from "./networking.ts";
import { PACKAGES } from "./packages.ts";
import { PROCESSES } from "./processes.ts";
import { SHELL_BASICS } from "./shell-basics.ts";
import { SHELL_SCRIPTING } from "./shell-scripting.ts";
import { TEXT_PROCESSING } from "./text-processing.ts";
import { TROUBLESHOOTING } from "./troubleshooting.ts";
import { USERS_PERMISSIONS } from "./users-permissions.ts";

/**
 * The sheet of each stage that has moved to the glance format. A stage with no
 * entry here still renders its lesson (content/linux/<slug>.mdx).
 */
export const SHEETS: Readonly<Partial<Record<LinuxStageSlug, StageSheet>>> = {
  "shell-basics": SHELL_BASICS,
  files: FILES,
  "text-processing": TEXT_PROCESSING,
  "users-permissions": USERS_PERMISSIONS,
  processes: PROCESSES,
  "shell-scripting": SHELL_SCRIPTING,
  packages: PACKAGES,
  "disks-filesystems": DISKS_FILESYSTEMS,
  networking: NETWORKING,
  "boot-services": BOOT_SERVICES,
  troubleshooting: TROUBLESHOOTING,
  containers: CONTAINERS,
};

export function getSheet(slug: string): StageSheet | undefined {
  return (SHEETS as Readonly<Record<string, StageSheet | undefined>>)[slug];
}
