// write a function to check palindrome, considering only alphanumeric characters and ignoring cases.

// input: "A man, a plan, a canal: Panama"
// output: true;
let input = "A man, a plan, a canal: Panama";

function checkPalindrome(str) {
  let reg = /[a-zA-Z]/g;
  alpha = str.toLowerCase().match(reg);
  output = alpha.join("") === alpha.reverse().join("");
  console.log(output);
}

checkPalindrome(input);
