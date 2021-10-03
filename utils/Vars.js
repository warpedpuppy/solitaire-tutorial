
const VARS = {
    allVisualAssets: [],
    canvas: document.querySelector('canvas'),
    ctx: undefined,
    init: function () {
        this.ctx = this.canvas.getContext('2d');
    }
}
export default VARS;