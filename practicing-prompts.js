let name = prompt("What is your name?");

if (name) {
  if (name === "Alice" || name === "Bob") {
    console.log(`Hello ${name}!`);
  } else {
    console.log("Hello!");
  }
} else {
  console.log("You didn't enter a name!");
}
