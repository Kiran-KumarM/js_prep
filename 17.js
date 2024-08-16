// How do you compare two objects in JavaScript, ensuring the identical order of keys?

const obj1 = {
  name: "Bittu",
  age: 24,
  Address: { city: "BLR", state: "Karnataka" },
};
const obj2 = {
  name: "Bittu",
  age: 24,
  Address: { city: "BLR", states: "Karnataka" },
};
const obj3 = {
  name: "Rahul",
  age: 25,
  Address: { city: "Ranchi", state: "Jharkhand" },
};

// console.log(JSON.stringify(obj1) == JSON.stringify(obj2));
// console.log(Object.keys(obj1));

function caompareObjectkeys(obj1, obj2) {
  a = Object.keys(obj1);
  b = Object.keys(obj2);
  a.forEach((ele, i) => {
    if (ele != b[i]) {
      console.log(ele, b[i]);
      console.log(false);
    }
    if (typeof obj1[ele] == "object") {
      caompareObjectkeys(obj1[ele], obj2[ele]);
    }
  });
  console.log(true);
}

caompareObjectkeys(obj1, obj2);
