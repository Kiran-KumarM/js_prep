// Write a function to reverse each word in a string.
let input = "test i am string done!";
reverse(input);
function reverse(input) {
  output = input.split(" ").map((x) => x.split("").reverse().join(""));

  console.log(output);
}
