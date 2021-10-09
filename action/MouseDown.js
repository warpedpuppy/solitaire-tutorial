import VARS from "../utils/Vars.js";
import Utils from "../utils/Utils.js";
const MouseDown = {
    setActiveCardAndPopulateDragArray: function () {

        let { mousePoint } = VARS;
        VARS.allVisualAssets.forEach( (card, i) => {
            
           const { x, y, clickable, width, height } = card;
           
           if (clickable) {
               let rect = {x, y, width, height };
               let hit = Utils.pointRectangleCollisionDetection(mousePoint, rect);
               if (hit) {
                   VARS.activeCard = card;

                   if (card.resetDrawPileButton) return;
                   let currentPosition = card.getPosition()
                   card.storePosition(currentPosition);
                   VARS.xyDiff.x = mousePoint.x - currentPosition.x;
                   VARS.xyDiff.y = mousePoint.y - currentPosition.y;
                   Utils.moveToTopOfVisualAssets(card, VARS.allVisualAssets);

               } 
           }
       })
   }
}
export default MouseDown;