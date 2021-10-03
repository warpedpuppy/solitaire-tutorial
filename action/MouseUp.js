
import VARS from '../utils/Vars.js';
const MouseUp = {
    activeCardExists: function () {
       
        VARS.activeCard.resetPositionToStore();
        VARS.activeCard = undefined;

    }
}
export default MouseUp;