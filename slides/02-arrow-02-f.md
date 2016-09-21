---
title: function() {} **vs** () => {}
layout: javascriptexercise-layout:javascriptexercise
layout_data:
  description: |
    What do you think `actions.run(1, 2, 3)` will log?
---
var actions = {
  run: function() {
    return (() => {
      console.log(arguments, this);
    })()
  },
};

actions.run(1, 2, 3);
