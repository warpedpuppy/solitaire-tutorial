
import MoveCard from '../action/MoveCard.js';
import VARS from '../utils/Vars.js';
import DrawPile from '../visualAssets/DrawPile.js';
import DragContainer from '../visualAssets/DragContainer.js';
const MouseUp = {
    activeCardExists: function () {
 
        const { activeCard } = VARS;
        
        if (activeCard.resetDrawPileButton) {
            DrawPile.reset();
        } else if (activeCard.drawPile) {
            DrawPile.clickHandler();
        } else {
            DragContainer.returnCards();
        }

        DragContainer.reset();
        VARS.activeCard = undefined;
    }
}
export default MouseUp;