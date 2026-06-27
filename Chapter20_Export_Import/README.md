# Chapter 20 — Export & Import (ES Modules)

This chapter demonstrates **ES Module syntax** — how to share code between JavaScript files using `export` and `import`.

## Files

| File | Description |
|------|-------------|
| `utils.js` | Named exports: `BASE_URL` and `formatTestName` |
| `logger.js` | Default export (`log`) + named export (`log2`) |
| `testutils.js` | Named exports with different naming conventions |
| `Export Import/` | Subdirectory with additional examples |

## Key Concepts

- **Named exports** — multiple per file, imported with curly braces using exact names: `import { BASE_URL } from './utils.js'`
- **Default exports** — one per file, imported without braces, can be renamed: `import myLog from './logger.js'`
- **Mixed exports** — a file can have both default and named exports
- **Alias imports** — rename on import: `import { formatTestName as fn } from './utils.js'`

## Usage

Run files with `--experimental-modules` or set `"type": "module"` in `package.json`:

```bash
node Export Import/168_EXPORT_IMPORT.js
```

See `Export Import/ExplainDefault.md` for a deep dive on default exports vs named exports.
