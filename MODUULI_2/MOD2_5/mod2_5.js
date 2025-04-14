'use strict'
let ask = true
let numbers = []
let number = parseInt(prompt('Give me a number'))
numbers.push(number)
while (ask) {
  number = parseInt(prompt('Give me a number'))
  if (numbers.includes(number)) {
    ask = false
    console.log('Number already entered. Ending program. Numbers entered: ' + numbers.sort((a,b) => a-b))
  }
  else {
    numbers.push(number)
  }


}




