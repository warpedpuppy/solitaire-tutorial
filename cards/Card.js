const Card =  function () {
    return {
        img: undefined,
        cardFront: undefined,
        cardBack: undefined,
        rank: undefined,
        suit: undefined,
        color: undefined,
        x: undefined,
        y: undefined,
        value: undefined,
        clickable: false,
        drawPile: false,
        build: function (rank, suit, value, x, y) {
            this.rank = rank + 1;
            this.suit = suit;
            this.img = new Image();
            this.cardFront = `bmps/card_bmps/${rank}_${suit}.png`;
            this.cardBack =  `bmps/card_bmps/card_back.png`;
            this.color = (suit === 'hearts' || suit === 'diamonds') ? "red" : "black" ;
            this.value = value;
            this.x = x;
            this.y = y;
            this.reveal(true);
        },
        setPivot: function (pivotObject) {
            this.x -= pivotObject.x;
            this.y -= pivotObject.y;
        },
        getPosition: function() {
            return { x: this.x, y: this.y }
        },
        setPosition: function(positionObject) {
            this.x = positionObject.x;
            this.y = positionObject.y;
        },
        reveal: function (boolean) {
            this.img.src = boolean ? this.cardFront : this.cardBack ;
        },
        setClickability: function (boolean) {
            this.clickable = boolean;
        },
        setDrawPile: function (boolean) {
            this.drawPile = boolean;
        }
    }
}
export default Card;