//  Write a program to generate a 6-digit random OTP.

function generateOTP() {
  a = (Math.random() * 1000000).toFixed();
  console.log(a);
}
generateOTP();
