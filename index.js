const TOTAL_FRAMES = 10
const FINAL_FRAME = 9

class Game {
  constructor () {
    this.rolls = []
  }

  roll (noOfPins = 0) {
    if (noOfPins > 10) {
      throw new Error('No of pins rolled in a turn can not be more than 10')
    }
    this.rolls.push(noOfPins)
    return this.rolls
  }

  score () {
    let result = 0
    let rollCount = 0
    let frameCount = 0

    const isSpare = (firstAttempt, secondAttempt) => (firstAttempt + secondAttempt) === 10
    const isStrike = (currentAttempt) => currentAttempt === 10
    const safeGetRoll = (index) => index < this.rolls.length ? this.rolls[index] : 0
    const defaultScoring = (currentResult) => {
      const temp = currentResult + safeGetRoll(rollCount) + safeGetRoll(rollCount + 1)
      rollCount = rollCount + 2
      return temp
    }
    const scoringForStrike = (currentResult) => {
      const temp = currentResult + safeGetRoll(rollCount) + safeGetRoll(rollCount + 1) + safeGetRoll(rollCount + 2)
      rollCount = rollCount + 1
      return temp
    }
    const scoringForSpare = (currentResult) => {
      const temp = currentResult + safeGetRoll(rollCount) + safeGetRoll(rollCount + 1) + safeGetRoll(rollCount + 2)
      rollCount = rollCount + 2
      return temp
    }

    for (frameCount = 0; frameCount < TOTAL_FRAMES; frameCount++) {
      if (isStrike(safeGetRoll(rollCount))) {
        result = scoringForStrike(result)
      } else if (isSpare(safeGetRoll(rollCount), safeGetRoll(rollCount + 1))) {
        result = scoringForSpare(result)
      } else {
        result = defaultScoring(result)
      }
    }
    return result
  }
}

module.exports = Game
