// Assignment code here

function passQuestions(){
  var lengthPromptValue = 
    window.prompt("How many characters would you like" +
    "in your password? Please pick between 8 and 128 characters.");

  var confirmUpper = false;
  var confirmLower = false;
  var confirmNumber = false;
  var confirmSpecial = false;

  // Getting the length of the password from the user //
  if(lengthPromptValue === "" || lengthPromptValue === null){
    lengthPromptValue = window.prompt("Please enter a value.")
    console.log(lengthPromptValue);
  }

  if(lengthPromptValue < 8 || lengthPromptValue > 128){
    lengthPromptValue = window.prompt("Please enter a valid length.")
  }

  while(confirmUpper === false && confirmLower === false && confirmNumber === false && confirmSpecial === false) {
    // To see if user wants to use uppercase letters //
    confirmUpper = window.confirm("Would you like uppercase letters to be included in your password?");
    if (confirmUpper === true) {
      confirmUpper = window.confirm("Are you sure you would like uppercase letters to be included in your password?");
    }
    // To see if user wants to use lowercase letters //
    confirmLower = window.confirm("Would you like lowercase letters to be included in your password?");
    if (confirmLower === true) {
      confirmLower = window.confirm("Are you sure you would like uppercase letters to be included in your password?");
    }
    // To see if user wants to use numbers //
    confirmNumber = window.confirm("Would you like numbers to be included in your password?");
    if (confirmNumber === true) {
      confirmNumber = window.confirm("Are you sure you would like numbers to be included in your password?");
    }
    // To see if user wants to use special characters //
    confirmSpecial = window.confirm("Would you like special characters to be included in your password?");
    if (confirmSpecial === true) {
      confirmSpecial = window.confirm("Are you sure you would like to include special characters in your password?");
    }
  }
  // To generate a new password //
  var generatedPassword = generatePassword(lengthPromptValue, confirmUpper, confirmLower, confirmNumber, confirmSpecial);
  console.log(generatedPassword);
  // To write password to page //
  document.getElementById("password").value = generatedPassword;
}

// Questions to gather information for password //
function generatePassword(length, isUpper, isLower, isNumbers, isSpecial) {
  var passwordLength = length;
  var charsForPassword = "";
  var password = "";
 

  if(isUpper){
    charsForPassword += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  if(isLower){
    charsForPassword += "abcdefghijklmnopqrstuvwxyz" 
  }

  if(isNumbers){
    charsForPassword += "0123456789"
  }

  if(isSpecial){
    charsForPassword += "!@#$%^&*()"
  }

  //forloop
  for(var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * charsForPassword.length);
    password += charsForPassword.substring(randomNumber, randomNumber +1);
  }
  console.log("this is the password: ", password);
  console.log(charsForPassword);
  return password;
}


//  <button onclick="writePassword()">Click</button> 
// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;


// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
