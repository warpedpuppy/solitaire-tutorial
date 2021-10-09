import VARS from "../utils/Vars.js";

const Card =  function () {
    return {
        build: function (rank, suit, value, x, y) {
            let indexOfRank = VARS.build.ranks.indexOf(rank);
            this.rank = indexOfRank + 1;
            this.suit = suit;
            this.img = new Image();
            this.cardFront = `bmps/card_bmps/${rank}_${suit}.png`;
            this.cardBack =  `bmps/card_bmps/card_back.png`;
            this.color = (suit === 'hearts' || suit === 'diamonds') ? "red" : "black" ;
            this.value = value;
            this.x = x;
            this.y = y;
            this.width = VARS.build.cardWidth;
            this.height = VARS.build.cardHeight;
            this.reveal(true);
            return this;
        },
        reveal: function (boolean) {
            this.img.src = boolean ? this.cardFront : this.cardBack ;
        }
    }
}
export default Card;