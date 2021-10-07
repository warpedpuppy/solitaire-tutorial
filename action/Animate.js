import VARS from '../utils/Vars.js';
import Utils from '../utils/Utils.js';
const Animate = {
    counter: 0,
    start: function() {

        const { mousePoint, xyDiff, ctx, canvas } = VARS;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let over = [];

        VARS.allVisualAssets.forEach(card => {
            const { img, x, y, clickable } = card;


            ctx.drawImage(img, x, y);

            if (clickable) {
                let rect = { x, y, width: 100, height: 150 };
                let hit = Utils.pointRectangleCollisionDetection(mousePoint, rect);
                over.push(hit);
            }

            if (card === VARS.activeCard && !card.drawPile && card.rank) {
                let x = mousePoint.x - xyDiff.x;
                let y = mousePoint.y - xyDiff.y;
                card.setPosition({ x, y })
            }

        })

        this.cursor(over.includes(true));

        requestAnimationFrame(() => this.start());
    },
    cursor: function(boolean) {
        if (boolean) {
            VARS.canvas.style.cursor = "pointer";
        } else {
            VARS.canvas.style.cursor = "default";
        }

    }
}
export default Animate;