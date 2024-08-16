//  Write a program to implement currying which gives the sum of three numbers.
function SumOfThee(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(SumOfThee(2)(3)(4)); // 9
