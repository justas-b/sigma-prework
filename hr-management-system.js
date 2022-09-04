let people = [{firstName: "Jane", lastName: "Doe", age: 42, employed: true},
              {firstName: "Tom", lastName: "Smith", age: 18, employed: true},
              {firstName: "Mariam", lastName: "Coulter", age: 66, employed: false},
              {firstName: "Gregory", lastName: "Tims", age: 8, employed: false}];

function returnDatabase() {
  people.forEach(function(person) {
  let isEmployed;
  
  if(person.employed) {
    isEmployed = "Yes";
  } else {
    isEmployed = "No";
  }
  
  console.log(`Name: ${person.firstName} ${person.lastName}\n Age: ${person.age}\n Employed: ${isEmployed}`);
  });
}

function promptAddOrRemove() {
  let userInput = prompt("Do you want to add or remove a person from the database?");
  
  if(userInput === null) {
    return null;
  } else {
    while(userInput.toLowerCase() !== "add" && userInput.toLowerCase() !== "remove") {
      alert("You have entered an invalid option!");
      userInput = prompt("Do you want to add or remove a person from the database?");
    }
    return userInput.toLowerCase();
  }
}

function promptName(firstOrSecond) {
  let nameInput = prompt(`Please enter a ${firstOrSecond} name:`).toLowerCase();
  return nameInput[0].toUpperCase() + nameInput.slice(1, nameInput.length);
}

function promptEmployed() {
  let employedInput = prompt("Is the user employed?\nPlease type in yes or no:").toLowerCase();
  
  while(employedInput !== "yes" && employedInput !== "no") {
    alert("You have entered an invalid option!");
    employedInput = prompt("Is the user employed?\nPlease type in yes or no:").toLowerCase();
  }
  
  if(employedInput === "yes") {
    return true;
  } else {
    return false;
  }
}

function addPerson() {
  let firstNameInput = promptName("first");
  let secondNameInput = promptName("second");
  let ageInput = parseInt(prompt("Please enter an age:"));
  let employedInput = promptEmployed();
  let newPerson = {firstName: firstNameInput, lastName: secondNameInput, age: ageInput, employed: employedInput};
  
  return newPerson;
}

function removePerson() {
  let personToRemove = prompt("Please enter the first name of the person you wish to remove:").toLowerCase();
  let index = people.map(object => object.firstName.toLowerCase()).indexOf(personToRemove);
  
  while(index === -1) {
    alert(`${personToRemove[0].toUpperCase() + personToRemove.slice(1, personToRemove.length)} does not exist!\nPlease enter a valid person!`);
    personToRemove = prompt("Please enter the first name of the person you wish to remove:").toLowerCase();
    index = people.map(object => object.firstName.toLowerCase()).indexOf(personToRemove);
  }
  
  return index;
}

function runProgram() {
  console.log("The current database is:");
  returnDatabase();
  let removeOrAdd = promptAddOrRemove();
  
  while(removeOrAdd !== null) {
    if(removeOrAdd === "add") {
      let newPerson = addPerson();
      people.push(newPerson);
      console.log("The new database is:");
      returnDatabase();
    } else if(removeOrAdd === "remove") {
      let index = removePerson();
      people.splice(index, 1);
      console.log("The new database is:");
      returnDatabase();
    } else if(removeOrAdd === null) {
      break;
    }
    removeOrAdd = promptAddOrRemove()
  }
}

runProgram();
