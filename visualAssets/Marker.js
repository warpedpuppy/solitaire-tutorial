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
        build: function (x, y) {
            this.img = new Image();
            this.img.src = this.src;
            this.x = x;
            this.y = y;
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