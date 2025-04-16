'use strict'

// etsitään kuvan paikka html-sivulta (iD=target)

const imgElem = document.querySelector('#target');

const pElem = document.querySelector('#trigger')

// tehdään funktio sille mitä tehdään kun hiiri hoveraa päälle

function hiiriPaalle(evt) {
  imgElem.src = "img/picB.jpg";
}

// funktio kun hiiri lähtee pois päältä

function hiiriPois(evt) {
  imgElem.src = "img/picA.jpg";
}

pElem.addEventListener('mouseenter', hiiriPaalle);
pElem.addEventListener('mouseleave', hiiriPois);