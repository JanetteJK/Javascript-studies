'use strict'

const ulElem = document.querySelector('#target')

const li1Elem =document.createElement('li');

li1Elem.innerHTML = `First item`;

// kaksi eri tapaa. lisätään ul-elemenin lapseksi li

ulElem.appendChild(li1Elem);
const li2Elem = document.createElement('li');
const text2 = document.createTextNode('Second item');
li2Elem.appendChild(text2);

const li3Elem = document.createElement('li')
const text3 = document.createTextNode('Third item')
li3Elem.appendChild(text3);

ulElem.appendChild(li2Elem);
ulElem.appendChild(li3Elem);

li2Elem.classList.add('my-item');


