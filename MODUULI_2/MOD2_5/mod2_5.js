'use strict';

let numbers = [];
let number = parseInt(prompt('Give me a number'));
if (numbers.includes(number)) {
  console.log("Number already on list" + numbers.sort().reverse())
}
else {
  numbers.push(number)
}




