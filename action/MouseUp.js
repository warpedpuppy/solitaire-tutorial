
import MoveCard from '../action/MoveCard.js';
import VARS from '../utils/Vars.js';
import DrawPileAction from '../action/DrawPileAction.js';
import Utils from '../utils/Utils.js';
const MouseUp = {
    activeCardExists: function () {
        const { activeCard } = VARS;
        
        if (activeCard.drawPile) {
            DrawPileAction.drawPileClickHandler();
        } else {
            let result = MoveCard.moveCardListener(activeCard)

            if ( result.hit ) {
                MoveCard.moveCard(result.target, activeCard)
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