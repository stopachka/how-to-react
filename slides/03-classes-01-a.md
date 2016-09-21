---
---

```javascript
  function User(name, friends) {
    this.name = name;
    this.friends = friends;
  }

  User.prototype.friendNames = function() {
    return this.friends.map(friend => friend.name);
  }
```
