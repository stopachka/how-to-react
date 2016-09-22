---
style: |
  .exerslide-slide .Center-wrapper {
    text-align: left;
  }
  .exerslide-slide h1 {
    color: #444;
    margin-bottom: 0px;
    text-align: center;
  }
---

```javascript
const moves = history.map((step, i) => {
  const desc = step.move
    ? step.move.player + ' played at ' + step.move.location
    : 'Game start';
  return (
    <li>
      <a href="#" onClick={() => this._jumpTo(i)}>{desc}</a>
    </li>
  );
});
// ...
// <ol>{moves}</ol>
```
