//  Write a function to find the occurrence of each character in a given string.

function findOccurance(str) {
  let result = {};
  for (let data of str) {
    if (result.hasOwnProperty(data)) {
      result[data] = result[data] + 1;
    } else {
      result[data] = 1;
    }
  }
  return result;
}

console.log(findOccurance("sdhjsbdcsdncjsdnjnddjsbhsvghsp"));
