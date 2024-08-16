//Write a function to find two numbers which equal a given target sum.

const arr = [2, 4, 11, 6, 9];

let targetSum = 15;
console.log(findTwoSum(arr, targetSum));

function findTwoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    let diff = targetSum - arr[i];
    let index = arr.indexOf(diff);
    console.log(diff, index);
    if (index != -1) {
      console.log([arr[i], arr[index]]);
    }
  }
  //   for (const data of arr) {
  //     var difference = target - data;
  //     if (arr.includes(difference) && difference !== data) {
  //       return [data, difference];
  //     }
  //   }
  //   return null;
}
