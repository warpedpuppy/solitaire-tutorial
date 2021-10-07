import VARS from '../utils/Vars.js';
import Utils from '../utils/Utils.js';
const DragContainer = {
    arr: [],
    add: function (card) {
        this.arr.push(card);
    },
    length: function () {
        return this.arr.length;
    },
    includes: function (card) {
        return this.arr.includes(card);
    },
    returnCards: function () {
        this.arr.forEach( card => {
            card.resetPositionToStore()
        })
    },
    reset: function () {
        this.arr.forEach (card => {
            card.yOffset = 0;
        });
        this.arr = []
    },
    moveCardsToTop: function () {
       const { arr } = this;
       if ( arr.length) {
            arr.forEach((card, i) => {
               card.storePosition();
               let cardToShiftUp = Utils.moveToTopOfVisualAssets(card, VARS.allVisualAssets); 
               cardToShiftUp.yOffset = i * VARS.spacing.buffer_larger;
               i++;
           })
       }
    }
}
export default DragContainer;