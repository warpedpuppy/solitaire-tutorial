import VARS from '../utils/Vars.js';
import Utils from '../utils/Utils.js';
import FlipPile from '../visualAssets/FlipPile.js';
import DragContainer from '../visualAssets/DragContainer.js';
const MoveCard = {
    moveCardListener: function(activeCard) {

        let possibleDestinationCards = [...VARS.slots, ...Object.keys(VARS.piles).map(item => Utils.returnLastArrayItem(VARS.piles[item]))];

        let target = possibleDestinationCards.find(card => {

            if (Utils.rectangleRectangleCollisionDetection(card, activeCard)) {

                let alternatingSuitAndOneLower = (card.color !== activeCard.color && card.rank === (activeCard.rank + 1));
                let slotHit = card.rank === activeCard.rank && card.suit === activeCard.suit && card.slot && DragContainer.length() === 1;

                if (slotHit || alternatingSuitAndOneLower || card.marker) {
                    return true;
                }
            }

        })

        return target ? { hit: true, target } : { hit: false };


    },
    moveCard: function(target, activeCard) {

        let { x, y, _index: pileKey, slot, marker } = target;
        let { _index, flipPile } = activeCard;
        let markerAdjust = marker ? 0 : 1;

        let tempArray = (!flipPile) ? VARS.piles[_index] : FlipPile.arr;

        DragContainer.arr.forEach((card, i) => {

            tempArray.splice(tempArray.indexOf(card), 1);
            let yPos = y;

            if (!slot) {
                VARS.piles[pileKey].push(card);
                card.setIndex(+pileKey);
                yPos = y + (VARS.spacing.buffer_larger * (i + markerAdjust));
            } else {
                target.increaseSlotRank();
                card.setClickability(false);
            }

            card.setPosition({ x, y: yPos });
        })

        this.revealNextCard(tempArray)
    },
    revealNextCard: function(arr) {
        if (arr.length) {
            let newTopCard = Utils.returnLastArrayItem(arr);

            if (!newTopCard.marker) {
                newTopCard.reveal(true);
                newTopCard.setClickability(true);
            }
        }
    }
}
export default MoveCard;