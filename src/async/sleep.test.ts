import { assertEquals, assert } from "https://deno.land/std@0.210.0/assert/mod.ts";
import { sleep } from "./sleep.ts";

Deno.test("sleep - waits for specified time", async () => {
  const start = Date.now();
  await sleep(100);
  const end = Date.now();
  const elapsed = end - start;
  
  // Allow some tolerance for timing (90ms to 200ms)
  assert(elapsed >= 90);
  assert(elapsed < 200);
});

Deno.test("sleep - with zero milliseconds", async () => {
  const start = Date.now();
  await sleep(0);
  const end = Date.now();
  const elapsed = end - start;
  
  // Should complete very quickly
  assert(elapsed < 50);
});

Deno.test("sleep - returns a promise", () => {
  const result = sleep(10);
  assertEquals(result instanceof Promise, true);
});
