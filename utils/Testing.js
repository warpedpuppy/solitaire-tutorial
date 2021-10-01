const Testing = {
    printCardsArray: function (arr) {
        arr.forEach( card => {
            console.log(card.rank, card.suit)
        })
    }

}
export default Testing;