// =============================================================================
// cn() — className merging utility
//
// Combines clsx (conditional classes) with tailwind-merge (conflict resolution).
// Without tailwind-merge, conflicting classes like "py-4 py-8" both apply and
// the last one wins unpredictably. tailwind-merge intelligently resolves this.
//
// Usage:
//   cn("px-4 py-2", isActive && "bg-blue-500", className)
//   cn("text-sm", props.large && "text-lg")  // tailwind-merge picks text-lg
// =============================================================================

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS class names safely, resolving conflicts intelligently.
 * Drop-in compatible with shadcn/ui's `cn` utility.
 *
 * @param {...(string|undefined|null|false|Record<string,boolean>)} inputs
 * @returns {string} Merged, conflict-free class string
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}