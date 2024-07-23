const { add, greet, reverse, palindrone } = require("./script")

test("greet user", () => {
  expect(greet("PeeKaY")).toEqual("hello PeeKaY")
})

test("add two numbers", () => {
  expect(add(1, 2)).toEqual(3)
})

test("reverse string", () => {
  expect(reverse("hello")).toEqual("olleh")
})

test("palindrone", () => {
  expect(palindrone("racecar")).toEqual(true)
})
