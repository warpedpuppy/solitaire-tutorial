import VARS from './utils/Vars.js';
import Animate from './action/Animate.js';
import Card from './cards/Card.js';
const Solitaire = {
    init: function () {

        let AceHearts = Card().build("ace", "hearts", 0, 0, 0);
        VARS.allVisualAssets.push(AceHearts);

        let TwoHearts = Card().build("two", "hearts", 1, 175, 0);
        VARS.allVisualAssets.push(TwoHearts);

        VARS.init();
        Animate.start();

    }
}
export default Solitaire