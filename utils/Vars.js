
const VARS = {
    allVisualAssets: [],
    mousePoint: {x: 0, y: 0},
    xyDiff: {x: 0, y: 0},
    activeCard: undefined,
    deck: [],
    piles: {},
    slots: [],
    ctx: undefined,
    canvas: document.querySelector('canvas'),
    init: function () {
        this.ctx = this.canvas.getContext('2d')
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
    }, 
    resetValues: function () {
        this.activeCard = undefined;
        this.dragContainer.forEach (card => {
            card.yOffset = 0;
        });
        this.dragContainer = []
    }
    
}
export default VARS;