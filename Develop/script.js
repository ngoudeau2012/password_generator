// Write a function that takes user input and creates a password
// based on that input and returns it
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var upperCaseLetters = [];

for (i=0; i < letters.length; i++){
  upperCaseLetters.push(letters[i].toUpperCase());
  }
  
  console.log(upperCaseLetters)

function generatePassword() {
  /****
   * WRITE YOUR CODE HERE
   */
  alert("I am in generate password");

  return "sometext";
}

//////////////////////////////////////////////////////////////
// DO NOT TOUCH THE CODE BELOW
//////////////////////////////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
