"use client";

import { createUseProgress } from "@/components/prep/useProgress";
import { ARCHITECTURE_STORAGE_KEY } from "@/lib/architecture/topics";

/** The progress hook of the Architecture module. It is made one time, here, at module level. */
export const useArchitectureProgress = createUseProgress(ARCHITECTURE_STORAGE_KEY);
