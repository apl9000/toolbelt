import { assertEquals } from "https://deno.land/std@0.210.0/assert/mod.ts";
import { sleep } from "./sleep.ts";

Deno.test("sleep - waits for specified time", async () => {
  const start = Date.now();
  await sleep(100);
  const end = Date.now();
  const elapsed = end - start;
  
  // Allow some tolerance for timing (90ms to 200ms)
  assertEquals(elapsed >= 90, true);
  assertEquals(elapsed < 200, true);
});

Deno.test("sleep - with zero milliseconds", async () => {
  const start = Date.now();
  await sleep(0);
  const end = Date.now();
  const elapsed = end - start;
  
  // Should complete very quickly
  assertEquals(elapsed < 50, true);
});

Deno.test("sleep - returns a promise", () => {
  const result = sleep(10);
  assertEquals(result instanceof Promise, true);
});
