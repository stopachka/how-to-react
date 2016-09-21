---
layout: javascriptexercise-layout:javascriptexercise
layout_data:
  description: |
    Write an iterable of all numbers divisible by 10, and print all numbers divisible by ten, smaller then 100
---
const tens = {
  [Symbol.iterator]() {
    return {
      next() {
        // TODO
      }
    }
  }
}

for (let num of tens) {
  // TODO
}
