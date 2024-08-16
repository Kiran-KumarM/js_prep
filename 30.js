//Write a program to find the intersection of two arrays.

function commonElementArray1(arr1, arr2) {
  return arr1.filter((element) => arr2.includes(element));
}
console.log(commonElementArray1([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
