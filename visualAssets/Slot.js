import VARS from "../utils/Vars.js";
const Slot =  function () {
    return {
        img: undefined,
        x: undefined,
        y: undefined,
        clickable: false,
        drawPile: false,
        card: false,
        marker: false,
        slot: true,
        rank: 1,
        suit: undefined,
        width: undefined,
        height: undefined,
        build: function (x, y, imgString, suit) {
            this.img = new Image();
            this.img.src = imgString;
            this.x = x;
            this.y = y;
            this.suit = suit;
            this.height = VARS.build.cardHeight;
            this.width = VARS.build.cardWidth;
        },
        increaseSlotRank: function () {
            this.rank++;
        },
        getPosition: function() {
            return { x: this.x, y: this.y }
        },
        setPosition: function(positionObject) {
            this.x = positionObject.x;
            this.y = positionObject.y;
        },
        setClickability: function (boolean) {
            this.clickable = boolean;
        },
        reveal: function () {
            
        }
    }
}
export default Slot;