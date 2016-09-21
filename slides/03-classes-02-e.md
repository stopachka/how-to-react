---
---

```javascript
  class AdminUser extends User {
    static getLevel() {
      return 5;
    }
    constructor(name, friends) {
      super(name, friends);
      this.title = name + ' overlord';
    }
    deleteUser(id) {
      return deleteUser(id);
    }
  }
```
