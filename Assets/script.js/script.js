// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
// Here...

  
}
function generatePassword() {
  // code goes here
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 12
  var password = ""
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1)
  }
  document.getElementById("password").value = password;
  }


// Add event listener to generate button

generateBtn.addEventListener("click", writePassword, function() {
  generatePassword()
})


