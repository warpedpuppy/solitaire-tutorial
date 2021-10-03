import VARS from './utils/Vars.js';
import Deal from './cards/Deal.js';
import Deck from './cards/Deck.js';
import Animate from './action/Animate.js';
const Solitaire = {
    init: function () {

        VARS.init();

        Deck.build();
        
        Deal.start();

        Animate.start();

    },
    
}
export default Solitaire