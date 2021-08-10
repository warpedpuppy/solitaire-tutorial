import Deck from './cards/Deck.js';
import VARS from './utils/Vars.js';
const Solitaire = {
    build: function() {

        Deck.build();
        Deck.layOutInGrid()

        VARS.gameBoard.x = (VARS.build.canvasWidth - VARS.gameBoard.width) / 2;
        VARS.gameBoard.y = (VARS.build.canvasHeight - VARS.gameBoard.height) / 2

    }

}
export default Solitaire