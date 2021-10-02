import Deck from './Deck.js';
import Marker from '../visualAssets/Marker.js';
import Slot from '../visualAssets/Slot.js';
import VARS from '../utils/Vars.js';
import DrawPile from '../visualAssets/DrawPile.js';
const Deal = {
    loopingQ: 7, 
    cardCounter: 0,
    startX: 0,
    startY: 0,
    totalColumns: 7,
    xOffset: 0,
    start: function () {
        
        VARS.deck = [...VARS.allVisualAssets]


        this.startX = VARS.build.cardWidth + VARS.spacing.buffer_larger;
        this.startY = VARS.build.cardHeight + VARS.spacing.buffer_larger;

        let gameBoardWidth = (VARS.build.cardWidth * 8)  + (VARS.spacing.buffer * 6 ) + VARS.spacing.buffer_larger;
        this.xOffset = (VARS.canvas.width - gameBoardWidth) / 2;
        let xOffset = this.xOffset;

        // PILES
        let { adjustedCardCounter } = this.createCardPiles(xOffset);
        DrawPile.createResetButton(xOffset, this.startY);

        // DRAW PILE
        let arr = VARS.deck.slice(adjustedCardCounter, 52)
        DrawPile.create( arr, true, xOffset);

        // SLOTS 
        this.createSlots();
        
      
    },
    createCardPiles(xOffset) {

        const { deck } = VARS;

        for (let i = 0; i < this.loopingQ; i++) { 
           let marker = Marker();
            marker.build(xOffset + (this.startX + (VARS.build.cardWidth + VARS.spacing.buffer) * i),this.startY, i);
            VARS.allVisualAssets.unshift(marker);
            VARS.piles[i] = [marker];
        }

        let card, verticalSpacer = 0;

        

        while (this.loopingQ > 0) {
            for (let j = 0; j < this.loopingQ; j++) {

                card = deck[this.cardCounter];
                
                
                let x = xOffset + (this.startX + (VARS.build.cardWidth + VARS.spacing.buffer) * j);
                let y = this.startY + (VARS.spacing.buffer * verticalSpacer);
                card.setPosition({x, y})
               
                
                let index = (this.totalColumns - this.loopingQ) + j;
 
                card.setIndex(index);
                VARS.piles[index].push(card);

                card.setDrawPile(false);
                
                if (j === 0) {
                    card.setClickability(true)
                    card.reveal(true);
                } else {
                    card.reveal(false);
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
    createSlots() {
        let width = 0;
        let allFourSlotWidths = (VARS.build.cardWidth + VARS.spacing.slot_spacer) * 4;
        let xOffset = (VARS.canvas.width - allFourSlotWidths) / 2;
        for (let i = 0; i < 4; i++) {
            let imageString = `/bmps/slot${VARS.build.suits[i].charAt(0).toUpperCase()}${VARS.build.suits[i].substring(1, VARS.build.suits[i].length)}.png`; 
            let xVal = xOffset + ((VARS.build.cardWidth + VARS.spacing.slot_spacer) * i);
            let yVal = 10;
            let slot = Slot();

            slot.build(xVal, yVal, imageString, VARS.build.suits[i])
           
            VARS.slots.push(slot);
            VARS.allVisualAssets.push(slot);
        }
        width = ( VARS.build.cardWidth + VARS.spacing.slot_spacer) * 3;
    }
}
export default Deal;
