//without using temp variable
var a = 5;
var b = 6;
a = a + b; //5 + 6 = 11 // a= 11
b = a - b; //11 - 6 = 5 // b= 5
a = a - b; // 11 - 5 = 6 //a=6
document.write(`the value of a is:${a} and b is:${b}`);
