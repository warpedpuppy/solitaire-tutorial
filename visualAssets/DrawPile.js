import VARS from '../utils/Vars.js';
import Utils from '../utils/Utils.js';
import FlipPile from './FlipPile.js'
import Testing from '../utils/Testing.js'
const DrawPile = {
    arr: [],
    resetButton: undefined,
    x: undefined,
    create(arr, init, x) {

        this.x = x;

        let yVal = VARS.build.cardHeight + VARS.spacing.buffer_larger,
            topCard;

        arr.forEach(card => {

            card.setDrawPile(true);
            card.setPosition({x, y: yVal});
            card.reveal(false);
            
            yVal += 0.25;
            if (init) {
                this.arr.push(card)
            };

            topCard = card;

        })
        topCard.setClickability(true);
    },
    createResetButton: function (xOffset, y) {
        let img = new Image();
        img.src = '/bmps/marker.png';
        this.resetButton = {
            img,
            x: xOffset,
            y,
            clickable: false,
            resetDrawPileButton: true,
        }
        VARS.allVisualAssets.unshift(this.resetButton);
 
    }

}
export default DrawPile;