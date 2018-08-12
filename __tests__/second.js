const game = require('../second')

test('should be able to score a game with no strikes or spares', () => {
  const rolls = new Array(20).fill(1)
  const actual = game(rolls)
  expect(actual).toBe(20)
})

test('should be able to score a an incomplete game', () => {
  const rolls = new Array(15).fill(1)
  const actual = game(rolls)
  expect(actual).toBe(15)
})

test('should score a game with spare properly', () => {
  const rolls = new Array(20).fill(1)
  rolls[4] = 5
  rolls[5] = 5
  const actual = game(rolls)
  expect(actual).toBe(29)
})

test('should be able to score an incomplete game with spare', () => {
  const rolls = new Array(7).fill(1)
  rolls[4] = 5
  rolls[5] = 5
  const actual = game(rolls)
  expect(actual).toBe(16)
})

test('should score a game with strike properly', () => {
  const rolls = new Array(19).fill(1)
  rolls[0] = 10
  const actual = game(rolls)
  expect(actual).toBe(30)
})

test('should be able to score an incomplete game with strike', () => {
  const rolls = new Array(7).fill(1)
  rolls[4] = 10
  const actual = game(rolls)
  expect(actual).toBe(18)
})

test('should be able to score an incomplete game with strike', () => {
  const rolls = new Array(7).fill(1)
  rolls[4] = 10
  const actual = game(rolls)
  expect(actual).toBe(18)
})

test('perfect game', () => {
  const rolls = new Array(12).fill(10)
  const actual = game(rolls)
  expect(actual).toBe(300)
})
