import VARS from "../utils/Vars.js";
import Utils from "../utils/Utils.js";
const MouseDown = {
    setActiveCard: function () {
        const { build } = VARS,
            { cardWidth, cardHeight } = build;
        let { mousePoint } = VARS;
        VARS.allVisualAssets.forEach( (card, i) => {
            
           const { x, y, clickable } = card;
           
           if (clickable) {
               let rect = {x, y, width: cardWidth, height: cardHeight};
               let hit = Utils.pointRectangleCollisionDetection(mousePoint, rect);
               if (hit) {
                   VARS.activeCard = card;
               } 
           }
       })
   }
}
export default MouseDown;