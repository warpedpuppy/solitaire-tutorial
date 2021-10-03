
import VARS from '../utils/Vars.js';
import DrawPile from '../visualAssets/DrawPile.js';
const MouseUp = {
    activeCardExists: function () {
 
        const { activeCard } = VARS;
        
        if (activeCard.resetDrawPileButton) {
            DrawPile.reset();
        } else if (activeCard.drawPile) {
            DrawPile.clickHandler();
        } 

    }
}
export default MouseUp;