/**
 * Splits an array into chunks of a specified size.
 * 
 * @param array - The array to chunk
 * @param size - The size of each chunk
 * @returns An array of chunks
 * 
 * @example
 * ```ts
 * import { chunk } from "@my-scope/toolkit/collections";
 * 
 * chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
 * chunk(["a", "b", "c"], 1); // [["a"], ["b"], ["c"]]
 * ```
 */
export function chunk<T>(array: T[], size: number): T[][] {
  if (size <= 0) {
    throw new Error("Chunk size must be greater than 0");
  }
  
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}
