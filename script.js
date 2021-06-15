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

function generatePassword(){
  //sets a blank array to hold user-defined character types
  var characterSet = []

  //accepts user input to determine inclusion of characters in characterSet
  var charLength = prompt("How many characters would you like your new password to have?");
    if (isNaN(charLength)||charLength<8||charLength>128) {
      alert("Note that your password must be between 8 and 128 characters in length.");
      do{
        var charLength = prompt("Your password must be between 8 and 128 characters.");
      }
      while (charLength<8||charLength>128);
      }

  var useNumbers = confirm("Would you like to use numbers in your password?");
    if (useNumbers==true){
      characterSet.push(1,2,3,4,5,6,7,8,9,0);
      }   

  var useUppercase = confirm("Would you like to use uppercase letters in your password?");
    if (useUppercase==true){
      characterSet.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
      }
  
  var useLowercase = confirm("Would you like to use lowercase letters in your password?");
    if (useLowercase==true){  
      characterSet.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");   
    }

  var useSpecials = confirm("Would you like to use special characters in your password?");
    if (useSpecials == true){  
      characterSet.push("!","@","#","%","^","&","*",":",";","~","$","+","|");
    }
  
  //checks to see whether the set of character choices is blank, thus violating the rule that users must select at least one type. Passes an error message to the output if so.  
  if (!Array.isArray([characterSet])||!characterSet.length){
    var stringVer = "You must select at least one character type for use in your password. Please try again."
    return stringVer;
  }

  //esablishes a blank password string for concatenation to produce password selection set
  pass = "";

  //loops through random selections of user-defined character types until inputted charLength value is reached
  for(i=0; i<=charLength-1; i++){
    var index=Math.floor(Math.random() * characterSet.length);
    var tempSpot = characterSet[index];
    pass+=tempSpot;
  }

  //passes newly-generated password back to writePaassword()
  return pass;
}