import VARS from "../utils/Vars.js";
import Utils from "../utils/Utils.js";
import DragContainer from "../visualAssets/DragContainer.js";
const MouseDown = {
    setActiveCard: function () {
        const { build } = VARS,
            { cardWidth, cardHeight } = build;
        let { mousePoint } = VARS;
        VARS.allVisualAssets.forEach( (card, i) => {
            
           const { x, y, clickable, drawPile } = card;
           
           if (clickable) {
               let rect = {x, y, width: cardWidth, height: cardHeight};
               let hit = Utils.pointRectangleCollisionDetection(mousePoint, rect);
               if (hit) {
                   VARS.activeCard = card;

                   if (card.resetDrawPileButton) return;

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