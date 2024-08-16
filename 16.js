//Write a JavaScript program that takes an array of objects and returns an object containing the frequency of each property across all objects.

const data = [
  { a: 1, b: 2 },
  { b: 3, c: 4 },
  { a: 5, b: 6 },
];
function getPropertyFrequency(data) {
  output = {};
  data.map((x) => {
    let y = Object.keys(x);
    y.forEach((c) => (output[c] = (output[c] || 0) + 1));
  });
  console.log(output);
}

console.log(getPropertyFrequency(data));
