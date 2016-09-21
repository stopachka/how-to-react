---
---

```javascript
  class AdminUser extends User {
    static getLevel() {
      return 5;
    }
    deleteUser(id) {
      return deleteUser(id);
    }
  }
```
