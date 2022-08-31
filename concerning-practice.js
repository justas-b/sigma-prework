function askUserForNumber() {
  let userInput = parseInt(prompt("Please enter a number greater than 0:"));

  while(isNaN(userInput) || userInput < 1) {
    alert("You have entered an invalid input!");
    userInput = parseInt(prompt("Please enter a number:"));
  }
  return userInput;
}

function sumInput(userInput) {
  let sum = 0;
  
  for(let i = 1; i < userInput + 1; i++) {
    sum += i;
  }
  return sum;
}

function sumMultiplesThreeAndFive(userInput) {
  let sum = 0;
  
  for(let i = 1; i < userInput + 1; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

function productInput(userInput) {
  let product = 1;
  
  for(let i = 1; i < userInput + 1; i++) {
    product *= i;
  }
  return product;
}

let userInputOne = askUserForNumber();

alert(`The sum of numbers from 1 to ${userInputOne} is ${sumInput(userInputOne)}`);

let userInputTwo = askUserForNumber();

alert(`The sum of multiples of 3 and 5 from 1 to ${userInputTwo} is ${sumMultiplesThreeAndFive(userInputTwo)}`);

let userInputThree = askUserForNumber();

let sumOrProduct = prompt(`Would you like to calculate the sum or product of numbers ranging from 1 to ${userInputThree}?`).toLowerCase();

while(sumOrProduct != "sum" && sumOrProduct != "product") {
  alert("You have entered an invalid choice!");
  sumOrProduct = prompt(`Would you like to calculate the sum or product of numbers ranging from 1 to ${userInputThree}?`).toLowerCase();
}

if(sumOrProduct === "sum") {
  alert(`The sum of numbers from 1 to ${userInputThree} is ${sumInput(userInputThree)}`)
} else {
  alert(`The product of numbers from 1 to ${userInputThree} is ${productInput(userInputThree)}`)
}
