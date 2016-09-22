---
layout: Center
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

# Showing the moves

- Add a unique `key` on each `<li>` (step.when)
- add a `stepNumber` in the intitialState
- Implement `jumpTo`, which changes the `stepNumber`
- Use `stepNumber` in render, to show the desired history
