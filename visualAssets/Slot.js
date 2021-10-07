import VisualAsset from "./VisualAsset.js";
export default class Slot extends VisualAsset {

    constructor(x, y, imgString, suit) {
        super(x,y)
        this.img = new Image();
        this.img.src = imgString;
        this.suit = suit;
        this.slot = true;
        this.marker = false;
        this.card = false;
        this.rank = 1;
    }
    
    increaseSlotRank () {
        this.rank++;
    }
    
}