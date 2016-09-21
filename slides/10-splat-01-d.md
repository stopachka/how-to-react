---
title: (action = play) => action()
layout: javascriptexercise-layout:javascriptexercise
layout_data:
  description: |
    Apply what you learned about destructuring, default arguments, and splat on the code below
---

// ------------------------------------------------------------
// Setup

function sendMessage() {}
const users = [{address: 1}, {address: 2}, {address: 3}];
const me = {id: 0};


// ------------------------------------------------------------
// Edit below

function surprise(me) {
  var friends = Array.prototype.slice.call(arguments, 1);
  friends.forEach(
    (friend) => sendCongrats(me.id, friend.address, 'Surprise!')
  );
}

function sendCongrats(senderId, receiverAddr, message) {
  var message = message === undefined ? '<3 you!' : 'message';
  console.log(senderId + ' congrats ' + receiverAddr + ' with ' + message);
}

var butFirst = users.slice(1);
surprise.apply(null, [me].concat(butFirst));
