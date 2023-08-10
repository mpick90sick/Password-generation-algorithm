// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
// Here...
  passwordText.value = password;

}
function generatePassword() {
  // code goes here

  return password
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
