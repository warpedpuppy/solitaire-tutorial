import VARS from "../utils/Vars.js";
import Utils from "../utils/Utils.js";
import DragContainer from "../visualAssets/DragContainer.js";
const MouseDown = {
    setActiveCardAndPopulateDragArray: function () {

        let { mousePoint } = VARS;
        VARS.allVisualAssets.forEach( card => {
            
           const { x, y, clickable, width, height, drawPile } = card;
           
           if (clickable) {
               let rect = {x, y, width, height };
               let hit = Utils.pointRectangleCollisionDetection(mousePoint, rect);
               if (hit) {
                   VARS.activeCard = card;

                   if (card.resetDrawPileButton) return;

                   VARS.xyDiff.x = mousePoint.x - card.x;
                   VARS.xyDiff.y = mousePoint.y - card.y;

                   DragContainer.reset();

                   if (card._index !== undefined) {
                       let pile = VARS.piles[card._index];
                       let indexInPile = pile.indexOf(card);

                       for (let i = indexInPile; i < pile.length; i++) {
                        DragContainer.add(pile[i]);       
                       }

                   } else if (!drawPile) {
                        DragContainer.add(VARS.activeCard)
                   }
               } 
           }
       })
       this.moveVisualAssetsToTop();
   },
   moveVisualAssetsToTop: function () {

       const { arr } = DragContainer;
       if ( arr.length) {
            arr.forEach((card, i) => {
               card.storePosition();
               let cardToShiftUp = Utils.moveToTopOfVisualAssets(card, VARS.allVisualAssets); 
               cardToShiftUp.yOffset = i * VARS.spacing.buffer_larger;
               i++;
           })
       }
   }
}
export default MouseDown;