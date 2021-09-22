

(function(){
    var canvas = document.getElementById('tutorial');
    var ctx = canvas.getContext('2d');

    var img = new Image();
    const suits = ["hearts", "clubs", "spades", "diamonds"];
    const ranks = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"]
    img.src = 'bmps/sample-card-1.png';
    img.value = 1;
    const cards = []

    suits.forEach( (suit, i) => {
        ranks.forEach( (rank, j) => {
            let img = new Image();
            // img.src = `bmps/card_bmps/${rank}_${suit}.png`;
            img.src = `bmps/card_bmps/card_back.png`;
            cards.push({graphic: img, cardFront:`bmps/card_bmps/${rank}_${suit}.png`, cardBack: `bmps/card_bmps/card_back.png`, x: j * 50, y:  i * 100, value: 1, z: 1})
        })
    })
    


    let mousePoint = {}, drag = false, xDiff, yDiff, activeCard, over = [], hit;
    canvas.addEventListener('mousemove', e => {
       mousePoint = {x: e.clientX, y: e.clientY}

    })

    canvas.addEventListener('mousedown', e => {

        cards.forEach( (card, i) => {
            const { graphic, cardFront, x, y, value, z } = card;
            let rect = {x, y, width: 100, height: 150};
            hit = pointRectangleCollisionDetection(mousePoint, rect);
            if (hit) {
                drag = true;
                activeCard = i;
                xDiff = mousePoint.x - cards[i].x;
                yDiff = mousePoint.y - cards[i].y;
                graphic.src = cardFront;
               
            } 
        })
        if (activeCard !== undefined) {
            
            let card = cards.splice(activeCard, 1)[0];
            cards.push(card)
            activeCard = cards.length - 1;
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
        over = []
        cards.forEach( (card, index) => {
            const {graphic, x, y, value, z} = card;
 
            ctx.drawImage(graphic, x, y);

            let rect = {x, y, width: 100, height: 150};
            let hit = pointRectangleCollisionDetection(mousePoint, rect);
            over.push(hit)
  
            if (drag) {
                cards[activeCard].x = mousePoint.x - xDiff;
                cards[activeCard].y = mousePoint.y - yDiff;
            } 
            
        })
        cursor(over.includes(true))
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