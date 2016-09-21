---
---
```javascript
  function introduce(user) {
    var name = user.name;
    var others = Array.prototype.slice.call(arguments, 1);
    others.forEach(other => salute(name, other.lastName));
  }
```
