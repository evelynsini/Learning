# Chapter 22 — Encapsulation

Hiding internal data and exposing controlled access using private `#` fields.

## Files

| File | Topic |
|------|-------|
| `179_Ecap.js` | `BankAccount` — private `#balance`, deposit, getter |
| `180_REAK_EXAMPLE.js` | `Person` — private `#child1`/`#child2` with getter/setter |
| `181_Ecap_Car.js.js` | `Car` — private `#engine`, `getEngine()` / `setEngine()` |
| `182_ECap_Bank.js` | `ICICI` — role-based setter (`isCashier` guard) |

## Key Concepts

- **Private fields (`#`)** — truly private, cannot be accessed outside the class
- **Getter methods** — controlled read access: `getBalance()`, `getEngine()`
- **Setter methods** — controlled write access, can include validation or guards
- **Why encapsulate?** — prevent accidental corruption, enforce business rules

```js
class BankAccount {
    #balance = 0;

    deposit(amount) {
        if (amount > 0) this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}
```

`account.#balance` would throw a SyntaxError — only methods inside the class can touch `#` fields.
