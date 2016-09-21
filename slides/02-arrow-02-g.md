---
title: function() {} **vs** () => {}
layout: javascriptexercise-layout:javascriptexercise
layout_data:
  description: |
    What do you think will happen if we create a `new Animal('bear')`
---
function Animal(type) {
  this.type = type;
}

Animal.prototype.lastName = function() {
  return this.type;
}

const animal = new Animal('bear');
alert(animal.lastName());
