import VARS from './utils/Vars.js';
import Deal from './cards/Deal.js';
import Deck from './cards/Deck.js';
import MouseDown from './action/MouseDown.js';
import Animate from './action/Animate.js';
const Solitaire = {
    canvas: undefined,
    init: function () {

        VARS.init();
        this.canvas = VARS.canvas;

        Deck.build();
        Deal.start();
        this.addListeners();
        
        Animate.start();

    },
    addListeners: function () {
        this.mouseMoveHandler();
        this.mouseDownHandler();
    },
    mouseMoveHandler: function () {
        this.canvas.addEventListener('mousemove', e => VARS.mousePoint = {x: e.pageX, y: e.pageY} )
    },
    mouseDownHandler: function () {
        this.canvas.addEventListener('mousedown', () => MouseDown.listenForClick() )
    }
}
export default Solitaire