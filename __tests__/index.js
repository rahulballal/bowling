const Game = require('../index')

test('should be able to begin a game', () => {
  const actual = new Game()
  expect(actual).not.toBeNull()
  expect(actual).not.toBeUndefined()
})

test('should be able to add turn result as pins hit to list of rolls', () => {
  const game = new Game()
  const rolls = game.roll()
  expect(rolls.length).toBe(1)
  expect(rolls[0]).toBe(0)

  const anotherRoll = game.roll(5)
  expect(anotherRoll.length).toBe(2)
  expect(anotherRoll[0]).toBe(0)
  expect(anotherRoll[1]).toBe(5)
})

test('a value passed to roll with a value more than 10 should throw', () => {
  const game = new Game()
  expect(() => {
    game.roll(11)
  }).toThrow()
})

test('should be able to score a game with no strikes or spares', () => {
  const game = new Game()
  const rolls = new Array(20).fill(1)
  rolls.forEach(pins => game.roll(pins))
  const actual = game.score()
  expect(actual).toBe(20)
})

test('should be able to score a an incomplete game', () => {
  const game = new Game()
  const rolls = new Array(15).fill(1)
  rolls.forEach(pins => game.roll(pins))
  const actual = game.score()
  expect(actual).toBe(15)
})

test('should score a game with spare properly', () => {
  const game = new Game()
  const rolls = new Array(20).fill(1)
  rolls[4] = 5
  rolls[5] = 5
  rolls.forEach(pins => game.roll(pins))
  const actual = game.score()
  expect(actual).toBe(29)
})

test('should be able to score an incomplete game with spare', () => {
  const game = new Game()
  const rolls = new Array(7).fill(1)
  rolls[4] = 5
  rolls[5] = 5
  rolls.forEach(pins => game.roll(pins))
  const actual = game.score()
  expect(actual).toBe(16)
})

test('should score a game with strike properly', () => {
  const game = new Game()
  const rolls = new Array(20).fill(1)
  rolls[0] = 10
  rolls.forEach(pins => game.roll(pins))
  const actual = game.score()
  expect(actual).toBe(30)
})

test('should be able to score an incomplete game with strike', () => {
  const game = new Game()
  const rolls = new Array(7).fill(1)
  rolls[4] = 10
  rolls.forEach(pins => game.roll(pins))
  const actual = game.score()
  expect(actual).toBe(18)
})

test('should be able to score an incomplete game with strike', () => {
  const game = new Game()
  const rolls = new Array(7).fill(1)
  rolls[4] = 10
  rolls.forEach(pins => game.roll(pins))
  const actual = game.score()
  expect(actual).toBe(18)
})

test('perfect game', () => {
  const game = new Game()
  const rolls = new Array(12).fill(10)
  rolls.forEach(pins => game.roll(pins))
  const actual = game.score()
  expect(actual).toBe(300)
})
