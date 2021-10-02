import VARS from "../utils/Vars.js";
import Utils from "../utils/Utils.js";
const MouseDown = {
    setActiveCardAndPopulateDragArray: function () {
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
                   card.storePosition(card.getPosition())
                   VARS.xyDiff.x = mousePoint.x - card.x;
                   VARS.xyDiff.y = mousePoint.y - card.y;
                   Utils.moveToTopOfVisualAssets(card, VARS.allVisualAssets)


               } 
           }
       })
   }
}
export default MouseDown;