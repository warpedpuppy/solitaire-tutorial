import VARS from '../utils/Vars.js';
import Utils from '../utils/Utils.js';

const MoveCard = {
    moveCardListener: function (activeCard) {

        let arr = [...VARS.slots, ...Object.keys(VARS.piles).map( item => VARS.piles[item][VARS.piles[item].length - 1])]
        for (let i = 0; i < arr.length; i++) {
            let item = arr[i];
             let alternatingSuitAndOneLower = (item.color !== activeCard.color && item.rank === (activeCard.rank + 1));

            if ( Utils.rectangleRectangleCollisionDetection(item, activeCard)) {

                if (item.rank === activeCard.rank && item.suit === activeCard.suit && item.slot && VARS.dragContainer.length === 1 ) {
                    return { hit: true, slot: item };
                } else if (alternatingSuitAndOneLower || item.marker) {
                    return { hit: true, topCard: item, key: item._index }
                }
            }
        }
        return { hit: false }
    },
    movePiles: function (topCard, key, activeCard) {
       
        let { x, y } = topCard.getPosition();
        let markerAdjust = topCard.marker ? 0 : 1 ;
        let { _index, flipPile } =  activeCard;

        let tempArray = (!flipPile) ? VARS.piles[_index] : VARS.flipPile ;

        VARS.dragContainer.forEach( (card, i) => {
            
            card.setPosition({x, y: y + (VARS.spacing.buffer_larger * ( i + markerAdjust) )});
            let indexOfCardInFormerPile = tempArray.indexOf(card);
            tempArray.splice(indexOfCardInFormerPile, 1);
            VARS.piles[key].push(card);
            card.setIndex(+key);
        })
        VARS.revealNextCard(tempArray)
          
    },
    addCardToSlot: function (actvieCard, slot) {

        let { flipPile, _index } = actvieCard;

        actvieCard.setClickability(false);
        actvieCard.setPosition({x: slot.x, y: slot.y})

        let tempArray = (!flipPile) ? VARS.piles[_index] : VARS.flipPile ;
        tempArray.splice(tempArray.indexOf(actvieCard), 1);
        slot.rank ++;
        VARS.revealNextCard(tempArray);
    }
}
export default MoveCard;