import staticReasons from '../data/reasons'
import overflowMessage from '../data/overflowMessage'
import colors from './colors'

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min)

const decorateReasonWithDisplayProperties = reason => {
  const positionX = randomNumber(-100, 100)
  const positionY = randomNumber(-100, 100)
  const rotate = randomNumber(-40, 40)
  const color = colors[randomNumber(0, colors.length - 1)]

  return {
    ...reason,
    positionX,
    positionY,
    rotate,
    color,
  }
}

const getUniqueReason = reasons => {
  const uniques = staticReasons.filter(
    r => !reasons.find(exists => exists.title === r.title)
  )
  const newReason =
    uniques.length > 0
      ? uniques[randomNumber(0, uniques.length - 1)]
      : overflowMessage

  return { id: reasons.length + 1, ...newReason }
}

const getNewReason = reasons => {
  const uniqueReason = getUniqueReason(reasons)
  return decorateReasonWithDisplayProperties(uniqueReason)
}

export { getNewReason }
