
import VARS from './utils/Vars.js';
import Deal from './cards/Deal.js';
import DrawPileAction from './action/DrawPileAction.js';
import Deck from './cards/Deck.js';
import PileToPile from './action/PileToPile.js';
import Utils from './utils/Utils.js';
(function(){

    const { deck, canvas, allVisualAssets, build, flipPileReset, resetDrawPileButton } = VARS,
          { cardWidth, cardHeight } = build,
          { pointRectangleCollisionDetection } = Utils,
          ctx = canvas.getContext('2d');

    let mousePoint = {}, drag = false, xDiff, yDiff, activeCard, hit, over = [];

    Deck.build();
    Deal.start();

    canvas.addEventListener('mousemove', e => mousePoint = {x: e.pageX, y: e.pageY} )

    canvas.addEventListener('mousedown', e => {

        // determine active card
        deck.forEach( (card, i) => {
            const { x, y, clickable } = card;
            
            if ( clickable ) {
                let rect = {x, y, width: cardWidth, height: cardHeight};
                hit = pointRectangleCollisionDetection(mousePoint, rect);
                if (hit) {
                    drag = true;
                    activeCard = i;
                    card.storePosition();
                    xDiff = mousePoint.x - card.x;
                    yDiff = mousePoint.y - card.y;
                } 
            }
        })
        //move to top -- don't want to do this in the loop 
        // also may be good moment to say 'beware of falsiness'
        if (activeCard !== undefined) {
            let card = deck.splice(activeCard, 1)[0];
            deck.push(card)
            activeCard = deck.length - 1;
        }
    })

    canvas.addEventListener('mouseup', e => {
        const { flipPileReset, resetDrawPileButton, deck } = VARS;
       

        if (activeCard !== undefined) {
            if (deck[activeCard].drawPile) {
                DrawPileAction.drawPileClickHandler();
            } else {


                let pileHitObject = PileToPile.movePileListener(activeCard);
                if (pileHitObject.hit) {
                    PileToPile.movePiles(pileHitObject.topCard, pileHitObject.key, activeCard);
                } else {
                    deck[activeCard].resetPositionToStore();
               
                }
            }
        }

        if (flipPileReset) {
            let rect = {x: resetDrawPileButton.x, y: resetDrawPileButton.y, width: cardWidth, height: cardHeight};
            hit = pointRectangleCollisionDetection(mousePoint, rect);
            if (hit) {
                DrawPileAction.resetDrawPileHandler();
                resetDrawPileButton.clickable = false;
            } 
        } 

        drag = false;
        activeCard = undefined;
        xDiff = undefined;
        yDiff = undefined;
    })

    function cursor(boolean) {
        if (boolean) {
            canvas.style.cursor = "pointer";
        } else {
            canvas.style.cursor = "default";
        }
        
    }
     
    function draw () {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        over = [];

        allVisualAssets.forEach( card => {
            const { img, x, y, clickable } = card;
           
    
            ctx.drawImage(img, x, y);

            if (clickable) {
                let rect = {x, y, width: 100, height: 150};
                let hit = pointRectangleCollisionDetection(mousePoint, rect);
                over.push(hit);
            }
            
        })

        cursor(over.includes(true));

        if (drag && !deck[activeCard].drawPile) {
            deck[activeCard].x = mousePoint.x - xDiff;
            deck[activeCard].y = mousePoint.y - yDiff;
        } 

        

        requestAnimationFrame(draw);
    }
    
     draw();

    

})()