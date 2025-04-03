'use strict'

const first = parseInt(prompt("Give me the first number"))
const second = parseInt(prompt("Give me the second number"))
const third = parseInt(prompt("Give me a third number"))

const sum = first + second + third

document.querySelector('#target').innerHTML = 'The sum of these numbers is ' + sum + '.';