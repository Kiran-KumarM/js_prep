//24. Write a function to return the first non-repeating character in a string. If not available, return -1.

// example:
// input: "aabbcc"
// output: -1

// input: "aabbcd"
// output: "c"

function findFirstNonRepeatingCharacter(str) {
  str = str.split("");
  str.forEach((x) => {
    if (str.filter((y) => y == x).length == 1) {
      console.log(x);
    }
  });
}
console.log(findFirstNonRepeatingCharacter("aabbccdfh"));
