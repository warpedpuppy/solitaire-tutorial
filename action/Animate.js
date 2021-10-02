import VARS from '../utils/Vars.js';
import Utils from '../utils/Utils.js';
const Animate = {
    counter: 0,
    start: function() {

        const { mousePoint, xyDiff, ctx, canvas } = VARS;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let over = [];

        

        VARS.allVisualAssets.forEach((card, i) => {
            const { img, x, y, clickable } = card;


            ctx.drawImage(img, x, y);

            if (clickable) {
                let rect = { x, y, width: 100, height: 150 };
                let hit = Utils.pointRectangleCollisionDetection(mousePoint, rect);
                over.push(hit);
            }
            // let text = document.querySelector(`#rect${i}`);
            // text.innerText = card;

            if (card === VARS.activeCard && !card.dragPile) {
                let x = mousePoint.x - xyDiff.x;
                let y = mousePoint.y - xyDiff.y;
                card.setPosition({ x, y })
                let card2 = i === 0 ? VARS.allVisualAssets[1] : VARS.allVisualAssets[0] ;
                let obj = Utils.dataRErectangleRectangleCollisionDetection(card, card2)
                console.log(obj)
                for (let key in obj) {
                    document.querySelector(`#${key}`).innerText = !!obj[key];
                    if (!!obj[key]) {
                        document.querySelector(`#${key}`).classList.add('green');
                    } else {
                        document.querySelector(`#${key}`).classList.remove('green');
                    }
                }
                
                
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