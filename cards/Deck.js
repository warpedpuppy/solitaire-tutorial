import Card from './Card.js';

const Deck = {
    deck: [],
    build: function () {
        for (let i = 0; i < 4; i ++) {
            for (let j = 0; j < 13; j++) {
                let card = Card();
                card.build(j, i);
                card.this = this;
                card.reveal(true)
                this.deck.push(card.cont);
            }
        }
        return this.deck;
    },
    layOutInGrid (gameBoard) {
        let cardCounter = 0;
        for (let i = 0; i < 4; i ++) {
            for (let j = 0; j < 13; j ++) {
                let card = this.deck[cardCounter]
                card.x = j * 50;
                card.y = i * 160;
                gameBoard.addChild(card)
                cardCounter++;
            }
        }
    }

}
export default Deck;