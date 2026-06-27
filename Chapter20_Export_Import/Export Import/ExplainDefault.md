## Default Export / Import

**Default Export** allows a module to export a single value as its "main" export.

### Syntax

```js
// Exporting
export default function greet(name) {
    return `Hello, ${name}!`;
}

// or
export default class User { ... }

// or (expression)
export default 'config_value';
```

### Importing

When importing a default export, you can assign **any name** — no curly braces needed.

```js
// Named import (for named exports)
import { specificThing } from './module.js';

// Default import (for default export)
import anyName from './module.js';
import greet from './utils.js';
import myFunction from './utils.js'; // works because default export has no fixed name
```

### Key Rules

| Rule | Example |
|------|---------|
| Only **one** default export per module | `export default foo` ✅ — `export default bar` ❌ |
| No curly braces on import | `import x from './mod.js'` ✅ — `import { x } from './mod.js'` ❌ |
| Can name it anything | `import foo from './mod.js'` or `import bar from './mod.js'` — both work |
| Can combine with named exports | `import defaultFn, { named1, named2 } from './mod.js'` |

### Named vs Default

```js
// ------ named exports ------
export const API_URL = 'https://api.example.com';
export function fetchUsers() { ... }
// Import must use exact names:
import { API_URL, fetchUsers } from './api.js';

// ------ default export ------
export default function fetchUsers() { ... }
// Import can use any name:
import getUsers from './api.js';
import fetchData from './api.js';
```

### When to Use Default Export

- Module has one clear primary purpose (e.g., a single class or function)
- React components (convention: one component per file, default-exported)
- Quick prototyping where naming flexibility on import is helpful
