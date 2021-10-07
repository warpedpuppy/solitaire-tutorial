import VARS from '../utils/Vars.js';

export default class VisualAsset {

    constructor (x,y) {
        this.x = x;
        this.y = y;
        this.flipPile = false;
        this.drawPile = false;
        this.clickable = false;
        this.storePos = { x: 0, y: 0}
        this.height = VARS.build.cardHeight;
        this.width = VARS.build.cardWidth;
        this.img = new Image();
    }
    setPosition(obj) {
        this.x = obj.x;
        this.y = obj.y;
    }
    getPosition() {
        return { x: this.x, y: this.y }
    }
    storePosition () {
        this.storePos.x = this.x;
        this.storePos.y = this.y;
    }
    resetPositionToStore () {
        this.x = this.storePos.x;
        this.y = this.storePos.y;
    }
    setPosition(positionObject) {
        this.x = positionObject.x;
        this.y = positionObject.y;
    }
    reveal(boolean) {
        this.img.src = boolean ? this.cardFront : this.cardBack ;
    }
    setClickability(boolean) {
        this.clickable = boolean;
    }
    setDrawPile(boolean) {
        this.drawPile = boolean;
    }
    setFlipPile (boolean) {
        this.flipPile = boolean;
    }
}
