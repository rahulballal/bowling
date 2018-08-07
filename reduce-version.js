module.exports = function bowlingScore (rolls) {
  var frameCount = 1 // Frame idx
  return rolls.reduce(
    (previousValue, currentValue, currentIndex, originalRolls) => {
      if (frameCount >= 10) return previousValue + currentValue // Bonus rolls
      if (currentValue === 10) {
        // Strike
        frameCount++
        return (
          previousValue +
          currentValue +
          originalRolls[currentIndex + 1] +
          originalRolls[currentIndex + 2]
        )
      }
      if (frameCount % 1 !== 0) {
        // Second Roll of a Frame
        frameCount = Math.floor(++frameCount)
        if (currentValue + originalRolls[currentIndex - 1] === 10) {
          return previousValue + currentValue + originalRolls[currentIndex + 1]
        } // Spare
        return previousValue + currentValue // Not a spare
      }
      frameCount += 0.5 // First Roll of a Frame
      return previousValue + currentValue
    },
    0
  )
}
