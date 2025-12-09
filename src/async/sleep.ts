/**
 * Pauses execution for a specified number of milliseconds.
 * 
 * @param ms - The number of milliseconds to sleep
 * @returns A promise that resolves after the specified time
 * 
 * @example
 * ```ts
 * import { sleep } from "@my-scope/toolkit/async";
 * 
 * await sleep(1000); // Wait for 1 second
 * console.log("Done!");
 * ```
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
