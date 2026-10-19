"use client";

import { createUseProgress } from "@/components/prep/useProgress";
import { FUNDAMENTALS_STORAGE_KEY } from "@/lib/fundamentals/chapters";

/** The progress hook of the Fundamentals module. It is made one time, here, at module level. */
export const useFundamentalsProgress = createUseProgress(FUNDAMENTALS_STORAGE_KEY);
