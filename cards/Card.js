import Vars from '../utils/Vars.js';
const Card =  function() {
    return {
    cont: new PIXI.Graphics(),
    build: function (rank, suitIndex) {
        this.rank = rank + 1;
        this.suit = Vars.suits[suitIndex];
        this.color = (this.suit === 'hearts' || this.suit === 'diamonds') ? "red" : "black" ;
        this.buildCard(rank, suitIndex);
        this.reveal(false);
        this.cont.pivot.x = 0;
        this.cont.pivot.y = 0;
        return this.cont;
    },
    reveal: function (boolean) {
        this.cover.visible = !boolean;
    },
    buildCard: function (rankProp, suitIndexProp) {
        const cardBack = new PIXI.Graphics();
        cardBack.beginFill(0x000000);
        cardBack.drawRoundedRect(0, 0, Vars.cardWidth, Vars.cardHeight,3);
        cardBack.endFill();
        this.cont.addChild(cardBack)

        const graphics = new PIXI.Graphics();
        graphics.beginFill(0xFFFFFF);
        graphics.drawRoundedRect(1, 1, Vars.cardWidth - 2, Vars.cardHeight - 2, 3);
        graphics.endFill();
        this.cont.addChild(graphics)

        let textColor = this.color === "black" ? 0x000000 : 0xFF1010 ;

        let rank = new PIXI.Text(Vars.rank[rankProp], {
            fontFamily : 'Arial Black', 
            fontSize: 10, 
            fill : textColor,
            align : 'center'});
        rank.y = 10
        rank.x = 15;
        this.cont.addChild(rank);

        let suit = new PIXI.Text(`${Vars.suits[suitIndexProp]}s`, {
            fontFamily : 'Arial Black',
            fontSize: 10, 
            fill : textColor,
            align : 'center'});
        suit.x = 15;
        suit.y = 22;
        this.cont.addChild(suit)

        let icon = new PIXI.Sprite.from(`/bmps/${Vars.suits[suitIndexProp]}.png`)
        icon.scale.set(0.5)
        this.cont.addChild(icon);
        icon.x = cardBack.width - 75;
        if (Vars.suits[suitIndexProp] === 'club') icon.x = cardBack.width - 80;
        icon.y = cardBack.height - 100;

        
        this.cover = new PIXI.Sprite(PIXI.Texture.from('/bmps/cardBack.png'))
        
        this.cont.addChild(this.cover);
    }
    }

}
export default Card;