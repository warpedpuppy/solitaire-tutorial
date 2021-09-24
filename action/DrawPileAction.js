import ListenerManager from "./ListenerManager.js";
import Deal from '../cards/Deal.js';
import VARS from '../utils/Vars.js';
// import Testing from '../utils/Testing.js';

const DrawPileAction =  {
    drawPileClickHandler: function () {

        // Testing.printCards(VARS.drawPile)
        let top3 = VARS.drawPile.splice(-3).reverse(), card;
        // Testing.printCards(top3)

        for (let i = 0; i < top3.length; i++) {
            card = top3[i];
            // ListenerManager.removeAllListeners(card);
            card.setClickability(false);
            let cardPosition = {y: (VARS.build.cardHeight * 2) + 60 + (i * 10), x: card.getPosition().x };
            card.setPosition(cardPosition);
            card.reveal(true);
        }

        VARS.flipPile = [...VARS.flipPile, ...top3];
        // VARS.topFlipPileCard = card;

        if (VARS.drawPile.length === 0) {
            VARS.flipPileReset = true;
        } else {
            //next flip card clickable

            let topFlipPileCard = VARS.drawPile[VARS.drawPile.length - 1]
            topFlipPileCard.setClickability(true);
            console.log(topFlipPileCard);

            let topCard = VARS.drawPile[VARS.drawPile.length - 1];
            // topCard.setClickability(true);
        }
        // Testing.sumOfListeners(VARS.deck);
    },
    resetDrawPileHandler: function () {
        // ListenerManager.removeResetFlip(VARS.resetDrawPileButton);
        VARS.drawPile = [...VARS.flipPile].reverse();
        Deal.createDrawPile(VARS.drawPile, false);
        VARS.flipPile = [];
        VARS.flipPileReset = false;
    }
}
export default DrawPileAction;