import VARS from '../utils/Vars.js';
import Utils from '../utils/Utils.js';

const MoveCard = {
    moveCardListener: function (activeCard) {

        let arr = [...VARS.slots, ...Object.keys(VARS.piles).map( item => VARS.piles[item][VARS.piles[item].length - 1])];

        let item = arr.find( card => {
           
            if ( Utils.rectangleRectangleCollisionDetection(card, activeCard)) {

                let alternatingSuitAndOneLower = (card.color !== activeCard.color && card.rank === (activeCard.rank + 1));
                let slotHit = card.rank === activeCard.rank && card.suit === activeCard.suit && card.slot && VARS.dragContainer.length === 1 ;

                if (slotHit ||  alternatingSuitAndOneLower || card.marker) {
                    return true;
                } 
            }

        })

        return item ? { hit: true, target: item } : { hit: false } ;


    },
    moveCard: function (target, activeCard) {

        let { x, y, _index: pileKey, slot, marker} = target;
        let { _index, flipPile } =  activeCard;
        let markerAdjust = marker ? 0 : 1 ;

        let tempArray = (!flipPile) ? VARS.piles[_index] : VARS.flipPile ;

        VARS.dragContainer.forEach( (card, i) => {

            tempArray.splice(tempArray.indexOf(card), 1);
            let yPos = y;

            if (!slot) {
                VARS.piles[pileKey].push(card);
                card.setIndex(+pileKey);
                yPos = y + (VARS.spacing.buffer_larger * ( i + markerAdjust) );
            } else {
                target.rank ++;
                card.setClickability(false);
            }

            card.setPosition({x, y: yPos});
        })

        VARS.revealNextCard(tempArray)
    }
}
export default MoveCard;