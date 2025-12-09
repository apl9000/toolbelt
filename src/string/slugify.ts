/**
 * Converts a string to a URL-friendly slug format.
 * 
 * @param text - The text to slugify
 * @returns A slugified version of the input string
 * 
 * @example
 * ```ts
 * import { slugify } from "@my-scope/toolkit/string";
 * 
 * slugify("Hello World!"); // "hello-world"
 * slugify("  Multiple   Spaces  "); // "multiple-spaces"
 * ```
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}
