'use strict'
// etsitään html-sivulta ul tag, jonka id on target

const ulElem = document.querySelector('#target');

// määritellään ul-elementin sisään tuleva html-koodi

const html = `
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>`;

//lisätään html-koodi ul-elementtiin

ulElem.innerHTML = html;

// aseta listalle css-luokkamääritys

ulElem.classList.add('my-list');
