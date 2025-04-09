'use strict'

let dogs = []
let ask = 0
while ( ask < 7 ) {
  name = prompt("Give me a name of a dog")
  dogs.push(name)
  ask = ask +  1
}

document.querySelector('#target').innerHTML = dogs.sort().reverse()