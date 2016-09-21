---
---
```javascript
  function FriendButton() {
    var button = document.getElementById('friend-btn');
    var that = this;
    button.addEventListener('click', function() {
      that._handleClick();
    });
  }
```
