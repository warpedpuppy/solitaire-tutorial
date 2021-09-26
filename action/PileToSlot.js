import VARS from '../utils/Vars.js';
import Utils from '../utils/Utils.js';

const PileToSlot = {
    slotHitListener: function (actvieCard) {

        let activeCardObj = VARS.allVisualAssets[actvieCard];

        let { suit, rank } = activeCardObj;

        for (let i = 0; i < 4; i ++) {
            let slotObj = VARS.slots[i]; 

            if ( 
                 // COLLISION DETECTION TESTING
                Utils.rectangleRectangleCollisionDetection(slotObj, activeCardObj) &&
                slotObj.rank === rank &&
                slotObj.suit === suit
            ) {
                return { hit: true, slot: slotObj};
            }
        }
        return {hit: false, slot: undefined};
    },
    addCardToSlot: function (actvieCard, slot) {


        let activeCardObj = VARS.allVisualAssets[actvieCard]

        let { drawPile, _index, setPosition } = activeCardObj;
        console.log(slot)
        activeCardObj.setClickability(false);
        activeCardObj.setPosition({x: slot.x, y: slot.y})

        let tempArray = (!drawPile) ? VARS.piles[_index] : VARS.flipPile;
        tempArray.splice(tempArray.indexOf(activeCardObj), 1);
        activeCardObj.setDrawPile(false);
        slot.rank ++;
        VARS.revealNextCard(tempArray);
    }

}
export default PileToSlot;