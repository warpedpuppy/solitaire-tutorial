import VARS from './utils/Vars.js';
import Card from './cards/Card.js';
import Animate from './action/Animate.js';
const Solitaire = {
    canvas: undefined,
    init: function () {

        VARS.init();
        this.canvas = VARS.canvas;

        let AceHearts = Card().build('ace', 'hearts', 0, (500-100)/2, 50);
        VARS.allVisualAssets.push(AceHearts)
        this.addListeners();
        
        Animate.start();

    },
    addListeners: function () {
        this.mouseMoveHandler();
    },
    mouseMoveHandler: function () {
        this.canvas.addEventListener('mousemove', e => {
            let leftOffset = (window.innerWidth - VARS.canvas.width) / 2;
            VARS.mousePoint = {x: e.pageX - leftOffset, y: e.pageY};
         })
    }
}
export default Solitaire