import Deal from '../cards/Deal.js';
import VARS from '../utils/Vars.js';
import Utils from '../utils/Utils.js'
const DrawPileAction =  {
    drawPileClickHandler: function () {

        this.clearFlipPileClickabilities();


        let top3 = VARS.drawPile.splice(-3).reverse(), card;

        for (let i = 0; i < top3.length; i++) {
            card = top3[i];

            Utils.moveToTopOfVisualAssets(card, VARS.allVisualAssets);
            card.setClickability(false);
            card.setDrawPile(false);
            card.setFlipPile(true);
            let cardPosition = {y: (VARS.build.cardHeight * 2) + 60 + (i * 10), x: card.getPosition().x };
            card.setPosition(cardPosition);
            card.reveal(true);
        }

        VARS.flipPile = [...VARS.flipPile, ...top3];

        if (VARS.drawPile.length === 0) {
            VARS.flipPileReset = true;
            VARS.resetDrawPileButton.clickable = true;
        } else {
            let topFlipPileCard = Utils.returnLastArrayItem(VARS.drawPile)
            topFlipPileCard.setClickability(true);
        }

        let topCard = Utils.returnLastArrayItem(VARS.flipPile);
        topCard.setClickability(true);

    },
    clearFlipPileClickabilities: function () {
        VARS.flipPile.forEach( card => {
            card.setClickability(false);
        })
    },
    resetDrawPileHandler: function () {
        VARS.drawPile = [...VARS.flipPile].reverse();
        Deal.createDrawPile(VARS.drawPile, false);
        VARS.flipPile = [];
        VARS.flipPileReset = false;
    }
}
export default DrawPileAction;