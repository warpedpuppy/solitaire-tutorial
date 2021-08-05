const Vars = {
    cardWidth: 100,
    cardHeight: 150,
    canvasWidth: 1000,
    canvasHeight: 800,
    suits: ["club", "diamond", "heart", "spade"],
    rank: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
    animate: true,
    globalObject: function(item) {
    
        let activeCardGlobalPoint = item.getGlobalPosition(new PIXI.Point(item.x, item.y))

        return {
            x: activeCardGlobalPoint.x,
            y:  activeCardGlobalPoint.y,
            width:  this.cardWidth,
            height:  this.cardHeight
        }
    }

}
export default Vars;