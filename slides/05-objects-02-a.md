---
title: '{user, play}'
layout: javascriptexercise-layout:javascriptexercise
layout_data:
  description: |
    User what you learned to condense the code below.
---
function createUser(name, friends, secretKey) {
  var res = {
    name: name,
    friends: friends,
  };
  res[secretKey] = function() {
    return 'hi there :)';
  };
  return res;
}

var stepan = createUser('Stepan', [], 'boom');
console.log(stepan);
console.log(stepan.boom());
