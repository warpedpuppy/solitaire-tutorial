import Card from './Card.js';
import VARS from '../utils/Vars.js';
const Deck = {
    build: function () {
        for (let i = 0; i < 4; i ++) {
            for (let j = 0; j < 13; j++) {
                let card = Card();
                card.build(j, i);
                card.reveal(true)
                VARS.deck.push(card);
            }
        }
    },
    layOutInGrid () {
        let cardCounter = 0;
        for (let i = 0; i < 4; i ++) {
            for (let j = 0; j < 13; j ++) {
                let card = VARS.deck[cardCounter]
                card.setPosition({x: j * 50, y: i * 160})
                card.addToGameBoard(VARS.gameBoard);
                
                cardCounter++;
            }
        }
    }

}
export default Deck;