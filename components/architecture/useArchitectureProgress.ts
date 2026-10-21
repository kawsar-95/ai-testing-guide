"use client";

import { progressHook } from "@/components/modules/useModuleProgress";
import { ARCHITECTURE } from "@/lib/architecture/topics";

/** The progress hook of the Architecture module: the shared hook of its storage key. */
export const useArchitectureProgress = progressHook(ARCHITECTURE);
