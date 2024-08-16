// Write a JavaScript program to find duplicate numbers from an array.

function findDuplicates(arr) {
  output = [];
  arr.forEach((element) => {
    arr.filter((y) => y == element).length > 1 && !output.includes(element)
      ? output.push(element)
      : null;
  });
  console.log(output);
}

// function findDuplicates(arr) {
//   let res = {};
//   let duplicate = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!res[arr[i]]) {
//       res[arr[i]] = 1;
//     } else {
//       res[arr[i]]++;
//     }
//   }
//   console.log(res);
//   for (let data in res) {
//     if (res[data] > 1) {
//       duplicate.push(parseInt(data));
//     }
//   }

//   return duplicate;
// }

console.log(findDuplicates([1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 8, 9, 9])); // [3, 5, 8, 9]
