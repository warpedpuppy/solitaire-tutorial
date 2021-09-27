import VARS from "../utils/Vars.js";
import Utils from "../utils/Utils.js";
const MouseDown = {
    setActiveCardAndPopulateDragArray: function () {
        const { build } = VARS,
            { cardWidth, cardHeight } = build;
        let { mousePoint } = VARS;
        VARS.allVisualAssets.forEach( (card, i) => {
            
           const { x, y, clickable, drawPile } = card;
           
           if ( clickable ) {
               let rect = {x, y, width: cardWidth, height: cardHeight};
               let hit = Utils.pointRectangleCollisionDetection(mousePoint, rect);
               if (hit) {
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

                   } else if (!drawPile) {
                       VARS.dragContainer.push(VARS.activeCard)
                   }
               } 
           }
       })
   },
   moveVisualAssetsToTop: function () {
       if (VARS.dragContainer.length) {

           VARS.dragContainer.forEach((card, i) => {
               card.storePosition();
               let cardToShiftUp = Utils.moveToTopOfVisualAssets(card, VARS.allVisualAssets); 
               cardToShiftUp.yOffset = i * VARS.spacing.buffer_larger;
               i++;
           })
       }
   }
}
export default MouseDown;