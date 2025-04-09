'use strict'

const year = prompt("Give me a year");

if  ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  document.querySelector('#target').innerHTML = "This year is a leap year"
}
else {
  document.querySelector('#target').innerHTML = "This year is not a leap year"
}