'use strict'

const name = prompt("Please enter your name to be sorted.")
const number = Math.floor(Math.random() * 4) +1;

if (number === 1) {
  document.querySelector('#target').innerHTML = (name + ' your house is Gryffindor!' )
}
else if (number === 2) {
  document.querySelector('#target').innerHTML = (name + ' your house is Hufflepuff!' )
}
else if (number === 3) {
  document.querySelector('#target').innerHTML = (name + ' your house is Slytherin!' )
}
else {
  document.querySelector('#target').innerHTML = (name + ' your house is Ravenclaw!' )
}


