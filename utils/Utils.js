const Utils = {
    distributeAroundCircle (circleCenter, numElements, radius) {
        const arr = []
        for (let i = 0; i < numElements; i++) {
          const x = circleCenter.x + radius * Math.cos((2 * Math.PI) * i / numElements)
          const y = circleCenter.y + radius * Math.sin((2 * Math.PI) * i / numElements)
          arr.push({ x, y })
        }
        return arr
      },
      returnPointsAroundACircle (radius, i, numElements) {
        const x = radius * Math.cos((2 * Math.PI) * i / numElements)
        const y = radius * Math.sin((2 * Math.PI) * i / numElements)
        return { x, y }
      },
      deg2rad (degree) {
        return degree * (Math.PI / 180)
      }
}
export default Utils;