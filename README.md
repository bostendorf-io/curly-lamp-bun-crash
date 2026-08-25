# BUN test issue reproducer

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run reproducer/makeTests.ts
bun test # works as expected
bun test --parallel=8 # crashes when running once or twice
```



This project was created using `bun init` in bun v1.4.0. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
