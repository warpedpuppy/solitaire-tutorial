import VARS from '../utils/Vars.js';
import Utils from '../utils/Utils.js';
// import Testing from '../utils/Testing.js';
const PileToPile = {
    movePileListener: function (activeCard) {

        let activeCardObj = VARS.deck[activeCard];


        for (let key in VARS.piles) {

            let arr = VARS.piles[key], topCard = arr[arr.length - 1];

            if (!activeCardObj || !topCard || activeCardObj._index === +key) continue;


    

            let { color, rank } = activeCardObj;
            
            let alternatingSuitAndOneLower = (topCard.color !== color && topCard.rank === (rank + 1));

            if (
                (alternatingSuitAndOneLower || topCard.marker) &&
                Utils.rectangleRectangleCollisionDetection(topCard, activeCardObj)
            ) {
                return { hit: true, topCard, key }
            }

        }
        return { hit: false }
    },
    movePiles: function (topCard, key, activeCard) {
       
            let { x, y } = topCard.getPosition();
        
            VARS.deck[activeCard].setPosition({x, y: y + VARS.spacing.buffer_larger})
            
            let { _index, flipPile } =  VARS.deck[activeCard];

            if (!flipPile) {
                VARS.piles[_index].splice(VARS.piles[_index].indexOf(VARS.deck[activeCard]), 1)
                VARS.revealNextCard(VARS.piles[index])
            } else {
                VARS.deck[activeCard].setFlipPile(false);
                VARS.flipPile.splice(VARS.flipPile.indexOf(VARS.deck[activeCard]), 1);
                // VARS.revealNextCard(VARS.flipPile)
            }

            VARS.piles[key].push(VARS.deck[activeCard]);
            VARS.deck[activeCard].setIndex(+key); 
            // Testing.sumOfListeners(VARS.deck)

    }
}
export default PileToPile;