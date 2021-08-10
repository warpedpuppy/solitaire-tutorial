
import VARS from './utils/Vars.js';
import Solitaire from './Solitaire.js';

(function(){

    const app = new PIXI.Application({
        width: VARS.build.canvasWidth, height: VARS.build.canvasWidth, transparent: true, resolution:  1,
    });

    document.getElementById("home-canvas").appendChild(app.view);

    app.stage.addChild(VARS.gameBoard)
    
    Solitaire.build();

})()