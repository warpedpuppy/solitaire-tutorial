import VARS from '../utils/Vars.js';
import Utils from '../utils/Utils.js';

const PileToPile = {
    movePileListener: function (activeCard) {

        for (let key in VARS.piles) {

            let arr = VARS.piles[key], topCard = arr[arr.length - 1];

            if (!activeCard || !topCard || activeCard._index === +key) continue;

            let { color, rank } = activeCard;
            let alternatingSuitAndOneLower = (topCard.color !== color && topCard.rank === (rank + 1));
            if (
                (alternatingSuitAndOneLower || topCard.marker) &&
                Utils.rectangleRectangleCollisionDetection(topCard, activeCard)
            ) {
                return { hit: true, topCard, key }
            }

        }
        return { hit: false }
    },
    movePiles: function (topCard, key, activeCard) {
       
            let { x, y } = topCard.getPosition();
            let buffer = topCard.marker ? 0 : VARS.spacing.buffer_larger ;
            let { _index, flipPile } =  activeCard;

            if (!flipPile) {
                VARS.dragContainer.forEach( (card, i) => {
                    card.setPosition({x, y: y + (buffer * (i+1) )});
                    let formerPile = VARS.piles[_index];
                    let indexOfCardInFormerPile = formerPile.indexOf(card);
                    formerPile.splice(indexOfCardInFormerPile, 1);
                    VARS.piles[key].push(card);
                    card.setIndex(+key);
                })
                VARS.revealNextCard(VARS.piles[_index])
            } else {
                activeCard.setPosition({x, y: y + buffer})
                activeCard.setFlipPile(false);
                VARS.flipPile.splice(VARS.flipPile.indexOf(activeCard), 1);
                VARS.revealNextCard(VARS.flipPile)
                VARS.piles[key].push(activeCard);
                activeCard.setIndex(+key);
            }
    }
}
export default PileToPile;