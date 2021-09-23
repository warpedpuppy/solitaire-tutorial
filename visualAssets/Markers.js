const Markers = function (img, index, x, y) {
    return {
        img,
        marker: true,
        index,
        x,
        y,
        build: function () {
            this.img = new Image();
            this.img.src = '/bmps/marker.png';
        }
    }
}