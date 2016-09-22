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
history = [
  {
    squares: [null x 9],
    xIsNext: true,
    move: null,  // Initial board has no corresponding move
    when: /* timestamp */,
  },
  {
    squares: [... x 9],
    xIsNext: false,
    move: {player: 'X', location: 4},
    when: /* timestamp */,
  },
  ...
]
```
