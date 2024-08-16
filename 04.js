//create your own string Method -repeatify(3)-input string will be repeated three times

String.prototype.repeatify = function (count) {
  if (isNaN(count)) {
    throw Error("Argument not a number");
  }
  output = "";
  Array(count)
    .fill(this)
    .forEach((x) => {
      output += x;
    });
  return output;
};
input = "kiran";
output = input.repeatify(10);
console.log(output);
