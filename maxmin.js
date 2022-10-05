const numberOfElements = 20;
const maxValue = 50;
const minValue = -50;
let minMaxArray = [maxValue, minValue];

const arrayOfIntegers = Array(numberOfElements)
  .fill()
  .map(() => Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);

for (let i = 0; i < numberOfElements - 1; i++) {
  if (arrayOfIntegers[i] < minMaxArray[0]) {
    minMaxArray[0] = arrayOfIntegers[i];
  }
  if (arrayOfIntegers[i] > minMaxArray[1]) {
    minMaxArray[1] = arrayOfIntegers[i];
  }
}

console.log(
  `The minimum and maximum elements of [${arrayOfIntegers}] are [${minMaxArray}].`
);
