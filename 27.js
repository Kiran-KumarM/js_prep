// Write a JavaScript program to remove duplicate elements from an array in different ways.

const numbers = [1, 3, 2, 3, 3, 4, 5];
// 1
function removeDuplicates(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) == -1) {
      res.push(arr[i]);
    }
  }
  return res;
}
// console.log(removeDuplicates(numbers));

// 2
function removeDuplicate1(arr) {
  return [...new Set(arr)];
}
// console.log(removeDuplicate1(numbers));

// 3
function removeDuplicates2(arr) {
  let obj = {};
  for (let data of arr) {
    obj[data] = true;
  }
  console.log(obj);
  return Object.keys(obj).map(Number);
}
console.log(removeDuplicates2(numbers));
