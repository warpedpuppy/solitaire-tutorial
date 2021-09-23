import Deck from './cards/Deck.js';
import VARS from './utils/Vars.js';
const Solitaire = {
    canvas: document.getElementById('tutorial'),
    addListeners: function () {
        this.determineMousePosition();
    },
    trackMousePosition: function () {
        this.canvas.addEventListener('mousemove', e => mousePoint = {x: e.pageX, y: e.pageY} )
    },
    setActiveCard: function () {
        const { deck } = VARS;
        this.canvas.addEventListener('mousedown', e => {

            // determine active card
            deck.forEach( (card, i) => {
                const { x, y, clickable } = card;
                if (clickable) {
                    let rect = {x, y, width: cardWidth, height: cardHeight};
                    hit = pointRectangleCollisionDetection(mousePoint, rect);
                    if (hit) {
                        drag = true;
                        activeCard = i;
                        xDiff = mousePoint.x - deck[i].x;
                        yDiff = mousePoint.y - deck[i].y;
                    
                    } 
                }
                
            })
            //move to top
            if (activeCard !== undefined) {
                let card = deck.splice(activeCard, 1)[0];
                deck.push(card)
                activeCard = deck.length - 1;
            }
        })
    }

}
export default Solitaire