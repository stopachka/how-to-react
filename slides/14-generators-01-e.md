---
layout: javascriptexercise-layout:javascriptexercise
layout_data:
  description: |
    Play with `evenNumbers` in the console
---
function* evenNumbers() {
  let value = 0;
  while(true) {
    yield value;
    value += 2
  }
}

for (let n of evenNumbers()) {
  if (n > 10) break;
  console.log(n);
}

window.evenNumbers = evenNumbers;
// iter = evenNumbers();
// iter.next();
// Iter.next();
