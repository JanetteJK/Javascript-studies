'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const uElem = document.querySelector('#target')
for (let n of students) {
  const optElem = document.createElement('option');
  optElem.innerHTML = n.name;
  optElem.value = n.id;
  uElem.appendChild(optElem)
}