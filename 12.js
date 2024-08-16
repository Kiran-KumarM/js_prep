//Write a function to separate palindrome numbers from an array.

let arr2 = ["radar", "hello", "level", "world", "madam", "bba", "racecar"];

palindrome(arr2);
function palindrome(arr2) {
  output = [];
  arr2.forEach((x) => {
    x.split("").reverse().join("") === x ? output.push(x) : null;
  });
  console.log(output);
}
