// Write a function that takes user input and creates a password
// based on that input and returns it
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperCaseLetters = [];
  for (i=0; i < letters.length; i++){
    upperCaseLetters.push(letters[i].toUpperCase());
    }
  console.log(upperCaseLetters)
var specialSymbols = ["!","@","#","$","%","^","&","*","~","?","<",">","+","-","_","="]
var numbers = ["1","2","3","4","5","6","7","8","9","0"]

var characterLimit = prompt("How many characters long would you like your password to be?")
var uppercaseCharacters = confirm("Do you want to include uppercase letters in your password?")
var specialCharacters = confirm("Do you want to include special symbols in your password?")
var numbersCharacters = confirm("Do you want to include numbers in your password?")

console.log(uppercaseCharacters)
console.log(specialCharacters)
console.log(numbersCharacters)

var passwordCharacters =  letters
    if(uppercaseCharacters === true){
      var passwordCharacters = passwordCharacters.concat(upperCaseLetters);
    } else {
      var passwordCharacters = passwordCharacters
    }
    if (specialCharacters === true){
      var passwordCharacters = passwordCharacters.concat(specialSymbols);
    } else {
      var passwordCharacters = passwordCharacters
    }
    if (numbersCharacters === true){
      var passwordCharacters = passwordCharacters.concat(numbers);
    } else {
      var passwordCharacters = passwordCharacters
    }
  
    console.log(passwordCharacters);

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
