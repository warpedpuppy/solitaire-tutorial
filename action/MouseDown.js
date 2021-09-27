import VARS from "../utils/Vars.js";
import Utils from "../utils/Utils.js";
const MouseDown = {
    setActiveCardAndPopulateDragArray: function () {
        const { build } = VARS,
            { cardWidth, cardHeight } = build;
        let hit, xDiff, yDiff;
        let { mousePoint } = VARS;
        VARS.deck.forEach( (card, i) => {
            
           // if (!VARS.dxeck.includes(card)) return;

           const { x, y, clickable } = card;
           
           if ( clickable ) {
               let rect = {x, y, width: cardWidth, height: cardHeight};
               hit = Utils.pointRectangleCollisionDetection(mousePoint, rect);
               if (hit) {
                //    drag = true;
                VARS.activeCard = card;

                   card.storePosition();
                   VARS.xyDiff.x = mousePoint.x - card.x;
                   VARS.xyDiff.y = mousePoint.y - card.y;

                   VARS.dragContainer = [];

                   if (card._index !== undefined) {
                       let pile = VARS.piles[card._index];
                       let indexInPile = pile.indexOf(card);

                       for (let i = indexInPile; i < pile.length; i++) {
                           VARS.dragContainer.push(pile[i]);       
                       }

                   } else {
                       VARS.dragContainer.push(VARS.activeCard)
                   }
               } 
           }
       })
   },
   moveVisualAssetsToTop: function () {
       if (VARS.dragContainer.length) {

           VARS.dragContainer.forEach((card, i) => {
               card.drag(true);
               card.storePosition();
               let moveIndex = VARS.allVisualAssets.indexOf(card);
               let cardToShiftUp = VARS.allVisualAssets.splice(moveIndex, 1)[0];
               VARS.allVisualAssets.push(cardToShiftUp);
               cardToShiftUp.yOffset = i * VARS.spacing.buffer_larger;
               i++;
           })
       }
   }
}
export default MouseDown;