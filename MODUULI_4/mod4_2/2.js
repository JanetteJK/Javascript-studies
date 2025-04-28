'use strict'
document.addEventListener('submit', async function(evt) {
  evt.preventDefault();
    const response = await fetch(
        'https://api.tvmaze.com/search/shows?q=${value_from_input}')
    const js = await response.json();

    console.log(js)
  }
