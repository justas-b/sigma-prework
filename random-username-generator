let firstName = prompt("What is your first name?").toLowerCase();

function reverseName(name) {
  return name.split("").reverse().join("");
}

function intersperseName(firstName, secondName) {
  //note: struggled with this function
  let joinedName = firstName + secondName;
  let firstNameArray = firstName.split("");
  let secondNameArray = secondName.split("");
  let interspersedName = Array(joinedName.length);
  let counter = 0;
  
  while(counter < joinedName.length) {
      if(counter % 2 == 0) {
        interspersedName[counter] = firstNameArray.shift();
      } else {
        interspersedName[counter] = secondNameArray.shift(); 
      }
    counter++;
  }
  return interspersedName.join("");
}

function capitaliseName(name) {
  return name[0].toUpperCase() + name.slice(1, name.length);
}

function formatName(name) {
  let nameArray = name.split("");
  let firstName = nameArray.splice(0, Math.floor(nameArray.length / 2)).join("");
  return capitaliseName(firstName) + " " + capitaliseName(nameArray.join(""));
}

let reversedName = reverseName(firstName);

alert("Your reversed first name is " + reversedName);

let lastName = prompt("What is your last name?").toLowerCase();

let interspersedName = intersperseName(reversedName, lastName);

alert("Your interspersed name is " + interspersedName);

alert("Your random username is " + formatName(interspersedName));
