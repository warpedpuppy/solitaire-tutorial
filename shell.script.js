
import VARS from './utils/Vars.js';
import Deal from './cards/Deal.js';
import DrawPileAction from './action/DrawPileAction.js';
import Deck from './cards/Deck.js';
import PileToPile from './action/PileToPile.js';
import PileToSlot from './action/PileToSlot.js';
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
        
        allVisualAssets.forEach( (card, i) => {

            if (!VARS.deck.includes(card)) return;

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

                    VARS.dragContainer = [];

                    if (card._index !== undefined) {
                        let pile = VARS.piles[card._index];
                        let indexInPile = pile.indexOf(card);

                        for (let i = indexInPile; i < pile.length; i++) {
                            VARS.dragContainer.push(pile[i]);       
                        }

                    } else {
                        VARS.dragContainer.push(VARS.allVisualAssets[activeCard])
                    }
                } 
            }
        })

        //move to top -- don't want to do this in the loop 
        if (VARS.dragContainer.length) {

            VARS.dragContainer.forEach((card, i) => {

                card.drag(true);
                card.storePosition();
                let moveIndex = VARS.allVisualAssets.indexOf(card);
                let cardToShiftUp = VARS.allVisualAssets.splice(moveIndex, 1)[0];
                VARS.allVisualAssets.push(cardToShiftUp);
                cardToShiftUp.yOffset = i * VARS.spacing.buffer_larger;
                i++;
            })
            activeCard = VARS.allVisualAssets.length - VARS.dragContainer.length;
        }
    })

    canvas.addEventListener('mouseup', e => {
        const { flipPileReset, resetDrawPileButton, allVisualAssets } = VARS;
       

        if (activeCard !== undefined) {

            if (allVisualAssets[activeCard].drawPile) {
                DrawPileAction.drawPileClickHandler();
            } else {

                let slotHitObject = PileToSlot.slotHitListener(activeCard);
                let pileHitObject = PileToPile.movePileListener(activeCard);
                if (VARS.dragContainer.length === 1 && slotHitObject.hit) {
                    PileToSlot.addCardToSlot(activeCard, slotHitObject.slot)
                } else if (pileHitObject.hit) {
                    PileToPile.movePiles(pileHitObject.topCard, pileHitObject.key, activeCard);
                } else {
                    VARS.dragContainer.forEach( card => {
                        card.resetPositionToStore()
                    })

               
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
        VARS.dragContainer.forEach (card => {
            card.yOffset = 0;
        });
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

            if (drag && VARS.dragContainer.includes(card)) {
                let x = mousePoint.x - xDiff;
                let y = (mousePoint.y - yDiff) + card.yOffset;
                card.setPosition({x,y})
            }
            
        })

        cursor(over.includes(true));
        // if (drag && !allVisualAssets[activeCard].drawPile) {
        //     VARS.dragContainer.forEach( (card, i) => {
        //         let x = mousePoint.x - xDiff;
        //         let y = (mousePoint.y - yDiff) + card.yOffset;
        //         card.setPosition({x,y})
        //     })
        // } 

        

        requestAnimationFrame(draw);
    }
    
     draw();

    

})()