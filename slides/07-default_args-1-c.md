---
title: Understanding Default arguments
layout: javascriptexercise-layout:javascriptexercise
layout_data:
  description: |
    What do you think `salute('steve', null)`, and `salute('steve', undefined)` will output
---
function salute(name, lastName = 'a great fellow') {
  console.log(name + ' salutes ' + lastName);
}

// play in console
window.salute = salute;
// console.log(salute('steve', 'Paru'))
// console.log(salute('steve'))
// console.log(salute('steve', undefined))
// console.log(salute('steve', null));
