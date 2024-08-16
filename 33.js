// Write a JavaScript program that determines whether a given string contains only unique characters or not.

function isUniqueCharOnly(str) {
  console.log(new Set(str).size === str.length);
}

isUniqueCharOnly("kiranr");
