//Given a sorted array and a target value, write a function to return the index of the target value in the array using binary search. If the target is not found, return -1.

//input: [1,3,5,7,9,11,13], target=7
// output: 3
let input = [1, 3, 5, 7, 9, 11, 13];
let target = 13;
//console.log(input.indexOf(target));

function binarySearch(arr, target) {
  let end = arr.length - 1;
  //let mid =Math.floor(end/2)
  let start = 0;
  return search(arr, target, start, end);
  function search(arr, target, start, end) {
    let mid = Math.floor((start + end) / 2);
    console.log(start, mid, end);
    if (arr[mid] == target) {
      console.log(mid, "sd");
      return mid;
    }
    if (target < arr[mid]) {
      search(arr, target, start, mid - 1);
      // end =mid
      // mid =Math.floor((start+end)/2)
    } else {
      search(arr, target, mid + 1, end);
      // start=mid;
      // mid=Math.floor((start+end)/2);
    }
  }
}

console.log(binarySearch(input, target));
