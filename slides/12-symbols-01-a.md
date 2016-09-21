---
layout: javascriptexercise-layout:javascriptexercise
layout_data:
  description: |
    Get stopa's secret
---
const secret = Symbol('secret');
const secretTwo = Symbol('secret');

const stopa = {
  [secret]() {
    return 'I like anime';
  }
}
