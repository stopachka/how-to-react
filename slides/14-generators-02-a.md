---
title: function* play() {}
layout: javascriptexercise-layout:javascriptexercise
layout_data:
  description: |
    Create a generator, which given an object, returns an iterator if it's values;
---
function* objectValues(obj) {
  const keys = Reflect.ownKeys(obj);
  // TODO
}

const cake = {
  topping: 'chocolate',
  base: 'vanilla',
};

for (let x of objectValues(cake)) {
  console.log(x);
}

// play with these values in console
window.cake = cake;
window.objectValues = objectValues;
// iter = objectValues(cake);
// iter.next();
// Iter.next();
