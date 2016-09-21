---
title: (x) => x.play
layout: javascriptexercise-layout:javascriptexercise
layout_data:
  description: |
    Change the following code, to use arrow functions.
---
function Person(name, sec) {
  this.name = name;
  this.age = sec;
  var that = this;
  window.setInterval(
    function() {
      that.age++;
    },
    1000
  );
}

var john = new Person('john', 0);
var jenny = new Person('jenny', 1000);
var jim = new Person('jim', 2000);

function isOlder(personA, personB) {
  return personB.age > personA.age;
}

var olderThanJenny = [john, jim].filter(function(person) {
  return isOlder(jenny, person);
}).map(function(person) {
  return person.name;
})

console.log(olderThanJenny);

window.setTimeout(function() {
  const agePairs = [jenny, john, jim]
    .sort(function(personA, personB) {
      return personA.age - personB.age;
    })
    .map(function(person) {
      return [person.name, person.age];
    })
  ;
  console.log(agePairs)
}, 1000)
