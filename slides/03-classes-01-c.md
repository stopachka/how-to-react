---
---

```javascript
  class User {
    constructor(name, friends) {
      this.name = name;
      this.friends = friends;
    }
    friendNames() {
      return this.friends.map(friend => friend.name);
    }
  }
```
