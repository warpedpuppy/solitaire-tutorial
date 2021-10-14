const Utils = {
  rectangleRectangleCollisionDetection: function (rect1, rect2) {
    return (rect1.x <= (rect2.x + rect2.width) &&
            rect2.x <= (rect1.x + rect1.width) &&
            rect1.y <= (rect2.y + rect2.height) &&
            rect2.y <= (rect1.y + rect1.height))
  },
  pointRectangleCollisionDetection: function (point, rect) {
    return (point.x > rect.x && point.x < rect.x + rect.width && point.y > rect.y && point.y < rect.y + rect.height)
  },
  moveToTopOfVisualAssets: function(card, array) {
    let moveIndex = array.indexOf(card);
    let cardToShiftUp = array.splice(moveIndex, 1)[0];
    array.push(cardToShiftUp);
    return cardToShiftUp;
  },
  returnLastArrayItem: function (arr) {
    return arr[arr.length - 1];
  }
}

export default Utils;