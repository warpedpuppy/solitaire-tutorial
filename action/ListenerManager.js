import DrawPileAction from './DrawPileAction.js';

const ListenerManager = {
    addFlip: function (card) {
        card.makeInteractive(true)
        card.getCont().on("pointerup", DrawPileAction.drawPileClickHandler.bind(DrawPileAction));
    },
    removeAllListeners (item) {
        item.makeInteractive(false);
        item.removeAllListeners();
    },
    addResetFlip: function (button) {
        button.visible = true;
        button.interactive = button.buttonMode = true;
        button.on("pointerup", DrawPileAction.resetDrawPileHandler.bind(DrawPileAction))
    },
    removeResetFlip: function (button) {
        button.visible = button.interactive = button.buttonMode = false;
        button.removeAllListeners();
    }
}

export default ListenerManager;