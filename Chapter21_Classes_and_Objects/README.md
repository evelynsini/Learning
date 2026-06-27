# Chapter 21 — Classes & Objects

Object-Oriented Programming in JavaScript — classes, constructors, methods, static members, and encapsulation.

## Files

| File | Topic |
|------|-------|
| `171_Class_Object.js` | Class skeleton: attributes + behavior |
| `172_Class_Object2.js` | Constructor runs when object is created |
| `173_Car.js` | Parameterised constructor, method invocation |
| `174_REAL_Browser.js` | Real-world: `TestCase` class with display method |
| `175_IQ.js` | Interview-style: `Browser` class |
| `176_Private_Public.js` | Private `#` fields for encapsulation |
| `177_Statis.js` | Static properties (`name`, `mentor_name`) and methods |
| `178_Statis.js` | Static `nationality` shared across all instances |

## Key Concepts

- **Class** — blueprint with attributes (data) and behavior (methods)
- **Constructor** — `constructor()` runs automatically on `new`
- **Object reference** — `obj_ref` holds the address, `new ClassName()` creates the instance
- **Private fields** — `#fieldName` hides data from outside access; exposed via a custom getter method
- **Static members** — belong to the class itself, not instances: `ClassName.property` or `ClassName.method()`

```js
class Person {
    static nationality = "India";
    constructor(name) {
        this.name = name;
    }
    static common_fn() { }
}
```
