//Write a JavaScript program to remove all occurrences of a specified character from a given string.

let input = "test_kiran ";
removeOcuurence(input, "t");
function removeOcuurence(input, char) {
  let chars = input.split("");
  //   char = new Set(input);
  output = "";
  chars.forEach((element) => {
    element === char ? "" : (output += element);
  });
  console.log(output);
}
