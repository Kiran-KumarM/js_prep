// Write a JavaScript program to group items of an array by category.

const products = [
  { name: "apples", category: "fruits" },
  { name: "oranges", category: "fruits" },
  { name: "potatoes", category: "vegetables" },
];

function groupBy(products, cat) {
  output = {};
  products.forEach((element) => {
    if (output[element[cat]]) {
      console.log(element);

      output[element[cat]].push(element);
    } else {
      output[element[cat]] = [element];
    }
    delete output[element[cat]][cat];
    // output[element[cat]] = output[element[cat]]
    //   ? output[element[cat]].push(element)
    //   : [element];
  });
  console.log(output);
}
groupBy(products, "category");

const result = Object.groupBy(products, ({ category }) => category);
console.log(result);
