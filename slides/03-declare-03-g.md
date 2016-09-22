---
---
```javascript
if (count === 0) {
  return <div className="bell"></div>;
} else if (count <= 99) {
  return (
    <div className="bell">
      <span className="badge">{count}</span>
    </div>
  );
} else {
  return (
    <div className="bell onFire">
      <span className="badge">99+</span>
    </div>
  );
}
```
