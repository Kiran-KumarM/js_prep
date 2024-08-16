// 20. Write a function that takes an array of integers and returns the maximum product that can be obtained by multiplying any three numbers from that array.

const input = [1, 20, 19, 2, 3, 20, 21, 2, 3, 4, 5];

function highestproductofThree(input) {
  input = input.sort((a, b) => b - a);
  output = input[0] * input[1] * input[2];
  console.log(output);
}

highestproductofThree(input);
