import VARS from '../utils/Vars.js';
const Card =  function() {
    return {
        rank: undefined,
        suit: undefined,
        color: undefined,
        _cont: new PIXI.Graphics(),
        build: function (rank, suitIndex) {
            this.rank = rank + 1;
            this.suit = VARS.build.suits[suitIndex];
            this.color = (this.build.suit === 'hearts' || this.build.suit === 'diamonds') ? "red" : "black" ;
            this._buildCard(rank, suitIndex);
            this.reveal(false);
        },
        setPivot: function (pivotObject) {
            this._cont.pivot = pivotObject;
        },
        getPosition: function() {
            return { x: this._cont.x, y: this._cont.y }
        },
        setPosition: function(positionObject) {
            this._cont.x = positionObject.x;
            this._cont.y = positionObject.y;
        },
        reveal: function (boolean) {
            this.cover.visible = !boolean;
        },
        addToGameBoard: function() {
            VARS.gameBoard.addChild(this._cont);
        },
        _buildCard: function (rankProp, suitIndexProp) {
            const cardBack = new PIXI.Graphics();
            cardBack.beginFill(0x000000);
            cardBack.drawRoundedRect(0, 0, VARS.build.cardWidth, VARS.build.cardHeight,3);
            cardBack.endFill();
            this._cont.addChild(cardBack)

            const graphics = new PIXI.Graphics();
            graphics.beginFill(0xFFFFFF);
            graphics.drawRoundedRect(1, 1, VARS.build.cardWidth - 2, VARS.build.cardHeight - 2, 3);
            graphics.endFill();
            this._cont.addChild(graphics)

            let textColor = this.color === "black" ? 0x000000 : 0xFF1010 ;

            let rank = new PIXI.Text(VARS.build.rank[rankProp], {
                fontFamily : 'Arial Black', 
                fontSize: 10, 
                fill : textColor,
                align : 'center'});
            rank.y = 10
            rank.x = 15;
            this._cont.addChild(rank);

            let suit = new PIXI.Text(`${VARS.build.suits[suitIndexProp]}s`, {
                fontFamily : 'Arial Black',
                fontSize: 10, 
                fill : textColor,
                align : 'center'});
            suit.x = 15;
            suit.y = 22;
            this._cont.addChild(suit)

            let icon = new PIXI.Sprite.from(`/bmps/${VARS.build.suits[suitIndexProp]}.png`)
            icon.scale.set(0.5)
            this._cont.addChild(icon);
            icon.x = cardBack.width - 75;
            if (VARS.build.suits[suitIndexProp] === 'club') icon.x = cardBack.width - 80;
            icon.y = cardBack.height - 100;

            
            this.cover = new PIXI.Sprite(PIXI.Texture.from('/bmps/cardBack.png'))
            
            this._cont.addChild(this.cover);
        }
    }

}
export default Card;