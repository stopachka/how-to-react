---
---
```javascript
var [firstUser, ...others] = users;
var {profile: {isCool}} = firstUser;

if (isCool) { introduce(...users) }
```
