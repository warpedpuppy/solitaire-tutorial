import VARS from '../utils/Vars.js';
import Utils from '../utils/Utils.js';
// import Testing from '../utils/Testing.js';
const PileToPile = {
    movePileListener: function (activeCard) {

        let activeCardObj = VARS.deck[activeCard];

        //  COLLISION DETECTION TESTING
        //  Testing.collisionDetectionTest(activeCardObj, false)
        console.log(VARS.piles)
        for (let key in VARS.piles) {

            let arr = VARS.piles[key], topCard = arr[arr.length - 1];
            
            if (!VARS.activeCard || !topCard || VARS.activeCard._index === +key) continue;

            let topCardObj = topCard;
            
            // COLLISION DETECTION TESTING
            // Testing.collisionDetectionTest(topCardObj, false)

            let { color, rank } = activeCardObj;
            console.log(topCard)

            let alternatingSuitAndOneLower = (topCard.color !== color && topCard.rank === (rank + 1));

            if (
                (alternatingSuitAndOneLower || topCard.marker) &&
                Utils.rectangleRectangleCollisionDetection(topCardObj, activeCardObj)
            ) {
                return { hit: true, topCard, key }
            }

        }
        return { hit: false }
    },
    movePiles: function (topCard, key) {
       
            let { x, y } = topCard.getPosition();
            VARS.activeCard.x = x;
            VARS.activeCard.y = y + VARS.spacing.buffer_larger;
            
            let { index, drawPile, classRef } = VARS.activeCard.classRef.getData();

            if (!drawPile) {
                VARS.piles[index].splice(VARS.piles[index].indexOf(classRef), 1)
                VARS.revealNextCard(VARS.piles[index])
            } else {
                classRef.setDrawPile(false);
                VARS.flipPile.splice(VARS.flipPile.indexOf(classRef), 1);
                VARS.revealNextCard(VARS.flipPile)
            }

            VARS.piles[key].push(classRef);
            classRef.setIndex(+key); 
            // Testing.sumOfListeners(VARS.deck)

    }
}
export default PileToPile;