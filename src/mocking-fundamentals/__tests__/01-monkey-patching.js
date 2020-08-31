import assert from 'assert'
import thumbWar from '../thumb-war'
import utils from '../utils'

const originalGetWinner = utils.getWinner
utils.getWinner = p1 => p1

const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
assert.strictEqual(winner, 'Kent C. Dodds')

// cleanup
utils.getWinner = originalGetWinner
