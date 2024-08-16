//Write a JavaScript program that takes two strings as input and returns true if they are anagrams of each other, otherwise returns false.

let input = "abC de";
let input2 = "cBae td";
console.log(checkAnagaram(input, input2));
function checkAnagaram(input, input2) {
  a = input.toLowerCase().split(" ").join("");
  b = input2.toLowerCase().split(" ").join("");
  if (a.length != b.length) return false;
  if (a.split("").sort().join("") === b.split("").sort().join("")) {
    return true;
  } else {
    return false;
  }
}
