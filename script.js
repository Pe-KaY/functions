function greet(name) {
  return `hello ${name}`
}

function add(a, b) {
  return a + b
}

function reverse(str) {
  return str.split("").reverse().join("")
}

function palindrone(str) {
  return str.split("").reverse().join("") === str
}
module.exports = { greet, add, reverse, palindrone }
