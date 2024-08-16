//Write a function to find the maximum value from an object.
let input = { a: 79, b: 20, c: 30, d: 2, g: 55, h: 132 };
maxValue(input);
function maxValue(input) {
  //output= Math.max(...Object.values(input))
  let arra = Object.values(input);
  output = -Infinity;
  for (let i of arra) {
    if (i > output) {
      output = i;
    }
  }

  console.log(output);
}
