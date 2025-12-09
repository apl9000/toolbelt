import { assertEquals } from "https://deno.land/std@0.210.0/assert/mod.ts";
import { slugify } from "./slugify.ts";

Deno.test("slugify - basic string", () => {
  assertEquals(slugify("Hello World"), "hello-world");
});

Deno.test("slugify - with punctuation", () => {
  assertEquals(slugify("Hello World!"), "hello-world");
});

Deno.test("slugify - with multiple spaces", () => {
  assertEquals(slugify("  Multiple   Spaces  "), "multiple-spaces");
});

Deno.test("slugify - with special characters", () => {
  assertEquals(slugify("Hello@World#2024"), "helloworld2024");
});

Deno.test("slugify - with dashes", () => {
  assertEquals(slugify("already-a-slug"), "already-a-slug");
});

Deno.test("slugify - empty string", () => {
  assertEquals(slugify(""), "");
});

Deno.test("slugify - with leading and trailing spaces", () => {
  assertEquals(slugify("  trim me  "), "trim-me");
});
