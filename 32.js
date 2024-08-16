//Write a JavaScript program to capitalize the first letter of each word in a given string.

str = "i am kiran. who are you?";

function capitalize(str) {
  str = str.split(" ");
  str.forEach((element, i) => {
    str[i] = element.charAt(0).toUpperCase() + element.replace(element[0], "");
  });
  console.log(str.join(" "));
}

capitalize(str);
