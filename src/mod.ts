/**
 * @module
 * 
 * Toolkit is a lightweight collection of reusable TypeScript utilities for Deno.
 * It includes focused helpers for strings, async tasks, and data structures,
 * all published via JSR.
 * 
 * ## Usage
 * 
 * You can import individual utilities or everything at once:
 * 
 * ```ts
 * // Import specific utilities
 * import { slugify } from "@my-scope/toolkit/string";
 * import { sleep } from "@my-scope/toolkit/async";
 * import { chunk } from "@my-scope/toolkit/collections";
 * 
 * // Or import everything
 * import * as toolkit from "@my-scope/toolkit";
 * ```
 */

// String utilities
export { slugify } from "./string/slugify.ts";

// Async utilities
export { sleep } from "./async/sleep.ts";

// Collection utilities
export { chunk } from "./collections/chunk.ts";
