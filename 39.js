//Write a JavaScript program that takes two objects and returns a new object with properties that exist in both input objects.

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 2, c: 4, d: 5 };

function findCommonProperty(obj1, obj2) {
  let commonProperty = {};
  for (let key in obj1) {
    if (obj2.hasOwnProperty(key)) {
      commonProperty[key] = obj1[key];
    }
  }
  return commonProperty;
}

console.log(findCommonProperty(obj1, obj2));
