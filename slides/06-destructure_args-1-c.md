---
---
```javascript
  function introduce({name}) {
    var others = Array.prototype.slice.call(arguments, 1);
    others.forEach(({lastName}) => salute(name, lastName));
  }
```
