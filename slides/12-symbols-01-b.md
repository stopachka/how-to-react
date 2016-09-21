---
layout: javascriptexercise-layout:javascriptexercise
layout_data:
  description: |
    Get stopa's secret without using the variable 'secret'
---
const secret = Symbol('secret');

const stopa = {
  [secret]() {
    return 'I like anime';
  }
}

const ownKeys = Reflect.ownKeys(stopa);
