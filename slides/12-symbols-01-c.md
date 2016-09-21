---
layout: javascriptexercise-layout:javascriptexercise
layout_data:
  description: |
    It's really about name clashes
---
const _favorite = Symbol('favorite');

const stopa = {
  [_favorite]() {
    return 'I like anime';
  }
}

console.log(stopa['favorite']);
console.log(stopa[Symbol('favorite')]);
console.log(stopa[_favorite]);
