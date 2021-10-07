import VisualAsset from "./VisualAsset.js";
export default class Marker extends VisualAsset {

    constructor (x, y, index) {
        super(x,y)
        this.img.src = '/bmps/marker.png';
        this._index = index;
        this.marker = true;
        this.slot = false;
        this.card = false;
    }


}
