// Write a JavaScript program to return all objects with the maximum value from a given JavaScript object.

let obj = { t: 4, h: 3, i: 4, s: 3, j: 1 };

function fidmaxObj(obj) {
  a = Object.keys(obj);
  b = Object.values(obj);
  max = Math.max(...b);
  output = {};
  b.forEach((element, i) => {
    if (element == max) {
      output[a[i]] = element;
    }
  });
  console.log(output);
}

fidmaxObj(obj);
