//  Write a custom array method for finding the max and min value

Array.prototype.findMax = function () {
  if (!Array.isArray(this)) return;
  let max = -Infinity;
  this.forEach((element) => {
    if (element > max) {
      max = element;
    }
  });
  return max;
};

Array.prototype.findmin = function () {
  if (!Array.isArray(this)) return;
  let min = Infinity;
  this.forEach((element) => {
    if (element < min) {
      min = element;
    }
  });
  return min;
};

console.log([1, 2, 3, 4, 5].findMax()); // 5
console.log([1, 2, 3, 4, 5].findmin()); // 1
