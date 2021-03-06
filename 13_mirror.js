/*

Write a function that when given an object, returns a new object, with the keys
mirrored.

*/

var object = { one: 1, two: 2, three: 3, four: 4, five: 5 };

function mirror(obj) {
  var newObj = {};
  var keys = Object.keys(obj);
  keys.reverse();
  for (var i = 0; i < keys.length; i++) {
    newObj[keys[i]] = obj[keys[i]];
  }
  return newObj;
}

console.log(mirror(object));
// outputs { five: 5, four: 4, three: 3, two: 2, one: 1 }
