const secretNumber = Math.floor(Math.random() * 100) + 1;

function askForInput() {
  let userInput = prompt("Please guess a number between 1 and 100:");
  
  if(userInput === null) {
    return null;
  } else {
    let numberInput = parseInt(userInput);
    
    while(isNaN(numberInput) || numberInput > 100 || numberInput < 1) {
      alert("You have entered an invalid input!");
      userInput = prompt("Please guess a number between 1 and 100:");
      
        if(userInput === null) {
          return null;
        } else {
          numberInput = parseInt(userInput);
        }
    }
  
  return numberInput;
  }
}

function checkGreaterOrLower(userGuess) {
  if(userGuess > secretNumber) {
    return userGuess + " is greater than the secret number!";
  } else {
    return userGuess + " is lower than the secret number!";
  } 
}

function runGame() {
  let userGuess = askForInput();
  
  if(userGuess === null) {
    return `You failed to guess the secret number!`;
  }
  
  let previousGuess = [userGuess];
  let tries = 1;

  while(userGuess != secretNumber) {
    tries++;
    alert(checkGreaterOrLower(userGuess));
    userGuess = askForInput();
    
    if(userGuess === null) {
      return `You failed to guess the secret number!`;
    }
    
    while(userGuess === previousGuess[0]) {
      alert("Your guess cannot be the same as your previous guess!");
      userGuess = askForInput();
      
      if(userGuess === null) {
        return `You failed to guess the secret number!`;
      }
    }
    previousGuess[0] = userGuess;
  }
  
  return `You Won!\nThe secret number was ${secretNumber}.\nNumber of tries: ${tries}`;
}


let game = runGame();
alert(game);
