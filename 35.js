// Write a JavaScript program to find unique object property values.

let products = [
  { title: "IPhone 8", company: "Apple" },
  { title: "IPhone 11", company: "Apple" },
  { title: "Galaxy", company: "Samsung" },
  { title: "Vivo V5", company: "Vivo" },
  { title: "OPPO C9", company: "Oppo" },
  { title: "Lumia", company: "Nokia" },
  { title: "S23 Ultra", company: "Samsung" },
  { title: "Iphone 13", company: "Apple" },
];

function objUniqeprop(obj) {
  output = [];
  products.forEach((ele) => {
    if (!output.includes(ele.company)) {
      output.push(ele.company);
    }
  });

  console.log(output);
}
objUniqeprop(products);
