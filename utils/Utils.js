const Utils = {
  pointRectangleCollisionDetection: function (point, rect) {
      if (point.x > rect.x && point.x < rect.x + rect.width && point.y > rect.y && point.y < rect.y + rect.height) {
        return true
      }
      return false
  }
}

export default Utils;