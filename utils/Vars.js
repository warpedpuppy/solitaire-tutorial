
const VARS = {
    allVisualAssets: [],
    canvas: document.querySelector('canvas'),
    ctx: undefined,
    init: function () {
        this.ctx = this.canvas.getContext('2d');
    },
    spacing: {
        buffer: 10,
        buffer_larger: 40,
        slot_spacer: 50
    },
    build: {
        cardWidth: 100,
        cardHeight: 150,
        canvasWidth: 1000,
        canvasHeight: 800,
        suits: ["clubs", "diamonds", "hearts", "spades"],
        ranks: ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"],
    }
}
export default VARS;