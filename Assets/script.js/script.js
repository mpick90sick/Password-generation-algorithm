// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("password");
// Here...

  
}
function generatePassword() {
  // code goes here
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 12;
  var password = ""
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1)
  }
  document.getElimentById("password").value = password;
  }

function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.Select();
  copyText.setSelectionRange(0, 999)
  document.commandId("copy")
}
// Add event listener to generate button
element.addEventListener("click", writePassword);
