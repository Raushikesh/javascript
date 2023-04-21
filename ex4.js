// find the area of regular triangle
//if you konw all the sides of a triangles you can find the area using herons formula .if a ,b ,c three sides of a triangle then
//general Formula : s = (a+b+c)/2

var a = 10;
var b = 5;
var c = 10;
var s = (a + b + c) / 2;
var temp = s * (s - a) * (s - b) * (s - c);
var area = Math.sqrt(temp);
document.write(temp);

//var a = true + true + true * 3;
//document.write(a);
//ans : 5
