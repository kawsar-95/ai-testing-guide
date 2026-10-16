"use client";

import { createUseProgress } from "@/components/prep/useProgress";
import { LINUX_STORAGE_KEY } from "@/lib/linux/stages";

/** The progress hook of the Linux module. It is made one time, here, at module level. */
export const useLinuxProgress = createUseProgress(LINUX_STORAGE_KEY);
