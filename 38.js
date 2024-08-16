// Write a JavaScript program that takes two sorted arrays of numbers and merges them into a single sorted array.

function mergeSortedArray(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

console.log(mergeSortedArray([1, 3, 5, 7], [2, 4, 6, 8])); // [ 1, 2, 3, 4, 5, 6, 7, 8]
