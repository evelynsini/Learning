# Chapter 25 — OOP Interview Questions

Practical OOP exercises covering constructors, `this`, and method chaining.

## Files

| File | Topic |
|------|-------|
| `EX1.js` | `Bug` class — constructor, severity, `display()` |
| `EX2.cjs` | `Environment` — default parameter values (`staging:3000`) |
| `EX3.js` | `this` keyword — each object gets its own context |
| `EX4.js` | Method chaining — `return this` for fluent API |

## Key Concepts

- **Constructor** initialises object properties; default params provide fallbacks
- **`this`** refers to the current object instance — `u1.greet()` prints Alice's name, `u2.greet()` prints Bob's
- **Method chaining** — returning `this` from methods lets you call them in a chain: `.increment().increment().display()`

```js
class Bug {
    constructor(title, severity) {
        this.title = title;
        this.severity = severity;
    }
    display() {
        console.log("[" + this.severity + "] " + this.title);
    }
}
```
