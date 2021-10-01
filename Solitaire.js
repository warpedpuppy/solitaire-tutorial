import VARS from './utils/Vars.js';
import Animate from './action/Animate.js';
import Card from './cards/Card.js';
const Solitaire = {
    init: function () {

        let cardImage = new Image();
        cardImage.src = '/bmps/card_bmps/ace_hearts.png';

        let AceHearts = {
            img: cardImage,
            x: 0,
            y: 0
        }
        
        VARS.allVisualAssets.push(AceHearts)

        VARS.init();
        Animate.start();

    }
}
export default Solitaire