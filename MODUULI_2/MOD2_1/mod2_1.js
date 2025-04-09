'use strict'

const numbers = []
let ask = 0
while (ask < 5) {
  const number = prompt("Give me a number:")
  numbers.push(number)
  ask = ask + 1
  }

document.querySelector('#target').innerHTML = numbers.reverse()


