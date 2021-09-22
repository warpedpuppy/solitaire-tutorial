import Card from './Card.js';
import VARS from '../utils/Vars.js';
const Deck = {
    build: function () {
        const { deck } = VARS;
        const { suits, ranks } = VARS.build;
        let value = 1;

        suits.forEach( (suit, i) => {
            ranks.forEach( (rank, j) => {
                let card = Card();
                card.build(rank, suit, value, j * 50, i * 100);
                deck.push(card);
                value ++;
            })
        })
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