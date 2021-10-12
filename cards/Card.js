import VARS from "../utils/Vars.js";
import VisualAsset from "../visualAssets/VisualAsset.js";

export default class Card extends VisualAsset {

        constructor (rank, suit, value, x, y) {
            super(x,y);
            let indexOfRank = VARS.build.ranks.indexOf(rank);
            this.rank = indexOfRank + 1;
            this.suit = suit;
            this.cardFront = `bmps/card_bmps/${rank}_${suit}.png`;
            this.cardBack =  `bmps/card_bmps/card_back.png`;
            this.color = (suit === 'hearts' || suit === 'diamonds') ? "red" : "black" ;
            this.value = value;
            this.reveal(true);
            this.slot = false;
            this.marker = false;
            this.card = true;
        }

        whoAmI(){ console.log("i am card")}
        
        setIndex(index) {
            this._index = index;
        }

        reveal (boolean) {
            this.img.src = boolean ? this.cardFront : this.cardBack ;
        }

}