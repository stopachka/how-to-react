---
---
```javascript
if (count > 99) {
  if (!hasFire()) {
    addFire();
  } else {
    if (hasFire()) {
      removeFire();
    }
  }
  if (count === 0) {
    if (hasBadge()) {
      removeBadge();
    }
    return
  }    
  if (!hasBadge()) {
    addBadge();
  }
    


```
