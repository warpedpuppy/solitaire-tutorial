import Deck from './Deck.js';
import VARS from '../utils/Vars.js';
const Deal = {
    loopingQ: 7, 
    cardCounter: 0,
    startX: 0,
    startY: 0,
    totalColumns: 7,
    start: function () {

        this.startX = VARS.build.cardWidth + VARS.spacing.buffer_larger;
        this.startY = VARS.build.cardHeight + VARS.spacing.buffer_larger;

        // Deck.shuffle();

        let gameBoardWidth = (VARS.build.cardWidth * 8)  + (VARS.spacing.buffer * 6 ) + VARS.spacing.buffer_larger;
        let xOffset = (document.getElementById('tutorial').width - gameBoardWidth) / 2;

        // PILES
        let { adjustedCardCounter } = this.createCardPiles(xOffset);
       this.createDrawPileResetButton(xOffset);

        // DRAW PILE
         let arr = VARS.deck.slice(adjustedCardCounter, 52)
         this.createDrawPile( arr, true, xOffset);

        // // SLOTS 
        this.createSlots();
      
    },
    createCardPiles(xOffset) {

      

        for (let i = 0; i < this.loopingQ; i++) {

            let markerImage = new Image();
            markerImage.src = '/bmps/marker.png';

            let marker = {
                img: markerImage,
                marker: true,
                index: i,
                x: xOffset + (this.startX + (VARS.build.cardWidth + VARS.spacing.buffer) * i),
                y: this.startY,

            }
            VARS.nonCardAssets.push(marker)
            VARS.piles[i] = [marker]
        }

        let card, verticalSpacer = 0;

        const { deck } = VARS;
        console.log(deck.length)
        while (this.loopingQ > 0) {
            for (let j = 0; j < this.loopingQ; j++) {

                card = deck[this.cardCounter];
                
                
                card.x = xOffset + (this.startX + (VARS.build.cardWidth + VARS.spacing.buffer) * j);
                card.y = this.startY + (VARS.spacing.buffer * verticalSpacer);
                // }
                // card.setPosition(cardPosition);
                
                // let index = (this.totalColumns - this.loopingQ) + j;//index is the key in the piles object
                // card.setIndex(index);
                // VARS.piles[index].push(card);

                // card.setDrawPile(false);
                
                if (j === 0) {
                    card.img.src = card.cardFront;
                } else {
                    card.img.src = card.cardBack;
                }

                this.cardCounter++;
                // card.addToGameBoard();
            }

            verticalSpacer++;
            this.loopingQ--;

            this.startX += VARS.build.cardWidth + VARS.spacing.buffer;
        }
        return { adjustedCardCounter: this.cardCounter, adjustedStartY: this.startY }
    },
    createDrawPileResetButton(startY, xOffset) {
        let img = new Image();
        img.src = '/bmps/marker.png';
        VARS.resetDrawPileButton = {
            img,
            x: xOffset,
            y : this.startY,
            visible: false,
            resetDraw: true,
        }
        
        VARS.nonCardAssets.push(VARS.resetDrawPileButton)
    },
    createDrawPile(arr, init, xOffset) {

        let yVal = VARS.build.cardHeight + VARS.spacing.buffer_larger;

        arr.forEach(card => {

            // card.setDrawPile(true);
            card.x = xOffset;
            card.y = yVal;
            card.img.src = card.cardBack;
            // card.addToGameBoard()
            yVal += 0.25;
            if (init) VARS.drawPile.push(card);

        })

    },
    createSlots() {
        let width = 0;
        let allFourSlotWidths = (VARS.build.cardWidth + VARS.spacing.slot_spacer) * 4;
        let xOffset = (document.getElementById('tutorial').width - allFourSlotWidths) / 2;
        for (let i = 0; i < 4; i++) {
            let img = new Image();
            img.src = `/bmps/slot${VARS.build.suits[i].charAt(0).toUpperCase()}${VARS.build.suits[i].substring(1, VARS.build.suits[i].length)}.png`; 

            let slot = {
                img,
                suit: VARS.build.suits[i],
                rank: 1,
                x: xOffset + ((VARS.build.cardWidth + VARS.spacing.slot_spacer) * i),
                y:0
            }

            
            width += VARS.build.cardWidth + VARS.spacing.slot_spacer ;
            VARS.slots.push(slot);
            VARS.nonCardAssets.push(slot);
        }
        width = ( VARS.build.cardWidth + VARS.spacing.slot_spacer) * 3;
    }
}
export default Deal;
