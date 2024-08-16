//Write a JavaScript program to return the count of each character in a string.
let input = "test_kiran ";
eachcharLength(input);
function eachcharLength(input) {
  let char = input.split("");
  //   char = new Set(input);
  output = {};
  char.forEach((element) => {
    output[element] = (output[element] || 0) + 1;
  });
  console.log(output);
}
