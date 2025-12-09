# @my-scope/toolkit

Toolkit is a lightweight collection of reusable TypeScript utilities for Deno. It includes focused helpers for strings, async tasks, and data structures, all published via JSR. Import only what you need or use the full toolkit to speed up development.

## Installation

```bash
deno add @my-scope/toolkit
```

Or import directly from JSR:

```typescript
import { slugify, sleep, chunk } from "jsr:@my-scope/toolkit";
```

## Usage

### String Utilities

#### `slugify(text: string): string`

Converts a string to a URL-friendly slug format.

```typescript
import { slugify } from "@my-scope/toolkit";

slugify("Hello World!"); // "hello-world"
slugify("  Multiple   Spaces  "); // "multiple-spaces"
```

### Async Utilities

#### `sleep(ms: number): Promise<void>`

Pauses execution for a specified number of milliseconds.

```typescript
import { sleep } from "@my-scope/toolkit";

await sleep(1000); // Wait for 1 second
console.log("Done!");
```

### Collection Utilities

#### `chunk<T>(array: T[], size: number): T[][]`

Splits an array into chunks of a specified size.

```typescript
import { chunk } from "@my-scope/toolkit";

chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
chunk(["a", "b", "c"], 1); // [["a"], ["b"], ["c"]]
```

## API Documentation

### String Module

- **slugify**: Converts strings to URL-friendly slugs by lowercasing, replacing spaces with hyphens, and removing special characters.

### Async Module

- **sleep**: Returns a promise that resolves after the specified milliseconds, useful for adding delays in async functions.

### Collections Module

- **chunk**: Divides arrays into smaller arrays of the specified size. The last chunk may contain fewer elements if the array length is not evenly divisible.

## Development

### Running Tests

```bash
deno test
```

### Project Structure

```
.
├── deno.json
├── README.md
├── LICENSE
├── .gitignore
└── src/
    ├── mod.ts
    ├── mod.test.ts
    ├── string/
    │   ├── slugify.ts
    │   └── slugify.test.ts
    ├── async/
    │   ├── sleep.ts
    │   └── sleep.test.ts
    └── collections/
        ├── chunk.ts
        └── chunk.test.ts
```

## License

MIT License - see [LICENSE](./LICENSE) file for details.
