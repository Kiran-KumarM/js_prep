//Write a function to find the shortest word in a list of strings.
const words = [
  "cat",
  "saturday",
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "cot",
];
shortestArray(words);
function shortestArray(input) {
  let max = Infinity;
  input.forEach((element) => {
    if (element.length < max) {
      output = element;
    }
  });

  console.log(output);
}
