import VARS from "../utils/Vars.js";
const Marker =  function () {
    return {
        img: undefined,
        src: '/bmps/marker.png',
        x: undefined,
        y: undefined,
        clickable: false,
        drawPile: false,
        card: false,
        marker: true,
        height: undefined,
        width: undefined,
        build: function (x, y, index) {
            this.img = new Image();
            this.img.src = this.src;
            this.x = x;
            this.y = y;
            this.height = VARS.build.cardHeight;
            this.width = VARS.build.cardWidth;
            this._index = index;
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
export default Marker;