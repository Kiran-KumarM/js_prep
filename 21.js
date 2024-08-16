//  Write a function to move all zeros to the end of the array while maintaining the relative order of the non-zero elements.
// input: [0,1,0,3,12]
// output: [1,3,12, 0, 0]

const input = [0, 1, 0, 3, 12];

function movezerotoEnd(arr) {
  let output = [];
  // temp = 0;
  arr.forEach((x) => {
    if (x != 0) output.push(x);
    //  else temp++;
  });
  output = [...output, ...Array(input.length - output.length).fill(0)];
  console.log(output);
}

movezerotoEnd(input);
