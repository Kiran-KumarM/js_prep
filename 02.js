//Write a function to find the number of characters in a string.
let input = "testrerer fdgdgdf";
NumberofChar(input);
function NumberofChar(input) {
  //a= input.length
  regex = /[a-zA-Z]/g;
  output = input.match(regex);

  console.log(output);
}
