'use strict';
const ulElem = document.querySelector('#target')
const names = ['John', 'Paul', 'Jones'];
for (let i of names) {
  let liElem = document.createElement('li')
  liElem.innerHTML = i
  ulElem.appendChild(liElem)

}
