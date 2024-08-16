//Write a function to return the count of characters in a string.
let input = "malyalam";
// outout : m:2, a:3, l:2, y:1

function countString(str) {
  let obj = {};
  for (let x of str) {
    obj[x] = (obj[x] || 0) + 1;
  }
  return obj;
}
console.log(countString(input));
