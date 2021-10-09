const Testing = {
    printCardsArray: function (arr) {
        console.log('%c begin print the array: ', 'padding:10px 3px 3px 3px; font-weight: bold; color: #FF0000; border-bottom: 2px solid black;');
        arr.forEach( card => {
            console.log(card.rank, card.suit)
        })
        console.log('%c end print the array: ', 'padding:3px 3px 10px 3px; font-weight: bold; color: #006400; border-top: 2px solid black;');
    }
}
export default Testing;