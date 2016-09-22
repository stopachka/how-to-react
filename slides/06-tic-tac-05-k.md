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

# Declare a winner

- The `calculateWinner(squares)` returns whoever has won. use this value in render, to conditionally show a Winner: [X/Y] tag
- Update `handleClick` to ignore clicks if someone has won the game or if a square is already filled
