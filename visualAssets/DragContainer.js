const DragContainer = {
    arr: [],
    add: function (card) {
        this.arr.push(card);
    },
    length: function () {
        return this.arr.length;
    },
    includes: function (card) {
        return this.arr.includes(card);
    },
    returnCards: function () {
        this.arr.forEach( card => {
            card.resetPositionToStore()
        })
    },
    reset: function () {
        this.arr.forEach (card => {
            card.yOffset = 0;
        });
        this.arr = []
    }
}
export default DragContainer;