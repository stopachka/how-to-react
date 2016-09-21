---
---

```javascript
  function AdminUser(name, friends) {
    if (this instanceof AdminUser) {
      return User.call(this, name, friends);
    } else {
      return new AdminUser(name, friends);
    }
  }

  AdminUser.prototype = Object.create(User.prototype);
  // :<

  AdminUser.prototype.deleteUser = function(id) {
    return deleteUser(id);
  }

```
