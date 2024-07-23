function greet(name) {
  return "hello " + name
}

function add(a, b) {
  return a + b
}

function reverse (str) {
  return str.split('').reverse().join('')

}
module.exports = {greet,add, reverse}
