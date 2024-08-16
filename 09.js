//Write a function to find the sum of all fruits in an array.
const fruits = [
  { apple: 4, orange: 7, grape: 3 },
  { guava: 6, lemon: 4, banana: 8 },
  { orange: 5, pineapple: 7, apple: 7 },
];
getfruitSum(fruits);

function getfruitSum(input) {
  output = {};
  fruits.forEach((x, i) => {
    for (let items in x) {
      output[items] = output[items]
        ? output[items] + fruits[i][items]
        : fruits[i][items];
      console.log(items);
    }
  });

  console.log(output);
}
