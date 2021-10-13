import Card from './Card.js';
import VARS from '../utils/Vars.js';
const Deck = {
    build: function () {
        let { allVisualAssets } = VARS;
        const { suits, ranks } = VARS.build;
        let value = 1;
        suits.forEach( (suit, i) => {
            ranks.forEach( (rank, j) => {
                let card = Card().build(rank, suit, value, j * 50, i * 100);
                allVisualAssets.push(card);
                value ++;
            })
        })
        // VARS.allVisualAssets = this.shuffle(VARS.allVisualAssets)
    },
    shuffle: function(arr) {
        let currentIndex = arr.length,  randomIndex;
        while (currentIndex != 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          // ec6 destructuring allows us define two variables at once!
          [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
        }
        return arr;
    }
}
export default Deck;