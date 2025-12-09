import { assertEquals, assertThrows } from "https://deno.land/std@0.210.0/assert/mod.ts";
import { chunk } from "./chunk.ts";

Deno.test("chunk - splits array into chunks", () => {
  const result = chunk([1, 2, 3, 4, 5], 2);
  assertEquals(result, [[1, 2], [3, 4], [5]]);
});

Deno.test("chunk - with exact division", () => {
  const result = chunk([1, 2, 3, 4], 2);
  assertEquals(result, [[1, 2], [3, 4]]);
});

Deno.test("chunk - with size 1", () => {
  const result = chunk(["a", "b", "c"], 1);
  assertEquals(result, [["a"], ["b"], ["c"]]);
});

Deno.test("chunk - with size larger than array", () => {
  const result = chunk([1, 2, 3], 10);
  assertEquals(result, [[1, 2, 3]]);
});

Deno.test("chunk - empty array", () => {
  const result = chunk([], 2);
  assertEquals(result, []);
});

Deno.test("chunk - throws error for invalid size", () => {
  assertThrows(
    () => chunk([1, 2, 3], 0),
    Error,
    "Chunk size must be greater than 0"
  );
});

Deno.test("chunk - throws error for negative size", () => {
  assertThrows(
    () => chunk([1, 2, 3], -1),
    Error,
    "Chunk size must be greater than 0"
  );
});

Deno.test("chunk - works with different types", () => {
  const result = chunk(["a", "b", "c", "d"], 2);
  assertEquals(result, [["a", "b"], ["c", "d"]]);
});
