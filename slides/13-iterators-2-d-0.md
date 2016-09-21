---
---
```javascript
const evenNumbers = {
  [Symbol.iterator]() {
    let value = 0;
    return {
      next() {
        const result = {done: false, value};
        value += 2;
        return result;
      }
    }
  }
}
// interface IteratorResult {
//     value: any;
//     done: boolean;
// }
```
