---
layout: javascriptexercise-layout:javascriptexercise
---
const evenNumbers = {
  [Symbol.iterator]() {
    let value = 0;
    return {
      next() {
        const result = {done: false, value};
        value += 2;
        return result;
      }
    }
  }
}

window.evenNumbers = evenNumbers;

for (let n of evenNumbers) {
  if (n > 10) break;
  console.log(n);
}
