const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;
const currentDate = new Date().getDate();

let inputYear = 1976,
  inputMonth = 10,
  inputDate = 6;

function getAgeSince(year, month, date) {
  let age = currentYear - year;

  if (currentMonth < month) {
    age--;
  }

  if (currentMonth === month) {
    if (currentDate < date) {
      age--;
    }
  }

  return age;
}

console.log(
  `The age between ${currentYear}-${currentMonth}-${currentDate} and ${inputYear}-${inputMonth}-${inputDate} is ${getAgeSince(
    inputYear,
    inputMonth,
    inputDate
  )}.`
);
