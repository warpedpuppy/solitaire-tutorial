
import PileToPile from '../action/PileToPile.js';
import PileToSlot from '../action/PileToSlot.js';
import VARS from '../utils/Vars.js';
import DrawPileAction from '../action/DrawPileAction.js';
import Utils from '../utils/Utils.js';
const MouseUp = {
    activeCardExists: function () {
        const { activeCard } = VARS;
        
        if (activeCard.drawPile) {
            DrawPileAction.drawPileClickHandler();
        } else {

            let slotHitObject = PileToSlot.slotHitListener(activeCard);
            let pileHitObject = PileToPile.movePileListener(activeCard);
            if (VARS.dragContainer.length === 1 && slotHitObject.hit) {
                PileToSlot.addCardToSlot(activeCard, slotHitObject.slot)
            } else if (pileHitObject.hit) {
                PileToPile.movePiles(pileHitObject.topCard, pileHitObject.key, activeCard);
            } else {
                VARS.dragContainer.forEach( card => {
                    card.resetPositionToStore()
                })
            }
        }
    },
    flipPileReset: function () {
        const { resetDrawPileButton, mousePoint, build } = VARS;
        const { cardWidth, cardHeight } = build;
        let rect = {x: resetDrawPileButton.x, y: resetDrawPileButton.y, width: cardWidth, height: cardHeight};
        let hit = Utils.pointRectangleCollisionDetection(mousePoint, rect);
        if (hit) {
            DrawPileAction.resetDrawPileHandler();
            resetDrawPileButton.clickable = false;
        } 
    }
}
export default MouseUp;