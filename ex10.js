//javascript program to check if a Number is Odd or Even
//check if-else x%2 == 0
//ternary operator

var x = 63;
if (x % 2 == 0) {
  //even
  document.write(`${x} value is even Number `);
  //odd
} else {
  document.write(` ${x} is odd number`);
}

//ternary operator

var q = 1;

var res = q % 2 == 0 ? "Even" : "Odd";
document.write(`${q} is an ${res} Number`);
