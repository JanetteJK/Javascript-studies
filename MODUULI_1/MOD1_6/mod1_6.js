'use strict';

const answer = confirm('Should I calculate the square root');
if (answer === true) { //riittäisi myö pelkkä if (answer)
  let number = parseInt(prompt('Give me a number'));
  if (number<0) {
    document.querySelector('#target').innerHTML = 'You cant calculate the square root of a negative number'
  }
  if (number > 0) {
    const square = Math.sqrt(number);
    document.querySelector('#target').innerHTML = 'The square root of ' + number +
      ' is ' + square; }
}
else {
    document.querySelector('#target').innerHTML = 'Lets not then :(';
  }