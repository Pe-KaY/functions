const { describe } = require("yargs")
const { add, greet } = require("./script")
const { default: expect } = require("expect")

test("greet user", () => {
  expect(greet("PeeKaY")).toEqual("hello PeeKaY")
})

test("add two numbers", () => {
  expect(add(1, 2)).toEqual(3)
})
