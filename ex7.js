//convert KMS to Miles using Javascript function
function convert() {
  var kms = document.getElementById("data").value;
  const factor = 0.621371;
  var miles = kms * factor;
  document.getElementById("res").innerText = `${miles} miles`;
}
