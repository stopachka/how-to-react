---
---
```javascript
function* evenNumbers() {
  let value = 0;
  while(true) {
    yield value;
    value += 2
  }
}
```
