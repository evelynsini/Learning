# Chapter 23 — Inheritance

Reusing and extending classes using `extends` and `super`.

## Files

| File | Topic |
|------|-------|
| `183_Single_Inheritance.js` | `BasePage` → `LoginPage` (POM style) |
| `184_SI_Example.js` | `Animal` → `Dog`, `super(name)` for parent constructor |
| `185_Single_Inheritance_Con.js` | Method overriding — `BaseTest` → `APITest` |
| `186_IQ.js` | `super.method()` to extend parent behavior |
| `187_IQ2.js` | Polymorphism — `TestCase` hierarchy in a loop |
| `188_REAL_PageObject_Model.js` | POM: `BasePage` → `LoginPage` / `DashboardPage` / `CartPage` |
| `189_Multiple_Inheritance.js` | ❌ JS does not support multiple inheritance (`extends A, B`) |
| `190_Multiple_Level_Inheritance.js` | Multilevel: `BasePage` → `AuthPage` → `AdminPage` |
| `191_Hierarchial_Inheritance.js` | Hierarchical: `Father` → `Son1`, `Son2` |

## Key Concepts

- **`extends`** — child class inherits all parent methods
- **`super()`** — calls the parent constructor (must come before `this`)
- **`super.methodName()`** — calls a parent method from an overridden child method
- **Method overriding** — child redefines a parent method with its own logic
- **Polymorphism** — treat different child classes as their parent type; the correct method runs based on the actual object

```js
class BasePage {
    open() { console.log("Opening page"); }
}

class LoginPage extends BasePage {
    open() {
        super.open();
        console.log("Navigating to login URL");
    }
}
```
