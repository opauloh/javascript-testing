const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
async function sumAsync(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 5000);
  })
}
async function subtractAsync(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a - b);
    }, 5000);
  })
}

test('sum adds numbers', () => {
  const result = sum(3, 7)
  const expected = 10;
  expect(result).toBe(expected)
})
test('sumAsync adds numbers assynchronously', async () => {
  const result = await sumAsync(3, 7)
  const expected = 10;
  expect(result).toBe(expected)
})
test('subtract subtracts numbers', () => {
  const result = subtract(7, 3)
  const expected = 4;
  expect(result).toBe(expected)
})
test('subtractAsync subtracts numbers assynchronously', async () => {
  const result = await subtractAsync(7, 3)
  const expected = 4;
  expect(result).toBe(expected)
})

async function test(title, callback) {
  try {
    await callback()
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