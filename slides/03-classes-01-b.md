---
---

```javascript
  function User(name, friends) {
    if (this instanceof User) {
      this.name = name;
      this.friends = friends;
    } else {
      // >:(
      return new User(name, friends);
    }
  }

  User.prototype.friendNames = function() {
    return this.friends.map(friend => friend.name);
  }
```
