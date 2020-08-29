const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;

let result, expected

result = sum(3, 7)
expected = 10;
expect(result).toBe(expected)

function test(title, callback) {
  try {
    callback()
    console.log(`√ ${title}`)
  } catch (error) {
    console.log(`x ${title}`)
    console.error(error)
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    },
    toEqual(expected) { },
    toBeGreaterThan(expected) { },
  }
}