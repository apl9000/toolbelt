import { assertEquals, assert } from "https://deno.land/std@0.210.0/assert/mod.ts";
import { slugify, sleep, chunk } from "./mod.ts";

Deno.test("mod - exports slugify function", () => {
  assertEquals(typeof slugify, "function");
  assertEquals(slugify("Test String"), "test-string");
});

Deno.test("mod - exports sleep function", async () => {
  assertEquals(typeof sleep, "function");
  const start = Date.now();
  await sleep(50);
  const elapsed = Date.now() - start;
  assert(elapsed >= 40);
});

Deno.test("mod - exports chunk function", () => {
  assertEquals(typeof chunk, "function");
  assertEquals(chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
});
