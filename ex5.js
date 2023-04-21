//swapping of Two number :
//swapping using temporary variable
//swapping without using temporary variable
var a = prompt("please enter the a value ");
var b = prompt("please enter the b value ");
document.write(`the value of a is:${a},the value of b is: ${b}`);
var temp;
//a= 1 // b=2
temp = a; //temp = 1
a = b; //a= 2
b = temp; // b=1
document.write(
  `after swapping \n the value of a is:${a}, and value of b is: ${b}`
);
