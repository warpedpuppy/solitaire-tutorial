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

        // PILES
        let { adjustedCardCounter } = this.createCardPiles();
    //    this.createDrawPileResetButton();

        //  // DRAW PILE
         let arr = VARS.deck.slice(adjustedCardCounter, 52)
         this.createDrawPile( arr, true);

        // // SLOTS 
        // this.createSlots();
        // VARS.gameBoard.addChild(VARS.slotCont)

        //  VARS.gameBoard.x = (VARS.build.canvasWidth - VARS.gameBoard.width) / 2;
        //  VARS.gameBoard.y = 20;
    },
    createCardPiles() {

        for (let i = 0; i < this.loopingQ; i++) {

            let markerImage = new Image();
            markerImage.src = '/bmps/marker.png';

            let marker = {
                img: markerImage,
                marker: true,
                index: i,
                x: this.startX + (VARS.build.cardWidth + VARS.spacing.buffer) * i,
                y: this.startY,

            }
            VARS.nonCardAssets.push(marker)
            VARS.piles[i] = [marker]
        }

        let card, verticalSpacer = 0;

        const { deck } = VARS;

        while (this.loopingQ > 0) {
            for (let j = 0; j < this.loopingQ; j++) {

                card = deck[this.cardCounter];
                
                
                card.x = this.startX + (VARS.build.cardWidth + VARS.spacing.buffer) * j;
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
    createDrawPileResetButton(startY) {
        VARS.resetDrawPileButton = new PIXI.Sprite(PIXI.Texture.from('/bmps/marker.png'));
        VARS.resetDrawPileButton.x = 0;
        VARS.resetDrawPileButton.y = this.startY;
        VARS.resetDrawPileButton.visible = false;
        VARS.gameBoard.addChild(VARS.resetDrawPileButton);
    },
    createDrawPile(arr, init) {

        let yVal = VARS.build.cardHeight + VARS.spacing.buffer_larger;

        arr.forEach(card => {

            // card.setDrawPile(true);
            card.x =0;
            card.y =yVal;
            card.img.src = card.cardBack;
            // card.addToGameBoard()
            yVal += 0.25;
            if (init) VARS.drawPile.push(card);

        })

    },
    createSlots() {
        let width = 0;
        for (let i = 0; i < 4; i++) {
            let slot = new PIXI.Container();
            let graphic = new PIXI.Sprite(PIXI.Texture.from(`/bmps/slot${VARS.build.suits[i].charAt(0).toUpperCase()}${VARS.build.suits[i].substring(1, VARS.build.suits[i].length)}s.png`)); 
            slot.suit = VARS.build.suits[i];
            slot.addChild(graphic)
            slot.rank = 1;
            slot.x = (VARS.build.cardWidth + VARS.spacing.slot_spacer) * i;
            width += VARS.build.cardWidth + VARS.spacing.slot_spacer ;
            VARS.slots.push(slot);
            VARS.slotCont.addChild(slot);
        }
        width = ( VARS.build.cardWidth + VARS.spacing.slot_spacer) * 3;
        VARS.slotCont.x = (( VARS.gameBoard.width - width) / 2) - (VARS.build.cardWidth / 2);
        VARS.gameBoard.addChild(VARS.slotCont)
    }
}
export default Deal;
