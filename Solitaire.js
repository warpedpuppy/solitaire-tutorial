import Deck from './cards/Deck.js';
import VARS from './utils/Vars.js';
const Solitaire = {
    gameBoard: new PIXI.Container(),
    build: function(app) {
        
        app.stage.addChild(this.gameBoard)
        
        this.deck = Deck.build();
        Deck.layOutInGrid(this.gameBoard)

        this.gameBoard.x = (VARS.canvasWidth - this.gameBoard.width) / 2;
        this.gameBoard.y = (VARS.canvasHeight - this.gameBoard.height) / 2

    }

}
export default Solitaire