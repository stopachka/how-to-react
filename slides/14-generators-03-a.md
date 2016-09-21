---
layout: javascriptexercise-layout:javascriptexercise
---

function* bestFriends(userName) {
    console.log(`${userName}'s best friends`);
    console.log(`1. ${yield}`);
    console.log(`2. ${yield}`);
}

window.bestFriends = bestFriends;

// play in console
// iter = bestFriends('jim');
// iter.next();
// iter.next();
// iter.next();
