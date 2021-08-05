
import VARS from './utils/Vars.js';
import Solitaire from './Solitaire.js';
// import Tweening from './utils/Tweening.class.js';
// import Drag from './card-movements/Drag.class.js';
(function(){


    const app = new PIXI.Application({
        width: VARS.canvasWidth, height: VARS.canvasWidth, transparent: true, resolution:  1,
    });
    document.getElementById("home-canvas").appendChild(app.view);
    app.ticker.add(ticker);
    Solitaire.build(app);
    app.stage.addChild(Solitaire.gameBoard);


    function ticker (delta) {

        // Tweening.animate();
        // Drag.animate();
    }

})()