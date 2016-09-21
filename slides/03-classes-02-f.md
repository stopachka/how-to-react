---
title: class User { static play() {} }
layout: javascriptexercise-layout:javascriptexercise
layout_data:
  description: |
    Change the following code, to use classes.
---
function Animal(type) {
  if (this instanceof Animal) {
    this.type = type;
  } else {
    return new Animal(type);
  }
}


Animal.prototype.getType = function() {
  return this.type;
}

function Human(name) {
  if (this instanceof Human) {
    Animal.call(this, 'human');
    this.name = name;
  } else {
    return new Human(name);
  }
}

Human.prototype = Object.create(Animal.prototype);

Human.prototype.sayHello = function() {
  return 'hello, my name is ' + this.name;
}

var jamie = new Human('jamie');

console.log(jamie.getType());
console.log(jamie.sayHello());
