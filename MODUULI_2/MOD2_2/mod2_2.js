'use strict'

const participants = prompt("Give me the number of participants")
let names = []
let ask = 0
while (ask < participants) {
  name = prompt("Give me a name of a participant")
  names.push(name)
  ask = ask + 1
}
document.querySelector('#target').innerHTML = names.sort()