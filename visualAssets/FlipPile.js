const FlipPile = {
    arr: [],
    allowReset: false,
    clearClickabilities: function () {
        this.arr.forEach( card => {
            card.setClickability(false);
        })
    },
    reset: function () {
       this.arr = [];
       this.allowReset = false;
    }

}
export default FlipPile;