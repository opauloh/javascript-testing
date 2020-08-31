import assert from 'assert'
import thumbWar from '../thumb-war'
import utils from '../utils'

function fn(impl) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args)
    return impl(...args)
  }
  mockFn.mock = {calls: []}
  return mockFn
}

const originalGetWinner = utils.getWinner
utils.getWinner = fn(p1 => p1)

const winner = thumbWar('Kent C. Dodds', 'Paulo Henrique')
assert.strictEqual(winner, 'Kent C. Dodds')
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Kent C. Dodds', 'Paulo Henrique'],
  ['Kent C. Dodds', 'Paulo Henrique'],
])
console.log(utils.getWinner.mock.calls)
// cleanup
utils.getWinner = originalGetWinner
/*
test('returns winner', () => {
  utils.getWinner = jest.fn((p1, ) => p1)
  thumbWar('Kent C. Dodds', 'Paulo Henrique')
  console.log(utils.getWinner)
  console.log(utils.getWinner.mock)
  /*
  expect(winner).toBe('Kent C. Dodds')
  expect(utils.getWinner).toHaveBeenCalledTimes(2)
  expect(utils.getWinner).toHaveBeenCalledWith('Kent C. Dodds', 'Paulo Henrique')
  expect(utils.getWinner).toHaveBeenNhtCalledWith(1, 'Kent C. Dodds', 'Paulo Henrique')
  expect(utils.getWinner).toHaveBeenNhtCalledWith(2, 'Kent C. Dodds', 'Paulo Henrique')
  */
// instead of the above we can do:
/*
  expect(utils.getWinner.mock.calls).toEqual([
    ['Kent C. Dodds', 'Paulo Henrique'],
    ['Kent C. Dodds', 'Paulo Henrique']
  ])
})
*/
