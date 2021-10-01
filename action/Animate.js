import VARS from '../utils/Vars.js';
const Animate = {
    counter: 0,
    start: function() {

        const { ctx, canvas } = VARS;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        VARS.allVisualAssets.forEach(card => {
            const { img, x, y } = card;

            ctx.drawImage(img, x, y);
        })

        requestAnimationFrame(() => this.start());
    }
}
export default Animate;