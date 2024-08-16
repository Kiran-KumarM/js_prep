//Write a function to flatten a nested array.

function flattenArray(arr) {
  const flattened = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      let flattened1 = flattenArray(element);
      flattened.push(...flattened1);
    } else {
      flattened.push(element);
    }
  });

  return flattened;
}

console.log(flattenArray([1, 2, 3, [4, 5, [6, 7, 8, 9]], 10]));
// output: [1, 2, 3, 4, 5, 10]
