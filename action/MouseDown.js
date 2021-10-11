import VARS from "../utils/Vars.js";
import Utils from "../utils/Utils.js";
const MouseDown = {
    setActiveCard: function () {

        let { mousePoint } = VARS;
        VARS.allVisualAssets.forEach( card => {
            
           const { x, y, clickable, width, height } = card;
           if (clickable) {
               let rect = {x, y, width, height };
               let hit = Utils.pointRectangleCollisionDetection(mousePoint, rect);
               if (hit) {
                   VARS.activeCard = card;
               } 
           }
       })
   }
}
export default MouseDown;