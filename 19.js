// Write a function that returns unique characters from a string.

const str = "kirankumar";

function uniqueChar(str) {
  output = [...new Set(str)].join("");
  console.log(output);
}

uniqueChar(str);
