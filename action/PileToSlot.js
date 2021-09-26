import VARS from '../utils/Vars.js';
import Utils from '../utils/Utils.js';

const PileToSlot = {
    slotHitListener: function (actvieCard) {

        let { suit, rank } = actvieCard;

        for (let i = 0; i < 4; i ++) {
            let slotObj = VARS.slots[i]; 

            if ( 
                 // COLLISION DETECTION TESTING
                Utils.rectangleRectangleCollisionDetection(slotObj, actvieCard) &&
                slotObj.rank === rank &&
                slotObj.suit === suit
            ) {
                return { hit: true, slot: slotObj};
            }
        }
        return {hit: false, slot: undefined};
    },
    addCardToSlot: function (actvieCard, slot) {

        let { drawPile, _index } = actvieCard;
        actvieCard.setClickability(false);
        actvieCard.setPosition({x: slot.x, y: slot.y})

        let tempArray = (!drawPile) ? VARS.piles[_index] : VARS.flipPile;
        tempArray.splice(tempArray.indexOf(actvieCard), 1);
        actvieCard.setDrawPile(false);
        slot.rank ++;
        VARS.revealNextCard(tempArray);
    }

}
export default PileToSlot;