# Chapter 24 — Polymorphism

Polymorphism through method overriding — child classes redefine parent methods with their own behavior.

## Files

| File | Topic |
|------|-------|
| `192_Method_Overriding.js` | `BaseTest` → `APIPage`, child overrides `setup()` |

## Key Concepts

- **Method overriding** — child class defines a method with the same name as its parent
- **Runtime polymorphism** — the actual object's method runs, not the reference type's
- JS doesn't support method overloading (same name, different params) — only overriding

```js
class BaseTest {
    setup() {
        console.log("Base: open browser");
    }
}

class APIPage extends BaseTest {
    setup() {
        console.log("APITest: open browser");
    }
}

let test = new APIPage();
test.setup();  // "APITest: open browser"
```

Even though `test` is typed as `BaseTest` conceptually, the child's version runs because the actual object is `APIPage`.
