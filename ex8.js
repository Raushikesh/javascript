//javascript program to check if a number is positive negative or zero
//<input type="" name=" " id="data" />
// <br />
//<button onclick="check()">Check</button>
//<h1 id="res"></h1>
function check() {
  var value = document.getElementById("data").value;
  //var res = Math.sign(value);
  if (value > 0) {
    res = `${value} is Positive Number`;
  } else if (value < 0) {
    res = `${value} is Negative Number`;
  } else if (value == 0) {
    res = `${value} is zero`;
  } else {
    res = `${value} is not a number`;
  }

  document.getElementById("res").innerText = res;
}
