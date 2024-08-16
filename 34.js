//  Write a JavaScript function that checks if the sum of all integers in an array equals the highest integer in that array.

function isSumequlasHighest(arr) {
  let out = arr.reduce((prev, curr) => (curr += prev), 0);
  //console.log(out, Math.max(...arr));
  if (out == Math.max(...arr)) return true;
  return false;
}

console.log(isSumequlasHighest([0, 1, 0, 0, 5]));
