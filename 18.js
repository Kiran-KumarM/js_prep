//Collect books from an array of objects and return a collection of books as an array.

let bookData = [
  { name: "raj", books: ["book1", "book2"] },
  { name: "raj1", books: ["book3", "book4"] },
  { name: "raj2", books: ["book5"] },
  { name: "raj3", books: ["book6", "book7"] },
];

function collectArray(obj1, cat) {
  output = [];
  obj1.forEach((y) => {
    output = [...output, ...y[cat]];
  });
  console.log(output);
}

collectArray(bookData, "books");
