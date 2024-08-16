//Write a function to return the missing number from an array.

function returnMissingNumber(arr) {
  arr = arr.sort((a, b) => a - b);
  console.log(arr);
  let index = arr[0];
  let output = [];
  arr.forEach((x) => {
    //  console.log(x, index);
    if (!arr.includes(index)) {
      output.push(index);
    }
    index++;
  });
  console.log(output);
}

console.log(returnMissingNumber([1, 9, 10, 2, 3, 5, 6, 8]));
