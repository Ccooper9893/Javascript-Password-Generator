//Creating the generatePassword function to ask for user input.
//Step 1: Prompt the user to input how long they want their password and save as variable.
//Step 2: Check the variable to make sure its a number and fits the guideline of 8-128 characters.
//Step 3: Prompt the user to ask if they want numbers, lowercase letters, uppercase letters, and symbols. Save as variables.
//Step 4: Push requested arrays in individial user request array if true.
//Step 5: Use for loop to push requested amount of random characters from array into password array.
//Step 6: Convert password array into string.
//Step 7: Return randomly generated password.

// Assignment code here
function generatePassword () {

  //Asks user how long they want their password.
  var userInput = window.prompt("How many characters would you like your password to be? Must be between 8 and 128.");
  
  //Checking if userInput is a number and its between 8 and 128.
  while (isNaN(userInput) || parseInt(userInput) < 8 || parseInt(userInput) > 128) {
    userInput = window.prompt('Please enter a valid number between 8 and 128!');
  }
  
  //Changes userinput from a string to an integer.
  userInput = parseInt(userInput);

  //Creates variables for password to include if user chooses.
  var numbers = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '1', '2', '3', '4', '5']; 
  var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercaseLetters = [];
  var symbols = ['?', '!', '@', '#', '$', '%', '&', '*', '+', '`', '^', ':', '~', '<', '>', '-', '|', ',', '.', '{', '}', '[', ']', '{', '}', '_'];

  //Converts lowercase letters to uppercase and adds them to new array.
  for (i=0; i<lowercaseLetters.length; i++) {
    uppercaseLetters[i] = lowercaseLetters[i].toUpperCase();
  }

  //Prompts user choose properties of password.
  var userNumbers = window.confirm('Would you like to include Numbers?');
  var userLowercase = window.confirm('Would you like to include lowercase letters?');
  var userUppercase = window.confirm('Would you like to include Uppercase letters?');
  var userSymbols = window.confirm('Would you like to include Symbols?');

  //Creates user Basket that will include arrays chosen from prompts.
  var userBasket = [];

  //Adds arrays to userBasket based off user choices.
  if (userNumbers === true) {
    userBasket.push(numbers);
  }

  if (userLowercase === true) {
    userBasket.push(lowercaseLetters);
  }

  if (userUppercase === true) {
    userBasket.push(uppercaseLetters);
  }

  if (userSymbols === true) {
    userBasket.push(symbols);
  }

  passwordArray = [];

  //Random number for length of userBasket
  function rand1 () {
    randNum1 = Math.floor(Math.random()*userBasket.length);
    return randNum1;
  }

  //Random number for nested arrays within userBasket
  function rand2 () {
    randNum2 = Math.floor(Math.random()*(userBasket[rand1()].length-1));
    return randNum2;
  }


  //For loop to generate random characters using function rand1 and rand2.
  for (i=0; i<userInput; i++) { 
    passwordArray.push(userBasket[rand1()][rand2()]);
  }
  
  //Converting the passwordArray into a string
  password = passwordArray.join("");
  
  //Returning the random password
   return password;
} 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); //Assigns html id "generate" to generateBtn variable.

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //Calls the generatePassword function
  var passwordText = document.querySelector("#password"); //Assigns html id "password" to passwordText variable

  passwordText.value = password; //Prints password to user.
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //When generateBtn is "clicked" call the writePassword function.

//Combines all nested arrays into one (Future Reference)
// var combineBasket = userBasket.flat(Infinity);
  // console.log(combineBasket);