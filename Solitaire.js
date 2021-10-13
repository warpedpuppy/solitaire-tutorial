import VARS from './utils/Vars.js';
import Card from './cards/Card.js';
import MouseDown from './action/MouseDown.js';
import MouseUp from './action/MouseUp.js';
import Animate from './action/Animate.js';
const Solitaire = {
    canvas: undefined,
    init: function () {

        VARS.init();
        this.canvas = VARS.canvas;

        let AceHearts = Card().build("ace", "hearts", 1, 50, 50);
        AceHearts.setClickability(true);
        VARS.allVisualAssets.push(AceHearts);

        let TwoHearts = Card().build("two", "hearts", 2, 200, 50);
        TwoHearts.setClickability(true);
        VARS.allVisualAssets.push(TwoHearts);

        this.addListeners();
        
        Animate.start();

    },
    addListeners: function () {
        this.mouseMoveHandler();
        this.mouseDownHandler();
        this.mouseUpHandler();
    },
    mouseMoveHandler: function () {
        this.canvas.addEventListener('mousemove', e => {
            let leftOffset = (window.innerWidth - VARS.canvas.width) / 2;
            VARS.mousePoint = {x: e.pageX - leftOffset, y: e.pageY};
         })
    },
    mouseDownHandler: function () {
        this.canvas.addEventListener('mousedown', () => {
            MouseDown.setActiveCardAndPopulateDragArray();
        } )
    },
    mouseUpHandler: function () {
        this.canvas.addEventListener('mouseup', e => {
            if (VARS.activeCard) MouseUp.activeCardExists();
        });
        this.canvas.addEventListener('mouseout', e => {
            if (VARS.activeCard) MouseUp.activeCardExists();
        });
    }
}
export default Solitaire