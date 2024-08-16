//Write a JavaScript program that converts a string to camelCase.

//let input = "hello world ";
let input = "HELLO WORLD ";
convertCamelCase(input);
function convertCamelCase(input) {
  if (typeof input == "string") {
    let data = input.toLowerCase().split(" ");
    output =
      data[0] +
      data[1].charAt(0).toUpperCase() +
      data[1].replace(data[1][0], "");
  }

  console.log(output);
}
