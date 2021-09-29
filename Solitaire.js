import VARS from './utils/Vars.js';
import Deal from './cards/Deal.js';
import Deck from './cards/Deck.js';
import Utils from './utils/Utils.js';
import MouseDown from './action/MouseDown.js';
import MouseUp from './action/MouseUp.js';
import Draw from './action/Draw.js';
import FlipPile from './visualAssets/FlipPile.js';
const Solitaire = {
    canvas: document.getElementById('tutorial'),
    init: function () {
        const { canvas } = VARS;
        const ctx = canvas.getContext('2d');

        Deck.build();
        Deal.start();
        this.addListeners();
        
        Draw.start(ctx);

    },
    addListeners: function () {
        this.mouseMoveHandler();
        this.mouseDownHandler();
        this.mouseUpHandler();
    },
    mouseMoveHandler: function () {
        this.canvas.addEventListener('mousemove', e => VARS.mousePoint = {x: e.pageX, y: e.pageY} )
    },
    mouseDownHandler: function () {
        this.canvas.addEventListener('mousedown', () => {
            MouseDown.setActiveCardAndPopulateDragArray();
            MouseDown.moveVisualAssetsToTop();
        } )
    },
    mouseUpHandler: function () {
        this.canvas.addEventListener('mouseup', e => {
            MouseUp.activeCardExists();
            VARS.resetValues();
        });
    }
}
export default Solitaire