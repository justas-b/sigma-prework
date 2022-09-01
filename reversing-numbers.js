function digitize(n) {
  let arr = String(n).split('');
  let finalArray = arr.reverse().map(Number);
  return finalArray;
}

let number = parseInt(prompt("Enter a number to be reversed:"));

while(isNaN(number)) {
  alert("You have entered an invalid input!");
  number = parseInt(prompt("Enter a number to be reversed:"));
}

alert("Your reversed number array is " + digitize(number));
