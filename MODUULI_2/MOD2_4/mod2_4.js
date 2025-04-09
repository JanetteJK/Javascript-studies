'use strict'

let numbers = []
for (;;) {
  let number = parseInt(prompt("Give me a number"));
  numbers.push(number)
  if (number === 0) {
    break;
  }
}
console.log(numbers.sort().reverse())