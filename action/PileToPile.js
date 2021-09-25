import VARS from '../utils/Vars.js';
import Utils from '../utils/Utils.js';
// import Testing from '../utils/Testing.js';
const PileToPile = {
    movePileListener: function (activeCard) {

        let activeCardObj = VARS.allVisualAssets[activeCard];


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

            let buffer = topCard.marker ? 0 : VARS.spacing.buffer_larger ;
        
            
            
            let { _index, flipPile } =  VARS.allVisualAssets[activeCard];

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
                VARS.allVisualAssets[activeCard].setPosition({x, y: y + buffer})
                VARS.allVisualAssets[activeCard].setFlipPile(false);
                VARS.flipPile.splice(VARS.flipPile.indexOf(VARS.allVisualAssets[activeCard]), 1);
                VARS.revealNextCard(VARS.flipPile)
                VARS.piles[key].push(VARS.allVisualAssets[activeCard]);
                VARS.allVisualAssets[activeCard].setIndex(+key);
            }



    }
}
export default PileToPile;