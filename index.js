// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]
function destructivelyAppendDriver () {
  drivers.push("Ralph")
}
function destructivelyPrependDriver (){
  drivers.unshift("Bob")
}
function destructivelyRemoveLastDriver() {
  drivers.splice(-1,1)
}
function destructivelyRemoveFirstDriver(){
  drivers.shift()
}
function appendDriver (name){
  var clone = drivers.slice(0);
  
}
