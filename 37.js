//  Write a JavaScript program that takes an array of numbers and returns the sum of all numbers that are divisible by both 3 and 5.

array = [2, 3, 5, 7, 9, 15, 21, 30];
function divisibleby3and5(arr) {
  output = 0;
  arr.forEach((element) => {
    if (element % 3 == 0 && element % 5 == 0) {
      output += element;
    }
  });
  console.log(output);
}

console.log(divisibleby3and5(array));
