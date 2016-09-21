---
---
```javascript
const evenNumbers = {
  [Symbol.iterator]() {
    return {
      next() {

      }
    }
  }
}
// interface Iterator {
//     next() : IteratorResult;
// }
```
