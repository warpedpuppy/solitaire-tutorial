import VARS from '../utils/Vars.js';
import Utils from '../utils/Utils.js';
import DragContainer from '../visualAssets/DragContainer.js';
const Animate = {
    counter: 0,
    start: function() {

        const { mousePoint, xyDiff, ctx, canvas } = VARS;
        document.querySelector('#mousePoint').innerText = `mouse point: x: ${mousePoint.x}, y: ${mousePoint.y}`;


        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let over = [];

        VARS.allVisualAssets.forEach(card => {
            const { img, x, y, clickable } = card;

            
            ctx.drawImage(img, x, y);
            document.querySelector('#cardData').innerText = `card x: ${x}, card y:${y}, card width: 100, card height: 150`;
            
            let rect = { x, y, width: 100, height: 150 };
            let xText = document.querySelector('#xStart');
            if (mousePoint.x > x) {
                xText.innerText = `mouse point is to the right of the beggining of the card!`;
                xText.classList.add('green')
            } else {
                xText.innerText = `mouse point is to the left of the beggining of the card!`;
                xText.classList.remove('green')
            }

            let xEnd = document.querySelector('#xEnd');
            if (mousePoint.x < x + rect.width) {
                xEnd.innerText = `mouse point is to the left of the end of the card!`;
                xEnd.classList.add('green')
            } else {
                xEnd.innerText = `mouse point is to the right of the end of the card!`;
                xEnd.classList.remove('green')
            }

            let yText = document.querySelector('#yStart');
            if (mousePoint.y > y) {
                yText.innerText = `mouse point is below the beggining of the card!`;
                yText.classList.add('green')
            } else {
                yText.innerText = `mouse point is above the beggining of the card!`;
                yText.classList.remove('green')
            }

            let yEnd = document.querySelector('#yEnd');
            if (mousePoint.y < y + rect.height) {
                yEnd.innerText = `mouse point is above the end of the card!`;
                yEnd.classList.add('green')
            } else {
                yEnd.innerText = `mouse point is below the end of the card!`;
                yEnd.classList.remove('green')
            }

                let hit = Utils.pointRectangleCollisionDetection(mousePoint, rect);
                over.push(hit);
           

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