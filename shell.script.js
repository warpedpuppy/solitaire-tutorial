
import VARS from './utils/Vars.js';
import Deal from './cards/Deal.js';
import Card from './cards/Card.js';
import Deck from './cards/Deck.js';
(function(){
    var canvas = document.getElementById('tutorial');
    var ctx = canvas.getContext('2d');

    Deck.build();
    const { deck } = VARS;
    const { cardWidth, cardHeight } = VARS.build;

    Deal.start();



    let mousePoint = {}, drag = false, xDiff, yDiff, activeCard, over = [], hit;
    canvas.addEventListener('mousemove', e => {
       mousePoint = {x: e.clientX, y: e.clientY}

    })

    canvas.addEventListener('mousedown', e => {

        // determine active card
        deck.forEach( (card, i) => {
            const { x, y } = card;
            let rect = {x, y, width: cardWidth, height: cardHeight};
            hit = pointRectangleCollisionDetection(mousePoint, rect);
            if (hit) {
                drag = true;
                activeCard = i;
                xDiff = mousePoint.x - deck[i].x;
                yDiff = mousePoint.y - deck[i].y;
               
            } 
        })
        //move to top
        if (activeCard !== undefined) {
            let card = deck.splice(activeCard, 1)[0];
            // deck.push(card)
            deck[deck.length] = card; 
            activeCard = deck.length - 1;
        }
    })

    canvas.addEventListener('mouseup', e => {

        drag = false;
        activeCard = undefined;
        xDiff = undefined;
        yDiff = undefined;
    })

    function cursor(boolean) {
        if (boolean) {
            document.getElementById("tutorial").style.cursor = "pointer";
        } else {
            document.getElementById("tutorial").style.cursor = "default";
        }
        
    }
     
    function draw () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        over = [];

        VARS.nonCardAssets.forEach( item => {
            const { img, x, y } = item;
            ctx.drawImage(img, x, y);
        })

        deck.forEach( card => {
            const { img, x, y } = card;
            ctx.drawImage(img, x, y);
            let rect = {x, y, width: 100, height: 150};
            let hit = pointRectangleCollisionDetection(mousePoint, rect);
            over.push(hit);
        })

        if (drag) {
            deck[activeCard].x = mousePoint.x - xDiff;
            deck[activeCard].y = mousePoint.y - yDiff;
        } 

        cursor(over.includes(true));

        requestAnimationFrame(draw);
    }
    
     draw();

    function pointRectangleCollisionDetection (point, rect) {
        if (point.x > rect.x && point.x < rect.x + rect.width && point.y > rect.y && point.y < rect.y + rect.height) {
          return true
        }
        return false
    }

})()