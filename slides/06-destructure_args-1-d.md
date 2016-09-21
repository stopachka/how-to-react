---
---
```javascript
  function introduce({name}, ...others) {
    others.forEach(({lastName}) => salute(name, lastName));
  }
```
